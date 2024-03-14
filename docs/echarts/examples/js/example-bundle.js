var echartsExample;
echartsExample = (() => {
  var t = {
      913: (t, e, i) => {
        t = i.nmd(t);
        var n = {
            grid: "GridComponent",
            polar: "PolarComponent",
            geo: "GeoComponent",
            singleAxis: "SingleAxisComponent",
            parallel: "ParallelComponent",
            calendar: "CalendarComponent",
            graphic: "GraphicComponent",
            toolbox: "ToolboxComponent",
            tooltip: "TooltipComponent",
            axisPointer: "AxisPointerComponent",
            brush: "BrushComponent",
            title: "TitleComponent",
            timeline: "TimelineComponent",
            markPoint: "MarkPointComponent",
            markLine: "MarkLineComponent",
            markArea: "MarkAreaComponent",
            legend: "LegendComponent",
            dataZoom: "DataZoomComponent",
            visualMap: "VisualMapComponent",
            aria: "AriaComponent",
            dataset: "DatasetComponent",
            xAxis: "GridComponent",
            yAxis: "GridComponent",
            angleAxis: "PolarComponent",
            radiusAxis: "PolarComponent",
          },
          a = {
            line: "LineChart",
            bar: "BarChart",
            pie: "PieChart",
            scatter: "ScatterChart",
            radar: "RadarChart",
            map: "MapChart",
            tree: "TreeChart",
            treemap: "TreemapChart",
            graph: "GraphChart",
            gauge: "GaugeChart",
            funnel: "FunnelChart",
            parallel: "ParallelChart",
            sankey: "SankeyChart",
            boxplot: "BoxplotChart",
            candlestick: "CandlestickChart",
            effectScatter: "EffectScatterChart",
            lines: "LinesChart",
            heatmap: "HeatmapChart",
            pictorialBar: "PictorialBarChart",
            themeRiver: "ThemeRiverChart",
            sunburst: "SunburstChart",
            custom: "CustomChart",
          },
          r = {
            grid3D: "Grid3DComponent",
            geo3D: "Geo3DComponent",
            globe: "GlobeComponent",
            mapbox3D: "Mapbox3DComponent",
            maptalks3D: "Maptalks3DComponent",
            xAxis3D: "Grid3DComponent",
            yAxis3D: "Grid3DComponent",
            zAxis3D: "Grid3DComponent",
          },
          o = {
            bar3D: "Bar3DChart",
            line3D: "Line3DChart",
            scatter3D: "Scatter3DChart",
            lines3D: "Lines3DChart",
            polygons3D: "Polygons3DChart",
            surface: "SurfaceChart",
            map3D: "Map3DChart",
            scatterGL: "ScatterGLChart",
            graphGL: "GraphGLChart",
            flowGL: "FlowGLChart",
            linesGL: "LinesGLChart",
          },
          l = {},
          s = {},
          c = {},
          d = {},
          u = { SVGRenderer: "svg", CanvasRenderer: "canvas" },
          p = ["markLine", "markArea", "markPoint"],
          f = [].concat(p, ["grid", "axisPointer", "aria"]),
          g = [
            "xAxis",
            "yAxis",
            "angleAxis",
            "radiusAxis",
            "xAxis3D",
            "yAxis3D",
            "zAxis3D",
          ];
        function h(t, e) {
          Object.keys(t).forEach(function (i) {
            g.includes(i) || (e[t[i]] = i);
          });
        }
        function m(t, e) {
          var i = [],
            n = [],
            a = [],
            r = [],
            o = [];
          t.forEach(function (t) {
            t.endsWith("Renderer")
              ? o.push(t)
              : s[t]
              ? (i.push(t), e && i.push(t.replace(/Chart$/, "SeriesOption")))
              : l[t]
              ? (n.push(t),
                e && n.push(t.replace(/Component$/, "ComponentOption")))
              : c[t]
              ? a.push(t)
              : d[t] && r.push(t);
          });
          var u = [].concat(n, i, r, a, o),
            p = "\ntype ECOption = echarts.ComposeOption<\n    ".concat(
              u
                .filter(function (t) {
                  return t.endsWith("Option");
                })
                .join(" | "),
              "\n>"
            ),
            f = [
              [n, "echarts/components"],
              [i, "echarts/charts"],
              [o, "echarts/renderers"],
              [a, "echarts-gl/charts"],
              [r, "echarts-gl/components"],
            ]
              .filter(function (t) {
                return t[0].length > 0;
              })
              .map(function (t) {
                return "\nimport {"
                  .concat(
                    ((e = t[0]),
                    "".concat(
                      e
                        .map(function (t) {
                          return "\n    ".concat(t);
                        })
                        .join(",")
                    )),
                    "\n} from '"
                  )
                  .concat(t[1], "';\n    ")
                  .trim();
                var e;
              })
              .join("\n");
          return (
            "import * as echarts from 'echarts/core';\n"
              .concat(f, "\n\necharts.use(\n    [")
              .concat(
                u
                  .filter(function (t) {
                    return !t.endsWith("Option");
                  })
                  .join(", "),
                "]\n);\n"
              ) + (e ? p : "")
          );
        }
        function C(t, e) {
          var i = [];
          return (
            t.forEach(function (t) {
              t.endsWith("Renderer") && "CanvasRenderer" !== t
                ? i.push("zrender/lib/".concat(u[t], "/").concat(u[t]))
                : s[t]
                ? i.push("echarts/lib/chart/".concat(s[t]))
                : l[t]
                ? i.push("echarts/lib/component/".concat(l[t]))
                : c[t]
                ? i.push("echarts-gl/lib/chart/".concat(c[t]))
                : d[t] && i.push("echarts-gl/lib/component/".concat(d[t]));
            }),
            e
              ? "import * as echarts from 'echarts/lib/echarts';\n".concat(
                  i
                    .map(function (t) {
                      return "import '".concat(t, "';");
                    })
                    .join("\n"),
                  "\n"
                )
              : "const echarts = require('echarts/lib/echarts');\n".concat(
                  i
                    .map(function (t) {
                      return "require('".concat(t, "');");
                    })
                    .join("\n"),
                  "\n"
                )
          );
        }
        function y(t) {
          return !!t.find(function (t) {
            return !(!c[t] && !d[t]);
          });
        }
        h(n, l),
          h(a, s),
          h(r, d),
          h(o, c),
          (t.exports.collectDeps = function t(e) {
            var i = [];
            if (e.options)
              return (
                e.options.forEach(function (e) {
                  i = i.concat(t(e));
                }),
                e.baseOption && (i = i.concat(t(e.baseOption))),
                Array.from(new Set(i))
              );
            Object.keys(e).forEach(function (t) {
              if (!f.includes(t)) {
                var a = e[t];
                (Array.isArray(a) && !a.length) ||
                  (n[t] && i.push(n[t]), r[t] && i.push(r[t]));
              }
            });
            var l = e.series;
            return (
              Array.isArray(l) || (l = [l]),
              l.forEach(function (t) {
                a[t.type] && i.push(a[t.type]),
                  o[t.type] && i.push(o[t.type]),
                  "map" === t.type && i.push(n.geo),
                  p.forEach(function (e) {
                    t[e] && i.push(n[e]);
                  });
              }),
              Array.from(new Set(i))
            );
          }),
          (t.exports.buildMinimalBundleCode = m),
          (t.buildLegacyMinimalBundleCode = C),
          (t.exports.buildExampleCode = function (t, e, i) {
            var n = i.minimal,
              a = i.esm,
              r = void 0 === a || a,
              o = i.legacy,
              l = i.ts,
              s = i.theme,
              c = i.ROOT_PATH,
              d = i.extraImports;
            l && (r = !0), n && !r && (o = !0);
            var u = t.indexOf("ecStat") >= 0,
              p = t.indexOf("ROOT_PATH") >= 0,
              f = t.indexOf("app") >= 0,
              g = "\n".concat(
                u
                  ? r
                    ? "import ecStat from 'echarts-stat';"
                    : "var ecStat = require('echarts-stat');"
                  : "",
                "\n"
              ),
              h = [
                n
                  ? o
                    ? C(e, r)
                    : m(e, l)
                  : r
                  ? "import * as echarts from 'echarts';".concat(
                      y(e) ? "\nimport 'echarts-gl';" : ""
                    )
                  : "var echarts = require('echarts');".concat(
                      y(e) ? "\nrequire('echarts-gl');" : ""
                    ),
                s && "dark" !== s
                  ? r
                    ? "import 'echarts/theme/".concat(s, "'")
                    : "require('echarts/theme/".concat(s, "')")
                  : "",
                d,
              ]
                .filter(function (t) {
                  return !!t;
                })
                .join("\n"),
              v = [
                p ? "var ROOT_PATH = '".concat(c, "';") : "",
                f ? "var app".concat(l ? ": any" : "", " = {};") : "",
                l && !n ? "type ECOption = echarts.EChartsOption" : "",
              ]
                .filter(function (t) {
                  return !!t;
                })
                .join("\n"),
              b = [h.trim(), g.trim(), v.trim()]
                .filter(function (t) {
                  return !!t;
                })
                .join("\n\n");
            return ""
              .concat(b, "\n\nvar chartDom = document.getElementById('main')")
              .concat(l ? "!" : "", ";\nvar myChart = echarts.init(chartDom")
              .concat(s ? ", '".concat(s, "'") : "", ");\nvar option")
              .concat(l ? ": ECOption" : "", ";\n\n")
              .concat(t.trim(), "\n\noption && myChart.setOption(option);\n");
          });
      },
      403: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { init: () => Sl });
        const n = Vue;
        var a = i.n(n),
          r = [
            "style",
            "currency",
            "currencyDisplay",
            "useGrouping",
            "minimumIntegerDigits",
            "minimumFractionDigits",
            "maximumFractionDigits",
            "minimumSignificantDigits",
            "maximumSignificantDigits",
            "localeMatcher",
            "formatMatcher",
            "unit",
          ];
        function o(t, e) {
          "undefined" != typeof console &&
            (console.warn("[vue-i18n] " + t), e && console.warn(e.stack));
        }
        var l = Array.isArray;
        function s(t) {
          return null !== t && "object" == typeof t;
        }
        function c(t) {
          return "string" == typeof t;
        }
        var d = Object.prototype.toString;
        function u(t) {
          return "[object Object]" === d.call(t);
        }
        function p(t) {
          return null == t;
        }
        function f() {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = null,
            n = null;
          return (
            1 === t.length
              ? s(t[0]) || Array.isArray(t[0])
                ? (n = t[0])
                : "string" == typeof t[0] && (i = t[0])
              : 2 === t.length &&
                ("string" == typeof t[0] && (i = t[0]),
                (s(t[1]) || Array.isArray(t[1])) && (n = t[1])),
            { locale: i, params: n }
          );
        }
        function g(t) {
          return JSON.parse(JSON.stringify(t));
        }
        function h(t, e) {
          return !!~t.indexOf(e);
        }
        var m = Object.prototype.hasOwnProperty;
        function C(t, e) {
          return m.call(t, e);
        }
        function y(t) {
          for (
            var e = arguments, i = Object(t), n = 1;
            n < arguments.length;
            n++
          ) {
            var a = e[n];
            if (null != a) {
              var r = void 0;
              for (r in a)
                C(a, r) && (s(a[r]) ? (i[r] = y(i[r], a[r])) : (i[r] = a[r]));
            }
          }
          return i;
        }
        function v(t, e) {
          if (t === e) return !0;
          var i = s(t),
            n = s(e);
          if (!i || !n) return !i && !n && String(t) === String(e);
          try {
            var a = Array.isArray(t),
              r = Array.isArray(e);
            if (a && r)
              return (
                t.length === e.length &&
                t.every(function (t, i) {
                  return v(t, e[i]);
                })
              );
            if (a || r) return !1;
            var o = Object.keys(t),
              l = Object.keys(e);
            return (
              o.length === l.length &&
              o.every(function (i) {
                return v(t[i], e[i]);
              })
            );
          } catch (t) {
            return !1;
          }
        }
        var b = {
            beforeCreate: function () {
              var t = this.$options;
              if (((t.i18n = t.i18n || (t.__i18n ? {} : null)), t.i18n)) {
                if (t.i18n instanceof K) {
                  if (t.__i18n)
                    try {
                      var e = {};
                      t.__i18n.forEach(function (t) {
                        e = y(e, JSON.parse(t));
                      }),
                        Object.keys(e).forEach(function (i) {
                          t.i18n.mergeLocaleMessage(i, e[i]);
                        });
                    } catch (t) {}
                  (this._i18n = t.i18n),
                    (this._i18nWatcher = this._i18n.watchI18nData());
                } else if (u(t.i18n)) {
                  var i =
                    this.$root &&
                    this.$root.$i18n &&
                    this.$root.$i18n instanceof K
                      ? this.$root.$i18n
                      : null;
                  if (
                    (i &&
                      ((t.i18n.root = this.$root),
                      (t.i18n.formatter = i.formatter),
                      (t.i18n.fallbackLocale = i.fallbackLocale),
                      (t.i18n.formatFallbackMessages =
                        i.formatFallbackMessages),
                      (t.i18n.silentTranslationWarn = i.silentTranslationWarn),
                      (t.i18n.silentFallbackWarn = i.silentFallbackWarn),
                      (t.i18n.pluralizationRules = i.pluralizationRules),
                      (t.i18n.preserveDirectiveContent =
                        i.preserveDirectiveContent)),
                    t.__i18n)
                  )
                    try {
                      var n = {};
                      t.__i18n.forEach(function (t) {
                        n = y(n, JSON.parse(t));
                      }),
                        (t.i18n.messages = n);
                    } catch (t) {}
                  var a = t.i18n.sharedMessages;
                  a && u(a) && (t.i18n.messages = y(t.i18n.messages, a)),
                    (this._i18n = new K(t.i18n)),
                    (this._i18nWatcher = this._i18n.watchI18nData()),
                    (void 0 === t.i18n.sync || t.i18n.sync) &&
                      (this._localeWatcher = this.$i18n.watchLocale()),
                    i && i.onComponentInstanceCreated(this._i18n);
                }
              } else
                this.$root && this.$root.$i18n && this.$root.$i18n instanceof K
                  ? (this._i18n = this.$root.$i18n)
                  : t.parent &&
                    t.parent.$i18n &&
                    t.parent.$i18n instanceof K &&
                    (this._i18n = t.parent.$i18n);
            },
            beforeMount: function () {
              var t = this.$options;
              (t.i18n = t.i18n || (t.__i18n ? {} : null)),
                t.i18n
                  ? (t.i18n instanceof K || u(t.i18n)) &&
                    (this._i18n.subscribeDataChanging(this),
                    (this._subscribing = !0))
                  : ((this.$root &&
                      this.$root.$i18n &&
                      this.$root.$i18n instanceof K) ||
                      (t.parent &&
                        t.parent.$i18n &&
                        t.parent.$i18n instanceof K)) &&
                    (this._i18n.subscribeDataChanging(this),
                    (this._subscribing = !0));
            },
            beforeDestroy: function () {
              if (this._i18n) {
                var t = this;
                this.$nextTick(function () {
                  t._subscribing &&
                    (t._i18n.unsubscribeDataChanging(t), delete t._subscribing),
                    t._i18nWatcher &&
                      (t._i18nWatcher(),
                      t._i18n.destroyVM(),
                      delete t._i18nWatcher),
                    t._localeWatcher &&
                      (t._localeWatcher(), delete t._localeWatcher);
                });
              }
            },
          },
          _ = {
            name: "i18n",
            functional: !0,
            props: {
              tag: { type: [String, Boolean, Object], default: "span" },
              path: { type: String, required: !0 },
              locale: { type: String },
              places: { type: [Array, Object] },
            },
            render: function (t, e) {
              var i = e.data,
                n = e.parent,
                a = e.props,
                r = e.slots,
                o = n.$i18n;
              if (o) {
                var l = a.path,
                  s = a.locale,
                  c = a.places,
                  d = r(),
                  u = o.i(
                    l,
                    s,
                    (function (t) {
                      var e;
                      for (e in t) if ("default" !== e) return !1;
                      return Boolean(e);
                    })(d) || c
                      ? (function (t, e) {
                          var i = e
                            ? (function (t) {
                                return Array.isArray(t)
                                  ? t.reduce(w, {})
                                  : Object.assign({}, t);
                              })(e)
                            : {};
                          if (!t) return i;
                          var n = (t = t.filter(function (t) {
                            return t.tag || "" !== t.text.trim();
                          })).every(x);
                          return t.reduce(n ? L : w, i);
                        })(d.default, c)
                      : d
                  ),
                  p = (a.tag && !0 !== a.tag) || !1 === a.tag ? a.tag : "span";
                return p ? t(p, i, u) : u;
              }
            },
          };
        function L(t, e) {
          return (
            e.data &&
              e.data.attrs &&
              e.data.attrs.place &&
              (t[e.data.attrs.place] = e),
            t
          );
        }
        function w(t, e, i) {
          return (t[i] = e), t;
        }
        function x(t) {
          return Boolean(t.data && t.data.attrs && t.data.attrs.place);
        }
        var k,
          S = {
            name: "i18n-n",
            functional: !0,
            props: {
              tag: { type: [String, Boolean, Object], default: "span" },
              value: { type: Number, required: !0 },
              format: { type: [String, Object] },
              locale: { type: String },
            },
            render: function (t, e) {
              var i = e.props,
                n = e.parent,
                a = e.data,
                o = n.$i18n;
              if (!o) return null;
              var l = null,
                d = null;
              c(i.format)
                ? (l = i.format)
                : s(i.format) &&
                  (i.format.key && (l = i.format.key),
                  (d = Object.keys(i.format).reduce(function (t, e) {
                    var n;
                    return h(r, e)
                      ? Object.assign({}, t, (((n = {})[e] = i.format[e]), n))
                      : t;
                  }, null)));
              var u = i.locale || o.locale,
                p = o._ntp(i.value, u, l, d),
                f = p.map(function (t, e) {
                  var i,
                    n = a.scopedSlots && a.scopedSlots[t.type];
                  return n
                    ? n(
                        (((i = {})[t.type] = t.value),
                        (i.index = e),
                        (i.parts = p),
                        i)
                      )
                    : t.value;
                }),
                g = (i.tag && !0 !== i.tag) || !1 === i.tag ? i.tag : "span";
              return g
                ? t(
                    g,
                    {
                      attrs: a.attrs,
                      class: a.class,
                      staticClass: a.staticClass,
                    },
                    f
                  )
                : f;
            },
          };
        function N(t, e, i) {
          D(0, i) && O(t, e, i);
        }
        function M(t, e, i, n) {
          if (D(0, i)) {
            var a = i.context.$i18n;
            ((function (t, e) {
              var i = e.context;
              return t._locale === i.$i18n.locale;
            })(t, i) &&
              v(e.value, e.oldValue) &&
              v(t._localeMessage, a.getLocaleMessage(a.locale))) ||
              O(t, e, i);
          }
        }
        function T(t, e, i, n) {
          if (i.context) {
            var a = i.context.$i18n || {};
            e.modifiers.preserve ||
              a.preserveDirectiveContent ||
              (t.textContent = ""),
              (t._vt = void 0),
              delete t._vt,
              (t._locale = void 0),
              delete t._locale,
              (t._localeMessage = void 0),
              delete t._localeMessage;
          } else o("Vue instance does not exists in VNode context");
        }
        function D(t, e) {
          var i = e.context;
          return i
            ? !!i.$i18n ||
                (o("VueI18n instance does not exists in Vue instance"), !1)
            : (o("Vue instance does not exists in VNode context"), !1);
        }
        function O(t, e, i) {
          var n,
            a,
            r = (function (t) {
              var e, i, n, a;
              return (
                c(t)
                  ? (e = t)
                  : u(t) &&
                    ((e = t.path),
                    (i = t.locale),
                    (n = t.args),
                    (a = t.choice)),
                { path: e, locale: i, args: n, choice: a }
              );
            })(e.value),
            l = r.path,
            s = r.locale,
            d = r.args,
            p = r.choice;
          if (l || s || d)
            if (l) {
              var f = i.context;
              (t._vt = t.textContent =
                null != p
                  ? (n = f.$i18n).tc.apply(n, [l, p].concat(A(s, d)))
                  : (a = f.$i18n).t.apply(a, [l].concat(A(s, d)))),
                (t._locale = f.$i18n.locale),
                (t._localeMessage = f.$i18n.getLocaleMessage(f.$i18n.locale));
            } else o("`path` is required in v-t directive");
          else o("value type not supported");
        }
        function A(t, e) {
          var i = [];
          return (
            t && i.push(t), e && (Array.isArray(e) || u(e)) && i.push(e), i
          );
        }
        function E(t) {
          (E.installed = !0),
            (k = t).version && Number(k.version.split(".")[0]),
            (function (t) {
              t.prototype.hasOwnProperty("$i18n") ||
                Object.defineProperty(t.prototype, "$i18n", {
                  get: function () {
                    return this._i18n;
                  },
                }),
                (t.prototype.$t = function (t) {
                  for (var e = [], i = arguments.length - 1; i-- > 0; )
                    e[i] = arguments[i + 1];
                  var n = this.$i18n;
                  return n._t.apply(
                    n,
                    [t, n.locale, n._getMessages(), this].concat(e)
                  );
                }),
                (t.prototype.$tc = function (t, e) {
                  for (var i = [], n = arguments.length - 2; n-- > 0; )
                    i[n] = arguments[n + 2];
                  var a = this.$i18n;
                  return a._tc.apply(
                    a,
                    [t, a.locale, a._getMessages(), this, e].concat(i)
                  );
                }),
                (t.prototype.$te = function (t, e) {
                  var i = this.$i18n;
                  return i._te(t, i.locale, i._getMessages(), e);
                }),
                (t.prototype.$d = function (t) {
                  for (var e, i = [], n = arguments.length - 1; n-- > 0; )
                    i[n] = arguments[n + 1];
                  return (e = this.$i18n).d.apply(e, [t].concat(i));
                }),
                (t.prototype.$n = function (t) {
                  for (var e, i = [], n = arguments.length - 1; n-- > 0; )
                    i[n] = arguments[n + 1];
                  return (e = this.$i18n).n.apply(e, [t].concat(i));
                });
            })(k),
            k.mixin(b),
            k.directive("t", { bind: N, update: M, unbind: T }),
            k.component(_.name, _),
            k.component(S.name, S),
            (k.config.optionMergeStrategies.i18n = function (t, e) {
              return void 0 === e ? t : e;
            });
        }
        var P = function () {
          this._caches = Object.create(null);
        };
        P.prototype.interpolate = function (t, e) {
          if (!e) return [t];
          var i = this._caches[t];
          return (
            i ||
              ((i = (function (t) {
                for (var e = [], i = 0, n = ""; i < t.length; ) {
                  var a = t[i++];
                  if ("{" === a) {
                    n && e.push({ type: "text", value: n }), (n = "");
                    var r = "";
                    for (a = t[i++]; void 0 !== a && "}" !== a; )
                      (r += a), (a = t[i++]);
                    var o = "}" === a,
                      l = F.test(r)
                        ? "list"
                        : o && R.test(r)
                        ? "named"
                        : "unknown";
                    e.push({ value: r, type: l });
                  } else "%" === a ? "{" !== t[i] && (n += a) : (n += a);
                }
                return n && e.push({ type: "text", value: n }), e;
              })(t)),
              (this._caches[t] = i)),
            (function (t, e) {
              var i = [],
                n = 0,
                a = Array.isArray(e) ? "list" : s(e) ? "named" : "unknown";
              if ("unknown" === a) return i;
              for (; n < t.length; ) {
                var r = t[n];
                switch (r.type) {
                  case "text":
                    i.push(r.value);
                    break;
                  case "list":
                    i.push(e[parseInt(r.value, 10)]);
                    break;
                  case "named":
                    "named" === a && i.push(e[r.value]);
                }
                n++;
              }
              return i;
            })(i, e)
          );
        };
        var F = /^(?:\d)+/,
          R = /^(?:\w)+/,
          I = [];
        (I[0] = { ws: [0], ident: [3, 0], "[": [4], eof: [7] }),
          (I[1] = { ws: [1], ".": [2], "[": [4], eof: [7] }),
          (I[2] = { ws: [2], ident: [3, 0], 0: [3, 0], number: [3, 0] }),
          (I[3] = {
            ident: [3, 0],
            0: [3, 0],
            number: [3, 0],
            ws: [1, 1],
            ".": [2, 1],
            "[": [4, 1],
            eof: [7, 1],
          }),
          (I[4] = {
            "'": [5, 0],
            '"': [6, 0],
            "[": [4, 2],
            "]": [1, 3],
            eof: 8,
            else: [4, 0],
          }),
          (I[5] = { "'": [4, 0], eof: 8, else: [5, 0] }),
          (I[6] = { '"': [4, 0], eof: 8, else: [6, 0] });
        var B = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
        function j(t) {
          if (null == t) return "eof";
          switch (t.charCodeAt(0)) {
            case 91:
            case 93:
            case 46:
            case 34:
            case 39:
              return t;
            case 95:
            case 36:
            case 45:
              return "ident";
            case 9:
            case 10:
            case 13:
            case 160:
            case 65279:
            case 8232:
            case 8233:
              return "ws";
          }
          return "ident";
        }
        var G = function () {
          this._cache = Object.create(null);
        };
        (G.prototype.parsePath = function (t) {
          var e = this._cache[t];
          return (
            e ||
              ((e = (function (t) {
                var e,
                  i,
                  n,
                  a,
                  r,
                  o,
                  l,
                  s = [],
                  c = -1,
                  d = 0,
                  u = 0,
                  p = [];
                function f() {
                  var e = t[c + 1];
                  if ((5 === d && "'" === e) || (6 === d && '"' === e))
                    return c++, (n = "\\" + e), p[0](), !0;
                }
                for (
                  p[1] = function () {
                    void 0 !== i && (s.push(i), (i = void 0));
                  },
                    p[0] = function () {
                      void 0 === i ? (i = n) : (i += n);
                    },
                    p[2] = function () {
                      p[0](), u++;
                    },
                    p[3] = function () {
                      if (u > 0) u--, (d = 4), p[0]();
                      else {
                        if (((u = 0), void 0 === i)) return !1;
                        if (
                          !1 ===
                          (i = (function (t) {
                            var e,
                              i = t.trim();
                            return (
                              ("0" !== t.charAt(0) || !isNaN(t)) &&
                              ((e = i),
                              B.test(e)
                                ? (function (t) {
                                    var e = t.charCodeAt(0);
                                    return e !== t.charCodeAt(t.length - 1) ||
                                      (34 !== e && 39 !== e)
                                      ? t
                                      : t.slice(1, -1);
                                  })(i)
                                : "*" + i)
                            );
                          })(i))
                        )
                          return !1;
                        p[1]();
                      }
                    };
                  null !== d;

                )
                  if ((c++, "\\" !== (e = t[c]) || !f())) {
                    if (((a = j(e)), 8 === (r = (l = I[d])[a] || l.else || 8)))
                      return;
                    if (
                      ((d = r[0]),
                      (o = p[r[1]]) &&
                        ((n = void 0 === (n = r[2]) ? e : n), !1 === o()))
                    )
                      return;
                    if (7 === d) return s;
                  }
              })(t)) &&
                (this._cache[t] = e)),
            e || []
          );
        }),
          (G.prototype.getPathValue = function (t, e) {
            if (!s(t)) return null;
            var i = this.parsePath(e);
            if (0 === i.length) return null;
            for (var n = i.length, a = t, r = 0; r < n; ) {
              var o = a[i[r]];
              if (void 0 === o) return null;
              (a = o), r++;
            }
            return a;
          });
        var z,
          U = /<\/?[\w\s="/.':;#-\/]+>/,
          Z = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,
          W = /^@(?:\.([a-z]+))?:/,
          V = /[()]/g,
          H = {
            upper: function (t) {
              return t.toLocaleUpperCase();
            },
            lower: function (t) {
              return t.toLocaleLowerCase();
            },
            capitalize: function (t) {
              return "" + t.charAt(0).toLocaleUpperCase() + t.substr(1);
            },
          },
          q = new P(),
          K = function (t) {
            var e = this;
            void 0 === t && (t = {}),
              !k && "undefined" != typeof window && window.Vue && E(window.Vue);
            var i = t.locale || "en-US",
              n = !1 !== t.fallbackLocale && (t.fallbackLocale || "en-US"),
              a = t.messages || {},
              r = t.dateTimeFormats || {},
              o = t.numberFormats || {};
            (this._vm = null),
              (this._formatter = t.formatter || q),
              (this._modifiers = t.modifiers || {}),
              (this._missing = t.missing || null),
              (this._root = t.root || null),
              (this._sync = void 0 === t.sync || !!t.sync),
              (this._fallbackRoot =
                void 0 === t.fallbackRoot || !!t.fallbackRoot),
              (this._formatFallbackMessages =
                void 0 !== t.formatFallbackMessages &&
                !!t.formatFallbackMessages),
              (this._silentTranslationWarn =
                void 0 !== t.silentTranslationWarn && t.silentTranslationWarn),
              (this._silentFallbackWarn =
                void 0 !== t.silentFallbackWarn && !!t.silentFallbackWarn),
              (this._dateTimeFormatters = {}),
              (this._numberFormatters = {}),
              (this._path = new G()),
              (this._dataListeners = []),
              (this._componentInstanceCreatedListener =
                t.componentInstanceCreatedListener || null),
              (this._preserveDirectiveContent =
                void 0 !== t.preserveDirectiveContent &&
                !!t.preserveDirectiveContent),
              (this.pluralizationRules = t.pluralizationRules || {}),
              (this._warnHtmlInMessage = t.warnHtmlInMessage || "off"),
              (this._postTranslation = t.postTranslation || null),
              (this.getChoiceIndex = function (t, i) {
                var n,
                  a,
                  r = Object.getPrototypeOf(e);
                return r && r.getChoiceIndex
                  ? r.getChoiceIndex.call(e, t, i)
                  : e.locale in e.pluralizationRules
                  ? e.pluralizationRules[e.locale].apply(e, [t, i])
                  : ((n = t),
                    (a = i),
                    (n = Math.abs(n)),
                    2 === a
                      ? n
                        ? n > 1
                          ? 1
                          : 0
                        : 1
                      : n
                      ? Math.min(n, 2)
                      : 0);
              }),
              (this._exist = function (t, i) {
                return !(!t || !i || (p(e._path.getPathValue(t, i)) && !t[i]));
              }),
              ("warn" !== this._warnHtmlInMessage &&
                "error" !== this._warnHtmlInMessage) ||
                Object.keys(a).forEach(function (t) {
                  e._checkLocaleMessage(t, e._warnHtmlInMessage, a[t]);
                }),
              this._initVM({
                locale: i,
                fallbackLocale: n,
                messages: a,
                dateTimeFormats: r,
                numberFormats: o,
              });
          },
          J = {
            vm: { configurable: !0 },
            messages: { configurable: !0 },
            dateTimeFormats: { configurable: !0 },
            numberFormats: { configurable: !0 },
            availableLocales: { configurable: !0 },
            locale: { configurable: !0 },
            fallbackLocale: { configurable: !0 },
            formatFallbackMessages: { configurable: !0 },
            missing: { configurable: !0 },
            formatter: { configurable: !0 },
            silentTranslationWarn: { configurable: !0 },
            silentFallbackWarn: { configurable: !0 },
            preserveDirectiveContent: { configurable: !0 },
            warnHtmlInMessage: { configurable: !0 },
            postTranslation: { configurable: !0 },
          };
        (K.prototype._checkLocaleMessage = function (t, e, i) {
          var n = function (t, e, i, a) {
            if (u(i))
              Object.keys(i).forEach(function (r) {
                var o = i[r];
                u(o)
                  ? (a.push(r), a.push("."), n(t, e, o, a), a.pop(), a.pop())
                  : (a.push(r), n(t, e, o, a), a.pop());
              });
            else if (Array.isArray(i))
              i.forEach(function (i, r) {
                u(i)
                  ? (a.push("[" + r + "]"),
                    a.push("."),
                    n(t, e, i, a),
                    a.pop(),
                    a.pop())
                  : (a.push("[" + r + "]"), n(t, e, i, a), a.pop());
              });
            else if (c(i) && U.test(i)) {
              var r =
                "Detected HTML in message '" +
                i +
                "' of keypath '" +
                a.join("") +
                "' at '" +
                e +
                "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
              "warn" === t
                ? o(r)
                : "error" === t &&
                  (function (t, e) {
                    "undefined" != typeof console &&
                      console.error("[vue-i18n] " + t);
                  })(r);
            }
          };
          n(e, t, i, []);
        }),
          (K.prototype._initVM = function (t) {
            var e = k.config.silent;
            (k.config.silent = !0),
              (this._vm = new k({ data: t })),
              (k.config.silent = e);
          }),
          (K.prototype.destroyVM = function () {
            this._vm.$destroy();
          }),
          (K.prototype.subscribeDataChanging = function (t) {
            this._dataListeners.push(t);
          }),
          (K.prototype.unsubscribeDataChanging = function (t) {
            !(function (t, e) {
              if (t.length) {
                var i = t.indexOf(e);
                i > -1 && t.splice(i, 1);
              }
            })(this._dataListeners, t);
          }),
          (K.prototype.watchI18nData = function () {
            var t = this;
            return this._vm.$watch(
              "$data",
              function () {
                for (var e = t._dataListeners.length; e--; )
                  k.nextTick(function () {
                    t._dataListeners[e] && t._dataListeners[e].$forceUpdate();
                  });
              },
              { deep: !0 }
            );
          }),
          (K.prototype.watchLocale = function () {
            if (!this._sync || !this._root) return null;
            var t = this._vm;
            return this._root.$i18n.vm.$watch(
              "locale",
              function (e) {
                t.$set(t, "locale", e), t.$forceUpdate();
              },
              { immediate: !0 }
            );
          }),
          (K.prototype.onComponentInstanceCreated = function (t) {
            this._componentInstanceCreatedListener &&
              this._componentInstanceCreatedListener(t, this);
          }),
          (J.vm.get = function () {
            return this._vm;
          }),
          (J.messages.get = function () {
            return g(this._getMessages());
          }),
          (J.dateTimeFormats.get = function () {
            return g(this._getDateTimeFormats());
          }),
          (J.numberFormats.get = function () {
            return g(this._getNumberFormats());
          }),
          (J.availableLocales.get = function () {
            return Object.keys(this.messages).sort();
          }),
          (J.locale.get = function () {
            return this._vm.locale;
          }),
          (J.locale.set = function (t) {
            this._vm.$set(this._vm, "locale", t);
          }),
          (J.fallbackLocale.get = function () {
            return this._vm.fallbackLocale;
          }),
          (J.fallbackLocale.set = function (t) {
            (this._localeChainCache = {}),
              this._vm.$set(this._vm, "fallbackLocale", t);
          }),
          (J.formatFallbackMessages.get = function () {
            return this._formatFallbackMessages;
          }),
          (J.formatFallbackMessages.set = function (t) {
            this._formatFallbackMessages = t;
          }),
          (J.missing.get = function () {
            return this._missing;
          }),
          (J.missing.set = function (t) {
            this._missing = t;
          }),
          (J.formatter.get = function () {
            return this._formatter;
          }),
          (J.formatter.set = function (t) {
            this._formatter = t;
          }),
          (J.silentTranslationWarn.get = function () {
            return this._silentTranslationWarn;
          }),
          (J.silentTranslationWarn.set = function (t) {
            this._silentTranslationWarn = t;
          }),
          (J.silentFallbackWarn.get = function () {
            return this._silentFallbackWarn;
          }),
          (J.silentFallbackWarn.set = function (t) {
            this._silentFallbackWarn = t;
          }),
          (J.preserveDirectiveContent.get = function () {
            return this._preserveDirectiveContent;
          }),
          (J.preserveDirectiveContent.set = function (t) {
            this._preserveDirectiveContent = t;
          }),
          (J.warnHtmlInMessage.get = function () {
            return this._warnHtmlInMessage;
          }),
          (J.warnHtmlInMessage.set = function (t) {
            var e = this,
              i = this._warnHtmlInMessage;
            if (
              ((this._warnHtmlInMessage = t),
              i !== t && ("warn" === t || "error" === t))
            ) {
              var n = this._getMessages();
              Object.keys(n).forEach(function (t) {
                e._checkLocaleMessage(t, e._warnHtmlInMessage, n[t]);
              });
            }
          }),
          (J.postTranslation.get = function () {
            return this._postTranslation;
          }),
          (J.postTranslation.set = function (t) {
            this._postTranslation = t;
          }),
          (K.prototype._getMessages = function () {
            return this._vm.messages;
          }),
          (K.prototype._getDateTimeFormats = function () {
            return this._vm.dateTimeFormats;
          }),
          (K.prototype._getNumberFormats = function () {
            return this._vm.numberFormats;
          }),
          (K.prototype._warnDefault = function (t, e, i, n, a, r) {
            if (!p(i)) return i;
            if (this._missing) {
              var o = this._missing.apply(null, [t, e, n, a]);
              if (c(o)) return o;
            }
            if (this._formatFallbackMessages) {
              var l = f.apply(void 0, a);
              return this._render(e, r, l.params, e);
            }
            return e;
          }),
          (K.prototype._isFallbackRoot = function (t) {
            return !t && !p(this._root) && this._fallbackRoot;
          }),
          (K.prototype._isSilentFallbackWarn = function (t) {
            return this._silentFallbackWarn instanceof RegExp
              ? this._silentFallbackWarn.test(t)
              : this._silentFallbackWarn;
          }),
          (K.prototype._isSilentFallback = function (t, e) {
            return (
              this._isSilentFallbackWarn(e) &&
              (this._isFallbackRoot() || t !== this.fallbackLocale)
            );
          }),
          (K.prototype._isSilentTranslationWarn = function (t) {
            return this._silentTranslationWarn instanceof RegExp
              ? this._silentTranslationWarn.test(t)
              : this._silentTranslationWarn;
          }),
          (K.prototype._interpolate = function (t, e, i, n, a, r, o) {
            if (!e) return null;
            var l,
              s = this._path.getPathValue(e, i);
            if (Array.isArray(s) || u(s)) return s;
            if (p(s)) {
              if (!u(e)) return null;
              if (!c((l = e[i]))) return null;
            } else {
              if (!c(s)) return null;
              l = s;
            }
            return (
              (l.indexOf("@:") >= 0 || l.indexOf("@.") >= 0) &&
                (l = this._link(t, e, l, n, "raw", r, o)),
              this._render(l, a, r, i)
            );
          }),
          (K.prototype._link = function (t, e, i, n, a, r, o) {
            var l = i,
              s = l.match(Z);
            for (var c in s)
              if (s.hasOwnProperty(c)) {
                var d = s[c],
                  u = d.match(W),
                  p = u[0],
                  f = u[1],
                  g = d.replace(p, "").replace(V, "");
                if (h(o, g)) return l;
                o.push(g);
                var m = this._interpolate(
                  t,
                  e,
                  g,
                  n,
                  "raw" === a ? "string" : a,
                  "raw" === a ? void 0 : r,
                  o
                );
                if (this._isFallbackRoot(m)) {
                  if (!this._root) throw Error("unexpected error");
                  var C = this._root.$i18n;
                  m = C._translate(
                    C._getMessages(),
                    C.locale,
                    C.fallbackLocale,
                    g,
                    n,
                    a,
                    r
                  );
                }
                (m = this._warnDefault(
                  t,
                  g,
                  m,
                  n,
                  Array.isArray(r) ? r : [r],
                  a
                )),
                  this._modifiers.hasOwnProperty(f)
                    ? (m = this._modifiers[f](m))
                    : H.hasOwnProperty(f) && (m = H[f](m)),
                  o.pop(),
                  (l = m ? l.replace(d, m) : l);
              }
            return l;
          }),
          (K.prototype._render = function (t, e, i, n) {
            var a = this._formatter.interpolate(t, i, n);
            return (
              a || (a = q.interpolate(t, i, n)),
              "string" !== e || c(a) ? a : a.join("")
            );
          }),
          (K.prototype._appendItemToChain = function (t, e, i) {
            var n = !1;
            return (
              h(t, e) ||
                ((n = !0),
                e &&
                  ((n = "!" !== e[e.length - 1]),
                  (e = e.replace(/!/g, "")),
                  t.push(e),
                  i && i[e] && (n = i[e]))),
              n
            );
          }),
          (K.prototype._appendLocaleToChain = function (t, e, i) {
            var n,
              a = e.split("-");
            do {
              var r = a.join("-");
              (n = this._appendItemToChain(t, r, i)), a.splice(-1, 1);
            } while (a.length && !0 === n);
            return n;
          }),
          (K.prototype._appendBlockToChain = function (t, e, i) {
            for (
              var n = !0, a = 0;
              a < e.length && "boolean" == typeof n;
              a++
            ) {
              var r = e[a];
              c(r) && (n = this._appendLocaleToChain(t, r, i));
            }
            return n;
          }),
          (K.prototype._getLocaleChain = function (t, e) {
            if ("" === t) return [];
            this._localeChainCache || (this._localeChainCache = {});
            var i = this._localeChainCache[t];
            if (!i) {
              e || (e = this.fallbackLocale), (i = []);
              for (var n, a = [t]; l(a); )
                a = this._appendBlockToChain(i, a, e);
              (a = c((n = l(e) ? e : s(e) ? (e.default ? e.default : null) : e))
                ? [n]
                : n) && this._appendBlockToChain(i, a, null),
                (this._localeChainCache[t] = i);
            }
            return i;
          }),
          (K.prototype._translate = function (t, e, i, n, a, r, o) {
            for (
              var l, s = this._getLocaleChain(e, i), c = 0;
              c < s.length;
              c++
            ) {
              var d = s[c];
              if (!p((l = this._interpolate(d, t[d], n, a, r, o, [n]))))
                return l;
            }
            return null;
          }),
          (K.prototype._t = function (t, e, i, n) {
            for (var a, r = [], o = arguments.length - 4; o-- > 0; )
              r[o] = arguments[o + 4];
            if (!t) return "";
            var l = f.apply(void 0, r),
              s = l.locale || e,
              c = this._translate(
                i,
                s,
                this.fallbackLocale,
                t,
                n,
                "string",
                l.params
              );
            if (this._isFallbackRoot(c)) {
              if (!this._root) throw Error("unexpected error");
              return (a = this._root).$t.apply(a, [t].concat(r));
            }
            return (
              (c = this._warnDefault(s, t, c, n, r, "string")),
              this._postTranslation &&
                null != c &&
                (c = this._postTranslation(c, t)),
              c
            );
          }),
          (K.prototype.t = function (t) {
            for (var e, i = [], n = arguments.length - 1; n-- > 0; )
              i[n] = arguments[n + 1];
            return (e = this)._t.apply(
              e,
              [t, this.locale, this._getMessages(), null].concat(i)
            );
          }),
          (K.prototype._i = function (t, e, i, n, a) {
            var r = this._translate(i, e, this.fallbackLocale, t, n, "raw", a);
            if (this._isFallbackRoot(r)) {
              if (!this._root) throw Error("unexpected error");
              return this._root.$i18n.i(t, e, a);
            }
            return this._warnDefault(e, t, r, n, [a], "raw");
          }),
          (K.prototype.i = function (t, e, i) {
            return t
              ? (c(e) || (e = this.locale),
                this._i(t, e, this._getMessages(), null, i))
              : "";
          }),
          (K.prototype._tc = function (t, e, i, n, a) {
            for (var r, o = [], l = arguments.length - 5; l-- > 0; )
              o[l] = arguments[l + 5];
            if (!t) return "";
            void 0 === a && (a = 1);
            var s = { count: a, n: a },
              c = f.apply(void 0, o);
            return (
              (c.params = Object.assign(s, c.params)),
              (o = null === c.locale ? [c.params] : [c.locale, c.params]),
              this.fetchChoice(
                (r = this)._t.apply(r, [t, e, i, n].concat(o)),
                a
              )
            );
          }),
          (K.prototype.fetchChoice = function (t, e) {
            if (!t && !c(t)) return null;
            var i = t.split("|");
            return i[(e = this.getChoiceIndex(e, i.length))] ? i[e].trim() : t;
          }),
          (K.prototype.tc = function (t, e) {
            for (var i, n = [], a = arguments.length - 2; a-- > 0; )
              n[a] = arguments[a + 2];
            return (i = this)._tc.apply(
              i,
              [t, this.locale, this._getMessages(), null, e].concat(n)
            );
          }),
          (K.prototype._te = function (t, e, i) {
            for (var n = [], a = arguments.length - 3; a-- > 0; )
              n[a] = arguments[a + 3];
            var r = f.apply(void 0, n).locale || e;
            return this._exist(i[r], t);
          }),
          (K.prototype.te = function (t, e) {
            return this._te(t, this.locale, this._getMessages(), e);
          }),
          (K.prototype.getLocaleMessage = function (t) {
            return g(this._vm.messages[t] || {});
          }),
          (K.prototype.setLocaleMessage = function (t, e) {
            ("warn" !== this._warnHtmlInMessage &&
              "error" !== this._warnHtmlInMessage) ||
              this._checkLocaleMessage(t, this._warnHtmlInMessage, e),
              this._vm.$set(this._vm.messages, t, e);
          }),
          (K.prototype.mergeLocaleMessage = function (t, e) {
            ("warn" !== this._warnHtmlInMessage &&
              "error" !== this._warnHtmlInMessage) ||
              this._checkLocaleMessage(t, this._warnHtmlInMessage, e),
              this._vm.$set(
                this._vm.messages,
                t,
                y({}, this._vm.messages[t] || {}, e)
              );
          }),
          (K.prototype.getDateTimeFormat = function (t) {
            return g(this._vm.dateTimeFormats[t] || {});
          }),
          (K.prototype.setDateTimeFormat = function (t, e) {
            this._vm.$set(this._vm.dateTimeFormats, t, e),
              this._clearDateTimeFormat(t, e);
          }),
          (K.prototype.mergeDateTimeFormat = function (t, e) {
            this._vm.$set(
              this._vm.dateTimeFormats,
              t,
              y(this._vm.dateTimeFormats[t] || {}, e)
            ),
              this._clearDateTimeFormat(t, e);
          }),
          (K.prototype._clearDateTimeFormat = function (t, e) {
            for (var i in e) {
              var n = t + "__" + i;
              this._dateTimeFormatters.hasOwnProperty(n) &&
                delete this._dateTimeFormatters[n];
            }
          }),
          (K.prototype._localizeDateTime = function (t, e, i, n, a) {
            for (
              var r = e, o = n[r], l = this._getLocaleChain(e, i), s = 0;
              s < l.length;
              s++
            ) {
              var c = l[s];
              if (((r = c), !p((o = n[c])) && !p(o[a]))) break;
            }
            if (p(o) || p(o[a])) return null;
            var d = o[a],
              u = r + "__" + a,
              f = this._dateTimeFormatters[u];
            return (
              f ||
                (f = this._dateTimeFormatters[u] =
                  new Intl.DateTimeFormat(r, d)),
              f.format(t)
            );
          }),
          (K.prototype._d = function (t, e, i) {
            if (!i) return new Intl.DateTimeFormat(e).format(t);
            var n = this._localizeDateTime(
              t,
              e,
              this.fallbackLocale,
              this._getDateTimeFormats(),
              i
            );
            if (this._isFallbackRoot(n)) {
              if (!this._root) throw Error("unexpected error");
              return this._root.$i18n.d(t, i, e);
            }
            return n || "";
          }),
          (K.prototype.d = function (t) {
            for (var e = [], i = arguments.length - 1; i-- > 0; )
              e[i] = arguments[i + 1];
            var n = this.locale,
              a = null;
            return (
              1 === e.length
                ? c(e[0])
                  ? (a = e[0])
                  : s(e[0]) &&
                    (e[0].locale && (n = e[0].locale),
                    e[0].key && (a = e[0].key))
                : 2 === e.length &&
                  (c(e[0]) && (a = e[0]), c(e[1]) && (n = e[1])),
              this._d(t, n, a)
            );
          }),
          (K.prototype.getNumberFormat = function (t) {
            return g(this._vm.numberFormats[t] || {});
          }),
          (K.prototype.setNumberFormat = function (t, e) {
            this._vm.$set(this._vm.numberFormats, t, e),
              this._clearNumberFormat(t, e);
          }),
          (K.prototype.mergeNumberFormat = function (t, e) {
            this._vm.$set(
              this._vm.numberFormats,
              t,
              y(this._vm.numberFormats[t] || {}, e)
            ),
              this._clearNumberFormat(t, e);
          }),
          (K.prototype._clearNumberFormat = function (t, e) {
            for (var i in e) {
              var n = t + "__" + i;
              this._numberFormatters.hasOwnProperty(n) &&
                delete this._numberFormatters[n];
            }
          }),
          (K.prototype._getNumberFormatter = function (t, e, i, n, a, r) {
            for (
              var o = e, l = n[o], s = this._getLocaleChain(e, i), c = 0;
              c < s.length;
              c++
            ) {
              var d = s[c];
              if (((o = d), !p((l = n[d])) && !p(l[a]))) break;
            }
            if (p(l) || p(l[a])) return null;
            var u,
              f = l[a];
            if (r) u = new Intl.NumberFormat(o, Object.assign({}, f, r));
            else {
              var g = o + "__" + a;
              (u = this._numberFormatters[g]) ||
                (u = this._numberFormatters[g] = new Intl.NumberFormat(o, f));
            }
            return u;
          }),
          (K.prototype._n = function (t, e, i, n) {
            if (!K.availabilities.numberFormat) return "";
            if (!i)
              return (
                n ? new Intl.NumberFormat(e, n) : new Intl.NumberFormat(e)
              ).format(t);
            var a = this._getNumberFormatter(
                t,
                e,
                this.fallbackLocale,
                this._getNumberFormats(),
                i,
                n
              ),
              r = a && a.format(t);
            if (this._isFallbackRoot(r)) {
              if (!this._root) throw Error("unexpected error");
              return this._root.$i18n.n(
                t,
                Object.assign({}, { key: i, locale: e }, n)
              );
            }
            return r || "";
          }),
          (K.prototype.n = function (t) {
            for (var e = [], i = arguments.length - 1; i-- > 0; )
              e[i] = arguments[i + 1];
            var n = this.locale,
              a = null,
              o = null;
            return (
              1 === e.length
                ? c(e[0])
                  ? (a = e[0])
                  : s(e[0]) &&
                    (e[0].locale && (n = e[0].locale),
                    e[0].key && (a = e[0].key),
                    (o = Object.keys(e[0]).reduce(function (t, i) {
                      var n;
                      return h(r, i)
                        ? Object.assign({}, t, (((n = {})[i] = e[0][i]), n))
                        : t;
                    }, null)))
                : 2 === e.length &&
                  (c(e[0]) && (a = e[0]), c(e[1]) && (n = e[1])),
              this._n(t, n, a, o)
            );
          }),
          (K.prototype._ntp = function (t, e, i, n) {
            if (!K.availabilities.numberFormat) return [];
            if (!i)
              return (
                n ? new Intl.NumberFormat(e, n) : new Intl.NumberFormat(e)
              ).formatToParts(t);
            var a = this._getNumberFormatter(
                t,
                e,
                this.fallbackLocale,
                this._getNumberFormats(),
                i,
                n
              ),
              r = a && a.formatToParts(t);
            if (this._isFallbackRoot(r)) {
              if (!this._root) throw Error("unexpected error");
              return this._root.$i18n._ntp(t, e, i, n);
            }
            return r || [];
          }),
          Object.defineProperties(K.prototype, J),
          Object.defineProperty(K, "availabilities", {
            get: function () {
              if (!z) {
                var t = "undefined" != typeof Intl;
                z = {
                  dateTimeFormat: t && void 0 !== Intl.DateTimeFormat,
                  numberFormat: t && void 0 !== Intl.NumberFormat,
                };
              }
              return z;
            },
          }),
          (K.install = E),
          (K.version = "8.20.0");
        const Q = K,
          Y = {
            en: {
              editor: {
                run: "Run",
                errorInEditor: "Errors exist in code!",
                chartOK: "Chart has been generated successfully, ",
                darkMode: "Dark Mode",
                enableDecal: "Decal Pattern",
                renderCfgTitle: "Render",
                renderer: "Renderer",
                useDirtyRect: "Use Dirty Rect",
                download: "Download",
                edit: "Edit",
                monacoMode: "Enable Type Checking",
                tabEditor: "Edit Example",
                tabFullCodePreview: "Full Code",
                tabOptionPreview: "Option Preview",
                minimalBundle: "Minimal Bundle",
              },
              chartTypes: {
                line: "Line",
                bar: "Bar",
                pie: "Pie",
                scatter: "Scatter",
                map: "GEO/Map",
                candlestick: "Candlestick",
                radar: "Radar",
                boxplot: "Boxplot",
                heatmap: "Heatmap",
                graph: "Graph",
                lines: "Lines",
                tree: "Tree",
                treemap: "Treemap",
                sunburst: "Sunburst",
                parallel: "Parallel",
                sankey: "Sankey",
                funnel: "Funnel",
                gauge: "Gauge",
                pictorialBar: "PictorialBar",
                themeRiver: "ThemeRiver",
                calendar: "Calendar",
                custom: "Custom",
                dataset: "Dataset",
                dataZoom: "DataZoom",
                drag: "Drag",
                rich: "Rich Text",
                globe: "3D Globe",
                bar3D: "3D Bar",
                scatter3D: "3D Scatter",
                surface: "3D Surface",
                map3D: "3D Map",
                lines3D: "3D Lines",
                line3D: "3D Line",
                scatterGL: "Scatter GL",
                linesGL: "Lines GL",
                flowGL: "Flow GL",
                graphGL: "Graph GL",
              },
            },
            zh: {
              editor: {
                run: "运行",
                errorInEditor: "编辑器内容有误！",
                chartOK: "图表已生成, ",
                darkMode: "深色模式",
                enableDecal: "无障碍花纹",
                renderCfgTitle: "渲染设置",
                useDirtyRect: "开启脏矩形优化",
                renderer: "渲染模式",
                download: "下载示例",
                edit: "编辑",
                monacoMode: "开启类型检查",
                tabEditor: "示例编辑",
                tabFullCodePreview: "完整代码",
                tabOptionPreview: "配置项",
                minimalBundle: "按需引入",
              },
              chartTypes: {
                line: "折线图",
                bar: "柱状图",
                pie: "饼图",
                scatter: "散点图",
                map: "地理坐标/地图",
                candlestick: "K 线图",
                radar: "雷达图",
                boxplot: "盒须图",
                heatmap: "热力图",
                graph: "关系图",
                lines: "路径图",
                tree: "树图",
                treemap: "矩形树图",
                sunburst: "旭日图",
                parallel: "平行坐标系",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                calendar: "日历坐标系",
                custom: "自定义系列",
                dataset: "数据集",
                dataZoom: "数据区域缩放",
                drag: "拖拽",
                rich: "富文本",
                globe: "3D 地球",
                bar3D: "3D 柱状图",
                scatter3D: "3D 散点图",
                surface: "3D 曲面",
                map3D: "3D 地图",
                lines3D: "3D 路径图",
                line3D: "3D 折线图",
                scatterGL: "GL 散点图",
                linesGL: "GL 路径图",
                flowGL: "GL 矢量场图",
                graphGL: "GL 关系图",
              },
            },
          };
        var X = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { attrs: { id: "main-container" } },
            [
              t.shared.isMobile
                ? t._e()
                : i(
                    "div",
                    {
                      style: { width: t.leftContainerSize + "%" },
                      attrs: { id: "editor-left-container" },
                    },
                    [
                      i(
                        "el-tabs",
                        {
                          attrs: { type: "border-card" },
                          model: {
                            value: t.currentTab,
                            callback: function (e) {
                              t.currentTab = e;
                            },
                            expression: "currentTab",
                          },
                        },
                        [
                          i(
                            "el-tab-pane",
                            {
                              attrs: {
                                label: t.$t("editor.tabEditor"),
                                name: "code-editor",
                              },
                            },
                            [
                              i(
                                "el-container",
                                [
                                  i(
                                    "el-header",
                                    { attrs: { id: "editor-control-panel" } },
                                    [
                                      i(
                                        "div",
                                        { attrs: { id: "code-info" } },
                                        [
                                          t.shared.editorStatus.message
                                            ? [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "code-info-time",
                                                  },
                                                  [t._v(t._s(t.currentTime))]
                                                ),
                                                t._v(" "),
                                                i(
                                                  "span",
                                                  {
                                                    class:
                                                      "code-info-type-" +
                                                      t.shared.editorStatus
                                                        .type,
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.shared.editorStatus
                                                          .message
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            : t._e(),
                                        ],
                                        2
                                      ),
                                      t._v(" "),
                                      i(
                                        "div",
                                        { staticClass: "editor-controls" },
                                        [
                                          i(
                                            "a",
                                            {
                                              staticClass:
                                                "btn btn-default btn-sm",
                                              attrs: { href: "javascript:;" },
                                              on: { click: t.disposeAndRun },
                                            },
                                            [t._v(t._s(t.$t("editor.run")))]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  i(
                                    "el-main",
                                    [
                                      t.shared.typeCheck
                                        ? i("CodeMonaco", {
                                            attrs: {
                                              id: "code-panel",
                                              initialCode: t.initialCode,
                                            },
                                          })
                                        : i("CodeAce", {
                                            attrs: {
                                              id: "code-panel",
                                              initialCode: t.initialCode,
                                            },
                                          }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          i(
                            "el-tab-pane",
                            {
                              attrs: {
                                label: t.$t("editor.tabFullCodePreview"),
                                name: "full-code",
                                lazy: !0,
                              },
                            },
                            [
                              i(
                                "el-container",
                                {
                                  staticStyle: {
                                    width: "100%",
                                    height: "100%",
                                  },
                                },
                                [
                                  i(
                                    "el-header",
                                    {
                                      attrs: {
                                        id: "full-code-generate-config",
                                      },
                                    },
                                    [
                                      i("span", {
                                        staticClass:
                                          "full-code-generate-config-label",
                                      }),
                                      t._v(" "),
                                      i("el-switch", {
                                        staticClass: "enable-decal",
                                        attrs: {
                                          "active-text": t.$t(
                                            "editor.minimalBundle"
                                          ),
                                          "inactive-text": "",
                                        },
                                        model: {
                                          value: t.fullCodeConfig.minimal,
                                          callback: function (e) {
                                            t.$set(
                                              t.fullCodeConfig,
                                              "minimal",
                                              e
                                            );
                                          },
                                          expression: "fullCodeConfig.minimal",
                                        },
                                      }),
                                      t._v(" "),
                                      i("el-switch", {
                                        staticClass: "enable-decal",
                                        attrs: {
                                          "active-text": "ES Modules",
                                          "inactive-text": "",
                                        },
                                        model: {
                                          value: t.fullCodeConfig.esm,
                                          callback: function (e) {
                                            t.$set(t.fullCodeConfig, "esm", e);
                                          },
                                          expression: "fullCodeConfig.esm",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  i(
                                    "el-main",
                                    [
                                      i("FullCodePreview", {
                                        attrs: { code: t.fullCode },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          i(
                            "el-tab-pane",
                            {
                              attrs: {
                                label: t.$t("editor.tabOptionPreview"),
                                name: "full-option",
                              },
                            },
                            [i("div", { attrs: { id: "option-outline" } })]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
              t._v(" "),
              t.shared.isMobile
                ? t._e()
                : i("div", {
                    staticClass: "handler",
                    style: { left: t.leftContainerSize + "%" },
                    attrs: { id: "h-handler" },
                    on: { mousedown: t.onSplitterDragStart },
                  }),
              t._v(" "),
              i("Preview", {
                ref: "preview",
                staticClass: "right-container",
                style: {
                  width: 100 - t.leftContainerSize + "%",
                  left: t.leftContainerSize + "%",
                },
                attrs: { inEditor: !0 },
              }),
            ],
            1
          );
        };
        X._withStripped = !0;
        var tt = function () {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("div", {
            directives: [
              {
                name: "loading",
                rawName: "v-loading",
                value: t.loading,
                expression: "loading",
              },
            ],
            staticClass: "ace-editor-main",
          });
        };
        tt._withStripped = !0;
        var et = {
            grid: 108210,
            series: 1161721,
            pie: 173151,
            legend: 278319,
            right: 12224,
            tooltip: 188049,
            xAxis: 374619,
            bar: 182040,
            label: 163527,
            emphasis: 5e4,
            formatter: 62138,
            line: 306801,
            data: 232156,
            left: 24464,
            top: 18094,
            scatter: 48954,
            type: 92134,
            yAxis: 238764,
            axisLabel: 73604,
            legendHoverLink: 14243,
            textStyle: 129159,
            hoverAnimation: 9062,
            dataZoom: 90999,
            nameLocation: 15800,
            nameTextStyle: 30596,
            nameGap: 14640,
            singleAxis: 15977,
            splitLine: 30047,
            nameRotate: 10483,
            inverse: 12997,
            boundaryGap: 18533,
            clockwise: 4411,
            lineStyle: 81857,
            selectedOffset: 2984,
            width: 17962,
            slider: 28321,
            dataBackground: 2287,
            areaStyle: 19428,
            color: 94439,
            height: 7954,
            orient: 17218,
            align: 10373,
            symbol: 35613,
            xAxisIndex: 15405,
            stack: 10602,
            clipOverflow: 3229,
            center: 9827,
            padding: 12855,
            itemStyle: 143518,
            itemGap: 11914,
            shadowBlur: 17233,
            shadowColor: 13929,
            normal: 211293,
            borderColor: 20648,
            shadowOffsetX: 11499,
            shadowOffsetY: 9210,
            opacity: 12301,
            heatmap: 13825,
            value: 21111,
            fillerColor: 797,
            borderWidth: 15576,
            itemWidth: 7123,
            effectScatter: 31179,
            coordinateSystem: 15302,
            axisLine: 53628,
            axisTick: 38765,
            selectedMode: 15177,
            fontSize: 14906,
            inactiveColor: 5720,
            selected: 10921,
            gauge: 55176,
            markLine: 65539,
            handleStyle: 1852,
            borderType: 5717,
            title: 158568,
            show: 82e3,
            length: 4814,
            zlevel: 22293,
            labelPrecision: 746,
            position: 48349,
            labelFormatter: 727,
            alignWithLabel: 3785,
            interval: 28810,
            showDetail: 694,
            yAxisIndex: 10560,
            showDataShadow: 591,
            realtime: 2611,
            onZero: 3690,
            silent: 22883,
            radar: 61070,
            axisPointer: 23175,
            trigger: 15344,
            barCategoryGap: 3511,
            splitNumber: 19992,
            inside: 32482,
            name: 61072,
            showSymbol: 4778,
            containLabel: 6413,
            offset: 15619,
            max: 12538,
            backgroundColor: 32864,
            visualMap: 95262,
            fontStyle: 14443,
            fontWeight: 11970,
            fontFamily: 10141,
            symbolSize: 21077,
            blurSize: 360,
            geo: 65283,
            radius: 8533,
            markArea: 19906,
            map: 102385,
            brush: 29508,
            parallel: 20673,
            parallelAxis: 13713,
            gridIndex: 20650,
            piecewise: 25231,
            showContent: 6960,
            zoom: 3997,
            polar: 23175,
            controller: 2892,
            radiusAxis: 24146,
            angleAxis: 18771,
            toolbox: 101543,
            timeline: 34619,
            precision: 3306,
            curveness: 1378,
            x: 2753,
            valueIndex: 2807,
            itemHeight: 5180,
            icon: 10336,
            valueDim: 2013,
            symbolOffset: 10017,
            y: 1590,
            transitionDuration: 3814,
            radarIndex: 715,
            extraCssText: 3640,
            animation: 17864,
            "animationThreshold = 2000": 11727,
            minInterval: 11278,
            animationDelay: 7620,
            layoutCenter: 2348,
            animationDurationUpdate: 6972,
            animationEasingUpdate: 6816,
            animationDelayUpdate: 6642,
            symbolRotate: 10221,
            feature: 50238,
            axis: 1794,
            crossStyle: 1830,
            funnel: 11042,
            scaleLimit: 4792,
            roam: 7112,
            itemSize: 1966,
            showTitle: 1851,
            smooth: 5185,
            saveAsImage: 9915,
            showAllSymbol: 3417,
            polarIndex: 5235,
            graph: 76898,
            layout: 2633,
            excludeComponents: 447,
            restore: 3693,
            dataView: 10258,
            magicType: 10505,
            iconStyle: 9088,
            nodeScaleRatio: 892,
            hoverLayerThreshold: 6480,
            textAlign: 9402,
            splitArea: 16447,
            nameMap: 4584,
            text: 11691,
            pixelRatio: 357,
            readOnly: 491,
            optionToContent: 936,
            lang: 549,
            textareaColor: 233,
            textareaBorderColor: 177,
            option: 2003,
            seriesIndex: 4483,
            back: 199,
            rect: 323,
            polygon: 254,
            min: 16646,
            scale: 14303,
            logBase: 7456,
            start: 2889,
            z: 15867,
            link: 5348,
            textBaseline: 4210,
            subtext: 5086,
            sublink: 2618,
            subtarget: 2373,
            subtextStyle: 7732,
            triggerEvent: 9175,
            blendMode: 6359,
            progressiveThreshold: 4699,
            continuous: 42105,
            lines: 31608,
            markPoint: 81254,
            roseType: 4221,
            animationEasing: 8836,
            animationDuration: 9562,
            calculable: 3953,
            progressive: 5761,
            treemap: 16948,
            links: 9573,
            edgeSymbol: 1211,
            bottom: 13969,
            edges: 1122,
            edgeLabel: 1685,
            edgeSymbolSize: 769,
            focusNodeAdjacency: 888,
            draggable: 965,
            force: 5601,
            geoIndex: 2856,
            circular: 1862,
            avoidLabelOverlap: 3694,
            target: 5476,
            coord: 3995,
            startValue: 2182,
            triggerOn: 6741,
            showDelay: 3535,
            alwaysShowContent: 4928,
            enterable: 3871,
            hideDelay: 3018,
            step: 3437,
            detail: 5434,
            startAngle: 5421,
            handleIcon: 1051,
            handleSize: 932,
            zoomLock: 1979,
            throttle: 1757,
            boxplot: 6233,
            candlestick: 14005,
            sankey: 10101,
            loop: 678,
            rewind: 439,
            controlStyle: 1269,
            labelLine: 17838,
            distance: 452,
            rotate: 4666,
            margin: 4342,
            barWidth: 6641,
            category: 1318,
            barGap: 4832,
            nodes: 2085,
            pieces: 2683,
            smoothMonotone: 2203,
            itemSymbol: 882,
            axisType: 902,
            currentIndex: 583,
            effectType: 1364,
            areaColor: 2808,
            showEffectOn: 1285,
            rippleEffect: 3617,
            minAngle: 2527,
            barMaxWidth: 3073,
            rotateLabel: 523,
            dimension: 1922,
            end: 1426,
            inRange: 4604,
            outOfRange: 2262,
            checkpointStyle: 1036,
            sampling: 2458,
            regions: 6273,
            large: 1055,
            showLegendSymbol: 1600,
            layoutSize: 1981,
            mapValueCalculation: 1447,
            categories: 4362,
            indicator: 2995,
            barBorderRadius: 1455,
            range: 2009,
            connectNulls: 3411,
            pointer: 2665,
            effect: 5446,
            parallelAxisDefault: 927,
            coords: 750,
            shadowStyle: 1670,
            largeThreshold: 754,
            hoverLink: 1276,
            repulsion: 865,
            textGap: 1121,
            breadcrumb: 828,
            baseline: 1316,
            endAngle: 895,
            period: 1153,
            brushType: 1421,
            minOpacity: 216,
            brushLink: 913,
            brushMode: 465,
            transformable: 418,
            brushStyle: 507,
            throttleType: 448,
            throttleDelay: 369,
            removeOnClick: 648,
            inBrush: 500,
            outOfBrush: 466,
            offsetCenter: 981,
            barMinHeight: 2279,
            parallelIndex: 235,
            nodeClick: 732,
            source: 869,
            color0: 210,
            filterMode: 2252,
            tiled: 352,
            autoPlay: 496,
            playInterval: 440,
            sort: 484,
            polyline: 929,
            initLayout: 966,
            controlPosition: 408,
            children: 89,
            contentToOption: 590,
            maxOpacity: 215,
            squareRatio: 281,
            leafDepth: 347,
            zoomToNodeRatio: 300,
            childrenVisibleMin: 303,
            shape: 1054,
            length2: 891,
            endValue: 1107,
            gravity: 634,
            edgeLength: 662,
            layoutAnimation: 485,
            colorAlpha: 389,
            constantSpeed: 451,
            trailLength: 530,
            dim: 313,
            areaSelectStyle: 253,
            funnelAlign: 334,
            buttonTextColor: 177,
            buttonColor: 205,
            levels: 2267,
            textColor: 178,
            lineX: 46,
            lineY: 32,
            showPlayBtn: 64,
            showPrevBtn: 43,
            showNextBtn: 43,
            playIcon: 90,
            stopIcon: 48,
            prevIcon: 39,
            nextIcon: 36,
            ellipsis: 76,
            clear: 114,
            colorMappingBy: 424,
            maxSize: 131,
            minSize: 147,
            gap: 175,
            visibleMin: 315,
            axisExpandable: 134,
            layoutIterations: 226,
            nodeGap: 158,
            nodeWidth: 134,
            axisExpandCenter: 79,
            axisExpandCount: 56,
            axisExpandWidth: 51,
            boxWidth: 46,
            gapWidth: 78,
            borderColorSaturation: 56,
            inactiveOpacity: 51,
            keep: 41,
            colorSaturation: 343,
            visualDimension: 471,
            id: 138,
            borderColor0: 67,
            emptyItemWidth: 60,
            activeOpacity: 43,
            radiusAxisIndex: 574,
            angleAxisIndex: 478,
            textPosition: 232,
            minOpen: 194,
            maxOpen: 125,
            graphic: 5617,
            elements: 3108,
            image: 673,
            group: 488,
            $action: 82,
            style: 431,
            textVerticalAlign: 13,
            fill: 55,
            stroke: 47,
            lineWidth: 34,
            sector: 93,
            "bezier-curve": 6,
            cpx2: 1,
            cpy2: 1,
            circle: 256,
            arc: 61,
            bezierCurve: 61,
            onclick: 101,
            onmouseover: 32,
            font: 17,
            bounding: 75,
            cursor: 54,
            themeRiver: 11,
            confine: 580,
            ring: 103,
            ondragleave: 3,
            ondragstart: 4,
            ondragover: 4,
            disabled: 221,
            visualMin: 44,
            visualMax: 18,
            onmousemove: 14,
            ondrag: 8,
            ondragend: 2,
            x2: 7,
            x1: 4,
            y1: 2,
            y2: 3,
            percent: 6,
            ondrop: 9,
            cx: 7,
            smoothConstraint: 20,
            cpx1: 2,
            points: 16,
            onmousewheel: 13,
            onmouseout: 7,
            barBorderWidth: 2,
            ondragenter: 2,
            onmouseup: 1,
            cy: 1,
            r: 2,
            onmousedown: 1,
            animationThreshold: 1,
          },
          it = {};
        function nt(t) {
          return Promise.all(
            t.map(function (t) {
              if (
                ("string" == typeof t &&
                  (t = { url: t, type: t.match(/\.css$/) ? "css" : "js" }),
                it[t.url])
              )
                return it[t.url];
              var e = new Promise(function (e, i) {
                if ("js" === t.type) {
                  var n = document.createElement("script");
                  (n.src = t.url),
                    (n.async = !1),
                    (n.onload = function () {
                      e();
                    }),
                    (n.onerror = function () {
                      i();
                    }),
                    document.body.appendChild(n);
                } else if ("css" === t.type) {
                  var a = document.createElement("link");
                  (a.rel = "stylesheet"),
                    (a.href = t.url),
                    (a.onload = function () {
                      e();
                    }),
                    (a.onerror = function () {
                      i();
                    }),
                    document.body.appendChild(a);
                }
              });
              return (it[t.url] = e), e;
            })
          );
        }
        var at = [
            "line",
            "bar",
            "pie",
            "scatter",
            "map",
            "candlestick",
            "radar",
            "boxplot",
            "heatmap",
            "graph",
            "lines",
            "tree",
            "treemap",
            "sunburst",
            "parallel",
            "sankey",
            "funnel",
            "gauge",
            "pictorialBar",
            "themeRiver",
            "calendar",
            "custom",
            "dataset",
            "dataZoom",
            "drag",
            "rich",
            "globe",
            "bar3D",
            "scatter3D",
            "surface",
            "map3D",
            "lines3D",
            "line3D",
            "scatterGL",
            "linesGL",
            "flowGL",
            "graphGL",
          ],
          rt = (function (t) {
            for (var e = {}, i = 0; i < t.length; i++) e[t[i]] = 1;
            return location.href.indexOf("github.io") >= 0 ? {} : e;
          })([
            "effectScatter-map",
            "geo-lines",
            "geo-map-scatter",
            "heatmap-map",
            "lines-airline",
            "map-china",
            "map-china-dataRange",
            "map-labels",
            "map-locate",
            "map-province",
            "map-world",
            "map-world-dataRange",
            "scatter-map",
            "scatter-map-brush",
            "scatter-weibo",
            "scatter-world-population",
            "geo3d",
            "geo3d-with-different-height",
            "globe-country-carousel",
            "globe-with-echarts-surface",
            "map3d-alcohol-consumption",
            "map3d-wood-map",
            "scattergl-weibo",
          ]),
          ot = {};
        (location.search || "")
          .substr(1)
          .split("&")
          .forEach(function (t) {
            var e = t.split("=");
            ot[e[0]] = e[1];
          });
        var lt,
          st =
            (((lt = document.createElement("canvas")).width = lt.height = 1),
            !(!lt.getContext || !lt.getContext("2d")) &&
              0 === lt.toDataURL("image/webp").indexOf("data:image/webp")),
          ct = {
            localEChartsMinJS: "http://localhost/echarts/dist/echarts.js",
            echartsMinJS:
              "/third-party/cdn.jsdelivr.net/npm/echarts@5.0.1/dist/echarts.min.js",
            echartsDir: "/third-party/cdn.jsdelivr.net/npm/echarts@5.0.1",
            echartsStatMinJS:
              "/third-party/cdn.jsdelivr.net/npm/echarts-stat@latest/dist/ecStat.min.js",
            echartsGLMinJS:
              "/third-party/cdn.jsdelivr.net/npm/echarts-gl@2/dist/echarts-gl.min.js",
            datGUIMinJS:
              "/third-party/cdn.jsdelivr.net/npm/dat.gui@0.6.5/build/dat.gui.min.js",
            monacoDir:
              "/third-party/cdn.jsdelivr.net/npm/monaco-editor@0.21.2/min/vs",
            aceDir:
              "/third-party/cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict",
          },
          dt = {
            cdnRoot: "",
            version: "",
            locale: "",
            darkMode: "dark" === ot.theme,
            enableDecal: "decal" in ot,
            renderer: ot.renderer || "canvas",
            typeCheck: "monaco" === ot.editor,
            useDirtyRect: "useDirtyRect" in ot,
            code: "",
            runCode: "",
            sourceCode: "",
            runHash: "",
            isMobile: window.innerWidth < 600,
            editorStatus: { type: "", message: "" },
          };
        function ut() {
          return new Promise(function (t) {
            var e = ot.gl ? "data-gl" : "data";
            $.ajax(
              ""
                .concat(dt.cdnRoot, "/")
                .concat(e, "/")
                .concat(ot.c, ".js?_v_")
                .concat(dt.version),
              {
                dataType: "text",
                success: function (e) {
                  t(e);
                },
              }
            );
          });
        }
        function pt(t) {
          return t.replace(/\/\*[\w\W]*?\*\//, "").trim();
        }
        var ft = 123;
        function gt(t, e, i, n, a, r, o, l) {
          var s,
            c = "function" == typeof t ? t.options : t;
          if (
            (e && ((c.render = e), (c.staticRenderFns = i), (c._compiled = !0)),
            n && (c.functional = !0),
            r && (c._scopeId = "data-v-" + r),
            o
              ? ((s = function (t) {
                  (t =
                    t ||
                    (this.$vnode && this.$vnode.ssrContext) ||
                    (this.parent &&
                      this.parent.$vnode &&
                      this.parent.$vnode.ssrContext)) ||
                    "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                    (t = __VUE_SSR_CONTEXT__),
                    a && a.call(this, t),
                    t &&
                      t._registeredComponents &&
                      t._registeredComponents.add(o);
                }),
                (c._ssrRegister = s))
              : a &&
                (s = l
                  ? function () {
                      a.call(
                        this,
                        (c.functional ? this.parent : this).$root.$options
                          .shadowRoot
                      );
                    }
                  : a),
            s)
          )
            if (c.functional) {
              c._injectStyles = s;
              var d = c.render;
              c.render = function (t, e) {
                return s.call(e), d(t, e);
              };
            } else {
              var u = c.beforeCreate;
              c.beforeCreate = u ? [].concat(u, s) : [s];
            }
          return { exports: t, options: c };
        }
        var ht = gt(
          {
            props: ["initialCode"],
            data: function () {
              return { shared: dt, loading: !1 };
            },
            mounted: function () {
              var t = this;
              (this.loading = !0),
                ("undefined" == typeof ace
                  ? nt([
                      ct.aceDir + "/ace.js",
                      ct.aceDir + "/ext-language_tools.js",
                    ]).then(function () {
                      var t = ace.require("ace/ext/language_tools"),
                        e = [];
                      for (var i in et)
                        e.push({
                          caption: i,
                          value: i,
                          score: et[i],
                          metal: "local",
                        });
                      t.addCompleter({
                        getCompletions: function (t, i, n, a, r) {
                          r(null, e);
                        },
                      });
                    })
                  : Promise.resolve()
                ).then(function () {
                  t.loading = !1;
                  var e = ace.edit(t.$el);
                  e.getSession().setMode("ace/mode/javascript"),
                    e.setOptions({
                      enableBasicAutocompletion: !0,
                      enableSnippets: !0,
                      enableLiveAutocompletion: !0,
                    }),
                    (t._editor = e),
                    e.on("change", function () {
                      dt.sourceCode = dt.runCode = e.getValue();
                    }),
                    t.initialCode && t.setInitialCode(t.initialCode);
                });
            },
            methods: {
              setInitialCode: function (t) {
                this._editor &&
                  t &&
                  (this._editor.setValue(t || ""),
                  this._editor.selection.setSelectionRange({
                    start: { row: 1, column: 4 },
                    end: { row: 1, column: 4 },
                  }));
              },
            },
            watch: {
              initialCode: function (t) {
                this.setInitialCode(t);
              },
            },
          },
          tt,
          [],
          !1,
          null,
          null,
          null
        );
        ht.options.__file = "src/editor/CodeAce.vue";
        const mt = ht.exports;
        var Ct = function () {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("div", {
            directives: [
              {
                name: "loading",
                rawName: "v-loading",
                value: t.loading,
                expression: "loading",
              },
            ],
            staticClass: "monaco-editor-main",
          });
        };
        Ct._withStripped = !0;
        var yt = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { class: [t.inEditor && !t.shared.isMobile ? "" : "full"] },
            [
              i("div", {
                directives: [
                  {
                    name: "loading",
                    rawName: "v-loading",
                    value: t.loading,
                    expression: "loading",
                  },
                ],
                staticClass: "right-panel",
                style: { background: t.backgroundColor },
                attrs: { id: "chart-panel" },
              }),
              t._v(" "),
              i(
                "div",
                { attrs: { id: "tool-panel" } },
                [
                  i(
                    "div",
                    { staticClass: "left-panel" },
                    [
                      i("el-switch", {
                        staticClass: "dark-mode",
                        attrs: {
                          "active-color": "#181432",
                          "active-text": t.$t("editor.darkMode"),
                          "inactive-text": "",
                        },
                        model: {
                          value: t.shared.darkMode,
                          callback: function (e) {
                            t.$set(t.shared, "darkMode", e);
                          },
                          expression: "shared.darkMode",
                        },
                      }),
                      t._v(" "),
                      t.isGL
                        ? t._e()
                        : i("el-switch", {
                            staticClass: "enable-decal",
                            attrs: {
                              "active-text": t.$t("editor.enableDecal"),
                              "inactive-text": "",
                            },
                            model: {
                              value: t.shared.enableDecal,
                              callback: function (e) {
                                t.$set(t.shared, "enableDecal", e);
                              },
                              expression: "shared.enableDecal",
                            },
                          }),
                      t._v(" "),
                      t.isGL
                        ? t._e()
                        : i(
                            "el-popover",
                            {
                              staticStyle: { "margin-top": "3px" },
                              attrs: {
                                placement: "bottom",
                                width: "450",
                                trigger: "click",
                              },
                            },
                            [
                              i(
                                "div",
                                { staticClass: "render-config-container" },
                                [
                                  i(
                                    "el-row",
                                    {
                                      attrs: {
                                        gutter: 2,
                                        type: "flex",
                                        align: "middle",
                                      },
                                    },
                                    [
                                      i(
                                        "el-col",
                                        { attrs: { span: 12 } },
                                        [
                                          i(
                                            "label",
                                            { staticClass: "tool-label" },
                                            [
                                              t._v(
                                                t._s(t.$t("editor.renderer"))
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          i(
                                            "el-radio-group",
                                            {
                                              staticStyle: {
                                                "text-transform": "uppercase",
                                              },
                                              attrs: { size: "mini" },
                                              model: {
                                                value: t.shared.renderer,
                                                callback: function (e) {
                                                  t.$set(
                                                    t.shared,
                                                    "renderer",
                                                    e
                                                  );
                                                },
                                                expression: "shared.renderer",
                                              },
                                            },
                                            [
                                              i("el-radio-button", {
                                                attrs: { label: "svg" },
                                              }),
                                              t._v(" "),
                                              i("el-radio-button", {
                                                attrs: { label: "canvas" },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      t._v(" "),
                                      i(
                                        "el-col",
                                        { attrs: { span: 12 } },
                                        [
                                          "canvas" === t.shared.renderer
                                            ? i("el-switch", {
                                                attrs: {
                                                  "active-text": t.$t(
                                                    "editor.useDirtyRect"
                                                  ),
                                                  "inactive-text": "",
                                                },
                                                model: {
                                                  value: t.shared.useDirtyRect,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.shared,
                                                      "useDirtyRect",
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    "shared.useDirtyRect",
                                                },
                                              })
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              i(
                                "span",
                                {
                                  staticClass: "render-config-trigger",
                                  attrs: { slot: "reference" },
                                  slot: "reference",
                                },
                                [
                                  i("i", {
                                    staticClass:
                                      "el-icon-setting el-icon--left",
                                  }),
                                  t._v(t._s(t.$t("editor.renderCfgTitle"))),
                                ]
                              ),
                            ]
                          ),
                    ],
                    1
                  ),
                  t._v(" "),
                  t.inEditor
                    ? [
                        t.shared.isMobile
                          ? t._e()
                          : i(
                              "button",
                              {
                                staticClass: "download btn btn-sm",
                                on: { click: t.downloadExample },
                              },
                              [t._v(t._s(t.$t("editor.download")))]
                            ),
                        t._v(" "),
                        i(
                          "a",
                          {
                            staticClass: "screenshot",
                            attrs: { target: "_blank" },
                            on: { click: t.screenshot },
                          },
                          [i("i", { staticClass: "el-icon-camera-solid" })]
                        ),
                      ]
                    : i(
                        "a",
                        {
                          staticClass: "edit btn btn-sm",
                          attrs: { href: t.editLink, target: "_blank" },
                        },
                        [t._v(t._s(t.$t("editor.edit")))]
                      ),
                ],
                2
              ),
            ]
          );
        };
        yt._withStripped = !0;
        var vt = (function () {
          function t(t) {
            var e = (this.dom = document.createElement("div"));
            for (var i in ((e.className = "ec-debug-dirty-rect"),
            (t = Object.assign({}, t)),
            Object.assign(t, {
              backgroundColor: "rgba(0, 0, 255, 0.2)",
              border: "1px solid #00f",
            }),
            (e.style.cssText =
              "\nposition: absolute;\nopacity: 0;\ntransition: opacity 0.5s linear;\npointer-events: none;\n"),
            t))
              t.hasOwnProperty(i) && (e.style[i] = t[i]);
          }
          return (
            (t.prototype.update = function (t) {
              var e = this.dom.style;
              (e.width = t.width + "px"),
                (e.height = t.height + "px"),
                (e.left = t.x + "px"),
                (e.top = t.y + "px");
            }),
            (t.prototype.hide = function () {
              this.dom.style.opacity = "0";
            }),
            (t.prototype.show = function () {
              var t = this;
              clearTimeout(this._hideTimeout),
                (this.dom.style.opacity = "1"),
                (this._hideTimeout = setTimeout(function () {
                  t.hide();
                }, 500));
            }),
            t
          );
        })();
        function bt(t) {
          return (bt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        var _t = i(279),
          Lt = i.n(_t);
        let wt = null,
          xt = null;
        function kt(t, e = {}) {
          let i = document.createElement(t);
          return (
            Object.keys(e).forEach((t) => {
              i[t] = e[t];
            }),
            i
          );
        }
        function St(t, e, i) {
          return (window.getComputedStyle(t, i || null) || { display: "none" })[
            e
          ];
        }
        function Nt(t) {
          if (!document.documentElement.contains(t))
            return { detached: !0, rendered: !1 };
          let e = t;
          for (; e !== document; ) {
            if ("none" === St(e, "display"))
              return { detached: !1, rendered: !1 };
            e = e.parentNode;
          }
          return { detached: !1, rendered: !0 };
        }
        let Mt = 0,
          Tt = null;
        function Dt(t, e) {
          if (
            (t.__resize_mutation_handler__ ||
              (t.__resize_mutation_handler__ = Ot.bind(t)),
            !t.__resize_listeners__)
          )
            if (((t.__resize_listeners__ = []), window.ResizeObserver)) {
              let { offsetWidth: e, offsetHeight: i } = t,
                n = new ResizeObserver(() => {
                  (t.__resize_observer_triggered__ ||
                    ((t.__resize_observer_triggered__ = !0),
                    t.offsetWidth !== e || t.offsetHeight !== i)) &&
                    Et(t);
                }),
                { detached: a, rendered: r } = Nt(t);
              (t.__resize_observer_triggered__ = !1 === a && !1 === r),
                (t.__resize_observer__ = n),
                n.observe(t);
            } else if (t.attachEvent && t.addEventListener)
              (t.__resize_legacy_resize_handler__ = function () {
                Et(t);
              }),
                t.attachEvent("onresize", t.__resize_legacy_resize_handler__),
                document.addEventListener(
                  "DOMSubtreeModified",
                  t.__resize_mutation_handler__
                );
            else if (
              (Mt ||
                (Tt = (function (t) {
                  var e = document.createElement("style");
                  return (
                    (e.type = "text/css"),
                    e.styleSheet
                      ? (e.styleSheet.cssText = t)
                      : e.appendChild(document.createTextNode(t)),
                    (
                      document.querySelector("head") || document.body
                    ).appendChild(e),
                    e
                  );
                })(
                  '.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}'
                )),
              (function (t) {
                let e = St(t, "position");
                (e && "static" !== e) || (t.style.position = "relative"),
                  (t.__resize_old_position__ = e),
                  (t.__resize_last__ = {});
                let i = kt("div", { className: "resize-triggers" }),
                  n = kt("div", { className: "resize-expand-trigger" }),
                  a = kt("div"),
                  r = kt("div", { className: "resize-contract-trigger" });
                n.appendChild(a),
                  i.appendChild(n),
                  i.appendChild(r),
                  t.appendChild(i),
                  (t.__resize_triggers__ = {
                    triggers: i,
                    expand: n,
                    expandChild: a,
                    contract: r,
                  }),
                  Pt(t),
                  t.addEventListener("scroll", At, !0),
                  (t.__resize_last__ = {
                    width: t.offsetWidth,
                    height: t.offsetHeight,
                  });
              })(t),
              (t.__resize_rendered__ = Nt(t).rendered),
              window.MutationObserver)
            ) {
              let e = new MutationObserver(t.__resize_mutation_handler__);
              e.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }),
                (t.__resize_mutation_observer__ = e);
            }
          t.__resize_listeners__.push(e), Mt++;
        }
        function Ot() {
          let { rendered: t, detached: e } = Nt(this);
          t !== this.__resize_rendered__ &&
            (!e &&
              this.__resize_triggers__ &&
              (Pt(this), this.addEventListener("scroll", At, !0)),
            (this.__resize_rendered__ = t),
            Et(this));
        }
        function At() {
          var t, e;
          Pt(this),
            this.__resize_raf__ &&
              ((t = this.__resize_raf__),
              xt ||
                (xt = (
                  window.cancelAnimationFrame ||
                  window.webkitCancelAnimationFrame ||
                  window.mozCancelAnimationFrame ||
                  function (t) {
                    clearTimeout(t);
                  }
                ).bind(window)),
              xt(t)),
            (this.__resize_raf__ =
              ((e = () => {
                let t = (function (t) {
                  let { width: e, height: i } = t.__resize_last__,
                    { offsetWidth: n, offsetHeight: a } = t;
                  return n !== e || a !== i ? { width: n, height: a } : null;
                })(this);
                t && ((this.__resize_last__ = t), Et(this));
              }),
              wt ||
                (wt = (
                  window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  function (t) {
                    return setTimeout(t, 16);
                  }
                ).bind(window)),
              wt(e)));
        }
        function Et(t) {
          t &&
            t.__resize_listeners__ &&
            t.__resize_listeners__.forEach((e) => {
              e.call(t, t);
            });
        }
        function Pt(t) {
          let {
              expand: e,
              expandChild: i,
              contract: n,
            } = t.__resize_triggers__,
            { scrollWidth: a, scrollHeight: r } = n,
            {
              offsetWidth: o,
              offsetHeight: l,
              scrollWidth: s,
              scrollHeight: c,
            } = e;
          (n.scrollLeft = a),
            (n.scrollTop = r),
            (i.style.width = o + 1 + "px"),
            (i.style.height = l + 1 + "px"),
            (e.scrollLeft = s),
            (e.scrollTop = c);
        }
        const Ft = [
            {
              category: ["bar"],
              id: "bar-background",
              tags: [],
              title: "Bar with Background",
              titleCN: "带背景色的柱状图",
              difficulty: 0,
            },
            {
              category: ["custom"],
              id: "bar-histogram",
              tags: [],
              title: "Histogram with Custom Series",
              titleCN: "直方图（自定义系列）",
              difficulty: 0,
            },
            {
              category: ["bar"],
              id: "bar-simple",
              tags: [],
              title: "Basic Bar",
              titleCN: "基础柱状图",
              difficulty: 0,
            },
            {
              category: ["bar"],
              id: "bar-tick-align",
              tags: [],
              title: "Axis Align with Tick",
              titleCN: "坐标轴刻度与标签对齐",
              difficulty: 0,
            },
            {
              category: ["calendar"],
              id: "calendar-simple",
              tags: [],
              title: "Simple Calendar",
              titleCN: "基础日历图",
              difficulty: 0,
            },
            {
              category: ["candlestick"],
              id: "candlestick-simple",
              tags: [],
              title: "Basic Candlestick",
              titleCN: "基础 K 线图",
              difficulty: 0,
            },
            {
              category: ["dataset", "bar", "transform"],
              id: "data-transform-sort-bar",
              tags: [],
              title: "Sort Data in Bar Chart",
              titleCN: "柱状图排序",
              difficulty: 0,
            },
            {
              category: ["heatmap"],
              id: "heatmap-cartesian",
              tags: [],
              title: "Heatmap on Cartesian",
              titleCN: "笛卡尔坐标系上的热力图",
              difficulty: 0,
            },
            {
              category: ["line"],
              id: "line-simple",
              tags: [],
              title: "Basic Line Chart",
              titleCN: "基础折线图",
              difficulty: 0,
            },
            {
              category: ["line"],
              id: "line-smooth",
              tags: [],
              title: "Smoothed Line Chart",
              titleCN: "基础平滑折线图",
              difficulty: 0,
            },
            {
              category: ["pie"],
              id: "pie-simple",
              tags: [],
              title: "Referer of a website",
              titleCN: "某站点用户访问来源",
              difficulty: 0,
            },
            {
              category: ["radar"],
              id: "radar",
              tags: [],
              title: "Basic Radar Chart",
              titleCN: "基础雷达图",
              difficulty: 0,
            },
            {
              category: ["sankey"],
              id: "sankey-simple",
              tags: [],
              title: "Basic Sankey",
              titleCN: "基础桑基图",
              difficulty: 0,
            },
            {
              category: ["scatter"],
              id: "scatter-simple",
              tags: [],
              title: "Basic Scatter Chart",
              titleCN: "基础散点图",
              difficulty: 0,
            },
            {
              category: ["line"],
              id: "area-basic",
              tags: [],
              title: "Basic area chart",
              titleCN: "基础面积图",
              difficulty: 1,
            },
            {
              category: ["bar"],
              id: "bar-data-color",
              tags: [],
              title: "Set Style of Single Bar.",
              titleCN: "自定义单个柱子颜色",
              difficulty: 1,
            },
            {
              category: ["bar"],
              id: "bar-waterfall",
              tags: [],
              title: "Waterfall Chart",
              titleCN: "瀑布图（柱状图模拟）",
              difficulty: 1,
            },
            {
              category: ["calendar", "heatmap"],
              id: "calendar-heatmap",
              tags: [],
              title: "Calendar Heatmap",
              titleCN: "日历热力图",
              difficulty: 1,
            },
            {
              category: ["calendar", "heatmap"],
              id: "calendar-vertical",
              tags: [],
              title: "Calendar Heatmap Vertical",
              titleCN: "纵向日历图",
              difficulty: 1,
            },
            {
              category: ["candlestick"],
              id: "custom-ohlc",
              tags: [],
              title: "OHLC Chart",
              titleCN: "OHLC 图（使用自定义系列）",
              difficulty: 1,
            },
            {
              category: ["custom"],
              id: "custom-profit",
              tags: [],
              title: "Profit",
              titleCN: "利润分布直方图",
              difficulty: 1,
            },
            {
              category: ["dataset", "bar"],
              id: "dataset-encode0",
              tags: [],
              title: "Simple Encode",
              titleCN: "指定数据到坐标轴的映射",
              difficulty: 1,
            },
            {
              category: ["gauge"],
              id: "gauge",
              tags: [],
              title: "Gauge Basic chart",
              titleCN: "基础仪表盘",
              difficulty: 1,
            },
            {
              category: ["gauge"],
              id: "gauge-simple",
              tags: [],
              title: "Simple Gauge",
              titleCN: "带标签数字动画的基础仪表盘",
              difficulty: 1,
            },
            {
              category: ["graph"],
              id: "graph-force2",
              tags: [],
              title: "Force Layout",
              titleCN: "力引导布局",
              difficulty: 1,
            },
            {
              category: ["line"],
              id: "line-stack",
              tags: [],
              title: "Stacked Line Chart",
              titleCN: "折线图堆叠",
              difficulty: 1,
            },
            {
              category: ["parallel"],
              id: "parallel-simple",
              tags: [],
              title: "Basic Parallel",
              titleCN: "基础平行坐标",
              difficulty: 1,
            },
            {
              category: ["pie"],
              id: "pie-borderRadius",
              tags: [],
              title: "Doughnut Chart with Rounded Corner",
              titleCN: "圆角环形图",
              difficulty: 1,
            },
            {
              category: ["pie"],
              id: "pie-doughnut",
              tags: [],
              title: "Doughnut Chart",
              titleCN: "环形图",
              difficulty: 1,
            },
            {
              category: ["radar"],
              id: "radar-aqi",
              tags: [],
              title: "AQI - Radar Chart",
              titleCN: "AQI - 雷达图",
              difficulty: 1,
            },
            {
              category: ["sankey"],
              id: "sankey-vertical",
              tags: [],
              title: "Sankey Orient Vertical",
              titleCN: "垂直方向的桑基图",
              difficulty: 1,
            },
            {
              category: ["scatter"],
              id: "scatter-anscombe-quartet",
              tags: [],
              title: "Anscomb's quartet",
              titleCN: "Anscomb's quartet",
              difficulty: 1,
            },
            {
              category: ["scatter"],
              id: "scatter-clustering",
              tags: [],
              title: "Clustering Process",
              titleCN: "数据聚合",
              difficulty: 1,
            },
            {
              category: ["scatter"],
              id: "scatter-clustering-process",
              tags: [],
              title: "Clustering Process",
              titleCN: "聚合过程可视化",
              difficulty: 1,
            },
            {
              category: ["scatter"],
              id: "scatter-exponential-regression",
              tags: [],
              title: "Exponential Regression",
              titleCN: "指数回归（使用统计插件）",
              difficulty: 1,
            },
            {
              category: ["sunburst"],
              id: "sunburst-simple",
              tags: [],
              title: "Basic Sunburst",
              titleCN: "基础旭日图",
              difficulty: 1,
            },
            {
              category: ["line"],
              id: "area-stack",
              tags: [],
              title: "Stacked area chart",
              titleCN: "堆叠面积图",
              difficulty: 2,
            },
            {
              category: ["line"],
              id: "area-stack-gradient",
              tags: [],
              title: "Gradient Stacked area chart",
              titleCN: "渐变堆叠面积图",
              difficulty: 2,
            },
            {
              category: ["bar"],
              id: "bar-negative2",
              tags: [],
              title: "Bar Chart with Negative Value",
              titleCN: "交错正负轴标签",
              difficulty: 2,
            },
            {
              category: ["bar"],
              id: "bar-y-category",
              tags: [],
              title: "World Total Population",
              titleCN: "世界人口总量 - 条形图",
              difficulty: 2,
            },
            {
              category: ["calendar"],
              id: "calendar-horizontal",
              tags: [],
              title: "Calendar Heatmap Horizontal",
              titleCN: "横向日力图",
              difficulty: 2,
            },
            {
              category: ["candlestick"],
              id: "candlestick-sh",
              tags: [],
              title: "ShangHai Index",
              titleCN: "上证指数",
              difficulty: 2,
            },
            {
              category: ["custom", "dataZoom"],
              id: "custom-error-scatter",
              tags: [],
              title: "Error Scatter on Catesian",
              titleCN: "使用自定系列给散点图添加误差范围",
              difficulty: 2,
            },
            {
              category: ["scatter"],
              id: "effectScatter-map",
              tags: [],
              title: "Air Quality",
              titleCN: "全国主要城市空气质量",
              difficulty: 2,
            },
            {
              category: ["gauge"],
              id: "gauge-speed",
              tags: [],
              title: "Speed Gauge",
              titleCN: "速度仪表盘",
              difficulty: 2,
            },
            {
              category: ["graph"],
              id: "graph-grid",
              tags: [],
              title: "Graph on Cartesian",
              titleCN: "笛卡尔坐标系上的 Graph",
              difficulty: 2,
            },
            {
              category: ["graph"],
              id: "graph-simple",
              tags: [],
              title: "Simple Graph",
              titleCN: "Graph 简单示例",
              difficulty: 2,
            },
            {
              category: ["heatmap"],
              id: "heatmap-large",
              tags: [],
              title: "Heatmap - 2w data",
              titleCN: "热力图 - 2w 数据",
              difficulty: 2,
            },
            {
              category: ["heatmap"],
              id: "heatmap-large-piecewise",
              tags: [],
              title: "Heatmap - Discrete Mapping of Color",
              titleCN: "热力图 - 颜色的离散映射",
              difficulty: 2,
            },
            {
              category: ["line"],
              id: "line-marker",
              tags: [],
              title: "Temperature Change in the coming week",
              titleCN: "未来一周气温变化",
              difficulty: 2,
            },
            {
              category: ["parallel"],
              id: "parallel-aqi",
              tags: [],
              title: "Parallel Aqi",
              titleCN: "AQI 分布（平行坐标）",
              difficulty: 2,
            },
            {
              category: ["pie"],
              id: "pie-custom",
              tags: [],
              title: "Customized Pie",
              titleCN: "饼图自定义样式",
              difficulty: 2,
            },
            {
              category: ["pie"],
              id: "pie-pattern",
              tags: [],
              title: "Texture on Pie Chart",
              titleCN: "饼图纹理",
              difficulty: 2,
            },
            {
              category: ["pie"],
              id: "pie-roseType",
              tags: [],
              title: "Nightingale's Rose Diagram",
              titleCN: "南丁格尔玫瑰图",
              difficulty: 2,
            },
            {
              category: ["pie"],
              id: "pie-roseType-simple",
              tags: [],
              title: "Nightingale's Rose Diagram",
              titleCN: "基础南丁格尔玫瑰图",
              difficulty: 2,
            },
            {
              category: ["radar"],
              id: "radar-custom",
              tags: [],
              title: "Customized Radar Chart",
              titleCN: "自定义雷达图",
              difficulty: 2,
            },
            {
              category: ["sankey"],
              id: "sankey-itemstyle",
              tags: [],
              title: "Specify ItemStyle for Each Node in Sankey",
              titleCN: "桑基图节点自定义样式",
              difficulty: 2,
            },
            {
              category: ["sankey"],
              id: "sankey-levels",
              tags: [],
              title: "Sankey with Levels Setting",
              titleCN: "桑基图层级自定义样式",
              difficulty: 2,
            },
            {
              category: ["scatter"],
              id: "scatter-effect",
              tags: [],
              title: "Effect Scatter Chart",
              titleCN: "涟漪特效散点图",
              difficulty: 2,
            },
            {
              category: ["scatter"],
              id: "scatter-linear-regression",
              tags: [],
              title: "Linear Regression",
              titleCN: "线性回归（使用统计插件）",
              difficulty: 2,
            },
            {
              category: ["scatter"],
              id: "scatter-polynomial-regression",
              tags: [],
              title: "Polynomial Regression",
              titleCN: "多项式回归（使用统计插件）",
              difficulty: 2,
            },
            {
              category: ["sunburst"],
              id: "sunburst-borderRadius",
              tags: [],
              title: "Sunburst with Rounded Corner",
              titleCN: "圆角旭日图",
              difficulty: 2,
            },
            {
              category: ["sunburst"],
              id: "sunburst-label-rotate",
              tags: [],
              title: "Sunburst Label Rotate",
              titleCN: "旭日图标签旋转",
              difficulty: 2,
            },
            {
              category: ["line", "visualMap"],
              id: "area-pieces",
              tags: [],
              title: "Area Pieces",
              titleCN: "折线图区域高亮",
              difficulty: 3,
            },
            {
              category: ["bar"],
              id: "bar-gradient",
              tags: [],
              title: "Clickable Column Chart with Gradient",
              titleCN: "特性示例：渐变色 阴影 点击缩放",
              difficulty: 3,
            },
            {
              category: ["bar"],
              id: "bar-label-rotation",
              tags: [],
              title: "Bar Label Rotation",
              titleCN: "柱状图标签旋转",
              difficulty: 3,
            },
            {
              category: ["bar"],
              id: "bar-stack",
              tags: [],
              title: "Stacked Column Chart",
              titleCN: "堆叠柱状图",
              difficulty: 3,
            },
            {
              category: ["bar"],
              id: "bar-waterfall2",
              tags: [],
              title: "Waterfall Chart",
              titleCN: "阶梯瀑布图（柱状图模拟）",
              difficulty: 3,
            },
            {
              category: ["bar"],
              id: "bar-y-category-stack",
              tags: [],
              title: "Stacked Horizontal Bar",
              titleCN: "堆叠条形图",
              difficulty: 3,
            },
            {
              category: ["candlestick"],
              id: "candlestick-large",
              tags: [],
              title: "Large Scale Candlestick",
              titleCN: "大数据量K线图",
              difficulty: 3,
            },
            {
              category: ["custom"],
              id: "custom-bar-trend",
              tags: [],
              title: "Custom Bar Trend",
              titleCN: "使用自定义系列添加柱状图趋势",
              difficulty: 3,
            },
            {
              category: ["custom"],
              id: "custom-cartesian-polygon",
              tags: [],
              title: "Custom Cartesian Polygon",
              titleCN: "自定义多边形图",
              difficulty: 3,
            },
            {
              category: ["custom"],
              id: "custom-error-bar",
              tags: [],
              title: "Error Bar on Catesian",
              titleCN: "使用自定系列给柱状图添加误差范围",
              difficulty: 3,
            },
            {
              category: ["custom"],
              id: "custom-profile",
              tags: [],
              title: "Profile",
              titleCN: "性能分析图",
              difficulty: 3,
            },
            {
              category: ["custom"],
              id: "cycle-plot",
              tags: [],
              title: "Cycle Plot",
              titleCN: "Cycle Plot",
              difficulty: 3,
            },
            {
              category: ["line"],
              id: "data-transform-filter",
              tags: [],
              title: "Data Transform Fitler",
              titleCN: "数据过滤",
              difficulty: 3,
            },
            {
              category: ["dataset", "pie", "transform"],
              id: "data-transform-multiple-pie",
              tags: [],
              title: "Partition Data to Pies",
              titleCN: "分割数据到数个饼图",
              difficulty: 3,
            },
            {
              category: ["dataset", "pie"],
              id: "dataset-default",
              tags: [],
              title: "Default arrangement",
              titleCN: "默认 encode 设置",
              difficulty: 3,
            },
            {
              category: ["dataset"],
              id: "dataset-encode1",
              tags: [],
              title: "Encode and Matrix",
              titleCN: "指定数据到坐标轴的映射",
              difficulty: 3,
            },
            {
              category: ["gauge"],
              id: "gauge-progress",
              tags: [],
              title: "Grogress Gauge",
              titleCN: "进度仪表盘",
              difficulty: 3,
            },
            {
              category: ["gauge"],
              id: "gauge-stage",
              tags: [],
              title: "Stage Speed Gauge",
              titleCN: "阶段速度仪表盘",
              difficulty: 3,
            },
            {
              category: ["graph"],
              id: "graph-force",
              tags: [],
              title: "Force Layout",
              titleCN: "力引导布局",
              difficulty: 3,
            },
            {
              category: ["graph"],
              id: "graph-label-overlap",
              tags: [],
              title: "Hide Overlapped Label",
              titleCN: "关系图自动隐藏重叠标签",
              difficulty: 3,
            },
            {
              category: ["heatmap"],
              id: "heatmap-bmap",
              tags: ["bmap"],
              title: "Heatmap on Baidu Map Extension",
              titleCN: "热力图与百度地图扩展",
              difficulty: 3,
            },
            {
              category: ["heatmap"],
              id: "heatmap-map",
              tags: [],
              title: "Air Qulity",
              titleCN: "全国主要城市空气质量",
              difficulty: 3,
            },
            {
              category: ["line"],
              id: "line-gradient",
              tags: [],
              title: "Line Gradient",
              titleCN: "折线图的渐变",
              difficulty: 3,
            },
            {
              category: ["line"],
              id: "line-sections",
              tags: [],
              title: "Distribution of Electricity",
              titleCN: "一天用电量分布",
              difficulty: 3,
            },
            {
              category: ["pie"],
              id: "pie-alignTo",
              tags: [],
              title: "Pie Label Align",
              titleCN: "饼图标签对齐",
              difficulty: 3,
            },
            {
              category: ["pie"],
              id: "pie-labelLine-adjust",
              tags: [],
              title: "Label Line Adjust",
              titleCN: "饼图引导线调整",
              difficulty: 3,
            },
            {
              category: ["radar"],
              id: "radar2",
              tags: [],
              title: "Proportion of Browsers",
              titleCN: "浏览器占比变化",
              difficulty: 3,
            },
            {
              category: ["sankey"],
              id: "sankey-energy",
              tags: [],
              title: "Gradient Edge",
              titleCN: "桑基图渐变色边",
              difficulty: 3,
            },
            {
              category: ["sankey"],
              id: "sankey-nodeAlign-left",
              tags: [],
              title: "Node Align Left in Sankey",
              titleCN: "桑基图左对齐布局",
              difficulty: 3,
            },
            {
              category: ["sankey"],
              id: "sankey-nodeAlign-right",
              tags: [],
              title: "Node Align Right in Sankey",
              titleCN: "桑基图右对齐布局",
              difficulty: 3,
            },
            {
              category: ["scatter"],
              id: "scatter-punchCard",
              tags: [],
              title: "Punch Card of Github",
              titleCN: "GitHub 打卡气泡图",
              difficulty: 3,
            },
            {
              category: ["scatter"],
              id: "scatter-single-axis",
              tags: [],
              title: "Scatter on Single Axis",
              titleCN: "单轴散点图",
              difficulty: 3,
            },
            {
              category: ["scatter"],
              id: "scatter-weight",
              tags: [],
              title: "Distribution of Height and Weight",
              titleCN: "男性女性身高体重分布",
              difficulty: 3,
            },
            {
              category: ["sunburst"],
              id: "sunburst-monochrome",
              tags: [],
              title: "Monochrome Sunburst",
              titleCN: "Monochrome Sunburst",
              difficulty: 3,
            },
            {
              category: ["line", "dataZoom"],
              id: "area-simple",
              tags: [],
              title: "Large scale area chart",
              titleCN: "大数据量面积图",
              difficulty: 4,
            },
            {
              category: ["bar"],
              id: "bar-brush",
              tags: [],
              title: "Brush Select on Column Chart",
              titleCN: "柱状图框选",
              difficulty: 4,
            },
            {
              category: ["bar"],
              id: "bar-negative",
              tags: [],
              title: "Bar Chart with Negative Value",
              titleCN: "正负条形图",
              difficulty: 4,
            },
            {
              category: ["bar"],
              id: "bar1",
              tags: [],
              title: "Rainfall and Evaporation",
              titleCN: "某地区蒸发量和降水量",
              difficulty: 4,
            },
            {
              category: ["calendar", "graph"],
              id: "calendar-graph",
              tags: [],
              title: "Calendar Graph",
              titleCN: "日历关系图",
              difficulty: 4,
            },
            {
              category: ["calendar"],
              id: "calendar-lunar",
              tags: [],
              title: "Calendar Lunar",
              titleCN: "农历日历图",
              difficulty: 4,
            },
            {
              category: ["candlestick"],
              id: "candlestick-touch",
              tags: [],
              title: "Axis Pointer Link and Touch",
              titleCN: "触屏上的坐标轴指示器",
              difficulty: 4,
            },
            {
              category: ["line"],
              id: "confidence-band",
              tags: [],
              title: "Confidence Band",
              titleCN: "Confidence Band",
              difficulty: 4,
            },
            {
              category: ["custom", "dataZoom", "drag"],
              id: "custom-gantt-flight",
              tags: [],
              title: "Gantt Chart of Airport Flights",
              titleCN: "机场航班甘特图",
              difficulty: 4,
            },
            {
              category: ["custom"],
              id: "custom-polar-heatmap",
              tags: [],
              title: "Polar Heatmap",
              titleCN: "极坐标热力图（自定义系列）",
              difficulty: 4,
            },
            {
              category: ["boxplot"],
              id: "data-transform-aggregate",
              tags: [],
              title: "Data Transform Simple Aggregate",
              titleCN: "简单的数据聚合",
              difficulty: 4,
            },
            {
              category: ["gauge"],
              id: "gauge-grade",
              tags: [],
              title: "Grade Gauge",
              titleCN: "等级仪表盘",
              difficulty: 4,
            },
            {
              category: ["gauge"],
              id: "gauge-multi-title",
              tags: [],
              title: "Multi Title Gauge",
              titleCN: "多标题仪表盘",
              difficulty: 4,
            },
            {
              category: ["gauge"],
              id: "gauge-temperature",
              tags: [],
              title: "Temperature Gauge chart",
              titleCN: "气温仪表盘",
              difficulty: 4,
            },
            {
              category: ["graph"],
              id: "graph",
              tags: [],
              title: "Les Miserables",
              titleCN: "悲惨世界人物关系图",
              difficulty: 4,
            },
            {
              category: ["line"],
              id: "grid-multiple",
              tags: [],
              title: "Rainfall and Water Flow",
              titleCN: "雨量流量关系图",
              difficulty: 4,
            },
            {
              category: ["line"],
              id: "line-aqi",
              tags: [],
              title: "Beijing AQI",
              titleCN: "北京 AQI 可视化",
              difficulty: 4,
            },
            {
              category: ["bar"],
              id: "mix-line-bar",
              tags: [],
              title: "Mixed Line and Bar",
              titleCN: "折柱混合",
              difficulty: 4,
            },
            {
              category: ["bar"],
              id: "mix-zoom-on-value",
              tags: [],
              title: "Mix Zoom On Value",
              titleCN: "多数值轴轴缩放",
              difficulty: 4,
            },
            {
              category: ["line"],
              id: "multiple-x-axis",
              tags: [],
              title: "Multiple X Axes",
              titleCN: "多 X 轴",
              difficulty: 4,
            },
            {
              category: ["bar"],
              id: "multiple-y-axis",
              tags: [],
              title: "Multiple Y Axes",
              titleCN: "多 Y 轴示例",
              difficulty: 4,
            },
            {
              category: ["parallel"],
              id: "parallel-nutrients",
              tags: [],
              title: "Parallel Nutrients",
              titleCN: "营养结构（平行坐标）",
              difficulty: 4,
            },
            {
              category: ["pie"],
              id: "pie-legend",
              tags: [],
              title: "Pie with Scrollable Legend",
              titleCN: "可滚动的图例",
              difficulty: 4,
            },
            {
              category: ["pie", "rich"],
              id: "pie-rich-text",
              tags: [],
              title: "Pie Special Label",
              titleCN: "富文本标签",
              difficulty: 4,
            },
            {
              category: ["scatter"],
              id: "scatter-label-align-right",
              tags: [],
              title: "Align Label on the Top",
              titleCN: "散点图标签顶部对齐",
              difficulty: 4,
            },
            {
              category: ["scatter"],
              id: "scatter-label-align-top",
              tags: [],
              title: "Align Label on the Top",
              titleCN: "散点图标签顶部对齐",
              difficulty: 4,
            },
            {
              category: ["sunburst"],
              id: "sunburst-visualMap",
              tags: [],
              title: "Sunburst VisualMap",
              titleCN: "旭日图使用视觉编码",
              difficulty: 4,
            },
            {
              category: ["line"],
              id: "area-rainfall",
              tags: [],
              title: "Rainfall",
              titleCN: "雨量流量关系图",
              difficulty: 5,
            },
            {
              category: ["line"],
              id: "area-time-axis",
              tags: [],
              title: "Area Chart with Time Axis",
              titleCN: "时间轴折线图",
              difficulty: 5,
            },
            {
              category: ["bar"],
              id: "bar-animation-delay",
              tags: [],
              title: "Animation Delay",
              titleCN: "柱状图动画延迟",
              difficulty: 5,
            },
            {
              category: ["bar"],
              id: "bar-large",
              tags: [],
              title: "Large Scale Bar Chart",
              titleCN: "大数据量柱图",
              difficulty: 5,
            },
            {
              category: ["bar"],
              id: "bar-race",
              tags: [],
              title: "Bar Race",
              titleCN: "动态排序柱状图",
              difficulty: 5,
            },
            {
              category: ["dataset", "line", "pie"],
              id: "dataset-link",
              tags: [],
              title: "Share Dataset",
              titleCN: "联动和共享数据集",
              difficulty: 5,
            },
            {
              category: ["dataset", "bar"],
              id: "dataset-series-layout-by",
              tags: [],
              title: "Series Layout By Column or Row",
              titleCN: "系列按行和按列排布",
              difficulty: 5,
            },
            {
              category: ["dataset", "bar"],
              id: "dataset-simple0",
              tags: [],
              title: "Simple Example of Dataset",
              titleCN: "最简单的数据集（dataset）",
              difficulty: 5,
            },
            {
              category: ["dataset", "bar"],
              id: "dataset-simple1",
              tags: [],
              title: "Dataset in Object Array",
              titleCN: "对象数组的输入格式",
              difficulty: 5,
            },
            {
              category: ["line"],
              id: "dynamic-data2",
              tags: [],
              title: "Dynamic Data + Time Axis",
              titleCN: "动态数据 + 时间坐标轴",
              difficulty: 5,
            },
            {
              category: ["gauge"],
              id: "gauge-ring",
              tags: [],
              title: "Ring Gauge",
              titleCN: "得分环",
              difficulty: 5,
            },
            {
              category: ["graph"],
              id: "graph-circular-layout",
              tags: [],
              title: "Les Miserables",
              titleCN: "悲惨世界人物关系图(环形布局)",
              difficulty: 5,
            },
            {
              category: ["line"],
              id: "line-function",
              tags: [],
              title: "Function Plot",
              titleCN: "函数绘图",
              difficulty: 5,
            },
            {
              category: ["line"],
              id: "line-race",
              tags: [],
              title: "Line Race",
              titleCN: "动态排序折线图",
              difficulty: 5,
            },
            {
              category: ["pie", "rich"],
              id: "pie-nest",
              tags: [],
              title: "Nested Pies",
              titleCN: "嵌套环形图",
              difficulty: 5,
            },
            {
              category: ["scatter"],
              id: "scatter-large",
              tags: [],
              title: "Large Scatter",
              titleCN: "大规模散点图",
              difficulty: 5,
            },
            {
              category: ["scatter"],
              id: "scatter-nebula",
              tags: [],
              title: "Scatter Nebula",
              titleCN: "大规模星云散点图",
              difficulty: 5,
            },
            {
              category: ["scatter"],
              id: "scatter-stream-visual",
              tags: [],
              title: "Visual interaction with stream",
              titleCN: "流式渲染和视觉映射操作",
              difficulty: 5,
            },
            {
              category: ["sunburst"],
              id: "sunburst-drink",
              tags: [],
              title: "Drink Flavors",
              titleCN: "Drink Flavors",
              difficulty: 5,
            },
            {
              category: ["custom", "dataZoom"],
              id: "wind-barb",
              tags: [],
              title: "Wind Barb",
              titleCN: "风向图",
              difficulty: 5,
            },
            {
              category: ["bar", "rich"],
              id: "bar-rich-text",
              tags: [],
              title: "Wheater Statistics",
              titleCN: "天气统计（富文本）",
              difficulty: 6,
            },
            {
              category: ["scatter"],
              id: "bubble-gradient",
              tags: [],
              title: "Bubble Chart",
              titleCN: "气泡图",
              difficulty: 6,
            },
            {
              category: ["calendar", "pie"],
              id: "calendar-pie",
              tags: [],
              title: "Calendar Pie",
              titleCN: "日历饼图",
              difficulty: 6,
            },
            {
              category: ["custom", "map"],
              id: "custom-hexbin",
              tags: [],
              title: "Hexagonal Binning",
              titleCN: "六边形分箱图（自定义系列）",
              difficulty: 6,
            },
            {
              category: ["bar"],
              id: "dynamic-data",
              tags: [],
              title: "Dynamic Data",
              titleCN: "动态数据",
              difficulty: 6,
            },
            {
              category: ["gauge"],
              id: "gauge-barometer",
              tags: [],
              title: "Gauge Barometer chart",
              titleCN: "气压表",
              difficulty: 6,
            },
            {
              category: ["graph"],
              id: "graph-force-dynamic",
              tags: [],
              title: "Graph Dynamic",
              titleCN: "动态增加图节点",
              difficulty: 6,
            },
            {
              category: ["line"],
              id: "line-markline",
              tags: [],
              title: "Line with Marklines",
              titleCN: "折线图的标记线",
              difficulty: 6,
            },
            {
              category: ["line"],
              id: "line-style",
              tags: [],
              title: "Line Style and Item Style",
              titleCN: "自定义折线图样式",
              difficulty: 6,
            },
            {
              category: ["bar"],
              id: "mix-timeline-finance",
              tags: [],
              title: "Finance Indices 2002",
              titleCN: "2002全国宏观经济指标",
              difficulty: 6,
            },
            {
              category: ["sunburst"],
              id: "sunburst-book",
              tags: [],
              title: "Book Records",
              titleCN: "书籍分布",
              difficulty: 6,
            },
            {
              category: ["bar"],
              id: "watermark",
              tags: [],
              title: "Watermark - ECharts Download",
              titleCN: "水印 - ECharts 下载统计",
              difficulty: 6,
            },
            {
              category: ["bar"],
              id: "bar-polar-real-estate",
              tags: [],
              title: "Bar Chart on Polar",
              difficulty: 7,
            },
            {
              category: ["bar"],
              id: "bar-polar-stack",
              tags: [],
              title: "Stacked Bar Chart on Polar",
              titleCN: "极坐标系下的堆叠柱状图",
              difficulty: 7,
            },
            {
              category: ["bar"],
              id: "bar-polar-stack-radial",
              tags: [],
              title: "Stacked Bar Chart on Polar(Radial)",
              titleCN: "极坐标系下的堆叠柱状图",
              difficulty: 7,
            },
            {
              category: ["custom", "calendar"],
              id: "custom-calendar-icon",
              tags: [],
              title: "Custom Calendar Icon",
              titleCN: "日历图自定义图标",
              difficulty: 7,
            },
            {
              category: ["custom"],
              id: "custom-wind",
              tags: [],
              title: "Use custom series to draw wind vectors",
              titleCN: "使用自定义系列绘制风场",
              difficulty: 7,
            },
            {
              category: ["gauge"],
              id: "gauge-clock",
              tags: [],
              title: "Clock Gauge",
              titleCN: "时钟仪表盘",
              difficulty: 7,
            },
            {
              category: ["graph"],
              id: "graph-life-expectancy",
              tags: [],
              title: "Graph Life Expectancy",
              titleCN: "Graph Life Expectancy",
              difficulty: 7,
            },
            {
              category: ["line"],
              id: "line-in-cartesian-coordinate-system",
              tags: [],
              title: "Line Chart in Cartesian Coordinate System",
              titleCN: "双数值轴折线图",
              difficulty: 7,
            },
            {
              category: ["line"],
              id: "line-log",
              tags: [],
              title: "Log Axis",
              titleCN: "对数轴示例",
              difficulty: 7,
            },
            {
              category: ["line"],
              id: "line-step",
              tags: [],
              title: "Step Line",
              titleCN: "阶梯折线图",
              difficulty: 7,
            },
            {
              category: ["bar"],
              id: "polar-roundCap",
              tags: [],
              title: "Rounded Bar on Polar",
              titleCN: "圆角环形图",
              difficulty: 7,
            },
            {
              category: ["scatter"],
              id: "scatter-aqi-color",
              tags: [],
              title: "Scatter Aqi Color",
              titleCN: "AQI 气泡图",
              difficulty: 7,
            },
            {
              category: ["scatter"],
              id: "scatter-nutrients",
              tags: [],
              title: "Scatter Nutrients",
              titleCN: "营养分布散点图",
              difficulty: 7,
            },
            {
              category: ["scatter"],
              id: "scatter-nutrients-matrix",
              tags: [],
              title: "Scatter Nutrients Matrix",
              titleCN: "营养分布散点矩阵",
              difficulty: 7,
            },
            {
              category: ["gauge"],
              id: "gauge-car",
              tags: [],
              title: "Gauge Car",
              titleCN: "Gauge Car",
              difficulty: 8,
            },
            {
              category: ["graph"],
              id: "graph-webkit-dep",
              tags: [],
              title: "Graph Webkit Dep",
              titleCN: "WebKit 模块关系依赖图",
              difficulty: 8,
            },
            {
              category: ["line"],
              id: "line-easing",
              tags: [],
              title: "Line Easing Visualizing",
              titleCN: "缓动函数可视化",
              difficulty: 8,
            },
            {
              category: ["line"],
              id: "line-y-category",
              tags: [],
              title: "Line Y Category",
              titleCN: "垂直折线图（Y轴为类目轴）",
              difficulty: 8,
            },
            {
              category: ["scatter"],
              id: "scatter-polar-punchCard",
              tags: [],
              title: "Punch Card of Github",
              titleCN: "GitHub 打卡气泡图（极坐标）",
              difficulty: 8,
            },
            {
              category: ["custom"],
              id: "custom-gauge",
              tags: [],
              title: "Custom Gauge",
              titleCN: "自定义仪表",
              difficulty: 9,
            },
            {
              category: ["graph"],
              id: "graph-npm",
              tags: [],
              title: "NPM Dependencies",
              titleCN: "NPM 依赖关系图",
              difficulty: 9,
            },
            {
              category: ["line"],
              id: "line-graphic",
              tags: [],
              title: "Custom Graphic Component",
              titleCN: "自定义图形组件",
              difficulty: 9,
            },
            {
              category: ["line"],
              id: "line-pen",
              tags: [],
              title: "Click to Add Points",
              titleCN: "点击添加折线图拐点",
              difficulty: 9,
            },
            {
              category: ["scatter"],
              id: "scatter-life-expectancy-timeline",
              tags: [],
              title: "Life Expectancy and GDP",
              titleCN: "各国人均寿命与GDP关系演变",
              difficulty: 9,
            },
            {
              category: ["scatter"],
              id: "scatter-painter-choice",
              tags: [],
              title: "Master Painter Color Choices Throughout History",
              titleCN: "Master Painter Color Choices Throughout History",
              difficulty: 9,
            },
            {
              category: ["boxplot"],
              id: "boxplot-light-velocity",
              tags: [],
              title: "Boxplot Light Velocity",
              titleCN: "基础盒须图",
              difficulty: 10,
            },
            {
              category: ["boxplot"],
              id: "boxplot-light-velocity2",
              tags: [],
              title: "Boxplot Light Velocity2",
              titleCN: "垂直方向盒须图",
              difficulty: 10,
            },
            {
              category: ["boxplot"],
              id: "boxplot-multi",
              tags: [],
              title: "Multiple Categories",
              titleCN: "多系列盒须图",
              difficulty: 10,
            },
            {
              category: [],
              id: "calendar-effectscatter",
              tags: [],
              difficulty: 10,
            },
            {
              category: ["candlestick"],
              id: "candlestick-brush",
              tags: [],
              title: "Candlestick Brush",
              titleCN: "日力图刷选",
              difficulty: 10,
            },
            {
              category: ["candlestick"],
              id: "candlestick-sh-2015",
              tags: [],
              title: "ShangHai Index, 2015",
              titleCN: "2015 年上证指数",
              difficulty: 10,
            },
            { category: [], id: "covid-america", tags: [], difficulty: 10 },
            {
              category: ["scatter", "map"],
              id: "effectScatter-bmap",
              tags: ["bmap"],
              title: "Air Quality - Baidu Map",
              titleCN: "全国主要城市空气质量 - 百度地图",
              difficulty: 10,
            },
            {
              category: ["funnel"],
              id: "funnel",
              tags: [],
              title: "Funnel Chart",
              titleCN: "漏斗图",
              difficulty: 10,
            },
            {
              category: ["funnel"],
              id: "funnel-align",
              tags: [],
              title: "Funnel (align)",
              titleCN: "漏斗图(对比)",
              difficulty: 10,
            },
            {
              category: ["funnel"],
              id: "funnel-customize",
              tags: [],
              title: "Customized Funnel",
              titleCN: "漏斗图",
              difficulty: 10,
            },
            {
              category: ["funnel"],
              id: "funnel-mutiple",
              tags: [],
              title: "Multiple Funnels",
              titleCN: "漏斗图",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "geo-lines",
              tags: [],
              title: "Migration",
              titleCN: "模拟迁徙",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "geo-map-scatter",
              tags: [],
              title: "map and scatter share a geo",
              titleCN: "map and scatter share a geo",
              difficulty: 10,
            },
            {
              category: ["line", "drag"],
              id: "line-draggable",
              tags: [],
              title: "Try Dragging these Points",
              titleCN: "可拖拽点",
              difficulty: 10,
            },
            {
              category: ["line"],
              id: "line-polar",
              tags: [],
              title: "Two Value-Axes in Polar",
              titleCN: "极坐标双数值轴",
              difficulty: 10,
            },
            {
              category: ["line"],
              id: "line-polar2",
              tags: [],
              title: "Two Value-Axes in Polar",
              titleCN: "极坐标双数值轴",
              difficulty: 10,
            },
            {
              category: ["line", "dataZoom"],
              id: "line-tooltip-touch",
              tags: [],
              title: "Tooltip and DataZoom on Mobile",
              titleCN: "移动端上的 dataZoom 和 tooltip",
              difficulty: 10,
            },
            {
              category: ["map", "lines"],
              id: "lines-airline",
              tags: [],
              title: "65k+ Airline",
              titleCN: "65k+ 飞机航线",
              difficulty: 10,
            },
            {
              category: ["map", "lines"],
              id: "lines-bmap",
              tags: ["bmap"],
              title: "A Hiking Trail in Hangzhou - Baidu Map",
              titleCN: "杭州热门步行路线 - 百度地图",
              difficulty: 10,
            },
            {
              category: ["map", "lines"],
              id: "lines-bmap-bus",
              tags: ["bmap"],
              title: "Bus Lines of Beijing - Baidu Map",
              titleCN: "北京公交路线 - 百度地图",
              difficulty: 10,
            },
            {
              category: ["map", "lines"],
              id: "lines-bmap-effect",
              tags: ["bmap"],
              title: "Bus Lines of Beijing - Line Effect",
              titleCN: "北京公交路线 - 线特效",
              difficulty: 10,
            },
            {
              category: ["map", "lines"],
              id: "lines-ny",
              tags: [],
              title: "Use lines to draw 1 million ny streets.",
              titleCN: "使用线图绘制近 100 万的纽约街道数据",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "map-bin",
              tags: ["bmap"],
              title: "Binning on Map",
              titleCN: "Binning on Map",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "map-china",
              tags: [],
              title: "Map China",
              titleCN: "Map China",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "map-china-dataRange",
              tags: [],
              title: "Sales of iphone",
              titleCN: "iphone销量",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "map-HK",
              tags: [],
              title: "Population Density of HongKong (2011)",
              titleCN: "香港18区人口密度 （2011）",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "map-labels",
              tags: [],
              title: "Rich Text Labels on Map",
              titleCN: "地图上的富文本标签",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "map-locate",
              tags: [],
              title: "Map Locate",
              titleCN: "Map Locate",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "map-polygon",
              tags: ["bmap"],
              title: "Draw Polygon on Map",
              titleCN: "在地图上绘制多边形",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "map-province",
              tags: [],
              title: "Switch among 34 Provinces",
              titleCN: "34 省切换查看",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "map-usa",
              tags: [],
              title: "USA Population Estimates (2012)",
              titleCN: "USA Population Estimates (2012)",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "map-world",
              tags: [],
              title: "Map World",
              titleCN: "Map World",
              difficulty: 10,
            },
            {
              category: ["map"],
              id: "map-world-dataRange",
              tags: [],
              title: "World Population (2010)",
              titleCN: "World Population (2010)",
              difficulty: 10,
            },
            {
              category: ["pictorialBar"],
              id: "pictorialBar-body-fill",
              tags: [],
              title: "Water Content",
              titleCN: "人体含水量",
              difficulty: 10,
            },
            {
              category: ["pictorialBar"],
              id: "pictorialBar-dotted",
              tags: [],
              title: "Dotted bar",
              titleCN: "虚线柱状图效果",
              difficulty: 10,
            },
            {
              category: ["pictorialBar"],
              id: "pictorialBar-forest",
              tags: [],
              title: "Expansion of forest",
              titleCN: "森林的增长",
              difficulty: 10,
            },
            {
              category: ["pictorialBar"],
              id: "pictorialBar-hill",
              tags: [],
              title: "Wish List and Mountain Height",
              titleCN: "圣诞愿望清单和山峰高度",
              difficulty: 10,
            },
            {
              category: ["pictorialBar"],
              id: "pictorialBar-spirit",
              tags: [],
              title: "Spirits",
              titleCN: "精灵",
              difficulty: 10,
            },
            {
              category: ["pictorialBar"],
              id: "pictorialBar-vehicle",
              tags: [],
              title: "Vehicles",
              titleCN: "交通工具",
              difficulty: 10,
            },
            {
              category: ["pictorialBar"],
              id: "pictorialBar-velocity",
              tags: [],
              title: "Velocity of Christmas Reindeers",
              titleCN: "驯鹿的速度",
              difficulty: 10,
            },
            {
              category: ["radar"],
              id: "radar-multiple",
              tags: [],
              title: "Multiple Radar",
              titleCN: "多雷达图",
              difficulty: 10,
            },
            {
              category: ["scatter"],
              id: "scatter-map",
              tags: [],
              title: "Air Quality",
              titleCN: "全国主要城市空气质量",
              difficulty: 10,
            },
            {
              category: ["scatter"],
              id: "scatter-map-brush",
              tags: [],
              title: "Scatter Map Brush",
              titleCN: "Scatter Map Brush",
              difficulty: 10,
            },
            {
              category: ["parallel", "scatter"],
              id: "scatter-matrix",
              tags: [],
              title: "Scatter Matrix",
              titleCN: "散点矩阵和平行坐标",
              difficulty: 10,
            },
            {
              category: ["scatter"],
              id: "scatter-weibo",
              tags: [],
              title: "Sign in of weibo",
              titleCN: "微博签到数据点亮中国",
              difficulty: 10,
            },
            {
              category: ["scatter"],
              id: "scatter-world-population",
              tags: [],
              title: "World Population (2011)",
              titleCN: "World Population (2011)",
              difficulty: 10,
            },
            {
              category: ["themeRiver"],
              id: "themeRiver-basic",
              tags: [],
              title: "ThemeRiver",
              titleCN: "主题河流图",
              difficulty: 10,
            },
            {
              category: ["themeRiver"],
              id: "themeRiver-lastfm",
              tags: [],
              title: "ThemeRiver Lastfm",
              titleCN: "ThemeRiver Lastfm",
              difficulty: 10,
            },
            {
              category: ["tree"],
              id: "tree-basic",
              tags: [],
              title: "From Left to Right Tree",
              titleCN: "从左到右树状图",
              difficulty: 10,
            },
            {
              category: ["tree"],
              id: "tree-legend",
              tags: [],
              title: "Multiple Trees",
              titleCN: "多棵树",
              difficulty: 10,
            },
            {
              category: ["tree"],
              id: "tree-orient-bottom-top",
              tags: [],
              title: "From Bottom to Top Tree",
              titleCN: "从下到上树状图",
              difficulty: 10,
            },
            {
              category: ["tree"],
              id: "tree-orient-right-left",
              tags: [],
              title: "From Right to Left Tree",
              titleCN: "从右到左树状图",
              difficulty: 10,
            },
            {
              category: ["tree"],
              id: "tree-polyline",
              tags: [],
              title: "Tree with Polyline Edge",
              titleCN: "折线树图",
              difficulty: 10,
            },
            {
              category: ["tree"],
              id: "tree-radial",
              tags: [],
              title: "Radial Tree",
              titleCN: "径向树状图",
              difficulty: 10,
            },
            {
              category: ["tree"],
              id: "tree-vertical",
              tags: [],
              title: "From Top to Bottom Tree",
              titleCN: "从上到下树状图",
              difficulty: 10,
            },
            {
              category: ["treemap"],
              id: "treemap-disk",
              tags: [],
              title: "Disk Usage",
              titleCN: "磁盘占用",
              difficulty: 10,
            },
            {
              category: ["treemap"],
              id: "treemap-drill-down",
              tags: [],
              title: "ECharts Option Query",
              titleCN: "ECharts 配置项查询分布",
              difficulty: 10,
            },
            {
              category: ["treemap"],
              id: "treemap-obama",
              tags: [],
              title: "How $3.7 Trillion is Spent",
              titleCN: "How $3.7 Trillion is Spent",
              difficulty: 10,
            },
            {
              category: ["treemap"],
              id: "treemap-show-parent",
              tags: [],
              title: "Show Parent Labels",
              titleCN: "显示父层级标签",
              difficulty: 10,
            },
            {
              category: ["treemap"],
              id: "treemap-simple",
              tags: [],
              title: "Basic Treemap",
              titleCN: "基础矩形树图",
              difficulty: 10,
            },
            {
              category: ["treemap"],
              id: "treemap-visual",
              tags: [],
              title: "Gradient Mapping",
              titleCN: "映射为渐变色",
              difficulty: 10,
            },
            {
              category: ["calendar", "scatter"],
              id: "calendar-charts",
              tags: [],
              title: "Calendar Charts",
              titleCN: "日力图",
              difficulty: 11,
            },
            {
              category: ["custom"],
              id: "circle-packing-with-d3",
              tags: [],
              title: "Circle Packing with d3",
              titleCN: "Circle Packing with d3",
              difficulty: 11,
            },
            {
              category: ["custom"],
              id: "custom-combine-separate-morph",
              tags: [],
              title: "Combine-Separate Morphing",
              titleCN: "聚合分割形变",
              difficulty: 11,
            },
            {
              category: ["custom"],
              id: "custom-one-to-one-morph",
              tags: [],
              title: "One-to-one Morphing",
              titleCN: "一对一映射形变",
              difficulty: 11,
            },
            {
              category: ["custom"],
              id: "custom-spiral-race",
              tags: [],
              title: "Custom Spiral Race",
              titleCN: "自定义螺旋线竞速",
              difficulty: 11,
            },
            {
              category: ["custom"],
              id: "custom-story-transition",
              tags: [],
              title: "Simple Story Transition",
              titleCN: "极简场景变换示例",
              difficulty: 11,
            },
            {
              category: ["scatter"],
              id: "scatter-logarithmic-regression",
              tags: [],
              title: "Logarithmic Regression",
              titleCN: "对数回归（使用统计插件）",
              difficulty: 16,
            },
          ],
          Rt = [
            {
              category: ["globe"],
              id: "animating-contour-on-globe",
              tags: [],
              title: "Animating Contour on Globe",
              titleCN: "Animating Contour on Globe",
              difficulty: 10,
            },
            {
              category: ["bar3D"],
              id: "bar3d-dataset",
              tags: [],
              title: "3D Bar with Dataset",
              titleCN: "使用 dataset 为三维柱状图设置数据",
              difficulty: 10,
            },
            {
              category: ["bar3D"],
              id: "bar3d-global-population",
              tags: [],
              title: "Bar3D - Global Population",
              titleCN: "Bar3D - Global Population",
              difficulty: 10,
            },
            {
              category: ["bar3D"],
              id: "bar3d-myth",
              tags: [],
              title: "星云",
              titleCN: "星云",
              difficulty: 10,
            },
            {
              category: ["bar3D"],
              id: "bar3d-noise-modified-from-marpi-demo",
              tags: [],
              title: "Noise modified from marpi's demo",
              titleCN: "Noise modified from marpi's demo",
              difficulty: 10,
            },
            {
              category: ["bar3D"],
              id: "bar3d-punch-card",
              tags: [],
              title: "Bar3D - Punch Card",
              titleCN: "Bar3D - Punch Card",
              difficulty: 10,
            },
            {
              category: ["bar3D"],
              id: "bar3d-simplex-noise",
              tags: [],
              theme: "dark",
              title: "Bar3D - Simplex Noise",
              titleCN: "Bar3D - Simplex Noise",
              difficulty: 10,
            },
            {
              category: ["bar3D"],
              id: "bar3d-voxelize-image",
              tags: [],
              title: "Voxelize image",
              titleCN: "Voxelize image",
              difficulty: 10,
            },
            {
              category: ["flowGL"],
              id: "flowGL-noise",
              tags: [],
              theme: "dark",
              title: "Flow on the cartesian",
              titleCN: "直角坐标系上的向量场",
              difficulty: 10,
            },
            {
              category: ["geo3D"],
              id: "geo3d",
              tags: [],
              title: "Geo3D",
              titleCN: "Geo3D",
              difficulty: 10,
            },
            {
              category: ["geo3D"],
              id: "geo3d-with-different-height",
              tags: [],
              title: "Geo3D with Different Height",
              titleCN: "Geo3D with Different Height",
              difficulty: 10,
            },
            {
              category: ["bar3D"],
              id: "global-population-bar3d-on-globe",
              tags: [],
              title: "Global Population - Bar3D on Globe",
              titleCN: "Global Population - Bar3D on Globe",
              difficulty: 10,
            },
            {
              category: ["flowGL"],
              id: "global-wind-visualization",
              tags: [],
              title: "Global wind visualization",
              titleCN: "Global wind visualization",
              difficulty: 10,
            },
            {
              category: ["flowGL"],
              id: "global-wind-visualization-2",
              tags: [],
              title: "Global Wind Visualization 2",
              titleCN: "Global Wind Visualization 2",
              difficulty: 10,
            },
            {
              category: ["globe"],
              id: "globe-atmosphere",
              tags: [],
              title: "Globe with Atmosphere",
              titleCN: "大气层显示",
              difficulty: 10,
            },
            {
              category: ["globe"],
              id: "globe-contour-paint",
              tags: [],
              title: "Contour Paint",
              titleCN: "Contour Paint",
              difficulty: 10,
            },
            {
              category: ["globe"],
              id: "globe-country-carousel",
              tags: [],
              title: "Country Carousel",
              titleCN: "Country Carousel",
              difficulty: 10,
            },
            {
              category: ["globe"],
              id: "globe-displacement",
              tags: [],
              title: "Globe Displacement",
              titleCN: "Globe Displacement",
              difficulty: 10,
            },
            {
              category: ["globe"],
              id: "globe-echarts-gl-hello-world",
              tags: [],
              title: "ECharts-GL Hello World",
              titleCN: "ECharts-GL Hello World",
              difficulty: 10,
            },
            {
              category: ["globe"],
              id: "globe-layers",
              tags: [],
              title: "Globe Layers",
              titleCN: "Globe Layers",
              difficulty: 10,
            },
            {
              category: ["globe"],
              id: "globe-moon",
              tags: [],
              title: "Moon",
              titleCN: "Moon",
              difficulty: 10,
            },
            {
              category: ["globe"],
              id: "globe-with-echarts-surface",
              tags: [],
              title: "Globe with ECharts Surface",
              titleCN: "Globe with ECharts Surface",
              difficulty: 10,
            },
            {
              category: ["graphGL"],
              id: "graphgl-gpu-layout",
              tags: [],
              theme: "dark",
              title: "GraphGL GPU Layout",
              titleCN: "GraphGL GPU Layout",
              difficulty: 10,
            },
            {
              category: ["graphGL"],
              id: "graphgl-large-internet",
              tags: [],
              theme: "dark",
              title: "GraphGL - Large Internet",
              titleCN: "GraphGL - Large Internet",
              difficulty: 10,
            },
            {
              category: ["graphGL"],
              id: "graphgl-npm-dep",
              tags: [],
              theme: "dark",
              title: "NPM Dependencies with graphGL",
              titleCN: "1w 节点 2w7 边的NPM 依赖图",
              difficulty: 10,
            },
            {
              category: ["surface"],
              id: "image-surface-sushuang",
              tags: [],
              title: "Image Surface Sushuang",
              titleCN: "Image Surface Sushuang",
              difficulty: 10,
            },
            {
              category: ["bar3D"],
              id: "image-to-bar3d",
              tags: [],
              title: "Image to Bar3D",
              titleCN: "Image to Bar3D",
              difficulty: 10,
            },
            {
              category: ["globe"],
              id: "iron-globe",
              tags: [],
              title: "Iron globe",
              titleCN: "Iron globe",
              difficulty: 10,
            },
            {
              category: ["line3D"],
              id: "line3d-orthographic",
              tags: [],
              title: "三维折线图正交投影",
              titleCN: "三维折线图正交投影",
              difficulty: 10,
            },
            {
              category: ["lines3D"],
              id: "lines3d-airline-on-globe",
              tags: [],
              title: "Airline on Globe",
              titleCN: "Airline on Globe",
              difficulty: 10,
            },
            {
              category: ["lines3D"],
              id: "lines3d-flights",
              tags: [],
              title: "Flights",
              titleCN: "Flights",
              difficulty: 10,
            },
            {
              category: ["lines3D"],
              id: "lines3d-flights-gl",
              tags: [],
              title: "Flights GL",
              titleCN: "Flights GL",
              difficulty: 10,
            },
            {
              category: ["lines3D"],
              id: "lines3d-flights-on-geo3d",
              tags: [],
              title: "Flights on Geo3D",
              titleCN: "Flights on Geo3D",
              difficulty: 10,
            },
            {
              category: ["linesGL"],
              id: "linesGL-ny",
              tags: [],
              title: "Use linesGL to draw 1 million ny streets.",
              titleCN: "实时交互的纽约街道可视化",
              difficulty: 10,
            },
            {
              category: ["map3D"],
              id: "map3d-alcohol-consumption",
              tags: [],
              title: "Map3D - Alcohol Consumption",
              titleCN: "Map3D - Alcohol Consumption",
              difficulty: 10,
            },
            {
              category: ["map3D"],
              id: "map3d-buildings",
              tags: [],
              title: "Buildings",
              titleCN: "Buildings",
              difficulty: 10,
            },
            {
              category: ["map3D"],
              id: "map3d-wood-city",
              tags: [],
              title: "Wood City",
              titleCN: "Wood City",
              difficulty: 10,
            },
            {
              category: ["map3D"],
              id: "map3d-wood-map",
              tags: [],
              title: "木质世界地图",
              titleCN: "木质世界地图",
              difficulty: 10,
            },
            {
              category: ["bar3D"],
              id: "metal-bar3d",
              tags: [],
              title: "Metal Bar3D",
              titleCN: "Metal Bar3D",
              difficulty: 10,
            },
            {
              category: ["surface"],
              id: "metal-surface",
              tags: [],
              title: "Metal Surface",
              titleCN: "Metal Surface",
              difficulty: 10,
            },
            {
              category: ["surface"],
              id: "parametric-surface-rose",
              tags: [],
              title: "Parametric Surface Rose",
              titleCN: "Parametric Surface Rose",
              difficulty: 10,
            },
            {
              category: ["scatter3D"],
              id: "scatter3d",
              tags: [],
              theme: "dark",
              title: "Scatter3D",
              titleCN: "Scatter3D",
              difficulty: 10,
            },
            {
              category: ["scatter3D"],
              id: "scatter3D-dataset",
              tags: [],
              title: "3D Scatter with Dataset",
              titleCN: "使用 dataset 为三维散点图设置数据",
              difficulty: 10,
            },
            {
              category: ["scatter3D"],
              id: "scatter3d-globe-population",
              tags: [],
              title: "Scatter3D - Globe Population",
              titleCN: "Scatter3D - Globe Population",
              difficulty: 10,
            },
            {
              category: ["scatter3D"],
              id: "scatter3d-orthographic",
              tags: [],
              theme: "dark",
              title: "三维散点图正交投影",
              titleCN: "三维散点图正交投影",
              difficulty: 10,
            },
            {
              category: ["scatter3D"],
              id: "scatter3d-scatter",
              tags: [],
              title: "3D Scatter with Scatter Matrix",
              titleCN: "三维散点图和散点矩阵结合使用",
              difficulty: 10,
            },
            {
              category: ["scatter3D"],
              id: "scatter3d-simplex-noise",
              tags: [],
              theme: "dark",
              title: "Scatter3D - Simplex Noise",
              titleCN: "Scatter3D - Simplex Noise",
              difficulty: 10,
            },
            {
              category: ["scatterGL"],
              id: "scatterGL-gps",
              tags: [],
              title: "10 million Bulk GPS points",
              titleCN: "1 千万 GPS 点可视化",
              difficulty: 10,
            },
            {
              category: ["scatterGL"],
              id: "scattergl-weibo",
              tags: [],
              theme: "dark",
              title: "微博签到数据点亮中国",
              titleCN: "微博签到数据点亮中国",
              difficulty: 10,
            },
            {
              category: ["surface"],
              id: "simple-surface",
              tags: [],
              title: "Simple Surface",
              titleCN: "Simple Surface",
              difficulty: 10,
            },
            {
              category: ["surface"],
              id: "sphere-parametric-surface",
              tags: [],
              title: "Sphere Parametric Surface",
              titleCN: "Sphere Parametric Surface",
              difficulty: 10,
            },
            {
              category: ["bar3D"],
              id: "stacked-bar3d",
              tags: [],
              title: "Stacked Bar3D",
              titleCN: "Stacked Bar3D",
              difficulty: 10,
            },
            {
              category: ["surface"],
              id: "surface-breather",
              tags: [],
              title: "Breather",
              titleCN: "Breather",
              difficulty: 10,
            },
            {
              category: ["surface"],
              id: "surface-golden-rose",
              tags: [],
              title: "Golden Rose",
              titleCN: "Golden Rose",
              difficulty: 10,
            },
            {
              category: ["surface"],
              id: "surface-leather",
              tags: [],
              title: "皮革材质",
              titleCN: "皮革材质",
              difficulty: 10,
            },
            {
              category: ["surface"],
              id: "surface-mollusc-shell",
              tags: [],
              title: "Mollusc Shell",
              titleCN: "Mollusc Shell",
              difficulty: 10,
            },
            {
              category: ["surface"],
              id: "surface-theme-roses",
              tags: [],
              title: "Theme Roses",
              titleCN: "Theme Roses",
              difficulty: 10,
            },
            {
              category: ["surface"],
              id: "surface-wave",
              tags: [],
              title: "Surface Wave",
              titleCN: "Surface Wave",
              difficulty: 10,
            },
            {
              category: ["bar3D"],
              id: "transparent-bar3d",
              tags: [],
              title: "Transparent Bar3D",
              titleCN: "Transparent Bar3D",
              difficulty: 10,
            },
          ];
        var It =
          dt.code.indexOf("ROOT_PATH") >= 0
            ? "var ROOT_PATH = '".concat(dt.cdnRoot, "'")
            : "";
        function Bt(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return jt(t);
            })(t) ||
            (function (t) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return jt(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === i && t.constructor && (i = t.constructor.name),
                  "Map" === i || "Set" === i
                    ? Array.from(t)
                    : "Arguments" === i ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                    ? jt(t, e)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function jt(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
          return n;
        }
        function Gt(t) {
          return ot.c === t.id;
        }
        var $t = Ft.concat(Rt).find(Gt),
          zt = Rt.find(Gt);
        function Ut(t) {
          dt.enableDecal &&
            ((t.aria = t.aria || {}),
            (t.aria.decal = t.aria.decal || {}),
            (t.aria.decal.show = !0),
            (t.aria.show = t.aria.enabled = !0));
        }
        function Zt() {
          if ("undefined" == typeof echarts) {
            var t = $t && $t.tags.indexOf("bmap") >= 0;
            return (
              t &&
                ((window.HOST_TYPE = "2"),
                (window.BMap_loadScriptTime = new Date().getTime())),
              nt(
                [
                  ct.datGUIMinJS,
                  "local" in ot ? ct.localEChartsMinJS : ct.echartsMinJS,
                  ct.echartsDir + "/dist/extension/dataTool.js",
                  "/third-party/cdn.jsdelivr.net/npm/echarts@4.9.0/map/js/world.js",
                  ct.echartsStatMinJS,
                ].concat(
                  Bt(ot.gl ? [ct.echartsGLMinJS] : []),
                  Bt(
                    t
                      ? [
                          "https://api.map.baidu.com/getscript?v=2.0&ak=KOmVjPVUAey1G2E8zNhPiuQ6QiEmAwZu&services=&t=20200327103013",
                          ct.echartsDir + "/dist/extension/bmap.js",
                        ]
                      : []
                  )
                )
              ).then(function () {
                echarts.registerPreprocessor(Ut);
              })
            );
          }
          return Promise.resolve();
        }
        function Wt(t, e) {
          "warn" !== e && "error" !== e && (e = "info"),
            (dt.editorStatus.message = t),
            (dt.editorStatus.type = e);
        }
        var Vt = gt(
          {
            props: ["inEditor"],
            data: function () {
              return {
                shared: dt,
                debouncedTime: void 0,
                backgroundColor: "",
                autoRun: !0,
                loading: !1,
                isGL: zt,
              };
            },
            mounted: function () {
              var t = this;
              (this.loading = !0),
                Zt().then(function () {
                  (t.loading = !1), dt.runCode && t.run();
                }),
                Dt(this.$el, function () {
                  t.sandbox && t.sandbox.resize();
                });
            },
            computed: {
              editLink: function () {
                var t = ["c=" + ot.c];
                return (
                  ot.theme && t.push(["theme=" + ot.theme]),
                  ot.gl && t.push(["gl=" + ot.gl]),
                  "./editor.html?" + t.join("&")
                );
              },
            },
            watch: {
              "shared.runCode": function (t) {
                (!this.autoRun && this.sandbox) ||
                  (this.debouncedRun ? this.debouncedRun() : this.run());
              },
              "shared.renderer": function () {
                this.refreshAll();
              },
              "shared.darkMode": function () {
                this.refreshAll();
              },
              "shared.enableDecal": function () {
                this.refreshAll();
              },
              "shared.useDirtyRect": function () {
                this.refreshAll();
              },
            },
            methods: {
              run: function t() {
                var e = this;
                if ("undefined" != typeof echarts) {
                  this.sandbox ||
                    (this.sandbox = (function (t) {
                      var e,
                        i = {},
                        n = [],
                        a = [],
                        r = window.setTimeout,
                        o = window.setInterval;
                      function l(t, e) {
                        var i = r(t, e);
                        return a.push(i), i;
                      }
                      function s(t, e) {
                        var i = o(t, e);
                        return n.push(i), i;
                      }
                      var c,
                        d = [];
                      return {
                        resize: function () {
                          c && c.resize();
                        },
                        dispose: function () {
                          c && (c.dispose(), (c = null));
                        },
                        getDataURL: function () {
                          return c.getDataURL({
                            pixelRatio: 2,
                            excludeComponents: ["toolbox"],
                          });
                        },
                        getOption: function () {
                          return c.getOption();
                        },
                        run: function (r, o) {
                          if (!c) {
                            if (
                              ((c = echarts.init(r, o.darkMode ? "dark" : "", {
                                renderer: o.renderer,
                                useDirtyRect: o.useDirtyRect,
                              })),
                              o.useDirtyRect && "canvas" === o.renderer)
                            )
                              try {
                                !(function (t, e) {
                                  e = e || {};
                                  var i = t.painter;
                                  if (!i.getLayers)
                                    throw new Error(
                                      "Debug dirty rect can only been used on canvas renderer."
                                    );
                                  if (i.isSingleCanvas())
                                    throw new Error(
                                      "Debug dirty rect can only been used on zrender inited with container."
                                    );
                                  var n = document.createElement("div");
                                  (n.style.cssText =
                                    "\nposition:absolute;\nleft:0;\ntop:0;\nright:0;\nbottom:0;\npointer-events:none;\n"),
                                    (n.className =
                                      "ec-debug-dirty-rect-container");
                                  var a = [],
                                    r = t.dom;
                                  r.appendChild(n),
                                    "static" === getComputedStyle(r).position &&
                                      (r.style.position = "relative"),
                                    t.on("rendered", function () {
                                      if (i.getLayers) {
                                        var t = 0;
                                        i.eachBuiltinLayer(function (i) {
                                          if (i.debugGetPaintRects)
                                            for (
                                              var r = i.debugGetPaintRects(),
                                                o = 0;
                                              o < r.length;
                                              o++
                                            )
                                              a[t] ||
                                                ((a[t] = new vt(e.style)),
                                                n.appendChild(a[t].dom)),
                                                a[t].show(),
                                                a[t].update(r[o]),
                                                t++;
                                        });
                                        for (var r = t; r < a.length; r++)
                                          a[r].hide();
                                      }
                                    });
                                })(c.getZr(), { autoHideDelay: 500 });
                              } catch (t) {
                                console.error(t);
                              }
                            (p = (u = c).on),
                              (f = u.setOption),
                              (u.on = function (t) {
                                var e = p.apply(u, arguments);
                                return d.push(t), e;
                              }),
                              (u.setOption = function () {
                                var e = f.apply(this, arguments);
                                return t && t(u), e;
                              });
                          }
                          var u, p, f;
                          !(function () {
                            for (var t = 0; t < n.length; t++)
                              clearInterval(n[t]);
                            for (t = 0; t < a.length; t++) clearTimeout(a[t]);
                            (n = []), (a = []);
                          })(),
                            (function (t) {
                              d.forEach(function (e) {
                                t && t.off(e);
                              }),
                                (d.length = 0);
                            })(c),
                            (i.config = null);
                          var g = o.runCode,
                            h = new Function(
                              "myChart",
                              "app",
                              "setTimeout",
                              "setInterval",
                              "ROOT_PATH",
                              "var option;\n" + g + "\nreturn option;"
                            )(c, i, l, s, o.cdnRoot),
                            m = 0;
                          if (h && "object" === bt(h)) {
                            var C = +new Date();
                            c.setOption(h, !0), (m = +new Date() - C);
                          }
                          if (
                            (e &&
                              ($(e.domElement).remove(),
                              e.destroy(),
                              (e = null)),
                            i.config)
                          ) {
                            (e = new dat.GUI({ autoPlace: !1 })),
                              $(e.domElement).css({
                                position: "absolute",
                                right: 5,
                                top: 0,
                                zIndex: 1e3,
                              }),
                              $(".right-container").append(e.domElement);
                            var y = i.configParameters || {};
                            for (var v in i.config) {
                              var b = i.config[v];
                              if ("onChange" !== v && "onFinishChange" !== v) {
                                var _ = !1,
                                  L = null;
                                if (
                                  (y[v] &&
                                    (y[v].options
                                      ? (L = e.add(i.config, v, y[v].options))
                                      : null != y[v].min &&
                                        (L = e.add(
                                          i.config,
                                          v,
                                          y[v].min,
                                          y[v].max
                                        ))),
                                  "string" == typeof obj)
                                )
                                  try {
                                    var w = echarts.color.parse(b);
                                    (_ = !!w) &&
                                      (b = echarts.color.stringify(w, "rgba"));
                                  } catch (t) {}
                                L ||
                                  (L = e[_ ? "addColor" : "add"](i.config, v)),
                                  i.config.onChange &&
                                    L.onChange(i.config.onChange),
                                  i.config.onFinishChange &&
                                    L.onFinishChange(i.config.onFinishChange);
                              }
                            }
                          }
                          return m;
                        },
                      };
                    })(function (t) {
                      var i = t.getOption();
                      "string" == typeof i.backgroundColor &&
                      "transparent" !== i.backgroundColor
                        ? (e.backgroundColor = i.backgroundColor)
                        : (e.backgroundColor = "#fff");
                    }));
                  try {
                    var i = this.sandbox.run(
                      this.$el.querySelector("#chart-panel"),
                      dt
                    );
                    Wt(this.$t("editor.chartOK") + i + "ms");
                    for (
                      var n = [0, 500, 2e3, 5e3, 1e4], a = n.length - 1;
                      a >= 0;
                      a--
                    ) {
                      var r = n[a + 1] || 1e6;
                      if (i >= n[a] && this.debouncedTime !== r) {
                        (this.debouncedRun = Lt()(t, r, { trailing: !0 })),
                          (this.debouncedTime = r);
                        break;
                      }
                    }
                    dt.runHash = ft++;
                  } catch (t) {
                    Wt(this.$t("editor.errorInEditor"), "error"),
                      console.error(t);
                  }
                }
              },
              refreshAll: function () {
                this.dispose(), this.run();
              },
              dispose: function () {
                this.sandbox && this.sandbox.dispose();
              },
              downloadExample: function () {
                !(function () {
                  var t =
                      '<!DOCTYPE html>\n<html style="height: 100%">\n    <head>\n        <meta charset="utf-8">\n    </head>\n    <body style="height: 100%; margin: 0">\n        <div id="container" style="height: 100%"></div>\n\n        <script type="text/javascript" src="'
                        .concat(
                          ct.echartsMinJS,
                          '"></script>\n        \x3c!-- Uncomment this line if you want to dataTool extension\n        <script type="text/javascript" src="'
                        )
                        .concat(
                          ct.echartsDir,
                          '/dist/extension/dataTool.min.js"></script>\n        --\x3e\n        \x3c!-- Uncomment this line if you want to use gl extension\n        <script type="text/javascript" src="'
                        )
                        .concat(
                          ct.echartsGLMinJS,
                          '"></script>\n        --\x3e\n        \x3c!-- Uncomment this line if you want to echarts-stat extension\n        <script type="text/javascript" src="'
                        )
                        .concat(
                          ct.echartsStatMinJS,
                          '"></script>\n        --\x3e\n        \x3c!-- Uncomment this line if you want to use map\n        <script type="text/javascript" src="'
                        )
                        .concat(
                          ct.echartsDir,
                          '/map/js/china.js"></script>\n        <script type="text/javascript" src="'
                        )
                        .concat(
                          ct.echartsDir,
                          '/map/js/world.js"></script>\n        --\x3e\n        \x3c!-- Uncomment these two lines if you want to use bmap extension\n        <script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=<Your Key Here>"></script>\n        <script type="text/javascript" src="'
                        )
                        .concat(
                          ct.echartsDir,
                          '/dist/extension/bmap.min.js"></script>\n        --\x3e\n\n        <script type="text/javascript">\nvar dom = document.getElementById("container");\nvar myChart = echarts.init(dom);\nvar app = {};\n\nvar option;\n\n'
                        )
                        .concat(It, "\n\n")
                        .concat(
                          dt.code,
                          "\n\nif (option && typeof option === 'object') {\n    myChart.setOption(option);\n}\n\n        </script>\n    </body>\n</html>\n    "
                        ),
                    e = new Blob([t], {
                      type: "text/html;charset=UTF-8",
                      encoding: "UTF-8",
                    }),
                    i = document.createElement("a");
                  (i.href = URL.createObjectURL(e)),
                    (i.download = ot.c + ".html"),
                    i.click();
                })();
              },
              screenshot: function () {
                if (this.sandbox) {
                  var t = this.sandbox.getDataURL(),
                    e = document.createElement("a");
                  (e.download =
                    ot.c + "." + ("svg" === dt.renderer ? "svg" : "png")),
                    (e.target = "_blank"),
                    (e.href = t);
                  var i = new MouseEvent("click", {
                    bubbles: !0,
                    cancelable: !1,
                  });
                  e.dispatchEvent(i);
                }
              },
              getOption: function () {
                return this.sandbox && this.sandbox.getOption();
              },
            },
          },
          yt,
          [],
          !1,
          null,
          null,
          null
        );
        Vt.options.__file = "src/editor/Preview.vue";
        const Ht = Vt.exports;
        var qt = gt(
          {
            props: ["initialCode"],
            data: function () {
              return { shared: dt, loading: !1 };
            },
            mounted: function () {
              var t = this;
              (this.loading = !0),
                Zt()
                  .then(function () {
                    return "undefined" == typeof monaco
                      ? nt([
                          ct.monacoDir + "/loader.js",
                          dt.cdnRoot + "/js/example-transform-ts-bundle.js",
                        ]).then(function () {
                          return (
                            window.require.config({
                              paths: { vs: ct.monacoDir },
                            }),
                            new Promise(function (t) {
                              window.require(
                                ["vs/editor/editor.main"],
                                function () {
                                  fetch(dt.cdnRoot + "/types/echarts.d.ts", {
                                    mode: "cors",
                                  })
                                    .then(function (t) {
                                      return t.text();
                                    })
                                    .then(function (t) {
                                      monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(
                                        {
                                          noSemanticValidation: !1,
                                          noSyntaxValidation: !1,
                                        }
                                      ),
                                        monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
                                          {
                                            target:
                                              monaco.languages.typescript
                                                .ScriptTarget.ES6,
                                            allowNonTsExtensions: !0,
                                            noResolve: !1,
                                          }
                                        ),
                                        monaco.languages.typescript.typescriptDefaults.addExtraLib(
                                          t,
                                          "file:///node_modules/@types/echarts/index.d.ts"
                                        ),
                                        monaco.languages.typescript.typescriptDefaults.addExtraLib(
                                          "import {init, EChartsOption} from 'echarts';\n// Declare to global namespace.\ndeclare global {\ndeclare const $: any;\ndeclare const ROOT_PATH: string;\ndeclare const app: {\n    configParameters: {\n        [key: string]: ({\n            options: { [key: string]: string\n        }) | ({\n            min?: number\n            max?: number\n        })\n    }\n    config: {\n        onChange: () => void\n        [key: string]: string | number | function\n    }\n    [key: string]: any\n};\ndeclare const myChart: ReturnType<typeof init>;\ndeclare var option: EChartsOption;\n}\n",
                                          "file:///example.d.ts"
                                        );
                                    })
                                    .then(function () {
                                      t();
                                    });
                                }
                              );
                            })
                          );
                        })
                      : Promise.resolve();
                  })
                  .then(function () {
                    t.loading = !1;
                    var e = monaco.editor.createModel(
                        t.initialCode || "",
                        "typescript",
                        monaco.Uri.parse("file:///main.ts")
                      ),
                      i = monaco.editor.create(t.$el, {
                        model: e,
                        fontFamily:
                          "'Source Code Pro', 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace",
                        minimap: { enabled: !1 },
                        automaticLayout: !0,
                      });
                    (t._editor = i),
                      t.initialCode &&
                        ((dt.sourceCode = t.initialCode),
                        (dt.runCode = echartsExampleTransformTs(
                          dt.sourceCode
                        ))),
                      i.onDidChangeModelContent(function () {
                        (dt.sourceCode = i.getValue()),
                          (dt.runCode = echartsExampleTransformTs(
                            dt.sourceCode
                          ));
                      });
                  });
            },
            destroyed: function () {
              this._editor &&
                (this._editor.getModel().dispose(), this._editor.dispose());
            },
            methods: {
              setInitialCode: function (t) {
                this._editor && t && this._editor.setValue(t || "");
              },
            },
            watch: {
              initialCode: function (t) {
                this.setInitialCode(t);
              },
            },
          },
          Ct,
          [],
          !1,
          null,
          null,
          null
        );
        qt.options.__file = "src/editor/CodeMonaco.vue";
        const Kt = qt.exports;
        var Jt = function () {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("div", {
            directives: [
              {
                name: "loading",
                rawName: "v-loading",
                value: t.loading,
                expression: "loading",
              },
            ],
            staticClass: "full-code-preview",
          });
        };
        Jt._withStripped = !0;
        var Qt = gt(
          {
            props: ["code"],
            data: function () {
              return { shared: dt, loading: !1 };
            },
            mounted: function () {
              var t = this;
              (this.loading = !0),
                ("undefined" == typeof ace
                  ? nt([ct.aceDir + "/ace.js"])
                  : Promise.resolve()
                ).then(function () {
                  t.loading = !1;
                  var e = ace.edit(t.$el);
                  e.getSession().setMode("ace/mode/javascript"),
                    e.setOptions({
                      readOnly: !0,
                      showLineNumbers: !1,
                      showFoldWidgets: !1,
                      highlightActiveLine: !1,
                      highlightGutterLine: !1,
                    }),
                    (e.renderer.$cursorLayer.element.style.display = "none"),
                    (t._editor = e),
                    t.setCode(t.code);
                });
            },
            methods: {
              setCode: function (t) {
                this._editor &&
                  (this._editor.setValue(t),
                  this._editor.selection.setSelectionRange({
                    start: { row: 1, column: 4 },
                    end: { row: 1, column: 4 },
                  }));
              },
            },
            watch: {
              code: function (t) {
                this.setCode(t);
              },
            },
          },
          Jt,
          [],
          !1,
          null,
          null,
          null
        );
        Qt.options.__file = "src/editor/FullCodePreview.vue";
        const Yt = Qt.exports;
        var Xt = i(913);
        function te(t, e) {
          const i = Object.create(null),
            n = t.split(",");
          for (let t = 0; t < n.length; t++) i[n[t]] = !0;
          return e ? (t) => !!i[t.toLowerCase()] : (t) => !!i[t];
        }
        const ee = te(
            "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl"
          ),
          ie = te(
            "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
          );
        function ne(t) {
          if (_e(t)) {
            const e = {};
            for (let i = 0; i < t.length; i++) {
              const n = t[i],
                a = ne(ke(n) ? oe(n) : n);
              if (a) for (const t in a) e[t] = a[t];
            }
            return e;
          }
          if (Ne(t)) return t;
        }
        const ae = /;(?![^(]*\))/g,
          re = /:(.+)/;
        function oe(t) {
          const e = {};
          return (
            t.split(ae).forEach((t) => {
              if (t) {
                const i = t.split(re);
                i.length > 1 && (e[i[0].trim()] = i[1].trim());
              }
            }),
            e
          );
        }
        function le(t) {
          let e = "";
          if (ke(t)) e = t;
          else if (_e(t))
            for (let i = 0; i < t.length; i++) e += le(t[i]) + " ";
          else if (Ne(t)) for (const i in t) t[i] && (e += i + " ");
          return e.trim();
        }
        const se = (t) =>
            null == t ? "" : Ne(t) ? JSON.stringify(t, ce, 2) : String(t),
          ce = (t, e) =>
            Le(e)
              ? {
                  [`Map(${e.size})`]: [...e.entries()].reduce(
                    (t, [e, i]) => ((t[`${e} =>`] = i), t),
                    {}
                  ),
                }
              : we(e)
              ? { [`Set(${e.size})`]: [...e.values()] }
              : !Ne(e) || _e(e) || Oe(e)
              ? e
              : String(e),
          de = {},
          ue = [],
          pe = () => {},
          fe = () => !1,
          ge = /^on[^a-z]/,
          he = (t) => ge.test(t),
          me = (t) => t.startsWith("onUpdate:"),
          Ce = Object.assign,
          ye = (t, e) => {
            const i = t.indexOf(e);
            i > -1 && t.splice(i, 1);
          },
          ve = Object.prototype.hasOwnProperty,
          be = (t, e) => ve.call(t, e),
          _e = Array.isArray,
          Le = (t) => "[object Map]" === De(t),
          we = (t) => "[object Set]" === De(t),
          xe = (t) => "function" == typeof t,
          ke = (t) => "string" == typeof t,
          Se = (t) => "symbol" == typeof t,
          Ne = (t) => null !== t && "object" == typeof t,
          Me = (t) => Ne(t) && xe(t.then) && xe(t.catch),
          Te = Object.prototype.toString,
          De = (t) => Te.call(t),
          Oe = (t) => "[object Object]" === De(t),
          Ae = (t) =>
            ke(t) && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t,
          Ee = te(
            ",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
          ),
          Pe = (t) => {
            const e = Object.create(null);
            return (i) => e[i] || (e[i] = t(i));
          },
          Fe = /-(\w)/g,
          Re = Pe((t) => t.replace(Fe, (t, e) => (e ? e.toUpperCase() : ""))),
          Ie = /\B([A-Z])/g,
          Be = Pe((t) => t.replace(Ie, "-$1").toLowerCase()),
          je = Pe((t) => t.charAt(0).toUpperCase() + t.slice(1)),
          Ge = Pe((t) => (t ? `on${je(t)}` : "")),
          $e = (t, e) => t !== e && (t == t || e == e),
          ze = (t, e) => {
            for (let i = 0; i < t.length; i++) t[i](e);
          },
          Ue = (t, e, i) => {
            Object.defineProperty(t, e, {
              configurable: !0,
              enumerable: !1,
              value: i,
            });
          },
          Ze = (t) => {
            const e = parseFloat(t);
            return isNaN(e) ? t : e;
          };
        let We;
        const Ve = () =>
            We ||
            (We =
              "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : void 0 !== i.g
                ? i.g
                : {}),
          He = new WeakMap(),
          qe = [];
        let Ke;
        const Je = Symbol(""),
          Qe = Symbol("");
        function Ye(t, e = de) {
          (function (t) {
            return t && !0 === t._isEffect;
          })(t) && (t = t.raw);
          const i = (function (t, e) {
            const i = function () {
              if (!i.active) return e.scheduler ? void 0 : t();
              if (!qe.includes(i)) {
                ei(i);
                try {
                  return ni.push(ii), (ii = !0), qe.push(i), (Ke = i), t();
                } finally {
                  qe.pop(), ri(), (Ke = qe[qe.length - 1]);
                }
              }
            };
            return (
              (i.id = ti++),
              (i.allowRecurse = !!e.allowRecurse),
              (i._isEffect = !0),
              (i.active = !0),
              (i.raw = t),
              (i.deps = []),
              (i.options = e),
              i
            );
          })(t, e);
          return e.lazy || i(), i;
        }
        function Xe(t) {
          t.active &&
            (ei(t), t.options.onStop && t.options.onStop(), (t.active = !1));
        }
        let ti = 0;
        function ei(t) {
          const { deps: e } = t;
          if (e.length) {
            for (let i = 0; i < e.length; i++) e[i].delete(t);
            e.length = 0;
          }
        }
        let ii = !0;
        const ni = [];
        function ai() {
          ni.push(ii), (ii = !1);
        }
        function ri() {
          const t = ni.pop();
          ii = void 0 === t || t;
        }
        function oi(t, e, i) {
          if (!ii || void 0 === Ke) return;
          let n = He.get(t);
          n || He.set(t, (n = new Map()));
          let a = n.get(i);
          a || n.set(i, (a = new Set())),
            a.has(Ke) || (a.add(Ke), Ke.deps.push(a));
        }
        function li(t, e, i, n, a, r) {
          const o = He.get(t);
          if (!o) return;
          const l = new Set(),
            s = (t) => {
              t &&
                t.forEach((t) => {
                  (t !== Ke || t.allowRecurse) && l.add(t);
                });
            };
          if ("clear" === e) o.forEach(s);
          else if ("length" === i && _e(t))
            o.forEach((t, e) => {
              ("length" === e || e >= n) && s(t);
            });
          else
            switch ((void 0 !== i && s(o.get(i)), e)) {
              case "add":
                _e(t)
                  ? Ae(i) && s(o.get("length"))
                  : (s(o.get(Je)), Le(t) && s(o.get(Qe)));
                break;
              case "delete":
                _e(t) || (s(o.get(Je)), Le(t) && s(o.get(Qe)));
                break;
              case "set":
                Le(t) && s(o.get(Je));
            }
          l.forEach((t) => {
            t.options.scheduler ? t.options.scheduler(t) : t();
          });
        }
        const si = new Set(
            Object.getOwnPropertyNames(Symbol)
              .map((t) => Symbol[t])
              .filter(Se)
          ),
          ci = gi(),
          di = gi(!1, !0),
          ui = gi(!0),
          pi = gi(!0, !0),
          fi = {};
        function gi(t = !1, e = !1) {
          return function (i, n, a) {
            if ("__v_isReactive" === n) return !t;
            if ("__v_isReadonly" === n) return t;
            if ("__v_raw" === n && a === (t ? $i : Gi).get(i)) return i;
            const r = _e(i);
            if (!t && r && be(fi, n)) return Reflect.get(fi, n, a);
            const o = Reflect.get(i, n, a);
            return (Se(n) ? si.has(n) : "__proto__" === n || "__v_isRef" === n)
              ? o
              : (t || oi(i, 0, n),
                e
                  ? o
                  : Ji(o)
                  ? r && Ae(n)
                    ? o
                    : o.value
                  : Ne(o)
                  ? t
                    ? Ui(o)
                    : zi(o)
                  : o);
          };
        }
        function hi(t = !1) {
          return function (e, i, n, a) {
            const r = e[i];
            if (!t && ((n = qi(n)), !_e(e) && Ji(r) && !Ji(n)))
              return (r.value = n), !0;
            const o = _e(e) && Ae(i) ? Number(i) < e.length : be(e, i),
              l = Reflect.set(e, i, n, a);
            return (
              e === qi(a) &&
                (o ? $e(n, r) && li(e, "set", i, n) : li(e, "add", i, n)),
              l
            );
          };
        }
        ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
          const e = Array.prototype[t];
          fi[t] = function (...t) {
            const i = qi(this);
            for (let t = 0, e = this.length; t < e; t++) oi(i, 0, t + "");
            const n = e.apply(i, t);
            return -1 === n || !1 === n ? e.apply(i, t.map(qi)) : n;
          };
        }),
          ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
            const e = Array.prototype[t];
            fi[t] = function (...t) {
              ai();
              const i = e.apply(this, t);
              return ri(), i;
            };
          });
        const mi = {
            get: ci,
            set: hi(),
            deleteProperty: function (t, e) {
              const i = be(t, e),
                n = (t[e], Reflect.deleteProperty(t, e));
              return n && i && li(t, "delete", e, void 0), n;
            },
            has: function (t, e) {
              const i = Reflect.has(t, e);
              return (Se(e) && si.has(e)) || oi(t, 0, e), i;
            },
            ownKeys: function (t) {
              return oi(t, 0, _e(t) ? "length" : Je), Reflect.ownKeys(t);
            },
          },
          Ci = { get: ui, set: (t, e) => !0, deleteProperty: (t, e) => !0 },
          yi = Ce({}, mi, { get: di, set: hi(!0) }),
          vi = (Ce({}, Ci, { get: pi }), (t) => (Ne(t) ? zi(t) : t)),
          bi = (t) => (Ne(t) ? Ui(t) : t),
          _i = (t) => t,
          Li = (t) => Reflect.getPrototypeOf(t);
        function wi(t, e, i = !1, n = !1) {
          const a = qi((t = t.__v_raw)),
            r = qi(e);
          e !== r && !i && oi(a, 0, e), !i && oi(a, 0, r);
          const { has: o } = Li(a),
            l = i ? bi : n ? _i : vi;
          return o.call(a, e)
            ? l(t.get(e))
            : o.call(a, r)
            ? l(t.get(r))
            : void 0;
        }
        function xi(t, e = !1) {
          const i = this.__v_raw,
            n = qi(i),
            a = qi(t);
          return (
            t !== a && !e && oi(n, 0, t),
            !e && oi(n, 0, a),
            t === a ? i.has(t) : i.has(t) || i.has(a)
          );
        }
        function ki(t, e = !1) {
          return (
            (t = t.__v_raw), !e && oi(qi(t), 0, Je), Reflect.get(t, "size", t)
          );
        }
        function Si(t) {
          t = qi(t);
          const e = qi(this),
            i = Li(e).has.call(e, t);
          return e.add(t), i || li(e, "add", t, t), this;
        }
        function Ni(t, e) {
          e = qi(e);
          const i = qi(this),
            { has: n, get: a } = Li(i);
          let r = n.call(i, t);
          r || ((t = qi(t)), (r = n.call(i, t)));
          const o = a.call(i, t);
          return (
            i.set(t, e),
            r ? $e(e, o) && li(i, "set", t, e) : li(i, "add", t, e),
            this
          );
        }
        function Mi(t) {
          const e = qi(this),
            { has: i, get: n } = Li(e);
          let a = i.call(e, t);
          a || ((t = qi(t)), (a = i.call(e, t))), n && n.call(e, t);
          const r = e.delete(t);
          return a && li(e, "delete", t, void 0), r;
        }
        function Ti() {
          const t = qi(this),
            e = 0 !== t.size,
            i = t.clear();
          return e && li(t, "clear", void 0, void 0), i;
        }
        function Di(t, e) {
          return function (i, n) {
            const a = this,
              r = a.__v_raw,
              o = qi(r),
              l = t ? bi : e ? _i : vi;
            return (
              !t && oi(o, 0, Je), r.forEach((t, e) => i.call(n, l(t), l(e), a))
            );
          };
        }
        function Oi(t, e, i) {
          return function (...n) {
            const a = this.__v_raw,
              r = qi(a),
              o = Le(r),
              l = "entries" === t || (t === Symbol.iterator && o),
              s = "keys" === t && o,
              c = a[t](...n),
              d = e ? bi : i ? _i : vi;
            return (
              !e && oi(r, 0, s ? Qe : Je),
              {
                next() {
                  const { value: t, done: e } = c.next();
                  return e
                    ? { value: t, done: e }
                    : { value: l ? [d(t[0]), d(t[1])] : d(t), done: e };
                },
                [Symbol.iterator]() {
                  return this;
                },
              }
            );
          };
        }
        function Ai(t) {
          return function (...e) {
            return "delete" !== t && this;
          };
        }
        const Ei = {
            get(t) {
              return wi(this, t);
            },
            get size() {
              return ki(this);
            },
            has: xi,
            add: Si,
            set: Ni,
            delete: Mi,
            clear: Ti,
            forEach: Di(!1, !1),
          },
          Pi = {
            get(t) {
              return wi(this, t, !1, !0);
            },
            get size() {
              return ki(this);
            },
            has: xi,
            add: Si,
            set: Ni,
            delete: Mi,
            clear: Ti,
            forEach: Di(!1, !0),
          },
          Fi = {
            get(t) {
              return wi(this, t, !0);
            },
            get size() {
              return ki(this, !0);
            },
            has(t) {
              return xi.call(this, t, !0);
            },
            add: Ai("add"),
            set: Ai("set"),
            delete: Ai("delete"),
            clear: Ai("clear"),
            forEach: Di(!0, !1),
          };
        function Ri(t, e) {
          const i = e ? Pi : t ? Fi : Ei;
          return (e, n, a) =>
            "__v_isReactive" === n
              ? !t
              : "__v_isReadonly" === n
              ? t
              : "__v_raw" === n
              ? e
              : Reflect.get(be(i, n) && n in e ? i : e, n, a);
        }
        ["keys", "values", "entries", Symbol.iterator].forEach((t) => {
          (Ei[t] = Oi(t, !1, !1)),
            (Fi[t] = Oi(t, !0, !1)),
            (Pi[t] = Oi(t, !1, !0));
        });
        const Ii = { get: Ri(!1, !1) },
          Bi = { get: Ri(!1, !0) },
          ji = { get: Ri(!0, !1) },
          Gi = new WeakMap(),
          $i = new WeakMap();
        function zi(t) {
          return t && t.__v_isReadonly ? t : Zi(t, !1, mi, Ii);
        }
        function Ui(t) {
          return Zi(t, !0, Ci, ji);
        }
        function Zi(t, e, i, n) {
          if (!Ne(t)) return t;
          if (t.__v_raw && (!e || !t.__v_isReactive)) return t;
          const a = e ? $i : Gi,
            r = a.get(t);
          if (r) return r;
          const o = (function (t) {
            return t.__v_skip || !Object.isExtensible(t)
              ? 0
              : (function (t) {
                  switch (t) {
                    case "Object":
                    case "Array":
                      return 1;
                    case "Map":
                    case "Set":
                    case "WeakMap":
                    case "WeakSet":
                      return 2;
                    default:
                      return 0;
                  }
                })(((t) => De(t).slice(8, -1))(t));
          })(t);
          if (0 === o) return t;
          const l = new Proxy(t, 2 === o ? n : i);
          return a.set(t, l), l;
        }
        function Wi(t) {
          return Vi(t) ? Wi(t.__v_raw) : !(!t || !t.__v_isReactive);
        }
        function Vi(t) {
          return !(!t || !t.__v_isReadonly);
        }
        function Hi(t) {
          return Wi(t) || Vi(t);
        }
        function qi(t) {
          return (t && qi(t.__v_raw)) || t;
        }
        const Ki = (t) => (Ne(t) ? zi(t) : t);
        function Ji(t) {
          return Boolean(t && !0 === t.__v_isRef);
        }
        function Qi(t) {
          return (function (t, e = !1) {
            return Ji(t) ? t : new Yi(t, e);
          })(t);
        }
        class Yi {
          constructor(t, e = !1) {
            (this._rawValue = t),
              (this._shallow = e),
              (this.__v_isRef = !0),
              (this._value = e ? t : Ki(t));
          }
          get value() {
            return oi(qi(this), 0, "value"), this._value;
          }
          set value(t) {
            $e(qi(t), this._rawValue) &&
              ((this._rawValue = t),
              (this._value = this._shallow ? t : Ki(t)),
              li(qi(this), "set", "value", t));
          }
        }
        const Xi = {
          get: (t, e, i) =>
            (function (t) {
              return Ji(t) ? t.value : t;
            })(Reflect.get(t, e, i)),
          set: (t, e, i, n) => {
            const a = t[e];
            return Ji(a) && !Ji(i)
              ? ((a.value = i), !0)
              : Reflect.set(t, e, i, n);
          },
        };
        function tn(t) {
          return Wi(t) ? t : new Proxy(t, Xi);
        }
        class en {
          constructor(t, e) {
            (this._object = t), (this._key = e), (this.__v_isRef = !0);
          }
          get value() {
            return this._object[this._key];
          }
          set value(t) {
            this._object[this._key] = t;
          }
        }
        class nn {
          constructor(t, e, i) {
            (this._setter = e),
              (this._dirty = !0),
              (this.__v_isRef = !0),
              (this.effect = Ye(t, {
                lazy: !0,
                scheduler: () => {
                  this._dirty ||
                    ((this._dirty = !0), li(qi(this), "set", "value"));
                },
              })),
              (this.__v_isReadonly = i);
          }
          get value() {
            return (
              this._dirty &&
                ((this._value = this.effect()), (this._dirty = !1)),
              oi(qi(this), 0, "value"),
              this._value
            );
          }
          set value(t) {
            this._setter(t);
          }
        }
        function an(t, e, i, n) {
          let a;
          try {
            a = n ? t(...n) : t();
          } catch (t) {
            on(t, e, i);
          }
          return a;
        }
        function rn(t, e, i, n) {
          if (xe(t)) {
            const a = an(t, e, i, n);
            return (
              a &&
                Me(a) &&
                a.catch((t) => {
                  on(t, e, i);
                }),
              a
            );
          }
          const a = [];
          for (let r = 0; r < t.length; r++) a.push(rn(t[r], e, i, n));
          return a;
        }
        function on(t, e, i, n = !0) {
          if ((e && e.vnode, e)) {
            let n = e.parent;
            const a = e.proxy,
              r = i;
            for (; n; ) {
              const e = n.ec;
              if (e)
                for (let i = 0; i < e.length; i++)
                  if (!1 === e[i](t, a, r)) return;
              n = n.parent;
            }
            const o = e.appContext.config.errorHandler;
            if (o) return void an(o, null, 10, [t, a, r]);
          }
          !(function (t, e, i, n = !0) {
            console.error(t);
          })(t, 0, 0, n);
        }
        let ln = !1,
          sn = !1;
        const cn = [];
        let dn = 0;
        const un = [];
        let pn = null,
          fn = 0;
        const gn = [];
        let hn = null,
          mn = 0;
        const Cn = Promise.resolve();
        let yn = null,
          vn = null;
        function bn(t) {
          const e = yn || Cn;
          return t ? e.then(this ? t.bind(this) : t) : e;
        }
        function _n(t) {
          (cn.length && cn.includes(t, ln && t.allowRecurse ? dn + 1 : dn)) ||
            t === vn ||
            (cn.push(t), Ln());
        }
        function Ln() {
          ln || sn || ((sn = !0), (yn = Cn.then(Nn)));
        }
        function wn(t, e, i, n) {
          _e(t)
            ? i.push(...t)
            : (e && e.includes(t, t.allowRecurse ? n + 1 : n)) || i.push(t),
            Ln();
        }
        function xn(t, e = null) {
          if (un.length) {
            for (
              vn = e, pn = [...new Set(un)], un.length = 0, fn = 0;
              fn < pn.length;
              fn++
            )
              pn[fn]();
            (pn = null), (fn = 0), (vn = null), xn(t, e);
          }
        }
        function kn(t) {
          if (gn.length) {
            const t = [...new Set(gn)];
            if (((gn.length = 0), hn)) return void hn.push(...t);
            for (
              hn = t, hn.sort((t, e) => Sn(t) - Sn(e)), mn = 0;
              mn < hn.length;
              mn++
            )
              hn[mn]();
            (hn = null), (mn = 0);
          }
        }
        const Sn = (t) => (null == t.id ? 1 / 0 : t.id);
        function Nn(t) {
          (sn = !1), (ln = !0), xn(t), cn.sort((t, e) => Sn(t) - Sn(e));
          try {
            for (dn = 0; dn < cn.length; dn++) {
              const t = cn[dn];
              t && an(t, null, 14);
            }
          } finally {
            (dn = 0),
              (cn.length = 0),
              kn(),
              (ln = !1),
              (yn = null),
              (cn.length || gn.length) && Nn(t);
          }
        }
        function Mn(t, e, ...i) {
          const n = t.vnode.props || de;
          let a = i;
          const r = e.startsWith("update:"),
            o = r && e.slice(7);
          if (o && o in n) {
            const t = `${"modelValue" === o ? "model" : o}Modifiers`,
              { number: e, trim: r } = n[t] || de;
            r ? (a = i.map((t) => t.trim())) : e && (a = i.map(Ze));
          }
          __VUE_PROD_DEVTOOLS__;
          let l = Ge(Re(e)),
            s = n[l];
          !s && r && ((l = Ge(Be(e))), (s = n[l])), s && rn(s, t, 6, a);
          const c = n[l + "Once"];
          if (c) {
            if (t.emitted) {
              if (t.emitted[l]) return;
            } else (t.emitted = {})[l] = !0;
            rn(c, t, 6, a);
          }
        }
        function Tn(t, e, i = !1) {
          if (!e.deopt && void 0 !== t.__emits) return t.__emits;
          const n = t.emits;
          let a = {},
            r = !1;
          if (__VUE_OPTIONS_API__ && !xe(t)) {
            const n = (t) => {
              (r = !0), Ce(a, Tn(t, e, !0));
            };
            !i && e.mixins.length && e.mixins.forEach(n),
              t.extends && n(t.extends),
              t.mixins && t.mixins.forEach(n);
          }
          return n || r
            ? (_e(n) ? n.forEach((t) => (a[t] = null)) : Ce(a, n),
              (t.__emits = a))
            : (t.__emits = null);
        }
        function Dn(t, e) {
          return (
            !(!t || !he(e)) &&
            ((e = e.slice(2).replace(/Once$/, "")),
            be(t, e[0].toLowerCase() + e.slice(1)) || be(t, Be(e)) || be(t, e))
          );
        }
        let On = null;
        function An(t) {
          On = t;
        }
        function En(t) {
          const {
            type: e,
            vnode: i,
            proxy: n,
            withProxy: a,
            props: r,
            propsOptions: [o],
            slots: l,
            attrs: s,
            emit: c,
            render: d,
            renderCache: u,
            data: p,
            setupState: f,
            ctx: g,
          } = t;
          let h;
          On = t;
          try {
            let t;
            if (4 & i.shapeFlag) {
              const e = a || n;
              (h = qa(d.call(e, e, u, r, f, p, g))), (t = s);
            } else {
              const i = e;
              (h = qa(
                i.length > 1
                  ? i(r, { attrs: s, slots: l, emit: c })
                  : i(r, null)
              )),
                (t = e.props ? s : Pn(s));
            }
            let m = h;
            if (!1 !== e.inheritAttrs && t) {
              const e = Object.keys(t),
                { shapeFlag: i } = m;
              e.length &&
                (1 & i || 6 & i) &&
                (o && e.some(me) && (t = Fn(t, o)), (m = Wa(m, t)));
            }
            i.dirs && (m.dirs = m.dirs ? m.dirs.concat(i.dirs) : i.dirs),
              i.transition && (m.transition = i.transition),
              (h = m);
          } catch (e) {
            on(e, t, 1), (h = Za(Aa));
          }
          return (On = null), h;
        }
        const Pn = (t) => {
            let e;
            for (const i in t)
              ("class" === i || "style" === i || he(i)) &&
                ((e || (e = {}))[i] = t[i]);
            return e;
          },
          Fn = (t, e) => {
            const i = {};
            for (const n in t) (me(n) && n.slice(9) in e) || (i[n] = t[n]);
            return i;
          };
        function Rn(t, e, i) {
          const n = Object.keys(e);
          if (n.length !== Object.keys(t).length) return !0;
          for (let a = 0; a < n.length; a++) {
            const r = n[a];
            if (e[r] !== t[r] && !Dn(i, r)) return !0;
          }
          return !1;
        }
        function In(t) {
          return (
            xe(t) && (t = t()),
            _e(t) &&
              (t = (function (t) {
                let e;
                for (let i = 0; i < t.length; i++) {
                  const n = t[i];
                  if (!ja(n)) return;
                  if (n.type !== Aa || "v-if" === n.children) {
                    if (e) return;
                    e = n;
                  }
                }
                return e;
              })(t)),
            qa(t)
          );
        }
        let Bn = 0;
        const jn = (t) => (Bn += t);
        function Gn(t, e, i, n) {
          const [a, r] = t.propsOptions;
          if (e)
            for (const r in e) {
              const o = e[r];
              if (Ee(r)) continue;
              let l;
              a && be(a, (l = Re(r)))
                ? (i[l] = o)
                : Dn(t.emitsOptions, r) || (n[r] = o);
            }
          if (r) {
            const e = qi(i);
            for (let n = 0; n < r.length; n++) {
              const o = r[n];
              i[o] = $n(a, e, o, e[o], t);
            }
          }
        }
        function $n(t, e, i, n, a) {
          const r = t[i];
          if (null != r) {
            const t = be(r, "default");
            if (t && void 0 === n) {
              const t = r.default;
              r.type !== Function && xe(t)
                ? (gr(a), (n = t(e)), gr(null))
                : (n = t);
            }
            r[0] &&
              (be(e, i) || t
                ? !r[1] || ("" !== n && n !== Be(i)) || (n = !0)
                : (n = !1));
          }
          return n;
        }
        function zn(t, e, i = !1) {
          if (!e.deopt && t.__props) return t.__props;
          const n = t.props,
            a = {},
            r = [];
          let o = !1;
          if (__VUE_OPTIONS_API__ && !xe(t)) {
            const n = (t) => {
              o = !0;
              const [i, n] = zn(t, e, !0);
              Ce(a, i), n && r.push(...n);
            };
            !i && e.mixins.length && e.mixins.forEach(n),
              t.extends && n(t.extends),
              t.mixins && t.mixins.forEach(n);
          }
          if (!n && !o) return (t.__props = ue);
          if (_e(n))
            for (let t = 0; t < n.length; t++) {
              const e = Re(n[t]);
              Un(e) && (a[e] = de);
            }
          else if (n)
            for (const t in n) {
              const e = Re(t);
              if (Un(e)) {
                const i = n[t],
                  o = (a[e] = _e(i) || xe(i) ? { type: i } : i);
                if (o) {
                  const t = Vn(Boolean, o.type),
                    i = Vn(String, o.type);
                  (o[0] = t > -1),
                    (o[1] = i < 0 || t < i),
                    (t > -1 || be(o, "default")) && r.push(e);
                }
              }
            }
          return (t.__props = [a, r]);
        }
        function Un(t) {
          return "$" !== t[0];
        }
        function Zn(t) {
          const e = t && t.toString().match(/^\s*function (\w+)/);
          return e ? e[1] : "";
        }
        function Wn(t, e) {
          return Zn(t) === Zn(e);
        }
        function Vn(t, e) {
          if (_e(e)) {
            for (let i = 0, n = e.length; i < n; i++) if (Wn(e[i], t)) return i;
          } else if (xe(e)) return Wn(e, t) ? 0 : -1;
          return -1;
        }
        function Hn(t, e, i = fr, n = !1) {
          if (i) {
            const a = i[t] || (i[t] = []),
              r =
                e.__weh ||
                (e.__weh = (...n) => {
                  if (i.isUnmounted) return;
                  ai(), gr(i);
                  const a = rn(e, i, t, n);
                  return gr(null), ri(), a;
                });
            return n ? a.unshift(r) : a.push(r), r;
          }
        }
        const qn =
            (t) =>
            (e, i = fr) =>
              !hr && Hn(t, e, i),
          Kn = qn("bm"),
          Jn = qn("m"),
          Qn = qn("bu"),
          Yn = qn("u"),
          Xn = qn("bum"),
          ta = qn("um"),
          ea = qn("rtg"),
          ia = qn("rtc"),
          na = {};
        function aa(t, e, i) {
          return ra(t, e, i);
        }
        function ra(
          t,
          e,
          { immediate: i, deep: n, flush: a, onTrack: r, onTrigger: o } = de,
          l = fr
        ) {
          let s,
            c,
            d = !1;
          if (
            (Ji(t)
              ? ((s = () => t.value), (d = !!t._shallow))
              : Wi(t)
              ? ((s = () => t), (n = !0))
              : (s = _e(t)
                  ? () =>
                      t.map((t) =>
                        Ji(t)
                          ? t.value
                          : Wi(t)
                          ? la(t)
                          : xe(t)
                          ? an(t, l, 2)
                          : void 0
                      )
                  : xe(t)
                  ? e
                    ? () => an(t, l, 2)
                    : () => {
                        if (!l || !l.isUnmounted)
                          return c && c(), an(t, l, 3, [u]);
                      }
                  : pe),
            e && n)
          ) {
            const t = s;
            s = () => la(t());
          }
          const u = (t) => {
            c = h.options.onStop = () => {
              an(t, l, 4);
            };
          };
          let p = _e(t) ? [] : na;
          const f = () => {
            if (h.active)
              if (e) {
                const t = h();
                (n || d || $e(t, p)) &&
                  (c && c(),
                  rn(e, l, 3, [t, p === na ? void 0 : p, u]),
                  (p = t));
              } else h();
          };
          let g;
          (f.allowRecurse = !!e),
            (g =
              "sync" === a
                ? f
                : "post" === a
                ? () => La(f, l && l.suspense)
                : () => {
                    !l || l.isMounted
                      ? (function (t) {
                          wn(t, pn, un, fn);
                        })(f)
                      : f();
                  });
          const h = Ye(s, { lazy: !0, onTrack: r, onTrigger: o, scheduler: g });
          return (
            yr(h, l),
            e
              ? i
                ? f()
                : (p = h())
              : "post" === a
              ? La(h, l && l.suspense)
              : h(),
            () => {
              Xe(h), l && ye(l.effects, h);
            }
          );
        }
        function oa(t, e, i) {
          const n = this.proxy;
          return ra(ke(t) ? () => n[t] : t.bind(n), e.bind(n), i, this);
        }
        function la(t, e = new Set()) {
          if (!Ne(t) || e.has(t)) return t;
          if ((e.add(t), Ji(t))) la(t.value, e);
          else if (_e(t)) for (let i = 0; i < t.length; i++) la(t[i], e);
          else if (we(t) || Le(t))
            t.forEach((t) => {
              la(t, e);
            });
          else for (const i in t) la(t[i], e);
          return t;
        }
        const sa = (t) => t.type.__isKeepAlive;
        function ca(t, e, i = fr) {
          const n =
            t.__wdc ||
            (t.__wdc = () => {
              let e = i;
              for (; e; ) {
                if (e.isDeactivated) return;
                e = e.parent;
              }
              t();
            });
          if ((Hn(e, n, i), i)) {
            let t = i.parent;
            for (; t && t.parent; )
              sa(t.parent.vnode) && da(n, e, i, t), (t = t.parent);
          }
        }
        function da(t, e, i, n) {
          const a = Hn(e, t, n, !0);
          ta(() => {
            ye(n[e], a);
          }, i);
        }
        const ua = (t) => "_" === t[0] || "$stable" === t,
          pa = (t) => (_e(t) ? t.map(qa) : [qa(t)]),
          fa = (t, e, i) =>
            (function (t, e = On) {
              if (!e) return t;
              const i = (...i) => {
                Bn || Ra(!0);
                const n = On;
                An(e);
                const a = t(...i);
                return An(n), Bn || Ia(), a;
              };
              return (i._c = !0), i;
            })((t) => pa(e(t)), i),
          ga = (t, e) => {
            const i = t._ctx;
            for (const n in t) {
              if (ua(n)) continue;
              const a = t[n];
              if (xe(a)) e[n] = fa(0, a, i);
              else if (null != a) {
                const t = pa(a);
                e[n] = () => t;
              }
            }
          },
          ha = (t, e) => {
            const i = pa(e);
            t.slots.default = () => i;
          };
        function ma(t, e) {
          if (null === On) return t;
          const i = On.proxy,
            n = t.dirs || (t.dirs = []);
          for (let t = 0; t < e.length; t++) {
            let [a, r, o, l = de] = e[t];
            xe(a) && (a = { mounted: a, updated: a }),
              n.push({
                dir: a,
                instance: i,
                value: r,
                oldValue: void 0,
                arg: o,
                modifiers: l,
              });
          }
          return t;
        }
        function Ca(t, e, i, n) {
          const a = t.dirs,
            r = e && e.dirs;
          for (let o = 0; o < a.length; o++) {
            const l = a[o];
            r && (l.oldValue = r[o].value);
            const s = l.dir[n];
            s && rn(s, i, 8, [t.el, l, t, e]);
          }
        }
        function ya() {
          return {
            app: null,
            config: {
              isNativeTag: fe,
              performance: !1,
              globalProperties: {},
              optionMergeStrategies: {},
              isCustomElement: fe,
              errorHandler: void 0,
              warnHandler: void 0,
            },
            mixins: [],
            components: {},
            directives: {},
            provides: Object.create(null),
          };
        }
        let va = 0;
        function ba(t, e) {
          return function (i, n = null) {
            null == n || Ne(n) || (n = null);
            const a = ya(),
              r = new Set();
            let o = !1;
            const l = (a.app = {
              _uid: va++,
              _component: i,
              _props: n,
              _container: null,
              _context: a,
              version: _r,
              get config() {
                return a.config;
              },
              set config(t) {},
              use: (t, ...e) => (
                r.has(t) ||
                  (t && xe(t.install)
                    ? (r.add(t), t.install(l, ...e))
                    : xe(t) && (r.add(t), t(l, ...e))),
                l
              ),
              mixin: (t) => (
                __VUE_OPTIONS_API__ &&
                  (a.mixins.includes(t) ||
                    (a.mixins.push(t), (t.props || t.emits) && (a.deopt = !0))),
                l
              ),
              component: (t, e) =>
                e ? ((a.components[t] = e), l) : a.components[t],
              directive: (t, e) =>
                e ? ((a.directives[t] = e), l) : a.directives[t],
              mount(r, s) {
                if (!o) {
                  const c = Za(i, n);
                  return (
                    (c.appContext = a),
                    s && e ? e(c, r) : t(c, r),
                    (o = !0),
                    (l._container = r),
                    (r.__vue_app__ = l),
                    __VUE_PROD_DEVTOOLS__,
                    c.component.proxy
                  );
                }
              },
              unmount() {
                o && (t(null, l._container), __VUE_PROD_DEVTOOLS__);
              },
              provide: (t, e) => ((a.provides[t] = e), l),
            });
            return l;
          };
        }
        const _a = { scheduler: _n, allowRecurse: !0 },
          La = function (t, e) {
            e && e.pendingBranch
              ? _e(t)
                ? e.effects.push(...t)
                : e.effects.push(t)
              : wn(t, hn, gn, mn);
          },
          wa = (t, e, i, n) => {
            if (_e(t))
              return void t.forEach((t, a) =>
                wa(t, e && (_e(e) ? e[a] : e), i, n)
              );
            let a;
            a =
              !n || n.type.__asyncLoader
                ? null
                : 4 & n.shapeFlag
                ? n.component.exposed || n.component.proxy
                : n.el;
            const { i: r, r: o } = t,
              l = e && e.r,
              s = r.refs === de ? (r.refs = {}) : r.refs,
              c = r.setupState;
            if (
              (null != l &&
                l !== o &&
                (ke(l)
                  ? ((s[l] = null), be(c, l) && (c[l] = null))
                  : Ji(l) && (l.value = null)),
              ke(o))
            ) {
              const t = () => {
                (s[o] = a), be(c, o) && (c[o] = a);
              };
              a ? ((t.id = -1), La(t, i)) : t();
            } else if (Ji(o)) {
              const t = () => {
                o.value = a;
              };
              a ? ((t.id = -1), La(t, i)) : t();
            } else xe(o) && an(o, r, 12, [a, s]);
          };
        function xa(t, e, i, n = null) {
          rn(t, e, 7, [i, n]);
        }
        function ka(t, e, i = !1) {
          const n = t.children,
            a = e.children;
          if (_e(n) && _e(a))
            for (let t = 0; t < n.length; t++) {
              const e = n[t];
              let r = a[t];
              1 & r.shapeFlag &&
                !r.dynamicChildren &&
                ((r.patchFlag <= 0 || 32 === r.patchFlag) &&
                  ((r = a[t] = Ka(a[t])), (r.el = e.el)),
                i || ka(e, r));
            }
        }
        const Sa = (t) => t && (t.disabled || "" === t.disabled);
        function Na(t) {
          return (
            (function (t, e, i = !0) {
              const n = On || fr;
              if (n) {
                const i = n.type;
                if ("components" === t) {
                  if ("_self" === e) return i;
                  const t = i.displayName || i.name;
                  if (t && (t === e || t === Re(e) || t === je(Re(e))))
                    return i;
                }
                return Ta(n[t] || i[t], e) || Ta(n.appContext[t], e);
              }
            })("components", t) || t
          );
        }
        const Ma = Symbol();
        function Ta(t, e) {
          return t && (t[e] || t[Re(e)] || t[je(Re(e))]);
        }
        const Da = Symbol(void 0),
          Oa = Symbol(void 0),
          Aa = Symbol(void 0),
          Ea = Symbol(void 0),
          Pa = [];
        let Fa = null;
        function Ra(t = !1) {
          Pa.push((Fa = t ? null : []));
        }
        function Ia() {
          Pa.pop(), (Fa = Pa[Pa.length - 1] || null);
        }
        function Ba(t, e, i, n, a) {
          const r = Za(t, e, i, n, a, !0);
          return (r.dynamicChildren = Fa || ue), Ia(), Fa && Fa.push(r), r;
        }
        function ja(t) {
          return !!t && !0 === t.__v_isVNode;
        }
        function Ga(t, e) {
          return t.type === e.type && t.key === e.key;
        }
        const $a = "__vInternal",
          za = ({ key: t }) => (null != t ? t : null),
          Ua = ({ ref: t }) =>
            null != t ? (ke(t) || Ji(t) || xe(t) ? { i: On, r: t } : t) : null,
          Za = function (t, e = null, i = null, n = 0, a = null, r = !1) {
            if (((t && t !== Ma) || (t = Aa), ja(t))) {
              const n = Wa(t, e, !0);
              return i && Ja(n, i), n;
            }
            var o;
            if ((xe((o = t)) && "__vccOpts" in o && (t = t.__vccOpts), e)) {
              (Hi(e) || $a in e) && (e = Ce({}, e));
              let { class: t, style: i } = e;
              t && !ke(t) && (e.class = le(t)),
                Ne(i) &&
                  (Hi(i) && !_e(i) && (i = Ce({}, i)), (e.style = ne(i)));
            }
            const l = ke(t)
                ? 1
                : ((t) => t.__isSuspense)(t)
                ? 128
                : ((t) => t.__isTeleport)(t)
                ? 64
                : Ne(t)
                ? 4
                : xe(t)
                ? 2
                : 0,
              s = {
                __v_isVNode: !0,
                __v_skip: !0,
                type: t,
                props: e,
                key: e && za(e),
                ref: e && Ua(e),
                scopeId: null,
                children: null,
                component: null,
                suspense: null,
                ssContent: null,
                ssFallback: null,
                dirs: null,
                transition: null,
                el: null,
                anchor: null,
                target: null,
                targetAnchor: null,
                staticCount: 0,
                shapeFlag: l,
                patchFlag: n,
                dynamicProps: a,
                dynamicChildren: null,
                appContext: null,
              };
            if ((Ja(s, i), 128 & l)) {
              const { content: t, fallback: e } = (function (t) {
                const { shapeFlag: e, children: i } = t;
                let n, a;
                return (
                  32 & e
                    ? ((n = In(i.default)), (a = In(i.fallback)))
                    : ((n = In(i)), (a = qa(null))),
                  { content: n, fallback: a }
                );
              })(s);
              (s.ssContent = t), (s.ssFallback = e);
            }
            return !r && Fa && (n > 0 || 6 & l) && 32 !== n && Fa.push(s), s;
          };
        function Wa(t, e, i = !1) {
          const { props: n, ref: a, patchFlag: r } = t,
            o = e
              ? (function (...t) {
                  const e = Ce({}, t[0]);
                  for (let i = 1; i < t.length; i++) {
                    const n = t[i];
                    for (const t in n)
                      if ("class" === t)
                        e.class !== n.class &&
                          (e.class = le([e.class, n.class]));
                      else if ("style" === t) e.style = ne([e.style, n.style]);
                      else if (he(t)) {
                        const i = e[t],
                          a = n[t];
                        i !== a && (e[t] = i ? [].concat(i, n[t]) : a);
                      } else "" !== t && (e[t] = n[t]);
                  }
                  return e;
                })(n || {}, e)
              : n;
          return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: t.type,
            props: o,
            key: o && za(o),
            ref:
              e && e.ref
                ? i && a
                  ? _e(a)
                    ? a.concat(Ua(e))
                    : [a, Ua(e)]
                  : Ua(e)
                : a,
            scopeId: t.scopeId,
            children: t.children,
            target: t.target,
            targetAnchor: t.targetAnchor,
            staticCount: t.staticCount,
            shapeFlag: t.shapeFlag,
            patchFlag: e && t.type !== Da ? (-1 === r ? 16 : 16 | r) : r,
            dynamicProps: t.dynamicProps,
            dynamicChildren: t.dynamicChildren,
            appContext: t.appContext,
            dirs: t.dirs,
            transition: t.transition,
            component: t.component,
            suspense: t.suspense,
            ssContent: t.ssContent && Wa(t.ssContent),
            ssFallback: t.ssFallback && Wa(t.ssFallback),
            el: t.el,
            anchor: t.anchor,
          };
        }
        function Va(t = " ", e = 0) {
          return Za(Oa, null, t, e);
        }
        function Ha(t = "", e = !1) {
          return e ? (Ra(), Ba(Aa, null, t)) : Za(Aa, null, t);
        }
        function qa(t) {
          return null == t || "boolean" == typeof t
            ? Za(Aa)
            : _e(t)
            ? Za(Da, null, t)
            : "object" == typeof t
            ? null === t.el
              ? t
              : Wa(t)
            : Za(Oa, null, String(t));
        }
        function Ka(t) {
          return null === t.el ? t : Wa(t);
        }
        function Ja(t, e) {
          let i = 0;
          const { shapeFlag: n } = t;
          if (null == e) e = null;
          else if (_e(e)) i = 16;
          else if ("object" == typeof e) {
            if (1 & n || 64 & n) {
              const i = e.default;
              return void (i && (i._c && jn(1), Ja(t, i()), i._c && jn(-1)));
            }
            {
              i = 32;
              const n = e._;
              n || $a in e
                ? 3 === n &&
                  On &&
                  (1024 & On.vnode.patchFlag
                    ? ((e._ = 2), (t.patchFlag |= 1024))
                    : (e._ = 1))
                : (e._ctx = On);
            }
          } else
            xe(e)
              ? ((e = { default: e, _ctx: On }), (i = 32))
              : ((e = String(e)), 64 & n ? ((i = 16), (e = [Va(e)])) : (i = 8));
          (t.children = e), (t.shapeFlag |= i);
        }
        function Qa(t, e, i = !1) {
          const n = fr || On;
          if (n) {
            const a =
              null == n.parent
                ? n.vnode.appContext && n.vnode.appContext.provides
                : n.parent.provides;
            if (a && t in a) return a[t];
            if (arguments.length > 1) return i && xe(e) ? e() : e;
          }
        }
        let Ya = !1;
        function Xa(t, e, i = [], n = [], a = [], r = !1) {
          const {
              mixins: o,
              extends: l,
              data: s,
              computed: c,
              methods: d,
              watch: u,
              provide: p,
              inject: f,
              components: g,
              directives: h,
              beforeMount: m,
              mounted: C,
              beforeUpdate: y,
              updated: v,
              activated: b,
              deactivated: _,
              beforeDestroy: L,
              beforeUnmount: w,
              destroyed: x,
              unmounted: k,
              render: S,
              renderTracked: N,
              renderTriggered: M,
              errorCaptured: T,
              expose: D,
            } = e,
            O = t.proxy,
            A = t.ctx,
            E = t.appContext.mixins;
          if (
            (r && S && t.render === pe && (t.render = S),
            r ||
              ((Ya = !0),
              tr("beforeCreate", "bc", e, t, E),
              (Ya = !1),
              nr(t, E, i, n, a)),
            l && Xa(t, l, i, n, a, !0),
            o && nr(t, o, i, n, a),
            f)
          )
            if (_e(f))
              for (let t = 0; t < f.length; t++) {
                const e = f[t];
                A[e] = Qa(e);
              }
            else
              for (const t in f) {
                const e = f[t];
                Ne(e)
                  ? (A[t] = Qa(e.from || t, e.default, !0))
                  : (A[t] = Qa(e));
              }
          if (d)
            for (const t in d) {
              const e = d[t];
              xe(e) && (A[t] = e.bind(O));
            }
          if (
            (r
              ? s && i.push(s)
              : (i.length && i.forEach((e) => ar(t, e, O)), s && ar(t, s, O)),
            c)
          )
            for (const t in c) {
              const e = c[t],
                i = vr({
                  get: xe(e) ? e.bind(O, O) : xe(e.get) ? e.get.bind(O, O) : pe,
                  set: !xe(e) && xe(e.set) ? e.set.bind(O) : pe,
                });
              Object.defineProperty(A, t, {
                enumerable: !0,
                configurable: !0,
                get: () => i.value,
                set: (t) => (i.value = t),
              });
            }
          if (
            (u && n.push(u),
            !r &&
              n.length &&
              n.forEach((t) => {
                for (const e in t) rr(t[e], A, O, e);
              }),
            p && a.push(p),
            !r &&
              a.length &&
              a.forEach((t) => {
                const e = xe(t) ? t.call(O) : t;
                Reflect.ownKeys(e).forEach((t) => {
                  !(function (t, e) {
                    if (fr) {
                      let i = fr.provides;
                      const n = fr.parent && fr.parent.provides;
                      n === i && (i = fr.provides = Object.create(n)),
                        (i[t] = e);
                    }
                  })(t, e[t]);
                });
              }),
            r &&
              (g &&
                Ce(
                  t.components || (t.components = Ce({}, t.type.components)),
                  g
                ),
              h &&
                Ce(
                  t.directives || (t.directives = Ce({}, t.type.directives)),
                  h
                )),
            r || tr("created", "c", e, t, E),
            m && Kn(m.bind(O)),
            C && Jn(C.bind(O)),
            y && Qn(y.bind(O)),
            v && Yn(v.bind(O)),
            b && ca(b.bind(O), "a", void 0),
            _ &&
              (function (t, e) {
                ca(t, "da", void 0);
              })(_.bind(O)),
            T &&
              ((t, e = fr) => {
                Hn("ec", t, e);
              })(T.bind(O)),
            N && ia(N.bind(O)),
            M && ea(M.bind(O)),
            w && Xn(w.bind(O)),
            k && ta(k.bind(O)),
            _e(D) && !r)
          )
            if (D.length) {
              const e = t.exposed || (t.exposed = tn({}));
              D.forEach((t) => {
                e[t] = (function (t, e) {
                  return Ji(t[e]) ? t[e] : new en(t, e);
                })(O, t);
              });
            } else t.exposed || (t.exposed = de);
        }
        function tr(t, e, i, n, a) {
          ir(t, e, a, n);
          const { extends: r, mixins: o } = i;
          r && er(t, e, r, n), o && ir(t, e, o, n);
          const l = i[t];
          l && rn(l.bind(n.proxy), n, e);
        }
        function er(t, e, i, n) {
          i.extends && er(t, e, i.extends, n);
          const a = i[t];
          a && rn(a.bind(n.proxy), n, e);
        }
        function ir(t, e, i, n) {
          for (let a = 0; a < i.length; a++) {
            const r = i[a].mixins;
            r && ir(t, e, r, n);
            const o = i[a][t];
            o && rn(o.bind(n.proxy), n, e);
          }
        }
        function nr(t, e, i, n, a) {
          for (let r = 0; r < e.length; r++) Xa(t, e[r], i, n, a, !0);
        }
        function ar(t, e, i) {
          const n = e.call(i, i);
          Ne(n) && (t.data === de ? (t.data = zi(n)) : Ce(t.data, n));
        }
        function rr(t, e, i, n) {
          const a = n.includes(".")
            ? (function (t, e) {
                const i = e.split(".");
                return () => {
                  let e = t;
                  for (let t = 0; t < i.length && e; t++) e = e[i[t]];
                  return e;
                };
              })(i, n)
            : () => i[n];
          if (ke(t)) {
            const i = e[t];
            xe(i) && aa(a, i);
          } else if (xe(t)) aa(a, t.bind(i));
          else if (Ne(t))
            if (_e(t)) t.forEach((t) => rr(t, e, i, n));
            else {
              const n = xe(t.handler) ? t.handler.bind(i) : e[t.handler];
              xe(n) && aa(a, n, t);
            }
        }
        function or(t, e, i) {
          const n = i.appContext.config.optionMergeStrategies,
            { mixins: a, extends: r } = e;
          r && or(t, r, i), a && a.forEach((e) => or(t, e, i));
          for (const a in e)
            n && be(n, a)
              ? (t[a] = n[a](t[a], e[a], i.proxy, a))
              : (t[a] = e[a]);
        }
        const lr = (t) => t && (t.proxy ? t.proxy : lr(t.parent)),
          sr = Ce(Object.create(null), {
            $: (t) => t,
            $el: (t) => t.vnode.el,
            $data: (t) => t.data,
            $props: (t) => t.props,
            $attrs: (t) => t.attrs,
            $slots: (t) => t.slots,
            $refs: (t) => t.refs,
            $parent: (t) => lr(t.parent),
            $root: (t) => t.root && t.root.proxy,
            $emit: (t) => t.emit,
            $options: (t) =>
              __VUE_OPTIONS_API__
                ? (function (t) {
                    const e = t.type,
                      { __merged: i, mixins: n, extends: a } = e;
                    if (i) return i;
                    const r = t.appContext.mixins;
                    if (!r.length && !n && !a) return e;
                    const o = {};
                    return (
                      r.forEach((e) => or(o, e, t)),
                      or(o, e, t),
                      (e.__merged = o)
                    );
                  })(t)
                : t.type,
            $forceUpdate: (t) => () => _n(t.update),
            $nextTick: (t) => bn.bind(t.proxy),
            $watch: (t) => (__VUE_OPTIONS_API__ ? oa.bind(t) : pe),
          }),
          cr = {
            get({ _: t }, e) {
              const {
                ctx: i,
                setupState: n,
                data: a,
                props: r,
                accessCache: o,
                type: l,
                appContext: s,
              } = t;
              if ("__v_skip" === e) return !0;
              let c;
              if ("$" !== e[0]) {
                const l = o[e];
                if (void 0 !== l)
                  switch (l) {
                    case 0:
                      return n[e];
                    case 1:
                      return a[e];
                    case 3:
                      return i[e];
                    case 2:
                      return r[e];
                  }
                else {
                  if (n !== de && be(n, e)) return (o[e] = 0), n[e];
                  if (a !== de && be(a, e)) return (o[e] = 1), a[e];
                  if ((c = t.propsOptions[0]) && be(c, e))
                    return (o[e] = 2), r[e];
                  if (i !== de && be(i, e)) return (o[e] = 3), i[e];
                  (__VUE_OPTIONS_API__ && Ya) || (o[e] = 4);
                }
              }
              const d = sr[e];
              let u, p;
              return d
                ? ("$attrs" === e && oi(t, 0, e), d(t))
                : (u = l.__cssModules) && (u = u[e])
                ? u
                : i !== de && be(i, e)
                ? ((o[e] = 3), i[e])
                : ((p = s.config.globalProperties), be(p, e) ? p[e] : void 0);
            },
            set({ _: t }, e, i) {
              const { data: n, setupState: a, ctx: r } = t;
              if (a !== de && be(a, e)) a[e] = i;
              else if (n !== de && be(n, e)) n[e] = i;
              else if (e in t.props) return !1;
              return !(("$" === e[0] && e.slice(1) in t) || ((r[e] = i), 0));
            },
            has(
              {
                _: {
                  data: t,
                  setupState: e,
                  accessCache: i,
                  ctx: n,
                  appContext: a,
                  propsOptions: r,
                },
              },
              o
            ) {
              let l;
              return (
                void 0 !== i[o] ||
                (t !== de && be(t, o)) ||
                (e !== de && be(e, o)) ||
                ((l = r[0]) && be(l, o)) ||
                be(n, o) ||
                be(sr, o) ||
                be(a.config.globalProperties, o)
              );
            },
          },
          dr = Ce({}, cr, {
            get(t, e) {
              if (e !== Symbol.unscopables) return cr.get(t, e, t);
            },
            has: (t, e) => "_" !== e[0] && !ee(e),
          }),
          ur = ya();
        let pr = 0,
          fr = null;
        const gr = (t) => {
          fr = t;
        };
        let hr = !1;
        function mr(t, e, i) {
          xe(e)
            ? (t.render = e)
            : Ne(e) &&
              (__VUE_PROD_DEVTOOLS__ && (t.devtoolsRawSetupState = e),
              (t.setupState = tn(e))),
            Cr(t);
        }
        function Cr(t, e) {
          const i = t.type;
          t.render ||
            ((t.render = i.render || pe),
            t.render._rc && (t.withProxy = new Proxy(t.ctx, dr))),
            __VUE_OPTIONS_API__ &&
              ((fr = t), ai(), Xa(t, i), ri(), (fr = null));
        }
        function yr(t, e = fr) {
          e && (e.effects || (e.effects = [])).push(t);
        }
        function vr(t) {
          const e = (function (t) {
            let e, i;
            return (
              xe(t) ? ((e = t), (i = pe)) : ((e = t.get), (i = t.set)),
              new nn(e, i, xe(t) || !t.set)
            );
          })(t);
          return yr(e.effect), e;
        }
        function br(t, e) {
          let i;
          if (_e(t) || ke(t)) {
            i = new Array(t.length);
            for (let n = 0, a = t.length; n < a; n++) i[n] = e(t[n], n);
          } else if ("number" == typeof t) {
            i = new Array(t);
            for (let n = 0; n < t; n++) i[n] = e(n + 1, n);
          } else if (Ne(t))
            if (t[Symbol.iterator]) i = Array.from(t, e);
            else {
              const n = Object.keys(t);
              i = new Array(n.length);
              for (let a = 0, r = n.length; a < r; a++) {
                const r = n[a];
                i[a] = e(t[r], r, a);
              }
            }
          else i = [];
          return i;
        }
        const _r = "3.0.4",
          Lr = "http://www.w3.org/2000/svg",
          wr = "undefined" != typeof document ? document : null;
        let xr, kr;
        const Sr = {
            insert: (t, e, i) => {
              e.insertBefore(t, i || null);
            },
            remove: (t) => {
              const e = t.parentNode;
              e && e.removeChild(t);
            },
            createElement: (t, e, i) =>
              e
                ? wr.createElementNS(Lr, t)
                : wr.createElement(t, i ? { is: i } : void 0),
            createText: (t) => wr.createTextNode(t),
            createComment: (t) => wr.createComment(t),
            setText: (t, e) => {
              t.nodeValue = e;
            },
            setElementText: (t, e) => {
              t.textContent = e;
            },
            parentNode: (t) => t.parentNode,
            nextSibling: (t) => t.nextSibling,
            querySelector: (t) => wr.querySelector(t),
            setScopeId(t, e) {
              t.setAttribute(e, "");
            },
            cloneNode: (t) => t.cloneNode(!0),
            insertStaticContent(t, e, i, n) {
              const a = n
                ? kr || (kr = wr.createElementNS(Lr, "svg"))
                : xr || (xr = wr.createElement("div"));
              a.innerHTML = t;
              const r = a.firstChild;
              let o = r,
                l = o;
              for (; o; ) (l = o), Sr.insert(o, e, i), (o = a.firstChild);
              return [r, l];
            },
          },
          Nr = /\s*!important$/;
        function Mr(t, e, i) {
          if (_e(i)) i.forEach((i) => Mr(t, e, i));
          else if (e.startsWith("--")) t.setProperty(e, i);
          else {
            const n = (function (t, e) {
              const i = Dr[e];
              if (i) return i;
              let n = Re(e);
              if ("filter" !== n && n in t) return (Dr[e] = n);
              n = je(n);
              for (let i = 0; i < Tr.length; i++) {
                const a = Tr[i] + n;
                if (a in t) return (Dr[e] = a);
              }
              return e;
            })(t, e);
            Nr.test(i)
              ? t.setProperty(Be(n), i.replace(Nr, ""), "important")
              : (t[n] = i);
          }
        }
        const Tr = ["Webkit", "Moz", "ms"],
          Dr = {},
          Or = "http://www.w3.org/1999/xlink";
        let Ar = Date.now;
        "undefined" != typeof document &&
          Ar() > document.createEvent("Event").timeStamp &&
          (Ar = () => performance.now());
        let Er = 0;
        const Pr = Promise.resolve(),
          Fr = () => {
            Er = 0;
          },
          Rr = /(?:Once|Passive|Capture)$/,
          Ir = /^on[a-z]/,
          Br = {
            beforeMount(t, { value: e }, { transition: i }) {
              (t._vod = "none" === t.style.display ? "" : t.style.display),
                i && e ? i.beforeEnter(t) : jr(t, e);
            },
            mounted(t, { value: e }, { transition: i }) {
              i && e && i.enter(t);
            },
            updated(t, { value: e, oldValue: i }, { transition: n }) {
              n && e !== i
                ? e
                  ? (n.beforeEnter(t), jr(t, !0), n.enter(t))
                  : n.leave(t, () => {
                      jr(t, !1);
                    })
                : jr(t, e);
            },
            beforeUnmount(t, { value: e }) {
              jr(t, e);
            },
          };
        function jr(t, e) {
          t.style.display = e ? t._vod : "none";
        }
        const Gr = Ce(
          {
            patchProp: (t, e, i, n, a = !1, r, o, l, s) => {
              switch (e) {
                case "class":
                  !(function (t, e, i) {
                    if ((null == e && (e = ""), i)) t.setAttribute("class", e);
                    else {
                      const i = t._vtc;
                      i && (e = (e ? [e, ...i] : [...i]).join(" ")),
                        (t.className = e);
                    }
                  })(t, n, a);
                  break;
                case "style":
                  !(function (t, e, i) {
                    const n = t.style;
                    if (i)
                      if (ke(i)) e !== i && (n.cssText = i);
                      else {
                        for (const t in i) Mr(n, t, i[t]);
                        if (e && !ke(e))
                          for (const t in e) null == i[t] && Mr(n, t, "");
                      }
                    else t.removeAttribute("style");
                  })(t, i, n);
                  break;
                default:
                  he(e)
                    ? me(e) ||
                      (function (t, e, i, n, a = null) {
                        const r = t._vei || (t._vei = {}),
                          o = r[e];
                        if (n && o) o.value = n;
                        else {
                          const [i, l] = (function (t) {
                            let e;
                            if (Rr.test(t)) {
                              let i;
                              for (e = {}; (i = t.match(Rr)); )
                                (t = t.slice(0, t.length - i[0].length)),
                                  (e[i[0].toLowerCase()] = !0);
                            }
                            return [t.slice(2).toLowerCase(), e];
                          })(e);
                          n
                            ? (function (t, e, i, n) {
                                t.addEventListener(e, i, n);
                              })(
                                t,
                                i,
                                (r[e] = (function (t, e) {
                                  const i = (t) => {
                                    (t.timeStamp || Ar()) >= i.attached - 1 &&
                                      rn(
                                        (function (t, e) {
                                          if (_e(e)) {
                                            const i =
                                              t.stopImmediatePropagation;
                                            return (
                                              (t.stopImmediatePropagation =
                                                () => {
                                                  i.call(t), (t._stopped = !0);
                                                }),
                                              e.map(
                                                (t) => (e) =>
                                                  !e._stopped && t(e)
                                              )
                                            );
                                          }
                                          return e;
                                        })(t, i.value),
                                        e,
                                        5,
                                        [t]
                                      );
                                  };
                                  return (
                                    (i.value = t),
                                    (i.attached =
                                      Er || (Pr.then(Fr), (Er = Ar()))),
                                    i
                                  );
                                })(n, a)),
                                l
                              )
                            : o &&
                              ((function (t, e, i, n) {
                                t.removeEventListener(e, i, n);
                              })(t, i, o, l),
                              (r[e] = void 0));
                        }
                      })(t, e, 0, n, o)
                    : (function (t, e, i, n) {
                        return n
                          ? "innerHTML" === e ||
                              !!(e in t && Ir.test(e) && xe(i))
                          : !(
                              "spellcheck" === e ||
                              "draggable" === e ||
                              ("form" === e && "string" == typeof i) ||
                              ("list" === e && "INPUT" === t.tagName) ||
                              (Ir.test(e) && ke(i)) ||
                              !(e in t)
                            );
                      })(t, e, n, a)
                    ? (function (t, e, i, n, a, r, o) {
                        if ("innerHTML" === e || "textContent" === e)
                          return (
                            n && o(n, a, r), void (t[e] = null == i ? "" : i)
                          );
                        if ("value" !== e || "PROGRESS" === t.tagName) {
                          if ("" === i || null == i) {
                            const n = typeof t[e];
                            if ("" === i && "boolean" === n)
                              return void (t[e] = !0);
                            if (null == i && "string" === n)
                              return (t[e] = ""), void t.removeAttribute(e);
                            if ("number" === n)
                              return (t[e] = 0), void t.removeAttribute(e);
                          }
                          try {
                            t[e] = i;
                          } catch (t) {}
                        } else {
                          t._value = i;
                          const e = null == i ? "" : i;
                          t.value !== e && (t.value = e);
                        }
                      })(t, e, n, r, o, l, s)
                    : ("true-value" === e
                        ? (t._trueValue = n)
                        : "false-value" === e && (t._falseValue = n),
                      (function (t, e, i, n) {
                        if (n && e.startsWith("xlink:"))
                          null == i
                            ? t.removeAttributeNS(Or, e.slice(6, e.length))
                            : t.setAttributeNS(Or, e, i);
                        else {
                          const n = ie(e);
                          null == i || (n && !1 === i)
                            ? t.removeAttribute(e)
                            : t.setAttribute(e, n ? "" : i);
                        }
                      })(t, e, n, a));
              }
            },
            forcePatchProp: (t, e) => "value" === e,
          },
          Sr
        );
        let $r;
        function zr() {
          return (
            $r ||
            ($r = (function (t) {
              return (function (t, e) {
                "boolean" != typeof __VUE_OPTIONS_API__ &&
                  (Ve().__VUE_OPTIONS_API__ = !0),
                  "boolean" != typeof __VUE_PROD_DEVTOOLS__ &&
                    (Ve().__VUE_PROD_DEVTOOLS__ = !1);
                const {
                    insert: i,
                    remove: n,
                    patchProp: a,
                    forcePatchProp: r,
                    createElement: o,
                    createText: l,
                    createComment: s,
                    setText: c,
                    setElementText: d,
                    parentNode: u,
                    nextSibling: p,
                    setScopeId: f = pe,
                    cloneNode: g,
                    insertStaticContent: h,
                  } = t,
                  m = (
                    t,
                    e,
                    i,
                    n = null,
                    a = null,
                    r = null,
                    o = !1,
                    l = !1
                  ) => {
                    t && !Ga(t, e) && ((n = z(t)), I(t, a, r, !0), (t = null)),
                      -2 === e.patchFlag &&
                        ((l = !1), (e.dynamicChildren = null));
                    const { type: s, ref: c, shapeFlag: d } = e;
                    switch (s) {
                      case Oa:
                        C(t, e, i, n);
                        break;
                      case Aa:
                        y(t, e, i, n);
                        break;
                      case Ea:
                        null == t && v(e, i, n, o);
                        break;
                      case Da:
                        N(t, e, i, n, a, r, o, l);
                        break;
                      default:
                        1 & d
                          ? b(t, e, i, n, a, r, o, l)
                          : 6 & d
                          ? M(t, e, i, n, a, r, o, l)
                          : (64 & d || 128 & d) &&
                            s.process(t, e, i, n, a, r, o, l, Z);
                    }
                    null != c && a && wa(c, t && t.ref, r, e);
                  },
                  C = (t, e, n, a) => {
                    if (null == t) i((e.el = l(e.children)), n, a);
                    else {
                      const i = (e.el = t.el);
                      e.children !== t.children && c(i, e.children);
                    }
                  },
                  y = (t, e, n, a) => {
                    null == t
                      ? i((e.el = s(e.children || "")), n, a)
                      : (e.el = t.el);
                  },
                  v = (t, e, i, n) => {
                    [t.el, t.anchor] = h(t.children, e, i, n);
                  },
                  b = (t, e, i, n, a, r, o, l) => {
                    (o = o || "svg" === e.type),
                      null == t ? _(e, i, n, a, r, o, l) : x(t, e, a, r, o, l);
                  },
                  _ = (t, e, n, r, l, s, c) => {
                    let u, p;
                    const {
                      type: f,
                      props: h,
                      shapeFlag: m,
                      transition: C,
                      scopeId: y,
                      patchFlag: v,
                      dirs: b,
                    } = t;
                    if (t.el && void 0 !== g && -1 === v) u = t.el = g(t.el);
                    else {
                      if (
                        ((u = t.el = o(t.type, s, h && h.is)),
                        8 & m
                          ? d(u, t.children)
                          : 16 & m &&
                            w(
                              t.children,
                              u,
                              null,
                              r,
                              l,
                              s && "foreignObject" !== f,
                              c || !!t.dynamicChildren
                            ),
                        b && Ca(t, null, r, "created"),
                        h)
                      ) {
                        for (const e in h)
                          Ee(e) || a(u, e, null, h[e], s, t.children, r, l, $);
                        (p = h.onVnodeBeforeMount) && xa(p, r, t);
                      }
                      L(u, y, t, r);
                    }
                    __VUE_PROD_DEVTOOLS__ &&
                      (Object.defineProperty(u, "__vnode", {
                        value: t,
                        enumerable: !1,
                      }),
                      Object.defineProperty(u, "__vueParentComponent", {
                        value: r,
                        enumerable: !1,
                      })),
                      b && Ca(t, null, r, "beforeMount");
                    const _ =
                      (!l || (l && !l.pendingBranch)) && C && !C.persisted;
                    _ && C.beforeEnter(u),
                      i(u, e, n),
                      ((p = h && h.onVnodeMounted) || _ || b) &&
                        La(() => {
                          p && xa(p, r, t),
                            _ && C.enter(u),
                            b && Ca(t, null, r, "mounted");
                        }, l);
                  },
                  L = (t, e, i, n) => {
                    if ((e && f(t, e), n)) {
                      const a = n.type.__scopeId;
                      a && a !== e && f(t, a + "-s"),
                        i === n.subTree &&
                          L(t, n.vnode.scopeId, n.vnode, n.parent);
                    }
                  },
                  w = (t, e, i, n, a, r, o, l = 0) => {
                    for (let s = l; s < t.length; s++) {
                      const l = (t[s] = o ? Ka(t[s]) : qa(t[s]));
                      m(null, l, e, i, n, a, r, o);
                    }
                  },
                  x = (t, e, i, n, o, l) => {
                    const s = (e.el = t.el);
                    let { patchFlag: c, dynamicChildren: u, dirs: p } = e;
                    c |= 16 & t.patchFlag;
                    const f = t.props || de,
                      g = e.props || de;
                    let h;
                    if (
                      ((h = g.onVnodeBeforeUpdate) && xa(h, i, e, t),
                      p && Ca(e, t, i, "beforeUpdate"),
                      c > 0)
                    ) {
                      if (16 & c) S(s, e, f, g, i, n, o);
                      else if (
                        (2 & c &&
                          f.class !== g.class &&
                          a(s, "class", null, g.class, o),
                        4 & c && a(s, "style", f.style, g.style, o),
                        8 & c)
                      ) {
                        const l = e.dynamicProps;
                        for (let e = 0; e < l.length; e++) {
                          const c = l[e],
                            d = f[c],
                            u = g[c];
                          (u !== d || (r && r(s, c))) &&
                            a(s, c, d, u, o, t.children, i, n, $);
                        }
                      }
                      1 & c && t.children !== e.children && d(s, e.children);
                    } else l || null != u || S(s, e, f, g, i, n, o);
                    const m = o && "foreignObject" !== e.type;
                    u
                      ? k(t.dynamicChildren, u, s, i, n, m)
                      : l || E(t, e, s, null, i, n, m),
                      ((h = g.onVnodeUpdated) || p) &&
                        La(() => {
                          h && xa(h, i, e, t), p && Ca(e, t, i, "updated");
                        }, n);
                  },
                  k = (t, e, i, n, a, r) => {
                    for (let o = 0; o < e.length; o++) {
                      const l = t[o],
                        s = e[o],
                        c =
                          l.type === Da ||
                          !Ga(l, s) ||
                          6 & l.shapeFlag ||
                          64 & l.shapeFlag
                            ? u(l.el)
                            : i;
                      m(l, s, c, null, n, a, r, !0);
                    }
                  },
                  S = (t, e, i, n, o, l, s) => {
                    if (i !== n) {
                      for (const c in n) {
                        if (Ee(c)) continue;
                        const d = n[c],
                          u = i[c];
                        (d !== u || (r && r(t, c))) &&
                          a(t, c, u, d, s, e.children, o, l, $);
                      }
                      if (i !== de)
                        for (const r in i)
                          Ee(r) ||
                            r in n ||
                            a(t, r, i[r], null, s, e.children, o, l, $);
                    }
                  },
                  N = (t, e, n, a, r, o, s, c) => {
                    const d = (e.el = t ? t.el : l("")),
                      u = (e.anchor = t ? t.anchor : l(""));
                    let { patchFlag: p, dynamicChildren: f } = e;
                    p > 0 && (c = !0),
                      null == t
                        ? (i(d, n, a),
                          i(u, n, a),
                          w(e.children, n, u, r, o, s, c))
                        : p > 0 && 64 & p && f
                        ? (k(t.dynamicChildren, f, n, r, o, s),
                          (null != e.key || (r && e === r.subTree)) &&
                            ka(t, e, !0))
                        : E(t, e, n, u, r, o, s, c);
                  },
                  M = (t, e, i, n, a, r, o, l) => {
                    null == t
                      ? 512 & e.shapeFlag
                        ? a.ctx.activate(e, i, n, o, l)
                        : T(e, i, n, a, r, o, l)
                      : D(t, e, l);
                  },
                  T = (t, e, i, n, a, r, o) => {
                    const l = (t.component = (function (t, e, i) {
                      const n = t.type,
                        a = (e ? e.appContext : t.appContext) || ur,
                        r = {
                          uid: pr++,
                          vnode: t,
                          type: n,
                          parent: e,
                          appContext: a,
                          root: null,
                          next: null,
                          subTree: null,
                          update: null,
                          render: null,
                          proxy: null,
                          exposed: null,
                          withProxy: null,
                          effects: null,
                          provides: e ? e.provides : Object.create(a.provides),
                          accessCache: null,
                          renderCache: [],
                          components: null,
                          directives: null,
                          propsOptions: zn(n, a),
                          emitsOptions: Tn(n, a),
                          emit: null,
                          emitted: null,
                          ctx: de,
                          data: de,
                          props: de,
                          attrs: de,
                          slots: de,
                          refs: de,
                          setupState: de,
                          setupContext: null,
                          suspense: i,
                          suspenseId: i ? i.pendingId : 0,
                          asyncDep: null,
                          asyncResolved: !1,
                          isMounted: !1,
                          isUnmounted: !1,
                          isDeactivated: !1,
                          bc: null,
                          c: null,
                          bm: null,
                          m: null,
                          bu: null,
                          u: null,
                          um: null,
                          bum: null,
                          da: null,
                          a: null,
                          rtg: null,
                          rtc: null,
                          ec: null,
                        };
                      return (
                        (r.ctx = { _: r }),
                        (r.root = e ? e.root : r),
                        (r.emit = Mn.bind(null, r)),
                        __VUE_PROD_DEVTOOLS__,
                        r
                      );
                    })(t, n, a));
                    if (
                      (sa(t) && (l.ctx.renderer = Z),
                      (function (t, e = !1) {
                        hr = e;
                        const { props: i, children: n, shapeFlag: a } = t.vnode,
                          r = 4 & a;
                        (function (t, e, i, n = !1) {
                          const a = {},
                            r = {};
                          Ue(r, $a, 1),
                            Gn(t, e, a, r),
                            i
                              ? (t.props = n ? a : Zi(a, !1, yi, Bi))
                              : t.type.props
                              ? (t.props = a)
                              : (t.props = r),
                            (t.attrs = r);
                        })(t, i, r, e),
                          ((t, e) => {
                            if (32 & t.vnode.shapeFlag) {
                              const i = e._;
                              i
                                ? ((t.slots = e), Ue(e, "_", i))
                                : ga(e, (t.slots = {}));
                            } else (t.slots = {}), e && ha(t, e);
                            Ue(t.slots, $a, 1);
                          })(t, n),
                          r &&
                            (function (t, e) {
                              const i = t.type;
                              (t.accessCache = Object.create(null)),
                                (t.proxy = new Proxy(t.ctx, cr));
                              const { setup: n } = i;
                              if (n) {
                                const i = (t.setupContext =
                                  n.length > 1
                                    ? (function (t) {
                                        return {
                                          attrs: t.attrs,
                                          slots: t.slots,
                                          emit: t.emit,
                                          expose: (e) => {
                                            t.exposed = tn(e);
                                          },
                                        };
                                      })(t)
                                    : null);
                                (fr = t), ai();
                                const a = an(n, t, 0, [t.props, i]);
                                if ((ri(), (fr = null), Me(a))) {
                                  if (e)
                                    return a.then((e) => {
                                      mr(t, e);
                                    });
                                  t.asyncDep = a;
                                } else mr(t, a);
                              } else Cr(t);
                            })(t, e),
                          (hr = !1);
                      })(l),
                      l.asyncDep)
                    ) {
                      if ((a && a.registerDep(l, O), !t.el)) {
                        const t = (l.subTree = Za(Aa));
                        y(null, t, e, i);
                      }
                    } else O(l, t, e, i, a, r, o);
                  },
                  D = (t, e, i) => {
                    const n = (e.component = t.component);
                    if (
                      (function (t, e, i) {
                        const { props: n, children: a, component: r } = t,
                          { props: o, children: l, patchFlag: s } = e,
                          c = r.emitsOptions;
                        if (e.dirs || e.transition) return !0;
                        if (!(i && s >= 0))
                          return (
                            !((!a && !l) || (l && l.$stable)) ||
                            (n !== o && (n ? !o || Rn(n, o, c) : !!o))
                          );
                        if (1024 & s) return !0;
                        if (16 & s) return n ? Rn(n, o, c) : !!o;
                        if (8 & s) {
                          const t = e.dynamicProps;
                          for (let e = 0; e < t.length; e++) {
                            const i = t[e];
                            if (o[i] !== n[i] && !Dn(c, i)) return !0;
                          }
                        }
                        return !1;
                      })(t, e, i)
                    ) {
                      if (n.asyncDep && !n.asyncResolved)
                        return void A(n, e, i);
                      (n.next = e),
                        (function (t) {
                          const e = cn.indexOf(t);
                          e > -1 && cn.splice(e, 1);
                        })(n.update),
                        n.update();
                    } else
                      (e.component = t.component), (e.el = t.el), (n.vnode = e);
                  },
                  O = (t, e, i, n, a, r, o) => {
                    t.update = Ye(function () {
                      if (t.isMounted) {
                        let e,
                          { next: i, bu: n, u: l, parent: s, vnode: c } = t,
                          d = i;
                        i ? ((i.el = c.el), A(t, i, o)) : (i = c),
                          n && ze(n),
                          (e = i.props && i.props.onVnodeBeforeUpdate) &&
                            xa(e, s, i, c);
                        const p = En(t),
                          f = t.subTree;
                        (t.subTree = p),
                          m(f, p, u(f.el), z(f), t, a, r),
                          (i.el = p.el),
                          null === d &&
                            (function ({ vnode: t, parent: e }, i) {
                              for (; e && e.subTree === t; )
                                ((t = e.vnode).el = i), (e = e.parent);
                            })(t, p.el),
                          l && La(l, a),
                          (e = i.props && i.props.onVnodeUpdated) &&
                            La(() => {
                              xa(e, s, i, c);
                            }, a),
                          __VUE_PROD_DEVTOOLS__;
                      } else {
                        let o;
                        const { el: l, props: s } = e,
                          { bm: c, m: d, parent: u } = t;
                        c && ze(c),
                          (o = s && s.onVnodeBeforeMount) && xa(o, u, e);
                        const p = (t.subTree = En(t));
                        m(null, p, i, n, t, a, r),
                          (e.el = p.el),
                          d && La(d, a),
                          (o = s && s.onVnodeMounted) &&
                            La(() => {
                              xa(o, u, e);
                            }, a);
                        const { a: f } = t;
                        f && 256 & e.shapeFlag && La(f, a), (t.isMounted = !0);
                      }
                    }, _a);
                  },
                  A = (t, e, i) => {
                    e.component = t;
                    const n = t.vnode.props;
                    (t.vnode = e),
                      (t.next = null),
                      (function (t, e, i, n) {
                        const {
                            props: a,
                            attrs: r,
                            vnode: { patchFlag: o },
                          } = t,
                          l = qi(a),
                          [s] = t.propsOptions;
                        if (!(n || o > 0) || 16 & o) {
                          let n;
                          Gn(t, e, a, r);
                          for (const r in l)
                            (e &&
                              (be(e, r) || ((n = Be(r)) !== r && be(e, n)))) ||
                              (s
                                ? !i ||
                                  (void 0 === i[r] && void 0 === i[n]) ||
                                  (a[r] = $n(s, e || de, r, void 0, t))
                                : delete a[r]);
                          if (r !== l)
                            for (const t in r) (e && be(e, t)) || delete r[t];
                        } else if (8 & o) {
                          const i = t.vnode.dynamicProps;
                          for (let n = 0; n < i.length; n++) {
                            const o = i[n],
                              c = e[o];
                            if (s)
                              if (be(r, o)) r[o] = c;
                              else {
                                const e = Re(o);
                                a[e] = $n(s, l, e, c, t);
                              }
                            else r[o] = c;
                          }
                        }
                        li(t, "set", "$attrs");
                      })(t, e.props, n, i),
                      ((t, e) => {
                        const { vnode: i, slots: n } = t;
                        let a = !0,
                          r = de;
                        if (32 & i.shapeFlag) {
                          const t = e._;
                          t
                            ? 1 === t
                              ? (a = !1)
                              : Ce(n, e)
                            : ((a = !e.$stable), ga(e, n)),
                            (r = e);
                        } else e && (ha(t, e), (r = { default: 1 }));
                        if (a)
                          for (const t in n) ua(t) || t in r || delete n[t];
                      })(t, e.children),
                      xn(void 0, t.update);
                  },
                  E = (t, e, i, n, a, r, o, l = !1) => {
                    const s = t && t.children,
                      c = t ? t.shapeFlag : 0,
                      u = e.children,
                      { patchFlag: p, shapeFlag: f } = e;
                    if (p > 0) {
                      if (128 & p) return void F(s, u, i, n, a, r, o, l);
                      if (256 & p) return void P(s, u, i, n, a, r, o, l);
                    }
                    8 & f
                      ? (16 & c && $(s, a, r), u !== s && d(i, u))
                      : 16 & c
                      ? 16 & f
                        ? F(s, u, i, n, a, r, o, l)
                        : $(s, a, r, !0)
                      : (8 & c && d(i, ""), 16 & f && w(u, i, n, a, r, o, l));
                  },
                  P = (t, e, i, n, a, r, o, l) => {
                    e = e || ue;
                    const s = (t = t || ue).length,
                      c = e.length,
                      d = Math.min(s, c);
                    let u;
                    for (u = 0; u < d; u++) {
                      const n = (e[u] = l ? Ka(e[u]) : qa(e[u]));
                      m(t[u], n, i, null, a, r, o, l);
                    }
                    s > c ? $(t, a, r, !0, !1, d) : w(e, i, n, a, r, o, l, d);
                  },
                  F = (t, e, i, n, a, r, o, l) => {
                    let s = 0;
                    const c = e.length;
                    let d = t.length - 1,
                      u = c - 1;
                    for (; s <= d && s <= u; ) {
                      const n = t[s],
                        c = (e[s] = l ? Ka(e[s]) : qa(e[s]));
                      if (!Ga(n, c)) break;
                      m(n, c, i, null, a, r, o, l), s++;
                    }
                    for (; s <= d && s <= u; ) {
                      const n = t[d],
                        s = (e[u] = l ? Ka(e[u]) : qa(e[u]));
                      if (!Ga(n, s)) break;
                      m(n, s, i, null, a, r, o, l), d--, u--;
                    }
                    if (s > d) {
                      if (s <= u) {
                        const t = u + 1,
                          d = t < c ? e[t].el : n;
                        for (; s <= u; )
                          m(
                            null,
                            (e[s] = l ? Ka(e[s]) : qa(e[s])),
                            i,
                            d,
                            a,
                            r,
                            o
                          ),
                            s++;
                      }
                    } else if (s > u) for (; s <= d; ) I(t[s], a, r, !0), s++;
                    else {
                      const p = s,
                        f = s,
                        g = new Map();
                      for (s = f; s <= u; s++) {
                        const t = (e[s] = l ? Ka(e[s]) : qa(e[s]));
                        null != t.key && g.set(t.key, s);
                      }
                      let h,
                        C = 0;
                      const y = u - f + 1;
                      let v = !1,
                        b = 0;
                      const _ = new Array(y);
                      for (s = 0; s < y; s++) _[s] = 0;
                      for (s = p; s <= d; s++) {
                        const n = t[s];
                        if (C >= y) {
                          I(n, a, r, !0);
                          continue;
                        }
                        let c;
                        if (null != n.key) c = g.get(n.key);
                        else
                          for (h = f; h <= u; h++)
                            if (0 === _[h - f] && Ga(n, e[h])) {
                              c = h;
                              break;
                            }
                        void 0 === c
                          ? I(n, a, r, !0)
                          : ((_[c - f] = s + 1),
                            c >= b ? (b = c) : (v = !0),
                            m(n, e[c], i, null, a, r, o, l),
                            C++);
                      }
                      const L = v
                        ? (function (t) {
                            const e = t.slice(),
                              i = [0];
                            let n, a, r, o, l;
                            const s = t.length;
                            for (n = 0; n < s; n++) {
                              const s = t[n];
                              if (0 !== s) {
                                if (((a = i[i.length - 1]), t[a] < s)) {
                                  (e[n] = a), i.push(n);
                                  continue;
                                }
                                for (r = 0, o = i.length - 1; r < o; )
                                  (l = ((r + o) / 2) | 0),
                                    t[i[l]] < s ? (r = l + 1) : (o = l);
                                s < t[i[r]] &&
                                  (r > 0 && (e[n] = i[r - 1]), (i[r] = n));
                              }
                            }
                            for (r = i.length, o = i[r - 1]; r-- > 0; )
                              (i[r] = o), (o = e[o]);
                            return i;
                          })(_)
                        : ue;
                      for (h = L.length - 1, s = y - 1; s >= 0; s--) {
                        const t = f + s,
                          l = e[t],
                          d = t + 1 < c ? e[t + 1].el : n;
                        0 === _[s]
                          ? m(null, l, i, d, a, r, o)
                          : v && (h < 0 || s !== L[h] ? R(l, i, d, 2) : h--);
                      }
                    }
                  },
                  R = (t, e, n, a, r = null) => {
                    const {
                      el: o,
                      type: l,
                      transition: s,
                      children: c,
                      shapeFlag: d,
                    } = t;
                    if (6 & d) R(t.component.subTree, e, n, a);
                    else if (128 & d) t.suspense.move(e, n, a);
                    else if (64 & d) l.move(t, e, n, Z);
                    else if (l !== Da)
                      if (l !== Ea)
                        if (2 !== a && 1 & d && s)
                          if (0 === a)
                            s.beforeEnter(o),
                              i(o, e, n),
                              La(() => s.enter(o), r);
                          else {
                            const {
                                leave: t,
                                delayLeave: a,
                                afterLeave: r,
                              } = s,
                              l = () => i(o, e, n),
                              c = () => {
                                t(o, () => {
                                  l(), r && r();
                                });
                              };
                            a ? a(o, l, c) : c();
                          }
                        else i(o, e, n);
                      else
                        (({ el: t, anchor: e }, n, a) => {
                          let r;
                          for (; t && t !== e; )
                            (r = p(t)), i(t, n, a), (t = r);
                          i(e, n, a);
                        })(t, e, n);
                    else {
                      i(o, e, n);
                      for (let t = 0; t < c.length; t++) R(c[t], e, n, a);
                      i(t.anchor, e, n);
                    }
                  },
                  I = (t, e, i, n = !1, a = !1) => {
                    const {
                      type: r,
                      props: o,
                      ref: l,
                      children: s,
                      dynamicChildren: c,
                      shapeFlag: d,
                      patchFlag: u,
                      dirs: p,
                    } = t;
                    if ((null != l && wa(l, null, i, null), 256 & d))
                      return void e.ctx.deactivate(t);
                    const f = 1 & d && p;
                    let g;
                    if (
                      ((g = o && o.onVnodeBeforeUnmount) && xa(g, e, t), 6 & d)
                    )
                      G(t.component, i, n);
                    else {
                      if (128 & d) return void t.suspense.unmount(i, n);
                      f && Ca(t, null, e, "beforeUnmount"),
                        c && (r !== Da || (u > 0 && 64 & u))
                          ? $(c, e, i, !1, !0)
                          : ((r === Da && (128 & u || 256 & u)) ||
                              (!a && 16 & d)) &&
                            $(s, e, i),
                        64 & d && (n || !Sa(t.props)) && t.type.remove(t, Z),
                        n && B(t);
                    }
                    ((g = o && o.onVnodeUnmounted) || f) &&
                      La(() => {
                        g && xa(g, e, t), f && Ca(t, null, e, "unmounted");
                      }, i);
                  },
                  B = (t) => {
                    const { type: e, el: i, anchor: a, transition: r } = t;
                    if (e === Da) return void j(i, a);
                    if (e === Ea)
                      return void (({ el: t, anchor: e }) => {
                        let i;
                        for (; t && t !== e; ) (i = p(t)), n(t), (t = i);
                        n(e);
                      })(t);
                    const o = () => {
                      n(i), r && !r.persisted && r.afterLeave && r.afterLeave();
                    };
                    if (1 & t.shapeFlag && r && !r.persisted) {
                      const { leave: e, delayLeave: n } = r,
                        a = () => e(i, o);
                      n ? n(t.el, o, a) : a();
                    } else o();
                  },
                  j = (t, e) => {
                    let i;
                    for (; t !== e; ) (i = p(t)), n(t), (t = i);
                    n(e);
                  },
                  G = (t, e, i) => {
                    const {
                      bum: n,
                      effects: a,
                      update: r,
                      subTree: o,
                      um: l,
                    } = t;
                    if ((n && ze(n), a))
                      for (let t = 0; t < a.length; t++) Xe(a[t]);
                    r && (Xe(r), I(o, t, e, i)),
                      l && La(l, e),
                      La(() => {
                        t.isUnmounted = !0;
                      }, e),
                      e &&
                        e.pendingBranch &&
                        !e.isUnmounted &&
                        t.asyncDep &&
                        !t.asyncResolved &&
                        t.suspenseId === e.pendingId &&
                        (e.deps--, 0 === e.deps && e.resolve()),
                      __VUE_PROD_DEVTOOLS__;
                  },
                  $ = (t, e, i, n = !1, a = !1, r = 0) => {
                    for (let o = r; o < t.length; o++) I(t[o], e, i, n, a);
                  },
                  z = (t) =>
                    6 & t.shapeFlag
                      ? z(t.component.subTree)
                      : 128 & t.shapeFlag
                      ? t.suspense.next()
                      : p(t.anchor || t.el),
                  U = (t, e) => {
                    null == t
                      ? e._vnode && I(e._vnode, null, null, !0)
                      : m(e._vnode || null, t, e),
                      kn(),
                      (e._vnode = t);
                  },
                  Z = {
                    p: m,
                    um: I,
                    m: R,
                    r: B,
                    mt: T,
                    mc: w,
                    pc: E,
                    pbc: k,
                    n: z,
                    o: t,
                  };
                let W;
                return { render: U, hydrate: W, createApp: ba(U, W) };
              })(t);
            })(Gr))
          );
        }
        const Ur = (...t) => Object.prototype.toString.call(...t).slice(8, -1);
        var Zr = {
          props: {
            data: { required: !0, validator: (t) => "Null" === Ur(t) },
            name: { required: !0, type: String },
          },
        };
        const Wr = { class: "null" },
          Vr = { class: "key" },
          Hr = { key: 0, class: "separator" },
          qr = Za("span", { class: "value" }, "null", -1);
        (Zr.render = function (t, e, i, n, a, r) {
          return (
            Ra(),
            Ba("span", Wr, [
              Za("span", Vr, se(i.name), 1),
              "" !== i.name ? (Ra(), Ba("span", Hr, ": ")) : Ha("v-if", !0),
              qr,
            ])
          );
        }),
          (Zr.__file = "src/components/NullWrapper.vue");
        var Kr = {
          props: {
            data: { required: !0, validator: (t) => "Boolean" === Ur(t) },
            name: { required: !0, type: String },
          },
        };
        const Jr = { class: "boolean" },
          Qr = { class: "key" },
          Yr = { key: 0, class: "separator" },
          Xr = { class: "value" };
        (Kr.render = function (t, e, i, n, a, r) {
          return (
            Ra(),
            Ba("span", Jr, [
              Za("span", Qr, se(i.name), 1),
              "" !== i.name ? (Ra(), Ba("span", Yr, ": ")) : Ha("v-if", !0),
              Za("span", Xr, se(i.data), 1),
            ])
          );
        }),
          (Kr.__file = "src/components/BooleanWrapper.vue");
        var to = {
          props: {
            data: { required: !0, validator: (t) => "Number" === Ur(t) },
            name: { required: !0, type: String },
          },
        };
        const eo = { class: "number" },
          io = { class: "key" },
          no = { key: 0, class: "separator" },
          ao = { class: "value" };
        (to.render = function (t, e, i, n, a, r) {
          return (
            Ra(),
            Ba("span", eo, [
              Za("span", io, se(i.name), 1),
              "" !== i.name ? (Ra(), Ba("span", no, ": ")) : Ha("v-if", !0),
              Za("span", ao, se(i.data), 1),
            ])
          );
        }),
          (to.__file = "src/components/NumberWrapper.vue");
        var ro = {
          props: {
            data: { required: !0, validator: (t) => "String" === Ur(t) },
            name: { required: !0, type: String },
          },
        };
        const oo = { class: "string" },
          lo = { class: "key" },
          so = { key: 0, class: "separator" },
          co = Za("span", { class: "quotes" }, '"', -1),
          uo = { class: "value" },
          po = Za("span", { class: "quotes" }, '"', -1);
        (ro.render = function (t, e, i, n, a, r) {
          return (
            Ra(),
            Ba("span", oo, [
              Za("span", lo, se(i.name), 1),
              "" !== i.name ? (Ra(), Ba("span", so, ": ")) : Ha("v-if", !0),
              co,
              Za("span", uo, se(i.data), 1),
              po,
            ])
          );
        }),
          (ro.__file = "src/components/StringWrapper.vue");
        const fo = new Set();
        function go(t = { collapseSignal, expandSignal }) {
          const e = Qi(!1),
            i = Qi(!1),
            n = () => {
              (e.value = !1), (i.value = !i.value);
            };
          aa(() => t.collapseSignal, n);
          const a = Qi(!1),
            r = () => {
              (e.value = !0), (a.value = !a.value);
            };
          return (
            aa(() => t.expandSignal, r),
            aa(
              () => t.data,
              () => {
                t.expandOnCreatedAndUpdated(t.path) ? r() : n();
              },
              { immediate: !0 }
            ),
            {
              isExpanding: e,
              innerCollapseSignal: i,
              innerExpandSignal: a,
              handleClick: (t) => {
                fo.clear(),
                  !0 === t.metaKey && !0 === t.shiftKey
                    ? n()
                    : !0 === t.metaKey
                    ? r()
                    : (e.value = !e.value);
              },
            }
          );
        }
        var ho = {
          name: "array-wrapper",
          props: {
            path: {
              required: !0,
              validator: (t) =>
                "Array" === Ur(t) &&
                t.every((t) => "String" === Ur(t) || "Number" === Ur(t)),
            },
            data: { required: !0, validator: (t) => "Array" === Ur(t) },
            name: { required: !0, type: String },
            collapseSignal: { default: !1, type: Boolean },
            expandSignal: { default: !1, type: Boolean },
            expandOnCreatedAndUpdated: { required: !0, type: Function },
            getKeys: { required: !0, type: Function },
          },
          setup(t) {
            const {
                isExpanding: e,
                innerExpandSignal: i,
                innerCollapseSignal: n,
                handleClick: a,
              } = go(t),
              r = vr(() => t.getKeys(t.data, t.path)),
              o = fo.has(t.data);
            return (
              fo.add(t.data),
              {
                keys: r,
                isExpanding: e,
                innerExpandSignal: i,
                innerCollapseSignal: n,
                handleClick: a,
                isCircular: o,
              }
            );
          },
          components: {},
        };
        const mo = { class: "array" },
          Co = { key: 0, class: "value" },
          yo = { key: 0, class: "value" };
        (ho.render = function (t, e, i, n, a, r) {
          const o = Na("wrapper");
          return (
            Ra(),
            Ba("span", mo, [
              Za(
                "span",
                {
                  class: "indicator",
                  onClick:
                    e[1] ||
                    (e[1] = (...t) => n.handleClick && n.handleClick(...t)),
                },
                se(n.isExpanding ? "▼" : "▶"),
                1
              ),
              Za(
                "span",
                {
                  class: "key",
                  onClick:
                    e[2] ||
                    (e[2] = (...t) => n.handleClick && n.handleClick(...t)),
                },
                se("" === i.name ? "" : i.name),
                1
              ),
              Za(
                "span",
                {
                  class: "separator",
                  onClick:
                    e[3] ||
                    (e[3] = (...t) => n.handleClick && n.handleClick(...t)),
                },
                se("" === i.name ? "" : ": "),
                1
              ),
              Za(
                "span",
                {
                  class: "count",
                  onClick:
                    e[4] ||
                    (e[4] = (...t) => n.handleClick && n.handleClick(...t)),
                },
                se(
                  !1 === n.isExpanding && i.data.length >= 2
                    ? "(" + i.data.length + ")"
                    : ""
                ),
                1
              ),
              Za(
                "span",
                {
                  class: "preview",
                  onClick:
                    e[5] ||
                    (e[5] = (...t) => n.handleClick && n.handleClick(...t)),
                },
                se(n.isExpanding ? "Array(" + i.data.length + ")" : "[...]"),
                1
              ),
              n.isCircular
                ? (Ra(),
                  Ba(
                    Da,
                    { key: 0 },
                    [
                      n.isExpanding
                        ? (Ra(),
                          Ba("span", Co, [
                            (Ra(!0),
                            Ba(
                              Da,
                              null,
                              br(
                                n.keys,
                                (t) => (
                                  Ra(),
                                  Ba(
                                    o,
                                    {
                                      key: t,
                                      name: t,
                                      path: i.path.concat(t),
                                      data: i.data[t],
                                      "expand-signal": n.innerExpandSignal,
                                      "collapse-signal": n.innerCollapseSignal,
                                      expandOnCreatedAndUpdated: () => !1,
                                      getKeys: i.getKeys,
                                    },
                                    null,
                                    8,
                                    [
                                      "name",
                                      "path",
                                      "data",
                                      "expand-signal",
                                      "collapse-signal",
                                      "expandOnCreatedAndUpdated",
                                      "getKeys",
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]))
                        : Ha("v-if", !0),
                    ],
                    64
                  ))
                : (Ra(),
                  Ba(
                    Da,
                    { key: 1 },
                    [
                      n.isExpanding
                        ? (Ra(),
                          Ba("span", yo, [
                            (Ra(!0),
                            Ba(
                              Da,
                              null,
                              br(
                                n.keys,
                                (t) => (
                                  Ra(),
                                  Ba(
                                    o,
                                    {
                                      key: t,
                                      name: t,
                                      path: i.path.concat(t),
                                      data: i.data[t],
                                      "expand-signal": n.innerExpandSignal,
                                      "collapse-signal": n.innerCollapseSignal,
                                      expandOnCreatedAndUpdated:
                                        i.expandOnCreatedAndUpdated,
                                      getKeys: i.getKeys,
                                    },
                                    null,
                                    8,
                                    [
                                      "name",
                                      "path",
                                      "data",
                                      "expand-signal",
                                      "collapse-signal",
                                      "expandOnCreatedAndUpdated",
                                      "getKeys",
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]))
                        : Ha("v-if", !0),
                    ],
                    64
                  )),
            ])
          );
        }),
          (ho.__file = "src/components/ArrayWrapper.vue");
        var vo = {
          name: "object-wrapper",
          props: {
            path: {
              required: !0,
              validator: (t) =>
                "Array" === Ur(t) &&
                t.every((t) => "String" === Ur(t) || "Number" === Ur(t)),
            },
            data: { required: !0, validator: (t) => "Object" === Ur(t) },
            name: { required: !0, type: String },
            collapseSignal: { default: !1, type: Boolean },
            expandSignal: { default: !1, type: Boolean },
            expandOnCreatedAndUpdated: { required: !0, type: Function },
            getKeys: { required: !0, type: Function },
          },
          setup(t) {
            const {
                isExpanding: e,
                innerExpandSignal: i,
                innerCollapseSignal: n,
                handleClick: a,
              } = go(t),
              r = vr(() => t.getKeys(t.data, t.path)),
              o = fo.has(t.data);
            return (
              fo.add(t.data),
              {
                keys: r,
                isExpanding: e,
                innerExpandSignal: i,
                innerCollapseSignal: n,
                handleClick: a,
                isCircular: o,
              }
            );
          },
          components: {},
        };
        const bo = { class: "object" },
          _o = { key: 0, class: "value" },
          Lo = { key: 1, class: "value" };
        (vo.render = function (t, e, i, n, a, r) {
          const o = Na("wrapper");
          return (
            Ra(),
            Ba("span", bo, [
              Za(
                "span",
                {
                  class: "indicator",
                  onClick:
                    e[1] ||
                    (e[1] = (...t) => n.handleClick && n.handleClick(...t)),
                },
                se(n.isExpanding ? "▼" : "▶"),
                1
              ),
              Za(
                "span",
                {
                  class: "key",
                  onClick:
                    e[2] ||
                    (e[2] = (...t) => n.handleClick && n.handleClick(...t)),
                },
                se("" === i.name ? "" : i.name),
                1
              ),
              Za(
                "span",
                {
                  class: "separator",
                  onClick:
                    e[3] ||
                    (e[3] = (...t) => n.handleClick && n.handleClick(...t)),
                },
                se("" === i.name ? "" : ": "),
                1
              ),
              Za(
                "span",
                {
                  class: "preview",
                  onClick:
                    e[4] ||
                    (e[4] = (...t) => n.handleClick && n.handleClick(...t)),
                },
                se(n.isExpanding ? "" : "{...}"),
                1
              ),
              n.isCircular
                ? (Ra(),
                  Ba(
                    Da,
                    { key: 0 },
                    [
                      n.isExpanding
                        ? (Ra(),
                          Ba("span", _o, [
                            (Ra(!0),
                            Ba(
                              Da,
                              null,
                              br(
                                n.keys,
                                (t) => (
                                  Ra(),
                                  Ba(
                                    o,
                                    {
                                      key: t,
                                      class: "value",
                                      name: t,
                                      path: i.path.concat(t),
                                      data: i.data[t],
                                      "expand-signal": n.innerExpandSignal,
                                      "collapse-signal": n.innerCollapseSignal,
                                      expandOnCreatedAndUpdated: () => !1,
                                      getKeys: i.getKeys,
                                    },
                                    null,
                                    8,
                                    [
                                      "name",
                                      "path",
                                      "data",
                                      "expand-signal",
                                      "collapse-signal",
                                      "expandOnCreatedAndUpdated",
                                      "getKeys",
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]))
                        : Ha("v-if", !0),
                    ],
                    64
                  ))
                : ma(
                    (Ra(),
                    Ba(
                      "span",
                      Lo,
                      [
                        (Ra(!0),
                        Ba(
                          Da,
                          null,
                          br(
                            n.keys,
                            (t) => (
                              Ra(),
                              Ba(
                                o,
                                {
                                  key: t,
                                  class: "value",
                                  name: t,
                                  path: i.path.concat(t),
                                  data: i.data[t],
                                  "expand-signal": n.innerExpandSignal,
                                  "collapse-signal": n.innerCollapseSignal,
                                  expandOnCreatedAndUpdated:
                                    i.expandOnCreatedAndUpdated,
                                  getKeys: i.getKeys,
                                },
                                null,
                                8,
                                [
                                  "name",
                                  "path",
                                  "data",
                                  "expand-signal",
                                  "collapse-signal",
                                  "expandOnCreatedAndUpdated",
                                  "getKeys",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ],
                      512
                    )),
                    [[Br, n.isExpanding]]
                  ),
            ])
          );
        }),
          (vo.__file = "src/components/ObjectWrapper.vue");
        const wo = {
          name: "wrapper",
          props: {
            path: {
              required: !0,
              validator: (t) =>
                "Array" === Ur(t) &&
                t.every((t) => "String" === Ur(t) || "Number" === Ur(t)),
            },
            data: {
              required: !0,
              validator: (t) =>
                "Null" === Ur(t) ||
                "Boolean" === Ur(t) ||
                "Number" === Ur(t) ||
                "String" === Ur(t) ||
                "Array" === Ur(t) ||
                "Object" === Ur(t),
            },
            name: { required: !0, type: String },
            collapseSignal: { default: !1, type: Boolean },
            expandSignal: { default: !1, type: Boolean },
            expandOnCreatedAndUpdated: { required: !0, type: Function },
            getKeys: { required: !0, type: Function },
          },
          setup: () => ({ objectToString: Ur }),
          components: {
            NullWrapper: Zr,
            BooleanWrapper: Kr,
            NumberWrapper: to,
            StringWrapper: ro,
            ArrayWrapper: ho,
            ObjectWrapper: vo,
          },
        };
        (ho.components.Wrapper = wo),
          (vo.components.Wrapper = wo),
          (wo.render = function (t, e, i, n, a, r) {
            const o = Na("null-wrapper"),
              l = Na("boolean-wrapper"),
              s = Na("number-wrapper"),
              c = Na("string-wrapper"),
              d = Na("array-wrapper"),
              u = Na("object-wrapper");
            return "Null" === t.objectToString(t.data)
              ? (Ra(),
                Ba(o, { key: 0, name: t.name, data: t.data }, null, 8, [
                  "name",
                  "data",
                ]))
              : "Boolean" === t.objectToString(t.data)
              ? (Ra(),
                Ba(l, { key: 1, name: t.name, data: t.data }, null, 8, [
                  "name",
                  "data",
                ]))
              : "Number" === t.objectToString(t.data)
              ? (Ra(),
                Ba(s, { key: 2, name: t.name, data: t.data }, null, 8, [
                  "name",
                  "data",
                ]))
              : "String" === t.objectToString(t.data)
              ? (Ra(),
                Ba(c, { key: 3, name: t.name, data: t.data }, null, 8, [
                  "name",
                  "data",
                ]))
              : "Array" === t.objectToString(t.data)
              ? (Ra(),
                Ba(
                  d,
                  {
                    key: 4,
                    name: t.name,
                    path: t.path,
                    data: t.data,
                    "collapse-signal": t.collapseSignal,
                    "expand-signal": t.expandSignal,
                    expandOnCreatedAndUpdated: t.expandOnCreatedAndUpdated,
                    getKeys: t.getKeys,
                  },
                  null,
                  8,
                  [
                    "name",
                    "path",
                    "data",
                    "collapse-signal",
                    "expand-signal",
                    "expandOnCreatedAndUpdated",
                    "getKeys",
                  ]
                ))
              : "Object" === t.objectToString(t.data)
              ? (Ra(),
                Ba(
                  u,
                  {
                    key: 5,
                    name: t.name,
                    path: t.path,
                    data: t.data,
                    "collapse-signal": t.collapseSignal,
                    "expand-signal": t.expandSignal,
                    expandOnCreatedAndUpdated: t.expandOnCreatedAndUpdated,
                    getKeys: t.getKeys,
                  },
                  null,
                  8,
                  [
                    "name",
                    "path",
                    "data",
                    "collapse-signal",
                    "expand-signal",
                    "expandOnCreatedAndUpdated",
                    "getKeys",
                  ]
                ))
              : Ha("v-if", !0);
          }),
          (wo.__file = "src/components/Wrapper.vue");
        const xo = Object.freeze({
          expandOnCreatedAndUpdated: (t) => !1,
          getKeys: (t, e) => Object.keys(t),
        });
        var ko = gt(
          {
            components: {
              CodeAce: mt,
              CodeMonaco: Kt,
              FullCodePreview: Yt,
              Preview: Ht,
            },
            data: function () {
              return {
                mousedown: !1,
                leftContainerSize: 40,
                mobileMode: !1,
                shared: dt,
                initialCode: "",
                currentTab: "code-editor",
                fullCode: "",
                fullCodeConfig: { mimimal: !1, esm: !0, node: !1 },
              };
            },
            computed: {
              currentTime: function () {
                this.shared.message;
                for (
                  var t = new Date(),
                    e = [t.getHours(), t.getMinutes(), t.getSeconds()],
                    i = "",
                    n = 0,
                    a = e.length;
                  n < a;
                  ++n
                )
                  (i += (e[n] < 10 ? "0" : "") + e[n]), n < a - 1 && (i += ":");
                return i;
              },
            },
            mounted: function () {
              var t = this;
              dt.isMobile
                ? ((this.leftContainerSize = 0),
                  ut().then(function (t) {
                    dt.runCode = pt(t);
                  }))
                : (ut().then(function (e) {
                    t.initialCode = pt(e);
                  }),
                  window.addEventListener("mousemove", function (e) {
                    if (t.mousedown) {
                      var i = e.clientX / window.innerWidth;
                      (i = Math.min(0.9, Math.max(0.1, i))),
                        (t.leftContainerSize = 100 * i);
                    }
                  }),
                  window.addEventListener("mouseup", function (e) {
                    t.mousedown = !1;
                  }));
            },
            methods: {
              onSplitterDragStart: function () {
                this.mousedown = !0;
              },
              disposeAndRun: function () {
                this.$refs.preview.refreshAll();
              },
              updateFullCode: function () {
                var t = this.$refs.preview.getOption();
                if (t) {
                  var e = (0, Xt.collectDeps)(t);
                  e.push(
                    "svg" === dt.renderer ? "SVGRenderer" : "CanvasRenderer"
                  ),
                    (this.fullCode = (0, Xt.buildExampleCode)(
                      dt.sourceCode,
                      e,
                      {
                        minimal: this.fullCodeConfig.minimal,
                        ts: !1,
                        esm: this.fullCodeConfig.esm,
                        theme: dt.darkMode ? "dark" : "",
                        ROOT_PATH: dt.cdnRoot,
                      }
                    ));
                }
              },
              updateOptionOutline: function () {
                var t = Object.freeze(this.$refs.preview.getOption());
                t &&
                  ((t, e, i = {}) => {
                    void 0 === i.rootName && (i.rootName = ""),
                      void 0 === i.getKeys && (i.getKeys = xo.getKeys),
                      void 0 === i.expandOnCreatedAndUpdated &&
                        (i.expandOnCreatedAndUpdated =
                          xo.expandOnCreatedAndUpdated),
                      e.classList.add("object-visualizer"),
                      ((...t) => {
                        zr().render(...t);
                      })(null, e),
                      ((...t) => {
                        const e = zr().createApp(...t),
                          { mount: i } = e;
                        return (
                          (e.mount = (t) => {
                            const n = (function (t) {
                              return ke(t) ? document.querySelector(t) : t;
                            })(t);
                            if (!n) return;
                            const a = e._component;
                            xe(a) ||
                              a.render ||
                              a.template ||
                              (a.template = n.innerHTML),
                              (n.innerHTML = "");
                            const r = i(n);
                            return (
                              n.removeAttribute("v-cloak"),
                              n.setAttribute("data-v-app", ""),
                              r
                            );
                          }),
                          e
                        );
                      })(wo, {
                        data: t,
                        name: i.rootName,
                        path: [],
                        expandOnCreatedAndUpdated: i.expandOnCreatedAndUpdated,
                        getKeys: i.getKeys,
                      }).mount(e);
                  })(t, this.$el.querySelector("#option-outline"), {
                    getKeys: function (t, e) {
                      return Object.keys(t).filter(function (e) {
                        return !(Array.isArray(t[e]) && !t[e].length);
                      });
                    },
                    expandOnCreatedAndUpdated: function (t) {
                      return (
                        0 === t.length || ("series" === t[0] && t.length <= 1)
                      );
                    },
                  });
              },
              updateTabContent: function (t) {
                "full-code" === t
                  ? this.updateFullCode()
                  : "full-option" === t && this.updateOptionOutline();
              },
            },
            watch: {
              "shared.typeCheck": function (t) {
                (this.initialCode = dt.sourceCode), this.updateFullCode();
              },
              currentTab: function (t) {
                this.updateTabContent(t);
              },
              "shared.runHash": function () {
                this.updateTabContent(this.currentTab);
              },
              fullCodeConfig: {
                deep: !0,
                handler: function () {
                  this.updateFullCode();
                },
              },
            },
          },
          X,
          [],
          !1,
          null,
          null,
          null
        );
        ko.options.__file = "src/editor/Editor.vue";
        const So = ko.exports;
        var No = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { attrs: { id: "example-explore" } }, [
            i("div", { attrs: { id: "left-container" } }, [
              i(
                "div",
                { attrs: { id: "left-chart-nav" } },
                [
                  i(
                    "scrollactive",
                    {
                      attrs: {
                        "active-class": "active",
                        offset: 80,
                        duration: 500,
                        "scroll-container-selector": "#example-explore",
                        "bezier-easing-value": ".5,0,.35,1",
                      },
                      on: { itemchanged: t.onActiveNavChanged },
                    },
                    [
                      i(
                        "ul",
                        t._l(t.EXAMPLE_CATEGORIES, function (e) {
                          return i("li", { key: e }, [
                            i(
                              "a",
                              {
                                staticClass:
                                  "left-chart-nav-link scrollactive-item",
                                attrs: {
                                  id: "left-chart-nav-" + e,
                                  href: "#chart-type-" + e,
                                },
                              },
                              [
                                i("span", {
                                  staticClass: "chart-icon",
                                  domProps: { innerHTML: t._s(t.icons[e]) },
                                }),
                                t._v(" "),
                                i("span", { staticClass: "chart-name" }, [
                                  t._v(t._s(t.$t("chartTypes." + e))),
                                ]),
                              ]
                            ),
                          ]);
                        }),
                        0
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]),
            t._v(" "),
            i("div", { attrs: { id: "explore-container" } }, [
              i(
                "div",
                { staticClass: "example-list-panel" },
                t._l(t.exampleList, function (e) {
                  return i("div", { key: e.category }, [
                    i(
                      "h3",
                      {
                        staticClass: "chart-type-head",
                        attrs: { id: "chart-type-" + e.category },
                      },
                      [
                        t._v(
                          "\n                    " +
                            t._s(t.$t("chartTypes." + e.category)) +
                            "\n                    "
                        ),
                        i("span", [t._v(t._s(e.category))]),
                      ]
                    ),
                    t._v(" "),
                    i(
                      "div",
                      {
                        staticClass: "row",
                        attrs: { id: "chart-row-" + e.category },
                      },
                      t._l(e.examples, function (t) {
                        return i(
                          "div",
                          {
                            key: t.id,
                            staticClass: "col-xl-2 col-lg-3 col-md-4 col-sm-6",
                          },
                          [i("ExampleCard", { attrs: { example: t } })],
                          1
                        );
                      }),
                      0
                    ),
                  ]);
                }),
                0
              ),
            ]),
            t._v(" "),
            i(
              "div",
              { attrs: { id: "toolbar" } },
              [
                i("el-switch", {
                  attrs: {
                    "active-color": "#181432",
                    "active-text": t.$t("editor.darkMode"),
                    "inactive-text": "",
                  },
                  model: {
                    value: t.shared.darkMode,
                    callback: function (e) {
                      t.$set(t.shared, "darkMode", e);
                    },
                    expression: "shared.darkMode",
                  },
                }),
              ],
              1
            ),
          ]);
        };
        No._withStripped = !0;
        var Mo = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "example-list-item" }, [
            n(
              "a",
              {
                staticClass: "example-link",
                attrs: { target: "_blank", href: t.exampleLink },
              },
              [
                n("img", {
                  staticClass: "chart-area",
                  attrs: { src: i(555), "data-src": t.screenshotURL },
                }),
                t._v(" "),
                n("h4", { staticClass: "example-title" }, [
                  t._v(t._s(t.title)),
                ]),
                t._v(" "),
                t.showSubtitle
                  ? n("h5", { staticClass: "example-subtitle" }, [
                      t._v(t._s(t.subtitle)),
                    ])
                  : t._e(),
              ]
            ),
          ]);
        };
        Mo._withStripped = !0;
        var To = gt(
          {
            props: ["example"],
            computed: {
              title: function () {
                return (
                  ("zh" === dt.locale
                    ? this.example.titleCN
                    : this.example.title) ||
                  this.example.title ||
                  ""
                );
              },
              showSubtitle: function () {
                return "zh" === dt.locale;
              },
              subtitle: function () {
                return this.example.title || "";
              },
              exampleTheme: function () {
                return this.example.theme || (dt.darkMode ? "dark" : "");
              },
              exampleLink: function () {
                var t = this.example,
                  e = ["c=" + t.id],
                  i = this.exampleTheme;
                return (
                  t.isGL && e.push("gl=1"),
                  i && e.push("theme=" + i),
                  "local" in ot && e.push("local"),
                  "useDirtyRect" in ot && e.push("useDirtyRect"),
                  "./editor.html?" + e.join("&")
                );
              },
              screenshotURL: function () {
                var t = this.example,
                  e = this.exampleTheme ? "-" + this.exampleTheme : "",
                  i = st ? "webp" : "png",
                  n = t.isGL ? "data-gl" : "data";
                return ""
                  .concat(dt.cdnRoot, "/")
                  .concat(n, "/thumb")
                  .concat(e, "/")
                  .concat(t.id, ".")
                  .concat(i, "?_v_=")
                  .concat(dt.version);
              },
            },
          },
          Mo,
          [],
          !1,
          null,
          null,
          null
        );
        To.options.__file = "src/explore/ExampleCard.vue";
        const Do = To.exports,
          Oo = "undefined" != typeof window,
          Ao =
            (Oo && !("onscroll" in window)) ||
            ("undefined" != typeof navigator &&
              /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
          Eo = Oo && "IntersectionObserver" in window,
          Po = Oo && "classList" in document.createElement("p"),
          Fo = {
            elements_selector: "img",
            container: Ao || Oo ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            data_poster: "poster",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            load_delay: 0,
            auto_unobserve: !0,
            callback_enter: null,
            callback_exit: null,
            callback_reveal: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            use_native: !1,
          },
          Ro = function (t, e) {
            var i;
            let n = "LazyLoad::Initialized",
              a = new t(e);
            try {
              i = new CustomEvent(n, { detail: { instance: a } });
            } catch (t) {
              (i = document.createEvent("CustomEvent")).initCustomEvent(
                n,
                !1,
                !1,
                { instance: a }
              );
            }
            window.dispatchEvent(i);
          },
          Io = "data-",
          Bo = "was-processed",
          jo = "ll-timeout",
          Go = "true",
          $o = (t, e) => t.getAttribute(Io + e),
          zo = (t, e, i) => {
            var n = Io + e;
            null !== i ? t.setAttribute(n, i) : t.removeAttribute(n);
          },
          Uo = (t) => $o(t, Bo) === Go,
          Zo = (t, e) => zo(t, jo, e),
          Wo = (t) => $o(t, jo),
          Vo = (t, e, i, n) => {
            t && (void 0 === n ? (void 0 === i ? t(e) : t(e, i)) : t(e, i, n));
          },
          Ho = (t, e) => {
            (t.loadingCount += e),
              0 === t._elements.length &&
                0 === t.loadingCount &&
                Vo(t._settings.callback_finish, t);
          },
          qo = (t) => {
            let e = [];
            for (let i, n = 0; (i = t.children[n]); n += 1)
              "SOURCE" === i.tagName && e.push(i);
            return e;
          },
          Ko = (t, e, i) => {
            i && t.setAttribute(e, i);
          },
          Jo = (t, e) => {
            Ko(t, "sizes", $o(t, e.data_sizes)),
              Ko(t, "srcset", $o(t, e.data_srcset)),
              Ko(t, "src", $o(t, e.data_src));
          },
          Qo = {
            IMG: (t, e) => {
              const i = t.parentNode;
              i &&
                "PICTURE" === i.tagName &&
                qo(i).forEach((t) => {
                  Jo(t, e);
                }),
                Jo(t, e);
            },
            IFRAME: (t, e) => {
              Ko(t, "src", $o(t, e.data_src));
            },
            VIDEO: (t, e) => {
              qo(t).forEach((t) => {
                Ko(t, "src", $o(t, e.data_src));
              }),
                Ko(t, "poster", $o(t, e.data_poster)),
                Ko(t, "src", $o(t, e.data_src)),
                t.load();
            },
          },
          Yo = (t, e) => {
            Po
              ? t.classList.add(e)
              : (t.className += (t.className ? " " : "") + e);
          },
          Xo = (t, e) => {
            Po
              ? t.classList.remove(e)
              : (t.className = t.className
                  .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                  .replace(/^\s+/, "")
                  .replace(/\s+$/, ""));
          },
          tl = "load",
          el = "loadeddata",
          il = "error",
          nl = (t, e, i) => {
            t.addEventListener(e, i);
          },
          al = (t, e, i) => {
            t.removeEventListener(e, i);
          },
          rl = (t, e, i) => {
            al(t, tl, e), al(t, el, e), al(t, il, i);
          },
          ol = function (t, e, i) {
            var n = i._settings;
            const a = e ? n.class_loaded : n.class_error,
              r = e ? n.callback_loaded : n.callback_error,
              o = t.target;
            Xo(o, n.class_loading), Yo(o, a), Vo(r, o, i), Ho(i, -1);
          },
          ll = ["IMG", "IFRAME", "VIDEO"],
          sl = (t, e) => {
            var i = e._observer;
            dl(t, e), i && e._settings.auto_unobserve && i.unobserve(t);
          },
          cl = (t) => {
            var e = Wo(t);
            e && (clearTimeout(e), Zo(t, null));
          },
          dl = (t, e, i) => {
            var n = e._settings;
            (!i && Uo(t)) ||
              (ll.indexOf(t.tagName) > -1 &&
                (((t, e) => {
                  const i = (a) => {
                      ol(a, !0, e), rl(t, i, n);
                    },
                    n = (a) => {
                      ol(a, !1, e), rl(t, i, n);
                    };
                  ((t, e, i) => {
                    nl(t, tl, e), nl(t, el, e), nl(t, il, i);
                  })(t, i, n);
                })(t, e),
                Yo(t, n.class_loading)),
              ((t, e) => {
                const i = e._settings,
                  n = t.tagName,
                  a = Qo[n];
                if (a)
                  return (
                    a(t, i),
                    Ho(e, 1),
                    void (e._elements =
                      ((r = e._elements), (o = t), r.filter((t) => t !== o)))
                  );
                var r, o;
                ((t, e) => {
                  const i = $o(t, e.data_src),
                    n = $o(t, e.data_bg);
                  i && (t.style.backgroundImage = `url("${i}")`),
                    n && (t.style.backgroundImage = n);
                })(t, i);
              })(t, e),
              ((t) => {
                zo(t, Bo, Go);
              })(t),
              Vo(n.callback_reveal, t, e),
              Vo(n.callback_set, t, e));
          },
          ul = (t) => {
            return (
              !!Eo &&
              ((t._observer = new IntersectionObserver(
                (e) => {
                  e.forEach((e) =>
                    ((t) => t.isIntersecting || t.intersectionRatio > 0)(e)
                      ? ((t, e, i) => {
                          const n = i._settings;
                          Vo(n.callback_enter, t, e, i),
                            n.load_delay
                              ? ((t, e) => {
                                  var i = e._settings.load_delay,
                                    n = Wo(t);
                                  n ||
                                    ((n = setTimeout(function () {
                                      sl(t, e), cl(t);
                                    }, i)),
                                    Zo(t, n));
                                })(t, i)
                              : sl(t, i);
                        })(e.target, e, t)
                      : ((t, e, i) => {
                          const n = i._settings;
                          Vo(n.callback_exit, t, e, i), n.load_delay && cl(t);
                        })(e.target, e, t)
                  );
                },
                {
                  root:
                    (e = t._settings).container === document
                      ? null
                      : e.container,
                  rootMargin: e.thresholds || e.threshold + "px",
                }
              )),
              !0)
            );
            var e;
          },
          pl = ["IMG", "IFRAME"],
          fl = (t, e) => {
            return ((t) => t.filter((t) => !Uo(t)))(
              ((i =
                t ||
                ((t) => t.container.querySelectorAll(t.elements_selector))(e)),
              Array.prototype.slice.call(i))
            );
            var i;
          },
          gl = function (t, e) {
            var i;
            (this._settings = ((t) => Object.assign({}, Fo, t))(t)),
              (this.loadingCount = 0),
              ul(this),
              this.update(e),
              (i = this),
              Oo &&
                window.addEventListener("online", (t) => {
                  ((t) => {
                    var e = t._settings;
                    e.container
                      .querySelectorAll("." + e.class_error)
                      .forEach((t) => {
                        Xo(t, e.class_error),
                          ((t) => {
                            zo(t, Bo, null);
                          })(t);
                      }),
                      t.update();
                  })(i);
                });
          };
        (gl.prototype = {
          update: function (t) {
            var e,
              i = this._settings;
            (this._elements = fl(t, i)),
              !Ao && this._observer
                ? (((t) =>
                    t.use_native && "loading" in HTMLImageElement.prototype)(
                    i
                  ) &&
                    ((e = this)._elements.forEach((t) => {
                      -1 !== pl.indexOf(t.tagName) &&
                        (t.setAttribute("loading", "lazy"), dl(t, e));
                    }),
                    (this._elements = fl(t, i))),
                  this._elements.forEach((t) => {
                    this._observer.observe(t);
                  }))
                : this.loadAll();
          },
          destroy: function () {
            this._observer &&
              (this._elements.forEach((t) => {
                this._observer.unobserve(t);
              }),
              (this._observer = null)),
              (this._elements = null),
              (this._settings = null);
          },
          load: function (t, e) {
            dl(t, this, e);
          },
          loadAll: function () {
            this._elements.forEach((t) => {
              sl(t, this);
            });
          },
        }),
          Oo &&
            (function (t, e) {
              if (e)
                if (e.length) for (let i, n = 0; (i = e[n]); n += 1) Ro(t, i);
                else Ro(t, e);
            })(gl, window.lazyLoadOptions);
        const hl = gl;
        var ml = {};
        [
          "line",
          "bar",
          "scatter",
          "pie",
          "radar",
          "funnel",
          "gauge",
          "map",
          "graph",
          "treemap",
          "parallel",
          "sankey",
          "candlestick",
          "boxplot",
          "heatmap",
          "pictorialBar",
          "themeRiver",
          "calendar",
          "custom",
          "sunburst",
          "tree",
          "dataset",
          "geo",
          "lines",
          "dataZoom",
          "rich",
          "drag",
        ].forEach(function (t) {
          ml[t] = i(472)("./" + t + ".svg");
        });
        var Cl = i(926);
        [
          "globe",
          "bar3D",
          "scatter3D",
          "surface",
          "map3D",
          "lines3D",
          "line3D",
          "scatterGL",
          "linesGL",
          "flowGL",
          "graphGL",
          "geo3D",
        ].forEach(function (t) {
          ml[t] = Cl;
        });
        var yl = "ec-shot-loaded",
          vl = gt(
            {
              components: { ExampleCard: Do },
              data: function () {
                var t = {};
                function e(e, i) {
                  var n = 0;
                  do {
                    for (var a = !1, r = 0; r < e.length; r++) {
                      var o = e[r];
                      if (!rt.hasOwnProperty(o.id)) {
                        "string" == typeof o.category &&
                          (o.category = [o.category]);
                        var l = (o.category || [])[n];
                        if (l) {
                          a = !0;
                          var s = t[l];
                          s ||
                            ((s = { category: l, examples: [] }), (t[l] = s)),
                            (o.isGL = i),
                            s.examples.push(o);
                        }
                      }
                    }
                    if (!a) break;
                  } while (++n && n < 4);
                }
                return (
                  e(Ft, !1),
                  e(Rt, !0),
                  {
                    shared: dt,
                    icons: ml,
                    EXAMPLE_CATEGORIES: at,
                    exampleListByCategory: t,
                  }
                );
              },
              watch: {
                "shared.darkMode": function () {
                  for (
                    var t = this.$el.querySelectorAll("img.chart-area"), e = 0;
                    e < t.length;
                    e++
                  )
                    t[e].classList.remove(yl),
                      t[e].setAttribute("data-was-processed", "false");
                  this._lazyload.update();
                },
              },
              computed: {
                exampleList: function () {
                  for (var t = [], e = 0; e < at.length; e++) {
                    var i = at[e],
                      n = this.exampleListByCategory[i];
                    n &&
                      n.examples.length > 0 &&
                      t.push({ category: i, examples: n.examples });
                  }
                  return t;
                },
              },
              mounted: function () {
                this._lazyload = new hl({
                  elements_selector: "img.chart-area",
                  load_delay: 400,
                  class_loaded: yl,
                });
              },
              methods: { onActiveNavChanged: function (t, e, i) {} },
            },
            No,
            [],
            !1,
            null,
            null,
            null
          );
        vl.options.__file = "src/explore/Explore.vue";
        const bl = vl.exports;
        var _l = function () {
          var t = this.$createElement;
          return (this._self._c || t)("preview");
        };
        _l._withStripped = !0;
        var Ll = gt(
          {
            components: { Preview: Ht },
            mounted: function () {
              ut().then(function (t) {
                dt.runCode = pt(t);
              });
            },
          },
          _l,
          [],
          !1,
          null,
          null,
          null
        );
        Ll.options.__file = "src/editor/View.vue";
        const wl = Ll.exports;
        var xl = i(463),
          kl = i.n(xl);
        function Sl(t, e) {
          var i = new Q({
            locale: e.locale,
            fallbackLocale: "en",
            messages: Y,
          });
          if (
            ((dt.cdnRoot = e.cdnRoot),
            (dt.version = e.version),
            (dt.locale = e.locale || "en"),
            "string" == typeof t && (t = document.querySelector(t)),
            !t)
          )
            throw new Error("Can't find el.");
          var n = document.createElement("div");
          t.appendChild(n),
            new (a())({
              i18n: i,
              el: n,
              render: function (t) {
                return t({ editor: So, explore: bl, view: wl }[e.page] || bl);
              },
            });
        }
        a().use(kl());
      },
      555: (t, e, i) => {
        t.exports = i.p + "../asset/placeholder.jpg";
      },
      38: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="138px" viewBox="0 0 175 138" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>bar</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="bar" fill="#5067A2" fill-rule="nonzero"> <path d="M121.488231,0 L102.050114,0 C99.36627,-1.1969592e-16 97.1905846,2.17568537 97.1905846,4.85952929 L97.1905846,133.140471 C97.1905846,135.824315 99.36627,138 102.050114,138 L121.488231,138 C124.172075,138 126.34776,135.824315 126.34776,133.140471 L126.34776,4.85952929 C126.34776,2.17568537 124.172075,1.1969592e-16 121.488231,0 Z M170.083523,30.1571753 L150.645406,30.1571753 C147.961562,30.1571753 145.785877,32.3328607 145.785877,35.0167046 L145.785877,132.207289 C145.785877,134.891133 147.961562,137.066819 150.645406,137.066819 L170.083523,137.066819 C172.767367,137.066819 174.943052,134.891133 174.943052,132.207289 L174.943052,35.0167046 C174.943052,32.3328607 172.767367,30.1571753 170.083523,30.1571753 Z M53.4548215,39.8762339 C50.7709777,39.876234 48.5952924,42.0519193 48.5952924,44.7357631 L48.5952924,132.207289 C48.5952924,134.891133 50.7709777,137.066818 53.4548215,137.066819 L72.8929386,137.066819 C75.5767824,137.066818 77.7524677,134.891133 77.7524677,132.207289 L77.7524677,44.7357631 C77.7524676,42.0519193 75.5767824,39.876234 72.8929386,39.8762339 L53.4548215,39.8762339 Z M29.1571753,67.17388 L29.1571753,132.207289 C29.1571753,134.891133 26.9814901,137.066818 24.2976462,137.066819 L4.85952929,137.066819 C2.17568537,137.066819 3.28676086e-16,134.891133 0,132.207289 L0,67.17388 C7.33863613e-08,64.4900361 2.17568542,62.3143508 4.85952929,62.3143508 L24.2976462,62.3143508 C26.98149,62.3143509 29.1571753,64.4900362 29.1571753,67.17388 Z" id="Shape"></path> </g> </g> </svg>';
      },
      851: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="98px" viewBox="0 0 175 98" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>boxplot</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="boxplot" fill="#5067A2" fill-rule="nonzero"> <path d="M165.206074,4.85900217 L165.206074,43.7310195 L145.770065,43.7310195 L145.770065,14.5770065 C145.770065,11.8934537 143.594616,9.71800434 140.911063,9.71800434 L72.8850325,9.71800434 C70.2014797,9.71800434 68.0260304,11.8934537 68.0260304,14.5770065 L68.0260304,82.6030369 C68.0260304,85.2865897 70.2014797,87.462039 72.8850325,87.462039 L140.911063,87.462039 C143.594616,87.462039 145.770065,85.2865897 145.770065,82.6030369 L145.770065,53.4490239 L165.206074,53.4490239 L165.206074,92.3210412 C165.206074,95.004594 167.381523,97.1800434 170.065076,97.1800434 C172.748629,97.1800434 174.924078,95.004594 174.924078,92.3210412 L174.924078,4.85900217 C174.924078,2.17544937 172.748629,1.43751749e-14 170.065076,1.42108547e-14 C167.381523,-1.05827854e-15 165.206074,2.17544937 165.206074,4.85900217 Z M58.308026,14.5770065 L58.308026,82.6030369 C58.308026,83.8917244 57.7960969,85.1276306 56.8848572,86.0388703 C55.9736176,86.9501099 54.7377114,87.462039 53.4490239,87.462039 L34.0130152,87.462039 C31.3294624,87.462039 29.154013,85.2865897 29.154013,82.6030369 L29.154013,53.4490239 L9.71800434,53.4490239 L9.71800434,92.3210412 C9.71800434,95.004594 7.54255497,97.1800434 4.85900217,97.1800434 C2.17544937,97.1800434 3.28640434e-16,95.004594 0,92.3210412 L0,4.85900217 C-3.28640434e-16,2.17544937 2.17544937,4.31255248e-14 4.85900217,4.26325641e-14 C7.54255497,4.21396035e-14 9.71800434,2.17544937 9.71800434,4.85900217 L9.71800434,43.7310195 L29.154013,43.7310195 L29.154013,14.5770065 C29.154013,11.8934537 31.3294624,9.71800434 34.0130152,9.71800434 L53.4490239,9.71800434 C56.1325767,9.71800434 58.308026,11.8934537 58.308026,14.5770065 L58.308026,14.5770065 Z" id="Shape"></path> </g> </g> </svg>';
      },
      496: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="164px" height="138px" viewBox="0 0 164 138" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>calendar </title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="calendar-" transform="translate(-0.500000, -0.315789)" fill="#5067A2" fill-rule="nonzero"> <path d="M147.236842,56.3782895 C147.236842,53.9965615 145.304597,52.0657895 142.921053,52.0657895 L125.657895,52.0657895 C123.27435,52.0657895 121.342105,53.9965615 121.342105,56.3782895 L121.342105,65.0032895 C121.342105,67.3850175 123.27435,69.3157895 125.657895,69.3157895 L142.921053,69.3157895 C145.304597,69.3157895 147.236842,67.3850175 147.236842,65.0032895 L147.236842,56.3782895 Z M147.236842,82.2532895 C147.236842,79.8715615 145.304597,77.9407895 142.921053,77.9407895 L125.657895,77.9407895 C123.27435,77.9407895 121.342105,79.8715615 121.342105,82.2532895 L121.342105,90.8782895 C121.342105,93.2600175 123.27435,95.1907895 125.657895,95.1907895 L142.921053,95.1907895 C145.304597,95.1907895 147.236842,93.2600175 147.236842,90.8782895 L147.236842,82.2532895 Z M112.710526,56.3782895 C112.710526,53.9965615 110.778282,52.0657895 108.394737,52.0657895 L91.1315789,52.0657895 C88.7480342,52.0657895 86.8157895,53.9965615 86.8157895,56.3782895 L86.8157895,65.0032895 C86.8157895,67.3850175 88.7480342,69.3157895 91.1315789,69.3157895 L108.394737,69.3157895 C110.778282,69.3157895 112.710526,67.3850175 112.710526,65.0032895 L112.710526,56.3782895 Z M112.710526,82.2532895 C112.710526,79.8715615 110.778282,77.9407895 108.394737,77.9407895 L91.1315789,77.9407895 C88.7480342,77.9407895 86.8157895,79.8715615 86.8157895,82.2532895 L86.8157895,90.8782895 C86.8157895,93.2600175 88.7480342,95.1907895 91.1315789,95.1907895 L108.394737,95.1907895 C110.778282,95.1907895 112.710526,93.2600175 112.710526,90.8782895 L112.710526,82.2532895 Z M112.710526,108.128289 C112.710526,105.746561 110.778282,103.815789 108.394737,103.815789 L91.1315789,103.815789 C88.7480342,103.815789 86.8157895,105.746561 86.8157895,108.128289 L86.8157895,116.753289 C86.8157895,119.135017 88.7480342,121.065789 91.1315789,121.065789 L108.394737,121.065789 C110.778282,121.065789 112.710526,119.135017 112.710526,116.753289 L112.710526,108.128289 Z M78.1842105,56.3782895 C78.1842105,53.9965615 76.2519658,52.0657895 73.8684211,52.0657895 L56.6052632,52.0657895 C54.2217184,52.0657895 52.2894737,53.9965615 52.2894737,56.3782895 L52.2894737,65.0032895 C52.2894737,67.3850175 54.2217184,69.3157895 56.6052632,69.3157895 L73.8684211,69.3157895 C76.2519658,69.3157895 78.1842105,67.3850175 78.1842105,65.0032895 L78.1842105,56.3782895 Z M78.1842105,82.2532895 C78.1842105,79.8715615 76.2519658,77.9407895 73.8684211,77.9407895 L56.6052632,77.9407895 C54.2217184,77.9407895 52.2894737,79.8715615 52.2894737,82.2532895 L52.2894737,90.8782895 C52.2894737,93.2600175 54.2217184,95.1907895 56.6052632,95.1907895 L73.8684211,95.1907895 C76.2519658,95.1907895 78.1842105,93.2600175 78.1842105,90.8782895 L78.1842105,82.2532895 Z M78.1842105,108.128289 C78.1842105,105.746561 76.2519658,103.815789 73.8684211,103.815789 L56.6052632,103.815789 C54.2217184,103.815789 52.2894737,105.746561 52.2894737,108.128289 L52.2894737,116.753289 C52.2894737,119.135017 54.2217184,121.065789 56.6052632,121.065789 L73.8684211,121.065789 C76.2519658,121.065789 78.1842105,119.135017 78.1842105,116.753289 L78.1842105,108.128289 Z M43.6578947,82.2532895 C43.6578947,79.8715615 41.72565,77.9407895 39.3421053,77.9407895 L22.0789474,77.9407895 C19.6954027,77.9407895 17.7631579,79.8715615 17.7631579,82.2532895 L17.7631579,90.8782895 C17.7631579,93.2600175 19.6954027,95.1907895 22.0789474,95.1907895 L39.3421053,95.1907895 C41.72565,95.1907895 43.6578947,93.2600175 43.6578947,90.8782895 L43.6578947,82.2532895 Z M43.6578947,108.128289 C43.6578947,105.746561 41.72565,103.815789 39.3421053,103.815789 L22.0789474,103.815789 C19.6954027,103.815789 17.7631579,105.746561 17.7631579,108.128289 L17.7631579,116.753289 C17.7631579,119.135017 19.6954027,121.065789 22.0789474,121.065789 L39.3421053,121.065789 C41.72565,121.065789 43.6578947,119.135017 43.6578947,116.753289 L43.6578947,108.128289 Z M164.5,39.1282895 L164.5,134.003289 C164.5,136.385017 162.567755,138.315789 160.184211,138.315789 L4.81578947,138.315789 C2.43224476,138.315789 0.5,136.385017 0.5,134.003289 L0.5,39.1282895 C0.5,36.7465615 2.43224476,34.8157895 4.81578947,34.8157895 L160.184211,34.8157895 C162.567755,34.8157895 164.5,36.7465615 164.5,39.1282895 Z M164.5,4.62828947 L164.5,21.8782895 C164.5,24.2600175 162.567755,26.1907895 160.184211,26.1907895 L4.81578947,26.1907895 C2.43224476,26.1907895 0.5,24.2600175 0.5,21.8782895 L0.5,4.62828947 C0.5,2.24656149 2.43224476,0.315789474 4.81578947,0.315789474 L160.184211,0.315789474 C162.567755,0.315789474 164.5,2.24656149 164.5,4.62828947 Z" id="Shape"></path> </g> </g> </svg>';
      },
      173: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="138px" viewBox="0 0 175 138" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Candlestick (1)</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Candlestick-(1)" fill="#5067A2" fill-rule="nonzero"> <path d="M121.508001,34.0222403 L116.647681,33.0222403 L116.647681,4.86032 C116.647681,2.17603934 114.471642,-7.11961547e-08 111.787361,-7.11961549e-08 C109.10308,-7.1196155e-08 106.927041,2.17603934 106.927041,4.86032 L106.927041,33.0222403 L102.066721,33.0222403 C100.777684,33.0222403 99.5414424,33.5343082 98.6299556,34.4457951 C97.7184688,35.3572819 97.2064009,36.5935234 97.2064009,37.8825604 L97.2064009,105.927041 C97.2064009,107.216078 97.7184688,108.452319 98.6299556,109.363806 C99.5414424,110.275293 100.777684,110.787361 102.066721,110.787361 L106.927041,110.787361 L106.927041,125.572455 C106.927041,128.256735 109.10308,130.432775 111.787361,130.432775 C114.471642,130.432775 116.647681,128.256735 116.647681,125.572455 L116.647681,110.787361 L121.508001,110.787361 C122.797038,110.787361 124.03328,110.275293 124.944766,109.363806 C125.856253,108.452319 126.368321,107.216078 126.368321,105.927041 L126.368321,37.8825604 C126.368321,36.5935233 125.856253,35.3572819 124.944766,34.445795 C124.03328,33.5343082 122.797038,33.0222402 121.508001,33.0222403 L121.508001,34.0222403 Z M170.111202,41.6032004 L165.250881,41.6032004 L165.250881,27.0222403 C165.250881,24.3379598 163.074842,22.1619207 160.390561,22.1619207 C157.706281,22.1619207 155.530242,24.3379598 155.530241,27.0222403 L155.530241,41.6032004 L150.669921,41.6032004 C149.380884,41.6032004 148.144643,42.1152684 147.233156,43.0267552 C146.321669,43.938242 145.809601,45.1744835 145.809601,46.4635205 L145.809601,75.6254408 C145.809601,78.3097214 147.985641,80.4857608 150.669921,80.4857608 L155.530241,80.4857608 L155.530241,104.729037 C155.530241,107.413318 157.706281,109.589357 160.390561,109.589357 C163.074842,109.589357 165.250881,107.413318 165.250881,104.729037 L165.250881,80.4857608 L170.111202,80.4857608 C172.795482,80.4857608 174.971522,78.3097214 174.971522,75.6254408 L174.971522,46.4635205 C174.971522,45.1744835 174.459454,43.938242 173.547967,43.0267552 C172.63648,42.1152684 171.400239,41.6032004 170.111202,41.6032004 L170.111202,41.6032004 Z M72.9048007,84.3460808 L68.0444807,84.3460808 L68.0444807,55.1841605 C68.0444805,52.4998799 65.8684412,50.3238407 63.1841606,50.3238407 C60.49988,50.3238407 58.3238406,52.4998799 58.3238405,55.1841605 L58.3238405,84.3460808 L53.4635205,84.3460808 C52.1744835,84.3460807 50.938242,84.8581487 50.0267552,85.7696355 C49.1152683,86.6811224 48.6032003,87.9173639 48.6032004,89.2064009 L48.6032004,118.368321 C48.6032004,119.657358 49.1152684,120.8936 50.0267552,121.805086 C50.938242,122.716573 52.1744835,123.228641 53.4635205,123.228641 L58.3238405,123.228641 L58.3238405,132.949281 C58.3238406,135.633562 60.49988,137.809601 63.1841606,137.809601 C65.8684412,137.809601 68.0444805,135.633562 68.0444807,132.949281 L68.0444807,123.228641 L72.9048007,123.228641 C75.5890813,123.228641 77.7651206,121.052602 77.7651206,118.368321 L77.7651206,89.2064009 C77.7651207,87.9173639 77.2530527,86.6811224 76.3415659,85.7696356 C75.4300791,84.8581488 74.1938377,84.3460808 72.9048007,84.3460808 Z M29.1619203,41.6032004 L29.1619203,90.2064009 C29.1619203,92.8906815 26.9858809,95.0667209 24.3016003,95.0667209 L19.4412801,95.0667209 L19.4412801,119.572455 C19.4412801,122.256735 17.2652407,124.432775 14.5809601,124.432775 C11.8966795,124.432775 9.72064013,122.256735 9.72064013,119.572455 L9.72064013,95.0667209 L4.86032,95.0667209 C2.17603938,95.0667209 3.28729566e-16,92.8906815 0,90.2064009 L0,41.6032004 C-3.28729566e-16,38.9189198 2.17603938,36.7428804 4.86032,36.7428804 L9.72064013,36.7428804 L9.72064013,12.4412801 C9.72064013,9.75699951 11.8966795,7.58096013 14.5809601,7.58096013 C17.2652407,7.58096013 19.4412801,9.75699951 19.4412801,12.4412801 L19.4412801,36.7428804 L24.3016003,36.7428804 C26.9858809,36.7428804 29.1619203,38.9189198 29.1619203,41.6032004 Z" id="Shape"></path> </g> </g> </svg>';
      },
      353: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="159px" height="142px" viewBox="0 0 159 142" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>custom</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="custom" transform="translate(0.000000, -0.825151)" fill="#5067A2" fill-rule="nonzero"> <path d="M74.8235294,81.2918174 L74.8235294,138.091817 C74.8235294,140.705965 72.7298022,142.825151 70.1470588,142.825151 L4.67647054,142.825151 C2.09372718,142.825151 3.16294839e-16,140.705965 0,138.091817 L0,81.2918174 C-3.63362476e-08,80.0364594 0.492698108,78.8325175 1.36970646,77.9448453 C2.24671482,77.0571731 3.43619342,76.558484 4.67647054,76.558484 L70.1470588,76.558484 C71.387336,76.558484 72.5768146,77.0571731 73.4538229,77.9448453 C74.3308313,78.8325175 74.8235294,80.0364594 74.8235294,81.2918174 Z M74.8235294,5.55848402 L74.8235294,62.358484 C74.8235294,63.6138421 74.3308313,64.817784 73.4538229,65.7054562 C72.5768146,66.5931284 71.387336,67.0918174 70.1470588,67.0918174 L4.67647054,67.0918174 C3.43619342,67.0918174 2.24671482,66.5931284 1.36970646,65.7054562 C0.492698108,64.817784 -3.63362423e-08,63.6138421 0,62.358484 L0,5.55848402 C-2.35506485e-15,4.30312598 0.492698161,3.09918414 1.36970651,2.21151195 C2.24671486,1.32383977 3.43619344,0.825150732 4.67647054,0.825150732 L70.1470588,0.825150732 C72.7298022,0.825150732 74.8235294,2.94433623 74.8235294,5.55848402 Z M159,10.2918174 L159,57.6251507 C159,62.8534463 154.812546,67.0918174 149.647059,67.0918174 L93.5294118,67.0918174 C88.363925,67.0918174 84.1764706,62.8534464 84.1764706,57.6251507 L84.1764706,10.2918174 C84.1764706,5.06352179 88.363925,0.825150732 93.5294118,0.825150732 L149.647059,0.825150732 C154.812546,0.825150809 159,5.06352184 159,10.2918174 Z M154.323529,76.558484 C155.563807,76.558484 156.753285,77.0571731 157.630294,77.9448453 C158.507302,78.8325175 159,80.0364594 159,81.2918174 L159,138.091817 C159,140.705965 156.906273,142.825151 154.323529,142.825151 L88.8529412,142.825151 C86.2701978,142.825151 84.1764706,140.705965 84.1764706,138.091817 L84.1764706,81.2918174 C84.1764706,80.0364594 84.6691687,78.8325175 85.5461771,77.9448453 C86.4231854,77.0571731 87.612664,76.558484 88.8529412,76.558484 L154.323529,76.558484 L154.323529,76.558484 Z M93.5294118,133.358484 L149.647059,133.358484 L149.647059,86.0251507 L93.5294118,86.0251507 L93.5294118,133.358484 L93.5294118,133.358484 Z" id="Shape"></path> </g> </g> </svg>';
      },
      6: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="83px" viewBox="0 0 175 83" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>dataZoom</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="dataZoom" fill="#5067A2" fill-rule="nonzero"> <path d="M9.20037003,18.4191593 L9.20957963,13.8143694 L9.20957963,18.4191593 L41.4431082,18.4191593 L41.4431082,64.4670572 L9.20957963,64.4670572 L9.20957963,18.4191593 L9.20037003,18.4191593 Z M133.538904,64.4670572 L133.538904,18.4191593 L165.772433,18.4191593 L165.772433,64.4670572 L133.538904,64.4670572 L133.538904,64.4670572 Z M165.772433,9.20957963 L133.538904,9.20957963 L133.538904,4.60478981 C133.538904,2.06163473 131.47727,2.74466854e-07 128.934115,2.74466854e-07 C126.390959,2.74466855e-07 124.329325,2.06163473 124.329325,4.60478981 L124.329325,9.20957963 L50.6526879,9.20957963 L50.6526879,4.60478981 C50.6526879,2.06163462 48.5910532,-6.1602121e-15 46.047898,-6.31593544e-15 C43.5047429,-6.47165878e-15 41.4431082,2.06163462 41.4431082,4.60478981 L41.4431082,9.20957963 L9.20957963,9.20957963 C4.13510123,9.20957963 0,13.3446809 0,18.4191593 L0,64.4670572 C0,69.5507451 4.13510123,73.6766368 9.20957963,73.6766368 L41.4431082,73.6766368 L41.4431082,78.2814267 C41.4431082,80.8245818 43.5047429,82.8862165 46.047898,82.8862165 C48.5910532,82.8862165 50.6526879,80.8245818 50.6526879,78.2814267 L50.6526879,73.6766368 L124.329325,73.6766368 L124.329325,78.2814267 C124.329325,80.8245818 126.390959,82.8862165 128.934115,82.8862165 C131.47727,82.8862165 133.538904,80.8245818 133.538904,78.2814267 L133.538904,73.6766368 L165.772433,73.6766368 C170.858743,73.6766368 174.982013,69.5533676 174.982013,64.4670572 L174.982013,18.4191593 C174.982013,13.3446809 170.856121,9.20957963 165.772433,9.20957963 Z" id="Shape"></path> </g> </g> </svg>';
      },
      238: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="145px" height="157px" viewBox="0 0 145 157" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>dataset</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="dataset" fill="#5067A2" fill-rule="nonzero"> <path d="M77,133.051622 C77,135.720999 74.7614237,137.884956 72,137.884956 C69.2385763,137.884956 67,135.720999 67,133.051622 L67,92.7182891 C67,90.0489128 69.2385763,87.8849558 72,87.8849558 C74.7614237,87.8849558 77,90.0489128 77,92.7182891 L77,133.051622 Z M87,92.7182888 C87.0000002,90.0489126 89.2385764,87.8849558 92,87.8849558 C94.7614236,87.8849558 96.9999998,90.0489126 97,92.7182888 L97,133.051623 C96.9999998,135.720999 94.7614236,137.884956 92,137.884956 C89.2385764,137.884956 87.0000002,135.720999 87,133.051623 L87,92.7182888 Z M58,133.072456 C58,135.730326 55.7614237,137.884956 53,137.884956 C50.2385763,137.884956 48,135.730326 48,133.072456 L48,73.6974557 C48,71.0395854 50.2385763,68.8849558 53,68.8849558 C55.7614237,68.8849558 58,71.0395854 58,73.6974557 L58,133.072456 Z M39,133.066774 C38.9999999,135.727782 36.7614237,137.884956 34,137.884956 C31.2385763,137.884956 29.0000001,135.727782 29,133.066774 L29,44.7031376 C29,42.0421293 31.2385763,39.8849558 34,39.8849558 C36.7614237,39.8849558 39,42.0421293 39,44.7031376 L39,133.066774 Z M126.3,132.884956 L126.3,63.9913737 C126.403893,62.6917747 125.897136,61.4145164 124.9129,60.4952543 L83.0962,21.7192841 C82.9895,21.6282393 82.8537001,21.5918214 82.7469999,21.5098811 C81.8447692,20.5509026 80.5501183,19.997952 79.1870999,19.9894333 L39,19.9894333 L39,10.8849558 L135.9903,10.8849558 L136,132.884956 L126.3,132.884956 Z M116,146.884956 L10,146.884956 L10,28.8849558 L74.0143636,28.8849558 L74.0143636,58.8841865 C74.0143636,63.8855711 78.3314545,67.9611095 83.6507272,67.9611097 L116,67.9611097 L116,146.884956 Z M144.990333,10.0614263 C144.990333,5.00519104 140.659667,0.884955752 135.323667,0.884955752 L38.6666667,0.884955752 C33.3403334,0.884955752 29.0000001,5.00519104 28.9999999,10.0614263 L28.9999999,19.2378969 L9.66666665,19.2378969 C4.34033332,19.2378969 0,23.3581322 0,28.4143675 L0,147.708485 C0,152.773897 4.34033332,156.884956 9.66666665,156.884956 L116,156.884956 C121.338753,156.884956 125.666667,152.77651 125.666667,147.708485 L125.666667,142.202603 L135.333333,142.202603 C140.672086,142.202603 145,138.094157 145,133.026132 L144.990333,10.0614263 Z" id="Shape"></path> </g> </g> </svg>';
      },
      642: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="159px" viewBox="0 0 175 159" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>drag</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="drag" transform="translate(0.000000, 0.000000)" fill="#5067A2" fill-rule="nonzero"> <path d="M174.799112,77.2243509 C175.141784,80.4933122 173.860538,83.7226514 171.369927,85.8675022 L145.821493,107.665891 C143.704571,109.29545 140.681703,108.978807 138.948417,106.945941 C137.215132,104.913075 137.380357,101.878162 139.32409,100.045479 L158.345038,83.8019696 L92.4385031,83.8019696 L92.4385031,144.173679 L109.273597,130.085944 C111.397298,128.30558 114.562167,128.583909 116.342532,130.70761 C118.122896,132.83131 117.844567,135.99618 115.720867,137.776544 L93.3308935,156.516741 C89.5429956,159.697467 83.9995074,159.633553 80.2859517,156.366338 L59.0490671,137.706356 C57.140269,135.840194 57.0244102,132.80703 58.7852891,130.800695 C60.546168,128.79436 63.5687212,128.515654 65.6667932,130.166159 L82.4116455,144.885586 L82.4116455,83.8019696 L16.5051101,83.8019696 L35.5360859,100.045479 C36.9700273,101.186546 37.6671397,103.019075 37.3541473,104.824694 C37.041155,106.630312 35.7679333,108.121296 34.0335988,108.713163 C32.2992644,109.305031 30.380183,108.903467 29.0286553,107.665891 L3.52032945,85.8975828 C1.25557692,83.9644222 -0.0328273042,81.1246883 0.00397844461,78.147297 C0.0407841935,75.1699056 1.39899211,72.3628885 3.71083975,70.4863026 L29.118897,49.820949 C31.2816477,48.328475 34.2285594,48.7508003 35.8850928,50.7906204 C37.5416262,52.8304405 37.3503183,55.8013071 35.4458442,57.6118174 L15.5625855,73.7751119 L82.4116455,73.7751119 L82.4116455,14.1153089 L65.6667932,28.8347359 C64.3276607,30.0598688 62.43094,30.4655542 60.7078175,29.8954003 C58.9846951,29.3252464 57.7042897,27.8683002 57.360198,26.0862151 C57.0161064,24.30413 57.662069,22.4752334 59.0490671,21.3045658 L80.2759248,2.65461056 C83.9853287,-0.629787191 89.5418994,-0.698070701 93.3308935,2.49418084 L115.720867,21.2243509 C117.320514,22.5881211 117.904229,24.8023516 117.184781,26.777481 C116.465334,28.7526104 114.594242,30.0726692 112.492218,30.0880931 C111.314421,30.0896881 110.174126,29.6740664 109.273597,28.9149508 L92.4385031,14.8272158 L92.4385031,73.7751119 L159.29759,73.7751119 L139.414331,57.6118174 C138.022627,56.4816171 137.339593,54.6948034 137.622523,52.9244518 C137.905453,51.1541001 139.111362,49.669169 140.785997,49.0290176 C142.460631,48.3888662 144.349574,48.6907487 145.741278,49.820949 L171.149336,70.4863026 C173.218763,72.1532673 174.533435,74.5803549 174.799112,77.2243509" id="Path"></path> </g> </g> </svg>';
      },
      797: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="137px" viewBox="0 0 175 137" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>funnel </title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="funnel-" fill="#5067A2" fill-rule="nonzero"> <path d="M116.331467,108.325366 L60.5285591,108.325366 C58.9291301,108.325102 57.4459378,109.160985 56.6178211,110.52934 C55.7897045,111.897695 55.7371711,113.5994 56.4793063,115.016231 L66.3876358,133.863994 C67.1750739,135.367321 68.7306799,136.310539 70.4277481,136.313655 L106.432278,136.313655 C108.129346,136.310539 109.684952,135.367321 110.47239,133.863994 L120.380719,115.016231 C121.122854,113.5994 121.070321,111.897695 120.242204,110.52934 C119.414088,109.160985 117.930896,108.325102 116.331467,108.325366 L116.331467,108.325366 Z M134.968998,71.0137414 L41.9001683,71.0137414 C40.2925309,71.0025161 38.7981975,71.8401445 37.9688482,73.2173896 C37.139499,74.5946346 37.098146,76.3072185 37.8600561,77.722887 L47.8415098,96.5706503 C48.6348072,98.0648166 50.1899261,98.9971843 51.881622,98.9928896 L125.024106,98.9928896 C126.716211,98.9981743 128.270437,98.0607046 129.055078,96.5615098 L139.00911,77.7137465 C139.754942,76.2976526 139.705659,74.5945859 138.879188,73.2239903 C138.052717,71.8533948 136.569493,71.014997 134.968998,71.0137414 L134.968998,71.0137414 Z M153.63395,35.5759245 L23.2352156,35.5759245 C21.6347203,35.5771801 20.151496,36.4155778 19.325025,37.7861734 C18.498554,39.156769 18.4492717,40.8598357 19.1951033,42.2759296 L29.1491354,61.1145524 C29.9359394,62.6172637 31.4930184,63.5578521 33.1892477,63.5550727 L143.70734,63.5550727 C145.402425,63.5537423 146.957543,62.6143387 147.747452,61.1145524 L157.674063,42.266789 C158.415446,40.8514003 158.363824,39.1515952 157.537917,37.7838041 C156.712011,36.4160129 155.231751,35.5788553 153.63395,35.5759245 L153.63395,35.5759245 Z M174.995358,4.69922974 C174.994253,5.44166711 174.81229,6.17265769 174.465208,6.82897225 L164.538597,25.6767355 C163.746223,27.1729824 162.191592,28.108575 160.498485,28.1081153 L14.4968732,28.1081153 C12.8031994,28.1106197 11.2475937,27.1744407 10.4567611,25.6767355 L0.530150516,6.82897225 C-0.215681017,5.41287837 -0.166398756,3.70981169 0.660072225,2.33921611 C1.48654321,0.96862053 2.96976742,0.130222778 4.57026264,0.1289671 L170.425096,0.1289671 C172.949182,0.1289671 174.995358,2.17514338 174.995358,4.69922974 L174.995358,4.69922974 Z" id="Shape"></path> </g> </g> </svg>';
      },
      822: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="100px" viewBox="0 0 175 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>gange</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="gange" fill="#5067A2" fill-rule="nonzero"> <path d="M143.698895,82.9089367 C142.437361,67.6655629 135.026556,53.5920156 123.171797,43.9267897 L135.7146,25.9137777 C153.409366,39.7333892 164.305583,60.4959162 165.625777,82.9089367 L143.698895,82.9089367 L143.698895,82.9089367 Z M115.601912,38.6960173 C112.342946,36.8541942 108.909619,35.339582 105.352176,34.174346 L107.654453,22.8655635 C107.981818,21.2534161 107.424245,19.5890834 106.191766,18.4995036 C104.959288,17.4099237 103.239147,17.0606298 101.679304,17.5831975 C100.119461,18.1057651 98.9568933,19.4208039 98.6295287,21.0329513 L96.4193432,31.8996968 C93.4676767,31.3974455 90.4804994,31.132603 87.4865101,31.1077136 C77.1817177,31.1042083 67.0761605,33.9468942 58.284434,39.3222365 L45.5021944,21.4934066 C70.6181595,5.43266895 102.701308,5.12868193 128.117087,20.7106326 L115.601912,38.6960173 L115.601912,38.6960173 Z M31.2649159,82.9089367 L9.34724295,82.9089367 C10.6455448,61.0475255 21.0636813,40.7358347 38.0612364,26.9267794 L50.843476,44.7464001 C39.5322634,54.3814577 32.493597,68.101229 31.2649159,82.9089367 L31.2649159,82.9089367 Z M87.4865101,0.0269797767 C39.2492112,0.0269797767 0,39.276191 0,87.5134899 C5.46353103e-08,90.0565144 2.06152873,92.118043 4.60455321,92.118043 L35.685287,92.118043 C38.2283115,92.118043 40.2898401,90.0565144 40.2898401,87.5134899 C40.315223,61.4580101 61.4310302,40.3422029 87.4865101,40.31682 C89.908505,40.31682 92.2384089,40.6759751 94.5683128,41.0351302 L86.9247546,78.6451205 C82.0531374,79.4923583 78.2774037,83.5443651 78.2774037,88.6646282 C78.2774037,94.3864333 82.9158433,99.0248728 88.6376484,99.0248728 C94.3594535,99.0248728 98.997893,94.3864333 98.997893,88.6646282 C98.997893,85.7361324 97.7546637,83.102328 95.793124,81.2236703 L103.501146,43.3005704 C121.633876,49.8942906 134.68318,67.1337376 134.68318,87.5134899 C134.68318,90.0565144 136.744709,92.118043 139.287733,92.118043 L170.368467,92.118043 C172.911491,92.118043 174.97302,90.0565144 174.97302,87.5134899 C174.97302,39.276191 135.723809,0.0269798756 87.4865101,0.0269797767 L87.4865101,0.0269797767 Z" id="Shape"></path> </g> </g> </svg>';
      },
      317: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="142px" viewBox="0 0 175 142" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>geo</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="geo" fill="#5067A2" fill-rule="nonzero"> <path d="M9.20332621,34.019885 L55.2181167,56.861627 L55.2181167,128.571076 L9.20332621,103.207724 L9.20332621,34.019885 Z M171.819596,50.2815119 L151.996424,43.1124076 C149.63126,42.3318353 147.074346,43.5747977 146.227189,45.9169373 C145.380032,48.2590769 146.550177,50.8501245 148.867418,51.7631882 L165.653614,57.8371405 L165.653614,131.138702 L119.638823,119.625801 L119.638823,87.4706656 C119.638823,84.9293389 117.578671,82.8691865 115.037344,82.8691865 C112.496018,82.8691865 110.435865,84.9293389 110.435865,87.4706656 L110.435865,119.644207 L64.4210748,131.41479 L64.4210748,58.2236647 L81.060023,51.7263763 C83.2914479,50.7138845 84.3410975,48.1328302 83.4496557,45.8503474 C82.5582139,43.5678645 80.037126,42.3813901 77.7101463,43.1492194 L61.2460542,49.5820871 L6.64490386,22.4793755 C5.21943693,21.7614379 3.52312776,21.8367966 2.16693957,22.6783095 C0.810751382,23.5198224 -0.00997312356,25.0062796 0.000368118324,26.6023007 L0.000368118324,105.913394 C0.000368118324,107.597535 0.91146097,109.134429 2.38393426,109.944289 L58.8072703,141.059491 C59.8287987,141.620871 61.0435892,141.795727 62.16635,141.49203 L115.046547,127.963681 L169.141535,141.501233 C170.516378,141.840666 171.970958,141.532118 173.089604,140.663763 C174.206625,139.788526 174.858383,138.44767 174.856572,137.028595 L174.856572,54.6069022 C174.855748,52.6695411 173.64154,50.9402146 171.819596,50.2815119 Z M115.037344,16.5986853 C121.13907,16.6012266 126.083435,21.5497125 126.080894,27.651438 C126.078353,33.7531634 121.129867,38.697529 115.028141,38.6949877 C108.926416,38.6924463 103.98205,33.7439604 103.984592,27.642235 C103.987133,21.5405096 108.935619,16.596144 115.037344,16.5986853 L115.037344,16.5986853 Z M99.5763747,54.7173377 C102.208421,58.3341002 105.00612,61.9140509 107.813022,65.199507 C108.806942,66.3866886 109.718035,67.4358258 110.491083,68.3285127 C111.04326,68.8806902 111.402176,69.2856204 111.558626,69.4512736 C112.438859,70.4713636 113.723372,71.0524431 115.07068,71.0400337 C116.417988,71.0276243 117.69158,70.4229833 118.552874,69.3868529 C118.72773,69.2211997 119.06824,68.8254725 119.555997,68.264092 C120.506081,67.2663872 121.406012,66.2220982 122.252463,65.1350863 C125.059366,61.8496302 127.866268,58.2788825 130.498314,54.6437141 C133.121157,51.0177486 135.412694,47.4470008 137.262488,44.0879211 C140.741206,37.8851274 142.646219,32.5382087 142.646219,28.1207888 C142.701436,12.5861956 130.314255,0.0425636812 115.028141,0.0425636812 C99.7604339,0.0425636812 87.42847,12.5861956 87.42847,28.1207888 C87.42847,32.5382087 89.3334823,37.9403451 92.8029975,44.1523418 C94.7172128,47.5114215 97.0087494,51.0729663 99.5763747,54.7173377 Z" id="Shape"></path> </g> </g> </svg>';
      },
      926: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="120px" viewBox="0 0 175 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>gl</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="gl" fill="#5067A2"> <path d="M170.394737,101.315789 L119.736842,101.315789 L119.736842,4.60526316 C119.736842,2.06315789 117.673684,0 115.131579,0 L105.921053,0 C103.378947,0 101.315789,2.06315789 101.315789,4.60526316 L101.315789,115.131579 C101.315789,117.673684 103.378947,119.736842 105.921053,119.736842 L170.394737,119.736842 C172.936842,119.736842 175,117.673684 175,115.131579 L175,105.921053 C175,103.378947 172.936842,101.315789 170.394737,101.315789" id="Fill-1"></path> <path d="M78.2894737,0 L4.60526316,0 C2.06315789,0 0,2.06315789 0,4.60526316 L0,115.131579 C0,117.673684 2.06315789,119.736842 4.60526316,119.736842 L78.2894737,119.736842 C80.8315789,119.736842 82.8947368,117.673684 82.8947368,115.131579 L82.8947368,59.8684211 C82.8947368,57.3263158 80.8315789,55.2631579 78.2894737,55.2631579 L41.4473684,55.2631579 C38.9052632,55.2631579 36.8421053,57.3263158 36.8421053,59.8684211 L36.8421053,69.0789474 C36.8421053,71.6210526 38.9052632,73.6842105 41.4473684,73.6842105 L64.4736842,73.6842105 L64.4736842,101.315789 L18.4210526,101.315789 L18.4210526,18.4210526 L64.4736842,18.4210526 L64.4736842,32.2368421 C64.4736842,34.7789474 66.5368421,36.8421053 69.0789474,36.8421053 L78.2894737,36.8421053 C80.8315789,36.8421053 82.8947368,34.7789474 82.8947368,32.2368421 L82.8947368,4.60526316 C82.8947368,2.06315789 80.8315789,0 78.2894737,0" id="Fill-3"></path> </g> </g> </svg>';
      },
      769: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="171px" height="146px" viewBox="0 0 171 146" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>graph</title> <desc>Created with Sketch.</desc> <defs> <polygon id="path-1" points="0.06 0 171 0 171 146 0.06 146"></polygon> </defs> <g id="graph" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <mask id="mask-2" fill="white"> <use xlink:href="#path-1"></use> </mask> <g id="Clip-2"></g> <path d="M171,100 C171,106.075 166.075,111 160,111 C154.016,111 149.158,106.219 149.014,100.27 L114.105,83.503 C111.564,86.693 108.179,89.18 104.282,90.616 L108.698,124.651 C112.951,126.172 116,130.225 116,135 C116,141.075 111.075,146 105,146 C98.925,146 94,141.075 94,135 C94,131.233 95.896,127.912 98.781,125.93 L94.364,91.896 C82.94,90.82 74,81.206 74,69.5 C74,69.479 74.001,69.46 74.001,69.439 L53.719,64.759 C50.642,70.269 44.76,74 38,74 C36.07,74 34.215,73.689 32.472,73.127 L20.624,90.679 C21.499,92.256 22,94.068 22,96 C22,102.075 17.075,107 11,107 C4.925,107 0,102.075 0,96 C0,89.925 4.925,85 11,85 C11.452,85 11.895,85.035 12.332,85.089 L24.184,67.531 C21.574,64.407 20,60.389 20,56 C20,48.496 24.594,42.07 31.121,39.368 L29.111,21.279 C24.958,19.707 22,15.704 22,11 C22,4.925 26.925,0 33,0 C39.075,0 44,4.925 44,11 C44,14.838 42.031,18.214 39.051,20.182 L41.061,38.279 C49.223,39.681 55.49,46.564 55.95,55.011 L76.245,59.694 C79.889,52.181 87.589,47 96.5,47 C100.902,47 105.006,48.269 108.475,50.455 L131.538,27.391 C131.192,26.322 131,25.184 131,24 C131,17.925 135.925,13 142,13 C148.075,13 153,17.925 153,24 C153,30.075 148.075,35 142,35 C140.816,35 139.678,34.808 138.609,34.461 L115.546,57.525 C117.73,60.994 119,65.098 119,69.5 C119,71.216 118.802,72.884 118.438,74.49 L153.345,91.257 C155.193,89.847 157.495,89 160,89 C166.075,89 171,93.925 171,100" id="Fill-1" fill="#4F608A" mask="url(#mask-2)"></path> </g> </svg>';
      },
      781: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="165px" height="137px" viewBox="0 0 165 137" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>heatmap</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="heatmap" transform="translate(-0.500000, -0.474277)" fill-rule="nonzero"> <path d="M44.5999999,89.4742765 L5.40000005,89.4742765 C2.6938048,89.4742765 0.500000074,87.2916647 0.5,84.5992766 L0.5,55.3492765 C0.500000074,52.6568883 2.6938048,50.4742765 5.40000005,50.4742765 L44.5999999,50.4742765 C47.3061952,50.4742765 49.4999999,52.6568883 49.5,55.3492765 L49.5,84.5992766 C49.4999999,87.2916647 47.3061952,89.4742765 44.5999999,89.4742765" id="Path" fill="#687DB0"></path> <path d="M102.6,89.4742765 L63.3999999,89.4742765 C60.6938047,89.4742765 58.5000001,87.2916647 58.5,84.5992766 L58.5,55.3492765 C58.5000001,52.6568884 60.6938047,50.4742766 63.3999999,50.4742765 L102.6,50.4742765 C105.306195,50.4742765 107.5,52.6568883 107.5,55.3492765 L107.5,84.5992766 C107.5,87.2916647 105.306195,89.4742765 102.6,89.4742765" id="Path" fill="#8497C0"></path> <path d="M160.6,89.4742765 L121.4,89.4742765 C118.693805,89.4742765 116.5,87.2916647 116.5,84.5992766 L116.5,55.3492765 C116.5,52.6568884 118.693805,50.4742766 121.4,50.4742765 L160.6,50.4742765 C163.306195,50.4742766 165.5,52.6568884 165.5,55.3492765 L165.5,84.5992766 C165.5,87.2916647 163.306195,89.4742765 160.6,89.4742765" id="Path" fill="#A7B4D1"></path> <path d="M44.5999999,137.474277 L5.40000005,137.474277 C2.69380475,137.474277 0.5,135.291665 0.5,132.599276 L0.5,103.349277 C0.5,100.656888 2.69380475,98.4742765 5.40000005,98.4742765 L44.5999999,98.4742765 C45.8995608,98.4742765 47.1458949,98.9878911 48.0648232,99.902131 C48.9837515,100.816371 49.5,102.056346 49.5,103.349277 L49.5,132.599276 C49.5,135.291665 47.3061953,137.474277 44.5999999,137.474277" id="Path" fill="#8497C0"></path> <path d="M102.6,137.474277 L63.3999999,137.474277 C60.6938047,137.474276 58.5,135.291665 58.5,132.599276 L58.5,103.349277 C58.5,100.656888 60.6938047,98.4742766 63.3999999,98.4742765 L102.6,98.4742765 C105.306195,98.4742765 107.5,100.656888 107.5,103.349277 L107.5,132.599276 C107.5,135.291665 105.306195,137.474277 102.6,137.474277" id="Path" fill="#A7B4D1"></path> <path d="M160.6,137.474277 L121.4,137.474277 C118.693805,137.474276 116.5,135.291665 116.5,132.599276 L116.5,103.349277 C116.5,100.656888 118.693805,98.4742766 121.4,98.4742765 L160.6,98.4742765 C163.306195,98.4742766 165.5,100.656888 165.5,103.349277 L165.5,132.599276 C165.5,135.291665 163.306195,137.474276 160.6,137.474277" id="Path" fill="#CDD5E3"></path> <path d="M5.40000005,0.474276527 L44.5999999,0.474276527 C47.3061953,0.474276527 49.5,2.65688839 49.5,5.34927658 L49.5,34.5992765 C49.5,37.2916647 47.3061953,39.4742765 44.5999999,39.4742765 L5.40000005,39.4742765 C2.69380475,39.4742765 0.5,37.2916647 0.5,34.5992765 L0.5,5.34927658 C0.5,2.65688839 2.69380475,0.474276527 5.40000005,0.474276527" id="Path" fill="#5067A2"></path> <path d="M102.6,39.4742765 L63.3999999,39.4742765 C60.6938047,39.4742765 58.5,37.2916646 58.5,34.5992765 L58.5,5.34927658 C58.5,2.65688845 60.6938047,0.474276601 63.3999999,0.474276527 L102.6,0.474276527 C105.306195,0.474276527 107.5,2.65688839 107.5,5.34927658 L107.5,34.5992765 C107.5,37.2916647 105.306195,39.4742765 102.6,39.4742765" id="Path" fill="#687DB0"></path> <path d="M160.6,39.4742765 L121.4,39.4742765 C118.693805,39.4742765 116.5,37.2916646 116.5,34.5992765 L116.5,5.34927658 C116.5,2.65688845 118.693805,0.474276601 121.4,0.474276527 L160.6,0.474276527 C163.306195,0.474276601 165.5,2.65688845 165.5,5.34927658 L165.5,34.5992765 C165.5,37.2916646 163.306195,39.4742765 160.6,39.4742765" id="Path" fill="#8497C0"></path> </g> </g> </svg>';
      },
      69: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="138px" viewBox="0 0 175 138" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>line</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="line" fill="#5067A2" fill-rule="nonzero"> <path d="M25.2739189,111.655778 C26.7855309,111.657407 28.2007506,110.913642 29.0567232,109.667735 L69.3606163,51.4346379 L108.642876,94.5825372 C109.596174,95.6275458 110.977093,96.1760957 112.387618,96.0700817 C113.798143,95.9640677 115.081554,95.2152689 115.86794,94.0395069 L167.15209,17.582681 C168.126301,16.2187314 168.281888,14.4329668 167.558237,12.9210891 C166.834585,11.4092114 165.346152,10.4103472 163.672804,10.3136363 C161.999456,10.2169253 160.40586,11.0376639 159.512851,12.4561069 L111.496086,84.0348638 L72.2782537,40.9605957 C71.3313898,39.926718 69.968454,39.3754562 68.5690807,39.4603596 C67.1694417,39.5586882 65.8899144,40.2864616 65.0900052,41.4391988 L21.4911146,104.439918 C20.5200574,105.846972 20.4090348,107.676368 21.202809,109.190526 C21.9965833,110.704685 23.5643138,111.65402 25.2739189,111.655778" id="Path"></path> <path d="M170.272214,127.854648 L9.20390349,127.854648 L9.20390349,5.00465881 C9.20390349,2.46307104 7.14353951,0.402707066 4.60195174,0.402707066 C2.06036398,0.402707066 3.11254732e-16,2.46307104 0,5.00465881 L0,132.4566 C3.11254728e-16,134.998188 2.06036395,137.058552 4.60195168,137.058552 L170.272214,137.058552 C172.813801,137.058552 174.874165,134.998188 174.874165,132.4566 C174.874165,129.915012 172.813801,129.257355 170.272214,129.257355" id="Path"></path> </g> </g> </svg>';
      },
      276: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="163px" height="137px" viewBox="0 0 163 137" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>lines</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="lines" fill="#5067A2" fill-rule="nonzero"> <path d="M118.024118,118.8 C120.522388,118.8 122.566427,120.8475 122.566427,123.35 C122.566427,125.8525 120.522388,127.9 118.024118,127.9 C115.517543,127.894993 113.486807,125.860819 113.481809,123.35 C113.481809,120.8475 115.525848,118.8 118.024118,118.8 Z M142.434485,46 L64.9673569,46 C62.4587091,46 60.4250482,48.0371044 60.4250482,50.55 C60.4250482,53.0628956 62.4587091,55.1 64.9673569,55.1 L142.034762,55.0909 C149.519307,56.1087027 154.7743,62.9956941 153.790257,70.4972 C152.963556,76.6852 148.066948,81.5264 142.434485,82.2544 L20.6642736,82.2726 C14.6272756,82.8301001 9.06337697,85.7822231 5.21133949,90.4717 C0.0521031846,96.7506172 -1.39663076,105.298969 1.40493936,112.931618 C4.20650947,120.564268 10.8382585,126.136619 18.8291809,127.5724 L105.232977,127.8909 C107.143393,133.33221 112.265894,136.980155 118.024118,137 C125.537097,137 131.651044,130.8757 131.651044,123.35 C131.651044,115.8243 125.537097,109.7 118.024118,109.7 C112.110032,109.7 107.113492,113.5129 105.232977,118.8 L21.8634431,118.8728 L20.4099043,118.618 C14.3307333,117.521702 9.72082575,112.509885 9.12680957,106.3512 C8.77445503,102.712306 9.88625731,99.0830035 12.2155795,96.2684 C14.5594108,93.4383 17.8571269,91.6911 21.0912506,91.3544 L142.988646,91.3271 C153.280464,90.058092 161.421536,81.9929721 162.802197,71.6984 C164.446513,59.2314 155.679857,47.729 142.434485,46 Z" id="Shape"></path> <path d="M31.9999101,18.2496933 C36.9704563,18.2496933 40.9998801,22.3350263 40.9998801,27.37454 C40.9998801,32.4140537 36.9704563,36.4993867 31.9999101,36.4993867 C27.0293639,36.4993867 22.9999401,32.4140537 22.9999401,27.37454 C22.9999401,22.3350263 27.0293639,18.2496933 31.9999101,18.2496933 Z M16.8799604,56.2181803 C19.4539519,59.9411177 22.1809428,63.6184309 24.9259336,66.9946242 C25.9069304,68.2173537 26.7979274,69.3032104 27.5539249,70.2156951 C28.1029231,70.7814356 28.435922,71.1920537 28.5979214,71.3654258 C30.4699152,73.555389 33.5839048,73.555389 35.4378986,71.3015518 C35.617898,71.1373046 35.932897,70.7266865 36.4188954,70.1518212 C37.2648925,69.2393365 38.1288897,68.1443549 39.0558866,66.9307503 C41.8008774,63.554557 44.5368683,59.8863687 47.1108598,56.1451815 C49.6758512,52.4131192 51.9258437,48.7449309 53.7348377,45.2957388 C57.1368264,38.917471 58.9998202,33.4243133 58.9998202,28.8710148 C59.05382,12.911658 46.9398603,0 31.9909101,0 C17.0509599,0 5,12.911658 5,28.8710148 C5,33.4243133 6.8629938,38.9722201 10.2559825,45.3596128 C12.1279763,48.8088048 14.3689688,52.4678683 16.8799604,56.2181803 Z" id="Shape"></path> </g> </g> </svg>';
      },
      831: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="142px" viewBox="0 0 175 142" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>geo</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="geo" fill="#5067A2" fill-rule="nonzero"> <path d="M9.20332621,34.019885 L55.2181167,56.861627 L55.2181167,128.571076 L9.20332621,103.207724 L9.20332621,34.019885 Z M171.819596,50.2815119 L151.996424,43.1124076 C149.63126,42.3318353 147.074346,43.5747977 146.227189,45.9169373 C145.380032,48.2590769 146.550177,50.8501245 148.867418,51.7631882 L165.653614,57.8371405 L165.653614,131.138702 L119.638823,119.625801 L119.638823,87.4706656 C119.638823,84.9293389 117.578671,82.8691865 115.037344,82.8691865 C112.496018,82.8691865 110.435865,84.9293389 110.435865,87.4706656 L110.435865,119.644207 L64.4210748,131.41479 L64.4210748,58.2236647 L81.060023,51.7263763 C83.2914479,50.7138845 84.3410975,48.1328302 83.4496557,45.8503474 C82.5582139,43.5678645 80.037126,42.3813901 77.7101463,43.1492194 L61.2460542,49.5820871 L6.64490386,22.4793755 C5.21943693,21.7614379 3.52312776,21.8367966 2.16693957,22.6783095 C0.810751382,23.5198224 -0.00997312356,25.0062796 0.000368118324,26.6023007 L0.000368118324,105.913394 C0.000368118324,107.597535 0.91146097,109.134429 2.38393426,109.944289 L58.8072703,141.059491 C59.8287987,141.620871 61.0435892,141.795727 62.16635,141.49203 L115.046547,127.963681 L169.141535,141.501233 C170.516378,141.840666 171.970958,141.532118 173.089604,140.663763 C174.206625,139.788526 174.858383,138.44767 174.856572,137.028595 L174.856572,54.6069022 C174.855748,52.6695411 173.64154,50.9402146 171.819596,50.2815119 Z M115.037344,16.5986853 C121.13907,16.6012266 126.083435,21.5497125 126.080894,27.651438 C126.078353,33.7531634 121.129867,38.697529 115.028141,38.6949877 C108.926416,38.6924463 103.98205,33.7439604 103.984592,27.642235 C103.987133,21.5405096 108.935619,16.596144 115.037344,16.5986853 L115.037344,16.5986853 Z M99.5763747,54.7173377 C102.208421,58.3341002 105.00612,61.9140509 107.813022,65.199507 C108.806942,66.3866886 109.718035,67.4358258 110.491083,68.3285127 C111.04326,68.8806902 111.402176,69.2856204 111.558626,69.4512736 C112.438859,70.4713636 113.723372,71.0524431 115.07068,71.0400337 C116.417988,71.0276243 117.69158,70.4229833 118.552874,69.3868529 C118.72773,69.2211997 119.06824,68.8254725 119.555997,68.264092 C120.506081,67.2663872 121.406012,66.2220982 122.252463,65.1350863 C125.059366,61.8496302 127.866268,58.2788825 130.498314,54.6437141 C133.121157,51.0177486 135.412694,47.4470008 137.262488,44.0879211 C140.741206,37.8851274 142.646219,32.5382087 142.646219,28.1207888 C142.701436,12.5861956 130.314255,0.0425636812 115.028141,0.0425636812 C99.7604339,0.0425636812 87.42847,12.5861956 87.42847,28.1207888 C87.42847,32.5382087 89.3334823,37.9403451 92.8029975,44.1523418 C94.7172128,47.5114215 97.0087494,51.0729663 99.5763747,54.7173377 Z" id="Shape"></path> </g> </g> </svg>';
      },
      582: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="148px" viewBox="0 0 175 148" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>parallel</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="parallel" fill="#5067A2" fill-rule="nonzero"> <path d="M119.966527,90.2642567 L119.966527,71.4595035 L164.953975,91.1040224 L164.953975,117.16675 L119.966527,90.2642567 Z M99.5422259,68.8202399 L109.969317,68.8202399 L109.969317,80.2370544 L99.5422259,68.8202399 Z M64.9818688,58.8230293 L64.9818688,45.8666444 L76.8485579,58.8230293 L64.9818688,58.8230293 L64.9818688,58.8230293 Z M9.99721065,95.6627504 L9.99721065,37.9888424 L54.9846583,37.9888424 L54.9846583,61.3523236 L9.99721065,95.6627504 Z M170,2.04051565e-11 C167.238576,2.04245402e-11 165,2.23857623 165,4.99999995 L165,80.2194419 L120,60.5694419 L120,5.00139509 C120,2.23997133 117.761424,0.00139506489 115,0.00139506489 C112.238576,0.00139506489 110,2.23997133 110,5.00139509 L110,58.8394419 L90.42,58.8394419 L64.9999999,31.059442 L64.9999999,5.00139509 C64.9999999,2.23997137 62.7614237,0.00139513813 60,0.00139513813 C57.2385763,0.00139513813 55,2.23997137 55,5.00139509 L55,27.999442 L10,27.999442 L10,4.99999995 C10,2.23857619 7.76142378,-7.3221713e-08 5.00000002,-7.32217131e-08 C2.23857626,-7.32217133e-08 3.38176877e-16,2.23857619 0,4.99999995 L0,142.999442 C3.38176877e-16,145.760866 2.23857626,147.999442 5.00000002,147.999442 C7.76142378,147.999442 10,145.760866 10,142.999442 L10,108.249442 L55,73.9494419 L55,142.999442 C55,145.760866 57.2385763,147.999442 60,147.999442 C62.7614237,147.999442 64.9999999,145.760866 64.9999999,142.999442 L64.9999999,68.839442 L86.01,68.839442 L110,95.0694419 L110,142.999442 C110,145.760866 112.238576,147.999442 115,147.999442 C117.761424,147.999442 120,145.760866 120,142.999442 L120,101.939442 L165,128.839442 L165,142.999442 C165,145.760866 167.238576,147.999442 170,147.999442 C172.761424,147.999442 175,145.760866 175,142.999442 L175,4.99999995 C175,3.67391749 174.473216,2.40214791 173.535534,1.46446603 C172.597852,0.526784141 171.326082,-3.88296707e-08 170,2.04051565e-11 Z" id="Shape"></path> </g> </g> </svg>';
      },
      689: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="141px" viewBox="0 0 175 141" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>pictorialBar</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="pictorialBar" fill="#5067A2" fill-rule="nonzero"> <path d="M165.182447,113.123194 C161.75364,113.169204 158.605604,115.027549 156.908673,118.007359 L62.4782339,118.007359 C59.7807842,118.007359 57.5940692,120.194074 57.5940692,122.891524 C57.5940692,125.588973 59.7807842,127.775688 62.4782339,127.775688 L156.908673,127.775688 C158.605604,130.755498 161.75364,132.613843 165.182447,132.659853 C170.576885,132.6592 174.949595,128.285961 174.949595,122.891524 C174.949595,117.497086 170.576885,113.123847 165.182447,113.123194 L165.182447,113.123194 Z M165.182447,78.9340419 C161.75364,78.980052 158.605603,80.8383969 156.908673,83.8182066 L77.2674843,83.8182066 C74.5700347,83.8182066 72.3833197,86.0049216 72.3833197,88.7023712 C72.3833197,91.3998208 74.5700347,93.5865358 77.2674843,93.5865358 L156.908673,93.5865358 C158.605603,96.5663455 161.75364,98.4246904 165.182447,98.4707005 C170.577347,98.4707005 174.950777,94.0972705 174.950777,88.7023712 C174.950777,83.3074719 170.577347,78.9340419 165.182447,78.9340419 L165.182447,78.9340419 Z M165.182447,44.7448896 C170.407595,44.9786234 174.523583,49.2828462 174.523583,54.5132188 C174.523583,59.7435915 170.407595,64.0478142 165.182447,64.2815481 C161.75364,64.235538 158.605604,62.3771932 156.908673,59.3973835 L77.2674843,59.3973835 C74.5700346,59.3973835 72.3833196,57.2106685 72.3833196,54.5132188 C72.3833196,51.8157692 74.5700346,49.6290542 77.2674843,49.6290542 L156.908673,49.6290542 C158.605604,46.6492445 161.75364,44.7908997 165.182447,44.7448896 Z M62.6149904,20.3240665 C62.6149904,19.0287054 63.1295706,17.7863991 64.0455291,16.8704405 C64.9614877,15.954482 66.2037941,15.4399018 67.4991551,15.4399019 L156.908673,15.4399019 C158.605604,12.4600922 161.75364,10.6017474 165.182447,10.5557373 C170.407595,10.7894711 174.523583,15.0936938 174.523583,20.3240665 C174.523583,25.5544392 170.407595,29.8586619 165.182447,30.0923957 C161.75364,30.0463857 158.605604,28.1880408 156.908673,25.2082312 L67.4991551,25.2082312 C66.2037941,25.2082312 64.9614877,24.6936511 64.0455291,23.7776925 C63.1295705,22.8617339 62.6149904,21.6194275 62.6149904,20.3240665 Z M23.5416735,29.3240665 C31.6340224,29.3240665 38.1941674,22.7639215 38.1941674,14.6715726 C38.1941674,6.57922368 31.6340224,0.0190787204 23.5416735,0.0190787204 C15.4493246,0.0190787204 8.88917966,6.57922368 8.88917966,14.6715726 C8.88917966,22.7639215 15.4493246,29.3240665 23.5416735,29.3240665 Z M34.0523957,34.2082312 L13.0211829,34.2082312 C10.6337153,34.2093302 8.59694107,35.9362503 8.20539657,38.2913927 L0.0683783524,87.133039 C-0.166957522,88.5485838 0.232108973,89.996 1.15960938,91.0909397 C2.08710979,92.1858793 3.44919091,92.8175461 4.88416457,92.8182066 L8.88917966,92.8182066 L9.0426883,136.115835 C9.0426883,138.813285 11.2294033,141 13.9268529,141 L33.4635113,141 C34.7588723,141 36.0011787,140.48542 36.9171373,139.569461 C37.8330959,138.653503 38.347676,137.411196 38.347676,136.115835 L38.1941674,92.8182066 L42.189414,92.8182066 C43.6255482,92.8209447 44.9898051,92.1902296 45.9180572,91.0944026 C46.8463094,89.9985755 47.2440794,88.5491696 47.0052003,87.133039 L38.8681821,38.2913927 C38.4766376,35.9362503 36.4398634,34.2093302 34.0523957,34.2082312 Z" id="Shape"></path> </g> </g> </svg>';
      },
      931: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="144px" height="152px" viewBox="0 0 144 152" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>pie (2)</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="pie-(2)" transform="translate(0.000000, -0.612903)" fill="#5067A2" fill-rule="nonzero"> <path d="M72.1778824,12.9606446 L72.1778824,73.6462877 C72.1779317,75.129331 72.9386663,76.5065116 74.1881954,77.2856176 C75.4377246,78.0647237 76.9977039,78.1345538 78.3105882,77.4701504 L128.354824,52.1402676 L132.666353,49.9503148 C134.757503,48.8920984 137.302156,49.7461658 138.350118,51.857969 L138.468706,52.1060495 L138.782118,52.8930638 C140.942118,58.6416896 144,65.8873535 144,83.8518095 C144,116.316148 115.123765,152.612903 73.2282353,152.612903 C31.3242354,152.612903 0,119.994584 0,80.8406245 C0,44.5353146 27.216,13.7391044 62.2588236,9.22232682 C64.122353,8.98280072 65.9265883,8.80315611 67.6715294,8.69194766 C68.8395088,8.61630135 69.986418,9.03213213 70.8400527,9.84074781 C71.6936873,10.6493635 72.1779411,11.7786714 72.1778824,12.9606446 Z M90.0254118,0.659269609 C88.9814749,0.488081123 87.9163292,0.795987208 87.1201941,1.49909291 C86.324059,2.20219861 85.8798887,3.22724309 85.9087059,4.29493319 L85.9087059,54.6039644 C85.9087059,56.9393437 87.6028236,57.8717845 89.5680001,56.7511446 L133.149176,31.9088684 C134.092985,31.4117209 134.762111,30.50855 134.968019,29.4538349 C135.173928,28.3991197 134.894328,27.3070442 134.208,26.4853136 C134.208,26.4853136 133.538824,25.5357637 132.446118,24.3381334 C127.296,18.6921614 122.832,14.7399812 116.860235,10.9417819 C109.345997,6.07770841 100.978781,2.71218494 92.2108235,1.0271132 C89.9745882,0.599388123 90.0254118,0.659269609 90.0254118,0.659269609 L90.0254118,0.659269609 Z" id="Shape"></path> </g> </g> </svg>';
      },
      702: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="151px" height="170px" viewBox="0 0 151 170" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>radar</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="radar" transform="translate(0.500000, 0.000000)" fill="#5067A2" fill-rule="nonzero"> <path d="M79.573911,32.0195055 C79.7511468,32.0807796 79.9252225,32.1507623 80.0954971,32.2291958 L126.376239,53.5077701 C128.225278,54.3572545 129.374745,56.2354539 129.285085,58.2607506 L126.927916,110.733256 C126.832633,112.851954 125.405699,114.680595 123.367088,115.296516 L76.444394,129.315811 C75.5054275,129.595861 74.5046062,129.595861 73.5656397,129.315811 L32.4706683,117.053921 C30.8367372,116.566659 29.5635821,115.286115 29.0909814,113.654618 C28.6183807,112.023122 29.0111288,110.264354 30.133561,108.985836 L59.2822032,75.635091 C59.7218624,75.142978 60.0532763,74.5647698 60.2551619,73.937598 L73.2246026,35.1848307 C74.1062345,32.570839 76.9431645,31.1565423 79.573911,32.0195055 L79.573911,32.0195055 Z M139.476076,121.926724 L75.0000016,158.991984 L10.5239274,121.926724 L10.5239274,47.816176 L75.0000016,10.7509165 L139.476076,47.816176 L139.476076,121.926724 Z M146.998953,40.6068232 L77.5076273,0.665810956 C75.9548023,-0.221936985 74.0452007,-0.221936985 72.4923757,0.665810956 L3.00105014,40.6068232 C1.44784731,41.4971353 0.491395456,43.1462367 0.493424274,44.9304378 L0.493424274,124.812462 C0.493424274,126.599823 1.44632208,128.247389 3.00105014,129.136077 L72.4923757,169.077089 C74.047355,169.95676 75.9526481,169.95676 77.5076273,169.077089 L146.998953,129.136077 C148.550638,128.244253 149.506533,126.596111 149.506579,124.812462 L149.506579,44.9304378 C149.506533,43.1467894 148.550638,41.4986473 146.998953,40.6068232 L146.998953,40.6068232 Z" id="Shape"></path> </g> </g> </svg>';
      },
      989: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="167px" height="162px" viewBox="0 0 167 162" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>rich</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="rich" fill="#5067A2" fill-rule="nonzero"> <path d="M5.52634288,101.24857 L96.0005147,101.24857 C98.7764873,101.24857 101.026858,98.9820436 101.026858,96.1861415 C101.026858,93.3902395 98.7764873,91.123713 96.0005147,91.123713 L5.52634288,91.123713 C2.75037036,91.123713 0.5,93.3902395 0.5,96.1861415 C0.5,98.9820436 2.75037036,101.24857 5.52634288,101.24857 Z M75.8951432,121.498284 L5.52634288,121.498284 C2.75037036,121.498284 0.5,123.76481 0.5,126.560713 C0.5,129.356615 2.75037036,131.623141 5.52634288,131.623141 L75.8951432,131.623141 C78.6711157,131.623141 80.9214861,129.356615 80.9214861,126.560713 C80.9214861,123.76481 78.6711157,121.498284 75.8951432,121.498284 Z M146.394628,92.0653247 L128.923061,116.435856 L146.394628,116.435856 L146.394628,92.0653247 Z M166.5,60.749142 L166.5,151.872855 C166.5,157.464659 161.999259,161.997712 156.447314,161.997712 C150.895369,161.997712 146.394628,157.464659 146.394628,151.872855 L146.394628,136.68557 L114.406982,136.68557 L99.2575849,157.806021 C96.0041451,162.338178 89.7188607,163.355849 85.2190093,160.079052 C80.7191578,156.802254 79.7087415,150.471846 82.9621813,145.939689 L148.304639,54.8261007 C148.455429,54.6033538 148.706746,54.4919804 148.867589,54.2894832 C149.318111,53.7697312 149.823755,53.3011987 150.375492,52.892253 C150.857637,52.4854402 151.379728,52.1292264 151.933658,51.829143 C152.481136,51.5631055 153.053631,51.3528145 153.642615,51.2014019 C154.31205,50.9842108 155.003114,50.8416105 155.703415,50.7761579 C155.954733,50.7559082 156.185944,50.624285 156.447314,50.624285 C156.819264,50.624285 157.130897,50.7964076 157.492794,50.836907 C158.850886,50.9717079 160.164137,51.3999382 161.342972,52.0923893 C161.674711,52.2746367 162.036608,52.3151361 162.338188,52.537883 C162.559347,52.7100056 162.659874,52.9428773 162.87098,53.1251247 C163.403773,53.5807433 163.836038,54.0869861 164.268304,54.6337284 C164.650306,55.1399712 165.022255,55.6259644 165.30373,56.1929564 C165.585206,56.7498235 165.766154,57.3370652 165.947102,57.9546815 C166.138103,58.6330469 166.298946,59.2709129 166.34921,59.969528 C166.369315,60.2428992 166.5,60.4757709 166.5,60.749142 L166.5,60.749142 Z M55.7897717,151.872855 L5.52634288,151.872855 C2.75037036,151.872855 0.5,154.139381 0.5,156.935284 C0.5,159.731186 2.75037036,161.997712 5.52634288,161.997712 L55.7897717,161.997712 C58.5657442,161.997712 60.8161146,159.731186 60.8161146,156.935284 C60.8161146,154.139381 58.5657442,151.872855 55.7897717,151.872855 Z M86.3887335,40.499428 L161.100608,40.499428 C164.04791,40.499428 166.437171,38.2329016 166.437171,35.4369995 C166.437171,32.6410974 164.04791,30.374571 161.100608,30.374571 L86.3887335,30.374571 C83.4414314,30.374571 81.052171,32.6410974 81.052171,35.4369995 C81.052171,38.2329016 83.4414314,40.499428 86.3887335,40.499428 Z M86.3887335,10.124857 L161.100608,10.124857 C164.04791,10.124857 166.437171,7.85833056 166.437171,5.0624285 C166.437171,2.26652644 164.04791,1.71199625e-16 161.100608,0 L86.3887335,0 C83.4414314,-1.71199625e-16 81.052171,2.26652644 81.052171,5.0624285 C81.052171,7.85833056 83.4414314,10.124857 86.3887335,10.124857 Z M5.6570278,70.873999 L60.9467995,70.873999 C63.722772,70.873999 65.9731424,68.6074726 65.9731424,65.8115705 L65.9731424,5.0624285 C65.9731424,2.26652644 63.722772,1.71199625e-16 60.9467995,0 L5.6570278,0 C2.88105528,-1.71199625e-16 0.630684915,2.26652644 0.630684915,5.0624285 L0.630684915,65.8115705 C0.630684915,68.6074726 2.88105528,70.873999 5.6570278,70.873999 Z M81.052171,65.8115705 C81.052171,63.0156685 83.3025414,60.749142 86.0785139,60.749142 L116.236571,60.749142 C119.012544,60.749142 121.262914,63.0156685 121.262914,65.8115705 C121.262914,68.6074726 119.012544,70.873999 116.236571,70.873999 L86.0785139,70.873999 C83.3025414,70.873999 81.052171,68.6074726 81.052171,65.8115705 Z" id="Shape"></path> </g> </g> </svg>';
      },
      827: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="139px" viewBox="0 0 175 139" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>sankey</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="sankey" fill-rule="nonzero"> <path d="M4.60195168,138.058552 C2.06036395,138.058552 3.11254728e-16,135.998188 0,133.4566 L0,115.048793 C-3.11254732e-16,112.507205 2.06036398,110.446841 4.60195174,110.446841 C7.14353951,110.446841 9.20390349,112.507205 9.20390349,115.048793 L9.20390349,133.4566 C9.20390349,134.677113 8.71905638,135.847638 7.856023,136.710671 C6.99298962,137.573705 5.82246517,138.058552 4.60195168,138.058552 M4.60195168,106.820503 C2.06036395,106.820503 3.11254728e-16,104.760139 0,102.218552 L0,4.60195168 C-3.11254732e-16,2.06036391 2.06036398,-6.74114049e-08 4.60195174,-6.74114054e-08 C7.14353951,-6.74114058e-08 9.20390349,2.06036391 9.20390349,4.60195168 L9.20390349,102.218552 C9.20390349,103.439065 8.71905638,104.60959 7.856023,105.472623 C6.99298962,106.335656 5.82246517,106.820503 4.60195168,106.820503" id="Shape" fill="#5067A2"></path> <path d="M4.60195168,106.820503 C2.06036395,106.820503 3.11254728e-16,104.760139 0,102.218552 L0,4.60195168 C-3.11254732e-16,2.06036391 2.06036398,-6.74114049e-08 4.60195174,-6.74114054e-08 C7.14353951,-6.74114058e-08 9.20390349,2.06036391 9.20390349,4.60195168 L9.20390349,102.218552 C9.20390349,103.439065 8.71905638,104.60959 7.856023,105.472623 C6.99298962,106.335656 5.82246517,106.820503 4.60195168,106.820503" id="Path" fill="#5067A2"></path> <path d="M87.4370826,64.4273241 C86.2165692,64.4273241 85.0460447,63.942477 84.1830114,63.0794436 C83.319978,62.2164103 82.8351309,61.0458858 82.835131,59.8253723 L82.835131,4.60195168 C82.835131,2.06036391 84.8954949,-6.74113054e-08 87.4370827,-6.74113059e-08 C89.9786705,-6.74113063e-08 92.0390345,2.06036391 92.0390345,4.60195168 L92.0390345,59.8253723 C92.0390345,61.0458858 91.5541874,62.2164103 90.691154,63.0794437 C89.8281206,63.9424771 88.6575962,64.4273242 87.4370826,64.4273241 M170.272214,38.2054031 C167.730626,38.2054031 165.670262,36.1450392 165.670262,33.6034515 L165.670262,4.60195168 C165.670262,2.06036391 167.730626,-6.74114049e-08 170.272214,-6.74114054e-08 C172.813801,-6.74114058e-08 174.874165,2.06036391 174.874165,4.60195168 L174.874165,33.6034515 C174.874165,34.823965 174.389318,35.9944894 173.526285,36.8575227 C172.663252,37.7205561 171.492727,38.2054032 170.272214,38.2054031 M105.84489,138.058552 C104.624376,138.058552 103.453852,137.573705 102.590818,136.710671 C101.727785,135.847638 101.242938,134.677113 101.242938,133.4566 L101.242938,78.2331793 C101.242938,75.6915915 103.303302,73.6312276 105.84489,73.6312276 C108.386477,73.6312276 110.446841,75.6915915 110.446841,78.2331793 L110.446841,133.4566 C110.446841,135.998188 108.386477,138.058552 105.84489,138.058552 M170.272214,138.058552 C167.730626,138.058552 165.670262,135.998188 165.670262,133.4566 L165.670262,48.3020853 C165.670262,45.7604975 167.730626,43.7001336 170.272214,43.7001336 C172.813801,43.7001336 174.874165,45.7604975 174.874165,48.3020853 L174.874165,133.4566 C174.874165,134.677113 174.389318,135.847638 173.526285,136.710671 C172.663252,137.573705 171.492727,138.058552 170.272214,138.058552" id="Shape" fill="#5067A2"></path> <polygon id="Path" fill="#95A5C8" points="110.446841 133.4566 165.670262 133.4566 165.670262 78.2331793 110.446841 78.2331793"></polygon> <polygon id="Path" fill="#5067A2" points="165.670262 133.4566 174.874165 133.4566 174.874165 78.2331793 165.670262 78.2331793"></polygon> <path d="M165.670262,77.9478582 C124.491998,75.6100668 130.198418,59.8345763 92.0390345,59.8253723 L92.0390345,32.213662 C124.832542,32.2228659 136.825229,48.0167643 165.670262,48.6242219 L165.670262,77.9478582" id="Path" fill="#95A5C8"></path> <path d="M92.0390345,59.8253723 L92.0022188,59.8253723 L92.0022188,32.213662 L92.0390345,32.213662 L92.0390345,59.8253723 M174.874165,78.2331793 C171.56076,78.2055676 168.505064,78.1135285 165.670262,77.9478582 L165.670262,48.6242219 L167.400596,48.6426296 C169.765999,48.6426296 172.260257,48.5413867 174.874165,48.3204931 L174.874165,78.2331793" id="Shape" fill="#5067A2"></path> <polygon id="Path" fill="#95A5C8" points="92.0390345 32.213662 165.670262 32.213662 165.670262 4.60195168 92.0390345 4.60195168"></polygon> <path d="M82.835131,32.213662 L92.0390345,32.213662 L92.0390345,4.60195168 L82.835131,4.60195168 L82.835131,32.213662 Z M165.670262,32.213662 L174.506009,32.213662 L174.506009,4.60195168 L165.670262,4.60195168 L165.670262,32.213662 Z" id="Shape" fill="#5067A2"></path> <polygon id="Path" fill="#95A5C8" points="9.20390349 59.8253723 82.835131 59.8253723 82.835131 4.60195168 9.20390349 4.60195168"></polygon> <polyline id="Path" fill="#5067A2" points="82.835131 59.8253723 82.835131 4.60195168 82.835131 59.8253723"></polyline> <polygon id="Path" fill="#95A5C8" points="9.20390349 133.4566 101.242938 133.4566 101.242938 115.048793 9.20390349 115.048793"></polygon> <polygon id="Path" fill="#5067A2" points="101.242938 133.4566 110.446841 133.4566 110.446841 115.048793 101.242938 115.048793"></polygon> <path d="M101.242938,115.048793 C43.4792398,114.699045 52.1585208,101.445424 9.20390349,101.445424 L9.20390349,59.8253723 C56.5579867,59.8253723 47.7682589,78.1319363 101.242938,78.2331793 L101.242938,115.048793" id="Path" fill="#95A5C8"></path> <path d="M101.675521,115.048793 L101.242938,115.048793 L101.242938,78.2331793 L101.675521,78.2331793 C104.335449,78.2331793 100.46981,113.723431 101.675521,115.048793" id="Path" fill="#5067A2"></path> </g> </g> </svg>';
      },
      687: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="138px" viewBox="0 0 175 138" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>scatter</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="scatter" fill="#5067A2" fill-rule="nonzero"> <path d="M173.526285,129.202529 C172.663252,128.339495 171.492727,127.854648 170.272214,127.854648 L9.20390349,127.854648 L9.20390349,4.60195168 C9.20390349,2.06036391 7.14353951,-6.74112924e-08 4.60195174,-6.74112925e-08 C2.06036398,-6.74112927e-08 3.11254732e-16,2.06036391 0,4.60195168 L0,132.4566 C3.11254728e-16,134.998188 2.06036395,137.058552 4.60195168,137.058552 L170.272214,137.058552 C171.492727,137.058552 172.663252,136.573705 173.526285,135.710671 C174.389318,134.847638 174.874165,133.677113 174.874165,132.4566 C174.874165,131.236086 174.389318,130.065562 173.526285,129.202529 Z M151.864407,12.8058552 C155.15291,12.8054572 158.191783,14.5596242 159.836149,17.4074853 C161.480516,20.2553464 161.480516,23.7641708 159.836149,26.6120319 C158.191783,29.459893 155.15291,31.21406 151.864407,31.213662 C146.781666,31.2130468 142.661617,27.0924991 142.661617,22.0097586 C142.661617,16.9270181 146.781666,12.8064703 151.864407,12.8058552 Z M142.660503,58.8253723 C147.743679,58.8253723 151.864407,62.9461003 151.864407,68.0292758 C151.864407,73.1124513 147.743679,77.2331793 142.660503,77.2331793 C137.577328,77.2331793 133.4566,73.1124513 133.4566,68.0292758 C133.4566,62.9461003 137.577328,58.8253723 142.660503,58.8253723 Z M124.252696,40.4175655 C127.5412,40.4171675 130.580072,42.1713345 132.224439,45.0191956 C133.868806,47.8670567 133.868806,51.3758811 132.224439,54.2237422 C130.580072,57.0716033 127.5412,58.8257703 124.252696,58.8253723 C119.169956,58.8247572 115.049907,54.7042094 115.049907,49.6214689 C115.049907,44.5387284 119.169956,40.4181807 124.252696,40.4175655 L124.252696,40.4175655 Z M105.84489,22.0097586 C109.133393,22.0093606 112.172266,23.7635277 113.816632,26.6113888 C115.460999,29.4592498 115.460999,32.9680743 113.816632,35.8159354 C112.172266,38.6637965 109.133393,40.4179635 105.84489,40.4175655 C100.762149,40.4169503 96.6421001,36.2964026 96.6421001,31.2136621 C96.6421001,26.1309216 100.762149,22.0103738 105.84489,22.0097586 L105.84489,22.0097586 Z M105.84489,58.8253723 C110.928065,58.8253723 115.048793,62.9461003 115.048793,68.0292758 C115.048793,73.1124513 110.928065,77.2331793 105.84489,77.2331793 C100.761714,77.2331793 96.6409861,73.1124513 96.6409861,68.0292758 C96.6409861,62.9461003 100.761714,58.8253723 105.84489,58.8253723 L105.84489,58.8253723 Z M87.4370826,77.2331793 C90.8200008,77.0784213 94.0146452,78.7938663 95.7543045,81.6993216 C97.4939639,84.6047768 97.4975937,88.2308616 95.7637545,91.1397939 C94.0299154,94.0487262 90.8387117,95.7705634 87.4554905,95.6225784 C82.5370015,95.4074394 78.6587219,91.3598697 78.6537937,86.4366802 C78.6488656,81.5134907 82.5190342,77.4581647 87.4370826,77.2331793 L87.4370826,77.2331793 Z M59.8253723,68.0292758 C63.1138756,68.0288778 66.1527483,69.7830448 67.7971148,72.6309059 C69.4414814,75.478767 69.4414814,78.9875915 67.7971148,81.8354525 C66.1527483,84.6833136 63.1138756,86.4374807 59.8253723,86.4370826 C54.7426318,86.4364675 50.6225828,82.3159197 50.6225828,77.2331792 C50.6225828,72.1504387 54.7426318,68.029891 59.8253723,68.0292758 L59.8253723,68.0292758 Z M32.213662,95.6409861 C35.5021653,95.6405881 38.541038,97.3947552 40.1854045,100.242616 C41.8297711,103.090477 41.8297711,106.599302 40.1854045,109.447163 C38.541038,112.295024 35.5021653,114.049191 32.213662,114.048793 C27.1309215,114.048178 23.0108725,109.92763 23.0108725,104.84489 C23.0108725,99.762149 27.1309215,95.6416013 32.213662,95.6409861 L32.213662,95.6409861 Z" id="Shape"></path> </g> </g> </svg>';
      },
      31: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="176px" height="154px" viewBox="0 0 176 154" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>sunburst</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="sunburst" transform="translate(-0.500000, -0.495167)" fill="#5067A2" fill-rule="nonzero"> <path d="M119.233629,98.0044542 L110.718691,87.8510962 C116.698944,81.6134116 119.776927,73.1460671 119.198407,64.5239101 L132.221771,61.7588152 C132.389075,63.3350954 132.468325,64.9289877 132.468325,66.5404921 C132.486789,78.3855449 127.713147,89.7343283 119.233629,98.0044542 L119.233629,98.0044542 Z M63.3185781,30.3829135 C74.7931609,22.4121709 89.3686325,20.3583561 102.598787,24.8479794 C115.828942,29.3376027 126.144611,39.8381699 130.399028,53.1465133 L117.38447,55.9116082 C114.163414,47.1482037 107.14477,40.3166874 98.2978797,37.3338959 C89.4509892,34.3511045 79.7290566,35.5384174 71.8599325,40.5626897 L63.3185781,30.3829135 L63.3185781,30.3829135 Z M57.4981296,97.8547516 L67.6773104,89.3128978 C73.1543438,94.3147256 80.4453141,97.3616135 88.4495316,97.3616137 C93.8284022,97.3676833 99.1146581,95.9617789 103.779942,93.2844195 L112.365323,103.508226 C105.247152,108.132446 96.9377023,110.586264 88.4495316,110.570666 C76.8578752,110.587037 65.7306915,106.015602 57.4981296,97.8547516 L57.4981296,97.8547516 Z M51.880208,91.0741048 C47.0035405,83.8229191 44.4062144,75.2791485 44.4219328,66.5404921 C44.4219328,54.7315996 49.0624416,44.0146553 56.6263832,36.1068361 L65.194154,46.3130303 C60.3076881,51.9176198 57.6201378,59.1046557 57.6302124,66.5404921 C57.6302124,72.3876992 59.2592335,77.8562467 62.0858054,82.5146391 L51.880208,91.0741048 L51.880208,91.0741048 Z M40.5915316,112.05008 L50.7354904,103.534644 C60.658337,113.682313 74.2570793,119.394563 88.4495316,119.3767 C99.4212094,119.3767 109.618001,116.030407 118.062495,110.306485 L126.586238,120.468649 C115.441046,128.370969 102.111678,132.606084 88.4495316,132.585752 C70.3533434,132.605952 53.0459635,125.179425 40.5915316,112.05008 L40.5915316,112.05008 Z M0.5,62.1374747 C1.61718015,39.3368661 11.5653323,17.8665508 28.2373873,2.27405071 L36.7435195,12.4097967 C23.0478109,25.4703646 14.8209875,43.2437342 13.7258907,62.1374747 L0.5,62.1374747 Z M0.5,70.9435094 L13.7258907,70.9435094 C14.5580363,85.4042184 19.5854188,99.3091254 28.1933598,110.958131 L18.0582064,119.464761 C7.47186066,105.41813 1.35420505,88.5122858 0.5,70.9435094 L0.5,70.9435094 Z M22.5490216,62.1374747 C23.6176776,45.8469855 30.7006658,30.5346593 42.4230797,19.1728312 L50.9380174,29.3261893 C42.1806215,38.1364527 36.8165849,49.7571326 35.7925234,62.1374747 L22.5490216,62.1374747 L22.5490216,62.1374747 Z M22.5490216,70.9435094 L35.7925234,70.9435094 C36.5571371,80.2216635 39.7688087,89.1310032 45.0999577,96.7628032 L34.9559989,105.278239 C27.6604148,95.2350677 23.3587128,83.3306553 22.5490216,70.9435094 Z M160.064824,88.3354281 C162.208458,81.2692542 163.294499,73.9246962 163.287644,66.5404921 C163.287927,62.7888436 163.014228,59.0421838 162.468731,55.3304099 L175.40404,52.5829271 C177.539642,66.0542744 176.545357,79.8364744 172.498218,92.86173 L160.064824,88.3354281 Z M157.009309,96.5954887 L169.451508,101.130596 C164.453629,112.804913 156.992417,123.261434 147.578597,131.784403 L139.08127,121.666269 C146.731696,114.64362 152.837128,106.105711 157.009309,96.5954887 L157.009309,96.5954887 Z M139.336631,80.7886563 C141.234304,74.0037443 141.75525,66.9076826 140.868791,59.9183539 L153.830516,57.1620651 C155.148964,66.5886629 154.449628,76.187832 151.77883,85.3237642 L139.336631,80.7886563 Z M136.263504,89.0487169 L148.714509,93.5750188 C145.090489,101.633987 139.889912,108.885878 133.419321,114.903235 L124.913189,104.776295 C129.629614,100.274719 133.477161,94.943361 136.263504,89.0487169 L136.263504,89.0487169 Z M84.1260215,141.268503 L84.1260215,154.495167 C61.049526,153.386197 39.3397973,143.226766 23.7025446,126.218989 L33.8288923,117.71236 C46.9380429,131.745712 64.9535467,140.183088 84.1260215,141.268503 L84.1260215,141.268503 Z M104.94227,2.57345585 C127.679056,8.4576749 145.591926,25.956003 152.007773,48.5497632 L139.046048,51.306052 C133.813709,33.9700374 120.081572,20.5128194 102.64403,15.6328053 L104.933465,2.64390412 L104.94227,2.57345585 L104.94227,2.57345585 Z M96.2952498,0.953145396 L96.2600278,1.12046007 L93.9970091,13.9948829 C81.1068487,12.6102912 68.1594065,16.034712 57.6390179,23.6110727 L49.1240802,13.4665207 C60.4957814,5.02434618 74.2870046,0.475385223 88.4495316,0.495231624 C91.0999932,0.495231624 93.7152325,0.644934198 96.2952498,0.953145396 L96.2952498,0.953145396 Z" id="Shape"></path> <path d="M88.5,75.295167 C93.3601058,75.295167 97.3,71.3552728 97.3,66.495167 C97.3,61.6350611 93.3601058,57.6951669 88.5,57.6951669 C83.6398942,57.6951669 79.7,61.6350611 79.7,66.495167 C79.7,71.3552728 83.6398942,75.295167 88.5,75.295167 Z M88.5,88.495167 C76.3497355,88.495167 66.5,78.6454315 66.5,66.495167 C66.5,54.3449025 76.3497355,44.495167 88.5,44.495167 C100.650264,44.495167 110.5,54.3449025 110.5,66.495167 C110.5,78.6454315 100.650264,88.495167 88.5,88.495167 Z" id="Shape"></path> </g> </g> </svg>';
      },
      951: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="175px" height="130px" viewBox="0 0 175 130" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>themeriver</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="themeriver" fill="#5067A2" fill-rule="nonzero"> <path d="M4.9275627,42.5798026 C5.20117275,42.5813119 5.47437729,42.5585448 5.74396361,42.5117692 C10.5811329,41.6686599 15.2612908,40.0922201 19.6227791,37.836902 C26.4649962,34.328322 32.1798026,30.0130599 43.8718299,30.0130599 C55.5638572,30.0130599 63.7861807,41.3940774 79.5602127,41.4912681 C95.3342445,41.5787397 96.9864845,31.7333333 115.384662,31.7333333 C132.976158,31.7333333 137.621868,44.6208049 153.6,45.4566438 C160.490812,45.8162491 166.6041,44.9318147 171.930144,42.7936218 C173.778744,42.0602993 174.992296,40.2727177 174.991648,38.2839788 L174.991648,26.7960517 C174.987486,25.3270305 174.319017,23.9387356 173.173189,23.0194311 C172.027362,22.1001266 170.527173,21.7484925 169.092179,22.0628701 C165.933485,22.7529233 162.084738,22.8403949 157.5265,22.3155656 C145.533181,20.9160213 134.676993,5.82232335 119.476386,5.82232348 C102.788762,5.82232348 99.3093394,11.1678056 81.9899772,11.1678056 C64.6803341,11.1678056 59.6069856,0.126955258 43.8718299,0.126955258 C37.3211845,0.126955258 27.9422931,3.46059231 17.9025057,7.6009112 C12.9652241,9.65163256 8.49445708,10.8373576 4.50964317,11.1678056 C1.98627058,11.3754189 0.0451326562,13.4857192 0.0485952544,16.0176158 L0.0583143318,37.7202733 C0.0583143318,40.4027335 2.24510251,42.5798026 4.9275627,42.5798026 M170.132118,85.5283219 C169.634444,85.5282959 169.139638,85.6036638 168.664541,85.7518603 C162.658162,87.6665148 157.633409,88.7064541 153.551405,88.9008353 C139.342141,89.522855 131.343356,82.7583903 118.543356,82.7583903 C104.227183,82.7583903 97.8611998,94.1491269 80.444647,94.1491269 C61.0356872,94.1491269 52.3274108,84.1287775 42.4917236,84.1287775 C35.416249,84.1287775 28.7392558,88.7453303 19.9337889,92.9828398 C15.5893698,95.0627183 10.3507973,96.5594533 4.2083523,97.4438876 C1.81553905,97.7920745 0.0427391378,99.8465342 0.0485952544,102.264541 L0.0485952544,124.297646 C0.0496707163,125.687409 0.645723287,127.010209 1.68608385,127.931672 C2.72644442,128.853134 4.11154706,129.285071 5.491268,129.118299 C10.3313591,128.544875 15.142293,127.670159 19.9337889,126.513592 C29.8083523,124.132422 34.2305239,119.068793 42.4917236,118.388459 C54.5822323,117.397115 66.5658314,123.267426 82.4759302,121.323614 C98.386029,119.379803 106.3265,110.156416 120.273349,108.543052 C132.577676,107.12407 140.586181,111.293546 152.083827,110.030068 C159.995141,109.174791 166.81792,107.085194 172.552164,103.780714 C174.06095,102.911932 174.991067,101.303681 174.991648,99.5626424 L174.991648,90.3878512 C174.991648,87.7040073 172.815962,85.5283219 170.132118,85.5283219" id="Shape"></path> <path d="M170.132118,55.1659834 C169.755896,55.1642513 169.380769,55.206657 169.014427,55.2923311 C163.386911,56.5597226 157.597804,56.9530934 151.850569,56.4586181 C133.889749,55.0007593 128.388762,42.7839029 114.655733,42.7839029 C103.264996,42.7839029 93.9249811,52.940319 79.7157175,52.5807138 C59.2668185,52.0656038 52.6578588,41.0733486 42.0738042,41.0733486 C35.5231587,41.0733486 26.5330296,47.0991647 20.6724373,49.7524677 C15.5296251,52.0293301 10.0450596,53.4382394 4.44160976,53.9219438 C1.94888222,54.1623556 0.0470459996,56.2577415 0.0485952544,58.762035 L0.0485952544,80.8242976 C0.0491745866,82.2971429 0.717699925,83.69025 1.86632297,84.6121711 C3.01494602,85.5340923 4.51970635,85.8853329 5.95778278,85.5671982 C11.10094,84.3721963 16.0531556,82.4685044 20.6724373,79.9107062 C28.3018983,75.7703873 34.249962,72.7866364 41.8016705,72.7866364 C56.6037965,72.7866364 63.1252849,82.7778284 79.3755505,82.7778284 C94.6441914,82.7778284 103.070615,71.5231587 117.639484,71.5231587 C132.208352,71.5231587 139.964161,77.2185269 150.314958,77.5295368 C156.48656,77.7044798 163.707821,76.0813971 171.988459,72.6408505 C173.80584,71.8896408 174.991328,70.1171628 174.991648,68.1506454 L174.991648,60.0255125 C174.991648,57.3416686 172.815962,55.1659834 170.132118,55.1659834" id="Path"></path> </g> </g> </svg>';
      },
      929: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="174px" height="147px" viewBox="0 0 174 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>tree (1)</title> <desc>Created with Sketch.</desc> <defs> <polygon id="path-1" points="2 4.69629167 172 4.69629167 172 146.375 2 146.375"></polygon> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="tree-(1)"> <mask id="mask-2" fill="white"> <use xlink:href="#path-1"></use> </mask> <g id="path-1"></g> <path d="M174,127.4965 C173.994333,137.928125 165.534,146.380667 155.101667,146.375708 C144.670042,146.370042 136.216792,137.909 136.222458,127.476667 C136.222458,127.470292 136.222458,127.464625 136.222458,127.45825 C136.226708,118.755667 142.117917,111.435042 150.127042,109.248417 L150.127042,80.2563333 L91.4625,80.2563333 L91.4625,109.120208 C99.7407917,111.126208 105.890542,118.582125 105.889125,127.476667 C105.889125,127.483042 105.889125,127.490125 105.889125,127.4965 C105.883458,137.928125 97.4224167,146.380667 86.9907917,146.375708 C76.5584583,146.370042 68.1059167,137.909 68.1115833,127.476667 C68.1122917,118.764875 74.0049167,111.440708 82.0182917,109.254083 L82.0182917,80.2563333 L23.3530417,80.2563333 L23.3530417,109.120917 C31.630625,111.127625 37.7789583,118.582833 37.77825,127.476667 C37.77825,127.478792 37.77825,127.480917 37.77825,127.483042 C37.776125,137.915375 29.3179167,146.37075 18.8862917,146.368625 C8.45395833,146.367208 -0.00141666667,137.909 0,127.476667 C0.00141666667,118.764167 5.89545833,111.439292 13.9088333,109.254083 L13.9088333,80.2563333 C13.9088333,75.0500833 18.1425417,70.812125 23.3530417,70.812125 L82.0182917,70.812125 L82.0182917,37.8179167 C74.0006667,35.6305833 68.106625,28.298625 68.1115833,19.58825 C68.1122917,9.15025 76.5705,0.694875 87.0028333,0.696291667 C97.4344583,0.697708333 105.890542,9.15591667 105.889125,19.58825 C105.889125,19.594625 105.889125,19.601 105.889125,19.607375 C105.884167,28.4976667 99.7358333,35.9465 91.4625,37.9517917 L91.4625,70.812125 L150.127042,70.812125 C155.337542,70.812125 159.57125,75.0500833 159.57125,80.2563333 L159.57125,109.113125 C167.853083,111.119125 174.00425,118.579292 174,127.476667 C174,127.483042 174,127.490125 174,127.4965 Z" id="Fill-1" fill="#5067A2" fill-rule="nonzero"></path> </g> </g> </svg>';
      },
      101: (t) => {
        t.exports =
          '<?xml version="1.0" encoding="UTF-8"?> <svg width="160px" height="132px" viewBox="0 0 160 132" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>treemap</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="treemap" transform="translate(-0.500000, -0.095199)" fill="#5067A2" fill-rule="nonzero"> <path d="M84.9444444,79.2951993 L4.9444444,79.2951993 C2.48984554,79.2951993 0.5,81.2651464 0.5,83.6951993 L0.5,127.695199 C0.5,130.125252 2.48984554,132.095199 4.9444444,132.095199 L84.9444444,132.095199 C86.1231844,132.095199 87.2536462,131.631629 88.0871413,130.806469 C88.9206363,129.981309 89.3888889,128.862152 89.3888889,127.695199 L89.3888889,83.6951993 C89.3888889,82.5282467 88.9206363,81.4090895 88.0871413,80.5839295 C87.2536462,79.7587694 86.1231844,79.2951993 84.9444444,79.2951993 L84.9444444,79.2951993 Z M156.055556,105.695199 L102.722222,105.695199 C101.543482,105.695199 100.41302,106.158769 99.5795254,106.983929 C98.7460304,107.80909 98.2777777,108.928247 98.2777777,110.095199 L98.2777777,127.695199 C98.2777777,128.862152 98.7460304,129.981309 99.5795254,130.806469 C100.41302,131.631629 101.543482,132.095199 102.722222,132.095199 L156.055556,132.095199 C158.510154,132.095199 160.5,130.125252 160.5,127.695199 L160.5,110.095199 C160.5,107.665146 158.510154,105.695199 156.055556,105.695199 L156.055556,105.695199 Z M156.055556,61.6951994 L102.722222,61.6951994 C101.543482,61.6951994 100.41302,62.1587694 99.5795254,62.9839295 C98.7460304,63.8090896 98.2777777,64.9282468 98.2777777,66.0951993 L98.2777777,92.4951993 C98.2777777,93.6621519 98.7460304,94.7813091 99.5795254,95.6064692 C100.41302,96.4316293 101.543482,96.8951993 102.722222,96.8951993 L156.055556,96.8951993 C158.510154,96.8951993 160.5,94.9252522 160.5,92.4951993 L160.5,66.0951993 C160.5,63.6651465 158.510154,61.6951994 156.055556,61.6951994 L156.055556,61.6951994 Z M156.055556,0.0951993491 L102.722222,0.0951993491 C101.543482,0.0951993149 100.41302,0.558769393 99.5795254,1.38392945 C98.7460304,2.20908951 98.2777777,3.32824674 98.2777777,4.49519931 L98.2777777,48.4951994 C98.2777777,49.662152 98.7460304,50.7813092 99.5795254,51.6064692 C100.41302,52.4316293 101.543482,52.8951994 102.722222,52.8951993 L156.055556,52.8951993 C158.510154,52.8951993 160.5,50.9252523 160.5,48.4951994 L160.5,4.49519931 C160.5,2.06514643 158.510154,0.0951993491 156.055556,0.0951993491 L156.055556,0.0951993491 Z M89.3888889,4.49519931 L89.3888889,66.0951993 C89.3888889,67.2621519 88.9206363,68.3813091 88.0871413,69.2064692 C87.2536462,70.0316293 86.1231844,70.4951993 84.9444444,70.4951993 L4.9444444,70.4951993 C2.48984554,70.4951993 0.5,68.5252522 0.5,66.0951993 L0.5,4.49519931 C0.5,2.06514643 2.48984554,0.0951993491 4.9444444,0.0951993491 L84.9444444,0.0951993491 C86.1231844,0.0951993149 87.2536462,0.558769393 88.0871413,1.38392945 C88.9206363,2.20908951 89.3888889,3.32824674 89.3888889,4.49519931 Z" id="Shape"></path> </g> </g> </svg>';
      },
      705: (t, e, i) => {
        var n = i(639).Symbol;
        t.exports = n;
      },
      239: (t, e, i) => {
        var n = i(705),
          a = i(607),
          r = i(333),
          o = n ? n.toStringTag : void 0;
        t.exports = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : o && o in Object(t)
            ? a(t)
            : r(t);
        };
      },
      957: (t, e, i) => {
        var n = "object" == typeof i.g && i.g && i.g.Object === Object && i.g;
        t.exports = n;
      },
      607: (t, e, i) => {
        var n = i(705),
          a = Object.prototype,
          r = a.hasOwnProperty,
          o = a.toString,
          l = n ? n.toStringTag : void 0;
        t.exports = function (t) {
          var e = r.call(t, l),
            i = t[l];
          try {
            t[l] = void 0;
            var n = !0;
          } catch (t) {}
          var a = o.call(t);
          return n && (e ? (t[l] = i) : delete t[l]), a;
        };
      },
      333: (t) => {
        var e = Object.prototype.toString;
        t.exports = function (t) {
          return e.call(t);
        };
      },
      639: (t, e, i) => {
        var n = i(957),
          a = "object" == typeof self && self && self.Object === Object && self,
          r = n || a || Function("return this")();
        t.exports = r;
      },
      279: (t, e, i) => {
        var n = i(218),
          a = i(771),
          r = i(841),
          o = Math.max,
          l = Math.min;
        t.exports = function (t, e, i) {
          var s,
            c,
            d,
            u,
            p,
            f,
            g = 0,
            h = !1,
            m = !1,
            C = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          function y(e) {
            var i = s,
              n = c;
            return (s = c = void 0), (g = e), (u = t.apply(n, i));
          }
          function v(t) {
            return (g = t), (p = setTimeout(_, e)), h ? y(t) : u;
          }
          function b(t) {
            var i = t - f;
            return void 0 === f || i >= e || i < 0 || (m && t - g >= d);
          }
          function _() {
            var t = a();
            if (b(t)) return L(t);
            p = setTimeout(
              _,
              (function (t) {
                var i = e - (t - f);
                return m ? l(i, d - (t - g)) : i;
              })(t)
            );
          }
          function L(t) {
            return (p = void 0), C && s ? y(t) : ((s = c = void 0), u);
          }
          function w() {
            var t = a(),
              i = b(t);
            if (((s = arguments), (c = this), (f = t), i)) {
              if (void 0 === p) return v(f);
              if (m) return clearTimeout(p), (p = setTimeout(_, e)), y(f);
            }
            return void 0 === p && (p = setTimeout(_, e)), u;
          }
          return (
            (e = r(e) || 0),
            n(i) &&
              ((h = !!i.leading),
              (d = (m = "maxWait" in i) ? o(r(i.maxWait) || 0, e) : d),
              (C = "trailing" in i ? !!i.trailing : C)),
            (w.cancel = function () {
              void 0 !== p && clearTimeout(p),
                (g = 0),
                (s = f = c = p = void 0);
            }),
            (w.flush = function () {
              return void 0 === p ? u : L(a());
            }),
            w
          );
        };
      },
      218: (t) => {
        t.exports = function (t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e);
        };
      },
      5: (t) => {
        t.exports = function (t) {
          return null != t && "object" == typeof t;
        };
      },
      448: (t, e, i) => {
        var n = i(239),
          a = i(5);
        t.exports = function (t) {
          return "symbol" == typeof t || (a(t) && "[object Symbol]" == n(t));
        };
      },
      771: (t, e, i) => {
        var n = i(639);
        t.exports = function () {
          return n.Date.now();
        };
      },
      841: (t, e, i) => {
        var n = i(218),
          a = i(448),
          r = /^\s+|\s+$/g,
          o = /^[-+]0x[0-9a-f]+$/i,
          l = /^0b[01]+$/i,
          s = /^0o[0-7]+$/i,
          c = parseInt;
        t.exports = function (t) {
          if ("number" == typeof t) return t;
          if (a(t)) return NaN;
          if (n(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = n(e) ? e + "" : e;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(r, "");
          var i = l.test(t);
          return i || s.test(t)
            ? c(t.slice(2), i ? 2 : 8)
            : o.test(t)
            ? NaN
            : +t;
        };
      },
      463: function (t) {
        "undefined" != typeof self && self,
          (t.exports = (function (t) {
            var e = {};
            function i(n) {
              if (e[n]) return e[n].exports;
              var a = (e[n] = { i: n, l: !1, exports: {} });
              return (
                t[n].call(a.exports, a, a.exports, i), (a.l = !0), a.exports
              );
            }
            return (
              (i.m = t),
              (i.c = e),
              (i.d = function (t, e, n) {
                i.o(t, e) ||
                  Object.defineProperty(t, e, { enumerable: !0, get: n });
              }),
              (i.r = function (t) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(t, "__esModule", { value: !0 });
              }),
              (i.t = function (t, e) {
                if ((1 & e && (t = i(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                  return t;
                var n = Object.create(null);
                if (
                  (i.r(n),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t,
                  }),
                  2 & e && "string" != typeof t)
                )
                  for (var a in t)
                    i.d(
                      n,
                      a,
                      function (e) {
                        return t[e];
                      }.bind(null, a)
                    );
                return n;
              }),
              (i.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return i.d(e, "a", e), e;
              }),
              (i.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (i.p = "/dist/"),
              i((i.s = 1))
            );
          })([
            function (t, e) {
              var i = "function" == typeof Float32Array;
              function n(t, e) {
                return 1 - 3 * e + 3 * t;
              }
              function a(t, e) {
                return 3 * e - 6 * t;
              }
              function r(t) {
                return 3 * t;
              }
              function o(t, e, i) {
                return ((n(e, i) * t + a(e, i)) * t + r(e)) * t;
              }
              function l(t, e, i) {
                return 3 * n(e, i) * t * t + 2 * a(e, i) * t + r(e);
              }
              function s(t) {
                return t;
              }
              t.exports = function (t, e, n, a) {
                if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                  throw new Error("bezier x values must be in [0, 1] range");
                if (t === e && n === a) return s;
                for (
                  var r = i ? new Float32Array(11) : new Array(11), c = 0;
                  c < 11;
                  ++c
                )
                  r[c] = o(0.1 * c, t, n);
                function d(e) {
                  for (var i = 0, a = 1; 10 !== a && r[a] <= e; ++a) i += 0.1;
                  --a;
                  var s = i + ((e - r[a]) / (r[a + 1] - r[a])) * 0.1,
                    c = l(s, t, n);
                  return c >= 0.001
                    ? (function (t, e, i, n) {
                        for (var a = 0; a < 4; ++a) {
                          var r = l(e, i, n);
                          if (0 === r) return e;
                          e -= (o(e, i, n) - t) / r;
                        }
                        return e;
                      })(e, s, t, n)
                    : 0 === c
                    ? s
                    : (function (t, e, i, n, a) {
                        var r,
                          l,
                          s = 0;
                        do {
                          (r = o((l = e + (i - e) / 2), n, a) - t) > 0
                            ? (i = l)
                            : (e = l);
                        } while (Math.abs(r) > 1e-7 && ++s < 10);
                        return l;
                      })(e, i, i + 0.1, t, n);
                }
                return function (t) {
                  return 0 === t ? 0 : 1 === t ? 1 : o(d(t), e, a);
                };
              };
            },
            function (t, e, i) {
              "use strict";
              i.r(e);
              var n = function () {
                var t = this.$createElement;
                return (this._self._c || t)(
                  this.tag,
                  {
                    ref: "scrollactive-nav-wrapper",
                    tag: "component",
                    staticClass: "scrollactive-nav",
                  },
                  [this._t("default")],
                  2
                );
              };
              n._withStripped = !0;
              var a = i(0),
                r = i.n(a);
              function o(t) {
                return (
                  (function (t) {
                    if (Array.isArray(t)) return l(t);
                  })(t) ||
                  (function (t) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(t)
                    )
                      return Array.from(t);
                  })(t) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return l(t, e);
                      var i = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === i &&
                          t.constructor &&
                          (i = t.constructor.name),
                        "Map" === i || "Set" === i
                          ? Array.from(t)
                          : "Arguments" === i ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                          ? l(t, e)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              }
              function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
              }
              var s = (function (t, e, i, n, a, r, o, l) {
                var s,
                  c = "function" == typeof t ? t.options : t;
                if (
                  (e &&
                    ((c.render = e),
                    (c.staticRenderFns = []),
                    (c._compiled = !0)),
                  s)
                )
                  if (c.functional) {
                    c._injectStyles = s;
                    var d = c.render;
                    c.render = function (t, e) {
                      return s.call(e), d(t, e);
                    };
                  } else {
                    var u = c.beforeCreate;
                    c.beforeCreate = u ? [].concat(u, s) : [s];
                  }
                return { exports: t, options: c };
              })(
                {
                  props: {
                    activeClass: { type: String, default: "is-active" },
                    offset: { type: Number, default: 20 },
                    scrollOffset: { type: Number, default: null },
                    scrollContainerSelector: { type: String, default: "" },
                    clickToScroll: { type: Boolean, default: !0 },
                    duration: { type: Number, default: 600 },
                    alwaysTrack: { type: Boolean, default: !1 },
                    bezierEasingValue: { type: String, default: ".5,0,.35,1" },
                    modifyUrl: { type: Boolean, default: !0 },
                    exact: { type: Boolean, default: !1 },
                    highlightFirstItem: { type: Boolean, default: !1 },
                    tag: { type: String, default: "nav" },
                    scrollOnStart: { type: Boolean, default: !0 },
                  },
                  data: function () {
                    return {
                      observer: null,
                      items: [],
                      currentItem: null,
                      lastActiveItem: null,
                      scrollAnimationFrame: null,
                      bezierEasing: r.a,
                    };
                  },
                  computed: {
                    cubicBezierArray: function () {
                      return this.bezierEasingValue.split(",");
                    },
                    scrollContainer: function () {
                      var t = window;
                      return (
                        this.scrollContainerSelector &&
                          (t =
                            document.querySelector(
                              this.scrollContainerSelector
                            ) || window),
                        t
                      );
                    },
                  },
                  mounted: function () {
                    var t =
                      window.MutationObserver || window.WebKitMutationObserver;
                    this.observer ||
                      ((this.observer = new t(this.initScrollactiveItems)),
                      this.observer.observe(
                        this.$refs["scrollactive-nav-wrapper"],
                        { childList: !0, subtree: !0 }
                      )),
                      this.initScrollactiveItems(),
                      this.removeActiveClass(),
                      (this.currentItem = this.getItemInsideWindow()),
                      this.currentItem &&
                        this.currentItem.classList.add(this.activeClass),
                      this.scrollOnStart && this.scrollToHashElement(),
                      this.scrollContainer.addEventListener(
                        "scroll",
                        this.onScroll
                      );
                  },
                  updated: function () {
                    this.initScrollactiveItems();
                  },
                  beforeDestroy: function () {
                    this.scrollContainer.removeEventListener(
                      "scroll",
                      this.onScroll
                    ),
                      window.cancelAnimationFrame(this.scrollAnimationFrame);
                  },
                  methods: {
                    onScroll: function (t) {
                      (this.currentItem = this.getItemInsideWindow()),
                        this.currentItem !== this.lastActiveItem &&
                          (this.removeActiveClass(),
                          this.$emit(
                            "itemchanged",
                            t,
                            this.currentItem,
                            this.lastActiveItem
                          ),
                          (this.lastActiveItem = this.currentItem)),
                        this.currentItem &&
                          this.currentItem.classList.add(this.activeClass);
                    },
                    getItemInsideWindow: function () {
                      var t,
                        e = this;
                      return (
                        [].forEach.call(this.items, function (i) {
                          var n = i === e.items[0],
                            a = document.getElementById(
                              decodeURI(i.hash.substr(1))
                            );
                          if (a) {
                            var r =
                                e.scrollContainer.scrollTop ||
                                window.pageYOffset,
                              o = r >= e.getOffsetTop(a) - e.offset,
                              l =
                                r <
                                e.getOffsetTop(a) - e.offset + a.offsetHeight;
                            n && e.highlightFirstItem && l && (t = i),
                              e.exact && o && l && (t = i),
                              !e.exact && o && (t = i);
                          }
                        }),
                        t
                      );
                    },
                    initScrollactiveItems: function () {
                      var t = this;
                      (this.items =
                        this.$el.querySelectorAll(".scrollactive-item")),
                        this.clickToScroll
                          ? [].forEach.call(this.items, function (e) {
                              e.addEventListener("click", t.handleClick);
                            })
                          : [].forEach.call(this.items, function (e) {
                              e.removeEventListener("click", t.handleClick);
                            });
                    },
                    setScrollactiveItems: function () {
                      this.initScrollactiveItems();
                    },
                    handleClick: function (t) {
                      var e = this;
                      t.preventDefault();
                      var i = t.currentTarget.hash,
                        n = document.getElementById(decodeURI(i.substr(1)));
                      n
                        ? (this.alwaysTrack ||
                            (this.scrollContainer.removeEventListener(
                              "scroll",
                              this.onScroll
                            ),
                            window.cancelAnimationFrame(
                              this.scrollAnimationFrame
                            ),
                            this.removeActiveClass(),
                            t.currentTarget.classList.add(this.activeClass)),
                          this.scrollTo(n).then(function () {
                            e.alwaysTrack ||
                              (e.scrollContainer.addEventListener(
                                "scroll",
                                e.onScroll
                              ),
                              (e.currentItem = [].find.call(
                                e.items,
                                function (t) {
                                  return decodeURI(t.hash.substr(1)) === n.id;
                                }
                              )),
                              e.currentItem !== e.lastActiveItem &&
                                (e.$emit(
                                  "itemchanged",
                                  null,
                                  e.currentItem,
                                  e.lastActiveItem
                                ),
                                (e.lastActiveItem = e.currentItem))),
                              e.modifyUrl && e.pushHashToUrl(i);
                          }))
                        : console.warn(
                            "[vue-scrollactive] Element '".concat(
                              i,
                              "' was not found. Make sure it is set in the DOM."
                            )
                          );
                    },
                    scrollTo: function (t) {
                      var e = this;
                      return new Promise(function (i) {
                        var n = e.getOffsetTop(t),
                          a = e.scrollContainer.scrollTop || window.pageYOffset,
                          r = n - a,
                          l = e.bezierEasing.apply(e, o(e.cubicBezierArray)),
                          s = null;
                        window.requestAnimationFrame(function t(n) {
                          s || (s = n);
                          var o = n - s,
                            c = o / e.duration;
                          o >= e.duration && (o = e.duration),
                            c >= 1 && (c = 1);
                          var d = e.scrollOffset || e.offset,
                            u = a + l(c) * (r - d);
                          e.scrollContainer.scrollTo(0, u),
                            o < e.duration
                              ? (e.scrollAnimationFrame =
                                  window.requestAnimationFrame(t))
                              : i();
                        });
                      });
                    },
                    getOffsetTop: function (t) {
                      for (var e = 0, i = t; i; )
                        (e += i.offsetTop), (i = i.offsetParent);
                      return (
                        this.scrollContainer.offsetTop &&
                          (e -= this.scrollContainer.offsetTop),
                        e
                      );
                    },
                    removeActiveClass: function () {
                      var t = this;
                      [].forEach.call(this.items, function (e) {
                        e.classList.remove(t.activeClass);
                      });
                    },
                    scrollToHashElement: function () {
                      var t = this,
                        e = window.location.hash;
                      if (e) {
                        var i = document.querySelector(decodeURI(e));
                        i &&
                          ((window.location.hash = ""),
                          setTimeout(function () {
                            var n = i.offsetTop - t.offset;
                            t.scrollContainer.scrollTo(0, n),
                              t.pushHashToUrl(e);
                          }, 0));
                      }
                    },
                    pushHashToUrl: function (t) {
                      window.history.pushState
                        ? window.history.pushState(null, null, t)
                        : (window.location.hash = t);
                    },
                  },
                },
                n
              );
              s.options.__file = "src/scrollactive.vue";
              var c = s.exports,
                d = {
                  install: function (t) {
                    d.install.installed || t.component("scrollactive", c);
                  },
                };
              "undefined" != typeof window &&
                window.Vue &&
                d.install(window.Vue),
                (e.default = d);
            },
          ]));
      },
      472: (t, e, i) => {
        var n = {
          "./bar.svg": 38,
          "./boxplot.svg": 851,
          "./calendar.svg": 496,
          "./candlestick.svg": 173,
          "./custom.svg": 353,
          "./dataZoom.svg": 6,
          "./dataset.svg": 238,
          "./drag.svg": 642,
          "./funnel.svg": 797,
          "./gauge.svg": 822,
          "./geo.svg": 317,
          "./gl.svg": 926,
          "./graph.svg": 769,
          "./heatmap.svg": 781,
          "./line.svg": 69,
          "./lines.svg": 276,
          "./map.svg": 831,
          "./parallel.svg": 582,
          "./pictorialBar.svg": 689,
          "./pie.svg": 931,
          "./radar.svg": 702,
          "./rich.svg": 989,
          "./sankey.svg": 827,
          "./scatter.svg": 687,
          "./sunburst.svg": 31,
          "./themeRiver.svg": 951,
          "./tree.svg": 929,
          "./treemap.svg": 101,
        };
        function a(t) {
          var e = r(t);
          return i(e);
        }
        function r(t) {
          if (!i.o(n, t)) {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return n[t];
        }
        (a.keys = function () {
          return Object.keys(n);
        }),
          (a.resolve = r),
          (t.exports = a),
          (a.id = 472);
      },
    },
    e = {};
  function i(n) {
    if (e[n]) return e[n].exports;
    var a = (e[n] = { id: n, loaded: !1, exports: {} });
    return t[n].call(a.exports, a, a.exports, i), (a.loaded = !0), a.exports;
  }
  return (
    (i.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return i.d(e, { a: e }), e;
    }),
    (i.d = (t, e) => {
      for (var n in e)
        i.o(e, n) &&
          !i.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (i.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (i.p = "./"),
    i(403)
  );
})();
