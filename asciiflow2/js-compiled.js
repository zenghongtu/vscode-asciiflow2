var g, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, b) {
  if (b.get || b.set) {
    throw new TypeError("ES3 does not support getters and setters.");
  }
  a != Array.prototype && a != Object.prototype && (a[c] = b.value);
}, h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
function ba() {
  ba = function() {
  };
  h.Symbol || (h.Symbol = ca);
}
var da = 0;
function ca(a) {
  return "jscomp_symbol_" + (a || "") + da++;
}
function m() {
  ba();
  var a = h.Symbol.iterator;
  a || (a = h.Symbol.iterator = h.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return ea(this);
  }});
  m = function() {
  };
}
function ea(a) {
  var c = 0;
  return fa(function() {
    return c < a.length ? {done:!1, value:a[c++]} : {done:!0};
  });
}
function fa(a) {
  m();
  a = {next:a};
  a[h.Symbol.iterator] = function() {
    return this;
  };
  return a;
}
function n(a) {
  m();
  var c = a[Symbol.iterator];
  return c ? c.call(a) : ea(a);
}
function p(a, c) {
  this.x = a;
  this.y = c;
}
function r(a, c) {
  var b = a.originalEvent.touches[void 0 === c ? 0 : c];
  return new p(b.pageX, b.pageY);
}
function t(a, c) {
  return !!c && a.x == c.x && a.y == c.y;
}
function u(a, c) {
  return new p(a.x - c.x, a.y - c.y);
}
g = p.prototype;
g.add = function(a) {
  return new p(this.x + a.x, this.y + a.y);
};
g.clone = function() {
  return new p(this.x, this.y);
};
g.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
g.scale = function(a) {
  return new p(this.x * a, this.y * a);
};
function v(a) {
  return new p(a.x, a.y - 1);
}
function w(a) {
  return new p(a.x, a.y + 1);
}
function x(a) {
  return new p(a.x - 1, a.y);
}
g.right = function(a) {
  return new p(this.x + (void 0 === a ? 1 : a), this.y);
};
var y = ["+", "\u2012", "\u2013", "-", "|"], z = [">", "<", "^", "v"], ga = y.concat(z), B = "ontouchstart" in window || "onmsgesturechange" in window, C = new p(-1, 0), D = new p(1, 0), F = new p(0, -1), G = new p(0, 1), H = [C, D, F, G];
function I(a, c) {
  this.a = Math.min(a.x, c.x);
  this.b = Math.min(a.y, c.y);
  this.c = Math.max(a.x, c.x);
  this.f = Math.max(a.y, c.y);
}
function ha(a) {
  return new p(a.a, a.b);
}
I.prototype.contains = function(a) {
  return a.x >= this.a && a.x <= this.c && a.y >= this.b && a.y <= this.f;
};
function ia() {
  this.a = this.value = null;
}
function J(a) {
  return null != a.a ? a.a : a.value;
}
function K(a) {
  return ga.includes(J(a));
}
function M(a) {
  return null == a.value && null == a.a;
}
function ja(a, c, b, e) {
  this.a = a;
  this.right = c;
  this.c = b;
  this.b = e;
  this.h = this.f = this.l = this.g = !1;
}
function N(a) {
  return a.a + a.right + a.c + a.b;
}
function ka(a, c) {
  this.position = a;
  this.value = c;
}
function la(a, c) {
  this.position = a;
  this.a = c;
}
;function O(a) {
  for (var c = 0;c < a.a.length;c++) {
    for (var b = 0;b < a.a[c].length;b++) {
      null != J(a.a[c][b]) && P(a, new p(c, b), "\u2009");
    }
  }
  Q(a);
}
function R(a, c) {
  return a.a[c.x][c.y];
}
function P(a, c, b) {
  var e = R(a, c);
  a.b.push(new la(c, e));
  e.a = b;
  a.c = !0;
}
function ma(a, c, b) {
  J(R(a, c)) != b && P(a, c, b);
}
function S(a) {
  for (var c = n(a.b), b = c.next();!b.done;b = c.next()) {
    b.value.a.a = null;
  }
  a.b.length = 0;
}
function na(a, c) {
  var b = R(a, c), e = null != b.a ? b.a : b.value, d = y.includes(e), f = z.includes(e);
  if (!d && !f) {
    return e;
  }
  b = T(a, c);
  if (d && b.a && b.right && !b.c && !b.b) {
    return "-";
  }
  if (d && !b.a && !b.right && b.c && b.b) {
    return "|";
  }
  if (4 == N(b)) {
    return "-";
  }
  if (f && 3 == N(b)) {
    if (!b.a) {
      return "<";
    }
    if (!b.c) {
      return "^";
    }
    if (!b.b) {
      return "v";
    }
    if (!b.right) {
      return ">";
    }
  }
  if ((d || f) && 3 == N(b)) {
    b.g = K(R(a, v(x(c))));
    b.l = K(R(a, v(c.right())));
    b.f = K(R(a, w(x(c))));
    b.h = K(R(a, w(c.right())));
    if (!b.right && b.g && b.f || !b.a && b.l && b.h) {
      return "|";
    }
    if (!b.b && b.g && b.l || !b.c && b.h && b.f) {
      return "-";
    }
    e = M(R(a, v(x(c))));
    d = M(R(a, v(c.right())));
    if (b.c && b.a && b.right && (!e || !d)) {
      return "-";
    }
    e = M(R(a, w(x(c))));
    d = M(R(a, w(c.right())));
    return !(b.b && b.a && b.right) || e && d ? "+" : "-";
  }
  if (f && 1 == N(b)) {
    if (b.a) {
      return ">";
    }
    if (b.c) {
      return "v";
    }
    if (b.b) {
      return "^";
    }
    if (b.right) {
      return "<";
    }
  }
  return e;
}
function T(a, c) {
  var b = K(R(a, x(c))), e = K(R(a, c.right())), d = K(R(a, v(c))), f = K(R(a, w(c)));
  return new ja(b, e, d, f);
}
function Q(a, c) {
  var b = [], e = a.b.map(function(a) {
    return a.position.x.toString() + a.position.y.toString();
  }), d = a.b.filter(function(a, b) {
    return e.indexOf(e[b]) == b;
  });
  a.b.length = 0;
  for (var d = n(d), f = d.next();!f.done;f = d.next()) {
    var k = f.value, f = k.position, k = k.a;
    b.push(new ka(f, null != k.value ? k.value : " "));
    var l = J(k);
    if ("\u2009" == l || " " == l) {
      l = null;
    }
    K(k) && (l = na(a, f));
    k.a = null;
    k.value = l;
  }
  d = c ? a.f : a.g;
  0 < b.length && (50 < d.length && d.shift(), d.push(b));
  a.c = !0;
}
function oa(a) {
  if (a.g.length) {
    for (var c = a.g.pop(), c = n(c), b = c.next();!b.done;b = c.next()) {
      b = b.value, P(a, b.position, b.value);
    }
    Q(a, !0);
  }
}
function pa(a) {
  if (a.f.length) {
    for (var c = a.f.pop(), c = n(c), b = c.next();!b.done;b = c.next()) {
      b = b.value, P(a, b.position, b.value);
    }
    Q(a);
  }
}
function U(a) {
  for (var c = new p(Number.MAX_VALUE, Number.MAX_VALUE), b = new p(-1, -1), e = 0;e < a.a.length;e++) {
    for (var d = 0;d < a.a[e].length;d++) {
      null != J(a.a[e][d]) && (e < c.x && (c.x = e), d < c.y && (c.y = d), e > b.x && (b.x = e), d > b.y && (b.y = d));
    }
  }
  if (0 > b.x) {
    return "";
  }
  for (var f = "", d = c.y;d <= b.y;d++) {
    for (var k = "", e = c.x;e <= b.x;e++) {
      var l = na(a, new p(e, d)), k = k + (null == l || "\u2009" == l ? " " : l);
    }
    f += k.replace(/\s+$/, "") + "\n";
  }
  return f;
}
function qa(a, c, b) {
  c = c.split("\n");
  for (var e = new p(0, Math.round(c.length / 2)), d = 0;d < c.length;d++) {
    e.x = Math.max(e.x, Math.round(c[d].length / 2));
  }
  for (d = 0;d < c.length;d++) {
    for (var f = c[d], k = 0;k < f.length;k++) {
      var l = f.charAt(k);
      y.includes(l) && (l = "+");
      P(a, u((new p(k, d)).add(b), e), l);
    }
  }
}
;function V(a, c, b, e, d) {
  d = void 0 === d ? "+" : d;
  var f = new I(c, b), k = f.a, l = f.b, A = f.c, f = f.f, E = e ? b.x : c.x;
  for (e = e ? c.y : b.y;k++ < A;) {
    var q = new p(k, e), L = T(a, new p(k, e));
    " " == d && 2 == L.c + L.b || ma(a, q, d);
  }
  for (;l++ < f;) {
    q = new p(E, l), L = T(a, new p(E, l)), " " == d && 2 == L.a + L.right || ma(a, q, d);
  }
  P(a, c, d);
  P(a, b, d);
  ma(a, new p(E, e), d);
}
;function ra(a) {
  this.a = a;
  this.b = null;
}
g = ra.prototype;
g.start = function(a) {
  this.b = a;
};
g.i = function(a) {
  S(this.a);
  V(this.a, this.b, a, !0);
  V(this.a, this.b, a, !1);
};
g.m = function() {
  Q(this.a);
};
g.o = function() {
  return "crosshair";
};
g.j = function() {
};
function sa(a) {
  a.b.width = document.documentElement.clientWidth;
  a.b.height = document.documentElement.clientHeight;
  a.f = !0;
}
function ta(a) {
  if (a.f || a.g.c) {
    a.f = !1, a.g.c = !1, ua(a);
  }
  window.requestAnimationFrame(function() {
    ta(a);
  });
}
function ua(a) {
  var c = a.context;
  c.setTransform(1, 0, 0, 1, 0, 0);
  c.clearRect(0, 0, a.b.width, a.b.height);
  c.scale(a.c, a.c);
  c.translate(a.b.width / 2 / a.c, a.b.height / 2 / a.c);
  var b = u(W(a, new p(0, 0)), new p(3, 3)), e = W(a, new p(a.b.width, a.b.height)).add(new p(3, 3));
  b.x = Math.max(0, Math.min(b.x, 2E3));
  e.x = Math.max(0, Math.min(e.x, 2E3));
  b.y = Math.max(0, Math.min(b.y, 600));
  e.y = Math.max(0, Math.min(e.y, 600));
  c.lineWidth = "1";
  c.strokeStyle = "#EEEEEE";
  c.beginPath();
  for (var d = b.x;d < e.x;d++) {
    c.moveTo(9 * d - a.a.x, 0 - a.a.y), c.lineTo(9 * d - a.a.x, 17 * a.g.a.length - a.a.y);
  }
  for (d = b.y;d < e.y;d++) {
    c.moveTo(0 - a.a.x, 17 * d - a.a.y), c.lineTo(9 * a.g.a.length - a.a.x, 17 * d - a.a.y);
  }
  a.context.stroke();
  d = !a.h;
  c.font = "15px Courier New";
  for (var f = b.x;f < e.x;f++) {
    for (var k = b.y;k < e.y;k++) {
      var l = R(a.g, new p(f, k));
      if (K(l) || null != l.a && " " != J(l)) {
        a.context.fillStyle = null != l.a ? "#DEF" : "#F5F5F5", c.fillRect(9 * f - a.a.x, 17 * (k - 1) - a.a.y, 9, 17);
      }
      var A = na(a.g, new p(f, k));
      null == A || K(l) && !d || (a.context.fillStyle = "#000000", c.fillText(A, 9 * f - a.a.x, 17 * k - a.a.y - 3));
    }
  }
  if (a.h) {
    c.lineWidth = "1";
    c.strokeStyle = "#000000";
    c.beginPath();
    for (d = b.x;d < e.x;d++) {
      for (l = !1, f = b.y;f < e.y;f++) {
        k = R(a.g, new p(d, f)), K(k) && f != e.y - 1 || !l || (c.moveTo(9 * d - a.a.x + 4.5, 17 * l - a.a.y - 8.5), c.lineTo(9 * d - a.a.x + 4.5, 17 * (f - 1) - a.a.y - 8.5), l = !1), K(k) && !l && (l = f);
      }
    }
    for (f = b.y;f < e.y;f++) {
      for (l = !1, d = b.x;d < e.x;d++) {
        k = R(a.g, new p(d, f)), K(k) && d != e.x - 1 || !l || (c.moveTo(9 * l - a.a.x + 4.5, 17 * f - a.a.y - 8.5), c.lineTo(9 * (d - 1) - a.a.x + 4.5, 17 * f - a.a.y - 8.5), l = !1), K(k) && !l && (l = d);
      }
    }
    a.context.stroke();
  }
}
function W(a, c) {
  var b = new p((c.x - a.b.width / 2) / a.c + a.a.x, (c.y - a.b.height / 2) / a.c + a.a.y);
  return new p(Math.min(Math.max(1, Math.round((b.x - 4.5) / 9)), 1998), Math.min(Math.max(1, Math.round((b.y + 8.5) / 17)), 598));
}
;function X(a) {
  this.c = a;
  this.a = this.b = null;
}
g = X.prototype;
g.start = function(a) {
  this.b = a;
  this.i(a);
};
g.i = function(a) {
  S(this.c);
  this.a = a;
  a = Math.min(this.b.y, this.a.y);
  for (var c = Math.max(this.b.x, this.a.x), b = Math.max(this.b.y, this.a.y), e = Math.min(this.b.x, this.a.x);e <= c;e++) {
    for (var d = a;d <= b;d++) {
      P(this.c, new p(e, d), "\u2009");
    }
  }
};
g.m = function() {
  Q(this.c);
};
g.o = function() {
  return "crosshair";
};
g.j = function() {
};
function va(a, c) {
  this.a = a;
  this.c = c;
  this.b = null;
}
g = va.prototype;
g.start = function(a) {
  this.b = a;
};
g.i = function(a) {
  S(this.a);
  var c = T(this.a, this.b), b = T(this.a, a);
  V(this.a, this.b, a, c.c && c.b || b.a && b.right);
  this.c && P(this.a, a, b.c ? "^" : b.b ? "v" : b.a ? "<" : ">");
};
g.m = function() {
  Q(this.a);
};
g.o = function() {
  return "crosshair";
};
g.j = function() {
};
function wa(a) {
  this.c = a;
  this.g = this.f = this.b = this.a = null;
  this.h = !0;
  this.l = [];
}
g = wa.prototype;
g.start = function(a) {
  this.a && this.b && (new I(this.a, this.b)).contains(a) ? (this.f = a, xa(this), ya(this, a)) : (this.a = a, this.b = null, this.h = !1, this.i(a));
};
function xa(a) {
  var c = a.c.b.filter(function(a) {
    return null != J(a.a) && "\u2009" != J(a.a);
  }), b = ha(new I(a.a, a.b));
  a.l = c.map(function(a) {
    return new ka(u(a.position, b), J(a.a));
  });
}
g.i = function(a) {
  if (this.f) {
    ya(this, a);
  } else {
    if (1 != this.h) {
      this.b = a;
      S(this.c);
      a = new I(this.a, a);
      for (var c = a.a;c <= a.c;c++) {
        for (var b = a.b;b <= a.f;b++) {
          var e = new p(c, b), d = J(R(this.c, e));
          P(this.c, e, null == d ? "\u2009" : d);
        }
      }
    }
  }
};
function ya(a, c) {
  a.g = c;
  S(a.c);
  var b = new X(a.c);
  b.start(a.a);
  b.i(a.b);
  b = u(a.g, a.f).add(ha(new I(a.a, a.b)));
  za(a, b);
}
function za(a, c) {
  for (var b = n(a.l), e = b.next();!e.done;e = b.next()) {
    var e = e.value, d = e.value;
    P(a.c, e.position.add(c), d);
  }
}
g.m = function() {
  this.f && (Q(this.c), this.b = this.a = null);
  this.g = this.f = null;
  this.h = !0;
};
g.o = function(a) {
  return this.a && this.b && (new I(this.a, this.b)).contains(a) ? "pointer" : "default";
};
g.j = function(a) {
  if (this.a && this.b && ("<copy>" != a && "<cut>" != a || xa(this), "<cut>" == a)) {
    var c = new X(this.c);
    c.start(this.a);
    c.i(this.b);
    Q(this.c);
  }
  "<paste>" == a && (za(this, this.a), Q(this.c));
};
function Aa(a) {
  this.b = a;
  this.c = this.a = null;
}
g = Aa.prototype;
g.start = function(a) {
  Q(this.b);
  $("#text-tool-input").val("");
  this.a = a;
  a = J(R(this.b, this.a));
  P(this.b, this.a, null == a ? "\u2009" : a);
};
g.i = function() {
};
g.m = function() {
  null != this.a && (this.c = this.a, this.a = null, $("#text-tool-widget").hide(0, function() {
    $("#text-tool-widget").show(0, function() {
      $("#text-tool-input").focus();
    });
  }));
};
g.o = function() {
  return "pointer";
};
g.j = function() {
  var a = $("#text-tool-input").val();
  S(this.b);
  for (var c = this.b, b = this.c, e = 0, d = 0, a = n(a), f = a.next();!f.done;f = a.next()) {
    f = f.value, "\n" == f ? (d++, e = 0) : (P(c, b.add(new p(e, d)), f), e++);
  }
};
function Ba(a) {
  this.a = a;
  this.b = null;
  this.c = [];
}
g = Ba.prototype;
g.start = function(a) {
  var c;
  if (B) {
    if (K(R(this.a, a))) {
      c = a;
    } else {
      var b = H.concat([C.add(F), C.add(G), D.add(F), D.add(G)]);
      c = null;
      for (var e = 0, b = n(b), d = b.next();!d.done;d = b.next()) {
        var d = d.value, f = a.add(d), k = N(T(this.a, f));
        K(R(this.a, f)) && k > e && (c = d, e = k);
      }
      c = null == c ? a : a.add(c);
    }
  } else {
    c = a;
  }
  this.b = c;
  this.c = [];
  if (K(R(this.a, this.b))) {
    T(this.a, this.b);
    c = [];
    e = n(H);
    for (b = e.next();!b.done;b = e.next()) {
      for (b = b.value, d = Ca(this, this.b, b), d = n(d), f = d.next();!f.done;f = d.next()) {
        var f = f.value, k = 0 != b.x, l = -1 != z.indexOf(J(R(this.a, a))), A = -1 != z.indexOf(J(R(this.a, f)));
        if (1 == N(T(this.a, f))) {
          c.push({position:f, s:k, v:l, u:A});
        } else {
          for (var E = n(H), q = E.next();!q.done;q = E.next()) {
            q = q.value, 0 != b.add(q).length() && 2 != b.add(q).length() && (q = Ca(this, f, q), q.length && (q = q[0], c.push({position:q, s:k, v:l, w:A, u:-1 != z.indexOf(J(R(this.a, q)))})));
          }
        }
      }
    }
    this.c = c;
    this.i(this.b);
  }
};
g.i = function(a) {
  S(this.a);
  for (var c = n(this.c), b = c.next();!b.done;b = c.next()) {
    b = b.value, V(this.a, this.b, b.position, b.s, " ");
  }
  c = n(this.c);
  for (b = c.next();!b.done;b = c.next()) {
    b = b.value, V(this.a, a, b.position, b.s);
  }
  c = n(this.c);
  for (b = c.next();!b.done;b = c.next()) {
    b = b.value, b.v && P(this.a, a, "^"), b.u && P(this.a, b.position, "^"), b.w && P(this.a, new p(b.s ? b.position.x : a.x, b.s ? a.y : b.position.y), "^");
  }
};
g.m = function() {
  Q(this.a);
};
function Ca(a, c, b) {
  for (var e = c.clone(), d = [];;) {
    var f = e.add(b);
    if (!K(R(a.a, f))) {
      return t(c, e) || d.push(e), d;
    }
    e = f;
    3 == N(T(a.a, e)) && d.push(e);
  }
}
g.o = function(a) {
  return K(R(this.a, a)) ? "pointer" : "default";
};
g.j = function() {
};
function Da(a, c) {
  this.a = a;
  this.value = c;
  B && ($("#freeform-tool-input").val(""), $("#freeform-tool-input").hide(0, function() {
    $("#freeform-tool-input").show(0, function() {
      $("#freeform-tool-input").focus();
    });
  }));
}
g = Da.prototype;
g.start = function(a) {
  P(this.a, a, this.value);
};
g.i = function(a) {
  P(this.a, a, this.value);
};
g.m = function() {
  Q(this.a);
};
g.o = function() {
  return "crosshair";
};
g.j = function(a) {
  B && (this.value = $("#freeform-tool-input").val().substr(0, 1), $("#freeform-tool-input").blur(), $("#freeform-tool-input").hide(0));
  1 == a.length && (this.value = a);
};
function Ea(a, c) {
  var b = W(a.a, c);
  a.f || (a.f = b);
  t(b, a.f) || (a.a.b.style.cursor = a.c.o(b));
  2 != a.mode || t(b, a.f) || a.c.i(b);
  if (1 == a.mode) {
    var e = a.a, d = a.h.add(u(a.g, c).scale(1 / a.a.c));
    e.a = d;
    e.f = !0;
  }
  a.f = b;
}
function Y(a) {
  2 == a.mode && a.c.m();
  a.mode = 0;
  a.g = null;
  a.h = null;
  a.f = null;
}
function Fa(a) {
  $(window).resize(function() {
    sa(a.a);
  });
  $("#copy-button").click(function() {
    var c = U(a.b), b = document.createElement("textarea");
    b.value = c;
    b.style.top = "0";
    b.style.left = "0";
    b.style.position = "fixed";
    document.body.appendChild(b);
    b.focus();
    b.select();
    try {
      var e = document.execCommand("copy") ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + e);
    } catch (d) {
      console.error("Fallback: Oops, unable to copy", d);
    }
    document.body.removeChild(b);
  });
  $("#draw-tools > button.tool").click(function(c) {
    $("#text-tool-widget").hide(0);
    c = c.target.id;
    $("#draw-tools > button.tool").removeClass("active");
    $("#" + c).toggleClass("active");
    $(".dialog").removeClass("visible");
    "box-button" == c && (a.c = new ra(a.b));
    "line-button" == c && (a.c = new va(a.b, !1));
    "arrow-button" == c && (a.c = new va(a.b, !0));
    "freeform-button" == c && (a.c = new Da(a.b, "X"));
    "erase-button" == c && (a.c = new X(a.b));
    "move-button" == c && (a.c = new Ba(a.b));
    "text-button" == c && (a.c = new Aa(a.b));
    "select-button" == c && (a.c = new wa(a.b));
    Q(a.b);
    a.a.b.focus();
  });
  $("#file-tools > button.tool").click(function(c) {
    c = c.target.id;
    $(".dialog").removeClass("visible");
    $("#" + c + "-dialog").toggleClass("visible");
    "import-button" == c && ($("#import-area").val(""), $("#import-area").focus());
    "export-button" == c && ($("#export-area").val(U(a.b)), $("#export-area").select());
    "clear-button" == c && O(a.b);
    "undo-button" == c && oa(a.b);
    "redo-button" == c && pa(a.b);
  });
  $("button.close-dialog-button").click(function() {
    $(".dialog").removeClass("visible");
  });
  $("#import-submit-button").click(function() {
    O(a.b);
    qa(a.b, $("#import-area").val(), W(a.a, new p(a.a.b.width / 2, a.a.b.height / 2)));
    Q(a.b);
    $("#import-area").val("");
    $(".dialog").removeClass("visible");
  });
  $("#use-lines-button").click(function() {
    $(".dialog").removeClass("visible");
    var c = a.a;
    c.h = !0;
    c.f = !0;
  });
  $("#use-ascii-button").click(function() {
    $(".dialog").removeClass("visible");
    var c = a.a;
    c.h = !1;
    c.f = !0;
  });
  $(window).keypress(function(c) {
    c.ctrlKey || c.metaKey || 13 == c.keyCode || a.c.j(String.fromCharCode(c.keyCode));
  });
  $(window).keydown(function(c) {
    var b = null;
    if (c.ctrlKey || c.metaKey) {
      67 == c.keyCode && (b = "<copy>"), 86 == c.keyCode && (b = "<paste>"), 90 == c.keyCode && oa(a.b), 89 == c.keyCode && pa(a.b), 88 == c.keyCode && (b = "<cut>");
    }
    8 == c.keyCode && (b = "<backspace>");
    13 == c.keyCode && (b = "<enter>");
    38 == c.keyCode && (b = "<up>");
    40 == c.keyCode && (b = "<down>");
    37 == c.keyCode && (b = "<left>");
    39 == c.keyCode && (b = "<right>");
    null != b && a.c.j(b);
  });
  $("#text-tool-input, #freeform-tool-input").keyup(function() {
    a.c.j("");
  });
  $("#text-tool-input, #freeform-tool-input").change(function() {
    a.c.j("");
  });
  $("#text-tool-close").click(function() {
    $("#text-tool-widget").hide();
    Q(a.b);
  });
}
;function Ga(a, c) {
  window.gapi.auth.authorize({client_id:"125643747010-9s9n1ne2fnnuh5v967licfkt83r4vba5.apps.googleusercontent.com", scope:"https://www.googleapis.com/auth/drive", A:c}, function(b) {
    !b || b.error || a.f || (a.f = !0, $("#drive-button").addClass("active"), window.setTimeout(function() {
      Ha(a);
    }, 500));
  });
}
function Ia(a) {
  window.gapi && window.gapi.auth && window.gapi.auth.authorize ? Ga(a, !0) : window.setTimeout(function() {
    Ia(a);
  }, 500);
}
function Ja(a) {
  window.setTimeout(function() {
    a.f ? Ka(a) : (Ga(a, !0), Ja(a));
  }, 1E3);
}
function La(a, c) {
  a.a = c;
  $("#drive-filename").text(c.title);
  window.location.hash = c.id;
}
function Ka(a) {
  $("#drive-dialog").addClass("visible");
  var c = U(a.b);
  5 < c.length && c != a.c && Z(a);
  Ma();
}
function Ma() {
  Na(window.gapi.client.request({path:"/drive/v2/files", params:{q:"mimeType = 'text/plain' and trashed = false"}, method:"GET"}), function(a) {
    $("#drive-file-list").children().remove();
    a = a.items;
    for (var c in a) {
      var b = document.createElement("li"), e = document.createElement("a");
      b.appendChild(e);
      e.href = "#" + a[c].id;
      $(e).click(function() {
        $("#drive-dialog").removeClass("visible");
      });
      e.innerHTML = a[c].title;
      $("#drive-file-list").append(b);
    }
  });
}
function Na(a, c) {
  try {
    a.execute(function(a) {
      a.error || c(a);
    });
  } catch (b) {
  }
}
function Oa(a) {
  U(a.b) != a.c && a.a && a.a.editable && Z(a);
  window.setTimeout(function() {
    Oa(a);
  }, 5E3);
}
function Z(a) {
  var c = U(a.b);
  $("#drive-save-state").text("Saving...");
  Na(Pa(a, c), function(b) {
    La(a, b);
    $("#drive-save-state").text("Saved");
    a.c = c;
  });
}
function Ha(a) {
  1 < window.location.hash.length && ($("#drive-save-state").text("Loading..."), Na(window.gapi.client.request({path:"/drive/v2/files/" + window.location.hash.substr(1, window.location.hash.length - 1), method:"GET"}), function(c) {
    La(a, c);
    Qa(a);
  }));
}
function Qa(a) {
  Ra(a.a.downloadUrl, function(c) {
    $("#drive-save-state").text("Loaded");
    O(a.b);
    qa(a.b, c, W(a.g, new p(a.g.b.width / 2, a.g.b.height / 2)));
    Q(a.b);
    a.c = U(a.b);
  });
}
function Pa(a, c) {
  var b = "\r\n---------314159265358979323846\r\nContent-Type: application/json\r\n\r\n" + JSON.stringify({title:a.a ? a.a.title : "Untitled ASCII Diagram", mimeType:"text/plain"}) + "\r\n---------314159265358979323846\r\nContent-Type: text/plain\r\n\r\n" + c + "\r\n---------314159265358979323846--";
  return window.gapi.client.request({method:a.a ? "PUT" : "POST", path:"/upload/drive/v2/files" + (a.a ? "/" + a.a.id : ""), params:{uploadType:"multipart"}, headers:{"Content-Type":'multipart/mixed; boundary="-------314159265358979323846"'}, body:b});
}
function Ra(a, c) {
  var b = window.gapi.auth.getToken().access_token, e = new XMLHttpRequest;
  e.open("GET", a);
  e.setRequestHeader("Authorization", "Bearer " + b);
  e.onload = function() {
    c(e.responseText);
  };
  e.onerror = function() {
    c(null);
  };
  e.send();
}
;function Sa(a) {
  var c = $(a.a.a.b);
  c.on("mousewheel", function(b) {
    b = a.a.a.c * (0 < b.originalEvent.wheelDelta ? 1.1 : .9);
    b = Math.max(Math.min(b, 5), .2);
    var c = a.a.a;
    c.c = b;
    c.f = !0;
  });
  c.mousedown(function(b) {
    if (b.ctrlKey || b.metaKey) {
      var c = a.a;
      b = new p(b.clientX, b.clientY);
      c.mode = 1;
      c.g = b;
      c.h = c.a.a;
    } else {
      c = a.a, b = new p(b.clientX, b.clientY), c.mode = 2, c.c.start(W(c.a, b));
    }
  });
  c.mouseup(function() {
    Y(a.a);
  });
  c.mouseleave(function() {
    Y(a.a);
  });
  c.mousemove(function(b) {
    Ea(a.a, new p(b.clientX, b.clientY));
  });
}
function Ta(a, c) {
  a.f = c;
  a.h = $.now();
  a.b = !1;
  window.setTimeout(function() {
    if (!a.b && !a.c && a.f) {
      var b = a.a;
      b.mode = 2;
      b.c.start(W(b.a, c));
    }
  }, 150);
}
function Ua(a) {
  var c = $(a.a.a.b);
  c.on("touchstart", function(b) {
    b.preventDefault();
    if (1 == b.originalEvent.touches.length) {
      Ta(a, r(b));
    } else {
      if (1 < b.originalEvent.touches.length) {
        var c = r(b, 0);
        b = r(b, 1);
        Y(a.a);
        a.c = !0;
        a.b = !1;
        a.l = u(c, b).length();
        a.g = a.a.a.c;
      }
    }
  });
  c.on("touchmove", function(b) {
    b.preventDefault();
    if (1 == b.originalEvent.touches.length) {
      b = r(b);
      if (!a.b && 150 > $.now() - a.h && 6 < u(b, a.f).length()) {
        a.b = !0;
        var c = a.a;
        c.mode = 1;
        c.g = b;
        c.h = c.a.a;
      }
      Ea(a.a, b);
    } else {
      1 < b.originalEvent.touches.length && a.c && (b = a.g * u(r(b, 0), r(b, 1)).length() / a.l, b = Math.max(Math.min(b, 5), .5), c = a.a.a, c.c = b, c.f = !0);
    }
  });
  c.on("touchend", function(b) {
    b.preventDefault();
    a.b = !1;
    a.c = !1;
    a.f = null;
    Y(a.a);
  });
}
;var Va = new function() {
  this.a = Array(2E3);
  this.b = [];
  this.c = !0;
  this.g = [];
  this.f = [];
  for (var a = 0;a < this.a.length;a++) {
    this.a[a] = Array(600);
    for (var c = 0;c < this.a[a].length;c++) {
      this.a[a][c] = new ia;
    }
  }
}, Wa = new function(a) {
  this.g = a;
  this.b = document.getElementById("ascii-canvas");
  this.context = this.b.getContext("2d");
  this.c = 1;
  this.a = new p(9E3, 5100);
  this.f = !0;
  this.h = !1;
  sa(this);
}(Va), Xa = new function(a, c) {
  this.a = a;
  this.b = c;
  this.c = new ra(c);
  this.mode = 0;
  this.f = null;
  Fa(this);
}(Wa, Va);
new function(a) {
  this.a = a;
  this.c = this.b = !1;
  Ua(this);
}(Xa);
new function(a) {
  this.a = a;
  Sa(this);
}(Xa);
new function(a, c) {
  var b = this;
  this.f = !1;
  this.b = a;
  this.g = c;
  this.a = null;
  this.c = "";
  Ia(this);
  $("#drive-button").click(function() {
    b.f ? Ka(b) : (Ga(b, !1), Ja(b));
  });
  $("#drive-filename").click(function() {
    var a = "" + $("#drive-filename").text(), a = prompt("Enter new filename:", a);
    b.a.title = a;
    Z(b);
    Ma();
  });
  Oa(this);
  $(window).on("hashchange", function() {
    Ha(b);
  });
  $("#drive-new-file-button").click(function() {
    b.a = null;
    O(b.b);
    window.location.hash = "";
    Z(b);
    $("#drive-dialog").removeClass("visible");
  });
}(Va, Wa);
ta(Wa);

