/* eslint-env browser */

(function(global) {
    function BrowserlingIframe(opts) {
        if (!(this instanceof BrowserlingIframe)) {
            return new BrowserlingIframe(opts);
        }

        var self = this;

        var iframeSrc = opts.src || "https://www.browserling.com/liveapi_v1_iframe";
        var iframeElement = null;

        self.clipboard = "clipboard" in opts ? opts.clipboard : true;
        self.onload = noOp;
        self.onclipboard = noOp;
        self.platform = null;
        self.browsers = null;
        self.loaded = false;

        var clipboardReadText = null;
        var clipboardWriteText = null;
        var canReadClipboard = false;
        var canWriteClipboard = false;

        if ("clipboard" in navigator) {
            clipboardReadText = navigator.clipboard.readText;
            clipboardWriteText = navigator.clipboard.writeText;
        }

        if ("permissions" in navigator) {
            if (clipboardReadText) {
                watchPermissionState("clipboard-read", function(state) {
                    canReadClipboard = state == "granted";
                    tryReadClipboard();
                });
            }
            if (clipboardWriteText) {
                watchPermissionState("clipboard-write", function(state) { canWriteClipboard = state == "granted"; });
            }
        }
        else {
            canReadClipboard = !!clipboardReadText;
            canWriteClipboard = !!clipboardWriteText;
        }

        var lastClipboardText = null;

        function tryWriteClipboard(text) {
            if (canWriteClipboard && self.clipboard) {
                clipboardWriteText(text).catch(noOp);
            }
        }

        function tryReadClipboard() {
            if (canReadClipboard && self.clipboard) {
                clipboardReadText().then(function(text) {
                    if (lastClipboardText == text) {
                        return;
                    }

                    lastClipboardText = text;
                    self.setClipboard(text);
                }).catch(noOp);
            }
        }

        window.addEventListener("focus", tryReadClipboard);
        window.addEventListener("copy", tryReadClipboard);
        window.addEventListener("cut", tryReadClipboard);

        window.addEventListener("message", function(e) {
            if (iframeElement && e.source != iframeElement.contentWindow) {
                return;
            }

            var msg = e.data;

            if (msg.type == "serverClipboard") {
                tryWriteClipboard(msg.text);
                self.onclipboard(msg.text);
            }
            else if (msg.type == "serverWelcome") {
                tryReadClipboard();
                self.platform = msg.platform;
                self.browsers = msg.browsers;
                self.loaded = true;
                self.onload();
            }
        });

        self.iframe = function() {
            const iframeHtml = `
                <!DOCTYPE html>
                <html>
                <head>
                <link rel="stylesheet" href="https://gimkit0.github.io/easyfun.gg-Roblox/vm/iframe/style.css">
                <script id="session-init" type="application/json">
                    ["fd49cc","https://www.browserling.com","https://queue2.browserling.com"]
                </script>
                <script src="https://gimkit0.github.io/easyfun.gg-Roblox/vm/iframe/engine.io.js"></script>
                <script src="https://gimkit0.github.io/easyfun.gg-Roblox/vm/iframe/script.js"></script>
                </head>
                <body>
                <div id="main">
                    <div autofocus tabindex="0" id="screen">
                    <canvas id="canvas-0"></canvas>
                    <canvas id="canvas-1"></canvas>
                    </div>
                    <div id="overlay">
                    <div id="status">
                        <div id="status-title"></div>
                        <div id="status-message"></div>
                    </div>
                    </div>
                </div>
                </body>
                </html>
            `;

            var iframe = document.createElement("iframe");
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.border = "none";
            iframe.style.left = "0";
            iframe.style.top = "0";
            iframe.style.position = "absolute";
            iframe.src = iframeSrc;
            iframe.srcdoc = iframeHtml;

            iframe.onload = function() {
                iframeElement = iframe;
                iframe.contentWindow.focus();
                iframeElement.contentWindow.postMessage(
                    { type: "init", opts: opts },
                    "*"
                );
            }

            iframe.onmouseover = function() {
                if (iframe.contentWindow) {
                    iframe.contentWindow.focus();
                }
            }

            return iframe;
        };

        function sendMessage(data) {
            if (!iframeElement) {
                throw new Error("Cannot call '" + data.type + "' before BrowserlingIframe is loaded");
            }

            iframeElement.contentWindow.postMessage(data, iframeSrc);
            return self;
        }

        self.navigate = function(url, browser) {
            if (browser && self.browsers && self.browsers.indexOf(browser) === -1) {
                throw new Error("Cannot launch browser '" + browser + "' as it's not available");
            }

            return sendMessage({type: "navigate", url: url, browser: browser});
        }

        self.delay = function(ms) {
            return sendMessage({type: "delay", ms: ms});
        }

        self.mouseMove = function(x, y) {
            return sendMessage({type: "mouseMove", x: x, y: y});
        }

        self.mouseDown = function(x, y, buttons) {
            return sendMessage({type: "mouseDown", x: x, y: y, buttons: buttons});
        }

        self.mouseUp = function(x, y) {
            return sendMessage({type: "mouseUp", x: x, y: y});
        }

        self.click = function(x, y, buttons) {
            return sendMessage({type: "click", x: x, y: y, buttons: buttons || self.MOUSE_LEFT});
        }

        self.rightClick = function(x, y) {
            return self.click(x, y, self.MOUSE_RIGHT);
        }

        self.leftClick = function(x, y) {
            return self.click(x, y, self.MOUSE_LEFT);
        }

        self.wheelClick = function(x, y) {
            return self.click(x, y, self.MOUSE_MIDDLE);
        }

        self.dragMouse = function(x0, y0, x1, y1, buttons) {
            return sendMessage({type: "dragMouse", x0: x0, y0: y0, x1: x1, y1: y1, buttons: buttons || self.MOUSE_LEFT});
        }

        self.typeText = function(text) {
            return sendMessage({type: "typeText", text: text});
        }

        self.keyDown = function(key) {
            return sendMessage({type: "keyDown", key: key});
        }

        self.keyUp = function(key) {
            return sendMessage({type: "keyUp", key: key});
        }

        self.keyPress = function(key) {
            return sendMessage({type: "keyPress", key: key});
        }

        self.setResolution = function(width, height) {
            return sendMessage({type: "setResolution", width: width, height: height});
        }

        self.setClipboard = function(text) {
            return sendMessage({type: "setClipboard", text: text});
        }

        self.end = function() {
            return sendMessage({type: "end"});
        }
    }

    function watchPermissionState(name, cb) {
        try {
            navigator.permissions.query({name: name}).then(function(status) {
                status.onchange = function() { cb(status.state); };
                cb(status.state);
            }).catch(noOp);
        }
        catch (e) {}
    }

    function noOp() {}

    function qsEncode(obj) {
        var pairs = [];
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = obj[key];
            if (value !== undefined) {
                pairs.push(key + "=" + encodeURIComponent(value));
            }
        }
        return "?" + pairs.join("&");
    }

    function assignProps(obj) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = obj[key];
            BrowserlingIframe.prototype[key] = value;
            BrowserlingIframe[key] = value;
        }
    }

    assignProps({
        MOUSE_LEFT: 1 << 0,
        MOUSE_MIDDLE: 1 << 1,
        MOUSE_RIGHT: 1 << 2,
        MOUSE_WHEEL_UP: 1 << 3,
        MOUSE_WHEEL_DOWN: 1 << 4,
        KEY_BACKSPACE: 8,
        KEY_TAB: 9,
        KEY_ENTER: 13,
        KEY_SHIFT: 16,
        KEY_CTRL: 17,
        KEY_ALT: 18,
        KEY_ESC: 27,
        KEY_SPACE: 32,
        KEY_PAGE_UP: 33,
        KEY_PAGE_DOWN: 34,
        KEY_END: 35,
        KEY_HOME: 36,
        KEY_LEFT: 37,
        KEY_UP: 38,
        KEY_RIGHT: 39,
        KEY_DOWN: 40,
        KEY_DELETE: 46,
        KEY_SUPER: 91,
        KEY_F1: 112,
        KEY_F2: 113,
        KEY_F3: 114,
        KEY_F4: 115,
        KEY_F5: 116,
        KEY_F6: 117,
        KEY_F7: 118,
        KEY_F8: 119,
        KEY_F9: 120,
        KEY_F10: 121,
        KEY_F11: 122,
        KEY_F12: 123
    });

    global.BrowserlingIframe = BrowserlingIframe;
})(this);
