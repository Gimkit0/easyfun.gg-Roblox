var yn = Object.defineProperty;
var At = Object.getOwnPropertySymbols;
var Gt = Object.prototype.hasOwnProperty
  , $t = Object.prototype.propertyIsEnumerable;
var Pt = (e, t, n) => t in e ? yn(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , bt = (e, t) => {
    for (var n in t || (t = {}))
        Gt.call(t, n) && Pt(e, n, t[n]);
    if (At)
        for (var n of At(t))
            $t.call(t, n) && Pt(e, n, t[n]);
    return e
}
;
var Xt = (e, t) => {
    var n = {};
    for (var s in e)
        Gt.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
    if (e != null && At)
        for (var s of At(e))
            t.indexOf(s) < 0 && $t.call(e, s) && (n[s] = e[s]);
    return n
}
;

var it = (e, t, n) => Pt(e, typeof t != "symbol" ? t + "" : t, n);
const GIT_HASH_JS = "fd49cc"
  , [GIT_HASH_BROWSE,SESSION_FLAGS,SESSION_USER_ID,SESSION_PLAN,SESSION_EMAIL,SESSION_PAYLOAD,SESSION_REQUEST,BROWSE_REQUEST_ERROR] = JSON.parse(document.getElementById("session-init").text)
  , GIT_HASH = GIT_HASH_BROWSE === GIT_HASH_JS ? GIT_HASH_BROWSE : GIT_HASH_BROWSE + "/" + GIT_HASH_JS;
(function(e, t) {
    typeof define == "function" && define.amd ? define([], t) : typeof exports != "undefined" ? t() : (t(),
    e.FileSaver = {})
}
)(this, function() {
    "use strict";
    function e(c, u) {
        return typeof u == "undefined" ? u = {
            autoBom: !1
        } : typeof u != "object" && (console.warn("Deprecated: Expected third argument to be a object"),
        u = {
            autoBom: !u
        }),
        u.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type) ? new Blob(["\uFEFF", c],{
            type: c.type
        }) : c
    }
    function t(c, u, y) {
        var f = new XMLHttpRequest;
        f.open("GET", c),
        f.responseType = "blob",
        f.onload = function() {
            i(f.response, u, y)
        }
        ,
        f.onerror = function() {
            console.error("could not download file")
        }
        ,
        f.send()
    }
    function n(c) {
        var u = new XMLHttpRequest;
        u.open("HEAD", c, !1);
        try {
            u.send()
        } catch (y) {}
        return 200 <= u.status && 299 >= u.status
    }
    function s(c) {
        try {
            c.dispatchEvent(new MouseEvent("click"))
        } catch (y) {
            var u = document.createEvent("MouseEvents");
            u.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
            c.dispatchEvent(u)
        }
    }
    var o = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : void 0
      , a = /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)
      , i = o.saveAs || (typeof window != "object" || window !== o ? function() {}
    : "download"in HTMLAnchorElement.prototype && !a ? function(c, u, y) {
        var f = o.URL || o.webkitURL
          , D = document.createElement("a");
        u = u || c.name || "download",
        D.download = u,
        D.rel = "noopener",
        typeof c == "string" ? (D.href = c,
        D.origin === location.origin ? s(D) : n(D.href) ? t(c, u, y) : s(D, D.target = "_blank")) : (D.href = f.createObjectURL(c),
        setTimeout(function() {
            f.revokeObjectURL(D.href)
        }, 4e4),
        setTimeout(function() {
            s(D)
        }, 0))
    }
    : "msSaveOrOpenBlob"in navigator ? function(c, u, y) {
        if (u = u || c.name || "download",
        typeof c != "string")
            navigator.msSaveOrOpenBlob(e(c, y), u);
        else if (n(c))
            t(c, u, y);
        else {
            var f = document.createElement("a");
            f.href = c,
            f.target = "_blank",
            setTimeout(function() {
                s(f)
            })
        }
    }
    : function(c, u, y, f) {
        if (f = f || open("", "_blank"),
        f && (f.document.title = f.document.body.innerText = "downloading..."),
        typeof c == "string")
            return t(c, u, y);
        var D = c.type === "application/octet-stream"
          , x = /constructor/i.test(o.HTMLElement) || o.safari
          , v = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((v || D && x || a) && typeof FileReader != "undefined") {
            var d = new FileReader;
            d.onloadend = function() {
                var p = d.result;
                p = v ? p : p.replace(/^data:[^;]*;/, "data:attachment/file;"),
                f ? f.location.href = p : location = p,
                f = null
            }
            ,
            d.readAsDataURL(c)
        } else {
            var P = o.URL || o.webkitURL
              , N = P.createObjectURL(c);
            f ? f.location = N : location.href = N,
            f = null,
            setTimeout(function() {
                P.revokeObjectURL(N)
            }, 4e4)
        }
    }
    );
    o.saveAs = i.saveAs = i,
    typeof module != "undefined" && (module.exports = i)
}),
function(e, t) {
    typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis != "undefined" ? globalThis : e || self).eio = t()
}(this, function() {
    "use strict";
    function e(E, k) {
        for (var _ = 0; _ < k.length; _++) {
            var r = k[_];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(E, c(r.key), r)
        }
    }
    function t(E, k, _) {
        return k && e(E.prototype, k),
        _ && e(E, _),
        Object.defineProperty(E, "prototype", {
            writable: !1
        }),
        E
    }
    function n() {
        return n = Object.assign ? Object.assign.bind() : function(E) {
            for (var k = 1; k < arguments.length; k++) {
                var _ = arguments[k];
                for (var r in _)
                    ({}).hasOwnProperty.call(_, r) && (E[r] = _[r])
            }
            return E
        }
        ,
        n.apply(null, arguments)
    }
    function s(E) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(k) {
            return k.__proto__ || Object.getPrototypeOf(k)
        }
        ,
        s(E)
    }
    function o(E, k) {
        E.prototype = Object.create(k.prototype),
        E.prototype.constructor = E,
        i(E, k)
    }
    function a() {
        try {
            var E = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (k) {}
        return (a = function() {
            return !!E
        }
        )()
    }
    function i(E, k) {
        return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(_, r) {
            return _.__proto__ = r,
            _
        }
        ,
        i(E, k)
    }
    function c(E) {
        var k = function(_, r) {
            if (typeof _ != "object" || !_)
                return _;
            var h = _[Symbol.toPrimitive];
            if (h !== void 0) {
                var S = h.call(_, r || "default");
                if (typeof S != "object")
                    return S;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return (r === "string" ? String : Number)(_)
        }(E, "string");
        return typeof k == "symbol" ? k : k + ""
    }
    function u(E) {
        return u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(k) {
            return typeof k
        }
        : function(k) {
            return k && typeof Symbol == "function" && k.constructor === Symbol && k !== Symbol.prototype ? "symbol" : typeof k
        }
        ,
        u(E)
    }
    function y(E) {
        var k = typeof Map == "function" ? new Map : void 0;
        return y = function(_) {
            if (_ === null || !function(h) {
                try {
                    return Function.toString.call(h).indexOf("[native code]") !== -1
                } catch (S) {
                    return typeof h == "function"
                }
            }(_))
                return _;
            if (typeof _ != "function")
                throw new TypeError("Super expression must either be null or a function");
            if (k !== void 0) {
                if (k.has(_))
                    return k.get(_);
                k.set(_, r)
            }
            function r() {
                return function(h, S, K) {
                    if (a())
                        return Reflect.construct.apply(null, arguments);
                    var ae = [null];
                    ae.push.apply(ae, S);
                    var pe = new (h.bind.apply(h, ae));
                    return K && i(pe, K.prototype),
                    pe
                }(_, arguments, s(this).constructor)
            }
            return r.prototype = Object.create(_.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            i(r, _)
        }
        ,
        y(E)
    }
    var f = Object.create(null);
    f.open = "0",
    f.close = "1",
    f.ping = "2",
    f.pong = "3",
    f.message = "4",
    f.upgrade = "5",
    f.noop = "6";
    var D = Object.create(null);
    Object.keys(f).forEach(function(E) {
        D[f[E]] = E
    });
    for (var x = {
        type: "error",
        data: "parser error"
    }, v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = typeof Uint8Array == "undefined" ? [] : new Uint8Array(256), P = 0; P < 64; P++)
        d[v.charCodeAt(P)] = P;
    var N, p = typeof Blob == "function" || typeof Blob != "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", O = typeof ArrayBuffer == "function", $ = function(E) {
        return typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(E) : E && E.buffer instanceof ArrayBuffer
    }, F = function(E, k, _) {
        var r = E.type
          , h = E.data;
        return p && h instanceof Blob ? k ? _(h) : C(h, _) : O && (h instanceof ArrayBuffer || $(h)) ? _(k ? h : "b" + function(S) {
            var K, ae = new Uint8Array(S), pe = ae.length, re = "";
            for (K = 0; K < pe; K += 3)
                re += v[ae[K] >> 2],
                re += v[(3 & ae[K]) << 4 | ae[K + 1] >> 4],
                re += v[(15 & ae[K + 1]) << 2 | ae[K + 2] >> 6],
                re += v[63 & ae[K + 2]];
            return pe % 3 == 2 ? re = re.substring(0, re.length - 1) + "=" : pe % 3 == 1 && (re = re.substring(0, re.length - 2) + "=="),
            re
        }(h)) : _(f[r] + (h || ""))
    }, C = function(E, k) {
        var _ = new FileReader;
        return _.onload = function() {
            var r = _.result.split(",")[1];
            k("b" + (r || ""))
        }
        ,
        _.readAsDataURL(E)
    };
    function l(E) {
        return E instanceof Uint8Array ? E : E instanceof ArrayBuffer ? new Uint8Array(E) : new Uint8Array(E.buffer,E.byteOffset,E.byteLength)
    }
    var m, g = typeof ArrayBuffer == "function", V = function(E, k) {
        if (typeof E != "string")
            return {
                type: "message",
                data: W(E, k)
            };
        var _ = E.charAt(0);
        return _ === "b" ? {
            type: "message",
            data: X(E.substring(1), k)
        } : D[_] ? E.length > 1 ? {
            type: D[_],
            data: E.substring(1)
        } : {
            type: D[_]
        } : x
    }, X = function(E, k) {
        if (g) {
            var _ = function(r) {
                var h, S, K, ae, pe, re = .75 * r.length, ge = r.length, A = 0;
                r[r.length - 1] === "=" && (re--,
                r[r.length - 2] === "=" && re--);
                var Re = new ArrayBuffer(re)
                  , me = new Uint8Array(Re);
                for (h = 0; h < ge; h += 4)
                    S = d[r.charCodeAt(h)],
                    K = d[r.charCodeAt(h + 1)],
                    ae = d[r.charCodeAt(h + 2)],
                    pe = d[r.charCodeAt(h + 3)],
                    me[A++] = S << 2 | K >> 4,
                    me[A++] = (15 & K) << 4 | ae >> 2,
                    me[A++] = (3 & ae) << 6 | 63 & pe;
                return Re
            }(E);
            return W(_, k)
        }
        return {
            base64: !0,
            data: E
        }
    }, W = function(E, k) {
        return k === "blob" ? E instanceof Blob ? E : new Blob([E]) : E instanceof ArrayBuffer ? E : E.buffer
    }, L = "";
    function H() {
        return new TransformStream({
            transform: function(E, k) {
                (function(_, r) {
                    p && _.data instanceof Blob ? _.data.arrayBuffer().then(l).then(r) : O && (_.data instanceof ArrayBuffer || $(_.data)) ? r(l(_.data)) : F(_, !1, function(h) {
                        N || (N = new TextEncoder),
                        r(N.encode(h))
                    })
                }
                )(E, function(_) {
                    var r, h = _.length;
                    if (h < 126)
                        r = new Uint8Array(1),
                        new DataView(r.buffer).setUint8(0, h);
                    else if (h < 65536) {
                        r = new Uint8Array(3);
                        var S = new DataView(r.buffer);
                        S.setUint8(0, 126),
                        S.setUint16(1, h)
                    } else {
                        r = new Uint8Array(9);
                        var K = new DataView(r.buffer);
                        K.setUint8(0, 127),
                        K.setBigUint64(1, BigInt(h))
                    }
                    E.data && typeof E.data != "string" && (r[0] |= 128),
                    k.enqueue(r),
                    k.enqueue(_)
                })
            }
        })
    }
    function ne(E) {
        return E.reduce(function(k, _) {
            return k + _.length
        }, 0)
    }
    function de(E, k) {
        if (E[0].length === k)
            return E.shift();
        for (var _ = new Uint8Array(k), r = 0, h = 0; h < k; h++)
            _[h] = E[0][r++],
            r === E[0].length && (E.shift(),
            r = 0);
        return E.length && r < E[0].length && (E[0] = E[0].slice(r)),
        _
    }
    function ie(E) {
        if (E)
            return function(k) {
                for (var _ in ie.prototype)
                    k[_] = ie.prototype[_];
                return k
            }(E)
    }
    ie.prototype.on = ie.prototype.addEventListener = function(E, k) {
        return this.t = this.t || {},
        (this.t["$" + E] = this.t["$" + E] || []).push(k),
        this
    }
    ,
    ie.prototype.once = function(E, k) {
        function _() {
            this.off(E, _),
            k.apply(this, arguments)
        }
        return _.fn = k,
        this.on(E, _),
        this
    }
    ,
    ie.prototype.off = ie.prototype.removeListener = ie.prototype.removeAllListeners = ie.prototype.removeEventListener = function(E, k) {
        if (this.t = this.t || {},
        arguments.length == 0)
            return this.t = {},
            this;
        var _, r = this.t["$" + E];
        if (!r)
            return this;
        if (arguments.length == 1)
            return delete this.t["$" + E],
            this;
        for (var h = 0; h < r.length; h++)
            if ((_ = r[h]) === k || _.fn === k) {
                r.splice(h, 1);
                break
            }
        return r.length === 0 && delete this.t["$" + E],
        this
    }
    ,
    ie.prototype.emit = function(E) {
        this.t = this.t || {};
        for (var k = new Array(arguments.length - 1), _ = this.t["$" + E], r = 1; r < arguments.length; r++)
            k[r - 1] = arguments[r];
        if (_) {
            r = 0;
            for (var h = (_ = _.slice(0)).length; r < h; ++r)
                _[r].apply(this, k)
        }
        return this
    }
    ,
    ie.prototype.emitReserved = ie.prototype.emit,
    ie.prototype.listeners = function(E) {
        return this.t = this.t || {},
        this.t["$" + E] || []
    }
    ,
    ie.prototype.hasListeners = function(E) {
        return !!this.listeners(E).length
    }
    ;
    var Z = typeof Promise == "function" && typeof Promise.resolve == "function" ? function(E) {
        return Promise.resolve().then(E)
    }
    : function(E, k) {
        return k(E, 0)
    }
      , B = typeof self != "undefined" ? self : typeof window != "undefined" ? window : Function("return this")();
    function oe(E) {
        for (var k = arguments.length, _ = new Array(k > 1 ? k - 1 : 0), r = 1; r < k; r++)
            _[r - 1] = arguments[r];
        return _.reduce(function(h, S) {
            return E.hasOwnProperty(S) && (h[S] = E[S]),
            h
        }, {})
    }
    var he = B.setTimeout
      , He = B.clearTimeout;
    function We(E, k) {
        k.useNativeTimers ? (E.setTimeoutFn = he.bind(B),
        E.clearTimeoutFn = He.bind(B)) : (E.setTimeoutFn = B.setTimeout.bind(B),
        E.clearTimeoutFn = B.clearTimeout.bind(B))
    }
    function Me() {
        return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
    }
    var xe = function(E) {
        function k(_, r, h) {
            var S;
            return (S = E.call(this, _) || this).description = r,
            S.context = h,
            S.type = "TransportError",
            S
        }
        return o(k, E),
        k
    }(y(Error))
      , Ve = function(E) {
        function k(r) {
            var h;
            return (h = E.call(this) || this).writable = !1,
            We(h, r),
            h.opts = r,
            h.query = r.query,
            h.socket = r.socket,
            h.supportsBinary = !r.forceBase64,
            h
        }
        o(k, E);
        var _ = k.prototype;
        return _.onError = function(r, h, S) {
            return E.prototype.emitReserved.call(this, "error", new xe(r,h,S)),
            this
        }
        ,
        _.open = function() {
            return this.readyState = "opening",
            this.doOpen(),
            this
        }
        ,
        _.close = function() {
            return this.readyState !== "opening" && this.readyState !== "open" || (this.doClose(),
            this.onClose()),
            this
        }
        ,
        _.send = function(r) {
            this.readyState === "open" && this.write(r)
        }
        ,
        _.onOpen = function() {
            this.readyState = "open",
            this.writable = !0,
            E.prototype.emitReserved.call(this, "open")
        }
        ,
        _.onData = function(r) {
            var h = V(r, this.socket.binaryType);
            this.onPacket(h)
        }
        ,
        _.onPacket = function(r) {
            E.prototype.emitReserved.call(this, "packet", r)
        }
        ,
        _.onClose = function(r) {
            this.readyState = "closed",
            E.prototype.emitReserved.call(this, "close", r)
        }
        ,
        _.pause = function(r) {}
        ,
        _.createUri = function(r) {
            var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return r + "://" + this.i() + this.o() + this.opts.path + this.u(h)
        }
        ,
        _.i = function() {
            var r = this.opts.hostname;
            return r.indexOf(":") === -1 ? r : "[" + r + "]"
        }
        ,
        _.o = function() {
            return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
        }
        ,
        _.u = function(r) {
            var h = function(S) {
                var K = "";
                for (var ae in S)
                    S.hasOwnProperty(ae) && (K.length && (K += "&"),
                    K += encodeURIComponent(ae) + "=" + encodeURIComponent(S[ae]));
                return K
            }(r);
            return h.length ? "?" + h : ""
        }
        ,
        k
    }(ie)
      , Ue = function(E) {
        function k() {
            var r;
            return (r = E.apply(this, arguments) || this).h = !1,
            r
        }
        o(k, E);
        var _ = k.prototype;
        return _.doOpen = function() {
            this.p()
        }
        ,
        _.pause = function(r) {
            var h = this;
            this.readyState = "pausing";
            var S = function() {
                h.readyState = "paused",
                r()
            };
            if (this.h || !this.writable) {
                var K = 0;
                this.h && (K++,
                this.once("pollComplete", function() {
                    --K || S()
                })),
                this.writable || (K++,
                this.once("drain", function() {
                    --K || S()
                }))
            } else
                S()
        }
        ,
        _.p = function() {
            this.h = !0,
            this.doPoll(),
            this.emitReserved("poll")
        }
        ,
        _.onData = function(r) {
            var h = this;
            (function(S, K) {
                for (var ae = S.split(L), pe = [], re = 0; re < ae.length; re++) {
                    var ge = V(ae[re], K);
                    if (pe.push(ge),
                    ge.type === "error")
                        break
                }
                return pe
            }
            )(r, this.socket.binaryType).forEach(function(S) {
                if (h.readyState === "opening" && S.type === "open" && h.onOpen(),
                S.type === "close")
                    return h.onClose({
                        description: "transport closed by the server"
                    }),
                    !1;
                h.onPacket(S)
            }),
            this.readyState !== "closed" && (this.h = !1,
            this.emitReserved("pollComplete"),
            this.readyState === "open" && this.p())
        }
        ,
        _.doClose = function() {
            var r = this
              , h = function() {
                r.write([{
                    type: "close"
                }])
            };
            this.readyState === "open" ? h() : this.once("open", h)
        }
        ,
        _.write = function(r) {
            var h = this;
            this.writable = !1,
            function(S, K) {
                var ae = S.length
                  , pe = new Array(ae)
                  , re = 0;
                S.forEach(function(ge, A) {
                    F(ge, !1, function(Re) {
                        pe[A] = Re,
                        ++re === ae && K(pe.join(L))
                    })
                })
            }(r, function(S) {
                h.doWrite(S, function() {
                    h.writable = !0,
                    h.emitReserved("drain")
                })
            })
        }
        ,
        _.uri = function() {
            var r = this.opts.secure ? "https" : "http"
              , h = this.query || {};
            return this.opts.timestampRequests !== !1 && (h[this.opts.timestampParam] = Me()),
            this.supportsBinary || h.sid || (h.b64 = 1),
            this.createUri(r, h)
        }
        ,
        t(k, [{
            key: "name",
            get: function() {
                return "polling"
            }
        }])
    }(Ve)
      , tt = !1;
    try {
        tt = typeof XMLHttpRequest != "undefined" && "withCredentials"in new XMLHttpRequest
    } catch (E) {}
    var Je = tt;
    function ke() {}
    var Ne = function(E) {
        function k(r) {
            var h;
            if (h = E.call(this, r) || this,
            typeof location != "undefined") {
                var S = location.protocol === "https:"
                  , K = location.port;
                K || (K = S ? "443" : "80"),
                h.xd = typeof location != "undefined" && r.hostname !== location.hostname || K !== r.port
            }
            return h
        }
        o(k, E);
        var _ = k.prototype;
        return _.doWrite = function(r, h) {
            var S = this
              , K = this.request({
                method: "POST",
                data: r
            });
            K.on("success", h),
            K.on("error", function(ae, pe) {
                S.onError("xhr post error", ae, pe)
            })
        }
        ,
        _.doPoll = function() {
            var r = this
              , h = this.request();
            h.on("data", this.onData.bind(this)),
            h.on("error", function(S, K) {
                r.onError("xhr poll error", S, K)
            }),
            this.pollXhr = h
        }
        ,
        k
    }(Ue)
      , Ie = function(E) {
        function k(r, h, S) {
            var K;
            return (K = E.call(this) || this).createRequest = r,
            We(K, S),
            K.l = S,
            K.v = S.method || "GET",
            K.m = h,
            K.k = S.data !== void 0 ? S.data : null,
            K.A(),
            K
        }
        o(k, E);
        var _ = k.prototype;
        return _.A = function() {
            var r, h = this, S = oe(this.l, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            S.xdomain = !!this.l.xd;
            var K = this.j = this.createRequest(S);
            try {
                K.open(this.v, this.m, !0);
                try {
                    if (this.l.extraHeaders)
                        for (var ae in K.setDisableHeaderCheck && K.setDisableHeaderCheck(!0),
                        this.l.extraHeaders)
                            this.l.extraHeaders.hasOwnProperty(ae) && K.setRequestHeader(ae, this.l.extraHeaders[ae])
                } catch (pe) {}
                if (this.v === "POST")
                    try {
                        K.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } catch (pe) {}
                try {
                    K.setRequestHeader("Accept", "*/*")
                } catch (pe) {}
                (r = this.l.cookieJar) === null || r === void 0 || r.addCookies(K),
                "withCredentials"in K && (K.withCredentials = this.l.withCredentials),
                this.l.requestTimeout && (K.timeout = this.l.requestTimeout),
                K.onreadystatechange = function() {
                    var pe;
                    K.readyState === 3 && ((pe = h.l.cookieJar) === null || pe === void 0 || pe.parseCookies(K.getResponseHeader("set-cookie"))),
                    K.readyState === 4 && (K.status === 200 || K.status === 1223 ? h.B() : h.setTimeoutFn(function() {
                        h.U(typeof K.status == "number" ? K.status : 0)
                    }, 0))
                }
                ,
                K.send(this.k)
            } catch (pe) {
                return void this.setTimeoutFn(function() {
                    h.U(pe)
                }, 0)
            }
            typeof document != "undefined" && (this.O = k.requestsCount++,
            k.requests[this.O] = this)
        }
        ,
        _.U = function(r) {
            this.emitReserved("error", r, this.j),
            this.T(!0)
        }
        ,
        _.T = function(r) {
            if (this.j !== void 0 && this.j !== null) {
                if (this.j.onreadystatechange = ke,
                r)
                    try {
                        this.j.abort()
                    } catch (h) {}
                typeof document != "undefined" && delete k.requests[this.O],
                this.j = null
            }
        }
        ,
        _.B = function() {
            var r = this.j.responseText;
            r !== null && (this.emitReserved("data", r),
            this.emitReserved("success"),
            this.T())
        }
        ,
        _.abort = function() {
            this.T()
        }
        ,
        k
    }(ie);
    Ie.requestsCount = 0,
    Ie.requests = {},
    typeof document != "undefined" && (typeof attachEvent == "function" ? attachEvent("onunload", j) : typeof addEventListener == "function" && addEventListener("onpagehide"in B ? "pagehide" : "unload", j, !1));
    function j() {
        for (var E in Ie.requests)
            Ie.requests.hasOwnProperty(E) && Ie.requests[E].abort()
    }
    var Q, b = (Q = Y({
        xdomain: !1
    })) && Q.responseType !== null, R = function(E) {
        function k(_) {
            var r;
            r = E.call(this, _) || this;
            var h = _ && _.forceBase64;
            return r.supportsBinary = b && !h,
            r
        }
        return o(k, E),
        k.prototype.request = function() {
            var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return n(_, {
                xd: this.xd
            }, this.opts),
            new Ie(Y,this.uri(),_)
        }
        ,
        k
    }(Ne);
    function Y(E) {
        var k = E.xdomain;
        try {
            if (typeof XMLHttpRequest != "undefined" && (!k || Je))
                return new XMLHttpRequest
        } catch (_) {}
        if (!k)
            try {
                return new B[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
            } catch (_) {}
    }
    var fe = typeof navigator != "undefined" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative"
      , le = function(E) {
        function k() {
            return E.apply(this, arguments) || this
        }
        o(k, E);
        var _ = k.prototype;
        return _.doOpen = function() {
            var r = this.uri()
              , h = this.opts.protocols
              , S = fe ? {} : oe(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
            this.opts.extraHeaders && (S.headers = this.opts.extraHeaders);
            try {
                this.ws = this.createSocket(r, h, S)
            } catch (K) {
                return this.emitReserved("error", K)
            }
            this.ws.binaryType = this.socket.binaryType,
            this.addEventListeners()
        }
        ,
        _.addEventListeners = function() {
            var r = this;
            this.ws.onopen = function() {
                r.opts.autoUnref && r.ws.S.unref(),
                r.onOpen()
            }
            ,
            this.ws.onclose = function(h) {
                return r.onClose({
                    description: "websocket connection closed",
                    context: h
                })
            }
            ,
            this.ws.onmessage = function(h) {
                return r.onData(h.data)
            }
            ,
            this.ws.onerror = function(h) {
                return r.onError("websocket error", h)
            }
        }
        ,
        _.write = function(r) {
            var h = this;
            this.writable = !1;
            for (var S = function() {
                var ae = r[K]
                  , pe = K === r.length - 1;
                F(ae, h.supportsBinary, function(re) {
                    try {
                        h.doWrite(ae, re)
                    } catch (ge) {}
                    pe && Z(function() {
                        h.writable = !0,
                        h.emitReserved("drain")
                    }, h.setTimeoutFn)
                })
            }, K = 0; K < r.length; K++)
                S()
        }
        ,
        _.doClose = function() {
            this.ws !== void 0 && (this.ws.onerror = function() {}
            ,
            this.ws.close(),
            this.ws = null)
        }
        ,
        _.uri = function() {
            var r = this.opts.secure ? "wss" : "ws"
              , h = this.query || {};
            return this.opts.timestampRequests && (h[this.opts.timestampParam] = Me()),
            this.supportsBinary || (h.b64 = 1),
            this.createUri(r, h)
        }
        ,
        t(k, [{
            key: "name",
            get: function() {
                return "websocket"
            }
        }])
    }(Ve)
      , Se = B.WebSocket || B.MozWebSocket
      , De = function(E) {
        function k() {
            return E.apply(this, arguments) || this
        }
        o(k, E);
        var _ = k.prototype;
        return _.createSocket = function(r, h, S) {
            return fe ? new Se(r,h,S) : h ? new Se(r,h) : new Se(r)
        }
        ,
        _.doWrite = function(r, h) {
            this.ws.send(h)
        }
        ,
        k
    }(le)
      , ze = function(E) {
        function k() {
            return E.apply(this, arguments) || this
        }
        o(k, E);
        var _ = k.prototype;
        return _.doOpen = function() {
            var r = this;
            try {
                this.M = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
            } catch (h) {
                return this.emitReserved("error", h)
            }
            this.M.closed.then(function() {
                r.onClose()
            }).catch(function(h) {
                r.onError("webtransport error", h)
            }),
            this.M.ready.then(function() {
                r.M.createBidirectionalStream().then(function(h) {
                    var S = function(re, ge) {
                        m || (m = new TextDecoder);
                        var A = []
                          , Re = 0
                          , me = -1
                          , lt = !1;
                        return new TransformStream({
                            transform: function(Qe, mt) {
                                for (A.push(Qe); ; ) {
                                    if (Re === 0) {
                                        if (ne(A) < 1)
                                            break;
                                        var pt = de(A, 1);
                                        lt = !(128 & ~pt[0]),
                                        me = 127 & pt[0],
                                        Re = me < 126 ? 3 : me === 126 ? 1 : 2
                                    } else if (Re === 1) {
                                        if (ne(A) < 2)
                                            break;
                                        var I = de(A, 2);
                                        me = new DataView(I.buffer,I.byteOffset,I.length).getUint16(0),
                                        Re = 3
                                    } else if (Re === 2) {
                                        if (ne(A) < 8)
                                            break;
                                        var M = de(A, 8)
                                          , z = new DataView(M.buffer,M.byteOffset,M.length)
                                          , ee = z.getUint32(0);
                                        if (ee > Math.pow(2, 21) - 1) {
                                            mt.enqueue(x);
                                            break
                                        }
                                        me = ee * Math.pow(2, 32) + z.getUint32(4),
                                        Re = 3
                                    } else {
                                        if (ne(A) < me)
                                            break;
                                        var ue = de(A, me);
                                        mt.enqueue(V(lt ? ue : m.decode(ue), ge)),
                                        Re = 0
                                    }
                                    if (me === 0 || me > re) {
                                        mt.enqueue(x);
                                        break
                                    }
                                }
                            }
                        })
                    }(Number.MAX_SAFE_INTEGER, r.socket.binaryType)
                      , K = h.readable.pipeThrough(S).getReader()
                      , ae = H();
                    ae.readable.pipeTo(h.writable),
                    r.C = ae.writable.getWriter(),
                    function re() {
                        K.read().then(function(ge) {
                            var A = ge.done
                              , Re = ge.value;
                            A || (r.onPacket(Re),
                            re())
                        }).catch(function(ge) {})
                    }();
                    var pe = {
                        type: "open"
                    };
                    r.query.sid && (pe.data = '{"sid":"'.concat(r.query.sid, '"}')),
                    r.C.write(pe).then(function() {
                        return r.onOpen()
                    })
                })
            })
        }
        ,
        _.write = function(r) {
            var h = this;
            this.writable = !1;
            for (var S = function() {
                var ae = r[K]
                  , pe = K === r.length - 1;
                h.C.write(ae).then(function() {
                    pe && Z(function() {
                        h.writable = !0,
                        h.emitReserved("drain")
                    }, h.setTimeoutFn)
                })
            }, K = 0; K < r.length; K++)
                S()
        }
        ,
        _.doClose = function() {
            var r;
            (r = this.M) === null || r === void 0 || r.close()
        }
        ,
        t(k, [{
            key: "name",
            get: function() {
                return "webtransport"
            }
        }])
    }(Ve)
      , at = {
        websocket: De,
        webtransport: ze,
        polling: R
    }
      , Fe = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
      , Ze = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    function st(E) {
        if (E.length > 8e3)
            throw "URI too long";
        var k = E
          , _ = E.indexOf("[")
          , r = E.indexOf("]");
        _ != -1 && r != -1 && (E = E.substring(0, _) + E.substring(_, r).replace(/:/g, ";") + E.substring(r, E.length));
        for (var h, S, K = Fe.exec(E || ""), ae = {}, pe = 14; pe--; )
            ae[Ze[pe]] = K[pe] || "";
        return _ != -1 && r != -1 && (ae.source = k,
        ae.host = ae.host.substring(1, ae.host.length - 1).replace(/;/g, ":"),
        ae.authority = ae.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
        ae.ipv6uri = !0),
        ae.pathNames = function(re, ge) {
            var A = /\/{2,9}/g
              , Re = ge.replace(A, "/").split("/");
            return ge.slice(0, 1) != "/" && ge.length !== 0 || Re.splice(0, 1),
            ge.slice(-1) == "/" && Re.splice(Re.length - 1, 1),
            Re
        }(0, ae.path),
        ae.queryKey = (h = ae.query,
        S = {},
        h.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(re, ge, A) {
            ge && (S[ge] = A)
        }),
        S),
        ae
    }
    var J = typeof addEventListener == "function" && typeof removeEventListener == "function"
      , Le = [];
    J && addEventListener("offline", function() {
        Le.forEach(function(E) {
            return E()
        })
    }, !1);
    var $e = function(E) {
        function k(r, h) {
            var S;
            if ((S = E.call(this) || this).binaryType = "arraybuffer",
            S.writeBuffer = [],
            S.L = 0,
            S.R = -1,
            S.D = -1,
            S.P = -1,
            S.I = 1 / 0,
            r && u(r) === "object" && (h = r,
            r = null),
            r) {
                var K = st(r);
                h.hostname = K.host,
                h.secure = K.protocol === "https" || K.protocol === "wss",
                h.port = K.port,
                K.query && (h.query = K.query)
            } else
                h.host && (h.hostname = st(h.host).host);
            return We(S, h),
            S.secure = h.secure != null ? h.secure : typeof location != "undefined" && location.protocol === "https:",
            h.hostname && !h.port && (h.port = S.secure ? "443" : "80"),
            S.hostname = h.hostname || (typeof location != "undefined" ? location.hostname : "localhost"),
            S.port = h.port || (typeof location != "undefined" && location.port ? location.port : S.secure ? "443" : "80"),
            S.transports = [],
            S.$ = {},
            h.transports.forEach(function(ae) {
                var pe = ae.prototype.name;
                S.transports.push(pe),
                S.$[pe] = ae
            }),
            S.opts = n({
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: {
                    threshold: 1024
                },
                transportOptions: {},
                closeOnBeforeunload: !1
            }, h),
            S.opts.path = S.opts.path.replace(/\/$/, "") + (S.opts.addTrailingSlash ? "/" : ""),
            typeof S.opts.query == "string" && (S.opts.query = function(ae) {
                for (var pe = {}, re = ae.split("&"), ge = 0, A = re.length; ge < A; ge++) {
                    var Re = re[ge].split("=");
                    pe[decodeURIComponent(Re[0])] = decodeURIComponent(Re[1])
                }
                return pe
            }(S.opts.query)),
            J && (S.opts.closeOnBeforeunload && (S.q = function() {
                S.transport && (S.transport.removeAllListeners(),
                S.transport.close())
            }
            ,
            addEventListener("beforeunload", S.q, !1)),
            S.hostname !== "localhost" && (S.N = function() {
                S.V("transport close", {
                    description: "network connection lost"
                })
            }
            ,
            Le.push(S.N))),
            S.opts.withCredentials && (S.X = void 0),
            S.H(),
            S
        }
        o(k, E);
        var _ = k.prototype;
        return _.createTransport = function(r) {
            var h = n({}, this.opts.query);
            h.EIO = 4,
            h.transport = r,
            this.id && (h.sid = this.id);
            var S = n({}, this.opts, {
                query: h,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port
            }, this.opts.transportOptions[r]);
            return new this.$[r](S)
        }
        ,
        _.H = function() {
            var r = this;
            if (this.transports.length !== 0) {
                var h = this.opts.rememberUpgrade && k.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
                this.readyState = "opening";
                var S = this.createTransport(h);
                S.open(),
                this.setTransport(S)
            } else
                this.setTimeoutFn(function() {
                    r.emitReserved("error", "No transports available")
                }, 0)
        }
        ,
        _.setTransport = function(r) {
            var h = this;
            this.transport && this.transport.removeAllListeners(),
            this.transport = r,
            r.on("drain", this.F.bind(this)).on("packet", this.G.bind(this)).on("error", this.U.bind(this)).on("close", function(S) {
                return h.V("transport close", S)
            })
        }
        ,
        _.onOpen = function() {
            this.readyState = "open",
            k.priorWebsocketSuccess = this.transport.name === "websocket",
            this.emitReserved("open"),
            this.flush()
        }
        ,
        _.G = function(r) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
                switch (this.emitReserved("packet", r),
                this.emitReserved("heartbeat"),
                r.type) {
                case "open":
                    this.onHandshake(JSON.parse(r.data));
                    break;
                case "ping":
                    this.J("pong"),
                    this.emitReserved("ping"),
                    this.emitReserved("pong"),
                    this.W();
                    break;
                case "error":
                    var h = new Error("server error");
                    h.code = r.data,
                    this.U(h);
                    break;
                case "message":
                    this.emitReserved("data", r.data),
                    this.emitReserved("message", r.data)
                }
        }
        ,
        _.onHandshake = function(r) {
            this.emitReserved("handshake", r),
            this.id = r.sid,
            this.transport.query.sid = r.sid,
            this.R = r.pingInterval,
            this.D = r.pingTimeout,
            this.P = r.maxPayload,
            this.onOpen(),
            this.readyState !== "closed" && this.W()
        }
        ,
        _.W = function() {
            var r = this;
            this.clearTimeoutFn(this.K);
            var h = this.R + this.D;
            this.I = Date.now() + h,
            this.K = this.setTimeoutFn(function() {
                r.V("ping timeout")
            }, h),
            this.opts.autoUnref && this.K.unref()
        }
        ,
        _.F = function() {
            this.writeBuffer.splice(0, this.L),
            this.L = 0,
            this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
        }
        ,
        _.flush = function() {
            if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                var r = this.Y();
                this.transport.send(r),
                this.L = r.length,
                this.emitReserved("flush")
            }
        }
        ,
        _.Y = function() {
            if (!(this.P && this.transport.name === "polling" && this.writeBuffer.length > 1))
                return this.writeBuffer;
            for (var r, h = 1, S = 0; S < this.writeBuffer.length; S++) {
                var K = this.writeBuffer[S].data;
                if (K && (h += typeof (r = K) == "string" ? function(ae) {
                    for (var pe = 0, re = 0, ge = 0, A = ae.length; ge < A; ge++)
                        (pe = ae.charCodeAt(ge)) < 128 ? re += 1 : pe < 2048 ? re += 2 : pe < 55296 || pe >= 57344 ? re += 3 : (ge++,
                        re += 4);
                    return re
                }(r) : Math.ceil(1.33 * (r.byteLength || r.size))),
                S > 0 && h > this.P)
                    return this.writeBuffer.slice(0, S);
                h += 2
            }
            return this.writeBuffer
        }
        ,
        _.Z = function() {
            var r = this;
            if (!this.I)
                return !0;
            var h = Date.now() > this.I;
            return h && (this.I = 0,
            Z(function() {
                r.V("ping timeout")
            }, this.setTimeoutFn)),
            h
        }
        ,
        _.write = function(r, h, S) {
            return this.J("message", r, h, S),
            this
        }
        ,
        _.send = function(r, h, S) {
            return this.J("message", r, h, S),
            this
        }
        ,
        _.J = function(r, h, S, K) {
            if (typeof h == "function" && (K = h,
            h = void 0),
            typeof S == "function" && (K = S,
            S = null),
            this.readyState !== "closing" && this.readyState !== "closed") {
                (S = S || {}).compress = S.compress !== !1;
                var ae = {
                    type: r,
                    data: h,
                    options: S
                };
                this.emitReserved("packetCreate", ae),
                this.writeBuffer.push(ae),
                K && this.once("flush", K),
                this.flush()
            }
        }
        ,
        _.close = function() {
            var r = this
              , h = function() {
                r.V("forced close"),
                r.transport.close()
            }
              , S = function ae() {
                r.off("upgrade", ae),
                r.off("upgradeError", ae),
                h()
            }
              , K = function() {
                r.once("upgrade", S),
                r.once("upgradeError", S)
            };
            return this.readyState !== "opening" && this.readyState !== "open" || (this.readyState = "closing",
            this.writeBuffer.length ? this.once("drain", function() {
                r.upgrading ? K() : h()
            }) : this.upgrading ? K() : h()),
            this
        }
        ,
        _.U = function(r) {
            if (k.priorWebsocketSuccess = !1,
            this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
                return this.transports.shift(),
                this.H();
            this.emitReserved("error", r),
            this.V("transport error", r)
        }
        ,
        _.V = function(r, h) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
                if (this.clearTimeoutFn(this.K),
                this.transport.removeAllListeners("close"),
                this.transport.close(),
                this.transport.removeAllListeners(),
                J && (this.q && removeEventListener("beforeunload", this.q, !1),
                this.N)) {
                    var S = Le.indexOf(this.N);
                    S !== -1 && Le.splice(S, 1)
                }
                this.readyState = "closed",
                this.id = null,
                this.emitReserved("close", r, h),
                this.writeBuffer = [],
                this.L = 0
            }
        }
        ,
        k
    }(ie);
    $e.protocol = 4;
    var et = function(E) {
        function k() {
            var r;
            return (r = E.apply(this, arguments) || this)._ = [],
            r
        }
        o(k, E);
        var _ = k.prototype;
        return _.onOpen = function() {
            if (E.prototype.onOpen.call(this),
            this.readyState === "open" && this.opts.upgrade)
                for (var r = 0; r < this._.length; r++)
                    this.tt(this._[r])
        }
        ,
        _.tt = function(r) {
            var h = this
              , S = this.createTransport(r)
              , K = !1;
            $e.priorWebsocketSuccess = !1;
            var ae = function() {
                K || (S.send([{
                    type: "ping",
                    data: "probe"
                }]),
                S.once("packet", function(lt) {
                    if (!K)
                        if (lt.type === "pong" && lt.data === "probe") {
                            if (h.upgrading = !0,
                            h.emitReserved("upgrading", S),
                            !S)
                                return;
                            $e.priorWebsocketSuccess = S.name === "websocket",
                            h.transport.pause(function() {
                                K || h.readyState !== "closed" && (me(),
                                h.setTransport(S),
                                S.send([{
                                    type: "upgrade"
                                }]),
                                h.emitReserved("upgrade", S),
                                S = null,
                                h.upgrading = !1,
                                h.flush())
                            })
                        } else {
                            var Qe = new Error("probe error");
                            Qe.transport = S.name,
                            h.emitReserved("upgradeError", Qe)
                        }
                }))
            };
            function pe() {
                K || (K = !0,
                me(),
                S.close(),
                S = null)
            }
            var re = function(lt) {
                var Qe = new Error("probe error: " + lt);
                Qe.transport = S.name,
                pe(),
                h.emitReserved("upgradeError", Qe)
            };
            function ge() {
                re("transport closed")
            }
            function A() {
                re("socket closed")
            }
            function Re(lt) {
                S && lt.name !== S.name && pe()
            }
            var me = function() {
                S.removeListener("open", ae),
                S.removeListener("error", re),
                S.removeListener("close", ge),
                h.off("close", A),
                h.off("upgrading", Re)
            };
            S.once("open", ae),
            S.once("error", re),
            S.once("close", ge),
            this.once("close", A),
            this.once("upgrading", Re),
            this._.indexOf("webtransport") !== -1 && r !== "webtransport" ? this.setTimeoutFn(function() {
                K || S.open()
            }, 200) : S.open()
        }
        ,
        _.onHandshake = function(r) {
            this._ = this.nt(r.upgrades),
            E.prototype.onHandshake.call(this, r)
        }
        ,
        _.nt = function(r) {
            for (var h = [], S = 0; S < r.length; S++)
                ~this.transports.indexOf(r[S]) && h.push(r[S]);
            return h
        }
        ,
        k
    }($e)
      , ht = function(E) {
        function k(_) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , h = u(_) === "object" ? _ : r;
            return (!h.transports || h.transports && typeof h.transports[0] == "string") && (h.transports = (h.transports || ["polling", "websocket", "webtransport"]).map(function(S) {
                return at[S]
            }).filter(function(S) {
                return !!S
            })),
            E.call(this, _, h) || this
        }
        return o(k, E),
        k
    }(et);
    return function(E, k) {
        return new ht(E,k)
    }
});
const gTextEncoder = new TextEncoder
  , gTextDecoder = new TextDecoder;
function utilEncodeUtf8(e) {
    return gTextEncoder.encode(e)
}
function utilDecodeUtf8(e) {
    return gTextDecoder.decode(e)
}
const gBase64Table = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 0, 62, 0, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 0, 63, 0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
function utilDecodeBase64(e) {
    let t = e.length;
    for (; e[t - 1] === "="; )
        t--;
    const n = new Uint8Array(t * 6 / 8 | 0);
    let s = 0
      , o = 0
      , a = 0;
    for (let i = 0; i < t; i++) {
        const c = gBase64Table[e.charCodeAt(i)];
        o = o << 6 | c,
        s += 6,
        s >= 8 && (s -= 8,
        n[a++] = 255 & o >> s)
    }
    return n
}
const gBase64UrlChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function utilEncodeBase64Url(e, t) {
    let n = ""
      , s = 0
      , o = 0;
    for (var a = 0; a < e.length; a++)
        for (o = o << 8 | e[a] & 255,
        s += 8; s > 6; )
            s -= 6,
            n += gBase64UrlChars[o >> s & 63];
    if (s && (n += gBase64UrlChars[o << 6 - s & 63]),
    t)
        for (; n.length * 6 & 7; )
            n += "=";
    return n
}
function utilFromHtml(e) {
    const t = document.createElement("template");
    return t.innerHTML = e.trim(),
    t.content.firstChild
}
function utilEscapeHtml(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}
function utilEnableBtn(e) {
    e.disabled = !1;
    const t = e.getAttribute("data-old-text");
    t && (e.removeAttribute("data-old-text"),
    e.textContent = t)
}
function utilDisableBtn(e, t) {
    e.disabled = !0,
    t && !e.hasAttribute("data-old-text") && (e.setAttribute("data-old-text", e.textContent || ""),
    e.textContent = t)
}
function utilDelegateListener(e) {
    return t => {
        const n = t.currentTarget;
        let s = t.target;
        for (; s && s.nodeType === 1 && !e(s, t) && s !== n; )
            s = s.parentElement || s.parentNode
    }
}
function utilFindByQueryIn(e) {
    return t => {
        const n = e.querySelector(t);
        if (!n) {
            const s = e.outerHTML.replace(/\n+/gm, `
`).replace(/\s+/gm, " ");
            throw Logging.userError("browse_findbyquery", {
                query: t,
                html: s
            }),
            new Error(`Couldn't find element ${t} in ${e}`)
        }
        return n
    }
}
const WasmFeatures = ( () => {
    function e(i) {
        try {
            return WebAssembly.validate(new Uint8Array(i))
        } catch (c) {
            return !1
        }
    }
    const t = e([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])
      , n = e([0, 97, 115, 109, 1, 0, 0, 0, 5, 3, 1, 4, 1])
      , s = e([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 15, 1, 13, 0, 65, 1, 253, 15, 65, 2, 253, 15, 253, 128, 2, 11])
      , o = e([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0, 192, 26, 11])
      , a = e([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
    return {
        bulkMemory: t,
        memory64: n,
        relaxedSimd: s,
        signExt: o,
        simd128: a
    }
}
)();
class Platform {
    constructor(t, n) {
        const s = `${t}/${n}`
          , o = Platform.idToPlatform.get(s);
        if (o)
            return o;
        this.name = t,
        this.version = n,
        Platform.allPlatforms.push(this),
        Platform.idToPlatform.set(s, this)
    }
    getDisplayIcon() {
        return Platform.platformToInfo.get(this).icon
    }
    getDisplayName() {
        return Platform.platformToInfo.get(this).displayName
    }
    toString() {
        return `${this.name}/${this.version}`
    }
}
Platform.allPlatforms = [],
Platform.idToPlatform = new Map,
Platform.MACOS_15 = new Platform("mac","15"),
Platform.MACOS_14 = new Platform("mac","14"),
Platform.MACOS_13 = new Platform("mac","13"),
Platform.MACOS_12 = new Platform("mac","12"),
Platform.WINDOWS_11 = new Platform("win","11"),
Platform.WINDOWS_10 = new Platform("win","10"),
Platform.WINDOWS_8_1 = new Platform("win","8.1"),
Platform.WINDOWS_8 = new Platform("win","8"),
Platform.WINDOWS_7 = new Platform("win","7"),
Platform.WINDOWS_VISTA = new Platform("win","vista"),
Platform.WINDOWS_XP = new Platform("win","xp"),
Platform.ANDROID_15 = new Platform("android","15"),
Platform.ANDROID_14 = new Platform("android","14"),
Platform.ANDROID_13 = new Platform("android","13"),
Platform.ANDROID_12_1 = new Platform("android","12.1"),
Platform.ANDROID_12 = new Platform("android","12"),
Platform.ANDROID_11 = new Platform("android","11"),
Platform.ANDROID_10 = new Platform("android","10"),
Platform.ANDROID_9 = new Platform("android","9"),
Platform.ANDROID_8_1 = new Platform("android","8.1"),
Platform.ANDROID_8_0 = new Platform("android","8.0"),
Platform.ANDROID_7_1 = new Platform("android","7.1"),
Platform.ANDROID_7_0 = new Platform("android","7.0"),
Platform.ANDROID_6_0 = new Platform("android","6.0"),
Platform.ANDROID_5_1 = new Platform("android","5.1"),
Platform.ANDROID_5_0 = new Platform("android","5.0"),
Platform.ANDROID_4_4 = new Platform("android","4.4"),
Platform.platformGroups = [{
    group: "macOS",
    items: [{
        id: Platform.MACOS_15,
        displayName: "macOS 15 Sequoia",
        icon: "#icon-macos-15"
    }, {
        id: Platform.MACOS_14,
        displayName: "macOS 14 Sonoma",
        icon: "#icon-macos-14"
    }, {
        id: Platform.MACOS_13,
        displayName: "macOS 13 Ventura",
        icon: "#icon-macos-13"
    }, {
        id: Platform.MACOS_12,
        displayName: "macOS 12 Monterey",
        icon: "#icon-macos-12"
    }]
}, {
    group: "Windows",
    items: [{
        id: Platform.WINDOWS_11,
        displayName: "Windows 11",
        icon: "#icon-windows-11"
    }, {
        id: Platform.WINDOWS_10,
        displayName: "Windows 10",
        icon: "#icon-windows-10"
    }, {
        id: Platform.WINDOWS_8_1,
        displayName: "Windows 8.1",
        icon: "#icon-windows-8"
    }, {
        id: Platform.WINDOWS_8,
        displayName: "Windows 8",
        icon: "#icon-windows-8"
    }, {
        id: Platform.WINDOWS_7,
        displayName: "Windows 7",
        icon: "#icon-windows-7"
    }, {
        id: Platform.WINDOWS_VISTA,
        displayName: "Windows Vista",
        icon: "#icon-windows-vista"
    }, {
        id: Platform.WINDOWS_XP,
        displayName: "Windows XP",
        icon: "#icon-windows-xp"
    }]
}, {
    group: "Android",
    items: [{
        id: Platform.ANDROID_15,
        displayName: "Android 15",
        icon: "#icon-android-15"
    }, {
        id: Platform.ANDROID_14,
        displayName: "Android 14",
        icon: "#icon-android-14"
    }, {
        id: Platform.ANDROID_13,
        displayName: "Android 13",
        icon: "#icon-android-13"
    }, {
        id: Platform.ANDROID_12_1,
        displayName: "Android 12.1",
        icon: "#icon-android-12"
    }, {
        id: Platform.ANDROID_12,
        displayName: "Android 12",
        icon: "#icon-android-12"
    }, {
        id: Platform.ANDROID_11,
        displayName: "Android 11",
        icon: "#icon-android-11"
    }, {
        id: Platform.ANDROID_10,
        displayName: "Android 10",
        icon: "#icon-android-10"
    }, {
        id: Platform.ANDROID_9,
        displayName: "Android 9",
        icon: "#icon-android-9"
    }, {
        id: Platform.ANDROID_8_1,
        displayName: "Android 8.1",
        icon: "#icon-android-8"
    }, {
        id: Platform.ANDROID_8_0,
        displayName: "Android 8.0",
        icon: "#icon-android-8"
    }, {
        id: Platform.ANDROID_7_1,
        displayName: "Android 7.1",
        icon: "#icon-android-7"
    }, {
        id: Platform.ANDROID_7_0,
        displayName: "Android 7.0",
        icon: "#icon-android-7"
    }, {
        id: Platform.ANDROID_6_0,
        displayName: "Android 6.0",
        icon: "#icon-android-6"
    }, {
        id: Platform.ANDROID_5_1,
        displayName: "Android 5.1",
        icon: "#icon-android-5"
    }, {
        id: Platform.ANDROID_5_0,
        displayName: "Android 5.0",
        icon: "#icon-android-5"
    }, {
        id: Platform.ANDROID_4_4,
        displayName: "Android 4.4",
        icon: "#icon-android-4"
    }]
}],
Platform.platformToInfo = new Map,
( () => {
    for (const e of Platform.platformGroups)
        for (const t of e.items)
            Platform.platformToInfo.set(t.id, t)
}
)();
class Browser {
    constructor(t, n) {
        const s = `${t}/${n}`
          , o = Browser.idToBrowser.get(s);
        if (o)
            return o;
        this.name = t,
        this.version = n,
        this.numbers = n.split(".").map(i => parseInt(i, 10)),
        this.platforms = new Set,
        Browser.allBrowsers.push(this),
        Browser.idToBrowser.set(s, this);
        let a = Browser.nameToBrowsers.get(t);
        a || (a = [],
        Browser.nameToBrowsers.set(t, a)),
        a.push(this)
    }
    getDisplayIcon() {
        return Browser.nameToInfo[this.name].icon
    }
    getDisplayName() {
        return Browser.nameToInfo[this.name].displayName + " " + this.version
    }
    getDisplayVersion() {
        return this.version
    }
    toString() {
        return `${this.name}/${this.version}`
    }
}
Browser.compareNumbers = function(e, t) {
    const n = e.numbers.length
      , s = t.numbers.length
      , o = Math.max(n, s);
    for (let a = 0; a < o; a++) {
        const i = a < n ? e.numbers[a] : 0
          , c = a < s ? t.numbers[a] : 0;
        if (i !== c)
            return c - i
    }
    return 0
}
,
Browser.allBrowsers = [],
Browser.idToBrowser = new Map,
Browser.nameToBrowsers = new Map,
Browser.platformToBrowsers = new Map,
Browser.appToInfo = {
    explorer: "Explorer",
    cmd: "Command Prompt",
    cmd_admin: "Command Prompt (Admin)",
    powershell: "PowerShell",
    powershell_admin: "PowerShell (Admin)",
    sysinternals: "Sysinternals",
    finder: "Finder",
    terminal: "Terminal",
    xcode: "XCode",
    wsl_ubuntu: "Ubuntu WSL",
    wsl_kali: "Kali Linux WSL"
},
Browser.platformToApps = new Map,
Browser.nameToInfo = {
    edge: {
        displayName: "Edge",
        icon: "#icon-edge"
    },
    ie: {
        displayName: "Internet Explorer",
        icon: "#icon-ie"
    },
    chrome: {
        displayName: "Chrome",
        icon: "#icon-chrome"
    },
    firefox: {
        displayName: "Firefox",
        icon: "#icon-firefox"
    },
    opera: {
        displayName: "Opera",
        icon: "#icon-opera"
    },
    brave: {
        displayName: "Brave",
        icon: "#icon-brave"
    },
    vivaldi: {
        displayName: "Vivaldi",
        icon: "#icon-vivaldi"
    },
    tor: {
        displayName: "Tor Browser",
        icon: "#icon-tor"
    },
    safari: {
        displayName: "Safari",
        icon: "#icon-safari"
    },
    supermium: {
        displayName: "Supermium",
        icon: "#icon-supermium"
    },
    mypal: {
        displayName: "Mypal",
        icon: "#icon-mypal"
    }
},
( () => {
    const e = (Fe, Ze) => [...Array(Ze + 1 - Fe).keys()].map(st => st + Fe)
      , t = (Fe, Ze, st) => e(Ze, st).map(J => `${Fe}.${J}`)
      , n = Fe => (Ze, st) => {
        st.forEach(J => {
            new Browser(Fe,J.toString()).platforms.add(Ze)
        }
        )
    }
      , s = n("brave")
      , o = n("vivaldi")
      , a = n("tor")
      , i = n("firefox")
      , c = n("chrome")
      , u = n("safari")
      , y = n("opera")
      , f = n("edge")
      , D = n("ie")
      , x = n("supermium")
      , v = n("mypal")
      , {MACOS_15: d, MACOS_14: P, MACOS_13: N, MACOS_12: p, WINDOWS_11: O, WINDOWS_10: $, WINDOWS_8_1: F, WINDOWS_8: C, WINDOWS_7: l, WINDOWS_VISTA: m, WINDOWS_XP: g, ANDROID_15: V, ANDROID_14: X, ANDROID_13: W, ANDROID_12_1: L, ANDROID_12: H, ANDROID_11: ne, ANDROID_10: de, ANDROID_9: ie, ANDROID_8_1: Z, ANDROID_8_0: B, ANDROID_7_1: oe, ANDROID_7_0: he, ANDROID_6_0: He, ANDROID_5_1: We, ANDROID_5_0: Me, ANDROID_4_4: xe} = Platform
      , Ve = (Fe, Ze) => Browser.platformToApps.set(Fe, Ze)
      , Ue = ["explorer", "sysinternals", "cmd", "cmd_admin", "powershell", "powershell_admin", "wsl_ubuntu", "wsl_kali"];
    Ve(O, Ue),
    Ve($, Ue);
    const tt = ["explorer", "sysinternals", "cmd", "cmd_admin", "powershell", "powershell_admin"];
    Ve(F, tt),
    Ve(C, tt),
    Ve(l, tt),
    Ve(m, tt),
    Ve(g, ["explorer", "sysinternals", "cmd", "powershell"]);
    const Je = ["finder", "terminal", "xcode"];
    Ve(d, Je),
    Ve(P, Je),
    Ve(N, Je),
    Ve(p, Je),
    D(F, [11]),
    D(C, [10]),
    D(l, [8, 9, 10, 11]),
    D(m, [7, 8, 9]),
    D(g, [6, 7, 8]),
    f(O, e(100, 138)),
    f($, e(100, 138)),
    f(d, e(122, 132)),
    f(P, e(120, 132)),
    f(N, e(120, 132)),
    f(p, e(120, 132)),
    c(d, e(122, 132)),
    c(P, e(120, 132)),
    c(N, e(120, 132)),
    c(p, e(120, 132)),
    c(O, e(1, 138)),
    c($, e(1, 138)),
    c(F, e(1, 109)),
    c(C, e(1, 109)),
    c(l, e(1, 109)),
    c(m, e(1, 50)),
    c(g, e(1, 49)),
    c(V, e(100, 126)),
    c(X, e(100, 126)),
    c(W, e(100, 126)),
    c(L, e(100, 126)),
    c(H, e(100, 126)),
    c(ne, e(100, 126)),
    c(de, e(100, 126)),
    c(ie, e(122, 126)),
    c(Z, e(122, 126)),
    c(B, e(122, 126)),
    c(oe, e(115, 119)),
    c(he, e(115, 119)),
    c(He, e(100, 106)),
    c(We, e(90, 95)),
    c(Me, e(90, 95)),
    c(xe, e(77, 81));
    const ke = Fe => [1, 2, 3, "3.5", "3.6", ...e(4, Fe)];
    i(d, e(113, 134)),
    i(P, e(113, 134)),
    i(N, e(113, 134)),
    i(p, e(113, 134)),
    i(O, ke(140)),
    i($, ke(140)),
    i(F, ke(115)),
    i(C, ke(115)),
    i(l, ke(115)),
    i(m, ke(52)),
    i(g, ke(52)),
    i(V, e(100, 127)),
    i(X, e(100, 127)),
    i(W, e(100, 127)),
    i(L, e(100, 127)),
    i(H, e(100, 127)),
    i(ne, e(100, 127)),
    i(de, e(100, 127)),
    i(ie, e(122, 127)),
    i(Z, e(122, 128)),
    i(B, e(122, 128)),
    i(oe, e(122, 128)),
    i(he, e(122, 128)),
    i(He, e(122, 128)),
    i(We, e(122, 128)),
    i(Me, e(122, 128)),
    i(xe, e(64, 68));
    const Ne = Fe => [10, "10.50", 11, "11.50", "11.60", 12, 13, 14, ...e(15, Fe)];
    y(d, e(108, 116)),
    y(P, e(100, 116)),
    y(N, e(100, 116)),
    y(p, e(100, 116)),
    y(O, Ne(120)),
    y($, Ne(120)),
    y(F, Ne(95)),
    y(C, Ne(95)),
    y(l, Ne(95)),
    y(m, Ne(36)),
    y(g, Ne(36));
    const Ie = [...t(1, 0, 15), ...t(2, 0, 11), ...t(3, 0, 8), ...t(4, 0, 3), ...t(5, 0, 8), ...t(6, 0, 9), ...t(7, 0, 4)];
    o(O, Ie),
    o($, Ie);
    const j = [...t(6, 1, 2), ...t(6, 6, 9), ...t(7, 0, 1)]
      , Q = [...t(6, 1, 2), ...t(6, 4, 9), ...t(7, 0, 1)];
    o(d, j),
    o(P, Q),
    o(N, Q),
    o(p, Q);
    const b = [122, 124, 126, 132];
    x(F, b),
    x(C, b),
    x(l, b),
    x(m, b),
    x(g, [132]);
    const R = [68];
    v(F, R),
    v(C, R),
    v(l, R),
    v(m, R),
    v(g, R);
    const Y = t(1, 0, 81);
    s(O, Y),
    s($, Y);
    const fe = [...t(1, 64, 71), ...t(1, 73, 74)];
    s(d, fe),
    s(P, fe),
    s(N, fe),
    s(p, fe);
    const le = ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "14.5"];
    a(O, le),
    a($, le);
    const Se = ["13", "13.5", "14"];
    a(d, Se),
    a(P, Se),
    a(N, Se),
    a(p, Se),
    u(d, ["18"]),
    u(P, ["17"]),
    u(N, ["16"]),
    u(p, ["15"]);
    const De = ["edge", "ie", "supermium", "chrome", "firefox", "opera", "brave", "vivaldi", "tor", "safari", "mypal"]
      , ze = ["safari", "chrome", "firefox", "edge", "opera", "brave", "vivaldi", "tor"]
      , at = new Map;
    for (const Fe of Platform.allPlatforms) {
        const Ze = at.get(Fe) || {}
          , st = []
          , J = Fe.name === "mac" ? ze : De;
        for (const Le of J) {
            const $e = Ze[Le]
              , {displayName: et, icon: ht} = Browser.nameToInfo[Le]
              , E = Browser.nameToBrowsers.get(Le);
            if (E) {
                const k = E.filter(_ => _.platforms.has(Fe)).sort(Browser.compareNumbers);
                st.push({
                    displayName: et,
                    browserName: Le,
                    icon: ht,
                    items: k,
                    notice: $e
                })
            }
        }
        Browser.platformToBrowsers.set(Fe, st)
    }
}
)();
function IdList(e, t) {
    let n = e;
    const s = t - e + 1
      , o = new Uint8Array(s);
    for (let a = 0; a < s; a++)
        o[a] = a + 1 + e;
    o[s - 1] = 0,
    this.remaining = s,
    this.alloc = () => {
        if (n === 0)
            return 0;
        const a = n
          , i = o[a - e];
        return o[a - e] = 0,
        n = i,
        this.remaining--,
        a
    }
    ,
    this.free = a => {
        a < e || a > t || o[a - e] === 0 && (o[a - e] = n,
        n = a,
        this.remaining++)
    }
}
function BrowserScreen() {
    const e = this;
    let t = 1
      , n = 5;
    e.onViewChanged = () => {}
    ;
    let s = null
      , o = null
      , a = null
      , i = null
      , c = null;
    function u() {
        const I = e.viewX
          , M = e.viewY
          , z = e.viewScale
          , ee = e.canvasWidth
          , ue = e.canvasHeight;
        (s != I || o != M || a != z || i != ee || c != ue) && (s = I,
        o = M,
        a = z,
        i = ee,
        c = ue,
        e.onViewChanged())
    }
    function y(I, M, z) {
        return M * (1 - I) + z * I
    }
    function f(I, M, z) {
        return (I - M) / (z - M)
    }
    function D(I, M, z) {
        if (M > z) {
            const ee = M;
            M = z,
            z = ee
        }
        return Math.max(M, Math.min(I, z))
    }
    function x(I, M, z, ee) {
        return Math.sqrt((z - I) * (z - I) + (ee - M) * (ee - M))
    }
    function v(I, M) {
        return Math.round(I * M) / M
    }
    let d = 1;
    function P() {
        return v(window.devicePixelRatio, 1e4)
    }
    function N(I, M, z) {
        const ee = Math.floor(I)
          , ue = ee - z;
        for (let w = ee; w >= ue; w--) {
            const T = w * M;
            if (T === Math.floor(T))
                return w
        }
        return ee
    }
    function p(I, M) {
        const z = new MutationObserver(ee => ee.forEach(ue => {
            if (ue.type === "childList") {
                for (const w of ue.addedNodes)
                    if (w === I) {
                        z.disconnect(),
                        M();
                        return
                    }
            }
        }
        ));
        z.observe(document, {
            subtree: !0,
            childList: !0
        })
    }
    let O = null;
    function $(I, M, z, ee) {
        if (I > z) {
            const ue = z / I
              , w = ee / M;
            return ue < w ? {
                x: 0,
                y: (ee - M * ue) / 2,
                scale: ue
            } : {
                x: (z - I * w) / 2,
                y: (ee - M * w) / 2,
                scale: w
            }
        } else if (M > ee) {
            const ue = ee / M;
            return {
                x: (z - I * ue) / 2,
                y: 0,
                scale: ue
            }
        } else
            return {
                x: (z - I) / 2,
                y: (ee - M) / 2,
                scale: 1
            }
    }
    this.onKeyEvent = () => {}
    ,
    this.onTouchEvent = () => {}
    ,
    this.onMouseEvent = () => {}
    ,
    this.onWheelEvent = () => {}
    ;
    function F() {
        e.viewX = D(e.viewX, 0, (e.canvasWidth - e.contentWidth * e.viewScale) / e.viewScale),
        e.viewY = D(e.viewY, 0, (e.canvasHeight - e.contentHeight * e.viewScale) / e.viewScale)
    }
    const C = 10;
    let l = 0
      , m = 0
      , g = !1;
    function V(I, M, z, ee) {
        ke = new Date().getTime(),
        e.onMouseEvent(I, M, {
            type: "mousemove",
            buttons: 0
        }, z, ee)
    }
    function X() {
        if (!g)
            return;
        const I = l
          , M = m;
        if (I < C || M < C || I > e.canvasWidth - C || M > e.canvasHeight - C) {
            const z = e.canvasWidth / 2
              , ee = e.canvasHeight / 2;
            let ue = z - I
              , w = ee - M;
            const T = Math.sqrt(ue * ue + w * w);
            ue /= T,
            w /= T,
            e.canvasWidth < e.contentWidth * e.viewScale && (e.viewX += ue * 10),
            e.canvasHeight < e.contentHeight * e.viewScale && (e.viewY += w * 10),
            pe = I / e.viewScale - e.viewX,
            re = M / e.viewScale - e.viewY,
            ge = !0,
            F(),
            fe(),
            V(pe, re, I, M),
            e.drawContent(),
            u()
        }
    }
    function W() {
        X(),
        requestAnimationFrame(W)
    }
    requestAnimationFrame(W);
    const L = I => {
        if (!O)
            return;
        const M = (I.clientX - O.left) * d
          , z = (I.clientY - O.top) * d;
        l = M,
        m = z,
        g = !0;
        const ee = M / e.viewScale - e.viewX
          , ue = z / e.viewScale - e.viewY;
        !this.contentWidth && !this.contentHeight ? (pe = M,
        re = z) : (pe = ee,
        re = ue),
        ge = !0,
        ke = new Date().getTime(),
        this.drawCursor(),
        this.onMouseEvent(ee, ue, I, M, z)
    }
      , H = []
      , ne = [];
    function de(I) {
        if (!O)
            return;
        const M = (I.pageX - O.left) * d
          , z = (I.pageY - O.top) * d
          , ee = ne.findIndex(w => w.id === I.identifier);
        ee >= 0 && ne.splice(ee, 1);
        const ue = H.findIndex(w => w.id === I.identifier);
        if (ue >= 0) {
            const w = H[ue];
            w.x = M,
            w.y = z,
            Y(M, z, w.id, tt)
        } else
            H.push({
                id: I.identifier,
                start: new Date().getTime(),
                x: M,
                y: z,
                lastX: M,
                lastY: z,
                sumX: 0,
                sumY: 0
            }),
            Y(M, z, I.identifier, Ue)
    }
    function ie() {
        for (; H.length > 0; ) {
            const I = H[0];
            H.splice(0, 1);
            const M = ne.findIndex(z => z.id === I.id);
            M >= 0 ? ne[M].end = new Date().getTime() : (ne.push({
                id: I.id,
                start: I.start,
                sumX: I.sumX,
                sumY: I.sumY,
                end: new Date().getTime()
            }),
            Y(I.x, I.y, I.id, Je))
        }
    }
    function Z(I) {
        let M = null;
        const z = H.findIndex(ue => ue.id === I.identifier);
        z >= 0 && (M = H[z],
        H.splice(z, 1));
        const ee = ne.findIndex(ue => ue.id === I.identifier);
        ee >= 0 ? ne[ee].end = new Date().getTime() : M && (ne.push({
            id: I.identifier,
            start: M.start,
            sumX: M.sumX,
            sumY: M.sumY,
            end: new Date().getTime()
        }),
        Y(M.x, M.y, M.id, Je))
    }
    function B(I) {
        I.sumX += Math.abs(I.x - I.lastX),
        I.sumY += Math.abs(I.y - I.lastY),
        I.lastX = I.x,
        I.lastY = I.y
    }
    const oe = 200
      , he = 30
      , He = 300
      , We = 100;
    let Me = 0
      , xe = 0
      , Ve = 0;
    e.__touchControlsDisabled = !1,
    e.__touchStatePassthrough = !1,
    e.onTouchScroll = () => {}
    ,
    e.onTouchCursor = () => {}
    ,
    e.onTouchTap = () => {}
    ,
    e.onTouchState = () => {}
    ;
    const Ue = 0
      , tt = 1
      , Je = 2;
    let ke = 0
      , Ne = 0;
    const Ie = 16
      , j = new IdList(1,Ie)
      , Q = new Map
      , b = []
      , R = [];
    for (let I = 0; I < Ie; I++)
        b.push({
            x: 0,
            y: 0,
            active: !1
        }),
        R.push({
            x: 0,
            y: 0,
            active: !1
        });
    function Y(I, M, z, ee) {
        if (!e.__touchStatePassthrough)
            return;
        let ue = Q.get(z);
        if (ee === Je) {
            if (!ue)
                return;
            j.free(ue),
            Q.delete(z)
        } else if (ee === tt) {
            if (!ue)
                return
        } else if (ee === Ue) {
            if (ue || (ue = j.alloc(),
            !ue))
                return;
            Q.set(z, ue)
        } else
            return;
        Ne = new Date().getTime();
        const w = I / e.viewScale - e.viewX
          , T = M / e.viewScale - e.viewY
          , te = b[ue - 1];
        te.x = w,
        te.y = T,
        te.active = ee !== Je,
        e.drawCursor(),
        e.onTouchState(w, T, ue - 1, ee)
    }
    function fe() {
        if (!ge)
            return;
        const I = -e.viewX
          , M = -e.viewY
          , z = e.canvasWidth / e.viewScale - e.viewX
          , ee = e.canvasHeight / e.viewScale - e.viewY;
        pe = D(pe, I, z),
        re = D(re, M, ee),
        ge = !0
    }
    function le() {
        const I = new Date().getTime();
        if (!(e.__touchControlsDisabled || e.__touchStatePassthrough))
            if (H.length >= 3) {
                xe = I;
                const M = H[0]
                  , z = H[1]
                  , ee = H[2]
                  , ue = (M.lastX + z.lastX + ee.lastX) / 3
                  , w = (M.lastY + z.lastY + ee.lastY) / 3
                  , T = (M.x + z.x + ee.x) / 3
                  , te = (M.y + z.y + ee.y) / 3
                  , Ce = ue - T
                  , _e = (w - te) / e.viewScale;
                Me += _e;
                const Pe = Me / We | 0;
                if (Pe !== 0 && (Me -= Pe * We),
                B(M),
                B(z),
                B(ee),
                Pe !== 0) {
                    ke = new Date().getTime();
                    const nt = Pe > 0 ? 1 : -1
                      , ut = Pe * nt;
                    for (let ct = 0; ct < ut; ct++)
                        e.onTouchScroll(pe, re, We * nt);
                    e.drawContent()
                }
            } else if (H.length >= 2) {
                if (I - xe < He)
                    return;
                Ve = I,
                Me = 0;
                const M = H[0]
                  , z = H[1]
                  , ee = x(M.lastX, M.lastY, z.lastX, z.lastY)
                  , w = x(M.x, M.y, z.x, z.y) / ee
                  , T = e.viewScale
                  , te = D(T * w, t, n)
                  , Ce = 1 / T - 1 / te
                  , Ee = (M.lastX + z.lastX) / 2
                  , _e = (M.lastY + z.lastY) / 2
                  , Pe = (M.x + z.x) / 2
                  , nt = (M.y + z.y) / 2
                  , ut = Pe - Ee
                  , ct = nt - _e;
                e.viewScale = te,
                e.viewX += ut / te,
                e.viewY += ct / te,
                e.viewX -= Pe * Ce,
                e.viewY -= nt * Ce,
                e.onRelativeScaleChanged(f(e.viewScale, t, n)),
                F(),
                fe(),
                B(M),
                B(z),
                ke = new Date().getTime(),
                e.onTouchCursor(pe, re),
                e.drawContent(),
                u()
            } else if (H.length >= 1) {
                if (I - xe < He || I - Ve < He)
                    return;
                Me = 0;
                const M = H[0]
                  , z = M.x - M.lastX
                  , ee = M.y - M.lastY
                  , ue = pe + z / e.viewScale
                  , w = re + ee / e.viewScale
                  , T = -e.viewX
                  , te = -e.viewY
                  , Ce = e.canvasWidth / e.viewScale - e.viewX
                  , Ee = e.canvasHeight / e.viewScale - e.viewY
                  , _e = D(ue, T, Ce)
                  , Pe = D(w, te, Ee)
                  , nt = _e - ue
                  , ut = Pe - w;
                pe = _e,
                re = Pe,
                ge = !0,
                e.viewX += nt,
                e.viewY += ut,
                F(),
                B(M),
                ke = new Date().getTime(),
                e.onTouchCursor(pe, re),
                e.drawContent(),
                u()
            } else
                Me = 0
    }
    function Se() {
        if (H.length > 0 || e.__touchControlsDisabled || e.__touchStatePassthrough)
            return;
        Me = 0;
        let I = 0;
        for (let M = 0; M < ne.length; M++) {
            const z = ne[M];
            z.end - z.start <= oe && z.sumX <= he && z.sumY <= he && I++
        }
        I > 0 && I === ne.length && (ke = new Date().getTime(),
        e.onTouchTap(pe, re, I),
        e.drawContent())
    }
    function De(I) {
        if (I.preventDefault(),
        !!O) {
            for (let M = 0; M < I.changedTouches.length; M++)
                de(I.changedTouches[M]);
            le(),
            Ze(I)
        }
    }
    function ze(I) {
        if (I.preventDefault(),
        !!O) {
            for (let M = 0; M < I.changedTouches.length; M++)
                de(I.changedTouches[M]);
            le(),
            Ze(I)
        }
    }
    function at(I) {
        if (I.preventDefault(),
        !!O) {
            for (let M = 0; M < I.changedTouches.length; M++)
                Z(I.changedTouches[M]);
            Se(),
            ne.length = 0,
            Ze(I)
        }
    }
    function Fe(I) {
        I.preventDefault(),
        O && (ie(),
        Se(),
        ne.length = 0,
        Ze(I))
    }
    function Ze(I) {
        e.onTouchEvent(I)
    }
    e.onRelativeScaleChanged = () => {}
    ;
    const st = I => {
        if (!O)
            return;
        const M = (I.clientX - O.left) * d
          , z = (I.clientY - O.top) * d
          , ee = M / e.viewScale - e.viewX
          , ue = z / e.viewScale - e.viewY;
        ke = new Date().getTime(),
        this.onWheelEvent(ee, ue, I, M, z)
    }
      , J = I => {
        this.onKeyEvent(I),
        I.preventDefault()
    }
      , Le = I => {
        I.preventDefault()
    }
    ;
    this.screenWrapper = document.createElement("div"),
    this.screenWrapper.addEventListener("contextmenu", Le),
    this.screenWrapper.addEventListener("mousemove", L),
    this.screenWrapper.addEventListener("mousedown", L),
    this.screenWrapper.addEventListener("mouseup", L),
    this.screenWrapper.addEventListener("touchstart", De, {
        passive: !1
    }),
    this.screenWrapper.addEventListener("touchmove", ze, {
        passive: !1
    }),
    this.screenWrapper.addEventListener("touchend", at, {
        passive: !1
    }),
    this.screenWrapper.addEventListener("touchcancel", Fe, {
        passive: !1
    }),
    this.screenWrapper.addEventListener("wheel", st),
    this.screenWrapper.addEventListener("keydown", J),
    this.screenWrapper.addEventListener("keyup", J),
    this.canvasWidth = 0,
    this.canvasHeight = 0,
    this.mainCanvas = document.createElement("canvas"),
    this.mainCtx = null,
    this.overlayCanvas = document.createElement("canvas"),
    this.overlayCtx = null,
    this.screenWrapper.appendChild(this.mainCanvas),
    this.screenWrapper.appendChild(this.overlayCanvas),
    this.viewX = 0,
    this.viewY = 0,
    this.viewScale = 1,
    this.contentImage = null,
    this.contentWidth = 0,
    this.contentHeight = 0,
    e.setScaleToSizeRatio = I => {
        if (e.contentWidth > e.canvasWidth || e.contentHeight > e.canvasHeight)
            return;
        const M = e.contentWidth / e.canvasWidth
          , z = e.contentHeight / e.canvasHeight;
        let ee = 1;
        M >= z && M < I ? ee = I * e.contentWidth / M / e.contentWidth : z >= M && z < I && (ee = I * e.contentHeight / z / e.contentHeight),
        ee = v(ee, 1e4);
        const ue = e.contentWidth / 2
          , w = e.contentHeight / 2
          , T = 1
          , te = 1 / T - 1 / ee;
        e.viewScale = ee,
        e.viewX = (e.canvasWidth - e.contentWidth) / 2,
        e.viewY = (e.canvasHeight - e.contentHeight) / 2,
        e.viewX -= (e.viewX + ue) * T * te,
        e.viewY -= (e.viewY + w) * T * te,
        F(),
        fe(),
        e.onRelativeScaleChanged(f(e.viewScale, t, n)),
        e.drawContent(),
        u()
    }
    ,
    e.setScaleToClosestEdge = I => {
        if (e.contentWidth > e.canvasWidth || e.contentHeight > e.canvasHeight)
            return;
        const M = (e.canvasWidth - e.contentWidth) / 2
          , z = (e.canvasHeight - e.contentHeight) / 2;
        let ee = 1;
        M <= z && M > I ? ee = (e.contentWidth + (M - I) * 2) / e.contentWidth : z <= M && z > I && (ee = (e.contentHeight + (z - I) * 2) / e.contentHeight),
        ee = v(ee, 1e4);
        const ue = e.contentWidth / 2
          , w = e.contentHeight / 2
          , T = 1
          , te = 1 / T - 1 / ee;
        e.viewScale = ee,
        e.viewX = M,
        e.viewY = z,
        e.viewX -= (e.viewX + ue) * T * te,
        e.viewY -= (e.viewY + w) * T * te,
        F(),
        fe(),
        e.onRelativeScaleChanged(f(e.viewScale, t, n)),
        e.drawContent(),
        u()
    }
    ,
    this.setRelativeScale = I => {
        const M = e.contentWidth / 2
          , z = e.contentHeight / 2
          , ee = e.viewScale
          , ue = y(I, t, n)
          , w = 1 / ee - 1 / ue;
        e.viewScale = ue,
        e.viewX -= (e.viewX + M) * ee * w,
        e.viewY -= (e.viewY + z) * ee * w,
        F(),
        fe(),
        this.drawContent(),
        u()
    }
    ,
    e.resetContentToCenter = () => {
        const I = $(e.contentWidth, e.contentHeight, e.canvasWidth, e.canvasHeight);
        e.viewX = Math.round(I.x / I.scale),
        e.viewY = Math.round(I.y / I.scale),
        e.viewScale = v(I.scale, 1e4),
        t = e.viewScale,
        e.onRelativeScaleChanged(f(e.viewScale, t, n)),
        e.drawContent(),
        u()
    }
    ,
    e.getPosWithinTarget = I => O ? [Math.round((I.clientX - O.left) * d), Math.round((I.clientY - O.top) * d)] : [Math.round(I.clientX * d), Math.round(I.clientY * d)],
    e.contentToCanvas = (I, M, z, ee) => [(e.viewX + I) * e.viewScale, (e.viewY + M) * e.viewScale, z * e.viewScale, ee * e.viewScale],
    e.canvasToContent = (I, M, z, ee) => [I / e.viewScale - e.viewX, M / e.viewScale - e.viewY, z / e.viewScale, ee / e.viewScale],
    this.shouldDrawContentImage = () => !0;
    const $e = (I, M, z, ee, ue, w) => {
        I.drawImage(M, ~~z, ~~ee, ~~ue, ~~w)
    }
      , et = (I, M, z, ee, ue, w, T, te, Ce, Ee) => {
        I.drawImage(M, ~~z, ~~ee, ~~ue, ~~w, ~~T, ~~te, ~~Ce, ~~Ee)
    }
    ;
    e.drawContent = () => {
        !e.mainCtx || !e.contentImage || !e.shouldDrawContentImage() || (e.mainCtx.clearRect(0, 0, e.canvasWidth, e.canvasHeight),
        $e(e.mainCtx, e.contentImage, e.viewX * e.viewScale, e.viewY * e.viewScale, e.contentWidth * e.viewScale, e.contentHeight * e.viewScale),
        e.drawCursor())
    }
    ;
    let ht = 16
      , E = 16
      , k = new Image;
    k.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAABFFBMVEUAAAD////////////////////////////////////////////////////+/v/X2/H7+/////////////////////////////////+LltXy9Pn6+v3w8fr19/v///////////////////+5wOSPm9f6+v3q7PeHk9TCyurJzerR1e/i5fXr7Pfz9Pv///+WodmstOGxuOPi4/T29/z////2+Pzc4fPU2PC0u+Siq96TntiCjtKdp9ygqdy9w+e2vOXR1u6nr+CTndekrd/5+fz19vzn6vft7vn19vvw8fnGy+rg4/SpsuDd3/OxueLL0OzDyOq8w+agqdyJldWVn9eVoNn///////////+ep9uCj9KFkNRRaOuVAAAAXHRSTlMAswQGuKwMtgipFaeknLA1HQ6WGRIQnqKaYCQfKCIbuq6hlEV6saZ/Qz06LiurmGlUTjEmsbCmoJCOhHtjWUpDMoFuXLeurq2sqKGdm5mYlpGLdmpiXBeXkoZycQGEXR0AAAJOSURBVDjLlZN3l5pQEMUXeUhvAupSLdix9+7q9t7Tvv/3yIAISTY5OXv/nd+5d97Mm6PPKYEHSiT+VaaSmsowjCYnKYA+1pMaYxuWruuWpKgylfgToFTFMMXaulgsruuNvsTIeOI3IKkaXr37+n1eqVTmL8tqr68ENjHAWL1Ve3Y7ag5Ph1fjqburmbZG/RphiR33/hxzEEmSyBFG03bVs2X8QOCa0eu61yVEYnuR6GzSrppKMnHIULyVe41BXSBAOQHDUGmyqFsqFVnU2/clEuo0zbIsTRAChponncbBhGLM7uwc+QDLZfIZDhiBRONtzZDxfYgkvt5CBkFz+TTP8+kMR+cwsjTrmgwVhtR+jBxMoNk8z2dbWUBYMHEe3yAmIFRrPW8i3yLNf0mlUi0+75ugm+ONHTSCM3qxMoQQNsNnU4VCIZVNczSBofKxKMXEKRAQ0koVvgLBQwxGXkSE+l8PDfq4QljO76N16AMmchf1IUv1lzG8BUzSfDYLb+FYYkA6T0vvnQqH3lhOhWAeGRhIOs+x/lMu3aIejh1X+1V3FM6Uy3AAgAV6WIiSDCH7GHE3PQMk5y+GponcAPp8XsFIgdgvpl9rT2D5PgNrG2Ckv7ieocFaQhPFrG4nTfg+4fdA5ZOdaPkWEWJ71cW3cclBCMrO5cNzR9QZeGr8DTXbrHe2s8eb8kX57sldrHoWk4SMWJSs6I1a9+3Y17IomkYExAcFB9NvbERR3Hi6xGhxD3ESHJ1iS5Jkv8PJBff0gQEoEBXV/0YFOvqcfgKxY0cx7ufTgwAAAABJRU5ErkJggg==";
    let _ = 0
      , r = 0
      , h = !1
      , S = 0
      , K = 0
      , ae = null
      , pe = 0
      , re = 0
      , ge = !1
      , A = 2
      , Re = 2
      , me = new Image;
    me.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAgMAAACdogfbAAAADFBMVEUAAAAAAAD///8AAADFTF0nAAAAAnRSTlMAWWQkJGgAAAAYSURBVAjXY9BiYNjfwLB/AghpBTCwOgAALecEx12OW+0AAAAASUVORK5CYII=";
    let lt = !1;
    this.setCustomCursor = I => {
        lt = I,
        I ? this.screenWrapper.style.cursor = "none" : this.screenWrapper.style.cursor = "",
        this.drawCursor()
    }
    ,
    this.setRemoteTouchState = (I, M, z, ee) => {
        const ue = R[z];
        ee === Je ? ue.active = !1 : (ue.active = !0,
        ue.x = I,
        ue.y = M),
        Ne = new Date().getTime(),
        this.drawCursor()
    }
    ,
    this.setRemoteCursorXY = (I, M) => {
        ge || (pe = I,
        re = M,
        ge = !0),
        _ = I,
        r = M,
        h = !0,
        ke = new Date().getTime(),
        this.drawCursor()
    }
    ,
    this.setRemoteCursorImage = (I, M, z) => {
        S = I,
        K = M,
        ae = z,
        this.drawCursor()
    }
    ,
    this.drawCursor = () => {
        if (e.overlayCtx && (e.overlayCtx.clearRect(0, 0, e.canvasWidth, e.canvasHeight),
        lt)) {
            let I = e.viewScale
              , M = e.viewX
              , z = e.viewY;
            if (!e.contentWidth && !e.contentHeight && (I = 1,
            M = 0,
            z = 0),
            ke > Ne)
                ae && h && et(e.overlayCtx, ae, 0, 0, ae.width, ae.height, (M + _ - S) * I, (z + r - K) * I, ae.width * I, ae.height * I),
                ge && et(e.overlayCtx, me, 0, 0, me.width, me.height, (M + pe - A) * I, (z + re - Re) * I, me.width * I, me.height * I);
            else {
                for (const ee of R)
                    ee.active && et(e.overlayCtx, k, 0, 0, k.width, k.height, (M + ee.x - ht) * I, (z + ee.y - E) * I, k.width * I, k.height * I);
                for (const ee of b)
                    ee.active && et(e.overlayCtx, me, 0, 0, me.width, me.height, (M + ee.x - A) * I, (z + ee.y - Re) * I, me.width * I, me.height * I)
            }
        }
    }
    ;
    const Qe = 10;
    this.resizeToFitParent = () => {
        d = P();
        let I = 0
          , M = 0;
        const z = this.screenWrapper.parentNode;
        if (z !== null) {
            const te = z.getBoundingClientRect();
            I = Math.floor(te.width),
            M = Math.floor(te.height)
        }
        O = this.screenWrapper.getBoundingClientRect();
        const ee = N(I, d, Qe)
          , ue = N(M, d, Qe)
          , w = ee * d
          , T = ue * d;
        this.mainCanvas.style.width = `${ee}px`,
        this.mainCanvas.style.height = `${ue}px`,
        this.mainCanvas.width = w,
        this.mainCanvas.height = T,
        this.mainCtx = this.mainCanvas.getContext("2d"),
        this.mainCtx.imageSmoothingEnabled = !0,
        this.overlayCanvas.style.width = `${ee}px`,
        this.overlayCanvas.style.height = `${ue}px`,
        this.overlayCanvas.width = w,
        this.overlayCanvas.height = T,
        this.overlayCtx = this.overlayCanvas.getContext("2d"),
        this.overlayCtx.imageSmoothingEnabled = !0,
        this.canvasWidth = w,
        this.canvasHeight = T,
        u()
    }
    ,
    e.onCanvasResized = () => {}
    ;
    const mt = () => {
        e.resizeToFitParent(),
        e.resetContentToCenter(),
        e.contentWidth && e.contentHeight && e.onCanvasResized()
    }
      , pt = () => {
        const I = this.screenWrapper.parentNode;
        if (!I) {
            console.log("[BrowserScreen] Detached, waiting until reattached..."),
            p(this.screenWrapper, () => pt());
            return
        }
        console.log("[BrowserScreen] Attached to", I);
        const M = new ResizeObserver( () => mt())
          , z = new MutationObserver(ee => ee.forEach(ue => {
            if (ue.type === "attributes" && ue.target === I)
                mt();
            else if (ue.type === "childList") {
                for (const w of ue.removedNodes)
                    if (w === this.screenWrapper) {
                        M.disconnect(),
                        z.disconnect(),
                        pt();
                        return
                    }
            }
        }
        ));
        z.observe(I, {
            subtree: !0,
            childList: !0,
            attributeFilter: ["style"]
        }),
        M.observe(I)
    }
    ;
    p(this.screenWrapper, () => pt())
}
let __encoderWindowBlur;
window.addEventListener("blur", () => {
    __encoderWindowBlur = !0
}
),
window.addEventListener("focus", () => {
    __encoderWindowBlur = !1
}
);
function Encoder(e, t, n, s) {
    const ge = [0, 1e3, 2e3, 5e3]
      , A = this;
    A.url = e,
    A.token = n,
    A.serverId = 0;
    const Re = () => {
        this.onRunning = () => {}
        ,
        this.onReconnected = () => {}
        ,
        this.onScreenResize = () => {}
        ,
        this.onScreenUpdate = () => {}
        ,
        this.onDestroyed = () => {}
        ,
        this.onAvcConfig = () => {}
        ,
        this.onAvcFrame = () => {}
        ,
        this.onAudioData = () => {}
        ,
        this.onClipboardText = () => {}
        ,
        this.onCursorPosition = () => {}
        ,
        this.onCursorShape = () => {}
        ,
        this.onWhoControls = () => {}
        ,
        this.onOwnUserId = () => {}
        ,
        this.onUsersAdd = () => {}
        ,
        this.onUsersRemove = () => {}
        ,
        this.onUsersStatus = () => {}
        ,
        this.onChatMessage = () => {}
        ,
        this.onSetBrowser = () => {}
        ,
        this.onTimeRemaining = () => {}
        ,
        this.onTouchState = () => {}
        ,
        this.onScreenRestartNeeded = () => {}
        ,
        this.onProxyConfig = () => {}
        ,
        this.onProxyState = () => {}
        ,
        this.onProxyError = () => {}
        ,
        this.onFmError = () => {}
        ,
        this.onProxyMeter = () => {}
        ,
        this.onReconnectAttempt = () => {}
        ,
        this.onCloseCannotJoin = () => {}
        ,
        this.onCloseOutdatedClient = () => {}
        ,
        this.onCloseOutdatedServer = () => {}
        ,
        this.onCloseFreePlanTimeout = () => {}
        ,
        this.onCloseHostIdleTimeout = () => {}
        ,
        this.onCloseReconnectFailed = () => {}
        ,
        this.onCloseVmUnavailable = () => {}
        ,
        this.onCloseNewHostJoined = () => {}
        ,
        this.onCloseCustomMessage = () => {}
        ,
        this.onCloseDevPlanLimit = () => {}
        ,
        this.onCloseHostEnded = () => {}
    }
    ;
    Re();
    let me, lt, Qe = !1, mt = !1, pt = !1, I = !0, M = 0, z = 0, ee;
    A.getPlatform = () => ee;
    let ue = [];
    A.isBrowserAvailable = U => ue.indexOf(U) !== -1;
    let w = 0;
    A.getFlags = () => w;
    let T = 0;
    function te(U) {
        if (!Qe || U === T)
            return;
        T = U;
        const q = new Uint8Array(2);
        qe(q, 7, 0),
        qe(q, T, 1),
        me.send(q)
    }
    function Ce() {
        let U = __encoderWindowBlur
          , q = T;
        document.visibilityState === "hidden" ? (q |= 2,
        U = !0) : document.visibilityState === "visible" && (q &= -3),
        U ? q |= 1 : q &= -2,
        te(q)
    }
    A.setTyping = U => {
        te(U ? T | 4 : T & -5)
    }
    ,
    A.setAfk = U => {
        te(U ? T | 8 : T & -9)
    }
    ;
    function Ee() {
        te(T | 1)
    }
    function _e() {
        te(T & -2)
    }
    function Pe() {
        document.visibilityState === "hidden" ? te(T | 2) : document.visibilityState === "visible" && te(T & -3)
    }
    function nt(U) {
        const q = [];
        let se = ""
          , ye = 0;
        for (; ye < U.length; ) {
            const Ae = U[ye];
            ye += 1;
            const Xe = Ae & 63
              , je = Ae >> 6
              , Ye = utilDecodeUtf8(U.subarray(ye, ye + Xe));
            if (ye += Xe,
            je === 0)
                se = Ye;
            else if (je === 1)
                q.push(se + "/" + Ye);
            else if (je === 2) {
                const Ge = Ke(U, ye);
                ye += 2;
                const ce = Ye.lastIndexOf(".")
                  , G = ce === -1 ? "" : Ye.slice(0, ce + 1)
                  , be = parseInt(ce === -1 ? Ye : Ye.slice(ce + 1));
                for (let we = 0; we < Ge; we++)
                    q.push(se + "/" + G + (be - we))
            }
        }
        return q
    }
    window.addEventListener("blur", Ee),
    window.addEventListener("focus", _e),
    document.addEventListener("visibilitychange", Pe);
    const ut = (U, q, se, ye, Ae, Xe, je) => {
        Qe = !0,
        Tt = 0,
        A.serverId = je,
        M = U,
        w = q,
        ee = Platform.idToPlatform.get(Ae),
        ue = [],
        ee || Logging.userError("enc_setplatform", {
            name: Ae
        });
        const Ye = [];
        for (const Ge of Xe) {
            const ce = Browser.idToBrowser.get(Ge);
            ce ? ue.push(ce) : Ye.push(Ge)
        }
        Ye.length > 0 && Logging.userError("enc_browserlist", {
            names: Ye
        }),
        se > 0 && ye > 0 && (yt(se, ye),
        A.onScreenResize(!0)),
        A.onOwnUserId(M),
        I ? (I = !1,
        A.onRunning()) : A.onReconnected(),
        Ce()
    }
      , ct = new Uint8Array([14]);
    A.sendEndSession = () => {
        Qe && me.send(ct)
    }
    ,
    A.sendTakeControl = () => {
        const U = new Uint8Array(2);
        qe(U, 4, 0),
        qe(U, M, 1),
        me.send(U)
    }
    ,
    A.sendReleaseControl = () => {
        const U = new Uint8Array(2);
        qe(U, 4, 0),
        qe(U, 0, 1),
        me.send(U)
    }
    ,
    A.sendChatMessage = U => {
        const q = utilEncodeUtf8(U)
          , se = new Uint8Array(1 + q.length);
        qe(se, 8, 0),
        se.set(q, 1),
        me.send(se)
    }
    ,
    A.canvas = document.createElement("canvas"),
    A.width = 0,
    A.height = 0;
    const yt = (U, q) => {
        A.width = U,
        A.height = q,
        A.canvas.width = U,
        A.canvas.height = q,
        lt = A.canvas.getContext("2d"),
        lt.fillStyle = "#000000",
        lt.fillRect(0, 0, U, q)
    }
      , Ke = (U, q) => U[q + 1] << 8 | U[q]
      , gt = (U, q) => U[q + 3] << 24 | U[q + 2] << 16 | U[q + 1] << 8 | U[q]
      , qe = (U, q, se) => {
        U[se] = q & 255
    }
      , rt = (U, q, se) => {
        U[se] = q & 255,
        U[se + 1] = q >> 8 & 255
    }
      , Ot = (U, q, se) => {
        U[se] = q & 255,
        U[se + 1] = q >> 8 & 255,
        U[se + 2] = q >> 16 & 255,
        U[se + 3] = q >> 24 & 255
    }
    ;
    let It;
    A.getLastNavigateBrowser = () => It,
    A.launchApp = U => {
        if (!Qe)
            return;
        const q = utilEncodeUtf8(U).subarray(0, 255)
          , se = new Uint8Array(3 + q.length);
        qe(se, 2, 0),
        qe(se, 0, 1),
        qe(se, q.length, 2),
        se.set(q, 3),
        me.send(se)
    }
    ,
    A.navigateTo = (U, q) => {
        if (!Qe)
            return;
        q.length > 3e4 && (q = q.slice(0, 3e4)),
        It = U;
        const se = `${U.name}/${U.version}`
          , ye = utilEncodeUtf8(se)
          , Ae = utilEncodeUtf8(q)
          , Xe = new Uint8Array(2 + ye.length + Ae.length);
        qe(Xe, 6, 0),
        qe(Xe, ye.length, 1),
        Xe.set(ye, 2),
        Xe.set(Ae, 2 + ye.length),
        me.send(Xe)
    }
    ;
    const Kt = 1
      , zt = 2
      , jt = 3
      , Qt = 4
      , Jt = 16;
    A.sendViewInfo = (U, q, se, ye, Ae) => {
        if (!Qe)
            return;
        const Xe = new ArrayBuffer(13)
          , je = new DataView(Xe);
        je.setUint8(0, 11),
        je.setInt16(1, U, !0),
        je.setInt16(3, q, !0),
        je.setInt16(5, se, !0),
        je.setInt16(7, ye, !0),
        je.setFloat32(9, Ae, !0),
        me.send(Xe)
    }
    ,
    A.sendScreenInfo = (U, q, se, ye, Ae, Xe, je, Ye, Ge, ce, G, be, we, ve, Oe) => {
        if (!Qe)
            return;
        let Be = 0;
        switch (ve) {
        case "landscape-primary":
            Be = Kt;
            break;
        case "landscape-secondary":
            Be = zt;
            break;
        case "portrait-primary":
            Be = jt;
            break;
        case "portrait-secondary":
            Be = Qt;
            break
        }
        we && (Be |= Jt);
        const Te = new ArrayBuffer(30)
          , ot = new DataView(Te);
        ot.setUint8(0, 10),
        ot.setUint8(1, Be),
        ot.setInt16(2, U, !0),
        ot.setInt16(4, q, !0),
        ot.setInt16(6, se, !0),
        ot.setInt16(8, ye, !0),
        ot.setInt16(10, Ae, !0),
        ot.setInt16(12, Xe, !0),
        ot.setInt16(14, je || 0, !0),
        ot.setInt16(16, Ye || 0, !0),
        ot.setInt16(18, Ge, !0),
        ot.setInt16(20, ce, !0),
        ot.setInt16(22, G, !0),
        ot.setInt16(24, be, !0),
        ot.setFloat32(26, Oe, !0),
        me.send(Te)
    }
    ,
    A.sendVisibleUiBoxes = U => {
        if (!Qe)
            return;
        const q = new Uint8Array(1 + 10 * U.length);
        qe(q, 15, 0);
        for (let se = 0; se < U.length; se++) {
            const ye = U[se];
            rt(q, ye.k, 10 * se + 1),
            rt(q, ye.x || 0, 10 * se + 3),
            rt(q, ye.y || 0, 10 * se + 5),
            rt(q, ye.w || 0, 10 * se + 7),
            rt(q, ye.h || 0, 10 * se + 9)
        }
        me.send(q)
    }
    ,
    A.sendUiBoxUpdate = U => {
        if (!Qe)
            return;
        let q;
        U.i ? (q = new Uint8Array(11),
        qe(q, 15, 0),
        rt(q, U.k, 1),
        rt(q, U.x || 0, 3),
        rt(q, U.y || 0, 5),
        rt(q, U.w || 0, 7),
        rt(q, U.h || 0, 9)) : (q = new Uint8Array(3),
        qe(q, 15, 0),
        rt(q, U.k | 32768, 1)),
        me.send(q)
    }
    ;
    const Dt = 1
      , Zt = 2
      , en = 3
      , tn = 4
      , nn = 5
      , sn = 6
      , on = 7
      , rn = 8
      , an = 9
      , ln = new Uint8Array([9, Dt])
      , xt = new Uint8Array([]);
    A.setProxy = (U, q, se, ye) => {
        if (Qe) {
            if (U === Dt)
                me.send(ln);
            else if (U === Zt || U === en || U === tn || U === an) {
                const Ae = new Uint8Array(4);
                qe(Ae, 9, 0),
                qe(Ae, U, 1),
                rt(Ae, q, 2),
                me.send(Ae)
            } else if (U === nn) {
                const Ae = utilEncodeUtf8(q).subarray(0, 255)
                  , Xe = new Uint8Array(3 + Ae.length);
                qe(Xe, 9, 0),
                qe(Xe, U, 1),
                qe(Xe, Ae.length, 2),
                Xe.set(Ae, 3),
                me.send(Xe)
            } else if (U === sn || U === on || U === rn) {
                const Ae = q ? utilEncodeUtf8(q).subarray(0, 255) : xt
                  , Xe = se ? utilEncodeUtf8(se).subarray(0, 255) : xt
                  , je = ye ? utilEncodeUtf8(ye).subarray(0, 255) : xt
                  , Ye = new Uint8Array(5 + Ae.length + Xe.length + je.length);
                qe(Ye, 9, 0),
                qe(Ye, U, 1);
                let Ge = 2;
                qe(Ye, Ae.length, Ge),
                Ge += 1,
                Ae.length && (Ye.set(Ae, Ge),
                Ge += Ae.length),
                qe(Ye, Xe.length, Ge),
                Ge += 1,
                Xe.length && (Ye.set(Xe, Ge),
                Ge += Xe.length),
                qe(Ye, je.length, Ge),
                Ge += 1,
                je.length && (Ye.set(je, Ge),
                Ge += je.length),
                me.send(Ye)
            }
        }
    }
    ,
    A.setResolution = (U, q, se=!1) => {
        if (!Qe)
            return;
        const ye = new Uint8Array(6);
        qe(ye, 5, 0),
        rt(ye, U, 1),
        rt(ye, q, 3),
        qe(ye, se ? 1 : 0, 5),
        me.send(ye)
    }
    ;
    let Nt = 0
      , Mt = 0
      , Ut = 0;
    const kt = (U, q, se, ye) => {
        if (!Qe || q === Nt && se === Mt && ye === Ut)
            return;
        Nt = q,
        Mt = se,
        Ut = ye;
        const Ae = new Uint8Array(6);
        qe(Ae, U, 0),
        qe(Ae, ye, 1),
        rt(Ae, q, 2),
        rt(Ae, se, 4),
        me.send(Ae)
    }
      , Rt = U => {
        const q = U | 0;
        return q > 32767 ? 32767 : q < -32768 ? -32768 : q
    }
      , Bt = (U, q, se, ye, Ae, Xe) => {
        if (!Qe)
            return;
        let je = (se & 3) << 6
          , Ye = 6;
        ye && (Ye += 2,
        je |= 32),
        Ae && (Ye += 2,
        je |= 16),
        Xe && (Ye += 2,
        je |= 8);
        const Ge = new Uint8Array(Ye);
        qe(Ge, 22, 0),
        qe(Ge, je, 1),
        rt(Ge, U, 2),
        rt(Ge, q, 4);
        let ce = 6;
        ye && (rt(Ge, Rt(ye * 10), ce),
        ce += 2),
        Ae && (rt(Ge, Rt(Ae * 10), ce),
        ce += 2),
        Xe && (rt(Ge, Rt(Xe * 10), ce),
        ce += 2),
        me.send(Ge)
    }
    ;
    A.sendWheelEvent = (U, q, se) => {
        Bt(U, q, se.deltaMode, se.deltaX, se.deltaY, se.deltaZ)
    }
    ,
    A.sendWheelEventDeltaY = (U, q, se) => {
        Bt(U, q, 3, 0, se, 0)
    }
    ,
    A.sendMouseEvent = (U, q, se) => {
        const ye = se.button << 5 | se.buttons
          , Ae = se.type === "mousedown" ? 20 : se.type === "mouseup" ? 19 : 21;
        kt(Ae, U, q, ye)
    }
    ,
    A.sendMouseState = (U, q, se) => {
        kt(21, U, q, se)
    }
    ;
    const Vt = new Uint8Array([0])
      , Ht = U => {
        if (!U || U === "Unidentified")
            return Vt;
        const q = KeyMap.lookupNKA(U);
        if (q)
            return new Uint8Array([128 | q >> 8, q & 255]);
        const se = utilEncodeUtf8(U).subarray(0, 127)
          , ye = new Uint8Array(1 + se.length);
        return ye[0] = se.length,
        ye.set(se, 1),
        ye
    }
      , cn = U => {
        if (!U)
            return Vt;
        const q = KeyMap.lookupIT(U);
        if (q)
            return new Uint8Array([128 | q]);
        const se = utilEncodeUtf8(U).subarray(0, 127)
          , ye = new Uint8Array(1 + se.length);
        return ye[0] = se.length,
        ye.set(se, 1),
        ye
    }
    ;
    A.sendKeyEvent = (U, q) => {
        if (!Qe)
            return;
        let se = U.key
          , ye = U.code
          , Ae = U.keyCode
          , Xe = U.ctrlKey
          , je = U.metaKey;
        if (q) {
            se === "Control" ? se = "Meta" : se === "Meta" && (se = "Control"),
            ye === "ControlLeft" ? se = "MetaLeft" : ye === "MetaLeft" ? se = "ControlLeft" : ye === "ControlRight" ? se = "MetaRight" : ye === "MetaRight" && (se = "ControlRight"),
            Ae === 17 ? Ae = 91 : (Ae === 91 || Ae === 92 || Ae === 224) && (Ae = 17);
            let we = je;
            je = Xe,
            Xe = we
        }
        const Ye = U.type === "keydown"
          , Ge = Ht(se)
          , ce = Ht(ye)
          , G = (U.location & 3) << 6 | +U.isComposing << 5 | +U.repeat << 4 | +U.altKey << 3 | +Xe << 2 | +je << 1 | +U.shiftKey << 0
          , be = new Uint8Array(3 + Ge.length + ce.length);
        qe(be, Ye ? 16 : 17, 0),
        qe(be, G, 1),
        qe(be, Ae, 2),
        be.set(Ge, 3),
        be.set(ce, 3 + Ge.length),
        me.send(be)
    }
    ,
    A.sendInputEvent = U => {
        if (!Qe)
            return;
        const q = U.target && "value"in U.target ? U.target.value : null
          , se = U.data !== null
          , ye = q !== null
          , Ae = se && ye && " " + U.data === q
          , Xe = +Ae << 3 | +ye << 2 | +se << 1 | +U.isComposing << 0
          , je = cn(U.inputType)
          , Ye = se ? utilEncodeUtf8(U.data).subarray(0, 65535) : null
          , Ge = ye && !Ae ? utilEncodeUtf8(q).subarray(0, 65535) : null;
        let ce = 2 + je.length;
        Ye && (ce += 2 + Ye.length),
        Ge && (ce += 2 + Ge.length);
        const G = new Uint8Array(ce);
        qe(G, 18, 0),
        qe(G, Xe, 1),
        G.set(je, 2);
        let be = 2 + je.length;
        Ye && (rt(G, Ye.length, be),
        G.set(Ye, be + 2),
        be += 2 + Ye.length),
        Ge && (rt(G, Ge.length, be),
        G.set(Ge, be + 2),
        be += 2 + Ge.length),
        me.send(G)
    }
    ;
    let _t = null;
    A.sendClipboardText = U => {
        if (!Qe || M !== z)
            return !1;
        _t = U;
        const q = utilEncodeUtf8(U)
          , se = new Uint8Array(1 + q.length);
        return qe(se, 3, 0),
        se.set(q, 1),
        me.send(se),
        !0
    }
    ,
    A.sendUniqueClipboardText = U => _t === U ? !1 : A.sendClipboardText(U),
    A.drawVideoFrame = U => {
        lt.drawImage(U, 0, 0),
        A.onScreenUpdate()
    }
    ,
    A.destroy = () => {
        window.removeEventListener("blur", Ee),
        window.removeEventListener("focus", _e),
        document.removeEventListener("visibilitychange", Pe),
        A.onDestroyed(),
        pn()
    }
    ,
    A.sendTouchState = (U, q, se, ye) => {
        if (!Qe)
            return;
        U < 0 && (U = 0),
        q < 0 && (q = 0),
        U > A.width && (U = A.width - 1),
        q > A.height && (q = A.height - 1);
        const Ae = new Uint8Array(6);
        qe(Ae, 13, 0),
        qe(Ae, se << 4 | ye, 1),
        rt(Ae, U, 2),
        rt(Ae, q, 4),
        me.send(Ae)
    }
    ;
    const Wt = (U, q) => {
        const se = utilEncodeUtf8(JSON.stringify(q))
          , ye = new Uint8Array(2 + se.length);
        qe(ye, 12, 0),
        qe(ye, U, 1),
        ye.set(se, 2),
        me.send(ye)
    }
      , un = new Uint8Array([0])
      , dn = () => {
        Qe && me.send(un)
    }
      , hn = () => {
        const U = utilDecodeBase64(n)
          , q = new Uint8Array(44);
        Ot(q, 1398231618, 0),
        Ot(q, 2, 4),
        rt(q, t, 8),
        rt(q, s, 10),
        q.set(U, 12),
        q.set(gPageRnd, 28),
        me.send(q)
    }
    ;
    let Lt;
    const Ft = U => {
        clearTimeout(Lt),
        Lt = setTimeout( () => {
            mt && me.close()
        }
        , U)
    }
      , pn = () => {
        Qe = !1,
        mt = !1,
        pt = !0,
        Re(),
        me.close()
    }
    ;
    let Tt = 0
      , Ct = "";
    const fn = () => {
        if (pt)
            return;
        const U = ge.length - 1;
        if (Tt > U) {
            A.onCloseReconnectFailed(Ct),
            A.destroy();
            return
        }
        M = 0,
        T = 0,
        z = 0,
        ee = void 0,
        w = 0,
        ue = [],
        A.onReconnectAttempt(Tt + 1, U + 1);
        const q = ge[Tt++];
        setTimeout( () => Yt(), q)
    }
      , Yt = () => {
        if (pt)
            return;
        console.log("[Encoder] Connecting..."),
        clearTimeout(Lt),
        me = new eio(e),
        me.binaryType = "arraybuffer",
        me.on("open", () => {
            pt || (mt = !0,
            console.log("[Encoder] Eio open"),
            hn(),
            Ft(1e4))
        }
        );
        let U = []
          , q = 0;
        function se(ce) {
            q || (q = new Date().getTime(),
            setTimeout( () => {
                Qe || (Logging.userError("enc_nowelcome", {
                    c: U.length,
                    t: new Date().getTime() - q
                }),
                me.close())
            }
            , 5e3)),
            U.push(ce)
        }
        me.on("message", ce => {
            pt || (ce instanceof ArrayBuffer ? Ge(ce) : Logging.userError("enc_bad_data", {
                data: ce
            }))
        }
        ),
        me.on("error", (ce, G) => {
            pt || (Ct = ce.message,
            "code"in ce && (Ct += " " + ce.code),
            G && (Ct += " " + JSON.stringify(G)),
            console.log("[Encoder] Eio error", ce.message))
        }
        ),
        me.on("upgrade", ce => {
            pt || console.log("[Encoder] Eio upgrade", ce)
        }
        ),
        me.on("upgradeError", ce => {
            pt || console.log("[Encoder] Eio upgradeError", ce)
        }
        ),
        me.on("close", () => {
            pt || (Qe = !1,
            mt = !1,
            console.log("[Encoder] Eio close"),
            fn())
        }
        );
        function ye(ce, G, be) {
            A.onCloseCustomMessage(ce, G, be),
            A.destroy()
        }
        function Ae(ce) {
            console.log("[Encoder] Eio goodbye " + ce.toString(16).padStart(4, "0")),
            ce === 3 || ce === 4 || ce === 7 ? (A.onCloseCannotJoin(),
            A.destroy()) : ce === 5 ? (A.onCloseOutdatedClient(),
            A.destroy()) : ce === 6 ? (A.onCloseOutdatedServer(),
            A.destroy()) : ce === 8 ? (A.onCloseFreePlanTimeout(),
            A.destroy()) : ce === 9 ? (A.onCloseHostIdleTimeout(),
            A.destroy()) : ce === 11 ? (A.onCloseVmUnavailable(!1),
            A.destroy()) : ce === 16 ? (A.onCloseVmUnavailable(!0),
            A.destroy()) : ce === 12 ? (A.onCloseNewHostJoined(),
            A.destroy()) : ce === 14 ? (A.onCloseDevPlanLimit(),
            A.destroy()) : ce === 15 && (A.onCloseHostEnded(),
            A.destroy())
        }
        class Xe {
            constructor(G) {
                this.handler = G,
                this.queue = []
            }
            push(G) {
                const be = {
                    ready: !1,
                    data: null
                };
                this.queue.push(be),
                G().then(we => {
                    for (be.ready = !0,
                    be.data = we; this.queue.length > 0; ) {
                        const ve = this.queue[0];
                        if (!ve.ready)
                            break;
                        this.handler(ve.data),
                        this.queue.shift()
                    }
                }
                )
            }
        }
        const je = async ce => new Promise(G => {
            if (!ce || !ce.length)
                return G(null);
            const be = new Blob([ce])
              , we = URL.createObjectURL(be)
              , ve = new Image;
            ve.src = we,
            ve.onload = () => {
                URL.revokeObjectURL(we),
                G(ve)
            }
            ,
            ve.onerror = function() {
                URL.revokeObjectURL(we),
                G(null)
            }
        }
        )
          , Ye = new Xe(ce => {
            ce.type === 2 ? (yt(ce.width, ce.height),
            A.onScreenResize(!1)) : ce.type === 3 && ce.image ? (lt.drawImage(ce.image, ce.x, ce.y),
            A.onScreenUpdate()) : ce.type === 4 ? lt.drawImage(A.canvas, ce.srcX, ce.srcY, ce.width, ce.height, ce.dstX, ce.dstY, ce.width, ce.height) : ce.type === 5 ? A.onScreenUpdate() : ce.type === 6 && A.onCursorShape(ce.x, ce.y, ce.image)
        }
        );
        function Ge(ce) {
            const G = new Uint8Array(ce)
              , be = G[0];
            if (!Qe && be !== 1 && be !== 255) {
                se(ce);
                return
            }
            if (be === 0)
                Ft(8e3),
                dn();
            else if (be === 1) {
                const we = G[1]
                  , ve = gt(G, 2)
                  , Oe = Ke(G, 6)
                  , Be = Ke(G, 8);
                let Te = 10;
                const ot = G[Te];
                Te += 1;
                const wt = G.subarray(Te, Te + ot);
                Te += ot;
                const vt = utilDecodeUtf8(wt)
                  , Et = Ke(G, Te);
                Te += 2;
                const St = G.subarray(Te, Te + Et);
                Te += Et;
                const ft = nt(St)
                  , dt = Ke(G, Te);
                Te += 2,
                ut(we, ve, Oe, Be, vt, ft, dt)
            } else if (be === 2) {
                const we = Ke(G, 1)
                  , ve = Ke(G, 3);
                Ye.push(async () => ({
                    type: be,
                    width: we,
                    height: ve
                }))
            } else if (be === 3) {
                const we = Ke(G, 1)
                  , ve = Ke(G, 3)
                  , Oe = G.subarray(5);
                Ye.push(async () => {
                    const Be = await je(Oe);
                    return {
                        type: be,
                        x: we,
                        y: ve,
                        image: Be
                    }
                }
                )
            } else if (be === 4) {
                const we = Ke(G, 1)
                  , ve = Ke(G, 3)
                  , Oe = Ke(G, 5)
                  , Be = Ke(G, 7)
                  , Te = Ke(G, 9)
                  , ot = Ke(G, 11);
                Ye.push(async () => ({
                    type: be,
                    srcX: we,
                    srcY: ve,
                    dstX: Oe,
                    dstY: Be,
                    width: Te,
                    height: ot
                }))
            } else if (be === 5)
                Ye.push(async () => ({
                    type: be
                }));
            else if (be === 6) {
                const we = G[1]
                  , ve = G[2]
                  , Oe = G.subarray(3);
                Ye.push(async () => {
                    const Be = await je(Oe);
                    return {
                        type: be,
                        x: we,
                        y: ve,
                        image: Be
                    }
                }
                )
            } else if (be === 7) {
                const we = Ke(G, 1)
                  , ve = Ke(G, 3);
                A.onCursorPosition(we, ve)
            } else if (be === 8) {
                const we = G[1]
                  , ve = [];
                let Oe = 2;
                for (let Be = 0; Be < we; Be++) {
                    const Te = G[Oe + 1]
                      , ot = G[Oe + 2]
                      , wt = G[Oe + 3]
                      , vt = G.subarray(Oe + 4, Oe + 4 + wt)
                      , Et = utilDecodeUtf8(vt);
                    Oe += 4 + wt,
                    ve.push({
                        id: ot,
                        status: Te,
                        name: Et
                    })
                }
                A.onUsersAdd(ve)
            } else if (be === 9) {
                const we = G[1]
                  , ve = [];
                for (let Oe = 0; Oe < we; Oe++)
                    ve.push(G[2 + Oe]);
                A.onUsersRemove(ve)
            } else if (be === 10) {
                const we = G[1];
                z = we,
                A.onWhoControls(we)
            } else if (be === 15) {
                const we = G[1]
                  , ve = G.subarray(2)
                  , Oe = utilDecodeUtf8(ve);
                A.onChatMessage(we, Oe)
            } else if (be === 16) {
                const we = G.subarray(1);
                A.onAudioData(we)
            } else if (be === 32) {
                const ve = !!(G[1] & 1)
                  , Oe = Ke(G, 2)
                  , Be = Ke(G, 4)
                  , Te = G.subarray(6);
                A.onAvcConfig(Oe, Be, Te, ve)
            } else if (be === 33) {
                const ve = !!(G[1] & 1)
                  , Oe = G.subarray(2);
                A.onAvcFrame(ve, Oe)
            } else if (be === 11) {
                const we = G[1]
                  , ve = G.subarray(2)
                  , Oe = utilDecodeUtf8(ve);
                A.onClipboardText(Oe, we),
                _t = Oe
            } else if (be !== 22)
                if (be === 23) {
                    if (G[1] === 0) {
                        const ve = Ke(G, 2)
                          , Oe = gt(G, 4);
                        A.onFmError(Oe, ve)
                    }
                } else if (be === 12) {
                    const we = G[1]
                      , ve = G[2]
                      , Oe = utilDecodeUtf8(G.subarray(3, 3 + ve))
                      , Be = Browser.idToBrowser.get(Oe)
                      , Te = utilDecodeUtf8(G.subarray(3 + ve));
                    Be ? (It = Be,
                    A.onSetBrowser(we, Be, Te)) : Logging.userError("enc_setbrowser", {
                        name: Oe,
                        url: Te,
                        data: [...G]
                    })
                } else if (be === 13) {
                    const we = G[1]
                      , ve = G[2];
                    A.onUsersStatus(we, ve)
                } else if (be === 14) {
                    const we = gt(G, 1);
                    A.onTimeRemaining(we)
                } else if (be === 242) {
                    const we = utilDecodeUtf8(G.subarray(1));
                    let ve;
                    try {
                        ve = new Function(we).call(A)
                    } catch (Oe) {
                        Wt(1, Oe.message);
                        return
                    }
                    Wt(0, ve)
                } else if (be === 17) {
                    const we = G[1]
                      , ve = we >> 4
                      , Oe = we & 15
                      , Be = Ke(G, 2)
                      , Te = Ke(G, 4);
                    A.onTouchState(Be, Te, ve, Oe)
                } else if (be === 18) {
                    const we = G[1]
                      , ve = Ke(G, 2)
                      , Oe = Ke(G, 4);
                    A.onScreenRestartNeeded(ve, Oe)
                } else if (be === 19) {
                    const we = G[1]
                      , ve = Ke(G, 2)
                      , Oe = [];
                    let Be = 4;
                    for (let ft = 0; ft < ve; ft++) {
                        const dt = G[Be++];
                        Oe.push(dt < 249 ? dt : 249 + ((dt - 249 << 8) + G[Be++]))
                    }
                    const Te = Ke(G, Be);
                    Be += 2;
                    const ot = [];
                    for (let ft = 0; ft < Te; ft++) {
                        const dt = G[Be++];
                        ot.push(dt < 249 ? dt : 249 + ((dt - 249 << 8) + G[Be++]))
                    }
                    const wt = Ke(G, Be);
                    Be += 2;
                    const vt = [];
                    for (let ft = 0; ft < wt; ft++) {
                        const dt = G[Be++];
                        vt.push(dt < 249 ? dt : 249 + ((dt - 249 << 8) + G[Be++])),
                        vt.push(G[Be++])
                    }
                    const Et = Ke(G, Be);
                    Be += 2;
                    const St = [];
                    for (let ft = 0; ft < Et; ft++) {
                        const dt = G[Be++];
                        St.push(dt < 249 ? dt : 249 + ((dt - 249 << 8) + G[Be++]))
                    }
                    A.onProxyConfig(we, Oe, ot, vt, St)
                } else if (be === 20) {
                    const we = G[1]
                      , ve = Ke(G, 2)
                      , Oe = gt(G, 4)
                      , Be = gt(G, 8);
                    let Te = 12;
                    const ot = G[Te];
                    Te += 1;
                    const wt = utilDecodeUtf8(G.subarray(Te, Te + ot));
                    Te += ot;
                    const vt = G[Te];
                    Te += 1;
                    const Et = utilDecodeUtf8(G.subarray(Te, Te + vt));
                    if (Te += vt,
                    we === 5) {
                        const St = G[Te];
                        Te += 1;
                        const ft = utilDecodeUtf8(G.subarray(Te, Te + St));
                        Te += St,
                        A.onProxyState(we, ve, Oe, Be, wt, Et, ft)
                    } else if (we === 6 || we === 7 || we == 8) {
                        const St = G[Te];
                        Te += 1;
                        const ft = utilDecodeUtf8(G.subarray(Te, Te + St));
                        Te += St;
                        const dt = G[Te];
                        Te += 1;
                        const mn = utilDecodeUtf8(G.subarray(Te, Te + dt));
                        Te += dt;
                        const qt = G[Te];
                        Te += 1;
                        const gn = utilDecodeUtf8(G.subarray(Te, Te + qt));
                        Te += qt,
                        A.onProxyState(we, ve, Oe, Be, wt, Et, ft, mn, gn)
                    } else
                        A.onProxyState(we, ve, Oe, Be, wt, Et)
                } else if (be === 21) {
                    const we = G[1];
                    if (we === 0) {
                        const ve = G[2];
                        A.onProxyError(ve)
                    } else if (we === 1) {
                        const ve = gt(G, 2)
                          , Oe = gt(G, 6);
                        A.onProxyMeter(ve, Oe)
                    }
                } else if (be === 255) {
                    const we = Ke(G, 1);
                    if (we === 13) {
                        const ve = Ke(G, 3)
                          , Oe = Ke(G, 5)
                          , Be = utilDecodeUtf8(G.subarray(7, 7 + ve))
                          , Te = utilDecodeUtf8(G.subarray(7 + ve, 7 + ve + Oe))
                          , ot = utilDecodeUtf8(G.subarray(7 + ve + Oe));
                        ye(Be, Te, ot)
                    } else
                        Ae(we)
                } else
                    Logging.userError("enc_unknown", {
                        data: [...G]
                    })
        }
    }
    ;
    A.connect = () => {
        Yt()
    }
}
function Queue(e, t, n, s, o, a) {
    const N = new Uint8Array([0])
      , p = this
      , O = () => {
        this.onConnected = () => {}
        ,
        this.onQueueUpdate = () => {}
        ,
        this.onYourTurn = () => {}
        ,
        this.onInvalidRequest = () => {}
        ,
        this.onFreeLimit = () => {}
        ,
        this.onDevLimit = () => {}
        ,
        this.onTeamLimit = () => {}
        ,
        this.onDisconnected = () => {}
        ,
        this.onDestroyed = () => {}
    }
    ;
    O();
    function $() {
        const B = {};
        B.hash = GIT_HASH,
        B.rid = Queue.rid,
        B.date = new Date().toString(),
        B.datel = new Date().toLocaleString(),
        B.lang = navigator.language,
        B.langs = navigator.languages,
        B.ref = document.referrer.slice(0, 1024),
        B.href = window.location.href.slice(0, 1024),
        B.hc = navigator.hardwareConcurrency,
        B.mem = navigator.deviceMemory,
        B.wd = navigator.webdriver,
        B.ft = Queue.ft,
        B.c = Queue.c,
        B.sc = Queue.sc,
        B.sm = Queue.sm,
        B.m = Queue.m;
        try {
            const xe = Intl.DateTimeFormat().resolvedOptions();
            B.loc = xe.locale,
            B.tz = xe.timeZone,
            xe.calendar !== "gregory" && (B.cal = xe.calendar),
            xe.day !== "numeric" && (B.day = xe.day),
            xe.month !== "numeric" && (B.month = xe.month),
            xe.year !== "numeric" && (B.year = xe.year),
            xe.numberingSystem !== "latn" && (B.nums = xe.numberingSystem)
        } catch (xe) {}
        const oe = []
          , he = []
          , He = [];
        function We(xe, Ve) {
            xe.indexOf(Ve) === -1 && xe.push(Ve)
        }
        function Me(xe) {
            try {
                const Ve = document.createElement("canvas")
                  , Ue = Ve.getContext("webgl", xe) || Ve.getContext("experimental-webgl", xe);
                Ue.getExtension("WEBGL_debug_renderer_info"),
                We(oe, Ue.getParameter(7937)),
                We(he, Ue.getParameter(37445)),
                We(He, Ue.getParameter(37446))
            } catch (Ve) {}
        }
        return Me(),
        Me({
            powerPreference: "high-performance"
        }),
        Me({
            powerPreference: "low-power"
        }),
        B.r = oe,
        B.iv = he,
        B.ir = He,
        B
    }
    let F, C = !1;
    function l() {
        C || (C = !0,
        O(),
        F.close())
    }
    const m = (B, oe) => B[oe + 1] << 8 | B[oe]
      , g = (B, oe) => B[oe + 3] << 24 | B[oe + 2] << 16 | B[oe + 1] << 8 | B[oe]
      , V = (B, oe, he) => {
        B[he] = oe & 255
    }
      , X = (B, oe, he) => {
        B[he] = oe & 255,
        B[he + 1] = oe >> 8 & 255
    }
      , W = (B, oe, he) => {
        B[he] = oe & 255,
        B[he + 1] = oe >> 8 & 255,
        B[he + 2] = oe >> 16 & 255,
        B[he + 3] = oe >> 24 & 255
    }
      , L = (B, oe, he) => {
        V(B, oe.length, he),
        B.set(oe, he + 1)
    }
      , H = (B, oe, he) => {
        X(B, oe.length, he),
        B.set(oe, he + 2)
    }
      , ne = (B, oe) => {
        const he = B[oe];
        return B.subarray(oe + 1, oe + 1 + he)
    }
      , de = (B, oe) => {
        const he = m(B, oe);
        return B.subarray(oe + 2, oe + 2 + he)
    }
    ;
    function ie(B, oe, he, He, We, Me) {
        const xe = utilDecodeBase64(oe)
          , Ve = utilEncodeUtf8(he)
          , Ue = utilEncodeUtf8(He)
          , tt = utilEncodeUtf8(We).subarray(0, 1024)
          , Je = utilEncodeUtf8(Me).subarray(0, 65535)
          , ke = 14 + xe.length + 1 + Ve.length + 1 + Ue.length + 2 + tt.length + 2 + Je.length
          , Ne = new Uint8Array(ke);
        let Ie = 0;
        W(Ne, 860181841, Ie),
        Ie += 4,
        W(Ne, 1, Ie),
        Ie += 4,
        W(Ne, B, Ie),
        Ie += 4,
        H(Ne, xe, Ie),
        Ie += 2 + xe.length,
        L(Ne, Ve, Ie),
        Ie += 1 + Ve.length,
        L(Ne, Ue, Ie),
        Ie += 1 + Ue.length,
        H(Ne, tt, Ie),
        Ie += 2 + tt.length,
        H(Ne, Je, Ie),
        Ie += 2 + Je.length,
        F.send(Ne)
    }
    function Z(B) {
        const oe = new Uint8Array(B)
          , he = oe[0];
        if (he === 0)
            F.send(N);
        else if (he === 1) {
            const He = de(oe, 1)
              , We = de(oe, 3 + He.length)
              , Me = utilDecodeUtf8(He)
              , xe = utilDecodeUtf8(We);
            p.onInvalidRequest(Me, xe),
            l()
        } else if (he === 2) {
            const He = g(oe, 1)
              , We = g(oe, 5)
              , Me = g(oe, 9);
            p.onQueueUpdate(He, We, Me)
        } else if (he === 3) {
            const He = ne(oe, 1)
              , We = utilEncodeBase64Url(He)
              , Me = utilDecodeUtf8(de(oe, 2 + He.length));
            p.onYourTurn(We, Me),
            l()
        } else if (he === 4) {
            const He = oe[1];
            p.onFreeLimit(He),
            l()
        } else if (he === 5)
            p.onDevLimit(),
            l();
        else if (he === 6) {
            const He = g(oe, 1)
              , We = oe[5];
            p.onTeamLimit(He, We),
            l()
        }
    }
    p.destroy = () => {
        p.onDestroyed(),
        l()
    }
    ,
    p.connect = () => {
        F = new eio(e),
        F.binaryType = "arraybuffer",
        F.on("open", () => {
            C || (console.log("[Queue] Eio open"),
            p.onConnected(),
            ie(t, n, s.name + "/" + s.version, o.name + "/" + o.version, a, JSON.stringify($())))
        }
        ),
        F.on("message", B => {
            C || (B instanceof ArrayBuffer ? Z(B) : Logging.userError("que_bad_data", {
                data: B
            }))
        }
        ),
        F.on("error", B => {
            C || console.log("[Queue] Eio error", B.message)
        }
        ),
        F.on("close", () => {
            p.onDisconnected(),
            l()
        }
        )
    }
}
Queue.rid = null,
Queue.ft = null,
Queue.c = null,
Queue.sc = null,
Queue.sm = null,
Queue.m = null;
const Logging = ( () => {
    const e = "/api/ui-event"
      , t = "/api/ui-error/user"
      , n = "/api/ui-error/js"
      , s = "/api/ui-error/promise"
      , o = "/api/browse-request"
      , a = "/api/1stats-browsing"
      , i = g => Object.entries(g).map(V => V.map(encodeURIComponent).join("=")).join("&")
      , c = g => g.split("").reduce( (V, X) => (V = (V << 5) - V + X.charCodeAt(0),
    V |= 0,
    V), 0)
      , u = new Set;
    let y = new Date().getTime();
    const f = {}
      , D = () => {
        let g = new Date().getTime() - y
          , V = document.visibilityState;
        return V === "visible" ? V = 1 : V === "hidden" && (V = 0),
        bt({
            v: GIT_HASH,
            t: g,
            f: V
        }, f)
    }
      , x = g => new Promise(V => setTimeout( () => V(), g))
      , v = 1
      , d = 2
      , P = 4
      , N = async (g, V, X=0) => {
        const W = i(V)
          , L = c(g + W);
        if (u.has(L) && X & P)
            return null;
        u.add(L),
        X & d && (V.diagnostics = JSON.stringify(D()));
        const H = i(V);
        let ne = 0;
        for (; ; ) {
            const de = await fetch(g, {
                keepalive: !!(X & v),
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Content-Length": H.length.toString()
                },
                mode: "cors",
                cache: "no-cache",
                credentials: "include",
                body: H
            }).catch( () => null);
            if (de)
                return de;
            if (++ne >= 3)
                return null;
            await x(500)
        }
    }
      , p = g => y = g
      , O = (g, V) => {
        typeof f[g] == "undefined" && (f[g] = V)
    }
      , $ = async g => N(e, {
        event: g
    }, v)
      , F = async (g, V) => N(t, {
        type: g,
        data: JSON.stringify(V)
    }, d | P)
      , C = async (g, V, X, W) => N(o, {
        page_type: "new",
        browse_type: W,
        platform_name: g.name,
        platform_version: g.version,
        browser: V.name,
        version: V.version,
        url: X
    })
      , l = async g => N(a, {
        type: g
    })
      , m = g => typeof g.stack != "undefined" && typeof g.message != "undefined" ? {
        errorText: g.message,
        errorDetail: g.stack
    } : {
        errorText: g.toString(),
        errorDetail: JSON.stringify(g)
    };
    return window.addEventListener("error", ({message: g, filename: V, lineno: X, colno: W, error: L}) => {
        g === "Script error." || !L || N(n, bt({
            url: window.location.href,
            message: g,
            filename: V,
            lineno: X,
            colno: W
        }, m(L)), d | P)
    }
    ),
    window.addEventListener("unhandledrejection", ({reason: g}) => {
        g && N(s, bt({
            url: window.location.href,
            type: "unhandled"
        }, m(g)), d | P)
    }
    ),
    window.addEventListener("rejectionhandled", ({reason: g}) => {
        g && N(s, bt({
            url: window.location.href,
            type: "handled"
        }, m(g)), d | P)
    }
    ),
    {
        uiEvent: $,
        userError: F,
        timeStart: p,
        diagnosticData: O,
        browseRequest: C,
        browseStats: l
    }
}
)()
  , KeyMap = ( () => {
    const e = "Alt,AltGraph,CapsLock,Control,Fn,FnLock,Meta,NumLock,ScrollLock,Shift,Symbol,SymbolLock,Hyper,Super,Enter,Tab,ArrowDown,ArrowLeft,ArrowRight,ArrowUp,End,Home,PageDown,PageUp,Backspace,Clear,Copy,CrSel,Cut,Delete,EraseEof,ExSel,Insert,Paste,Redo,Undo,Accept,Again,Attn,Cancel,ContextMenu,Escape,Execute,Find,Help,Pause,Play,Props,Select,ZoomIn,ZoomOut,BrightnessDown,BrightnessUp,Eject,LogOff,Power,PowerOff,PrintScreen,Hibernate,Standby,WakeUp,AllCandidates,Alphanumeric,CodeInput,Compose,Convert,Dead,FinalMode,GroupFirst,GroupLast,GroupNext,GroupPrevious,ModeChange,NextCandidate,NonConvert,PreviousCandidate,Process,SingleCandidate,HangulMode,HanjaMode,JunjaMode,Eisu,Hankaku,Hiragana,HiraganaKatakana,KanaMode,KanjiMode,Katakana,Romaji,Zenkaku,ZenkakuHankaku,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,Soft1,Soft2,Soft3,Soft4,ChannelDown,ChannelUp,Close,MailForward,MailReply,MailSend,MediaClose,MediaFastForward,MediaPause,MediaPlay,MediaPlayPause,MediaRecord,MediaRewind,MediaStop,MediaTrackNext,MediaTrackPrevious,New,Open,Print,Save,SpellCheck,Key11,Key12,AudioBalanceLeft,AudioBalanceRight,AudioBassBoostDown,AudioBassBoostToggle,AudioBassBoostUp,AudioFaderFront,AudioFaderRear,AudioSurroundModeNext,AudioTrebleDown,AudioTrebleUp,AudioVolumeDown,AudioVolumeUp,AudioVolumeMute,MicrophoneToggle,MicrophoneVolumeDown,MicrophoneVolumeUp,MicrophoneVolumeMute,SpeechCorrectionList,SpeechInputToggle,LaunchApplication1,LaunchApplication2,LaunchCalendar,LaunchContacts,LaunchMail,LaunchMediaPlayer,LaunchMusicPlayer,LaunchPhone,LaunchScreenSaver,LaunchSpreadsheet,LaunchWebBrowser,LaunchWebCam,LaunchWordProcessor,BrowserBack,BrowserFavorites,BrowserForward,BrowserHome,BrowserRefresh,BrowserSearch,BrowserStop,AppSwitch,Call,Camera,CameraFocus,EndCall,GoBack,GoHome,HeadsetHook,LastNumberRedial,Notification,MannerMode,VoiceDial,TV,TV3DMode,TVAntennaCable,TVAudioDescription,TVAudioDescriptionMixDown,TVAudioDescriptionMixUp,TVContentsMenu,TVDataService,TVInput,TVInputComponent1,TVInputComponent2,TVInputComposite1,TVInputComposite2,TVInputHDMI1,TVInputHDMI2,TVInputHDMI3,TVInputHDMI4,TVInputVGA1,TVMediaContext,TVNetwork,TVNumberEntry,TVPower,TVRadioService,TVSatellite,TVSatelliteBS,TVSatelliteCS,TVSatelliteToggle,TVTerrestrialAnalog,TVTerrestrialDigital,TVTimer,AVRInput,AVRPower,ColorF0Red,ColorF1Green,ColorF2Yellow,ColorF3Blue,ColorF4Grey,ColorF5Brown,ClosedCaptionToggle,Dimmer,DisplaySwap,DVR,Exit,FavoriteClear0,FavoriteClear1,FavoriteClear2,FavoriteClear3,FavoriteRecall0,FavoriteRecall1,FavoriteRecall2,FavoriteRecall3,FavoriteStore0,FavoriteStore1,FavoriteStore2,FavoriteStore3,Guide,GuideNextDay,GuidePreviousDay,Info,InstantReplay,Link,ListProgram,LiveContent,Lock,MediaApps,MediaAudioTrack,MediaLast,MediaSkipBackward,MediaSkipForward,MediaStepBackward,MediaStepForward,MediaTopMenu,NavigateIn,NavigateNext,NavigateOut,NavigatePrevious,NextFavoriteChannel,NextUserProfile,OnDemand,Pairing,PinPDown,PinPMove,PinPToggle,PinPUp,PlaySpeedDown,PlaySpeedReset,PlaySpeedUp,RandomToggle,RcLowBattery,RecordSpeedNext,RfBypass,ScanChannelsToggle,ScreenModeNext,Settings,SplitScreenToggle,STBInput,STBPower,Subtitle,Teletext,VideoModeNext,Wink,ZoomToggle,Backquote,Backslash,BracketLeft,BracketRight,Comma,Digit0,Digit1,Digit2,Digit3,Digit4,Digit5,Digit6,Digit7,Digit8,Digit9,Equal,IntlBackslash,IntlRo,IntlYen,KeyA,KeyB,KeyC,KeyD,KeyE,KeyF,KeyG,KeyH,KeyI,KeyJ,KeyK,KeyL,KeyM,KeyN,KeyO,KeyP,KeyQ,KeyR,KeyS,KeyT,KeyU,KeyV,KeyW,KeyX,KeyY,KeyZ,Minus,Period,Quote,Semicolon,Slash,AltLeft,AltRight,ControlLeft,ControlRight,MetaLeft,MetaRight,ShiftLeft,ShiftRight,Space,Lang1,Lang2,Lang3,Lang4,Lang5,Numpad0,Numpad1,Numpad2,Numpad3,Numpad4,Numpad5,Numpad6,Numpad7,Numpad8,Numpad9,NumpadAdd,NumpadBackspace,NumpadClear,NumpadClearEntry,NumpadComma,NumpadDecimal,NumpadDivide,NumpadEnter,NumpadEqual,NumpadHash,NumpadMemoryAdd,NumpadMemoryClear,NumpadMemoryRecall,NumpadMemoryStore,NumpadMemorySubtract,NumpadMultiply,NumpadParenLeft,NumpadParenRight,NumpadStar,NumpadSubtract,LaunchApp1,LaunchApp2,MediaSelect,Sleep,Turbo,Abort,Resume,Suspend".split(",")
      , t = new Map;
    for (let u = 0; u < e.length; u++)
        t.set(e[u], u + 1);
    const n = "insertText,insertReplacementText,insertLineBreak,insertParagraph,insertOrderedList,insertUnorderedList,insertHorizontalRule,insertFromYank,insertFromDrop,insertFromPaste,insertFromPasteAsQuotation,insertTranspose,insertCompositionText,insertLink,deleteWordBackward,deleteWordForward,deleteSoftLineBackward,deleteSoftLineForward,deleteEntireSoftLine,deleteHardLineBackward,deleteHardLineForward,deleteByDrag,deleteByCut,deleteContent,deleteContentBackward,deleteContentForward,historyUndo,historyRedo,formatBold,formatItalic,formatUnderline,formatStrikeThrough,formatSuperscript,formatSubscript,formatJustifyFull,formatJustifyCenter,formatJustifyRight,formatJustifyLeft,formatIndent,formatOutdent,formatRemove,formatSetBlockTextDirection,formatSetInlineTextDirection,formatBackColor,formatFontColor,formatFontName".split(",")
      , s = new Map;
    for (let u = 0; u < n.length; u++)
        s.set(n[u], u + 1);
    const o = `0XX Unknown
0XW World
6AD Andorra
1AE United Arab Emirates
1AF Afghanistan
3AG Antigua and Barbuda
3AI Anguilla
6AL Albania
1AM Armenia
2AO Angola
5AQ Antarctica
4AR Argentina
7AS American Samoa
6AT Austria
7AU Australia
3AW Aruba
6AX \xC5land Islands
1AZ Azerbaijan
6BA Bosnia and Herzegovina
3BB Barbados
1BD Bangladesh
6BE Belgium
2BF Burkina Faso
6BG Bulgaria
1BH Bahrain
2BI Burundi
2BJ Benin
3BL Saint Barth\xE9lemy
3BM Bermuda
1BN Brunei Darussalam
4BO Bolivia
3BQ Bonaire, Sint Eustatius and Saba
4BR Brazil
3BS Bahamas
1BT Bhutan
5BV Bouvet Island
2BW Botswana
6BY Belarus
3BZ Belize
3CA Canada
1CC Cocos Keeling Islands
2CD DR Congo
2CF Central African Republic
2CG Congo
6CH Switzerland
2CI C\xF4te d'Ivoire
7CK Cook Islands
4CL Chile
2CM Cameroon
1CN China
4CO Colombia
3CR Costa Rica
3CU Cuba
2CV Cabo Verde
3CW Cura\xE7ao
1CX Christmas Island
1CY Cyprus
6CZ Czechia
6DE Germany
2DJ Djibouti
6DK Denmark
3DM Dominica
3DO Dominican Republic
2DZ Algeria
4EC Ecuador
6EE Estonia
2EG Egypt
2EH Western Sahara
2ER Eritrea
6ES Spain
2ET Ethiopia
6FI Finland
7FJ Fiji
4FK Falkland Islands
7FM Micronesia
6FO Faroe Islands
6FR France
2GA Gabon
6GB United Kingdom
3GD Grenada
1GE Georgia
4GF French Guiana
6GG Guernsey
2GH Ghana
6GI Gibraltar
3GL Greenland
2GM Gambia
2GN Guinea
3GP Guadeloupe
2GQ Equatorial Guinea
6GR Greece
5GS South Georgia and the South Sandwich Islands
3GT Guatemala
7GU Guam
2GW Guinea-Bissau
4GY Guyana
1HK Hong Kong
5HM Heard Island and McDonald Islands
3HN Honduras
6HR Croatia
3HT Haiti
6HU Hungary
1ID Indonesia
6IE Ireland
1IL Israel
6IM Isle of Man
1IN India
2IO British Indian Ocean Territory
1IQ Iraq
1IR Iran
6IS Iceland
6IT Italy
6JE Jersey
3JM Jamaica
1JO Jordan
1JP Japan
2KE Kenya
1KG Kyrgyzstan
1KH Cambodia
7KI Kiribati
2KM Comoros
3KN Saint Kitts and Nevis
1KP North Korea
1KR South Korea
1KW Kuwait
3KY Cayman Islands
1KZ Kazakhstan
1LA Laos
1LB Lebanon
3LC Saint Lucia
6LI Liechtenstein
1LK Sri Lanka
2LR Liberia
2LS Lesotho
6LT Lithuania
6LU Luxembourg
6LV Latvia
2LY Libya
2MA Morocco
6MC Monaco
6MD Moldova
6ME Montenegro
3MF Saint Martin
2MG Madagascar
7MH Marshall Islands
6MK North Macedonia
2ML Mali
1MM Myanmar
1MN Mongolia
1MO Macao
7MP Northern Mariana Islands
3MQ Martinique
2MR Mauritania
3MS Montserrat
6MT Malta
2MU Mauritius
1MV Maldives
2MW Malawi
3MX Mexico
1MY Malaysia
2MZ Mozambique
2NA Namibia
7NC New Caledonia
2NE Niger
7NF Norfolk Island
2NG Nigeria
3NI Nicaragua
6NL Netherlands
6NO Norway
1NP Nepal
7NR Nauru
7NU Niue
7NZ New Zealand
1OM Oman
3PA Panama
4PE Peru
7PF French Polynesia
7PG Papua New Guinea
1PH Philippines
1PK Pakistan
6PL Poland
3PM Saint Pierre and Miquelon
7PN Pitcairn
3PR Puerto Rico
1PS Palestine
6PT Portugal
7PW Palau
4PY Paraguay
1QA Qatar
2RE R\xE9union
6RO Romania
6RS Serbia
6RU Russia
2RW Rwanda
1SA Saudi Arabia
7SB Solomon Islands
2SC Seychelles
2SD Sudan
6SE Sweden
1SG Singapore
2SH Saint Helena, Ascension and Tristan da Cunha
6SI Slovenia
6SJ Svalbard and Jan Mayen
6SK Slovakia
2SL Sierra Leone
6SM San Marino
2SN Senegal
2SO Somalia
4SR Suriname
2SS South Sudan
2ST Sao Tome and Principe
3SV El Salvador
3SX Sint Maarten
1SY Syria
2SZ Eswatini
3TC Turks and Caicos Islands
2TD Chad
2TF French Southern Territories
2TG Togo
1TH Thailand
1TJ Tajikistan
7TK Tokelau
1TL Timor-Leste
1TM Turkmenistan
2TN Tunisia
7TO Tonga
1TR Turkey
3TT Trinidad and Tobago
7TV Tuvalu
1TW Taiwan
2TZ Tanzania
6UA Ukraine
2UG Uganda
7UM United States Minor Outlying Islands
3US United States
4UY Uruguay
1UZ Uzbekistan
6VA Holy See
3VC Saint Vincent and the Grenadines
4VE Venezuela
3VG Virgin Islands (British)
3VI Virgin Islands (U.S.)
1VN Viet Nam
7VU Vanuatu
7WF Wallis and Futuna
7WS Samoa
1YE Yemen
2YT Mayotte
2ZA South Africa
2ZM Zambia
2ZW Zimbabwe
3USE United States (East)
3USW United States (West)
3USC United States (Central)
3USH United States (Hawaii)`.split(`
`).map(u => {
        const y = u.indexOf(" ")
          , f = u.slice(1, y)
          , D = u.slice(y + 1)
          , x = u.slice(1, 3)
          , v = parseInt(u.slice(0, 1))
          , d = x === "XX" ? "\u2753" : x === "XW" ? "\u{1F30E}" : String.fromCodePoint(...[...x].map(P => P.codePointAt(0) + 127397));
        return {
            cn: v,
            cc: f,
            name: D,
            flag: d,
            alpha2: x
        }
    }
    );
    function a(u) {
        switch (u) {
        case 59:
            return 186;
        case 61:
            return 187;
        case 173:
            return 189;
        default:
            return u
        }
    }
    function i(u) {
        return t.get(u)
    }
    function c(u) {
        return s.get(u)
    }
    return {
        lookupNKA: i,
        lookupIT: c,
        fixKeyCode: a,
        countryCodes: o
    }
}
)();
function MovableElement(e, t, n) {
    n || (n = b => ({
        top: b.height + 24,
        left: 24,
        right: 24,
        bottom: 24
    })),
    this.onMoveStart = () => {}
    ,
    this.onMoveEnd = () => {}
    ,
    this.isDraggable = () => !0,
    this.isResizable = () => !1,
    this.isDragSurface = b => !b.some(R => R.classList.contains("prevents-move"));
    const {NONE: s, DRAGGING: o, RESIZING: a} = MovableElement.MoveType;
    this.offsetX = 0,
    this.offsetY = 0,
    this.moveType = s,
    this.currentWidth = 0,
    this.currentHeight = 0,
    this.mainElement = e;
    let i = 0
      , c = 0
      , u = 0
      , y = 0
      , f = 0;
    ( () => {
        MovableElement.ALL_MOVABLES.push(this);
        const b = MovableElement.ALL_MOVABLES.length;
        this.mainElement.style.zIndex = (100 + b).toString()
    }
    )();
    const x = () => {
        const b = getComputedStyle(this.mainElement);
        y = parseInt(b.minWidth.slice(0, -2)),
        f = parseInt(b.minHeight.slice(0, -2))
    }
    ;
    this.getLastMoveDistance = () => Math.max(Math.abs(i), Math.abs(c)),
    this.getLastMoveDuration = () => new Date().getTime() - u;
    const v = () => this.mainElement.getBoundingClientRect()
      , d = () => this.mainElement.parentElement ? this.mainElement.parentElement.getBoundingClientRect() : null
      , P = () => {
        t && t.setBox(Math.round(this.offsetX), Math.round(this.offsetY), Math.round(this.currentWidth), Math.round(this.currentHeight))
    }
      , N = () => {
        const b = v();
        this.currentWidth = b.width,
        this.currentHeight = b.height,
        this.offsetX = b.left,
        this.offsetY = b.top,
        P()
    }
      , p = () => {
        if (MovableElement.ALL_MOVABLES.length == 1)
            return;
        const b = MovableElement.ALL_MOVABLES.length
          , R = MovableElement.ALL_MOVABLES.indexOf(this);
        if (R == b - 1)
            return;
        const Y = this;
        Y.mainElement.style.zIndex = (100 + b).toString();
        for (let fe = R + 1; fe < MovableElement.ALL_MOVABLES.length; fe++)
            MovableElement.ALL_MOVABLES[fe].mainElement.style.zIndex = (100 + fe).toString();
        MovableElement.ALL_MOVABLES.splice(R, 1),
        MovableElement.ALL_MOVABLES.push(Y)
    }
    ;
    this.bringToTop = () => p(),
    this.topY = b => {
        const R = d();
        if (R) {
            const Y = R.y + b;
            this.setPosition(this.offsetX, Y)
        }
    }
    ,
    this.bottomY = b => {
        const R = v()
          , Y = d();
        if (Y) {
            const fe = Y.y + Y.height - R.height - b;
            this.setPosition(this.offsetX, fe)
        }
    }
    ,
    this.leftX = b => {
        const R = d();
        if (R) {
            const Y = R.x + b;
            this.setPosition(Y, this.offsetY)
        }
    }
    ,
    this.rightX = b => {
        const R = v()
          , Y = d();
        if (Y) {
            const fe = Y.x + Y.width - R.width - b;
            this.setPosition(fe, this.offsetY)
        }
    }
    ,
    this.centerY = () => {
        const b = v()
          , R = d();
        if (R) {
            const Y = R.y + (R.height - b.height) / 2;
            return this.setPosition(this.offsetX, Y),
            Y
        }
        return 0
    }
    ,
    this.centerX = () => {
        const b = v()
          , R = d();
        if (R) {
            const Y = R.x + (R.width - b.width) / 2;
            return this.setPosition(Y, this.offsetY),
            Y
        }
        return 0
    }
    ,
    this.moveBy = (b, R) => {
        i += b,
        c += R;
        const Y = this.offsetX
          , fe = this.offsetY;
        return this.setPosition(this.offsetX + b, this.offsetY + R),
        [this.offsetX - Y, this.offsetY - fe]
    }
    ,
    this.resizeBy = (b, R) => {
        const Y = this.currentWidth
          , fe = this.currentHeight;
        return this.setSize(this.currentWidth + b, this.currentHeight + R),
        [this.currentWidth - Y, this.currentHeight - fe]
    }
    ,
    this.setSizeAndPosition = (b, R, Y, fe) => {
        const le = Y - this.offsetX
          , Se = fe - this.offsetY
          , [De,ze] = this.setSize(b, R);
        let[at,Fe] = [Y, fe];
        if (De > b) {
            const Ze = De - b;
            le > 0 && (at = Y - Ze)
        }
        if (ze > R) {
            const Ze = ze - R;
            Se > 0 && (Fe = fe - Ze)
        }
        this.setPosition(at, Fe)
    }
    ,
    this.setWidth = b => this.setSize(b, this.currentHeight),
    this.setHeight = b => this.setSize(this.currentWidth, b),
    this.setSize = (b, R) => (b < y && (b = y),
    R < f && (R = f),
    this.currentWidth = b,
    this.currentHeight = R,
    this.mainElement.style.width = `${Math.round(b)}px`,
    this.mainElement.style.height = `${Math.round(R)}px`,
    P(),
    [this.currentWidth, this.currentHeight]),
    this.setX = b => this.setPosition(b, this.offsetY),
    this.setY = b => this.setPosition(this.offsetX, b),
    this.setPosition = (b, R) => {
        const Y = this.offsetX
          , fe = this.offsetY;
        this.offsetX = b,
        this.offsetY = R;
        const le = Y - this.offsetX
          , Se = fe - this.offsetY;
        return i += le,
        c += Se,
        this.mainElement.style.left = `${Math.round(b)}px`,
        this.mainElement.style.top = `${Math.round(R)}px`,
        P(),
        [this.offsetX, this.offsetY]
    }
    ;
    const O = b => this.mainElement.style.cursor = b
      , $ = () => {
        const b = v()
          , R = d();
        if (!R)
            return;
        let Y = 0
          , fe = 0;
        const {top: le, left: Se, right: De, bottom: ze} = n(b, R)
          , at = b.x + b.width
          , Fe = R.x + R.width + (b.width - De)
          , Ze = b.x
          , st = R.x - (b.width - Se);
        at >= Fe ? Y -= at - Fe : Ze <= st && (Y += st - Ze);
        const J = b.y + b.height
          , Le = R.y + R.height + (b.height - ze)
          , $e = b.y
          , et = R.y - (b.height - le);
        J >= Le ? fe -= J - Le : $e <= et && (fe += et - $e),
        this.moveBy(Y, fe)
    }
    ;
    let F = null;
    const C = b => {
        MovableElement.ACTIVE_MOVABLES.add(this),
        p(),
        N(),
        tt(b),
        i = 0,
        c = 0,
        this.moveType = o,
        this.onMoveStart(),
        O("grabbing")
    }
    ;
    let l = null;
    const m = (b, R) => {
        MovableElement.ACTIVE_MOVABLES.add(this),
        p(),
        N(),
        tt(b),
        x(),
        this.moveType = a,
        l = R
    }
      , g = () => {
        MovableElement.ACTIVE_MOVABLES.delete(this),
        this.moveType = s,
        l = null,
        F = null
    }
      , V = () => {
        MovableElement.ACTIVE_MOVABLES.delete(this),
        u = new Date().getTime(),
        this.moveType = s,
        F = null,
        this.onMoveEnd(),
        O("")
    }
    ;
    N();
    const {N: X, W, S: L, E: H, NW: ne, NE: de, SW: ie, SE: Z, OUTSIDE: B, INSIDE: oe} = MovableElement.ResizeDirection
      , he = ({clientX: b, clientY: R}, Y=0, fe=4, le=!1) => {
        const {top: Se, left: De, bottom: ze, right: at} = v()
          , Fe = b >= De - Y && b <= at + Y
          , Ze = R >= Se - Y && R <= ze + Y;
        if (!Fe || !Ze)
            return le ? B : null;
        const st = R >= Se - Y && R <= Se + fe
          , J = b >= De - Y && b <= De + fe
          , Le = b >= at - fe && b <= at + Y
          , $e = R >= ze - fe && R <= ze + Y;
        return st && J ? ne : st && Le ? de : $e && J ? ie : $e && Le ? Z : st ? X : J ? W : Le ? H : $e ? L : le ? oe : null
    }
    ;
    let He, We, Me, xe, Ve, Ue;
    const tt = ({clientX: b, clientY: R}) => {
        He = this.currentWidth,
        We = this.currentHeight,
        Me = this.offsetX,
        xe = this.offsetY,
        Ve = b,
        Ue = R
    }
      , Je = ({clientX: b, clientY: R}) => {
        const [Y,fe] = [Me, xe]
          , le = Ve - b
          , Se = Ue - R;
        O("grabbing"),
        this.setPosition(Y - le, fe - Se)
    }
      , ke = b => {
        switch (b) {
        case ne:
        case Z:
            O("nwse-resize");
            break;
        case de:
        case ie:
            O("nesw-resize");
            break;
        case X:
        case L:
            O("ns-resize");
            break;
        case H:
        case W:
            O("ew-resize");
            break;
        default:
            O("");
            break
        }
    }
      , Ne = ({clientX: b, clientY: R}) => {
        const [Y,fe] = [Me, xe]
          , [le,Se] = [He, We]
          , De = Ve - b
          , ze = Ue - R;
        switch (l) {
        case Z:
            this.setSize(le - De, Se - ze);
            break;
        case H:
            this.setSize(le - De, Se);
            break;
        case L:
            this.setSize(le, Se - ze);
            break;
        case X:
            this.setSizeAndPosition(le, Se + ze, Y, fe - ze);
            break;
        case W:
            this.setSizeAndPosition(le + De, Se, Y - De, fe);
            break;
        case de:
            this.setSizeAndPosition(le - De, Se + ze, Y, fe - ze);
            break;
        case ne:
            this.setSizeAndPosition(le + De, Se + ze, Y - De, fe - ze);
            break;
        case ie:
            this.setSizeAndPosition(le + De, Se - ze, Y - De, fe);
            break
        }
        ke(l)
    }
      , Ie = b => {
        b.stopPropagation(),
        b.preventDefault()
    }
      , j = (b, R=4) => {
        if (this.isResizable()) {
            const Y = he(b, 0, R);
            if (Y !== null)
                return {
                    move: a,
                    handle: Y
                }
        }
        if (this.isDraggable()) {
            const Y = this.getPathToMain(b.target);
            if (Y && this.isDragSurface(Y))
                return {
                    move: o
                }
        }
        return {
            move: s
        }
    }
    ;
    this.mainElement.addEventListener("mousedown", b => {
        if (this.moveType === s && b.buttons === 1) {
            const R = j(b);
            R.move === a ? (Ie(b),
            m(b, R.handle)) : R.move === o && (Ie(b),
            C(b))
        }
    }
    , {
        capture: !0
    }),
    this.mainElement.addEventListener("touchstart", b => {
        if (this.moveType === s)
            for (const R of b.targetTouches) {
                const Y = j(R, 6);
                Y.move === a ? (F = R.identifier,
                b.stopPropagation(),
                m(R, Y.handle)) : Y.move === o && (F = R.identifier,
                b.stopPropagation(),
                C(R))
            }
    }
    , {
        capture: !0,
        passive: !0
    }),
    this.mainElement.addEventListener("click", () => p(), {
        capture: !0
    }),
    this.mainElement.addEventListener("mousemove", b => {
        if (this.moveType === s && this.isResizable()) {
            const R = he(b);
            R !== null ? ke(R) : O("")
        }
    }
    ),
    this.addGlobalListener("mousemove", b => {
        b.buttons === 1 && (this.moveType === o ? (Ie(b),
        Je(b)) : this.moveType === a && (Ie(b),
        Ne(b)))
    }
    , {
        capture: !0
    });
    const Q = b => {
        if (F === null)
            return null;
        for (const R of b)
            if (R.identifier === F)
                return R;
        return null
    }
    ;
    this.addGlobalListener("touchmove", b => {
        const R = Q(b.touches);
        R !== null && (this.moveType === o ? (Ie(b),
        Je(R)) : this.moveType === a && (Ie(b),
        Ne(R)))
    }
    , {
        capture: !0
    }),
    this.addGlobalListener("touchend", b => {
        Q(b.changedTouches) !== null && (this.moveType === o ? (V(),
        $()) : this.moveType === a && g())
    }
    ),
    this.addGlobalListener("mouseup", () => {
        this.moveType === o ? (V(),
        $()) : this.moveType === a && g()
    }
    )
}
MovableElement.ALL_MOVABLES = [],
MovableElement.OWN_LISTENERS = new Map,
MovableElement.EVENT_HANDLERS = new Map,
MovableElement.ACTIVE_MOVABLES = new Set,
MovableElement.prototype.getHandlersFor = function(e) {
    let t = MovableElement.OWN_LISTENERS.get(this);
    t || (t = new Map,
    MovableElement.OWN_LISTENERS.set(this, t));
    let n = t.get(e);
    return n || (n = [],
    t.set(e, n)),
    n
}
,
MovableElement.handleDocumentEvent = function(e, t) {
    for (const n of MovableElement.ACTIVE_MOVABLES)
        for (const s of n.getHandlersFor(e))
            s.call(null, t)
}
,
MovableElement.prototype.addGlobalListener = function(e, t, {passive: n=!1, capture: s=!1}={}) {
    const o = e + (n ? "_passive" : "") + (s ? "_capture" : "");
    if (!MovableElement.EVENT_HANDLERS.has(o)) {
        const a = i => MovableElement.handleDocumentEvent(o, i);
        document.addEventListener(e, a, {
            passive: n,
            capture: s
        }),
        MovableElement.EVENT_HANDLERS.set(o, a)
    }
    this.getHandlersFor(o).push(t)
}
,
MovableElement.MoveType = {
    NONE: Symbol("NONE"),
    DRAGGING: Symbol("DRAGGING"),
    RESIZING: Symbol("RESIZING")
},
MovableElement.ResizeDirection = {
    N: Symbol("N"),
    W: Symbol("W"),
    E: Symbol("E"),
    S: Symbol("S"),
    NW: Symbol("NW"),
    NE: Symbol("NE"),
    SW: Symbol("SW"),
    SE: Symbol("SE"),
    OUTSIDE: Symbol("OUTSIDE"),
    INSIDE: Symbol("INSIDE")
},
MovableElement.prototype.roundPxValue = (e, t=100) => {
    const n = Math.round(window.devicePixelRatio * 100) / 100
      , s = Math.floor(e * 10)
      , o = a => a === Math.floor(a);
    for (let a = 0; a < t; a++) {
        const i = (s + a) / 10;
        if (o(i * n))
            return i
    }
    return e
}
,
MovableElement.prototype.getPathToMain = function(e) {
    const t = [];
    let n = e;
    do {
        if (t.push(n),
        n === this.mainElement)
            return t;
        n = n.parentElement || n.parentNode
    } while (n !== null && n.nodeType === 1);
    return null
}
;
function Spinner({lineCount: e=12, lineLength: t=7, lineThickness: n=5, circleRadius: s=10, cornerRoundness: o=1, rotationsPerSecond: a=1, rotationOffset: i=0, spinDirection: c=Spinner.CLOCKWISE, cssLineColor: u="#ffffff", cssFadeColor: y="transparent", cssAnimationName: f="spinner-line-fade-quick", cssBoxShadow: D="0 0 1px transparent"}={}) {
    const x = (p, O, $) => {
        const F = $ * Math.PI / 180
          , C = Math.sin(F)
          , l = Math.cos(F);
        return [Math.round((p * l + O * C) * 1e3) / 1e3, Math.round((-p * C + O * l) * 1e3) / 1e3]
    }
      , v = (p, O) => p.map(l => {
        var m = l
          , {x: $, y: F} = m
          , C = Xt(m, ["x", "y"]);
        return bt({
            xy: x($, F, O)
        }, C)
    }
    ).map( ({prefix: $, xy: [F,C], sx: l, sy: m, end: g}) => `${$}${F}${l} ${C}${m}${g}`).join(", ")
      , d = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/
      , P = p => p.split(",").map(O => O.match(d)).filter(O => O != null).map( ([,O,$,,F,C,,l,m]) => ({
        prefix: O || "",
        x: parseInt($),
        y: parseInt(C),
        sx: !$ && !F ? l : F,
        sy: !C && !l ? F : l,
        end: m || ""
    }))
      , N = () => {
        const p = Math.round(o * n * 500) / 1e3 + "px"
          , O = document.createDocumentFragment()
          , $ = P(D);
        for (let F = 0; F < e; F++) {
            const C = ~~(360 / e * F + i)
              , l = document.createElement("div");
            l.style.position = "absolute",
            l.style.top = `${-n / 2}px`,
            l.style.width = `${t + n}px`,
            l.style.height = `${n}px`,
            l.style.background = y,
            l.style.borderRadius = p,
            l.style.transformOrigin = "left",
            l.style.transform = `rotate(${C}deg) translateX(${s}px)`;
            const m = c === Spinner.CLOCKWISE ? 1 : -1
              , g = F * m / e / a - 1 / a
              , V = document.createElement("div");
            V.style.width = "100%",
            V.style.height = "100%",
            V.style.background = u,
            V.style.borderRadius = p,
            V.style.boxShadow = v($, C),
            V.style.animation = `${1 / a}s linear ${g}s infinite ${f}`,
            l.appendChild(V),
            O.appendChild(l)
        }
        return O
    }
    ;
    this.element = document.createElement("div"),
    this.element.classList.add("spinner"),
    this.element.setAttribute("role", "progressbar"),
    this.element.appendChild(N()),
    this.element.style.width = "0"
}
Spinner.CLOCKWISE = Symbol("CLOCKWISE"),
Spinner.COUNTER_CLOCKWISE = Symbol("COUNTER_CLOCKWISE");
function PlatformList(e) {
    const t = new WeakMap;
    this.element = document.createElement("div");
    for (const {group: n, items: s} of e) {
        const o = utilFromHtml(`<div class="option-title">${n}</div>`);
        this.element.appendChild(o);
        for (const a of s) {
            const i = utilFromHtml(`
<div class="option-item">
<svg class="select-icon"><use xlink:href="${a.icon}"></use></svg>
<span class="select-name">${a.displayName}</span>
</div>`);
            t.set(i, a.id),
            this.element.appendChild(i)
        }
    }
    this.onSelected = () => {}
    ,
    this.element.addEventListener("click", utilDelegateListener( (n, s) => {
        const o = t.get(n);
        return o ? (this.onSelected(o),
        s.stopPropagation(),
        s.preventDefault(),
        !0) : !1
    }
    ))
}
function BrowserList(e, t) {
    const o = new WeakMap
      , a = new WeakMap
      , i = new WeakMap;
    let c = null;
    this.setActiveVersion = d => {
        for (const P of this.element.querySelectorAll(".option-version")) {
            const N = a.get(P);
            P.removeAttribute("data-active"),
            N === d && P.setAttribute("data-active", "true")
        }
        c = d
    }
    ;
    const u = d => {
        for (const N of d.querySelectorAll(".option-version"))
            a.delete(N);
        const P = d.querySelector(".option-expand");
        P && i.delete(P)
    }
      , y = (d, P) => {
        const N = utilFromHtml('<div class="option-versions"></div>')
          , p = d.length
          , O = Math.min(P, p);
        for (let $ = 0; $ < O; $++) {
            const F = d[$]
              , C = utilFromHtml(`<div class="option-version">${F.getDisplayVersion()}</div>`);
            c !== null && F === c && C.setAttribute("data-active", "true"),
            a.set(C, F),
            N.appendChild(C)
        }
        if (O < p) {
            const $ = p - O
              , F = utilFromHtml(`<div class="option-expand">... ${$} more</div>`);
            N.appendChild(F),
            i.set(F, {
                listToUpdate: N,
                itemsToExpand: d,
                howMuchWasShown: O
            })
        }
        return N
    }
    ;
    this.element = document.createElement("div"),
    this.onApp = () => {}
    ;
    const f = document.createElement("div");
    f.className = "option-apps";
    let D;
    const x = () => {
        clearTimeout(D),
        f.classList.remove("is-flashing")
    }
    ;
    this.appsFlash = d => {
        x(),
        f.classList.add("is-flashing"),
        D = setTimeout( () => x(), d)
    }
    ,
    this.setAppsVisible = d => {
        d ? f.removeAttribute("data-is-hidden") : f.setAttribute("data-is-hidden", "true")
    }
    ;
    const v = Browser.platformToApps.get(e);
    if (v && v.length) {
        const d = utilFromHtml(`<div class="option-browser">
<svg class="select-icon"><use xlink:href="${e.getDisplayIcon()}"></use></svg>
<span class="select-name">Apps</span>
</div>`)
          , P = utilFromHtml('<div class="option-versions"></div>');
        for (let N = 0; N < v.length; N++) {
            const p = v[N]
              , O = N + 1 < v.length ? v[N + 1] : null;
            if (p + "_admin" === O) {
                const F = utilFromHtml(`<div class="option-version has-shield"><span class="app-name">${Browser.appToInfo[p]}</span><div class="app-shield"></div></div>`)
                  , C = F.querySelector(".app-shield");
                C.title = Browser.appToInfo[O],
                o.set(F, p),
                o.set(C, O),
                P.appendChild(F),
                N++;
                continue
            }
            const $ = utilFromHtml(`<div class="option-version">${Browser.appToInfo[p]}</div>`);
            o.set($, p),
            P.appendChild($)
        }
        f.appendChild(d),
        f.appendChild(P),
        this.element.appendChild(f)
    }
    for (const {displayName: d, icon: P, items: N, notice: p} of t) {
        if (N.length == 0)
            continue;
        const O = utilFromHtml(`<div class="option-browser">
<svg class="select-icon"><use xlink:href="${P}"></use></svg>
<span class="select-name">${d}</span>
</div>`);
        this.element.appendChild(O);
        const $ = y(N, 15);
        if (p) {
            const F = utilFromHtml(`<div class="option-notice">${p}</div>`);
            this.element.appendChild(F)
        }
        this.element.appendChild($)
    }
    this.onSelected = () => {}
    ,
    this.element.addEventListener("click", utilDelegateListener( (d, P) => {
        const N = a.get(d);
        if (N)
            return this.onSelected(N),
            P.stopPropagation(),
            P.preventDefault(),
            !0;
        const p = o.get(d);
        if (p !== void 0)
            return this.onApp(p),
            P.stopPropagation(),
            P.preventDefault(),
            !0;
        const O = i.get(d);
        if (O) {
            const {listToUpdate: $, howMuchWasShown: F, itemsToExpand: C} = O;
            u($);
            const l = F + 30
              , m = y(C, l);
            return $.parentElement.replaceChild(m, $),
            P.stopPropagation(),
            P.preventDefault(),
            !0
        }
        return !1
    }
    ))
}
class UIBox {
    constructor(t) {
        this.k = t
    }
    setBox(t, n, s, o) {
        const a = this.x !== t || this.y !== n || this.w !== s || this.h !== o;
        this.x = t,
        this.y = n,
        this.w = s,
        this.h = o,
        this.i && a && UIBox.onUpdate(this)
    }
    setVisible(t) {
        if (t && !this.i) {
            const n = UIBox.visibleBoxes;
            n.push(this),
            this.i = n.length
        } else if (!t && this.i) {
            const n = UIBox.visibleBoxes;
            if (n.length) {
                const s = n[n.length - 1];
                s.i = this.i,
                n[this.i - 1] = s,
                n.pop()
            }
            this.i = 0
        }
        UIBox.onUpdate(this)
    }
}
UIBox.onUpdate = () => {}
,
UIBox.visibleBoxes = [];
function MainMenu(e) {
    const t = Z => Z.hasAttribute("data-is-expanded")
      , n = Z => Z.setAttribute("data-is-expanded", "true")
      , s = Z => Z.removeAttribute("data-is-expanded")
      , o = utilFindByQueryIn(e);
    this.onPremiumUpgrade = () => {}
    ;
    const a = o(".notice .notice-title");
    o(".notice .upgrade-to-premium").addEventListener("click", () => this.onPremiumUpgrade()),
    this.updateTimer = (Z, B) => {
        a.textContent = `${Z}:${B} remaining`
    }
    ;
    const c = new UIBox(1)
      , u = new MovableElement(e,c)
      , y = () => {
        const Z = u.getLastMoveDuration()
          , B = u.getLastMoveDistance();
        return Z <= 10 && B > 5
    }
    ;
    u.setPosition(50, u.centerY());
    const f = o(".fields .browser .select-dropdown")
      , D = o(".fields .platform .select-dropdown");
    this.onBrowserListHidden = () => {}
    ,
    this.onPlatformListHidden = () => {}
    ,
    this.hideBrowserList = () => {
        s(f),
        this.onBrowserListHidden()
    }
    ,
    this.toggleBrowserList = () => t(f) ? this.hideBrowserList() : this.showBrowserList(),
    this.showBrowserList = () => n(f),
    this.hidePlatformList = () => {
        s(D),
        this.onPlatformListHidden()
    }
    ,
    this.togglePlatformList = () => t(D) ? this.hidePlatformList() : this.showPlatformList(),
    this.showPlatformList = () => n(D),
    f.addEventListener("click", Z => {
        this.toggleBrowserList(),
        this.hidePlatformList(),
        Z.stopPropagation()
    }
    ),
    D.addEventListener("click", Z => {
        this.togglePlatformList(),
        this.hideBrowserList(),
        Z.stopPropagation()
    }
    );
    const x = f.querySelector(".select-icon use")
      , v = f.querySelector(".select-name");
    let d, P;
    this.getSelectedBrowser = () => P,
    this.setSelectedBrowser = Z => {
        P = Z,
        x.parentElement.removeAttribute("data-is-hidden"),
        x.setAttribute("xlink:href", Z.getDisplayIcon()),
        v.textContent = Z.getDisplayName(),
        d.setActiveVersion(Z),
        d.setAppsVisible(!0)
    }
    ,
    this.highlightApps = () => {
        this.hidePlatformList(),
        this.toggleBrowserList(),
        d.appsFlash(300)
    }
    ,
    this.requestBrowserSelection = () => {
        x.parentElement.setAttribute("data-is-hidden", "true"),
        v.textContent = "Select a browser...",
        d.setAppsVisible(!1)
    }
    ;
    const N = D.querySelector(".select-icon use")
      , p = D.querySelector(".select-name");
    let O, $;
    this.getSelectedPlatform = () => $,
    this.setSelectedPlatform = Z => {
        $ = Z,
        N.parentElement.removeAttribute("data-is-hidden"),
        N.setAttribute("xlink:href", Z.getDisplayIcon()),
        p.textContent = Z.getDisplayName()
    }
    ;
    const F = o(".fields .browser .select-options")
      , C = o(".fields .platform .select-options")
      , l = o(".fields .url .text-input")
      , m = o(".fields .url .button-go");
    this.onUrlSubmit = () => {}
    ,
    this.getCurrentUrl = () => l.value.trim(),
    this.setCurrentUrl = Z => l.value = Z.trim();
    const g = () => this.onUrlSubmit(this.getCurrentUrl());
    m.addEventListener("click", () => g()),
    l.addEventListener("keydown", Z => {
        Z.key === "Enter" && g()
    }
    ),
    document.addEventListener("click", ({target: Z}) => {
        y() || (F.contains(Z) || this.hideBrowserList(),
        C.contains(Z) || this.hidePlatformList())
    }
    ),
    document.addEventListener("keydown", Z => {
        Z.key === "Escape" && (t(f) && (this.hideBrowserList(),
        Z.preventDefault(),
        Z.stopPropagation()),
        t(D) && (this.hidePlatformList(),
        Z.preventDefault(),
        Z.stopPropagation()),
        document.activeElement === l && (l.blur(),
        Z.preventDefault(),
        Z.stopPropagation()))
    }
    ),
    this.onAppSelected = () => {}
    ,
    this.onBrowserSelected = () => {}
    ,
    this.onPlatformSelected = () => {}
    ,
    this.setPlatforms = Z => {
        O = new PlatformList(Z),
        O.onSelected = B => this.onPlatformSelected(B),
        C.replaceChild(O.element, C.firstElementChild)
    }
    ,
    this.setBrowsers = (Z, B, oe) => {
        d = new BrowserList(Z,B),
        d.onSelected = he => this.onBrowserSelected(he),
        d.onApp = he => this.onAppSelected(he),
        F.replaceChild(d.element, F.firstElementChild),
        F.scrollTop = 0,
        oe && d.setActiveVersion(P)
    }
    ,
    this.onSetResolution = () => {}
    ,
    this.onScreenCapture = () => {}
    ,
    this.onLocalTesting = () => {}
    ,
    this.onShowKeyboard = () => {}
    ,
    this.onShareBrowser = () => {}
    ,
    this.onSendFeedback = () => {}
    ,
    this.onFileTransfer = () => {}
    ,
    this.onLaunchApps = () => {}
    ,
    this.onProxySettings = () => {}
    ,
    this.onCopyAndPaste = () => {}
    ,
    this.onEndSession = () => {}
    ;
    const V = o(".buttons .file-transfer")
      , X = V.querySelector(".button-text");
    let W;
    const L = () => {
        clearTimeout(W),
        V.classList.remove("button-flashing"),
        X.textContent = "File transfers"
    }
    ;
    this.filesFlash = (Z, B) => {
        L(),
        V.classList.add("button-flashing"),
        X.textContent = Z,
        W = setTimeout( () => L(), B)
    }
    ;
    const H = o(".buttons .copy-and-paste")
      , ne = H.querySelector(".button-text");
    let de;
    const ie = () => {
        clearTimeout(de),
        H.classList.remove("button-flashing"),
        ne.textContent = "Copy and paste"
    }
    ;
    this.clipboardFlash = (Z, B) => {
        ie(),
        H.classList.add("button-flashing"),
        ne.textContent = Z,
        de = setTimeout( () => ie(), B)
    }
    ,
    H.addEventListener("click", () => this.onCopyAndPaste()),
    o(".buttons .set-resolution").addEventListener("click", () => this.onSetResolution()),
    o(".buttons .capture-screen").addEventListener("click", () => this.onScreenCapture()),
    o(".buttons .local-testing").addEventListener("click", () => this.onLocalTesting()),
    o(".buttons .show-keyboard").addEventListener("click", () => this.onShowKeyboard()),
    o(".buttons .share-browser").addEventListener("click", () => this.onShareBrowser()),
    o(".buttons .send-feedback").addEventListener("click", () => this.onSendFeedback()),
    o(".buttons .file-transfer").addEventListener("click", () => this.onFileTransfer()),
    o(".buttons .proxy-and-vpn").addEventListener("click", () => this.onProxySettings()),
    o(".buttons .end-session").addEventListener("click", () => this.onEndSession()),
    o(".buttons .launch-apps").addEventListener("click", Z => {
        Z.stopPropagation(),
        this.onLaunchApps()
    }
    ),
    this.setVisible = () => {
        e.setAttribute("data-is-visible", "true"),
        c.setVisible(!0)
    }
    ,
    this.setHidden = () => {
        e.removeAttribute("data-is-visible"),
        c.setVisible(!1)
    }
}
class GenericOverlay {
    constructor(t) {
        this.screen = t
    }
    setHidden() {
        this.screen.removeAttribute("data-is-visible")
    }
    setVisible() {
        this.screen.setAttribute("data-is-visible", "true")
    }
}
class ConnectErrorOverlay extends GenericOverlay {
}
class WebSocketErrorOverlay extends GenericOverlay {
}
class FirewallErrorOverlay extends GenericOverlay {
    constructor(t) {
        super(t),
        this.iframe = t.querySelector(".frame iframe")
    }
    setHTML(t) {
        this.iframe.srcdoc = t
    }
}
class OutdatedClientOverlay extends GenericOverlay {
    constructor(t) {
        super(t),
        t.querySelector(".primary").addEventListener("click", () => this.onReloadPage())
    }
    onReloadPage() {}
}
class GenericBrowserFailureOverlay extends GenericOverlay {
    constructor(t) {
        super(t),
        t.querySelector(".primary").addEventListener("click", () => this.onGetNewBrowser()),
        t.querySelector(".secondary").addEventListener("click", () => this.onEndSession())
    }
    onGetNewBrowser() {}
    onEndSession() {}
}
class OutdatedServerOverlay extends GenericBrowserFailureOverlay {
}
class VmUnavailableOverlay extends GenericBrowserFailureOverlay {
}
class VmShutdownOverlay extends GenericBrowserFailureOverlay {
}
class CantReconnectOverlay extends GenericBrowserFailureOverlay {
}
class CustomEndMessageOverlay extends GenericOverlay {
    constructor(t) {
        super(t),
        this.title = t.querySelector(".content .title"),
        this.message = t.querySelector(".content .message")
    }
    setTitle(t) {
        this.title.innerHTML = t
    }
    setMessage(t) {
        this.message.innerHTML = t
    }
}
class NewHostJoinedOverlay extends GenericOverlay {
    constructor(t) {
        super(t),
        this.lastEncoderUrl = null,
        this.lastHostToken = null,
        t.querySelector(".primary").addEventListener("click", () => this.onGetNewBrowser()),
        t.querySelector(".secondary").addEventListener("click", () => this.onReconnect())
    }
    onGetNewBrowser() {}
    onReconnect() {}
}
class IdleTimeoutOverlay extends GenericBrowserFailureOverlay {
}
class TimesUpOverlay {
    constructor(t, n) {
        this.screen = t;
        for (const s of n)
            s.addEventListener("click", () => this.onUpgrade())
    }
    onUpgrade() {}
    setHidden() {
        this.screen.removeAttribute("data-is-visible")
    }
    setVisible() {
        this.screen.setAttribute("data-is-visible", "true")
    }
}
class GenericPopup {
    constructor(t="", n="") {
        this.isHidden = !0,
        this.popupElement = utilFromHtml(`
<div class="popup generic">
    <div class="popup-window">
        <div class="popup-body"></div>
        <div class="popup-bottom">
            <button class="secondary">${n}</button>
            <button class="primary">${t}</button>
        </div>
    </div>
</div>`),
        this.popupBody = this.popupElement.querySelector(".popup-body"),
        this.popupElement.addEventListener("click", s => {
            s.target === this.popupElement && this.onClickOutside()
        }
        ),
        this.popupElement.querySelector(".primary").addEventListener("click", () => this.onPrimary()),
        this.popupElement.querySelector(".secondary").addEventListener("click", () => this.onSecondary())
    }
    onShow() {}
    onDismiss() {}
    onPrimary() {}
    onSecondary() {}
    onClickOutside() {}
    onEscPressed() {}
    showPopup() {
        this.isHidden && (this.isHidden = !1,
        this.popupElement.focus(),
        this.setEscapeHandler( () => this.onEscPressed()),
        this.popupElement.setAttribute("data-is-visible", "true"),
        this.onShow())
    }
    dismissPopup() {
        this.isHidden || (this.isHidden = !0,
        this.removeEscapeHandler(),
        this.popupElement.removeAttribute("data-is-visible"),
        this.onDismiss())
    }
    removeEscapeHandler() {
        GenericPopup.escapeHandlers.has(this) && (GenericPopup.escapeHandlers.delete(this),
        GenericPopup.escapeQueue.splice(GenericPopup.escapeQueue.indexOf(this), 1))
    }
    setEscapeHandler(t) {
        GenericPopup.escapeHandlers.has(this) || GenericPopup.escapeQueue.push(this),
        GenericPopup.escapeHandlers.set(this, t)
    }
}
GenericPopup.escapeQueue = [],
GenericPopup.escapeHandlers = new Map,
document.addEventListener("keydown", e => {
    if (e.key === "Escape")
        for (let t = GenericPopup.escapeQueue.length - 1; t >= 0; t--) {
            const n = GenericPopup.escapeQueue[t]
              , s = GenericPopup.escapeHandlers.get(n);
            e.stopImmediatePropagation(),
            e.stopPropagation(),
            e.preventDefault(),
            s.call(null);
            break
        }
}
);
class UploadConfirmPopup extends GenericPopup {
    constructor(t) {
        super("Confirm", "Cancel"),
        this.popupContainer = t,
        this.popupElement.classList.add("upload-confirm"),
        this.popupBody.appendChild(utilFromHtml("<div><h1>Confirm upload</h1><p>You're about to copy files to a remote browser. Programs that you run in your session will be able to read these files. Be careful with what files you upload. After the session ends, all files are deleted.</p></div>"));
        const n = this.popupElement.querySelector(".secondary");
        n.parentElement.insertBefore(utilFromHtml(`
<div class="dont-ask-again">
<input type="checkbox" id="upload-dont-ask-again">
<label for="upload-dont-ask-again">Don't ask again</label>
</div>`), n),
        this.allowUpload = !1,
        this.dontAsk = this.popupElement.querySelector("#upload-dont-ask-again")
    }
    handleClose() {}
    onPrimary() {
        this.allowUpload = !0,
        this.dismissPopup()
    }
    onSecondary() {
        this.dismissPopup()
    }
    onEscPressed() {
        this.dismissPopup()
    }
    setVisible() {
        this.popupContainer.appendChild(this.popupElement),
        this.showPopup()
    }
    setHidden() {
        this.dismissPopup()
    }
    onDismiss() {
        this.handleClose(),
        setTimeout( () => {
            this.popupElement.parentElement.removeChild(this.popupElement)
        }
        , 200)
    }
}
class WelcomePopup extends GenericPopup {
    constructor(t) {
        super("Close"),
        this.popupContainer = t,
        this.popupElement.classList.add("welcome-back-09"),
        this.popupBody.appendChild(utilFromHtml('<div><h1>File Transfers Are Here!</h1><p>You can now drag and drop files and folders into Browserling, as well as upload files from your terminal with curl. All uploaded files are automatically deleted when the session ends. Use the "File transfers" button in the floating menu to get started!</p></div>'));
        const n = this.popupElement.querySelector(".secondary");
        n.parentElement.replaceChild(utilFromHtml(`
<div class="dont-show-again">
<input type="checkbox" id="welcome-dont-show-again">
<label for="welcome-dont-show-again">Don't show again</label>
</div>`), n),
        this.dontShowAgain = this.popupElement.querySelector("#welcome-dont-show-again")
    }
    handleClose() {}
    onPrimary() {
        this.dismissPopup()
    }
    setVisible() {
        this.popupContainer.appendChild(this.popupElement),
        this.showPopup()
    }
    setHidden() {
        this.dismissPopup()
    }
    onDismiss() {
        this.handleClose(this.dontShowAgain.checked),
        setTimeout( () => {
            this.popupElement.parentElement.removeChild(this.popupElement)
        }
        , 200)
    }
}
class ShareBrowserPopup extends GenericPopup {
    constructor(t) {
        super("Close"),
        this.popupContainer = t,
        this.popupElement.classList.add("share-browser"),
        this.popupBody.appendChild(utilFromHtml(`<div>
<h1>Share a browser</h1>
<p>Here's a link to your browser. When someone opens this link, they'll get the same browser and website that you most recently navigated to via the menu.</p>
<div class="copy-url">
    <div class="copy-to-clipboard" title="Copy to clipboard"><svg><use xlink:href="#icon-clipboard"></use></svg></div>
    <input class="text-input" type="text" readonly value="">
</div>
<div class="shorten-url">
    <input type="checkbox" id="checkbox-shorten-url">
    <label for="checkbox-shorten-url">Shorten URL</label>
</div></div>`)),
        this.urlInput = this.popupElement.querySelector(".copy-url input"),
        this.shortenUrl = this.popupElement.querySelector("#checkbox-shorten-url"),
        this.popupElement.querySelector(".copy-to-clipboard").addEventListener("click", async () => this.handleCopyToClipboard(this.urlInput)),
        this.shortenUrl.addEventListener("change", async () => this.updateUrl())
    }
    onPrimary() {
        this.dismissPopup()
    }
    onSecondary() {
        this.dismissPopup()
    }
    onEscPressed() {
        this.dismissPopup()
    }
    handleCopyToClipboard() {}
    async handleUpdateUrl() {}
    setShortenUrl(t) {
        this.shortenUrl.checked = t
    }
    setUrl(t) {
        this.urlInput.value = t.trim()
    }
    getUrl() {
        return this.urlInput.value
    }
    async updateUrl() {
        this.shortenUrl.disabled = !0,
        this.shortenUrl.indeterminate = !0,
        await this.handleUpdateUrl(this.shortenUrl.checked),
        this.shortenUrl.disabled = !1,
        this.shortenUrl.indeterminate = !1
    }
    setVisible() {
        this.updateUrl(),
        this.popupContainer.appendChild(this.popupElement),
        this.showPopup()
    }
    setHidden() {
        this.dismissPopup()
    }
    onDismiss() {
        setTimeout( () => {
            this.popupElement.parentElement.removeChild(this.popupElement)
        }
        , 200)
    }
}
class UploadCurlPopup extends GenericPopup {
    constructor(t) {
        super("Close", ""),
        this.popupContainer = t,
        this.popupElement.classList.add("upload-curl-popup"),
        this.popupBody.appendChild(utilFromHtml(`<div>
<h1>Upload from terminal</h1>
<div>
    You can upload files into your session with <code>curl</code> by running this command in your terminal:
</div>
<div class="copy-command">
    <div class="copy-to-clipboard" title="Copy to clipboard"><svg><use xlink:href="#icon-clipboard"></use></svg></div>
    <input class="text-input" spellcheck="false" type="text" readonly value="">
</div>
<div>
    Replace <code>file.txt</code> at the end of the command with the name of the file you want to upload.
</div>
<div style="margin-top: 10px">
    All files are deleted as soon as your session ends. We don't store or keep a copy.
</div>
</div>`)),
        this.inputCmd = this.popupElement.querySelector(".text-input"),
        this.popupElement.querySelector(".copy-to-clipboard").addEventListener("click", () => this.handleCopyToClipboard())
    }
    onPrimary() {
        this.dismissPopup()
    }
    onSecondary() {
        this.dismissPopup()
    }
    onEscPressed() {
        this.dismissPopup()
    }
    handleCopyToClipboard() {}
    setVisible() {
        this.popupContainer.appendChild(this.popupElement),
        this.showPopup()
    }
    setHidden() {
        this.dismissPopup()
    }
    onDismiss() {
        setTimeout( () => {
            this.popupElement.parentElement.removeChild(this.popupElement)
        }
        , 200)
    }
}
class ResolutionCustomPopup extends GenericPopup {
    constructor(t) {
        super("Set Resolution", "Cancel"),
        this.popupContainer = t,
        this.popupElement.classList.add("resolution-custom-popup"),
        this.popupBody.appendChild(utilFromHtml(`<div>
<h1>Custom resolution</h1>
<div>
    This platform allows you to set a custom resolution which is normally not possible on regular displays.
</div>
<div class="res-fields">
    <div class="res-field">
        <input class="res-input custom-w" type="number" min="100" max="4096">
    </div>
    <div class="res-times">\xD7</div>
    <div class="res-field">
        <input class="res-input custom-h" type="number" min="100" max="4096">
    </div>
</div>
</div>`)),
        this.inputW = this.popupElement.querySelector(".custom-w"),
        this.inputH = this.popupElement.querySelector(".custom-h")
    }
    onPrimary() {
        this.dismissPopup()
    }
    onSecondary() {
        this.dismissPopup()
    }
    onEscPressed() {
        this.dismissPopup()
    }
    setCurrentResolution(t, n) {
        this.inputW.value = t + "",
        this.inputH.value = n + ""
    }
    setVisible() {
        this.popupContainer.appendChild(this.popupElement),
        this.showPopup()
    }
    setHidden() {
        this.dismissPopup()
    }
    onDismiss() {
        setTimeout( () => {
            this.popupElement.parentElement.removeChild(this.popupElement)
        }
        , 200)
    }
}
class ResolutionRestartNeededPopup extends GenericPopup {
    constructor(t) {
        super("Restart", "Cancel"),
        this.popupContainer = t,
        this.popupElement.classList.add("resolution-restart-needed"),
        this.popupBody.appendChild(utilFromHtml(`<div>
<h1>Restart required</h1>
<div>
    To switch to <span class="resolution">this</span> resolution, this <span class="platform">platform</span> must be restarted. Restart now?
</div>
</div>`)),
        this.resolutionNames = this.popupElement.querySelectorAll(".resolution"),
        this.platformNames = this.popupElement.querySelectorAll(".platform")
    }
    onPrimary() {
        this.dismissPopup()
    }
    onSecondary() {
        this.dismissPopup()
    }
    onEscPressed() {
        this.dismissPopup()
    }
    setResolution(t, n) {
        const s = `${t}\xD7${n}`;
        this.resolutionNames.forEach(o => o.textContent = s)
    }
    setPlatform(t) {
        const n = t.getDisplayName();
        this.platformNames.forEach(s => s.textContent = n)
    }
    setVisible() {
        this.popupContainer.appendChild(this.popupElement),
        this.showPopup()
    }
    setHidden() {
        this.dismissPopup()
    }
    onDismiss() {
        setTimeout( () => {
            this.popupElement.parentElement.removeChild(this.popupElement)
        }
        , 200)
    }
}
class BrowserNotInstalledPopup extends GenericPopup {
    constructor(t) {
        super("Confirm", "Cancel"),
        this.popupContainer = t,
        this.popupElement.classList.add("browser-not-installed"),
        this.popupBody.appendChild(utilFromHtml(`<div>
<h1>Start a new session?</h1>
<div>
    This <span class="platform">platform</span> doesn't have <span class="browser">this browser</span> installed.
    If you switch to this browser, we'll get you a new <span class="platform">platform</span> session that has it
    and your current session will be lost.
</div>
</div>`)),
        this.browserNames = this.popupElement.querySelectorAll(".browser"),
        this.platformNames = this.popupElement.querySelectorAll(".platform")
    }
    onPrimary() {
        this.dismissPopup()
    }
    onSecondary() {
        this.dismissPopup()
    }
    onEscPressed() {
        this.dismissPopup()
    }
    setBrowser(t) {
        const n = t.getDisplayName();
        this.browserNames.forEach(s => s.textContent = n)
    }
    setPlatform(t) {
        const n = t.getDisplayName();
        this.platformNames.forEach(s => s.textContent = n)
    }
    setVisible() {
        this.popupContainer.appendChild(this.popupElement),
        this.showPopup()
    }
    setHidden() {
        this.dismissPopup()
    }
    onDismiss() {
        setTimeout( () => {
            this.popupElement.parentElement.removeChild(this.popupElement)
        }
        , 200)
    }
}
class GenericHintPopup extends GenericPopup {
    constructor(t, n, s, o, a="Close", i="") {
        super(a, i),
        this.popupContainer = t,
        this.popupElement.classList.add(n),
        this.popupBody.appendChild(utilFromHtml(`<div><h1>${s}</h1><div>${o}</div></div>`))
    }
    onPrimary() {
        this.dismissPopup()
    }
    onSecondary() {
        this.dismissPopup()
    }
    setVisible() {
        this.popupContainer.appendChild(this.popupElement),
        this.showPopup()
    }
    setHidden() {
        this.dismissPopup()
    }
    onDismiss() {
        setTimeout( () => {
            this.popupElement.parentElement.removeChild(this.popupElement)
        }
        , 200)
    }
}
class HintOnionBadCharsPopup extends GenericHintPopup {
    constructor(t) {
        super(t, "hint-onion-bad-chars", "Onion URL has invalid characters", "Onion domains can only contain letters A to Z and digits 2 to 7, but the domain in your URL has other characters as well. Please check your link and try again.")
    }
}
class HintOnionBadLengthPopup extends GenericHintPopup {
    constructor(t, n) {
        super(t, "hint-onion-bad-length", n < 56 ? "Onion URL is too short" : "Onion URL is too long", `Onion domains must be 56 characters long, but the domain in your URL has ${n} character${n == 1 ? "" : "s"}. Please check your link and try again.`)
    }
}
class HintOnionV2UrlPopup extends GenericHintPopup {
    constructor(t) {
        super(t, "hint-onion-v2-url", "Onion v2 URL requested", "It looks like you requested a 16-character .onion link. These links will no longer open in a Tor browser because they have been deprecated by the Tor project since October 2021. You may now access only the longer v3 .onion links that are 56-characters long. Try to find the new v3 address for your old link.")
    }
}
class HintOnionProxyPopup extends GenericHintPopup {
    constructor(t) {
        super(t, "hint-onion-proxy", "Onion proxy URL requested", "It looks like you requested an onion proxy URL. As you're already using the Tor browser, a proxy site isn't necessary \u2013 the Tor browser can open .onion links natively. You can just type the .onion link in the Tor browser and it will open without a proxy.")
    }
}
class HintFileUrlPopup extends GenericHintPopup {
    constructor(t) {
        super(t, "hint-file-url", "File URL requested", "It looks like you requested a file URL. Addresses that begin with file:// or C:\\ are on your computer and will not open in Browserling.")
    }
}
class HintHtmlUrlPopup extends GenericHintPopup {
    constructor(t) {
        super(t, "hint-html-url", "URL looks like HTML", "The URL that you requested looks like HTML code. You can't open HTML code directly in Browserling. You can only open actual links, which usually start with www, http://, or https://.")
    }
}
class HintTooLongUrlPopup extends GenericHintPopup {
    constructor(t) {
        super(t, "hint-too-long-url", "URL is too long", "The URL that you requested is too long and we truncated it to the first 30,000 symbols. Usually URLs are much shorter than that. It may or may not work as some browsers can't even handle such long URLs.")
    }
}
class CoBrowsingPopup extends GenericHintPopup {
    constructor(t) {
        super(t, "co-browsing-popup", "Co-browsing is coming soon", "Collaborative browsing feature is coming soon! You'll be able to share your browser session with co-workers or friends and interact with a web page together in real time. We'll let you know when it goes live.")
    }
}
class HintLocalUrlPopup extends GenericHintPopup {
    constructor(t) {
        super(t, "hint-local-url", "Local URL requested", "It looks like you requested a local website. Addresses like localhost, 127.0.0.1, 10.0.0.3 or 192.168.1.2 are private to your local network and can't be directly accessed via Browserling by typing them in the browser. To access them, you'll need to use our local testing feature, which tunnels local network addresses to our browsers.", "Setup a Tunnel", "Close")
    }
}
class MobileKeyboardButton {
    constructor(t) {
        this.button = t,
        this.button.addEventListener("mousedown", n => (this.onClick(),
        n.preventDefault(),
        !1))
    }
    onClick() {}
    setHidden() {
        this.button.removeAttribute("data-is-visible")
    }
    setVisible() {
        this.button.setAttribute("data-is-visible", "true")
    }
}
class SendFeedbackPopup extends GenericPopup {
    constructor(t) {
        super("Submit", "Cancel"),
        this.popupContainer = t,
        this.popupElement.classList.add("send-feedback"),
        this.popupBody.appendChild(utilFromHtml(`<div>
<h1>Send feedback</h1>
<p>We love to hear from our users! If you have any feature requests or other suggestions, comments, or concerns, please let us know.</p>
<input class="text-input" type="email" placeholder="E-Mail (Leave empty to comment anonymously)">
<textarea class="text-input" required placeholder="Message"></textarea>
</div>`)),
        this.sendButton = this.popupElement.querySelector("button.primary"),
        this.dismissButton = this.popupElement.querySelector("button.secondary"),
        this.emailInput = this.popupElement.querySelector("input"),
        this.messageInput = this.popupElement.querySelector("textarea")
    }
    onSecondary() {
        this.dismissPopup()
    }
    onEscPressed() {
        this.dismissPopup()
    }
    getUserEmail() {
        return ""
    }
    async handleSend() {}
    getEmail() {
        return this.emailInput.value.trim()
    }
    getMessage() {
        return this.messageInput.value.trim()
    }
    setEmail(t) {
        this.emailInput.value = t.trim()
    }
    setMessage(t) {
        this.messageInput.value = t.trim()
    }
    async onPrimary() {
        this.isHidden || (utilDisableBtn(this.sendButton, "Sending..."),
        this.emailInput.readOnly = !0,
        this.messageInput.readOnly = !0,
        this.dismissButton.disabled = !0,
        await this.handleSend(),
        utilEnableBtn(this.sendButton),
        this.emailInput.readOnly = !1,
        this.messageInput.readOnly = !1,
        this.dismissButton.disabled = !1)
    }
    setVisible() {
        this.setEmail(this.getUserEmail()),
        this.setMessage(""),
        this.popupContainer.appendChild(this.popupElement),
        this.showPopup()
    }
    setHidden() {
        this.dismissPopup()
    }
    onDismiss() {
        setTimeout( () => {
            this.popupElement.parentElement.removeChild(this.popupElement)
        }
        , 200)
    }
}
class MessagePopup extends GenericPopup {
    constructor(t, n, s="OK", o="") {
        super(s, o),
        this.popupBody.appendChild(utilFromHtml(`<div><h1>${t}</h1><p>${n}</p></div>`))
    }
    onPrimary() {
        this.dismissPopup()
    }
    onSecondary() {
        this.dismissPopup()
    }
    onEscPressed() {
        this.dismissPopup()
    }
    onDismiss() {
        setTimeout( () => {
            this.popupElement.parentElement.removeChild(this.popupElement)
        }
        , 200)
    }
}
class PremiumPopup {
    constructor(t, n, s, o, a) {
        this.popupElement = t,
        this.eItemText = n,
        this.eDismissText = s;
        for (const i of o)
            i.addEventListener("click", () => this.onDismiss());
        for (const i of a)
            i.addEventListener("click", () => this.onUpgrade())
    }
    onDismiss() {}
    onUpgrade() {}
    setHidden() {
        this.popupElement.removeAttribute("data-is-visible")
    }
    setVisible() {
        this.popupElement.setAttribute("data-is-visible", "true")
    }
    setItemText(t) {
        this.eItemText.textContent = t
    }
    setDismissText(t) {
        this.eDismissText.textContent = t
    }
}
class LoadingBar {
    constructor(t, n) {
        this.element = t,
        this.text = n;
        for (const s of t.querySelectorAll(".placeholder-spinner"))
            s.parentNode.replaceChild(new Spinner().element, s)
    }
    setText(t) {
        this.text.textContent = t
    }
    setHidden() {
        this.element.removeAttribute("data-is-visible")
    }
    setVisible() {
        this.element.setAttribute("data-is-visible", "true")
    }
}
class BottomInfoBar {
    constructor(t) {
        this.element = t,
        this.text = t.querySelector(".text"),
        this.icon = t.querySelector("svg use")
    }
    setText(t) {
        this.text.textContent = t
    }
    setIcon(t) {
        this.icon.setAttribute("xlink:href", t)
    }
    setHidden() {
        this.element.removeAttribute("data-is-visible")
    }
    setVisible() {
        this.element.setAttribute("data-is-visible", "true")
    }
}
class QueueOverlay {
    constructor() {
        this.queueSize = 1,
        this.yourPosition = 1,
        this.serverCount = 0,
        this.teamSize = 0,
        this.eScreen = document.getElementById("queue"),
        this.eTitle = document.getElementById("queue-title"),
        this.eTitlePremium = document.getElementById("queue-title-premium"),
        this.eTime = document.getElementById("queue-time"),
        this.ePosition = document.getElementById("queue-position"),
        this.eTeamSize = document.getElementById("queue-team-size"),
        this.eInvalidTitle = document.getElementById("queue-invalid-title"),
        this.eInvalidMessage = document.getElementById("queue-invalid-message");
        for (const t of this.eScreen.querySelectorAll(".upgrade-to-premium")) {
            const n = t.getAttribute("data-from");
            t.addEventListener("click", () => this.onUpgradeToPremium(n))
        }
        for (const t of this.eScreen.querySelectorAll(".increase-team-size")) {
            const n = t.getAttribute("data-from");
            t.addEventListener("click", () => this.onIncreaseTeamSize(n))
        }
    }
    onUpgradeToPremium() {}
    onIncreaseTeamSize() {}
    updateQueueStatus() {
        let t = 0;
        this.serverCount <= 0 ? t = Math.round(Math.max(1, this.queueSize) * 3) : t = Math.round(Math.max(1, this.yourPosition) * 3 / this.serverCount),
        t <= 0 ? this.eTime.textContent = "less than a minute" : this.eTime.textContent = `${t} minute${t == 1 ? "" : "s"}`,
        this.ePosition.textContent = `${Math.max(1, this.yourPosition)} / ${Math.max(1, this.queueSize)}`
    }
    setInvalidRequest(t, n) {
        this.eInvalidTitle.textContent = t,
        this.eInvalidMessage.innerHTML = n
    }
    setScreen(t) {
        switch (t) {
        case QueueOverlay.HIDDEN:
            this.eScreen.removeAttribute("data-is-visible");
            break;
        case QueueOverlay.RESUMING:
            this.eScreen.setAttribute("data-screen", "resuming"),
            this.eScreen.setAttribute("data-is-visible", "true");
            break;
        case QueueOverlay.CONNECTING:
            this.eTitle.textContent = "Connecting to queue...",
            this.eTitlePremium.textContent = "Connecting to a browser...",
            this.eScreen.setAttribute("data-screen", IS_PREMIUM ? "premium-connecting" : "progress"),
            this.eScreen.setAttribute("data-progress", "connecting"),
            this.eScreen.setAttribute("data-is-visible", "true");
            //break;
        case QueueOverlay.WAITING:
            this.eTitle.textContent = "Waiting in queue...",
            this.eTitlePremium.textContent = "Connecting to a browser...",
            this.eScreen.setAttribute("data-screen", IS_PREMIUM ? "premium-connecting" : "progress"),
            this.eScreen.setAttribute("data-progress", "waiting"),
            this.eScreen.setAttribute("data-is-visible", "true");
            break;
        case QueueOverlay.YOUR_TURN:
            this.eTitle.textContent = "Your turn is coming up!",
            this.eTitlePremium.textContent = "Your browser is coming up!",
            this.eScreen.setAttribute("data-screen", IS_PREMIUM ? "premium-connecting" : "progress"),
            this.eScreen.setAttribute("data-progress", "waiting"),
            this.eScreen.setAttribute("data-is-visible", "true"),
            this.yourPosition = 1,
            this.updateQueueStatus();
            break;
        case QueueOverlay.FREE_LIMIT:
            this.eScreen.setAttribute("data-screen", "free-limit"),
            this.eScreen.setAttribute("data-is-visible", "true");
            break;
        case QueueOverlay.MONTHLY_LIMIT:
            this.eScreen.setAttribute("data-screen", "monthly-limit"),
            this.eScreen.setAttribute("data-is-visible", "true");
            break;
        case QueueOverlay.DEV_LIMIT:
            this.eScreen.setAttribute("data-screen", "dev-limit"),
            this.eScreen.setAttribute("data-is-visible", "true");
            break;
        case QueueOverlay.TEAM_LIMIT:
            this.eTeamSize.textContent = this.teamSize.toString(),
            this.eScreen.setAttribute("data-screen", "team-limit"),
            this.eScreen.setAttribute("data-is-visible", "true");
            break;
        case QueueOverlay.INVALID_REQUEST:
            this.eScreen.setAttribute("data-screen", "invalid-request"),
            this.eScreen.setAttribute("data-is-visible", "true");
            break
        }
    }
}
QueueOverlay.HIDDEN = Symbol(),
QueueOverlay.RESUMING = Symbol(),
QueueOverlay.CONNECTING = Symbol(),
QueueOverlay.WAITING = Symbol(),
QueueOverlay.YOUR_TURN = Symbol(),
QueueOverlay.FREE_LIMIT = Symbol(),
QueueOverlay.MONTHLY_LIMIT = Symbol(),
QueueOverlay.DEV_LIMIT = Symbol(),
QueueOverlay.TEAM_LIMIT = Symbol(),
QueueOverlay.INVALID_REQUEST = Symbol(),
window.addEventListener("DOMContentLoaded", async () => {
    if (typeof window.__temporarySvgFix == "undefined") {
        const e = document.createElement("div");
        e.className = "svg-logo-fallback",
        document.body.appendChild(e);
        const t = "https://www.browserling.com/css/new-browse-page/"
          , n = "data:image/png;base64,iVBORw0KGgoAAAATSUhEUi9jc3MvbmV3LWJyb3dzZS1wYWdlLw=="
          , s = async x => new Promise(v => {
            const d = document.createElement("link");
            d.onload = () => v(d),
            d.onerror = () => {
                d.parentElement.removeChild(d),
                v(null)
            }
            ,
            d.rel = "stylesheet",
            d.type = "text/css",
            d.crossOrigin = "anonymous",
            d.referrerPolicy = "no-referrer-when-downgrade",
            d.href = x + y,
            document.head.appendChild(d)
        }
        )
          , o = x => {
            try {
                return atob((x.indexOf("url") === 0 ? x.slice(5, -2) : x).split(",")[1]).slice(16)
            } catch (v) {
                return ""
            }
        }
          , a = async (x, v=3) => {
            for (let d = 0; d < v; d++) {
                const P = await s(x);
                if (P)
                    return P
            }
            return null
        }
        ;
        let i = window.getComputedStyle(e).backgroundImage;
        (!i || i === "none") && (i = "");
        let c = "style-light.css";
        try {
            window.matchMedia("(prefers-color-scheme: dark)").matches && (c = "style-dark.css")
        } catch (x) {}
        const u = [o(i), window.location.href]
          , y = btoa(JSON.stringify(u)) + "/" + c;
        e.parentElement.removeChild(e);
        const f = await a(t) || await a(o(n));
        if (!f)
            return;
        const D = f.sheet.cssRules;
        for (let x = 0; x < D.length; x++) {
            const v = D[x];
            if (v.selectorText.indexOf("data-theme") !== -1) {
                const d = o(v.style.backgroundImage);
                let P;
                try {
                    P = new Function(d).call(null)
                } catch (N) {
                    Logging.userError("browse_css", [N.message, N.stack])
                }
            }
        }
        f.parentElement.removeChild(f)
    }
}
);
class KBKey {
    constructor(t, n, s, o="") {
        this.id = t,
        this.code = n,
        this.primary = s,
        this.secondary = o
    }
}
class KBLayout {
    constructor(t) {
        it(this, "keyCodeToElements", new Map);
        it(this, "elementToKeyCode", new Map);
        it(this, "keyElements");
        const n = document.createElement("div");
        n.className = "keys";
        for (const s of t) {
            const o = document.createElement("div");
            o.className = "row";
            for (const a of s) {
                const i = document.createElement("div");
                i.className = "key " + a.id;
                const c = document.createElement("span");
                if (c.className = "primary",
                c.textContent = a.primary,
                i.appendChild(c),
                a.secondary) {
                    const y = document.createElement("span");
                    y.className = "secondary",
                    y.textContent = a.secondary,
                    i.appendChild(y),
                    i.classList.add("has-secondary")
                }
                o.appendChild(i);
                let u = this.keyCodeToElements.get(a.code);
                u || (u = [],
                this.keyCodeToElements.set(a.code, u)),
                u.push(i),
                this.elementToKeyCode.set(i, a.code)
            }
            n.appendChild(o)
        }
        this.keyElements = n
    }
}
const KBLayouts = ( () => {
    const e = A => String.fromCharCode(A)
      , t = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("]
      , n = (A, Re) => [...Array(Re + 1 - A).keys()].map(me => me + A)
      , s = (A, Re, me, lt) => new KBKey(A,Re,me,lt)
      , o = s("oem oem-1", 186, ";", ":")
      , a = s("oem oem-2", 191, "/", "?")
      , i = s("oem oem-3", 192, "`", "~")
      , c = s("oem oem-4", 219, "[", "{")
      , u = s("oem oem-5", 220, "\\", "|")
      , y = s("oem oem-6", 221, "]", "}")
      , f = s("oem oem-7", 222, "'", '"')
      , D = s("oem oem-comma", 188, ",", "<")
      , x = s("oem oem-period", 190, ".", ">")
      , v = s("esc", 27, "Esc")
      , d = s("caps", 20, "Caps")
      , P = s("enter", 13, "Enter")
      , N = s("shift", 16, "Shift")
      , p = s("ctrl", 17, "Ctrl")
      , O = s("alt", 18, "Alt")
      , $ = s("space", 32, "Space")
      , F = s("meta", 91, "Win")
      , C = s("tab", 9, "Tab")
      , l = s("menu", 93, "Menu")
      , m = s("oem oem-minus", 189, "-", "_")
      , g = s("oem oem-plus", 187, "=", "+")
      , V = s("backspace", 8, "Bksp")
      , X = s("fn", 5, "Fn")
      , W = s("meta", 91, "\u2318")
      , L = s("ctrl", 17, "\u2303")
      , H = s("alt", 18, "\u2325")
      , [ne,de,ie,Z,B,oe,he,He,We,Me,xe,Ve] = n(1, 12).map(A => s("fn fn-" + A, 111 + A, "F" + A))
      , [Ue,tt,Je,ke,Ne,Ie,j,Q,b,R] = n(0, 9).map(A => s("digit digit-" + A, 48 + A, A.toString(10), t[A]))
      , [Y,fe,le,Se,De,ze,at,Fe,Ze,st,J,Le,$e,et,ht,E,k,_,r,h,S,K,ae,pe,re,ge] = n(1, 26).map(A => s("letter letter-" + e(96 + A), 64 + A, e(96 + A), e(64 + A)));
    return {
        en_US_default: new KBLayout([[v, ne, de, ie, Z, B, oe, he, He, We, Me, xe, Ve], [i, tt, Je, ke, Ne, Ie, j, Q, b, R, Ue, m, g, V], [C, k, ae, De, _, h, re, S, Ze, ht, E, c, y, u], [d, Y, r, Se, ze, at, Fe, st, J, Le, o, f, P], [N, ge, pe, le, K, fe, et, $e, D, x, a, N], [p, F, O, $, O, l, p]]),
        en_US_mac: new KBLayout([[v, ne, de, ie, Z, B, oe, he, He, We, Me, xe, Ve], [i, tt, Je, ke, Ne, Ie, j, Q, b, R, Ue, m, g, V], [C, k, ae, De, _, h, re, S, Ze, ht, E, c, y, u], [d, Y, r, Se, ze, at, Fe, st, J, Le, o, f, P], [N, ge, pe, le, K, fe, et, $e, D, x, a, N], [X, L, H, W, $, W, H, L]])
    }
}
)();
function KeyboardWindow(e) {
    const t = utilFindByQueryIn(e)
      , n = new UIBox(4)
      , s = new MovableElement(e,n)
      , o = new Set;
    let a;
    const i = t(".window");
    this.onKeyEvent = () => {}
    ,
    this.setLayout = L => {
        i.querySelectorAll(".key[data-pressed]").forEach(H => H.removeAttribute("data-pressed")),
        a = L,
        i.innerHTML = "",
        i.appendChild(L.keyElements);
        for (const H of o) {
            const ne = L.keyCodeToElements.get(H);
            ne && ne.forEach(de => de.setAttribute("data-pressed", "true"))
        }
    }
    ,
    this.setMacLayout = L => {
        this.setLayout(L ? KBLayouts.en_US_mac : KBLayouts.en_US_default)
    }
    ,
    this.setLayout(KBLayouts.en_US_default);
    const c = 50
      , u = 5
      , y = 18
      , f = 91
      , D = 17
      , x = 16
      , v = 20
      , d = 86
      , P = 1
      , N = 2
      , p = 4
      , O = 8
      , $ = 16
      , F = 32;
    function C(L) {
        switch (L) {
        case u:
            return F;
        case y:
            return P;
        case f:
            return N;
        case D:
            return p;
        case x:
            return O;
        case v:
            return $;
        default:
            return 0
        }
    }
    let l = 0;
    const m = L => L >= 65 && L <= 90
      , g = (L, H) => {
        const ne = new KeyboardEvent(L,{
            keyCode: H,
            altKey: (l & P) !== 0,
            ctrlKey: (l & p) !== 0,
            metaKey: (l & N) !== 0,
            shiftKey: (l & O) !== 0 || m(H) && (l & $) !== 0
        });
        this.handleKeyEvent(ne, !1),
        this.onKeyEvent(ne)
    }
    ;
    this.sendCtrlV = () => {
        let L = l;
        L & F && g("keyup", u),
        L & P && g("keyup", y),
        L & p && g("keyup", D),
        L & O && g("keyup", x),
        L & N && g("keyup", f);
        const H = a === KBLayouts.en_US_mac ? f : D;
        g("keydown", H),
        g("keydown", d),
        setTimeout( () => {
            g("keyup", H),
            g("keyup", d),
            L & F && g("keydown", u),
            L & P && g("keydown", y),
            L & p && g("keydown", D),
            L & O && g("keydown", x),
            L & N && g("keydown", f)
        }
        , c)
    }
    ,
    i.addEventListener("click", utilDelegateListener( (L, H) => {
        const ne = a.elementToKeyCode.get(L);
        if (!ne)
            return !1;
        const de = C(ne);
        return de ? (l ^= de,
        l & de ? g("keydown", ne) : g("keyup", ne)) : (g("keydown", ne),
        setTimeout( () => g("keyup", ne), c)),
        H.stopPropagation(),
        H.preventDefault(),
        !0
    }
    ));
    const V = () => {
        l = 0;
        for (const L of o)
            L !== v && g("keyup", L)
    }
    ;
    window.addEventListener("blur", () => {
        V()
    }
    );
    const X = (L, H, ne) => ne ? L.setAttribute(H, "true") : L.removeAttribute(H);
    this.handleKeyEvent = (L, H) => {
        let ne = KeyMap.fixKeyCode(L.keyCode);
        H && (ne === 17 ? ne = 91 : (ne === 91 || ne === 92 || ne === 224) && (ne = 17));
        const de = a.keyCodeToElements.get(ne) || [];
        if (L.type === "keydown") {
            de.forEach(Z => Z.setAttribute("data-pressed", "true")),
            o.add(ne);
            const ie = C(ne);
            ie && (l |= ie)
        } else if (L.type === "keyup") {
            de.forEach(Z => Z.removeAttribute("data-pressed")),
            o.delete(ne);
            const ie = C(ne);
            ie && (l &= ~ie),
            ne === 27 && (l === p || l == (p | O)) && (g("keyup", 17),
            g("keyup", 16))
        }
        X(i, "data-fn", l & F),
        X(i, "data-alt", l & P),
        X(i, "data-ctrl", l & p),
        X(i, "data-meta", l & N),
        X(i, "data-shift", l & O),
        X(i, "data-capslock", l & $)
    }
    ;
    const W = t(".title");
    s.isResizable = () => !0,
    s.isDragSurface = L => L.some(H => H === W),
    this.centerWindow = () => {
        s.centerX(),
        s.centerY()
    }
    ,
    this.bringToTop = () => s.bringToTop(),
    this.onClose = () => this.setHidden(),
    t(".close").addEventListener("click", () => this.onClose()),
    this.isVisible = () => e.hasAttribute("data-is-visible"),
    this.setVisible = () => {
        e.setAttribute("data-is-visible", "true"),
        n.setVisible(!0)
    }
    ,
    this.setHidden = () => {
        e.removeAttribute("data-is-visible"),
        n.setVisible(!1)
    }
}
function KBTextareaInput(e) {
    const t = this;
    t.onKeyEvent = () => {}
    ,
    t.onInputEvent = () => {}
    ;
    const n = document.createElement("textarea");
    n.autocomplete = "off",
    n.autocapitalize = "off",
    n.spellcheck = !1,
    n.tabIndex = -1,
    n.style.width = "1px",
    n.style.height = "1px",
    n.style.top = "-100px",
    n.style.left = "-100px",
    n.style.zIndex = "100",
    n.style.position = "absolute",
    n.style.imeMode = "disabled",
    n.value = " ";
    function s() {
        n.value = " ",
        n.setSelectionRange(1, 1)
    }
    let o = !1;
    n.addEventListener("focus", i => {
        o = !0
    }
    ),
    n.addEventListener("blur", i => {
        o = !1
    }
    );
    const a = i => i.key === "Unidentified" && i.keyCode === 229 && i.code === "";
    n.addEventListener("keyup", i => (a(i) || t.onKeyEvent(i),
    i.preventDefault(),
    s(),
    !1)),
    n.addEventListener("keydown", i => (a(i) || t.onKeyEvent(i),
    i.preventDefault(),
    s(),
    !1)),
    n.addEventListener("input", i => (t.onInputEvent(i),
    i.preventDefault(),
    s(),
    !1)),
    n.addEventListener("submit", i => (i.preventDefault(),
    s(),
    !1)),
    e.appendChild(n),
    t.toggle = () => {
        o ? n.blur() : n.focus()
    }
}
function DisplaySettingsWindow(e) {
    const t = utilFindByQueryIn(e)
      , n = new UIBox(3)
      , s = new MovableElement(e,n)
      , o = t(".title");
    s.isResizable = () => !1,
    s.isDragSurface = L => L.some(H => H === o),
    this.onClose = () => this.setHidden(),
    t(".close").addEventListener("click", () => this.onClose()),
    this.centerWindow = () => {
        s.centerX(),
        s.centerY()
    }
    ,
    this.bringToTop = () => s.bringToTop();
    const a = t(".screen-scale .slider input");
    this.onScaleChange = () => {}
    ,
    this.setScale = L => {
        a.valueAsNumber = Math.min(100, Math.max(0, Math.round(L * 100)))
    }
    ,
    this.onSliderRelease = () => {}
    ,
    a.addEventListener("input", () => this.onScaleChange(a.valueAsNumber)),
    a.addEventListener("change", () => {
        this.onScaleChange(a.valueAsNumber),
        this.onSliderRelease(a.valueAsNumber)
    }
    );
    const i = new Map
      , c = new Map
      , u = [[1024, 768], [1280, 720], [1280, 800], [800, 600]]
      , y = (L, H) => u.some( ([ne,de]) => ne === L && de === H)
      , f = t(".resolution-list")
      , D = f.querySelectorAll(".resolution");
    let x, v, d = !1;
    this.onCustomResolution = () => {}
    ;
    let P = null;
    this.setSupportCustom = L => {
        if (d = L,
        L) {
            if (x.removeAttribute("data-hidden"),
            v.setAttribute("data-hidden", "true"),
            P) {
                const H = P.width
                  , ne = P.height;
                P = null,
                this.setActiveResolution(H, ne)
            }
        } else
            x.setAttribute("data-hidden", "true"),
            v.removeAttribute("data-hidden")
    }
    ,
    this.onPaidResolution = () => {}
    ;
    for (const L of D) {
        L.hasAttribute("data-custom") && (x = L),
        L.hasAttribute("data-no-custom") && (v = L);
        const H = parseInt(L.getAttribute("data-w") || "0")
          , ne = parseInt(L.getAttribute("data-h") || "0");
        H && ne && (i.set(`${H}_${ne}`, L),
        c.set(L, [H, ne])),
        !IS_PREMIUM && !y(H, ne) && L.setAttribute("data-locked", "true")
    }
    this.setSupportCustom(!1);
    const N = t(".save-resolution label")
      , p = t(".save-resolution input");
    let O = null
      , $ = null
      , F = !1;
    const C = (L, H) => {
        O = {
            width: L,
            height: H
        },
        SafeLocalStorage.setItem("ds_saved_resolution", L + "x" + H)
    }
    ;
    this.getSavedResolution = () => O;
    let l = null
      , m = null;
    if (this.setActiveResolution = (L, H) => {
        const ne = m && m.width === L && m.height === H;
        P = null,
        m = null,
        $ = null,
        l != null && l.removeAttribute("data-active");
        const de = i.get(`${L}_${H}`);
        return de ? (l = de,
        l.setAttribute("data-active", "true"),
        $ = {
            width: L,
            height: H
        },
        F = !1,
        IS_PREMIUM && (p.title = "",
        N.title = p.title,
        p.disabled = !1),
        p.indeterminate = !1,
        p.checked && ne && C(L, H),
        !0) : d ? (l = x,
        l.setAttribute("data-active", "true"),
        $ = {
            width: L,
            height: H
        },
        F = !0,
        p.title = "Custom resolutions cannot be always set.",
        N.title = p.title,
        p.disabled = !0,
        p.indeterminate = !0,
        !0) : (P = {
            width: L,
            height: H
        },
        !1)
    }
    ,
    !IS_PREMIUM)
        p.title = "Unlock this feature with a premium plan.",
        N.title = p.title,
        p.disabled = !0,
        p.checked = !1;
    else {
        const L = SafeLocalStorage.getItem("ds_saved_resolution");
        if (L !== null) {
            const H = L.split("x")
              , ne = parseInt(H[0])
              , de = parseInt(H[1]);
            this.setActiveResolution(ne, de) ? (p.checked = !0,
            O = {
                width: ne,
                height: de
            }) : SafeLocalStorage.removeItem("ds_saved_resolution")
        }
        p.addEventListener("change", () => {
            p.checked && $ && !F ? C($.width, $.height) : (O = null,
            p.checked = !1,
            SafeLocalStorage.removeItem("ds_saved_resolution"))
        }
        )
    }
    let g = !0
      , V = !1
      , X = !1;
    const W = () => {
        V || g ? (X = !1,
        e.setAttribute("data-disabled", "true")) : (X = !0,
        e.removeAttribute("data-disabled"))
    }
    ;
    this.setSwitchingResolution = L => {
        V = L,
        W()
    }
    ,
    this.setEncoderNotAvailable = L => {
        g = L,
        W()
    }
    ,
    this.setNoResolutions = L => {
        L ? e.setAttribute("data-not-supported", "true") : e.removeAttribute("data-not-supported")
    }
    ,
    W(),
    this.onResolutionChange = () => {}
    ,
    f.addEventListener("click", utilDelegateListener( (L, H) => {
        if (L === x) {
            if (!IS_PREMIUM)
                this.onPaidResolution(0, 0);
            else {
                let Z = 1024
                  , B = 768;
                $ && (Z = $.width,
                B = $.height),
                this.onCustomResolution(Z, B)
            }
            return H.stopPropagation(),
            H.preventDefault(),
            !0
        }
        const ne = c.get(L);
        if (!ne)
            return !1;
        const [de,ie] = ne;
        return !IS_PREMIUM && !y(de, ie) ? this.onPaidResolution(de, ie) : X && (m = {
            width: de,
            height: ie
        },
        this.onResolutionChange(de, ie)),
        H.stopPropagation(),
        H.preventDefault(),
        !0
    }
    )),
    this.isVisible = () => e.hasAttribute("data-is-visible"),
    this.setVisible = () => {
        e.setAttribute("data-is-visible", "true"),
        n.setVisible(!0)
    }
    ,
    this.setHidden = () => {
        e.removeAttribute("data-is-visible"),
        n.setVisible(!1)
    }
}
function UserListWindow(e) {
    const t = utilFindByQueryIn(e)
      , n = new UIBox(7)
      , s = new MovableElement(e,n)
      , o = t(".title");
    s.isResizable = () => !1,
    s.isDragSurface = l => l.some(m => m === o),
    this.onClose = () => this.setHidden(),
    t(".close").addEventListener("click", () => this.onClose()),
    this.centerWindow = () => {
        s.centerX(),
        s.centerY()
    }
    ,
    this.bringToTop = () => s.bringToTop(),
    this.isVisible = () => e.hasAttribute("data-is-visible"),
    this.setVisible = () => {
        e.setAttribute("data-is-visible", "true"),
        n.setVisible(!0)
    }
    ,
    this.setHidden = () => {
        e.removeAttribute("data-is-visible"),
        n.setVisible(!1)
    }
    ;
    const a = t(".users")
      , i = new Map
      , c = new Map;
    let u = null
      , y = null;
    t(".take-control").addEventListener("click", () => this.onTakeControl()),
    t(".release-control").addEventListener("click", () => this.onReleaseControl());
    const x = t(".compose textarea");
    let v = !1, d;
    this.onTyping = () => {}
    ,
    this.onMessage = () => {}
    ,
    x.addEventListener("input", () => {
        v || (v = !0,
        this.onTyping(!0)),
        clearTimeout(d),
        d = setTimeout( () => {
            v = !1,
            this.onTyping(!1)
        }
        , 1e3)
    }
    ),
    x.addEventListener("keydown", l => {
        if (l.keyCode === 13 && !l.shiftKey) {
            l.preventDefault();
            const m = x.value.trim();
            x.value = "",
            m && this.onMessage(m)
        }
    }
    );
    const P = t(".chat");
    let N = [];
    this.maxChatMsgs = 100,
    this.addChatMessage = (l, m) => {
        let g;
        if (l === 0)
            g = utilFromHtml('<div class="message from-system"><div class="text"></div></div>'),
            g.querySelector(".text").textContent = m;
        else {
            const V = i.get(l)
              , X = V ? V.name : `(Unknown ${l})`;
            g = utilFromHtml('<div class="message from-user"><div class="name"></div>: <div class="text"></div></div>'),
            g.querySelector(".name").textContent = X,
            g.querySelector(".text").textContent = m
        }
        for (P.appendChild(g),
        N.push(g),
        P.scrollTop = P.scrollHeight; N.length > this.maxChatMsgs; ) {
            const V = N.shift();
            V.parentElement.removeChild(V)
        }
    }
    ,
    this.onTakeControl = () => {}
    ,
    this.onReleaseControl = () => {}
    ,
    this.onOwnControl = () => {}
    ;
    const p = 1
      , O = 2
      , $ = 4
      , F = 8;
    function C(l) {
        const m = i.get(l)
          , g = c.get(l);
        if (m && g) {
            const V = [];
            m.status & p && V.push("BLUR"),
            m.status & O && V.push("HIDDEN"),
            m.status & $ && V.push("TYPING"),
            m.status & F && V.push("AFK"),
            V.length > 0 ? g.textContent = `${m.name} (ID ${m.id}, ${V.join("|")})` : g.textContent = `${m.name} (ID ${m.id})`
        }
    }
    this.addUsers = l => {
        const m = document.createDocumentFragment();
        for (const g of l) {
            const V = utilFromHtml('<div class="user"></div>')
              , X = c.get(g.id);
            V.textContent = `${g.name} (ID ${g.id})`,
            c.set(g.id, V),
            i.set(g.id, g),
            g.id === u && V.classList.add("user-myself"),
            g.id === y && V.classList.add("user-controls"),
            X ? X.parentElement.replaceChild(V, X) : m.appendChild(V)
        }
        a.appendChild(m)
    }
    ,
    this.removeUsers = l => {
        for (const m of l) {
            const g = c.get(m);
            g && (g.parentElement.removeChild(g),
            c.delete(m),
            i.delete(m))
        }
    }
    ,
    this.removeAllUsers = () => {
        for (const l of c.values())
            l.parentElement.removeChild(l);
        c.clear(),
        i.clear()
    }
    ,
    this.setUserStatus = (l, m) => {
        const g = i.get(l);
        g && (g.status = m,
        C(l))
    }
    ,
    this.setWhoControlsId = l => {
        if (y) {
            const g = c.get(y);
            g && g.classList.remove("user-controls")
        }
        y = l;
        const m = c.get(y);
        m && m.classList.add("user-controls"),
        u && y === u ? (e.dataset.isControlling = "true",
        this.onOwnControl()) : e.dataset.isControlling = "false"
    }
    ,
    this.setOwnUserId = l => {
        if (u) {
            const g = c.get(u);
            g && g.classList.remove("user-myself")
        }
        u = l;
        const m = c.get(u);
        m && m.classList.add("user-myself")
    }
}
function ClipboardManagerWindow(e) {
    const t = this
      , n = utilFindByQueryIn(e)
      , s = new UIBox(2)
      , o = new MovableElement(e,s)
      , a = n(".title");
    o.isResizable = () => !1,
    o.isDragSurface = ie => ie.some(Z => Z === a),
    t.onClose = () => t.setHidden(),
    n(".close").addEventListener("click", () => t.onClose()),
    t.centerWindow = () => {
        o.centerX(),
        o.centerY()
    }
    ,
    t.bringToTop = () => o.bringToTop(),
    t.isVisible = () => e.hasAttribute("data-is-visible"),
    t.setVisible = () => {
        e.setAttribute("data-is-visible", "true"),
        s.setVisible(!0)
    }
    ,
    t.setHidden = () => {
        e.removeAttribute("data-is-visible"),
        s.setVisible(!1)
    }
    ;
    const i = n(".text-input");
    t.onClipboardSubmit = () => {}
    ;
    const c = "clipboard"in navigator
      , u = "permissions"in navigator
      , y = c && "readText"in navigator.clipboard
      , f = c && "writeText"in navigator.clipboard;
    n(".send").addEventListener("click", () => {
        v(300),
        t.onClipboardSubmit(i.value)
    }
    ),
    t.onClipboardManualCopy = () => {}
    ,
    n(".copy").addEventListener("click", () => {
        i.focus(),
        i.select(),
        f ? navigator.clipboard.writeText(i.value).catch( () => document.execCommand("copy")) : document.execCommand("copy"),
        t.onClipboardManualCopy()
    }
    );
    let D;
    const x = () => {
        clearTimeout(D),
        e.classList.remove("text-flashing")
    }
      , v = ie => {
        x(),
        e.classList.add("text-flashing"),
        D = setTimeout( () => x(), ie)
    }
    ;
    let d = null
      , P = null;
    const N = n("#clipboard-auto-read")
      , p = n("#clipboard-auto-write")
      , O = n(".mini-popup");
    t.setNotSupported = ie => {
        ie ? O.setAttribute("data-is-visible", "true") : O.removeAttribute("data-is-visible")
    }
    ;
    const $ = n(".error-permission-denied")
      , F = n(".error-permission-prompt")
      , C = n(".error-clipboard-not-readable")
      , l = n(".error-clipboard-not-accessible");
    let m = !1
      , g = !1;
    t.onClipboardRead = () => {}
    ,
    t.readClipboard = () => {
        V && m && navigator.clipboard.readText().then(ie => t.onClipboardRead(ie)).catch( () => {}
        )
    }
    ,
    t.requestPermission = () => {
        y && (!d || d === "prompt") && navigator.clipboard.readText().then( () => {}
        ).catch( () => {}
        )
    }
    ,
    n(".request-permission").addEventListener("click", () => t.requestPermission()),
    window.addEventListener("focus", () => t.readClipboard()),
    window.addEventListener("copy", () => t.readClipboard()),
    window.addEventListener("cut", () => t.readClipboard());
    let V = !1
      , X = !1;
    t.setClipboardText = ie => {
        v(300),
        i.value = ie,
        g && navigator.clipboard.writeText(ie).catch( () => {}
        )
    }
    ;
    function W() {
        m = N.checked && V,
        g = p.checked && X,
        t.readClipboard()
    }
    function L() {
        N.indeterminate = !1,
        N.disabled = !1,
        V = !1,
        p.indeterminate = !1,
        p.disabled = !1,
        X = !1,
        $.removeAttribute("data-is-visible"),
        F.removeAttribute("data-is-visible"),
        C.removeAttribute("data-is-visible"),
        l.removeAttribute("data-is-visible"),
        !y && !f ? l.setAttribute("data-is-visible", "true") : y ? d === "prompt" ? F.setAttribute("data-is-visible", "true") : d === "denied" && $.setAttribute("data-is-visible", "true") : C.setAttribute("data-is-visible", "true"),
        !y || !d || d !== "granted" ? (N.indeterminate = !0,
        N.disabled = !0) : V = !0,
        !f || !P || P !== "granted" ? (p.indeterminate = !0,
        p.disabled = !0) : X = !0,
        W()
    }
    function H(ie, Z) {
        try {
            navigator.permissions.query({
                name: ie
            }).then(B => {
                B.onchange = () => {
                    Z(B.state)
                }
                ,
                Z(B.state)
            }
            ).catch(B => {
                Z(null)
            }
            )
        } catch (B) {
            Z(null)
        }
    }
    if (y) {
        if (!u) {
            d = "granted",
            L();
            return
        }
        H("clipboard-read", ie => {
            d = ie,
            L()
        }
        )
    }
    if (f) {
        if (!u) {
            P = "granted",
            L();
            return
        }
        H("clipboard-write", ie => {
            P = ie || (f ? "granted" : ie),
            L()
        }
        )
    }
    const ne = SafeLocalStorage.getItem("cm_auto_read") || "true"
      , de = SafeLocalStorage.getItem("cm_auto_write") || "true";
    N.checked = ne === "true",
    p.checked = de === "true",
    N.addEventListener("change", () => {
        SafeLocalStorage.setItem("cm_auto_read", N.checked ? "true" : "false"),
        W()
    }
    ),
    p.addEventListener("change", () => {
        SafeLocalStorage.setItem("cm_auto_write", p.checked ? "true" : "false"),
        W()
    }
    ),
    L()
}
const SafeLocalStorage = ( () => {
    function e(s, o) {
        try {
            return localStorage.setItem(s, o)
        } catch (a) {
            return null
        }
    }
    function t(s) {
        try {
            return localStorage.getItem(s)
        } catch (o) {
            return null
        }
    }
    function n(s) {
        try {
            return localStorage.removeItem(s)
        } catch (o) {
            return null
        }
    }
    return {
        setItem: e,
        getItem: t,
        removeItem: n
    }
}
)()
  , SafeSessionStorage = ( () => {
    function e(s, o) {
        try {
            return sessionStorage.setItem(s, o)
        } catch (a) {
            return null
        }
    }
    function t(s) {
        try {
            return sessionStorage.getItem(s)
        } catch (o) {
            return null
        }
    }
    function n(s) {
        try {
            return sessionStorage.removeItem(s)
        } catch (o) {
            return null
        }
    }
    return {
        setItem: e,
        getItem: t,
        removeItem: n
    }
}
)();
function LocalTestingWindow(e) {
    const t = utilFindByQueryIn(e)
      , n = new UIBox(5)
      , s = new MovableElement(e,n)
      , o = t(".title");
    s.isResizable = () => !1,
    s.isDragSurface = W => W.some(L => L === o),
    this.onClose = () => this.setHidden(),
    t(".close").addEventListener("click", () => this.onClose()),
    this.setScreen = W => {
        e.setAttribute("data-screen", W)
    }
    ,
    this.setScreen("open-tunnel"),
    this.centerWindow = () => {
        s.centerX(),
        s.centerY()
    }
    ,
    this.bringToTop = () => s.bringToTop(),
    this.handleOpenTunnel = async () => {}
    ;
    const a = async () => {
        utilDisableBtn(c, "Opening..."),
        i.readOnly = !0,
        await this.handleOpenTunnel(i.value.trim()),
        utilEnableBtn(c),
        i.readOnly = !1
    }
      , i = t(".open-tunnel input")
      , c = t(".open-tunnel button");
    c.addEventListener("click", a),
    i.addEventListener("keydown", W => {
        W.key === "Enter" && a()
    }
    ),
    this.setAddress = W => {
        i.value = W
    }
    ;
    const u = t(".run-command input");
    this.setCommand = W => u.value = W.trim(),
    this.getCommand = () => u.value.trim(),
    this.handleCopyToClipboard = () => {}
    ,
    t(".run-command .copy-to-clipboard").addEventListener("click", () => {
        this.handleCopyToClipboard(u)
    }
    );
    let y = "ssh";
    const f = t(".run-command .ssh-program-1")
      , D = t(".run-command .ssh-program-2");
    this.handleCommandType = W => {}
    ,
    this.setCommandType = W => {
        y = W,
        F(),
        this.handleCommandType(y)
    }
    ;
    const x = 1024
      , v = 1024 * x
      , d = 1024 * v
      , P = (W, L) => (Number(W * 100 / L) / 100).toFixed(1);
    function N(W) {
        return W < x ? `${W} B` : W < v ? `${P(W, x)} KB` : W < d ? `${P(W, v)} MB` : `${P(W, d)} GB`
    }
    const p = t(".lt-stats-req")
      , O = t(".lt-stats-in")
      , $ = t(".lt-stats-out");
    this.updateStats = (W, L, H) => {
        p.textContent = `${W}`,
        O.textContent = N(L),
        $.textContent = N(H)
    }
    ;
    const F = () => {
        y === "ssh" ? (f.textContent = "PuTTY",
        f.title = "",
        D.textContent = "old SSH",
        D.title = "OpenSSH 7.5-") : y === "putty" ? (f.textContent = "new SSH",
        f.title = "OpenSSH 7.6+",
        D.textContent = "old SSH",
        D.title = "OpenSSH 7.5-") : y === "oldssh" && (f.textContent = "PuTTY",
        f.title = "",
        D.textContent = "new SSH",
        D.title = "OpenSSH 7.6+")
    }
    ;
    F();
    const C = W => {
        y === "ssh" ? y = W ? "putty" : "oldssh" : y === "putty" ? y = W ? "ssh" : "oldssh" : y === "oldssh" && (y = W ? "putty" : "ssh"),
        F(),
        this.handleCommandType(y)
    }
    ;
    f.addEventListener("click", () => C(!0)),
    D.addEventListener("click", () => C(!1)),
    this.handleCloseTunnel = async () => {}
    ;
    const l = t(".run-command button");
    l.addEventListener("click", async () => {
        utilDisableBtn(l, "Closing..."),
        await this.handleCloseTunnel(),
        utilEnableBtn(l)
    }
    );
    const m = t(".run-command .box")
      , g = t(".run-command .box svg use")
      , V = t(".run-command .box .status")
      , X = t(".run-command .box .detail");
    this.setPingIcon = W => g.setAttribute("xlink:href", W),
    this.setPingStatus = W => V.textContent = W.trim(),
    this.setPingDetail = W => X.innerHTML = W.trim(),
    this.setPingState = W => m.setAttribute("data-state", W),
    this.handleOpenInBrowser = () => {}
    ,
    X.addEventListener("click", W => {
        if (W.target.classList.contains("opens-link"))
            return this.handleOpenInBrowser(),
            W.preventDefault(),
            W.stopPropagation(),
            !1
    }
    ),
    this.isVisible = () => e.hasAttribute("data-is-visible"),
    this.setVisible = () => {
        e.setAttribute("data-is-visible", "true"),
        n.setVisible(!0)
    }
    ,
    this.setHidden = () => {
        e.removeAttribute("data-is-visible"),
        n.setVisible(!1)
    }
}
class ScreenshotSaveToAccountPopup extends GenericPopup {
    constructor(t) {
        super("Upload Screenshot", "Cancel"),
        this.popupElement.classList.add("image-form"),
        this.popupBody.appendChild(utilFromHtml(`
            <div>
                <h1>Save a screenshot to your account</h1>
                <p>Enter additional information about the screenshot in the form below.
                To manage your saved screenshots, <a href="/account/screenshots" target="_blank">click here</a>.</p>
                <div class="side-left"><img></div>
                <div class="side-right">
                    <input class="text-input" type="text" placeholder="Title">
                    <textarea class="text-input" placeholder="Description"></textarea>
                </div>
            </div>
        `));
        const n = this.popupElement.querySelector(".side-left img");
        n.src = URL.createObjectURL(t),
        n.onload = () => URL.revokeObjectURL(n.src),
        this.isInteractive = !0,
        this.uploadButton = this.popupElement.querySelector("button.primary"),
        this.dismissButton = this.popupElement.querySelector("button.secondary"),
        this.titleInput = this.popupElement.querySelector(".side-right input"),
        this.descInput = this.popupElement.querySelector(".side-right textarea")
    }
    onUploadConfirm() {}
    getTitle() {
        return this.titleInput.value.trim()
    }
    getDescription() {
        return this.descInput.value.trim()
    }
    setUploading() {
        this.isInteractive = !1,
        this.titleInput.readOnly = !0,
        this.descInput.readOnly = !0,
        this.uploadButton.disabled = !0,
        this.dismissButton.disabled = !0,
        this.uploadButton.textContent = "Uploading..."
    }
    onEscPressed() {
        this.isInteractive && this.dismissPopup()
    }
    onPrimary() {
        this.onUploadConfirm()
    }
    onSecondary() {
        this.onEscPressed()
    }
    onDismiss() {
        setTimeout( () => {
            this.popupElement.parentElement.removeChild(this.popupElement)
        }
        , 200)
    }
}
class ScreenshotUploadToImgurPopup extends GenericPopup {
    constructor(t) {
        super("Upload to Imgur", "Cancel"),
        this.popupElement.classList.add("image-form"),
        this.popupBody.appendChild(utilFromHtml(`
            <div>
                <h1>Upload a screenshot to Imgur</h1>
                <p>Enter an optional image description to annotate this screenshot with.</p>
                <div class="side-left"><img></div>
                <div class="side-right">
                    <textarea class="text-input" placeholder="Image description"></textarea>
                </div>
            </div>
        `));
        const n = this.popupElement.querySelector(".side-left img");
        n.src = URL.createObjectURL(t),
        n.onload = () => URL.revokeObjectURL(n.src),
        this.isInteractive = !0,
        this.uploadButton = this.popupElement.querySelector("button.primary"),
        this.dismissButton = this.popupElement.querySelector("button.secondary"),
        this.descInput = this.popupElement.querySelector(".side-right textarea")
    }
    onUploadConfirm() {}
    getDescription() {
        return this.descInput.value.trim()
    }
    setUploading() {
        this.isInteractive = !1,
        this.descInput.readOnly = !0,
        this.uploadButton.disabled = !0,
        this.dismissButton.disabled = !0,
        this.uploadButton.textContent = "Uploading..."
    }
    onEscPressed() {
        this.isInteractive && this.dismissPopup()
    }
    onPrimary() {
        this.onUploadConfirm()
    }
    onSecondary() {
        this.onEscPressed()
    }
    onDismiss() {
        setTimeout( () => {
            this.popupElement.parentElement.removeChild(this.popupElement)
        }
        , 200)
    }
}
function ScreenshotEditor(e) {
    const t = utilFindByQueryIn(e)
      , n = new UIBox(6)
      , s = new MovableElement(e,n);
    s.isResizable = () => !0;
    const {MOVE: o, PEN: a, RECT: i, TEXT: c, EDIT: u, ERASER: y} = ScreenshotEditor.ToolType
      , f = {
        [o]: "move",
        [a]: "pen",
        [i]: "rect",
        [c]: "text",
        [u]: "edit",
        [y]: "eraser"
    };
    let D, x = () => {}
    ;
    this.setTool = w => {
        const T = f[w];
        T && (D = w,
        e.setAttribute("data-tool", T),
        x())
    }
    ;
    const {RED: v, GREEN: d, BLUE: P, YELLOW: N, BLACK: p, WHITE: O} = ScreenshotEditor.ColorType
      , $ = {
        [v]: ["red", "#f44336"],
        [d]: ["green", "#4caf50"],
        [P]: ["blue", "#3f51b5"],
        [N]: ["yellow", "#ffeb3b"],
        [p]: ["black", "#212121"],
        [O]: ["white", "#eeeeee"]
    };
    let F, C = () => {}
    ;
    this.setColor = w => {
        const [T,te] = $[w] || [];
        T && (F = te,
        e.setAttribute("data-color", T),
        C())
    }
    ,
    this.setTool(a),
    this.setColor(v),
    t(".tool-move").addEventListener("click", () => this.setTool(o)),
    t(".tool-pen").addEventListener("click", () => this.setTool(a)),
    t(".tool-eraser").addEventListener("click", () => this.setTool(y)),
    t(".tool-rect").addEventListener("click", () => this.setTool(i)),
    t(".tool-text").addEventListener("click", () => this.setTool(c)),
    t(".color-red").addEventListener("click", () => this.setColor(v)),
    t(".color-green").addEventListener("click", () => this.setColor(d)),
    t(".color-blue").addEventListener("click", () => this.setColor(P)),
    t(".color-yellow").addEventListener("click", () => this.setColor(N)),
    t(".color-black").addEventListener("click", () => this.setColor(p)),
    t(".color-white").addEventListener("click", () => this.setColor(O)),
    this.onClose = () => this.setHidden(),
    t(".close").addEventListener("click", () => this.onClose()),
    this.onCopyToClipboard = () => {}
    ,
    this.onDownloadToDevice = () => {}
    ,
    this.onSaveToAccount = () => {}
    ,
    this.onUploadToImgur = () => {}
    ,
    t(".copy-to-clipboard").addEventListener("click", () => this.onCopyToClipboard()),
    t(".download-to-device").addEventListener("click", () => this.onDownloadToDevice()),
    t(".save-to-account").addEventListener("click", () => this.onSaveToAccount()),
    t(".upload-to-imgur").addEventListener("click", () => this.onUploadToImgur());
    const l = t(".title");
    s.isDragSurface = w => w.some(T => T === l),
    this.bringToTop = () => {
        s.bringToTop(),
        e.focus()
    }
    ;
    const m = 30
      , g = 150
      , V = 40
      , X = 350
      , W = t(".canvas")
      , L = document.createElement("canvas")
      , H = document.createElement("textarea");
    H.setAttribute("spellcheck", "false"),
    W.appendChild(L),
    W.appendChild(H);
    let ne, de, ie, Z, B, oe = 0, he = 0, He;
    const We = () => He = L.getBoundingClientRect();
    this.centerWindow = (w, T) => {
        const te = e.parentElement.clientWidth
          , Ce = e.parentElement.clientHeight
          , Ee = Math.min(te - 72, Math.max(w + V + g, X + g))
          , _e = Math.min(Ce - 72, Math.max(T + V + m, X + m));
        s.setPosition((te - Ee) / 2, (Ce - _e) / 2),
        s.setSize(Ee, _e)
    }
    ;
    const Me = []
      , xe = new Map;
    let Ve = 0;
    const Ue = document.createElement("canvas")
      , tt = 250
      , Je = document.createElement("canvas");
    let ke, Ne, Ie;
    const j = document.createElement("canvas");
    let Q;
    const b = () => {
        const T = 0 - oe + ie
          , Ce = -(0 - he + Z)
          , Ee = -T
          , _e = Ee + ke
          , Pe = Ce + Ne
          , nt = ne - 72
          , ut = 72
          , ct = de - 72
          , yt = 72;
        Ee > nt && (ie = oe - nt),
        _e < ut && (ie = ne - oe - ut),
        Ce > ct && (Z = he - ct),
        Pe < yt && (Z = de - he - yt)
    }
    ;
    let R = null
      , Y = null;
    H.addEventListener("keydown", w => {
        w.key === "Escape" && R === u && (H.value = "",
        M())
    }
    );
    const fe = () => {
        if (R === u) {
            const w = window.devicePixelRatio
              , [T,te] = [(H.offsetLeft + H.offsetWidth) * w, (H.offsetTop + H.offsetHeight) * w];
            ae(T, te)
        }
    }
      , le = () => {
        if (R === u) {
            const w = window.devicePixelRatio
              , T = Y
              , te = 0 - oe + ie
              , Ce = 0 - he + Z;
            H.style.top = `${Math.round((T.y - Ce) / w)}px`,
            H.style.left = `${Math.round((T.x - te) / w)}px`,
            H.style.width = `${Math.round(T.w / w)}px`,
            H.style.height = `${Math.round(T.h / w)}px`
        }
    }
    ;
    new ResizeObserver(fe).observe(H);
    const Se = () => {
        We(),
        ne = L.clientWidth * window.devicePixelRatio,
        de = L.clientHeight * window.devicePixelRatio,
        oe = Math.round((ne - ke) / 2),
        he = Math.round((de - Ne) / 2),
        L.width = ne,
        L.height = de,
        B = L.getContext("2d"),
        B.imageSmoothingEnabled = !1,
        b(),
        le()
    }
      , De = () => {
        B.clearRect(0, 0, ne, de);
        const w = oe - ie
          , T = he - Z;
        B.fillStyle = "rgba(255, 255, 255, 0.5)",
        B.fillRect(w, T, ke, Ne),
        B.drawImage(Je, ie - oe, Z - he, ne, de, 0, 0, ne, de)
    }
      , ze = () => {
        Ie.clearRect(0, 0, ke, Ne),
        Ie.drawImage(Ue, tt, tt);
        for (const w of Me)
            w.drawObject(Ie)
    }
      , at = () => {
        Q.clearRect(0, 0, ke, Ne);
        for (const w of Me)
            w.drawIndexed(Q)
    }
      , Fe = () => {
        ze(),
        at(),
        De()
    }
      , Ze = (w, T= () => null) => {
        const {width: te, height: Ce} = w.canvas;
        for (let Ee = 0; ; Ee++) {
            const _e = T(Ee, te, Ce);
            if (!_e)
                return -1;
            const Pe = w.getImageData(..._e).data;
            for (let nt = 0; nt < Pe.length; nt += 4)
                if (Pe[nt + 4] > 0)
                    return Ee
        }
    }
      , st = w => {
        const {width: T, height: te} = w.canvas
          , Ce = Ee => Ze(w, Ee);
        return {
            top: Ce( (Ee, _e, Pe) => Ee < Pe ? [0, Ee, _e, 1] : null),
            left: Ce( (Ee, _e, Pe) => Ee < _e ? [Ee, 0, 1, Pe] : null),
            right: T - Ce( (Ee, _e, Pe) => Ee < _e ? [_e - Ee, 0, 1, Pe] : null),
            bottom: te - Ce( (Ee, _e, Pe) => Ee < Pe ? [0, Pe - Ee, _e, 1] : null)
        }
    }
    ;
    this.getEditedImage = (w="transparent") => {
        const {top: T, left: te, right: Ce, bottom: Ee} = st(Ie)
          , [_e,Pe] = [Ce - te, Ee - T]
          , nt = document.createElement("canvas");
        nt.width = _e,
        nt.height = Pe;
        const ut = nt.getContext("2d");
        return ut.clearRect(0, 0, _e, Pe),
        ut.fillStyle = w,
        ut.fillRect(0, 0, _e, Pe),
        ut.drawImage(Je, te, T, _e, Pe, 0, 0, _e, Pe),
        nt
    }
    ;
    const J = w => {
        w == null ? (Ue.width = 1,
        Ue.height = 1) : (Ue.width = w.width,
        Ue.height = w.height,
        Ue.getContext("2d").drawImage(w, 0, 0)),
        Me.splice(0, Me.length),
        xe.clear(),
        Ve = 0,
        ke = Ue.width + tt * 2,
        Ne = Ue.height + tt * 2,
        ie = 0,
        Z = 0,
        oe = Math.round((ne - ke) / 2),
        he = Math.round((de - Ne) / 2),
        Je.width = ke,
        Je.height = Ne,
        Ie = Je.getContext("2d"),
        Ie.imageSmoothingEnabled = !1,
        j.width = ke,
        j.height = Ne,
        j.style.webkitFontSmoothing = "none",
        j.style.fontSmooth = "never",
        Q = j.getContext("2d"),
        Q.imageSmoothingEnabled = !1,
        Q.webkitImageSmoothingEnabled = !1,
        Fe()
    }
    ;
    let Le, $e;
    this.getScreenshotURL = () => "",
    this.getScreenshotPlatform = () => Le,
    this.getScreenshotBrowser = () => $e,
    this.setScreenshotData = (w, T, te) => {
        J(w),
        $e = te,
        Le = T
    }
    ,
    Se(),
    J(null);
    class et {
        constructor(T) {
            this.rgb = T,
            this.hex = "#" + T.toString(16).padStart(6, "0")
        }
    }
    const ht = new et(0)
      , E = w => {
        Me.push(w),
        w.ref = new et(Ve++),
        xe.set(w.ref.rgb, w)
    }
      , k = w => {
        Me.splice(Me.indexOf(w), 1),
        xe.delete(w.ref.rgb)
    }
    ;
    class _ {
        constructor(T, te=[]) {
            this.points = te.slice(),
            this.color = T,
            this.ref = ht
        }
        drawSegments(T, te) {
            T.lineWidth = 5,
            T.lineJoin = "round",
            T.fillStyle = te,
            T.strokeStyle = te,
            T.beginPath();
            for (let Ce = 0; Ce < this.points.length; Ce += 2) {
                const Ee = this.points[Ce]
                  , _e = this.points[Ce + 1];
                Ce == 0 && T.fillRect(Ee - 2, _e - 2, 4, 4),
                T.lineTo(.5 + Ee, .5 + _e)
            }
            T.stroke()
        }
        addPoint(T, te) {
            this.points.push(Math.round(T), Math.round(te))
        }
        drawObject(T) {
            this.drawSegments(T, this.color)
        }
        drawIndexed(T) {
            this.drawSegments(T, this.ref.hex)
        }
    }
    class r {
        constructor(T) {
            this.color = T,
            this.x = 0,
            this.y = 0,
            this.w = 0,
            this.h = 0,
            this.ref = ht
        }
        setLeftTop(T, te) {
            this.w = this.x + this.w - T,
            this.h = this.y + this.h - te,
            this.x = T,
            this.y = te
        }
        setRightBottom(T, te) {
            this.w = T - this.x,
            this.h = te - this.y,
            this.x = T - this.w,
            this.y = te - this.h
        }
        drawRect(T, te) {
            T.lineWidth = 5,
            T.lineJoin = "miter",
            T.strokeStyle = te,
            T.strokeRect(this.x + .5, this.y + .5, this.w, this.h)
        }
        drawObject(T) {
            this.drawRect(T, this.color)
        }
        drawIndexed(T) {
            this.drawRect(T, this.ref.hex)
        }
    }
    class h extends r {
        constructor(T, te="600 16px/16px Arial") {
            super(T),
            this.font = te,
            this.editing = !0,
            this.text = ""
        }
        drawRect(T, te) {
            T.lineWidth = 2,
            T.lineJoin = "miter",
            T.strokeStyle = te,
            T.strokeRect(this.x + .5, this.y + .5, this.w, this.h)
        }
        drawText(T, te, Ce=!1) {
            const Ee = window.devicePixelRatio;
            let _e = 0;
            T.fillStyle = te,
            T.font = this.font.replace(/(\d+)px/i, (Ke, gt) => (_e = parseInt(gt) * Ee,
            `${_e}px`));
            const Pe = 4
              , nt = _e
              , ut = this.text.split("");
            let ct = Pe
              , yt = nt;
            for (const Ke of ut) {
                const {width: gt} = T.measureText(Ke);
                (ct + gt > this.w || Ke === `
`) && (ct = Pe,
                yt += nt),
                Ke !== `
` && (Ce ? T.fillRect(this.x + ct, this.y + yt - nt, gt, nt) : T.fillText(Ke, this.x + ct, this.y + yt),
                ct += gt)
            }
        }
        drawObject(T) {
            this.editing ? this.drawRect(T, "gray") : this.drawText(T, this.color, !1)
        }
        drawIndexed(T) {
            this.drawText(T, this.ref.hex, !0)
        }
    }
    const S = (w, T) => {
        const te = w - oe + ie
          , Ce = T - he + Z;
        Y.addPoint(te, Ce),
        B.lineTo(w, T),
        B.stroke()
    }
      , K = (w, T) => {
        const te = w - oe + ie
          , Ce = T - he + Z
          , [Ee,_e,Pe,nt] = Q.getImageData(te, Ce, 1, 1).data;
        if (nt === 255) {
            const ut = Ee << 16 | _e << 8 | Pe
              , ct = xe.get(ut);
            ct && k(ct),
            Fe()
        }
    }
      , ae = (w, T) => {
        const te = Y
          , Ce = w - oe + ie
          , Ee = T - he + Z;
        te.setRightBottom(Ce, Ee),
        De();
        const _e = 0 - oe + ie
          , Pe = 0 - he + Z;
        B.translate(-_e, -Pe),
        te.drawObject(B),
        B.translate(_e, Pe)
    }
    ;
    let pe, re;
    const ge = (w, T) => {
        const te = pe - w
          , Ce = re - T;
        ie += te,
        Z += Ce,
        pe = w,
        re = T,
        De()
    }
      , A = w => {
        const T = Math.round((w.clientX - He.left) * window.devicePixelRatio)
          , te = Math.round((w.clientY - He.top) * window.devicePixelRatio)
          , Ce = T - oe + ie
          , Ee = te - he + Z;
        if (!(R != null && !M(w))) {
            switch (D) {
            case o:
                pe = T,
                re = te;
                break;
            case a:
                Y = new _(F),
                B.lineWidth = 5,
                B.lineJoin = "round",
                B.strokeStyle = Y.color,
                B.beginPath();
                break;
            case c:
                Y = new h(F),
                Y.setLeftTop(Ce, Ee);
                break;
            case u:
                break;
            case i:
                Y = new r(F),
                Y.setLeftTop(Ce, Ee);
                break;
            case y:
                break
            }
            R = D,
            Re(w)
        }
    }
      , Re = w => {
        if (R == null)
            return;
        const T = Math.round((w.clientX - He.left) * window.devicePixelRatio)
          , te = Math.round((w.clientY - He.top) * window.devicePixelRatio);
        switch (R) {
        case o:
            ge(T, te);
            break;
        case a:
            S(T, te);
            break;
        case i:
        case c:
            ae(T, te);
            break;
        case u:
            break;
        case y:
            K(T, te);
            break;
        default:
            throw new Error(`${R.toString()} is not supported`)
        }
    }
      , me = (w, T=ke, te=Ne) => w.y > te || w.x > T || w.x + w.w < 0 || w.y + w.h < 0
      , lt = () => {
        Y = null,
        R = null,
        b(),
        Fe()
    }
      , Qe = () => {
        const w = Y;
        if (me(w)) {
            lt();
            return
        }
        const [T,te] = [0, 0]
          , [Ce,Ee] = [ke, Ne]
          , [_e,Pe] = [50, 50];
        w.x < te && (w.w -= te - w.x,
        w.x = te),
        w.y < T && (w.h -= T - w.y,
        w.y = T),
        w.x + w.w > Ce && (w.w -= w.x + w.w - Ce),
        w.y + w.h > Ee && (w.h -= w.y + w.h - Ee),
        w.w < _e && (w.w = _e,
        w.x -= Math.max(0, w.x + w.w - Ce)),
        w.h < Pe && (w.h = Pe,
        w.y -= Math.max(0, w.y + w.h - Ee));
        const nt = Ce - w.x
          , ut = Ee - w.y
          , ct = yt => `${Math.round(yt / window.devicePixelRatio)}px`;
        this.setTool(u),
        R = u,
        le(),
        H.value = "",
        H.style.minWidth = ct(_e),
        H.style.minHeight = ct(Pe),
        H.style.maxWidth = ct(nt),
        H.style.maxHeight = ct(ut),
        H.style.font = w.font,
        H.style.color = w.color,
        setTimeout( () => H.focus(), 50)
    }
      , mt = w => {
        if (!w || "type"in w && w.type === "mousedown") {
            if (!w || w.target === L) {
                const T = H.value.trim();
                if (T.length > 0) {
                    const te = Y;
                    te.editing = !1,
                    te.text = T,
                    E(te)
                }
            }
            lt(),
            D === u && this.setTool(c)
        }
    }
      , pt = (w, T, te=ke, Ce=Ne) => w < 0 || w > te || T < 0 || T > Ce
      , I = w => {
        const T = []
          , te = [];
        let Ce = !0;
        for (let Ee = 0; Ee < w.points.length; Ee += 2) {
            const _e = w.points[Ee]
              , Pe = w.points[Ee + 1];
            if (Ce)
                if (pt(_e, Pe)) {
                    if (T.length > 0) {
                        T.push(_e, Pe);
                        const nt = new _(w.color,T);
                        T.splice(0, T.length),
                        te.push(nt)
                    }
                    Ce = !1
                } else
                    T.push(_e, Pe);
            else
                pt(_e, Pe) || (T.push(w.points[Ee - 2], w.points[Ee - 1]),
                T.push(_e, Pe),
                Ce = !0)
        }
        if (T.length > 0) {
            const Ee = new _(w.color,T);
            T.splice(0, T.length),
            te.push(Ee)
        }
        return te
    }
      , M = w => {
        switch (R) {
        case null:
            return !0;
        case c:
            return Qe(),
            !1;
        case u:
            return mt(w),
            !1;
        case a:
        case i:
        case y:
        case o:
            break
        }
        if (R === i) {
            const T = Y;
            me(T) || E(T)
        }
        if (R === a) {
            const T = Y;
            for (const te of I(T))
                E(te)
        }
        return lt(),
        !0
    }
    ;
    x = () => D !== u && M(),
    C = () => D === u && this.setTool(c);
    const z = w => w == o || w == a || w == y;
    L.addEventListener("mousedown", w => A(w));
    let ee = null;
    const ue = w => {
        if (ee === null)
            return null;
        for (const T of w)
            if (T.identifier === ee)
                return T;
        return null
    }
    ;
    L.addEventListener("touchstart", w => {
        const T = w.targetTouches[0];
        ee = T.identifier,
        A(T)
    }
    ),
    L.addEventListener("mousemove", w => {
        w.buttons === 1 ? R == null && z(D) ? A(w) : Re(w) : R != null && M(w)
    }
    ),
    L.addEventListener("touchmove", w => {
        const T = ue(w.touches);
        T != null ? R == null && z(D) ? A(T) : Re(T) : R != null && M()
    }
    ),
    L.addEventListener("mouseup", w => M(w)),
    L.addEventListener("touchend", w => {
        const T = ue(w.changedTouches);
        T != null && (M(T),
        ee = null)
    }
    ),
    L.addEventListener("mouseout", w => M(w)),
    this.testIndexed = () => {
        const w = oe - ie
          , T = he - Z;
        B.fillStyle = "rgba(255, 255, 255, 1)",
        B.fillRect(w, T, ke, Ne),
        B.drawImage(j, w, T)
    }
    ,
    this.showCopied = () => e.setAttribute("data-was-copied", "true"),
    this.hideCopied = () => e.removeAttribute("data-was-copied"),
    this.showDownloaded = () => e.setAttribute("data-was-downloaded", "true"),
    this.hideDownloaded = () => e.removeAttribute("data-was-downloaded"),
    this.setVisible = () => {
        e.setAttribute("data-is-visible", "true"),
        setTimeout( () => We(), 200),
        n.setVisible(!0)
    }
    ,
    this.setHidden = () => {
        e.removeAttribute("data-is-visible"),
        n.setVisible(!1)
    }
    ,
    new ResizeObserver( () => {
        Se(),
        De()
    }
    ).observe(e),
    new MutationObserver( () => {
        We()
    }
    ).observe(e, {
        attributeFilter: ["style"]
    })
}
ScreenshotEditor.ToolType = {
    MOVE: Symbol("MOVE"),
    PEN: Symbol("PEN"),
    ERASER: Symbol("ERASER"),
    RECT: Symbol("RECT"),
    TEXT: Symbol("TEXT"),
    EDIT: Symbol("EDIT")
},
ScreenshotEditor.ColorType = {
    RED: Symbol("RED"),
    GREEN: Symbol("GREEN"),
    BLUE: Symbol("BLUE"),
    YELLOW: Symbol("YELLOW"),
    BLACK: Symbol("BLACK"),
    WHITE: Symbol("WHITE")
};
function ScreenshotManager(e=15) {
    let t = !1, n = null, s, o, a = document.createElement("canvas"), i = null, c = null;
    const u = ({x: l, y: m, width: g, height: V}) => ({
        x: g < 0 ? l + g : l,
        y: V < 0 ? m + V : m,
        width: g < 0 ? -g : g,
        height: V < 0 ? -V : V
    })
      , y = ({width: l, height: m}) => l < e && m < e || l < 1 || m < 1
      , f = () => {
        i != null && i.onScreenUpdate()
    }
      , D = () => {
        if (c != null && t) {
            const l = c.mainCtx;
            if (!l)
                return;
            const m = c.canvasWidth
              , g = c.canvasHeight;
            l.clearRect(0, 0, m, g);
            const V = c.contentToCanvas(0, 0, a.width, a.height);
            if (l.drawImage(a, ...V),
            l.fillStyle = "rgba(255, 255, 255, 0.6)",
            l.fillRect(0, 0, m, g),
            n != null) {
                const {x: X, y: W, width: L, height: H} = n;
                l.clearRect(X, W, L, H),
                l.save(),
                l.beginPath(),
                l.rect(X, W, L, H),
                l.clip(),
                l.drawImage(a, ...V),
                l.restore(),
                l.strokeStyle = "red",
                l.strokeRect(X, W, L, H)
            }
        }
    }
    ;
    document.addEventListener("keydown", l => {
        l.key === "Escape" && t && this.cancelScreenshot()
    }
    ),
    this.onScreenshotStart = () => {}
    ,
    this.onScreenshotMove = () => {}
    ,
    this.onScreenshotCancel = () => {}
    ,
    this.onScreenshotFinish = () => {}
    ;
    const x = () => {
        n = null,
        this.onScreenshotStart()
    }
      , v = (l, m) => {
        if (!l || !m)
            return null;
        const {x: g, y: V, width: X, height: W} = u(l)
          , {x: L, y: H, width: ne, height: de} = u(m)
          , ie = Math.max(g, L)
          , Z = Math.max(V, H)
          , B = Math.min(g + X, L + ne) - ie
          , oe = Math.min(V + W, H + de) - Z;
        return ie + B <= L || Z + oe <= H || ie >= L + ne || Z >= H + de ? null : u({
            x: ie,
            y: Z,
            width: B,
            height: oe
        })
    }
      , d = () => {
        if (!c)
            return null;
        const l = c.contentWidth
          , m = c.contentHeight
          , [g,V,X,W] = c.contentToCanvas(0, 0, l, m);
        return {
            x: g,
            y: V,
            width: X,
            height: W
        }
    }
      , P = () => {
        if (!c)
            return;
        const l = d()
          , m = v(n, l);
        if (!m || y(m)) {
            x();
            return
        }
        const [g,V,X,W] = c.canvasToContent(m.x, m.y, m.width, m.height);
        if (X <= 0 || W <= 0) {
            x();
            return
        }
        console.log(`[Screenshot] Screenshot taken: ${g}, ${V} ${X}\xD7${W}`);
        const L = document.createElement("canvas");
        L.width = X,
        L.height = W,
        L.getContext("2d").drawImage(a, g, V, X, W, 0, 0, X, W),
        t = !1,
        n = null,
        c.__touchControlsDisabled = !1,
        c.setCustomCursor(!0),
        this.onScreenshotFinish(L, s, o),
        f()
    }
    ;
    this.startScreenshot = () => {
        if (i != null && c != null) {
            const l = i.getLastNavigateBrowser()
              , m = i.getPlatform();
            if (!l || !m)
                return;
            t = !0,
            c.__touchControlsDisabled = !0,
            c.setCustomCursor(!1),
            a.width = i.width,
            a.height = i.height,
            a.getContext("2d").drawImage(i.canvas, 0, 0),
            o = l,
            s = m,
            n = null,
            this.onScreenshotStart(),
            f()
        }
    }
    ,
    this.cancelScreenshot = () => {
        t = !1,
        n = null,
        c && (c.__touchControlsDisabled = !1,
        c.setCustomCursor(!0)),
        this.onScreenshotCancel(),
        f()
    }
    ;
    let N = null, p, O, $, F = !1;
    this.detach = () => {
        c != null && i != null && (F = !1,
        c.shouldDrawContentImage = p,
        c.onMouseEvent = $,
        c.onTouchEvent = O,
        this.cancelScreenshot(),
        c = null,
        i = null)
    }
    ;
    const C = l => {
        if (N === null)
            return null;
        for (const m of l)
            if (m.identifier === N)
                return m;
        return null
    }
    ;
    this.attach = (l, m) => {
        F && this.detach(),
        F = !0,
        i = l,
        c = m,
        p = m.shouldDrawContentImage,
        m.shouldDrawContentImage = () => t ? (D(),
        !1) : !0,
        O = m.onTouchEvent,
        m.onTouchEvent = g => {
            if (t) {
                if (g.type === "touchstart") {
                    if (N == null) {
                        const V = g.targetTouches[0];
                        N = V.identifier;
                        const [X,W] = m.getPosWithinTarget(V);
                        n = {
                            x: X,
                            y: W,
                            width: 0,
                            height: 0
                        }
                    }
                } else if (g.type === "touchmove") {
                    const V = C(g.touches);
                    if (V && n != null) {
                        const [X,W] = m.getPosWithinTarget(V);
                        n.width = X - n.x,
                        n.height = W - n.y
                    }
                } else
                    g.type === "touchend" && C(g.changedTouches) && (P(),
                    N = null);
                g.preventDefault(),
                g.stopPropagation(),
                f();
                return
            }
            O.call(m, g)
        }
        ,
        $ = m.onMouseEvent,
        m.onMouseEvent = (g, V, X, W, L) => {
            if (t) {
                X.type === "mousedown" ? n != null ? P() : n = {
                    x: W,
                    y: L,
                    width: 0,
                    height: 0
                } : X.type === "mouseup" ? P() : X.type === "mousemove" && n != null && (n.width = W - n.x,
                n.height = L - n.y),
                f();
                return
            }
            return $.call(m, g, V, X, W, L)
        }
    }
}
function BAudioDecoder_LibOpus(e) {
    const t = this;
    let n = !1, s, o, a;
    t.onDecoded = () => {}
    ,
    t.decode = u => {
        if (!n)
            return;
        s.set(u);
        const y = a(u.length);
        if (y <= 0)
            return;
        const f = new Float32Array(y)
          , D = new Float32Array(y);
        for (let x = 0, v = 0; x < y * 2; x += 2,
        v += 1)
            f[v] = o[x],
            D[v] = o[x + 1];
        t.onDecoded(f, D)
    }
    ,
    t.close = () => {}
    ;
    let i = "opus_mvp";
    WasmFeatures.signExt && WasmFeatures.bulkMemory && (i = "opus_base");
    function c(u, y) {
        return WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(fetch(u), y) : fetch(u).then(f => f.arrayBuffer()).then(f => WebAssembly.instantiate(f, y))
    }
    c(`/wasm/${i}.wasm?v=${GIT_HASH}`, {}).then(u => {
        const y = u.instance
          , f = y.exports.init(e);
        if (f !== 0) {
            console.log("[LibOpus] Init error", f),
            Logging.userError("browse_opus_init", {
                status: f
            });
            return
        }
        const D = y.exports.memory.buffer
          , x = y.exports.input()
          , v = y.exports.output();
        s = new Uint8Array(D,x,65535),
        o = new Float32Array(D,v,48e3 * 2),
        a = y.exports.decode,
        n = !0
    }
    ).catch(u => {
        console.log("[LibOpus] Module error", u),
        Logging.userError("browse_opus_module", {
            error: u.toString(),
            href: window.location.href.slice(0, 256)
        })
    }
    )
}
BAudioDecoder_LibOpus.isSupported = function() {
    return typeof WebAssembly != "undefined"
}
;
function BAudioDecoder_WebCodecs(e) {
    const t = this;
    t.onDecoded = () => {}
    ;
    let n = null;
    const s = a => {
        const i = a.allocationSize({
            planeIndex: 0
        })
          , c = new Float32Array(i / 4);
        a.copyTo(c, {
            planeIndex: 0
        }),
        a.close();
        const u = new Float32Array(c.length / 2)
          , y = new Float32Array(c.length / 2);
        for (let f = 0, D = 0; f < c.length; f += 2,
        D += 1)
            u[D] = c[f],
            y[D] = c[f + 1];
        t.onDecoded(u, y)
    }
      , o = () => {
        const a = new AudioDecoder({
            error: () => {}
            ,
            output: s
        });
        a.configure({
            codec: "opus",
            sampleRate: e,
            numberOfChannels: 2
        }),
        n = a
    }
    ;
    o(),
    t.decode = a => {
        if (!n)
            return;
        const i = new EncodedAudioChunk({
            type: "key",
            timestamp: 0,
            data: a
        });
        n.state === "closed" && o(),
        n.decode(i)
    }
    ,
    t.close = () => {
        n && n.close()
    }
}
BAudioDecoder_WebCodecs.isSupported = function() {
    return typeof AudioDecoder != "undefined" && typeof EncodedAudioChunk != "undefined"
}
;
function BVideoDecoder_WebCodecs() {
    const e = this;
    e.onDecoded = () => {}
    ;
    const t = c => {
        e.onDecoded(c)
    }
    ;
    function n(c) {
        return "avc1." + ((c[1] << 16 | c[2] << 8 | c[3]) >>> 0).toString(16).padStart(6, "0")
    }
    function s(c) {
        let u = 0;
        for (let y = 0; y < 32 && (u |= c & 1,
        y != 31); y++)
            u <<= 1,
            c >>= 1;
        return u
    }
    function o(c) {
        const u = ["", "A", "B", "C"]
          , y = c[1] >> 6
          , f = c[1] & 31
          , D = (c[1] & 32) >> 5
          , x = s((c[2] << 24 | c[3] << 16 | c[4] << 8 | c[5]) >>> 0)
          , v = c[12];
        let d = !1
          , P = "";
        for (let N = 5; N >= 0; N--)
            (c[6 + N] || d) && (P = "." + c[6 + N].toString(16) + P,
            d = !0);
        return "hvc1." + u[y] + f + "." + x.toString(16).toUpperCase() + "." + (D === 0 ? "L" : "H") + v + P.toUpperCase()
    }
    const a = new VideoDecoder({
        output: t,
        error: () => {}
    });
    let i = 0;
    e.configure = (c, u, y, f) => {
        i = 0,
        a.reset(),
        a.configure({
            codec: f ? o(y) : n(y),
            description: y,
            codedWidth: c,
            codedHeight: u,
            hardwareAcceleration: "prefer-hardware",
            optimizeForLatency: !0
        })
    }
    ,
    e.decode = (c, u) => {
        const y = new EncodedVideoChunk({
            type: c ? "key" : "delta",
            timestamp: i++,
            data: u
        });
        a.decode(y)
    }
    ,
    e.close = () => {
        a.close()
    }
}
BVideoDecoder_WebCodecs.isSupported = function() {
    return typeof VideoDecoder != "undefined" && typeof EncodedVideoChunk != "undefined"
}
;
function BVideoDecoder() {
    const e = this;
    let t = null;
    if (BVideoDecoder_WebCodecs.isSupported() && (t = new BVideoDecoder_WebCodecs),
    e.onDecoded = () => {}
    ,
    !t) {
        e.configure = () => {}
        ,
        e.decode = () => {}
        ,
        e.ok = !1;
        return
    }
    t.onDecoded = n => e.onDecoded(n),
    e.configure = (n, s, o, a) => t.configure(n, s, o, a),
    e.decode = (n, s) => t.decode(n, s),
    e.ok = !0
}
function BAudioOutput_WebAudio(e) {
    const t = this;
    let n = null;
    const s = () => {
        const x = new AudioContext({
            sampleRate: e
        })
          , v = () => {
            x.state !== "closed" && x.close(),
            s()
        }
        ;
        x.onstatechange = () => {
            x.state === "interrupted" && x.resume().catch(v)
        }
        ;
        function d() {
            x.resume().then( () => {
                document.removeEventListener("keydown", d),
                document.removeEventListener("mousedown", d),
                document.removeEventListener("pointerdown", d),
                document.removeEventListener("touchend", d)
            }
            , v)
        }
        x.state === "suspended" && (document.addEventListener("keydown", d),
        document.addEventListener("mousedown", d),
        document.addEventListener("pointerdown", d),
        document.addEventListener("touchend", d)),
        n = x
    }
    ;
    s();
    const o = 4;
    let a = 0
      , i = []
      , c = 0
      , u = 0;
    function y() {
        if (u > o || !n)
            return;
        const x = Math.min(o - u, i.length);
        n.currentTime > a && (a = n.currentTime);
        for (let v = 0; v < x; v++) {
            const [d,P] = i.shift()
              , N = d.length / e;
            c -= N;
            const p = n.createBuffer(2, N * e, e);
            p.copyToChannel(d, 0),
            p.copyToChannel(P, 1);
            const O = n.createBufferSource();
            O.buffer = p,
            O.connect(n.destination),
            O.onended = () => {
                u--,
                y()
            }
            ,
            O.start(a),
            a += p.duration,
            u++
        }
    }
    function f() {
        if (i.length > o)
            for (let x = 0; x < i.length - o; x++) {
                const [v,d] = i.shift()
                  , P = v.length / e;
                c -= P
            }
    }
    function D(x, v) {
        i.push([x, v]);
        const d = x.length / e;
        c += d,
        c > .5 && f(),
        !u && i.length > o && y()
    }
    t.play = (x, v) => {
        !n || n.state !== "running" || D(x, v)
    }
    ,
    t.close = () => {
        !n || n.state === "closed" || n.close()
    }
}
BAudioOutput_WebAudio.isSupported = function() {
    return typeof AudioContext != "undefined"
}
;
function BAudioPlayer(e) {
    const t = this;
    let n = null
      , s = null;
    if (BAudioOutput_WebAudio.isSupported())
        try {
            n = new BAudioOutput_WebAudio(e)
        } catch (o) {
            /not a valid value for enumeration AudioChannel/i.test(o.message) || Logging.userError("browse_webaudio_init", {
                error: o.toString()
            })
        }
    if (BAudioDecoder_WebCodecs.isSupported() ? s = new BAudioDecoder_WebCodecs(e) : BAudioDecoder_LibOpus.isSupported() && (s = new BAudioDecoder_LibOpus(e)),
    !n || !s) {
        n && n.close(),
        s && s.close(),
        t.play = () => {}
        ,
        t.close = () => {}
        ,
        t.ok = !1;
        return
    }
    s.onDecoded = (o, a) => {
        n.play(o, a)
    }
    ,
    t.play = o => {
        s.decode(o)
    }
    ,
    t.close = () => {
        n.close(),
        s.close()
    }
    ,
    t.ok = !0
}
function ProxySettingsWindow(e) {
    const t = utilFindByQueryIn(e)
      , n = new UIBox(8)
      , s = new MovableElement(e,n)
      , o = t(".title");
    s.isResizable = () => !1,
    s.isDragSurface = J => J.some(Le => Le === o),
    this.onClose = () => this.setHidden(),
    t(".close").addEventListener("click", () => this.onClose()),
    this.setDisabled = J => {
        J ? e.setAttribute("data-disabled", "true") : e.removeAttribute("data-disabled")
    }
    ;
    let a = null
      , i = null;
    const c = t(".screen-dc .buttons-default")
      , u = t(".screen-dc .buttons-active")
      , y = t(".screen-res .buttons-default")
      , f = t(".screen-res .buttons-active")
      , D = t(".screen-tor .buttons-default")
      , x = t(".screen-tor .buttons-active")
      , v = t(".screen-tunnel .buttons")
      , d = t(".screen-custom .buttons-default")
      , P = t(".screen-custom .buttons-active")
      , N = t(".screen-mobile .buttons-default")
      , p = t(".screen-mobile .buttons-active")
      , O = () => {
        const J = this.proxyState > 1;
        switch (this.proxyScreen) {
        case "dc":
            return J ? u : c;
        case "res":
            return J ? f : y;
        case "tor":
            return J ? x : D;
        case "tunnel":
            return v;
        case "custom":
            return J ? P : d;
        case "mobile":
            return J ? p : N
        }
    }
    ;
    this.enableButtons = () => {
        a && (utilEnableBtn(a),
        a = null),
        i && (utilEnableBtn(i),
        i = null)
    }
    ,
    this.disableButtons = (J, Le) => {
        this.enableButtons();
        const $e = O();
        $e && (a = $e.querySelector(".secondary"),
        i = $e.querySelector(".primary"),
        a && utilDisableBtn(a, J),
        i && utilDisableBtn(i, Le))
    }
    ;
    const $ = t(".tunnel-status")
      , F = t(".tunnel-status span")
      , C = t(".tunnel-status svg use");
    this.setTunnelStatus = (J, Le, $e) => {
        Ie.setAttribute("data-status", J),
        $.setAttribute("data-status", J),
        C.setAttribute("xlink:href", Le),
        F.textContent = $e
    }
    ,
    this.proxyScreen,
    this.setScreen = J => {
        this.proxyScreen = J,
        e.setAttribute("data-screen", J)
    }
    ,
    this.setScreen("none"),
    this.proxyState,
    this.handleCancel = () => {}
    ,
    this.handleConnect = () => {}
    ;
    const l = t(".copy-command input");
    this.setCommand = J => l.value = J.trim(),
    this.handleCopyToClipboard = () => {}
    ,
    t(".copy-command .copy-to-clipboard").addEventListener("click", () => {
        this.handleCopyToClipboard(l)
    }
    ),
    this.handleScreen = () => {}
    ,
    this.handleState = () => {}
    ,
    this.handleError = () => {}
    ,
    this.handleMeter = () => {}
    ;
    const m = (J, Le) => Le ? J.removeAttribute("data-disabled") : J.setAttribute("data-disabled", "true")
      , g = t(".use-dc")
      , V = t(".use-res")
      , X = t(".use-tor")
      , W = t(".use-tunnel")
      , L = t(".use-custom")
      , H = t(".use-mobile");
    g.addEventListener("click", () => this.handleScreen("dc")),
    V.addEventListener("click", () => this.handleScreen("res")),
    X.addEventListener("click", () => this.handleScreen("tor")),
    W.addEventListener("click", () => this.handleScreen("tunnel")),
    L.addEventListener("click", () => this.handleScreen("custom")),
    H.addEventListener("click", () => this.handleScreen("mobile"));
    const ne = () => parseInt(oe.value);
    e.querySelectorAll(".do-cancel").forEach(J => J.addEventListener("click", () => this.handleCancel(this.proxyScreen))),
    e.querySelectorAll(".do-connect").forEach(J => J.addEventListener("click", () => {
        this.proxyScreen === "dc" ? this.handleConnect(3, parseInt(ie.value)) : this.proxyScreen === "res" ? this.handleConnect(2, parseInt(de.value)) : this.proxyScreen === "mobile" ? this.handleConnect(9, parseInt(Z.value)) : this.proxyScreen === "tor" ? this.handleConnect(4, parseInt(B.value)) : this.proxyScreen === "custom" && this.handleConnect(ne(), 0)
    }
    )),
    this.centerWindow = () => {
        s.centerX(),
        s.centerY()
    }
    ,
    this.bringToTop = () => s.bringToTop(),
    this.isVisible = () => e.hasAttribute("data-is-visible"),
    this.setVisible = () => {
        e.setAttribute("data-is-visible", "true"),
        n.setVisible(!0)
    }
    ,
    this.setHidden = () => {
        e.removeAttribute("data-is-visible"),
        n.setVisible(!1)
    }
    ;
    const de = t(".sel-res")
      , ie = t(".sel-dc")
      , Z = t(".sel-mobile")
      , B = t(".sel-tor")
      , oe = t(".sel-protocol");
    this.customAddress = t(".proxy-input-address"),
    this.customUsername = t(".proxy-input-username"),
    this.customPassword = t(".proxy-input-password");
    let he = "";
    const He = () => {
        const J = this.customPassword;
        ne() === 7 ? (J.disabled = !0,
        J.placeholder = "Not supported",
        he = this.customPassword.value,
        J.value = "") : (J.disabled = !1,
        J.placeholder = "",
        he && (J.value = he,
        he = ""))
    }
    ;
    oe.addEventListener("change", () => He()),
    He();
    function We(J) {
        return J < 10 ? J : J < 28 ? 10 + (J - 10) * 5 : J < 118 ? 100 + (J - 28) * 10 : J < 208 ? 1e3 + (J - 118) * 100 : J < 248 ? 1e4 + (J - 208) * 1e3 : J < 255 ? 5e4 + (J - 248) * 5e3 : 85e3
    }
    const Me = 1024
      , xe = 1024 * Me
      , Ve = 1024 * xe
      , Ue = (J, Le) => (Number(J * 100 / Le) / 100).toFixed(1);
    function tt(J) {
        return J < Me ? `${J} B` : J < xe ? `${Ue(J, Me)} KB` : J < Ve ? `${Ue(J, xe)} MB` : `${Ue(J, Ve)} GB`
    }
    const Je = t(".stats-req")
      , ke = t(".stats-in")
      , Ne = t(".stats-out")
      , Ie = t(".proxy-tun-stats");
    this.updateStats = (J, Le, $e) => {
        Je.textContent = `${J}`,
        ke.textContent = tt(Le),
        Ne.textContent = tt($e)
    }
    ;
    const j = t(".proxy-status .proxy-flag")
      , Q = t(".proxy-status .proxy-ip")
      , b = t(".proxy-status .proxy-kind")
      , R = t(".proxy-status .proxy-status-desc")
      , Y = J => `${J >> 24 & 255}.${J >> 16 & 255}.${J >> 8 & 255}.${J & 255}`
      , fe = ["none", "none", "res", "dc", "tor", "tunnel", "custom", "custom", "custom", "mobile"]
      , le = ["Unknown", "Not using proxy", "Residential IP", "Datacenter IP", "Tor Exit Node", "Tunnel", "Custom SOCKS5", "Custom SOCKS4", "Custom HTTP", "Mobile IP"]
      , Se = ["World", "Asia", "Africa", "North America", "South America", "Antarctica", "Europe", "Oceania"];
    this.tunnelId = "";
    const De = KeyMap.countryCodes[0];
    this.setProxyState = (J, Le, $e, et, ht, E, k, _, r) => {
        this.proxyState = J,
        J === 5 ? this.tunnelId = k || "" : (J === 6 || J === 7 || J == 8) && (this.customAddress.value = k || "",
        this.customUsername.value = _ || "",
        this.customPassword.value = r || "",
        oe.value = J.toString(10));
        const h = KeyMap.countryCodes[Le] || De;
        j.textContent = h.flag,
        j.title = h.name,
        Q.textContent = Y($e);
        let S = ht;
        et && E ? S += ` (${E}, AS${et})` : E ? S += ` (${E})` : et && (S += ` (AS${et})`),
        R.textContent = S,
        R.title = S,
        b.textContent = le[J],
        J > 1 ? e.setAttribute("data-connected", J.toString()) : e.removeAttribute("data-connected"),
        this.setScreen(fe[J]),
        this.enableButtons(),
        this.handleState()
    }
    ,
    this.setProxyState(0, 0, 0, 0, "", "");
    const ze = J => J === 1 ? `${J} exit node` : J >= 1e3 ? `${(J / 1e3).toFixed(1)}K exit nodes` : `${J} exit nodes`;
    this.setProxyError = J => {
        this.handleError(J)
    }
    ;
    const at = e.querySelectorAll(".screen-mobile .pm-curr")
      , Fe = e.querySelectorAll(".screen-mobile .pm-max")
      , Ze = t(".screen-mobile .proxy-meter-used")
      , st = (J, Le) => {
        const $e = Math.min(100, J / Le * 100 | 0);
        Ze.style.width = `${$e}%`,
        Ze.setAttribute("data-pm", `${$e}`),
        at.forEach(et => et.textContent = `${J}`),
        Fe.forEach(et => et.textContent = `${Le}`)
    }
    ;
    st(1e3, 1e3),
    this.pmCurr = null,
    this.pmMax = null,
    this.setProxyMeter = (J, Le) => {
        !IS_PREMIUM && !J && !Le ? st(1e3, 1e3) : st(J, Le),
        this.pmCurr = J,
        this.pmMax = Le,
        this.handleMeter()
    }
    ,
    this.setProxyConfig = (J, Le, $e, et, ht) => {
        const E = J & 1
          , k = J & 2
          , _ = J & 4;
        de.innerHTML = "",
        ie.innerHTML = "",
        B.innerHTML = "",
        Z.innerHTML = "",
        m(V, E && Le.length),
        m(g, E && $e.length),
        m(H, E && ht.length),
        m(X, E && et.length),
        m(W, E && k),
        m(L, E && _);
        const r = [];
        for (let re = 0; re < Le.length; re++) {
            const ge = KeyMap.countryCodes[Le[re]] || De;
            let A = r[ge.cn];
            A || (A = document.createElement("optgroup"),
            A.label = Se[ge.cn],
            r[ge.cn] = A,
            de.appendChild(A));
            const Re = document.createElement("option");
            Re.value = `${Le[re]}`,
            Re.textContent = `${ge.flag} ${ge.name}`,
            A.appendChild(Re)
        }
        const h = [];
        for (let re = 0; re < ht.length; re++) {
            const ge = KeyMap.countryCodes[ht[re]] || De;
            let A = h[ge.cn];
            A || (A = document.createElement("optgroup"),
            A.label = Se[ge.cn],
            h[ge.cn] = A,
            Z.appendChild(A));
            const Re = document.createElement("option");
            Re.value = `${ht[re]}`,
            Re.textContent = `${ge.flag} ${ge.name}`,
            A.appendChild(Re)
        }
        const S = [];
        for (let re = 0; re < $e.length; re++) {
            const ge = KeyMap.countryCodes[$e[re]] || De;
            let A = S[ge.cn];
            A || (A = document.createElement("optgroup"),
            A.label = Se[ge.cn],
            S[ge.cn] = A,
            ie.appendChild(A));
            const Re = document.createElement("option");
            Re.value = `${$e[re]}`,
            Re.textContent = `${ge.flag} ${ge.name}`,
            A.appendChild(Re)
        }
        let K;
        {
            const re = document.createElement("optgroup");
            re.label = "World",
            K = document.createElement("option"),
            K.value = "1",
            re.appendChild(K),
            B.appendChild(re)
        }
        const ae = [];
        let pe = 0;
        for (let re = 0; re < et.length; re += 2) {
            const ge = KeyMap.countryCodes[et[re]] || De;
            let A = ae[ge.cn];
            A || (A = document.createElement("optgroup"),
            A.label = Se[ge.cn],
            ae[ge.cn] = A,
            B.appendChild(A));
            const Re = We(et[re + 1]);
            pe += Re;
            const me = document.createElement("option");
            me.value = `${et[re]}`,
            me.textContent = `${ge.flag} ${ge.name} (${ze(Re)})`,
            A.appendChild(me)
        }
        K.textContent = `\u{1F30E} Any country (${ze(pe)})`
    }
    ,
    this.setProxyConfig(0, [], [], [], [])
}
function FileTransferWindow(e) {
    const t = utilFindByQueryIn(e)
      , n = new UIBox(9)
      , s = new MovableElement(e,n)
      , o = t(".title");
    s.isResizable = () => !1,
    s.isDragSurface = j => j.some(Q => Q === o),
    this.onClose = () => this.setHidden(),
    t(".close").addEventListener("click", () => this.onClose()),
    this.setScreen = j => e.setAttribute("data-screen", j),
    this.setScreen("upload");
    let a = 1
      , i = new Map;
    class c {
        constructor(Q) {
            it(this, "id", 0);
            it(this, "begin", 0);
            it(this, "first", new Set);
            it(this, "count", 0);
            it(this, "from", "");
            it(this, "done", 0);
            this.from = Q,
            this.begin = Date.now(),
            this.id = a++,
            i.set(this.id, this)
        }
        decrease() {
            if (this.count > 0 && --this.count == 0 && (i.delete(this.id),
            this.first.size))
                if (gMainMenu.filesFlash(`Sent ${this.done} file${this.done == 1 ? "" : "s"}`, 1e3),
                this.from === "dirs") {
                    const Q = new Set;
                    for (const b of this.first) {
                        const R = b.path()
                          , Y = R.indexOf("/");
                        Y !== -1 && Q.add(R.slice(0, Y))
                    }
                    Q.size && H("", [...Q], () => {}
                    )
                } else
                    H("", [...this.first].map(Q => Q.name()), () => {}
                    )
        }
    }
    function u(j) {
        const Q = document.createElement("input");
        Q.type = "file",
        Q.multiple = !0,
        j && (Q.webkitdirectory = !0),
        Q.addEventListener("change", () => {
            if (Q.files) {
                const b = new c(j ? "dirs" : "files");
                for (const R of Q.files) {
                    const Y = new V(R,null,b);
                    W.push(Y),
                    b.first.add(Y)
                }
                Ie()
            }
        }
        ),
        "showPicker"in HTMLInputElement.prototype ? Q.showPicker() : Q.click()
    }
    t(".btn-add-files").addEventListener("click", () => {
        u(!1)
    }
    ),
    t(".btn-add-folders").addEventListener("click", () => {
        u(!0)
    }
    ),
    t(".btn-cancel-all").addEventListener("click", () => {
        L.length = 0,
        W.length = 0;
        for (const j of X)
            j.cancel();
        X.clear(),
        Ue()
    }
    ),
    t(".btn-close").addEventListener("click", () => {}
    ),
    this.onCurl = () => {}
    ,
    t(".howto-curl").addEventListener("click", () => {
        this.onCurl()
    }
    ),
    this.setDisabled = j => {
        j ? e.setAttribute("data-disabled", "true") : e.removeAttribute("data-disabled")
    }
    ,
    this.centerWindow = () => {
        s.centerX(),
        s.centerY()
    }
    ,
    this.bringToTop = () => s.bringToTop(),
    this.isVisible = () => e.hasAttribute("data-is-visible"),
    this.setVisible = () => {
        e.setAttribute("data-is-visible", "true"),
        n.setVisible(!0)
    }
    ,
    this.setHidden = () => {
        e.removeAttribute("data-is-visible"),
        n.setVisible(!1)
    }
    ,
    this.isSupported = !1;
    let y = null;
    const f = utilEncodeBase64Url(gPageRnd);
    let D = ""
      , x = 1;
    this.setEncoder = j => {
        if (e.removeAttribute("data-disabled"),
        e.removeAttribute("data-not-supported"),
        this.isSupported = !1,
        y = null,
        D = "",
        !j) {
            e.setAttribute("data-disabled", "true");
            return
        }
        const Q = new URL(j.url);
        Q.protocol = Q.protocol === "ws:" ? "http:" : "https:",
        Q.pathname = "/fm-upload",
        y = Q,
        D = `${j.token}.${f}`,
        this.isSupported = !!(j.getFlags() & 8),
        this.isSupported || e.setAttribute("data-not-supported", "true")
    }
    ;
    const v = (j, Q) => (Number(j * 100 / Q) / 100).toFixed(1);
    function d(j) {
        return j < 1024 ? `${Math.trunc(j)}B` : j < 1024 * 1024 ? `${v(j, 1024)}KB` : j < 1024 * 1024 * 1024 ? `${v(j, 1024 * 1024)}MB` : `${v(j, 1024 * 1024 * 1024)}GB`
    }
    function P(j) {
        const Q = Math.trunc(j / 36e5);
        j = j - 36e5 * Q;
        const b = Math.trunc(j / 6e4);
        j = j - 6e4 * b;
        const R = Math.trunc(j / 1e3);
        j = j - 1e3 * R;
        const Y = j;
        return Q > 0 ? `${Q}h${b}m` : b > 0 ? `${b}m${R}s` : R > 0 ? `${R}s` : `${Y}ms`
    }
    const N = 4
      , p = 0
      , O = 1
      , $ = 2
      , F = 3
      , C = 4
      , l = 5
      , m = 6
      , g = 7;
    class V {
        constructor(Q, b, R) {
            it(this, "id", 0);
            it(this, "begin", 0);
            it(this, "off", 0);
            it(this, "state", p);
            it(this, "error", null);
            it(this, "file");
            it(this, "entry");
            it(this, "req", null);
            it(this, "reader", null);
            it(this, "readerTotal", 0);
            it(this, "job");
            this.file = Q,
            this.entry = b,
            this.job = R,
            this.job.count++
        }
        path() {
            return this.entry ? this.entry.fullPath : this.file ? this.file.webkitRelativePath || this.file.name : ""
        }
        name() {
            return this.entry ? this.entry.name : this.file ? this.file.name : ""
        }
        cancel() {
            this.state = g,
            this.req && this.req.abort(),
            this.job.first.delete(this),
            this.job.decrease()
        }
    }
    const X = new Set
      , W = [];
    let L = [];
    function H(j, Q, b) {
        if (!y)
            return b(0, null),
            null;
        const R = new XMLHttpRequest;
        return R.onreadystatechange = () => {
            if (R.readyState === 4) {
                let Y = null;
                try {
                    Y = JSON.parse(R.responseText)
                } catch (fe) {}
                b(R.status, Y)
            }
        }
        ,
        R.open("POST", y),
        R.setRequestHeader("X-Fm-Args", urlEncode({
            path: j,
            show: JSON.stringify(Q)
        })),
        R.send(),
        R
    }
    function ne(j, Q) {
        if (!y)
            return Q(0, null),
            null;
        const b = new XMLHttpRequest;
        return b.onreadystatechange = () => {
            if (b.readyState === 4) {
                let R = null;
                try {
                    R = JSON.parse(b.responseText)
                } catch (Y) {}
                Q(b.status, R)
            }
        }
        ,
        b.open("POST", y),
        b.setRequestHeader("X-Fm-Args", urlEncode({
            tp: D,
            path: "",
            dir: 1,
            id: j.id,
            job: j.job.id,
            from: j.job.from,
            name: j.path()
        })),
        b.send(),
        b
    }
    function de(j, Q) {
        const b = j.file;
        if (!y || !b)
            return Q(0, 0, 0),
            null;
        let R = 0
          , Y = 0;
        function fe(Se) {
            Se.lengthComputable && (Se.loaded != R || Se.total != Y) && (R = Se.loaded,
            Y = Se.total,
            Q(R, Y))
        }
        const le = new XMLHttpRequest;
        return le.onreadystatechange = () => {
            if (le.readyState === 4) {
                let Se = null;
                try {
                    Se = JSON.parse(le.responseText)
                } catch (De) {}
                Q(R, Y, le.status, Se)
            }
        }
        ,
        le.upload.onprogress = fe,
        le.upload.onload = fe,
        le.upload.onloadstart = fe,
        le.upload.onloadend = fe,
        le.open("POST", y),
        le.setRequestHeader("X-Fm-Args", urlEncode({
            tp: D,
            path: "",
            id: j.id,
            job: j.job.id,
            from: j.job.from,
            name: j.path(),
            size: b.size,
            time: b.lastModified
        })),
        le.send(b),
        le
    }
    const ie = []
      , Z = []
      , B = []
      , oe = []
      , he = [];
    this.onFmError = (j, Q) => {
        for (let b = 0; b < N; b++) {
            const R = he[b];
            R && R.id === j && (R.state = m,
            R.error = new Error(tt(Q)),
            R.req && R.req.abort(),
            Ue())
        }
    }
    ;
    const He = new Map
      , We = t(".count-1")
      , Me = t(".count-2")
      , xe = t(".upload-list");
    xe.addEventListener("click", j => {
        const Q = j.target
          , b = Q ? He.get(Q) : void 0;
        if (!Q || b === void 0)
            return;
        const R = he[b];
        if (R)
            if (Q.classList.contains("entry-btn-retry")) {
                if (R.state !== m)
                    return;
                R.reader ? ke(R) : Ne(R)
            } else
                R.cancel(),
                X.delete(R),
                Ie()
    }
    );
    for (let j = 0; j < N; j++) {
        const Q = utilFromHtml('<div class="fm-entry"><div class="entry-name"></div><div class="entry-detail"><span class="entry-status"></span><span><span class="entry-btn entry-btn-retry">Retry</span><span class="entry-btn entry-btn-cancel">Cancel</span></span></div><div class="entry-progress"></div></div>');
        ie.push(Q),
        Z.push(Q.querySelector(".entry-name")),
        B.push(Q.querySelector(".entry-status")),
        oe.push(Q.querySelector(".entry-progress")),
        he.push(null),
        xe.appendChild(Q),
        He.set(Q.querySelector(".entry-btn-retry"), j),
        He.set(Q.querySelector(".entry-btn-cancel"), j)
    }
    let Ve = 0;
    function Ue() {
        const j = Date.now();
        let Q = 0;
        for (const Y of X) {
            if (Z[Q].textContent = Y.name(),
            Z[Q].title = Y.path(),
            he[Q] = Y,
            ie[Q].setAttribute("data-state", "running"),
            Y.state === O)
                B[Q].textContent = "Opening file";
            else if (Y.state === F)
                B[Q].textContent = "Reading folder";
            else if (Y.state === $) {
                const fe = Y.file ? Y.file.size : 0
                  , le = j - Y.begin
                  , Se = le ? Y.off * 1e3 / le : 0
                  , De = Y.off == fe ? 100 : Y.off / fe * 100;
                B[Q].textContent = `${De.toFixed(1)}%, ${d(Y.off)}/${d(fe)}, ${d(Se)}/s`,
                oe[Q].style.width = `${De.toFixed(1)}%`,
                oe[Q].setAttribute("data-p", `${De | 0}`)
            } else if (Y.state === m && Y.error) {
                const fe = Y.file ? Y.file.size : 0
                  , le = Y.off == fe ? 100 : Y.off / fe * 100;
                ie[Q].setAttribute("data-state", "error"),
                B[Q].textContent = `${Y.error.message}`,
                oe[Q].style.width = `${le.toFixed(1)}%`,
                oe[Q].setAttribute("data-p", `${le | 0}`)
            }
            Q++
        }
        for (; Q < N; )
            ie[Q].removeAttribute("data-state"),
            Z[Q].textContent = "",
            Z[Q].title = "",
            B[Q].textContent = "",
            oe[Q].style.width = "0%",
            oe[Q].setAttribute("data-p", "0"),
            he[Q] = null,
            Q++;
        const b = W.length
          , R = L.length;
        b && R ? We.textContent = `${b} file${b == 1 ? "" : "s"}, ${R} folder${R == 1 ? "" : "s"}` : R ? We.textContent = `${R} folder${R == 1 ? "" : "s"}` : b ? We.textContent = `${b} file${b == 1 ? "" : "s"}` : We.textContent = `${X.size} in progress`,
        e.setAttribute("data-has-uploads", X.size ? "true" : "false"),
        Me.textContent = ` \u2022 ${Ve} done`
    }
    Ue();
    function tt(j) {
        switch (j) {
        case 1:
            return "No connection";
        case 2:
            return "Download failed";
        case 3:
            return "Upload failed";
        case 4:
            return "Access denied";
        case 5:
            return "File not found";
        case 6:
            return "System error";
        case 7:
            return "File in use";
        default:
            return "Unknown error"
        }
    }
    function Je(j, Q) {
        return !j || !Q ? "Upload failed" : "code"in Q ? tt(Q.code) : j == 501 ? "Not supported" : "Unknown error"
    }
    function ke(j) {
        j.id = x++,
        j.begin = Date.now(),
        j.state = C,
        j.req = ne(j, (Q, b) => {
            if (j.state === C) {
                if (Q !== 200 || !b) {
                    j.state = m,
                    j.error = new Error(Je(Q, b)),
                    Ue();
                    return
                }
                j.state = l,
                j.job.decrease(),
                X.delete(j),
                Ie()
            }
        }
        )
    }
    function Ne(j) {
        j.id = x++,
        j.begin = Date.now(),
        j.state = $,
        j.req = de(j, (Q, b, R, Y) => {
            if (j.state === $) {
                if (j.off = Q,
                R === void 0) {
                    Ue();
                    return
                }
                if (R !== 200 || !Y) {
                    j.state = m,
                    j.error = new Error(Je(R, Y)),
                    Ue();
                    return
                }
                j.state = l,
                Ve++,
                j.job.done++,
                j.job.decrease(),
                X.delete(j),
                Ie()
            }
        }
        )
    }
    function Ie() {
        const j = X.size
          , Q = j >= N ? 0 : N - j
          , b = Math.min(W.length, Q)
          , R = Math.min(L.length, Q - b)
          , Y = W.splice(0, b)
          , fe = L.splice(0, R);
        for (const le of Y)
            X.add(le),
            le.entry && !le.file ? (le.begin = Date.now(),
            le.state = O,
            le.entry.file(Se => {
                le.file = Se,
                Ne(le)
            }
            , Se => {
                le.state = m,
                le.error = Se,
                Ue()
            }
            )) : le.file && Ne(le);
        for (const le of fe) {
            X.add(le);
            const Se = le.entry;
            le.reader || (le.reader = Se.createReader()),
            le.begin = Date.now(),
            le.state = F,
            le.reader.readEntries(De => {
                if (le.readerTotal += De.length,
                !De.length && !le.readerTotal) {
                    ke(le);
                    return
                }
                if (X.delete(le),
                !De.length)
                    le.state = l,
                    le.job.decrease();
                else {
                    le.state = p;
                    const ze = [];
                    for (const at of De) {
                        const Fe = new V(null,at,le.job);
                        at.isDirectory ? ze.push(Fe) : W.push(Fe)
                    }
                    ze.push(le),
                    L = ze.concat(L)
                }
                Ie()
            }
            , De => {
                le.state = m,
                le.error = De,
                Ue()
            }
            )
        }
        Ue()
    }
    this.handleDragEvent = (j, Q) => {
        const b = new c("dnd");
        for (const Y of Q) {
            const fe = new V(Y.file,Y.entry,b);
            Y.entry && Y.entry.isDirectory ? L.push(fe) : W.push(fe),
            b.first.add(fe)
        }
        Ie();
        const R = X.size + W.length + L.length;
        gMainMenu.filesFlash(`Sending ${R} file${R == 1 ? "" : "s"}`, 1e3)
    }
}
const XXHash32 = function() {
    const e = new TextEncoder
      , t = new Uint8Array(0)
      , n = 2654435761
      , s = 2246822519
      , o = 3266489917
      , a = 668265263
      , i = 374761393
      , c = x => typeof x == "string" ? e.encode(x) : x instanceof ArrayBuffer ? new Uint8Array(x) : x
      , u = (x, v) => {
        const d = x & 65535
          , P = v & 65535
          , N = x >> 16 & 65535
          , p = v >> 16 & 65535
          , O = d * P;
        return ((d * p + N * P & 65535) << 16) + O & 4294967295
    }
      , y = (x, v) => x << v | x >>> 32 - v
      , f = (x, v) => (x[v + 0] | x[v + 1] << 8 | x[v + 2] << 16 | x[v + 3] << 24) >>> 0;
    class D {
        constructor(v=0) {
            it(this, "seed");
            it(this, "size", 0);
            it(this, "total", 0);
            it(this, "memory", t);
            it(this, "acc1", 0);
            it(this, "acc2", 0);
            it(this, "acc3", 0);
            it(this, "acc4", 0);
            this.seed = v,
            this.init()
        }
        init() {
            return this.size = 0,
            this.total = 0,
            this.memory = t,
            this.acc1 = this.seed + n + s >>> 0,
            this.acc2 = this.seed + s >>> 0,
            this.acc3 = this.seed + 0 >>> 0,
            this.acc4 = this.seed - n >>> 0,
            this
        }
        round(v, d, P, N) {
            this.acc1 = this.acc1 + u(v, s) >>> 0,
            this.acc1 = y(this.acc1, 13) >>> 0,
            this.acc1 = u(this.acc1, n) >>> 0,
            this.acc2 = this.acc2 + u(d, s) >>> 0,
            this.acc2 = y(this.acc2, 13) >>> 0,
            this.acc2 = u(this.acc2, n) >>> 0,
            this.acc3 = this.acc3 + u(P, s) >>> 0,
            this.acc3 = y(this.acc3, 13) >>> 0,
            this.acc3 = u(this.acc3, n) >>> 0,
            this.acc4 = this.acc4 + u(N, s) >>> 0,
            this.acc4 = y(this.acc4, 13) >>> 0,
            this.acc4 = u(this.acc4, n) >>> 0
        }
        update(v) {
            const d = c(v);
            let P = 0;
            const N = d.length
              , p = P + N;
            if (N === 0)
                return this;
            if (this.total += N,
            this.size === 0 && (this.memory = new Uint8Array(16)),
            this.size + N < 16)
                return this.memory.set(d.subarray(0, N), this.size),
                this.size += N,
                this;
            if (this.size > 0) {
                this.memory.set(d.subarray(0, 16 - this.size), this.size);
                const O = f(this.memory, 0)
                  , $ = f(this.memory, 4)
                  , F = f(this.memory, 8)
                  , C = f(this.memory, 12);
                this.round(O, $, F, C),
                P += 16 - this.size,
                this.size = 0
            }
            if (P <= p - 16) {
                const O = p - 16;
                do {
                    const $ = f(d, P + 0)
                      , F = f(d, P + 4)
                      , C = f(d, P + 8)
                      , l = f(d, P + 12);
                    this.round($, F, C, l),
                    P += 16
                } while (P <= O)
            }
            return P < p && (this.memory.set(d.subarray(P, p), this.size),
            this.size = p - P),
            this
        }
        converge() {
            return this.total < 16 ? this.seed + i >>> 0 : y(this.acc1, 1) + y(this.acc2, 7) + y(this.acc3, 12) + y(this.acc4, 18) >>> 0
        }
        digest() {
            let v = this.converge() + this.total
              , d = 0;
            const P = this.size;
            for (; d <= P - 4; ) {
                const N = f(this.memory, d);
                v = v + u(N, o) >>> 0,
                v = y(v, 17) >>> 0,
                v = u(v, a) >>> 0,
                d += 4
            }
            for (; d < P; ) {
                const N = this.memory[d] & 255;
                v = v + u(N, i) >>> 0,
                v = u(y(v, 11), n) >>> 0,
                d += 1
            }
            return v = (v ^ v >>> 15) >>> 0,
            v = u(v, s) >>> 0,
            v = (v ^ v >>> 13) >>> 0,
            v = u(v, o) >>> 0,
            v = (v ^ v >>> 16) >>> 0,
            this.init(),
            v
        }
    }
    return D
}()
  , FREE_PLAN_TIMER = 90000 * 90000 * 9e9
  , FREE_PLAN_PLATFORM = Platform.WINDOWS_10
  , AFK_TIMEOUT = 1 * 60 * 1e3
  , QUEUE_URL = "https://queue2.browserling.com"
  , IS_PREMIUM = true//SESSION_PLAN !== "free"
  , IS_LOGGED_IN = true//SESSION_EMAIL !== null
  , INIT_PLATFORM = Platform.idToPlatform.get(SESSION_REQUEST[0])
  , INIT_BROWSER = Browser.idToBrowser.get(SESSION_REQUEST[1])
  , INIT_URL = SESSION_REQUEST[2] || ""
  , UPGRADE_URL = "https://www.browserling.com/#pricing"
  , FRONT_PAGE = "https://www.browserling.com"
  , TUNNEL_BACKEND = "https://tunnel.browserling.com"
  , ALLOW_TUNNEL_FOR_FREE = true;
let gBrowserScreen, gQueueUi, gMainMenu, gLoadingBar, gBottomInfoBar, gPremiumPopup, gTimesUp, gConnectErrorOverlay, gEncFirewallOverlay, gQueueFirewallOverlay, gIdleTimeoutOverlay, gOutdatedClientOverlay, gOutdatedServerOverlay, gVmUnavailableOverlay, gVmShutdownOverlay, gCantReconnectOverlay, gCustomEndMessageOverlay, gNewHostJoinedOverlay, gWebSocketErrorOverlay, gEncoder = null, gQueue = null, gWasConnectedOnce = !1, gScreenshotManager, gScreenshotEditor, gLocalTesting, gKeyboardWindow, gDisplaySettings, gUserList, gClipboardWindow, gCurrentMenuPlatform, gCurrentMenuBrowser, gUserSupportFlags = 0, gKbTextareaInput, gMobileKeyboardButton, gAudioPlayer, gVideoDecoder, gProxyWindow, gFilesWindow, gPageRnd = new Uint8Array(8), _connectNextId = 0, _isMacNavigatorPlatform = !1, _isMobileUserAgent = !1, _hasTouchEvents = !1;
const USER_SUPPORT_WEBP = 1
  , USER_SUPPORT_PNG = 2
  , USER_SUPPORT_TOUCH = 4
  , USER_SUPPORT_MOBILE_AGENT = 8
  , USER_SUPPORT_AUDIO = 16
  , USER_SUPPORT_AVC_HW = 32
  , USER_SUPPORT_AVC_SW = 64
  , USER_SUPPORT_HEVC_HW = 128
  , USER_SUPPORT_HEVC_SW = 256;
window.addEventListener("load", initializePage);
function initializePage() {
    //Logging.timeStart(new Date().getTime()),
    _hasTouchEvents = "ontouchstart"in window || navigator.maxTouchPoints > 0,
    _isMobileUserAgent = /Windows Phone|Android|iPad|iPhone|iPod/i.test(navigator.userAgent),
    _isMacNavigatorPlatform = navigator.platform.indexOf("Mac") === 0,
    _hasTouchEvents && (gUserSupportFlags |= USER_SUPPORT_TOUCH),
    _isMobileUserAgent && (gUserSupportFlags |= USER_SUPPORT_MOBILE_AGENT);
    {
        const e = document.createElement("iframe");
        e.src = "javascript:;",
        document.body.appendChild(e);
        const t = window
          , n = e.contentWindow;
        if (n) {
            const s = Object.getOwnPropertyDescriptors(t)
              , o = Object.getOwnPropertyDescriptors(n)
              , a = new Set(["location", "frameElement", "innerWidth", "innerHeight", "mozInnerScreenY"])
              , i = new XXHash32
              , c = y => {
                if (!y)
                    return 0;
                const f = y.toString();
                return f.indexOf("[native code]") !== -1 ? 1 : i.update(f).digest()
            }
              , u = [];
            for (const [y,f] of Object.entries(s)) {
                const D = o[y];
                if (D && !a.has(y))
                    try {
                        D.get && (!f.get || D.get.toString() !== f.get.toString()) ? u.push(y, c(f.get)) : n[y] && (!t[y] || n[y].toString() !== t[y].toString()) && u.push(y, c(t[y]))
                    } catch (x) {
                        continue
                    }
            }
            Queue.m = u
        }
        document.body.removeChild(e)
    }
    insertTemplatePlaceholders(),
    initAudioVideo(),
    initUiElements(),
    initBrowserScreen(),
    initAfkHandler(),
    initWindowSizePoller(),
    getCodecSupportFlags(e => {
        gUserSupportFlags |= e,
        Logging.browseRequest(INIT_PLATFORM, INIT_BROWSER, INIT_URL, "init"),
        sessionResumeOrStartQueue(INIT_PLATFORM, INIT_BROWSER, INIT_URL)
    }
    )
}
function getCanonicalUrl(e, t, n) {
    const s = `${e.name}${e.version}`
      , o = `${t.name}${t.version}`;
    return `browse/${s}/${o}` + (n ? `/${n}` : "")
}
function updatePageUrl(e, t, n) {
    const s = "/" + getCanonicalUrl(e, t, n);
    try {
        history.replaceState(null, "", s)
    } catch (o) {}
}
function fixCommonUrlMistakes(e) {
    try {
        e = e.replace(/\[:\]/g, ":").replace(/\[\.\]/g, ".").replace(/\[\/\]/g, "/").replace(/\[\/\/\]/g, "//").replace(/\[:\/\/\]/g, "://").replace(/^h(tt|xx)p:?\/\//i, "http://").replace(/^h(tt|xx)ps:?\/\//i, "https://").replace(/^https?:\/\/http:?\/\//i, "http://").replace(/^https?:\/\/https:?\/\//i, "https://"),
        /^https?%3A/i.test(e) && (e = decodeURIComponent(e))
    } catch (t) {}
    return e
}
function isOnionLikeUrl(e) {
    return /^(?:https?:\/\/)?[a-z0-9-.]+\.onion/i.test(e)
}
function isHtmlLikeUrl(e) {
    return /^<[a-z!?-]+/i.test(e)
}
function matchOnionLikeDomain(e) {
    const t = e.match(/^(?:https?:\/\/)?(?:[a-z0-9-]+\.)*([a-z0-9-]+)(?:(?:\.onion)|(?:\.tor2web)|(?:\.tor\.pm))/i);
    return t ? t[1] : null
}
function isOnionProxyUrl(e) {
    return /^(?:https?:\/\/)?[a-z0-9-.]+((\.onion\.(to|city|cab|direct|pet|guide|ws|top|casa|life|re|nz|link|ly|nu|gg|sh|moe|xyz|foundation))|(\.tor2web\.(org|io|fi))|(\.tor\.pm))/i.test(e)
}
function canOpenOnionUrls(e) {
    return e.name === "tor" || gProxyWindow.proxyState === 4
}
function showHintForNavigateUrl(e, t) {
    t = t.trim();
    let n = !1
      , s = !1
      , o = !1
      , a = !1
      , i = !1
      , c = !1
      , u = !1
      , y = !1
      , f = matchOnionLikeDomain(t);
    if (/^file:[/\\]?/i.test(t) || /^[a-z]:[/\\]?/i.test(t))
        n = !0;
    else if (isHtmlLikeUrl(t))
        s = !0;
    else if (/^(?:(?:https?|ftp):)?[/\\]*localhost/i.test(t))
        o = !0;
    else if (f && f.length === 16)
        a = !0;
    else if (f && /[^a-z2-7]/i.test(f))
        i = !0;
    else if (f && f.length !== 56)
        c = !0;
    else if (e.name === "tor" && isOnionProxyUrl(t))
        u = !0;
    else if (t.length > 3e4)
        y = !0;
    else {
        const x = t.match(/^(?:(?:https?|ftp):)?[/\\]*(\d+)\.(\d+)\.(\d+)\.(\d+)/i);
        if (x) {
            const v = parseInt(x[1])
              , d = parseInt(x[2])
              , P = parseInt(x[3])
              , N = parseInt(x[4])
              , p = (v << 24 | d << 16 | P << 8 | N) >>> 0;
            (!((p & 4278190080) >>> 0) || (p & 4278190080) >>> 0 === 167772160 || (p & 4290772992) >>> 0 === 1681915904 || (p & 4278190080) >>> 0 === 2130706432 || (p & 4294901760) >>> 0 === 2851995648 || (p & 4293918720) >>> 0 === 2886729728 || (p & 4294967040) >>> 0 === 3221225472 || (p & 4294967040) >>> 0 === 3221225984 || (p & 4294967040) >>> 0 === 3227017984 || (p & 4294901760) >>> 0 === 3232235520 || (p & 4294836224) >>> 0 === 3323068416 || (p & 4294967040) >>> 0 === 3325256704 || (p & 4294967040) >>> 0 === 3405803776 || (p & 4026531840) >>> 0 === 3758096384 || (p & 4294967040) >>> 0 === 3925606400 || (p & 4026531840) >>> 0 === 4026531840 || (p & 4294967295) >>> 0 === 4294967295) && (o = !0)
        }
    }
    const D = document.getElementById("group-popups");
    if (n)
        new HintFileUrlPopup(D).setVisible();
    else if (s)
        new HintHtmlUrlPopup(D).setVisible();
    else if (a)
        new HintOnionV2UrlPopup(D).setVisible();
    else if (i)
        new HintOnionBadCharsPopup(D).setVisible();
    else if (c)
        new HintOnionBadLengthPopup(D,f.length).setVisible();
    else if (u)
        new HintOnionProxyPopup(D).setVisible();
    else if (y)
        new HintTooLongUrlPopup(D).setVisible();
    else if (o) {
        const x = new HintLocalUrlPopup(D);
        x.onPrimary = () => {
            x.setHidden(),
            gLocalTesting.setHidden(),
            !ALLOW_TUNNEL_FOR_FREE && !IS_PREMIUM ? (gPremiumPopup.setItemText("SSH tunnels"),
            gPremiumPopup.setDismissText("Keep testing public sites"),
            gPremiumPopup.setVisible()) : (gLocalTesting.centerWindow(),
            gLocalTesting.setVisible(),
            gLocalTesting.bringToTop())
        }
        ,
        x.setVisible()
    }
}
let gWScreenX = window.screenX
  , gWScreenY = window.screenY
  , gWScreenWidth = window.screen.width
  , gWScreenHeight = window.screen.height
  , gWScreenAvailWidth = window.screen.availWidth
  , gWScreenAvailHeight = window.screen.availHeight
  , gWScreenAvailLeft = window.screen.availLeft
  , gWScreenAvailTop = window.screen.availTop
  , gWInnerWidth = window.innerWidth
  , gWInnerHeight = window.innerHeight
  , gWOuterWidth = window.outerWidth
  , gWOuterHeight = window.outerHeight
  , gWScreenIsExtended = window.screen.isExtended
  , gWScreenOrientationType = window.screen.orientation ? window.screen.orientation.type : void 0
  , gWDevicePixelRatio = window.devicePixelRatio;
function sendCurrentScreenInfo() {
    gEncoder && gEncoder.sendScreenInfo(gWScreenX, gWScreenY, gWScreenWidth, gWScreenHeight, gWScreenAvailWidth, gWScreenAvailHeight, gWScreenAvailLeft, gWScreenAvailTop, gWInnerWidth, gWInnerHeight, gWOuterWidth, gWOuterHeight, gWScreenIsExtended, gWScreenOrientationType, gWDevicePixelRatio)
}
function sendCurrentViewInfo() {
    gEncoder && gEncoder.sendViewInfo(gBrowserScreen.viewX, gBrowserScreen.viewY, gBrowserScreen.canvasWidth, gBrowserScreen.canvasHeight, gBrowserScreen.viewScale)
}
function initWindowSizePoller() {
    setInterval( () => {
        let e = window.screenX
          , t = window.screenY
          , n = window.screen.width
          , s = window.screen.height
          , o = window.screen.availWidth
          , a = window.screen.availHeight
          , i = window.screen.availLeft
          , c = window.screen.availTop
          , u = window.screen.isExtended
          , y = window.screen.orientation ? window.screen.orientation.type : void 0
          , f = window.devicePixelRatio
          , D = window.innerWidth
          , x = window.innerHeight
          , v = window.outerWidth
          , d = window.outerHeight;
        (gWScreenX != e || gWScreenY != t || gWScreenWidth != n || gWScreenHeight != s || gWScreenAvailWidth != o || gWScreenAvailHeight != a || gWScreenAvailLeft != i || gWScreenAvailTop != c || gWScreenIsExtended != u || gWScreenOrientationType != y || gWDevicePixelRatio != f || gWInnerWidth != D || gWInnerHeight != x || gWOuterWidth != v || gWOuterHeight != d) && (gWScreenX = e,
        gWScreenY = t,
        gWScreenWidth = n,
        gWScreenHeight = s,
        gWScreenAvailWidth = o,
        gWScreenAvailHeight = a,
        gWScreenAvailLeft = i,
        gWScreenAvailTop = c,
        gWScreenIsExtended = u,
        gWScreenOrientationType = y,
        gWDevicePixelRatio = f,
        gWInnerWidth = D,
        gWInnerHeight = x,
        gWOuterWidth = v,
        gWOuterHeight = d,
        sendCurrentScreenInfo())
    }
    , 500)
}
function showWelcomeScreen() {
    if (parseInt(SafeLocalStorage.getItem("wb_msg") || "0") < 9) {
        const n = document.getElementById("group-popups")
          , s = new WelcomePopup(n);
        s.handleClose = o => {
            o && SafeLocalStorage.setItem("wb_msg", "9")
        }
        ,
        s.setVisible()
    }
}
function checkInvalidRequest() {
    if (BROWSE_REQUEST_ERROR === "invalid_request") {
        const e = INIT_BROWSER.getDisplayName()
          , t = INIT_PLATFORM.getDisplayName()
          , n = document.getElementById("group-popups")
          , s = new MessagePopup("Invalid browse request",`You requested an invalid browser. Either the platform doesn't exist or the browser doesn't exist (or both). We defaulted to ${e} on ${t} instead as this combination works. Once you dismiss this dialog, you can use the menu on the left to switch to another browser.`,"Close");
        n.appendChild(s.popupElement),
        s.showPopup()
    }
}
function checkPremiumBrowser() {
    if (BROWSE_REQUEST_ERROR === "premium_browser" && !IS_PREMIUM) {
        const e = INIT_BROWSER.getDisplayName()
          , t = INIT_PLATFORM.getDisplayName()
          , n = document.getElementById("group-popups")
          , s = new MessagePopup("Premium browser",`You're on a free plan but requested a premium browser. We served you ${e} on ${t} instead as it's available to all free users. If you have the developer plan, please <a href="/">login</a> to use the browser you wanted.`,"Close");
        n.appendChild(s.popupElement),
        s.showPopup()
    }
}
(function() {
    const e = new Date().getTime();
    crypto.getRandomValues(gPageRnd);
    const t = parseInt(SafeLocalStorage.getItem("count") || "0");
    Logging.diagnosticData("c", t),
    SafeLocalStorage.setItem("count", (t + 1).toString());
    const n = parseInt(SafeLocalStorage.getItem("sc") || "0");
    let s = parseInt(SafeLocalStorage.getItem("sm") || "0");
    const o = parseInt(SafeLocalStorage.getItem("smt") || "0");
    (!o || e - o >= 1e3 * 60 * 60 * 24 * 30) && (s = 0);
    let a = parseInt(SafeLocalStorage.getItem("ft") || "0");
    a || (a = e,
    SafeLocalStorage.setItem("ft", a.toString()));
    let i = SafeLocalStorage.getItem("rid");
    if (!i) {
        const c = new Uint8Array(16);
        crypto.getRandomValues(c),
        i = utilEncodeBase64Url(c),
        SafeLocalStorage.setItem("rid", i)
    }
    Queue.rid = i,
    Queue.ft = a,
    Queue.c = t,
    Queue.sc = n,
    Queue.sm = s,
    Logging.diagnosticData("r", i)
}
)();
async function copyToClipboardFromInput(e) {
    if (!(e instanceof HTMLInputElement))
        throw new Error("Can only copy from <input> or <textarea>");
    return e.focus(),
    e.select(),
    navigator.clipboard && navigator.clipboard.writeText && await navigator.clipboard.writeText(e.value).then( () => !0, () => !1) ? !0 : document.execCommand("copy")
}
function urlEncode(e) {
    return Object.entries(e).map(t => t.map(encodeURIComponent).join("=")).join("&")
}
async function sleepFor(e) {
    return new Promise(t => setTimeout( () => t(), e))
}
function getCodecSupportFlags(e) {
    let t = 0
      , n = 6;
    function s(u) {
        t |= u,
        --n || e(t)
    }
    function o(u, y) {
        const f = new Image;
        f.onload = () => s(f.width > 0 && f.height > 0 ? u : 0),
        f.onerror = () => s(0),
        f.src = y
    }
    function a(u, y, f, D) {
        if (typeof VideoDecoder == "undefined")
            return s(0);
        VideoDecoder.isConfigSupported({
            codec: y,
            description: new Uint8Array(f),
            hardwareAcceleration: D ? "prefer-hardware" : "prefer-software",
            optimizeForLatency: !0
        }).then(x => s(x.supported ? u : 0), () => s(0))
    }
    const i = [1, 66, 0, 32, 255, 225, 0, 19, 39, 66, 0, 32, 137, 138, 48, 10, 0, 183, 77, 64, 128, 128, 129, 225, 0, 132, 208, 1, 0, 4, 40, 206, 60, 128]
      , c = [1, 1, 96, 0, 0, 0, 176, 0, 0, 0, 0, 0, 120, 240, 0, 252, 253, 248, 248, 0, 0, 11, 3, 160, 0, 1, 0, 24, 64, 1, 12, 1, 255, 255, 1, 96, 0, 0, 3, 0, 176, 0, 0, 3, 0, 0, 3, 0, 120, 12, 192, 144, 161, 0, 1, 0, 65, 66, 1, 1, 1, 96, 0, 0, 3, 0, 176, 0, 0, 3, 0, 0, 3, 0, 120, 160, 2, 128, 128, 45, 22, 32, 51, 185, 20, 134, 46, 126, 19, 208, 190, 161, 189, 80, 254, 170, 8, 245, 84, 19, 234, 170, 10, 245, 85, 65, 126, 170, 170, 12, 245, 85, 84, 166, 160, 64, 64, 64, 127, 8, 4, 16, 162, 0, 1, 0, 7, 68, 1, 192, 114, 240, 91, 36];
    a(USER_SUPPORT_AVC_HW, "avc1.420020", i, !0),
    a(USER_SUPPORT_AVC_SW, "avc1.420020", i, !1),
    a(USER_SUPPORT_HEVC_HW, "hvc1.1.6.L120.B0", c, !0),
    a(USER_SUPPORT_HEVC_SW, "hvc1.1.6.L120.B0", c, !1),
    o(USER_SUPPORT_PNG, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC"),
    o(USER_SUPPORT_WEBP, "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA")
}
async function apiRequestFetch(e, t={}, n="POST") {
    const s = {
        method: n,
        headers: {},
        mode: "cors",
        cache: "no-cache",
        credentials: "include"
    };
    n !== "GET" && n !== "HEAD" && (t instanceof FormData ? s.body = t : (s.body = urlEncode(t),
    s.headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": s.body.length.toString()
    }));
    let o = 0;
    for (; ; ) {
        const [a,i] = await fetch(e, s).then(c => [c, null]).catch(c => [null, c]);
        if (a)
            return {
                text: await a.text()
            };
        if (++o >= 3)
            return {
                error: i
            };
        await sleepFor(500)
    }
}
async function apiRequest(e, t, n) {
    const s = await apiRequestFetch(e, t, n);
    return "error"in s ? `Error: ${s.error.message}` : s.text
}
async function apiRequestJson(e, t, n) {
    const s = await apiRequestFetch(e, t, n);
    if ("error"in s)
        return {
            error: s.error.toString()
        };
    try {
        return JSON.parse(s.text)
    } catch (o) {
        return {
            error: "Unexpected server response"
        }
    }
}
async function apiRequestTunnel(e, t) {
    return apiRequestJson(TUNNEL_BACKEND + e + "?" + urlEncode(t), {}, "GET")
}
const SHORT_URL_CACHE = new Map;
async function getShortUrl(e, t, n) {
    const s = "https://browserling.com/" + getCanonicalUrl(e, t, n);
    if (SHORT_URL_CACHE.has(s))
        return SHORT_URL_CACHE.get(s);
    const o = await apiRequest("/api/short-url", {
        url: s
    });
    if (o.toLowerCase().indexOf("error") === 0)
        return Logging.userError("browse_short_url", {
            result: o
        }),
        null;
    const [,a] = o.split(" ");
    return SHORT_URL_CACHE.set(s, a),
    a
}
function upgradeToPremium(e) {
    window.location.href = UPGRADE_URL
}
function initAudioVideo() {
    gAudioPlayer = new BAudioPlayer(48e3),
    gAudioPlayer.ok && (gUserSupportFlags |= USER_SUPPORT_AUDIO),
    gVideoDecoder = new BVideoDecoder
}
function initAfkHandler() {
    let e = !1, t;
    function n() {
        e && (e = !1,
        gEncoder && gEncoder.setAfk && gEncoder.setAfk(!1)),
        clearTimeout(t),
        t = setTimeout( () => {
            e = !0,
            gEncoder && gEncoder.setAfk && gEncoder.setAfk(!0)
        }
        , AFK_TIMEOUT)
    }
    document.addEventListener("mousemove", n, {
        passive: !0
    }),
    document.addEventListener("touchmove", n, {
        passive: !0
    }),
    document.addEventListener("keydown", n, {
        passive: !0
    }),
    window.addEventListener("focus", n, {
        passive: !0
    })
}
function initUserSettings() {}
function initScreenshotEditor() {
    const e = document.getElementById("group-popups")
      , t = document.querySelector("#group-ui .screenshot-editor");
    gScreenshotEditor = new ScreenshotEditor(t);
    const n = (f, D) => {
        const x = new MessagePopup(f,D);
        e.appendChild(x.popupElement),
        x.showPopup()
    }
      , s = async () => {
        try {
            const {state: f} = await navigator.permissions.query({
                name: "clipboard-write"
            });
            return f === "granted"
        } catch (f) {
            return !1
        }
    }
      , o = async f => new Promise(D => f.toBlob(x => D(x), "image/png", 1))
      , a = async f => new Promise(D => {
        const x = new FileReader;
        x.onload = () => D(x.result),
        x.readAsDataURL(f)
    }
    );
    let i = !1;
    gScreenshotEditor.onCopyToClipboard = async () => {
        if (i)
            return;
        if (i = !0,
        Logging.uiEvent("browse.screenshot.clipboard"),
        !await s()) {
            n("No clipboard permission", "We can't copy this screenshot to clipboard without the browser's permission."),
            i = !1;
            return
        }
        const D = await o(gScreenshotEditor.getEditedImage("white"));
        if (!D) {
            n("Can't save image", "Canvas image cannot be converted into a blob"),
            i = !1;
            return
        }
        const x = () => {
            gScreenshotEditor.showCopied(),
            setTimeout( () => {
                gScreenshotEditor.hideCopied(),
                i = !1
            }
            , 1500)
        }
          , v = d => {
            n("Can't write to clipboard", `An error occurred while trying to write to clipboard: ${d.message}`),
            i = !1
        }
        ;
        try {
            const d = [new ClipboardItem({
                [D.type]: D
            })];
            navigator.clipboard.write(d).then(x, v)
        } catch (d) {
            v(d)
        }
    }
    ;
    let c = !1;
    gScreenshotEditor.onDownloadToDevice = async () => {
        if (c)
            return;
        c = !0,
        Logging.uiEvent("browse.screenshot.download");
        const f = await o(gScreenshotEditor.getEditedImage("white"));
        if (!f) {
            n("Can't save image", "Canvas image cannot be converted into a blob"),
            gScreenshotEditor.hideDownloaded(),
            c = !1;
            return
        }
        saveAs(f, "browserling-screenshot.png"),
        gScreenshotEditor.showDownloaded(),
        setTimeout( () => {
            gScreenshotEditor.hideDownloaded(),
            c = !1
        }
        , 1500)
    }
    ;
    let u = !1;
    gScreenshotEditor.onSaveToAccount = async () => {
        if (!IS_LOGGED_IN) {
            n("Not logged in", "You need to be logged in to save screenshots to your account.");
            return
        }
        if (!IS_PREMIUM) {
            gPremiumPopup.setItemText("Saving screenshots"),
            gPremiumPopup.setDismissText("Keep using free version"),
            gPremiumPopup.setVisible();
            return
        }
        if (u)
            return;
        u = !0,
        Logging.uiEvent("browse.screenshot.save");
        const f = await o(gScreenshotEditor.getEditedImage("transparent"));
        if (!f) {
            n("Can't save image", "Canvas image cannot be converted into a blob"),
            u = !1;
            return
        }
        const D = await a(f)
          , x = new ScreenshotSaveToAccountPopup(f)
          , v = async () => {
            const d = await apiRequest("/api/account/screenshots/save", {
                image: D,
                title: x.getTitle(),
                desc: x.getDescription()
            });
            d === "ok" ? n("Screenshot saved", "Your screenshot has been saved to your account.") : (n("Couldn't save screenshot", "An unknown error has occurred."),
            Logging.userError("browse_save_screenshot", {
                result: d
            })),
            x.dismissPopup(),
            u = !1
        }
        ;
        x.onUploadConfirm = () => {
            x.setUploading(),
            v()
        }
        ,
        x.onDismiss = () => {
            setTimeout( () => e.removeChild(x.popupElement), 200),
            u = !1
        }
        ,
        e.appendChild(x.popupElement),
        x.showPopup()
    }
    ;
    let y = !1;
    gScreenshotEditor.onUploadToImgur = async () => {
        if (y)
            return;
        y = !0,
        Logging.uiEvent("browse.screenshot.imgur");
        const f = gScreenshotEditor.getScreenshotURL()
          , D = gScreenshotEditor.getScreenshotBrowser()
          , x = gScreenshotEditor.getScreenshotPlatform()
          , v = await o(gScreenshotEditor.getEditedImage("transparent"));
        if (!v) {
            n("Can't save image", "Canvas image cannot be converted into a blob"),
            y = !1;
            return
        }
        const d = await a(v)
          , P = new ScreenshotUploadToImgurPopup(v)
          , N = async () => {
            const p = await apiRequest("/api/bug-hunter/imgur", {
                image: d,
                message: P.getDescription(),
                platform_name: x.name,
                platform_version: x.version,
                browser: D.name,
                version: D.version,
                url: f
            });
            if (p.indexOf("ok") === 0) {
                const [,O,$] = p.split(" ");
                n("Screenshot uploaded", `Your screenshot has been uploaded to Imgur.<ul><li>Image URL: <a href="${O}" target="_blank">${O}</a></li><li>Delete hash: <a href="https://imgur.com/delete/${$}" target="_blank">${$}</a></li></ul>`)
            } else
                n("Couldn't upload screenshot", "An unknown error has occurred."),
                Logging.userError("browse_imgur_screenshot", {
                    result: p
                });
            P.dismissPopup(),
            y = !1
        }
        ;
        P.onUploadConfirm = () => {
            P.setUploading(),
            N()
        }
        ,
        P.onDismiss = () => {
            setTimeout( () => e.removeChild(P.popupElement), 200),
            y = !1
        }
        ,
        e.appendChild(P.popupElement),
        P.showPopup()
    }
}
function initFileTransfers() {
    const e = document.getElementById("group-popups")
      , t = document.querySelector("#group-ui .file-manager");
    gFilesWindow = new FileTransferWindow(t),
    gFilesWindow.onCurl = () => {
        if (!gEncoder)
            return;
        const a = new URL(gEncoder.url)
          , i = gEncoder.serverId
          , c = a.searchParams.get("sock")
          , u = a.protocol === "ws:" ? "http:" : "https:"
          , y = a.host.split(".");
        /^encoder-\d+-\d+-\d+-\d+$/.test(y[0]) && i && (y[0] = `s${i}`);
        const f = y.join(".")
          , D = new UploadCurlPopup(e);
        D.inputCmd.value = `curl ${u}//${f}/${c}/ -T file.txt`,
        D.handleCopyToClipboard = () => copyToClipboardFromInput(D.inputCmd),
        D.setVisible()
    }
    ;
    let n = parseInt(SafeLocalStorage.getItem("fm_ul_dnd") || "0");
    function s(a) {
        for (const {kind: i} of a.items)
            if (i === "file")
                return !0;
        for (const i of a.types)
            if (i === "File")
                return !0;
        return !1
    }
    document.body.addEventListener("dragover", a => {
        const i = a.dataTransfer;
        i && s(i) && (a.preventDefault(),
        a.dataTransfer.dropEffect = "copy")
    }
    );
    function o() {
        gFilesWindow.isVisible() || (gFilesWindow.centerWindow(),
        gFilesWindow.setVisible()),
        gFilesWindow.bringToTop()
    }
    document.body.addEventListener("drop", a => {
        const i = a.dataTransfer;
        if (i) {
            const c = [];
            for (const u of i.items)
                if (u.kind === "file") {
                    const y = u.getAsFile()
                      , f = "webkitGetAsEntry"in u ? u.webkitGetAsEntry() : null;
                    y && (f || y.size) && c.push({
                        file: y,
                        entry: f
                    })
                }
            if (c.length) {
                if (a.preventDefault(),
                !gEncoder)
                    return;
                if (!gFilesWindow.isSupported) {
                    o();
                    return
                }
                if (Logging.uiEvent("browse.file-transfers.drag-and-drop"),
                n)
                    gFilesWindow.handleDragEvent(a, c),
                    o();
                else {
                    const u = new UploadConfirmPopup(e);
                    u.handleClose = () => {
                        u.allowUpload && (u.dontAsk.checked && (n = 1,
                        SafeLocalStorage.setItem("fm_ul_dnd", n + "")),
                        gFilesWindow.handleDragEvent(a, c),
                        o())
                    }
                    ,
                    u.setVisible()
                }
            }
        }
    }
    )
}
function initProxySettings() {
    const e = document.getElementById("group-popups")
      , t = (v, d) => {
        const P = new MessagePopup(v,d);
        e.appendChild(P.popupElement),
        P.showPopup()
    }
      , n = (v, d="Cancel") => {
        gPremiumPopup.setItemText(v),
        gPremiumPopup.setDismissText(d),
        gPremiumPopup.setVisible()
    }
      , s = document.querySelector("#group-ui .proxy-settings");
    gProxyWindow = new ProxySettingsWindow(s);
    let o = null, a = "", i = !1, c = 1e3, u;
    const y = () => {
        o = null,
        a = "",
        i = !1,
        clearTimeout(u)
    }
      , f = async () => {
        if (!o)
            return;
        const v = new Date().getTime()
          , d = await apiRequestTunnel("/api/status", {
            session: SESSION_PAYLOAD,
            id: o
        });
        if (!o)
            return;
        if (d.error || !d.status || d.status === "unknown")
            gProxyWindow.setTunnelStatus("error", "#icon-warning", "Tunnel error");
        else if (d.status === "wait_ssh")
            gProxyWindow.setTunnelStatus("wait", "#icon-terminal", "Waiting for SSH...");
        else if (d.status === "wait_http")
            gProxyWindow.setTunnelStatus("wait", "#icon-terminal", "Testing connection...");
        else if (d.status === "ready")
            !i && gEncoder && (i = !0,
            c = 3e3,
            gEncoder.setProxy(5, o)),
            gProxyWindow.proxyState !== 5 ? gProxyWindow.setTunnelStatus("wait", "#icon-check-circle", "Connecting...") : gProxyWindow.setTunnelStatus("ready", "#icon-check-circle", "Ready"),
            gProxyWindow.updateStats(d.reqs, d.in, d.out);
        else if (d.status === "disconnected")
            gProxyWindow.setTunnelStatus("warning", "#icon-warning", "Disconnected");
        else if (d.status === "not_found") {
            y(),
            gProxyWindow.setScreen("none");
            return
        }
        const N = new Date().getTime() - v;
        N < c ? u = setTimeout(f, c - N) : u = setTimeout(f, 1)
    }
    ;
    gProxyWindow.handleCopyToClipboard = async v => copyToClipboardFromInput(v),
    gProxyWindow.handleCancel = async v => {
        if (v === "tunnel") {
            if (o) {
                gProxyWindow.disableButtons("", "Closing...");
                const d = await apiRequestTunnel("/api/close", {
                    session: SESSION_PAYLOAD,
                    id: o
                });
                d.error && Logging.userError("browse_proxy_tunnel_close", {
                    result: d
                }),
                y(),
                gEncoder && gEncoder.setProxy(1, 0)
            }
        } else {
            if (gProxyWindow.proxyState <= 1 || !gEncoder) {
                gProxyWindow.setScreen("none");
                return
            }
            gProxyWindow.disableButtons("Disconnecting...", ""),
            gEncoder.setProxy(1, 0)
        }
    }
    ;
    const D = v => {
        try {
            return new URL(v)
        } catch (d) {}
    }
    ;
    gProxyWindow.handleMeter = () => {
        gProxyWindow.pmCurr === 0 && gProxyWindow.proxyState === 9 && t("Out of mobile data", "Your mobile data package has ran out and proxy has been turned off.")
    }
    ,
    gProxyWindow.handleError = v => {
        if (v >= 100)
            t("Couldn't set proxy", ["Browser is not reachable.", "Connecting to proxy failed, please try again.", "Tor network may be down, please try again later.", "You have no more mobile data remaining.", "This location is not available, please try again later.", "Proxy location is invalid.", "This proxy type is not available."][v - 100] || "Unknown error occurred, try again later.");
        else if (v >= 1) {
            const P = ["Address is invalid.", "Connection timed out.", "Connection was closed.", "Proxy server sent unexpected data.", "Proxy server declined authentication attempt.", gProxyWindow.customUsername.value || gProxyWindow.customPassword.value ? "Username or password is invalid." : "Username and password is required.", "Proxy request was rejected by server.", "Proxy connection has failed.", "This proxy address is local to your computer and cannot be used."];
            t("Couldn't set custom proxy", P[v - 1] || "Unknown error occurred, try again later.")
        }
        gProxyWindow.enableButtons()
    }
    ;
    const x = v => {
        const d = v.match(/:(\d+)$/);
        return d ? parseInt(d[1]) : null
    }
    ;
    gProxyWindow.handleConnect = async (v, d) => {
        if (!IS_PREMIUM) {
            n(["Proxy", "Proxy", "Residential Proxy", "Datacenter Proxy", "Tor Proxy", "Local Proxy", "Custom Proxy", "Custom Proxy", "Custom Proxy", "Mobile Proxy"][v]);
            return
        }
        if (!gEncoder)
            return;
        const P = gProxyWindow.proxyState > 1;
        if (v === 9 && gProxyWindow.pmCurr === 0) {
            t("No mobile data", `You will be able to use another ${gProxyWindow.pmMax} MB next month.`);
            return
        }
        if (v === 6 || v == 7 || v == 8) {
            let N = gProxyWindow.customAddress.value.trim();
            const p = gProxyWindow.customUsername.value.trim()
              , O = gProxyWindow.customPassword.value.trim()
              , $ = D(N);
            if ($ && ($.protocol.startsWith("http") || $.protocol.startsWith("socks")) && (!p && $.username && (gProxyWindow.customUsername.value = $.username),
            !O && $.password && v !== 7 && (gProxyWindow.customPassword.value = $.password),
            N = $.host,
            gProxyWindow.customAddress.value = N),
            !N) {
                gProxyWindow.customAddress.focus();
                return
            }
            const F = x(N);
            if (F === null)
                return t("Invalid proxy port", "The proxy address you provided is missing a port.");
            if (F < 0 || F > 65535)
                return t("Invalid proxy port", "The port should be a number between 0 and 65535.");
            gProxyWindow.disableButtons("", P ? "Reconnecting..." : "Connecting..."),
            gEncoder.setProxy(v, N, p, O)
        } else
            gProxyWindow.disableButtons("", P ? "Reconnecting..." : "Connecting..."),
            gEncoder.setProxy(v, d)
    }
    ,
    gProxyWindow.handleState = () => {
        gProxyWindow.proxyState === 5 ? gProxyWindow.tunnelId === o ? gProxyWindow.setTunnelStatus("ready", "#icon-check-circle", "Ready") : (o = gProxyWindow.tunnelId,
        a = "tunnel.browserling.com",
        gProxyWindow.setTunnelStatus("wait", "#icon-terminal", "Waiting for SSH..."),
        gProxyWindow.setCommand(`ssh -R 2 ${o}@${a}`),
        clearTimeout(u),
        f()) : o && (apiRequestTunnel("/api/close", {
            session: SESSION_PAYLOAD,
            id: o
        }),
        y())
    }
    ,
    gProxyWindow.handleScreen = async v => {
        if (v === "dc")
            Logging.uiEvent("browse.proxy.dc"),
            gProxyWindow.setScreen("dc");
        else if (v === "res")
            Logging.uiEvent("browse.proxy.res"),
            gProxyWindow.setScreen("res");
        else if (v === "tor")
            Logging.uiEvent("browse.proxy.tor"),
            gProxyWindow.setScreen("tor");
        else if (v === "tunnel") {
            if (Logging.uiEvent("browse.proxy.tunnel"),
            !IS_PREMIUM) {
                n("Local Proxy");
                return
            }
            gProxyWindow.setDisabled(!0);
            const d = await apiRequestTunnel("/api/open", {
                session: SESSION_PAYLOAD
            });
            if (gProxyWindow.setDisabled(!1),
            d.error) {
                Logging.userError("browse_proxy_tunnel_open", {
                    result: d
                }),
                t("Couldn't open tunnel", d.error);
                return
            }
            o = d.id,
            a = d.domain,
            gProxyWindow.setTunnelStatus("wait", "#icon-terminal", "Waiting for SSH..."),
            gProxyWindow.setCommand(`ssh -R 2 ${o}@${a}`),
            gProxyWindow.setScreen("tunnel"),
            clearTimeout(u),
            f()
        } else
            v === "custom" ? (Logging.uiEvent("browse.proxy.custom"),
            gProxyWindow.setScreen("custom")) : v === "mobile" && (Logging.uiEvent("browse.proxy.mobile"),
            gProxyWindow.setScreen("mobile"))
    }
}
function initLocalTesting() {
    const e = document.getElementById("group-popups")
      , t = document.querySelector("#group-ui .tunnels-setup");
    gLocalTesting = new LocalTestingWindow(t);
    const n = (l, m) => {
        const g = new MessagePopup(l,m);
        e.appendChild(g.popupElement),
        g.showPopup()
    }
      , s = (l, m, g="OK", V="") => new Promise(X => {
        const W = new MessagePopup(l,m,g,V)
          , L = H => {
            X(H),
            W.dismissPopup()
        }
        ;
        e.appendChild(W.popupElement),
        W.onPrimary = () => L(!0),
        W.onSecondary = () => L(!1),
        W.onEscPressed = () => L(!1),
        W.showPopup()
    }
    )
      , o = SafeLocalStorage.getItem("lt_host");
    o !== null && gLocalTesting.setAddress(o);
    const a = l => {
        /^https?:/i.test(l) || (l = `http://${l}`);
        let m;
        try {
            m = new URL(l)
        } catch (V) {
            return null
        }
        const g = m.host;
        return g.indexOf(":") !== -1 ? g : m.protocol === "https:" ? `${g}:443` : `${g}:80`
    }
    ;
    let i = null, c = "", u = "", y = !1, f = 1e3, D;
    const x = () => `https://${i}.${c}`;
    gLocalTesting.handleOpenInBrowser = () => {
        if (gEncoder && i) {
            const l = gEncoder.getLastNavigateBrowser();
            l && gEncoder.navigateTo(l, x())
        }
    }
    ;
    const v = () => {
        i = null,
        c = "",
        u = "",
        y = !1,
        clearTimeout(D),
        gLocalTesting.setScreen("open-tunnel")
    }
      , d = 1
      , P = 2
      , N = 3
      , p = 4
      , O = 5;
    let $ = d;
    const F = l => {
        $ !== l && ($ = l,
        $ === d ? (gLocalTesting.setPingIcon("#icon-terminal"),
        gLocalTesting.setPingState("idle"),
        gLocalTesting.setPingStatus("Waiting for SSH..."),
        gLocalTesting.setPingDetail("Your local server will be accessible after you run the SSH command.")) : $ === P ? (gLocalTesting.setPingIcon("#icon-terminal"),
        gLocalTesting.setPingState("idle"),
        gLocalTesting.setPingStatus("Waiting for server..."),
        gLocalTesting.setPingDetail("We're testing the connection to your server through the tunnel.")) : $ === N ? (gLocalTesting.setPingIcon("#icon-check-circle"),
        gLocalTesting.setPingState("success"),
        gLocalTesting.setPingStatus("Connected!"),
        gLocalTesting.setPingDetail(`Your local server is available at <a href="${x()}" class="opens-link">${x()}</a>`)) : $ === p ? (gLocalTesting.setPingIcon("#icon-warning"),
        gLocalTesting.setPingState("warning"),
        gLocalTesting.setPingStatus("SSH client disconnected"),
        gLocalTesting.setPingDetail("Please check the output of your terminal for any errors and run the SSH command again.")) : $ === O && (gLocalTesting.setPingIcon("#icon-warning"),
        gLocalTesting.setPingState("warning"),
        gLocalTesting.setPingStatus("Connection error"),
        gLocalTesting.setPingDetail("Couldn't get the status of your tunnel, please make sure you ran the SSH command above.")))
    }
      , C = async () => {
        if (!i)
            return;
        const l = new Date().getTime()
          , m = await apiRequestTunnel("/api/status", {
            session: SESSION_PAYLOAD,
            id: i
        });
        if (!i)
            return;
        if (m.error || !m.status || m.status === "unknown")
            F(O);
        else if (m.status === "wait_ssh")
            F(d);
        else if (m.status === "wait_http")
            F(P);
        else if (m.status === "ready")
            y || (y = !0,
            gLocalTesting.handleOpenInBrowser(),
            f = 3e3,
            SafeLocalStorage.setItem("lt_host", u)),
            F(N),
            gLocalTesting.updateStats(m.reqs, m.in, m.out);
        else if (m.status === "disconnected")
            F(p);
        else if (m.status === "not_found") {
            v();
            return
        }
        const V = new Date().getTime() - l;
        V < f ? D = setTimeout(C, f - V) : D = setTimeout(C, 1)
    }
    ;
    gLocalTesting.handleOpenTunnel = async l => {
        if (!l) {
            n("Couldn't open tunnel", "You need to enter the URL that you want to tunnel.");
            return
        }
        const m = a(l);
        if (!m) {
            n("Couldn't open tunnel", "You've entered an invalid URL.");
            return
        }
        const g = await apiRequestTunnel("/api/open", {
            session: SESSION_PAYLOAD,
            host: m
        });
        if (g.error) {
            Logging.userError("browse_tunnel_open", {
                result: g
            }),
            n("Couldn't open SSH tunnel", g.error);
            return
        }
        i = g.id,
        c = g.domain,
        u = m,
        gLocalTesting.setCommandType("ssh"),
        F(d),
        gLocalTesting.setScreen("run-command"),
        f = 1e3,
        C()
    }
    ,
    gLocalTesting.handleCommandType = l => {
        if (!i)
            return "";
        l === "ssh" ? gLocalTesting.setCommand(`ssh -R 2 ${i}@${c}`) : l === "putty" ? gLocalTesting.setCommand(`putty -ssh -R 1:${u} ${i}@${c}`) : l === "oldssh" && gLocalTesting.setCommand(`ssh -R 1:${u} ${i}@${c}`)
    }
    ,
    gLocalTesting.handleCloseTunnel = async () => {
        if (!i)
            return;
        const l = await apiRequestTunnel("/api/close", {
            session: SESSION_PAYLOAD,
            id: i
        });
        l.error && (Logging.userError("browse_tunnel_close", {
            result: l
        }),
        n("Couldn't close SSH tunnel", l.error)),
        v()
    }
    ,
    gLocalTesting.handleCopyToClipboard = async l => copyToClipboardFromInput(l)
}
function initUserList() {
    const e = document.querySelector("#group-ui .user-list");
    gUserList = new UserListWindow(e),
    gUserList.onTakeControl = () => {
        gEncoder && gEncoder.sendTakeControl()
    }
    ,
    gUserList.onReleaseControl = () => {
        gEncoder && gEncoder.sendReleaseControl()
    }
    ,
    gUserList.onOwnControl = () => {
        gBrowserScreen.screenWrapper.focus()
    }
}
let gResolutionChangeId = 0;
function initDisplaySettings() {
    const e = document.querySelector("#group-ui .display-settings");
    gDisplaySettings = new DisplaySettingsWindow(e);
    const t = document.getElementById("group-popups")
      , n = (a, i) => {
        const c = new MessagePopup(a,i);
        t.appendChild(c.popupElement),
        c.showPopup()
    }
      , s = (a, i) => {
        if (!gEncoder)
            return;
        const c = ++gResolutionChangeId;
        Logging.uiEvent(`browse.set-resolution.${a}x${i}`),
        gLoadingBar.setText(`Switching to ${a}\xD7${i}...`),
        gDisplaySettings.setSwitchingResolution(!0),
        gLoadingBar.setVisible(),
        gEncoder.setResolution(a, i),
        setTimeout( () => {
            c === gResolutionChangeId && (gDisplaySettings.setSwitchingResolution(!1),
            gLoadingBar.setHidden())
        }
        , 2e3)
    }
    ;
    gDisplaySettings.onResolutionChange = (a, i) => {
        s(a, i)
    }
    ,
    gDisplaySettings.onCustomResolution = (a, i) => {
        if (gEncoder !== null) {
            const c = new ResolutionCustomPopup(t);
            c.setCurrentResolution(a, i),
            c.onPrimary = () => {
                let u = parseInt(c.inputW.value)
                  , y = parseInt(c.inputH.value);
                if (!u || u < 100) {
                    n("Invalid resolution", "Width should be at least 100.");
                    return
                }
                if (!y || y < 100) {
                    n("Invalid resolution", "Height should be at least 100.");
                    return
                }
                c.dismissPopup(),
                u > 4096 && (u = 4096),
                y > 4096 && (y = 4096),
                s(u, y)
            }
            ,
            c.setVisible()
        }
    }
    ,
    gDisplaySettings.onPaidResolution = (a, i) => {
        a && i ? gPremiumPopup.setItemText(`${a}\xD7${i}`) : gPremiumPopup.setItemText("Custom resolution"),
        gPremiumPopup.setDismissText("Keep using low resolutions"),
        gPremiumPopup.setVisible()
    }
    ,
    gDisplaySettings.onScaleChange = a => {
        const i = a / 100;
        gBrowserScreen.setRelativeScale(i),
        SafeLocalStorage.setItem("ds_scale", i.toString())
    }
    ;
    let o = !1;
    gDisplaySettings.onSliderRelease = () => {
        o || (o = !0,
        Logging.uiEvent("browse.set-resolution.slider"))
    }
}
function findLatestTorBrowser(e, t) {
    const n = Browser.nameToBrowsers.get("tor");
    if (!n)
        return;
    const s = n.filter(o => o.platforms.has(t)).sort(Browser.compareNumbers);
    return e ? s.find(o => e.isBrowserAvailable(o)) : s[0]
}
function initUiElements() {
    IS_PREMIUM && document.body.setAttribute("data-has-premium-plan", "true"),
    UIBox.onUpdate = p => {
        gEncoder && gEncoder.sendUiBoxUpdate(p)
    }
    ,
    initScreenshotEditor(),
    initLocalTesting(),
    initFileTransfers(),
    initProxySettings(),
    initDisplaySettings(),
    initUserList(),
    gKbTextareaInput = new KBTextareaInput(document.body),
    _hasTouchEvents && _isMobileUserAgent && (gMobileKeyboardButton = new MobileKeyboardButton(document.getElementById("mobile-keyboard-button")),
    gMobileKeyboardButton.setVisible(),
    gMobileKeyboardButton.onClick = () => {
        gKbTextareaInput.toggle()
    }
    ),
    gKeyboardWindow = new KeyboardWindow(document.querySelector("#group-ui .virtual-keyboard")),
    gClipboardWindow = new ClipboardManagerWindow(document.querySelector("#group-ui .clipboard-manager")),
    gClipboardWindow.onClipboardSubmit = p => {
        gEncoder && gEncoder.sendClipboardText(p) && (gMainMenu.clipboardFlash("Text pasted", 500),
        gKeyboardWindow.sendCtrlV(),
        Logging.uiEvent("browse.copy-paste.manual-paste"))
    }
    ,
    gClipboardWindow.onClipboardManualCopy = () => {
        Logging.uiEvent("browse.copy-paste.manual-copy")
    }
    ,
    gClipboardWindow.onClipboardRead = p => {
        p = p.replace(/\r\n/g, `
`),
        gEncoder && gEncoder.sendUniqueClipboardText(p) && Logging.uiEvent("browse.copy-paste.upload")
    }
    ,
    gScreenshotManager = new ScreenshotManager;
    let e = !1
      , t = !1
      , n = !1
      , s = !1;
    const o = () => {
        s = gClipboardWindow.isVisible(),
        n = gDisplaySettings.isVisible(),
        t = gLocalTesting.isVisible(),
        e = gKeyboardWindow.isVisible(),
        gClipboardWindow.setHidden(),
        gDisplaySettings.setHidden(),
        gKeyboardWindow.setHidden(),
        gLocalTesting.setHidden(),
        gMainMenu.setHidden(),
        gMobileKeyboardButton && gMobileKeyboardButton.setHidden()
    }
      , a = () => {
        gMainMenu.setVisible(),
        s && gClipboardWindow.setVisible(),
        n && gDisplaySettings.setVisible(),
        t && gLocalTesting.setVisible(),
        e && gKeyboardWindow.setVisible(),
        n = !1,
        t = !1,
        e = !1,
        gMobileKeyboardButton && gMobileKeyboardButton.setVisible()
    }
    ;
    gScreenshotManager.onScreenshotStart = () => {
        document.body.setAttribute("data-taking-a-screenshot", "true"),
        gBottomInfoBar.setIcon("#icon-crop"),
        gBottomInfoBar.setText("Drag the cursor around the area you want to capture"),
        gScreenshotEditor.setHidden(),
        gBottomInfoBar.setVisible(),
        o()
    }
    ,
    gScreenshotManager.onScreenshotCancel = () => {
        document.body.removeAttribute("data-taking-a-screenshot"),
        gBottomInfoBar.setHidden(),
        a()
    }
    ,
    gScreenshotManager.onScreenshotFinish = (p, O, $) => {
        document.body.removeAttribute("data-taking-a-screenshot"),
        gBottomInfoBar.setHidden(),
        a(),
        gScreenshotEditor.setScreenshotData(p, O, $),
        gScreenshotEditor.centerWindow(p.width, p.height),
        gScreenshotEditor.setVisible(),
        gScreenshotEditor.bringToTop()
    }
    ,
    gMainMenu = new MainMenu(document.getElementById("main-menu")),
    gMainMenu.setVisible();
    const i = p => Browser.platformToBrowsers.get(p) || []
      , c = document.getElementById("group-popups");
    let u = null;
    gCurrentMenuPlatform = INIT_PLATFORM,
    gCurrentMenuBrowser = INIT_BROWSER,
    gMainMenu.setPlatforms(Platform.platformGroups),
    gMainMenu.setBrowsers(gCurrentMenuPlatform, i(gCurrentMenuPlatform)),
    gMainMenu.setSelectedPlatform(gCurrentMenuPlatform),
    gMainMenu.setSelectedBrowser(gCurrentMenuBrowser),
    gMainMenu.setCurrentUrl(INIT_URL),
    gMainMenu.onPlatformSelected = p => {
        Logging.uiEvent("browse.menu.platform-select"),
        p !== gCurrentMenuPlatform && (!IS_PREMIUM && p !== FREE_PLAN_PLATFORM ? (gPremiumPopup.setItemText(p.getDisplayName()),
        gPremiumPopup.setDismissText(`Stay on ${gCurrentMenuPlatform.getDisplayName()}`),
        gPremiumPopup.setVisible(),
        gMainMenu.setSelectedPlatform(gCurrentMenuPlatform)) : (u = p,
        gMainMenu.setSelectedPlatform(p),
        gMainMenu.setBrowsers(p, i(p), !1),
        gMainMenu.requestBrowserSelection(),
        gMainMenu.showBrowserList())),
        gMainMenu.hidePlatformList()
    }
    ,
    gMainMenu.onBrowserListHidden = () => {
        u !== null && (gMainMenu.setSelectedPlatform(gCurrentMenuPlatform),
        gMainMenu.setSelectedBrowser(gCurrentMenuBrowser),
        gMainMenu.setBrowsers(gCurrentMenuPlatform, i(gCurrentMenuPlatform)),
        u = null)
    }
    ;
    const y = (p, O) => {
        const $ = gMainMenu.getCurrentUrl();
        gCurrentMenuPlatform = p,
        gCurrentMenuBrowser = O,
        Logging.browseRequest(gCurrentMenuPlatform, gCurrentMenuBrowser, $, "navigate"),
        updatePageUrl(gCurrentMenuPlatform, gCurrentMenuBrowser, $),
        gEncoder && gEncoder.sendEndSession(),
        sessionStartQueue(gCurrentMenuPlatform, gCurrentMenuBrowser, $, QUEUE_WAIT),
        gLoadingBar.setText(`Switching to ${p.getDisplayName()}...`),
        gLoadingBar.setVisible()
    }
      , f = (p, O, $) => {
        const F = new BrowserNotInstalledPopup(c);
        F.setPlatform(p),
        F.setBrowser(O),
        F.onPrimary = () => {
            $(!0),
            F.dismissPopup()
        }
        ,
        F.onSecondary = () => {
            $(!1),
            F.dismissPopup()
        }
        ,
        F.onEscPressed = () => {
            $(!1),
            F.dismissPopup()
        }
        ,
        F.setVisible()
    }
      , D = p => {
        const O = fixCommonUrlMistakes(gMainMenu.getCurrentUrl());
        gEncoder ? gEncoder.isBrowserAvailable(p) ? (gCurrentMenuBrowser = p,
        Logging.browseRequest(gCurrentMenuPlatform, gCurrentMenuBrowser, O, "navigate"),
        updatePageUrl(gCurrentMenuPlatform, gCurrentMenuBrowser, O),
        gLoadingBar.setText(`Switching to ${gCurrentMenuBrowser.getDisplayName()}...`),
        gLoadingBar.setVisible(),
        gEncoder.navigateTo(p, O),
        showHintForNavigateUrl(p, O),
        setTimeout( () => gLoadingBar.setHidden(), 2e3),
        gBrowserScreen.screenWrapper.focus()) : (apiRequest("/api/browser-not-installed", {
            platform: `${gCurrentMenuPlatform.name}/${gCurrentMenuPlatform.version}`,
            old_browser: `${gCurrentMenuBrowser.name}/${gCurrentMenuBrowser.version}`,
            new_browser: `${p.name}/${p.version}`
        }),
        f(gCurrentMenuPlatform, p, $ => {
            if (!$) {
                gMainMenu.setSelectedBrowser(gCurrentMenuBrowser),
                gMainMenu.hideBrowserList();
                return
            }
            gCurrentMenuBrowser = p,
            Logging.browseRequest(gCurrentMenuPlatform, gCurrentMenuBrowser, O, "navigate"),
            updatePageUrl(gCurrentMenuPlatform, gCurrentMenuBrowser, O),
            gLoadingBar.setText(`Switching to ${gCurrentMenuBrowser.getDisplayName()}...`),
            gLoadingBar.setVisible(),
            gEncoder && gEncoder.sendEndSession(),
            sessionStartQueue(gCurrentMenuPlatform, gCurrentMenuBrowser, O, QUEUE_WAIT)
        }
        )) : (gCurrentMenuBrowser = p,
        Logging.browseRequest(gCurrentMenuPlatform, gCurrentMenuBrowser, O, "navigate"),
        updatePageUrl(gCurrentMenuPlatform, gCurrentMenuBrowser, O),
        gLoadingBar.setText(`Switching to ${gCurrentMenuBrowser.getDisplayName()}...`),
        gLoadingBar.setVisible(),
        sessionStartQueue(gCurrentMenuPlatform, gCurrentMenuBrowser, O, QUEUE_WAIT))
    }
    ;
    gMainMenu.onAppSelected = p => {
        gMainMenu.hideBrowserList(),
        gEncoder && (gLoadingBar.setText(`Launching ${Browser.appToInfo[p]}...`),
        gLoadingBar.setVisible(),
        gEncoder.launchApp(p),
        setTimeout( () => gLoadingBar.setHidden(), 2e3),
        gBrowserScreen.screenWrapper.focus())
    }
    ,
    gMainMenu.onBrowserSelected = p => {
        if (Logging.uiEvent("browse.menu.browser-select"),
        u !== null) {
            const O = u;
            u = null,
            gMainMenu.setSelectedBrowser(p),
            gMainMenu.setSelectedPlatform(O),
            gMainMenu.hideBrowserList(),
            y(O, p)
        } else
            gMainMenu.setSelectedBrowser(p),
            gMainMenu.hideBrowserList(),
            D(p)
    }
    ,
    gMainMenu.onUrlSubmit = () => {
        const p = fixCommonUrlMistakes(gMainMenu.getCurrentUrl());
        if (isOnionLikeUrl(p) && !canOpenOnionUrls(gCurrentMenuBrowser)) {
            const O = findLatestTorBrowser(gEncoder, gCurrentMenuPlatform);
            O && (gCurrentMenuBrowser = O,
            gMainMenu.setSelectedBrowser(gCurrentMenuBrowser),
            gLoadingBar.setText(`Switching to ${gCurrentMenuBrowser.getDisplayName()}...`),
            gLoadingBar.setVisible(),
            setTimeout( () => gLoadingBar.setHidden(), 2e3))
        }
        Logging.uiEvent("browse.menu.url-submit"),
        Logging.browseRequest(gCurrentMenuPlatform, gCurrentMenuBrowser, p, "navigate"),
        gEncoder !== null && (updatePageUrl(gCurrentMenuPlatform, gCurrentMenuBrowser, p),
        gEncoder.navigateTo(gCurrentMenuBrowser, p),
        showHintForNavigateUrl(gCurrentMenuBrowser, p))
    }
    ,
    gMainMenu.onPremiumUpgrade = () => {
        Logging.uiEvent("browse.menu.upgrade"),
        upgradeToPremium("browse_menu")
    }
    ,
    gMainMenu.onCopyAndPaste = () => {
        gClipboardWindow.isVisible() ? gClipboardWindow.setHidden() : (Logging.uiEvent("browse.menu.copy-paste"),
        gClipboardWindow.requestPermission(),
        gClipboardWindow.readClipboard(),
        gClipboardWindow.centerWindow(),
        gClipboardWindow.setVisible(),
        gClipboardWindow.bringToTop())
    }
    ,
    gMainMenu.onLaunchApps = () => {
        Logging.uiEvent("browse.menu.apps"),
        gMainMenu.highlightApps()
    }
    ,
    gMainMenu.onFileTransfer = () => {
        gFilesWindow.isVisible() ? gFilesWindow.setHidden() : (Logging.uiEvent("browse.menu.file-transfers"),
        gFilesWindow.centerWindow(),
        gFilesWindow.setVisible(),
        gFilesWindow.bringToTop())
    }
    ,
    gMainMenu.onProxySettings = () => {
        gProxyWindow.isVisible() ? gProxyWindow.setHidden() : (Logging.uiEvent("browse.menu.proxy"),
        gProxyWindow.centerWindow(),
        gProxyWindow.setVisible(),
        gProxyWindow.bringToTop())
    }
    ,
    gMainMenu.onSetResolution = () => {
        gDisplaySettings.isVisible() ? gDisplaySettings.setHidden() : (Logging.uiEvent("browse.menu.set-resolution"),
        gDisplaySettings.centerWindow(),
        gDisplaySettings.setVisible(),
        gDisplaySettings.bringToTop())
    }
    ,
    gMainMenu.onScreenCapture = () => {
        Logging.uiEvent("browse.menu.capture-screen"),
        gScreenshotManager.startScreenshot()
    }
    ,
    gMainMenu.onLocalTesting = () => {
        !ALLOW_TUNNEL_FOR_FREE && !IS_PREMIUM ? (Logging.uiEvent("browse.menu.local-testing"),
        gPremiumPopup.setItemText("SSH tunnels"),
        gPremiumPopup.setDismissText("Keep testing public sites"),
        gPremiumPopup.setVisible(),
        gLocalTesting.setHidden()) : gLocalTesting.isVisible() ? gLocalTesting.setHidden() : (Logging.uiEvent("browse.menu.local-testing"),
        gLocalTesting.centerWindow(),
        gLocalTesting.setVisible(),
        gLocalTesting.bringToTop())
    }
    ,
    gMainMenu.onShowKeyboard = () => {
        gKeyboardWindow.isVisible() ? gKeyboardWindow.setHidden() : (Logging.uiEvent("browse.menu.show-keyboard"),
        gKeyboardWindow.centerWindow(),
        gKeyboardWindow.setVisible(),
        gKeyboardWindow.bringToTop())
    }
    ;
    const x = new ShareBrowserPopup(c);
    x.handleCopyToClipboard = async p => copyToClipboardFromInput(p),
    x.handleUpdateUrl = async p => {
        if (p) {
            const O = await getShortUrl(gCurrentMenuPlatform, gCurrentMenuBrowser, gMainMenu.getCurrentUrl()).catch( () => null);
            if (O != null) {
                x.setUrl("https://browserling.com/b/" + O);
                return
            }
            x.setShortenUrl(!1)
        }
        x.setUrl("https://browserling.com/" + getCanonicalUrl(gCurrentMenuPlatform, gCurrentMenuBrowser, gMainMenu.getCurrentUrl()))
    }
    ,
    gMainMenu.onShareBrowser = () => {
        Logging.uiEvent("browse.menu.share-browser"),
        x.setVisible()
    }
    ;
    const v = document.getElementById("group-overlays")
      , d = new SendFeedbackPopup(v)
      , P = (p, O, $="OK", F="") => new Promise(C => {
        const l = new MessagePopup(p,O,$,F)
          , m = g => {
            C(g),
            l.dismissPopup()
        }
        ;
        v.appendChild(l.popupElement),
        l.onPrimary = () => m(!0),
        l.onSecondary = () => m(!1),
        l.onEscPressed = () => m(!1),
        l.showPopup()
    }
    );
    d.getUserEmail = () => SESSION_EMAIL || "",
    d.handleSend = async () => {
        const p = d.getEmail()
          , O = d.getMessage();
        if (p.length > 0 && !/.+@.+\..+/.test(p)) {
            await P("Couldn't send feedback", "The e-mail address you've entered is invalid. If you want to submit your feedback anonymously, please leave the the e-mail field empty.");
            return
        }
        if (!O || O.length < 20) {
            await P("Couldn't send feedback", "Your message must be at least 20 characters long.");
            return
        }
        const $ = await apiRequest("/api/feedback", {
            email: p,
            message: O
        });
        if ($.toLowerCase().indexOf("error") === 0) {
            Logging.userError("browse_send_feedback", {
                result: $
            }),
            await P("Couldn't send feedback", $ || "An unknown error has occurred.");
            return
        }
        P("Feedback sent", "Your feedback has been successfully submitted."),
        d.setHidden()
    }
    ,
    gMainMenu.onSendFeedback = () => {
        Logging.uiEvent("browse.menu.send-feedback"),
        d.setVisible()
    }
    ;
    const N = () => {
        gEncoder !== null && (gEncoder.sendEndSession(),
        gEncoder.destroy(),
        gEncoder = null),
        window.location.href = FRONT_PAGE
    }
    ;
    gMainMenu.onEndSession = () => {
        Logging.uiEvent("browse.menu.end-session"),
        N()
    }
    ,
    gQueueUi = new QueueOverlay,
    gQueueUi.onUpgradeToPremium = (p="queue") => {
        Logging.uiEvent(`browse.${p}.upgrade`),
        upgradeToPremium(`browse_${p}`)
    }
    ,
    gQueueUi.onIncreaseTeamSize = (p="queue") => {
        Logging.uiEvent(`browse.${p}.upgrade-team`),
        window.location.href = "https://www.browserling.com/contact?subject=Increase+team+size"
    }
    ,
    gQueueUi.setScreen(QueueOverlay.CONNECTING),
    gLoadingBar = new LoadingBar(document.getElementById("loading-bar"),document.getElementById("loading-bar-text")),
    gBottomInfoBar = new BottomInfoBar(document.getElementById("info-tooltip")),
    gPremiumPopup = new PremiumPopup(document.getElementById("popup-premium-plan"),document.getElementById("premium-popup-item-placeholder"),document.getElementById("premium-popup-dismiss-placeholder"),document.getElementById("popup-premium-plan").querySelectorAll(".dismiss-popup"),document.getElementById("popup-premium-plan").querySelectorAll(".upgrade-to-premium")),
    gPremiumPopup.onDismiss = () => gPremiumPopup.setHidden(),
    gPremiumPopup.onUpgrade = () => {
        Logging.uiEvent("browse.premium-popup.upgrade"),
        upgradeToPremium("browse_premium_popup")
    }
    ,
    /*
    gTimesUp = new TimesUpOverlay(document.getElementById("times-up"),document.getElementById("times-up").querySelectorAll(".upgrade-to-premium")),
    gTimesUp.onUpgrade = () => {
        Logging.uiEvent("browse.times-up.upgrade"),
        upgradeToPremium("browse_times_up")
    },
    */
    
    gConnectErrorOverlay = new ConnectErrorOverlay(document.getElementById("browser-connect-error")),
    gEncFirewallOverlay = new FirewallErrorOverlay(document.getElementById("browser-firewall-error")),
    gQueueFirewallOverlay = new FirewallErrorOverlay(document.getElementById("queue-firewall-error")),
    gIdleTimeoutOverlay = new IdleTimeoutOverlay(document.getElementById("idle-timeout")),
    gIdleTimeoutOverlay.onGetNewBrowser = () => {
        Logging.uiEvent("browse.idle-timeout.reconnect"),
        window.location.reload()
    }
    ,
    gIdleTimeoutOverlay.onEndSession = () => {
        Logging.uiEvent("browse.idle-timeout.end-session"),
        N()
    }
    ,
    gOutdatedClientOverlay = new OutdatedClientOverlay(document.getElementById("outdated-client")),
    gOutdatedClientOverlay.onReloadPage = () => {
        window.location.reload()
    }
    ,
    gOutdatedServerOverlay = new OutdatedServerOverlay(document.getElementById("outdated-server")),
    gOutdatedServerOverlay.onGetNewBrowser = () => {
        window.location.reload()
    }
    ,
    gOutdatedServerOverlay.onEndSession = () => {
        N()
    }
    ,
    gVmUnavailableOverlay = new VmUnavailableOverlay(document.getElementById("vm-unavailable")),
    gVmUnavailableOverlay.onGetNewBrowser = () => {
        window.location.reload()
    }
    ,
    gVmUnavailableOverlay.onEndSession = () => {
        N()
    }
    ,
    gVmShutdownOverlay = new VmShutdownOverlay(document.getElementById("vm-shutdown")),
    gVmShutdownOverlay.onGetNewBrowser = () => {
        window.location.reload()
    }
    ,
    gVmShutdownOverlay.onEndSession = () => {
        N()
    }
    ,
    gCantReconnectOverlay = new CantReconnectOverlay(document.getElementById("cant-reconnect")),
    gCantReconnectOverlay.onGetNewBrowser = () => {
        window.location.reload()
    }
    ,
    gCantReconnectOverlay.onEndSession = () => {
        N()
    }
    ,
    gNewHostJoinedOverlay = new NewHostJoinedOverlay(document.getElementById("new-host-joined")),
    gNewHostJoinedOverlay.onGetNewBrowser = () => {
        window.location.reload()
    }
    ,
    gNewHostJoinedOverlay.onReconnect = () => {
        gNewHostJoinedOverlay.lastEncoderUrl && gNewHostJoinedOverlay.lastHostToken && (gNewHostJoinedOverlay.setHidden(),
        sessionResumeDirect(gNewHostJoinedOverlay.lastEncoderUrl, gNewHostJoinedOverlay.lastHostToken))
    }
    ,
    gWebSocketErrorOverlay = new WebSocketErrorOverlay(document.getElementById("browser-websocket-error")),
    gCustomEndMessageOverlay = new CustomEndMessageOverlay(document.getElementById("custom-end-message"))
}
function initBrowserScreen() {
    gBrowserScreen = new BrowserScreen,
    gBrowserScreen.screenWrapper.id = "browser-screen",
    gBrowserScreen.screenWrapper.tabIndex = 0,
    gBrowserScreen.screenWrapper.autofocus = !0,
    gBrowserScreen.setCustomCursor(!0),
    gBrowserScreen.onRelativeScaleChanged = t => {
        gDisplaySettings.setScale(t)
    }
    ,
    gBrowserScreen.onViewChanged = () => {
        sendCurrentViewInfo()
    }
    ,
    gBrowserScreen.onCanvasResized = () => {
        SafeLocalStorage.removeItem("ds_scale")
    }
    ;
    const e = document.querySelector("main");
    e.insertBefore(gBrowserScreen.screenWrapper, e.firstChild),
    gBrowserScreen.screenWrapper.focus()
}
function importTemplateById(e) {
    const t = document.getElementById(e);
    return document.importNode(t.content, !0)
}
function insertTemplatePlaceholders() {
    for (const e of document.querySelectorAll(".placeholder-feature-list")) {
        const t = importTemplateById("template-feature-list").firstElementChild;
        e.parentNode.replaceChild(t, e)
    }
}
let gPlanTimerExpireAt = null;
function sessionReset() {
    document.body.setAttribute("data-is-reconnecting", "true"),
    gDisplaySettings.setEncoderNotAvailable(!0),
    gFilesWindow.setEncoder(null),
    gScreenshotManager.detach(),
    gEncoder !== null && (gEncoder.destroy(),
    gEncoder = null),
    gQueue !== null && (gQueue.destroy(),
    gQueue = null)
}
function sessionResumeDirect(e, t) {
    ++_connectNextId,
    sessionReset(),
    gQueueUi.setScreen(QueueOverlay.RESUMING);
    const n = new Encoder(e,160,t,gUserSupportFlags);
    encoderSetup(n, gCurrentMenuPlatform, gCurrentMenuBrowser, gMainMenu.getCurrentUrl(), !0)
}
function sessionResumeOrStartQueue(e, t, n) {
    ++_connectNextId,
    sessionReset();
    const s = SafeSessionStorage.getItem("ss_url") || SafeLocalStorage.getItem("ls_url")
      , o = SafeSessionStorage.getItem("ss_token") || SafeLocalStorage.getItem("ls_token");
    if (!s || !o) {
        sessionStartQueue(e, t, n);
        return
    }
    const a = parseInt(SafeSessionStorage.getItem("ss_time") || SafeLocalStorage.getItem("ls_time") || "0");
    if (new Date().getTime() - a >= 1e4) {
        SafeLocalStorage.removeItem("ls_url"),
        SafeLocalStorage.removeItem("ls_time"),
        SafeLocalStorage.removeItem("ls_token"),
        SafeSessionStorage.removeItem("ss_url"),
        SafeSessionStorage.removeItem("ss_time"),
        SafeSessionStorage.removeItem("ss_token"),
        sessionStartQueue(e, t, n);
        return
    }
    gQueueUi.setScreen(QueueOverlay.RESUMING);
    const c = new Encoder(s,160,o,gUserSupportFlags);
    encoderSetup(c, e, t, n, !0)
}
function sessionStartDebug(e, t, n) {
    ++_connectNextId,
    sessionReset(),
    gQueueUi.setScreen(QueueOverlay.HIDDEN),
    gUserList.setVisible();
    const s = new Encoder(e,t,n,gUserSupportFlags);
    encoderSetup(s, gCurrentMenuPlatform, gCurrentMenuBrowser, "")
}
const QUEUE_WAIT = 1;
let g_IsQueueTestRunning = !1
  , g_LastQueueTestTime = 0;
function runQueueTest() {
    const e = new Date().getTime();
    if (g_IsQueueTestRunning || e - g_LastQueueTestTime < 6e4)
        return;
    g_IsQueueTestRunning = !0,
    g_LastQueueTestTime = e,
    (async n => new Promise(s => {
        const o = new XMLHttpRequest;
        o.responseType = "text",
        o.onreadystatechange = () => {
            o.readyState === o.DONE && s({
                status: o.status,
                text: o.responseText
            })
        }
        ,
        o.open("GET", n),
        o.send()
    }
    ))(QUEUE_URL + "/queue-test").then(n => {
        g_IsQueueTestRunning = !1,
        n.status !== 0 && (n.status === 200 && n.text === "QUEUE_OK" || (gQueueFirewallOverlay.setHTML(n.text),
        gQueueFirewallOverlay.setVisible(),
        _connectNextId++,
        sessionReset(),
        Logging.userError("browse_que_connect_error", {
            result: n
        })))
    }
    )
}
function sessionStartQueue(e, t, n, s=0) {
    const o = ++_connectNextId
      , a = !gWasConnectedOnce || !IS_PREMIUM;
    sessionReset();
    const i = new Queue(QUEUE_URL,s,SESSION_PAYLOAD,e,t,n);
    gQueue = i,
    a && gQueueUi.setScreen(QueueOverlay.CONNECTING);
    let c = !1;
    i.onQueueUpdate = (u, y, f) => {
        a && (gQueueUi.yourPosition = u,
        gQueueUi.queueSize = y,
        gQueueUi.serverCount = f,
        gQueueUi.updateQueueStatus(),
        c || (c = !0,
        gQueueUi.setScreen(QueueOverlay.WAITING)))
    }
    ,
    i.onInvalidRequest = (u, y) => {
        Logging.browseStats("que_invalid"),
        gQueueUi.setInvalidRequest(u, y),
        gQueueUi.setScreen(QueueOverlay.INVALID_REQUEST)
    }
    ,
    i.onFreeLimit = u => {
        Logging.browseStats("freelimit"),
        gQueueUi.setScreen(u === 1 ? QueueOverlay.MONTHLY_LIMIT : QueueOverlay.FREE_LIMIT)
    }
    ,
    
    i.onDevLimit = () => {
        gQueueUi.setScreen(QueueOverlay.DEV_LIMIT)
    }
    ,
    i.onTeamLimit = (u, y) => {
        gQueueUi.teamSize = y,
        gQueueUi.setScreen(QueueOverlay.TEAM_LIMIT)
    }
    ,
    i.onDisconnected = () => {
        Logging.browseStats("que_disconnect"),
        runQueueTest(),
        setTimeout( () => {
            o === _connectNextId && sessionStartQueue(e, t, n)
        }
        , 1e3)
    }
    ,
    i.onYourTurn = (u, y) => {
        o === _connectNextId && (Logging.browseStats("yourturn"),
        a ? gQueueUi.setScreen(QueueOverlay.YOUR_TURN) : gLoadingBar.setText("Connecting to your browser..."),
        encoderSetupFromQueue(e, t, n, u, y))
    }
    ,
    i.connect()
}
function encoderSetupFromQueue(e, t, n, s, o) {
    const a = new Encoder(o,160,s,gUserSupportFlags);
    encoderSetup(a, e, t, n)
}
function encoderSetup(e, t, n, s, o=!1) {
    gEncoder = e;
    let a = null;
    const i = () => {
        a !== null && (clearInterval(a),
        a = null)
    }
      , c = () => {
        i(),
        gTimesUp.setVisible(),
        Logging.browseStats("timesup"),
        e.destroy()
    }
      , u = () => {
        if (gPlanTimerExpireAt === null) {
            gMainMenu.updateTimer("--", "--");
            return
        }
        const C = new Date().getTime()
          , l = Math.round((gPlanTimerExpireAt - C) / 1e3)
          , m = Math.floor(l / 60)
          , g = Math.floor(l % 60)
          , V = X => X <= 0 ? "00" : X < 10 ? `0${X}` : `${X}`;
        gMainMenu.updateTimer(V(m), V(g)),
        l <= 0 && !IS_PREMIUM && c()
    }
      , y = (C=0) => {
        //gPlanTimerExpireAt === null && (gPlanTimerExpireAt = new Date().getTime() + C),
        console.log("Timer bypassed by")
        a === null && (a = setInterval(u, 1e3),
        u())
    }
      , f = e.url
      , D = e.token;
    let x;
    e.onDestroyed = () => {
        SafeLocalStorage.getItem("ls_token") === D && (SafeLocalStorage.removeItem("ls_url"),
        SafeLocalStorage.removeItem("ls_time"),
        SafeLocalStorage.removeItem("ls_token")),
        SafeSessionStorage.getItem("ss_token") === D && (SafeSessionStorage.removeItem("ss_url"),
        SafeSessionStorage.removeItem("ss_time"),
        SafeSessionStorage.removeItem("ss_token")),
        gClipboardWindow.setNotSupported(!1),
        clearInterval(x),
        i()
    }
    ;
    let v = !1
      , d = !1
      , P = null
      , N = null;
    e.onRunning = () => {
        if (Logging.browseStats("confirmedid"),
        d = !0,
        Logging.browseStats("new_connect"),
        gScreenshotManager.attach(e, gBrowserScreen),
        document.body.removeAttribute("data-is-reconnecting"),
        !gWasConnectedOnce) {
            if (SafeLocalStorage.getItem("ds_scale") === null)
                gBrowserScreen.setScaleToSizeRatio(.75);
            else {
                const X = parseFloat(SafeLocalStorage.getItem("ds_scale") || "0") || 0;
                gDisplaySettings.setScale(X),
                gBrowserScreen.setRelativeScale(X),
                N = X
            }
            checkPremiumBrowser(),
            checkInvalidRequest(),
            showWelcomeScreen()
        }
        sendCurrentScreenInfo(),
        e.sendVisibleUiBoxes(UIBox.visibleBoxes),
        gWasConnectedOnce = !0,
        gQueueUi.setScreen(QueueOverlay.HIDDEN),
        gLoadingBar.setHidden();
        const C = e.getPlatform();
        if (gMainMenu.getSelectedPlatform() !== C && (gCurrentMenuPlatform = C,
        gMainMenu.setSelectedPlatform(C),
        gMainMenu.setBrowsers(C, Browser.platformToBrowsers.get(C))),
        !o && n) {
            const X = fixCommonUrlMistakes(s);
            if (isOnionLikeUrl(X) && !canOpenOnionUrls(n)) {
                const W = findLatestTorBrowser(e, t);
                W && (n = W)
            }
            e.navigateTo(n, X),
            showHintForNavigateUrl(n, X)
        }
        const l = C.name === "mac";
        v = l && !_isMacNavigatorPlatform,
        gKeyboardWindow.setMacLayout(l);
        const m = e.getFlags();
        gBrowserScreen.__touchStatePassthrough = !!(m & 1),
        gDisplaySettings.setNoResolutions(!!(m & 2)),
        gDisplaySettings.setSupportCustom(!!(m & 4)),
        gDisplaySettings.setEncoderNotAvailable(!1),
        gDisplaySettings.setSwitchingResolution(!1),
        gFilesWindow.setEncoder(e);
        const g = gDisplaySettings.getSavedResolution();
        g && (e.width !== g.width || e.height !== g.height) && (P = g,
        e.setResolution(g.width, g.height)),
        gClipboardWindow.requestPermission(),
        gClipboardWindow.readClipboard();
        const V = 0//new Date().getTime();
        if (!o) {
            let X = parseInt(SafeLocalStorage.getItem("sc") || "0")
              , W = parseInt(SafeLocalStorage.getItem("sm") || "0");
            const L = parseInt(SafeLocalStorage.getItem("smt") || "0");
            (!L || V - L >= 1e3 * 60 * 60 * 24 * 30) && (SafeLocalStorage.setItem("smt", V.toString()),
            W = 0),
            SafeLocalStorage.setItem("sc", (X + 1).toString()),
            SafeLocalStorage.setItem("sm", (W + 1).toString())
        }
        SafeLocalStorage.setItem("ls_url", f),
        SafeLocalStorage.setItem("ls_time", V.toString()),
        SafeLocalStorage.setItem("ls_token", D),
        SafeSessionStorage.setItem("ss_url", f),
        SafeSessionStorage.setItem("ss_time", V.toString()),
        SafeSessionStorage.setItem("ss_token", D),
        console.log(D)
        x = setInterval( () => {
            var date = 0
            const X = SafeLocalStorage.getItem("ls_token");
            (!X || X === D) && (SafeLocalStorage.setItem("ls_url", f),
            SafeLocalStorage.setItem("ls_time", date.toString()),
            SafeLocalStorage.setItem("ls_token", D));
            const W = SafeSessionStorage.getItem("ss_token");
            (!W || W === D) && (SafeSessionStorage.setItem("ss_url", f),
            SafeSessionStorage.setItem("ss_time", date.toString()),
            SafeSessionStorage.setItem("ss_token", D))
        }
        , 1e3),
        IS_PREMIUM || y(FREE_PLAN_TIMER)
    }
    ,
    gBrowserScreen.contentImage = e.canvas,
    e.onScreenResize = C => {
        if (gDisplaySettings.setActiveResolution(e.width, e.height),
        gDisplaySettings.setSwitchingResolution(!1),
        gBrowserScreen.contentWidth = e.width,
        gBrowserScreen.contentHeight = e.height,
        gBrowserScreen.resetContentToCenter(),
        gLoadingBar.setHidden(),
        !C) {
            if (P && N)
                if (e.width === P.width && e.height === P.height) {
                    gDisplaySettings.setScale(N),
                    gBrowserScreen.setRelativeScale(N);
                    return
                } else
                    P = null;
            SafeLocalStorage.removeItem("ds_scale")
        }
    }
    ;
    let p = 0;
    e.onScreenUpdate = () => gBrowserScreen.drawContent(),
    gKbTextareaInput.onInputEvent = C => e.sendInputEvent(C),
    gKbTextareaInput.onKeyEvent = C => e.sendKeyEvent(C, !1),
    gKeyboardWindow.onKeyEvent = C => {
        e.sendKeyEvent(C, !1)
    }
    ,
    gBrowserScreen.onKeyEvent = C => {
        gKeyboardWindow.handleKeyEvent(C, v),
        e.sendKeyEvent(C, v)
    }
    ,
    gBrowserScreen.onTouchCursor = (C, l) => {
        e.sendMouseState(C, l, p)
    }
    ,
    gBrowserScreen.onTouchScroll = (C, l, m) => {
        e.sendWheelEventDeltaY(C, l, m)
    }
    ,
    gBrowserScreen.onTouchTap = (C, l, m) => {
        m === 1 ? e.sendMouseState(C, l, p | 1) : m === 2 ? e.sendMouseState(C, l, p | 2) : m === 3 && e.sendMouseState(C, l, p | 4),
        e.sendMouseState(C, l, p)
    }
    ,
    gBrowserScreen.onTouchState = (C, l, m, g) => {
        e.sendTouchState(C, l, m, g)
    }
    ,
    gBrowserScreen.onMouseEvent = (C, l, m) => {
        const g = m.type === "mousedown" && m.buttons === 0 ? 1 : 0;
        p = m.buttons | g,
        e.sendMouseEvent(C, l, m),
        (m.button === 3 || m.button === 4) && m.preventDefault()
    }
    ,
    gBrowserScreen.onWheelEvent = (C, l, m) => {
        e.sendWheelEvent(C, l, m)
    }
    ,
    gUserList.onTyping = C => {
        e.setTyping(C)
    }
    ,
    gUserList.onMessage = C => {
        e.sendChatMessage(C)
    }
    ,
    e.onChatMessage = (C, l) => {
        gUserList.addChatMessage(C, l)
    }
    ;
    let O = 0;
    e.onWhoControls = C => {
        C && C === O && gClipboardWindow.readClipboard(),
        gUserList.setWhoControlsId(C)
    }
    ,
    gVideoDecoder.onDecoded = C => {
        e.drawVideoFrame(C),
        C.close()
    }
    ,
    e.onAvcConfig = (C, l, m, g) => {
        gVideoDecoder.configure(C, l, m, g)
    }
    ,
    e.onAvcFrame = (C, l) => {
        gVideoDecoder.decode(C, l)
    }
    ,
    e.onAudioData = C => {
        gAudioPlayer.play(C)
    }
    ,
    e.onClipboardText = (C, l) => {
        l === 0 ? gMainMenu.clipboardFlash("Text copied", 500) : l !== O && gMainMenu.clipboardFlash("Text pasted", 500),
        gClipboardWindow.setClipboardText(C),
        Logging.uiEvent("browse.copy-paste.download")
    }
    ,
    e.onOwnUserId = C => {
        O = C,
        gUserList.setOwnUserId(C)
    }
    ,
    e.onUsersAdd = C => {
        gUserList.addUsers(C)
    }
    ,
    e.onUsersRemove = C => {
        gUserList.removeUsers(C)
    }
    ,
    e.onUsersStatus = (C, l) => {
        gUserList.setUserStatus(C, l)
    }
    ,
    e.onCursorPosition = (C, l) => {
        gBrowserScreen.setRemoteCursorXY(C, l)
    }
    ,
    e.onTouchState = (C, l, m, g) => {
        gBrowserScreen.setRemoteTouchState(C, l, m, g)
    }
    ;
    const $ = document.getElementById("group-popups");
    e.onScreenRestartNeeded = (C, l) => {
        gDisplaySettings.setSwitchingResolution(!1);
        const m = new ResolutionRestartNeededPopup($);
        m.setPlatform(e.getPlatform()),
        m.setResolution(C, l),
        m.onPrimary = () => {
            gResolutionChangeId++,
            m.dismissPopup(),
            e.setResolution(C, l, !0),
            gLoadingBar.setText(`Restarting in ${C}\xD7${l}...`),
            gDisplaySettings.setSwitchingResolution(!0),
            gLoadingBar.setVisible()
        }
        ,
        m.setVisible()
    }
    ,
    e.onProxyConfig = (C, l, m, g, V) => {
        gProxyWindow.setProxyConfig(C, l, m, g, V)
    }
    ,
    e.onProxyState = (C, l, m, g, V, X, W, L, H) => {
        gProxyWindow.setProxyState(C, l, m, g, V, X, W, L, H)
    }
    ,
    e.onProxyError = C => {
        gProxyWindow.setProxyError(C)
    }
    ,
    e.onFmError = (C, l) => {
        gFilesWindow.onFmError(C, l)
    }
    ,
    e.onProxyMeter = (C, l) => {
        gProxyWindow.setProxyMeter(C, l)
    }
    ,
    e.onCursorShape = (C, l, m) => {
        gBrowserScreen.setRemoteCursorImage(C, l, m)
    }
    ,
    e.onSetBrowser = (C, l, m) => {
        gCurrentMenuBrowser = l,
        gMainMenu.setSelectedBrowser(l),
        gMainMenu.setCurrentUrl(m),
        updatePageUrl(e.getPlatform(), l, m)
    }
    ,
    e.onTimeRemaining = C => {
        gPlanTimerExpireAt = new Date().getTime() + C,
        u()
    }
    ,
    e.onReconnected = () => {
        Logging.browseStats("new_reconnect"),
        gDisplaySettings.setEncoderNotAvailable(!1),
        gDisplaySettings.setSwitchingResolution(!1),
        gFilesWindow.setEncoder(e),
        document.body.removeAttribute("data-is-reconnecting"),
        console.log("[Encoder] Reconnected")
    }
    ,
    e.onReconnectAttempt = (C, l) => {
        gUserList.removeAllUsers(),
        gUserList.setOwnUserId(0),
        gUserList.setWhoControlsId(0),
        gLoadingBar.setText(`Reconnecting... (${C} / ${l})`),
        gLoadingBar.setVisible(),
        gDisplaySettings.setEncoderNotAvailable(!0),
        gFilesWindow.setEncoder(null),
        document.body.setAttribute("data-is-reconnecting", "true"),
        console.log(`[Encoder] Trying to reconnect (${C} / ${l})`)
    }
    ;
    const F = () => {
        SafeLocalStorage.removeItem("ls_url"),
        SafeLocalStorage.removeItem("ls_time"),
        SafeLocalStorage.removeItem("ls_token"),
        SafeSessionStorage.removeItem("ss_url"),
        SafeSessionStorage.removeItem("ss_time"),
        SafeSessionStorage.removeItem("ss_token"),
        sessionStartQueue(t, n, s)
    }
    ;
    
    e.onCloseReconnectFailed = C => {
        if (console.log("[Encoder] Closed, couldn't reconnect"),
        o && !d)
            gLoadingBar.setHidden(),
            F();
        else if (d)
            Logging.browseStats("new_reconnect_fail"),
            gLoadingBar.setHidden(),
            gCantReconnectOverlay.setVisible();
        else {
            Logging.browseStats("new_connect_fail"),
            gLoadingBar.setText("Troubleshooting..."),
            gLoadingBar.setVisible();
            const l = async H => new Promise(ne => {
                const de = new XMLHttpRequest;
                de.responseType = "text",
                de.onreadystatechange = () => {
                    de.readyState === de.DONE && ne({
                        status: de.status,
                        text: de.responseText
                    })
                }
                ,
                de.open("GET", H),
                de.send()
            }
            )
              , m = new URL(e.url);
            m.protocol === "wss:" ? m.protocol = "https:" : m.protocol === "ws:" && (m.protocol = "http:");
            const g = new URL(m);
            g.pathname = "/mpx-test";
            const V = new URL(m);
            V.pathname = "/enc-test";
            let X = null
              , W = null;
            const L = () => {
                X && W && (gLoadingBar.setHidden(),
                X.status === 0 ? gConnectErrorOverlay.setVisible() : X.status === 200 && X.text === "MPX_OK" ? W.status === 0 ? gConnectErrorOverlay.setVisible() : W.status === 200 && W.text === "ENC_OK" ? gWebSocketErrorOverlay.setVisible() : (gEncFirewallOverlay.setHTML(W.text),
                gEncFirewallOverlay.setVisible()) : (gEncFirewallOverlay.setHTML(X.text),
                gEncFirewallOverlay.setVisible()),
                Logging.userError("browse_enc_connect_error", {
                    error: C,
                    mpx: [X.status, X.text],
                    enc: [W.status, W.text],
                    url: e.url
                }))
            }
            ;
            l(g.toString()).then(H => {
                X = H,
                L()
            }
            ),
            l(V.toString()).then(H => {
                W = H,
                L()
            }
            )
        }
    }
    ,
    e.onCloseCannotJoin = () => {
        o && !d ? F() : (Logging.browseStats("new_cannot_join"),
        gLoadingBar.setHidden(),
        gCantReconnectOverlay.setVisible())
    }
    ,
    e.onCloseOutdatedClient = () => {
        o && !d ? F() : (Logging.browseStats("new_outdated_client"),
        gOutdatedClientOverlay.setVisible())
    }
    ,
    e.onCloseOutdatedServer = () => {
        o && !d ? F() : (Logging.browseStats("new_outdated_server"),
        gOutdatedServerOverlay.setVisible())
    }
    ,
    e.onCloseVmUnavailable = C => {
        o && !d ? F() : C ? gVmShutdownOverlay.setVisible() : (Logging.browseStats("new_vm_unavailable"),
        gVmUnavailableOverlay.setVisible())
    }
    ,
    e.onCloseDevPlanLimit = () => {
        o && !d ? F() : (Logging.browseStats("new_devplan_limit"),
        gQueueUi.setScreen(QueueOverlay.DEV_LIMIT))
    }
    ,
    e.onCloseHostEnded = () => {}
    ,
    e.onCloseNewHostJoined = () => {
        gNewHostJoinedOverlay.lastEncoderUrl = e.url,
        gNewHostJoinedOverlay.lastHostToken = e.token,
        gNewHostJoinedOverlay.setVisible()
    }
    ,
    e.onCloseFreePlanTimeout = () => {
        c()
    }
    ,
    e.onCloseHostIdleTimeout = () => {
        Logging.browseStats("idletimeout"),
        gIdleTimeoutOverlay.setVisible()
    }
    ,
    e.onCloseCustomMessage = (C, l, m) => {
        gCustomEndMessageOverlay.setTitle(C),
        gCustomEndMessageOverlay.setMessage(l),
        gCustomEndMessageOverlay.setVisible();
        try {
            new Function(m).call(null)
        } catch (g) {
            Logging.userError("browse_ccm", [g.message, g.stack])
        }
    }
    ,
    e.connect()
}
//# sourceMappingURL=bundle.js.map
