function changeLang(e) {
  var t;
  if ("en" === e && "echarts.apache.org" !== location.hostname)
    return (
      (t = new RegExp("/zh/", "g")),
      (t =
        "" +
        location.pathname.replace(t, "/en/") +
        location.search +
        location.hash),
      void (location.href = t)
    );
  location.href = location.href.replace(
    new RegExp("/(zh|en)/", "g"),
    "/" + e + "/"
  );
}
function closeApacheBanner(e) {
  var t = document.getElementById("apache-banner");
  t && t.remove(),
    e &&
      (_hmt.push(["_trackEvent", "apacheBanner", "close"]),
      Cookies.set("apache-banner-closed", "true", { expires: 7 }));
}
function logApache() {
  _hmt.push(["_trackEvent", "apacheBanner", "visit"]);
}
$(document).ready(function () {
  // "echarts.apache.org" !== location.host &&
  //   (e = document.getElementById("apache-banner")) &&
  //   (e.style.display = "block");
  "true" === Cookies.get("apache-banner-closed") && closeApacheBanner(!1);
  var e = $(".page-detail h2");
  0 < e.length &&
    e.each(function (e) {
      var t = 'href="#' + $(this).attr("id") + '"',
        n = $(this).text(),
        e =
          ($(this).next(".time") && (n += " " + $(this).next(".time").text()),
          0 === e ? ' class="active"' : " "),
        t = $("<a " + t + e + ">" + n + "</a>").click(function () {
          $(".page-nav a").removeClass("active"), $(this).addClass("active");
        });
      $(".page-nav ul").append($("<li></li>").append(t));
    });
  var t = $(".page-content").find("iframe");
  function n() {
    t.filter(function () {
      var e = $(this);
      return (
        !e.attr("src") &&
        0 < (e = e[0].getClientRects()).length &&
        0 < e[0].top &&
        e[0].top < $(window).height()
      );
    }).each(function () {
      $(this).attr("src", $(this).data("src"));
    });
  }
  n(),
    $(window).scroll(function () {
      n();
    }),
    $(".slide-btn").click(function () {
      var e = $(this).parent().parent();
      e.hasClass("slide-up")
        ? ($(this).text("收起目录"), e.removeClass("slide-up"))
        : ($(this).text("展开目录"), e.addClass("slide-up"));
    }),
    $(".page-nav") &&
      $(window).scroll(function () {
        var e = Math.max(120 - (window.pageYOffset - 120), 70);
        $(".page-nav").css("top", e);
      });
}),
  (function () {
    function c() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var n,
          a = arguments[e];
        for (n in a) t[n] = a[n];
      }
      return t;
    }
    function p(e) {
      return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    !(function e(s) {
      function r() {}
      function n(e, t, n) {
        if ("undefined" != typeof document) {
          "number" == typeof (n = c({ path: "/" }, r.defaults, n)).expires &&
            (n.expires = new Date(+new Date() + 864e5 * n.expires)),
            (n.expires = n.expires ? n.expires.toUTCString() : "");
          try {
            var a = JSON.stringify(t);
            /^[\{\[]/.test(a) && (t = a);
          } catch (e) {}
          (t = s.write
            ? s.write(t, e)
            : encodeURIComponent(String(t)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent
              )),
            (e = encodeURIComponent(String(e))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
          var o,
            i = "";
          for (o in n)
            n[o] &&
              ((i += "; " + o), !0 !== n[o]) &&
              (i += "=" + n[o].split(";")[0]);
          return (document.cookie = e + "=" + t + i);
        }
      }
      function t(e, t) {
        if ("undefined" != typeof document) {
          for (
            var n = {},
              a = document.cookie ? document.cookie.split("; ") : [],
              o = 0;
            o < a.length;
            o++
          ) {
            var i = a[o].split("="),
              r = i.slice(1).join("=");
            t || '"' !== r.charAt(0) || (r = r.slice(1, -1));
            try {
              var c = p(i[0]),
                r = (s.read || s)(r, c) || p(r);
              if (t)
                try {
                  r = JSON.parse(r);
                } catch (e) {}
              if (((n[c] = r), e === c)) break;
            } catch (e) {}
          }
          return e ? n[e] : n;
        }
      }
      return (
        ((window.Cookies = r).set = n),
        (r.get = function (e) {
          return t(e, !1);
        }),
        (r.getJSON = function (e) {
          return t(e, !0);
        }),
        (r.remove = function (e, t) {
          n(e, "", c(t, { expires: -1 }));
        }),
        (r.defaults = {}),
        (r.withConverter = e),
        r
      );
    })(function () {});
  })();
