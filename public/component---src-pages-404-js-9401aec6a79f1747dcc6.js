'use strict';
(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [883],
  {
    9616: function(e, t, n) {
      n.r(t);
      const l = n(7294);
      const o = n(5444);
      const a = n(5414);
      const i = n(5813);
      const c = n(7428);
      const m = n(3494);
      const r = n(4165);
      const u = n(4741);
      const f = n(3082);
      const s = m.default.main.withConfig({
        displayName: 'sc-404__StyledMainContainer',
        componentId: 'sc-bnxlhm-0',
      })(['', ';flex-direction:column;'], function(e) {
        return e.theme.mixins.flexCenter;
      });
      const d = m.default.h1.withConfig({
        displayName: 'sc-404__StyledTitle',
        componentId: 'sc-bnxlhm-1',
      })([
        'color:var(--green);font-family:var(--font-mono);font-size:clamp(100px,25vw,200px);line-height:1;',
      ]);
      const p = m.default.h2.withConfig({
        displayName: 'sc-404__StyledSubtitle',
        componentId: 'sc-bnxlhm-2',
      })(['font-size:clamp(30px,5vw,50px);font-weight:400;']);
      const h = (0, m.default)(o.Link).withConfig({
        displayName: 'sc-404__StyledHomeButton',
        componentId: 'sc-bnxlhm-3',
      })(['', ';margin-top:40px;'], function(e) {
        return e.theme.mixins.bigButton;
      });
      t.default = function(e) {
        const t = e.location;
        const n = (0, l.useState)(!1);
        const o = n[0];
        const m = n[1];
        const g = (0, f.Tb)();
        (0, l.useEffect)(function() {
          if (!g) {
            const e = setTimeout(function() {
              return m(!0);
            }, r.fb);
            return function() {
              return clearTimeout(e);
            };
          }
        }, []);
        const x = l.createElement(
          s,
          { className: 'fillHeight' },
          l.createElement(d, null, '404'),
          l.createElement(p, null, 'Page Not Found'),
          l.createElement(h, { to: '/' }, 'Go Home'),
        );
        return l.createElement(
          u.Ar,
          { location: t },
          l.createElement(a.q, { title: 'Page Not Found' }),
          g
            ? l.createElement(l.Fragment, null, x)
            : l.createElement(
              i.Z,
              { component: null },
              o && l.createElement(c.Z, { timeout: 500, classNames: 'fadeup' }, x),
            ),
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-9401aec6a79f1747dcc6.js.map
