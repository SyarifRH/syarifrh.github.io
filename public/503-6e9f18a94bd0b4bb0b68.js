'use strict';
(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [503],
  {
    9503: function(e, r, t) {
      t.r(r),
      t.d(r, {
        lazyHydrate: function() {
          return c;
        },
      });
      const o = t(6125);
      const n = t(7294);
      const a = t(3935);
      const i =
          (t(4041),
          t(72),
          [
            'image',
            'loading',
            'isLoading',
            'isLoaded',
            'toggleIsLoaded',
            'ref',
            'imgClassName',
            'imgStyle',
            'objectPosition',
            'backgroundColor',
            'objectFit',
          ]);
      function c(e, r, t, c) {
        const u = e.image;
        const d = e.loading;
        const l = e.isLoading;
        const g = e.isLoaded;
        const s = e.toggleIsLoaded;
        const h = e.ref;
        const b = e.imgClassName;
        const m = e.imgStyle;
        let f = void 0 === m ? {} : m;
        const k = e.objectPosition;
        const v = e.backgroundColor;
        const y = e.objectFit;
        const C = void 0 === y ? 'cover' : y;
        const L = (0, o._)(e, i);
        const j = u.width;
        const w = u.height;
        const p = u.layout;
        const N = u.images;
        const P = u.placeholder;
        const E = u.backgroundColor;
        const F = JSON.stringify(N);
        f = (0, o.a)({ objectFit: C, objectPosition: k, backgroundColor: v }, f);
        const R = n.createElement(
          o.L,
          { layout: p, width: j, height: w },
          n.createElement(o.P, (0, o.a)({}, (0, o.g)(P, g, p, j, w, E, C, k))),
          n.createElement(
            o.M,
            (0, o.a)(
              {},
              L,
              { width: j, height: w, className: b },
              (0, o.b)(l, g, N, d, s, F, h, f),
            ),
          ),
        );
        return (
          r.current &&
            (a.createRoot
              ? (t.current || (t.current = a.createRoot(r.current)), t.current.render(R))
              : ((t.current || c.current ? a.render : a.hydrate)(R, r.current), (t.current = !0))),
          function() {
            r.current && (a.createRoot ? t.current.render(null) : a.render(null, r.current));
          }
        );
      }
    },
  },
]);
//# sourceMappingURL=503-6e9f18a94bd0b4bb0b68.js.map
