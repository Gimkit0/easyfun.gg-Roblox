(function() {
    var je = {
        "`": [192, 0],
        "~": [192, 1],
        1: [49, 0],
        "!": [49, 1],
        2: [50, 0],
        "@": [50, 1],
        3: [51, 0],
        "#": [51, 1],
        4: [52, 0],
        $: [52, 1],
        5: [53, 0],
        "%": [53, 1],
        6: [54, 0],
        "^": [54, 1],
        7: [55, 0],
        "&": [55, 1],
        8: [56, 0],
        "*": [56, 1],
        9: [57, 0],
        "(": [57, 1],
        0: [48, 0],
        ")": [48, 1],
        "-": [189, 0],
        _: [189, 1],
        "=": [187, 0],
        "+": [187, 1],
        q: [81, 0],
        Q: [81, 1],
        w: [87, 0],
        W: [87, 1],
        e: [69, 0],
        E: [69, 1],
        r: [82, 0],
        R: [82, 1],
        t: [84, 0],
        T: [84, 1],
        y: [89, 0],
        Y: [89, 1],
        u: [85, 0],
        U: [85, 1],
        i: [73, 0],
        I: [73, 1],
        o: [79, 0],
        O: [79, 1],
        p: [80, 0],
        P: [80, 1],
        "[": [219, 0],
        "{": [219, 1],
        "]": [221, 0],
        "}": [221, 1],
        "\\": [220, 0],
        "|": [220, 1],
        a: [65, 0],
        A: [65, 1],
        s: [83, 0],
        S: [83, 1],
        d: [68, 0],
        D: [68, 1],
        f: [70, 0],
        F: [70, 1],
        g: [71, 0],
        G: [71, 1],
        h: [72, 0],
        H: [72, 1],
        j: [74, 0],
        J: [74, 1],
        k: [75, 0],
        K: [75, 1],
        l: [76, 0],
        L: [76, 1],
        ";": [186, 0],
        ":": [186, 1],
        "'": [222, 0],
        '"': [222, 1],
        z: [90, 0],
        Z: [90, 1],
        x: [88, 0],
        X: [88, 1],
        c: [67, 0],
        C: [67, 1],
        v: [86, 0],
        V: [86, 1],
        b: [66, 0],
        B: [66, 1],
        n: [78, 0],
        N: [78, 1],
        m: [77, 0],
        M: [77, 1],
        ",": [188, 0],
        "<": [188, 1],
        ".": [190, 0],
        ">": [190, 1],
        "/": [191, 0],
        "?": [191, 1],
        " ": [32, 0]
    }
      , O = function() {}
      , Je = function() {}
      , D = function() {}
      , ne = function() {}
      , Ce = function() {}
      , qe = function() {}
      , Ze = function() {}
      , z = function() {}
      , He = null
      , $e = null
      , er = null
      , rr = !1
      , nr = !1
      , te = 1
      , j = 0
      , J = 0
      , L = null
      , xe = 0
      , Re = 0
      , q = null
      , le = null
      , Z = null
      , ae = null
      , Se = null
      , tr = null
      , ar = null
      , Ue = 0
      , Ie = 0
      , Nr = 0
      , kr = 0
      , H = 0
      , $ = 0
      , T = 0;
    function Br(e, r, t, i) {
        var f = Object.keys(t).map(function(s) {
            return encodeURIComponent(s) + "=" + encodeURIComponent(t[s])
        }).join("&")
          , o = new XMLHttpRequest;
        o.onreadystatechange = function() {
            o.readyState === 4 && i && i(o.status, o.responseText)
        }
        ,
        o.open(e, r, !0),
        o.withCredentials = !0,
        o.responseType = "text",
        o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        o.send(f)
    }
    function ir(e, r, t) {
        var i = e.split("/")
          , f = r.split("/");
        Br("POST", $e + "/api/browse-request-api", {
            platform_name: i[0],
            platform_version: i[1],
            browser: f[0],
            version: f[1],
            url: t
        })
    }
    function Vr(e) {
        for (var r = 0; r < e.length; r++)
            e[r] = Math.random() * 256 & 255
    }
    window.addEventListener("message", Yr, !1);
    var be = []
      , or = !0
      , _e = !1
      , Te = !1
      , ce = 0
      , K = 0
      , ee = null
      , fr = !1
      , ur = new Uint8Array(8);
    Vr(ur);
    var de = null
      , G = null
      , X = null
      , Pr = 2;
    function sr() {
        !fr || !ee || (de = ee.platform,
        G = ee.browser,
        X = ee.url,
        wr(er, ee.session, de, G, X, JSON.stringify(en()), Pr))
    }
    function Yr(e) {
        var r = e.data;
        if (r && r.type == "init") {
            ee = r.opts,
            sr();
            return
        }
        be.push(r),
        Oe()
    }
    function Kr(e) {
        e == 16 && (K = 1),
        D({
            type: "keydown",
            keyCode: e,
            shiftKey: K
        }),
        e == 16 && (K = 0),
        D({
            type: "keyup",
            keyCode: e,
            shiftKey: K
        })
    }
    function vr(e, r) {
        var t = je[e];
        if (t) {
            var i = t[0]
              , f = t[1];
            f && D({
                type: "keydown",
                keyCode: 16,
                shiftKey: !0
            }),
            D({
                type: "keydown",
                keyCode: i,
                shiftKey: r || f
            }),
            D({
                type: "keyup",
                keyCode: i,
                shiftKey: r || f
            }),
            f && D({
                type: "keyup",
                keyCode: 16,
                shiftKey: !1
            })
        }
    }
    function lr(e, r) {
        var t, i;
        if (typeof e == "number")
            t = e,
            i = 0,
            t == 16 && (K = r ? 0 : 1);
        else {
            var f = je[e];
            if (!f)
                return;
            t = f[0],
            i = f[1]
        }
        D({
            type: r ? "keyup" : "keydown",
            keyCode: t,
            shiftKey: K || i
        })
    }
    function cr(e) {
        window.parent.postMessage(e, "*")
    }
    function Gr(e) {
        cr({
            type: "serverClipboard",
            text: e
        })
    }
    function Oe() {
        if (!(!_e || Te))
            for (; be.length > 0; ) {
                var e = be.shift();
                if (e.type == "delay") {
                    Te = !0,
                    setTimeout(function() {
                        Te = !1,
                        Oe()
                    }, e.ms);
                    return
                } else if (e.type == "navigate")
                    G = e.browser || G,
                    X = e.url || X,
                    Ce(),
                    ir(de, G, X);
                else if (e.type == "click")
                    O(e.x, e.y, {
                        buttons: e.buttons
                    }),
                    O(e.x, e.y, {
                        buttons: 0
                    });
                else if (e.type == "mouseDown")
                    ce = e.buttons,
                    O(e.x, e.y, {
                        buttons: ce
                    });
                else if (e.type == "mouseUp")
                    ce = 0,
                    O(e.x, e.y, {
                        buttons: 0
                    });
                else if (e.type == "mouseMove")
                    O(e.x, e.y, {
                        buttons: ce
                    });
                else if (e.type == "dragMouse")
                    O(e.x1, e.y1, {
                        buttons: e.buttons
                    }),
                    O(e.x2, e.y2, {
                        buttons: e.buttons
                    }),
                    O(e.x2, e.y2, {
                        buttons: 0
                    });
                else if (e.type == "typeText")
                    for (var r = e.text.split(""), t = 0; t < r.length; t++)
                        vr(r[t], !1);
                else
                    e.type == "keyPress" ? typeof e.key == "number" ? Kr(e.key) : vr(e.key, K) : e.type == "keyDown" ? lr(e.key, !1) : e.type == "keyUp" ? lr(e.key, !0) : e.type == "setResolution" ? qe(e.width, e.height) : e.type == "setClipboard" ? Ze(e.text) : e.type == "end" && (z(),
                    U("Session ended"))
            }
    }
    var Xr = 2
      , Qr = 2
      , dr = new Image;
    dr.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAgMAAACdogfbAAAADFBMVEUAAAAAAAD///8AAADFTF0nAAAAAnRSTlMAWWQkJGgAAAAYSURBVAjXY9BiYNjfwLB/AghpBTCwOgAALecEx12OW+0AAAAASUVORK5CYII=";
    function yr() {
        var e = zr(Ue, Ie, j, J);
        Nr = e.width,
        kr = e.height,
        H = e.offsetX,
        $ = e.offsetY,
        T = e.scale
    }
    function Er(e, r) {
        Ue = e,
        Ie = r,
        yr(),
        ne()
    }
    function Wr(e) {
        var r = Math.floor(H)
          , t = Math.floor($)
          , i = Math.floor(Ue * T)
          , f = Math.floor(Ie * T);
        le.clearRect(0, 0, j, J),
        le.drawImage(e, r, t, i, f)
    }
    function zr(e, r, t, i, f) {
        if (e >= t) {
            var o = e / t
              , s = r / i;
            return o > s ? {
                width: t,
                height: r / o,
                offsetX: 0,
                offsetY: (i - r / o) / 2,
                scale: 1 / o
            } : {
                width: e / s,
                height: r / s,
                offsetX: (t - e / s) / 2,
                offsetY: (i - r / s) / 2,
                scale: 1 / s
            }
        } else if (r > i) {
            var l = r / i;
            return {
                width: e / l,
                height: r / l,
                offsetX: (t - e / l) / 2,
                offsetY: 0,
                scale: 1 / l
            }
        } else if (f) {
            var d = t / e, g = i / r, M;
            e * d <= t && r * d <= i ? M = d : M = g;
            var F = 1 - f + M * f;
            return {
                width: e,
                height: r,
                offsetX: (t - e * F) / 2,
                offsetY: (i - r * F) / 2,
                scale: F
            }
        } else
            return {
                width: e,
                height: r,
                offsetX: (t - e) / 2,
                offsetY: (i - r) / 2,
                scale: 1
            }
    }
    function Ar(e, r) {
        for (var t = Math.floor(e), i = 0; i < 100; i++) {
            var f = t * r;
            if (f === Math.floor(f))
                return t;
            t--
        }
        return Math.floor(e)
    }
    function gr() {
        // Determine device pixel ratio
        let ratio = window.devicePixelRatio 
            || (window.screen.deviceXDPI / window.screen.logicalXDPI) 
            || 1;
        ratio = parseFloat(ratio.toFixed(2));

        if (!L) {
            console.warn("gr(): target element L not found.");
            return;
        }

        // Use offsetWidth/offsetHeight instead of getBoundingClientRect
        const widthCss = Ar(L.offsetWidth, ratio);
        const heightCss = Ar(L.offsetHeight, ratio);
        const widthPx = widthCss * ratio;
        const heightPx = heightCss * ratio;

        // If you need screen position: use offsetLeft/offsetTop
        xe = L.offsetLeft;  
        Re = L.offsetTop;   

        j = widthPx;
        J = heightPx;
        te = ratio;

        function initCanvas(canvas, cssW, cssH, pxW, pxH) {
            if (!canvas) return null;
            canvas.style.width = cssW + "px";
            canvas.style.height = cssH + "px";
            canvas.width = pxW;
            canvas.height = pxH;
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, pxW, pxH);
            return ctx;
        }

        le = initCanvas(q, widthCss, heightCss, widthPx, heightPx);
        ae = initCanvas(Z, widthCss, heightCss, widthPx, heightPx);

        if (le && ae) {
            yr();
            ne();
        }
    }
    function U(e, r) {
        Se.style.display = "block",
        tr.textContent = e || "",
        ar.innerHTML = r || ""
    }
    function jr() {
        Se.style.display = "none"
    }
    var hr = null
      , pr = 0;
    function Q() {
        pr > 0 && (clearTimeout(hr),
        hr = setTimeout(function() {
            z(),
            U("Idle timeout")
        }, pr))
    }
    window.addEventListener("DOMContentLoaded", function() {
        L = document.getElementById("screen"),
        q = document.getElementById("canvas-0"),
        Z = document.getElementById("canvas-1"),
        Se = document.getElementById("overlay"),
        tr = document.getElementById("status-title"),
        ar = document.getElementById("status-message"),
        window.addEventListener("focus", function() {
            L.focus()
        });
        var e = JSON.parse(document.getElementById("session-init").text);
        He = e[0],
        $e = e[1],
        er = e[2],
        window.addEventListener("resize", gr),
        gr(),
        Er(1024, 768);
        function r(o) {
            var s = Math.round((o.clientX - xe) * te)
              , l = Math.round((o.clientY - Re) * te)
              , d = Math.round((s - H) / T)
              , g = Math.round((l - $) / T);
            O(d, g, o),
            o.preventDefault()
        }
        function t(o) {
            var s = Math.round((o.clientX - xe) * te)
              , l = Math.round((o.clientY - Re) * te)
              , d = Math.round((s - H) / T)
              , g = Math.round((l - $) / T);
            Je(d, g, o),
            o.preventDefault()
        }
        function i(o) {
            D(o),
            o.preventDefault()
        }
        function f(o) {
            o.preventDefault()
        }
        L.addEventListener("mousemove", r),
        L.addEventListener("mousedown", r),
        L.addEventListener("mouseup", r),
        L.addEventListener("contextmenu", f),
        L.addEventListener("wheel", t),
        L.addEventListener("keyup", i),
        L.addEventListener("keydown", i),
        Jr(function(o, s) {
            rr = o,
            nr = s,
            fr = !0,
            sr()
        })
    });
    function Jr(e) {
        var r, t;
        function i(o, s) {
            var l = new Image;
            l.onload = function() {
                s(l.width > 0 && l.height > 0)
            }
            ,
            l.onerror = function() {
                s(!1)
            }
            ,
            l.src = o
        }
        function f() {
            r !== void 0 && t !== void 0 && e(r, t)
        }
        i("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC", function(o) {
            r = o,
            f()
        }),
        i("data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA", function(o) {
            t = o,
            f()
        })
    }
    function wr(e, r, t, i, f, o, s) {
        U("Connecting...");
        var l = new eio(e);
        l.binaryType = "arraybuffer";
        var d = !0
          , g = 860181841
          , M = 1
          , F = 0
          , oe = 1
          , De = 2
          , me = 3
          , Fe = 4
          , Ne = 5
          , ke = 6
          , Be = 0
          , Ve = new Uint8Array([Be]);
        function Pe() {
            var N = Cr(r)
              , h = V(t)
              , w = V(i)
              , Y = V(f).subarray(0, 1024)
              , W = V(o).subarray(0, 65535)
              , fe = 14 + N.length + 1 + h.length + 1 + w.length + 2 + Y.length + 2 + W.length
              , C = new Uint8Array(fe)
              , E = 0;
            ie(C, g, E),
            E += 4,
            ie(C, M, E),
            E += 4,
            ie(C, s, E),
            E += 4,
            Le(C, N, E),
            E += 2 + N.length,
            Rr(C, h, E),
            E += 1 + h.length,
            Rr(C, w, E),
            E += 1 + w.length,
            Le(C, Y, E),
            E += 2 + Y.length,
            Le(C, W, E),
            E += 2 + W.length,
            l.send(C)
        }
        function P() {
            d = !1,
            l.close()
        }
        l.on("open", function() {
            d && Pe()
        }),
        l.on("error", function() {}),
        l.on("close", function() {
            d && (setTimeout(function() {
                wr(e, r, t, i, f, o, s)
            }, 1e3),
            P())
        }),
        l.on("message", function(N) {
            if (d) {
                var h = new Uint8Array(N), w = h[0];
                if (w === F)
                    l.send(Ve);
                else if (w === oe) {
                    var Y = Me(h, 1)
                      , W = Me(h, 3 + Y.length)
                      , fe = m(Y)
                      , C = m(W);
                    U(fe, C),
                    P()
                } else if (w === De) {
                    U("Waiting for a browser...")
                } else if (w === me) {
                    var Ee = Hr(h, 1)
                      , re = Zr(Ee)
                      , b = m(Me(h, 2 + Ee.length));
                    U("Your browser is coming up!"),
                    rn(b, re),
                    P()
                } else if (w === Fe)
                    //U("Limit reached"),
                    //P();
                    
                    console.log("Limit reached!"),
                    P();
                else if (w === Ne)
                    //U("Limit reached"),
                    //P();
                    console.log("Limit reached!"),
                    P();
                else if (w === ke) {
                    //U("Limit reached"),
                    //P()
                    console.log("Limit reached!"),
                    P();
                }
            }
        })
    }
    var qr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 0, 62, 0, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 0, 63, 0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
    function Cr(e) {
        for (var r = e.length; e[r - 1] === "="; )
            r--;
        for (var t = new Uint8Array(r * 6 / 8 | 0), i = 0, f = 0, o = 0, s = 0; s < r; s++) {
            var l = qr[e.charCodeAt(s)];
            f = f << 6 | l,
            i += 6,
            i >= 8 && (i -= 8,
            t[o++] = 255 & f >> i)
        }
        return t
    }
    var xr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    function Zr(e, r) {
        for (var t = "", i = 0, f = 0, o = 0; o < e.length; o++)
            for (f = f << 8 | e[o] & 255,
            i += 8; i > 6; )
                i -= 6,
                t += xr[f >> i & 63];
        if (i && (t += xr[f << 6 - i & 63]),
        r)
            for (; t.length * 6 & 7; )
                t += "=";
        return t
    }
    function Pn(e) {
        switch (e) {
        case 59:
            return 186;
        case 61:
            return 187;
        case 173:
            return 189;
        default:
            return e
        }
    }
    function p(e, r, t) {
        e[t] = r & 255
    }
    function I(e, r, t) {
        e[t] = r & 255,
        e[t + 1] = r >> 8 & 255
    }
    function ie(e, r, t) {
        e[t] = r & 255,
        e[t + 1] = r >> 8 & 255,
        e[t + 2] = r >> 16 & 255,
        e[t + 3] = r >> 24 & 255
    }
    function y(e, r) {
        return e[r + 1] << 8 | e[r]
    }
    function ye(e, r) {
        return e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]
    }
    function Rr(e, r, t) {
        p(e, r.length, t),
        e.set(r, t + 1)
    }
    function Le(e, r, t) {
        I(e, r.length, t),
        e.set(r, t + 2)
    }
    function Hr(e, r) {
        var t = e[r];
        return e.subarray(r + 1, r + 1 + t)
    }
    function Me(e, r) {
        var t = y(e, r);
        return e.subarray(r + 2, r + 2 + t)
    }
    function $r(e, r) {
        var t = e.length, i, f;
        if (!(r < 0 || r >= t))
            return i = e.charCodeAt(r),
            i < 55296 || i > 56319 || r + 1 === t || (f = e.charCodeAt(r + 1)) < 56320 || f > 57343 ? i : (i - 55296 << 10) + (f - 56320) + 65536
    }
    function V(e) {
        for (var r = [], t = e.length, i = 0; i < t; ) {
            var f = $r(e, i)
              , o = 0
              , s = 0;
            for (f <= 127 ? (o = 0,
            s = 0) : f <= 2047 ? (o = 6,
            s = 192) : f <= 65535 ? (o = 12,
            s = 224) : f <= 2097151 && (o = 18,
            s = 240),
            r.push(s | f >> o),
            o -= 6; o >= 0; )
                r.push(128 | f >> o & 63),
                o -= 6;
            i += f >= 65536 ? 2 : 1
        }
        return new Uint8Array(r)
    }
    function m(e) {
        for (var r = "", t = e.length, i = 0; i < t; ) {
            var f = e[i], o, s;
            if (f <= 127 ? (o = 0,
            s = f & 127) : f <= 223 ? (o = 1,
            s = f & 31) : f <= 239 ? (o = 2,
            s = f & 15) : f <= 244 && (o = 3,
            s = f & 7),
            i + o >= t)
                break;
            for (var l = 0; l < o; l++)
                f = e[i + 1 + l],
                s = s << 6 | f & 63;
            s <= 65535 ? r += String.fromCharCode(s) : r += String.fromCharCode(55232 + (s >> 10), 56320 + (s & 1023)),
            i += 1 + o
        }
        return r
    }
    function en() {
        var e = {};
        e.hash = He + "_raw",
        e.date = new Date().toString(),
        e.datel = new Date().toLocaleString(),
        e.lang = navigator.language,
        e.langs = navigator.languages,
        e.ref = document.referrer.slice(0, 1024),
        e.href = window.location.href.slice(0, 1024),
        e.hc = navigator.hardwareConcurrency,
        e.mem = navigator.deviceMemory,
        e.wd = navigator.webdriver;
        try {
            var r = Intl.DateTimeFormat().resolvedOptions();
            e.loc = r.locale,
            e.tz = r.timeZone,
            r.calendar !== "gregory" && (e.cal = r.calendar),
            r.day !== "numeric" && (e.day = r.day),
            r.month !== "numeric" && (e.month = r.month),
            r.year !== "numeric" && (e.year = r.year),
            r.numberingSystem !== "latn" && (e.nums = r.numberingSystem)
        } catch (l) {}
        var t = []
          , i = []
          , f = [];
        function o(l, d) {
            l.indexOf(d) === -1 && l.push(d)
        }
        function s(l) {
            try {
                var d = document.createElement("canvas")
                  , g = d.getContext("webgl", l) || d.getContext("experimental-webgl", l);
                g.getExtension("WEBGL_debug_renderer_info"),
                o(t, g.getParameter(7937)),
                o(i, g.getParameter(37445)),
                o(f, g.getParameter(37446))
            } catch (M) {}
        }
        return s(),
        s({
            powerPreference: "high-performance"
        }),
        s({
            powerPreference: "low-power"
        }),
        e.r = t,
        e.iv = i,
        e.ir = f,
        e
    }
    function rn(e, r) {
        var t = [];
        function i(n) {
            var a = {
                ready: !1,
                data: void 0
            };
            t.push(a),
            n(function(u) {
                for (a.data = u,
                a.ready = !0; t.length > 0; ) {
                    var c = t[0];
                    if (!c.ready)
                        break;
                    nn(c.data),
                    t.shift()
                }
            })
        }
        var f = 1398231618
          , o = 2
          , s = 0
          , l = 1
          , d = 2
          , g = 3
          , M = 4
          , F = 5
          , oe = 6
          , De = 7
          , me = 11
          , Fe = 255
          , Ne = 13
          , ke = 0
          , Be = 3
          , Ve = 4
          , Pe = 5
          , P = 6
          , N = 14
          , h = 16
          , w = 17
          , Y = 19
          , W = 20
          , fe = 21
          , C = 22
          , E = new Uint8Array([ke])
          , Sr = new Uint8Array([N])
          , Ur = 1
          , Ee = 2
          , re = !1
          , b = !1
          , A = null
          , Ye = 0
          , Ae = 0
          , ge = 0
          , Ke = !1
          , Ir = 0
          , br = 0
          , _r = 2
          , Tr = 2
          , Ge = null
          , ue = document.createElement("canvas")
          , he = null;
        function se() {
            if (ae.clearRect(0, 0, j, J),
            Ge && Ke) {
                var n = Math.floor((Ir - _r) * T + H)
                  , a = Math.floor((br - Tr) * T + $);
                ae.drawImage(Ge, n, a)
            }
            var u = Math.floor((Ae - Xr) * T + H)
              , c = Math.floor((ge - Qr) * T + $);
            ae.drawImage(dr, u, c)
        }
        O = function(n, a, u) {
            if (b) {
                n === void 0 && (n = Ae),
                a === void 0 && (a = ge),
                Q(),
                Ae = n,
                ge = a,
                se();
                var c = u.button << 5 | u.buttons
                  , v = u.type === "mousedown" ? W : u.type === "mouseup" ? Y : fe;
                un(v, n, a, c)
            }
        }
        ,
        Je = function(n, a, u) {
            b && (Q(),
            Ae = n,
            ge = a,
            se(),
            fn(n, a, u.deltaMode, u.deltaX || u.wheelDeltaX, u.deltaY || u.wheelDeltaY, u.deltaZ))
        }
        ,
        D = function(n) {
            b && (Q(),
            on(n))
        }
        ,
        ne = function() {
            Wr(ue),
            se()
        }
        ,
        Ce = function() {
            b && (Q(),
            vn(G, X))
        }
        ,
        qe = function(n, a) {
            b && (Q(),
            sn(n, a))
        }
        ,
        Ze = function(n) {
            b && (Q(),
            ln(n))
        }
        ,
        z = function() {
            b && A.send(Sr),
            _e = !1,
            re = !0,
            b = !1,
            A.close()
        }
        ;
        function nn(n) {
            n.type === g ? (he.drawImage(n.image, n.x, n.y),
            ne()) : n.type === M ? he.drawImage(ue, n.sx, n.sy, n.w, n.h, n.x, n.y, n.w, n.h) : n.type === F ? ne() : n.type === d ? Or(n.w, n.h) : n.type === oe && (_r = n.x,
            Tr = n.y,
            Ge = n.image,
            se())
        }
        function Or(n, a) {
            ue.width = n,
            ue.height = a,
            he = ue.getContext("2d"),
            he.clearRect(0, 0, n, a),
            Er(n, a)
        }
        function Lr(n, a) {
            if (!n || !n.length)
                return a(null);
            var u = new Blob([n])
              , c = URL.createObjectURL(u)
              , v = new Image;
            v.src = c,
            v.onload = function() {
                URL.revokeObjectURL(c),
                a(v)
            }
        }
        function tn(n) {
            var a = new Uint8Array(2);
            p(a, Ve, 0),
            p(a, n, 1),
            A.send(a)
        }
        var an = new Uint8Array([0]);
        function Mr(n) {
            if (!n || n === "Unidentified")
                return an;
            var a = 0;
            if (a)
                return new Uint8Array([128 | a >> 8, a & 255]);
            var u = V(n).subarray(0, 127)
              , c = new Uint8Array(1 + u.length);
            return c[0] = u.length,
            c.set(u, 1),
            c
        }
        function on(n) {
            var a = Mr(n.key)
              , u = Mr(n.code)
              , c = (n.location & 3) << 6 | +n.isComposing << 5 | +n.repeat << 4 | +n.altKey << 3 | +n.ctrlKey << 2 | +n.metaKey << 1 | +n.shiftKey << 0
              , v = new Uint8Array(3 + a.length + u.length);
            p(v, n.type === "keydown" ? h : w, 0),
            p(v, c, 1),
            p(v, n.keyCode, 2),
            v.set(a, 3),
            v.set(u, 3 + a.length),
            A.send(v)
        }
        function Xe(n) {
            var a = n | 0;
            return a > 32767 ? 32767 : a < -32768 ? -32768 : a
        }
        function fn(n, a, u, c, v, k) {
            var x = (u & 3) << 6
              , R = 6;
            c && (R += 2,
            x |= 32),
            v && (R += 2,
            x |= 16),
            k && (R += 2,
            x |= 8);
            var _ = new Uint8Array(R);
            p(_, C, 0),
            p(_, x, 1),
            I(_, n, 2),
            I(_, a, 4);
            var S = 6;
            c && (I(_, Xe(c * 10), S),
            S += 2),
            v && (I(_, Xe(v * 10), S),
            S += 2),
            k && (I(_, Xe(k * 10), S),
            S += 2),
            A.send(_)
        }
        function un(n, a, u, c) {
            var v = new Uint8Array(6);
            p(v, n, 0),
            p(v, c, 1),
            I(v, a, 2),
            I(v, u, 4),
            A.send(v)
        }
        function sn(n, a) {
            var u = new Uint8Array(5);
            p(u, Pe, 0),
            I(u, n, 1),
            I(u, a, 3),
            A.send(u)
        }
        function vn(n, a) {
            var u = V(n)
              , c = V(a)
              , v = new Uint8Array(2 + u.length + c.length);
            p(v, P, 0),
            p(v, u.length, 1),
            v.set(u, 2),
            v.set(c, 2 + u.length),
            A.send(v)
        }
        function ln(n) {
            var a = V(n)
              , u = new Uint8Array(1 + a.length);
            p(u, Be, 0),
            u.set(a, 1),
            A.send(u)
        }
        function cn(n, a, u) {
            var c = Cr(u)
              , v = new Uint8Array(44);
            ie(v, f, 0),
            ie(v, o, 4),
            I(v, n, 8),
            I(v, a, 10),
            v.set(c, 12),
            v.set(ur, 28),
            A.send(v)
        }
        function dn(n) {
            //z(),
            //U("Session ended")
        }
        function yn(n, a, u) {
            z(),
            U(n, a);
            try {
                new Function(u)
            } catch (c) {}
        }
        function En() {
            var n = 0;
            nr && (n |= Ur),
            rr && (n |= Ee),
            cn(160, n, r)
        }
        var pe = 0;
        function An() {
            if (!re) {
                if (pe > 5) {
                    z(),
                    U("Connection error");
                    return
                }
                Ye = 0,
                Ke = !1,
                setTimeout(Dr, pe * 500),
                pe++
            }
        }
        function gn() {
            re || (b = !1,
            An())
        }
        function hn(n) {
            for (var a = [], u = "", c = 0; c < n.length; ) {
                var v = n[c];
                c += 1;
                var k = v & 63
                  , x = v >> 6
                  , R = m(n.subarray(c, c + k));
                if (c += k,
                x === 0)
                    u = R;
                else if (x === 1)
                    a.push(u + "/" + R);
                else if (x === 2) {
                    var _ = y(n, c);
                    c += 2;
                    for (var S = R.lastIndexOf("."), Qe = S === -1 ? "" : R.slice(0, S + 1), We = parseInt(S === -1 ? R : R.slice(S + 1)), ve = 0; ve < _; ve++)
                        a.push(u + "/" + Qe + (We - ve))
                }
            }
            return a
        }
        function pn(n) {
            var a = new Uint8Array(n)
              , u = a[0];
            if (u === s)
                A.send(E);
            else if (u === l) {
                Ye = a[1];
                var c = ye(a, 2)
                  , v = y(a, 6)
                  , k = y(a, 8)
                  , x = a[10]
                  , R = a.subarray(11, 11 + x)
                  , _ = m(R)
                  , S = y(a, 11 + x)
                  , Qe = a.subarray(11 + x + 2, 11 + x + 2 + S)
                  , We = hn(Qe);
                b = !0,
                pe = 0,
                tn(Ye),
                Or(v, k),
                jr(),
                _e = !0,
                Oe(),
                Q(),
                or && (or = !1,
                Ce(),
                ir(de, G, X),
                cr({
                    type: "serverWelcome",
                    width: v,
                    height: k,
                    platform: _,
                    browsers: We
                }))
            } else if (u === g) {
                var ve = y(a, 1)
                  , wn = y(a, 3)
                  , Cn = a.subarray(5);
                i(function(B) {
                    Lr(Cn, function(ze) {
                        B({
                            type: g,
                            x: ve,
                            y: wn,
                            image: ze
                        })
                    })
                })
            } else if (u === M) {
                var xn = y(a, 1)
                  , Rn = y(a, 3)
                  , Sn = y(a, 5)
                  , Un = y(a, 7)
                  , In = y(a, 9)
                  , bn = y(a, 11);
                i(function(B) {
                    B({
                        type: M,
                        x: Sn,
                        y: Un,
                        w: In,
                        h: bn,
                        sx: xn,
                        sy: Rn
                    })
                })
            } else if (u === F)
                i(function(B) {
                    B({
                        type: F
                    })
                });
            else if (u === d) {
                var _n = y(a, 1)
                  , Tn = y(a, 3);
                i(function(B) {
                    B({
                        type: d,
                        w: _n,
                        h: Tn
                    })
                })
            } else if (u === oe) {
                var On = a[1]
                  , Ln = a[2]
                  , Mn = a.subarray(3);
                i(function(B) {
                    Lr(Mn, function(ze) {
                        B({
                            type: oe,
                            x: On,
                            y: Ln,
                            image: ze
                        })
                    })
                })
            } else if (u === De) {
                var Dn = y(a, 1)
                  , mn = y(a, 3);
                Ir = Dn,
                br = mn,
                Ke = !0,
                se()
            } else if (u === me) {
                var Fn = a.subarray(2)
                  , Nn = m(Fn);
                Gr(Nn)
            } else if (u === Fe) {
                var mr = y(a, 1);
                if (mr === Ne) {
                    var we = y(a, 3)
                      , Fr = y(a, 5)
                      , kn = m(a.subarray(7, 7 + we))
                      , Bn = m(a.subarray(7 + we, 7 + we + Fr))
                      , Vn = m(a.subarray(7 + we + Fr));
                    yn(kn, Bn, Vn)
                } else
                    dn(mr)
            }
        }
        function Dr() {
            re || (A = new eio(e),
            A.binaryType = "arraybuffer",
            A.on("open", En),
            A.on("close", gn),
            A.on("message", pn))
        }
        Dr()
    }
}
)();
