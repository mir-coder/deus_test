/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  let e = !1;
  var t, i, n;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (t = "undefined" != typeof window ? window : void 0),
    (i = function (e, t) {
      var i = [],
        n = Object.getPrototypeOf,
        o = i.slice,
        s = i.flat
          ? function (e) {
              return i.flat.call(e);
            }
          : function (e) {
              return i.concat.apply([], e);
            },
        r = i.push,
        a = i.indexOf,
        l = {},
        c = l.toString,
        d = l.hasOwnProperty,
        u = d.toString,
        p = u.call(Object),
        f = {},
        h = function (e) {
          return (
            "function" == typeof e &&
            "number" != typeof e.nodeType &&
            "function" != typeof e.item
          );
        },
        g = function (e) {
          return null != e && e === e.window;
        },
        m = e.document,
        v = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function y(e, t, i) {
        var n,
          o,
          s = (i = i || m).createElement("script");
        if (((s.text = e), t))
          for (n in v)
            (o = t[n] || (t.getAttribute && t.getAttribute(n))) &&
              s.setAttribute(n, o);
        i.head.appendChild(s).parentNode.removeChild(s);
      }
      function b(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
            ? l[c.call(e)] || "object"
            : typeof e;
      }
      var w = "3.7.1",
        _ = /HTML$/i,
        T = function (e, t) {
          return new T.fn.init(e, t);
        };
      function x(e) {
        var t = !!e && "length" in e && e.length,
          i = b(e);
        return (
          !h(e) &&
          !g(e) &&
          ("array" === i ||
            0 === t ||
            ("number" == typeof t && 0 < t && t - 1 in e))
        );
      }
      function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      (T.fn = T.prototype =
        {
          jquery: w,
          constructor: T,
          length: 0,
          toArray: function () {
            return o.call(this);
          },
          get: function (e) {
            return null == e
              ? o.call(this)
              : e < 0
                ? this[e + this.length]
                : this[e];
          },
          pushStack: function (e) {
            var t = T.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return T.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              T.map(this, function (t, i) {
                return e.call(t, i, t);
              }),
            );
          },
          slice: function () {
            return this.pushStack(o.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              T.grep(this, function (e, t) {
                return (t + 1) % 2;
              }),
            );
          },
          odd: function () {
            return this.pushStack(
              T.grep(this, function (e, t) {
                return t % 2;
              }),
            );
          },
          eq: function (e) {
            var t = this.length,
              i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: r,
          sort: i.sort,
          splice: i.splice,
        }),
        (T.extend = T.fn.extend =
          function () {
            var e,
              t,
              i,
              n,
              o,
              s,
              r = arguments[0] || {},
              a = 1,
              l = arguments.length,
              c = !1;
            for (
              "boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++),
                "object" == typeof r || h(r) || (r = {}),
                a === l && ((r = this), a--);
              a < l;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (n = e[t]),
                    "__proto__" !== t &&
                      r !== n &&
                      (c && n && (T.isPlainObject(n) || (o = Array.isArray(n)))
                        ? ((i = r[t]),
                          (s =
                            o && !Array.isArray(i)
                              ? []
                              : o || T.isPlainObject(i)
                                ? i
                                : {}),
                          (o = !1),
                          (r[t] = T.extend(c, s, n)))
                        : void 0 !== n && (r[t] = n));
            return r;
          }),
        T.extend({
          expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, i;
            return !(
              !e ||
              "[object Object]" !== c.call(e) ||
              ((t = n(e)) &&
                ("function" !=
                  typeof (i = d.call(t, "constructor") && t.constructor) ||
                  u.call(i) !== p))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, i) {
            y(e, { nonce: t && t.nonce }, i);
          },
          each: function (e, t) {
            var i,
              n = 0;
            if (x(e))
              for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
            return e;
          },
          text: function (e) {
            var t,
              i = "",
              n = 0,
              o = e.nodeType;
            if (!o) for (; (t = e[n++]); ) i += T.text(t);
            return 1 === o || 11 === o
              ? e.textContent
              : 9 === o
                ? e.documentElement.textContent
                : 3 === o || 4 === o
                  ? e.nodeValue
                  : i;
          },
          makeArray: function (e, t) {
            var i = t || [];
            return (
              null != e &&
                (x(Object(e))
                  ? T.merge(i, "string" == typeof e ? [e] : e)
                  : r.call(i, e)),
              i
            );
          },
          inArray: function (e, t, i) {
            return null == t ? -1 : a.call(t, e, i);
          },
          isXMLDoc: function (e) {
            var t = e && e.namespaceURI,
              i = e && (e.ownerDocument || e).documentElement;
            return !_.test(t || (i && i.nodeName) || "HTML");
          },
          merge: function (e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i; n++)
              e[o++] = t[n];
            return (e.length = o), e;
          },
          grep: function (e, t, i) {
            for (var n = [], o = 0, s = e.length, r = !i; o < s; o++)
              !t(e[o], o) !== r && n.push(e[o]);
            return n;
          },
          map: function (e, t, i) {
            var n,
              o,
              r = 0,
              a = [];
            if (x(e))
              for (n = e.length; r < n; r++)
                null != (o = t(e[r], r, i)) && a.push(o);
            else for (r in e) null != (o = t(e[r], r, i)) && a.push(o);
            return s(a);
          },
          guid: 1,
          support: f,
        }),
        "function" == typeof Symbol &&
          (T.fn[Symbol.iterator] = i[Symbol.iterator]),
        T.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " ",
          ),
          function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
          },
        );
      var S = i.pop,
        C = i.sort,
        E = i.splice,
        A = "[\\x20\\t\\r\\n\\f]",
        $ = new RegExp("^" + A + "+|((?:^|[^\\\\])(?:\\\\.)*)" + A + "+$", "g");
      T.contains = function (e, t) {
        var i = t && t.parentNode;
        return (
          e === i ||
          !(
            !i ||
            1 !== i.nodeType ||
            !(e.contains
              ? e.contains(i)
              : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))
          )
        );
      };
      var O = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function L(e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      }
      T.escapeSelector = function (e) {
        return (e + "").replace(O, L);
      };
      var D = m,
        j = r;
      !(function () {
        var t,
          n,
          s,
          r,
          l,
          c,
          u,
          p,
          h,
          g,
          m = j,
          v = T.expando,
          y = 0,
          b = 0,
          w = ee(),
          _ = ee(),
          x = ee(),
          O = ee(),
          L = function (e, t) {
            return e === t && (l = !0), 0;
          },
          N =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          P =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            A +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          H =
            "\\[" +
            A +
            "*(" +
            P +
            ")(?:" +
            A +
            "*([*^$|!~]?=)" +
            A +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            P +
            "))|)" +
            A +
            "*\\]",
          I =
            ":(" +
            P +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            H +
            ")*)|.*)\\)|)",
          M = new RegExp(A + "+", "g"),
          q = new RegExp("^" + A + "*," + A + "*"),
          R = new RegExp("^" + A + "*([>+~]|" + A + ")" + A + "*"),
          W = new RegExp(A + "|>"),
          z = new RegExp(I),
          B = new RegExp("^" + P + "$"),
          F = {
            ID: new RegExp("^#(" + P + ")"),
            CLASS: new RegExp("^\\.(" + P + ")"),
            TAG: new RegExp("^(" + P + "|[*])"),
            ATTR: new RegExp("^" + H),
            PSEUDO: new RegExp("^" + I),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                A +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                A +
                "*(?:([+-]|)" +
                A +
                "*(\\d+)|))" +
                A +
                "*\\)|)",
              "i",
            ),
            bool: new RegExp("^(?:" + N + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                A +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                A +
                "*((?:-\\d)?\\d*)" +
                A +
                "*\\)|)(?=[^-]|$)",
              "i",
            ),
          },
          U = /^(?:input|select|textarea|button)$/i,
          X = /^h\d$/i,
          Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          V = /[+~]/,
          Q = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + A + "?|\\\\([^\\r\\n\\f])",
            "g",
          ),
          K = function (e, t) {
            var i = "0x" + e.slice(1) - 65536;
            return (
              t ||
              (i < 0
                ? String.fromCharCode(i + 65536)
                : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320))
            );
          },
          G = function () {
            le();
          },
          J = pe(
            function (e) {
              return !0 === e.disabled && k(e, "fieldset");
            },
            { dir: "parentNode", next: "legend" },
          );
        try {
          m.apply((i = o.call(D.childNodes)), D.childNodes),
            i[D.childNodes.length].nodeType;
        } catch (t) {
          m = {
            apply: function (e, t) {
              j.apply(e, o.call(t));
            },
            call: function (e) {
              j.apply(e, o.call(arguments, 1));
            },
          };
        }
        function Z(e, t, i, n) {
          var o,
            s,
            r,
            a,
            l,
            d,
            u,
            g = t && t.ownerDocument,
            y = t ? t.nodeType : 9;
          if (
            ((i = i || []),
            "string" != typeof e || !e || (1 !== y && 9 !== y && 11 !== y))
          )
            return i;
          if (!n && (le(t), (t = t || c), p)) {
            if (11 !== y && (l = Y.exec(e)))
              if ((o = l[1])) {
                if (9 === y) {
                  if (!(r = t.getElementById(o))) return i;
                  if (r.id === o) return m.call(i, r), i;
                } else if (
                  g &&
                  (r = g.getElementById(o)) &&
                  Z.contains(t, r) &&
                  r.id === o
                )
                  return m.call(i, r), i;
              } else {
                if (l[2]) return m.apply(i, t.getElementsByTagName(e)), i;
                if ((o = l[3]) && t.getElementsByClassName)
                  return m.apply(i, t.getElementsByClassName(o)), i;
              }
            if (!(O[e + " "] || (h && h.test(e)))) {
              if (((u = e), (g = t), 1 === y && (W.test(e) || R.test(e)))) {
                for (
                  ((g = (V.test(e) && ae(t.parentNode)) || t) == t &&
                    f.scope) ||
                    ((a = t.getAttribute("id"))
                      ? (a = T.escapeSelector(a))
                      : t.setAttribute("id", (a = v))),
                    s = (d = de(e)).length;
                  s--;

                )
                  d[s] = (a ? "#" + a : ":scope") + " " + ue(d[s]);
                u = d.join(",");
              }
              try {
                return m.apply(i, g.querySelectorAll(u)), i;
              } catch (t) {
                O(e, !0);
              } finally {
                a === v && t.removeAttribute("id");
              }
            }
          }
          return ye(e.replace($, "$1"), t, i, n);
        }
        function ee() {
          var e = [];
          return function t(i, o) {
            return (
              e.push(i + " ") > n.cacheLength && delete t[e.shift()],
              (t[i + " "] = o)
            );
          };
        }
        function te(e) {
          return (e[v] = !0), e;
        }
        function ie(e) {
          var t = c.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function ne(e) {
          return function (t) {
            return k(t, "input") && t.type === e;
          };
        }
        function oe(e) {
          return function (t) {
            return (k(t, "input") || k(t, "button")) && t.type === e;
          };
        }
        function se(e) {
          return function (t) {
            return "form" in t
              ? t.parentNode && !1 === t.disabled
                ? "label" in t
                  ? "label" in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && J(t) === e)
                : t.disabled === e
              : "label" in t && t.disabled === e;
          };
        }
        function re(e) {
          return te(function (t) {
            return (
              (t = +t),
              te(function (i, n) {
                for (var o, s = e([], i.length, t), r = s.length; r--; )
                  i[(o = s[r])] && (i[o] = !(n[o] = i[o]));
              })
            );
          });
        }
        function ae(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        function le(e) {
          var t,
            i = e ? e.ownerDocument || e : D;
          return (
            i != c &&
              9 === i.nodeType &&
              i.documentElement &&
              ((u = (c = i).documentElement),
              (p = !T.isXMLDoc(c)),
              (g = u.matches || u.webkitMatchesSelector || u.msMatchesSelector),
              u.msMatchesSelector &&
                D != c &&
                (t = c.defaultView) &&
                t.top !== t &&
                t.addEventListener("unload", G),
              (f.getById = ie(function (e) {
                return (
                  (u.appendChild(e).id = T.expando),
                  !c.getElementsByName || !c.getElementsByName(T.expando).length
                );
              })),
              (f.disconnectedMatch = ie(function (e) {
                return g.call(e, "*");
              })),
              (f.scope = ie(function () {
                return c.querySelectorAll(":scope");
              })),
              (f.cssHas = ie(function () {
                try {
                  return c.querySelector(":has(*,:jqfake)"), !1;
                } catch (e) {
                  return !0;
                }
              })),
              f.getById
                ? ((n.filter.ID = function (e) {
                    var t = e.replace(Q, K);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (n.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && p) {
                      var i = t.getElementById(e);
                      return i ? [i] : [];
                    }
                  }))
                : ((n.filter.ID = function (e) {
                    var t = e.replace(Q, K);
                    return function (e) {
                      var i =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return i && i.value === t;
                    };
                  }),
                  (n.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && p) {
                      var i,
                        n,
                        o,
                        s = t.getElementById(e);
                      if (s) {
                        if ((i = s.getAttributeNode("id")) && i.value === e)
                          return [s];
                        for (o = t.getElementsByName(e), n = 0; (s = o[n++]); )
                          if ((i = s.getAttributeNode("id")) && i.value === e)
                            return [s];
                      }
                      return [];
                    }
                  })),
              (n.find.TAG = function (e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : t.querySelectorAll(e);
              }),
              (n.find.CLASS = function (e, t) {
                if (void 0 !== t.getElementsByClassName && p)
                  return t.getElementsByClassName(e);
              }),
              (h = []),
              ie(function (e) {
                var t;
                (u.appendChild(e).innerHTML =
                  "<a id='" +
                  v +
                  "' href='' disabled='disabled'></a><select id='" +
                  v +
                  "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                  e.querySelectorAll("[selected]").length ||
                    h.push("\\[" + A + "*(?:value|" + N + ")"),
                  e.querySelectorAll("[id~=" + v + "-]").length || h.push("~="),
                  e.querySelectorAll("a#" + v + "+*").length ||
                    h.push(".#.+[+~]"),
                  e.querySelectorAll(":checked").length || h.push(":checked"),
                  (t = c.createElement("input")).setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  (u.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    h.push(":enabled", ":disabled"),
                  (t = c.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    h.push("\\[" + A + "*name" + A + "*=" + A + "*(?:''|\"\")");
              }),
              f.cssHas || h.push(":has"),
              (h = h.length && new RegExp(h.join("|"))),
              (L = function (e, t) {
                if (e === t) return (l = !0), 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  i ||
                  (1 &
                    (i =
                      (e.ownerDocument || e) == (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!f.sortDetached && t.compareDocumentPosition(e) === i)
                    ? e === c || (e.ownerDocument == D && Z.contains(D, e))
                      ? -1
                      : t === c || (t.ownerDocument == D && Z.contains(D, t))
                        ? 1
                        : r
                          ? a.call(r, e) - a.call(r, t)
                          : 0
                    : 4 & i
                      ? -1
                      : 1)
                );
              })),
            c
          );
        }
        for (t in ((Z.matches = function (e, t) {
          return Z(e, null, null, t);
        }),
        (Z.matchesSelector = function (e, t) {
          if ((le(e), p && !O[t + " "] && (!h || !h.test(t))))
            try {
              var i = g.call(e, t);
              if (
                i ||
                f.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return i;
            } catch (e) {
              O(t, !0);
            }
          return 0 < Z(t, c, null, [e]).length;
        }),
        (Z.contains = function (e, t) {
          return (e.ownerDocument || e) != c && le(e), T.contains(e, t);
        }),
        (Z.attr = function (e, t) {
          (e.ownerDocument || e) != c && le(e);
          var i = n.attrHandle[t.toLowerCase()],
            o =
              i && d.call(n.attrHandle, t.toLowerCase()) ? i(e, t, !p) : void 0;
          return void 0 !== o ? o : e.getAttribute(t);
        }),
        (Z.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (T.uniqueSort = function (e) {
          var t,
            i = [],
            n = 0,
            s = 0;
          if (
            ((l = !f.sortStable),
            (r = !f.sortStable && o.call(e, 0)),
            C.call(e, L),
            l)
          ) {
            for (; (t = e[s++]); ) t === e[s] && (n = i.push(s));
            for (; n--; ) E.call(e, i[n], 1);
          }
          return (r = null), e;
        }),
        (T.fn.uniqueSort = function () {
          return this.pushStack(T.uniqueSort(o.apply(this)));
        }),
        ((n = T.expr =
          {
            cacheLength: 50,
            createPseudo: te,
            match: F,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(Q, K)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(Q, K)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || Z.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && Z.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  i = !e[6] && e[2];
                return F.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : i &&
                        z.test(i) &&
                        (t = de(i, !0)) &&
                        (t = i.indexOf(")", i.length - t) - i.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(Q, K).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return k(e, t);
                    };
              },
              CLASS: function (e) {
                var t = w[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + A + ")" + e + "(" + A + "|$)")) &&
                    w(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          "",
                      );
                    }))
                );
              },
              ATTR: function (e, t, i) {
                return function (n) {
                  var o = Z.attr(n, e);
                  return null == o
                    ? "!=" === t
                    : !t ||
                        ((o += ""),
                        "=" === t
                          ? o === i
                          : "!=" === t
                            ? o !== i
                            : "^=" === t
                              ? i && 0 === o.indexOf(i)
                              : "*=" === t
                                ? i && -1 < o.indexOf(i)
                                : "$=" === t
                                  ? i && o.slice(-i.length) === i
                                  : "~=" === t
                                    ? -1 <
                                      (" " + o.replace(M, " ") + " ").indexOf(i)
                                    : "|=" === t &&
                                      (o === i ||
                                        o.slice(0, i.length + 1) === i + "-"));
                };
              },
              CHILD: function (e, t, i, n, o) {
                var s = "nth" !== e.slice(0, 3),
                  r = "last" !== e.slice(-4),
                  a = "of-type" === t;
                return 1 === n && 0 === o
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, i, l) {
                      var c,
                        d,
                        u,
                        p,
                        f,
                        h = s !== r ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        m = a && t.nodeName.toLowerCase(),
                        b = !l && !a,
                        w = !1;
                      if (g) {
                        if (s) {
                          for (; h; ) {
                            for (u = t; (u = u[h]); )
                              if (a ? k(u, m) : 1 === u.nodeType) return !1;
                            f = h = "only" === e && !f && "nextSibling";
                          }
                          return !0;
                        }
                        if (((f = [r ? g.firstChild : g.lastChild]), r && b)) {
                          for (
                            w =
                              (p =
                                (c = (d = g[v] || (g[v] = {}))[e] || [])[0] ===
                                  y && c[1]) && c[2],
                              u = p && g.childNodes[p];
                            (u = (++p && u && u[h]) || (w = p = 0) || f.pop());

                          )
                            if (1 === u.nodeType && ++w && u === t) {
                              d[e] = [y, p, w];
                              break;
                            }
                        } else if (
                          (b &&
                            (w = p =
                              (c = (d = t[v] || (t[v] = {}))[e] || [])[0] ===
                                y && c[1]),
                          !1 === w)
                        )
                          for (
                            ;
                            (u =
                              (++p && u && u[h]) || (w = p = 0) || f.pop()) &&
                            (!(a ? k(u, m) : 1 === u.nodeType) ||
                              !++w ||
                              (b && ((d = u[v] || (u[v] = {}))[e] = [y, w]),
                              u !== t));

                          );
                        return (w -= o) === n || (w % n == 0 && 0 <= w / n);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var i,
                  o =
                    n.pseudos[e] ||
                    n.setFilters[e.toLowerCase()] ||
                    Z.error("unsupported pseudo: " + e);
                return o[v]
                  ? o(t)
                  : 1 < o.length
                    ? ((i = [e, e, "", t]),
                      n.setFilters.hasOwnProperty(e.toLowerCase())
                        ? te(function (e, i) {
                            for (var n, s = o(e, t), r = s.length; r--; )
                              e[(n = a.call(e, s[r]))] = !(i[n] = s[r]);
                          })
                        : function (e) {
                            return o(e, 0, i);
                          })
                    : o;
              },
            },
            pseudos: {
              not: te(function (e) {
                var t = [],
                  i = [],
                  n = ve(e.replace($, "$1"));
                return n[v]
                  ? te(function (e, t, i, o) {
                      for (var s, r = n(e, null, o, []), a = e.length; a--; )
                        (s = r[a]) && (e[a] = !(t[a] = s));
                    })
                  : function (e, o, s) {
                      return (
                        (t[0] = e), n(t, null, s, i), (t[0] = null), !i.pop()
                      );
                    };
              }),
              has: te(function (e) {
                return function (t) {
                  return 0 < Z(e, t).length;
                };
              }),
              contains: te(function (e) {
                return (
                  (e = e.replace(Q, K)),
                  function (t) {
                    return -1 < (t.textContent || T.text(t)).indexOf(e);
                  }
                );
              }),
              lang: te(function (e) {
                return (
                  B.test(e || "") || Z.error("unsupported lang: " + e),
                  (e = e.replace(Q, K).toLowerCase()),
                  function (t) {
                    var i;
                    do {
                      if (
                        (i = p
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (i = i.toLowerCase()) === e ||
                          0 === i.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var i = e.location && e.location.hash;
                return i && i.slice(1) === t.id;
              },
              root: function (e) {
                return e === u;
              },
              focus: function (e) {
                return (
                  e ===
                    (function () {
                      try {
                        return c.activeElement;
                      } catch (e) {}
                    })() &&
                  c.hasFocus() &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: se(!1),
              disabled: se(!0),
              checked: function (e) {
                return (
                  (k(e, "input") && !!e.checked) ||
                  (k(e, "option") && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !n.pseudos.empty(e);
              },
              header: function (e) {
                return X.test(e.nodeName);
              },
              input: function (e) {
                return U.test(e.nodeName);
              },
              button: function (e) {
                return (k(e, "input") && "button" === e.type) || k(e, "button");
              },
              text: function (e) {
                var t;
                return (
                  k(e, "input") &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: re(function () {
                return [0];
              }),
              last: re(function (e, t) {
                return [t - 1];
              }),
              eq: re(function (e, t, i) {
                return [i < 0 ? i + t : i];
              }),
              even: re(function (e, t) {
                for (var i = 0; i < t; i += 2) e.push(i);
                return e;
              }),
              odd: re(function (e, t) {
                for (var i = 1; i < t; i += 2) e.push(i);
                return e;
              }),
              lt: re(function (e, t, i) {
                var n;
                for (n = i < 0 ? i + t : t < i ? t : i; 0 <= --n; ) e.push(n);
                return e;
              }),
              gt: re(function (e, t, i) {
                for (var n = i < 0 ? i + t : i; ++n < t; ) e.push(n);
                return e;
              }),
            },
          }).pseudos.nth = n.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          n.pseudos[t] = ne(t);
        for (t in { submit: !0, reset: !0 }) n.pseudos[t] = oe(t);
        function ce() {}
        function de(e, t) {
          var i,
            o,
            s,
            r,
            a,
            l,
            c,
            d = _[e + " "];
          if (d) return t ? 0 : d.slice(0);
          for (a = e, l = [], c = n.preFilter; a; ) {
            for (r in ((i && !(o = q.exec(a))) ||
              (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
            (i = !1),
            (o = R.exec(a)) &&
              ((i = o.shift()),
              s.push({ value: i, type: o[0].replace($, " ") }),
              (a = a.slice(i.length))),
            n.filter))
              !(o = F[r].exec(a)) ||
                (c[r] && !(o = c[r](o))) ||
                ((i = o.shift()),
                s.push({ value: i, type: r, matches: o }),
                (a = a.slice(i.length)));
            if (!i) break;
          }
          return t ? a.length : a ? Z.error(e) : _(e, l).slice(0);
        }
        function ue(e) {
          for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
          return n;
        }
        function pe(e, t, i) {
          var n = t.dir,
            o = t.next,
            s = o || n,
            r = i && "parentNode" === s,
            a = b++;
          return t.first
            ? function (t, i, o) {
                for (; (t = t[n]); )
                  if (1 === t.nodeType || r) return e(t, i, o);
                return !1;
              }
            : function (t, i, l) {
                var c,
                  d,
                  u = [y, a];
                if (l) {
                  for (; (t = t[n]); )
                    if ((1 === t.nodeType || r) && e(t, i, l)) return !0;
                } else
                  for (; (t = t[n]); )
                    if (1 === t.nodeType || r)
                      if (((d = t[v] || (t[v] = {})), o && k(t, o)))
                        t = t[n] || t;
                      else {
                        if ((c = d[s]) && c[0] === y && c[1] === a)
                          return (u[2] = c[2]);
                        if (((d[s] = u)[2] = e(t, i, l))) return !0;
                      }
                return !1;
              };
        }
        function fe(e) {
          return 1 < e.length
            ? function (t, i, n) {
                for (var o = e.length; o--; ) if (!e[o](t, i, n)) return !1;
                return !0;
              }
            : e[0];
        }
        function he(e, t, i, n, o) {
          for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)
            (s = e[a]) && ((i && !i(s, n, o)) || (r.push(s), c && t.push(a)));
          return r;
        }
        function ge(e, t, i, n, o, s) {
          return (
            n && !n[v] && (n = ge(n)),
            o && !o[v] && (o = ge(o, s)),
            te(function (s, r, l, c) {
              var d,
                u,
                p,
                f,
                h = [],
                g = [],
                v = r.length,
                y =
                  s ||
                  (function (e, t, i) {
                    for (var n = 0, o = t.length; n < o; n++) Z(e, t[n], i);
                    return i;
                  })(t || "*", l.nodeType ? [l] : l, []),
                b = !e || (!s && t) ? y : he(y, h, e, l, c);
              if (
                (i ? i(b, (f = o || (s ? e : v || n) ? [] : r), l, c) : (f = b),
                n)
              )
                for (d = he(f, g), n(d, [], l, c), u = d.length; u--; )
                  (p = d[u]) && (f[g[u]] = !(b[g[u]] = p));
              if (s) {
                if (o || e) {
                  if (o) {
                    for (d = [], u = f.length; u--; )
                      (p = f[u]) && d.push((b[u] = p));
                    o(null, (f = []), d, c);
                  }
                  for (u = f.length; u--; )
                    (p = f[u]) &&
                      -1 < (d = o ? a.call(s, p) : h[u]) &&
                      (s[d] = !(r[d] = p));
                }
              } else
                (f = he(f === r ? f.splice(v, f.length) : f)),
                  o ? o(null, r, f, c) : m.apply(r, f);
            })
          );
        }
        function me(e) {
          for (
            var t,
              i,
              o,
              r = e.length,
              l = n.relative[e[0].type],
              c = l || n.relative[" "],
              d = l ? 1 : 0,
              u = pe(
                function (e) {
                  return e === t;
                },
                c,
                !0,
              ),
              p = pe(
                function (e) {
                  return -1 < a.call(t, e);
                },
                c,
                !0,
              ),
              f = [
                function (e, i, n) {
                  var o =
                    (!l && (n || i != s)) ||
                    ((t = i).nodeType ? u(e, i, n) : p(e, i, n));
                  return (t = null), o;
                },
              ];
            d < r;
            d++
          )
            if ((i = n.relative[e[d].type])) f = [pe(fe(f), i)];
            else {
              if ((i = n.filter[e[d].type].apply(null, e[d].matches))[v]) {
                for (o = ++d; o < r && !n.relative[e[o].type]; o++);
                return ge(
                  1 < d && fe(f),
                  1 < d &&
                    ue(
                      e
                        .slice(0, d - 1)
                        .concat({ value: " " === e[d - 2].type ? "*" : "" }),
                    ).replace($, "$1"),
                  i,
                  d < o && me(e.slice(d, o)),
                  o < r && me((e = e.slice(o))),
                  o < r && ue(e),
                );
              }
              f.push(i);
            }
          return fe(f);
        }
        function ve(e, t) {
          var i,
            o,
            r,
            a,
            l,
            d,
            u = [],
            f = [],
            h = x[e + " "];
          if (!h) {
            for (t || (t = de(e)), i = t.length; i--; )
              (h = me(t[i]))[v] ? u.push(h) : f.push(h);
            (h = x(
              e,
              ((o = f),
              (a = 0 < (r = u).length),
              (l = 0 < o.length),
              (d = function (e, t, i, d, u) {
                var f,
                  h,
                  g,
                  v = 0,
                  b = "0",
                  w = e && [],
                  _ = [],
                  x = s,
                  k = e || (l && n.find.TAG("*", u)),
                  C = (y += null == x ? 1 : Math.random() || 0.1),
                  E = k.length;
                for (
                  u && (s = t == c || t || u);
                  b !== E && null != (f = k[b]);
                  b++
                ) {
                  if (l && f) {
                    for (
                      h = 0, t || f.ownerDocument == c || (le(f), (i = !p));
                      (g = o[h++]);

                    )
                      if (g(f, t || c, i)) {
                        m.call(d, f);
                        break;
                      }
                    u && (y = C);
                  }
                  a && ((f = !g && f) && v--, e && w.push(f));
                }
                if (((v += b), a && b !== v)) {
                  for (h = 0; (g = r[h++]); ) g(w, _, t, i);
                  if (e) {
                    if (0 < v) for (; b--; ) w[b] || _[b] || (_[b] = S.call(d));
                    _ = he(_);
                  }
                  m.apply(d, _),
                    u &&
                      !e &&
                      0 < _.length &&
                      1 < v + r.length &&
                      T.uniqueSort(d);
                }
                return u && ((y = C), (s = x)), w;
              }),
              a ? te(d) : d),
            )).selector = e;
          }
          return h;
        }
        function ye(e, t, i, o) {
          var s,
            r,
            a,
            l,
            c,
            d = "function" == typeof e && e,
            u = !o && de((e = d.selector || e));
          if (((i = i || []), 1 === u.length)) {
            if (
              2 < (r = u[0] = u[0].slice(0)).length &&
              "ID" === (a = r[0]).type &&
              9 === t.nodeType &&
              p &&
              n.relative[r[1].type]
            ) {
              if (!(t = (n.find.ID(a.matches[0].replace(Q, K), t) || [])[0]))
                return i;
              d && (t = t.parentNode), (e = e.slice(r.shift().value.length));
            }
            for (
              s = F.needsContext.test(e) ? 0 : r.length;
              s-- && ((a = r[s]), !n.relative[(l = a.type)]);

            )
              if (
                (c = n.find[l]) &&
                (o = c(
                  a.matches[0].replace(Q, K),
                  (V.test(r[0].type) && ae(t.parentNode)) || t,
                ))
              ) {
                if ((r.splice(s, 1), !(e = o.length && ue(r))))
                  return m.apply(i, o), i;
                break;
              }
          }
          return (
            (d || ve(e, u))(
              o,
              t,
              !p,
              i,
              !t || (V.test(e) && ae(t.parentNode)) || t,
            ),
            i
          );
        }
        (ce.prototype = n.filters = n.pseudos),
          (n.setFilters = new ce()),
          (f.sortStable = v.split("").sort(L).join("") === v),
          le(),
          (f.sortDetached = ie(function (e) {
            return 1 & e.compareDocumentPosition(c.createElement("fieldset"));
          })),
          (T.find = Z),
          (T.expr[":"] = T.expr.pseudos),
          (T.unique = T.uniqueSort),
          (Z.compile = ve),
          (Z.select = ye),
          (Z.setDocument = le),
          (Z.tokenize = de),
          (Z.escape = T.escapeSelector),
          (Z.getText = T.text),
          (Z.isXML = T.isXMLDoc),
          (Z.selectors = T.expr),
          (Z.support = T.support),
          (Z.uniqueSort = T.uniqueSort);
      })();
      var N = function (e, t, i) {
          for (var n = [], o = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (o && T(e).is(i)) break;
              n.push(e);
            }
          return n;
        },
        P = function (e, t) {
          for (var i = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && i.push(e);
          return i;
        },
        H = T.expr.match.needsContext,
        I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function M(e, t, i) {
        return h(t)
          ? T.grep(e, function (e, n) {
              return !!t.call(e, n, e) !== i;
            })
          : t.nodeType
            ? T.grep(e, function (e) {
                return (e === t) !== i;
              })
            : "string" != typeof t
              ? T.grep(e, function (e) {
                  return -1 < a.call(t, e) !== i;
                })
              : T.filter(t, e, i);
      }
      (T.filter = function (e, t, i) {
        var n = t[0];
        return (
          i && (e = ":not(" + e + ")"),
          1 === t.length && 1 === n.nodeType
            ? T.find.matchesSelector(n, e)
              ? [n]
              : []
            : T.find.matches(
                e,
                T.grep(t, function (e) {
                  return 1 === e.nodeType;
                }),
              )
        );
      }),
        T.fn.extend({
          find: function (e) {
            var t,
              i,
              n = this.length,
              o = this;
            if ("string" != typeof e)
              return this.pushStack(
                T(e).filter(function () {
                  for (t = 0; t < n; t++) if (T.contains(o[t], this)) return !0;
                }),
              );
            for (i = this.pushStack([]), t = 0; t < n; t++) T.find(e, o[t], i);
            return 1 < n ? T.uniqueSort(i) : i;
          },
          filter: function (e) {
            return this.pushStack(M(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(M(this, e || [], !0));
          },
          is: function (e) {
            return !!M(
              this,
              "string" == typeof e && H.test(e) ? T(e) : e || [],
              !1,
            ).length;
          },
        });
      var q,
        R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (e, t, i) {
        var n, o;
        if (!e) return this;
        if (((i = i || q), "string" == typeof e)) {
          if (
            !(n =
              "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                ? [null, e, null]
                : R.exec(e)) ||
            (!n[1] && t)
          )
            return !t || t.jquery
              ? (t || i).find(e)
              : this.constructor(t).find(e);
          if (n[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(
                this,
                T.parseHTML(
                  n[1],
                  t && t.nodeType ? t.ownerDocument || t : m,
                  !0,
                ),
              ),
              I.test(n[1]) && T.isPlainObject(t))
            )
              for (n in t) h(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this;
          }
          return (
            (o = m.getElementById(n[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : h(e)
            ? void 0 !== i.ready
              ? i.ready(e)
              : e(T)
            : T.makeArray(e, this);
      }).prototype = T.fn),
        (q = T(m));
      var W = /^(?:parents|prev(?:Until|All))/,
        z = { children: !0, contents: !0, next: !0, prev: !0 };
      function B(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      T.fn.extend({
        has: function (e) {
          var t = T(e, this),
            i = t.length;
          return this.filter(function () {
            for (var e = 0; e < i; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var i,
            n = 0,
            o = this.length,
            s = [],
            r = "string" != typeof e && T(e);
          if (!H.test(e))
            for (; n < o; n++)
              for (i = this[n]; i && i !== t; i = i.parentNode)
                if (
                  i.nodeType < 11 &&
                  (r
                    ? -1 < r.index(i)
                    : 1 === i.nodeType && T.find.matchesSelector(i, e))
                ) {
                  s.push(i);
                  break;
                }
          return this.pushStack(1 < s.length ? T.uniqueSort(s) : s);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? a.call(T(e), this[0])
              : a.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
        },
        add: function (e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e),
          );
        },
      }),
        T.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return N(e, "parentNode");
            },
            parentsUntil: function (e, t, i) {
              return N(e, "parentNode", i);
            },
            next: function (e) {
              return B(e, "nextSibling");
            },
            prev: function (e) {
              return B(e, "previousSibling");
            },
            nextAll: function (e) {
              return N(e, "nextSibling");
            },
            prevAll: function (e) {
              return N(e, "previousSibling");
            },
            nextUntil: function (e, t, i) {
              return N(e, "nextSibling", i);
            },
            prevUntil: function (e, t, i) {
              return N(e, "previousSibling", i);
            },
            siblings: function (e) {
              return P((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return P(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && n(e.contentDocument)
                ? e.contentDocument
                : (k(e, "template") && (e = e.content || e),
                  T.merge([], e.childNodes));
            },
          },
          function (e, t) {
            T.fn[e] = function (i, n) {
              var o = T.map(this, t, i);
              return (
                "Until" !== e.slice(-5) && (n = i),
                n && "string" == typeof n && (o = T.filter(n, o)),
                1 < this.length &&
                  (z[e] || T.uniqueSort(o), W.test(e) && o.reverse()),
                this.pushStack(o)
              );
            };
          },
        );
      var F = /[^\x20\t\r\n\f]+/g;
      function U(e) {
        return e;
      }
      function X(e) {
        throw e;
      }
      function Y(e, t, i, n) {
        var o;
        try {
          e && h((o = e.promise))
            ? o.call(e).done(t).fail(i)
            : e && h((o = e.then))
              ? o.call(e, t, i)
              : t.apply(void 0, [e].slice(n));
        } catch (e) {
          i.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function (e) {
        var t, i;
        e =
          "string" == typeof e
            ? ((t = e),
              (i = {}),
              T.each(t.match(F) || [], function (e, t) {
                i[t] = !0;
              }),
              i)
            : T.extend({}, e);
        var n,
          o,
          s,
          r,
          a = [],
          l = [],
          c = -1,
          d = function () {
            for (r = r || e.once, s = n = !0; l.length; c = -1)
              for (o = l.shift(); ++c < a.length; )
                !1 === a[c].apply(o[0], o[1]) &&
                  e.stopOnFalse &&
                  ((c = a.length), (o = !1));
            e.memory || (o = !1), (n = !1), r && (a = o ? [] : "");
          },
          u = {
            add: function () {
              return (
                a &&
                  (o && !n && ((c = a.length - 1), l.push(o)),
                  (function t(i) {
                    T.each(i, function (i, n) {
                      h(n)
                        ? (e.unique && u.has(n)) || a.push(n)
                        : n && n.length && "string" !== b(n) && t(n);
                    });
                  })(arguments),
                  o && !n && d()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (e, t) {
                  for (var i; -1 < (i = T.inArray(t, a, i)); )
                    a.splice(i, 1), i <= c && c--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? -1 < T.inArray(e, a) : 0 < a.length;
            },
            empty: function () {
              return a && (a = []), this;
            },
            disable: function () {
              return (r = l = []), (a = o = ""), this;
            },
            disabled: function () {
              return !a;
            },
            lock: function () {
              return (r = l = []), o || n || (a = o = ""), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (e, t) {
              return (
                r ||
                  ((t = [e, (t = t || []).slice ? t.slice() : t]),
                  l.push(t),
                  n || d()),
                this
              );
            },
            fire: function () {
              return u.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!s;
            },
          };
        return u;
      }),
        T.extend({
          Deferred: function (t) {
            var i = [
                [
                  "notify",
                  "progress",
                  T.Callbacks("memory"),
                  T.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              n = "pending",
              o = {
                state: function () {
                  return n;
                },
                always: function () {
                  return s.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return o.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return T.Deferred(function (t) {
                    T.each(i, function (i, n) {
                      var o = h(e[n[4]]) && e[n[4]];
                      s[n[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && h(e.promise)
                          ? e
                              .promise()
                              .progress(t.notify)
                              .done(t.resolve)
                              .fail(t.reject)
                          : t[n[0] + "With"](this, o ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (t, n, o) {
                  var s = 0;
                  function r(t, i, n, o) {
                    return function () {
                      var a = this,
                        l = arguments,
                        c = function () {
                          var e, c;
                          if (!(t < s)) {
                            if ((e = n.apply(a, l)) === i.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              e &&
                              ("object" == typeof e ||
                                "function" == typeof e) &&
                              e.then),
                              h(c)
                                ? o
                                  ? c.call(e, r(s, i, U, o), r(s, i, X, o))
                                  : (s++,
                                    c.call(
                                      e,
                                      r(s, i, U, o),
                                      r(s, i, X, o),
                                      r(s, i, U, i.notifyWith),
                                    ))
                                : (n !== U && ((a = void 0), (l = [e])),
                                  (o || i.resolveWith)(a, l));
                          }
                        },
                        d = o
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (e) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(e, d.error),
                                  s <= t + 1 &&
                                    (n !== X && ((a = void 0), (l = [e])),
                                    i.rejectWith(a, l));
                              }
                            };
                      t
                        ? d()
                        : (T.Deferred.getErrorHook
                            ? (d.error = T.Deferred.getErrorHook())
                            : T.Deferred.getStackHook &&
                              (d.error = T.Deferred.getStackHook()),
                          e.setTimeout(d));
                    };
                  }
                  return T.Deferred(function (e) {
                    i[0][3].add(r(0, e, h(o) ? o : U, e.notifyWith)),
                      i[1][3].add(r(0, e, h(t) ? t : U)),
                      i[2][3].add(r(0, e, h(n) ? n : X));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? T.extend(e, o) : o;
                },
              },
              s = {};
            return (
              T.each(i, function (e, t) {
                var r = t[2],
                  a = t[5];
                (o[t[1]] = r.add),
                  a &&
                    r.add(
                      function () {
                        n = a;
                      },
                      i[3 - e][2].disable,
                      i[3 - e][3].disable,
                      i[0][2].lock,
                      i[0][3].lock,
                    ),
                  r.add(t[3].fire),
                  (s[t[0]] = function () {
                    return (
                      s[t[0] + "With"](this === s ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (s[t[0] + "With"] = r.fireWith);
              }),
              o.promise(s),
              t && t.call(s, s),
              s
            );
          },
          when: function (e) {
            var t = arguments.length,
              i = t,
              n = Array(i),
              s = o.call(arguments),
              r = T.Deferred(),
              a = function (e) {
                return function (i) {
                  (n[e] = this),
                    (s[e] = 1 < arguments.length ? o.call(arguments) : i),
                    --t || r.resolveWith(n, s);
                };
              };
            if (
              t <= 1 &&
              (Y(e, r.done(a(i)).resolve, r.reject, !t),
              "pending" === r.state() || h(s[i] && s[i].then))
            )
              return r.then();
            for (; i--; ) Y(s[i], a(i), r.reject);
            return r.promise();
          },
        });
      var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (t, i) {
        e.console &&
          e.console.warn &&
          t &&
          V.test(t.name) &&
          e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
      }),
        (T.readyException = function (t) {
          e.setTimeout(function () {
            throw t;
          });
        });
      var Q = T.Deferred();
      function K() {
        m.removeEventListener("DOMContentLoaded", K),
          e.removeEventListener("load", K),
          T.ready();
      }
      (T.fn.ready = function (e) {
        return (
          Q.then(e).catch(function (e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0) !== e && 0 < --T.readyWait) ||
              Q.resolveWith(m, [T]);
          },
        }),
        (T.ready.then = Q.then),
        "complete" === m.readyState ||
        ("loading" !== m.readyState && !m.documentElement.doScroll)
          ? e.setTimeout(T.ready)
          : (m.addEventListener("DOMContentLoaded", K),
            e.addEventListener("load", K));
      var G = function (e, t, i, n, o, s, r) {
          var a = 0,
            l = e.length,
            c = null == i;
          if ("object" === b(i))
            for (a in ((o = !0), i)) G(e, t, a, i[a], !0, s, r);
          else if (
            void 0 !== n &&
            ((o = !0),
            h(n) || (r = !0),
            c &&
              (r
                ? (t.call(e, n), (t = null))
                : ((c = t),
                  (t = function (e, t, i) {
                    return c.call(T(e), i);
                  }))),
            t)
          )
            for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
          return o ? e : c ? t.call(e) : l ? t(e[0], i) : s;
        },
        J = /^-ms-/,
        Z = /-([a-z])/g;
      function ee(e, t) {
        return t.toUpperCase();
      }
      function te(e) {
        return e.replace(J, "ms-").replace(Z, ee);
      }
      var ie = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function ne() {
        this.expando = T.expando + ne.uid++;
      }
      (ne.uid = 1),
        (ne.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                ie(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, i) {
            var n,
              o = this.cache(e);
            if ("string" == typeof t) o[te(t)] = i;
            else for (n in t) o[te(n)] = t[n];
            return o;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][te(t)];
          },
          access: function (e, t, i) {
            return void 0 === t || (t && "string" == typeof t && void 0 === i)
              ? this.get(e, t)
              : (this.set(e, t, i), void 0 !== i ? i : t);
          },
          remove: function (e, t) {
            var i,
              n = e[this.expando];
            if (void 0 !== n) {
              if (void 0 !== t) {
                i = (t = Array.isArray(t)
                  ? t.map(te)
                  : (t = te(t)) in n
                    ? [t]
                    : t.match(F) || []).length;
                for (; i--; ) delete n[t[i]];
              }
              (void 0 === t || T.isEmptyObject(n)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          },
        });
      var oe = new ne(),
        se = new ne(),
        re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ae = /[A-Z]/g;
      function le(e, t, i) {
        var n, o;
        if (void 0 === i && 1 === e.nodeType)
          if (
            ((n = "data-" + t.replace(ae, "-$&").toLowerCase()),
            "string" == typeof (i = e.getAttribute(n)))
          ) {
            try {
              i =
                "true" === (o = i) ||
                ("false" !== o &&
                  ("null" === o
                    ? null
                    : o === +o + ""
                      ? +o
                      : re.test(o)
                        ? JSON.parse(o)
                        : o));
            } catch (e) {}
            se.set(e, t, i);
          } else i = void 0;
        return i;
      }
      T.extend({
        hasData: function (e) {
          return se.hasData(e) || oe.hasData(e);
        },
        data: function (e, t, i) {
          return se.access(e, t, i);
        },
        removeData: function (e, t) {
          se.remove(e, t);
        },
        _data: function (e, t, i) {
          return oe.access(e, t, i);
        },
        _removeData: function (e, t) {
          oe.remove(e, t);
        },
      }),
        T.fn.extend({
          data: function (e, t) {
            var i,
              n,
              o,
              s = this[0],
              r = s && s.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((o = se.get(s)),
                1 === s.nodeType && !oe.get(s, "hasDataAttrs"))
              ) {
                for (i = r.length; i--; )
                  r[i] &&
                    0 === (n = r[i].name).indexOf("data-") &&
                    ((n = te(n.slice(5))), le(s, n, o[n]));
                oe.set(s, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof e
              ? this.each(function () {
                  se.set(this, e);
                })
              : G(
                  this,
                  function (t) {
                    var i;
                    if (s && void 0 === t)
                      return void 0 !== (i = se.get(s, e)) ||
                        void 0 !== (i = le(s, e))
                        ? i
                        : void 0;
                    this.each(function () {
                      se.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  1 < arguments.length,
                  null,
                  !0,
                );
          },
          removeData: function (e) {
            return this.each(function () {
              se.remove(this, e);
            });
          },
        }),
        T.extend({
          queue: function (e, t, i) {
            var n;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (n = oe.get(e, t)),
                i &&
                  (!n || Array.isArray(i)
                    ? (n = oe.access(e, t, T.makeArray(i)))
                    : n.push(i)),
                n || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var i = T.queue(e, t),
              n = i.length,
              o = i.shift(),
              s = T._queueHooks(e, t);
            "inprogress" === o && ((o = i.shift()), n--),
              o &&
                ("fx" === t && i.unshift("inprogress"),
                delete s.stop,
                o.call(
                  e,
                  function () {
                    T.dequeue(e, t);
                  },
                  s,
                )),
              !n && s && s.empty.fire();
          },
          _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return (
              oe.get(e, i) ||
              oe.access(e, i, {
                empty: T.Callbacks("once memory").add(function () {
                  oe.remove(e, [t + "queue", i]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (e, t) {
            var i = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), i--),
              arguments.length < i
                ? T.queue(this[0], e)
                : void 0 === t
                  ? this
                  : this.each(function () {
                      var i = T.queue(this, e, t);
                      T._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== i[0] &&
                          T.dequeue(this, e);
                    })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              T.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var i,
              n = 1,
              o = T.Deferred(),
              s = this,
              r = this.length,
              a = function () {
                --n || o.resolveWith(s, [s]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              r--;

            )
              (i = oe.get(s[r], e + "queueHooks")) &&
                i.empty &&
                (n++, i.empty.add(a));
            return a(), o.promise(t);
          },
        });
      var ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        de = new RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
        ue = ["Top", "Right", "Bottom", "Left"],
        pe = m.documentElement,
        fe = function (e) {
          return T.contains(e.ownerDocument, e);
        },
        he = { composed: !0 };
      pe.getRootNode &&
        (fe = function (e) {
          return (
            T.contains(e.ownerDocument, e) ||
            e.getRootNode(he) === e.ownerDocument
          );
        });
      var ge = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && fe(e) && "none" === T.css(e, "display"))
        );
      };
      function me(e, t, i, n) {
        var o,
          s,
          r = 20,
          a = n
            ? function () {
                return n.cur();
              }
            : function () {
                return T.css(e, t, "");
              },
          l = a(),
          c = (i && i[3]) || (T.cssNumber[t] ? "" : "px"),
          d =
            e.nodeType &&
            (T.cssNumber[t] || ("px" !== c && +l)) &&
            de.exec(T.css(e, t));
        if (d && d[3] !== c) {
          for (l /= 2, c = c || d[3], d = +l || 1; r--; )
            T.style(e, t, d + c),
              (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0),
              (d /= s);
          (d *= 2), T.style(e, t, d + c), (i = i || []);
        }
        return (
          i &&
            ((d = +d || +l || 0),
            (o = i[1] ? d + (i[1] + 1) * i[2] : +i[2]),
            n && ((n.unit = c), (n.start = d), (n.end = o))),
          o
        );
      }
      var ve = {};
      function ye(e, t) {
        for (var i, n, o, s, r, a, l, c = [], d = 0, u = e.length; d < u; d++)
          (n = e[d]).style &&
            ((i = n.style.display),
            t
              ? ("none" === i &&
                  ((c[d] = oe.get(n, "display") || null),
                  c[d] || (n.style.display = "")),
                "" === n.style.display &&
                  ge(n) &&
                  (c[d] =
                    ((l = r = s = void 0),
                    (r = (o = n).ownerDocument),
                    (a = o.nodeName),
                    (l = ve[a]) ||
                      ((s = r.body.appendChild(r.createElement(a))),
                      (l = T.css(s, "display")),
                      s.parentNode.removeChild(s),
                      "none" === l && (l = "block"),
                      (ve[a] = l)))))
              : "none" !== i && ((c[d] = "none"), oe.set(n, "display", i)));
        for (d = 0; d < u; d++) null != c[d] && (e[d].style.display = c[d]);
        return e;
      }
      T.fn.extend({
        show: function () {
          return ye(this, !0);
        },
        hide: function () {
          return ye(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ge(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var be,
        we,
        _e = /^(?:checkbox|radio)$/i,
        Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        xe = /^$|^module$|\/(?:java|ecma)script/i;
      (be = m.createDocumentFragment().appendChild(m.createElement("div"))),
        (we = m.createElement("input")).setAttribute("type", "radio"),
        we.setAttribute("checked", "checked"),
        we.setAttribute("name", "t"),
        be.appendChild(we),
        (f.checkClone = be.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (be.innerHTML = "<textarea>x</textarea>"),
        (f.noCloneChecked = !!be.cloneNode(!0).lastChild.defaultValue),
        (be.innerHTML = "<option></option>"),
        (f.option = !!be.lastChild);
      var ke = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function Se(e, t) {
        var i;
        return (
          (i =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
          void 0 === t || (t && k(e, t)) ? T.merge([e], i) : i
        );
      }
      function Ce(e, t) {
        for (var i = 0, n = e.length; i < n; i++)
          oe.set(e[i], "globalEval", !t || oe.get(t[i], "globalEval"));
      }
      (ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
        (ke.th = ke.td),
        f.option ||
          (ke.optgroup = ke.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var Ee = /<|&#?\w+;/;
      function Ae(e, t, i, n, o) {
        for (
          var s,
            r,
            a,
            l,
            c,
            d,
            u = t.createDocumentFragment(),
            p = [],
            f = 0,
            h = e.length;
          f < h;
          f++
        )
          if ((s = e[f]) || 0 === s)
            if ("object" === b(s)) T.merge(p, s.nodeType ? [s] : s);
            else if (Ee.test(s)) {
              for (
                r = r || u.appendChild(t.createElement("div")),
                  a = (Te.exec(s) || ["", ""])[1].toLowerCase(),
                  l = ke[a] || ke._default,
                  r.innerHTML = l[1] + T.htmlPrefilter(s) + l[2],
                  d = l[0];
                d--;

              )
                r = r.lastChild;
              T.merge(p, r.childNodes), ((r = u.firstChild).textContent = "");
            } else p.push(t.createTextNode(s));
        for (u.textContent = "", f = 0; (s = p[f++]); )
          if (n && -1 < T.inArray(s, n)) o && o.push(s);
          else if (
            ((c = fe(s)), (r = Se(u.appendChild(s), "script")), c && Ce(r), i)
          )
            for (d = 0; (s = r[d++]); ) xe.test(s.type || "") && i.push(s);
        return u;
      }
      var $e = /^([^.]*)(?:\.(.+)|)/;
      function Oe() {
        return !0;
      }
      function Le() {
        return !1;
      }
      function De(e, t, i, n, o, s) {
        var r, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), t))
            De(e, a, i, n, t[a], s);
          return e;
        }
        if (
          (null == n && null == o
            ? ((o = i), (n = i = void 0))
            : null == o &&
              ("string" == typeof i
                ? ((o = n), (n = void 0))
                : ((o = n), (n = i), (i = void 0))),
          !1 === o)
        )
          o = Le;
        else if (!o) return e;
        return (
          1 === s &&
            ((r = o),
            ((o = function (e) {
              return T().off(e), r.apply(this, arguments);
            }).guid = r.guid || (r.guid = T.guid++))),
          e.each(function () {
            T.event.add(this, t, o, n, i);
          })
        );
      }
      function je(e, t, i) {
        i
          ? (oe.set(e, t, !1),
            T.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var i,
                  n = oe.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (n)
                    (T.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((n = o.call(arguments)),
                    oe.set(this, t, n),
                    this[t](),
                    (i = oe.get(this, t)),
                    oe.set(this, t, !1),
                    n !== i)
                  )
                    return e.stopImmediatePropagation(), e.preventDefault(), i;
                } else
                  n &&
                    (oe.set(this, t, T.event.trigger(n[0], n.slice(1), this)),
                    e.stopPropagation(),
                    (e.isImmediatePropagationStopped = Oe));
              },
            }))
          : void 0 === oe.get(e, t) && T.event.add(e, t, Oe);
      }
      (T.event = {
        global: {},
        add: function (e, t, i, n, o) {
          var s,
            r,
            a,
            l,
            c,
            d,
            u,
            p,
            f,
            h,
            g,
            m = oe.get(e);
          if (ie(e))
            for (
              i.handler && ((i = (s = i).handler), (o = s.selector)),
                o && T.find.matchesSelector(pe, o),
                i.guid || (i.guid = T.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (r = m.handle) ||
                  (r = m.handle =
                    function (t) {
                      return void 0 !== T && T.event.triggered !== t.type
                        ? T.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                c = (t = (t || "").match(F) || [""]).length;
              c--;

            )
              (f = g = (a = $e.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                f &&
                  ((u = T.event.special[f] || {}),
                  (f = (o ? u.delegateType : u.bindType) || f),
                  (u = T.event.special[f] || {}),
                  (d = T.extend(
                    {
                      type: f,
                      origType: g,
                      data: n,
                      handler: i,
                      guid: i.guid,
                      selector: o,
                      needsContext: o && T.expr.match.needsContext.test(o),
                      namespace: h.join("."),
                    },
                    s,
                  )),
                  (p = l[f]) ||
                    (((p = l[f] = []).delegateCount = 0),
                    (u.setup && !1 !== u.setup.call(e, n, h, r)) ||
                      (e.addEventListener && e.addEventListener(f, r))),
                  u.add &&
                    (u.add.call(e, d),
                    d.handler.guid || (d.handler.guid = i.guid)),
                  o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                  (T.event.global[f] = !0));
        },
        remove: function (e, t, i, n, o) {
          var s,
            r,
            a,
            l,
            c,
            d,
            u,
            p,
            f,
            h,
            g,
            m = oe.hasData(e) && oe.get(e);
          if (m && (l = m.events)) {
            for (c = (t = (t || "").match(F) || [""]).length; c--; )
              if (
                ((f = g = (a = $e.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  u = T.event.special[f] || {},
                    p = l[(f = (n ? u.delegateType : u.bindType) || f)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)",
                      ),
                    r = s = p.length;
                  s--;

                )
                  (d = p[s]),
                    (!o && g !== d.origType) ||
                      (i && i.guid !== d.guid) ||
                      (a && !a.test(d.namespace)) ||
                      (n && n !== d.selector && ("**" !== n || !d.selector)) ||
                      (p.splice(s, 1),
                      d.selector && p.delegateCount--,
                      u.remove && u.remove.call(e, d));
                r &&
                  !p.length &&
                  ((u.teardown && !1 !== u.teardown.call(e, h, m.handle)) ||
                    T.removeEvent(e, f, m.handle),
                  delete l[f]);
              } else for (f in l) T.event.remove(e, f + t[c], i, n, !0);
            T.isEmptyObject(l) && oe.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            i,
            n,
            o,
            s,
            r,
            a = new Array(arguments.length),
            l = T.event.fix(e),
            c = (oe.get(this, "events") || Object.create(null))[l.type] || [],
            d = T.event.special[l.type] || {};
          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (
            ((l.delegateTarget = this),
            !d.preDispatch || !1 !== d.preDispatch.call(this, l))
          ) {
            for (
              r = T.event.handlers.call(this, l, c), t = 0;
              (o = r[t++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = o.elem, i = 0;
                (s = o.handlers[i++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== s.namespace &&
                  !l.rnamespace.test(s.namespace)) ||
                  ((l.handleObj = s),
                  (l.data = s.data),
                  void 0 !==
                    (n = (
                      (T.event.special[s.origType] || {}).handle || s.handler
                    ).apply(o.elem, a)) &&
                    !1 === (l.result = n) &&
                    (l.preventDefault(), l.stopPropagation()));
            return d.postDispatch && d.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var i,
            n,
            o,
            s,
            r,
            a = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (s = [], r = {}, i = 0; i < l; i++)
                  void 0 === r[(o = (n = t[i]).selector + " ")] &&
                    (r[o] = n.needsContext
                      ? -1 < T(o, this).index(c)
                      : T.find(o, this, null, [c]).length),
                    r[o] && s.push(n);
                s.length && a.push({ elem: c, handlers: s });
              }
          return (
            (c = this),
            l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: h(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                _e.test(t.type) &&
                  t.click &&
                  k(t, "input") &&
                  je(t, "click", !0),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                _e.test(t.type) && t.click && k(t, "input") && je(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (_e.test(t.type) &&
                  t.click &&
                  k(t, "input") &&
                  oe.get(t, "click")) ||
                k(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (T.removeEvent = function (e, t, i) {
          e.removeEventListener && e.removeEventListener(t, i);
        }),
        (T.Event = function (e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Oe
                  : Le),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: Le,
          isPropagationStopped: Le,
          isImmediatePropagationStopped: Le,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Oe),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Oe),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Oe),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          T.event.addProp,
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          function i(e) {
            if (m.documentMode) {
              var i = oe.get(this, "handle"),
                n = T.event.fix(e);
              (n.type = "focusin" === e.type ? "focus" : "blur"),
                (n.isSimulated = !0),
                i(e),
                n.target === n.currentTarget && i(n);
            } else T.event.simulate(t, e.target, T.event.fix(e));
          }
          (T.event.special[e] = {
            setup: function () {
              var n;
              if ((je(this, e, !0), !m.documentMode)) return !1;
              (n = oe.get(this, t)) || this.addEventListener(t, i),
                oe.set(this, t, (n || 0) + 1);
            },
            trigger: function () {
              return je(this, e), !0;
            },
            teardown: function () {
              var e;
              if (!m.documentMode) return !1;
              (e = oe.get(this, t) - 1)
                ? oe.set(this, t, e)
                : (this.removeEventListener(t, i), oe.remove(this, t));
            },
            _default: function (t) {
              return oe.get(t.target, e);
            },
            delegateType: t,
          }),
            (T.event.special[t] = {
              setup: function () {
                var n = this.ownerDocument || this.document || this,
                  o = m.documentMode ? this : n,
                  s = oe.get(o, t);
                s ||
                  (m.documentMode
                    ? this.addEventListener(t, i)
                    : n.addEventListener(e, i, !0)),
                  oe.set(o, t, (s || 0) + 1);
              },
              teardown: function () {
                var n = this.ownerDocument || this.document || this,
                  o = m.documentMode ? this : n,
                  s = oe.get(o, t) - 1;
                s
                  ? oe.set(o, t, s)
                  : (m.documentMode
                      ? this.removeEventListener(t, i)
                      : n.removeEventListener(e, i, !0),
                    oe.remove(o, t));
              },
            });
        }),
        T.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var i,
                  n = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (n && (n === this || T.contains(this, n))) ||
                    ((e.type = o.origType),
                    (i = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  i
                );
              },
            };
          },
        ),
        T.fn.extend({
          on: function (e, t, i, n) {
            return De(this, e, t, i, n);
          },
          one: function (e, t, i, n) {
            return De(this, e, t, i, n, 1);
          },
          off: function (e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (n = e.handleObj),
                T(e.delegateTarget).off(
                  n.namespace ? n.origType + "." + n.namespace : n.origType,
                  n.selector,
                  n.handler,
                ),
                this
              );
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((i = t), (t = void 0)),
              !1 === i && (i = Le),
              this.each(function () {
                T.event.remove(this, e, i, t);
              })
            );
          },
        });
      var Ne = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function Ie(e, t) {
        return (
          (k(e, "table") &&
            k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            T(e).children("tbody")[0]) ||
          e
        );
      }
      function Me(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function qe(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Re(e, t) {
        var i, n, o, s, r, a;
        if (1 === t.nodeType) {
          if (oe.hasData(e) && (a = oe.get(e).events))
            for (o in (oe.remove(t, "handle events"), a))
              for (i = 0, n = a[o].length; i < n; i++)
                T.event.add(t, o, a[o][i]);
          se.hasData(e) &&
            ((s = se.access(e)), (r = T.extend({}, s)), se.set(t, r));
        }
      }
      function We(e, t, i, n) {
        t = s(t);
        var o,
          r,
          a,
          l,
          c,
          d,
          u = 0,
          p = e.length,
          g = p - 1,
          m = t[0],
          v = h(m);
        if (v || (1 < p && "string" == typeof m && !f.checkClone && Pe.test(m)))
          return e.each(function (o) {
            var s = e.eq(o);
            v && (t[0] = m.call(this, o, s.html())), We(s, t, i, n);
          });
        if (
          p &&
          ((r = (o = Ae(t, e[0].ownerDocument, !1, e, n)).firstChild),
          1 === o.childNodes.length && (o = r),
          r || n)
        ) {
          for (l = (a = T.map(Se(o, "script"), Me)).length; u < p; u++)
            (c = o),
              u !== g &&
                ((c = T.clone(c, !0, !0)), l && T.merge(a, Se(c, "script"))),
              i.call(e[u], c, u);
          if (l)
            for (
              d = a[a.length - 1].ownerDocument, T.map(a, qe), u = 0;
              u < l;
              u++
            )
              (c = a[u]),
                xe.test(c.type || "") &&
                  !oe.access(c, "globalEval") &&
                  T.contains(d, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? T._evalUrl &&
                      !c.noModule &&
                      T._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute("nonce") },
                        d,
                      )
                    : y(c.textContent.replace(He, ""), c, d));
        }
        return e;
      }
      function ze(e, t, i) {
        for (var n, o = t ? T.filter(t, e) : e, s = 0; null != (n = o[s]); s++)
          i || 1 !== n.nodeType || T.cleanData(Se(n)),
            n.parentNode &&
              (i && fe(n) && Ce(Se(n, "script")), n.parentNode.removeChild(n));
        return e;
      }
      T.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, i) {
          var n,
            o,
            s,
            r,
            a,
            l,
            c,
            d = e.cloneNode(!0),
            u = fe(e);
          if (
            !(
              f.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              T.isXMLDoc(e)
            )
          )
            for (r = Se(d), n = 0, o = (s = Se(e)).length; n < o; n++)
              (a = s[n]),
                "input" === (c = (l = r[n]).nodeName.toLowerCase()) &&
                _e.test(a.type)
                  ? (l.checked = a.checked)
                  : ("input" !== c && "textarea" !== c) ||
                    (l.defaultValue = a.defaultValue);
          if (t)
            if (i)
              for (
                s = s || Se(e), r = r || Se(d), n = 0, o = s.length;
                n < o;
                n++
              )
                Re(s[n], r[n]);
            else Re(e, d);
          return (
            0 < (r = Se(d, "script")).length && Ce(r, !u && Se(e, "script")), d
          );
        },
        cleanData: function (e) {
          for (
            var t, i, n, o = T.event.special, s = 0;
            void 0 !== (i = e[s]);
            s++
          )
            if (ie(i)) {
              if ((t = i[oe.expando])) {
                if (t.events)
                  for (n in t.events)
                    o[n] ? T.event.remove(i, n) : T.removeEvent(i, n, t.handle);
                i[oe.expando] = void 0;
              }
              i[se.expando] && (i[se.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (e) {
            return ze(this, e, !0);
          },
          remove: function (e) {
            return ze(this, e);
          },
          text: function (e) {
            return G(
              this,
              function (e) {
                return void 0 === e
                  ? T.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length,
            );
          },
          append: function () {
            return We(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Ie(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return We(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Ie(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return We(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return We(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (T.cleanData(Se(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return T.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return G(
              this,
              function (e) {
                var t = this[0] || {},
                  i = 0,
                  n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Ne.test(e) &&
                  !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; i < n; i++)
                      1 === (t = this[i] || {}).nodeType &&
                        (T.cleanData(Se(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length,
            );
          },
          replaceWith: function () {
            var e = [];
            return We(
              this,
              arguments,
              function (t) {
                var i = this.parentNode;
                T.inArray(this, e) < 0 &&
                  (T.cleanData(Se(this)), i && i.replaceChild(t, this));
              },
              e,
            );
          },
        }),
        T.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            T.fn[e] = function (e) {
              for (
                var i, n = [], o = T(e), s = o.length - 1, a = 0;
                a <= s;
                a++
              )
                (i = a === s ? this : this.clone(!0)),
                  T(o[a])[t](i),
                  r.apply(n, i.get());
              return this.pushStack(n);
            };
          },
        );
      var Be = new RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
        Fe = /^--/,
        Ue = function (t) {
          var i = t.ownerDocument.defaultView;
          return (i && i.opener) || (i = e), i.getComputedStyle(t);
        },
        Xe = function (e, t, i) {
          var n,
            o,
            s = {};
          for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((n = i.call(e)), t)) e.style[o] = s[o];
          return n;
        },
        Ye = new RegExp(ue.join("|"), "i");
      function Ve(e, t, i) {
        var n,
          o,
          s,
          r,
          a = Fe.test(t),
          l = e.style;
        return (
          (i = i || Ue(e)) &&
            ((r = i.getPropertyValue(t) || i[t]),
            a && r && (r = r.replace($, "$1") || void 0),
            "" !== r || fe(e) || (r = T.style(e, t)),
            !f.pixelBoxStyles() &&
              Be.test(r) &&
              Ye.test(t) &&
              ((n = l.width),
              (o = l.minWidth),
              (s = l.maxWidth),
              (l.minWidth = l.maxWidth = l.width = r),
              (r = i.width),
              (l.width = n),
              (l.minWidth = o),
              (l.maxWidth = s))),
          void 0 !== r ? r + "" : r
        );
      }
      function Qe(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function t() {
          if (d) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (d.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              pe.appendChild(c).appendChild(d);
            var t = e.getComputedStyle(d);
            (n = "1%" !== t.top),
              (l = 12 === i(t.marginLeft)),
              (d.style.right = "60%"),
              (r = 36 === i(t.right)),
              (o = 36 === i(t.width)),
              (d.style.position = "absolute"),
              (s = 12 === i(d.offsetWidth / 3)),
              pe.removeChild(c),
              (d = null);
          }
        }
        function i(e) {
          return Math.round(parseFloat(e));
        }
        var n,
          o,
          s,
          r,
          a,
          l,
          c = m.createElement("div"),
          d = m.createElement("div");
        d.style &&
          ((d.style.backgroundClip = "content-box"),
          (d.cloneNode(!0).style.backgroundClip = ""),
          (f.clearCloneStyle = "content-box" === d.style.backgroundClip),
          T.extend(f, {
            boxSizingReliable: function () {
              return t(), o;
            },
            pixelBoxStyles: function () {
              return t(), r;
            },
            pixelPosition: function () {
              return t(), n;
            },
            reliableMarginLeft: function () {
              return t(), l;
            },
            scrollboxSize: function () {
              return t(), s;
            },
            reliableTrDimensions: function () {
              var t, i, n, o;
              return (
                null == a &&
                  ((t = m.createElement("table")),
                  (i = m.createElement("tr")),
                  (n = m.createElement("div")),
                  (t.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (i.style.cssText = "box-sizing:content-box;border:1px solid"),
                  (i.style.height = "1px"),
                  (n.style.height = "9px"),
                  (n.style.display = "block"),
                  pe.appendChild(t).appendChild(i).appendChild(n),
                  (o = e.getComputedStyle(i)),
                  (a =
                    parseInt(o.height, 10) +
                      parseInt(o.borderTopWidth, 10) +
                      parseInt(o.borderBottomWidth, 10) ===
                    i.offsetHeight),
                  pe.removeChild(t)),
                a
              );
            },
          }));
      })();
      var Ke = ["Webkit", "Moz", "ms"],
        Ge = m.createElement("div").style,
        Je = {};
      function Ze(e) {
        return (
          T.cssProps[e] ||
          Je[e] ||
          (e in Ge
            ? e
            : (Je[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), i = Ke.length;
                    i--;

                  )
                    if ((e = Ke[i] + t) in Ge) return e;
                })(e) || e))
        );
      }
      var et = /^(none|table(?!-c[ea]).+)/,
        tt = { position: "absolute", visibility: "hidden", display: "block" },
        it = { letterSpacing: "0", fontWeight: "400" };
      function nt(e, t, i) {
        var n = de.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
      }
      function ot(e, t, i, n, o, s) {
        var r = "width" === t ? 1 : 0,
          a = 0,
          l = 0,
          c = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; r < 4; r += 2)
          "margin" === i && (c += T.css(e, i + ue[r], !0, o)),
            n
              ? ("content" === i && (l -= T.css(e, "padding" + ue[r], !0, o)),
                "margin" !== i &&
                  (l -= T.css(e, "border" + ue[r] + "Width", !0, o)))
              : ((l += T.css(e, "padding" + ue[r], !0, o)),
                "padding" !== i
                  ? (l += T.css(e, "border" + ue[r] + "Width", !0, o))
                  : (a += T.css(e, "border" + ue[r] + "Width", !0, o)));
        return (
          !n &&
            0 <= s &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    s -
                    l -
                    a -
                    0.5,
                ),
              ) || 0),
          l + c
        );
      }
      function st(e, t, i) {
        var n = Ue(e),
          o =
            (!f.boxSizingReliable() || i) &&
            "border-box" === T.css(e, "boxSizing", !1, n),
          s = o,
          r = Ve(e, t, n),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Be.test(r)) {
          if (!i) return r;
          r = "auto";
        }
        return (
          ((!f.boxSizingReliable() && o) ||
            (!f.reliableTrDimensions() && k(e, "tr")) ||
            "auto" === r ||
            (!parseFloat(r) && "inline" === T.css(e, "display", !1, n))) &&
            e.getClientRects().length &&
            ((o = "border-box" === T.css(e, "boxSizing", !1, n)),
            (s = a in e) && (r = e[a])),
          (r = parseFloat(r) || 0) +
            ot(e, t, i || (o ? "border" : "content"), s, n, r) +
            "px"
        );
      }
      function rt(e, t, i, n, o) {
        return new rt.prototype.init(e, t, i, n, o);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var i = Ve(e, "opacity");
                return "" === i ? "1" : i;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageSlice: !0,
          columnCount: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
        },
        cssProps: {},
        style: function (e, t, i, n) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              s,
              r,
              a = te(t),
              l = Fe.test(t),
              c = e.style;
            if (
              (l || (t = Ze(a)),
              (r = T.cssHooks[t] || T.cssHooks[a]),
              void 0 === i)
            )
              return r && "get" in r && void 0 !== (o = r.get(e, !1, n))
                ? o
                : c[t];
            "string" == (s = typeof i) &&
              (o = de.exec(i)) &&
              o[1] &&
              ((i = me(e, t, o)), (s = "number")),
              null != i &&
                i == i &&
                ("number" !== s ||
                  l ||
                  (i += (o && o[3]) || (T.cssNumber[a] ? "" : "px")),
                f.clearCloneStyle ||
                  "" !== i ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (r && "set" in r && void 0 === (i = r.set(e, i, n))) ||
                  (l ? c.setProperty(t, i) : (c[t] = i)));
          }
        },
        css: function (e, t, i, n) {
          var o,
            s,
            r,
            a = te(t);
          return (
            Fe.test(t) || (t = Ze(a)),
            (r = T.cssHooks[t] || T.cssHooks[a]) &&
              "get" in r &&
              (o = r.get(e, !0, i)),
            void 0 === o && (o = Ve(e, t, n)),
            "normal" === o && t in it && (o = it[t]),
            "" === i || i
              ? ((s = parseFloat(o)), !0 === i || isFinite(s) ? s || 0 : o)
              : o
          );
        },
      }),
        T.each(["height", "width"], function (e, t) {
          T.cssHooks[t] = {
            get: function (e, i, n) {
              if (i)
                return !et.test(T.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? st(e, t, n)
                  : Xe(e, tt, function () {
                      return st(e, t, n);
                    });
            },
            set: function (e, i, n) {
              var o,
                s = Ue(e),
                r = !f.scrollboxSize() && "absolute" === s.position,
                a = (r || n) && "border-box" === T.css(e, "boxSizing", !1, s),
                l = n ? ot(e, t, n, a, s) : 0;
              return (
                a &&
                  r &&
                  (l -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(s[t]) -
                      ot(e, t, "border", !1, s) -
                      0.5,
                  )),
                l &&
                  (o = de.exec(i)) &&
                  "px" !== (o[3] || "px") &&
                  ((e.style[t] = i), (i = T.css(e, t))),
                nt(0, i, l)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Qe(f.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ve(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Xe(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (T.cssHooks[e + t] = {
            expand: function (i) {
              for (
                var n = 0,
                  o = {},
                  s = "string" == typeof i ? i.split(" ") : [i];
                n < 4;
                n++
              )
                o[e + ue[n] + t] = s[n] || s[n - 2] || s[0];
              return o;
            },
          }),
            "margin" !== e && (T.cssHooks[e + t].set = nt);
        }),
        T.fn.extend({
          css: function (e, t) {
            return G(
              this,
              function (e, t, i) {
                var n,
                  o,
                  s = {},
                  r = 0;
                if (Array.isArray(t)) {
                  for (n = Ue(e), o = t.length; r < o; r++)
                    s[t[r]] = T.css(e, t[r], !1, n);
                  return s;
                }
                return void 0 !== i ? T.style(e, t, i) : T.css(e, t);
              },
              e,
              t,
              1 < arguments.length,
            );
          },
        }),
        (((T.Tween = rt).prototype = {
          constructor: rt,
          init: function (e, t, i, n, o, s) {
            (this.elem = e),
              (this.prop = i),
              (this.easing = o || T.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = n),
              (this.unit = s || (T.cssNumber[i] ? "" : "px"));
          },
          cur: function () {
            var e = rt.propHooks[this.prop];
            return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              i = rt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    T.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration,
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              i && i.set ? i.set(this) : rt.propHooks._default.set(this),
              this
            );
          },
        }).init.prototype = rt.prototype),
        ((rt.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
            },
            set: function (e) {
              T.fx.step[e.prop]
                ? T.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                    (!T.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : T.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }).scrollTop = rt.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (T.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (T.fx = rt.prototype.init),
        (T.fx.step = {});
      var at,
        lt,
        ct,
        dt,
        ut = /^(?:toggle|show|hide)$/,
        pt = /queueHooks$/;
      function ft() {
        lt &&
          (!1 === m.hidden && e.requestAnimationFrame
            ? e.requestAnimationFrame(ft)
            : e.setTimeout(ft, T.fx.interval),
          T.fx.tick());
      }
      function ht() {
        return (
          e.setTimeout(function () {
            at = void 0;
          }),
          (at = Date.now())
        );
      }
      function gt(e, t) {
        var i,
          n = 0,
          o = { height: e };
        for (t = t ? 1 : 0; n < 4; n += 2 - t)
          o["margin" + (i = ue[n])] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function mt(e, t, i) {
        for (
          var n,
            o = (vt.tweeners[t] || []).concat(vt.tweeners["*"]),
            s = 0,
            r = o.length;
          s < r;
          s++
        )
          if ((n = o[s].call(i, t, e))) return n;
      }
      function vt(e, t, i) {
        var n,
          o,
          s = 0,
          r = vt.prefilters.length,
          a = T.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (o) return !1;
            for (
              var t = at || ht(),
                i = Math.max(0, c.startTime + c.duration - t),
                n = 1 - (i / c.duration || 0),
                s = 0,
                r = c.tweens.length;
              s < r;
              s++
            )
              c.tweens[s].run(n);
            return (
              a.notifyWith(e, [c, n, i]),
              n < 1 && r
                ? i
                : (r || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            );
          },
          c = a.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(
              !0,
              { specialEasing: {}, easing: T.easing._default },
              i,
            ),
            originalProperties: t,
            originalOptions: i,
            startTime: at || ht(),
            duration: i.duration,
            tweens: [],
            createTween: function (t, i) {
              var n = T.Tween(
                e,
                c.opts,
                t,
                i,
                c.opts.specialEasing[t] || c.opts.easing,
              );
              return c.tweens.push(n), n;
            },
            stop: function (t) {
              var i = 0,
                n = t ? c.tweens.length : 0;
              if (o) return this;
              for (o = !0; i < n; i++) c.tweens[i].run(1);
              return (
                t
                  ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                  : a.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          d = c.props;
        for (
          (function (e, t) {
            var i, n, o, s, r;
            for (i in e)
              if (
                ((o = t[(n = te(i))]),
                (s = e[i]),
                Array.isArray(s) && ((o = s[1]), (s = e[i] = s[0])),
                i !== n && ((e[n] = s), delete e[i]),
                (r = T.cssHooks[n]) && ("expand" in r))
              )
                for (i in ((s = r.expand(s)), delete e[n], s))
                  (i in e) || ((e[i] = s[i]), (t[i] = o));
              else t[n] = o;
          })(d, c.opts.specialEasing);
          s < r;
          s++
        )
          if ((n = vt.prefilters[s].call(c, e, d, c.opts)))
            return (
              h(n.stop) &&
                (T._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
              n
            );
        return (
          T.map(d, mt, c),
          h(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          T.fx.timer(T.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (T.Animation = T.extend(vt, {
        tweeners: {
          "*": [
            function (e, t) {
              var i = this.createTween(e, t);
              return me(i.elem, e, de.exec(t), i), i;
            },
          ],
        },
        tweener: function (e, t) {
          h(e) ? ((t = e), (e = ["*"])) : (e = e.match(F));
          for (var i, n = 0, o = e.length; n < o; n++)
            (i = e[n]),
              (vt.tweeners[i] = vt.tweeners[i] || []),
              vt.tweeners[i].unshift(t);
        },
        prefilters: [
          function (e, t, i) {
            var n,
              o,
              s,
              r,
              a,
              l,
              c,
              d,
              u = "width" in t || "height" in t,
              p = this,
              f = {},
              h = e.style,
              g = e.nodeType && ge(e),
              m = oe.get(e, "fxshow");
            for (n in (i.queue ||
              (null == (r = T._queueHooks(e, "fx")).unqueued &&
                ((r.unqueued = 0),
                (a = r.empty.fire),
                (r.empty.fire = function () {
                  r.unqueued || a();
                })),
              r.unqueued++,
              p.always(function () {
                p.always(function () {
                  r.unqueued--, T.queue(e, "fx").length || r.empty.fire();
                });
              })),
            t))
              if (((o = t[n]), ut.test(o))) {
                if (
                  (delete t[n],
                  (s = s || "toggle" === o),
                  o === (g ? "hide" : "show"))
                ) {
                  if ("show" !== o || !m || void 0 === m[n]) continue;
                  g = !0;
                }
                f[n] = (m && m[n]) || T.style(e, n);
              }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
              for (n in (u &&
                1 === e.nodeType &&
                ((i.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = m && m.display) && (c = oe.get(e, "display")),
                "none" === (d = T.css(e, "display")) &&
                  (c
                    ? (d = c)
                    : (ye([e], !0),
                      (c = e.style.display || c),
                      (d = T.css(e, "display")),
                      ye([e]))),
                ("inline" === d || ("inline-block" === d && null != c)) &&
                  "none" === T.css(e, "float") &&
                  (l ||
                    (p.done(function () {
                      h.display = c;
                    }),
                    null == c &&
                      ((d = h.display), (c = "none" === d ? "" : d))),
                  (h.display = "inline-block"))),
              i.overflow &&
                ((h.overflow = "hidden"),
                p.always(function () {
                  (h.overflow = i.overflow[0]),
                    (h.overflowX = i.overflow[1]),
                    (h.overflowY = i.overflow[2]);
                })),
              (l = !1),
              f))
                l ||
                  (m
                    ? "hidden" in m && (g = m.hidden)
                    : (m = oe.access(e, "fxshow", { display: c })),
                  s && (m.hidden = !g),
                  g && ye([e], !0),
                  p.done(function () {
                    for (n in (g || ye([e]), oe.remove(e, "fxshow"), f))
                      T.style(e, n, f[n]);
                  })),
                  (l = mt(g ? m[n] : 0, n, p)),
                  n in m ||
                    ((m[n] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? vt.prefilters.unshift(e) : vt.prefilters.push(e);
        },
      })),
        (T.speed = function (e, t, i) {
          var n =
            e && "object" == typeof e
              ? T.extend({}, e)
              : {
                  complete: i || (!i && t) || (h(e) && e),
                  duration: e,
                  easing: (i && t) || (t && !h(t) && t),
                };
          return (
            T.fx.off
              ? (n.duration = 0)
              : "number" != typeof n.duration &&
                (n.duration in T.fx.speeds
                  ? (n.duration = T.fx.speeds[n.duration])
                  : (n.duration = T.fx.speeds._default)),
            (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
            (n.old = n.complete),
            (n.complete = function () {
              h(n.old) && n.old.call(this), n.queue && T.dequeue(this, n.queue);
            }),
            n
          );
        }),
        T.fn.extend({
          fadeTo: function (e, t, i, n) {
            return this.filter(ge)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, i, n);
          },
          animate: function (e, t, i, n) {
            var o = T.isEmptyObject(e),
              s = T.speed(t, i, n),
              r = function () {
                var t = vt(this, T.extend({}, e), s);
                (o || oe.get(this, "finish")) && t.stop(!0);
              };
            return (
              (r.finish = r),
              o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
            );
          },
          stop: function (e, t, i) {
            var n = function (e) {
              var t = e.stop;
              delete e.stop, t(i);
            };
            return (
              "string" != typeof e && ((i = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  o = null != e && e + "queueHooks",
                  s = T.timers,
                  r = oe.get(this);
                if (o) r[o] && r[o].stop && n(r[o]);
                else for (o in r) r[o] && r[o].stop && pt.test(o) && n(r[o]);
                for (o = s.length; o--; )
                  s[o].elem !== this ||
                    (null != e && s[o].queue !== e) ||
                    (s[o].anim.stop(i), (t = !1), s.splice(o, 1));
                (!t && i) || T.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  i = oe.get(this),
                  n = i[e + "queue"],
                  o = i[e + "queueHooks"],
                  s = T.timers,
                  r = n ? n.length : 0;
                for (
                  i.finish = !0,
                    T.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = s.length;
                  t--;

                )
                  s[t].elem === this &&
                    s[t].queue === e &&
                    (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < r; t++)
                  n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish;
              })
            );
          },
        }),
        T.each(["toggle", "show", "hide"], function (e, t) {
          var i = T.fn[t];
          T.fn[t] = function (e, n, o) {
            return null == e || "boolean" == typeof e
              ? i.apply(this, arguments)
              : this.animate(gt(t, !0), e, n, o);
          };
        }),
        T.each(
          {
            slideDown: gt("show"),
            slideUp: gt("hide"),
            slideToggle: gt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            T.fn[e] = function (e, i, n) {
              return this.animate(t, e, i, n);
            };
          },
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var e,
            t = 0,
            i = T.timers;
          for (at = Date.now(); t < i.length; t++)
            (e = i[t])() || i[t] !== e || i.splice(t--, 1);
          i.length || T.fx.stop(), (at = void 0);
        }),
        (T.fx.timer = function (e) {
          T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          lt || ((lt = !0), ft());
        }),
        (T.fx.stop = function () {
          lt = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (t, i) {
          return (
            (t = (T.fx && T.fx.speeds[t]) || t),
            (i = i || "fx"),
            this.queue(i, function (i, n) {
              var o = e.setTimeout(i, t);
              n.stop = function () {
                e.clearTimeout(o);
              };
            })
          );
        }),
        (ct = m.createElement("input")),
        (dt = m.createElement("select").appendChild(m.createElement("option"))),
        (ct.type = "checkbox"),
        (f.checkOn = "" !== ct.value),
        (f.optSelected = dt.selected),
        ((ct = m.createElement("input")).value = "t"),
        (ct.type = "radio"),
        (f.radioValue = "t" === ct.value);
      var yt,
        bt = T.expr.attrHandle;
      T.fn.extend({
        attr: function (e, t) {
          return G(this, T.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        },
      }),
        T.extend({
          attr: function (e, t, i) {
            var n,
              o,
              s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
              return void 0 === e.getAttribute
                ? T.prop(e, t, i)
                : ((1 === s && T.isXMLDoc(e)) ||
                    (o =
                      T.attrHooks[t.toLowerCase()] ||
                      (T.expr.match.bool.test(t) ? yt : void 0)),
                  void 0 !== i
                    ? null === i
                      ? void T.removeAttr(e, t)
                      : o && "set" in o && void 0 !== (n = o.set(e, i, t))
                        ? n
                        : (e.setAttribute(t, i + ""), i)
                    : o && "get" in o && null !== (n = o.get(e, t))
                      ? n
                      : null == (n = T.find.attr(e, t))
                        ? void 0
                        : n);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!f.radioValue && "radio" === t && k(e, "input")) {
                  var i = e.value;
                  return e.setAttribute("type", t), i && (e.value = i), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var i,
              n = 0,
              o = t && t.match(F);
            if (o && 1 === e.nodeType)
              for (; (i = o[n++]); ) e.removeAttribute(i);
          },
        }),
        (yt = {
          set: function (e, t, i) {
            return !1 === t ? T.removeAttr(e, i) : e.setAttribute(i, i), i;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var i = bt[t] || T.find.attr;
          bt[t] = function (e, t, n) {
            var o,
              s,
              r = t.toLowerCase();
            return (
              n ||
                ((s = bt[r]),
                (bt[r] = o),
                (o = null != i(e, t, n) ? r : null),
                (bt[r] = s)),
              o
            );
          };
        });
      var wt = /^(?:input|select|textarea|button)$/i,
        _t = /^(?:a|area)$/i;
      function Tt(e) {
        return (e.match(F) || []).join(" ");
      }
      function xt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function kt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(F)) || [];
      }
      T.fn.extend({
        prop: function (e, t) {
          return G(this, T.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        },
      }),
        T.extend({
          prop: function (e, t, i) {
            var n,
              o,
              s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
              return (
                (1 === s && T.isXMLDoc(e)) ||
                  ((t = T.propFix[t] || t), (o = T.propHooks[t])),
                void 0 !== i
                  ? o && "set" in o && void 0 !== (n = o.set(e, i, t))
                    ? n
                    : (e[t] = i)
                  : o && "get" in o && null !== (n = o.get(e, t))
                    ? n
                    : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = T.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : wt.test(e.nodeName) || (_t.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        f.optSelected ||
          (T.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          },
        ),
        T.fn.extend({
          addClass: function (e) {
            var t, i, n, o, s, r;
            return h(e)
              ? this.each(function (t) {
                  T(this).addClass(e.call(this, t, xt(this)));
                })
              : (t = kt(e)).length
                ? this.each(function () {
                    if (
                      ((n = xt(this)),
                      (i = 1 === this.nodeType && " " + Tt(n) + " "))
                    ) {
                      for (s = 0; s < t.length; s++)
                        (o = t[s]),
                          i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                      (r = Tt(i)), n !== r && this.setAttribute("class", r);
                    }
                  })
                : this;
          },
          removeClass: function (e) {
            var t, i, n, o, s, r;
            return h(e)
              ? this.each(function (t) {
                  T(this).removeClass(e.call(this, t, xt(this)));
                })
              : arguments.length
                ? (t = kt(e)).length
                  ? this.each(function () {
                      if (
                        ((n = xt(this)),
                        (i = 1 === this.nodeType && " " + Tt(n) + " "))
                      ) {
                        for (s = 0; s < t.length; s++)
                          for (o = t[s]; -1 < i.indexOf(" " + o + " "); )
                            i = i.replace(" " + o + " ", " ");
                        (r = Tt(i)), n !== r && this.setAttribute("class", r);
                      }
                    })
                  : this
                : this.attr("class", "");
          },
          toggleClass: function (e, t) {
            var i,
              n,
              o,
              s,
              r = typeof e,
              a = "string" === r || Array.isArray(e);
            return h(e)
              ? this.each(function (i) {
                  T(this).toggleClass(e.call(this, i, xt(this), t), t);
                })
              : "boolean" == typeof t && a
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : ((i = kt(e)),
                  this.each(function () {
                    if (a)
                      for (s = T(this), o = 0; o < i.length; o++)
                        (n = i[o]),
                          s.hasClass(n) ? s.removeClass(n) : s.addClass(n);
                    else
                      (void 0 !== e && "boolean" !== r) ||
                        ((n = xt(this)) && oe.set(this, "__className__", n),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            n || !1 === e
                              ? ""
                              : oe.get(this, "__className__") || "",
                          ));
                  }));
          },
          hasClass: function (e) {
            var t,
              i,
              n = 0;
            for (t = " " + e + " "; (i = this[n++]); )
              if (1 === i.nodeType && -1 < (" " + Tt(xt(i)) + " ").indexOf(t))
                return !0;
            return !1;
          },
        });
      var St = /\r/g;
      T.fn.extend({
        val: function (e) {
          var t,
            i,
            n,
            o = this[0];
          return arguments.length
            ? ((n = h(e)),
              this.each(function (i) {
                var o;
                1 === this.nodeType &&
                  (null == (o = n ? e.call(this, i, T(this).val()) : e)
                    ? (o = "")
                    : "number" == typeof o
                      ? (o += "")
                      : Array.isArray(o) &&
                        (o = T.map(o, function (e) {
                          return null == e ? "" : e + "";
                        })),
                  ((t =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
              ? (t =
                  T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (i = t.get(o, "value"))
                ? i
                : "string" == typeof (i = o.value)
                  ? i.replace(St, "")
                  : null == i
                    ? ""
                    : i
              : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, "value");
                return null != t ? t : Tt(T.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  i,
                  n,
                  o = e.options,
                  s = e.selectedIndex,
                  r = "select-one" === e.type,
                  a = r ? null : [],
                  l = r ? s + 1 : o.length;
                for (n = s < 0 ? l : r ? s : 0; n < l; n++)
                  if (
                    ((i = o[n]).selected || n === s) &&
                    !i.disabled &&
                    (!i.parentNode.disabled || !k(i.parentNode, "optgroup"))
                  ) {
                    if (((t = T(i).val()), r)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var i, n, o = e.options, s = T.makeArray(t), r = o.length;
                  r--;

                )
                  ((n = o[r]).selected =
                    -1 < T.inArray(T.valHooks.option.get(n), s)) && (i = !0);
                return i || (e.selectedIndex = -1), s;
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          (T.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = -1 < T.inArray(T(e).val(), t));
            },
          }),
            f.checkOn ||
              (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        });
      var Ct = e.location,
        Et = { guid: Date.now() },
        At = /\?/;
      T.parseXML = function (t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
          i = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {}
        return (
          (n = i && i.getElementsByTagName("parsererror")[0]),
          (i && !n) ||
            T.error(
              "Invalid XML: " +
                (n
                  ? T.map(n.childNodes, function (e) {
                      return e.textContent;
                    }).join("\n")
                  : t),
            ),
          i
        );
      };
      var $t = /^(?:focusinfocus|focusoutblur)$/,
        Ot = function (e) {
          e.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function (t, i, n, o) {
          var s,
            r,
            a,
            l,
            c,
            u,
            p,
            f,
            v = [n || m],
            y = d.call(t, "type") ? t.type : t,
            b = d.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((r = f = a = n = n || m),
            3 !== n.nodeType &&
              8 !== n.nodeType &&
              !$t.test(y + T.event.triggered) &&
              (-1 < y.indexOf(".") &&
                ((y = (b = y.split(".")).shift()), b.sort()),
              (c = y.indexOf(":") < 0 && "on" + y),
              ((t = t[T.expando]
                ? t
                : new T.Event(y, "object" == typeof t && t)).isTrigger = o
                ? 2
                : 3),
              (t.namespace = b.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = n),
              (i = null == i ? [t] : T.makeArray(i, [t])),
              (p = T.event.special[y] || {}),
              o || !p.trigger || !1 !== p.trigger.apply(n, i)))
          ) {
            if (!o && !p.noBubble && !g(n)) {
              for (
                l = p.delegateType || y, $t.test(l + y) || (r = r.parentNode);
                r;
                r = r.parentNode
              )
                v.push(r), (a = r);
              a === (n.ownerDocument || m) &&
                v.push(a.defaultView || a.parentWindow || e);
            }
            for (s = 0; (r = v[s++]) && !t.isPropagationStopped(); )
              (f = r),
                (t.type = 1 < s ? l : p.bindType || y),
                (u =
                  (oe.get(r, "events") || Object.create(null))[t.type] &&
                  oe.get(r, "handle")) && u.apply(r, i),
                (u = c && r[c]) &&
                  u.apply &&
                  ie(r) &&
                  ((t.result = u.apply(r, i)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = y),
              o ||
                t.isDefaultPrevented() ||
                (p._default && !1 !== p._default.apply(v.pop(), i)) ||
                !ie(n) ||
                (c &&
                  h(n[y]) &&
                  !g(n) &&
                  ((a = n[c]) && (n[c] = null),
                  (T.event.triggered = y),
                  t.isPropagationStopped() && f.addEventListener(y, Ot),
                  n[y](),
                  t.isPropagationStopped() && f.removeEventListener(y, Ot),
                  (T.event.triggered = void 0),
                  a && (n[c] = a))),
              t.result
            );
          }
        },
        simulate: function (e, t, i) {
          var n = T.extend(new T.Event(), i, { type: e, isSimulated: !0 });
          T.event.trigger(n, null, t);
        },
      }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var i = this[0];
            if (i) return T.event.trigger(e, t, i, !0);
          },
        });
      var Lt = /\[\]$/,
        Dt = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
      function Pt(e, t, i, n) {
        var o;
        if (Array.isArray(t))
          T.each(t, function (t, o) {
            i || Lt.test(e)
              ? n(e, o)
              : Pt(
                  e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                  o,
                  i,
                  n,
                );
          });
        else if (i || "object" !== b(t)) n(e, t);
        else for (o in t) Pt(e + "[" + o + "]", t[o], i, n);
      }
      (T.param = function (e, t) {
        var i,
          n = [],
          o = function (e, t) {
            var i = h(t) ? t() : t;
            n[n.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == i ? "" : i);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function () {
            o(this.name, this.value);
          });
        else for (i in e) Pt(i, e[i], t, o);
        return n.join("&");
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = T.prop(this, "elements");
              return e ? T.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !T(this).is(":disabled") &&
                  Nt.test(this.nodeName) &&
                  !jt.test(e) &&
                  (this.checked || !_e.test(e))
                );
              })
              .map(function (e, t) {
                var i = T(this).val();
                return null == i
                  ? null
                  : Array.isArray(i)
                    ? T.map(i, function (e) {
                        return { name: t.name, value: e.replace(Dt, "\r\n") };
                      })
                    : { name: t.name, value: i.replace(Dt, "\r\n") };
              })
              .get();
          },
        });
      var Ht = /%20/g,
        It = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Wt = /^\/\//,
        zt = {},
        Bt = {},
        Ft = "*/".concat("*"),
        Ut = m.createElement("a");
      function Xt(e) {
        return function (t, i) {
          "string" != typeof t && ((i = t), (t = "*"));
          var n,
            o = 0,
            s = t.toLowerCase().match(F) || [];
          if (h(i))
            for (; (n = s[o++]); )
              "+" === n[0]
                ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(i))
                : (e[n] = e[n] || []).push(i);
        };
      }
      function Yt(e, t, i, n) {
        var o = {},
          s = e === Bt;
        function r(a) {
          var l;
          return (
            (o[a] = !0),
            T.each(e[a] || [], function (e, a) {
              var c = a(t, i, n);
              return "string" != typeof c || s || o[c]
                ? s
                  ? !(l = c)
                  : void 0
                : (t.dataTypes.unshift(c), r(c), !1);
            }),
            l
          );
        }
        return r(t.dataTypes[0]) || (!o["*"] && r("*"));
      }
      function Vt(e, t) {
        var i,
          n,
          o = T.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && T.extend(!0, e, n), e;
      }
      (Ut.href = Ct.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                Ct.protocol,
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Ft,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Vt(Vt(e, T.ajaxSettings), t) : Vt(T.ajaxSettings, e);
          },
          ajaxPrefilter: Xt(zt),
          ajaxTransport: Xt(Bt),
          ajax: function (t, i) {
            "object" == typeof t && ((i = t), (t = void 0)), (i = i || {});
            var n,
              o,
              s,
              r,
              a,
              l,
              c,
              d,
              u,
              p,
              f = T.ajaxSetup({}, i),
              h = f.context || f,
              g = f.context && (h.nodeType || h.jquery) ? T(h) : T.event,
              v = T.Deferred(),
              y = T.Callbacks("once memory"),
              b = f.statusCode || {},
              w = {},
              _ = {},
              x = "canceled",
              k = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (c) {
                    if (!r)
                      for (r = {}; (t = qt.exec(s)); )
                        r[t[1].toLowerCase() + " "] = (
                          r[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = r[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return c ? s : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == c &&
                      ((e = _[e.toLowerCase()] = _[e.toLowerCase()] || e),
                      (w[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == c && (f.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (c) k.always(e[k.status]);
                    else for (t in e) b[t] = [b[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || x;
                  return n && n.abort(t), S(0, t), this;
                },
              };
            if (
              (v.promise(k),
              (f.url = ((t || f.url || Ct.href) + "").replace(
                Wt,
                Ct.protocol + "//",
              )),
              (f.type = i.method || i.type || f.method || f.type),
              (f.dataTypes = (f.dataType || "*").toLowerCase().match(F) || [
                "",
              ]),
              null == f.crossDomain)
            ) {
              l = m.createElement("a");
              try {
                (l.href = f.url),
                  (l.href = l.href),
                  (f.crossDomain =
                    Ut.protocol + "//" + Ut.host != l.protocol + "//" + l.host);
              } catch (t) {
                f.crossDomain = !0;
              }
            }
            if (
              (f.data &&
                f.processData &&
                "string" != typeof f.data &&
                (f.data = T.param(f.data, f.traditional)),
              Yt(zt, f, i, k),
              c)
            )
              return k;
            for (u in ((d = T.event && f.global) &&
              0 == T.active++ &&
              T.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !Rt.test(f.type)),
            (o = f.url.replace(It, "")),
            f.hasContent
              ? f.data &&
                f.processData &&
                0 ===
                  (f.contentType || "").indexOf(
                    "application/x-www-form-urlencoded",
                  ) &&
                (f.data = f.data.replace(Ht, "+"))
              : ((p = f.url.slice(o.length)),
                f.data &&
                  (f.processData || "string" == typeof f.data) &&
                  ((o += (At.test(o) ? "&" : "?") + f.data), delete f.data),
                !1 === f.cache &&
                  ((o = o.replace(Mt, "$1")),
                  (p = (At.test(o) ? "&" : "?") + "_=" + Et.guid++ + p)),
                (f.url = o + p)),
            f.ifModified &&
              (T.lastModified[o] &&
                k.setRequestHeader("If-Modified-Since", T.lastModified[o]),
              T.etag[o] && k.setRequestHeader("If-None-Match", T.etag[o])),
            ((f.data && f.hasContent && !1 !== f.contentType) ||
              i.contentType) &&
              k.setRequestHeader("Content-Type", f.contentType),
            k.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ("*" !== f.dataTypes[0] ? ", " + Ft + "; q=0.01" : "")
                : f.accepts["*"],
            ),
            f.headers))
              k.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, k, f) || c))
              return k.abort();
            if (
              ((x = "abort"),
              y.add(f.complete),
              k.done(f.success),
              k.fail(f.error),
              (n = Yt(Bt, f, i, k)))
            ) {
              if (((k.readyState = 1), d && g.trigger("ajaxSend", [k, f]), c))
                return k;
              f.async &&
                0 < f.timeout &&
                (a = e.setTimeout(function () {
                  k.abort("timeout");
                }, f.timeout));
              try {
                (c = !1), n.send(w, S);
              } catch (t) {
                if (c) throw t;
                S(-1, t);
              }
            } else S(-1, "No Transport");
            function S(t, i, r, l) {
              var u,
                p,
                m,
                w,
                _,
                x = i;
              c ||
                ((c = !0),
                a && e.clearTimeout(a),
                (n = void 0),
                (s = l || ""),
                (k.readyState = 0 < t ? 4 : 0),
                (u = (200 <= t && t < 300) || 304 === t),
                r &&
                  (w = (function (e, t, i) {
                    for (
                      var n, o, s, r, a = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === n &&
                          (n =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                      for (o in a)
                        if (a[o] && a[o].test(n)) {
                          l.unshift(o);
                          break;
                        }
                    if (l[0] in i) s = l[0];
                    else {
                      for (o in i) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                          s = o;
                          break;
                        }
                        r || (r = o);
                      }
                      s = s || r;
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s];
                  })(f, k, r)),
                !u &&
                  -1 < T.inArray("script", f.dataTypes) &&
                  T.inArray("json", f.dataTypes) < 0 &&
                  (f.converters["text script"] = function () {}),
                (w = (function (e, t, i, n) {
                  var o,
                    s,
                    r,
                    a,
                    l,
                    c = {},
                    d = e.dataTypes.slice();
                  if (d[1])
                    for (r in e.converters)
                      c[r.toLowerCase()] = e.converters[r];
                  for (s = d.shift(); s; )
                    if (
                      (e.responseFields[s] && (i[e.responseFields[s]] = t),
                      !l &&
                        n &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = s),
                      (s = d.shift()))
                    )
                      if ("*" === s) s = l;
                      else if ("*" !== l && l !== s) {
                        if (!(r = c[l + " " + s] || c["* " + s]))
                          for (o in c)
                            if (
                              (a = o.split(" "))[1] === s &&
                              (r = c[l + " " + a[0]] || c["* " + a[0]])
                            ) {
                              !0 === r
                                ? (r = c[o])
                                : !0 !== c[o] && ((s = a[0]), d.unshift(a[1]));
                              break;
                            }
                        if (!0 !== r)
                          if (r && e.throws) t = r(t);
                          else
                            try {
                              t = r(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: r
                                  ? e
                                  : "No conversion from " + l + " to " + s,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(f, w, k, u)),
                u
                  ? (f.ifModified &&
                      ((_ = k.getResponseHeader("Last-Modified")) &&
                        (T.lastModified[o] = _),
                      (_ = k.getResponseHeader("etag")) && (T.etag[o] = _)),
                    204 === t || "HEAD" === f.type
                      ? (x = "nocontent")
                      : 304 === t
                        ? (x = "notmodified")
                        : ((x = w.state), (p = w.data), (u = !(m = w.error))))
                  : ((m = x), (!t && x) || ((x = "error"), t < 0 && (t = 0))),
                (k.status = t),
                (k.statusText = (i || x) + ""),
                u ? v.resolveWith(h, [p, x, k]) : v.rejectWith(h, [k, x, m]),
                k.statusCode(b),
                (b = void 0),
                d &&
                  g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, f, u ? p : m]),
                y.fireWith(h, [k, x]),
                d &&
                  (g.trigger("ajaxComplete", [k, f]),
                  --T.active || T.event.trigger("ajaxStop")));
            }
            return k;
          },
          getJSON: function (e, t, i) {
            return T.get(e, t, i, "json");
          },
          getScript: function (e, t) {
            return T.get(e, void 0, t, "script");
          },
        }),
        T.each(["get", "post"], function (e, t) {
          T[t] = function (e, i, n, o) {
            return (
              h(i) && ((o = o || n), (n = i), (i = void 0)),
              T.ajax(
                T.extend(
                  { url: e, type: t, dataType: o, data: i, success: n },
                  T.isPlainObject(e) && e,
                ),
              )
            );
          };
        }),
        T.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (T._evalUrl = function (e, t, i) {
          return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              T.globalEval(e, t, i);
            },
          });
        }),
        T.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (h(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return h(e)
              ? this.each(function (t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = T(this),
                    i = t.contents();
                  i.length ? i.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = h(e);
            return this.each(function (i) {
              T(this).wrapAll(t ? e.call(this, i) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new e.XMLHttpRequest();
          } catch (e) {}
        });
      var Qt = { 0: 200, 1223: 204 },
        Kt = T.ajaxSettings.xhr();
      (f.cors = !!Kt && "withCredentials" in Kt),
        (f.ajax = Kt = !!Kt),
        T.ajaxTransport(function (t) {
          var i, n;
          if (f.cors || (Kt && !t.crossDomain))
            return {
              send: function (o, s) {
                var r,
                  a = t.xhr();
                if (
                  (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (r in t.xhrFields) a[r] = t.xhrFields[r];
                for (r in (t.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  a.setRequestHeader(r, o[r]);
                (i = function (e) {
                  return function () {
                    i &&
                      ((i =
                        n =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                          ? "number" != typeof a.status
                            ? s(0, "error")
                            : s(a.status, a.statusText)
                          : s(
                              Qt[a.status] || a.status,
                              a.statusText,
                              "text" !== (a.responseType || "text") ||
                                "string" != typeof a.responseText
                                ? { binary: a.response }
                                : { text: a.responseText },
                              a.getAllResponseHeaders(),
                            ));
                  };
                }),
                  (a.onload = i()),
                  (n = a.onerror = a.ontimeout = i("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = n)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          e.setTimeout(function () {
                            i && n();
                          });
                      }),
                  (i = i("abort"));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (o) {
                  if (i) throw o;
                }
              },
              abort: function () {
                i && i();
              },
            };
        }),
        T.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return T.globalEval(e), e;
            },
          },
        }),
        T.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        T.ajaxTransport("script", function (e) {
          var t, i;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (n, o) {
                (t = T("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (i = function (e) {
                      t.remove(),
                        (i = null),
                        e && o("error" === e.type ? 404 : 200, e.type);
                    }),
                  )),
                  m.head.appendChild(t[0]);
              },
              abort: function () {
                i && i();
              },
            };
        });
      var Gt,
        Jt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Jt.pop() || T.expando + "_" + Et.guid++;
          return (this[e] = !0), e;
        },
      }),
        T.ajaxPrefilter("json jsonp", function (t, i, n) {
          var o,
            s,
            r,
            a =
              !1 !== t.jsonp &&
              (Zt.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded",
                    ) &&
                  Zt.test(t.data) &&
                  "data");
          if (a || "jsonp" === t.dataTypes[0])
            return (
              (o = t.jsonpCallback =
                h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
              a
                ? (t[a] = t[a].replace(Zt, "$1" + o))
                : !1 !== t.jsonp &&
                  (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
              (t.converters["script json"] = function () {
                return r || T.error(o + " was not called"), r[0];
              }),
              (t.dataTypes[0] = "json"),
              (s = e[o]),
              (e[o] = function () {
                r = arguments;
              }),
              n.always(function () {
                void 0 === s ? T(e).removeProp(o) : (e[o] = s),
                  t[o] && ((t.jsonpCallback = i.jsonpCallback), Jt.push(o)),
                  r && h(s) && s(r[0]),
                  (r = s = void 0);
              }),
              "script"
            );
        }),
        (f.createHTMLDocument =
          (((Gt = m.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Gt.childNodes.length)),
        (T.parseHTML = function (e, t, i) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((i = t), (t = !1)),
              t ||
                (f.createHTMLDocument
                  ? (((n = (t =
                      m.implementation.createHTMLDocument("")).createElement(
                      "base",
                    )).href = m.location.href),
                    t.head.appendChild(n))
                  : (t = m)),
              (s = !i && []),
              (o = I.exec(e))
                ? [t.createElement(o[1])]
                : ((o = Ae([e], t, s)),
                  s && s.length && T(s).remove(),
                  T.merge([], o.childNodes)));
          var n, o, s;
        }),
        (T.fn.load = function (e, t, i) {
          var n,
            o,
            s,
            r = this,
            a = e.indexOf(" ");
          return (
            -1 < a && ((n = Tt(e.slice(a))), (e = e.slice(0, a))),
            h(t)
              ? ((i = t), (t = void 0))
              : t && "object" == typeof t && (o = "POST"),
            0 < r.length &&
              T.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (s = arguments),
                    r.html(n ? T("<div>").append(T.parseHTML(e)).find(n) : e);
                })
                .always(
                  i &&
                    function (e, t) {
                      r.each(function () {
                        i.apply(this, s || [e.responseText, t, e]);
                      });
                    },
                ),
            this
          );
        }),
        (T.expr.pseudos.animated = function (e) {
          return T.grep(T.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (e, t, i) {
            var n,
              o,
              s,
              r,
              a,
              l,
              c = T.css(e, "position"),
              d = T(e),
              u = {};
            "static" === c && (e.style.position = "relative"),
              (a = d.offset()),
              (s = T.css(e, "top")),
              (l = T.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              -1 < (s + l).indexOf("auto")
                ? ((r = (n = d.position()).top), (o = n.left))
                : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
              h(t) && (t = t.call(e, i, T.extend({}, a))),
              null != t.top && (u.top = t.top - a.top + r),
              null != t.left && (u.left = t.left - a.left + o),
              "using" in t ? t.using.call(e, u) : d.css(u);
          },
        }),
        T.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              i,
              n = this[0];
            return n
              ? n.getClientRects().length
                ? ((t = n.getBoundingClientRect()),
                  (i = n.ownerDocument.defaultView),
                  { top: t.top + i.pageYOffset, left: t.left + i.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                i,
                n = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === T.css(n, "position"))
                t = n.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    i = n.ownerDocument,
                    e = n.offsetParent || i.documentElement;
                  e &&
                  (e === i.body || e === i.documentElement) &&
                  "static" === T.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== n &&
                  1 === e.nodeType &&
                  (((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
                  (o.left += T.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - T.css(n, "marginTop", !0),
                left: t.left - o.left - T.css(n, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === T.css(e, "position");

              )
                e = e.offsetParent;
              return e || pe;
            });
          },
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var i = "pageYOffset" === t;
            T.fn[e] = function (n) {
              return G(
                this,
                function (e, n, o) {
                  var s;
                  if (
                    (g(e) ? (s = e) : 9 === e.nodeType && (s = e.defaultView),
                    void 0 === o)
                  )
                    return s ? s[t] : e[n];
                  s
                    ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset)
                    : (e[n] = o);
                },
                e,
                n,
                arguments.length,
              );
            };
          },
        ),
        T.each(["top", "left"], function (e, t) {
          T.cssHooks[t] = Qe(f.pixelPosition, function (e, i) {
            if (i)
              return (i = Ve(e, t)), Be.test(i) ? T(e).position()[t] + "px" : i;
          });
        }),
        T.each({ Height: "height", Width: "width" }, function (e, t) {
          T.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (i, n) {
              T.fn[n] = function (o, s) {
                var r = arguments.length && (i || "boolean" != typeof o),
                  a = i || (!0 === o || !0 === s ? "margin" : "border");
                return G(
                  this,
                  function (t, i, o) {
                    var s;
                    return g(t)
                      ? 0 === n.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                        ? ((s = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            s["scroll" + e],
                            t.body["offset" + e],
                            s["offset" + e],
                            s["client" + e],
                          ))
                        : void 0 === o
                          ? T.css(t, i, a)
                          : T.style(t, i, o, a);
                  },
                  t,
                  r ? o : void 0,
                  r,
                );
              };
            },
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            T.fn[t] = function (e) {
              return this.on(t, e);
            };
          },
        ),
        T.fn.extend({
          bind: function (e, t, i) {
            return this.on(e, null, t, i);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, i, n) {
            return this.on(t, e, i, n);
          },
          undelegate: function (e, t, i) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", i);
          },
          hover: function (e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e);
          },
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " ",
          ),
          function (e, t) {
            T.fn[t] = function (e, i) {
              return 0 < arguments.length
                ? this.on(t, null, e, i)
                : this.trigger(t);
            };
          },
        );
      var ei = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (T.proxy = function (e, t) {
        var i, n, s;
        if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), h(e)))
          return (
            (n = o.call(arguments, 2)),
            ((s = function () {
              return e.apply(t || this, n.concat(o.call(arguments)));
            }).guid = e.guid =
              e.guid || T.guid++),
            s
          );
      }),
        (T.holdReady = function (e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = k),
        (T.isFunction = h),
        (T.isWindow = g),
        (T.camelCase = te),
        (T.type = b),
        (T.now = Date.now),
        (T.isNumeric = function (e) {
          var t = T.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (T.trim = function (e) {
          return null == e ? "" : (e + "").replace(ei, "$1");
        }),
        "function" == typeof define &&
          define.amd &&
          define("jquery", [], function () {
            return T;
          });
      var ti = e.jQuery,
        ii = e.$;
      return (
        (T.noConflict = function (t) {
          return (
            e.$ === T && (e.$ = ii), t && e.jQuery === T && (e.jQuery = ti), T
          );
        }),
        void 0 === t && (e.jQuery = e.$ = T),
        T
      );
    }),
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? i(t, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return i(e);
            })
      : i(t),
    (n = function (e) {
      var t,
        i = window.Slick || {};
      (t = 0),
        ((i = function (i, n) {
          var o,
            s = this;
          (s.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: e(i),
            appendDots: e(i),
            arrows: !0,
            asNavFor: null,
            prevArrow:
              '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow:
              '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (t, i) {
              return e('<button type="button" />').text(i + 1);
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: 0.35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3,
          }),
            (s.initials = {
              animating: !1,
              dragging: !1,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: !1,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: !1,
              slideOffset: 0,
              swipeLeft: null,
              swiping: !1,
              $list: null,
              touchObject: {},
              transformsEnabled: !1,
              unslicked: !1,
            }),
            e.extend(s, s.initials),
            (s.activeBreakpoint = null),
            (s.animType = null),
            (s.animProp = null),
            (s.breakpoints = []),
            (s.breakpointSettings = []),
            (s.cssTransitions = !1),
            (s.focussed = !1),
            (s.interrupted = !1),
            (s.hidden = "hidden"),
            (s.paused = !0),
            (s.positionProp = null),
            (s.respondTo = null),
            (s.rowCount = 1),
            (s.shouldClick = !0),
            (s.$slider = e(i)),
            (s.$slidesCache = null),
            (s.transformType = null),
            (s.transitionType = null),
            (s.visibilityChange = "visibilitychange"),
            (s.windowWidth = 0),
            (s.windowTimer = null),
            (o = e(i).data("slick") || {}),
            (s.options = e.extend({}, s.defaults, n, o)),
            (s.currentSlide = s.options.initialSlide),
            (s.originalSettings = s.options),
            void 0 !== document.mozHidden
              ? ((s.hidden = "mozHidden"),
                (s.visibilityChange = "mozvisibilitychange"))
              : void 0 !== document.webkitHidden &&
                ((s.hidden = "webkitHidden"),
                (s.visibilityChange = "webkitvisibilitychange")),
            (s.autoPlay = e.proxy(s.autoPlay, s)),
            (s.autoPlayClear = e.proxy(s.autoPlayClear, s)),
            (s.autoPlayIterator = e.proxy(s.autoPlayIterator, s)),
            (s.changeSlide = e.proxy(s.changeSlide, s)),
            (s.clickHandler = e.proxy(s.clickHandler, s)),
            (s.selectHandler = e.proxy(s.selectHandler, s)),
            (s.setPosition = e.proxy(s.setPosition, s)),
            (s.swipeHandler = e.proxy(s.swipeHandler, s)),
            (s.dragHandler = e.proxy(s.dragHandler, s)),
            (s.keyHandler = e.proxy(s.keyHandler, s)),
            (s.instanceUid = t++),
            (s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
            s.registerBreakpoints(),
            s.init(!0);
        }).prototype.activateADA = function () {
          this.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
        }),
        (i.prototype.addSlide = i.prototype.slickAdd =
          function (t, i, n) {
            var o = this;
            if ("boolean" == typeof i) (n = i), (i = null);
            else if (i < 0 || i >= o.slideCount) return !1;
            o.unload(),
              "number" == typeof i
                ? 0 === i && 0 === o.$slides.length
                  ? e(t).appendTo(o.$slideTrack)
                  : n
                    ? e(t).insertBefore(o.$slides.eq(i))
                    : e(t).insertAfter(o.$slides.eq(i))
                : !0 === n
                  ? e(t).prependTo(o.$slideTrack)
                  : e(t).appendTo(o.$slideTrack),
              (o.$slides = o.$slideTrack.children(this.options.slide)),
              o.$slideTrack.children(this.options.slide).detach(),
              o.$slideTrack.append(o.$slides),
              o.$slides.each(function (t, i) {
                e(i).attr("data-slick-index", t);
              }),
              (o.$slidesCache = o.$slides),
              o.reinit();
          }),
        (i.prototype.animateHeight = function () {
          var e = this;
          if (
            1 === e.options.slidesToShow &&
            !0 === e.options.adaptiveHeight &&
            !1 === e.options.vertical
          ) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({ height: t }, e.options.speed);
          }
        }),
        (i.prototype.animateSlide = function (t, i) {
          var n = {},
            o = this;
          o.animateHeight(),
            !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
            !1 === o.transformsEnabled
              ? !1 === o.options.vertical
                ? o.$slideTrack.animate(
                    { left: t },
                    o.options.speed,
                    o.options.easing,
                    i,
                  )
                : o.$slideTrack.animate(
                    { top: t },
                    o.options.speed,
                    o.options.easing,
                    i,
                  )
              : !1 === o.cssTransitions
                ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
                  e({ animStart: o.currentLeft }).animate(
                    { animStart: t },
                    {
                      duration: o.options.speed,
                      easing: o.options.easing,
                      step: function (e) {
                        (e = Math.ceil(e)),
                          !1 === o.options.vertical
                            ? ((n[o.animType] = "translate(" + e + "px, 0px)"),
                              o.$slideTrack.css(n))
                            : ((n[o.animType] = "translate(0px," + e + "px)"),
                              o.$slideTrack.css(n));
                      },
                      complete: function () {
                        i && i.call();
                      },
                    },
                  ))
                : (o.applyTransition(),
                  (t = Math.ceil(t)),
                  !1 === o.options.vertical
                    ? (n[o.animType] = "translate3d(" + t + "px, 0px, 0px)")
                    : (n[o.animType] = "translate3d(0px," + t + "px, 0px)"),
                  o.$slideTrack.css(n),
                  i &&
                    setTimeout(function () {
                      o.disableTransition(), i.call();
                    }, o.options.speed));
        }),
        (i.prototype.getNavTarget = function () {
          var t = this.options.asNavFor;
          return t && null !== t && (t = e(t).not(this.$slider)), t;
        }),
        (i.prototype.asNavFor = function (t) {
          var i = this.getNavTarget();
          null !== i &&
            "object" == typeof i &&
            i.each(function () {
              var i = e(this).slick("getSlick");
              i.unslicked || i.slideHandler(t, !0);
            });
        }),
        (i.prototype.applyTransition = function (e) {
          var t = this,
            i = {};
          !1 === t.options.fade
            ? (i[t.transitionType] =
                t.transformType +
                " " +
                t.options.speed +
                "ms " +
                t.options.cssEase)
            : (i[t.transitionType] =
                "opacity " + t.options.speed + "ms " + t.options.cssEase),
            !1 === t.options.fade
              ? t.$slideTrack.css(i)
              : t.$slides.eq(e).css(i);
        }),
        (i.prototype.autoPlay = function () {
          var e = this;
          e.autoPlayClear(),
            e.slideCount > e.options.slidesToShow &&
              (e.autoPlayTimer = setInterval(
                e.autoPlayIterator,
                e.options.autoplaySpeed,
              ));
        }),
        (i.prototype.autoPlayClear = function () {
          this.autoPlayTimer && clearInterval(this.autoPlayTimer);
        }),
        (i.prototype.autoPlayIterator = function () {
          var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
          e.paused ||
            e.interrupted ||
            e.focussed ||
            (!1 === e.options.infinite &&
              (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
                ? (e.direction = 0)
                : 0 === e.direction &&
                  ((t = e.currentSlide - e.options.slidesToScroll),
                  e.currentSlide - 1 == 0 && (e.direction = 1))),
            e.slideHandler(t));
        }),
        (i.prototype.buildArrows = function () {
          var t = this;
          !0 === t.options.arrows &&
            ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
            (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
            t.slideCount > t.options.slidesToShow
              ? (t.$prevArrow
                  .removeClass("slick-hidden")
                  .removeAttr("aria-hidden tabindex"),
                t.$nextArrow
                  .removeClass("slick-hidden")
                  .removeAttr("aria-hidden tabindex"),
                t.htmlExpr.test(t.options.prevArrow) &&
                  t.$prevArrow.prependTo(t.options.appendArrows),
                t.htmlExpr.test(t.options.nextArrow) &&
                  t.$nextArrow.appendTo(t.options.appendArrows),
                !0 !== t.options.infinite &&
                  t.$prevArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"))
              : t.$prevArrow
                  .add(t.$nextArrow)
                  .addClass("slick-hidden")
                  .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (i.prototype.buildDots = function () {
          var t,
            i,
            n = this;
          if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
            for (
              n.$slider.addClass("slick-dotted"),
                i = e("<ul />").addClass(n.options.dotsClass),
                t = 0;
              t <= n.getDotCount();
              t += 1
            )
              i.append(
                e("<li />").append(n.options.customPaging.call(this, n, t)),
              );
            (n.$dots = i.appendTo(n.options.appendDots)),
              n.$dots.find("li").first().addClass("slick-active");
          }
        }),
        (i.prototype.buildOut = function () {
          var t = this;
          (t.$slides = t.$slider
            .children(t.options.slide + ":not(.slick-cloned)")
            .addClass("slick-slide")),
            (t.slideCount = t.$slides.length),
            t.$slides.each(function (t, i) {
              e(i)
                .attr("data-slick-index", t)
                .data("originalStyling", e(i).attr("style") || "");
            }),
            t.$slider.addClass("slick-slider"),
            (t.$slideTrack =
              0 === t.slideCount
                ? e('<div class="slick-track"/>').appendTo(t.$slider)
                : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
            (t.$list = t.$slideTrack
              .wrap('<div class="slick-list"/>')
              .parent()),
            t.$slideTrack.css("opacity", 0),
            (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
              (t.options.slidesToScroll = 1),
            e("img[data-lazy]", t.$slider)
              .not("[src]")
              .addClass("slick-loading"),
            t.setupInfinite(),
            t.buildArrows(),
            t.buildDots(),
            t.updateDots(),
            t.setSlideClasses(
              "number" == typeof t.currentSlide ? t.currentSlide : 0,
            ),
            !0 === t.options.draggable && t.$list.addClass("draggable");
        }),
        (i.prototype.buildRows = function () {
          var e,
            t,
            i,
            n,
            o,
            s,
            r,
            a = this;
          if (
            ((n = document.createDocumentFragment()),
            (s = a.$slider.children()),
            a.options.rows > 0)
          ) {
            for (
              r = a.options.slidesPerRow * a.options.rows,
                o = Math.ceil(s.length / r),
                e = 0;
              e < o;
              e++
            ) {
              var l = document.createElement("div");
              for (t = 0; t < a.options.rows; t++) {
                var c = document.createElement("div");
                for (i = 0; i < a.options.slidesPerRow; i++) {
                  var d = e * r + (t * a.options.slidesPerRow + i);
                  s.get(d) && c.appendChild(s.get(d));
                }
                l.appendChild(c);
              }
              n.appendChild(l);
            }
            a.$slider.empty().append(n),
              a.$slider
                .children()
                .children()
                .children()
                .css({
                  width: 100 / a.options.slidesPerRow + "%",
                  display: "inline-block",
                });
          }
        }),
        (i.prototype.checkResponsive = function (t, i) {
          var n,
            o,
            s,
            r = this,
            a = !1,
            l = r.$slider.width(),
            c = window.innerWidth || e(window).width();
          if (
            ("window" === r.respondTo
              ? (s = c)
              : "slider" === r.respondTo
                ? (s = l)
                : "min" === r.respondTo && (s = Math.min(c, l)),
            r.options.responsive &&
              r.options.responsive.length &&
              null !== r.options.responsive)
          ) {
            for (n in ((o = null), r.breakpoints))
              r.breakpoints.hasOwnProperty(n) &&
                (!1 === r.originalSettings.mobileFirst
                  ? s < r.breakpoints[n] && (o = r.breakpoints[n])
                  : s > r.breakpoints[n] && (o = r.breakpoints[n]));
            null !== o
              ? null !== r.activeBreakpoint
                ? (o !== r.activeBreakpoint || i) &&
                  ((r.activeBreakpoint = o),
                  "unslick" === r.breakpointSettings[o]
                    ? r.unslick(o)
                    : ((r.options = e.extend(
                        {},
                        r.originalSettings,
                        r.breakpointSettings[o],
                      )),
                      !0 === t && (r.currentSlide = r.options.initialSlide),
                      r.refresh(t)),
                  (a = o))
                : ((r.activeBreakpoint = o),
                  "unslick" === r.breakpointSettings[o]
                    ? r.unslick(o)
                    : ((r.options = e.extend(
                        {},
                        r.originalSettings,
                        r.breakpointSettings[o],
                      )),
                      !0 === t && (r.currentSlide = r.options.initialSlide),
                      r.refresh(t)),
                  (a = o))
              : null !== r.activeBreakpoint &&
                ((r.activeBreakpoint = null),
                (r.options = r.originalSettings),
                !0 === t && (r.currentSlide = r.options.initialSlide),
                r.refresh(t),
                (a = o)),
              t || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
          }
        }),
        (i.prototype.changeSlide = function (t, i) {
          var n,
            o,
            s = this,
            r = e(t.currentTarget);
          switch (
            (r.is("a") && t.preventDefault(),
            r.is("li") || (r = r.closest("li")),
            (n =
              s.slideCount % s.options.slidesToScroll != 0
                ? 0
                : (s.slideCount - s.currentSlide) % s.options.slidesToScroll),
            t.data.message)
          ) {
            case "previous":
              (o =
                0 === n
                  ? s.options.slidesToScroll
                  : s.options.slidesToShow - n),
                s.slideCount > s.options.slidesToShow &&
                  s.slideHandler(s.currentSlide - o, !1, i);
              break;
            case "next":
              (o = 0 === n ? s.options.slidesToScroll : n),
                s.slideCount > s.options.slidesToShow &&
                  s.slideHandler(s.currentSlide + o, !1, i);
              break;
            case "index":
              var a =
                0 === t.data.index
                  ? 0
                  : t.data.index || r.index() * s.options.slidesToScroll;
              s.slideHandler(s.checkNavigable(a), !1, i),
                r.children().trigger("focus");
              break;
            default:
              return;
          }
        }),
        (i.prototype.checkNavigable = function (e) {
          var t, i;
          if (((i = 0), e > (t = this.getNavigableIndexes())[t.length - 1]))
            e = t[t.length - 1];
          else
            for (var n in t) {
              if (e < t[n]) {
                e = i;
                break;
              }
              i = t[n];
            }
          return e;
        }),
        (i.prototype.cleanUpEvents = function () {
          var t = this;
          t.options.dots &&
            null !== t.$dots &&
            (e("li", t.$dots)
              .off("click.slick", t.changeSlide)
              .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
              .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
            !0 === t.options.accessibility &&
              t.$dots.off("keydown.slick", t.keyHandler)),
            t.$slider.off("focus.slick blur.slick"),
            !0 === t.options.arrows &&
              t.slideCount > t.options.slidesToShow &&
              (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
              t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
              !0 === t.options.accessibility &&
                (t.$prevArrow &&
                  t.$prevArrow.off("keydown.slick", t.keyHandler),
                t.$nextArrow &&
                  t.$nextArrow.off("keydown.slick", t.keyHandler))),
            t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
            t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
            t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
            t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
            t.$list.off("click.slick", t.clickHandler),
            e(document).off(t.visibilityChange, t.visibility),
            t.cleanUpSlideEvents(),
            !0 === t.options.accessibility &&
              t.$list.off("keydown.slick", t.keyHandler),
            !0 === t.options.focusOnSelect &&
              e(t.$slideTrack).children().off("click.slick", t.selectHandler),
            e(window).off(
              "orientationchange.slick.slick-" + t.instanceUid,
              t.orientationChange,
            ),
            e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
            e("[draggable!=true]", t.$slideTrack).off(
              "dragstart",
              t.preventDefault,
            ),
            e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
        }),
        (i.prototype.cleanUpSlideEvents = function () {
          var t = this;
          t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
            t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
        }),
        (i.prototype.cleanUpRows = function () {
          var e,
            t = this;
          t.options.rows > 0 &&
            ((e = t.$slides.children().children()).removeAttr("style"),
            t.$slider.empty().append(e));
        }),
        (i.prototype.clickHandler = function (e) {
          !1 === this.shouldClick &&
            (e.stopImmediatePropagation(),
            e.stopPropagation(),
            e.preventDefault());
        }),
        (i.prototype.destroy = function (t) {
          var i = this;
          i.autoPlayClear(),
            (i.touchObject = {}),
            i.cleanUpEvents(),
            e(".slick-cloned", i.$slider).detach(),
            i.$dots && i.$dots.remove(),
            i.$prevArrow &&
              i.$prevArrow.length &&
              (i.$prevArrow
                .removeClass("slick-disabled slick-arrow slick-hidden")
                .removeAttr("aria-hidden aria-disabled tabindex")
                .css("display", ""),
              i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
            i.$nextArrow &&
              i.$nextArrow.length &&
              (i.$nextArrow
                .removeClass("slick-disabled slick-arrow slick-hidden")
                .removeAttr("aria-hidden aria-disabled tabindex")
                .css("display", ""),
              i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
            i.$slides &&
              (i.$slides
                .removeClass(
                  "slick-slide slick-active slick-center slick-visible slick-current",
                )
                .removeAttr("aria-hidden")
                .removeAttr("data-slick-index")
                .each(function () {
                  e(this).attr("style", e(this).data("originalStyling"));
                }),
              i.$slideTrack.children(this.options.slide).detach(),
              i.$slideTrack.detach(),
              i.$list.detach(),
              i.$slider.append(i.$slides)),
            i.cleanUpRows(),
            i.$slider.removeClass("slick-slider"),
            i.$slider.removeClass("slick-initialized"),
            i.$slider.removeClass("slick-dotted"),
            (i.unslicked = !0),
            t || i.$slider.trigger("destroy", [i]);
        }),
        (i.prototype.disableTransition = function (e) {
          var t = this,
            i = {};
          (i[t.transitionType] = ""),
            !1 === t.options.fade
              ? t.$slideTrack.css(i)
              : t.$slides.eq(e).css(i);
        }),
        (i.prototype.fadeSlide = function (e, t) {
          var i = this;
          !1 === i.cssTransitions
            ? (i.$slides.eq(e).css({ zIndex: i.options.zIndex }),
              i.$slides
                .eq(e)
                .animate({ opacity: 1 }, i.options.speed, i.options.easing, t))
            : (i.applyTransition(e),
              i.$slides.eq(e).css({ opacity: 1, zIndex: i.options.zIndex }),
              t &&
                setTimeout(function () {
                  i.disableTransition(e), t.call();
                }, i.options.speed));
        }),
        (i.prototype.fadeSlideOut = function (e) {
          var t = this;
          !1 === t.cssTransitions
            ? t.$slides
                .eq(e)
                .animate(
                  { opacity: 0, zIndex: t.options.zIndex - 2 },
                  t.options.speed,
                  t.options.easing,
                )
            : (t.applyTransition(e),
              t.$slides
                .eq(e)
                .css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
        }),
        (i.prototype.filterSlides = i.prototype.slickFilter =
          function (e) {
            var t = this;
            null !== e &&
              ((t.$slidesCache = t.$slides),
              t.unload(),
              t.$slideTrack.children(this.options.slide).detach(),
              t.$slidesCache.filter(e).appendTo(t.$slideTrack),
              t.reinit());
          }),
        (i.prototype.focusHandler = function () {
          var t = this;
          t.$slider
            .off("focus.slick blur.slick")
            .on("focus.slick blur.slick", "*", function (i) {
              i.stopImmediatePropagation();
              var n = e(this);
              setTimeout(function () {
                t.options.pauseOnFocus &&
                  ((t.focussed = n.is(":focus")), t.autoPlay());
              }, 0);
            });
        }),
        (i.prototype.getCurrent = i.prototype.slickCurrentSlide =
          function () {
            return this.currentSlide;
          }),
        (i.prototype.getDotCount = function () {
          var e = this,
            t = 0,
            i = 0,
            n = 0;
          if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++n;
            else
              for (; t < e.slideCount; )
                ++n,
                  (t = i + e.options.slidesToScroll),
                  (i +=
                    e.options.slidesToScroll <= e.options.slidesToShow
                      ? e.options.slidesToScroll
                      : e.options.slidesToShow);
          else if (!0 === e.options.centerMode) n = e.slideCount;
          else if (e.options.asNavFor)
            for (; t < e.slideCount; )
              ++n,
                (t = i + e.options.slidesToScroll),
                (i +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
          else
            n =
              1 +
              Math.ceil(
                (e.slideCount - e.options.slidesToShow) /
                  e.options.slidesToScroll,
              );
          return n - 1;
        }),
        (i.prototype.getLeft = function (e) {
          var t,
            i,
            n,
            o,
            s = this,
            r = 0;
          return (
            (s.slideOffset = 0),
            (i = s.$slides.first().outerHeight(!0)),
            !0 === s.options.infinite
              ? (s.slideCount > s.options.slidesToShow &&
                  ((s.slideOffset = s.slideWidth * s.options.slidesToShow * -1),
                  (o = -1),
                  !0 === s.options.vertical &&
                    !0 === s.options.centerMode &&
                    (2 === s.options.slidesToShow
                      ? (o = -1.5)
                      : 1 === s.options.slidesToShow && (o = -2)),
                  (r = i * s.options.slidesToShow * o)),
                s.slideCount % s.options.slidesToScroll != 0 &&
                  e + s.options.slidesToScroll > s.slideCount &&
                  s.slideCount > s.options.slidesToShow &&
                  (e > s.slideCount
                    ? ((s.slideOffset =
                        (s.options.slidesToShow - (e - s.slideCount)) *
                        s.slideWidth *
                        -1),
                      (r =
                        (s.options.slidesToShow - (e - s.slideCount)) * i * -1))
                    : ((s.slideOffset =
                        (s.slideCount % s.options.slidesToScroll) *
                        s.slideWidth *
                        -1),
                      (r =
                        (s.slideCount % s.options.slidesToScroll) * i * -1))))
              : e + s.options.slidesToShow > s.slideCount &&
                ((s.slideOffset =
                  (e + s.options.slidesToShow - s.slideCount) * s.slideWidth),
                (r = (e + s.options.slidesToShow - s.slideCount) * i)),
            s.slideCount <= s.options.slidesToShow &&
              ((s.slideOffset = 0), (r = 0)),
            !0 === s.options.centerMode &&
            s.slideCount <= s.options.slidesToShow
              ? (s.slideOffset =
                  (s.slideWidth * Math.floor(s.options.slidesToShow)) / 2 -
                  (s.slideWidth * s.slideCount) / 2)
              : !0 === s.options.centerMode && !0 === s.options.infinite
                ? (s.slideOffset +=
                    s.slideWidth * Math.floor(s.options.slidesToShow / 2) -
                    s.slideWidth)
                : !0 === s.options.centerMode &&
                  ((s.slideOffset = 0),
                  (s.slideOffset +=
                    s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
            (t =
              !1 === s.options.vertical
                ? e * s.slideWidth * -1 + s.slideOffset
                : e * i * -1 + r),
            !0 === s.options.variableWidth &&
              ((n =
                s.slideCount <= s.options.slidesToShow ||
                !1 === s.options.infinite
                  ? s.$slideTrack.children(".slick-slide").eq(e)
                  : s.$slideTrack
                      .children(".slick-slide")
                      .eq(e + s.options.slidesToShow)),
              (t =
                !0 === s.options.rtl
                  ? n[0]
                    ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width())
                    : 0
                  : n[0]
                    ? -1 * n[0].offsetLeft
                    : 0),
              !0 === s.options.centerMode &&
                ((n =
                  s.slideCount <= s.options.slidesToShow ||
                  !1 === s.options.infinite
                    ? s.$slideTrack.children(".slick-slide").eq(e)
                    : s.$slideTrack
                        .children(".slick-slide")
                        .eq(e + s.options.slidesToShow + 1)),
                (t =
                  !0 === s.options.rtl
                    ? n[0]
                      ? -1 *
                        (s.$slideTrack.width() - n[0].offsetLeft - n.width())
                      : 0
                    : n[0]
                      ? -1 * n[0].offsetLeft
                      : 0),
                (t += (s.$list.width() - n.outerWidth()) / 2))),
            t
          );
        }),
        (i.prototype.getOption = i.prototype.slickGetOption =
          function (e) {
            return this.options[e];
          }),
        (i.prototype.getNavigableIndexes = function () {
          var e,
            t = this,
            i = 0,
            n = 0,
            o = [];
          for (
            !1 === t.options.infinite
              ? (e = t.slideCount)
              : ((i = -1 * t.options.slidesToScroll),
                (n = -1 * t.options.slidesToScroll),
                (e = 2 * t.slideCount));
            i < e;

          )
            o.push(i),
              (i = n + t.options.slidesToScroll),
              (n +=
                t.options.slidesToScroll <= t.options.slidesToShow
                  ? t.options.slidesToScroll
                  : t.options.slidesToShow);
          return o;
        }),
        (i.prototype.getSlick = function () {
          return this;
        }),
        (i.prototype.getSlideCount = function () {
          var t,
            i,
            n = this;
          return (
            (i =
              !0 === n.options.centerMode
                ? n.slideWidth * Math.floor(n.options.slidesToShow / 2)
                : 0),
            !0 === n.options.swipeToSlide
              ? (n.$slideTrack.find(".slick-slide").each(function (o, s) {
                  if (
                    s.offsetLeft - i + e(s).outerWidth() / 2 >
                    -1 * n.swipeLeft
                  )
                    return (t = s), !1;
                }),
                Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1)
              : n.options.slidesToScroll
          );
        }),
        (i.prototype.goTo = i.prototype.slickGoTo =
          function (e, t) {
            this.changeSlide(
              { data: { message: "index", index: parseInt(e) } },
              t,
            );
          }),
        (i.prototype.init = function (t) {
          var i = this;
          e(i.$slider).hasClass("slick-initialized") ||
            (e(i.$slider).addClass("slick-initialized"),
            i.buildRows(),
            i.buildOut(),
            i.setProps(),
            i.startLoad(),
            i.loadSlider(),
            i.initializeEvents(),
            i.updateArrows(),
            i.updateDots(),
            i.checkResponsive(!0),
            i.focusHandler()),
            t && i.$slider.trigger("init", [i]),
            !0 === i.options.accessibility && i.initADA(),
            i.options.autoplay && ((i.paused = !1), i.autoPlay());
        }),
        (i.prototype.initADA = function () {
          var t = this,
            i = Math.ceil(t.slideCount / t.options.slidesToShow),
            n = t.getNavigableIndexes().filter(function (e) {
              return e >= 0 && e < t.slideCount;
            });
          t.$slides
            .add(t.$slideTrack.find(".slick-cloned"))
            .attr({ "aria-hidden": "true", tabindex: "-1" })
            .find("a, input, button, select")
            .attr({ tabindex: "-1" }),
            null !== t.$dots &&
              (t.$slides
                .not(t.$slideTrack.find(".slick-cloned"))
                .each(function (i) {
                  var o = n.indexOf(i);
                  if (
                    (e(this).attr({
                      role: "tabpanel",
                      id: "slick-slide" + t.instanceUid + i,
                      tabindex: -1,
                    }),
                    -1 !== o)
                  ) {
                    var s = "slick-slide-control" + t.instanceUid + o;
                    e("#" + s).length &&
                      e(this).attr({ "aria-describedby": s });
                  }
                }),
              t.$dots
                .attr("role", "tablist")
                .find("li")
                .each(function (o) {
                  var s = n[o];
                  e(this).attr({ role: "presentation" }),
                    e(this)
                      .find("button")
                      .first()
                      .attr({
                        role: "tab",
                        id: "slick-slide-control" + t.instanceUid + o,
                        "aria-controls": "slick-slide" + t.instanceUid + s,
                        "aria-label": o + 1 + " of " + i,
                        "aria-selected": null,
                        tabindex: "-1",
                      });
                })
                .eq(t.currentSlide)
                .find("button")
                .attr({ "aria-selected": "true", tabindex: "0" })
                .end());
          for (
            var o = t.currentSlide, s = o + t.options.slidesToShow;
            o < s;
            o++
          )
            t.options.focusOnChange
              ? t.$slides.eq(o).attr({ tabindex: "0" })
              : t.$slides.eq(o).removeAttr("tabindex");
          t.activateADA();
        }),
        (i.prototype.initArrowEvents = function () {
          var e = this;
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow
              .off("click.slick")
              .on("click.slick", { message: "previous" }, e.changeSlide),
            e.$nextArrow
              .off("click.slick")
              .on("click.slick", { message: "next" }, e.changeSlide),
            !0 === e.options.accessibility &&
              (e.$prevArrow.on("keydown.slick", e.keyHandler),
              e.$nextArrow.on("keydown.slick", e.keyHandler)));
        }),
        (i.prototype.initDotEvents = function () {
          var t = this;
          !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            (e("li", t.$dots).on(
              "click.slick",
              { message: "index" },
              t.changeSlide,
            ),
            !0 === t.options.accessibility &&
              t.$dots.on("keydown.slick", t.keyHandler)),
            !0 === t.options.dots &&
              !0 === t.options.pauseOnDotsHover &&
              t.slideCount > t.options.slidesToShow &&
              e("li", t.$dots)
                .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
        }),
        (i.prototype.initSlideEvents = function () {
          var t = this;
          t.options.pauseOnHover &&
            (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
            t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
        }),
        (i.prototype.initializeEvents = function () {
          var t = this;
          t.initArrowEvents(),
            t.initDotEvents(),
            t.initSlideEvents(),
            t.$list.on(
              "touchstart.slick mousedown.slick",
              { action: "start" },
              t.swipeHandler,
            ),
            t.$list.on(
              "touchmove.slick mousemove.slick",
              { action: "move" },
              t.swipeHandler,
            ),
            t.$list.on(
              "touchend.slick mouseup.slick",
              { action: "end" },
              t.swipeHandler,
            ),
            t.$list.on(
              "touchcancel.slick mouseleave.slick",
              { action: "end" },
              t.swipeHandler,
            ),
            t.$list.on("click.slick", t.clickHandler),
            e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
            !0 === t.options.accessibility &&
              t.$list.on("keydown.slick", t.keyHandler),
            !0 === t.options.focusOnSelect &&
              e(t.$slideTrack).children().on("click.slick", t.selectHandler),
            e(window).on(
              "orientationchange.slick.slick-" + t.instanceUid,
              e.proxy(t.orientationChange, t),
            ),
            e(window).on(
              "resize.slick.slick-" + t.instanceUid,
              e.proxy(t.resize, t),
            ),
            e("[draggable!=true]", t.$slideTrack).on(
              "dragstart",
              t.preventDefault,
            ),
            e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
            e(t.setPosition);
        }),
        (i.prototype.initUI = function () {
          var e = this;
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow.show(), e.$nextArrow.show()),
            !0 === e.options.dots &&
              e.slideCount > e.options.slidesToShow &&
              e.$dots.show();
        }),
        (i.prototype.keyHandler = function (e) {
          var t = this;
          e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
            (37 === e.keyCode && !0 === t.options.accessibility
              ? t.changeSlide({
                  data: { message: !0 === t.options.rtl ? "next" : "previous" },
                })
              : 39 === e.keyCode &&
                !0 === t.options.accessibility &&
                t.changeSlide({
                  data: { message: !0 === t.options.rtl ? "previous" : "next" },
                }));
        }),
        (i.prototype.lazyLoad = function () {
          var t,
            i,
            n,
            o = this;
          function s(t) {
            e("img[data-lazy]", t).each(function () {
              var t = e(this),
                i = e(this).attr("data-lazy"),
                n = e(this).attr("data-srcset"),
                s = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                r = document.createElement("img");
              (r.onload = function () {
                t.animate({ opacity: 0 }, 100, function () {
                  n && (t.attr("srcset", n), s && t.attr("sizes", s)),
                    t.attr("src", i).animate({ opacity: 1 }, 200, function () {
                      t.removeAttr(
                        "data-lazy data-srcset data-sizes",
                      ).removeClass("slick-loading");
                    }),
                    o.$slider.trigger("lazyLoaded", [o, t, i]);
                });
              }),
                (r.onerror = function () {
                  t
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                    o.$slider.trigger("lazyLoadError", [o, t, i]);
                }),
                (r.src = i);
            });
          }
          if (
            (!0 === o.options.centerMode
              ? !0 === o.options.infinite
                ? (n =
                    (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) +
                    o.options.slidesToShow +
                    2)
                : ((i = Math.max(
                    0,
                    o.currentSlide - (o.options.slidesToShow / 2 + 1),
                  )),
                  (n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
              : ((i = o.options.infinite
                  ? o.options.slidesToShow + o.currentSlide
                  : o.currentSlide),
                (n = Math.ceil(i + o.options.slidesToShow)),
                !0 === o.options.fade &&
                  (i > 0 && i--, n <= o.slideCount && n++)),
            (t = o.$slider.find(".slick-slide").slice(i, n)),
            "anticipated" === o.options.lazyLoad)
          )
            for (
              var r = i - 1, a = n, l = o.$slider.find(".slick-slide"), c = 0;
              c < o.options.slidesToScroll;
              c++
            )
              r < 0 && (r = o.slideCount - 1),
                (t = (t = t.add(l.eq(r))).add(l.eq(a))),
                r--,
                a++;
          s(t),
            o.slideCount <= o.options.slidesToShow
              ? s(o.$slider.find(".slick-slide"))
              : o.currentSlide >= o.slideCount - o.options.slidesToShow
                ? s(
                    o.$slider
                      .find(".slick-cloned")
                      .slice(0, o.options.slidesToShow),
                  )
                : 0 === o.currentSlide &&
                  s(
                    o.$slider
                      .find(".slick-cloned")
                      .slice(-1 * o.options.slidesToShow),
                  );
        }),
        (i.prototype.loadSlider = function () {
          var e = this;
          e.setPosition(),
            e.$slideTrack.css({ opacity: 1 }),
            e.$slider.removeClass("slick-loading"),
            e.initUI(),
            "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
        }),
        (i.prototype.next = i.prototype.slickNext =
          function () {
            this.changeSlide({ data: { message: "next" } });
          }),
        (i.prototype.orientationChange = function () {
          this.checkResponsive(), this.setPosition();
        }),
        (i.prototype.pause = i.prototype.slickPause =
          function () {
            this.autoPlayClear(), (this.paused = !0);
          }),
        (i.prototype.play = i.prototype.slickPlay =
          function () {
            var e = this;
            e.autoPlay(),
              (e.options.autoplay = !0),
              (e.paused = !1),
              (e.focussed = !1),
              (e.interrupted = !1);
          }),
        (i.prototype.postSlide = function (t) {
          var i = this;
          i.unslicked ||
            (i.$slider.trigger("afterChange", [i, t]),
            (i.animating = !1),
            i.slideCount > i.options.slidesToShow && i.setPosition(),
            (i.swipeLeft = null),
            i.options.autoplay && i.autoPlay(),
            !0 === i.options.accessibility &&
              (i.initADA(),
              i.options.focusOnChange &&
                e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()));
        }),
        (i.prototype.prev = i.prototype.slickPrev =
          function () {
            this.changeSlide({ data: { message: "previous" } });
          }),
        (i.prototype.preventDefault = function (e) {
          e.preventDefault();
        }),
        (i.prototype.progressiveLazyLoad = function (t) {
          t = t || 1;
          var i,
            n,
            o,
            s,
            r,
            a = this,
            l = e("img[data-lazy]", a.$slider);
          l.length
            ? ((i = l.first()),
              (n = i.attr("data-lazy")),
              (o = i.attr("data-srcset")),
              (s = i.attr("data-sizes") || a.$slider.attr("data-sizes")),
              ((r = document.createElement("img")).onload = function () {
                o && (i.attr("srcset", o), s && i.attr("sizes", s)),
                  i
                    .attr("src", n)
                    .removeAttr("data-lazy data-srcset data-sizes")
                    .removeClass("slick-loading"),
                  !0 === a.options.adaptiveHeight && a.setPosition(),
                  a.$slider.trigger("lazyLoaded", [a, i, n]),
                  a.progressiveLazyLoad();
              }),
              (r.onerror = function () {
                t < 3
                  ? setTimeout(function () {
                      a.progressiveLazyLoad(t + 1);
                    }, 500)
                  : (i
                      .removeAttr("data-lazy")
                      .removeClass("slick-loading")
                      .addClass("slick-lazyload-error"),
                    a.$slider.trigger("lazyLoadError", [a, i, n]),
                    a.progressiveLazyLoad());
              }),
              (r.src = n))
            : a.$slider.trigger("allImagesLoaded", [a]);
        }),
        (i.prototype.refresh = function (t) {
          var i,
            n,
            o = this;
          (n = o.slideCount - o.options.slidesToShow),
            !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
            o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
            (i = o.currentSlide),
            o.destroy(!0),
            e.extend(o, o.initials, { currentSlide: i }),
            o.init(),
            t || o.changeSlide({ data: { message: "index", index: i } }, !1);
        }),
        (i.prototype.registerBreakpoints = function () {
          var t,
            i,
            n,
            o = this,
            s = o.options.responsive || null;
          if ("array" === e.type(s) && s.length) {
            for (t in ((o.respondTo = o.options.respondTo || "window"), s))
              if (((n = o.breakpoints.length - 1), s.hasOwnProperty(t))) {
                for (i = s[t].breakpoint; n >= 0; )
                  o.breakpoints[n] &&
                    o.breakpoints[n] === i &&
                    o.breakpoints.splice(n, 1),
                    n--;
                o.breakpoints.push(i),
                  (o.breakpointSettings[i] = s[t].settings);
              }
            o.breakpoints.sort(function (e, t) {
              return o.options.mobileFirst ? e - t : t - e;
            });
          }
        }),
        (i.prototype.reinit = function () {
          var t = this;
          (t.$slides = t.$slideTrack
            .children(t.options.slide)
            .addClass("slick-slide")),
            (t.slideCount = t.$slides.length),
            t.currentSlide >= t.slideCount &&
              0 !== t.currentSlide &&
              (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
            t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
            t.registerBreakpoints(),
            t.setProps(),
            t.setupInfinite(),
            t.buildArrows(),
            t.updateArrows(),
            t.initArrowEvents(),
            t.buildDots(),
            t.updateDots(),
            t.initDotEvents(),
            t.cleanUpSlideEvents(),
            t.initSlideEvents(),
            t.checkResponsive(!1, !0),
            !0 === t.options.focusOnSelect &&
              e(t.$slideTrack).children().on("click.slick", t.selectHandler),
            t.setSlideClasses(
              "number" == typeof t.currentSlide ? t.currentSlide : 0,
            ),
            t.setPosition(),
            t.focusHandler(),
            (t.paused = !t.options.autoplay),
            t.autoPlay(),
            t.$slider.trigger("reInit", [t]);
        }),
        (i.prototype.resize = function () {
          var t = this;
          e(window).width() !== t.windowWidth &&
            (clearTimeout(t.windowDelay),
            (t.windowDelay = window.setTimeout(function () {
              (t.windowWidth = e(window).width()),
                t.checkResponsive(),
                t.unslicked || t.setPosition();
            }, 50)));
        }),
        (i.prototype.removeSlide = i.prototype.slickRemove =
          function (e, t, i) {
            var n = this;
            if (
              ((e =
                "boolean" == typeof e
                  ? !0 === (t = e)
                    ? 0
                    : n.slideCount - 1
                  : !0 === t
                    ? --e
                    : e),
              n.slideCount < 1 || e < 0 || e > n.slideCount - 1)
            )
              return !1;
            n.unload(),
              !0 === i
                ? n.$slideTrack.children().remove()
                : n.$slideTrack.children(this.options.slide).eq(e).remove(),
              (n.$slides = n.$slideTrack.children(this.options.slide)),
              n.$slideTrack.children(this.options.slide).detach(),
              n.$slideTrack.append(n.$slides),
              (n.$slidesCache = n.$slides),
              n.reinit();
          }),
        (i.prototype.setCSS = function (e) {
          var t,
            i,
            n = this,
            o = {};
          !0 === n.options.rtl && (e = -e),
            (t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px"),
            (i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px"),
            (o[n.positionProp] = e),
            !1 === n.transformsEnabled
              ? n.$slideTrack.css(o)
              : ((o = {}),
                !1 === n.cssTransitions
                  ? ((o[n.animType] = "translate(" + t + ", " + i + ")"),
                    n.$slideTrack.css(o))
                  : ((o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"),
                    n.$slideTrack.css(o)));
        }),
        (i.prototype.setDimensions = function () {
          var e = this;
          !1 === e.options.vertical
            ? !0 === e.options.centerMode &&
              e.$list.css({ padding: "0px " + e.options.centerPadding })
            : (e.$list.height(
                e.$slides.first().outerHeight(!0) * e.options.slidesToShow,
              ),
              !0 === e.options.centerMode &&
                e.$list.css({ padding: e.options.centerPadding + " 0px" })),
            (e.listWidth = e.$list.width()),
            (e.listHeight = e.$list.height()),
            !1 === e.options.vertical && !1 === e.options.variableWidth
              ? ((e.slideWidth = Math.ceil(
                  e.listWidth / e.options.slidesToShow,
                )),
                e.$slideTrack.width(
                  Math.ceil(
                    e.slideWidth *
                      e.$slideTrack.children(".slick-slide").length,
                  ),
                ))
              : !0 === e.options.variableWidth
                ? e.$slideTrack.width(5e3 * e.slideCount)
                : ((e.slideWidth = Math.ceil(e.listWidth)),
                  e.$slideTrack.height(
                    Math.ceil(
                      e.$slides.first().outerHeight(!0) *
                        e.$slideTrack.children(".slick-slide").length,
                    ),
                  ));
          var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
          !1 === e.options.variableWidth &&
            e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
        }),
        (i.prototype.setFade = function () {
          var t,
            i = this;
          i.$slides.each(function (n, o) {
            (t = i.slideWidth * n * -1),
              !0 === i.options.rtl
                ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0,
                  })
                : e(o).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0,
                  });
          }),
            i.$slides
              .eq(i.currentSlide)
              .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
        }),
        (i.prototype.setHeight = function () {
          var e = this;
          if (
            1 === e.options.slidesToShow &&
            !0 === e.options.adaptiveHeight &&
            !1 === e.options.vertical
          ) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t);
          }
        }),
        (i.prototype.setOption = i.prototype.slickSetOption =
          function () {
            var t,
              i,
              n,
              o,
              s,
              r = this,
              a = !1;
            if (
              ("object" === e.type(arguments[0])
                ? ((n = arguments[0]), (a = arguments[1]), (s = "multiple"))
                : "string" === e.type(arguments[0]) &&
                  ((n = arguments[0]),
                  (o = arguments[1]),
                  (a = arguments[2]),
                  "responsive" === arguments[0] &&
                  "array" === e.type(arguments[1])
                    ? (s = "responsive")
                    : void 0 !== arguments[1] && (s = "single")),
              "single" === s)
            )
              r.options[n] = o;
            else if ("multiple" === s)
              e.each(n, function (e, t) {
                r.options[e] = t;
              });
            else if ("responsive" === s)
              for (i in o)
                if ("array" !== e.type(r.options.responsive))
                  r.options.responsive = [o[i]];
                else {
                  for (t = r.options.responsive.length - 1; t >= 0; )
                    r.options.responsive[t].breakpoint === o[i].breakpoint &&
                      r.options.responsive.splice(t, 1),
                      t--;
                  r.options.responsive.push(o[i]);
                }
            a && (r.unload(), r.reinit());
          }),
        (i.prototype.setPosition = function () {
          var e = this;
          e.setDimensions(),
            e.setHeight(),
            !1 === e.options.fade
              ? e.setCSS(e.getLeft(e.currentSlide))
              : e.setFade(),
            e.$slider.trigger("setPosition", [e]);
        }),
        (i.prototype.setProps = function () {
          var e = this,
            t = document.body.style;
          (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
            "top" === e.positionProp
              ? e.$slider.addClass("slick-vertical")
              : e.$slider.removeClass("slick-vertical"),
            (void 0 === t.WebkitTransition &&
              void 0 === t.MozTransition &&
              void 0 === t.msTransition) ||
              (!0 === e.options.useCSS && (e.cssTransitions = !0)),
            e.options.fade &&
              ("number" == typeof e.options.zIndex
                ? e.options.zIndex < 3 && (e.options.zIndex = 3)
                : (e.options.zIndex = e.defaults.zIndex)),
            void 0 !== t.OTransform &&
              ((e.animType = "OTransform"),
              (e.transformType = "-o-transform"),
              (e.transitionType = "OTransition"),
              void 0 === t.perspectiveProperty &&
                void 0 === t.webkitPerspective &&
                (e.animType = !1)),
            void 0 !== t.MozTransform &&
              ((e.animType = "MozTransform"),
              (e.transformType = "-moz-transform"),
              (e.transitionType = "MozTransition"),
              void 0 === t.perspectiveProperty &&
                void 0 === t.MozPerspective &&
                (e.animType = !1)),
            void 0 !== t.webkitTransform &&
              ((e.animType = "webkitTransform"),
              (e.transformType = "-webkit-transform"),
              (e.transitionType = "webkitTransition"),
              void 0 === t.perspectiveProperty &&
                void 0 === t.webkitPerspective &&
                (e.animType = !1)),
            void 0 !== t.msTransform &&
              ((e.animType = "msTransform"),
              (e.transformType = "-ms-transform"),
              (e.transitionType = "msTransition"),
              void 0 === t.msTransform && (e.animType = !1)),
            void 0 !== t.transform &&
              !1 !== e.animType &&
              ((e.animType = "transform"),
              (e.transformType = "transform"),
              (e.transitionType = "transition")),
            (e.transformsEnabled =
              e.options.useTransform &&
              null !== e.animType &&
              !1 !== e.animType);
        }),
        (i.prototype.setSlideClasses = function (e) {
          var t,
            i,
            n,
            o,
            s = this;
          if (
            ((i = s.$slider
              .find(".slick-slide")
              .removeClass("slick-active slick-center slick-current")
              .attr("aria-hidden", "true")),
            s.$slides.eq(e).addClass("slick-current"),
            !0 === s.options.centerMode)
          ) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            (t = Math.floor(s.options.slidesToShow / 2)),
              !0 === s.options.infinite &&
                (e >= t && e <= s.slideCount - 1 - t
                  ? s.$slides
                      .slice(e - t + r, e + t + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((n = s.options.slidesToShow + e),
                    i
                      .slice(n - t + 1 + r, n + t + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === e
                  ? i
                      .eq(i.length - 1 - s.options.slidesToShow)
                      .addClass("slick-center")
                  : e === s.slideCount - 1 &&
                    i.eq(s.options.slidesToShow).addClass("slick-center")),
              s.$slides.eq(e).addClass("slick-center");
          } else
            e >= 0 && e <= s.slideCount - s.options.slidesToShow
              ? s.$slides
                  .slice(e, e + s.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : i.length <= s.options.slidesToShow
                ? i.addClass("slick-active").attr("aria-hidden", "false")
                : ((o = s.slideCount % s.options.slidesToShow),
                  (n =
                    !0 === s.options.infinite ? s.options.slidesToShow + e : e),
                  s.options.slidesToShow == s.options.slidesToScroll &&
                  s.slideCount - e < s.options.slidesToShow
                    ? i
                        .slice(n - (s.options.slidesToShow - o), n + o)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false")
                    : i
                        .slice(n, n + s.options.slidesToShow)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false"));
          ("ondemand" !== s.options.lazyLoad &&
            "anticipated" !== s.options.lazyLoad) ||
            s.lazyLoad();
        }),
        (i.prototype.setupInfinite = function () {
          var t,
            i,
            n,
            o = this;
          if (
            (!0 === o.options.fade && (o.options.centerMode = !1),
            !0 === o.options.infinite &&
              !1 === o.options.fade &&
              ((i = null), o.slideCount > o.options.slidesToShow))
          ) {
            for (
              n =
                !0 === o.options.centerMode
                  ? o.options.slidesToShow + 1
                  : o.options.slidesToShow,
                t = o.slideCount;
              t > o.slideCount - n;
              t -= 1
            )
              (i = t - 1),
                e(o.$slides[i])
                  .clone(!0)
                  .attr("id", "")
                  .attr("data-slick-index", i - o.slideCount)
                  .prependTo(o.$slideTrack)
                  .addClass("slick-cloned");
            for (t = 0; t < n + o.slideCount; t += 1)
              (i = t),
                e(o.$slides[i])
                  .clone(!0)
                  .attr("id", "")
                  .attr("data-slick-index", i + o.slideCount)
                  .appendTo(o.$slideTrack)
                  .addClass("slick-cloned");
            o.$slideTrack
              .find(".slick-cloned")
              .find("[id]")
              .each(function () {
                e(this).attr("id", "");
              });
          }
        }),
        (i.prototype.interrupt = function (e) {
          e || this.autoPlay(), (this.interrupted = e);
        }),
        (i.prototype.selectHandler = function (t) {
          var i = this,
            n = e(t.target).is(".slick-slide")
              ? e(t.target)
              : e(t.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
          o || (o = 0),
            i.slideCount <= i.options.slidesToShow
              ? i.slideHandler(o, !1, !0)
              : i.slideHandler(o);
        }),
        (i.prototype.slideHandler = function (e, t, i) {
          var n,
            o,
            s,
            r,
            a,
            l,
            c = this;
          if (
            ((t = t || !1),
            !(
              (!0 === c.animating && !0 === c.options.waitForAnimate) ||
              (!0 === c.options.fade && c.currentSlide === e)
            ))
          )
            if (
              (!1 === t && c.asNavFor(e),
              (n = e),
              (a = c.getLeft(n)),
              (r = c.getLeft(c.currentSlide)),
              (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
              !1 === c.options.infinite &&
                !1 === c.options.centerMode &&
                (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
            )
              !1 === c.options.fade &&
                ((n = c.currentSlide),
                !0 !== i && c.slideCount > c.options.slidesToShow
                  ? c.animateSlide(r, function () {
                      c.postSlide(n);
                    })
                  : c.postSlide(n));
            else if (
              !1 === c.options.infinite &&
              !0 === c.options.centerMode &&
              (e < 0 || e > c.slideCount - c.options.slidesToScroll)
            )
              !1 === c.options.fade &&
                ((n = c.currentSlide),
                !0 !== i && c.slideCount > c.options.slidesToShow
                  ? c.animateSlide(r, function () {
                      c.postSlide(n);
                    })
                  : c.postSlide(n));
            else {
              if (
                (c.options.autoplay && clearInterval(c.autoPlayTimer),
                (o =
                  n < 0
                    ? c.slideCount % c.options.slidesToScroll != 0
                      ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                      : c.slideCount + n
                    : n >= c.slideCount
                      ? c.slideCount % c.options.slidesToScroll != 0
                        ? 0
                        : n - c.slideCount
                      : n),
                (c.animating = !0),
                c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                (s = c.currentSlide),
                (c.currentSlide = o),
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor &&
                  (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <=
                    l.options.slidesToShow &&
                  l.setSlideClasses(c.currentSlide),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade)
              )
                return (
                  !0 !== i
                    ? (c.fadeSlideOut(s),
                      c.fadeSlide(o, function () {
                        c.postSlide(o);
                      }))
                    : c.postSlide(o),
                  void c.animateHeight()
                );
              !0 !== i && c.slideCount > c.options.slidesToShow
                ? c.animateSlide(a, function () {
                    c.postSlide(o);
                  })
                : c.postSlide(o);
            }
        }),
        (i.prototype.startLoad = function () {
          var e = this;
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow.hide(), e.$nextArrow.hide()),
            !0 === e.options.dots &&
              e.slideCount > e.options.slidesToShow &&
              e.$dots.hide(),
            e.$slider.addClass("slick-loading");
        }),
        (i.prototype.swipeDirection = function () {
          var e,
            t,
            i,
            n,
            o = this;
          return (
            (e = o.touchObject.startX - o.touchObject.curX),
            (t = o.touchObject.startY - o.touchObject.curY),
            (i = Math.atan2(t, e)),
            (n = Math.round((180 * i) / Math.PI)) < 0 &&
              (n = 360 - Math.abs(n)),
            (n <= 45 && n >= 0) || (n <= 360 && n >= 315)
              ? !1 === o.options.rtl
                ? "left"
                : "right"
              : n >= 135 && n <= 225
                ? !1 === o.options.rtl
                  ? "right"
                  : "left"
                : !0 === o.options.verticalSwiping
                  ? n >= 35 && n <= 135
                    ? "down"
                    : "up"
                  : "vertical"
          );
        }),
        (i.prototype.swipeEnd = function (e) {
          var t,
            i,
            n = this;
          if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
            return (n.scrolling = !1), !1;
          if (
            ((n.interrupted = !1),
            (n.shouldClick = !(n.touchObject.swipeLength > 10)),
            void 0 === n.touchObject.curX)
          )
            return !1;
          if (
            (!0 === n.touchObject.edgeHit &&
              n.$slider.trigger("edge", [n, n.swipeDirection()]),
            n.touchObject.swipeLength >= n.touchObject.minSwipe)
          ) {
            switch ((i = n.swipeDirection())) {
              case "left":
              case "down":
                (t = n.options.swipeToSlide
                  ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                  : n.currentSlide + n.getSlideCount()),
                  (n.currentDirection = 0);
                break;
              case "right":
              case "up":
                (t = n.options.swipeToSlide
                  ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                  : n.currentSlide - n.getSlideCount()),
                  (n.currentDirection = 1);
            }
            "vertical" != i &&
              (n.slideHandler(t),
              (n.touchObject = {}),
              n.$slider.trigger("swipe", [n, i]));
          } else
            n.touchObject.startX !== n.touchObject.curX &&
              (n.slideHandler(n.currentSlide), (n.touchObject = {}));
        }),
        (i.prototype.swipeHandler = function (e) {
          var t = this;
          if (
            !(
              !1 === t.options.swipe ||
              ("ontouchend" in document && !1 === t.options.swipe) ||
              (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
            )
          )
            switch (
              ((t.touchObject.fingerCount =
                e.originalEvent && void 0 !== e.originalEvent.touches
                  ? e.originalEvent.touches.length
                  : 1),
              (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
              !0 === t.options.verticalSwiping &&
                (t.touchObject.minSwipe =
                  t.listHeight / t.options.touchThreshold),
              e.data.action)
            ) {
              case "start":
                t.swipeStart(e);
                break;
              case "move":
                t.swipeMove(e);
                break;
              case "end":
                t.swipeEnd(e);
            }
        }),
        (i.prototype.swipeMove = function (e) {
          var t,
            i,
            n,
            o,
            s,
            r,
            a = this;
          return (
            (s = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
            !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
              ((t = a.getLeft(a.currentSlide)),
              (a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX),
              (a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY),
              (a.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(a.touchObject.curX - a.touchObject.startX, 2),
                ),
              )),
              (r = Math.round(
                Math.sqrt(
                  Math.pow(a.touchObject.curY - a.touchObject.startY, 2),
                ),
              )),
              !a.options.verticalSwiping && !a.swiping && r > 4
                ? ((a.scrolling = !0), !1)
                : (!0 === a.options.verticalSwiping &&
                    (a.touchObject.swipeLength = r),
                  (i = a.swipeDirection()),
                  void 0 !== e.originalEvent &&
                    a.touchObject.swipeLength > 4 &&
                    ((a.swiping = !0), e.preventDefault()),
                  (o =
                    (!1 === a.options.rtl ? 1 : -1) *
                    (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                  !0 === a.options.verticalSwiping &&
                    (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                  (n = a.touchObject.swipeLength),
                  (a.touchObject.edgeHit = !1),
                  !1 === a.options.infinite &&
                    ((0 === a.currentSlide && "right" === i) ||
                      (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                    ((n = a.touchObject.swipeLength * a.options.edgeFriction),
                    (a.touchObject.edgeHit = !0)),
                  !1 === a.options.vertical
                    ? (a.swipeLeft = t + n * o)
                    : (a.swipeLeft =
                        t + n * (a.$list.height() / a.listWidth) * o),
                  !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o),
                  !0 !== a.options.fade &&
                    !1 !== a.options.touchMove &&
                    (!0 === a.animating
                      ? ((a.swipeLeft = null), !1)
                      : void a.setCSS(a.swipeLeft))))
          );
        }),
        (i.prototype.swipeStart = function (e) {
          var t,
            i = this;
          if (
            ((i.interrupted = !0),
            1 !== i.touchObject.fingerCount ||
              i.slideCount <= i.options.slidesToShow)
          )
            return (i.touchObject = {}), !1;
          void 0 !== e.originalEvent &&
            void 0 !== e.originalEvent.touches &&
            (t = e.originalEvent.touches[0]),
            (i.touchObject.startX = i.touchObject.curX =
              void 0 !== t ? t.pageX : e.clientX),
            (i.touchObject.startY = i.touchObject.curY =
              void 0 !== t ? t.pageY : e.clientY),
            (i.dragging = !0);
        }),
        (i.prototype.unfilterSlides = i.prototype.slickUnfilter =
          function () {
            var e = this;
            null !== e.$slidesCache &&
              (e.unload(),
              e.$slideTrack.children(this.options.slide).detach(),
              e.$slidesCache.appendTo(e.$slideTrack),
              e.reinit());
          }),
        (i.prototype.unload = function () {
          var t = this;
          e(".slick-cloned", t.$slider).remove(),
            t.$dots && t.$dots.remove(),
            t.$prevArrow &&
              t.htmlExpr.test(t.options.prevArrow) &&
              t.$prevArrow.remove(),
            t.$nextArrow &&
              t.htmlExpr.test(t.options.nextArrow) &&
              t.$nextArrow.remove(),
            t.$slides
              .removeClass(
                "slick-slide slick-active slick-visible slick-current",
              )
              .attr("aria-hidden", "true")
              .css("width", "");
        }),
        (i.prototype.unslick = function (e) {
          var t = this;
          t.$slider.trigger("unslick", [t, e]), t.destroy();
        }),
        (i.prototype.updateArrows = function () {
          var e = this;
          Math.floor(e.options.slidesToShow / 2),
            !0 === e.options.arrows &&
              e.slideCount > e.options.slidesToShow &&
              !e.options.infinite &&
              (e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"),
              e.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"),
              0 === e.currentSlide
                ? (e.$prevArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"),
                  e.$nextArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"))
                : ((e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                    !1 === e.options.centerMode) ||
                    (e.currentSlide >= e.slideCount - 1 &&
                      !0 === e.options.centerMode)) &&
                  (e.$nextArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"),
                  e.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false")));
        }),
        (i.prototype.updateDots = function () {
          var e = this;
          null !== e.$dots &&
            (e.$dots.find("li").removeClass("slick-active").end(),
            e.$dots
              .find("li")
              .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
              .addClass("slick-active"));
        }),
        (i.prototype.visibility = function () {
          var e = this;
          e.options.autoplay &&
            (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
        }),
        (e.fn.slick = function () {
          var e,
            t,
            n = this,
            o = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            r = n.length;
          for (e = 0; e < r; e++)
            if (
              ("object" == typeof o || void 0 === o
                ? (n[e].slick = new i(n[e], o))
                : (t = n[e].slick[o].apply(n[e].slick, s)),
              void 0 !== t)
            )
              return t;
          return n;
        });
    }),
    "function" == typeof define && define.amd
      ? define(["jquery"], n)
      : "undefined" != typeof exports
        ? (module.exports = n(require("jquery")))
        : n(jQuery);
  document.querySelectorAll(".submenu").forEach((e) => {
    e.addEventListener("mouseover", () => {
      e.classList.add("active");
    }),
      e.addEventListener("mouseout", () => {
        e.classList.remove("active");
      });
  }),
    document.addEventListener("DOMContentLoaded", function () {
      const e = document.querySelectorAll(".tabs__slide"),
        t = document.querySelectorAll(".controls__item");
      e.forEach((e) => {
        e.classList.contains("active")
          ? (e.style.opacity = "1")
          : ((e.style.display = "none"), (e.style.opacity = "0"));
      }),
        t.forEach((i) => {
          i.addEventListener("click", (n) => {
            n.preventDefault();
            const o = i.dataset.services;
            e.forEach((e) => {
              e.classList.contains(`tabs__item-${o}`)
                ? ((e.style.display = "block"),
                  (e.style.opacity = "0"),
                  e.offsetWidth,
                  (e.style.opacity = "1"),
                  (e.style.transition = "opacity 0.5s ease-in-out"))
                : ((e.style.opacity = "0"),
                  (e.style.transition = "opacity 0.5s ease-in-out"),
                  setTimeout(() => {
                    e.style.display = "none";
                  }, 500));
            }),
              t.forEach((e) => {
                e.classList.remove("active");
              }),
              i.classList.add("active");
          });
        });
    }),
    (function () {
      const e = document.querySelectorAll(".press__slide"),
        t = Array.from(e).map((e) => e.dataset.description),
        i = document.querySelector(".press__description p");
      let n = 2;
      function o(n) {
        e.forEach((e, t) => {
          e.classList.toggle("active", t === n);
        }),
          i.classList.add("fade-out"),
          setTimeout(() => {
            (i.textContent = t[n]),
              i.classList.remove("fade-out"),
              i.classList.add("fade-in");
          }, 300),
          setTimeout(() => {
            i.classList.remove("fade-in");
          }, 600);
      }
      e.forEach((e, t) => {
        e.addEventListener("click", () => {
          (n = t), o(n);
        });
      }),
        o(n),
        $(".press__slide-container").on("afterChange", function (e, t, i, n) {
          o(n);
        });
    })(),
    $(".press__slide-container").slick({
      centerMode: !0,
      centerPadding: "0px",
      slidesToShow: 5,
      arrows: !1,
    }),
    $(".press__slide-container").on("afterChange", function (e, t, i, n) {
      console.log(n);
    }),
    $(".slider__list").slick({ slidesToShow: 1 }),
    $(".product__slider").slick({
      dots: !0,
      slidesToScroll: 1,
      autoplay: !0,
      autoplaySpeed: 2e3,
      responsive: [{ breakpoint: 1200, settings: { arrows: !1 } }],
    }),
    $(".partners__items").slick({
      arrows: !1,
      dots: !0,
      slidesPerRow: 3,
      rows: 2,
      slidesToShow: 1,
      responsive: [{ breakpoint: 576, settings: { slidesPerRow: 2, rows: 3 } }],
    }),
    $(".header__btn").on("click", function () {
      $(".header__menu-wrap").removeClass("header__menu-wrap--close");
    }),
    $(".header__menu-close").on("click", function () {
      $(".header__menu-wrap").addClass("header__menu-wrap--close");
    }),
    (function (e, t) {
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
          ? define(t)
          : ((e =
              "undefined" != typeof globalThis
                ? globalThis
                : e || self).bootstrap = t());
    })(void 0, function () {
      const e = {
          find: (e, t = document.documentElement) =>
            [].concat(...Element.prototype.querySelectorAll.call(t, e)),
          findOne: (e, t = document.documentElement) =>
            Element.prototype.querySelector.call(t, e),
          children: (e, t) =>
            [].concat(...e.children).filter((e) => e.matches(t)),
          parents(e, t) {
            const i = [];
            let n = e.parentNode;
            for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
              n.matches(t) && i.push(n), (n = n.parentNode);
            return i;
          },
          prev(e, t) {
            let i = e.previousElementSibling;
            for (; i; ) {
              if (i.matches(t)) return [i];
              i = i.previousElementSibling;
            }
            return [];
          },
          next(e, t) {
            let i = e.nextElementSibling;
            for (; i; ) {
              if (i.matches(t)) return [i];
              i = i.nextElementSibling;
            }
            return [];
          },
        },
        t = "transitionend",
        i = (e) => {
          do {
            e += Math.floor(1e6 * Math.random());
          } while (document.getElementById(e));
          return e;
        },
        n = (e) => {
          let t = e.getAttribute("data-bs-target");
          if (!t || "#" === t) {
            let i = e.getAttribute("href");
            if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
            i.includes("#") &&
              !i.startsWith("#") &&
              (i = `#${i.split("#")[1]}`),
              (t = i && "#" !== i ? i.trim() : null);
          }
          return t;
        },
        o = (e) => {
          const t = n(e);
          return t && document.querySelector(t) ? t : null;
        },
        s = (e) => {
          const t = n(e);
          return t ? document.querySelector(t) : null;
        },
        r = (e) => {
          e.dispatchEvent(new Event(t));
        },
        a = (e) =>
          !(!e || "object" != typeof e) &&
          (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        l = (t) =>
          a(t)
            ? t.jquery
              ? t[0]
              : t
            : "string" == typeof t && t.length > 0
              ? e.findOne(t)
              : null,
        c = (e, t, i) => {
          Object.keys(i).forEach((n) => {
            const o = i[n],
              s = t[n],
              r =
                s && a(s)
                  ? "element"
                  : null == (l = s)
                    ? `${l}`
                    : {}.toString
                        .call(l)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
            var l;
            if (!new RegExp(o).test(r))
              throw new TypeError(
                `${e.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${o}".`,
              );
          });
        },
        d = (e) =>
          !(!a(e) || 0 === e.getClientRects().length) &&
          "visible" === getComputedStyle(e).getPropertyValue("visibility"),
        u = (e) =>
          !e ||
          e.nodeType !== Node.ELEMENT_NODE ||
          !!e.classList.contains("disabled") ||
          (void 0 !== e.disabled
            ? e.disabled
            : e.hasAttribute("disabled") &&
              "false" !== e.getAttribute("disabled")),
        p = (e) => {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof e.getRootNode) {
            const t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null;
          }
          return e instanceof ShadowRoot
            ? e
            : e.parentNode
              ? p(e.parentNode)
              : null;
        },
        f = () => {},
        h = (e) => e.offsetHeight,
        g = () => {
          const { jQuery: e } = window;
          return e && !document.body.hasAttribute("data-bs-no-jquery")
            ? e
            : null;
        },
        m = [],
        v = () => "rtl" === document.documentElement.dir,
        y = (e) => {
          var t;
          (t = () => {
            const t = g();
            if (t) {
              const i = e.NAME,
                n = t.fn[i];
              (t.fn[i] = e.jQueryInterface),
                (t.fn[i].Constructor = e),
                (t.fn[i].noConflict = () => ((t.fn[i] = n), e.jQueryInterface));
            }
          }),
            "loading" === document.readyState
              ? (m.length ||
                  document.addEventListener("DOMContentLoaded", () => {
                    m.forEach((e) => e());
                  }),
                m.push(t))
              : t();
        },
        b = (e) => {
          "function" == typeof e && e();
        },
        w = (e, i, n = !0) => {
          if (!n) return void b(e);
          const o =
            ((e) => {
              if (!e) return 0;
              let { transitionDuration: t, transitionDelay: i } =
                window.getComputedStyle(e);
              const n = Number.parseFloat(t),
                o = Number.parseFloat(i);
              return n || o
                ? ((t = t.split(",")[0]),
                  (i = i.split(",")[0]),
                  1e3 * (Number.parseFloat(t) + Number.parseFloat(i)))
                : 0;
            })(i) + 5;
          let s = !1;
          const a = ({ target: n }) => {
            n === i && ((s = !0), i.removeEventListener(t, a), b(e));
          };
          i.addEventListener(t, a),
            setTimeout(() => {
              s || r(i);
            }, o);
        },
        _ = (e, t, i, n) => {
          let o = e.indexOf(t);
          if (-1 === o) return e[!i && n ? e.length - 1 : 0];
          const s = e.length;
          return (
            (o += i ? 1 : -1),
            n && (o = (o + s) % s),
            e[Math.max(0, Math.min(o, s - 1))]
          );
        },
        T = /[^.]*(?=\..*)\.|.*/,
        x = /\..*/,
        k = /::\d+$/,
        S = {};
      let C = 1;
      const E = { mouseenter: "mouseover", mouseleave: "mouseout" },
        A = /^(mouseenter|mouseleave)/i,
        $ = new Set([
          "click",
          "dblclick",
          "mouseup",
          "mousedown",
          "contextmenu",
          "mousewheel",
          "DOMMouseScroll",
          "mouseover",
          "mouseout",
          "mousemove",
          "selectstart",
          "selectend",
          "keydown",
          "keypress",
          "keyup",
          "orientationchange",
          "touchstart",
          "touchmove",
          "touchend",
          "touchcancel",
          "pointerdown",
          "pointermove",
          "pointerup",
          "pointerleave",
          "pointercancel",
          "gesturestart",
          "gesturechange",
          "gestureend",
          "focus",
          "blur",
          "change",
          "reset",
          "select",
          "submit",
          "focusin",
          "focusout",
          "load",
          "unload",
          "beforeunload",
          "resize",
          "move",
          "DOMContentLoaded",
          "readystatechange",
          "error",
          "abort",
          "scroll",
        ]);
      function O(e, t) {
        return (t && `${t}::${C++}`) || e.uidEvent || C++;
      }
      function L(e) {
        const t = O(e);
        return (e.uidEvent = t), (S[t] = S[t] || {}), S[t];
      }
      function D(e, t, i = null) {
        const n = Object.keys(e);
        for (let o = 0, s = n.length; o < s; o++) {
          const s = e[n[o]];
          if (s.originalHandler === t && s.delegationSelector === i) return s;
        }
        return null;
      }
      function j(e, t, i) {
        const n = "string" == typeof t,
          o = n ? i : t;
        let s = H(e);
        return $.has(s) || (s = e), [n, o, s];
      }
      function N(e, t, i, n, o) {
        if ("string" != typeof t || !e) return;
        if ((i || ((i = n), (n = null)), A.test(t))) {
          const e = (e) =>
            function (t) {
              if (
                !t.relatedTarget ||
                (t.relatedTarget !== t.delegateTarget &&
                  !t.delegateTarget.contains(t.relatedTarget))
              )
                return e.call(this, t);
            };
          n ? (n = e(n)) : (i = e(i));
        }
        const [s, r, a] = j(t, i, n),
          l = L(e),
          c = l[a] || (l[a] = {}),
          d = D(c, r, s ? i : null);
        if (d) return void (d.oneOff = d.oneOff && o);
        const u = O(r, t.replace(T, "")),
          p = s
            ? (function (e, t, i) {
                return function n(o) {
                  const s = e.querySelectorAll(t);
                  for (let { target: r } = o; r && r !== this; r = r.parentNode)
                    for (let a = s.length; a--; )
                      if (s[a] === r)
                        return (
                          (o.delegateTarget = r),
                          n.oneOff && I.off(e, o.type, t, i),
                          i.apply(r, [o])
                        );
                  return null;
                };
              })(e, i, n)
            : (function (e, t) {
                return function i(n) {
                  return (
                    (n.delegateTarget = e),
                    i.oneOff && I.off(e, n.type, t),
                    t.apply(e, [n])
                  );
                };
              })(e, i);
        (p.delegationSelector = s ? i : null),
          (p.originalHandler = r),
          (p.oneOff = o),
          (p.uidEvent = u),
          (c[u] = p),
          e.addEventListener(a, p, s);
      }
      function P(e, t, i, n, o) {
        const s = D(t[i], n, o);
        s && (e.removeEventListener(i, s, Boolean(o)), delete t[i][s.uidEvent]);
      }
      function H(e) {
        return (e = e.replace(x, "")), E[e] || e;
      }
      const I = {
          on(e, t, i, n) {
            N(e, t, i, n, !1);
          },
          one(e, t, i, n) {
            N(e, t, i, n, !0);
          },
          off(e, t, i, n) {
            if ("string" != typeof t || !e) return;
            const [o, s, r] = j(t, i, n),
              a = r !== t,
              l = L(e),
              c = t.startsWith(".");
            if (void 0 !== s) {
              if (!l || !l[r]) return;
              return void P(e, l, r, s, o ? i : null);
            }
            c &&
              Object.keys(l).forEach((i) => {
                !(function (e, t, i, n) {
                  const o = t[i] || {};
                  Object.keys(o).forEach((s) => {
                    if (s.includes(n)) {
                      const n = o[s];
                      P(e, t, i, n.originalHandler, n.delegationSelector);
                    }
                  });
                })(e, l, i, t.slice(1));
              });
            const d = l[r] || {};
            Object.keys(d).forEach((i) => {
              const n = i.replace(k, "");
              if (!a || t.includes(n)) {
                const t = d[i];
                P(e, l, r, t.originalHandler, t.delegationSelector);
              }
            });
          },
          trigger(e, t, i) {
            if ("string" != typeof t || !e) return null;
            const n = g(),
              o = H(t),
              s = t !== o,
              r = $.has(o);
            let a,
              l = !0,
              c = !0,
              d = !1,
              u = null;
            return (
              s &&
                n &&
                ((a = n.Event(t, i)),
                n(e).trigger(a),
                (l = !a.isPropagationStopped()),
                (c = !a.isImmediatePropagationStopped()),
                (d = a.isDefaultPrevented())),
              r
                ? ((u = document.createEvent("HTMLEvents")),
                  u.initEvent(o, l, !0))
                : (u = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
              void 0 !== i &&
                Object.keys(i).forEach((e) => {
                  Object.defineProperty(u, e, { get: () => i[e] });
                }),
              d && u.preventDefault(),
              c && e.dispatchEvent(u),
              u.defaultPrevented && void 0 !== a && a.preventDefault(),
              u
            );
          },
        },
        M = new Map();
      var q = {
        set(e, t, i) {
          M.has(e) || M.set(e, new Map());
          const n = M.get(e);
          n.has(t) || 0 === n.size
            ? n.set(t, i)
            : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`,
              );
        },
        get: (e, t) => (M.has(e) && M.get(e).get(t)) || null,
        remove(e, t) {
          if (!M.has(e)) return;
          const i = M.get(e);
          i.delete(t), 0 === i.size && M.delete(e);
        },
      };
      class R {
        constructor(e) {
          (e = l(e)) &&
            ((this._element = e),
            q.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
          q.remove(this._element, this.constructor.DATA_KEY),
            I.off(this._element, this.constructor.EVENT_KEY),
            Object.getOwnPropertyNames(this).forEach((e) => {
              this[e] = null;
            });
        }
        _queueCallback(e, t, i = !0) {
          w(e, t, i);
        }
        static getInstance(e) {
          return q.get(e, this.DATA_KEY);
        }
        static getOrCreateInstance(e, t = {}) {
          return (
            this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
          );
        }
        static get VERSION() {
          return "5.0.2";
        }
        static get NAME() {
          throw new Error(
            'You have to implement the static method "NAME", for each component!',
          );
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
      }
      const W = ".bs.alert",
        z = `close${W}`,
        B = `closed${W}`,
        F = `click${W}.data-api`;
      class U extends R {
        static get NAME() {
          return "alert";
        }
        close(e) {
          const t = e ? this._getRootElement(e) : this._element,
            i = this._triggerCloseEvent(t);
          null === i || i.defaultPrevented || this._removeElement(t);
        }
        _getRootElement(e) {
          return s(e) || e.closest(".alert");
        }
        _triggerCloseEvent(e) {
          return I.trigger(e, z);
        }
        _removeElement(e) {
          e.classList.remove("show");
          const t = e.classList.contains("fade");
          this._queueCallback(() => this._destroyElement(e), e, t);
        }
        _destroyElement(e) {
          e.remove(), I.trigger(e, B);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = U.getOrCreateInstance(this);
            "close" === e && t[e](this);
          });
        }
        static handleDismiss(e) {
          return function (t) {
            t && t.preventDefault(), e.close(this);
          };
        }
      }
      I.on(document, F, '[data-bs-dismiss="alert"]', U.handleDismiss(new U())),
        y(U);
      const X = '[data-bs-toggle="button"]';
      class Y extends R {
        static get NAME() {
          return "button";
        }
        toggle() {
          this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle("active"),
          );
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Y.getOrCreateInstance(this);
            "toggle" === e && t[e]();
          });
        }
      }
      function V(e) {
        return (
          "true" === e ||
          ("false" !== e &&
            (e === Number(e).toString()
              ? Number(e)
              : "" === e || "null" === e
                ? null
                : e))
        );
      }
      function Q(e) {
        return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
      }
      I.on(document, "click.bs.button.data-api", X, (e) => {
        e.preventDefault();
        const t = e.target.closest(X);
        Y.getOrCreateInstance(t).toggle();
      }),
        y(Y);
      const K = {
          setDataAttribute(e, t, i) {
            e.setAttribute(`data-bs-${Q(t)}`, i);
          },
          removeDataAttribute(e, t) {
            e.removeAttribute(`data-bs-${Q(t)}`);
          },
          getDataAttributes(e) {
            if (!e) return {};
            const t = {};
            return (
              Object.keys(e.dataset)
                .filter((e) => e.startsWith("bs"))
                .forEach((i) => {
                  let n = i.replace(/^bs/, "");
                  (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                    (t[n] = V(e.dataset[i]));
                }),
              t
            );
          },
          getDataAttribute: (e, t) => V(e.getAttribute(`data-bs-${Q(t)}`)),
          offset(e) {
            const t = e.getBoundingClientRect();
            return {
              top: t.top + document.body.scrollTop,
              left: t.left + document.body.scrollLeft,
            };
          },
          position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
        },
        G = "carousel",
        J = ".bs.carousel",
        Z = ".data-api",
        ee = "ArrowLeft",
        te = "ArrowRight",
        ie = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
          touch: !0,
        },
        ne = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean",
        },
        oe = "next",
        se = "prev",
        re = "left",
        ae = "right",
        le = { [ee]: ae, [te]: re },
        ce = `slide${J}`,
        de = `slid${J}`,
        ue = `keydown${J}`,
        pe = `mouseenter${J}`,
        fe = `mouseleave${J}`,
        he = `touchstart${J}`,
        ge = `touchmove${J}`,
        me = `touchend${J}`,
        ve = `pointerdown${J}`,
        ye = `pointerup${J}`,
        be = `dragstart${J}`,
        we = `load${J}${Z}`,
        _e = `click${J}${Z}`,
        Te = "active",
        xe = ".active.carousel-item",
        ke = "touch";
      class Se extends R {
        constructor(t, i) {
          super(t),
            (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(i)),
            (this._indicatorsElement = e.findOne(
              ".carousel-indicators",
              this._element,
            )),
            (this._touchSupported =
              "ontouchstart" in document.documentElement ||
              navigator.maxTouchPoints > 0),
            (this._pointerEvent = Boolean(window.PointerEvent)),
            this._addEventListeners();
        }
        static get Default() {
          return ie;
        }
        static get NAME() {
          return G;
        }
        next() {
          this._slide(oe);
        }
        nextWhenVisible() {
          !document.hidden && d(this._element) && this.next();
        }
        prev() {
          this._slide(se);
        }
        pause(t) {
          t || (this._isPaused = !0),
            e.findOne(
              ".carousel-item-next, .carousel-item-prev",
              this._element,
            ) && (r(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }
        cycle(e) {
          e || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config &&
              this._config.interval &&
              !this._isPaused &&
              (this._updateInterval(),
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval,
              )));
        }
        to(t) {
          this._activeElement = e.findOne(xe, this._element);
          const i = this._getItemIndex(this._activeElement);
          if (t > this._items.length - 1 || t < 0) return;
          if (this._isSliding)
            return void I.one(this._element, de, () => this.to(t));
          if (i === t) return this.pause(), void this.cycle();
          const n = t > i ? oe : se;
          this._slide(n, this._items[t]);
        }
        _getConfig(e) {
          return (
            (e = {
              ...ie,
              ...K.getDataAttributes(this._element),
              ...("object" == typeof e ? e : {}),
            }),
            c(G, e, ne),
            e
          );
        }
        _handleSwipe() {
          const e = Math.abs(this.touchDeltaX);
          if (e <= 40) return;
          const t = e / this.touchDeltaX;
          (this.touchDeltaX = 0), t && this._slide(t > 0 ? ae : re);
        }
        _addEventListeners() {
          this._config.keyboard &&
            I.on(this._element, ue, (e) => this._keydown(e)),
            "hover" === this._config.pause &&
              (I.on(this._element, pe, (e) => this.pause(e)),
              I.on(this._element, fe, (e) => this.cycle(e))),
            this._config.touch &&
              this._touchSupported &&
              this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
          const t = (e) => {
              !this._pointerEvent ||
              ("pen" !== e.pointerType && e.pointerType !== ke)
                ? this._pointerEvent ||
                  (this.touchStartX = e.touches[0].clientX)
                : (this.touchStartX = e.clientX);
            },
            i = (e) => {
              this.touchDeltaX =
                e.touches && e.touches.length > 1
                  ? 0
                  : e.touches[0].clientX - this.touchStartX;
            },
            n = (e) => {
              !this._pointerEvent ||
                ("pen" !== e.pointerType && e.pointerType !== ke) ||
                (this.touchDeltaX = e.clientX - this.touchStartX),
                this._handleSwipe(),
                "hover" === this._config.pause &&
                  (this.pause(),
                  this.touchTimeout && clearTimeout(this.touchTimeout),
                  (this.touchTimeout = setTimeout(
                    (e) => this.cycle(e),
                    500 + this._config.interval,
                  )));
            };
          e.find(".carousel-item img", this._element).forEach((e) => {
            I.on(e, be, (e) => e.preventDefault());
          }),
            this._pointerEvent
              ? (I.on(this._element, ve, (e) => t(e)),
                I.on(this._element, ye, (e) => n(e)),
                this._element.classList.add("pointer-event"))
              : (I.on(this._element, he, (e) => t(e)),
                I.on(this._element, ge, (e) => i(e)),
                I.on(this._element, me, (e) => n(e)));
        }
        _keydown(e) {
          if (/input|textarea/i.test(e.target.tagName)) return;
          const t = le[e.key];
          t && (e.preventDefault(), this._slide(t));
        }
        _getItemIndex(t) {
          return (
            (this._items =
              t && t.parentNode ? e.find(".carousel-item", t.parentNode) : []),
            this._items.indexOf(t)
          );
        }
        _getItemByOrder(e, t) {
          const i = e === oe;
          return _(this._items, t, i, this._config.wrap);
        }
        _triggerSlideEvent(t, i) {
          const n = this._getItemIndex(t),
            o = this._getItemIndex(e.findOne(xe, this._element));
          return I.trigger(this._element, ce, {
            relatedTarget: t,
            direction: i,
            from: o,
            to: n,
          });
        }
        _setActiveIndicatorElement(t) {
          if (this._indicatorsElement) {
            const i = e.findOne(".active", this._indicatorsElement);
            i.classList.remove(Te), i.removeAttribute("aria-current");
            const n = e.find("[data-bs-target]", this._indicatorsElement);
            for (let e = 0; e < n.length; e++)
              if (
                Number.parseInt(n[e].getAttribute("data-bs-slide-to"), 10) ===
                this._getItemIndex(t)
              ) {
                n[e].classList.add(Te),
                  n[e].setAttribute("aria-current", "true");
                break;
              }
          }
        }
        _updateInterval() {
          const t = this._activeElement || e.findOne(xe, this._element);
          if (!t) return;
          const i = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
          i
            ? ((this._config.defaultInterval =
                this._config.defaultInterval || this._config.interval),
              (this._config.interval = i))
            : (this._config.interval =
                this._config.defaultInterval || this._config.interval);
        }
        _slide(t, i) {
          const n = this._directionToOrder(t),
            o = e.findOne(xe, this._element),
            s = this._getItemIndex(o),
            r = i || this._getItemByOrder(n, o),
            a = this._getItemIndex(r),
            l = Boolean(this._interval),
            c = n === oe,
            d = c ? "carousel-item-start" : "carousel-item-end",
            u = c ? "carousel-item-next" : "carousel-item-prev",
            p = this._orderToDirection(n);
          if (r && r.classList.contains(Te)) return void (this._isSliding = !1);
          if (this._isSliding) return;
          if (this._triggerSlideEvent(r, p).defaultPrevented) return;
          if (!o || !r) return;
          (this._isSliding = !0),
            l && this.pause(),
            this._setActiveIndicatorElement(r),
            (this._activeElement = r);
          const f = () => {
            I.trigger(this._element, de, {
              relatedTarget: r,
              direction: p,
              from: s,
              to: a,
            });
          };
          if (this._element.classList.contains("slide")) {
            r.classList.add(u), h(r), o.classList.add(d), r.classList.add(d);
            const e = () => {
              r.classList.remove(d, u),
                r.classList.add(Te),
                o.classList.remove(Te, u, d),
                (this._isSliding = !1),
                setTimeout(f, 0);
            };
            this._queueCallback(e, o, !0);
          } else
            o.classList.remove(Te),
              r.classList.add(Te),
              (this._isSliding = !1),
              f();
          l && this.cycle();
        }
        _directionToOrder(e) {
          return [ae, re].includes(e)
            ? v()
              ? e === re
                ? se
                : oe
              : e === re
                ? oe
                : se
            : e;
        }
        _orderToDirection(e) {
          return [oe, se].includes(e)
            ? v()
              ? e === se
                ? re
                : ae
              : e === se
                ? ae
                : re
            : e;
        }
        static carouselInterface(e, t) {
          const i = Se.getOrCreateInstance(e, t);
          let { _config: n } = i;
          "object" == typeof t && (n = { ...n, ...t });
          const o = "string" == typeof t ? t : n.slide;
          if ("number" == typeof t) i.to(t);
          else if ("string" == typeof o) {
            if (void 0 === i[o]) throw new TypeError(`No method named "${o}"`);
            i[o]();
          } else n.interval && n.ride && (i.pause(), i.cycle());
        }
        static jQueryInterface(e) {
          return this.each(function () {
            Se.carouselInterface(this, e);
          });
        }
        static dataApiClickHandler(e) {
          const t = s(this);
          if (!t || !t.classList.contains("carousel")) return;
          const i = { ...K.getDataAttributes(t), ...K.getDataAttributes(this) },
            n = this.getAttribute("data-bs-slide-to");
          n && (i.interval = !1),
            Se.carouselInterface(t, i),
            n && Se.getInstance(t).to(n),
            e.preventDefault();
        }
      }
      I.on(
        document,
        _e,
        "[data-bs-slide], [data-bs-slide-to]",
        Se.dataApiClickHandler,
      ),
        I.on(window, we, () => {
          const t = e.find('[data-bs-ride="carousel"]');
          for (let e = 0, i = t.length; e < i; e++)
            Se.carouselInterface(t[e], Se.getInstance(t[e]));
        }),
        y(Se);
      const Ce = "collapse",
        Ee = "bs.collapse",
        Ae = `.${Ee}`,
        $e = { toggle: !0, parent: "" },
        Oe = { toggle: "boolean", parent: "(string|element)" },
        Le = `show${Ae}`,
        De = `shown${Ae}`,
        je = `hide${Ae}`,
        Ne = `hidden${Ae}`,
        Pe = `click${Ae}.data-api`,
        He = "show",
        Ie = "collapse",
        Me = "collapsing",
        qe = "collapsed",
        Re = "width",
        We = '[data-bs-toggle="collapse"]';
      class ze extends R {
        constructor(t, i) {
          super(t),
            (this._isTransitioning = !1),
            (this._config = this._getConfig(i)),
            (this._triggerArray = e.find(
              `${We}[href="#${this._element.id}"],${We}[data-bs-target="#${this._element.id}"]`,
            ));
          const n = e.find(We);
          for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t],
              s = o(i),
              r = e.find(s).filter((e) => e === this._element);
            null !== s &&
              r.length &&
              ((this._selector = s), this._triggerArray.push(i));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        static get Default() {
          return $e;
        }
        static get NAME() {
          return Ce;
        }
        toggle() {
          this._element.classList.contains(He) ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._element.classList.contains(He))
            return;
          let t, i;
          this._parent &&
            ((t = e
              .find(".show, .collapsing", this._parent)
              .filter((e) =>
                "string" == typeof this._config.parent
                  ? e.getAttribute("data-bs-parent") === this._config.parent
                  : e.classList.contains(Ie),
              )),
            0 === t.length && (t = null));
          const n = e.findOne(this._selector);
          if (t) {
            const e = t.find((e) => n !== e);
            if (((i = e ? ze.getInstance(e) : null), i && i._isTransitioning))
              return;
          }
          if (I.trigger(this._element, Le).defaultPrevented) return;
          t &&
            t.forEach((e) => {
              n !== e && ze.collapseInterface(e, "hide"),
                i || q.set(e, Ee, null);
            });
          const o = this._getDimension();
          this._element.classList.remove(Ie),
            this._element.classList.add(Me),
            (this._element.style[o] = 0),
            this._triggerArray.length &&
              this._triggerArray.forEach((e) => {
                e.classList.remove(qe), e.setAttribute("aria-expanded", !0);
              }),
            this.setTransitioning(!0);
          const s = `scroll${o[0].toUpperCase() + o.slice(1)}`;
          this._queueCallback(
            () => {
              this._element.classList.remove(Me),
                this._element.classList.add(Ie, He),
                (this._element.style[o] = ""),
                this.setTransitioning(!1),
                I.trigger(this._element, De);
            },
            this._element,
            !0,
          ),
            (this._element.style[o] = `${this._element[s]}px`);
        }
        hide() {
          if (this._isTransitioning || !this._element.classList.contains(He))
            return;
          if (I.trigger(this._element, je).defaultPrevented) return;
          const e = this._getDimension();
          (this._element.style[e] =
            `${this._element.getBoundingClientRect()[e]}px`),
            h(this._element),
            this._element.classList.add(Me),
            this._element.classList.remove(Ie, He);
          const t = this._triggerArray.length;
          if (t > 0)
            for (let e = 0; e < t; e++) {
              const t = this._triggerArray[e],
                i = s(t);
              i &&
                !i.classList.contains(He) &&
                (t.classList.add(qe), t.setAttribute("aria-expanded", !1));
            }
          this.setTransitioning(!0);
          (this._element.style[e] = ""),
            this._queueCallback(
              () => {
                this.setTransitioning(!1),
                  this._element.classList.remove(Me),
                  this._element.classList.add(Ie),
                  I.trigger(this._element, Ne);
              },
              this._element,
              !0,
            );
        }
        setTransitioning(e) {
          this._isTransitioning = e;
        }
        _getConfig(e) {
          return (
            ((e = { ...$e, ...e }).toggle = Boolean(e.toggle)), c(Ce, e, Oe), e
          );
        }
        _getDimension() {
          return this._element.classList.contains(Re) ? Re : "height";
        }
        _getParent() {
          let { parent: t } = this._config;
          t = l(t);
          const i = `${We}[data-bs-parent="${t}"]`;
          return (
            e.find(i, t).forEach((e) => {
              const t = s(e);
              this._addAriaAndCollapsedClass(t, [e]);
            }),
            t
          );
        }
        _addAriaAndCollapsedClass(e, t) {
          if (!e || !t.length) return;
          const i = e.classList.contains(He);
          t.forEach((e) => {
            i ? e.classList.remove(qe) : e.classList.add(qe),
              e.setAttribute("aria-expanded", i);
          });
        }
        static collapseInterface(e, t) {
          let i = ze.getInstance(e);
          const n = {
            ...$e,
            ...K.getDataAttributes(e),
            ...("object" == typeof t && t ? t : {}),
          };
          if (
            (!i &&
              n.toggle &&
              "string" == typeof t &&
              /show|hide/.test(t) &&
              (n.toggle = !1),
            i || (i = new ze(e, n)),
            "string" == typeof t)
          ) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        }
        static jQueryInterface(e) {
          return this.each(function () {
            ze.collapseInterface(this, e);
          });
        }
      }
      I.on(document, Pe, We, function (t) {
        ("A" === t.target.tagName ||
          (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
          t.preventDefault();
        const i = K.getDataAttributes(this),
          n = o(this);
        e.find(n).forEach((e) => {
          const t = ze.getInstance(e);
          let n;
          t
            ? (null === t._parent &&
                "string" == typeof i.parent &&
                ((t._config.parent = i.parent), (t._parent = t._getParent())),
              (n = "toggle"))
            : (n = i),
            ze.collapseInterface(e, n);
        });
      }),
        y(ze);
      var Be = "top",
        Fe = "bottom",
        Ue = "right",
        Xe = "left",
        Ye = "auto",
        Ve = [Be, Fe, Ue, Xe],
        Qe = "start",
        Ke = "end",
        Ge = "clippingParents",
        Je = "viewport",
        Ze = "popper",
        et = "reference",
        tt = Ve.reduce(function (e, t) {
          return e.concat([t + "-" + Qe, t + "-" + Ke]);
        }, []),
        it = [].concat(Ve, [Ye]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Qe, t + "-" + Ke]);
        }, []),
        nt = "beforeRead",
        ot = "read",
        st = "afterRead",
        rt = "beforeMain",
        at = "main",
        lt = "afterMain",
        ct = "beforeWrite",
        dt = "write",
        ut = "afterWrite",
        pt = [nt, ot, st, rt, at, lt, ct, dt, ut];
      function ft(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function ht(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function gt(e) {
        return e instanceof ht(e).Element || e instanceof Element;
      }
      function mt(e) {
        return e instanceof ht(e).HTMLElement || e instanceof HTMLElement;
      }
      function vt(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ht(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var yt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var i = t.styles[e] || {},
              n = t.attributes[e] || {},
              o = t.elements[e];
            mt(o) &&
              ft(o) &&
              (Object.assign(o.style, i),
              Object.keys(n).forEach(function (e) {
                var t = n[e];
                !1 === t
                  ? o.removeAttribute(e)
                  : o.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            i = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, i.popper),
            (t.styles = i),
            t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var n = t.elements[e],
                  o = t.attributes[e] || {},
                  s = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : i[e],
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                mt(n) &&
                  ft(n) &&
                  (Object.assign(n.style, s),
                  Object.keys(o).forEach(function (e) {
                    n.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      function bt(e) {
        return e.split("-")[0];
      }
      function wt(e) {
        var t = e.getBoundingClientRect();
        return {
          width: t.width,
          height: t.height,
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          x: t.left,
          y: t.top,
        };
      }
      function _t(e) {
        var t = wt(e),
          i = e.offsetWidth,
          n = e.offsetHeight;
        return (
          Math.abs(t.width - i) <= 1 && (i = t.width),
          Math.abs(t.height - n) <= 1 && (n = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: i, height: n }
        );
      }
      function Tt(e, t) {
        var i = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (i && vt(i)) {
          var n = t;
          do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function xt(e) {
        return ht(e).getComputedStyle(e);
      }
      function kt(e) {
        return ["table", "td", "th"].indexOf(ft(e)) >= 0;
      }
      function St(e) {
        return ((gt(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Ct(e) {
        return "html" === ft(e)
          ? e
          : e.assignedSlot || e.parentNode || (vt(e) ? e.host : null) || St(e);
      }
      function Et(e) {
        return mt(e) && "fixed" !== xt(e).position ? e.offsetParent : null;
      }
      function At(e) {
        for (
          var t = ht(e), i = Et(e);
          i && kt(i) && "static" === xt(i).position;

        )
          i = Et(i);
        return i &&
          ("html" === ft(i) ||
            ("body" === ft(i) && "static" === xt(i).position))
          ? t
          : i ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  mt(e) &&
                  "fixed" === xt(e).position
                )
                  return null;
                for (
                  var i = Ct(e);
                  mt(i) && ["html", "body"].indexOf(ft(i)) < 0;

                ) {
                  var n = xt(i);
                  if (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    "paint" === n.contain ||
                    -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                    (t && "filter" === n.willChange) ||
                    (t && n.filter && "none" !== n.filter)
                  )
                    return i;
                  i = i.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function $t(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      var Ot = Math.max,
        Lt = Math.min,
        Dt = Math.round;
      function jt(e, t, i) {
        return Ot(e, Lt(t, i));
      }
      function Nt(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Pt(e, t) {
        return t.reduce(function (t, i) {
          return (t[i] = e), t;
        }, {});
      }
      var Ht = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t,
              i = e.state,
              n = e.name,
              o = e.options,
              s = i.elements.arrow,
              r = i.modifiersData.popperOffsets,
              a = bt(i.placement),
              l = $t(a),
              c = [Xe, Ue].indexOf(a) >= 0 ? "height" : "width";
            if (s && r) {
              var d = (function (e, t) {
                  return Nt(
                    "number" !=
                      typeof (e =
                        "function" == typeof e
                          ? e(
                              Object.assign({}, t.rects, {
                                placement: t.placement,
                              }),
                            )
                          : e)
                      ? e
                      : Pt(e, Ve),
                  );
                })(o.padding, i),
                u = _t(s),
                p = "y" === l ? Be : Xe,
                f = "y" === l ? Fe : Ue,
                h =
                  i.rects.reference[c] +
                  i.rects.reference[l] -
                  r[l] -
                  i.rects.popper[c],
                g = r[l] - i.rects.reference[l],
                m = At(s),
                v = m
                  ? "y" === l
                    ? m.clientHeight || 0
                    : m.clientWidth || 0
                  : 0,
                y = h / 2 - g / 2,
                b = d[p],
                w = v - u[c] - d[f],
                _ = v / 2 - u[c] / 2 + y,
                T = jt(b, _, w),
                x = l;
              i.modifiersData[n] =
                (((t = {})[x] = T), (t.centerOffset = T - _), t);
            }
          },
          effect: function (e) {
            var t = e.state,
              i = e.options.element,
              n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n &&
              ("string" != typeof n ||
                (n = t.elements.popper.querySelector(n))) &&
              Tt(t.elements.popper, n) &&
              (t.elements.arrow = n);
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
        },
        It = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Mt(e) {
        var t,
          i = e.popper,
          n = e.popperRect,
          o = e.placement,
          s = e.offsets,
          r = e.position,
          a = e.gpuAcceleration,
          l = e.adaptive,
          c = e.roundOffsets,
          d =
            !0 === c
              ? (function (e) {
                  var t = e.x,
                    i = e.y,
                    n = window.devicePixelRatio || 1;
                  return {
                    x: Dt(Dt(t * n) / n) || 0,
                    y: Dt(Dt(i * n) / n) || 0,
                  };
                })(s)
              : "function" == typeof c
                ? c(s)
                : s,
          u = d.x,
          p = void 0 === u ? 0 : u,
          f = d.y,
          h = void 0 === f ? 0 : f,
          g = s.hasOwnProperty("x"),
          m = s.hasOwnProperty("y"),
          v = Xe,
          y = Be,
          b = window;
        if (l) {
          var w = At(i),
            _ = "clientHeight",
            T = "clientWidth";
          w === ht(i) &&
            "static" !== xt((w = St(i))).position &&
            ((_ = "scrollHeight"), (T = "scrollWidth")),
            o === Be && ((y = Fe), (h -= w[_] - n.height), (h *= a ? 1 : -1)),
            o === Xe && ((v = Ue), (p -= w[T] - n.width), (p *= a ? 1 : -1));
        }
        var x,
          k = Object.assign({ position: r }, l && It);
        return a
          ? Object.assign(
              {},
              k,
              (((x = {})[y] = m ? "0" : ""),
              (x[v] = g ? "0" : ""),
              (x.transform =
                (b.devicePixelRatio || 1) < 2
                  ? "translate(" + p + "px, " + h + "px)"
                  : "translate3d(" + p + "px, " + h + "px, 0)"),
              x),
            )
          : Object.assign(
              {},
              k,
              (((t = {})[y] = m ? h + "px" : ""),
              (t[v] = g ? p + "px" : ""),
              (t.transform = ""),
              t),
            );
      }
      var qt = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              i = e.options,
              n = i.gpuAcceleration,
              o = void 0 === n || n,
              s = i.adaptive,
              r = void 0 === s || s,
              a = i.roundOffsets,
              l = void 0 === a || a,
              c = {
                placement: bt(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: o,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                Mt(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: r,
                    roundOffsets: l,
                  }),
                ),
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  Mt(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: l,
                    }),
                  ),
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              }));
          },
          data: {},
        },
        Rt = { passive: !0 };
      var Wt = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (e) {
            var t = e.state,
              i = e.instance,
              n = e.options,
              o = n.scroll,
              s = void 0 === o || o,
              r = n.resize,
              a = void 0 === r || r,
              l = ht(t.elements.popper),
              c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return (
              s &&
                c.forEach(function (e) {
                  e.addEventListener("scroll", i.update, Rt);
                }),
              a && l.addEventListener("resize", i.update, Rt),
              function () {
                s &&
                  c.forEach(function (e) {
                    e.removeEventListener("scroll", i.update, Rt);
                  }),
                  a && l.removeEventListener("resize", i.update, Rt);
              }
            );
          },
          data: {},
        },
        zt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Bt(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return zt[e];
        });
      }
      var Ft = { start: "end", end: "start" };
      function Ut(e) {
        return e.replace(/start|end/g, function (e) {
          return Ft[e];
        });
      }
      function Xt(e) {
        var t = ht(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Yt(e) {
        return wt(St(e)).left + Xt(e).scrollLeft;
      }
      function Vt(e) {
        var t = xt(e),
          i = t.overflow,
          n = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + o + n);
      }
      function Qt(e) {
        return ["html", "body", "#document"].indexOf(ft(e)) >= 0
          ? e.ownerDocument.body
          : mt(e) && Vt(e)
            ? e
            : Qt(Ct(e));
      }
      function Kt(e, t) {
        var i;
        void 0 === t && (t = []);
        var n = Qt(e),
          o = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
          s = ht(n),
          r = o ? [s].concat(s.visualViewport || [], Vt(n) ? n : []) : n,
          a = t.concat(r);
        return o ? a : a.concat(Kt(Ct(r)));
      }
      function Gt(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Jt(e, t) {
        return t === Je
          ? Gt(
              (function (e) {
                var t = ht(e),
                  i = St(e),
                  n = t.visualViewport,
                  o = i.clientWidth,
                  s = i.clientHeight,
                  r = 0,
                  a = 0;
                return (
                  n &&
                    ((o = n.width),
                    (s = n.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent,
                    ) || ((r = n.offsetLeft), (a = n.offsetTop))),
                  { width: o, height: s, x: r + Yt(e), y: a }
                );
              })(e),
            )
          : mt(t)
            ? (function (e) {
                var t = wt(e);
                return (
                  (t.top = t.top + e.clientTop),
                  (t.left = t.left + e.clientLeft),
                  (t.bottom = t.top + e.clientHeight),
                  (t.right = t.left + e.clientWidth),
                  (t.width = e.clientWidth),
                  (t.height = e.clientHeight),
                  (t.x = t.left),
                  (t.y = t.top),
                  t
                );
              })(t)
            : Gt(
                (function (e) {
                  var t,
                    i = St(e),
                    n = Xt(e),
                    o = null == (t = e.ownerDocument) ? void 0 : t.body,
                    s = Ot(
                      i.scrollWidth,
                      i.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0,
                    ),
                    r = Ot(
                      i.scrollHeight,
                      i.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0,
                    ),
                    a = -n.scrollLeft + Yt(e),
                    l = -n.scrollTop;
                  return (
                    "rtl" === xt(o || i).direction &&
                      (a += Ot(i.clientWidth, o ? o.clientWidth : 0) - s),
                    { width: s, height: r, x: a, y: l }
                  );
                })(St(e)),
              );
      }
      function Zt(e, t, i) {
        var n =
            "clippingParents" === t
              ? (function (e) {
                  var t = Kt(Ct(e)),
                    i =
                      ["absolute", "fixed"].indexOf(xt(e).position) >= 0 &&
                      mt(e)
                        ? At(e)
                        : e;
                  return gt(i)
                    ? t.filter(function (e) {
                        return gt(e) && Tt(e, i) && "body" !== ft(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          o = [].concat(n, [i]),
          s = o[0],
          r = o.reduce(
            function (t, i) {
              var n = Jt(e, i);
              return (
                (t.top = Ot(n.top, t.top)),
                (t.right = Lt(n.right, t.right)),
                (t.bottom = Lt(n.bottom, t.bottom)),
                (t.left = Ot(n.left, t.left)),
                t
              );
            },
            Jt(e, s),
          );
        return (
          (r.width = r.right - r.left),
          (r.height = r.bottom - r.top),
          (r.x = r.left),
          (r.y = r.top),
          r
        );
      }
      function ei(e) {
        return e.split("-")[1];
      }
      function ti(e) {
        var t,
          i = e.reference,
          n = e.element,
          o = e.placement,
          s = o ? bt(o) : null,
          r = o ? ei(o) : null,
          a = i.x + i.width / 2 - n.width / 2,
          l = i.y + i.height / 2 - n.height / 2;
        switch (s) {
          case Be:
            t = { x: a, y: i.y - n.height };
            break;
          case Fe:
            t = { x: a, y: i.y + i.height };
            break;
          case Ue:
            t = { x: i.x + i.width, y: l };
            break;
          case Xe:
            t = { x: i.x - n.width, y: l };
            break;
          default:
            t = { x: i.x, y: i.y };
        }
        var c = s ? $t(s) : null;
        if (null != c) {
          var d = "y" === c ? "height" : "width";
          switch (r) {
            case Qe:
              t[c] = t[c] - (i[d] / 2 - n[d] / 2);
              break;
            case Ke:
              t[c] = t[c] + (i[d] / 2 - n[d] / 2);
          }
        }
        return t;
      }
      function ii(e, t) {
        void 0 === t && (t = {});
        var i = t,
          n = i.placement,
          o = void 0 === n ? e.placement : n,
          s = i.boundary,
          r = void 0 === s ? Ge : s,
          a = i.rootBoundary,
          l = void 0 === a ? Je : a,
          c = i.elementContext,
          d = void 0 === c ? Ze : c,
          u = i.altBoundary,
          p = void 0 !== u && u,
          f = i.padding,
          h = void 0 === f ? 0 : f,
          g = Nt("number" != typeof h ? h : Pt(h, Ve)),
          m = d === Ze ? et : Ze,
          v = e.elements.reference,
          y = e.rects.popper,
          b = e.elements[p ? m : d],
          w = Zt(gt(b) ? b : b.contextElement || St(e.elements.popper), r, l),
          _ = wt(v),
          T = ti({
            reference: _,
            element: y,
            strategy: "absolute",
            placement: o,
          }),
          x = Gt(Object.assign({}, y, T)),
          k = d === Ze ? x : _,
          S = {
            top: w.top - k.top + g.top,
            bottom: k.bottom - w.bottom + g.bottom,
            left: w.left - k.left + g.left,
            right: k.right - w.right + g.right,
          },
          C = e.modifiersData.offset;
        if (d === Ze && C) {
          var E = C[o];
          Object.keys(S).forEach(function (e) {
            var t = [Ue, Fe].indexOf(e) >= 0 ? 1 : -1,
              i = [Be, Fe].indexOf(e) >= 0 ? "y" : "x";
            S[e] += E[i] * t;
          });
        }
        return S;
      }
      function ni(e, t) {
        void 0 === t && (t = {});
        var i = t,
          n = i.placement,
          o = i.boundary,
          s = i.rootBoundary,
          r = i.padding,
          a = i.flipVariations,
          l = i.allowedAutoPlacements,
          c = void 0 === l ? it : l,
          d = ei(n),
          u = d
            ? a
              ? tt
              : tt.filter(function (e) {
                  return ei(e) === d;
                })
            : Ve,
          p = u.filter(function (e) {
            return c.indexOf(e) >= 0;
          });
        0 === p.length && (p = u);
        var f = p.reduce(function (t, i) {
          return (
            (t[i] = ii(e, {
              placement: i,
              boundary: o,
              rootBoundary: s,
              padding: r,
            })[bt(i)]),
            t
          );
        }, {});
        return Object.keys(f).sort(function (e, t) {
          return f[e] - f[t];
        });
      }
      var oi = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            i = e.options,
            n = e.name;
          if (!t.modifiersData[n]._skip) {
            for (
              var o = i.mainAxis,
                s = void 0 === o || o,
                r = i.altAxis,
                a = void 0 === r || r,
                l = i.fallbackPlacements,
                c = i.padding,
                d = i.boundary,
                u = i.rootBoundary,
                p = i.altBoundary,
                f = i.flipVariations,
                h = void 0 === f || f,
                g = i.allowedAutoPlacements,
                m = t.options.placement,
                v = bt(m),
                y =
                  l ||
                  (v === m || !h
                    ? [Bt(m)]
                    : (function (e) {
                        if (bt(e) === Ye) return [];
                        var t = Bt(e);
                        return [Ut(e), t, Ut(t)];
                      })(m)),
                b = [m].concat(y).reduce(function (e, i) {
                  return e.concat(
                    bt(i) === Ye
                      ? ni(t, {
                          placement: i,
                          boundary: d,
                          rootBoundary: u,
                          padding: c,
                          flipVariations: h,
                          allowedAutoPlacements: g,
                        })
                      : i,
                  );
                }, []),
                w = t.rects.reference,
                _ = t.rects.popper,
                T = new Map(),
                x = !0,
                k = b[0],
                S = 0;
              S < b.length;
              S++
            ) {
              var C = b[S],
                E = bt(C),
                A = ei(C) === Qe,
                $ = [Be, Fe].indexOf(E) >= 0,
                O = $ ? "width" : "height",
                L = ii(t, {
                  placement: C,
                  boundary: d,
                  rootBoundary: u,
                  altBoundary: p,
                  padding: c,
                }),
                D = $ ? (A ? Ue : Xe) : A ? Fe : Be;
              w[O] > _[O] && (D = Bt(D));
              var j = Bt(D),
                N = [];
              if (
                (s && N.push(L[E] <= 0),
                a && N.push(L[D] <= 0, L[j] <= 0),
                N.every(function (e) {
                  return e;
                }))
              ) {
                (k = C), (x = !1);
                break;
              }
              T.set(C, N);
            }
            if (x)
              for (
                var P = function (e) {
                    var t = b.find(function (t) {
                      var i = T.get(t);
                      if (i)
                        return i.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (k = t), "break";
                  },
                  H = h ? 3 : 1;
                H > 0;
                H--
              ) {
                if ("break" === P(H)) break;
              }
            t.placement !== k &&
              ((t.modifiersData[n]._skip = !0),
              (t.placement = k),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function si(e, t, i) {
        return (
          void 0 === i && (i = { x: 0, y: 0 }),
          {
            top: e.top - t.height - i.y,
            right: e.right - t.width + i.x,
            bottom: e.bottom - t.height + i.y,
            left: e.left - t.width - i.x,
          }
        );
      }
      function ri(e) {
        return [Be, Ue, Fe, Xe].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ai = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (e) {
          var t = e.state,
            i = e.name,
            n = t.rects.reference,
            o = t.rects.popper,
            s = t.modifiersData.preventOverflow,
            r = ii(t, { elementContext: "reference" }),
            a = ii(t, { altBoundary: !0 }),
            l = si(r, n),
            c = si(a, o, s),
            d = ri(l),
            u = ri(c);
          (t.modifiersData[i] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: d,
            hasPopperEscaped: u,
          }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": d,
              "data-popper-escaped": u,
            }));
        },
      };
      var li = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            i = e.options,
            n = e.name,
            o = i.offset,
            s = void 0 === o ? [0, 0] : o,
            r = it.reduce(function (e, i) {
              return (
                (e[i] = (function (e, t, i) {
                  var n = bt(e),
                    o = [Xe, Be].indexOf(n) >= 0 ? -1 : 1,
                    s =
                      "function" == typeof i
                        ? i(Object.assign({}, t, { placement: e }))
                        : i,
                    r = s[0],
                    a = s[1];
                  return (
                    (r = r || 0),
                    (a = (a || 0) * o),
                    [Xe, Ue].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
                  );
                })(i, t.rects, s)),
                e
              );
            }, {}),
            a = r[t.placement],
            l = a.x,
            c = a.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[n] = r);
        },
      };
      var ci = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (e) {
          var t = e.state,
            i = e.name;
          t.modifiersData[i] = ti({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
          });
        },
        data: {},
      };
      var di = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            i = e.options,
            n = e.name,
            o = i.mainAxis,
            s = void 0 === o || o,
            r = i.altAxis,
            a = void 0 !== r && r,
            l = i.boundary,
            c = i.rootBoundary,
            d = i.altBoundary,
            u = i.padding,
            p = i.tether,
            f = void 0 === p || p,
            h = i.tetherOffset,
            g = void 0 === h ? 0 : h,
            m = ii(t, {
              boundary: l,
              rootBoundary: c,
              padding: u,
              altBoundary: d,
            }),
            v = bt(t.placement),
            y = ei(t.placement),
            b = !y,
            w = $t(v),
            _ = "x" === w ? "y" : "x",
            T = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            k = t.rects.popper,
            S =
              "function" == typeof g
                ? g(Object.assign({}, t.rects, { placement: t.placement }))
                : g,
            C = { x: 0, y: 0 };
          if (T) {
            if (s || a) {
              var E = "y" === w ? Be : Xe,
                A = "y" === w ? Fe : Ue,
                $ = "y" === w ? "height" : "width",
                O = T[w],
                L = T[w] + m[E],
                D = T[w] - m[A],
                j = f ? -k[$] / 2 : 0,
                N = y === Qe ? x[$] : k[$],
                P = y === Qe ? -k[$] : -x[$],
                H = t.elements.arrow,
                I = f && H ? _t(H) : { width: 0, height: 0 },
                M = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                q = M[E],
                R = M[A],
                W = jt(0, x[$], I[$]),
                z = b ? x[$] / 2 - j - W - q - S : N - W - q - S,
                B = b ? -x[$] / 2 + j + W + R + S : P + W + R + S,
                F = t.elements.arrow && At(t.elements.arrow),
                U = F ? ("y" === w ? F.clientTop || 0 : F.clientLeft || 0) : 0,
                X = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement][w]
                  : 0,
                Y = T[w] + z - X - U,
                V = T[w] + B - X;
              if (s) {
                var Q = jt(f ? Lt(L, Y) : L, O, f ? Ot(D, V) : D);
                (T[w] = Q), (C[w] = Q - O);
              }
              if (a) {
                var K = "x" === w ? Be : Xe,
                  G = "x" === w ? Fe : Ue,
                  J = T[_],
                  Z = J + m[K],
                  ee = J - m[G],
                  te = jt(f ? Lt(Z, Y) : Z, J, f ? Ot(ee, V) : ee);
                (T[_] = te), (C[_] = te - J);
              }
            }
            t.modifiersData[n] = C;
          }
        },
        requiresIfExists: ["offset"],
      };
      function ui(e, t, i) {
        void 0 === i && (i = !1);
        var n,
          o,
          s = St(t),
          r = wt(e),
          a = mt(t),
          l = { scrollLeft: 0, scrollTop: 0 },
          c = { x: 0, y: 0 };
        return (
          (a || (!a && !i)) &&
            (("body" !== ft(t) || Vt(s)) &&
              (l =
                (n = t) !== ht(n) && mt(n)
                  ? { scrollLeft: (o = n).scrollLeft, scrollTop: o.scrollTop }
                  : Xt(n)),
            mt(t)
              ? (((c = wt(t)).x += t.clientLeft), (c.y += t.clientTop))
              : s && (c.x = Yt(s))),
          {
            x: r.left + l.scrollLeft - c.x,
            y: r.top + l.scrollTop - c.y,
            width: r.width,
            height: r.height,
          }
        );
      }
      function pi(e) {
        var t = new Map(),
          i = new Set(),
          n = [];
        function o(e) {
          i.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!i.has(e)) {
                  var n = t.get(e);
                  n && o(n);
                }
              }),
            n.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            i.has(e.name) || o(e);
          }),
          n
        );
      }
      var fi = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function hi() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function gi(e) {
        void 0 === e && (e = {});
        var t = e,
          i = t.defaultModifiers,
          n = void 0 === i ? [] : i,
          o = t.defaultOptions,
          s = void 0 === o ? fi : o;
        return function (e, t, i) {
          void 0 === i && (i = s);
          var o,
            r,
            a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, fi, s),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            d = {
              state: a,
              setOptions: function (i) {
                u(),
                  (a.options = Object.assign({}, s, a.options, i)),
                  (a.scrollParents = {
                    reference: gt(e)
                      ? Kt(e)
                      : e.contextElement
                        ? Kt(e.contextElement)
                        : [],
                    popper: Kt(t),
                  });
                var o,
                  r,
                  c = (function (e) {
                    var t = pi(e);
                    return pt.reduce(function (e, i) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === i;
                        }),
                      );
                    }, []);
                  })(
                    ((o = [].concat(n, a.options.modifiers)),
                    (r = o.reduce(function (e, t) {
                      var i = e[t.name];
                      return (
                        (e[t.name] = i
                          ? Object.assign({}, i, t, {
                              options: Object.assign({}, i.options, t.options),
                              data: Object.assign({}, i.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {})),
                    Object.keys(r).map(function (e) {
                      return r[e];
                    })),
                  );
                return (
                  (a.orderedModifiers = c.filter(function (e) {
                    return e.enabled;
                  })),
                  a.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      i = e.options,
                      n = void 0 === i ? {} : i,
                      o = e.effect;
                    if ("function" == typeof o) {
                      var s = o({ state: a, name: t, instance: d, options: n }),
                        r = function () {};
                      l.push(s || r);
                    }
                  }),
                  d.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = a.elements,
                    t = e.reference,
                    i = e.popper;
                  if (hi(t, i)) {
                    (a.rects = {
                      reference: ui(t, At(i), "fixed" === a.options.strategy),
                      popper: _t(i),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      });
                    for (var n = 0; n < a.orderedModifiers.length; n++)
                      if (!0 !== a.reset) {
                        var o = a.orderedModifiers[n],
                          s = o.fn,
                          r = o.options,
                          l = void 0 === r ? {} : r,
                          u = o.name;
                        "function" == typeof s &&
                          (a =
                            s({ state: a, options: l, name: u, instance: d }) ||
                            a);
                      } else (a.reset = !1), (n = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    d.forceUpdate(), e(a);
                  });
                }),
                function () {
                  return (
                    r ||
                      (r = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (r = void 0), e(o());
                        });
                      })),
                    r
                  );
                }),
              destroy: function () {
                u(), (c = !0);
              },
            };
          if (!hi(e, t)) return d;
          function u() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            d.setOptions(i).then(function (e) {
              !c && i.onFirstUpdate && i.onFirstUpdate(e);
            }),
            d
          );
        };
      }
      var mi = gi(),
        vi = gi({ defaultModifiers: [Wt, ci, qt, yt] }),
        yi = gi({ defaultModifiers: [Wt, ci, qt, yt, li, oi, di, Ht, ai] }),
        bi = Object.freeze({
          __proto__: null,
          popperGenerator: gi,
          detectOverflow: ii,
          createPopperBase: mi,
          createPopper: yi,
          createPopperLite: vi,
          top: Be,
          bottom: Fe,
          right: Ue,
          left: Xe,
          auto: Ye,
          basePlacements: Ve,
          start: Qe,
          end: Ke,
          clippingParents: Ge,
          viewport: Je,
          popper: Ze,
          reference: et,
          variationPlacements: tt,
          placements: it,
          beforeRead: nt,
          read: ot,
          afterRead: st,
          beforeMain: rt,
          main: at,
          afterMain: lt,
          beforeWrite: ct,
          write: dt,
          afterWrite: ut,
          modifierPhases: pt,
          applyStyles: yt,
          arrow: Ht,
          computeStyles: qt,
          eventListeners: Wt,
          flip: oi,
          hide: ai,
          offset: li,
          popperOffsets: ci,
          preventOverflow: di,
        });
      const wi = "dropdown",
        _i = ".bs.dropdown",
        Ti = ".data-api",
        xi = "Escape",
        ki = "Space",
        Si = "ArrowUp",
        Ci = "ArrowDown",
        Ei = new RegExp(`${Si}|${Ci}|${xi}`),
        Ai = `hide${_i}`,
        $i = `hidden${_i}`,
        Oi = `show${_i}`,
        Li = `shown${_i}`,
        Di = `click${_i}`,
        ji = `click${_i}${Ti}`,
        Ni = `keydown${_i}${Ti}`,
        Pi = `keyup${_i}${Ti}`,
        Hi = "show",
        Ii = '[data-bs-toggle="dropdown"]',
        Mi = ".dropdown-menu",
        qi = v() ? "top-end" : "top-start",
        Ri = v() ? "top-start" : "top-end",
        Wi = v() ? "bottom-end" : "bottom-start",
        zi = v() ? "bottom-start" : "bottom-end",
        Bi = v() ? "left-start" : "right-start",
        Fi = v() ? "right-start" : "left-start",
        Ui = {
          offset: [0, 2],
          boundary: "clippingParents",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null,
          autoClose: !0,
        },
        Xi = {
          offset: "(array|string|function)",
          boundary: "(string|element)",
          reference: "(string|element|object)",
          display: "string",
          popperConfig: "(null|object|function)",
          autoClose: "(boolean|string)",
        };
      class Yi extends R {
        constructor(e, t) {
          super(e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        static get Default() {
          return Ui;
        }
        static get DefaultType() {
          return Xi;
        }
        static get NAME() {
          return wi;
        }
        toggle() {
          if (u(this._element)) return;
          this._element.classList.contains(Hi) ? this.hide() : this.show();
        }
        show() {
          if (u(this._element) || this._menu.classList.contains(Hi)) return;
          const e = Yi.getParentFromElement(this._element),
            t = { relatedTarget: this._element };
          if (!I.trigger(this._element, Oi, t).defaultPrevented) {
            if (this._inNavbar)
              K.setDataAttribute(this._menu, "popper", "none");
            else {
              if (void 0 === bi)
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper (https://popper.js.org)",
                );
              let t = this._element;
              "parent" === this._config.reference
                ? (t = e)
                : a(this._config.reference)
                  ? (t = l(this._config.reference))
                  : "object" == typeof this._config.reference &&
                    (t = this._config.reference);
              const i = this._getPopperConfig(),
                n = i.modifiers.find(
                  (e) => "applyStyles" === e.name && !1 === e.enabled,
                );
              (this._popper = yi(t, this._menu, i)),
                n && K.setDataAttribute(this._menu, "popper", "static");
            }
            "ontouchstart" in document.documentElement &&
              !e.closest(".navbar-nav") &&
              []
                .concat(...document.body.children)
                .forEach((e) => I.on(e, "mouseover", f)),
              this._element.focus(),
              this._element.setAttribute("aria-expanded", !0),
              this._menu.classList.toggle(Hi),
              this._element.classList.toggle(Hi),
              I.trigger(this._element, Li, t);
          }
        }
        hide() {
          if (u(this._element) || !this._menu.classList.contains(Hi)) return;
          const e = { relatedTarget: this._element };
          this._completeHide(e);
        }
        dispose() {
          this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
          (this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update();
        }
        _addEventListeners() {
          I.on(this._element, Di, (e) => {
            e.preventDefault(), this.toggle();
          });
        }
        _completeHide(e) {
          I.trigger(this._element, Ai, e).defaultPrevented ||
            ("ontouchstart" in document.documentElement &&
              []
                .concat(...document.body.children)
                .forEach((e) => I.off(e, "mouseover", f)),
            this._popper && this._popper.destroy(),
            this._menu.classList.remove(Hi),
            this._element.classList.remove(Hi),
            this._element.setAttribute("aria-expanded", "false"),
            K.removeDataAttribute(this._menu, "popper"),
            I.trigger(this._element, $i, e));
        }
        _getConfig(e) {
          if (
            ((e = {
              ...this.constructor.Default,
              ...K.getDataAttributes(this._element),
              ...e,
            }),
            c(wi, e, this.constructor.DefaultType),
            "object" == typeof e.reference &&
              !a(e.reference) &&
              "function" != typeof e.reference.getBoundingClientRect)
          )
            throw new TypeError(
              `${wi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
            );
          return e;
        }
        _getMenuElement() {
          return e.next(this._element, Mi)[0];
        }
        _getPlacement() {
          const e = this._element.parentNode;
          if (e.classList.contains("dropend")) return Bi;
          if (e.classList.contains("dropstart")) return Fi;
          const t =
            "end" ===
            getComputedStyle(this._menu)
              .getPropertyValue("--bs-position")
              .trim();
          return e.classList.contains("dropup") ? (t ? Ri : qi) : t ? zi : Wi;
        }
        _detectNavbar() {
          return null !== this._element.closest(".navbar");
        }
        _getOffset() {
          const { offset: e } = this._config;
          return "string" == typeof e
            ? e.split(",").map((e) => Number.parseInt(e, 10))
            : "function" == typeof e
              ? (t) => e(t, this._element)
              : e;
        }
        _getPopperConfig() {
          const e = {
            placement: this._getPlacement(),
            modifiers: [
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              { name: "offset", options: { offset: this._getOffset() } },
            ],
          };
          return (
            "static" === this._config.display &&
              (e.modifiers = [{ name: "applyStyles", enabled: !1 }]),
            {
              ...e,
              ...("function" == typeof this._config.popperConfig
                ? this._config.popperConfig(e)
                : this._config.popperConfig),
            }
          );
        }
        _selectMenuItem({ key: t, target: i }) {
          const n = e
            .find(
              ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
              this._menu,
            )
            .filter(d);
          n.length && _(n, i, t === Ci, !n.includes(i)).focus();
        }
        static dropdownInterface(e, t) {
          const i = Yi.getOrCreateInstance(e, t);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        }
        static jQueryInterface(e) {
          return this.each(function () {
            Yi.dropdownInterface(this, e);
          });
        }
        static clearMenus(t) {
          if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
            return;
          const i = e.find(Ii);
          for (let e = 0, n = i.length; e < n; e++) {
            const n = Yi.getInstance(i[e]);
            if (!n || !1 === n._config.autoClose) continue;
            if (!n._element.classList.contains(Hi)) continue;
            const o = { relatedTarget: n._element };
            if (t) {
              const e = t.composedPath(),
                i = e.includes(n._menu);
              if (
                e.includes(n._element) ||
                ("inside" === n._config.autoClose && !i) ||
                ("outside" === n._config.autoClose && i)
              )
                continue;
              if (
                n._menu.contains(t.target) &&
                (("keyup" === t.type && "Tab" === t.key) ||
                  /input|select|option|textarea|form/i.test(t.target.tagName))
              )
                continue;
              "click" === t.type && (o.clickEvent = t);
            }
            n._completeHide(o);
          }
        }
        static getParentFromElement(e) {
          return s(e) || e.parentNode;
        }
        static dataApiKeydownHandler(t) {
          if (
            /input|textarea/i.test(t.target.tagName)
              ? t.key === ki ||
                (t.key !== xi &&
                  ((t.key !== Ci && t.key !== Si) || t.target.closest(Mi)))
              : !Ei.test(t.key)
          )
            return;
          const i = this.classList.contains(Hi);
          if (!i && t.key === xi) return;
          if ((t.preventDefault(), t.stopPropagation(), u(this))) return;
          const n = () => (this.matches(Ii) ? this : e.prev(this, Ii)[0]);
          return t.key === xi
            ? (n().focus(), void Yi.clearMenus())
            : t.key === Si || t.key === Ci
              ? (i || n().click(), void Yi.getInstance(n())._selectMenuItem(t))
              : void ((i && t.key !== ki) || Yi.clearMenus());
        }
      }
      I.on(document, Ni, Ii, Yi.dataApiKeydownHandler),
        I.on(document, Ni, Mi, Yi.dataApiKeydownHandler),
        I.on(document, ji, Yi.clearMenus),
        I.on(document, Pi, Yi.clearMenus),
        I.on(document, ji, Ii, function (e) {
          e.preventDefault(), Yi.dropdownInterface(this);
        }),
        y(Yi);
      const Vi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Qi = ".sticky-top";
      class Ki {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          const e = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - e);
        }
        hide() {
          const e = this.getWidth();
          this._disableOverFlow(),
            this._setElementAttributes(
              this._element,
              "paddingRight",
              (t) => t + e,
            ),
            this._setElementAttributes(Vi, "paddingRight", (t) => t + e),
            this._setElementAttributes(Qi, "marginRight", (t) => t - e);
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"),
            (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(e, t, i) {
          const n = this.getWidth();
          this._applyManipulationCallback(e, (e) => {
            if (e !== this._element && window.innerWidth > e.clientWidth + n)
              return;
            this._saveInitialAttribute(e, t);
            const o = window.getComputedStyle(e)[t];
            e.style[t] = `${i(Number.parseFloat(o))}px`;
          });
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, "paddingRight"),
            this._resetElementAttributes(Vi, "paddingRight"),
            this._resetElementAttributes(Qi, "marginRight");
        }
        _saveInitialAttribute(e, t) {
          const i = e.style[t];
          i && K.setDataAttribute(e, t, i);
        }
        _resetElementAttributes(e, t) {
          this._applyManipulationCallback(e, (e) => {
            const i = K.getDataAttribute(e, t);
            void 0 === i
              ? e.style.removeProperty(t)
              : (K.removeDataAttribute(e, t), (e.style[t] = i));
          });
        }
        _applyManipulationCallback(t, i) {
          a(t) ? i(t) : e.find(t, this._element).forEach(i);
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
      }
      const Gi = {
          isVisible: !0,
          isAnimated: !1,
          rootElement: "body",
          clickCallback: null,
        },
        Ji = {
          isVisible: "boolean",
          isAnimated: "boolean",
          rootElement: "(element|string)",
          clickCallback: "(function|null)",
        },
        Zi = "backdrop",
        en = "show",
        tn = `mousedown.bs.${Zi}`;
      class nn {
        constructor(e) {
          (this._config = this._getConfig(e)),
            (this._isAppended = !1),
            (this._element = null);
        }
        show(e) {
          this._config.isVisible
            ? (this._append(),
              this._config.isAnimated && h(this._getElement()),
              this._getElement().classList.add(en),
              this._emulateAnimation(() => {
                b(e);
              }))
            : b(e);
        }
        hide(e) {
          this._config.isVisible
            ? (this._getElement().classList.remove(en),
              this._emulateAnimation(() => {
                this.dispose(), b(e);
              }))
            : b(e);
        }
        _getElement() {
          if (!this._element) {
            const e = document.createElement("div");
            (e.className = "modal-backdrop"),
              this._config.isAnimated && e.classList.add("fade"),
              (this._element = e);
          }
          return this._element;
        }
        _getConfig(e) {
          return (
            ((e = { ...Gi, ...("object" == typeof e ? e : {}) }).rootElement =
              l(e.rootElement)),
            c(Zi, e, Ji),
            e
          );
        }
        _append() {
          this._isAppended ||
            (this._config.rootElement.appendChild(this._getElement()),
            I.on(this._getElement(), tn, () => {
              b(this._config.clickCallback);
            }),
            (this._isAppended = !0));
        }
        dispose() {
          this._isAppended &&
            (I.off(this._element, tn),
            this._element.remove(),
            (this._isAppended = !1));
        }
        _emulateAnimation(e) {
          w(e, this._getElement(), this._config.isAnimated);
        }
      }
      const on = "modal",
        sn = ".bs.modal",
        rn = "Escape",
        an = { backdrop: !0, keyboard: !0, focus: !0 },
        ln = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
        },
        cn = `hide${sn}`,
        dn = `hidePrevented${sn}`,
        un = `hidden${sn}`,
        pn = `show${sn}`,
        fn = `shown${sn}`,
        hn = `focusin${sn}`,
        gn = `resize${sn}`,
        mn = `click.dismiss${sn}`,
        vn = `keydown.dismiss${sn}`,
        yn = `mouseup.dismiss${sn}`,
        bn = `mousedown.dismiss${sn}`,
        wn = `click${sn}.data-api`,
        _n = "modal-open",
        Tn = "show",
        xn = "modal-static";
      class kn extends R {
        constructor(t, i) {
          super(t),
            (this._config = this._getConfig(i)),
            (this._dialog = e.findOne(".modal-dialog", this._element)),
            (this._backdrop = this._initializeBackDrop()),
            (this._isShown = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollBar = new Ki());
        }
        static get Default() {
          return an;
        }
        static get NAME() {
          return on;
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          if (this._isShown || this._isTransitioning) return;
          I.trigger(this._element, pn, { relatedTarget: e }).defaultPrevented ||
            ((this._isShown = !0),
            this._isAnimated() && (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(_n),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            I.on(this._element, mn, '[data-bs-dismiss="modal"]', (e) =>
              this.hide(e),
            ),
            I.on(this._dialog, bn, () => {
              I.one(this._element, yn, (e) => {
                e.target === this._element && (this._ignoreBackdropClick = !0);
              });
            }),
            this._showBackdrop(() => this._showElement(e)));
        }
        hide(e) {
          if (
            (e &&
              ["A", "AREA"].includes(e.target.tagName) &&
              e.preventDefault(),
            !this._isShown || this._isTransitioning)
          )
            return;
          if (I.trigger(this._element, cn).defaultPrevented) return;
          this._isShown = !1;
          const t = this._isAnimated();
          t && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            I.off(document, hn),
            this._element.classList.remove(Tn),
            I.off(this._element, mn),
            I.off(this._dialog, bn),
            this._queueCallback(() => this._hideModal(), this._element, t);
        }
        dispose() {
          [window, this._dialog].forEach((e) => I.off(e, sn)),
            this._backdrop.dispose(),
            super.dispose(),
            I.off(document, hn);
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new nn({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated(),
          });
        }
        _getConfig(e) {
          return (
            (e = {
              ...an,
              ...K.getDataAttributes(this._element),
              ...("object" == typeof e ? e : {}),
            }),
            c(on, e, ln),
            e
          );
        }
        _showElement(t) {
          const i = this._isAnimated(),
            n = e.findOne(".modal-body", this._dialog);
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            (this._element.scrollTop = 0),
            n && (n.scrollTop = 0),
            i && h(this._element),
            this._element.classList.add(Tn),
            this._config.focus && this._enforceFocus();
          this._queueCallback(
            () => {
              this._config.focus && this._element.focus(),
                (this._isTransitioning = !1),
                I.trigger(this._element, fn, { relatedTarget: t });
            },
            this._dialog,
            i,
          );
        }
        _enforceFocus() {
          I.off(document, hn),
            I.on(document, hn, (e) => {
              document === e.target ||
                this._element === e.target ||
                this._element.contains(e.target) ||
                this._element.focus();
            });
        }
        _setEscapeEvent() {
          this._isShown
            ? I.on(this._element, vn, (e) => {
                this._config.keyboard && e.key === rn
                  ? (e.preventDefault(), this.hide())
                  : this._config.keyboard ||
                    e.key !== rn ||
                    this._triggerBackdropTransition();
              })
            : I.off(this._element, vn);
        }
        _setResizeEvent() {
          this._isShown
            ? I.on(window, gn, () => this._adjustDialog())
            : I.off(window, gn);
        }
        _hideModal() {
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._backdrop.hide(() => {
              document.body.classList.remove(_n),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                I.trigger(this._element, un);
            });
        }
        _showBackdrop(e) {
          I.on(this._element, mn, (e) => {
            this._ignoreBackdropClick
              ? (this._ignoreBackdropClick = !1)
              : e.target === e.currentTarget &&
                (!0 === this._config.backdrop
                  ? this.hide()
                  : "static" === this._config.backdrop &&
                    this._triggerBackdropTransition());
          }),
            this._backdrop.show(e);
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          if (I.trigger(this._element, dn).defaultPrevented) return;
          const { classList: e, scrollHeight: t, style: i } = this._element,
            n = t > document.documentElement.clientHeight;
          (!n && "hidden" === i.overflowY) ||
            e.contains(xn) ||
            (n || (i.overflowY = "hidden"),
            e.add(xn),
            this._queueCallback(() => {
              e.remove(xn),
                n ||
                  this._queueCallback(() => {
                    i.overflowY = "";
                  }, this._dialog);
            }, this._dialog),
            this._element.focus());
        }
        _adjustDialog() {
          const e =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            t = this._scrollBar.getWidth(),
            i = t > 0;
          ((!i && e && !v()) || (i && !e && v())) &&
            (this._element.style.paddingLeft = `${t}px`),
            ((i && !e && !v()) || (!i && e && v())) &&
              (this._element.style.paddingRight = `${t}px`);
        }
        _resetAdjustments() {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }
        static jQueryInterface(e, t) {
          return this.each(function () {
            const i = kn.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === i[e])
                throw new TypeError(`No method named "${e}"`);
              i[e](t);
            }
          });
        }
      }
      I.on(document, wn, '[data-bs-toggle="modal"]', function (e) {
        const t = s(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          I.one(t, pn, (e) => {
            e.defaultPrevented ||
              I.one(t, un, () => {
                d(this) && this.focus();
              });
          });
        kn.getOrCreateInstance(t).toggle(this);
      }),
        y(kn);
      const Sn = "offcanvas",
        Cn = ".bs.offcanvas",
        En = ".data-api",
        An = `load${Cn}${En}`,
        $n = { backdrop: !0, keyboard: !0, scroll: !1 },
        On = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
        Ln = "show",
        Dn = ".offcanvas.show",
        jn = `show${Cn}`,
        Nn = `shown${Cn}`,
        Pn = `hide${Cn}`,
        Hn = `hidden${Cn}`,
        In = `focusin${Cn}`,
        Mn = `click${Cn}${En}`,
        qn = `click.dismiss${Cn}`,
        Rn = `keydown.dismiss${Cn}`;
      class Wn extends R {
        constructor(e, t) {
          super(e),
            (this._config = this._getConfig(t)),
            (this._isShown = !1),
            (this._backdrop = this._initializeBackDrop()),
            this._addEventListeners();
        }
        static get NAME() {
          return Sn;
        }
        static get Default() {
          return $n;
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          if (this._isShown) return;
          if (
            I.trigger(this._element, jn, { relatedTarget: e }).defaultPrevented
          )
            return;
          (this._isShown = !0),
            (this._element.style.visibility = "visible"),
            this._backdrop.show(),
            this._config.scroll ||
              (new Ki().hide(), this._enforceFocusOnElement(this._element)),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(Ln);
          this._queueCallback(
            () => {
              I.trigger(this._element, Nn, { relatedTarget: e });
            },
            this._element,
            !0,
          );
        }
        hide() {
          if (!this._isShown) return;
          if (I.trigger(this._element, Pn).defaultPrevented) return;
          I.off(document, In),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.remove(Ln),
            this._backdrop.hide();
          this._queueCallback(
            () => {
              this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._element.style.visibility = "hidden"),
                this._config.scroll || new Ki().reset(),
                I.trigger(this._element, Hn);
            },
            this._element,
            !0,
          );
        }
        dispose() {
          this._backdrop.dispose(), super.dispose(), I.off(document, In);
        }
        _getConfig(e) {
          return (
            (e = {
              ...$n,
              ...K.getDataAttributes(this._element),
              ...("object" == typeof e ? e : {}),
            }),
            c(Sn, e, On),
            e
          );
        }
        _initializeBackDrop() {
          return new nn({
            isVisible: this._config.backdrop,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: () => this.hide(),
          });
        }
        _enforceFocusOnElement(e) {
          I.off(document, In),
            I.on(document, In, (t) => {
              document === t.target ||
                e === t.target ||
                e.contains(t.target) ||
                e.focus();
            }),
            e.focus();
        }
        _addEventListeners() {
          I.on(this._element, qn, '[data-bs-dismiss="offcanvas"]', () =>
            this.hide(),
          ),
            I.on(this._element, Rn, (e) => {
              this._config.keyboard && "Escape" === e.key && this.hide();
            });
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Wn.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      I.on(document, Mn, '[data-bs-toggle="offcanvas"]', function (t) {
        const i = s(this);
        if (
          (["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this))
        )
          return;
        I.one(i, Hn, () => {
          d(this) && this.focus();
        });
        const n = e.findOne(Dn);
        n && n !== i && Wn.getInstance(n).hide();
        Wn.getOrCreateInstance(i).toggle(this);
      }),
        I.on(window, An, () =>
          e.find(Dn).forEach((e) => Wn.getOrCreateInstance(e).show()),
        ),
        y(Wn);
      const zn = new Set([
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ]),
        Bn = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
        Fn =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Un = (e, t) => {
          const i = e.nodeName.toLowerCase();
          if (t.includes(i))
            return (
              !zn.has(i) ||
              Boolean(Bn.test(e.nodeValue) || Fn.test(e.nodeValue))
            );
          const n = t.filter((e) => e instanceof RegExp);
          for (let e = 0, t = n.length; e < t; e++) if (n[e].test(i)) return !0;
          return !1;
        },
        Xn = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        };
      function Yn(e, t, i) {
        if (!e.length) return e;
        if (i && "function" == typeof i) return i(e);
        const n = new window.DOMParser().parseFromString(e, "text/html"),
          o = Object.keys(t),
          s = [].concat(...n.body.querySelectorAll("*"));
        for (let e = 0, i = s.length; e < i; e++) {
          const i = s[e],
            n = i.nodeName.toLowerCase();
          if (!o.includes(n)) {
            i.remove();
            continue;
          }
          const r = [].concat(...i.attributes),
            a = [].concat(t["*"] || [], t[n] || []);
          r.forEach((e) => {
            Un(e, a) || i.removeAttribute(e.nodeName);
          });
        }
        return n.body.innerHTML;
      }
      const Vn = "tooltip",
        Qn = ".bs.tooltip",
        Kn = "bs-tooltip",
        Gn = new RegExp(`(^|\\s)${Kn}\\S+`, "g"),
        Jn = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Zn = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(array|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacements: "array",
          boundary: "(string|element)",
          customClass: "(string|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          allowList: "object",
          popperConfig: "(null|object|function)",
        },
        eo = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: v() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: v() ? "right" : "left",
        },
        to = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: [0, 0],
          container: !1,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          boundary: "clippingParents",
          customClass: "",
          sanitize: !0,
          sanitizeFn: null,
          allowList: Xn,
          popperConfig: null,
        },
        io = {
          HIDE: `hide${Qn}`,
          HIDDEN: `hidden${Qn}`,
          SHOW: `show${Qn}`,
          SHOWN: `shown${Qn}`,
          INSERTED: `inserted${Qn}`,
          CLICK: `click${Qn}`,
          FOCUSIN: `focusin${Qn}`,
          FOCUSOUT: `focusout${Qn}`,
          MOUSEENTER: `mouseenter${Qn}`,
          MOUSELEAVE: `mouseleave${Qn}`,
        },
        no = "fade",
        oo = "modal",
        so = "show",
        ro = "show",
        ao = "out",
        lo = "hover",
        co = "focus";
      class uo extends R {
        constructor(e, t) {
          if (void 0 === bi)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)",
            );
          super(e),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        static get Default() {
          return to;
        }
        static get NAME() {
          return Vn;
        }
        static get Event() {
          return io;
        }
        static get DefaultType() {
          return Zn;
        }
        enable() {
          this._isEnabled = !0;
        }
        disable() {
          this._isEnabled = !1;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle(e) {
          if (this._isEnabled)
            if (e) {
              const t = this._initializeOnDelegatedTarget(e);
              (t._activeTrigger.click = !t._activeTrigger.click),
                t._isWithActiveTrigger()
                  ? t._enter(null, t)
                  : t._leave(null, t);
            } else {
              if (this.getTipElement().classList.contains(so))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }
        dispose() {
          clearTimeout(this._timeout),
            I.off(
              this._element.closest(`.${oo}`),
              "hide.bs.modal",
              this._hideModalHandler,
            ),
            this.tip && this.tip.remove(),
            this._popper && this._popper.destroy(),
            super.dispose();
        }
        show() {
          if ("none" === this._element.style.display)
            throw new Error("Please use show on visible elements");
          if (!this.isWithContent() || !this._isEnabled) return;
          const e = I.trigger(this._element, this.constructor.Event.SHOW),
            t = p(this._element),
            n =
              null === t
                ? this._element.ownerDocument.documentElement.contains(
                    this._element,
                  )
                : t.contains(this._element);
          if (e.defaultPrevented || !n) return;
          const o = this.getTipElement(),
            s = i(this.constructor.NAME);
          o.setAttribute("id", s),
            this._element.setAttribute("aria-describedby", s),
            this.setContent(),
            this._config.animation && o.classList.add(no);
          const r =
              "function" == typeof this._config.placement
                ? this._config.placement.call(this, o, this._element)
                : this._config.placement,
            a = this._getAttachment(r);
          this._addAttachmentClass(a);
          const { container: l } = this._config;
          q.set(o, this.constructor.DATA_KEY, this),
            this._element.ownerDocument.documentElement.contains(this.tip) ||
              (l.appendChild(o),
              I.trigger(this._element, this.constructor.Event.INSERTED)),
            this._popper
              ? this._popper.update()
              : (this._popper = yi(this._element, o, this._getPopperConfig(a))),
            o.classList.add(so);
          const c =
            "function" == typeof this._config.customClass
              ? this._config.customClass()
              : this._config.customClass;
          c && o.classList.add(...c.split(" ")),
            "ontouchstart" in document.documentElement &&
              [].concat(...document.body.children).forEach((e) => {
                I.on(e, "mouseover", f);
              });
          const d = this.tip.classList.contains(no);
          this._queueCallback(
            () => {
              const e = this._hoverState;
              (this._hoverState = null),
                I.trigger(this._element, this.constructor.Event.SHOWN),
                e === ao && this._leave(null, this);
            },
            this.tip,
            d,
          );
        }
        hide() {
          if (!this._popper) return;
          const e = this.getTipElement();
          if (
            I.trigger(this._element, this.constructor.Event.HIDE)
              .defaultPrevented
          )
            return;
          e.classList.remove(so),
            "ontouchstart" in document.documentElement &&
              []
                .concat(...document.body.children)
                .forEach((e) => I.off(e, "mouseover", f)),
            (this._activeTrigger.click = !1),
            (this._activeTrigger[co] = !1),
            (this._activeTrigger[lo] = !1);
          const t = this.tip.classList.contains(no);
          this._queueCallback(
            () => {
              this._isWithActiveTrigger() ||
                (this._hoverState !== ro && e.remove(),
                this._cleanTipClass(),
                this._element.removeAttribute("aria-describedby"),
                I.trigger(this._element, this.constructor.Event.HIDDEN),
                this._popper &&
                  (this._popper.destroy(), (this._popper = null)));
            },
            this.tip,
            t,
          ),
            (this._hoverState = "");
        }
        update() {
          null !== this._popper && this._popper.update();
        }
        isWithContent() {
          return Boolean(this.getTitle());
        }
        getTipElement() {
          if (this.tip) return this.tip;
          const e = document.createElement("div");
          return (
            (e.innerHTML = this._config.template),
            (this.tip = e.children[0]),
            this.tip
          );
        }
        setContent() {
          const t = this.getTipElement();
          this.setElementContent(
            e.findOne(".tooltip-inner", t),
            this.getTitle(),
          ),
            t.classList.remove(no, so);
        }
        setElementContent(e, t) {
          if (null !== e)
            return a(t)
              ? ((t = l(t)),
                void (this._config.html
                  ? t.parentNode !== e && ((e.innerHTML = ""), e.appendChild(t))
                  : (e.textContent = t.textContent)))
              : void (this._config.html
                  ? (this._config.sanitize &&
                      (t = Yn(
                        t,
                        this._config.allowList,
                        this._config.sanitizeFn,
                      )),
                    (e.innerHTML = t))
                  : (e.textContent = t));
        }
        getTitle() {
          let e = this._element.getAttribute("data-bs-original-title");
          return (
            e ||
              (e =
                "function" == typeof this._config.title
                  ? this._config.title.call(this._element)
                  : this._config.title),
            e
          );
        }
        updateAttachment(e) {
          return "right" === e ? "end" : "left" === e ? "start" : e;
        }
        _initializeOnDelegatedTarget(e, t) {
          const i = this.constructor.DATA_KEY;
          return (
            (t = t || q.get(e.delegateTarget, i)) ||
              ((t = new this.constructor(
                e.delegateTarget,
                this._getDelegateConfig(),
              )),
              q.set(e.delegateTarget, i, t)),
            t
          );
        }
        _getOffset() {
          const { offset: e } = this._config;
          return "string" == typeof e
            ? e.split(",").map((e) => Number.parseInt(e, 10))
            : "function" == typeof e
              ? (t) => e(t, this._element)
              : e;
        }
        _getPopperConfig(e) {
          const t = {
            placement: e,
            modifiers: [
              {
                name: "flip",
                options: {
                  fallbackPlacements: this._config.fallbackPlacements,
                },
              },
              { name: "offset", options: { offset: this._getOffset() } },
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              {
                name: "arrow",
                options: { element: `.${this.constructor.NAME}-arrow` },
              },
              {
                name: "onChange",
                enabled: !0,
                phase: "afterWrite",
                fn: (e) => this._handlePopperPlacementChange(e),
              },
            ],
            onFirstUpdate: (e) => {
              e.options.placement !== e.placement &&
                this._handlePopperPlacementChange(e);
            },
          };
          return {
            ...t,
            ...("function" == typeof this._config.popperConfig
              ? this._config.popperConfig(t)
              : this._config.popperConfig),
          };
        }
        _addAttachmentClass(e) {
          this.getTipElement().classList.add(
            `${Kn}-${this.updateAttachment(e)}`,
          );
        }
        _getAttachment(e) {
          return eo[e.toUpperCase()];
        }
        _setListeners() {
          this._config.trigger.split(" ").forEach((e) => {
            if ("click" === e)
              I.on(
                this._element,
                this.constructor.Event.CLICK,
                this._config.selector,
                (e) => this.toggle(e),
              );
            else if ("manual" !== e) {
              const t =
                  e === lo
                    ? this.constructor.Event.MOUSEENTER
                    : this.constructor.Event.FOCUSIN,
                i =
                  e === lo
                    ? this.constructor.Event.MOUSELEAVE
                    : this.constructor.Event.FOCUSOUT;
              I.on(this._element, t, this._config.selector, (e) =>
                this._enter(e),
              ),
                I.on(this._element, i, this._config.selector, (e) =>
                  this._leave(e),
                );
            }
          }),
            (this._hideModalHandler = () => {
              this._element && this.hide();
            }),
            I.on(
              this._element.closest(`.${oo}`),
              "hide.bs.modal",
              this._hideModalHandler,
            ),
            this._config.selector
              ? (this._config = {
                  ...this._config,
                  trigger: "manual",
                  selector: "",
                })
              : this._fixTitle();
        }
        _fixTitle() {
          const e = this._element.getAttribute("title"),
            t = typeof this._element.getAttribute("data-bs-original-title");
          (e || "string" !== t) &&
            (this._element.setAttribute("data-bs-original-title", e || ""),
            !e ||
              this._element.getAttribute("aria-label") ||
              this._element.textContent ||
              this._element.setAttribute("aria-label", e),
            this._element.setAttribute("title", ""));
        }
        _enter(e, t) {
          (t = this._initializeOnDelegatedTarget(e, t)),
            e && (t._activeTrigger["focusin" === e.type ? co : lo] = !0),
            t.getTipElement().classList.contains(so) || t._hoverState === ro
              ? (t._hoverState = ro)
              : (clearTimeout(t._timeout),
                (t._hoverState = ro),
                t._config.delay && t._config.delay.show
                  ? (t._timeout = setTimeout(() => {
                      t._hoverState === ro && t.show();
                    }, t._config.delay.show))
                  : t.show());
        }
        _leave(e, t) {
          (t = this._initializeOnDelegatedTarget(e, t)),
            e &&
              (t._activeTrigger["focusout" === e.type ? co : lo] =
                t._element.contains(e.relatedTarget)),
            t._isWithActiveTrigger() ||
              (clearTimeout(t._timeout),
              (t._hoverState = ao),
              t._config.delay && t._config.delay.hide
                ? (t._timeout = setTimeout(() => {
                    t._hoverState === ao && t.hide();
                  }, t._config.delay.hide))
                : t.hide());
        }
        _isWithActiveTrigger() {
          for (const e in this._activeTrigger)
            if (this._activeTrigger[e]) return !0;
          return !1;
        }
        _getConfig(e) {
          const t = K.getDataAttributes(this._element);
          return (
            Object.keys(t).forEach((e) => {
              Jn.has(e) && delete t[e];
            }),
            ((e = {
              ...this.constructor.Default,
              ...t,
              ...("object" == typeof e && e ? e : {}),
            }).container = !1 === e.container ? document.body : l(e.container)),
            "number" == typeof e.delay &&
              (e.delay = { show: e.delay, hide: e.delay }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            c(Vn, e, this.constructor.DefaultType),
            e.sanitize &&
              (e.template = Yn(e.template, e.allowList, e.sanitizeFn)),
            e
          );
        }
        _getDelegateConfig() {
          const e = {};
          if (this._config)
            for (const t in this._config)
              this.constructor.Default[t] !== this._config[t] &&
                (e[t] = this._config[t]);
          return e;
        }
        _cleanTipClass() {
          const e = this.getTipElement(),
            t = e.getAttribute("class").match(Gn);
          null !== t &&
            t.length > 0 &&
            t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
        }
        _handlePopperPlacementChange(e) {
          const { state: t } = e;
          t &&
            ((this.tip = t.elements.popper),
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(t.placement)));
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = uo.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      y(uo);
      const po = ".bs.popover",
        fo = "bs-popover",
        ho = new RegExp(`(^|\\s)${fo}\\S+`, "g"),
        go = {
          ...uo.Default,
          placement: "right",
          offset: [0, 8],
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        },
        mo = { ...uo.DefaultType, content: "(string|element|function)" },
        vo = {
          HIDE: `hide${po}`,
          HIDDEN: `hidden${po}`,
          SHOW: `show${po}`,
          SHOWN: `shown${po}`,
          INSERTED: `inserted${po}`,
          CLICK: `click${po}`,
          FOCUSIN: `focusin${po}`,
          FOCUSOUT: `focusout${po}`,
          MOUSEENTER: `mouseenter${po}`,
          MOUSELEAVE: `mouseleave${po}`,
        },
        yo = ".popover-header",
        bo = ".popover-body";
      class wo extends uo {
        static get Default() {
          return go;
        }
        static get NAME() {
          return "popover";
        }
        static get Event() {
          return vo;
        }
        static get DefaultType() {
          return mo;
        }
        isWithContent() {
          return this.getTitle() || this._getContent();
        }
        getTipElement() {
          return (
            this.tip ||
              ((this.tip = super.getTipElement()),
              this.getTitle() || e.findOne(yo, this.tip).remove(),
              this._getContent() || e.findOne(bo, this.tip).remove()),
            this.tip
          );
        }
        setContent() {
          const t = this.getTipElement();
          this.setElementContent(e.findOne(yo, t), this.getTitle());
          let i = this._getContent();
          "function" == typeof i && (i = i.call(this._element)),
            this.setElementContent(e.findOne(bo, t), i),
            t.classList.remove("fade", "show");
        }
        _addAttachmentClass(e) {
          this.getTipElement().classList.add(
            `${fo}-${this.updateAttachment(e)}`,
          );
        }
        _getContent() {
          return (
            this._element.getAttribute("data-bs-content") ||
            this._config.content
          );
        }
        _cleanTipClass() {
          const e = this.getTipElement(),
            t = e.getAttribute("class").match(ho);
          null !== t &&
            t.length > 0 &&
            t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = wo.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      y(wo);
      const _o = "scrollspy",
        To = ".bs.scrollspy",
        xo = { offset: 10, method: "auto", target: "" },
        ko = { offset: "number", method: "string", target: "(string|element)" },
        So = `activate${To}`,
        Co = `scroll${To}`,
        Eo = `load${To}.data-api`,
        Ao = "dropdown-item",
        $o = "active",
        Oo = ".nav-link",
        Lo = ".list-group-item",
        Do = "position";
      class jo extends R {
        constructor(e, t) {
          super(e),
            (this._scrollElement =
              "BODY" === this._element.tagName ? window : this._element),
            (this._config = this._getConfig(t)),
            (this._selector = `${this._config.target} ${Oo}, ${this._config.target} ${Lo}, ${this._config.target} .${Ao}`),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            I.on(this._scrollElement, Co, () => this._process()),
            this.refresh(),
            this._process();
        }
        static get Default() {
          return xo;
        }
        static get NAME() {
          return _o;
        }
        refresh() {
          const t =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : Do,
            i = "auto" === this._config.method ? t : this._config.method,
            n = i === Do ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight());
          e.find(this._selector)
            .map((t) => {
              const s = o(t),
                r = s ? e.findOne(s) : null;
              if (r) {
                const e = r.getBoundingClientRect();
                if (e.width || e.height) return [K[i](r).top + n, s];
              }
              return null;
            })
            .filter((e) => e)
            .sort((e, t) => e[0] - t[0])
            .forEach((e) => {
              this._offsets.push(e[0]), this._targets.push(e[1]);
            });
        }
        dispose() {
          I.off(this._scrollElement, To), super.dispose();
        }
        _getConfig(e) {
          if (
            "string" !=
              typeof (e = {
                ...xo,
                ...K.getDataAttributes(this._element),
                ...("object" == typeof e && e ? e : {}),
              }).target &&
            a(e.target)
          ) {
            let { id: t } = e.target;
            t || ((t = i(_o)), (e.target.id = t)), (e.target = `#${t}`);
          }
          return c(_o, e, ko), e;
        }
        _getScrollTop() {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
            )
          );
        }
        _getOffsetHeight() {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
          const e = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            i = this._config.offset + t - this._getOffsetHeight();
          if ((this._scrollHeight !== t && this.refresh(), e >= i)) {
            const e = this._targets[this._targets.length - 1];
            this._activeTarget !== e && this._activate(e);
          } else {
            if (
              this._activeTarget &&
              e < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (let t = this._offsets.length; t--; ) {
              this._activeTarget !== this._targets[t] &&
                e >= this._offsets[t] &&
                (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) &&
                this._activate(this._targets[t]);
            }
          }
        }
        _activate(t) {
          (this._activeTarget = t), this._clear();
          const i = this._selector
              .split(",")
              .map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
            n = e.findOne(i.join(","));
          n.classList.contains(Ao)
            ? (e
                .findOne(".dropdown-toggle", n.closest(".dropdown"))
                .classList.add($o),
              n.classList.add($o))
            : (n.classList.add($o),
              e.parents(n, ".nav, .list-group").forEach((t) => {
                e.prev(t, `${Oo}, ${Lo}`).forEach((e) => e.classList.add($o)),
                  e.prev(t, ".nav-item").forEach((t) => {
                    e.children(t, Oo).forEach((e) => e.classList.add($o));
                  });
              })),
            I.trigger(this._scrollElement, So, { relatedTarget: t });
        }
        _clear() {
          e.find(this._selector)
            .filter((e) => e.classList.contains($o))
            .forEach((e) => e.classList.remove($o));
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = jo.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      I.on(window, Eo, () => {
        e.find('[data-bs-spy="scroll"]').forEach((e) => new jo(e));
      }),
        y(jo);
      const No = ".bs.tab",
        Po = `hide${No}`,
        Ho = `hidden${No}`,
        Io = `show${No}`,
        Mo = `shown${No}`,
        qo = `click${No}.data-api`,
        Ro = "active",
        Wo = "fade",
        zo = "show",
        Bo = ".active",
        Fo = ":scope > li > .active";
      class Uo extends R {
        static get NAME() {
          return "tab";
        }
        show() {
          if (
            this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
            this._element.classList.contains(Ro)
          )
            return;
          let t;
          const i = s(this._element),
            n = this._element.closest(".nav, .list-group");
          if (n) {
            const i = "UL" === n.nodeName || "OL" === n.nodeName ? Fo : Bo;
            (t = e.find(i, n)), (t = t[t.length - 1]);
          }
          const o = t
            ? I.trigger(t, Po, { relatedTarget: this._element })
            : null;
          if (
            I.trigger(this._element, Io, { relatedTarget: t })
              .defaultPrevented ||
            (null !== o && o.defaultPrevented)
          )
            return;
          this._activate(this._element, n);
          const r = () => {
            I.trigger(t, Ho, { relatedTarget: this._element }),
              I.trigger(this._element, Mo, { relatedTarget: t });
          };
          i ? this._activate(i, i.parentNode, r) : r();
        }
        _activate(t, i, n) {
          const o = (
              !i || ("UL" !== i.nodeName && "OL" !== i.nodeName)
                ? e.children(i, Bo)
                : e.find(Fo, i)
            )[0],
            s = n && o && o.classList.contains(Wo),
            r = () => this._transitionComplete(t, o, n);
          o && s
            ? (o.classList.remove(zo), this._queueCallback(r, t, !0))
            : r();
        }
        _transitionComplete(t, i, n) {
          if (i) {
            i.classList.remove(Ro);
            const t = e.findOne(
              ":scope > .dropdown-menu .active",
              i.parentNode,
            );
            t && t.classList.remove(Ro),
              "tab" === i.getAttribute("role") &&
                i.setAttribute("aria-selected", !1);
          }
          t.classList.add(Ro),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            h(t),
            t.classList.contains(Wo) && t.classList.add(zo);
          let o = t.parentNode;
          if (
            (o && "LI" === o.nodeName && (o = o.parentNode),
            o && o.classList.contains("dropdown-menu"))
          ) {
            const i = t.closest(".dropdown");
            i &&
              e.find(".dropdown-toggle", i).forEach((e) => e.classList.add(Ro)),
              t.setAttribute("aria-expanded", !0);
          }
          n && n();
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Uo.getOrCreateInstance(this);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      I.on(
        document,
        qo,
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        function (e) {
          if (
            (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            u(this))
          )
            return;
          Uo.getOrCreateInstance(this).show();
        },
      ),
        y(Uo);
      const Xo = "toast",
        Yo = ".bs.toast",
        Vo = `click.dismiss${Yo}`,
        Qo = `mouseover${Yo}`,
        Ko = `mouseout${Yo}`,
        Go = `focusin${Yo}`,
        Jo = `focusout${Yo}`,
        Zo = `hide${Yo}`,
        es = `hidden${Yo}`,
        ts = `show${Yo}`,
        is = `shown${Yo}`,
        ns = "hide",
        os = "show",
        ss = "showing",
        rs = { animation: "boolean", autohide: "boolean", delay: "number" },
        as = { animation: !0, autohide: !0, delay: 5e3 };
      class ls extends R {
        constructor(e, t) {
          super(e),
            (this._config = this._getConfig(t)),
            (this._timeout = null),
            (this._hasMouseInteraction = !1),
            (this._hasKeyboardInteraction = !1),
            this._setListeners();
        }
        static get DefaultType() {
          return rs;
        }
        static get Default() {
          return as;
        }
        static get NAME() {
          return Xo;
        }
        show() {
          if (I.trigger(this._element, ts).defaultPrevented) return;
          this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade");
          this._element.classList.remove(ns),
            h(this._element),
            this._element.classList.add(ss),
            this._queueCallback(
              () => {
                this._element.classList.remove(ss),
                  this._element.classList.add(os),
                  I.trigger(this._element, is),
                  this._maybeScheduleHide();
              },
              this._element,
              this._config.animation,
            );
        }
        hide() {
          if (!this._element.classList.contains(os)) return;
          if (I.trigger(this._element, Zo).defaultPrevented) return;
          this._element.classList.remove(os),
            this._queueCallback(
              () => {
                this._element.classList.add(ns), I.trigger(this._element, es);
              },
              this._element,
              this._config.animation,
            );
        }
        dispose() {
          this._clearTimeout(),
            this._element.classList.contains(os) &&
              this._element.classList.remove(os),
            super.dispose();
        }
        _getConfig(e) {
          return (
            (e = {
              ...as,
              ...K.getDataAttributes(this._element),
              ...("object" == typeof e && e ? e : {}),
            }),
            c(Xo, e, this.constructor.DefaultType),
            e
          );
        }
        _maybeScheduleHide() {
          this._config.autohide &&
            (this._hasMouseInteraction ||
              this._hasKeyboardInteraction ||
              (this._timeout = setTimeout(() => {
                this.hide();
              }, this._config.delay)));
        }
        _onInteraction(e, t) {
          switch (e.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = t;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = t;
          }
          if (t) return void this._clearTimeout();
          const i = e.relatedTarget;
          this._element === i ||
            this._element.contains(i) ||
            this._maybeScheduleHide();
        }
        _setListeners() {
          I.on(this._element, Vo, '[data-bs-dismiss="toast"]', () =>
            this.hide(),
          ),
            I.on(this._element, Qo, (e) => this._onInteraction(e, !0)),
            I.on(this._element, Ko, (e) => this._onInteraction(e, !1)),
            I.on(this._element, Go, (e) => this._onInteraction(e, !0)),
            I.on(this._element, Jo, (e) => this._onInteraction(e, !1));
        }
        _clearTimeout() {
          clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = ls.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      return (
        y(ls),
        {
          Alert: U,
          Button: Y,
          Carousel: Se,
          Collapse: ze,
          Dropdown: Yi,
          Modal: kn,
          Offcanvas: Wn,
          Popover: wo,
          ScrollSpy: jo,
          Tab: Uo,
          Toast: ls,
          Tooltip: uo,
        }
      );
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();
