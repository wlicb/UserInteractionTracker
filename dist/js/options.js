;(() => {
  'use strict'
  var e,
    t = {
      102: (e, t, r) => {
        var o = r(540)
        ;(0, r(338).H)(document.getElementById('root')).render(
          o.createElement(
            o.StrictMode,
            null,
            o.createElement(() => {
              const [e, t] = (0, o.useState)(''),
                [r, l] = (0, o.useState)(''),
                [n, a] = (0, o.useState)(!1)
              return (
                (0, o.useEffect)(() => {
                  chrome.storage.sync.get({ favoriteColor: 'red', likesColor: !0 }, (e) => {
                    t(e.favoriteColor), a(e.likesColor)
                  })
                }, []),
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    'div',
                    null,
                    'Favorite color: ',
                    o.createElement(
                      'select',
                      { value: e, onChange: (e) => t(e.target.value) },
                      o.createElement('option', { value: 'red' }, 'red'),
                      o.createElement('option', { value: 'green' }, 'green'),
                      o.createElement('option', { value: 'blue' }, 'blue'),
                      o.createElement('option', { value: 'yellow' }, 'yellow')
                    )
                  ),
                  o.createElement(
                    'div',
                    null,
                    o.createElement(
                      'label',
                      null,
                      o.createElement('input', {
                        type: 'checkbox',
                        checked: n,
                        onChange: (e) => a(e.target.checked)
                      }),
                      'I like colors.'
                    )
                  ),
                  o.createElement('div', null, r),
                  o.createElement(
                    'button',
                    {
                      onClick: () => {
                        chrome.storage.sync.set({ favoriteColor: e, likesColor: n }, () => {
                          l('Options saved.')
                          const e = setTimeout(() => {
                            l('')
                          }, 1e3)
                          return () => clearTimeout(e)
                        })
                      }
                    },
                    'Save'
                  )
                )
              )
            }, null)
          )
        )
      }
    },
    r = {}
  function o(e) {
    var l = r[e]
    if (void 0 !== l) return l.exports
    var n = (r[e] = { exports: {} })
    return t[e](n, n.exports, o), n.exports
  }
  ;(o.m = t),
    (e = []),
    (o.O = (t, r, l, n) => {
      if (!r) {
        var a = 1 / 0
        for (u = 0; u < e.length; u++) {
          for (var [r, l, n] = e[u], c = !0, i = 0; i < r.length; i++)
            (!1 & n || a >= n) && Object.keys(o.O).every((e) => o.O[e](r[i]))
              ? r.splice(i--, 1)
              : ((c = !1), n < a && (a = n))
          if (c) {
            e.splice(u--, 1)
            var s = l()
            void 0 !== s && (t = s)
          }
        }
        return t
      }
      n = n || 0
      for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1]
      e[u] = [r, l, n]
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 575: 0 }
      o.O.j = (t) => 0 === e[t]
      var t = (t, r) => {
          var l,
            n,
            [a, c, i] = r,
            s = 0
          if (a.some((t) => 0 !== e[t])) {
            for (l in c) o.o(c, l) && (o.m[l] = c[l])
            if (i) var u = i(o)
          }
          for (t && t(r); s < a.length; s++) (n = a[s]), o.o(e, n) && e[n] && e[n][0](), (e[n] = 0)
          return o.O(u)
        },
        r = (self.webpackChunkchrome_extension_typescript_starter =
          self.webpackChunkchrome_extension_typescript_starter || [])
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
    })()
  var l = o.O(void 0, [121], () => o(102))
  l = o.O(l)
})()
