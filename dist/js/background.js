/******/ ;(() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/jszip/dist/jszip.min.js':
      /*!**********************************************!*\
  !*** ./node_modules/jszip/dist/jszip.min.js ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

        !(function (e) {
          if (true) module.exports = e()
          else {
          }
        })(function () {
          return (function s(a, o, h) {
            function u(r, e) {
              if (!o[r]) {
                if (!a[r]) {
                  var t = undefined
                  if (!e && t) return require(r, !0)
                  if (l) return l(r, !0)
                  var n = new Error("Cannot find module '" + r + "'")
                  throw ((n.code = 'MODULE_NOT_FOUND'), n)
                }
                var i = (o[r] = { exports: {} })
                a[r][0].call(
                  i.exports,
                  function (e) {
                    var t = a[r][1][e]
                    return u(t || e)
                  },
                  i,
                  i.exports,
                  s,
                  a,
                  o,
                  h
                )
              }
              return o[r].exports
            }
            for (var l = undefined, e = 0; e < h.length; e++) u(h[e])
            return u
          })(
            {
              1: [
                function (e, t, r) {
                  'use strict'
                  var d = e('./utils'),
                    c = e('./support'),
                    p = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
                  ;(r.encode = function (e) {
                    for (
                      var t,
                        r,
                        n,
                        i,
                        s,
                        a,
                        o,
                        h = [],
                        u = 0,
                        l = e.length,
                        f = l,
                        c = 'string' !== d.getTypeOf(e);
                      u < e.length;

                    )
                      (f = l - u),
                        (n = c
                          ? ((t = e[u++]), (r = u < l ? e[u++] : 0), u < l ? e[u++] : 0)
                          : ((t = e.charCodeAt(u++)),
                            (r = u < l ? e.charCodeAt(u++) : 0),
                            u < l ? e.charCodeAt(u++) : 0)),
                        (i = t >> 2),
                        (s = ((3 & t) << 4) | (r >> 4)),
                        (a = 1 < f ? ((15 & r) << 2) | (n >> 6) : 64),
                        (o = 2 < f ? 63 & n : 64),
                        h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o))
                    return h.join('')
                  }),
                    (r.decode = function (e) {
                      var t,
                        r,
                        n,
                        i,
                        s,
                        a,
                        o = 0,
                        h = 0,
                        u = 'data:'
                      if (e.substr(0, u.length) === u)
                        throw new Error('Invalid base64 input, it looks like a data url.')
                      var l,
                        f = (3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, '')).length) / 4
                      if (
                        (e.charAt(e.length - 1) === p.charAt(64) && f--,
                        e.charAt(e.length - 2) === p.charAt(64) && f--,
                        f % 1 != 0)
                      )
                        throw new Error('Invalid base64 input, bad content length.')
                      for (
                        l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f);
                        o < e.length;

                      )
                        (t =
                          (p.indexOf(e.charAt(o++)) << 2) | ((i = p.indexOf(e.charAt(o++))) >> 4)),
                          (r = ((15 & i) << 4) | ((s = p.indexOf(e.charAt(o++))) >> 2)),
                          (n = ((3 & s) << 6) | (a = p.indexOf(e.charAt(o++)))),
                          (l[h++] = t),
                          64 !== s && (l[h++] = r),
                          64 !== a && (l[h++] = n)
                      return l
                    })
                },
                { './support': 30, './utils': 32 }
              ],
              2: [
                function (e, t, r) {
                  'use strict'
                  var n = e('./external'),
                    i = e('./stream/DataWorker'),
                    s = e('./stream/Crc32Probe'),
                    a = e('./stream/DataLengthProbe')
                  function o(e, t, r, n, i) {
                    ;(this.compressedSize = e),
                      (this.uncompressedSize = t),
                      (this.crc32 = r),
                      (this.compression = n),
                      (this.compressedContent = i)
                  }
                  ;(o.prototype = {
                    getContentWorker: function () {
                      var e = new i(n.Promise.resolve(this.compressedContent))
                          .pipe(this.compression.uncompressWorker())
                          .pipe(new a('data_length')),
                        t = this
                      return (
                        e.on('end', function () {
                          if (this.streamInfo.data_length !== t.uncompressedSize)
                            throw new Error('Bug : uncompressed data size mismatch')
                        }),
                        e
                      )
                    },
                    getCompressedWorker: function () {
                      return new i(n.Promise.resolve(this.compressedContent))
                        .withStreamInfo('compressedSize', this.compressedSize)
                        .withStreamInfo('uncompressedSize', this.uncompressedSize)
                        .withStreamInfo('crc32', this.crc32)
                        .withStreamInfo('compression', this.compression)
                    }
                  }),
                    (o.createWorkerFrom = function (e, t, r) {
                      return e
                        .pipe(new s())
                        .pipe(new a('uncompressedSize'))
                        .pipe(t.compressWorker(r))
                        .pipe(new a('compressedSize'))
                        .withStreamInfo('compression', t)
                    }),
                    (t.exports = o)
                },
                {
                  './external': 6,
                  './stream/Crc32Probe': 25,
                  './stream/DataLengthProbe': 26,
                  './stream/DataWorker': 27
                }
              ],
              3: [
                function (e, t, r) {
                  'use strict'
                  var n = e('./stream/GenericWorker')
                  ;(r.STORE = {
                    magic: '\0\0',
                    compressWorker: function () {
                      return new n('STORE compression')
                    },
                    uncompressWorker: function () {
                      return new n('STORE decompression')
                    }
                  }),
                    (r.DEFLATE = e('./flate'))
                },
                { './flate': 7, './stream/GenericWorker': 28 }
              ],
              4: [
                function (e, t, r) {
                  'use strict'
                  var n = e('./utils')
                  var o = (function () {
                    for (var e, t = [], r = 0; r < 256; r++) {
                      e = r
                      for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1
                      t[r] = e
                    }
                    return t
                  })()
                  t.exports = function (e, t) {
                    return void 0 !== e && e.length
                      ? 'string' !== n.getTypeOf(e)
                        ? (function (e, t, r, n) {
                            var i = o,
                              s = n + r
                            e ^= -1
                            for (var a = n; a < s; a++) e = (e >>> 8) ^ i[255 & (e ^ t[a])]
                            return -1 ^ e
                          })(0 | t, e, e.length, 0)
                        : (function (e, t, r, n) {
                            var i = o,
                              s = n + r
                            e ^= -1
                            for (var a = n; a < s; a++)
                              e = (e >>> 8) ^ i[255 & (e ^ t.charCodeAt(a))]
                            return -1 ^ e
                          })(0 | t, e, e.length, 0)
                      : 0
                  }
                },
                { './utils': 32 }
              ],
              5: [
                function (e, t, r) {
                  'use strict'
                  ;(r.base64 = !1),
                    (r.binary = !1),
                    (r.dir = !1),
                    (r.createFolders = !0),
                    (r.date = null),
                    (r.compression = null),
                    (r.compressionOptions = null),
                    (r.comment = null),
                    (r.unixPermissions = null),
                    (r.dosPermissions = null)
                },
                {}
              ],
              6: [
                function (e, t, r) {
                  'use strict'
                  var n = null
                  ;(n = 'undefined' != typeof Promise ? Promise : e('lie')),
                    (t.exports = { Promise: n })
                },
                { lie: 37 }
              ],
              7: [
                function (e, t, r) {
                  'use strict'
                  var n =
                      'undefined' != typeof Uint8Array &&
                      'undefined' != typeof Uint16Array &&
                      'undefined' != typeof Uint32Array,
                    i = e('pako'),
                    s = e('./utils'),
                    a = e('./stream/GenericWorker'),
                    o = n ? 'uint8array' : 'array'
                  function h(e, t) {
                    a.call(this, 'FlateWorker/' + e),
                      (this._pako = null),
                      (this._pakoAction = e),
                      (this._pakoOptions = t),
                      (this.meta = {})
                  }
                  ;(r.magic = '\b\0'),
                    s.inherits(h, a),
                    (h.prototype.processChunk = function (e) {
                      ;(this.meta = e.meta),
                        null === this._pako && this._createPako(),
                        this._pako.push(s.transformTo(o, e.data), !1)
                    }),
                    (h.prototype.flush = function () {
                      a.prototype.flush.call(this),
                        null === this._pako && this._createPako(),
                        this._pako.push([], !0)
                    }),
                    (h.prototype.cleanUp = function () {
                      a.prototype.cleanUp.call(this), (this._pako = null)
                    }),
                    (h.prototype._createPako = function () {
                      this._pako = new i[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1
                      })
                      var t = this
                      this._pako.onData = function (e) {
                        t.push({ data: e, meta: t.meta })
                      }
                    }),
                    (r.compressWorker = function (e) {
                      return new h('Deflate', e)
                    }),
                    (r.uncompressWorker = function () {
                      return new h('Inflate', {})
                    })
                },
                { './stream/GenericWorker': 28, './utils': 32, pako: 38 }
              ],
              8: [
                function (e, t, r) {
                  'use strict'
                  function A(e, t) {
                    var r,
                      n = ''
                    for (r = 0; r < t; r++) (n += String.fromCharCode(255 & e)), (e >>>= 8)
                    return n
                  }
                  function n(e, t, r, n, i, s) {
                    var a,
                      o,
                      h = e.file,
                      u = e.compression,
                      l = s !== O.utf8encode,
                      f = I.transformTo('string', s(h.name)),
                      c = I.transformTo('string', O.utf8encode(h.name)),
                      d = h.comment,
                      p = I.transformTo('string', s(d)),
                      m = I.transformTo('string', O.utf8encode(d)),
                      _ = c.length !== h.name.length,
                      g = m.length !== d.length,
                      b = '',
                      v = '',
                      y = '',
                      w = h.dir,
                      k = h.date,
                      x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 }
                    ;(t && !r) ||
                      ((x.crc32 = e.crc32),
                      (x.compressedSize = e.compressedSize),
                      (x.uncompressedSize = e.uncompressedSize))
                    var S = 0
                    t && (S |= 8), l || (!_ && !g) || (S |= 2048)
                    var z = 0,
                      C = 0
                    w && (z |= 16),
                      'UNIX' === i
                        ? ((C = 798),
                          (z |= (function (e, t) {
                            var r = e
                            return e || (r = t ? 16893 : 33204), (65535 & r) << 16
                          })(h.unixPermissions, w)))
                        : ((C = 20),
                          (z |= (function (e) {
                            return 63 & (e || 0)
                          })(h.dosPermissions))),
                      (a = k.getUTCHours()),
                      (a <<= 6),
                      (a |= k.getUTCMinutes()),
                      (a <<= 5),
                      (a |= k.getUTCSeconds() / 2),
                      (o = k.getUTCFullYear() - 1980),
                      (o <<= 4),
                      (o |= k.getUTCMonth() + 1),
                      (o <<= 5),
                      (o |= k.getUTCDate()),
                      _ && ((v = A(1, 1) + A(B(f), 4) + c), (b += 'up' + A(v.length, 2) + v)),
                      g && ((y = A(1, 1) + A(B(p), 4) + m), (b += 'uc' + A(y.length, 2) + y))
                    var E = ''
                    return (
                      (E += '\n\0'),
                      (E += A(S, 2)),
                      (E += u.magic),
                      (E += A(a, 2)),
                      (E += A(o, 2)),
                      (E += A(x.crc32, 4)),
                      (E += A(x.compressedSize, 4)),
                      (E += A(x.uncompressedSize, 4)),
                      (E += A(f.length, 2)),
                      (E += A(b.length, 2)),
                      {
                        fileRecord: R.LOCAL_FILE_HEADER + E + f + b,
                        dirRecord:
                          R.CENTRAL_FILE_HEADER +
                          A(C, 2) +
                          E +
                          A(p.length, 2) +
                          '\0\0\0\0' +
                          A(z, 4) +
                          A(n, 4) +
                          f +
                          b +
                          p
                      }
                    )
                  }
                  var I = e('../utils'),
                    i = e('../stream/GenericWorker'),
                    O = e('../utf8'),
                    B = e('../crc32'),
                    R = e('../signature')
                  function s(e, t, r, n) {
                    i.call(this, 'ZipFileWorker'),
                      (this.bytesWritten = 0),
                      (this.zipComment = t),
                      (this.zipPlatform = r),
                      (this.encodeFileName = n),
                      (this.streamFiles = e),
                      (this.accumulate = !1),
                      (this.contentBuffer = []),
                      (this.dirRecords = []),
                      (this.currentSourceOffset = 0),
                      (this.entriesCount = 0),
                      (this.currentFile = null),
                      (this._sources = [])
                  }
                  I.inherits(s, i),
                    (s.prototype.push = function (e) {
                      var t = e.meta.percent || 0,
                        r = this.entriesCount,
                        n = this._sources.length
                      this.accumulate
                        ? this.contentBuffer.push(e)
                        : ((this.bytesWritten += e.data.length),
                          i.prototype.push.call(this, {
                            data: e.data,
                            meta: {
                              currentFile: this.currentFile,
                              percent: r ? (t + 100 * (r - n - 1)) / r : 100
                            }
                          }))
                    }),
                    (s.prototype.openedSource = function (e) {
                      ;(this.currentSourceOffset = this.bytesWritten),
                        (this.currentFile = e.file.name)
                      var t = this.streamFiles && !e.file.dir
                      if (t) {
                        var r = n(
                          e,
                          t,
                          !1,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName
                        )
                        this.push({ data: r.fileRecord, meta: { percent: 0 } })
                      } else this.accumulate = !0
                    }),
                    (s.prototype.closedSource = function (e) {
                      this.accumulate = !1
                      var t = this.streamFiles && !e.file.dir,
                        r = n(
                          e,
                          t,
                          !0,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName
                        )
                      if ((this.dirRecords.push(r.dirRecord), t))
                        this.push({
                          data: (function (e) {
                            return (
                              R.DATA_DESCRIPTOR +
                              A(e.crc32, 4) +
                              A(e.compressedSize, 4) +
                              A(e.uncompressedSize, 4)
                            )
                          })(e),
                          meta: { percent: 100 }
                        })
                      else
                        for (
                          this.push({ data: r.fileRecord, meta: { percent: 0 } });
                          this.contentBuffer.length;

                        )
                          this.push(this.contentBuffer.shift())
                      this.currentFile = null
                    }),
                    (s.prototype.flush = function () {
                      for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++)
                        this.push({ data: this.dirRecords[t], meta: { percent: 100 } })
                      var r = this.bytesWritten - e,
                        n = (function (e, t, r, n, i) {
                          var s = I.transformTo('string', i(n))
                          return (
                            R.CENTRAL_DIRECTORY_END +
                            '\0\0\0\0' +
                            A(e, 2) +
                            A(e, 2) +
                            A(t, 4) +
                            A(r, 4) +
                            A(s.length, 2) +
                            s
                          )
                        })(this.dirRecords.length, r, e, this.zipComment, this.encodeFileName)
                      this.push({ data: n, meta: { percent: 100 } })
                    }),
                    (s.prototype.prepareNextSource = function () {
                      ;(this.previous = this._sources.shift()),
                        this.openedSource(this.previous.streamInfo),
                        this.isPaused ? this.previous.pause() : this.previous.resume()
                    }),
                    (s.prototype.registerPrevious = function (e) {
                      this._sources.push(e)
                      var t = this
                      return (
                        e.on('data', function (e) {
                          t.processChunk(e)
                        }),
                        e.on('end', function () {
                          t.closedSource(t.previous.streamInfo),
                            t._sources.length ? t.prepareNextSource() : t.end()
                        }),
                        e.on('error', function (e) {
                          t.error(e)
                        }),
                        this
                      )
                    }),
                    (s.prototype.resume = function () {
                      return (
                        !!i.prototype.resume.call(this) &&
                        (!this.previous && this._sources.length
                          ? (this.prepareNextSource(), !0)
                          : this.previous || this._sources.length || this.generatedError
                            ? void 0
                            : (this.end(), !0))
                      )
                    }),
                    (s.prototype.error = function (e) {
                      var t = this._sources
                      if (!i.prototype.error.call(this, e)) return !1
                      for (var r = 0; r < t.length; r++)
                        try {
                          t[r].error(e)
                        } catch (e) {}
                      return !0
                    }),
                    (s.prototype.lock = function () {
                      i.prototype.lock.call(this)
                      for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock()
                    }),
                    (t.exports = s)
                },
                {
                  '../crc32': 4,
                  '../signature': 23,
                  '../stream/GenericWorker': 28,
                  '../utf8': 31,
                  '../utils': 32
                }
              ],
              9: [
                function (e, t, r) {
                  'use strict'
                  var u = e('../compressions'),
                    n = e('./ZipFileWorker')
                  r.generateWorker = function (e, a, t) {
                    var o = new n(a.streamFiles, t, a.platform, a.encodeFileName),
                      h = 0
                    try {
                      e.forEach(function (e, t) {
                        h++
                        var r = (function (e, t) {
                            var r = e || t,
                              n = u[r]
                            if (!n) throw new Error(r + ' is not a valid compression method !')
                            return n
                          })(t.options.compression, a.compression),
                          n = t.options.compressionOptions || a.compressionOptions || {},
                          i = t.dir,
                          s = t.date
                        t._compressWorker(r, n)
                          .withStreamInfo('file', {
                            name: e,
                            dir: i,
                            date: s,
                            comment: t.comment || '',
                            unixPermissions: t.unixPermissions,
                            dosPermissions: t.dosPermissions
                          })
                          .pipe(o)
                      }),
                        (o.entriesCount = h)
                    } catch (e) {
                      o.error(e)
                    }
                    return o
                  }
                },
                { '../compressions': 3, './ZipFileWorker': 8 }
              ],
              10: [
                function (e, t, r) {
                  'use strict'
                  function n() {
                    if (!(this instanceof n)) return new n()
                    if (arguments.length)
                      throw new Error(
                        'The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.'
                      )
                    ;(this.files = Object.create(null)),
                      (this.comment = null),
                      (this.root = ''),
                      (this.clone = function () {
                        var e = new n()
                        for (var t in this) 'function' != typeof this[t] && (e[t] = this[t])
                        return e
                      })
                  }
                  ;((n.prototype = e('./object')).loadAsync = e('./load')),
                    (n.support = e('./support')),
                    (n.defaults = e('./defaults')),
                    (n.version = '3.10.1'),
                    (n.loadAsync = function (e, t) {
                      return new n().loadAsync(e, t)
                    }),
                    (n.external = e('./external')),
                    (t.exports = n)
                },
                { './defaults': 5, './external': 6, './load': 11, './object': 15, './support': 30 }
              ],
              11: [
                function (e, t, r) {
                  'use strict'
                  var u = e('./utils'),
                    i = e('./external'),
                    n = e('./utf8'),
                    s = e('./zipEntries'),
                    a = e('./stream/Crc32Probe'),
                    l = e('./nodejsUtils')
                  function f(n) {
                    return new i.Promise(function (e, t) {
                      var r = n.decompressed.getContentWorker().pipe(new a())
                      r.on('error', function (e) {
                        t(e)
                      })
                        .on('end', function () {
                          r.streamInfo.crc32 !== n.decompressed.crc32
                            ? t(new Error('Corrupted zip : CRC32 mismatch'))
                            : e()
                        })
                        .resume()
                    })
                  }
                  t.exports = function (e, o) {
                    var h = this
                    return (
                      (o = u.extend(o || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: n.utf8decode
                      })),
                      l.isNode && l.isStream(e)
                        ? i.Promise.reject(
                            new Error("JSZip can't accept a stream when loading a zip file.")
                          )
                        : u
                            .prepareContent(
                              'the loaded zip file',
                              e,
                              !0,
                              o.optimizedBinaryString,
                              o.base64
                            )
                            .then(function (e) {
                              var t = new s(o)
                              return t.load(e), t
                            })
                            .then(function (e) {
                              var t = [i.Promise.resolve(e)],
                                r = e.files
                              if (o.checkCRC32) for (var n = 0; n < r.length; n++) t.push(f(r[n]))
                              return i.Promise.all(t)
                            })
                            .then(function (e) {
                              for (var t = e.shift(), r = t.files, n = 0; n < r.length; n++) {
                                var i = r[n],
                                  s = i.fileNameStr,
                                  a = u.resolve(i.fileNameStr)
                                h.file(a, i.decompressed, {
                                  binary: !0,
                                  optimizedBinaryString: !0,
                                  date: i.date,
                                  dir: i.dir,
                                  comment: i.fileCommentStr.length ? i.fileCommentStr : null,
                                  unixPermissions: i.unixPermissions,
                                  dosPermissions: i.dosPermissions,
                                  createFolders: o.createFolders
                                }),
                                  i.dir || (h.file(a).unsafeOriginalName = s)
                              }
                              return t.zipComment.length && (h.comment = t.zipComment), h
                            })
                    )
                  }
                },
                {
                  './external': 6,
                  './nodejsUtils': 14,
                  './stream/Crc32Probe': 25,
                  './utf8': 31,
                  './utils': 32,
                  './zipEntries': 33
                }
              ],
              12: [
                function (e, t, r) {
                  'use strict'
                  var n = e('../utils'),
                    i = e('../stream/GenericWorker')
                  function s(e, t) {
                    i.call(this, 'Nodejs stream input adapter for ' + e),
                      (this._upstreamEnded = !1),
                      this._bindStream(t)
                  }
                  n.inherits(s, i),
                    (s.prototype._bindStream = function (e) {
                      var t = this
                      ;(this._stream = e).pause(),
                        e
                          .on('data', function (e) {
                            t.push({ data: e, meta: { percent: 0 } })
                          })
                          .on('error', function (e) {
                            t.isPaused ? (this.generatedError = e) : t.error(e)
                          })
                          .on('end', function () {
                            t.isPaused ? (t._upstreamEnded = !0) : t.end()
                          })
                    }),
                    (s.prototype.pause = function () {
                      return !!i.prototype.pause.call(this) && (this._stream.pause(), !0)
                    }),
                    (s.prototype.resume = function () {
                      return (
                        !!i.prototype.resume.call(this) &&
                        (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
                      )
                    }),
                    (t.exports = s)
                },
                { '../stream/GenericWorker': 28, '../utils': 32 }
              ],
              13: [
                function (e, t, r) {
                  'use strict'
                  var i = e('readable-stream').Readable
                  function n(e, t, r) {
                    i.call(this, t), (this._helper = e)
                    var n = this
                    e.on('data', function (e, t) {
                      n.push(e) || n._helper.pause(), r && r(t)
                    })
                      .on('error', function (e) {
                        n.emit('error', e)
                      })
                      .on('end', function () {
                        n.push(null)
                      })
                  }
                  e('../utils').inherits(n, i),
                    (n.prototype._read = function () {
                      this._helper.resume()
                    }),
                    (t.exports = n)
                },
                { '../utils': 32, 'readable-stream': 16 }
              ],
              14: [
                function (e, t, r) {
                  'use strict'
                  t.exports = {
                    isNode: 'undefined' != typeof Buffer,
                    newBufferFrom: function (e, t) {
                      if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t)
                      if ('number' == typeof e)
                        throw new Error('The "data" argument must not be a number')
                      return new Buffer(e, t)
                    },
                    allocBuffer: function (e) {
                      if (Buffer.alloc) return Buffer.alloc(e)
                      var t = new Buffer(e)
                      return t.fill(0), t
                    },
                    isBuffer: function (e) {
                      return Buffer.isBuffer(e)
                    },
                    isStream: function (e) {
                      return (
                        e &&
                        'function' == typeof e.on &&
                        'function' == typeof e.pause &&
                        'function' == typeof e.resume
                      )
                    }
                  }
                },
                {}
              ],
              15: [
                function (e, t, r) {
                  'use strict'
                  function s(e, t, r) {
                    var n,
                      i = u.getTypeOf(t),
                      s = u.extend(r || {}, f)
                    ;(s.date = s.date || new Date()),
                      null !== s.compression && (s.compression = s.compression.toUpperCase()),
                      'string' == typeof s.unixPermissions &&
                        (s.unixPermissions = parseInt(s.unixPermissions, 8)),
                      s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0),
                      s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0),
                      s.dir && (e = g(e)),
                      s.createFolders && (n = _(e)) && b.call(this, n, !0)
                    var a = 'string' === i && !1 === s.binary && !1 === s.base64
                    ;(r && void 0 !== r.binary) || (s.binary = !a),
                      ((t instanceof c && 0 === t.uncompressedSize) ||
                        s.dir ||
                        !t ||
                        0 === t.length) &&
                        ((s.base64 = !1),
                        (s.binary = !0),
                        (t = ''),
                        (s.compression = 'STORE'),
                        (i = 'string'))
                    var o = null
                    o =
                      t instanceof c || t instanceof l
                        ? t
                        : p.isNode && p.isStream(t)
                          ? new m(e, t)
                          : u.prepareContent(e, t, s.binary, s.optimizedBinaryString, s.base64)
                    var h = new d(e, o, s)
                    this.files[e] = h
                  }
                  var i = e('./utf8'),
                    u = e('./utils'),
                    l = e('./stream/GenericWorker'),
                    a = e('./stream/StreamHelper'),
                    f = e('./defaults'),
                    c = e('./compressedObject'),
                    d = e('./zipObject'),
                    o = e('./generate'),
                    p = e('./nodejsUtils'),
                    m = e('./nodejs/NodejsStreamInputAdapter'),
                    _ = function (e) {
                      '/' === e.slice(-1) && (e = e.substring(0, e.length - 1))
                      var t = e.lastIndexOf('/')
                      return 0 < t ? e.substring(0, t) : ''
                    },
                    g = function (e) {
                      return '/' !== e.slice(-1) && (e += '/'), e
                    },
                    b = function (e, t) {
                      return (
                        (t = void 0 !== t ? t : f.createFolders),
                        (e = g(e)),
                        this.files[e] || s.call(this, e, null, { dir: !0, createFolders: t }),
                        this.files[e]
                      )
                    }
                  function h(e) {
                    return '[object RegExp]' === Object.prototype.toString.call(e)
                  }
                  var n = {
                    load: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.'
                      )
                    },
                    forEach: function (e) {
                      var t, r, n
                      for (t in this.files)
                        (n = this.files[t]),
                          (r = t.slice(this.root.length, t.length)) &&
                            t.slice(0, this.root.length) === this.root &&
                            e(r, n)
                    },
                    filter: function (r) {
                      var n = []
                      return (
                        this.forEach(function (e, t) {
                          r(e, t) && n.push(t)
                        }),
                        n
                      )
                    },
                    file: function (e, t, r) {
                      if (1 !== arguments.length)
                        return (e = this.root + e), s.call(this, e, t, r), this
                      if (h(e)) {
                        var n = e
                        return this.filter(function (e, t) {
                          return !t.dir && n.test(e)
                        })
                      }
                      var i = this.files[this.root + e]
                      return i && !i.dir ? i : null
                    },
                    folder: function (r) {
                      if (!r) return this
                      if (h(r))
                        return this.filter(function (e, t) {
                          return t.dir && r.test(e)
                        })
                      var e = this.root + r,
                        t = b.call(this, e),
                        n = this.clone()
                      return (n.root = t.name), n
                    },
                    remove: function (r) {
                      r = this.root + r
                      var e = this.files[r]
                      if (
                        (e || ('/' !== r.slice(-1) && (r += '/'), (e = this.files[r])), e && !e.dir)
                      )
                        delete this.files[r]
                      else
                        for (
                          var t = this.filter(function (e, t) {
                              return t.name.slice(0, r.length) === r
                            }),
                            n = 0;
                          n < t.length;
                          n++
                        )
                          delete this.files[t[n].name]
                      return this
                    },
                    generate: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.'
                      )
                    },
                    generateInternalStream: function (e) {
                      var t,
                        r = {}
                      try {
                        if (
                          (((r = u.extend(e || {}, {
                            streamFiles: !1,
                            compression: 'STORE',
                            compressionOptions: null,
                            type: '',
                            platform: 'DOS',
                            comment: null,
                            mimeType: 'application/zip',
                            encodeFileName: i.utf8encode
                          })).type = r.type.toLowerCase()),
                          (r.compression = r.compression.toUpperCase()),
                          'binarystring' === r.type && (r.type = 'string'),
                          !r.type)
                        )
                          throw new Error('No output type specified.')
                        u.checkSupport(r.type),
                          ('darwin' !== r.platform &&
                            'freebsd' !== r.platform &&
                            'linux' !== r.platform &&
                            'sunos' !== r.platform) ||
                            (r.platform = 'UNIX'),
                          'win32' === r.platform && (r.platform = 'DOS')
                        var n = r.comment || this.comment || ''
                        t = o.generateWorker(this, r, n)
                      } catch (e) {
                        ;(t = new l('error')).error(e)
                      }
                      return new a(t, r.type || 'string', r.mimeType)
                    },
                    generateAsync: function (e, t) {
                      return this.generateInternalStream(e).accumulate(t)
                    },
                    generateNodeStream: function (e, t) {
                      return (
                        (e = e || {}).type || (e.type = 'nodebuffer'),
                        this.generateInternalStream(e).toNodejsStream(t)
                      )
                    }
                  }
                  t.exports = n
                },
                {
                  './compressedObject': 2,
                  './defaults': 5,
                  './generate': 9,
                  './nodejs/NodejsStreamInputAdapter': 12,
                  './nodejsUtils': 14,
                  './stream/GenericWorker': 28,
                  './stream/StreamHelper': 29,
                  './utf8': 31,
                  './utils': 32,
                  './zipObject': 35
                }
              ],
              16: [
                function (e, t, r) {
                  'use strict'
                  t.exports = e('stream')
                },
                { stream: void 0 }
              ],
              17: [
                function (e, t, r) {
                  'use strict'
                  var n = e('./DataReader')
                  function i(e) {
                    n.call(this, e)
                    for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t]
                  }
                  e('../utils').inherits(i, n),
                    (i.prototype.byteAt = function (e) {
                      return this.data[this.zero + e]
                    }),
                    (i.prototype.lastIndexOfSignature = function (e) {
                      for (
                        var t = e.charCodeAt(0),
                          r = e.charCodeAt(1),
                          n = e.charCodeAt(2),
                          i = e.charCodeAt(3),
                          s = this.length - 4;
                        0 <= s;
                        --s
                      )
                        if (
                          this.data[s] === t &&
                          this.data[s + 1] === r &&
                          this.data[s + 2] === n &&
                          this.data[s + 3] === i
                        )
                          return s - this.zero
                      return -1
                    }),
                    (i.prototype.readAndCheckSignature = function (e) {
                      var t = e.charCodeAt(0),
                        r = e.charCodeAt(1),
                        n = e.charCodeAt(2),
                        i = e.charCodeAt(3),
                        s = this.readData(4)
                      return t === s[0] && r === s[1] && n === s[2] && i === s[3]
                    }),
                    (i.prototype.readData = function (e) {
                      if ((this.checkOffset(e), 0 === e)) return []
                      var t = this.data.slice(this.zero + this.index, this.zero + this.index + e)
                      return (this.index += e), t
                    }),
                    (t.exports = i)
                },
                { '../utils': 32, './DataReader': 18 }
              ],
              18: [
                function (e, t, r) {
                  'use strict'
                  var n = e('../utils')
                  function i(e) {
                    ;(this.data = e), (this.length = e.length), (this.index = 0), (this.zero = 0)
                  }
                  ;(i.prototype = {
                    checkOffset: function (e) {
                      this.checkIndex(this.index + e)
                    },
                    checkIndex: function (e) {
                      if (this.length < this.zero + e || e < 0)
                        throw new Error(
                          'End of data reached (data length = ' +
                            this.length +
                            ', asked index = ' +
                            e +
                            '). Corrupted zip ?'
                        )
                    },
                    setIndex: function (e) {
                      this.checkIndex(e), (this.index = e)
                    },
                    skip: function (e) {
                      this.setIndex(this.index + e)
                    },
                    byteAt: function () {},
                    readInt: function (e) {
                      var t,
                        r = 0
                      for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--)
                        r = (r << 8) + this.byteAt(t)
                      return (this.index += e), r
                    },
                    readString: function (e) {
                      return n.transformTo('string', this.readData(e))
                    },
                    readData: function () {},
                    lastIndexOfSignature: function () {},
                    readAndCheckSignature: function () {},
                    readDate: function () {
                      var e = this.readInt(4)
                      return new Date(
                        Date.UTC(
                          1980 + ((e >> 25) & 127),
                          ((e >> 21) & 15) - 1,
                          (e >> 16) & 31,
                          (e >> 11) & 31,
                          (e >> 5) & 63,
                          (31 & e) << 1
                        )
                      )
                    }
                  }),
                    (t.exports = i)
                },
                { '../utils': 32 }
              ],
              19: [
                function (e, t, r) {
                  'use strict'
                  var n = e('./Uint8ArrayReader')
                  function i(e) {
                    n.call(this, e)
                  }
                  e('../utils').inherits(i, n),
                    (i.prototype.readData = function (e) {
                      this.checkOffset(e)
                      var t = this.data.slice(this.zero + this.index, this.zero + this.index + e)
                      return (this.index += e), t
                    }),
                    (t.exports = i)
                },
                { '../utils': 32, './Uint8ArrayReader': 21 }
              ],
              20: [
                function (e, t, r) {
                  'use strict'
                  var n = e('./DataReader')
                  function i(e) {
                    n.call(this, e)
                  }
                  e('../utils').inherits(i, n),
                    (i.prototype.byteAt = function (e) {
                      return this.data.charCodeAt(this.zero + e)
                    }),
                    (i.prototype.lastIndexOfSignature = function (e) {
                      return this.data.lastIndexOf(e) - this.zero
                    }),
                    (i.prototype.readAndCheckSignature = function (e) {
                      return e === this.readData(4)
                    }),
                    (i.prototype.readData = function (e) {
                      this.checkOffset(e)
                      var t = this.data.slice(this.zero + this.index, this.zero + this.index + e)
                      return (this.index += e), t
                    }),
                    (t.exports = i)
                },
                { '../utils': 32, './DataReader': 18 }
              ],
              21: [
                function (e, t, r) {
                  'use strict'
                  var n = e('./ArrayReader')
                  function i(e) {
                    n.call(this, e)
                  }
                  e('../utils').inherits(i, n),
                    (i.prototype.readData = function (e) {
                      if ((this.checkOffset(e), 0 === e)) return new Uint8Array(0)
                      var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e)
                      return (this.index += e), t
                    }),
                    (t.exports = i)
                },
                { '../utils': 32, './ArrayReader': 17 }
              ],
              22: [
                function (e, t, r) {
                  'use strict'
                  var n = e('../utils'),
                    i = e('../support'),
                    s = e('./ArrayReader'),
                    a = e('./StringReader'),
                    o = e('./NodeBufferReader'),
                    h = e('./Uint8ArrayReader')
                  t.exports = function (e) {
                    var t = n.getTypeOf(e)
                    return (
                      n.checkSupport(t),
                      'string' !== t || i.uint8array
                        ? 'nodebuffer' === t
                          ? new o(e)
                          : i.uint8array
                            ? new h(n.transformTo('uint8array', e))
                            : new s(n.transformTo('array', e))
                        : new a(e)
                    )
                  }
                },
                {
                  '../support': 30,
                  '../utils': 32,
                  './ArrayReader': 17,
                  './NodeBufferReader': 19,
                  './StringReader': 20,
                  './Uint8ArrayReader': 21
                }
              ],
              23: [
                function (e, t, r) {
                  'use strict'
                  ;(r.LOCAL_FILE_HEADER = 'PK'),
                    (r.CENTRAL_FILE_HEADER = 'PK'),
                    (r.CENTRAL_DIRECTORY_END = 'PK'),
                    (r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = 'PK'),
                    (r.ZIP64_CENTRAL_DIRECTORY_END = 'PK'),
                    (r.DATA_DESCRIPTOR = 'PK\b')
                },
                {}
              ],
              24: [
                function (e, t, r) {
                  'use strict'
                  var n = e('./GenericWorker'),
                    i = e('../utils')
                  function s(e) {
                    n.call(this, 'ConvertWorker to ' + e), (this.destType = e)
                  }
                  i.inherits(s, n),
                    (s.prototype.processChunk = function (e) {
                      this.push({ data: i.transformTo(this.destType, e.data), meta: e.meta })
                    }),
                    (t.exports = s)
                },
                { '../utils': 32, './GenericWorker': 28 }
              ],
              25: [
                function (e, t, r) {
                  'use strict'
                  var n = e('./GenericWorker'),
                    i = e('../crc32')
                  function s() {
                    n.call(this, 'Crc32Probe'), this.withStreamInfo('crc32', 0)
                  }
                  e('../utils').inherits(s, n),
                    (s.prototype.processChunk = function (e) {
                      ;(this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0)), this.push(e)
                    }),
                    (t.exports = s)
                },
                { '../crc32': 4, '../utils': 32, './GenericWorker': 28 }
              ],
              26: [
                function (e, t, r) {
                  'use strict'
                  var n = e('../utils'),
                    i = e('./GenericWorker')
                  function s(e) {
                    i.call(this, 'DataLengthProbe for ' + e),
                      (this.propName = e),
                      this.withStreamInfo(e, 0)
                  }
                  n.inherits(s, i),
                    (s.prototype.processChunk = function (e) {
                      if (e) {
                        var t = this.streamInfo[this.propName] || 0
                        this.streamInfo[this.propName] = t + e.data.length
                      }
                      i.prototype.processChunk.call(this, e)
                    }),
                    (t.exports = s)
                },
                { '../utils': 32, './GenericWorker': 28 }
              ],
              27: [
                function (e, t, r) {
                  'use strict'
                  var n = e('../utils'),
                    i = e('./GenericWorker')
                  function s(e) {
                    i.call(this, 'DataWorker')
                    var t = this
                    ;(this.dataIsReady = !1),
                      (this.index = 0),
                      (this.max = 0),
                      (this.data = null),
                      (this.type = ''),
                      (this._tickScheduled = !1),
                      e.then(
                        function (e) {
                          ;(t.dataIsReady = !0),
                            (t.data = e),
                            (t.max = (e && e.length) || 0),
                            (t.type = n.getTypeOf(e)),
                            t.isPaused || t._tickAndRepeat()
                        },
                        function (e) {
                          t.error(e)
                        }
                      )
                  }
                  n.inherits(s, i),
                    (s.prototype.cleanUp = function () {
                      i.prototype.cleanUp.call(this), (this.data = null)
                    }),
                    (s.prototype.resume = function () {
                      return (
                        !!i.prototype.resume.call(this) &&
                        (!this._tickScheduled &&
                          this.dataIsReady &&
                          ((this._tickScheduled = !0), n.delay(this._tickAndRepeat, [], this)),
                        !0)
                      )
                    }),
                    (s.prototype._tickAndRepeat = function () {
                      ;(this._tickScheduled = !1),
                        this.isPaused ||
                          this.isFinished ||
                          (this._tick(),
                          this.isFinished ||
                            (n.delay(this._tickAndRepeat, [], this), (this._tickScheduled = !0)))
                    }),
                    (s.prototype._tick = function () {
                      if (this.isPaused || this.isFinished) return !1
                      var e = null,
                        t = Math.min(this.max, this.index + 16384)
                      if (this.index >= this.max) return this.end()
                      switch (this.type) {
                        case 'string':
                          e = this.data.substring(this.index, t)
                          break
                        case 'uint8array':
                          e = this.data.subarray(this.index, t)
                          break
                        case 'array':
                        case 'nodebuffer':
                          e = this.data.slice(this.index, t)
                      }
                      return (
                        (this.index = t),
                        this.push({
                          data: e,
                          meta: { percent: this.max ? (this.index / this.max) * 100 : 0 }
                        })
                      )
                    }),
                    (t.exports = s)
                },
                { '../utils': 32, './GenericWorker': 28 }
              ],
              28: [
                function (e, t, r) {
                  'use strict'
                  function n(e) {
                    ;(this.name = e || 'default'),
                      (this.streamInfo = {}),
                      (this.generatedError = null),
                      (this.extraStreamInfo = {}),
                      (this.isPaused = !0),
                      (this.isFinished = !1),
                      (this.isLocked = !1),
                      (this._listeners = { data: [], end: [], error: [] }),
                      (this.previous = null)
                  }
                  ;(n.prototype = {
                    push: function (e) {
                      this.emit('data', e)
                    },
                    end: function () {
                      if (this.isFinished) return !1
                      this.flush()
                      try {
                        this.emit('end'), this.cleanUp(), (this.isFinished = !0)
                      } catch (e) {
                        this.emit('error', e)
                      }
                      return !0
                    },
                    error: function (e) {
                      return (
                        !this.isFinished &&
                        (this.isPaused
                          ? (this.generatedError = e)
                          : ((this.isFinished = !0),
                            this.emit('error', e),
                            this.previous && this.previous.error(e),
                            this.cleanUp()),
                        !0)
                      )
                    },
                    on: function (e, t) {
                      return this._listeners[e].push(t), this
                    },
                    cleanUp: function () {
                      ;(this.streamInfo = this.generatedError = this.extraStreamInfo = null),
                        (this._listeners = [])
                    },
                    emit: function (e, t) {
                      if (this._listeners[e])
                        for (var r = 0; r < this._listeners[e].length; r++)
                          this._listeners[e][r].call(this, t)
                    },
                    pipe: function (e) {
                      return e.registerPrevious(this)
                    },
                    registerPrevious: function (e) {
                      if (this.isLocked)
                        throw new Error("The stream '" + this + "' has already been used.")
                      ;(this.streamInfo = e.streamInfo), this.mergeStreamInfo(), (this.previous = e)
                      var t = this
                      return (
                        e.on('data', function (e) {
                          t.processChunk(e)
                        }),
                        e.on('end', function () {
                          t.end()
                        }),
                        e.on('error', function (e) {
                          t.error(e)
                        }),
                        this
                      )
                    },
                    pause: function () {
                      return (
                        !this.isPaused &&
                        !this.isFinished &&
                        ((this.isPaused = !0), this.previous && this.previous.pause(), !0)
                      )
                    },
                    resume: function () {
                      if (!this.isPaused || this.isFinished) return !1
                      var e = (this.isPaused = !1)
                      return (
                        this.generatedError && (this.error(this.generatedError), (e = !0)),
                        this.previous && this.previous.resume(),
                        !e
                      )
                    },
                    flush: function () {},
                    processChunk: function (e) {
                      this.push(e)
                    },
                    withStreamInfo: function (e, t) {
                      return (this.extraStreamInfo[e] = t), this.mergeStreamInfo(), this
                    },
                    mergeStreamInfo: function () {
                      for (var e in this.extraStreamInfo)
                        Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) &&
                          (this.streamInfo[e] = this.extraStreamInfo[e])
                    },
                    lock: function () {
                      if (this.isLocked)
                        throw new Error("The stream '" + this + "' has already been used.")
                      ;(this.isLocked = !0), this.previous && this.previous.lock()
                    },
                    toString: function () {
                      var e = 'Worker ' + this.name
                      return this.previous ? this.previous + ' -> ' + e : e
                    }
                  }),
                    (t.exports = n)
                },
                {}
              ],
              29: [
                function (e, t, r) {
                  'use strict'
                  var h = e('../utils'),
                    i = e('./ConvertWorker'),
                    s = e('./GenericWorker'),
                    u = e('../base64'),
                    n = e('../support'),
                    a = e('../external'),
                    o = null
                  if (n.nodestream)
                    try {
                      o = e('../nodejs/NodejsStreamOutputAdapter')
                    } catch (e) {}
                  function l(e, o) {
                    return new a.Promise(function (t, r) {
                      var n = [],
                        i = e._internalType,
                        s = e._outputType,
                        a = e._mimeType
                      e.on('data', function (e, t) {
                        n.push(e), o && o(t)
                      })
                        .on('error', function (e) {
                          ;(n = []), r(e)
                        })
                        .on('end', function () {
                          try {
                            var e = (function (e, t, r) {
                              switch (e) {
                                case 'blob':
                                  return h.newBlob(h.transformTo('arraybuffer', t), r)
                                case 'base64':
                                  return u.encode(t)
                                default:
                                  return h.transformTo(e, t)
                              }
                            })(
                              s,
                              (function (e, t) {
                                var r,
                                  n = 0,
                                  i = null,
                                  s = 0
                                for (r = 0; r < t.length; r++) s += t[r].length
                                switch (e) {
                                  case 'string':
                                    return t.join('')
                                  case 'array':
                                    return Array.prototype.concat.apply([], t)
                                  case 'uint8array':
                                    for (i = new Uint8Array(s), r = 0; r < t.length; r++)
                                      i.set(t[r], n), (n += t[r].length)
                                    return i
                                  case 'nodebuffer':
                                    return Buffer.concat(t)
                                  default:
                                    throw new Error("concat : unsupported type '" + e + "'")
                                }
                              })(i, n),
                              a
                            )
                            t(e)
                          } catch (e) {
                            r(e)
                          }
                          n = []
                        })
                        .resume()
                    })
                  }
                  function f(e, t, r) {
                    var n = t
                    switch (t) {
                      case 'blob':
                      case 'arraybuffer':
                        n = 'uint8array'
                        break
                      case 'base64':
                        n = 'string'
                    }
                    try {
                      ;(this._internalType = n),
                        (this._outputType = t),
                        (this._mimeType = r),
                        h.checkSupport(n),
                        (this._worker = e.pipe(new i(n))),
                        e.lock()
                    } catch (e) {
                      ;(this._worker = new s('error')), this._worker.error(e)
                    }
                  }
                  ;(f.prototype = {
                    accumulate: function (e) {
                      return l(this, e)
                    },
                    on: function (e, t) {
                      var r = this
                      return (
                        'data' === e
                          ? this._worker.on(e, function (e) {
                              t.call(r, e.data, e.meta)
                            })
                          : this._worker.on(e, function () {
                              h.delay(t, arguments, r)
                            }),
                        this
                      )
                    },
                    resume: function () {
                      return h.delay(this._worker.resume, [], this._worker), this
                    },
                    pause: function () {
                      return this._worker.pause(), this
                    },
                    toNodejsStream: function (e) {
                      if ((h.checkSupport('nodestream'), 'nodebuffer' !== this._outputType))
                        throw new Error(this._outputType + ' is not supported by this method')
                      return new o(this, { objectMode: 'nodebuffer' !== this._outputType }, e)
                    }
                  }),
                    (t.exports = f)
                },
                {
                  '../base64': 1,
                  '../external': 6,
                  '../nodejs/NodejsStreamOutputAdapter': 13,
                  '../support': 30,
                  '../utils': 32,
                  './ConvertWorker': 24,
                  './GenericWorker': 28
                }
              ],
              30: [
                function (e, t, r) {
                  'use strict'
                  if (
                    ((r.base64 = !0),
                    (r.array = !0),
                    (r.string = !0),
                    (r.arraybuffer =
                      'undefined' != typeof ArrayBuffer && 'undefined' != typeof Uint8Array),
                    (r.nodebuffer = 'undefined' != typeof Buffer),
                    (r.uint8array = 'undefined' != typeof Uint8Array),
                    'undefined' == typeof ArrayBuffer)
                  )
                    r.blob = !1
                  else {
                    var n = new ArrayBuffer(0)
                    try {
                      r.blob = 0 === new Blob([n], { type: 'application/zip' }).size
                    } catch (e) {
                      try {
                        var i = new (self.BlobBuilder ||
                          self.WebKitBlobBuilder ||
                          self.MozBlobBuilder ||
                          self.MSBlobBuilder)()
                        i.append(n), (r.blob = 0 === i.getBlob('application/zip').size)
                      } catch (e) {
                        r.blob = !1
                      }
                    }
                  }
                  try {
                    r.nodestream = !!e('readable-stream').Readable
                  } catch (e) {
                    r.nodestream = !1
                  }
                },
                { 'readable-stream': 16 }
              ],
              31: [
                function (e, t, s) {
                  'use strict'
                  for (
                    var o = e('./utils'),
                      h = e('./support'),
                      r = e('./nodejsUtils'),
                      n = e('./stream/GenericWorker'),
                      u = new Array(256),
                      i = 0;
                    i < 256;
                    i++
                  )
                    u[i] =
                      252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1
                  u[254] = u[254] = 1
                  function a() {
                    n.call(this, 'utf-8 decode'), (this.leftOver = null)
                  }
                  function l() {
                    n.call(this, 'utf-8 encode')
                  }
                  ;(s.utf8encode = function (e) {
                    return h.nodebuffer
                      ? r.newBufferFrom(e, 'utf-8')
                      : (function (e) {
                          var t,
                            r,
                            n,
                            i,
                            s,
                            a = e.length,
                            o = 0
                          for (i = 0; i < a; i++)
                            55296 == (64512 & (r = e.charCodeAt(i))) &&
                              i + 1 < a &&
                              56320 == (64512 & (n = e.charCodeAt(i + 1))) &&
                              ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), i++),
                              (o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4)
                          for (
                            t = h.uint8array ? new Uint8Array(o) : new Array(o), i = s = 0;
                            s < o;
                            i++
                          )
                            55296 == (64512 & (r = e.charCodeAt(i))) &&
                              i + 1 < a &&
                              56320 == (64512 & (n = e.charCodeAt(i + 1))) &&
                              ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), i++),
                              r < 128
                                ? (t[s++] = r)
                                : (r < 2048
                                    ? (t[s++] = 192 | (r >>> 6))
                                    : (r < 65536
                                        ? (t[s++] = 224 | (r >>> 12))
                                        : ((t[s++] = 240 | (r >>> 18)),
                                          (t[s++] = 128 | ((r >>> 12) & 63))),
                                      (t[s++] = 128 | ((r >>> 6) & 63))),
                                  (t[s++] = 128 | (63 & r)))
                          return t
                        })(e)
                  }),
                    (s.utf8decode = function (e) {
                      return h.nodebuffer
                        ? o.transformTo('nodebuffer', e).toString('utf-8')
                        : (function (e) {
                            var t,
                              r,
                              n,
                              i,
                              s = e.length,
                              a = new Array(2 * s)
                            for (t = r = 0; t < s; )
                              if ((n = e[t++]) < 128) a[r++] = n
                              else if (4 < (i = u[n])) (a[r++] = 65533), (t += i - 1)
                              else {
                                for (n &= 2 === i ? 31 : 3 === i ? 15 : 7; 1 < i && t < s; )
                                  (n = (n << 6) | (63 & e[t++])), i--
                                1 < i
                                  ? (a[r++] = 65533)
                                  : n < 65536
                                    ? (a[r++] = n)
                                    : ((n -= 65536),
                                      (a[r++] = 55296 | ((n >> 10) & 1023)),
                                      (a[r++] = 56320 | (1023 & n)))
                              }
                            return (
                              a.length !== r &&
                                (a.subarray ? (a = a.subarray(0, r)) : (a.length = r)),
                              o.applyFromCharCode(a)
                            )
                          })((e = o.transformTo(h.uint8array ? 'uint8array' : 'array', e)))
                    }),
                    o.inherits(a, n),
                    (a.prototype.processChunk = function (e) {
                      var t = o.transformTo(h.uint8array ? 'uint8array' : 'array', e.data)
                      if (this.leftOver && this.leftOver.length) {
                        if (h.uint8array) {
                          var r = t
                          ;(t = new Uint8Array(r.length + this.leftOver.length)).set(
                            this.leftOver,
                            0
                          ),
                            t.set(r, this.leftOver.length)
                        } else t = this.leftOver.concat(t)
                        this.leftOver = null
                      }
                      var n = (function (e, t) {
                          var r
                          for (
                            (t = t || e.length) > e.length && (t = e.length), r = t - 1;
                            0 <= r && 128 == (192 & e[r]);

                          )
                            r--
                          return r < 0 ? t : 0 === r ? t : r + u[e[r]] > t ? r : t
                        })(t),
                        i = t
                      n !== t.length &&
                        (h.uint8array
                          ? ((i = t.subarray(0, n)), (this.leftOver = t.subarray(n, t.length)))
                          : ((i = t.slice(0, n)), (this.leftOver = t.slice(n, t.length)))),
                        this.push({ data: s.utf8decode(i), meta: e.meta })
                    }),
                    (a.prototype.flush = function () {
                      this.leftOver &&
                        this.leftOver.length &&
                        (this.push({ data: s.utf8decode(this.leftOver), meta: {} }),
                        (this.leftOver = null))
                    }),
                    (s.Utf8DecodeWorker = a),
                    o.inherits(l, n),
                    (l.prototype.processChunk = function (e) {
                      this.push({ data: s.utf8encode(e.data), meta: e.meta })
                    }),
                    (s.Utf8EncodeWorker = l)
                },
                {
                  './nodejsUtils': 14,
                  './stream/GenericWorker': 28,
                  './support': 30,
                  './utils': 32
                }
              ],
              32: [
                function (e, t, a) {
                  'use strict'
                  var o = e('./support'),
                    h = e('./base64'),
                    r = e('./nodejsUtils'),
                    u = e('./external')
                  function n(e) {
                    return e
                  }
                  function l(e, t) {
                    for (var r = 0; r < e.length; ++r) t[r] = 255 & e.charCodeAt(r)
                    return t
                  }
                  e('setimmediate'),
                    (a.newBlob = function (t, r) {
                      a.checkSupport('blob')
                      try {
                        return new Blob([t], { type: r })
                      } catch (e) {
                        try {
                          var n = new (self.BlobBuilder ||
                            self.WebKitBlobBuilder ||
                            self.MozBlobBuilder ||
                            self.MSBlobBuilder)()
                          return n.append(t), n.getBlob(r)
                        } catch (e) {
                          throw new Error("Bug : can't construct the Blob.")
                        }
                      }
                    })
                  var i = {
                    stringifyByChunk: function (e, t, r) {
                      var n = [],
                        i = 0,
                        s = e.length
                      if (s <= r) return String.fromCharCode.apply(null, e)
                      for (; i < s; )
                        'array' === t || 'nodebuffer' === t
                          ? n.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + r, s))))
                          : n.push(
                              String.fromCharCode.apply(null, e.subarray(i, Math.min(i + r, s)))
                            ),
                          (i += r)
                      return n.join('')
                    },
                    stringifyByChar: function (e) {
                      for (var t = '', r = 0; r < e.length; r++) t += String.fromCharCode(e[r])
                      return t
                    },
                    applyCanBeUsed: {
                      uint8array: (function () {
                        try {
                          return (
                            o.uint8array &&
                            1 === String.fromCharCode.apply(null, new Uint8Array(1)).length
                          )
                        } catch (e) {
                          return !1
                        }
                      })(),
                      nodebuffer: (function () {
                        try {
                          return (
                            o.nodebuffer &&
                            1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length
                          )
                        } catch (e) {
                          return !1
                        }
                      })()
                    }
                  }
                  function s(e) {
                    var t = 65536,
                      r = a.getTypeOf(e),
                      n = !0
                    if (
                      ('uint8array' === r
                        ? (n = i.applyCanBeUsed.uint8array)
                        : 'nodebuffer' === r && (n = i.applyCanBeUsed.nodebuffer),
                      n)
                    )
                      for (; 1 < t; )
                        try {
                          return i.stringifyByChunk(e, r, t)
                        } catch (e) {
                          t = Math.floor(t / 2)
                        }
                    return i.stringifyByChar(e)
                  }
                  function f(e, t) {
                    for (var r = 0; r < e.length; r++) t[r] = e[r]
                    return t
                  }
                  a.applyFromCharCode = s
                  var c = {}
                  ;(c.string = {
                    string: n,
                    array: function (e) {
                      return l(e, new Array(e.length))
                    },
                    arraybuffer: function (e) {
                      return c.string.uint8array(e).buffer
                    },
                    uint8array: function (e) {
                      return l(e, new Uint8Array(e.length))
                    },
                    nodebuffer: function (e) {
                      return l(e, r.allocBuffer(e.length))
                    }
                  }),
                    (c.array = {
                      string: s,
                      array: n,
                      arraybuffer: function (e) {
                        return new Uint8Array(e).buffer
                      },
                      uint8array: function (e) {
                        return new Uint8Array(e)
                      },
                      nodebuffer: function (e) {
                        return r.newBufferFrom(e)
                      }
                    }),
                    (c.arraybuffer = {
                      string: function (e) {
                        return s(new Uint8Array(e))
                      },
                      array: function (e) {
                        return f(new Uint8Array(e), new Array(e.byteLength))
                      },
                      arraybuffer: n,
                      uint8array: function (e) {
                        return new Uint8Array(e)
                      },
                      nodebuffer: function (e) {
                        return r.newBufferFrom(new Uint8Array(e))
                      }
                    }),
                    (c.uint8array = {
                      string: s,
                      array: function (e) {
                        return f(e, new Array(e.length))
                      },
                      arraybuffer: function (e) {
                        return e.buffer
                      },
                      uint8array: n,
                      nodebuffer: function (e) {
                        return r.newBufferFrom(e)
                      }
                    }),
                    (c.nodebuffer = {
                      string: s,
                      array: function (e) {
                        return f(e, new Array(e.length))
                      },
                      arraybuffer: function (e) {
                        return c.nodebuffer.uint8array(e).buffer
                      },
                      uint8array: function (e) {
                        return f(e, new Uint8Array(e.length))
                      },
                      nodebuffer: n
                    }),
                    (a.transformTo = function (e, t) {
                      if (((t = t || ''), !e)) return t
                      a.checkSupport(e)
                      var r = a.getTypeOf(t)
                      return c[r][e](t)
                    }),
                    (a.resolve = function (e) {
                      for (var t = e.split('/'), r = [], n = 0; n < t.length; n++) {
                        var i = t[n]
                        '.' === i ||
                          ('' === i && 0 !== n && n !== t.length - 1) ||
                          ('..' === i ? r.pop() : r.push(i))
                      }
                      return r.join('/')
                    }),
                    (a.getTypeOf = function (e) {
                      return 'string' == typeof e
                        ? 'string'
                        : '[object Array]' === Object.prototype.toString.call(e)
                          ? 'array'
                          : o.nodebuffer && r.isBuffer(e)
                            ? 'nodebuffer'
                            : o.uint8array && e instanceof Uint8Array
                              ? 'uint8array'
                              : o.arraybuffer && e instanceof ArrayBuffer
                                ? 'arraybuffer'
                                : void 0
                    }),
                    (a.checkSupport = function (e) {
                      if (!o[e.toLowerCase()])
                        throw new Error(e + ' is not supported by this platform')
                    }),
                    (a.MAX_VALUE_16BITS = 65535),
                    (a.MAX_VALUE_32BITS = -1),
                    (a.pretty = function (e) {
                      var t,
                        r,
                        n = ''
                      for (r = 0; r < (e || '').length; r++)
                        n +=
                          '\\x' +
                          ((t = e.charCodeAt(r)) < 16 ? '0' : '') +
                          t.toString(16).toUpperCase()
                      return n
                    }),
                    (a.delay = function (e, t, r) {
                      setImmediate(function () {
                        e.apply(r || null, t || [])
                      })
                    }),
                    (a.inherits = function (e, t) {
                      function r() {}
                      ;(r.prototype = t.prototype), (e.prototype = new r())
                    }),
                    (a.extend = function () {
                      var e,
                        t,
                        r = {}
                      for (e = 0; e < arguments.length; e++)
                        for (t in arguments[e])
                          Object.prototype.hasOwnProperty.call(arguments[e], t) &&
                            void 0 === r[t] &&
                            (r[t] = arguments[e][t])
                      return r
                    }),
                    (a.prepareContent = function (r, e, n, i, s) {
                      return u.Promise.resolve(e)
                        .then(function (n) {
                          return o.blob &&
                            (n instanceof Blob ||
                              -1 !==
                                ['[object File]', '[object Blob]'].indexOf(
                                  Object.prototype.toString.call(n)
                                )) &&
                            'undefined' != typeof FileReader
                            ? new u.Promise(function (t, r) {
                                var e = new FileReader()
                                ;(e.onload = function (e) {
                                  t(e.target.result)
                                }),
                                  (e.onerror = function (e) {
                                    r(e.target.error)
                                  }),
                                  e.readAsArrayBuffer(n)
                              })
                            : n
                        })
                        .then(function (e) {
                          var t = a.getTypeOf(e)
                          return t
                            ? ('arraybuffer' === t
                                ? (e = a.transformTo('uint8array', e))
                                : 'string' === t &&
                                  (s
                                    ? (e = h.decode(e))
                                    : n &&
                                      !0 !== i &&
                                      (e = (function (e) {
                                        return l(
                                          e,
                                          o.uint8array
                                            ? new Uint8Array(e.length)
                                            : new Array(e.length)
                                        )
                                      })(e))),
                              e)
                            : u.Promise.reject(
                                new Error(
                                  "Can't read the data of '" +
                                    r +
                                    "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"
                                )
                              )
                        })
                    })
                },
                {
                  './base64': 1,
                  './external': 6,
                  './nodejsUtils': 14,
                  './support': 30,
                  setimmediate: 54
                }
              ],
              33: [
                function (e, t, r) {
                  'use strict'
                  var n = e('./reader/readerFor'),
                    i = e('./utils'),
                    s = e('./signature'),
                    a = e('./zipEntry'),
                    o = e('./support')
                  function h(e) {
                    ;(this.files = []), (this.loadOptions = e)
                  }
                  ;(h.prototype = {
                    checkSignature: function (e) {
                      if (!this.reader.readAndCheckSignature(e)) {
                        this.reader.index -= 4
                        var t = this.reader.readString(4)
                        throw new Error(
                          'Corrupted zip or bug: unexpected signature (' +
                            i.pretty(t) +
                            ', expected ' +
                            i.pretty(e) +
                            ')'
                        )
                      }
                    },
                    isSignature: function (e, t) {
                      var r = this.reader.index
                      this.reader.setIndex(e)
                      var n = this.reader.readString(4) === t
                      return this.reader.setIndex(r), n
                    },
                    readBlockEndOfCentral: function () {
                      ;(this.diskNumber = this.reader.readInt(2)),
                        (this.diskWithCentralDirStart = this.reader.readInt(2)),
                        (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                        (this.centralDirRecords = this.reader.readInt(2)),
                        (this.centralDirSize = this.reader.readInt(4)),
                        (this.centralDirOffset = this.reader.readInt(4)),
                        (this.zipCommentLength = this.reader.readInt(2))
                      var e = this.reader.readData(this.zipCommentLength),
                        t = o.uint8array ? 'uint8array' : 'array',
                        r = i.transformTo(t, e)
                      this.zipComment = this.loadOptions.decodeFileName(r)
                    },
                    readBlockZip64EndOfCentral: function () {
                      ;(this.zip64EndOfCentralSize = this.reader.readInt(8)),
                        this.reader.skip(4),
                        (this.diskNumber = this.reader.readInt(4)),
                        (this.diskWithCentralDirStart = this.reader.readInt(4)),
                        (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                        (this.centralDirRecords = this.reader.readInt(8)),
                        (this.centralDirSize = this.reader.readInt(8)),
                        (this.centralDirOffset = this.reader.readInt(8)),
                        (this.zip64ExtensibleData = {})
                      for (var e, t, r, n = this.zip64EndOfCentralSize - 44; 0 < n; )
                        (e = this.reader.readInt(2)),
                          (t = this.reader.readInt(4)),
                          (r = this.reader.readData(t)),
                          (this.zip64ExtensibleData[e] = { id: e, length: t, value: r })
                    },
                    readBlockZip64EndOfCentralLocator: function () {
                      if (
                        ((this.diskWithZip64CentralDirStart = this.reader.readInt(4)),
                        (this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8)),
                        (this.disksCount = this.reader.readInt(4)),
                        1 < this.disksCount)
                      )
                        throw new Error('Multi-volumes zip are not supported')
                    },
                    readLocalFiles: function () {
                      var e, t
                      for (e = 0; e < this.files.length; e++)
                        (t = this.files[e]),
                          this.reader.setIndex(t.localHeaderOffset),
                          this.checkSignature(s.LOCAL_FILE_HEADER),
                          t.readLocalPart(this.reader),
                          t.handleUTF8(),
                          t.processAttributes()
                    },
                    readCentralDir: function () {
                      var e
                      for (
                        this.reader.setIndex(this.centralDirOffset);
                        this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);

                      )
                        (e = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(
                          this.reader
                        ),
                          this.files.push(e)
                      if (
                        this.centralDirRecords !== this.files.length &&
                        0 !== this.centralDirRecords &&
                        0 === this.files.length
                      )
                        throw new Error(
                          'Corrupted zip or bug: expected ' +
                            this.centralDirRecords +
                            ' records in central dir, got ' +
                            this.files.length
                        )
                    },
                    readEndOfCentral: function () {
                      var e = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END)
                      if (e < 0)
                        throw !this.isSignature(0, s.LOCAL_FILE_HEADER)
                          ? new Error(
                              "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"
                            )
                          : new Error("Corrupted zip: can't find end of central directory")
                      this.reader.setIndex(e)
                      var t = e
                      if (
                        (this.checkSignature(s.CENTRAL_DIRECTORY_END),
                        this.readBlockEndOfCentral(),
                        this.diskNumber === i.MAX_VALUE_16BITS ||
                          this.diskWithCentralDirStart === i.MAX_VALUE_16BITS ||
                          this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS ||
                          this.centralDirRecords === i.MAX_VALUE_16BITS ||
                          this.centralDirSize === i.MAX_VALUE_32BITS ||
                          this.centralDirOffset === i.MAX_VALUE_32BITS)
                      ) {
                        if (
                          ((this.zip64 = !0),
                          (e = this.reader.lastIndexOfSignature(
                            s.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                          )) < 0)
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory locator"
                          )
                        if (
                          (this.reader.setIndex(e),
                          this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                          this.readBlockZip64EndOfCentralLocator(),
                          !this.isSignature(
                            this.relativeOffsetEndOfZip64CentralDir,
                            s.ZIP64_CENTRAL_DIRECTORY_END
                          ) &&
                            ((this.relativeOffsetEndOfZip64CentralDir =
                              this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END)),
                            this.relativeOffsetEndOfZip64CentralDir < 0))
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory"
                          )
                        this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
                          this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),
                          this.readBlockZip64EndOfCentral()
                      }
                      var r = this.centralDirOffset + this.centralDirSize
                      this.zip64 && ((r += 20), (r += 12 + this.zip64EndOfCentralSize))
                      var n = t - r
                      if (0 < n)
                        this.isSignature(t, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n)
                      else if (n < 0)
                        throw new Error('Corrupted zip: missing ' + Math.abs(n) + ' bytes.')
                    },
                    prepareReader: function (e) {
                      this.reader = n(e)
                    },
                    load: function (e) {
                      this.prepareReader(e),
                        this.readEndOfCentral(),
                        this.readCentralDir(),
                        this.readLocalFiles()
                    }
                  }),
                    (t.exports = h)
                },
                {
                  './reader/readerFor': 22,
                  './signature': 23,
                  './support': 30,
                  './utils': 32,
                  './zipEntry': 34
                }
              ],
              34: [
                function (e, t, r) {
                  'use strict'
                  var n = e('./reader/readerFor'),
                    s = e('./utils'),
                    i = e('./compressedObject'),
                    a = e('./crc32'),
                    o = e('./utf8'),
                    h = e('./compressions'),
                    u = e('./support')
                  function l(e, t) {
                    ;(this.options = e), (this.loadOptions = t)
                  }
                  ;(l.prototype = {
                    isEncrypted: function () {
                      return 1 == (1 & this.bitFlag)
                    },
                    useUTF8: function () {
                      return 2048 == (2048 & this.bitFlag)
                    },
                    readLocalPart: function (e) {
                      var t, r
                      if (
                        (e.skip(22),
                        (this.fileNameLength = e.readInt(2)),
                        (r = e.readInt(2)),
                        (this.fileName = e.readData(this.fileNameLength)),
                        e.skip(r),
                        -1 === this.compressedSize || -1 === this.uncompressedSize)
                      )
                        throw new Error(
                          "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"
                        )
                      if (
                        null ===
                        (t = (function (e) {
                          for (var t in h)
                            if (Object.prototype.hasOwnProperty.call(h, t) && h[t].magic === e)
                              return h[t]
                          return null
                        })(this.compressionMethod))
                      )
                        throw new Error(
                          'Corrupted zip : compression ' +
                            s.pretty(this.compressionMethod) +
                            ' unknown (inner file : ' +
                            s.transformTo('string', this.fileName) +
                            ')'
                        )
                      this.decompressed = new i(
                        this.compressedSize,
                        this.uncompressedSize,
                        this.crc32,
                        t,
                        e.readData(this.compressedSize)
                      )
                    },
                    readCentralPart: function (e) {
                      ;(this.versionMadeBy = e.readInt(2)),
                        e.skip(2),
                        (this.bitFlag = e.readInt(2)),
                        (this.compressionMethod = e.readString(2)),
                        (this.date = e.readDate()),
                        (this.crc32 = e.readInt(4)),
                        (this.compressedSize = e.readInt(4)),
                        (this.uncompressedSize = e.readInt(4))
                      var t = e.readInt(2)
                      if (
                        ((this.extraFieldsLength = e.readInt(2)),
                        (this.fileCommentLength = e.readInt(2)),
                        (this.diskNumberStart = e.readInt(2)),
                        (this.internalFileAttributes = e.readInt(2)),
                        (this.externalFileAttributes = e.readInt(4)),
                        (this.localHeaderOffset = e.readInt(4)),
                        this.isEncrypted())
                      )
                        throw new Error('Encrypted zip are not supported')
                      e.skip(t),
                        this.readExtraFields(e),
                        this.parseZIP64ExtraField(e),
                        (this.fileComment = e.readData(this.fileCommentLength))
                    },
                    processAttributes: function () {
                      ;(this.unixPermissions = null), (this.dosPermissions = null)
                      var e = this.versionMadeBy >> 8
                      ;(this.dir = !!(16 & this.externalFileAttributes)),
                        0 == e && (this.dosPermissions = 63 & this.externalFileAttributes),
                        3 == e &&
                          (this.unixPermissions = (this.externalFileAttributes >> 16) & 65535),
                        this.dir || '/' !== this.fileNameStr.slice(-1) || (this.dir = !0)
                    },
                    parseZIP64ExtraField: function () {
                      if (this.extraFields[1]) {
                        var e = n(this.extraFields[1].value)
                        this.uncompressedSize === s.MAX_VALUE_32BITS &&
                          (this.uncompressedSize = e.readInt(8)),
                          this.compressedSize === s.MAX_VALUE_32BITS &&
                            (this.compressedSize = e.readInt(8)),
                          this.localHeaderOffset === s.MAX_VALUE_32BITS &&
                            (this.localHeaderOffset = e.readInt(8)),
                          this.diskNumberStart === s.MAX_VALUE_32BITS &&
                            (this.diskNumberStart = e.readInt(4))
                      }
                    },
                    readExtraFields: function (e) {
                      var t,
                        r,
                        n,
                        i = e.index + this.extraFieldsLength
                      for (this.extraFields || (this.extraFields = {}); e.index + 4 < i; )
                        (t = e.readInt(2)),
                          (r = e.readInt(2)),
                          (n = e.readData(r)),
                          (this.extraFields[t] = { id: t, length: r, value: n })
                      e.setIndex(i)
                    },
                    handleUTF8: function () {
                      var e = u.uint8array ? 'uint8array' : 'array'
                      if (this.useUTF8())
                        (this.fileNameStr = o.utf8decode(this.fileName)),
                          (this.fileCommentStr = o.utf8decode(this.fileComment))
                      else {
                        var t = this.findExtraFieldUnicodePath()
                        if (null !== t) this.fileNameStr = t
                        else {
                          var r = s.transformTo(e, this.fileName)
                          this.fileNameStr = this.loadOptions.decodeFileName(r)
                        }
                        var n = this.findExtraFieldUnicodeComment()
                        if (null !== n) this.fileCommentStr = n
                        else {
                          var i = s.transformTo(e, this.fileComment)
                          this.fileCommentStr = this.loadOptions.decodeFileName(i)
                        }
                      }
                    },
                    findExtraFieldUnicodePath: function () {
                      var e = this.extraFields[28789]
                      if (e) {
                        var t = n(e.value)
                        return 1 !== t.readInt(1)
                          ? null
                          : a(this.fileName) !== t.readInt(4)
                            ? null
                            : o.utf8decode(t.readData(e.length - 5))
                      }
                      return null
                    },
                    findExtraFieldUnicodeComment: function () {
                      var e = this.extraFields[25461]
                      if (e) {
                        var t = n(e.value)
                        return 1 !== t.readInt(1)
                          ? null
                          : a(this.fileComment) !== t.readInt(4)
                            ? null
                            : o.utf8decode(t.readData(e.length - 5))
                      }
                      return null
                    }
                  }),
                    (t.exports = l)
                },
                {
                  './compressedObject': 2,
                  './compressions': 3,
                  './crc32': 4,
                  './reader/readerFor': 22,
                  './support': 30,
                  './utf8': 31,
                  './utils': 32
                }
              ],
              35: [
                function (e, t, r) {
                  'use strict'
                  function n(e, t, r) {
                    ;(this.name = e),
                      (this.dir = r.dir),
                      (this.date = r.date),
                      (this.comment = r.comment),
                      (this.unixPermissions = r.unixPermissions),
                      (this.dosPermissions = r.dosPermissions),
                      (this._data = t),
                      (this._dataBinary = r.binary),
                      (this.options = {
                        compression: r.compression,
                        compressionOptions: r.compressionOptions
                      })
                  }
                  var s = e('./stream/StreamHelper'),
                    i = e('./stream/DataWorker'),
                    a = e('./utf8'),
                    o = e('./compressedObject'),
                    h = e('./stream/GenericWorker')
                  n.prototype = {
                    internalStream: function (e) {
                      var t = null,
                        r = 'string'
                      try {
                        if (!e) throw new Error('No output type specified.')
                        var n = 'string' === (r = e.toLowerCase()) || 'text' === r
                        ;('binarystring' !== r && 'text' !== r) || (r = 'string'),
                          (t = this._decompressWorker())
                        var i = !this._dataBinary
                        i && !n && (t = t.pipe(new a.Utf8EncodeWorker())),
                          !i && n && (t = t.pipe(new a.Utf8DecodeWorker()))
                      } catch (e) {
                        ;(t = new h('error')).error(e)
                      }
                      return new s(t, r, '')
                    },
                    async: function (e, t) {
                      return this.internalStream(e).accumulate(t)
                    },
                    nodeStream: function (e, t) {
                      return this.internalStream(e || 'nodebuffer').toNodejsStream(t)
                    },
                    _compressWorker: function (e, t) {
                      if (this._data instanceof o && this._data.compression.magic === e.magic)
                        return this._data.getCompressedWorker()
                      var r = this._decompressWorker()
                      return (
                        this._dataBinary || (r = r.pipe(new a.Utf8EncodeWorker())),
                        o.createWorkerFrom(r, e, t)
                      )
                    },
                    _decompressWorker: function () {
                      return this._data instanceof o
                        ? this._data.getContentWorker()
                        : this._data instanceof h
                          ? this._data
                          : new i(this._data)
                    }
                  }
                  for (
                    var u = ['asText', 'asBinary', 'asNodeBuffer', 'asUint8Array', 'asArrayBuffer'],
                      l = function () {
                        throw new Error(
                          'This method has been removed in JSZip 3.0, please check the upgrade guide.'
                        )
                      },
                      f = 0;
                    f < u.length;
                    f++
                  )
                    n.prototype[u[f]] = l
                  t.exports = n
                },
                {
                  './compressedObject': 2,
                  './stream/DataWorker': 27,
                  './stream/GenericWorker': 28,
                  './stream/StreamHelper': 29,
                  './utf8': 31
                }
              ],
              36: [
                function (e, l, t) {
                  ;(function (t) {
                    'use strict'
                    var r,
                      n,
                      e = t.MutationObserver || t.WebKitMutationObserver
                    if (e) {
                      var i = 0,
                        s = new e(u),
                        a = t.document.createTextNode('')
                      s.observe(a, { characterData: !0 }),
                        (r = function () {
                          a.data = i = ++i % 2
                        })
                    } else if (t.setImmediate || void 0 === t.MessageChannel)
                      r =
                        'document' in t &&
                        'onreadystatechange' in t.document.createElement('script')
                          ? function () {
                              var e = t.document.createElement('script')
                              ;(e.onreadystatechange = function () {
                                u(),
                                  (e.onreadystatechange = null),
                                  e.parentNode.removeChild(e),
                                  (e = null)
                              }),
                                t.document.documentElement.appendChild(e)
                            }
                          : function () {
                              setTimeout(u, 0)
                            }
                    else {
                      var o = new t.MessageChannel()
                      ;(o.port1.onmessage = u),
                        (r = function () {
                          o.port2.postMessage(0)
                        })
                    }
                    var h = []
                    function u() {
                      var e, t
                      n = !0
                      for (var r = h.length; r; ) {
                        for (t = h, h = [], e = -1; ++e < r; ) t[e]()
                        r = h.length
                      }
                      n = !1
                    }
                    l.exports = function (e) {
                      1 !== h.push(e) || n || r()
                    }
                  }).call(
                    this,
                    'undefined' != typeof __webpack_require__.g
                      ? __webpack_require__.g
                      : 'undefined' != typeof self
                        ? self
                        : 'undefined' != typeof window
                          ? window
                          : {}
                  )
                },
                {}
              ],
              37: [
                function (e, t, r) {
                  'use strict'
                  var i = e('immediate')
                  function u() {}
                  var l = {},
                    s = ['REJECTED'],
                    a = ['FULFILLED'],
                    n = ['PENDING']
                  function o(e) {
                    if ('function' != typeof e) throw new TypeError('resolver must be a function')
                    ;(this.state = n),
                      (this.queue = []),
                      (this.outcome = void 0),
                      e !== u && d(this, e)
                  }
                  function h(e, t, r) {
                    ;(this.promise = e),
                      'function' == typeof t &&
                        ((this.onFulfilled = t), (this.callFulfilled = this.otherCallFulfilled)),
                      'function' == typeof r &&
                        ((this.onRejected = r), (this.callRejected = this.otherCallRejected))
                  }
                  function f(t, r, n) {
                    i(function () {
                      var e
                      try {
                        e = r(n)
                      } catch (e) {
                        return l.reject(t, e)
                      }
                      e === t
                        ? l.reject(t, new TypeError('Cannot resolve promise with itself'))
                        : l.resolve(t, e)
                    })
                  }
                  function c(e) {
                    var t = e && e.then
                    if (
                      e &&
                      ('object' == typeof e || 'function' == typeof e) &&
                      'function' == typeof t
                    )
                      return function () {
                        t.apply(e, arguments)
                      }
                  }
                  function d(t, e) {
                    var r = !1
                    function n(e) {
                      r || ((r = !0), l.reject(t, e))
                    }
                    function i(e) {
                      r || ((r = !0), l.resolve(t, e))
                    }
                    var s = p(function () {
                      e(i, n)
                    })
                    'error' === s.status && n(s.value)
                  }
                  function p(e, t) {
                    var r = {}
                    try {
                      ;(r.value = e(t)), (r.status = 'success')
                    } catch (e) {
                      ;(r.status = 'error'), (r.value = e)
                    }
                    return r
                  }
                  ;((t.exports = o).prototype.finally = function (t) {
                    if ('function' != typeof t) return this
                    var r = this.constructor
                    return this.then(
                      function (e) {
                        return r.resolve(t()).then(function () {
                          return e
                        })
                      },
                      function (e) {
                        return r.resolve(t()).then(function () {
                          throw e
                        })
                      }
                    )
                  }),
                    (o.prototype.catch = function (e) {
                      return this.then(null, e)
                    }),
                    (o.prototype.then = function (e, t) {
                      if (
                        ('function' != typeof e && this.state === a) ||
                        ('function' != typeof t && this.state === s)
                      )
                        return this
                      var r = new this.constructor(u)
                      this.state !== n
                        ? f(r, this.state === a ? e : t, this.outcome)
                        : this.queue.push(new h(r, e, t))
                      return r
                    }),
                    (h.prototype.callFulfilled = function (e) {
                      l.resolve(this.promise, e)
                    }),
                    (h.prototype.otherCallFulfilled = function (e) {
                      f(this.promise, this.onFulfilled, e)
                    }),
                    (h.prototype.callRejected = function (e) {
                      l.reject(this.promise, e)
                    }),
                    (h.prototype.otherCallRejected = function (e) {
                      f(this.promise, this.onRejected, e)
                    }),
                    (l.resolve = function (e, t) {
                      var r = p(c, t)
                      if ('error' === r.status) return l.reject(e, r.value)
                      var n = r.value
                      if (n) d(e, n)
                      else {
                        ;(e.state = a), (e.outcome = t)
                        for (var i = -1, s = e.queue.length; ++i < s; ) e.queue[i].callFulfilled(t)
                      }
                      return e
                    }),
                    (l.reject = function (e, t) {
                      ;(e.state = s), (e.outcome = t)
                      for (var r = -1, n = e.queue.length; ++r < n; ) e.queue[r].callRejected(t)
                      return e
                    }),
                    (o.resolve = function (e) {
                      if (e instanceof this) return e
                      return l.resolve(new this(u), e)
                    }),
                    (o.reject = function (e) {
                      var t = new this(u)
                      return l.reject(t, e)
                    }),
                    (o.all = function (e) {
                      var r = this
                      if ('[object Array]' !== Object.prototype.toString.call(e))
                        return this.reject(new TypeError('must be an array'))
                      var n = e.length,
                        i = !1
                      if (!n) return this.resolve([])
                      var s = new Array(n),
                        a = 0,
                        t = -1,
                        o = new this(u)
                      for (; ++t < n; ) h(e[t], t)
                      return o
                      function h(e, t) {
                        r.resolve(e).then(
                          function (e) {
                            ;(s[t] = e), ++a !== n || i || ((i = !0), l.resolve(o, s))
                          },
                          function (e) {
                            i || ((i = !0), l.reject(o, e))
                          }
                        )
                      }
                    }),
                    (o.race = function (e) {
                      var t = this
                      if ('[object Array]' !== Object.prototype.toString.call(e))
                        return this.reject(new TypeError('must be an array'))
                      var r = e.length,
                        n = !1
                      if (!r) return this.resolve([])
                      var i = -1,
                        s = new this(u)
                      for (; ++i < r; )
                        (a = e[i]),
                          t.resolve(a).then(
                            function (e) {
                              n || ((n = !0), l.resolve(s, e))
                            },
                            function (e) {
                              n || ((n = !0), l.reject(s, e))
                            }
                          )
                      var a
                      return s
                    })
                },
                { immediate: 36 }
              ],
              38: [
                function (e, t, r) {
                  'use strict'
                  var n = {}
                  ;(0, e('./lib/utils/common').assign)(
                    n,
                    e('./lib/deflate'),
                    e('./lib/inflate'),
                    e('./lib/zlib/constants')
                  ),
                    (t.exports = n)
                },
                {
                  './lib/deflate': 39,
                  './lib/inflate': 40,
                  './lib/utils/common': 41,
                  './lib/zlib/constants': 44
                }
              ],
              39: [
                function (e, t, r) {
                  'use strict'
                  var a = e('./zlib/deflate'),
                    o = e('./utils/common'),
                    h = e('./utils/strings'),
                    i = e('./zlib/messages'),
                    s = e('./zlib/zstream'),
                    u = Object.prototype.toString,
                    l = 0,
                    f = -1,
                    c = 0,
                    d = 8
                  function p(e) {
                    if (!(this instanceof p)) return new p(e)
                    this.options = o.assign(
                      {
                        level: f,
                        method: d,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: c,
                        to: ''
                      },
                      e || {}
                    )
                    var t = this.options
                    t.raw && 0 < t.windowBits
                      ? (t.windowBits = -t.windowBits)
                      : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new s()),
                      (this.strm.avail_out = 0)
                    var r = a.deflateInit2(
                      this.strm,
                      t.level,
                      t.method,
                      t.windowBits,
                      t.memLevel,
                      t.strategy
                    )
                    if (r !== l) throw new Error(i[r])
                    if ((t.header && a.deflateSetHeader(this.strm, t.header), t.dictionary)) {
                      var n
                      if (
                        ((n =
                          'string' == typeof t.dictionary
                            ? h.string2buf(t.dictionary)
                            : '[object ArrayBuffer]' === u.call(t.dictionary)
                              ? new Uint8Array(t.dictionary)
                              : t.dictionary),
                        (r = a.deflateSetDictionary(this.strm, n)) !== l)
                      )
                        throw new Error(i[r])
                      this._dict_set = !0
                    }
                  }
                  function n(e, t) {
                    var r = new p(t)
                    if ((r.push(e, !0), r.err)) throw r.msg || i[r.err]
                    return r.result
                  }
                  ;(p.prototype.push = function (e, t) {
                    var r,
                      n,
                      i = this.strm,
                      s = this.options.chunkSize
                    if (this.ended) return !1
                    ;(n = t === ~~t ? t : !0 === t ? 4 : 0),
                      'string' == typeof e
                        ? (i.input = h.string2buf(e))
                        : '[object ArrayBuffer]' === u.call(e)
                          ? (i.input = new Uint8Array(e))
                          : (i.input = e),
                      (i.next_in = 0),
                      (i.avail_in = i.input.length)
                    do {
                      if (
                        (0 === i.avail_out &&
                          ((i.output = new o.Buf8(s)), (i.next_out = 0), (i.avail_out = s)),
                        1 !== (r = a.deflate(i, n)) && r !== l)
                      )
                        return this.onEnd(r), !(this.ended = !0)
                      ;(0 !== i.avail_out && (0 !== i.avail_in || (4 !== n && 2 !== n))) ||
                        ('string' === this.options.to
                          ? this.onData(h.buf2binstring(o.shrinkBuf(i.output, i.next_out)))
                          : this.onData(o.shrinkBuf(i.output, i.next_out)))
                    } while ((0 < i.avail_in || 0 === i.avail_out) && 1 !== r)
                    return 4 === n
                      ? ((r = a.deflateEnd(this.strm)), this.onEnd(r), (this.ended = !0), r === l)
                      : 2 !== n || (this.onEnd(l), !(i.avail_out = 0))
                  }),
                    (p.prototype.onData = function (e) {
                      this.chunks.push(e)
                    }),
                    (p.prototype.onEnd = function (e) {
                      e === l &&
                        ('string' === this.options.to
                          ? (this.result = this.chunks.join(''))
                          : (this.result = o.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = e),
                        (this.msg = this.strm.msg)
                    }),
                    (r.Deflate = p),
                    (r.deflate = n),
                    (r.deflateRaw = function (e, t) {
                      return ((t = t || {}).raw = !0), n(e, t)
                    }),
                    (r.gzip = function (e, t) {
                      return ((t = t || {}).gzip = !0), n(e, t)
                    })
                },
                {
                  './utils/common': 41,
                  './utils/strings': 42,
                  './zlib/deflate': 46,
                  './zlib/messages': 51,
                  './zlib/zstream': 53
                }
              ],
              40: [
                function (e, t, r) {
                  'use strict'
                  var c = e('./zlib/inflate'),
                    d = e('./utils/common'),
                    p = e('./utils/strings'),
                    m = e('./zlib/constants'),
                    n = e('./zlib/messages'),
                    i = e('./zlib/zstream'),
                    s = e('./zlib/gzheader'),
                    _ = Object.prototype.toString
                  function a(e) {
                    if (!(this instanceof a)) return new a(e)
                    this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: '' }, e || {})
                    var t = this.options
                    t.raw &&
                      0 <= t.windowBits &&
                      t.windowBits < 16 &&
                      ((t.windowBits = -t.windowBits), 0 === t.windowBits && (t.windowBits = -15)),
                      !(0 <= t.windowBits && t.windowBits < 16) ||
                        (e && e.windowBits) ||
                        (t.windowBits += 32),
                      15 < t.windowBits &&
                        t.windowBits < 48 &&
                        0 == (15 & t.windowBits) &&
                        (t.windowBits |= 15),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new i()),
                      (this.strm.avail_out = 0)
                    var r = c.inflateInit2(this.strm, t.windowBits)
                    if (r !== m.Z_OK) throw new Error(n[r])
                    ;(this.header = new s()), c.inflateGetHeader(this.strm, this.header)
                  }
                  function o(e, t) {
                    var r = new a(t)
                    if ((r.push(e, !0), r.err)) throw r.msg || n[r.err]
                    return r.result
                  }
                  ;(a.prototype.push = function (e, t) {
                    var r,
                      n,
                      i,
                      s,
                      a,
                      o,
                      h = this.strm,
                      u = this.options.chunkSize,
                      l = this.options.dictionary,
                      f = !1
                    if (this.ended) return !1
                    ;(n = t === ~~t ? t : !0 === t ? m.Z_FINISH : m.Z_NO_FLUSH),
                      'string' == typeof e
                        ? (h.input = p.binstring2buf(e))
                        : '[object ArrayBuffer]' === _.call(e)
                          ? (h.input = new Uint8Array(e))
                          : (h.input = e),
                      (h.next_in = 0),
                      (h.avail_in = h.input.length)
                    do {
                      if (
                        (0 === h.avail_out &&
                          ((h.output = new d.Buf8(u)), (h.next_out = 0), (h.avail_out = u)),
                        (r = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT &&
                          l &&
                          ((o =
                            'string' == typeof l
                              ? p.string2buf(l)
                              : '[object ArrayBuffer]' === _.call(l)
                                ? new Uint8Array(l)
                                : l),
                          (r = c.inflateSetDictionary(this.strm, o))),
                        r === m.Z_BUF_ERROR && !0 === f && ((r = m.Z_OK), (f = !1)),
                        r !== m.Z_STREAM_END && r !== m.Z_OK)
                      )
                        return this.onEnd(r), !(this.ended = !0)
                      h.next_out &&
                        ((0 !== h.avail_out &&
                          r !== m.Z_STREAM_END &&
                          (0 !== h.avail_in || (n !== m.Z_FINISH && n !== m.Z_SYNC_FLUSH))) ||
                          ('string' === this.options.to
                            ? ((i = p.utf8border(h.output, h.next_out)),
                              (s = h.next_out - i),
                              (a = p.buf2string(h.output, i)),
                              (h.next_out = s),
                              (h.avail_out = u - s),
                              s && d.arraySet(h.output, h.output, i, s, 0),
                              this.onData(a))
                            : this.onData(d.shrinkBuf(h.output, h.next_out)))),
                        0 === h.avail_in && 0 === h.avail_out && (f = !0)
                    } while ((0 < h.avail_in || 0 === h.avail_out) && r !== m.Z_STREAM_END)
                    return (
                      r === m.Z_STREAM_END && (n = m.Z_FINISH),
                      n === m.Z_FINISH
                        ? ((r = c.inflateEnd(this.strm)),
                          this.onEnd(r),
                          (this.ended = !0),
                          r === m.Z_OK)
                        : n !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0))
                    )
                  }),
                    (a.prototype.onData = function (e) {
                      this.chunks.push(e)
                    }),
                    (a.prototype.onEnd = function (e) {
                      e === m.Z_OK &&
                        ('string' === this.options.to
                          ? (this.result = this.chunks.join(''))
                          : (this.result = d.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = e),
                        (this.msg = this.strm.msg)
                    }),
                    (r.Inflate = a),
                    (r.inflate = o),
                    (r.inflateRaw = function (e, t) {
                      return ((t = t || {}).raw = !0), o(e, t)
                    }),
                    (r.ungzip = o)
                },
                {
                  './utils/common': 41,
                  './utils/strings': 42,
                  './zlib/constants': 44,
                  './zlib/gzheader': 47,
                  './zlib/inflate': 49,
                  './zlib/messages': 51,
                  './zlib/zstream': 53
                }
              ],
              41: [
                function (e, t, r) {
                  'use strict'
                  var n =
                    'undefined' != typeof Uint8Array &&
                    'undefined' != typeof Uint16Array &&
                    'undefined' != typeof Int32Array
                  ;(r.assign = function (e) {
                    for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
                      var r = t.shift()
                      if (r) {
                        if ('object' != typeof r) throw new TypeError(r + 'must be non-object')
                        for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
                      }
                    }
                    return e
                  }),
                    (r.shrinkBuf = function (e, t) {
                      return e.length === t
                        ? e
                        : e.subarray
                          ? e.subarray(0, t)
                          : ((e.length = t), e)
                    })
                  var i = {
                      arraySet: function (e, t, r, n, i) {
                        if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), i)
                        else for (var s = 0; s < n; s++) e[i + s] = t[r + s]
                      },
                      flattenChunks: function (e) {
                        var t, r, n, i, s, a
                        for (t = n = 0, r = e.length; t < r; t++) n += e[t].length
                        for (a = new Uint8Array(n), t = i = 0, r = e.length; t < r; t++)
                          (s = e[t]), a.set(s, i), (i += s.length)
                        return a
                      }
                    },
                    s = {
                      arraySet: function (e, t, r, n, i) {
                        for (var s = 0; s < n; s++) e[i + s] = t[r + s]
                      },
                      flattenChunks: function (e) {
                        return [].concat.apply([], e)
                      }
                    }
                  ;(r.setTyped = function (e) {
                    e
                      ? ((r.Buf8 = Uint8Array),
                        (r.Buf16 = Uint16Array),
                        (r.Buf32 = Int32Array),
                        r.assign(r, i))
                      : ((r.Buf8 = Array), (r.Buf16 = Array), (r.Buf32 = Array), r.assign(r, s))
                  }),
                    r.setTyped(n)
                },
                {}
              ],
              42: [
                function (e, t, r) {
                  'use strict'
                  var h = e('./common'),
                    i = !0,
                    s = !0
                  try {
                    String.fromCharCode.apply(null, [0])
                  } catch (e) {
                    i = !1
                  }
                  try {
                    String.fromCharCode.apply(null, new Uint8Array(1))
                  } catch (e) {
                    s = !1
                  }
                  for (var u = new h.Buf8(256), n = 0; n < 256; n++)
                    u[n] =
                      252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1
                  function l(e, t) {
                    if (t < 65537 && ((e.subarray && s) || (!e.subarray && i)))
                      return String.fromCharCode.apply(null, h.shrinkBuf(e, t))
                    for (var r = '', n = 0; n < t; n++) r += String.fromCharCode(e[n])
                    return r
                  }
                  ;(u[254] = u[254] = 1),
                    (r.string2buf = function (e) {
                      var t,
                        r,
                        n,
                        i,
                        s,
                        a = e.length,
                        o = 0
                      for (i = 0; i < a; i++)
                        55296 == (64512 & (r = e.charCodeAt(i))) &&
                          i + 1 < a &&
                          56320 == (64512 & (n = e.charCodeAt(i + 1))) &&
                          ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), i++),
                          (o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4)
                      for (t = new h.Buf8(o), i = s = 0; s < o; i++)
                        55296 == (64512 & (r = e.charCodeAt(i))) &&
                          i + 1 < a &&
                          56320 == (64512 & (n = e.charCodeAt(i + 1))) &&
                          ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), i++),
                          r < 128
                            ? (t[s++] = r)
                            : (r < 2048
                                ? (t[s++] = 192 | (r >>> 6))
                                : (r < 65536
                                    ? (t[s++] = 224 | (r >>> 12))
                                    : ((t[s++] = 240 | (r >>> 18)),
                                      (t[s++] = 128 | ((r >>> 12) & 63))),
                                  (t[s++] = 128 | ((r >>> 6) & 63))),
                              (t[s++] = 128 | (63 & r)))
                      return t
                    }),
                    (r.buf2binstring = function (e) {
                      return l(e, e.length)
                    }),
                    (r.binstring2buf = function (e) {
                      for (var t = new h.Buf8(e.length), r = 0, n = t.length; r < n; r++)
                        t[r] = e.charCodeAt(r)
                      return t
                    }),
                    (r.buf2string = function (e, t) {
                      var r,
                        n,
                        i,
                        s,
                        a = t || e.length,
                        o = new Array(2 * a)
                      for (r = n = 0; r < a; )
                        if ((i = e[r++]) < 128) o[n++] = i
                        else if (4 < (s = u[i])) (o[n++] = 65533), (r += s - 1)
                        else {
                          for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && r < a; )
                            (i = (i << 6) | (63 & e[r++])), s--
                          1 < s
                            ? (o[n++] = 65533)
                            : i < 65536
                              ? (o[n++] = i)
                              : ((i -= 65536),
                                (o[n++] = 55296 | ((i >> 10) & 1023)),
                                (o[n++] = 56320 | (1023 & i)))
                        }
                      return l(o, n)
                    }),
                    (r.utf8border = function (e, t) {
                      var r
                      for (
                        (t = t || e.length) > e.length && (t = e.length), r = t - 1;
                        0 <= r && 128 == (192 & e[r]);

                      )
                        r--
                      return r < 0 ? t : 0 === r ? t : r + u[e[r]] > t ? r : t
                    })
                },
                { './common': 41 }
              ],
              43: [
                function (e, t, r) {
                  'use strict'
                  t.exports = function (e, t, r, n) {
                    for (var i = (65535 & e) | 0, s = ((e >>> 16) & 65535) | 0, a = 0; 0 !== r; ) {
                      for (
                        r -= a = 2e3 < r ? 2e3 : r;
                        (s = (s + (i = (i + t[n++]) | 0)) | 0), --a;

                      );
                      ;(i %= 65521), (s %= 65521)
                    }
                    return i | (s << 16) | 0
                  }
                },
                {}
              ],
              44: [
                function (e, t, r) {
                  'use strict'
                  t.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8
                  }
                },
                {}
              ],
              45: [
                function (e, t, r) {
                  'use strict'
                  var o = (function () {
                    for (var e, t = [], r = 0; r < 256; r++) {
                      e = r
                      for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1
                      t[r] = e
                    }
                    return t
                  })()
                  t.exports = function (e, t, r, n) {
                    var i = o,
                      s = n + r
                    e ^= -1
                    for (var a = n; a < s; a++) e = (e >>> 8) ^ i[255 & (e ^ t[a])]
                    return -1 ^ e
                  }
                },
                {}
              ],
              46: [
                function (e, t, r) {
                  'use strict'
                  var h,
                    c = e('../utils/common'),
                    u = e('./trees'),
                    d = e('./adler32'),
                    p = e('./crc32'),
                    n = e('./messages'),
                    l = 0,
                    f = 4,
                    m = 0,
                    _ = -2,
                    g = -1,
                    b = 4,
                    i = 2,
                    v = 8,
                    y = 9,
                    s = 286,
                    a = 30,
                    o = 19,
                    w = 2 * s + 1,
                    k = 15,
                    x = 3,
                    S = 258,
                    z = S + x + 1,
                    C = 42,
                    E = 113,
                    A = 1,
                    I = 2,
                    O = 3,
                    B = 4
                  function R(e, t) {
                    return (e.msg = n[t]), t
                  }
                  function T(e) {
                    return (e << 1) - (4 < e ? 9 : 0)
                  }
                  function D(e) {
                    for (var t = e.length; 0 <= --t; ) e[t] = 0
                  }
                  function F(e) {
                    var t = e.state,
                      r = t.pending
                    r > e.avail_out && (r = e.avail_out),
                      0 !== r &&
                        (c.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out),
                        (e.next_out += r),
                        (t.pending_out += r),
                        (e.total_out += r),
                        (e.avail_out -= r),
                        (t.pending -= r),
                        0 === t.pending && (t.pending_out = 0))
                  }
                  function N(e, t) {
                    u._tr_flush_block(
                      e,
                      0 <= e.block_start ? e.block_start : -1,
                      e.strstart - e.block_start,
                      t
                    ),
                      (e.block_start = e.strstart),
                      F(e.strm)
                  }
                  function U(e, t) {
                    e.pending_buf[e.pending++] = t
                  }
                  function P(e, t) {
                    ;(e.pending_buf[e.pending++] = (t >>> 8) & 255),
                      (e.pending_buf[e.pending++] = 255 & t)
                  }
                  function L(e, t) {
                    var r,
                      n,
                      i = e.max_chain_length,
                      s = e.strstart,
                      a = e.prev_length,
                      o = e.nice_match,
                      h = e.strstart > e.w_size - z ? e.strstart - (e.w_size - z) : 0,
                      u = e.window,
                      l = e.w_mask,
                      f = e.prev,
                      c = e.strstart + S,
                      d = u[s + a - 1],
                      p = u[s + a]
                    e.prev_length >= e.good_match && (i >>= 2), o > e.lookahead && (o = e.lookahead)
                    do {
                      if (
                        u[(r = t) + a] === p &&
                        u[r + a - 1] === d &&
                        u[r] === u[s] &&
                        u[++r] === u[s + 1]
                      ) {
                        ;(s += 2), r++
                        do {} while (
                          u[++s] === u[++r] &&
                          u[++s] === u[++r] &&
                          u[++s] === u[++r] &&
                          u[++s] === u[++r] &&
                          u[++s] === u[++r] &&
                          u[++s] === u[++r] &&
                          u[++s] === u[++r] &&
                          u[++s] === u[++r] &&
                          s < c
                        )
                        if (((n = S - (c - s)), (s = c - S), a < n)) {
                          if (((e.match_start = t), o <= (a = n))) break
                          ;(d = u[s + a - 1]), (p = u[s + a])
                        }
                      }
                    } while ((t = f[t & l]) > h && 0 != --i)
                    return a <= e.lookahead ? a : e.lookahead
                  }
                  function j(e) {
                    var t,
                      r,
                      n,
                      i,
                      s,
                      a,
                      o,
                      h,
                      u,
                      l,
                      f = e.w_size
                    do {
                      if (
                        ((i = e.window_size - e.lookahead - e.strstart), e.strstart >= f + (f - z))
                      ) {
                        for (
                          c.arraySet(e.window, e.window, f, f, 0),
                            e.match_start -= f,
                            e.strstart -= f,
                            e.block_start -= f,
                            t = r = e.hash_size;
                          (n = e.head[--t]), (e.head[t] = f <= n ? n - f : 0), --r;

                        );
                        for (t = r = f; (n = e.prev[--t]), (e.prev[t] = f <= n ? n - f : 0), --r; );
                        i += f
                      }
                      if (0 === e.strm.avail_in) break
                      if (
                        ((a = e.strm),
                        (o = e.window),
                        (h = e.strstart + e.lookahead),
                        (u = i),
                        (l = void 0),
                        (l = a.avail_in),
                        u < l && (l = u),
                        (r =
                          0 === l
                            ? 0
                            : ((a.avail_in -= l),
                              c.arraySet(o, a.input, a.next_in, l, h),
                              1 === a.state.wrap
                                ? (a.adler = d(a.adler, o, l, h))
                                : 2 === a.state.wrap && (a.adler = p(a.adler, o, l, h)),
                              (a.next_in += l),
                              (a.total_in += l),
                              l)),
                        (e.lookahead += r),
                        e.lookahead + e.insert >= x)
                      )
                        for (
                          s = e.strstart - e.insert,
                            e.ins_h = e.window[s],
                            e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[s + 1]) & e.hash_mask;
                          e.insert &&
                          ((e.ins_h =
                            ((e.ins_h << e.hash_shift) ^ e.window[s + x - 1]) & e.hash_mask),
                          (e.prev[s & e.w_mask] = e.head[e.ins_h]),
                          (e.head[e.ins_h] = s),
                          s++,
                          e.insert--,
                          !(e.lookahead + e.insert < x));

                        );
                    } while (e.lookahead < z && 0 !== e.strm.avail_in)
                  }
                  function Z(e, t) {
                    for (var r, n; ; ) {
                      if (e.lookahead < z) {
                        if ((j(e), e.lookahead < z && t === l)) return A
                        if (0 === e.lookahead) break
                      }
                      if (
                        ((r = 0),
                        e.lookahead >= x &&
                          ((e.ins_h =
                            ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + x - 1]) &
                            e.hash_mask),
                          (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                          (e.head[e.ins_h] = e.strstart)),
                        0 !== r && e.strstart - r <= e.w_size - z && (e.match_length = L(e, r)),
                        e.match_length >= x)
                      )
                        if (
                          ((n = u._tr_tally(e, e.strstart - e.match_start, e.match_length - x)),
                          (e.lookahead -= e.match_length),
                          e.match_length <= e.max_lazy_match && e.lookahead >= x)
                        ) {
                          for (
                            e.match_length--;
                            e.strstart++,
                              (e.ins_h =
                                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + x - 1]) &
                                e.hash_mask),
                              (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                              (e.head[e.ins_h] = e.strstart),
                              0 != --e.match_length;

                          );
                          e.strstart++
                        } else
                          (e.strstart += e.match_length),
                            (e.match_length = 0),
                            (e.ins_h = e.window[e.strstart]),
                            (e.ins_h =
                              ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) & e.hash_mask)
                      else
                        (n = u._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++
                      if (n && (N(e, !1), 0 === e.strm.avail_out)) return A
                    }
                    return (
                      (e.insert = e.strstart < x - 1 ? e.strstart : x - 1),
                      t === f
                        ? (N(e, !0), 0 === e.strm.avail_out ? O : B)
                        : e.last_lit && (N(e, !1), 0 === e.strm.avail_out)
                          ? A
                          : I
                    )
                  }
                  function W(e, t) {
                    for (var r, n, i; ; ) {
                      if (e.lookahead < z) {
                        if ((j(e), e.lookahead < z && t === l)) return A
                        if (0 === e.lookahead) break
                      }
                      if (
                        ((r = 0),
                        e.lookahead >= x &&
                          ((e.ins_h =
                            ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + x - 1]) &
                            e.hash_mask),
                          (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                          (e.head[e.ins_h] = e.strstart)),
                        (e.prev_length = e.match_length),
                        (e.prev_match = e.match_start),
                        (e.match_length = x - 1),
                        0 !== r &&
                          e.prev_length < e.max_lazy_match &&
                          e.strstart - r <= e.w_size - z &&
                          ((e.match_length = L(e, r)),
                          e.match_length <= 5 &&
                            (1 === e.strategy ||
                              (e.match_length === x && 4096 < e.strstart - e.match_start)) &&
                            (e.match_length = x - 1)),
                        e.prev_length >= x && e.match_length <= e.prev_length)
                      ) {
                        for (
                          i = e.strstart + e.lookahead - x,
                            n = u._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - x),
                            e.lookahead -= e.prev_length - 1,
                            e.prev_length -= 2;
                          ++e.strstart <= i &&
                            ((e.ins_h =
                              ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + x - 1]) &
                              e.hash_mask),
                            (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                            (e.head[e.ins_h] = e.strstart)),
                            0 != --e.prev_length;

                        );
                        if (
                          ((e.match_available = 0),
                          (e.match_length = x - 1),
                          e.strstart++,
                          n && (N(e, !1), 0 === e.strm.avail_out))
                        )
                          return A
                      } else if (e.match_available) {
                        if (
                          ((n = u._tr_tally(e, 0, e.window[e.strstart - 1])) && N(e, !1),
                          e.strstart++,
                          e.lookahead--,
                          0 === e.strm.avail_out)
                        )
                          return A
                      } else (e.match_available = 1), e.strstart++, e.lookahead--
                    }
                    return (
                      e.match_available &&
                        ((n = u._tr_tally(e, 0, e.window[e.strstart - 1])),
                        (e.match_available = 0)),
                      (e.insert = e.strstart < x - 1 ? e.strstart : x - 1),
                      t === f
                        ? (N(e, !0), 0 === e.strm.avail_out ? O : B)
                        : e.last_lit && (N(e, !1), 0 === e.strm.avail_out)
                          ? A
                          : I
                    )
                  }
                  function M(e, t, r, n, i) {
                    ;(this.good_length = e),
                      (this.max_lazy = t),
                      (this.nice_length = r),
                      (this.max_chain = n),
                      (this.func = i)
                  }
                  function H() {
                    ;(this.strm = null),
                      (this.status = 0),
                      (this.pending_buf = null),
                      (this.pending_buf_size = 0),
                      (this.pending_out = 0),
                      (this.pending = 0),
                      (this.wrap = 0),
                      (this.gzhead = null),
                      (this.gzindex = 0),
                      (this.method = v),
                      (this.last_flush = -1),
                      (this.w_size = 0),
                      (this.w_bits = 0),
                      (this.w_mask = 0),
                      (this.window = null),
                      (this.window_size = 0),
                      (this.prev = null),
                      (this.head = null),
                      (this.ins_h = 0),
                      (this.hash_size = 0),
                      (this.hash_bits = 0),
                      (this.hash_mask = 0),
                      (this.hash_shift = 0),
                      (this.block_start = 0),
                      (this.match_length = 0),
                      (this.prev_match = 0),
                      (this.match_available = 0),
                      (this.strstart = 0),
                      (this.match_start = 0),
                      (this.lookahead = 0),
                      (this.prev_length = 0),
                      (this.max_chain_length = 0),
                      (this.max_lazy_match = 0),
                      (this.level = 0),
                      (this.strategy = 0),
                      (this.good_match = 0),
                      (this.nice_match = 0),
                      (this.dyn_ltree = new c.Buf16(2 * w)),
                      (this.dyn_dtree = new c.Buf16(2 * (2 * a + 1))),
                      (this.bl_tree = new c.Buf16(2 * (2 * o + 1))),
                      D(this.dyn_ltree),
                      D(this.dyn_dtree),
                      D(this.bl_tree),
                      (this.l_desc = null),
                      (this.d_desc = null),
                      (this.bl_desc = null),
                      (this.bl_count = new c.Buf16(k + 1)),
                      (this.heap = new c.Buf16(2 * s + 1)),
                      D(this.heap),
                      (this.heap_len = 0),
                      (this.heap_max = 0),
                      (this.depth = new c.Buf16(2 * s + 1)),
                      D(this.depth),
                      (this.l_buf = 0),
                      (this.lit_bufsize = 0),
                      (this.last_lit = 0),
                      (this.d_buf = 0),
                      (this.opt_len = 0),
                      (this.static_len = 0),
                      (this.matches = 0),
                      (this.insert = 0),
                      (this.bi_buf = 0),
                      (this.bi_valid = 0)
                  }
                  function G(e) {
                    var t
                    return e && e.state
                      ? ((e.total_in = e.total_out = 0),
                        (e.data_type = i),
                        ((t = e.state).pending = 0),
                        (t.pending_out = 0),
                        t.wrap < 0 && (t.wrap = -t.wrap),
                        (t.status = t.wrap ? C : E),
                        (e.adler = 2 === t.wrap ? 0 : 1),
                        (t.last_flush = l),
                        u._tr_init(t),
                        m)
                      : R(e, _)
                  }
                  function K(e) {
                    var t = G(e)
                    return (
                      t === m &&
                        (function (e) {
                          ;(e.window_size = 2 * e.w_size),
                            D(e.head),
                            (e.max_lazy_match = h[e.level].max_lazy),
                            (e.good_match = h[e.level].good_length),
                            (e.nice_match = h[e.level].nice_length),
                            (e.max_chain_length = h[e.level].max_chain),
                            (e.strstart = 0),
                            (e.block_start = 0),
                            (e.lookahead = 0),
                            (e.insert = 0),
                            (e.match_length = e.prev_length = x - 1),
                            (e.match_available = 0),
                            (e.ins_h = 0)
                        })(e.state),
                      t
                    )
                  }
                  function Y(e, t, r, n, i, s) {
                    if (!e) return _
                    var a = 1
                    if (
                      (t === g && (t = 6),
                      n < 0 ? ((a = 0), (n = -n)) : 15 < n && ((a = 2), (n -= 16)),
                      i < 1 ||
                        y < i ||
                        r !== v ||
                        n < 8 ||
                        15 < n ||
                        t < 0 ||
                        9 < t ||
                        s < 0 ||
                        b < s)
                    )
                      return R(e, _)
                    8 === n && (n = 9)
                    var o = new H()
                    return (
                      ((e.state = o).strm = e),
                      (o.wrap = a),
                      (o.gzhead = null),
                      (o.w_bits = n),
                      (o.w_size = 1 << o.w_bits),
                      (o.w_mask = o.w_size - 1),
                      (o.hash_bits = i + 7),
                      (o.hash_size = 1 << o.hash_bits),
                      (o.hash_mask = o.hash_size - 1),
                      (o.hash_shift = ~~((o.hash_bits + x - 1) / x)),
                      (o.window = new c.Buf8(2 * o.w_size)),
                      (o.head = new c.Buf16(o.hash_size)),
                      (o.prev = new c.Buf16(o.w_size)),
                      (o.lit_bufsize = 1 << (i + 6)),
                      (o.pending_buf_size = 4 * o.lit_bufsize),
                      (o.pending_buf = new c.Buf8(o.pending_buf_size)),
                      (o.d_buf = 1 * o.lit_bufsize),
                      (o.l_buf = 3 * o.lit_bufsize),
                      (o.level = t),
                      (o.strategy = s),
                      (o.method = r),
                      K(e)
                    )
                  }
                  ;(h = [
                    new M(0, 0, 0, 0, function (e, t) {
                      var r = 65535
                      for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5); ; ) {
                        if (e.lookahead <= 1) {
                          if ((j(e), 0 === e.lookahead && t === l)) return A
                          if (0 === e.lookahead) break
                        }
                        ;(e.strstart += e.lookahead), (e.lookahead = 0)
                        var n = e.block_start + r
                        if (
                          (0 === e.strstart || e.strstart >= n) &&
                          ((e.lookahead = e.strstart - n),
                          (e.strstart = n),
                          N(e, !1),
                          0 === e.strm.avail_out)
                        )
                          return A
                        if (
                          e.strstart - e.block_start >= e.w_size - z &&
                          (N(e, !1), 0 === e.strm.avail_out)
                        )
                          return A
                      }
                      return (
                        (e.insert = 0),
                        t === f
                          ? (N(e, !0), 0 === e.strm.avail_out ? O : B)
                          : (e.strstart > e.block_start && (N(e, !1), e.strm.avail_out), A)
                      )
                    }),
                    new M(4, 4, 8, 4, Z),
                    new M(4, 5, 16, 8, Z),
                    new M(4, 6, 32, 32, Z),
                    new M(4, 4, 16, 16, W),
                    new M(8, 16, 32, 32, W),
                    new M(8, 16, 128, 128, W),
                    new M(8, 32, 128, 256, W),
                    new M(32, 128, 258, 1024, W),
                    new M(32, 258, 258, 4096, W)
                  ]),
                    (r.deflateInit = function (e, t) {
                      return Y(e, t, v, 15, 8, 0)
                    }),
                    (r.deflateInit2 = Y),
                    (r.deflateReset = K),
                    (r.deflateResetKeep = G),
                    (r.deflateSetHeader = function (e, t) {
                      return e && e.state ? (2 !== e.state.wrap ? _ : ((e.state.gzhead = t), m)) : _
                    }),
                    (r.deflate = function (e, t) {
                      var r, n, i, s
                      if (!e || !e.state || 5 < t || t < 0) return e ? R(e, _) : _
                      if (
                        ((n = e.state),
                        !e.output ||
                          (!e.input && 0 !== e.avail_in) ||
                          (666 === n.status && t !== f))
                      )
                        return R(e, 0 === e.avail_out ? -5 : _)
                      if (((n.strm = e), (r = n.last_flush), (n.last_flush = t), n.status === C))
                        if (2 === n.wrap)
                          (e.adler = 0),
                            U(n, 31),
                            U(n, 139),
                            U(n, 8),
                            n.gzhead
                              ? (U(
                                  n,
                                  (n.gzhead.text ? 1 : 0) +
                                    (n.gzhead.hcrc ? 2 : 0) +
                                    (n.gzhead.extra ? 4 : 0) +
                                    (n.gzhead.name ? 8 : 0) +
                                    (n.gzhead.comment ? 16 : 0)
                                ),
                                U(n, 255 & n.gzhead.time),
                                U(n, (n.gzhead.time >> 8) & 255),
                                U(n, (n.gzhead.time >> 16) & 255),
                                U(n, (n.gzhead.time >> 24) & 255),
                                U(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0),
                                U(n, 255 & n.gzhead.os),
                                n.gzhead.extra &&
                                  n.gzhead.extra.length &&
                                  (U(n, 255 & n.gzhead.extra.length),
                                  U(n, (n.gzhead.extra.length >> 8) & 255)),
                                n.gzhead.hcrc &&
                                  (e.adler = p(e.adler, n.pending_buf, n.pending, 0)),
                                (n.gzindex = 0),
                                (n.status = 69))
                              : (U(n, 0),
                                U(n, 0),
                                U(n, 0),
                                U(n, 0),
                                U(n, 0),
                                U(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0),
                                U(n, 3),
                                (n.status = E))
                        else {
                          var a = (v + ((n.w_bits - 8) << 4)) << 8
                          ;(a |=
                            (2 <= n.strategy || n.level < 2
                              ? 0
                              : n.level < 6
                                ? 1
                                : 6 === n.level
                                  ? 2
                                  : 3) << 6),
                            0 !== n.strstart && (a |= 32),
                            (a += 31 - (a % 31)),
                            (n.status = E),
                            P(n, a),
                            0 !== n.strstart && (P(n, e.adler >>> 16), P(n, 65535 & e.adler)),
                            (e.adler = 1)
                        }
                      if (69 === n.status)
                        if (n.gzhead.extra) {
                          for (
                            i = n.pending;
                            n.gzindex < (65535 & n.gzhead.extra.length) &&
                            (n.pending !== n.pending_buf_size ||
                              (n.gzhead.hcrc &&
                                n.pending > i &&
                                (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)),
                              F(e),
                              (i = n.pending),
                              n.pending !== n.pending_buf_size));

                          )
                            U(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++
                          n.gzhead.hcrc &&
                            n.pending > i &&
                            (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)),
                            n.gzindex === n.gzhead.extra.length &&
                              ((n.gzindex = 0), (n.status = 73))
                        } else n.status = 73
                      if (73 === n.status)
                        if (n.gzhead.name) {
                          i = n.pending
                          do {
                            if (
                              n.pending === n.pending_buf_size &&
                              (n.gzhead.hcrc &&
                                n.pending > i &&
                                (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)),
                              F(e),
                              (i = n.pending),
                              n.pending === n.pending_buf_size)
                            ) {
                              s = 1
                              break
                            }
                            ;(s =
                              n.gzindex < n.gzhead.name.length
                                ? 255 & n.gzhead.name.charCodeAt(n.gzindex++)
                                : 0),
                              U(n, s)
                          } while (0 !== s)
                          n.gzhead.hcrc &&
                            n.pending > i &&
                            (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)),
                            0 === s && ((n.gzindex = 0), (n.status = 91))
                        } else n.status = 91
                      if (91 === n.status)
                        if (n.gzhead.comment) {
                          i = n.pending
                          do {
                            if (
                              n.pending === n.pending_buf_size &&
                              (n.gzhead.hcrc &&
                                n.pending > i &&
                                (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)),
                              F(e),
                              (i = n.pending),
                              n.pending === n.pending_buf_size)
                            ) {
                              s = 1
                              break
                            }
                            ;(s =
                              n.gzindex < n.gzhead.comment.length
                                ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++)
                                : 0),
                              U(n, s)
                          } while (0 !== s)
                          n.gzhead.hcrc &&
                            n.pending > i &&
                            (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)),
                            0 === s && (n.status = 103)
                        } else n.status = 103
                      if (
                        (103 === n.status &&
                          (n.gzhead.hcrc
                            ? (n.pending + 2 > n.pending_buf_size && F(e),
                              n.pending + 2 <= n.pending_buf_size &&
                                (U(n, 255 & e.adler),
                                U(n, (e.adler >> 8) & 255),
                                (e.adler = 0),
                                (n.status = E)))
                            : (n.status = E)),
                        0 !== n.pending)
                      ) {
                        if ((F(e), 0 === e.avail_out)) return (n.last_flush = -1), m
                      } else if (0 === e.avail_in && T(t) <= T(r) && t !== f) return R(e, -5)
                      if (666 === n.status && 0 !== e.avail_in) return R(e, -5)
                      if (0 !== e.avail_in || 0 !== n.lookahead || (t !== l && 666 !== n.status)) {
                        var o =
                          2 === n.strategy
                            ? (function (e, t) {
                                for (var r; ; ) {
                                  if (0 === e.lookahead && (j(e), 0 === e.lookahead)) {
                                    if (t === l) return A
                                    break
                                  }
                                  if (
                                    ((e.match_length = 0),
                                    (r = u._tr_tally(e, 0, e.window[e.strstart])),
                                    e.lookahead--,
                                    e.strstart++,
                                    r && (N(e, !1), 0 === e.strm.avail_out))
                                  )
                                    return A
                                }
                                return (
                                  (e.insert = 0),
                                  t === f
                                    ? (N(e, !0), 0 === e.strm.avail_out ? O : B)
                                    : e.last_lit && (N(e, !1), 0 === e.strm.avail_out)
                                      ? A
                                      : I
                                )
                              })(n, t)
                            : 3 === n.strategy
                              ? (function (e, t) {
                                  for (var r, n, i, s, a = e.window; ; ) {
                                    if (e.lookahead <= S) {
                                      if ((j(e), e.lookahead <= S && t === l)) return A
                                      if (0 === e.lookahead) break
                                    }
                                    if (
                                      ((e.match_length = 0),
                                      e.lookahead >= x &&
                                        0 < e.strstart &&
                                        (n = a[(i = e.strstart - 1)]) === a[++i] &&
                                        n === a[++i] &&
                                        n === a[++i])
                                    ) {
                                      s = e.strstart + S
                                      do {} while (
                                        n === a[++i] &&
                                        n === a[++i] &&
                                        n === a[++i] &&
                                        n === a[++i] &&
                                        n === a[++i] &&
                                        n === a[++i] &&
                                        n === a[++i] &&
                                        n === a[++i] &&
                                        i < s
                                      )
                                      ;(e.match_length = S - (s - i)),
                                        e.match_length > e.lookahead &&
                                          (e.match_length = e.lookahead)
                                    }
                                    if (
                                      (e.match_length >= x
                                        ? ((r = u._tr_tally(e, 1, e.match_length - x)),
                                          (e.lookahead -= e.match_length),
                                          (e.strstart += e.match_length),
                                          (e.match_length = 0))
                                        : ((r = u._tr_tally(e, 0, e.window[e.strstart])),
                                          e.lookahead--,
                                          e.strstart++),
                                      r && (N(e, !1), 0 === e.strm.avail_out))
                                    )
                                      return A
                                  }
                                  return (
                                    (e.insert = 0),
                                    t === f
                                      ? (N(e, !0), 0 === e.strm.avail_out ? O : B)
                                      : e.last_lit && (N(e, !1), 0 === e.strm.avail_out)
                                        ? A
                                        : I
                                  )
                                })(n, t)
                              : h[n.level].func(n, t)
                        if (((o !== O && o !== B) || (n.status = 666), o === A || o === O))
                          return 0 === e.avail_out && (n.last_flush = -1), m
                        if (
                          o === I &&
                          (1 === t
                            ? u._tr_align(n)
                            : 5 !== t &&
                              (u._tr_stored_block(n, 0, 0, !1),
                              3 === t &&
                                (D(n.head),
                                0 === n.lookahead &&
                                  ((n.strstart = 0), (n.block_start = 0), (n.insert = 0)))),
                          F(e),
                          0 === e.avail_out)
                        )
                          return (n.last_flush = -1), m
                      }
                      return t !== f
                        ? m
                        : n.wrap <= 0
                          ? 1
                          : (2 === n.wrap
                              ? (U(n, 255 & e.adler),
                                U(n, (e.adler >> 8) & 255),
                                U(n, (e.adler >> 16) & 255),
                                U(n, (e.adler >> 24) & 255),
                                U(n, 255 & e.total_in),
                                U(n, (e.total_in >> 8) & 255),
                                U(n, (e.total_in >> 16) & 255),
                                U(n, (e.total_in >> 24) & 255))
                              : (P(n, e.adler >>> 16), P(n, 65535 & e.adler)),
                            F(e),
                            0 < n.wrap && (n.wrap = -n.wrap),
                            0 !== n.pending ? m : 1)
                    }),
                    (r.deflateEnd = function (e) {
                      var t
                      return e && e.state
                        ? (t = e.state.status) !== C &&
                          69 !== t &&
                          73 !== t &&
                          91 !== t &&
                          103 !== t &&
                          t !== E &&
                          666 !== t
                          ? R(e, _)
                          : ((e.state = null), t === E ? R(e, -3) : m)
                        : _
                    }),
                    (r.deflateSetDictionary = function (e, t) {
                      var r,
                        n,
                        i,
                        s,
                        a,
                        o,
                        h,
                        u,
                        l = t.length
                      if (!e || !e.state) return _
                      if (
                        2 === (s = (r = e.state).wrap) ||
                        (1 === s && r.status !== C) ||
                        r.lookahead
                      )
                        return _
                      for (
                        1 === s && (e.adler = d(e.adler, t, l, 0)),
                          r.wrap = 0,
                          l >= r.w_size &&
                            (0 === s &&
                              (D(r.head), (r.strstart = 0), (r.block_start = 0), (r.insert = 0)),
                            (u = new c.Buf8(r.w_size)),
                            c.arraySet(u, t, l - r.w_size, r.w_size, 0),
                            (t = u),
                            (l = r.w_size)),
                          a = e.avail_in,
                          o = e.next_in,
                          h = e.input,
                          e.avail_in = l,
                          e.next_in = 0,
                          e.input = t,
                          j(r);
                        r.lookahead >= x;

                      ) {
                        for (
                          n = r.strstart, i = r.lookahead - (x - 1);
                          (r.ins_h =
                            ((r.ins_h << r.hash_shift) ^ r.window[n + x - 1]) & r.hash_mask),
                            (r.prev[n & r.w_mask] = r.head[r.ins_h]),
                            (r.head[r.ins_h] = n),
                            n++,
                            --i;

                        );
                        ;(r.strstart = n), (r.lookahead = x - 1), j(r)
                      }
                      return (
                        (r.strstart += r.lookahead),
                        (r.block_start = r.strstart),
                        (r.insert = r.lookahead),
                        (r.lookahead = 0),
                        (r.match_length = r.prev_length = x - 1),
                        (r.match_available = 0),
                        (e.next_in = o),
                        (e.input = h),
                        (e.avail_in = a),
                        (r.wrap = s),
                        m
                      )
                    }),
                    (r.deflateInfo = 'pako deflate (from Nodeca project)')
                },
                {
                  '../utils/common': 41,
                  './adler32': 43,
                  './crc32': 45,
                  './messages': 51,
                  './trees': 52
                }
              ],
              47: [
                function (e, t, r) {
                  'use strict'
                  t.exports = function () {
                    ;(this.text = 0),
                      (this.time = 0),
                      (this.xflags = 0),
                      (this.os = 0),
                      (this.extra = null),
                      (this.extra_len = 0),
                      (this.name = ''),
                      (this.comment = ''),
                      (this.hcrc = 0),
                      (this.done = !1)
                  }
                },
                {}
              ],
              48: [
                function (e, t, r) {
                  'use strict'
                  t.exports = function (e, t) {
                    var r, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C
                    ;(r = e.state),
                      (n = e.next_in),
                      (z = e.input),
                      (i = n + (e.avail_in - 5)),
                      (s = e.next_out),
                      (C = e.output),
                      (a = s - (t - e.avail_out)),
                      (o = s + (e.avail_out - 257)),
                      (h = r.dmax),
                      (u = r.wsize),
                      (l = r.whave),
                      (f = r.wnext),
                      (c = r.window),
                      (d = r.hold),
                      (p = r.bits),
                      (m = r.lencode),
                      (_ = r.distcode),
                      (g = (1 << r.lenbits) - 1),
                      (b = (1 << r.distbits) - 1)
                    e: do {
                      p < 15 && ((d += z[n++] << p), (p += 8), (d += z[n++] << p), (p += 8)),
                        (v = m[d & g])
                      t: for (;;) {
                        if (((d >>>= y = v >>> 24), (p -= y), 0 === (y = (v >>> 16) & 255)))
                          C[s++] = 65535 & v
                        else {
                          if (!(16 & y)) {
                            if (0 == (64 & y)) {
                              v = m[(65535 & v) + (d & ((1 << y) - 1))]
                              continue t
                            }
                            if (32 & y) {
                              r.mode = 12
                              break e
                            }
                            ;(e.msg = 'invalid literal/length code'), (r.mode = 30)
                            break e
                          }
                          ;(w = 65535 & v),
                            (y &= 15) &&
                              (p < y && ((d += z[n++] << p), (p += 8)),
                              (w += d & ((1 << y) - 1)),
                              (d >>>= y),
                              (p -= y)),
                            p < 15 && ((d += z[n++] << p), (p += 8), (d += z[n++] << p), (p += 8)),
                            (v = _[d & b])
                          r: for (;;) {
                            if (((d >>>= y = v >>> 24), (p -= y), !(16 & (y = (v >>> 16) & 255)))) {
                              if (0 == (64 & y)) {
                                v = _[(65535 & v) + (d & ((1 << y) - 1))]
                                continue r
                              }
                              ;(e.msg = 'invalid distance code'), (r.mode = 30)
                              break e
                            }
                            if (
                              ((k = 65535 & v),
                              p < (y &= 15) &&
                                ((d += z[n++] << p),
                                (p += 8) < y && ((d += z[n++] << p), (p += 8))),
                              h < (k += d & ((1 << y) - 1)))
                            ) {
                              ;(e.msg = 'invalid distance too far back'), (r.mode = 30)
                              break e
                            }
                            if (((d >>>= y), (p -= y), (y = s - a) < k)) {
                              if (l < (y = k - y) && r.sane) {
                                ;(e.msg = 'invalid distance too far back'), (r.mode = 30)
                                break e
                              }
                              if (((S = c), (x = 0) === f)) {
                                if (((x += u - y), y < w)) {
                                  for (w -= y; (C[s++] = c[x++]), --y; );
                                  ;(x = s - k), (S = C)
                                }
                              } else if (f < y) {
                                if (((x += u + f - y), (y -= f) < w)) {
                                  for (w -= y; (C[s++] = c[x++]), --y; );
                                  if (((x = 0), f < w)) {
                                    for (w -= y = f; (C[s++] = c[x++]), --y; );
                                    ;(x = s - k), (S = C)
                                  }
                                }
                              } else if (((x += f - y), y < w)) {
                                for (w -= y; (C[s++] = c[x++]), --y; );
                                ;(x = s - k), (S = C)
                              }
                              for (; 2 < w; )
                                (C[s++] = S[x++]), (C[s++] = S[x++]), (C[s++] = S[x++]), (w -= 3)
                              w && ((C[s++] = S[x++]), 1 < w && (C[s++] = S[x++]))
                            } else {
                              for (
                                x = s - k;
                                (C[s++] = C[x++]),
                                  (C[s++] = C[x++]),
                                  (C[s++] = C[x++]),
                                  2 < (w -= 3);

                              );
                              w && ((C[s++] = C[x++]), 1 < w && (C[s++] = C[x++]))
                            }
                            break
                          }
                        }
                        break
                      }
                    } while (n < i && s < o)
                    ;(n -= w = p >> 3),
                      (d &= (1 << (p -= w << 3)) - 1),
                      (e.next_in = n),
                      (e.next_out = s),
                      (e.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
                      (e.avail_out = s < o ? o - s + 257 : 257 - (s - o)),
                      (r.hold = d),
                      (r.bits = p)
                  }
                },
                {}
              ],
              49: [
                function (e, t, r) {
                  'use strict'
                  var I = e('../utils/common'),
                    O = e('./adler32'),
                    B = e('./crc32'),
                    R = e('./inffast'),
                    T = e('./inftrees'),
                    D = 1,
                    F = 2,
                    N = 0,
                    U = -2,
                    P = 1,
                    n = 852,
                    i = 592
                  function L(e) {
                    return (
                      ((e >>> 24) & 255) +
                      ((e >>> 8) & 65280) +
                      ((65280 & e) << 8) +
                      ((255 & e) << 24)
                    )
                  }
                  function s() {
                    ;(this.mode = 0),
                      (this.last = !1),
                      (this.wrap = 0),
                      (this.havedict = !1),
                      (this.flags = 0),
                      (this.dmax = 0),
                      (this.check = 0),
                      (this.total = 0),
                      (this.head = null),
                      (this.wbits = 0),
                      (this.wsize = 0),
                      (this.whave = 0),
                      (this.wnext = 0),
                      (this.window = null),
                      (this.hold = 0),
                      (this.bits = 0),
                      (this.length = 0),
                      (this.offset = 0),
                      (this.extra = 0),
                      (this.lencode = null),
                      (this.distcode = null),
                      (this.lenbits = 0),
                      (this.distbits = 0),
                      (this.ncode = 0),
                      (this.nlen = 0),
                      (this.ndist = 0),
                      (this.have = 0),
                      (this.next = null),
                      (this.lens = new I.Buf16(320)),
                      (this.work = new I.Buf16(288)),
                      (this.lendyn = null),
                      (this.distdyn = null),
                      (this.sane = 0),
                      (this.back = 0),
                      (this.was = 0)
                  }
                  function a(e) {
                    var t
                    return e && e.state
                      ? ((t = e.state),
                        (e.total_in = e.total_out = t.total = 0),
                        (e.msg = ''),
                        t.wrap && (e.adler = 1 & t.wrap),
                        (t.mode = P),
                        (t.last = 0),
                        (t.havedict = 0),
                        (t.dmax = 32768),
                        (t.head = null),
                        (t.hold = 0),
                        (t.bits = 0),
                        (t.lencode = t.lendyn = new I.Buf32(n)),
                        (t.distcode = t.distdyn = new I.Buf32(i)),
                        (t.sane = 1),
                        (t.back = -1),
                        N)
                      : U
                  }
                  function o(e) {
                    var t
                    return e && e.state
                      ? (((t = e.state).wsize = 0), (t.whave = 0), (t.wnext = 0), a(e))
                      : U
                  }
                  function h(e, t) {
                    var r, n
                    return e && e.state
                      ? ((n = e.state),
                        t < 0 ? ((r = 0), (t = -t)) : ((r = 1 + (t >> 4)), t < 48 && (t &= 15)),
                        t && (t < 8 || 15 < t)
                          ? U
                          : (null !== n.window && n.wbits !== t && (n.window = null),
                            (n.wrap = r),
                            (n.wbits = t),
                            o(e)))
                      : U
                  }
                  function u(e, t) {
                    var r, n
                    return e
                      ? ((n = new s()),
                        ((e.state = n).window = null),
                        (r = h(e, t)) !== N && (e.state = null),
                        r)
                      : U
                  }
                  var l,
                    f,
                    c = !0
                  function j(e) {
                    if (c) {
                      var t
                      for (l = new I.Buf32(512), f = new I.Buf32(32), t = 0; t < 144; )
                        e.lens[t++] = 8
                      for (; t < 256; ) e.lens[t++] = 9
                      for (; t < 280; ) e.lens[t++] = 7
                      for (; t < 288; ) e.lens[t++] = 8
                      for (T(D, e.lens, 0, 288, l, 0, e.work, { bits: 9 }), t = 0; t < 32; )
                        e.lens[t++] = 5
                      T(F, e.lens, 0, 32, f, 0, e.work, { bits: 5 }), (c = !1)
                    }
                    ;(e.lencode = l), (e.lenbits = 9), (e.distcode = f), (e.distbits = 5)
                  }
                  function Z(e, t, r, n) {
                    var i,
                      s = e.state
                    return (
                      null === s.window &&
                        ((s.wsize = 1 << s.wbits),
                        (s.wnext = 0),
                        (s.whave = 0),
                        (s.window = new I.Buf8(s.wsize))),
                      n >= s.wsize
                        ? (I.arraySet(s.window, t, r - s.wsize, s.wsize, 0),
                          (s.wnext = 0),
                          (s.whave = s.wsize))
                        : (n < (i = s.wsize - s.wnext) && (i = n),
                          I.arraySet(s.window, t, r - n, i, s.wnext),
                          (n -= i)
                            ? (I.arraySet(s.window, t, r - n, n, 0),
                              (s.wnext = n),
                              (s.whave = s.wsize))
                            : ((s.wnext += i),
                              s.wnext === s.wsize && (s.wnext = 0),
                              s.whave < s.wsize && (s.whave += i))),
                      0
                    )
                  }
                  ;(r.inflateReset = o),
                    (r.inflateReset2 = h),
                    (r.inflateResetKeep = a),
                    (r.inflateInit = function (e) {
                      return u(e, 15)
                    }),
                    (r.inflateInit2 = u),
                    (r.inflate = function (e, t) {
                      var r,
                        n,
                        i,
                        s,
                        a,
                        o,
                        h,
                        u,
                        l,
                        f,
                        c,
                        d,
                        p,
                        m,
                        _,
                        g,
                        b,
                        v,
                        y,
                        w,
                        k,
                        x,
                        S,
                        z,
                        C = 0,
                        E = new I.Buf8(4),
                        A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
                      if (!e || !e.state || !e.output || (!e.input && 0 !== e.avail_in)) return U
                      12 === (r = e.state).mode && (r.mode = 13),
                        (a = e.next_out),
                        (i = e.output),
                        (h = e.avail_out),
                        (s = e.next_in),
                        (n = e.input),
                        (o = e.avail_in),
                        (u = r.hold),
                        (l = r.bits),
                        (f = o),
                        (c = h),
                        (x = N)
                      e: for (;;)
                        switch (r.mode) {
                          case P:
                            if (0 === r.wrap) {
                              r.mode = 13
                              break
                            }
                            for (; l < 16; ) {
                              if (0 === o) break e
                              o--, (u += n[s++] << l), (l += 8)
                            }
                            if (2 & r.wrap && 35615 === u) {
                              ;(E[(r.check = 0)] = 255 & u),
                                (E[1] = (u >>> 8) & 255),
                                (r.check = B(r.check, E, 2, 0)),
                                (l = u = 0),
                                (r.mode = 2)
                              break
                            }
                            if (
                              ((r.flags = 0),
                              r.head && (r.head.done = !1),
                              !(1 & r.wrap) || (((255 & u) << 8) + (u >> 8)) % 31)
                            ) {
                              ;(e.msg = 'incorrect header check'), (r.mode = 30)
                              break
                            }
                            if (8 != (15 & u)) {
                              ;(e.msg = 'unknown compression method'), (r.mode = 30)
                              break
                            }
                            if (((l -= 4), (k = 8 + (15 & (u >>>= 4))), 0 === r.wbits)) r.wbits = k
                            else if (k > r.wbits) {
                              ;(e.msg = 'invalid window size'), (r.mode = 30)
                              break
                            }
                            ;(r.dmax = 1 << k),
                              (e.adler = r.check = 1),
                              (r.mode = 512 & u ? 10 : 12),
                              (l = u = 0)
                            break
                          case 2:
                            for (; l < 16; ) {
                              if (0 === o) break e
                              o--, (u += n[s++] << l), (l += 8)
                            }
                            if (((r.flags = u), 8 != (255 & r.flags))) {
                              ;(e.msg = 'unknown compression method'), (r.mode = 30)
                              break
                            }
                            if (57344 & r.flags) {
                              ;(e.msg = 'unknown header flags set'), (r.mode = 30)
                              break
                            }
                            r.head && (r.head.text = (u >> 8) & 1),
                              512 & r.flags &&
                                ((E[0] = 255 & u),
                                (E[1] = (u >>> 8) & 255),
                                (r.check = B(r.check, E, 2, 0))),
                              (l = u = 0),
                              (r.mode = 3)
                          case 3:
                            for (; l < 32; ) {
                              if (0 === o) break e
                              o--, (u += n[s++] << l), (l += 8)
                            }
                            r.head && (r.head.time = u),
                              512 & r.flags &&
                                ((E[0] = 255 & u),
                                (E[1] = (u >>> 8) & 255),
                                (E[2] = (u >>> 16) & 255),
                                (E[3] = (u >>> 24) & 255),
                                (r.check = B(r.check, E, 4, 0))),
                              (l = u = 0),
                              (r.mode = 4)
                          case 4:
                            for (; l < 16; ) {
                              if (0 === o) break e
                              o--, (u += n[s++] << l), (l += 8)
                            }
                            r.head && ((r.head.xflags = 255 & u), (r.head.os = u >> 8)),
                              512 & r.flags &&
                                ((E[0] = 255 & u),
                                (E[1] = (u >>> 8) & 255),
                                (r.check = B(r.check, E, 2, 0))),
                              (l = u = 0),
                              (r.mode = 5)
                          case 5:
                            if (1024 & r.flags) {
                              for (; l < 16; ) {
                                if (0 === o) break e
                                o--, (u += n[s++] << l), (l += 8)
                              }
                              ;(r.length = u),
                                r.head && (r.head.extra_len = u),
                                512 & r.flags &&
                                  ((E[0] = 255 & u),
                                  (E[1] = (u >>> 8) & 255),
                                  (r.check = B(r.check, E, 2, 0))),
                                (l = u = 0)
                            } else r.head && (r.head.extra = null)
                            r.mode = 6
                          case 6:
                            if (
                              1024 & r.flags &&
                              (o < (d = r.length) && (d = o),
                              d &&
                                (r.head &&
                                  ((k = r.head.extra_len - r.length),
                                  r.head.extra || (r.head.extra = new Array(r.head.extra_len)),
                                  I.arraySet(r.head.extra, n, s, d, k)),
                                512 & r.flags && (r.check = B(r.check, n, d, s)),
                                (o -= d),
                                (s += d),
                                (r.length -= d)),
                              r.length)
                            )
                              break e
                            ;(r.length = 0), (r.mode = 7)
                          case 7:
                            if (2048 & r.flags) {
                              if (0 === o) break e
                              for (
                                d = 0;
                                (k = n[s + d++]),
                                  r.head &&
                                    k &&
                                    r.length < 65536 &&
                                    (r.head.name += String.fromCharCode(k)),
                                  k && d < o;

                              );
                              if (
                                (512 & r.flags && (r.check = B(r.check, n, d, s)),
                                (o -= d),
                                (s += d),
                                k)
                              )
                                break e
                            } else r.head && (r.head.name = null)
                            ;(r.length = 0), (r.mode = 8)
                          case 8:
                            if (4096 & r.flags) {
                              if (0 === o) break e
                              for (
                                d = 0;
                                (k = n[s + d++]),
                                  r.head &&
                                    k &&
                                    r.length < 65536 &&
                                    (r.head.comment += String.fromCharCode(k)),
                                  k && d < o;

                              );
                              if (
                                (512 & r.flags && (r.check = B(r.check, n, d, s)),
                                (o -= d),
                                (s += d),
                                k)
                              )
                                break e
                            } else r.head && (r.head.comment = null)
                            r.mode = 9
                          case 9:
                            if (512 & r.flags) {
                              for (; l < 16; ) {
                                if (0 === o) break e
                                o--, (u += n[s++] << l), (l += 8)
                              }
                              if (u !== (65535 & r.check)) {
                                ;(e.msg = 'header crc mismatch'), (r.mode = 30)
                                break
                              }
                              l = u = 0
                            }
                            r.head && ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)),
                              (e.adler = r.check = 0),
                              (r.mode = 12)
                            break
                          case 10:
                            for (; l < 32; ) {
                              if (0 === o) break e
                              o--, (u += n[s++] << l), (l += 8)
                            }
                            ;(e.adler = r.check = L(u)), (l = u = 0), (r.mode = 11)
                          case 11:
                            if (0 === r.havedict)
                              return (
                                (e.next_out = a),
                                (e.avail_out = h),
                                (e.next_in = s),
                                (e.avail_in = o),
                                (r.hold = u),
                                (r.bits = l),
                                2
                              )
                            ;(e.adler = r.check = 1), (r.mode = 12)
                          case 12:
                            if (5 === t || 6 === t) break e
                          case 13:
                            if (r.last) {
                              ;(u >>>= 7 & l), (l -= 7 & l), (r.mode = 27)
                              break
                            }
                            for (; l < 3; ) {
                              if (0 === o) break e
                              o--, (u += n[s++] << l), (l += 8)
                            }
                            switch (((r.last = 1 & u), (l -= 1), 3 & (u >>>= 1))) {
                              case 0:
                                r.mode = 14
                                break
                              case 1:
                                if ((j(r), (r.mode = 20), 6 !== t)) break
                                ;(u >>>= 2), (l -= 2)
                                break e
                              case 2:
                                r.mode = 17
                                break
                              case 3:
                                ;(e.msg = 'invalid block type'), (r.mode = 30)
                            }
                            ;(u >>>= 2), (l -= 2)
                            break
                          case 14:
                            for (u >>>= 7 & l, l -= 7 & l; l < 32; ) {
                              if (0 === o) break e
                              o--, (u += n[s++] << l), (l += 8)
                            }
                            if ((65535 & u) != ((u >>> 16) ^ 65535)) {
                              ;(e.msg = 'invalid stored block lengths'), (r.mode = 30)
                              break
                            }
                            if (((r.length = 65535 & u), (l = u = 0), (r.mode = 15), 6 === t))
                              break e
                          case 15:
                            r.mode = 16
                          case 16:
                            if ((d = r.length)) {
                              if ((o < d && (d = o), h < d && (d = h), 0 === d)) break e
                              I.arraySet(i, n, s, d, a),
                                (o -= d),
                                (s += d),
                                (h -= d),
                                (a += d),
                                (r.length -= d)
                              break
                            }
                            r.mode = 12
                            break
                          case 17:
                            for (; l < 14; ) {
                              if (0 === o) break e
                              o--, (u += n[s++] << l), (l += 8)
                            }
                            if (
                              ((r.nlen = 257 + (31 & u)),
                              (u >>>= 5),
                              (l -= 5),
                              (r.ndist = 1 + (31 & u)),
                              (u >>>= 5),
                              (l -= 5),
                              (r.ncode = 4 + (15 & u)),
                              (u >>>= 4),
                              (l -= 4),
                              286 < r.nlen || 30 < r.ndist)
                            ) {
                              ;(e.msg = 'too many length or distance symbols'), (r.mode = 30)
                              break
                            }
                            ;(r.have = 0), (r.mode = 18)
                          case 18:
                            for (; r.have < r.ncode; ) {
                              for (; l < 3; ) {
                                if (0 === o) break e
                                o--, (u += n[s++] << l), (l += 8)
                              }
                              ;(r.lens[A[r.have++]] = 7 & u), (u >>>= 3), (l -= 3)
                            }
                            for (; r.have < 19; ) r.lens[A[r.have++]] = 0
                            if (
                              ((r.lencode = r.lendyn),
                              (r.lenbits = 7),
                              (S = { bits: r.lenbits }),
                              (x = T(0, r.lens, 0, 19, r.lencode, 0, r.work, S)),
                              (r.lenbits = S.bits),
                              x)
                            ) {
                              ;(e.msg = 'invalid code lengths set'), (r.mode = 30)
                              break
                            }
                            ;(r.have = 0), (r.mode = 19)
                          case 19:
                            for (; r.have < r.nlen + r.ndist; ) {
                              for (
                                ;
                                (g = ((C = r.lencode[u & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                                  (b = 65535 & C),
                                  !((_ = C >>> 24) <= l);

                              ) {
                                if (0 === o) break e
                                o--, (u += n[s++] << l), (l += 8)
                              }
                              if (b < 16) (u >>>= _), (l -= _), (r.lens[r.have++] = b)
                              else {
                                if (16 === b) {
                                  for (z = _ + 2; l < z; ) {
                                    if (0 === o) break e
                                    o--, (u += n[s++] << l), (l += 8)
                                  }
                                  if (((u >>>= _), (l -= _), 0 === r.have)) {
                                    ;(e.msg = 'invalid bit length repeat'), (r.mode = 30)
                                    break
                                  }
                                  ;(k = r.lens[r.have - 1]), (d = 3 + (3 & u)), (u >>>= 2), (l -= 2)
                                } else if (17 === b) {
                                  for (z = _ + 3; l < z; ) {
                                    if (0 === o) break e
                                    o--, (u += n[s++] << l), (l += 8)
                                  }
                                  ;(l -= _),
                                    (k = 0),
                                    (d = 3 + (7 & (u >>>= _))),
                                    (u >>>= 3),
                                    (l -= 3)
                                } else {
                                  for (z = _ + 7; l < z; ) {
                                    if (0 === o) break e
                                    o--, (u += n[s++] << l), (l += 8)
                                  }
                                  ;(l -= _),
                                    (k = 0),
                                    (d = 11 + (127 & (u >>>= _))),
                                    (u >>>= 7),
                                    (l -= 7)
                                }
                                if (r.have + d > r.nlen + r.ndist) {
                                  ;(e.msg = 'invalid bit length repeat'), (r.mode = 30)
                                  break
                                }
                                for (; d--; ) r.lens[r.have++] = k
                              }
                            }
                            if (30 === r.mode) break
                            if (0 === r.lens[256]) {
                              ;(e.msg = 'invalid code -- missing end-of-block'), (r.mode = 30)
                              break
                            }
                            if (
                              ((r.lenbits = 9),
                              (S = { bits: r.lenbits }),
                              (x = T(D, r.lens, 0, r.nlen, r.lencode, 0, r.work, S)),
                              (r.lenbits = S.bits),
                              x)
                            ) {
                              ;(e.msg = 'invalid literal/lengths set'), (r.mode = 30)
                              break
                            }
                            if (
                              ((r.distbits = 6),
                              (r.distcode = r.distdyn),
                              (S = { bits: r.distbits }),
                              (x = T(F, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, S)),
                              (r.distbits = S.bits),
                              x)
                            ) {
                              ;(e.msg = 'invalid distances set'), (r.mode = 30)
                              break
                            }
                            if (((r.mode = 20), 6 === t)) break e
                          case 20:
                            r.mode = 21
                          case 21:
                            if (6 <= o && 258 <= h) {
                              ;(e.next_out = a),
                                (e.avail_out = h),
                                (e.next_in = s),
                                (e.avail_in = o),
                                (r.hold = u),
                                (r.bits = l),
                                R(e, c),
                                (a = e.next_out),
                                (i = e.output),
                                (h = e.avail_out),
                                (s = e.next_in),
                                (n = e.input),
                                (o = e.avail_in),
                                (u = r.hold),
                                (l = r.bits),
                                12 === r.mode && (r.back = -1)
                              break
                            }
                            for (
                              r.back = 0;
                              (g = ((C = r.lencode[u & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                                (b = 65535 & C),
                                !((_ = C >>> 24) <= l);

                            ) {
                              if (0 === o) break e
                              o--, (u += n[s++] << l), (l += 8)
                            }
                            if (g && 0 == (240 & g)) {
                              for (
                                v = _, y = g, w = b;
                                (g =
                                  ((C = r.lencode[w + ((u & ((1 << (v + y)) - 1)) >> v)]) >>> 16) &
                                  255),
                                  (b = 65535 & C),
                                  !(v + (_ = C >>> 24) <= l);

                              ) {
                                if (0 === o) break e
                                o--, (u += n[s++] << l), (l += 8)
                              }
                              ;(u >>>= v), (l -= v), (r.back += v)
                            }
                            if (((u >>>= _), (l -= _), (r.back += _), (r.length = b), 0 === g)) {
                              r.mode = 26
                              break
                            }
                            if (32 & g) {
                              ;(r.back = -1), (r.mode = 12)
                              break
                            }
                            if (64 & g) {
                              ;(e.msg = 'invalid literal/length code'), (r.mode = 30)
                              break
                            }
                            ;(r.extra = 15 & g), (r.mode = 22)
                          case 22:
                            if (r.extra) {
                              for (z = r.extra; l < z; ) {
                                if (0 === o) break e
                                o--, (u += n[s++] << l), (l += 8)
                              }
                              ;(r.length += u & ((1 << r.extra) - 1)),
                                (u >>>= r.extra),
                                (l -= r.extra),
                                (r.back += r.extra)
                            }
                            ;(r.was = r.length), (r.mode = 23)
                          case 23:
                            for (
                              ;
                              (g = ((C = r.distcode[u & ((1 << r.distbits) - 1)]) >>> 16) & 255),
                                (b = 65535 & C),
                                !((_ = C >>> 24) <= l);

                            ) {
                              if (0 === o) break e
                              o--, (u += n[s++] << l), (l += 8)
                            }
                            if (0 == (240 & g)) {
                              for (
                                v = _, y = g, w = b;
                                (g =
                                  ((C = r.distcode[w + ((u & ((1 << (v + y)) - 1)) >> v)]) >>> 16) &
                                  255),
                                  (b = 65535 & C),
                                  !(v + (_ = C >>> 24) <= l);

                              ) {
                                if (0 === o) break e
                                o--, (u += n[s++] << l), (l += 8)
                              }
                              ;(u >>>= v), (l -= v), (r.back += v)
                            }
                            if (((u >>>= _), (l -= _), (r.back += _), 64 & g)) {
                              ;(e.msg = 'invalid distance code'), (r.mode = 30)
                              break
                            }
                            ;(r.offset = b), (r.extra = 15 & g), (r.mode = 24)
                          case 24:
                            if (r.extra) {
                              for (z = r.extra; l < z; ) {
                                if (0 === o) break e
                                o--, (u += n[s++] << l), (l += 8)
                              }
                              ;(r.offset += u & ((1 << r.extra) - 1)),
                                (u >>>= r.extra),
                                (l -= r.extra),
                                (r.back += r.extra)
                            }
                            if (r.offset > r.dmax) {
                              ;(e.msg = 'invalid distance too far back'), (r.mode = 30)
                              break
                            }
                            r.mode = 25
                          case 25:
                            if (0 === h) break e
                            if (((d = c - h), r.offset > d)) {
                              if ((d = r.offset - d) > r.whave && r.sane) {
                                ;(e.msg = 'invalid distance too far back'), (r.mode = 30)
                                break
                              }
                              ;(p = d > r.wnext ? ((d -= r.wnext), r.wsize - d) : r.wnext - d),
                                d > r.length && (d = r.length),
                                (m = r.window)
                            } else (m = i), (p = a - r.offset), (d = r.length)
                            for (h < d && (d = h), h -= d, r.length -= d; (i[a++] = m[p++]), --d; );
                            0 === r.length && (r.mode = 21)
                            break
                          case 26:
                            if (0 === h) break e
                            ;(i[a++] = r.length), h--, (r.mode = 21)
                            break
                          case 27:
                            if (r.wrap) {
                              for (; l < 32; ) {
                                if (0 === o) break e
                                o--, (u |= n[s++] << l), (l += 8)
                              }
                              if (
                                ((c -= h),
                                (e.total_out += c),
                                (r.total += c),
                                c &&
                                  (e.adler = r.check =
                                    r.flags ? B(r.check, i, c, a - c) : O(r.check, i, c, a - c)),
                                (c = h),
                                (r.flags ? u : L(u)) !== r.check)
                              ) {
                                ;(e.msg = 'incorrect data check'), (r.mode = 30)
                                break
                              }
                              l = u = 0
                            }
                            r.mode = 28
                          case 28:
                            if (r.wrap && r.flags) {
                              for (; l < 32; ) {
                                if (0 === o) break e
                                o--, (u += n[s++] << l), (l += 8)
                              }
                              if (u !== (4294967295 & r.total)) {
                                ;(e.msg = 'incorrect length check'), (r.mode = 30)
                                break
                              }
                              l = u = 0
                            }
                            r.mode = 29
                          case 29:
                            x = 1
                            break e
                          case 30:
                            x = -3
                            break e
                          case 31:
                            return -4
                          case 32:
                          default:
                            return U
                        }
                      return (
                        (e.next_out = a),
                        (e.avail_out = h),
                        (e.next_in = s),
                        (e.avail_in = o),
                        (r.hold = u),
                        (r.bits = l),
                        (r.wsize ||
                          (c !== e.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== t))) &&
                        Z(e, e.output, e.next_out, c - e.avail_out)
                          ? ((r.mode = 31), -4)
                          : ((f -= e.avail_in),
                            (c -= e.avail_out),
                            (e.total_in += f),
                            (e.total_out += c),
                            (r.total += c),
                            r.wrap &&
                              c &&
                              (e.adler = r.check =
                                r.flags
                                  ? B(r.check, i, c, e.next_out - c)
                                  : O(r.check, i, c, e.next_out - c)),
                            (e.data_type =
                              r.bits +
                              (r.last ? 64 : 0) +
                              (12 === r.mode ? 128 : 0) +
                              (20 === r.mode || 15 === r.mode ? 256 : 0)),
                            ((0 == f && 0 === c) || 4 === t) && x === N && (x = -5),
                            x)
                      )
                    }),
                    (r.inflateEnd = function (e) {
                      if (!e || !e.state) return U
                      var t = e.state
                      return t.window && (t.window = null), (e.state = null), N
                    }),
                    (r.inflateGetHeader = function (e, t) {
                      var r
                      return e && e.state
                        ? 0 == (2 & (r = e.state).wrap)
                          ? U
                          : (((r.head = t).done = !1), N)
                        : U
                    }),
                    (r.inflateSetDictionary = function (e, t) {
                      var r,
                        n = t.length
                      return e && e.state
                        ? 0 !== (r = e.state).wrap && 11 !== r.mode
                          ? U
                          : 11 === r.mode && O(1, t, n, 0) !== r.check
                            ? -3
                            : Z(e, t, n, n)
                              ? ((r.mode = 31), -4)
                              : ((r.havedict = 1), N)
                        : U
                    }),
                    (r.inflateInfo = 'pako inflate (from Nodeca project)')
                },
                {
                  '../utils/common': 41,
                  './adler32': 43,
                  './crc32': 45,
                  './inffast': 48,
                  './inftrees': 50
                }
              ],
              50: [
                function (e, t, r) {
                  'use strict'
                  var D = e('../utils/common'),
                    F = [
                      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67,
                      83, 99, 115, 131, 163, 195, 227, 258, 0, 0
                    ],
                    N = [
                      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19,
                      19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
                    ],
                    U = [
                      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769,
                      1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0
                    ],
                    P = [
                      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24,
                      24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64
                    ]
                  t.exports = function (e, t, r, n, i, s, a, o) {
                    var h,
                      u,
                      l,
                      f,
                      c,
                      d,
                      p,
                      m,
                      _,
                      g = o.bits,
                      b = 0,
                      v = 0,
                      y = 0,
                      w = 0,
                      k = 0,
                      x = 0,
                      S = 0,
                      z = 0,
                      C = 0,
                      E = 0,
                      A = null,
                      I = 0,
                      O = new D.Buf16(16),
                      B = new D.Buf16(16),
                      R = null,
                      T = 0
                    for (b = 0; b <= 15; b++) O[b] = 0
                    for (v = 0; v < n; v++) O[t[r + v]]++
                    for (k = g, w = 15; 1 <= w && 0 === O[w]; w--);
                    if ((w < k && (k = w), 0 === w))
                      return (i[s++] = 20971520), (i[s++] = 20971520), (o.bits = 1), 0
                    for (y = 1; y < w && 0 === O[y]; y++);
                    for (k < y && (k = y), b = z = 1; b <= 15; b++)
                      if (((z <<= 1), (z -= O[b]) < 0)) return -1
                    if (0 < z && (0 === e || 1 !== w)) return -1
                    for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b]
                    for (v = 0; v < n; v++) 0 !== t[r + v] && (a[B[t[r + v]]++] = v)
                    if (
                      ((d =
                        0 === e
                          ? ((A = R = a), 19)
                          : 1 === e
                            ? ((A = F), (I -= 257), (R = N), (T -= 257), 256)
                            : ((A = U), (R = P), -1)),
                      (b = y),
                      (c = s),
                      (S = v = E = 0),
                      (l = -1),
                      (f = (C = 1 << (x = k)) - 1),
                      (1 === e && 852 < C) || (2 === e && 592 < C))
                    )
                      return 1
                    for (;;) {
                      for (
                        p = b - S,
                          _ =
                            a[v] < d
                              ? ((m = 0), a[v])
                              : a[v] > d
                                ? ((m = R[T + a[v]]), A[I + a[v]])
                                : ((m = 96), 0),
                          h = 1 << (b - S),
                          y = u = 1 << x;
                        (i[c + (E >> S) + (u -= h)] = (p << 24) | (m << 16) | _ | 0), 0 !== u;

                      );
                      for (h = 1 << (b - 1); E & h; ) h >>= 1
                      if ((0 !== h ? ((E &= h - 1), (E += h)) : (E = 0), v++, 0 == --O[b])) {
                        if (b === w) break
                        b = t[r + a[v]]
                      }
                      if (k < b && (E & f) !== l) {
                        for (
                          0 === S && (S = k), c += y, z = 1 << (x = b - S);
                          x + S < w && !((z -= O[x + S]) <= 0);

                        )
                          x++, (z <<= 1)
                        if (((C += 1 << x), (1 === e && 852 < C) || (2 === e && 592 < C))) return 1
                        i[(l = E & f)] = (k << 24) | (x << 16) | (c - s) | 0
                      }
                    }
                    return 0 !== E && (i[c + E] = ((b - S) << 24) | (64 << 16) | 0), (o.bits = k), 0
                  }
                },
                { '../utils/common': 41 }
              ],
              51: [
                function (e, t, r) {
                  'use strict'
                  t.exports = {
                    2: 'need dictionary',
                    1: 'stream end',
                    0: '',
                    '-1': 'file error',
                    '-2': 'stream error',
                    '-3': 'data error',
                    '-4': 'insufficient memory',
                    '-5': 'buffer error',
                    '-6': 'incompatible version'
                  }
                },
                {}
              ],
              52: [
                function (e, t, r) {
                  'use strict'
                  var i = e('../utils/common'),
                    o = 0,
                    h = 1
                  function n(e) {
                    for (var t = e.length; 0 <= --t; ) e[t] = 0
                  }
                  var s = 0,
                    a = 29,
                    u = 256,
                    l = u + 1 + a,
                    f = 30,
                    c = 19,
                    _ = 2 * l + 1,
                    g = 15,
                    d = 16,
                    p = 7,
                    m = 256,
                    b = 16,
                    v = 17,
                    y = 18,
                    w = [
                      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5,
                      5, 5, 0
                    ],
                    k = [
                      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11,
                      11, 12, 12, 13, 13
                    ],
                    x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                    S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                    z = new Array(2 * (l + 2))
                  n(z)
                  var C = new Array(2 * f)
                  n(C)
                  var E = new Array(512)
                  n(E)
                  var A = new Array(256)
                  n(A)
                  var I = new Array(a)
                  n(I)
                  var O,
                    B,
                    R,
                    T = new Array(f)
                  function D(e, t, r, n, i) {
                    ;(this.static_tree = e),
                      (this.extra_bits = t),
                      (this.extra_base = r),
                      (this.elems = n),
                      (this.max_length = i),
                      (this.has_stree = e && e.length)
                  }
                  function F(e, t) {
                    ;(this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t)
                  }
                  function N(e) {
                    return e < 256 ? E[e] : E[256 + (e >>> 7)]
                  }
                  function U(e, t) {
                    ;(e.pending_buf[e.pending++] = 255 & t),
                      (e.pending_buf[e.pending++] = (t >>> 8) & 255)
                  }
                  function P(e, t, r) {
                    e.bi_valid > d - r
                      ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
                        U(e, e.bi_buf),
                        (e.bi_buf = t >> (d - e.bi_valid)),
                        (e.bi_valid += r - d))
                      : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += r))
                  }
                  function L(e, t, r) {
                    P(e, r[2 * t], r[2 * t + 1])
                  }
                  function j(e, t) {
                    for (var r = 0; (r |= 1 & e), (e >>>= 1), (r <<= 1), 0 < --t; );
                    return r >>> 1
                  }
                  function Z(e, t, r) {
                    var n,
                      i,
                      s = new Array(g + 1),
                      a = 0
                    for (n = 1; n <= g; n++) s[n] = a = (a + r[n - 1]) << 1
                    for (i = 0; i <= t; i++) {
                      var o = e[2 * i + 1]
                      0 !== o && (e[2 * i] = j(s[o]++, o))
                    }
                  }
                  function W(e) {
                    var t
                    for (t = 0; t < l; t++) e.dyn_ltree[2 * t] = 0
                    for (t = 0; t < f; t++) e.dyn_dtree[2 * t] = 0
                    for (t = 0; t < c; t++) e.bl_tree[2 * t] = 0
                    ;(e.dyn_ltree[2 * m] = 1),
                      (e.opt_len = e.static_len = 0),
                      (e.last_lit = e.matches = 0)
                  }
                  function M(e) {
                    8 < e.bi_valid
                      ? U(e, e.bi_buf)
                      : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf),
                      (e.bi_buf = 0),
                      (e.bi_valid = 0)
                  }
                  function H(e, t, r, n) {
                    var i = 2 * t,
                      s = 2 * r
                    return e[i] < e[s] || (e[i] === e[s] && n[t] <= n[r])
                  }
                  function G(e, t, r) {
                    for (
                      var n = e.heap[r], i = r << 1;
                      i <= e.heap_len &&
                      (i < e.heap_len && H(t, e.heap[i + 1], e.heap[i], e.depth) && i++,
                      !H(t, n, e.heap[i], e.depth));

                    )
                      (e.heap[r] = e.heap[i]), (r = i), (i <<= 1)
                    e.heap[r] = n
                  }
                  function K(e, t, r) {
                    var n,
                      i,
                      s,
                      a,
                      o = 0
                    if (0 !== e.last_lit)
                      for (
                        ;
                        (n =
                          (e.pending_buf[e.d_buf + 2 * o] << 8) |
                          e.pending_buf[e.d_buf + 2 * o + 1]),
                          (i = e.pending_buf[e.l_buf + o]),
                          o++,
                          0 === n
                            ? L(e, i, t)
                            : (L(e, (s = A[i]) + u + 1, t),
                              0 !== (a = w[s]) && P(e, (i -= I[s]), a),
                              L(e, (s = N(--n)), r),
                              0 !== (a = k[s]) && P(e, (n -= T[s]), a)),
                          o < e.last_lit;

                      );
                    L(e, m, t)
                  }
                  function Y(e, t) {
                    var r,
                      n,
                      i,
                      s = t.dyn_tree,
                      a = t.stat_desc.static_tree,
                      o = t.stat_desc.has_stree,
                      h = t.stat_desc.elems,
                      u = -1
                    for (e.heap_len = 0, e.heap_max = _, r = 0; r < h; r++)
                      0 !== s[2 * r]
                        ? ((e.heap[++e.heap_len] = u = r), (e.depth[r] = 0))
                        : (s[2 * r + 1] = 0)
                    for (; e.heap_len < 2; )
                      (s[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1),
                        (e.depth[i] = 0),
                        e.opt_len--,
                        o && (e.static_len -= a[2 * i + 1])
                    for (t.max_code = u, r = e.heap_len >> 1; 1 <= r; r--) G(e, s, r)
                    for (
                      i = h;
                      (r = e.heap[1]),
                        (e.heap[1] = e.heap[e.heap_len--]),
                        G(e, s, 1),
                        (n = e.heap[1]),
                        (e.heap[--e.heap_max] = r),
                        (e.heap[--e.heap_max] = n),
                        (s[2 * i] = s[2 * r] + s[2 * n]),
                        (e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1),
                        (s[2 * r + 1] = s[2 * n + 1] = i),
                        (e.heap[1] = i++),
                        G(e, s, 1),
                        2 <= e.heap_len;

                    );
                    ;(e.heap[--e.heap_max] = e.heap[1]),
                      (function (e, t) {
                        var r,
                          n,
                          i,
                          s,
                          a,
                          o,
                          h = t.dyn_tree,
                          u = t.max_code,
                          l = t.stat_desc.static_tree,
                          f = t.stat_desc.has_stree,
                          c = t.stat_desc.extra_bits,
                          d = t.stat_desc.extra_base,
                          p = t.stat_desc.max_length,
                          m = 0
                        for (s = 0; s <= g; s++) e.bl_count[s] = 0
                        for (h[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < _; r++)
                          p < (s = h[2 * h[2 * (n = e.heap[r]) + 1] + 1] + 1) && ((s = p), m++),
                            (h[2 * n + 1] = s),
                            u < n ||
                              (e.bl_count[s]++,
                              (a = 0),
                              d <= n && (a = c[n - d]),
                              (o = h[2 * n]),
                              (e.opt_len += o * (s + a)),
                              f && (e.static_len += o * (l[2 * n + 1] + a)))
                        if (0 !== m) {
                          do {
                            for (s = p - 1; 0 === e.bl_count[s]; ) s--
                            e.bl_count[s]--, (e.bl_count[s + 1] += 2), e.bl_count[p]--, (m -= 2)
                          } while (0 < m)
                          for (s = p; 0 !== s; s--)
                            for (n = e.bl_count[s]; 0 !== n; )
                              u < (i = e.heap[--r]) ||
                                (h[2 * i + 1] !== s &&
                                  ((e.opt_len += (s - h[2 * i + 1]) * h[2 * i]),
                                  (h[2 * i + 1] = s)),
                                n--)
                        }
                      })(e, t),
                      Z(s, u, e.bl_count)
                  }
                  function X(e, t, r) {
                    var n,
                      i,
                      s = -1,
                      a = t[1],
                      o = 0,
                      h = 7,
                      u = 4
                    for (
                      0 === a && ((h = 138), (u = 3)), t[2 * (r + 1) + 1] = 65535, n = 0;
                      n <= r;
                      n++
                    )
                      (i = a),
                        (a = t[2 * (n + 1) + 1]),
                        (++o < h && i === a) ||
                          (o < u
                            ? (e.bl_tree[2 * i] += o)
                            : 0 !== i
                              ? (i !== s && e.bl_tree[2 * i]++, e.bl_tree[2 * b]++)
                              : o <= 10
                                ? e.bl_tree[2 * v]++
                                : e.bl_tree[2 * y]++,
                          (s = i),
                          (u =
                            (o = 0) === a ? ((h = 138), 3) : i === a ? ((h = 6), 3) : ((h = 7), 4)))
                  }
                  function V(e, t, r) {
                    var n,
                      i,
                      s = -1,
                      a = t[1],
                      o = 0,
                      h = 7,
                      u = 4
                    for (0 === a && ((h = 138), (u = 3)), n = 0; n <= r; n++)
                      if (((i = a), (a = t[2 * (n + 1) + 1]), !(++o < h && i === a))) {
                        if (o < u) for (; L(e, i, e.bl_tree), 0 != --o; );
                        else
                          0 !== i
                            ? (i !== s && (L(e, i, e.bl_tree), o--),
                              L(e, b, e.bl_tree),
                              P(e, o - 3, 2))
                            : o <= 10
                              ? (L(e, v, e.bl_tree), P(e, o - 3, 3))
                              : (L(e, y, e.bl_tree), P(e, o - 11, 7))
                        ;(s = i),
                          (u =
                            (o = 0) === a ? ((h = 138), 3) : i === a ? ((h = 6), 3) : ((h = 7), 4))
                      }
                  }
                  n(T)
                  var q = !1
                  function J(e, t, r, n) {
                    P(e, (s << 1) + (n ? 1 : 0), 3),
                      (function (e, t, r, n) {
                        M(e),
                          n && (U(e, r), U(e, ~r)),
                          i.arraySet(e.pending_buf, e.window, t, r, e.pending),
                          (e.pending += r)
                      })(e, t, r, !0)
                  }
                  ;(r._tr_init = function (e) {
                    q ||
                      ((function () {
                        var e,
                          t,
                          r,
                          n,
                          i,
                          s = new Array(g + 1)
                        for (n = r = 0; n < a - 1; n++)
                          for (I[n] = r, e = 0; e < 1 << w[n]; e++) A[r++] = n
                        for (A[r - 1] = n, n = i = 0; n < 16; n++)
                          for (T[n] = i, e = 0; e < 1 << k[n]; e++) E[i++] = n
                        for (i >>= 7; n < f; n++)
                          for (T[n] = i << 7, e = 0; e < 1 << (k[n] - 7); e++) E[256 + i++] = n
                        for (t = 0; t <= g; t++) s[t] = 0
                        for (e = 0; e <= 143; ) (z[2 * e + 1] = 8), e++, s[8]++
                        for (; e <= 255; ) (z[2 * e + 1] = 9), e++, s[9]++
                        for (; e <= 279; ) (z[2 * e + 1] = 7), e++, s[7]++
                        for (; e <= 287; ) (z[2 * e + 1] = 8), e++, s[8]++
                        for (Z(z, l + 1, s), e = 0; e < f; e++)
                          (C[2 * e + 1] = 5), (C[2 * e] = j(e, 5))
                        ;(O = new D(z, w, u + 1, l, g)),
                          (B = new D(C, k, 0, f, g)),
                          (R = new D(new Array(0), x, 0, c, p))
                      })(),
                      (q = !0)),
                      (e.l_desc = new F(e.dyn_ltree, O)),
                      (e.d_desc = new F(e.dyn_dtree, B)),
                      (e.bl_desc = new F(e.bl_tree, R)),
                      (e.bi_buf = 0),
                      (e.bi_valid = 0),
                      W(e)
                  }),
                    (r._tr_stored_block = J),
                    (r._tr_flush_block = function (e, t, r, n) {
                      var i,
                        s,
                        a = 0
                      0 < e.level
                        ? (2 === e.strm.data_type &&
                            (e.strm.data_type = (function (e) {
                              var t,
                                r = 4093624447
                              for (t = 0; t <= 31; t++, r >>>= 1)
                                if (1 & r && 0 !== e.dyn_ltree[2 * t]) return o
                              if (
                                0 !== e.dyn_ltree[18] ||
                                0 !== e.dyn_ltree[20] ||
                                0 !== e.dyn_ltree[26]
                              )
                                return h
                              for (t = 32; t < u; t++) if (0 !== e.dyn_ltree[2 * t]) return h
                              return o
                            })(e)),
                          Y(e, e.l_desc),
                          Y(e, e.d_desc),
                          (a = (function (e) {
                            var t
                            for (
                              X(e, e.dyn_ltree, e.l_desc.max_code),
                                X(e, e.dyn_dtree, e.d_desc.max_code),
                                Y(e, e.bl_desc),
                                t = c - 1;
                              3 <= t && 0 === e.bl_tree[2 * S[t] + 1];
                              t--
                            );
                            return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t
                          })(e)),
                          (i = (e.opt_len + 3 + 7) >>> 3),
                          (s = (e.static_len + 3 + 7) >>> 3) <= i && (i = s))
                        : (i = s = r + 5),
                        r + 4 <= i && -1 !== t
                          ? J(e, t, r, n)
                          : 4 === e.strategy || s === i
                            ? (P(e, 2 + (n ? 1 : 0), 3), K(e, z, C))
                            : (P(e, 4 + (n ? 1 : 0), 3),
                              (function (e, t, r, n) {
                                var i
                                for (
                                  P(e, t - 257, 5), P(e, r - 1, 5), P(e, n - 4, 4), i = 0;
                                  i < n;
                                  i++
                                )
                                  P(e, e.bl_tree[2 * S[i] + 1], 3)
                                V(e, e.dyn_ltree, t - 1), V(e, e.dyn_dtree, r - 1)
                              })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1),
                              K(e, e.dyn_ltree, e.dyn_dtree)),
                        W(e),
                        n && M(e)
                    }),
                    (r._tr_tally = function (e, t, r) {
                      return (
                        (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
                        (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
                        (e.pending_buf[e.l_buf + e.last_lit] = 255 & r),
                        e.last_lit++,
                        0 === t
                          ? e.dyn_ltree[2 * r]++
                          : (e.matches++,
                            t--,
                            e.dyn_ltree[2 * (A[r] + u + 1)]++,
                            e.dyn_dtree[2 * N(t)]++),
                        e.last_lit === e.lit_bufsize - 1
                      )
                    }),
                    (r._tr_align = function (e) {
                      P(e, 2, 3),
                        L(e, m, z),
                        (function (e) {
                          16 === e.bi_valid
                            ? (U(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                            : 8 <= e.bi_valid &&
                              ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
                              (e.bi_buf >>= 8),
                              (e.bi_valid -= 8))
                        })(e)
                    })
                },
                { '../utils/common': 41 }
              ],
              53: [
                function (e, t, r) {
                  'use strict'
                  t.exports = function () {
                    ;(this.input = null),
                      (this.next_in = 0),
                      (this.avail_in = 0),
                      (this.total_in = 0),
                      (this.output = null),
                      (this.next_out = 0),
                      (this.avail_out = 0),
                      (this.total_out = 0),
                      (this.msg = ''),
                      (this.state = null),
                      (this.data_type = 2),
                      (this.adler = 0)
                  }
                },
                {}
              ],
              54: [
                function (e, t, r) {
                  ;(function (e) {
                    !(function (r, n) {
                      'use strict'
                      if (!r.setImmediate) {
                        var i,
                          s,
                          t,
                          a,
                          o = 1,
                          h = {},
                          u = !1,
                          l = r.document,
                          e = Object.getPrototypeOf && Object.getPrototypeOf(r)
                        ;(e = e && e.setTimeout ? e : r),
                          (i =
                            '[object process]' === {}.toString.call(r.process)
                              ? function (e) {
                                  process.nextTick(function () {
                                    c(e)
                                  })
                                }
                              : (function () {
                                    if (r.postMessage && !r.importScripts) {
                                      var e = !0,
                                        t = r.onmessage
                                      return (
                                        (r.onmessage = function () {
                                          e = !1
                                        }),
                                        r.postMessage('', '*'),
                                        (r.onmessage = t),
                                        e
                                      )
                                    }
                                  })()
                                ? ((a = 'setImmediate$' + Math.random() + '$'),
                                  r.addEventListener
                                    ? r.addEventListener('message', d, !1)
                                    : r.attachEvent('onmessage', d),
                                  function (e) {
                                    r.postMessage(a + e, '*')
                                  })
                                : r.MessageChannel
                                  ? (((t = new MessageChannel()).port1.onmessage = function (e) {
                                      c(e.data)
                                    }),
                                    function (e) {
                                      t.port2.postMessage(e)
                                    })
                                  : l && 'onreadystatechange' in l.createElement('script')
                                    ? ((s = l.documentElement),
                                      function (e) {
                                        var t = l.createElement('script')
                                        ;(t.onreadystatechange = function () {
                                          c(e),
                                            (t.onreadystatechange = null),
                                            s.removeChild(t),
                                            (t = null)
                                        }),
                                          s.appendChild(t)
                                      })
                                    : function (e) {
                                        setTimeout(c, 0, e)
                                      }),
                          (e.setImmediate = function (e) {
                            'function' != typeof e && (e = new Function('' + e))
                            for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++)
                              t[r] = arguments[r + 1]
                            var n = { callback: e, args: t }
                            return (h[o] = n), i(o), o++
                          }),
                          (e.clearImmediate = f)
                      }
                      function f(e) {
                        delete h[e]
                      }
                      function c(e) {
                        if (u) setTimeout(c, 0, e)
                        else {
                          var t = h[e]
                          if (t) {
                            u = !0
                            try {
                              !(function (e) {
                                var t = e.callback,
                                  r = e.args
                                switch (r.length) {
                                  case 0:
                                    t()
                                    break
                                  case 1:
                                    t(r[0])
                                    break
                                  case 2:
                                    t(r[0], r[1])
                                    break
                                  case 3:
                                    t(r[0], r[1], r[2])
                                    break
                                  default:
                                    t.apply(n, r)
                                }
                              })(t)
                            } finally {
                              f(e), (u = !1)
                            }
                          }
                        }
                      }
                      function d(e) {
                        e.source === r &&
                          'string' == typeof e.data &&
                          0 === e.data.indexOf(a) &&
                          c(+e.data.slice(a.length))
                      }
                    })('undefined' == typeof self ? (void 0 === e ? this : e) : self)
                  }).call(
                    this,
                    'undefined' != typeof __webpack_require__.g
                      ? __webpack_require__.g
                      : 'undefined' != typeof self
                        ? self
                        : 'undefined' != typeof window
                          ? window
                          : {}
                  )
                },
                {}
              ]
            },
            {},
            [10]
          )(10)
        })

        /***/
      },

    /***/ './src/config.ts':
      /*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ folder_name: () => /* binding */ folder_name,
          /* harmony export */ popup_probability: () => /* binding */ popup_probability,
          /* harmony export */ upload_url: () => /* binding */ upload_url,
          /* harmony export */ zip: () => /* binding */ zip
          /* harmony export */
        })
        const popup_probability = 0.15
        const folder_name = `user_interaction_data`
        const zip = true
        const upload_url = 'http://userdatacollect.hailab.io/upload'

        /***/
      },

    /***/ './src/recipe_new.ts':
      /*!***************************!*\
  !*** ./src/recipe_new.ts ***!
  \***************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ add_to_cart_button: () => /* binding */ add_to_cart_button,
          /* harmony export */ buy_box_with_accordion: () => /* binding */ buy_box_with_accordion,
          /* harmony export */ buy_box_without_accordion_delivery: () =>
            /* binding */ buy_box_without_accordion_delivery,
          /* harmony export */ buy_box_without_accordion_pick_up: () =>
            /* binding */ buy_box_without_accordion_pick_up,
          /* harmony export */ buy_now_button: () => /* binding */ buy_now_button,
          /* harmony export */ cart: () => /* binding */ cart,
          /* harmony export */ delivery_frequency_selector: () =>
            /* binding */ delivery_frequency_selector,
          /* harmony export */ nav: () => /* binding */ nav,
          /* harmony export */ product_delivery: () => /* binding */ product_delivery,
          /* harmony export */ product_facts: () => /* binding */ product_facts,
          /* harmony export */ quantity_selector: () => /* binding */ quantity_selector,
          /* harmony export */ recipes: () => /* binding */ recipes,
          /* harmony export */ refinement_option: () => /* binding */ refinement_option,
          /* harmony export */ set_up_now_button: () => /* binding */ set_up_now_button
          /* harmony export */
        })
        const nav = {
          selector: '#navbar-main',
          name: 'nav_bar',
          children: [
            {
              selector: '#nav-search-bar-form',
              children: [
                {
                  selector: 'input#twotabsearchtextbox',
                  name: 'search_input'
                },
                {
                  selector: '#nav-search-submit-button',
                  clickable: true,
                  name: 'search_button'
                }
              ]
            },
            {
              selector: '#nav-link-accountList',
              text_selector: '#nav-link-accountList span.nav-line-2',
              add_text: true,
              clickable: true,
              name: 'account_and_list_button'
            },
            {
              selector: '#nav-orders',
              add_text: true,
              clickable: true,
              name: 'order_button'
            },
            {
              selector: '#nav-cart',
              text_selector: '#nav-cart .nav-line-2',
              add_text: true,
              clickable: true,
              name: 'cart_button'
            }
          ]
        }
        const refinement_option = [
          {
            selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
            add_text: true,
            class: 'refinement-title'
          },
          {
            selector:
              'ul:nth-of-type(1) > span.a-declarative > span > li:has(a.a-link-normal.s-navigation-item)',
            add_text: true,
            name: 'from_text',
            clickable: true,
            click_selector: 'a',
            direct_child: true,
            text_js: function (element) {
              try {
                let text = ''
                if (!element) {
                  return text
                }
                if (element.innerText && element.innerText.trim()) {
                  text += element.innerText.trim()
                  const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
                  if (aChild && aChild.hasAttribute('title')) {
                    text += ' '
                    text += aChild.getAttribute('title')
                  }
                } else {
                  const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
                  if (aChild && aChild.hasAttribute('title')) {
                    text += aChild.getAttribute('title')
                  }
                }
                return text
              } catch (e) {
                console.log(e)
                return ''
              }
            },
            children: [
              {
                selector: "input[type='checkbox']"
              }
            ]
          },
          {
            selector:
              "ul:nth-of-type(1) > span.a-declarative > li > span > div[data-a-expander-name='filter-content-expander']",
            name: 'more_options',
            children: [
              {
                selector: "a[data-csa-c-func-deps='aui-da-a-expander-toggle']",
                name: 'toggle_expansion',
                add_text: true
              },
              {
                selector: 'li',
                add_text: true,
                name: 'from_text',
                clickable: true,
                click_selector: 'a',
                text_js: function (element) {
                  try {
                    let text = ''
                    if (!element) {
                      return text
                    }
                    if (element.innerText && element.innerText.trim()) {
                      text += element.innerText.trim()
                      const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
                      if (aChild && aChild.hasAttribute('title')) {
                        text += ' '
                        text += aChild.getAttribute('title')
                      }
                    } else {
                      const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
                      if (aChild && aChild.hasAttribute('title')) {
                        text += aChild.getAttribute('title')
                      }
                    }
                    return text
                  } catch (e) {
                    console.log(e)
                    return ''
                  }
                },
                children: [
                  {
                    selector: "input[type='checkbox']"
                  }
                ]
              }
            ]
          }
        ]
        const product_facts = {
          selector: '#productFactsDesktopExpander',
          add_text: true,
          class: 'product-facts'
        }
        const product_delivery = {
          selector: 'div.mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE',
          add_text: true,
          class: 'product-delivery'
        }
        const quantity_selector = {
          selector: '#selectQuantity',
          name: 'quantity_selector',
          children: [
            {
              selector: 'label',
              add_text: true
            },
            {
              selector: 'select',
              clickable: true,
              name: 'drop_down_list'
            }
          ]
        }
        const delivery_frequency_selector = {
          selector: '#replenishmentFrequency_feature_div',
          name: 'delivery_frequency_selector',
          text_selector: 'div.a-section.a-spacing-micro > span',
          add_text: true,
          children: [
            {
              selector: '#rcxOrdFreqOnmlWrapper select',
              clickable: true,
              name: 'drop_down_list'
            }
          ]
        }
        const set_up_now_button = {
          selector: '#rcx-subscribe-submit-button-announce',
          add_text: true,
          clickable: true,
          name: 'set_up_now',
          class: 'product-set-up-now'
        }
        const add_to_cart_button = {
          selector: "input[name='submit.add-to-cart'], input[name='submit.add-to-cart-ubb']",
          add_text: true,
          clickable: true,
          name: 'add_to_cart',
          class: 'product-add-to-cart'
        }
        const buy_now_button = {
          selector: "input[name='submit.buy-now']",
          add_text: true,
          clickable: true,
          name: 'buy_now',
          class: 'product-buy-now'
        }
        const buy_box_with_accordion = {
          selector: '#buyBoxAccordion > div.a-box.celwidget',
          name: 'from_text',
          text_selector: 'div.accordion-caption > span',
          children: [
            {
              selector: "div[data-csa-c-content-id='offer_display_desktop_accordion_header']",
              name: 'accordion_selector',
              add_text: true,
              clickable: true,
              text_selector: 'h5 span.a-text-bold'
            },
            {
              selector: 'div.a-accordion-inner.accordion-row-content',
              name: 'purchase_form',
              children: [
                product_facts,
                product_delivery,
                quantity_selector,
                delivery_frequency_selector,
                set_up_now_button,
                add_to_cart_button,
                buy_now_button
              ]
            }
          ]
        }
        const buy_box_without_accordion_delivery = {
          selector: '#gsod_singleOfferDisplay_Desktop',
          children: [
            {
              selector: '#addToCart',
              name: 'purchase_form',
              children: [
                product_facts,
                product_delivery,
                quantity_selector,
                add_to_cart_button,
                buy_now_button
              ]
            }
          ]
        }
        const buy_box_without_accordion_pick_up = {
          selector: '#gsod_singleOfferDisplay_group_2_Desktop',
          children: [
            {
              selector: '#pickUpOfferDisplay',
              name: 'purchase_form',
              children: [
                product_facts,
                product_delivery,
                quantity_selector,
                add_to_cart_button,
                buy_now_button
              ]
            }
          ]
        }
        const cart = [
          nav,
          {
            selector: "div[data-name='Active Items']",
            name: 'active_item_list',
            children: [
              {
                selector: 'div.sc-list-item-content',
                text_selector:
                  'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full',
                name: 'from_text',
                children: [
                  {
                    selector: 'div.sc-item-check-checkbox-selector input',
                    clickable: true,
                    name: 'checkbox'
                  },
                  {
                    selector:
                      'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title',
                    clickable: true,
                    text_selector: 'span.a-truncate-full',
                    add_text: true,
                    name: 'product_detail'
                  },
                  {
                    selector: 'div.sc-item-content-group span.sc-quantity-stepper',
                    children: [
                      {
                        selector: "button[aria-label='Decrease quantity by one']",
                        add_text: true,
                        text_js: function (element) {
                          if (element.hasAttribute('aria-label')) {
                            return element.getAttribute('aria-label')
                          }
                          return ''
                        },
                        clickable: true,
                        name: 'decrease_quantity_by_one'
                      },
                      {
                        selector: "div[role='spinbutton']",
                        add_text: true,
                        text_format: 'Current Quantity: {}'
                      },
                      {
                        selector: "button[aria-label='Increase quantity by one']",
                        add_text: true,
                        text_js: function (element) {
                          if (element.hasAttribute('aria-label')) {
                            return element.getAttribute('aria-label')
                          }
                          return ''
                        },
                        clickable: true,
                        name: 'increase_quantity_by_one'
                      }
                    ]
                  },
                  {
                    selector: "div.sc-item-content-group input[data-action='delete']",
                    add_text: true,
                    clickable: true,
                    name: 'delete'
                  },
                  {
                    selector: "div.sc-item-content-group input[data-action='save-for-later']",
                    add_text: true,
                    clickable: true,
                    name: 'save_for_later'
                  }
                ]
              }
            ]
          },
          {
            selector: '#sc-buy-box-ptc-button input',
            add_text: true,
            clickable: true,
            name: 'check_out'
          }
        ]
        const recipes = [
          {
            match: '/',
            match_method: 'url',
            selector: 'html',
            children: [
              {
                selector: 'head',
                children: [
                  {
                    selector: 'title',
                    add_text: true
                  }
                ]
              },
              {
                selector: 'body',
                children: [nav]
              }
            ]
          },
          {
            match: '/s',
            match_method: 'url',
            selector: 'html',
            children: [
              {
                selector: 'head',
                children: [
                  {
                    selector: 'title',
                    add_text: true
                  }
                ]
              },
              {
                selector: 'body',
                children: [
                  nav,
                  {
                    selector: '#s-refinements',
                    name: 'refinements',
                    children: [
                      {
                        selector:
                          'div.a-section.a-spacing-none:not(:has(#n-title)):has(span.a-size-base.a-color-base.puis-bold-weight-text):has(ul span.a-declarative > span > li):not(#reviewsRefinements):not(#departments):not(#priceRefinements):not(#filters)',
                        name: 'from_text',
                        text_selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
                        children: refinement_option
                      },
                      {
                        selector: '#departments',
                        name: 'departments',
                        children: [
                          {
                            selector: 'li a',
                            add_text: true,
                            name: 'from_text',
                            clickable: true
                          }
                        ]
                      },
                      {
                        selector: '#reviewsRefinements',
                        name: 'reviews_refinements',
                        children: [
                          {
                            selector: 'li a',
                            add_text: true,
                            name: 'from_text',
                            clickable: true
                          }
                        ]
                      }
                    ]
                  },
                  {
                    selector: 'div.s-main-slot.s-result-list.s-search-results',
                    name: 'search_results',
                    children: [
                      {
                        insert_split_marker: true,
                        insert_split_marker_every: 4,
                        selector: 'div[data-component-type="s-search-result"]',
                        text_selector:
                          'span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span',
                        name: 'from_text',
                        class: 'search-result',
                        children: [
                          {
                            selector:
                              "div[data-cy='title-recipe'] a.a-link-normal.s-link-style.a-text-normal",
                            add_text: true,
                            class: 'product-name',
                            clickable: true,
                            name: 'view_product'
                          },
                          {
                            selector: "div[data-cy='reviews-block']",
                            class: 'product-review',
                            children: [
                              {
                                selector: 'span.a-icon-alt',
                                add_text: true,
                                class: 'product-rating'
                              },
                              {
                                selector: 'span.a-size-base.s-underline-text',
                                add_text: true,
                                text_format: '{} reviews',
                                class: 'product-rating-count'
                              }
                            ]
                          },
                          {
                            selector: "div[data-cy='price-recipe']",
                            class: 'product-price',
                            children: [
                              {
                                selector: 'a.a-link-normal > span.a-price > span.a-offscreen',
                                add_text: true
                              }
                            ]
                          },
                          {
                            selector: "div[data-cy='delivery-recipe']",
                            add_text: true,
                            class: 'product-delivery'
                          },
                          {
                            selector: "div[data-cy='add-to-cart'] button",
                            add_text: true,
                            clickable: true,
                            name: 'add_to_cart'
                          },
                          {
                            selector: "div[data-csa-c-content-id='s-search-see-details-button'] a",
                            add_text: true,
                            clickable: true,
                            name: 'see_options'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    selector: 'span.s-pagination-strip',
                    name: 'pagination',
                    children: [
                      {
                        selector: '.s-pagination-item',
                        add_text: true,
                        name: 'from_text',
                        clickable: true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            match: '#productTitle',
            match_text: '',
            selector: 'html',
            terminate: function () {
              return !!arguments[0]
            },
            terminate_callback: function () {
              return arguments[0]
            },
            children: [
              {
                selector: 'head',
                children: [
                  {
                    selector: 'title',
                    add_text: true
                  }
                ]
              },
              {
                selector: 'body',
                children: [
                  nav,
                  {
                    selector: '#centerCol',
                    class: 'product-card',
                    children: [
                      {
                        selector: '#title',
                        add_text: true,
                        keep_attr: ['id']
                      },
                      {
                        selector: '#averageCustomerReviews',
                        class: 'review',
                        children: [
                          {
                            selector: 'span.a-icon-alt',
                            add_text: true
                          },
                          {
                            selector: '#acrCustomerReviewText',
                            add_text: true
                          }
                        ]
                      },
                      {
                        selector:
                          '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"] > div[class="offersConsistencyEnabled"] > div:not([style="display:none;"]):not([style="display: none;"]) #corePriceDisplay_desktop_feature_div div.a-section.a-spacing-none.aok-align-center.aok-relative > span.aok-offscreen, #apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"] > div[data-csa-c-content-id="apex_with_rio_cx"] #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay',
                        add_text: true,
                        text_format: 'Price: {}',
                        class: 'product-price'
                      },
                      {
                        selector: '#twister',
                        class: 'product-options',
                        name: 'product_options',
                        children: [
                          {
                            selector: 'div.a-section',
                            text_selector: 'div.a-row:has(label.a-form-label) > label.a-form-label',
                            name: 'from_text',
                            direct_child: true,
                            children: [
                              {
                                selector: 'div.a-row:has(label.a-form-label)',
                                children: [
                                  {
                                    selector: 'label.a-form-label',
                                    add_text: true
                                  },
                                  {
                                    selector: 'span.selection',
                                    add_text: true
                                  }
                                ]
                              },
                              {
                                selector: 'select',
                                add_text: true,
                                clickable: true,
                                name: 'drop_down_list'
                              },
                              {
                                selector: 'ul',
                                name: 'button_list',
                                children: [
                                  {
                                    selector: 'li button',
                                    add_text: true,
                                    clickable: true,
                                    name: 'from_text',
                                    text_js: function (element) {
                                      let text = ''
                                      if (element.innerText.trim()) {
                                        text += element.innerText.trim()
                                        const imgChild = element.querySelector('img')
                                        if (imgChild && imgChild.alt) {
                                          text += ' '
                                          text += imgChild.alt
                                        }
                                      } else {
                                        const imgChild = element.querySelector('img')
                                        if (imgChild && imgChild.alt) {
                                          text += imgChild.alt
                                        }
                                      }
                                      return text
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    selector: '#buybox:has(div.a-tab-container)',
                    name: 'buybox',
                    children: [
                      {
                        selector: '#tab_heading_desktop_buybox_group_1 a',
                        name: 'deliver_tab',
                        clickable: true,
                        add_text: true
                      },
                      {
                        selector: '#tab_heading_desktop_buybox_group_2 a',
                        name: 'pick_up_tab',
                        clickable: true,
                        add_text: true
                      },
                      {
                        selector: '#tab_desktop_buybox_group_1',
                        name: 'delivery',
                        add_text: true,
                        text_format: 'Delivery',
                        children: [buy_box_with_accordion, buy_box_without_accordion_delivery]
                      },
                      {
                        selector: '#tab_desktop_buybox_group_2',
                        name: 'pick_up',
                        add_text: true,
                        text_format: 'Pick Up',
                        children: [buy_box_without_accordion_pick_up]
                      }
                    ],
                    before_hook: function () {
                      var _a
                      const title = document.querySelector('#title').innerText
                      const price =
                        (_a = document.querySelector(
                          "#apex_desktop > div[data-csa-c-slot-id='apex_dp_center_column'] > div[class='offersConsistencyEnabled'] > div:not([style='display:none;']):not([style=\"display: none;\"]) #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, #apex_desktop > div[data-csa-c-slot-id='apex_dp_center_column'] > div[data-csa-c-content-id='apex_with_rio_cx'] #corePriceDisplay_desktop_feature_div div.a-section.a-spacing-none.aok-align-center.aok-relative > span.aok-offscreen"
                        )) === null || _a === void 0
                          ? void 0
                          : _a.innerText
                      const options = Array.from(
                        document.querySelectorAll(
                          '#twister div.a-row:has(label.a-form-label):has(span.selection)'
                        )
                      ).map((a) => ({
                        label: a.querySelector('label.a-form-label').innerText,
                        value: a.querySelector('span.selection').innerText
                      }))
                      const options_dict = {}
                      for (const option of options) {
                        options_dict[option['label'].replace(': ', '')] = option['value']
                      }
                      const asin = document.querySelector('input#ASIN').value
                      console.log({ title, price, options: options_dict, asin })
                      return { title, price, options: options_dict, asin }
                    }
                  },
                  {
                    selector: '#buybox:not(:has(div.a-tab-container))',
                    name: 'buybox',
                    children: [buy_box_with_accordion, buy_box_without_accordion_delivery],
                    before_hook: function () {
                      var _a
                      const title = document.querySelector('#title').innerText
                      const price =
                        (_a = document.querySelector(
                          "#apex_desktop > div[data-csa-c-slot-id='apex_dp_center_column'] > div[class='offersConsistencyEnabled'] > div:not([style='display:none;']):not([style=\"display: none;\"]) #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, #apex_desktop > div[data-csa-c-slot-id='apex_dp_center_column'] > div[data-csa-c-content-id='apex_with_rio_cx'] #corePriceDisplay_desktop_feature_div div.a-section.a-spacing-none.aok-align-center.aok-relative > span.aok-offscreen"
                        )) === null || _a === void 0
                          ? void 0
                          : _a.innerText
                      const options = Array.from(
                        document.querySelectorAll(
                          '#twister div.a-row:has(label.a-form-label):has(span.selection)'
                        )
                      ).map((a) => ({
                        label: a.querySelector('label.a-form-label').innerText,
                        value: a.querySelector('span.selection').innerText
                      }))
                      const options_dict = {}
                      for (const option of options) {
                        options_dict[option['label'].replace(': ', '')] = option['value']
                      }
                      const asin = document.querySelector('input#ASIN').value
                      console.log({ title, price, options: options_dict, asin })
                      return { title, price, options: options_dict, asin }
                    }
                  },
                  {
                    selector: '#attach-warranty-pane #attach-warranty-display',
                    name: 'warranty-box',
                    children: [
                      {
                        selector: 'div.attach-warranty-box',
                        text_selector: '#attach-warranty-card-display-title',
                        name: 'from_text',
                        children: [
                          {
                            selector: "input[aria-label='Select warranty option']",
                            name: 'select',
                            clickable: true
                          },
                          {
                            selector: '#attach-warranty-card-display-title',
                            add_text: true
                          },
                          {
                            selector: '#attach-warranty-card-price',
                            add_text: true
                          }
                        ]
                      },
                      {
                        selector: 'div.a-section.attach-warranty-button-row',
                        children: [
                          {
                            selector: "input[aria-labelledby='attachSiAddCoverage-announce']",
                            name: 'add_protection',
                            clickable: true,
                            add_text: true,
                            text_format: 'Add Protection'
                          },
                          {
                            selector: "input[aria-labelledby='attachSiNoCoverage-announce']",
                            name: 'no_protection',
                            clickable: true,
                            add_text: true,
                            text_format: 'No Thanks'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            match: '/cart/smart-wagon',
            match_method: 'url',
            selector: 'html',
            children: [
              {
                selector: 'head',
                children: [
                  {
                    selector: 'title',
                    add_text: true
                  }
                ]
              },
              {
                selector: 'body',
                children: [
                  nav,
                  {
                    selector: '#sw-atc-buy-box',
                    children: [
                      {
                        selector: '#sw-subtotal',
                        children: [
                          {
                            selector: '#sw-subtotal-item-count',
                            add_text: true
                          },
                          {
                            selector: "span[aria-hidden='true']",
                            add_text: true
                          }
                        ]
                      },
                      {
                        selector: '#sc-buy-box-ptc-button span.a-button-inner input',
                        add_text: true,
                        text_selector: 'div.sc-without-multicart',
                        clickable: true,
                        name: 'check_out'
                      },
                      {
                        selector: '#sw-gtc a',
                        add_text: true,
                        clickable: true,
                        name: 'go_to_cart'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            match: '/cart',
            match_method: 'url',
            selector: 'html',
            children: [
              {
                selector: 'head',
                children: [
                  {
                    selector: 'title',
                    add_text: true
                  }
                ]
              },
              {
                selector: 'body',
                children: cart
              }
            ]
          },
          {
            match: '/gp/cart/view.html',
            match_method: 'url',
            selector: 'html',
            children: [
              {
                selector: 'head',
                children: [
                  {
                    selector: 'title',
                    add_text: true
                  }
                ]
              },
              {
                selector: 'body',
                children: cart
              }
            ]
          },
          {
            match: '/ap/signin',
            match_method: 'url',
            terminate: function () {
              return !!arguments[0]
            },
            terminate_callback: function () {
              return arguments[0]
            },
            selector: 'html'
          },
          {
            match: '/gp/buy/spc/handlers/display.html',
            match_method: 'url',
            terminate: function () {
              return !!arguments[0]
            },
            terminate_callback: function () {
              return arguments[0]
            },
            selector: 'html'
          }
        ]

        /***/
      },

    /***/ './node_modules/uuid/dist/esm-browser/native.js':
      /*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */
        })
        const randomUUID =
          typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = { randomUUID }

        /***/
      },

    /***/ './node_modules/uuid/dist/esm-browser/regex.js':
      /*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */
        })
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i

        /***/
      },

    /***/ './node_modules/uuid/dist/esm-browser/rng.js':
      /*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ rng
          /* harmony export */
        })
        let getRandomValues
        const rnds8 = new Uint8Array(16)
        function rng() {
          if (!getRandomValues) {
            if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
              throw new Error(
                'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
              )
            }
            getRandomValues = crypto.getRandomValues.bind(crypto)
          }
          return getRandomValues(rnds8)
        }

        /***/
      },

    /***/ './node_modules/uuid/dist/esm-browser/stringify.js':
      /*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ unsafeStringify: () => /* binding */ unsafeStringify
          /* harmony export */
        })
        /* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./validate.js */ './node_modules/uuid/dist/esm-browser/validate.js'
        )

        const byteToHex = []
        for (let i = 0; i < 256; ++i) {
          byteToHex.push((i + 0x100).toString(16).slice(1))
        }
        function unsafeStringify(arr, offset = 0) {
          return (
            byteToHex[arr[offset + 0]] +
            byteToHex[arr[offset + 1]] +
            byteToHex[arr[offset + 2]] +
            byteToHex[arr[offset + 3]] +
            '-' +
            byteToHex[arr[offset + 4]] +
            byteToHex[arr[offset + 5]] +
            '-' +
            byteToHex[arr[offset + 6]] +
            byteToHex[arr[offset + 7]] +
            '-' +
            byteToHex[arr[offset + 8]] +
            byteToHex[arr[offset + 9]] +
            '-' +
            byteToHex[arr[offset + 10]] +
            byteToHex[arr[offset + 11]] +
            byteToHex[arr[offset + 12]] +
            byteToHex[arr[offset + 13]] +
            byteToHex[arr[offset + 14]] +
            byteToHex[arr[offset + 15]]
          ).toLowerCase()
        }
        function stringify(arr, offset = 0) {
          const uuid = unsafeStringify(arr, offset)
          if (!(0, _validate_js__WEBPACK_IMPORTED_MODULE_0__['default'])(uuid)) {
            throw TypeError('Stringified UUID is invalid')
          }
          return uuid
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = stringify

        /***/
      },

    /***/ './node_modules/uuid/dist/esm-browser/v4.js':
      /*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */
        })
        /* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./native.js */ './node_modules/uuid/dist/esm-browser/native.js'
        )
        /* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./rng.js */ './node_modules/uuid/dist/esm-browser/rng.js'
        )
        /* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./stringify.js */ './node_modules/uuid/dist/esm-browser/stringify.js'
        )

        function v4(options, buf, offset) {
          if (_native_js__WEBPACK_IMPORTED_MODULE_0__['default'].randomUUID && !buf && !options) {
            return _native_js__WEBPACK_IMPORTED_MODULE_0__['default'].randomUUID()
          }
          options = options || {}
          const rnds =
            options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__['default'])()
          rnds[6] = (rnds[6] & 0x0f) | 0x40
          rnds[8] = (rnds[8] & 0x3f) | 0x80
          if (buf) {
            offset = offset || 0
            for (let i = 0; i < 16; ++i) {
              buf[offset + i] = rnds[i]
            }
            return buf
          }
          return (0, _stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds)
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = v4

        /***/
      },

    /***/ './node_modules/uuid/dist/esm-browser/validate.js':
      /*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */
        })
        /* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./regex.js */ './node_modules/uuid/dist/esm-browser/regex.js'
        )

        function validate(uuid) {
          return (
            typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__['default'].test(uuid)
          )
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = validate

        /***/
      }

    /******/
  }
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {}
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId]
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {}
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ ;(() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule ? /******/ () => module['default'] : /******/ () => module
      /******/ __webpack_require__.d(getter, { a: getter })
      /******/ return getter
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ ;(() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/global */
  /******/ ;(() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === 'object') return globalThis
      /******/ try {
        /******/ return this || new Function('return this')()
        /******/
      } catch (e) {
        /******/ if (typeof window === 'object') return window
        /******/
      }
      /******/
    })()
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ ;(() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ ;(() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    }
    /******/
  })()
  /******/
  /************************************************************************/
  var __webpack_exports__ = {}
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  ;(() => {
    'use strict'
    /*!********************************!*\
  !*** ./src/background_test.ts ***!
  \********************************/
    __webpack_require__.r(__webpack_exports__)
    /* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! uuid */ './node_modules/uuid/dist/esm-browser/v4.js'
    )
    /* harmony import */ var _recipe_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./recipe_new */ './src/recipe_new.ts'
    )
    /* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jszip */ './node_modules/jszip/dist/jszip.min.js'
    )
    /* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_1__)
    /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config */ './src/config.ts'
    )
    // src/background_test.ts
    var __awaiter =
      (undefined && undefined.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value)
              })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator['throw'](value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-nocheck

    let interactions = []
    let screenshots = []
    let reasonsAnnotation = []
    let actionSequenceId = 0
    let uploadTimer = null
    let userId = ''

    const tabNavigationHistory = {}
    function analyzeNavigation(tabId, url) {
      if (!tabNavigationHistory[tabId]) {
        tabNavigationHistory[tabId] = {
          backStack: [],
          forwardStack: [],
          currentUrl: null
        }
      }
      const history = tabNavigationHistory[tabId]
      if (!history.currentUrl) {
        history.currentUrl = url
        return 'new'
      }
      if (history.currentUrl === url) {
        return 'reload'
      }
      if (history.backStack.length > 0 && history.backStack[history.backStack.length - 1] === url) {
        history.forwardStack.push(history.currentUrl)
        history.currentUrl = history.backStack.pop()
        return 'back'
      }
      if (
        history.forwardStack.length > 0 &&
        history.forwardStack[history.forwardStack.length - 1] === url
      ) {
        history.backStack.push(history.currentUrl)
        history.currentUrl = history.forwardStack.pop()
        return 'forward'
      }
      history.backStack.push(history.currentUrl)
      history.forwardStack = []
      history.currentUrl = url
      return 'new'
    }
    // Replace the simple question with a more detailed one based on event type
    function getCustomQuestion(eventType, data) {
      var _a
      switch (eventType) {
        case 'click_a' || 0 || 0:
          // Check if it's a specific type of click
          if (data.target.innerText === 'Set Up Now') {
            return "Why did you choose 'Set Up Now' instead of buy once, and why do you like this particular product?"
          } else if (data.target.id === 'buy-now-button') {
            return 'Why did you choose to buy this product immediately, and what convinced you to skip further exploration of other options? Why do you like this particular product?'
          } else if (
            (_a = data.target.className) === null || _a === void 0
              ? void 0
              : _a.includes('sc-product-link')
          ) {
            return 'What made you click on this product, and what specific aspects attracted your attention compared to other search results?'
          } else if (data.target.id === 'add-to-cart-button') {
            return 'Why did you decide to add this item to your cart, and are you planning to buy it now or later? What convinced you that this item was the right choice for your needs?'
          } else {
            return 'What was your reason for clicking on this element?'
          }
        case 'scroll':
          return 'What are you doing while scrolling—are you browsing search results, looking at reviews, or something else, and what are you hoping to find?'
        case 'input':
          return 'What are you searching for, and how did you decide on the search terms you used? Are you looking for a specific product, brand, or feature?'
        case 'navigation':
          if (data.navigationType === 'back') {
            return 'Why did you decide to go back to the previous page, and what were you hoping to revisit or reconsider?'
          } else if (data.navigationType === 'forward') {
            return 'Why did you decide to return to this page after previously navigating away, and what new or unresolved information are you looking for now?'
          }
          return `What is the reason for this ${data.navigationType} navigation?`
        case 'tabActivate':
          return `Why did you switch to this tab? Do you have specific task or information in mind?`
        default:
          return `What is the reason for the ${eventType} action?`
      }
    }
    // Add new function to handle screenshot saving
    function saveScreenshot_1(screenshotDataUrl, screenshotId) {
      return __awaiter(this, void 0, void 0, function* () {
        if (screenshotDataUrl) {
          // Get existing screenshots from storage
          let result = yield chrome.storage.local.get({ screenshots: [] })
          let storeScreenshots = result.screenshots || []
          // Add new screenshot
          storeScreenshots.push([screenshotDataUrl, screenshotId])
          // Save back to storage
          yield chrome.storage.local.set({ screenshots: storeScreenshots })
          return true
        }
        return false
      })
    }
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      ;(() =>
        __awaiter(void 0, void 0, void 0, function* () {
          var _a
          if (message.action === 'saveData') {
            try {
              actionSequenceId++
              const currentactionSequenceId = actionSequenceId
              console.log(currentactionSequenceId)
              message.data.actionSequenceId = currentactionSequenceId
              const uuid = (0, uuid__WEBPACK_IMPORTED_MODULE_3__['default'])()
              message.data.uuid = uuid
              const saveData = () =>
                __awaiter(void 0, void 0, void 0, function* () {
                  console.log('saveData ', message.data.eventType)
                  let result = yield chrome.storage.local.get({ interactions: [] })
                  result = result.interactions || []
                  result.push(message.data)
                  yield chrome.storage.local.set({ interactions: result })
                })
              // popup
              // await sendPopup(sender.tab?.id, message.data.timestamp, message.data.eventType, actionSequenceId)
              yield Promise.all([
                saveData(),
                sendPopup(
                  (_a = sender.tab) === null || _a === void 0 ? void 0 : _a.id,
                  message.data.timestamp,
                  message.data.eventType,
                  currentactionSequenceId,
                  message.data,
                  uuid
                )
              ])
              sendResponse({ success: true })
            } catch (error) {
              console.error('Error in saveData:', error)
              sendResponse({ success: false, error: error.message })
            }
            return true // Keep message channel open for async response
          }
          // Capture screenshot on demand
          if (message.action === 'captureScreenshot') {
            try {
              console.log('get screenshot request')
              const screenshotDataUrl = yield captureScreenshot()
              if (screenshotDataUrl) {
                const success = yield saveScreenshot_1(screenshotDataUrl, message.screenshotId)
                sendResponse({
                  success,
                  message: success ? undefined : 'Failed to capture screenshot'
                })
              } else {
                sendResponse({ success: false, message: 'Failed to capture screenshot' })
              }
            } catch (error) {
              console.error('Error in captureScreenshot:', error)
              sendResponse({ success: false, message: 'Failed to capture screenshot' })
            }
            return true
          }
          // Download data on user request
          if (message.action === 'downloadData') {
            try {
              console.log('downloadData')
              const success = yield downloadDataLocally()
              sendResponse({ success })
            } catch (error) {
              console.error('Error handling download:', error)
              sendResponse({ success: false, error: error.message })
            }
            return true
          }
          if (message.action === 'clearMemoryCache') {
            try {
              interactions = []
              screenshots = []
              reasonsAnnotation = []
              actionSequenceId = 0
              sendResponse({ success: true })
            } catch (error) {
              console.error('Error handling clearMemoryCache:', error)
              sendResponse({ success: false, error: error.message })
            }
            return true
          }
        }))()
      return true // Keeps the message channel open for async responses
    })
    // Capture the screenshot in the current tab
    function captureScreenshot() {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          const [tab] = yield chrome.tabs.query({ active: true, currentWindow: true })
          if (tab) {
            return yield chrome.tabs.captureVisibleTab(tab.windowId, {
              format: 'jpeg',
              quality: 25
            })
          }
        } catch (error) {
          console.error('Error capturing screenshot:', error)
        }
        return null
      })
    }
    function hashCode(str) {
      let hash = 0
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i)
        hash |= 0
      }
      console.log('Hash value before return:', hash)
      return hash.toString()
    }
    const saveHTML = (htmlContent, currentSnapshotId) =>
      __awaiter(void 0, void 0, void 0, function* () {
        let result = yield chrome.storage.local.get({ htmlSnapshots: {} })
        const htmlSnapshots = result.htmlSnapshots || {}
        htmlSnapshots[currentSnapshotId] = htmlContent
        yield chrome.storage.local.set({ htmlSnapshots })
      })
    const saveInteraction = (
      eventType,
      timestamp,
      target_url,
      htmlSnapshotId,
      currentactionSequenceId,
      uuid,
      navigationType = null
    ) =>
      __awaiter(void 0, void 0, void 0, function* () {
        const data = {
          eventType,
          timestamp,
          target_url,
          htmlSnapshotId,
          actionSequenceId: currentactionSequenceId,
          uuid
        }
        // Add navigationType only if it exists
        if (navigationType) {
          data['navigationType'] = navigationType
        }
        let interactions = yield chrome.storage.local.get({ interactions: [] })
        let storeInteractions = interactions.interactions || []
        storeInteractions.push(data)
        yield chrome.storage.local.set({ interactions: storeInteractions })
      })
    const captureAndSaveScreenshot = (windowId, timestamp) =>
      __awaiter(void 0, void 0, void 0, function* () {
        const screenshotDataUrl = yield chrome.tabs.captureVisibleTab(windowId, {
          format: 'jpeg',
          quality: 25
        })
        const screenshotId = `screenshot_${timestamp}`
        yield saveScreenshot_1(screenshotDataUrl, screenshotId)
      })
    const sendPopup = (tabId, timestamp, eventType, currentactionSequenceId, data, uuid) =>
      __awaiter(void 0, void 0, void 0, function* () {
        const question = getCustomQuestion(eventType, data)
        if (Math.random() < _config__WEBPACK_IMPORTED_MODULE_2__.popup_probability && tabId) {
          try {
            const reason = yield chrome.tabs.sendMessage(tabId, {
              action: 'show_popup',
              question: question
            })
            if (reason && reason.input !== null) {
              const newitem = {
                actionSequenceId: currentactionSequenceId,
                timestamp: timestamp,
                eventType: eventType,
                reason: reason,
                uuid: uuid
              }
              let result = yield chrome.storage.local.get({ reasonsAnnotation: [] })
              let storeReasonsAnnotation = result.reasonsAnnotation || []
              // Add new reason
              storeReasonsAnnotation.push(newitem)
              // Save back to storage
              yield chrome.storage.local.set({ reasonsAnnotation: storeReasonsAnnotation })
            }
          } catch (error) {
            console.error('Error popup:', error)
          }
        }
      })
    // listen to switches between activated tabs
    chrome.tabs.onActivated.addListener((activeInfo) =>
      __awaiter(void 0, void 0, void 0, function* () {
        try {
          const tabId = activeInfo.tabId
          const tab = yield chrome.tabs.get(tabId)
          if (!tab) {
            console.error(`Failed to get tab with ID: ${tabId}`)
            return
          }
          console.log(`Switched to tab ${tabId} with URL: ${tab.url}`)
          if (tab.url && (tab.url.includes('amazon.com') || tab.url.includes('file'))) {
            const timestamp = new Date().toISOString()
            const currentSnapshotId = `html_${hashCode(tab.url)}_${timestamp}`
            chrome.tabs.sendMessage(tabId, { action: 'getHTML' }, (response) =>
              __awaiter(void 0, void 0, void 0, function* () {
                const htmlContent =
                  response === null || response === void 0 ? void 0 : response.html
                actionSequenceId++
                const currentactionSequenceId = actionSequenceId
                const uuid = (0, uuid__WEBPACK_IMPORTED_MODULE_3__['default'])()
                yield Promise.all([
                  saveHTML(htmlContent, currentSnapshotId),
                  saveInteraction(
                    'tabActivate',
                    timestamp,
                    tab.url,
                    currentSnapshotId,
                    currentactionSequenceId,
                    uuid,
                    null
                  ),
                  captureAndSaveScreenshot(tab.windowId, timestamp),
                  sendPopup(tabId, timestamp, 'tabActivate', currentactionSequenceId, {}, uuid)
                ])
              })
            )
          }
        } catch (error) {
          console.error('Error in tab activate handler:', error)
        }
      })
    )
    function selectRecipe(tabId, url) {
      return __awaiter(this, void 0, void 0, function* () {
        const parsedUrl = new URL(url)
        const path = parsedUrl.pathname
        for (const recipe of _recipe_new__WEBPACK_IMPORTED_MODULE_0__.recipes) {
          const matchMethod = recipe.match_method || 'text'
          if (matchMethod === 'text') {
            try {
              // Execute script in tab to check for matching element
              const [{ result: hasMatch }] = yield chrome.scripting.executeScript({
                target: { tabId },
                func: (selector, matchText) => {
                  var _a, _b
                  const element = document.querySelector(selector)
                  return (
                    element &&
                    (!matchText ||
                      ((_b =
                        (_a = element.textContent) === null || _a === void 0
                          ? void 0
                          : _a.toLowerCase().includes(matchText.toLowerCase())) !== null &&
                      _b !== void 0
                        ? _b
                        : false))
                  )
                },
                args: [recipe.match, recipe.match_text || '']
              })
              if (hasMatch) {
                return recipe
              }
            } catch (error) {
              console.error('Error checking text match:', error)
            }
          } else if (matchMethod === 'url' && recipe.match === path) {
            return recipe
          }
        }
        throw new Error(`No matching recipe found for path: ${path}`)
      })
    }
    chrome.webNavigation.onCommitted.addListener((details) =>
      __awaiter(void 0, void 0, void 0, function* () {
        if (details.frameId !== 0) return
        console.log('webNavigation onCommitted event triggered:', details)
        if (details.url.includes('amazon.com') || details.url.includes('file')) {
          const navigationType = analyzeNavigation(details.tabId, details.url)
          console.log(
            `Navigation type: ${navigationType} for tab ${details.tabId} to ${details.url}`
          )
          const timestamp = new Date().toISOString()
          chrome.tabs.sendMessage(details.tabId, { action: 'getHTML' }, (response) =>
            __awaiter(void 0, void 0, void 0, function* () {
              const htmlContent = response === null || response === void 0 ? void 0 : response.html
              const currentSnapshotId = `html_${hashCode(details.url)}_${timestamp}`
              actionSequenceId++
              const currentactionSequenceId = actionSequenceId
              const uuid = (0, uuid__WEBPACK_IMPORTED_MODULE_3__['default'])()
              yield Promise.all([
                saveHTML(htmlContent, currentSnapshotId),
                saveInteraction(
                  'navigation',
                  timestamp,
                  details.url,
                  currentSnapshotId,
                  currentactionSequenceId,
                  uuid,
                  navigationType
                ),
                captureAndSaveScreenshot((yield chrome.tabs.get(details.tabId)).windowId, timestamp)
              ])
              if (navigationType !== 'new' && navigationType !== 'reload') {
                console.log('send message to popup navigation')
                yield sendPopup(
                  details.tabId,
                  timestamp,
                  'navigation',
                  currentactionSequenceId,
                  {
                    navigationType: navigationType
                  },
                  uuid
                )
              }
            })
          )
        }
      })
    )
    // Add cleanup when tab is closed
    chrome.tabs.onRemoved.addListener((tabId) => {
      delete tabNavigationHistory[tabId]
    })
    // Add this function to handle data upload
    function downloadDataLocally() {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
          // Get userId and data from storage
          const userIdResult = yield chrome.storage.local.get({ userId: '' })
          const currentUserId = userIdResult.userId
          let user_id = currentUserId || 'unknown'
          const folderName = `${_config__WEBPACK_IMPORTED_MODULE_2__.folder_name}/USER_${user_id}/SESSION_${timestamp}`
          const snapshots = yield chrome.storage.local.get({ htmlSnapshots: [] })
          const interact = yield chrome.storage.local.get({ interactions: [] })
          const orderDetails = yield chrome.storage.local.get({ orderDetails: [] })
          const screen = yield chrome.storage.local.get({ screenshots: [] })
          const ReasonsAnnotation = yield chrome.storage.local.get({ reasonsAnnotation: [] })
          let htmlSnapshots = snapshots.htmlSnapshots || {}
          let storeInteractions = interact.interactions || []
          let storeorderDetails = orderDetails.orderDetails || []
          let storeScreenshots = screen.screenshots || []
          let storeReasonsAnnotation = ReasonsAnnotation.reasonsAnnotation || []
          // Upload session info
          console.log('uploading session info')
          const sessionInfoContent = `Session data for timestamp: ${timestamp}, user id: ${currentUserId},\n order details: \n ${JSON.stringify(storeorderDetails)}`
          chrome.downloads.download({
            url: 'data:text/plain;charset=utf-8,' + encodeURIComponent(sessionInfoContent),
            filename: `${folderName}/session_info.txt`,
            saveAs: false
          })
          // Upload HTML snapshots as separate files
          console.log('uploading html snapshots')
          for (const [snapshotId, htmlContent] of Object.entries(htmlSnapshots)) {
            yield chrome.downloads.download({
              url: 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent),
              filename: `${folderName}/html/${snapshotId.replace(/[:.]/g, '-')}.html`,
              saveAs: false
            })
          }
          // Upload interactions JSON
          console.log('uploading interactions')
          const fullData = {
            interactions: storeInteractions,
            reasons: storeReasonsAnnotation,
            orderDetails: orderDetails
          }
          const interactionsData = JSON.stringify(fullData, null, 2)
          chrome.downloads.download({
            url: 'data:text/json;charset=utf-8,' + encodeURIComponent(interactionsData),
            filename: `${folderName}/interactions.json`,
            saveAs: false
          })
          // Upload screenshots
          console.log('uploading screenshots')
          for (const [screenshotData, screenshotId] of storeScreenshots) {
            chrome.downloads.download({
              url: screenshotData,
              filename: `${folderName}/screenshots/${screenshotId.replace(/[:.]/g, '-')}.jpg`,
              saveAs: false
            })
          }
          // Clear cache after successful upload
          chrome.storage.local.remove([
            'htmlSnapshots',
            'interactions',
            'orderDetails',
            'screenshots',
            'reasonsAnnotation'
          ])
          interactions.length = 0
          screenshots.length = 0
          reasonsAnnotation.length = 0
          return true
        } catch (error) {
          console.error('Error uploading data:', error)
          return false
        }
      })
    }
    let lastUploadTimestamp = ''
    function uploadDataToServer() {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          console.log('uploadDataToServer')
          const interact = yield chrome.storage.local.get({ interactions: [] })
          const storeInteractions = interact.interactions || []
          // Check if there are any interactions and get the latest timestamp
          if (storeInteractions.length === 0) {
            console.log('No interactions to upload')
            return false
          }
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
          // Get userId and data from storage
          const userIdResult = yield chrome.storage.local.get({ userId: '' })
          const currentUserId = userIdResult.userId
          let user_id = currentUserId || 'unknown'
          const folderName = `${_config__WEBPACK_IMPORTED_MODULE_2__.folder_name}/USER_${user_id}/SESSION_${timestamp}`
          const snapshots = yield chrome.storage.local.get({ htmlSnapshots: [] })
          const orderDetails = yield chrome.storage.local.get({ orderDetails: [] })
          const screen = yield chrome.storage.local.get({ screenshots: [] })
          const ReasonsAnnotation = yield chrome.storage.local.get({ reasonsAnnotation: [] })
          let htmlSnapshots = snapshots.htmlSnapshots || {}
          let storeorderDetails = orderDetails.orderDetails || []
          let storeScreenshots = screen.screenshots || []
          let storeReasonsAnnotation = ReasonsAnnotation.reasonsAnnotation || []
          const fullData = {
            interactions: storeInteractions,
            reasons: storeReasonsAnnotation,
            orderDetails: storeorderDetails
          }
          if (!_config__WEBPACK_IMPORTED_MODULE_2__.zip) {
            try {
              // Upload session info
              const sessionInfo = new Blob(
                [
                  `Session data for timestamp: ${timestamp}
                    \n user id: ${user_id}
                    \n order details:
                    \n ${JSON.stringify(orderDetails)}`
                ],
                { type: 'text/plain' }
              )
              const sessionFormData = new FormData()
              sessionFormData.append('file', sessionInfo, `${folderName}/session_info.txt`)
              console.log('uploading session info')
              yield fetch(_config__WEBPACK_IMPORTED_MODULE_2__.upload_url, {
                method: 'POST',
                body: sessionFormData
              })
              // Upload HTML snapshots as separate files
              console.log('uploading html snapshots')
              for (const [snapshotId, htmlContent] of Object.entries(htmlSnapshots)) {
                const htmlBlob = new Blob([htmlContent], { type: 'text/html' })
                const formData = new FormData()
                formData.append('file', htmlBlob, `${folderName}/html/${snapshotId}.html`)
                yield fetch(_config__WEBPACK_IMPORTED_MODULE_2__.upload_url, {
                  method: 'POST',
                  body: formData
                })
              }
              // Upload interactions JSON
              console.log('uploading interactions')
              const interactionsBlob = new Blob([JSON.stringify(fullData, null, 2)], {
                type: 'application/json'
              })
              const jsonFormData = new FormData()
              jsonFormData.append('file', interactionsBlob, `${folderName}/interactions.json`)
              yield fetch(_config__WEBPACK_IMPORTED_MODULE_2__.upload_url, {
                method: 'POST',
                body: jsonFormData
              })
              // Upload screenshots
              console.log('uploading screenshots')
              for (const [screenshotData, screenshotId] of storeScreenshots) {
                const response = yield fetch(screenshotData)
                const blob = yield response.blob()
                const formData = new FormData()
                formData.append(
                  'file',
                  blob,
                  `${folderName}/screenshots/${screenshotId.replace(/[:.]/g, '-')}.jpg`
                )
                console.log('uploading screenshots')
                yield fetch(_config__WEBPACK_IMPORTED_MODULE_2__.upload_url, {
                  method: 'POST',
                  body: formData
                })
              }
            } catch (error) {
              console.error('Error uploading data:', error)
              return false
            }
          } else {
            console.log('upload zip file')
            try {
              const zip = new (jszip__WEBPACK_IMPORTED_MODULE_1___default())()
              zip.file(
                'session_info.txt',
                `Session data for timestamp: ${timestamp}
                \n user id: ${user_id}
                \n order details:
                \n ${JSON.stringify(orderDetails)}`
              )
              zip.file('interactions.json', JSON.stringify(fullData, null, 2))
              const screenshotsFolder = zip.folder('screenshots')
              for (const [screenshotData, screenshotId] of storeScreenshots) {
                const response = yield fetch(screenshotData)
                const blob = yield response.blob()
                screenshotsFolder.file(screenshotId.replace(/[:.]/g, '-') + '.jpg', blob)
              }
              const htmlSnapshotsFolder = zip.folder('htmlSnapshots')
              for (const [snapshotId, htmlContent] of Object.entries(htmlSnapshots)) {
                htmlSnapshotsFolder.file(snapshotId + '.html', htmlContent)
              }
              const zipBlob = yield zip.generateAsync({ type: 'blob' })
              const formData = new FormData()
              formData.append('file', zipBlob, `${folderName}.zip`)
              yield fetch(_config__WEBPACK_IMPORTED_MODULE_2__.upload_url, {
                method: 'POST',
                body: formData
              })
            } catch (error) {
              console.error('Error uploading data:', error)
              return false
            }
          }
          chrome.storage.local.remove([
            'htmlSnapshots',
            'interactions',
            'orderDetails',
            'screenshots',
            'reasonsAnnotation'
          ])
          interactions.length = 0
          screenshots.length = 0
          reasonsAnnotation.length = 0
          return true
        } catch (error) {
          console.error('Error uploading data:', error)
          return false
        }
      })
    }
    // Start the periodic upload timer
    function startPeriodicUpload() {
      if (!uploadTimer) {
        uploadTimer = setInterval(uploadDataToServer, 10000) // 10 seconds
      }
    }
    // Stop the periodic upload timer
    function stopPeriodicUpload() {
      if (uploadTimer) {
        clearInterval(uploadTimer)
        uploadTimer = null
      }
    }
    startPeriodicUpload()
  })()

  /******/
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsR0FBRyxJQUFvRCxvQkFBb0IsS0FBSyxFQUE4SyxDQUFDLFlBQVkseUJBQXlCLGdCQUFnQixVQUFVLFVBQVUsTUFBTSxTQUFtQyxDQUFDLGdCQUFnQixPQUFDLE9BQU8sb0JBQW9CLDhDQUE4QyxrQ0FBa0MsWUFBWSxZQUFZLG1DQUFtQyxpQkFBaUIsZUFBZSxzQkFBc0Isb0JBQW9CLFVBQVUsU0FBbUMsS0FBSyxXQUFXLFlBQVksU0FBUyxFQUFFLG1CQUFtQixhQUFhLDBHQUEwRyxxQkFBcUIsMEVBQTBFLFdBQVcsK09BQStPLGtCQUFrQixzQkFBc0Isa0NBQWtDLCtGQUErRix3REFBd0QseUpBQXlKLHNEQUFzRCxXQUFXLGtNQUFrTSxVQUFVLEVBQUUsNEJBQTRCLHFCQUFxQixhQUFhLDRHQUE0RyxzQkFBc0IsdUdBQXVHLGFBQWEsNEJBQTRCLG1JQUFtSSw2QkFBNkIsNkdBQTZHLElBQUksZ0NBQWdDLHlQQUF5UCxvQ0FBb0MsNklBQTZJLGFBQWEsRUFBRSwrRkFBK0YscUJBQXFCLGFBQWEsa0NBQWtDLFNBQVMsdUNBQXVDLGtDQUFrQyw2QkFBNkIscUNBQXFDLHdCQUF3QixFQUFFLHdDQUF3QyxxQkFBcUIsYUFBYSxtQkFBbUIsaUJBQWlCLG1CQUFtQixNQUFNLEtBQUssSUFBSSxZQUFZLElBQUksaUNBQWlDLE9BQU8sU0FBUyxHQUFHLHdCQUF3Qix3RUFBd0UsY0FBYyxNQUFNLFlBQVksSUFBSSw0QkFBNEIsV0FBVyxxQ0FBcUMsY0FBYyxNQUFNLFlBQVksSUFBSSx1Q0FBdUMsV0FBVyxzQkFBc0IsRUFBRSxhQUFhLHFCQUFxQixhQUFhLHlLQUF5SyxHQUFHLHFCQUFxQixhQUFhLFdBQVcsMERBQTBELFdBQVcsRUFBRSxPQUFPLHFCQUFxQixhQUFhLHlMQUF5TCxnQkFBZ0Isa0dBQWtHLG9FQUFvRSxtR0FBbUcsOEJBQThCLDBGQUEwRixnQ0FBZ0MsK0NBQStDLG9DQUFvQyxvQ0FBb0MseUNBQXlDLEVBQUUsV0FBVyw4QkFBOEIsUUFBUSxtQkFBbUIsR0FBRyw4QkFBOEIsMEJBQTBCLCtCQUErQix5QkFBeUIsR0FBRyxFQUFFLGlEQUFpRCxxQkFBcUIsYUFBYSxnQkFBZ0IsV0FBVyxRQUFRLElBQUkseUNBQXlDLFNBQVMsd0JBQXdCLGdUQUFnVCw2Q0FBNkMsaUdBQWlHLFFBQVEsK0JBQStCLFlBQVksOENBQThDLFFBQVEsMENBQTBDLDRDQUE0QyxpQkFBaUIsK1FBQStRLFNBQVMsaUtBQWlLLDRIQUE0SCxzR0FBc0csb0JBQW9CLGlSQUFpUiw2Q0FBNkMsbUVBQW1FLHlHQUF5RyxrQkFBa0IsOERBQThELEdBQUcsc0NBQXNDLHdFQUF3RSxvQ0FBb0MsTUFBTSw4RUFBOEUsV0FBVyx3QkFBd0IsV0FBVyxFQUFFLHdCQUF3QixzQ0FBc0MsbUJBQW1CLDhHQUE4RyxrREFBa0QsaUJBQWlCLG9GQUFvRixVQUFVLGFBQWEsRUFBRSxvQkFBb0Isd0JBQXdCLFdBQVcsRUFBRSwwQkFBMEIsdUNBQXVDLHNCQUFzQiw4QkFBOEIsZ0NBQWdDLHlCQUF5QixlQUFlLDhCQUE4QixhQUFhLEVBQUUsZ0RBQWdELG1DQUFtQyxzRkFBc0YsaUVBQWlFLFdBQVcsYUFBYSxhQUFhLEVBQUUsMENBQTBDLDJJQUEySSwwQ0FBMEMsc0JBQXNCLFdBQVcsK0JBQStCLGtCQUFrQix3QkFBd0Isc0ZBQXNGLDJCQUEyQixXQUFXLE9BQU8sK0JBQStCLDRMQUE0TCwrQkFBK0Isb0JBQW9CLDRDQUE0QyxZQUFZLFdBQVcsUUFBUSxjQUFjLFVBQVUsU0FBUyw2QkFBNkIsNEJBQTRCLDRCQUE0QixXQUFXLGdCQUFnQixhQUFhLEVBQUUsdUZBQXVGLHFCQUFxQixhQUFhLGtEQUFrRCxpQ0FBaUMsNkRBQTZELElBQUksd0JBQXdCLElBQUksb0JBQW9CLGtCQUFrQixnRUFBZ0UsU0FBUyw4RkFBOEYsa0JBQWtCLDhDQUE4Qyw0R0FBNEcsVUFBVSxtQkFBbUIsU0FBUyxXQUFXLFVBQVUsRUFBRSx3Q0FBd0Msc0JBQXNCLGFBQWEsYUFBYSxxQ0FBcUMsc0lBQXNJLG9GQUFvRixZQUFZLDZEQUE2RCxVQUFVLG1KQUFtSiw2QkFBNkIsd0NBQXdDLEVBQUUsdUVBQXVFLHNCQUFzQixhQUFhLHVIQUF1SCxjQUFjLG1DQUFtQyxvREFBb0QseUJBQXlCLEtBQUssc0JBQXNCLDZGQUE2RixXQUFXLEVBQUUsd0JBQXdCLFdBQVcsdUJBQXVCLEVBQUUsOEZBQThGLDZNQUE2TSxlQUFlLG1CQUFtQixtQkFBbUIsdUNBQXVDLDRCQUE0QixXQUFXLG9CQUFvQix3QkFBd0IsbUJBQW1CLGtDQUFrQyxXQUFXLEtBQUssc0RBQXNELHlCQUF5QiwrTUFBK00sMENBQTBDLHVEQUF1RCxHQUFHLEVBQUUsc0dBQXNHLHNCQUFzQixhQUFhLG1EQUFtRCxnQkFBZ0IsNkZBQTZGLG9EQUFvRCxXQUFXLGlEQUFpRCxRQUFRLGFBQWEsV0FBVyxFQUFFLHlCQUF5Qiw0Q0FBNEMsc0JBQXNCLHVDQUF1QyxFQUFFLDhCQUE4QixnRUFBZ0UsK0JBQStCLGlHQUFpRyxhQUFhLEVBQUUsMkNBQTJDLHNCQUFzQixhQUFhLG9DQUFvQyxrQkFBa0IsOEJBQThCLFdBQVcsMEJBQTBCLHFDQUFxQyx5QkFBeUIsa0JBQWtCLHNCQUFzQixhQUFhLEVBQUUseURBQXlELHNCQUFzQixhQUFhLEVBQUUsbUNBQW1DLHNCQUFzQixhQUFhLFdBQVcsOERBQThELHNFQUFzRSxrRkFBa0YsdUJBQXVCLHlCQUF5Qix1Q0FBdUMsb0JBQW9CLG1CQUFtQixzQkFBc0IsMEJBQTBCLHNCQUFzQiw2RkFBNkYsR0FBRyxzQkFBc0IsYUFBYSxrQkFBa0IsdUNBQXVDLElBQUksc1ZBQXNWLGlEQUFpRCx1S0FBdUssV0FBVyxzSUFBc0ksbUJBQW1CLGdCQUFnQix5UEFBeVAsaURBQWlELHlCQUF5QiwrQkFBK0IsZUFBZSxvQ0FBb0MsaUJBQWlCLGdGQUFnRix1QkFBdUIsaUJBQWlCLGNBQWMsNERBQTRELE9BQU8sZ0JBQWdCLDhGQUE4RixxQkFBcUIsVUFBVSw0SEFBNEgsb0JBQW9CLFNBQVMsa0NBQWtDLGtCQUFrQixJQUFJLHNCQUFzQixxRUFBcUUsU0FBUyxRQUFRLGlDQUFpQyx3QkFBd0IsRUFBRSw4QkFBOEIsd0JBQXdCLG9CQUFvQixrQkFBa0IseUNBQXlDLHdCQUF3QixFQUFFLGtEQUFrRCx1QkFBdUIsb0JBQW9CLGNBQWMsb0JBQW9CLG1GQUFtRix5Q0FBeUMsb0NBQW9DLE1BQU0sV0FBVyxpQ0FBaUMsWUFBWSxxQkFBcUIsOEZBQThGLG9DQUFvQyxXQUFXLElBQUksb0JBQW9CLEVBQUUsc0pBQXNKLHVLQUF1SywrS0FBK0ssa0NBQWtDLDZCQUE2QixTQUFTLDRCQUE0Qiw0Q0FBNEMsNkJBQTZCLG9EQUFvRCxrQ0FBa0MsY0FBYyxpRkFBaUYsWUFBWSxFQUFFLGdOQUFnTixzQkFBc0IsYUFBYSxzQkFBc0IsRUFBRSxjQUFjLHNCQUFzQixhQUFhLHdCQUF3QixjQUFjLGVBQWUsWUFBWSxtQkFBbUIsa0JBQWtCLDJEQUEyRCw4QkFBOEIsOENBQThDLGdHQUFnRyxLQUFLLHVHQUF1RyxTQUFTLCtDQUErQywrRkFBK0YsOENBQThDLGtDQUFrQyxzQ0FBc0MsbUVBQW1FLHVCQUF1QixhQUFhLEVBQUUsZ0NBQWdDLHNCQUFzQixhQUFhLG9CQUFvQixjQUFjLDBEQUEwRCxhQUFhLHdCQUF3Qiw4QkFBOEIsd0JBQXdCLDZJQUE2SSxzQkFBc0IsZ0NBQWdDLGtCQUFrQiw0QkFBNEIsb0JBQW9CLHFCQUFxQixVQUFVLHlDQUF5QyxjQUFjLDRCQUE0Qix1QkFBdUIsd0JBQXdCLGdEQUFnRCxzQkFBc0Isa0NBQWtDLG1DQUFtQyxxQkFBcUIsc0JBQXNCLDhGQUE4RixhQUFhLEVBQUUsY0FBYyxzQkFBc0IsYUFBYSw4QkFBOEIsY0FBYyxlQUFlLDZEQUE2RCxvQkFBb0IsbUVBQW1FLHVCQUF1QixhQUFhLEVBQUUsc0NBQXNDLHNCQUFzQixhQUFhLHdCQUF3QixjQUFjLGVBQWUsMkRBQTJELHlDQUF5Qyw4Q0FBOEMsMENBQTBDLCtDQUErQyw0QkFBNEIsa0NBQWtDLG9CQUFvQixtRUFBbUUsdUJBQXVCLGFBQWEsRUFBRSxnQ0FBZ0Msc0JBQXNCLGFBQWEseUJBQXlCLGNBQWMsZUFBZSw2REFBNkQsc0RBQXNELHNFQUFzRSx1QkFBdUIsYUFBYSxFQUFFLGlDQUFpQyxzQkFBc0IsYUFBYSxxSUFBcUksc0JBQXNCLHFCQUFxQiwwS0FBMEssRUFBRSxxSEFBcUgsc0JBQXNCLGFBQWEsK0xBQStMLEdBQUcsc0JBQXNCLGFBQWEsMkNBQTJDLGNBQWMsbURBQW1ELHFEQUFxRCxXQUFXLHFEQUFxRCxFQUFFLGFBQWEsRUFBRSxtQ0FBbUMsc0JBQXNCLGFBQWEsMkNBQTJDLGFBQWEseURBQXlELGlFQUFpRSxzRUFBc0UsYUFBYSxFQUFFLGdEQUFnRCxzQkFBc0IsYUFBYSwyQ0FBMkMsY0FBYywrRUFBK0UscURBQXFELE1BQU0sd0NBQXdDLCtDQUErQyxzQ0FBc0MsYUFBYSxFQUFFLG1DQUFtQyxzQkFBc0IsYUFBYSwyQ0FBMkMsY0FBYywwQkFBMEIsV0FBVyxrSEFBa0gsb0dBQW9HLGFBQWEsV0FBVyxFQUFFLCtDQUErQyw4Q0FBOEMsK0JBQStCLGtKQUFrSix1Q0FBdUMscUpBQXFKLDhCQUE4QiwyQ0FBMkMsaURBQWlELDBDQUEwQyxrQkFBa0IsaURBQWlELE1BQU0sb0RBQW9ELE1BQU0sNkRBQTZELCtCQUErQixhQUFhLDRDQUE0QyxFQUFFLGFBQWEsRUFBRSxtQ0FBbUMsc0JBQXNCLGFBQWEsY0FBYyx5Q0FBeUMsaURBQWlELHVFQUF1RSx3QkFBd0Isb0JBQW9CLGFBQWEsaUJBQWlCLG9CQUFvQixnQkFBZ0IsNEJBQTRCLGFBQWEsSUFBSSxtREFBbUQsU0FBUyxxQkFBcUIsU0FBUyxtQkFBbUIsZ0tBQWdLLGtCQUFrQix1Q0FBdUMsb0JBQW9CLGlGQUFpRixvQkFBb0Isa0NBQWtDLDRCQUE0Qix1Q0FBdUMsa0JBQWtCLGdDQUFnQyw4QkFBOEIsaUZBQWlGLG9FQUFvRSxXQUFXLCtCQUErQixrQkFBa0Isd0JBQXdCLFFBQVEsMkJBQTJCLFdBQVcsT0FBTyxrQkFBa0IsbUdBQW1HLG1CQUFtQiw0Q0FBNEMsdUJBQXVCLDRHQUE0RyxtQkFBbUIsMEJBQTBCLGFBQWEsOEJBQThCLDZEQUE2RCw0QkFBNEIsNklBQTZJLGlCQUFpQixpRkFBaUYscURBQXFELHFCQUFxQiwwQkFBMEIsK0NBQStDLGFBQWEsR0FBRyxzQkFBc0IsYUFBYSwrSEFBK0gsb0JBQW9CLDJDQUEyQyxVQUFVLGdCQUFnQixtQ0FBbUMseURBQXlELDBCQUEwQixrQkFBa0IseUJBQXlCLFVBQVUsc0JBQXNCLElBQUksc0JBQXNCLFVBQVUsOERBQThELGdDQUFnQyxtQ0FBbUMsaUJBQWlCLHFCQUFxQixRQUFRLFdBQVcsbUJBQW1CLFVBQVUsK0JBQStCLHNEQUFzRCw2Q0FBNkMsV0FBVyxpQ0FBaUMsU0FBUyx5Q0FBeUMsOERBQThELFNBQVMsS0FBSyxTQUFTLEtBQUssS0FBSyxXQUFXLEVBQUUsa0JBQWtCLFFBQVEsVUFBVSw0Q0FBNEMsTUFBTSx3QkFBd0IsSUFBSSxrSEFBa0gsU0FBUyxtREFBbUQsYUFBYSx1QkFBdUIsaUJBQWlCLGtCQUFrQixXQUFXLCtDQUErQyx3QkFBd0IsK0JBQStCLHVCQUF1QixPQUFPLG1CQUFtQix5REFBeUQsa0JBQWtCLGlDQUFpQyw0QkFBNEIscUlBQXFJLG1CQUFtQiwyQ0FBMkMsS0FBSyxhQUFhLEVBQUUsK0lBQStJLHNCQUFzQixhQUFhLGtQQUFrUCxLQUFLLHlCQUF5QixJQUFJLHlCQUF5Qix1QkFBdUIsT0FBTyxTQUFTLElBQUksNkZBQTZGLHlEQUF5RCxTQUFTLFlBQVksSUFBSSw2Q0FBNkMsU0FBUyxpQkFBaUIsRUFBRSxxQkFBcUIsc0JBQXNCLGFBQWEsZ0hBQWdILE1BQU0sd0RBQXdELGdCQUFnQixhQUFhLCtDQUErQyxhQUFhLDRCQUE0Qix5QkFBeUIsMkRBQTJELDZCQUE2QixRQUFRLElBQUksMkpBQTJKLHdEQUF3RCxJQUFJLDZRQUE2USxTQUFTLElBQUksMEJBQTBCLGdGQUFnRix3Q0FBd0MsVUFBVSxJQUFJLDRCQUE0Qix1Q0FBdUMsS0FBSywyQkFBMkIsU0FBUyxzQkFBc0IseUZBQXlGLHNGQUFzRix1REFBdUQsc0RBQXNELDhEQUE4RCx3Q0FBd0MsaUJBQWlCLFFBQVEscUdBQXFHLCtCQUErQixtQkFBbUIsb0JBQW9CLE1BQU0saURBQWlELHNCQUFzQixLQUFLLHFDQUFxQyxRQUFRLG9KQUFvSixpQ0FBaUMsRUFBRSw4QkFBOEIsaURBQWlELHlDQUF5QyxzQkFBc0IsMkVBQTJFLFdBQVcsc0NBQXNDLEVBQUUsc0JBQXNCLEVBQUUsMkVBQTJFLHNCQUFzQixhQUFhLDRFQUE0RSxjQUFjLFNBQVMsZ0JBQWdCLFlBQVksV0FBVyw2QkFBNkIsU0FBUywwQ0FBMEMsdUJBQXVCLElBQUkscUJBQXFCLE9BQU8sRUFBRSxTQUFTLElBQUksNkZBQTZGLGdDQUFnQyxTQUFTLHNEQUFzRCxPQUFPLGlDQUFpQyx3QkFBd0IsaURBQWlELEtBQUssSUFBSSw2S0FBNkssa0JBQWtCLDZCQUE2QixpQkFBaUIsV0FBVyxpQ0FBaUMsU0FBUyxpQkFBaUIsc0JBQXNCLElBQUksa0ZBQWtGLFNBQVMsVUFBVSx5QkFBeUIsSUFBSSxpRkFBaUYsU0FBUyxVQUFVLEtBQUssY0FBYyxrQ0FBa0MsMkdBQTJHLElBQUksS0FBSyxpQ0FBaUMsU0FBUyxrQkFBa0IsNEJBQTRCLGdCQUFnQixZQUFZLFdBQVcsY0FBYyxTQUFTLHNCQUFzQixTQUFTLFVBQVUsMkJBQTJCLGdDQUFnQyx5QkFBeUIscUNBQXFDLHdCQUF3QixxQ0FBcUMsd0JBQXdCLHFDQUFxQyxVQUFVLHlDQUF5QyxnQ0FBZ0Msd0JBQXdCLHlCQUF5Qix3QkFBd0IsMkJBQTJCLGdCQUFnQixtQkFBbUIsNEJBQTRCLG1CQUFtQixvREFBb0Qsc0NBQXNDLHlCQUF5Qix3QkFBd0IsMkNBQTJDLGVBQWUsMkJBQTJCLGdDQUFnQyx5QkFBeUIsZ0JBQWdCLHFDQUFxQywyQkFBMkIsZUFBZSwyQkFBMkIsZ0NBQWdDLHlCQUF5Qix5Q0FBeUMsd0JBQXdCLHFDQUFxQyxjQUFjLDZCQUE2Qix1QkFBdUIsa0JBQWtCLHFCQUFxQixrQkFBa0IsdUJBQXVCLGdDQUFnQyxXQUFXLEtBQUssV0FBVyxxRUFBcUUsbUJBQW1CLHlCQUF5Qix3UEFBd1AsNEJBQTRCLCtFQUErRSxxRUFBcUUsYUFBYSxRQUFRLGlCQUFpQiwwRUFBMEUsU0FBUyx5QkFBeUIsd0JBQXdCLHVCQUF1QixFQUFFLDBCQUEwQixjQUFjLDBDQUEwQyxxQkFBcUIsYUFBYSxRQUFRLG1CQUFtQixzSEFBc0gsU0FBUyxzQ0FBc0MsNkNBQTZDLGtMQUFrTCxxQkFBcUIscUJBQXFCLG1CQUFtQix1QkFBdUIsa0JBQWtCLHdCQUF3QixJQUFJLG1CQUFtQixxQkFBcUIscUhBQXFILHNFQUFzRSxnSkFBZ0osR0FBRyxFQUFFLDhFQUE4RSxzQkFBc0IsYUFBYSxtR0FBbUcsY0FBYyxpQ0FBaUMsYUFBYSwyQkFBMkIsMENBQTBDLHFCQUFxQixnQ0FBZ0MsMkdBQTJHLDJCQUEyQix3QkFBd0Isd0JBQXdCLG9DQUFvQyxpQ0FBaUMsa0NBQWtDLHNVQUFzVSwyR0FBMkcsbURBQW1ELHVDQUF1QywyWEFBMlgsOENBQThDLElBQUksMEdBQTBHLHVCQUF1Qiw4Q0FBOEMsMk9BQTJPLDJCQUEyQixRQUFRLFFBQVEsb0JBQW9CLHlLQUF5SywyQkFBMkIsTUFBTSxnREFBZ0QseURBQXlELFdBQVcsaUJBQWlCLG9FQUFvRSw2TkFBNk4sNkJBQTZCLGdFQUFnRSwwUUFBMFEsd0JBQXdCLFFBQVEsZ1dBQWdXLG1MQUFtTCx5YkFBeWIsbUpBQW1KLGdEQUFnRCxxREFBcUQsVUFBVSx1RUFBdUUsNkVBQTZFLDJCQUEyQixpQkFBaUIsa0JBQWtCLDJGQUEyRixhQUFhLEVBQUUscUZBQXFGLHNCQUFzQixhQUFhLDJJQUEySSxnQkFBZ0Isa0NBQWtDLGFBQWEsdUJBQXVCLDJCQUEyQixvQkFBb0IsaUNBQWlDLDJCQUEyQixRQUFRLGlVQUFpVSx5QkFBeUIsd0ZBQXdGLFlBQVksK0tBQStLLGdIQUFnSCw2QkFBNkIsOE5BQThOLG1CQUFtQix5U0FBeVMsbUhBQW1ILDhCQUE4QixtREFBbUQsNEJBQTRCLG9PQUFvTyxpQ0FBaUMsd0JBQXdCLG1DQUFtQyxpVUFBaVUsNkJBQTZCLDJDQUEyQywwQ0FBMEMsRUFBRSxZQUFZLG9FQUFvRSx1QkFBdUIsY0FBYyx1QkFBdUIsd0NBQXdDLGtIQUFrSCxLQUFLLHVDQUF1QywrQkFBK0IsS0FBSyxxQ0FBcUMsb0RBQW9ELDBDQUEwQyxrQ0FBa0MsS0FBSyx3Q0FBd0MseURBQXlELHNDQUFzQyw4QkFBOEIsTUFBTSxpQkFBaUIsdUdBQXVHLFlBQVkseUNBQXlDLDhCQUE4QixNQUFNLGlCQUFpQiwwR0FBMEcsYUFBYSxhQUFhLEVBQUUsc0hBQXNILHNCQUFzQixhQUFhLGtCQUFrQixvTUFBb00sbUVBQW1FLGtJQUFrSSxhQUFhLDJCQUEyQixzQkFBc0IsSUFBSSxtREFBbUQsaURBQWlELHdFQUF3RSx3QkFBd0Isb0ZBQW9GLFNBQVMsNEJBQTRCLHFCQUFxQixxQkFBcUIsNENBQTRDLDBCQUEwQiw4REFBOEQsK0JBQStCLDJHQUEyRywrQkFBK0Isc0ZBQXNGLDhCQUE4QixvSEFBb0gsMkZBQTJGLDhGQUE4RixLQUFLLFdBQVcsd0JBQXdCLFlBQVksRUFBRSxtSEFBbUgsc0JBQXNCLGFBQWEsYUFBYSx1REFBdUQsTUFBTSxtREFBbUQsYUFBYSxpQkFBaUIsZUFBZSxnQkFBZ0IseUlBQXlJLHlDQUF5QyxnQ0FBZ0MsaUVBQWlFLDJDQUEyQyxZQUFZLGlCQUFpQixLQUFLLDJCQUEyQixpQ0FBaUMsd0JBQXdCLFNBQVMsYUFBYSxRQUFRLEtBQUssbUJBQW1CLEVBQUUsRUFBRSxrQkFBa0IsTUFBTSxRQUFRLFdBQVcsS0FBSyxzQkFBc0IsdUJBQXVCLGdDQUFnQyxxQkFBTSxDQUFDLHFCQUFNLG1FQUFtRSxFQUFFLEdBQUcsc0JBQXNCLGFBQWEscUJBQXFCLGNBQWMsUUFBUSw4Q0FBOEMsY0FBYywyRUFBMkUsZ0VBQWdFLGtCQUFrQix3TEFBd0wsa0JBQWtCLGFBQWEsTUFBTSxJQUFJLE9BQU8sU0FBUyxxQkFBcUIscUZBQXFGLEVBQUUsY0FBYyxnQkFBZ0IseUZBQXlGLHNCQUFzQixnQkFBZ0IsU0FBUyxjQUFjLHdCQUF3QixjQUFjLHlCQUF5QixtQkFBbUIsT0FBTyxFQUFFLCtCQUErQixnQkFBZ0IsU0FBUyxJQUFJLGdDQUFnQyxTQUFTLDJCQUEyQixTQUFTLDRDQUE0QyxvQ0FBb0MsdUJBQXVCLDZCQUE2QixzQ0FBc0MsU0FBUyxFQUFFLGFBQWEsc0NBQXNDLFFBQVEsRUFBRSxFQUFFLCtCQUErQix5QkFBeUIsZ0NBQWdDLDBGQUEwRiw4QkFBOEIsa0ZBQWtGLFNBQVMsdUNBQXVDLDBCQUEwQiw0Q0FBNEMsbUNBQW1DLHNDQUFzQyx5QkFBeUIsMkNBQTJDLGtDQUFrQyx5QkFBeUIsYUFBYSxpREFBaUQsY0FBYyxZQUFZLEtBQUssc0JBQXNCLDhCQUE4QixNQUFNLDZCQUE2QixTQUFTLHdCQUF3QixzQkFBc0IsOEJBQThCLE1BQU0sNEJBQTRCLFNBQVMsdUJBQXVCLDhCQUE4QixnQ0FBZ0Msc0JBQXNCLGtCQUFrQixxQkFBcUIsbUJBQW1CLFdBQVcsOEdBQThHLG9CQUFvQiw4QkFBOEIsMENBQTBDLEtBQUssTUFBTSxXQUFXLFNBQVMsZ0JBQWdCLDhCQUE4Qix5Q0FBeUMsYUFBYSx3QkFBd0IsR0FBRyxvQkFBb0IsV0FBVyw4R0FBOEcsb0JBQW9CLDhCQUE4Qix1QkFBdUIsS0FBSyxNQUFNLHNDQUFzQyx5QkFBeUIsYUFBYSx3QkFBd0IsRUFBRSxNQUFNLFVBQVUsRUFBRSxhQUFhLHNCQUFzQixhQUFhLFNBQVMsa0hBQWtILEVBQUUsd0ZBQXdGLHNCQUFzQixhQUFhLGlLQUFpSyxjQUFjLHdDQUF3Qyx1QkFBdUIsMkVBQTJFLE1BQU0sRUFBRSxtQkFBbUIsdU1BQXVNLG9GQUFvRiwrQkFBK0Isa0VBQWtFLE1BQU0sd05BQXdOLG1CQUFtQixnQkFBZ0IsZUFBZSw0Q0FBNEMsZ0JBQWdCLCtCQUErQiw2Q0FBNkMsdUJBQXVCLCtLQUErSyxHQUFHLDRJQUE0SSwyTEFBMkwsOENBQThDLG1IQUFtSCxnQ0FBZ0Msb0JBQW9CLCtCQUErQiwrSkFBK0osb0RBQW9ELGNBQWMsZ0JBQWdCLHNCQUFzQixjQUFjLGtCQUFrQixFQUFFLHNHQUFzRyxzQkFBc0IsYUFBYSwrTEFBK0wsY0FBYyx3Q0FBd0MsdUJBQXVCLG1DQUFtQyxNQUFNLEVBQUUsbUJBQW1CLHlWQUF5Viw2Q0FBNkMsb0NBQW9DLDREQUE0RCxnQkFBZ0IsZUFBZSw0Q0FBNEMsZ0JBQWdCLCtCQUErQixvRkFBb0YsdUJBQXVCLHNNQUFzTSxHQUFHLDhXQUE4VywrWEFBK1gsMkRBQTJELHNMQUFzTCxnQ0FBZ0Msb0JBQW9CLCtCQUErQixvS0FBb0ssb0RBQW9ELGNBQWMsZ0JBQWdCLFlBQVksRUFBRSxpSkFBaUosc0JBQXNCLGFBQWEsc0dBQXNHLHFCQUFxQixrREFBa0QsU0FBUyxFQUFFLGdCQUFnQixNQUFNLGtFQUFrRSxpREFBaUQsU0FBUywyQkFBMkIsaUVBQWlFLE9BQU8sNkJBQTZCLHFEQUFxRCxpQkFBaUIsSUFBSSxrQkFBa0IsMkJBQTJCLGdCQUFnQixxQkFBcUIsSUFBSSxtQkFBbUIseUNBQXlDLElBQUksa0NBQWtDLFVBQVUsSUFBSSw2QkFBNkIsWUFBWSxJQUFJLGtCQUFrQiwyQkFBMkIsOEJBQThCLHVCQUF1QixvSUFBb0ksZUFBZSxHQUFHLHNCQUFzQixhQUFhLDhCQUE4QixJQUFJLG9DQUFvQyxTQUFTLEtBQUssSUFBSSxrREFBa0QsU0FBUyxLQUFLLDhCQUE4QixNQUFNLHdEQUF3RCxnQkFBZ0Isb0dBQW9HLGlCQUFpQixJQUFJLGlDQUFpQyxTQUFTLHlDQUF5Qyw2QkFBNkIsUUFBUSxJQUFJLDJKQUEySiwwQkFBMEIsSUFBSSw2UUFBNlEsU0FBUyw2QkFBNkIscUJBQXFCLDZCQUE2Qiw4Q0FBOEMsSUFBSSx5QkFBeUIsU0FBUyw0QkFBNEIsMkNBQTJDLFVBQVUsSUFBSSw0QkFBNEIsdUNBQXVDLEtBQUssMkJBQTJCLFNBQVMsc0JBQXNCLHlGQUF5RixjQUFjLDRCQUE0QixNQUFNLGlEQUFpRCxzQkFBc0IsS0FBSyxzQ0FBc0MsRUFBRSxjQUFjLHNCQUFzQixhQUFhLDRCQUE0Qix5Q0FBeUMsTUFBTSxFQUFFLHFCQUFxQix5QkFBeUIsRUFBRSxrQkFBa0Isa0JBQWtCLEdBQUcsc0JBQXNCLGFBQWEsV0FBVywrWEFBK1gsR0FBRyxzQkFBc0IsYUFBYSxpQkFBaUIsbUJBQW1CLE1BQU0sS0FBSyxJQUFJLFlBQVksSUFBSSxpQ0FBaUMsT0FBTyxTQUFTLEdBQUcsNEJBQTRCLGNBQWMsTUFBTSxZQUFZLElBQUksNEJBQTRCLFlBQVksR0FBRyxzQkFBc0IsYUFBYSw4TUFBOE0sZ0JBQWdCLG9CQUFvQixjQUFjLHVCQUF1QixjQUFjLG1CQUFtQixPQUFPLFFBQVEsY0FBYywwQkFBMEIsaU5BQWlOLGdCQUFnQixxSEFBcUgsZ0JBQWdCLDZCQUE2QixnQkFBZ0Isc0VBQXNFLGdCQUFnQiw2TEFBNkwsb0VBQW9FLEdBQUcsK0RBQStELFNBQVMsSUFBSSxtSkFBbUosd0JBQXdCLGtDQUFrQyxzQkFBc0IsNEJBQTRCLG9DQUFvQyxjQUFjLG1DQUFtQyxHQUFHLCtEQUErRCx3R0FBd0csdUNBQXVDLEVBQUUsVUFBVSx1Q0FBdUMsRUFBRSxLQUFLLDZCQUE2QixzWkFBc1osc0tBQXNLLEdBQUcsMENBQTBDLGdCQUFnQixhQUFhLEVBQUUsa0JBQWtCLHNDQUFzQyx5QkFBeUIsOFhBQThYLHFCQUFxQiwrS0FBK0ssRUFBRSxhQUFhLGlKQUFpSix3RUFBd0UsOENBQThDLHNJQUFzSSxnQkFBZ0IsZUFBZSxFQUFFLGtCQUFrQixzQ0FBc0MseUJBQXlCLHllQUF5ZSx3SUFBd0ksb0xBQW9MLEVBQUUsa0dBQWtHLDJCQUEyQixpSEFBaUgsb0RBQW9ELHlOQUF5TixzQkFBc0IsbUZBQW1GLGFBQWEsOG5DQUE4bkMsY0FBYyxNQUFNLDZNQUE2TSxjQUFjLFdBQVcsMEJBQTBCLDZTQUE2UyxZQUFZLHdCQUF3QixlQUFlLFFBQVEsOEdBQThHLGFBQWEsWUFBWSx1ZUFBdWUsK0JBQStCLFlBQVksc0RBQXNELEVBQUUsbUJBQW1CLHdDQUF3Qyx5QkFBeUIsc0NBQXNDLHNCQUFzQixrSEFBa0gsaUZBQWlGLG9IQUFvSCwwTkFBME4sdUJBQXVCLHlGQUF5Riw0REFBNEQseUJBQXlCLFlBQVksNENBQTRDLHlHQUF5RyxtckJBQW1yQixLQUFLLDJCQUEyQixxTEFBcUwsb0NBQW9DLGdCQUFnQiwwTUFBME0sZ0RBQWdELDBJQUEwSSxpQkFBaUIsbUNBQW1DLFlBQVksR0FBRyxtS0FBbUssSUFBSSxNQUFNLG9GQUFvRixhQUFhLDhHQUE4RyxpQkFBaUIsc0NBQXNDLFlBQVksR0FBRyxtS0FBbUssSUFBSSxNQUFNLDBGQUEwRixhQUFhLG1HQUFtRyxrQkFBa0IsaU1BQWlNLGlEQUFpRCx5REFBeUQsaURBQWlELDJEQUEyRCxtQ0FBbUMsV0FBVyxFQUFFLDRDQUE0QyxrQkFBa0IsTUFBTSxrSUFBa0ksMEdBQTBHLG1DQUFtQyw0QkFBNEIsRUFBRSxtQkFBbUIsdUNBQXVDLHlCQUF5QiwwR0FBMEcsZUFBZSxJQUFJLDJHQUEyRyxnRkFBZ0YsbVBBQW1QLDBHQUEwRywyQkFBMkIseUZBQXlGLG1NQUFtTSw2U0FBNlMsMEJBQTBCLE1BQU0sa0lBQWtJLHNDQUFzQywrQkFBK0IseUJBQXlCLHVFQUF1RSxnUkFBZ1IsZUFBZSxFQUFFLHFDQUFxQyx5SEFBeUgsRUFBRSxrQ0FBa0MsOExBQThMLG9EQUFvRCxFQUFFLDhFQUE4RSxzQkFBc0IsYUFBYSxxQkFBcUIsd0lBQXdJLEdBQUcsc0JBQXNCLGFBQWEsd0JBQXdCLHNEQUFzRCx5UEFBeVAsS0FBSyxxREFBcUQsUUFBUSxFQUFFLHdEQUF3RCxLQUFLLFlBQVksY0FBYyw0QkFBNEIsV0FBVyxTQUFTLFVBQVUsUUFBUSw4Q0FBOEMsUUFBUSw2SEFBNkgsUUFBUSxFQUFFLDRDQUE0QyxjQUFjLDRCQUE0QixXQUFXLHdDQUF3QyxRQUFRLHdGQUF3RixnREFBZ0QsUUFBUSwwQkFBMEIsc0JBQXNCLGdEQUFnRCxRQUFRLGtCQUFrQixlQUFlLFNBQVMsa0JBQWtCLEVBQUUsV0FBVyxhQUFhLHNCQUFzQixTQUFTLGtCQUFrQixFQUFFLFlBQVksV0FBVyxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixTQUFTLGtCQUFrQixFQUFFLFVBQVUsS0FBSyxJQUFJLGdEQUFnRCx3Q0FBd0MsS0FBSyxVQUFVLG1EQUFtRCxFQUFFLHdDQUF3QyxPQUFPLE9BQU8sZ0JBQWdCLHlJQUF5SSxHQUFHLHNCQUFzQixhQUFhLCtIQUErSCxjQUFjLDhEQUE4RCxhQUFhLCtmQUErZixjQUFjLE1BQU0sMFFBQTBRLGNBQWMsTUFBTSxtRUFBbUUsZ0JBQWdCLFFBQVEsbUtBQW1LLGdCQUFnQixRQUFRLDhFQUE4RSxhQUFhLGNBQWMsTUFBTSxNQUFNLDZDQUE2QyxNQUFNLGVBQWUsS0FBSyxNQUFNLGVBQWUsS0FBSyxNQUFNLGVBQWUsS0FBSyxNQUFNLGVBQWUsaUNBQWlDLE9BQU8sTUFBTSxLQUFLLGVBQWUsNEJBQTRCLE9BQU8sT0FBTyxrREFBa0Qsb0JBQW9CLGdCQUFnQixrWUFBa1ksa0ZBQWtGLGVBQWUsMENBQTBDLDJIQUEySCw4REFBOEQsMElBQTBJLFFBQVEsZ0JBQWdCLHNCQUFzQixVQUFVLE1BQU0sS0FBSyxLQUFLLEVBQUUsaUJBQWlCLHNCQUFzQix3QkFBd0IsMEVBQTBFLE1BQU0sNkVBQTZFLHlDQUF5QyxNQUFNLGNBQWMsNkNBQTZDLE1BQU0sZ0RBQWdELG1CQUFtQixzQ0FBc0MsTUFBTSx1REFBdUQsTUFBTSxZQUFZLEtBQUssRUFBRSxpQkFBaUIsc0JBQXNCLCtCQUErQiw2Q0FBNkMsTUFBTSxrQkFBa0IsMkNBQTJDLE1BQU0sOEdBQThHLFlBQVksS0FBSyxFQUFFLGlCQUFpQixzQkFBc0IseUlBQXlJLFlBQVksS0FBSyxFQUFFLGlCQUFpQixzQkFBc0IsOEhBQThILHdCQUF3QixLQUFLLEtBQUssRUFBRSxpQkFBaUIsc0JBQXNCLGdIQUFnSCxpQ0FBaUMsU0FBUyxvUUFBb1Esb0JBQW9CLHdCQUF3QixpQkFBaUIsUUFBUSxtRkFBbUYsRUFBRSwrREFBK0QsZ0NBQWdDLG9CQUFvQix3QkFBd0IsaUJBQWlCLFFBQVEsc0ZBQXNGLEVBQUUsK0RBQStELG1DQUFtQyxTQUFTLHVCQUF1QixLQUFLLEtBQUssRUFBRSxpQkFBaUIsc0JBQXNCLHdCQUF3QixzQ0FBc0MsTUFBTSxNQUFNLDhFQUE4RSxNQUFNLGFBQWEsS0FBSyxFQUFFLGlCQUFpQixzQkFBc0IscUNBQXFDLHlHQUF5Ryw0QkFBNEIsZ0NBQWdDLG1CQUFtQiwwQkFBMEIsTUFBTSxLQUFLLElBQUksRUFBRSxpQkFBaUIsc0JBQXNCLG1DQUFtQyxpQkFBaUIsTUFBTSxxQ0FBcUMsWUFBWSxRQUFRLGlCQUFpQixNQUFNLDRDQUE0QyxZQUFZLE1BQU0sNEJBQTRCLEtBQUssRUFBRSxpQkFBaUIsc0JBQXNCLDhCQUE4QiwrQ0FBK0MsTUFBTSxrREFBa0Qsa0JBQWtCLHVCQUF1Qix1Q0FBdUMsc0RBQXNELE1BQU0sVUFBVSxNQUFNLGFBQWEsS0FBSyxFQUFFLGlCQUFpQixzQkFBc0IsbUhBQW1ILHNEQUFzRCxNQUFNLG1CQUFtQixhQUFhLGVBQWUsRUFBRSxLQUFLLElBQUksRUFBRSxpQkFBaUIsc0JBQXNCLG9DQUFvQyxLQUFLLFVBQVUsdUJBQXVCLHFDQUFxQyxlQUFlLDZEQUE2RCwyQ0FBMkMsTUFBTSxtQkFBbUIsYUFBYSxzQkFBc0IsRUFBRSxLQUFLLHdFQUF3RSxFQUFFLGlCQUFpQixzQkFBc0IsdUNBQXVDLEtBQUssV0FBVyxVQUFVLElBQUksRUFBRSxpQkFBaUIsc0JBQXNCLDJCQUEyQiw0Q0FBNEMsTUFBTSx5Q0FBeUMsZ0JBQWdCLFVBQVUsSUFBSSxFQUFFLGlCQUFpQixzQkFBc0Isc0NBQXNDLEtBQUssVUFBVSxJQUFJLEVBQUUsaUJBQWlCLHNCQUFzQix5Q0FBeUMsNEJBQTRCLDRDQUE0QyxNQUFNLEtBQUssSUFBSSxxQkFBcUIscUJBQXFCLG9CQUFvQix1REFBdUQsTUFBTSxrQkFBa0IsZUFBZSxpRUFBaUUsOENBQThDLE1BQU0sd0NBQXdDLGdCQUFnQix5RUFBeUUsd0NBQXdDLE1BQU0sMkJBQTJCLGtCQUFrQix5QkFBeUIsaU1BQWlNLE1BQU0sYUFBYSx3RUFBd0UsRUFBRSxpQkFBaUIsc0JBQXNCLGtCQUFrQixnQkFBZ0IsNkVBQTZFLEVBQUUsaUJBQWlCLHNCQUFzQixzQkFBc0IsMkNBQTJDLFVBQVUsTUFBTSxTQUFTLG9CQUFvQixNQUFNLFNBQVMsOENBQThDLE1BQU0sdUJBQXVCLG9CQUFvQixjQUFjLElBQUksRUFBRSxpQkFBaUIsc0JBQXNCLG1FQUFtRSx5QkFBeUIsYUFBYSwwRUFBMEUsRUFBRSxpQkFBaUIsc0JBQXNCLGVBQWUsZ0JBQWdCLDhFQUE4RSxFQUFFLGlCQUFpQixzQkFBc0Isc0JBQXNCLCtCQUErQix3Q0FBd0MsTUFBTSxrQ0FBa0Msb0JBQW9CLGNBQWMsSUFBSSxFQUFFLGlCQUFpQixzQkFBc0IsbUVBQW1FLG9CQUFvQixnREFBZ0QsTUFBTSxVQUFVLHlCQUF5QixxQkFBcUIsbUNBQW1DLGdEQUFnRCxNQUFNLGlGQUFpRixpQ0FBaUMsZ0NBQWdDLGtCQUFrQixFQUFFLDBCQUEwQixNQUFNLHlCQUF5Qiw4QkFBOEIsTUFBTSxtQkFBbUIsS0FBSyxLQUFLLEVBQUUsaUJBQWlCLHNCQUFzQixxSUFBcUksdUNBQXVDLE1BQU0sTUFBTSxVQUFVLDRCQUE0QixLQUFLLEtBQUssRUFBRSxpQkFBaUIsc0JBQXNCLDZCQUE2Qix5Q0FBeUMsTUFBTSxNQUFNLFVBQVUsWUFBWSxRQUFRLGFBQWEsUUFBUSxpQkFBaUIseUJBQXlCLDhkQUE4ZCwwQkFBMEIseUJBQXlCLGNBQWMsZ0RBQWdELGtDQUFrQyxNQUFNLHFFQUFxRSxzQ0FBc0MsaUJBQWlCLHdJQUF3SSxvREFBb0QsRUFBRSxnRkFBZ0Ysc0JBQXNCLGFBQWEsc2JBQXNiLG9DQUFvQyxpSUFBaUksUUFBUSxNQUFNLFdBQVcsUUFBUSxJQUFJLGdCQUFnQixhQUFhLGVBQWUsS0FBSyxzRUFBc0UsUUFBUSxjQUFjLEtBQUsscUJBQXFCLE1BQU0sa0NBQWtDLGdDQUFnQyxlQUFlLEtBQUsscUJBQXFCLFFBQVEsSUFBSSxtQ0FBbUMsK0lBQStJLE1BQU0sRUFBRSx3RkFBd0YseUNBQXlDLEVBQUUsYUFBYSxJQUFJLE9BQU8sMENBQTBDLGVBQWUsWUFBWSxtQkFBbUIsbUNBQW1DLHlCQUF5QixXQUFXLCtDQUErQyw0QkFBNEIsb0RBQW9ELEVBQUUscUJBQXFCLHNCQUFzQixhQUFhLFdBQVcsNEtBQTRLLEdBQUcsc0JBQXNCLGFBQWEsbUNBQW1DLGNBQWMsbUJBQW1CLE9BQU8sUUFBUSx3VUFBd1UsS0FBSyxxQkFBcUIsS0FBSyxxQkFBcUIsS0FBSyxxQkFBcUIsS0FBSyxtQkFBbUIsS0FBSyx5QkFBeUIsc0JBQXNCLGlIQUFpSCxnQkFBZ0IsaURBQWlELGNBQWMsaUNBQWlDLGdCQUFnQixzRUFBc0Usa0JBQWtCLG9KQUFvSixrQkFBa0IscUJBQXFCLGdCQUFnQixZQUFZLDBCQUEwQixFQUFFLGFBQWEsa0JBQWtCLDZCQUE2QixRQUFRLEtBQUssdUJBQXVCLFFBQVEsS0FBSyxLQUFLLGVBQWUsNkJBQTZCLGNBQWMsTUFBTSxRQUFRLElBQUksdUJBQXVCLFFBQVEsSUFBSSx1QkFBdUIsUUFBUSxJQUFJLHFCQUFxQixtRUFBbUUsY0FBYyx1R0FBdUcsb0JBQW9CLGdCQUFnQiwwQ0FBMEMsa0JBQWtCLDJCQUEyQixpR0FBaUcsK0JBQStCLFlBQVksa0JBQWtCLGdCQUFnQix1QkFBdUIsd05BQXdOLEVBQUUsU0FBUyxnQkFBZ0Isa0dBQWtHLGtDQUFrQyxJQUFJLGtFQUFrRSxLQUFLLGFBQWEsZ0dBQWdHLGlDQUFpQyxLQUFLLGFBQWEsUUFBUSx3UEFBd1AsRUFBRSw2Q0FBNkMsMktBQTJLLFFBQVEsS0FBSyxvQkFBb0IsK0NBQStDLElBQUksd0tBQXdLLFVBQVUsR0FBRyxVQUFVLGtCQUFrQixLQUFLLHdEQUF3RCxXQUFXLFFBQVEsTUFBTSx3QkFBd0IsTUFBTSxxRkFBcUYsd0JBQXdCLGtCQUFrQixnQ0FBZ0MsOENBQThDLEtBQUssc01BQXNNLGtCQUFrQixnQ0FBZ0MsMkJBQTJCLEtBQUssMkNBQTJDLFlBQVksd0JBQXdCLEVBQUUsMElBQTBJLGlEQUFpRCxLQUFLLFNBQVMsb0JBQW9CLHdDQUF3Qyx1RkFBdUYsV0FBVyx1QkFBdUIsZUFBZSwrQkFBK0IsVUFBVSxNQUFNLG1CQUFtQixVQUFVLGFBQWEsbUJBQW1CLEtBQUssbUJBQW1CLFVBQVUsYUFBYSxVQUFVLElBQUksc0JBQXNCLFlBQVksaUJBQWlCLFFBQVEsS0FBSyxXQUFXLFFBQVEsT0FBTyx1QkFBdUIsS0FBSyxPQUFPLHVCQUF1QixLQUFLLE9BQU8sdUJBQXVCLEtBQUssT0FBTyx1QkFBdUIsbUJBQW1CLElBQUksNkJBQTZCLHNFQUFzRSwrSEFBK0gsMERBQTBELFlBQVksK0RBQStELG1CQUFtQixRQUFRLE1BQU0saURBQWlELDBFQUEwRSxTQUFTLElBQUkscUNBQXFDLFNBQVMsK0NBQStDLE1BQU0sK0ZBQStGLDhCQUE4QixLQUFLLGtDQUFrQyxvTEFBb0wsTUFBTSwyQ0FBMkMsSUFBSSwrQkFBK0IsMENBQTBDLDJGQUEyRiw2QkFBNkIsZ1JBQWdSLHlCQUF5Qiw4QkFBOEIsNElBQTRJLEtBQUssRUFBRSxxQkFBcUIsc0JBQXNCLGFBQWEscUJBQXFCLDZMQUE2TCxHQUFHLHNCQUFzQixhQUFhLGVBQWUsYUFBYSxvQkFBb0Isb0JBQW9CLHFFQUFxRSwrQ0FBK0Msc0NBQXNDLDRCQUE0QixLQUFLLEVBQUUsWUFBWSxvQ0FBb0MsdUJBQXVCLDhCQUE4QixLQUFLLHdDQUF3Qyx1SUFBdUksdUJBQXVCLHVFQUF1RSxVQUFVLGFBQWEsdUJBQXVCLHVGQUF1RixnQ0FBZ0MsZ0NBQWdDLHVEQUF1RCxrQkFBa0IsY0FBYyxrQkFBa0IsNEJBQTRCLDZDQUE2Qyw0Q0FBNEMsV0FBVyx3QkFBd0IsT0FBTyxtQkFBbUIsdUJBQXVCLG9CQUFvQixjQUFjLFlBQVksY0FBYyx1QkFBdUIsS0FBSyxXQUFXLE1BQU0sS0FBSyxJQUFJLGFBQWEsMEJBQTBCLGlCQUFpQixXQUFXLE1BQU0sZUFBZSxNQUFNLG9CQUFvQixNQUFNLHlCQUF5QixNQUFNLHNCQUFzQixJQUFJLFFBQVEsYUFBYSxjQUFjLDBGQUEwRixrREFBa0QsZ0NBQWdDLHFCQUFNLENBQUMscUJBQU0sbUVBQW1FLEVBQUUsR0FBRyxFQUFFLEdBQUcsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnI5OUY7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEUsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNB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QUF3RCxXQUFXO0FBQ25FLGdDQUFnQywrQ0FBVSxJQUFJLGdDQUFnQztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2pzemlwL2Rpc3QvanN6aXAubWluLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9yZWNpcGVfbmV3LnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9iYWNrZ3JvdW5kX3Rlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG5cbkpTWmlwIHYzLjEwLjEgLSBBIEphdmFTY3JpcHQgY2xhc3MgZm9yIGdlbmVyYXRpbmcgYW5kIHJlYWRpbmcgemlwIGZpbGVzXG48aHR0cDovL3N0dWFydGsuY29tL2pzemlwPlxuXG4oYykgMjAwOS0yMDE2IFN0dWFydCBLbmlnaHRsZXkgPHN0dWFydCBbYXRdIHN0dWFydGsuY29tPlxuRHVhbCBsaWNlbmNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2Ugb3IgR1BMdjMuIFNlZSBodHRwczovL3Jhdy5naXRodWIuY29tL1N0dWsvanN6aXAvbWFpbi9MSUNFTlNFLm1hcmtkb3duLlxuXG5KU1ppcCB1c2VzIHRoZSBsaWJyYXJ5IHBha28gcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIDpcbmh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGFrby9ibG9iL21haW4vTElDRU5TRVxuKi9cblxuIWZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5KU1ppcD1lKCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBzKGEsbyxoKXtmdW5jdGlvbiB1KHIsZSl7aWYoIW9bcl0pe2lmKCFhW3JdKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFlJiZ0KXJldHVybiB0KHIsITApO2lmKGwpcmV0dXJuIGwociwhMCk7dmFyIG49bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIityK1wiJ1wiKTt0aHJvdyBuLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsbn12YXIgaT1vW3JdPXtleHBvcnRzOnt9fTthW3JdWzBdLmNhbGwoaS5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciB0PWFbcl1bMV1bZV07cmV0dXJuIHUodHx8ZSl9LGksaS5leHBvcnRzLHMsYSxvLGgpfXJldHVybiBvW3JdLmV4cG9ydHN9Zm9yKHZhciBsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsZT0wO2U8aC5sZW5ndGg7ZSsrKXUoaFtlXSk7cmV0dXJuIHV9KHsxOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGQ9ZShcIi4vdXRpbHNcIiksYz1lKFwiLi9zdXBwb3J0XCIpLHA9XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO3IuZW5jb2RlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxyLG4saSxzLGEsbyxoPVtdLHU9MCxsPWUubGVuZ3RoLGY9bCxjPVwic3RyaW5nXCIhPT1kLmdldFR5cGVPZihlKTt1PGUubGVuZ3RoOylmPWwtdSxuPWM/KHQ9ZVt1KytdLHI9dTxsP2VbdSsrXTowLHU8bD9lW3UrK106MCk6KHQ9ZS5jaGFyQ29kZUF0KHUrKykscj11PGw/ZS5jaGFyQ29kZUF0KHUrKyk6MCx1PGw/ZS5jaGFyQ29kZUF0KHUrKyk6MCksaT10Pj4yLHM9KDMmdCk8PDR8cj4+NCxhPTE8Zj8oMTUmcik8PDJ8bj4+Njo2NCxvPTI8Zj82MyZuOjY0LGgucHVzaChwLmNoYXJBdChpKStwLmNoYXJBdChzKStwLmNoYXJBdChhKStwLmNoYXJBdChvKSk7cmV0dXJuIGguam9pbihcIlwiKX0sci5kZWNvZGU9ZnVuY3Rpb24oZSl7dmFyIHQscixuLGkscyxhLG89MCxoPTAsdT1cImRhdGE6XCI7aWYoZS5zdWJzdHIoMCx1Lmxlbmd0aCk9PT11KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBpdCBsb29rcyBsaWtlIGEgZGF0YSB1cmwuXCIpO3ZhciBsLGY9MyooZT1lLnJlcGxhY2UoL1teQS1aYS16MC05Ky89XS9nLFwiXCIpKS5sZW5ndGgvNDtpZihlLmNoYXJBdChlLmxlbmd0aC0xKT09PXAuY2hhckF0KDY0KSYmZi0tLGUuY2hhckF0KGUubGVuZ3RoLTIpPT09cC5jaGFyQXQoNjQpJiZmLS0sZiUxIT0wKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBiYWQgY29udGVudCBsZW5ndGguXCIpO2ZvcihsPWMudWludDhhcnJheT9uZXcgVWludDhBcnJheSgwfGYpOm5ldyBBcnJheSgwfGYpO288ZS5sZW5ndGg7KXQ9cC5pbmRleE9mKGUuY2hhckF0KG8rKykpPDwyfChpPXAuaW5kZXhPZihlLmNoYXJBdChvKyspKSk+PjQscj0oMTUmaSk8PDR8KHM9cC5pbmRleE9mKGUuY2hhckF0KG8rKykpKT4+MixuPSgzJnMpPDw2fChhPXAuaW5kZXhPZihlLmNoYXJBdChvKyspKSksbFtoKytdPXQsNjQhPT1zJiYobFtoKytdPXIpLDY0IT09YSYmKGxbaCsrXT1uKTtyZXR1cm4gbH19LHtcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGlsc1wiOjMyfV0sMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL2V4dGVybmFsXCIpLGk9ZShcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIikscz1lKFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiKSxhPWUoXCIuL3N0cmVhbS9EYXRhTGVuZ3RoUHJvYmVcIik7ZnVuY3Rpb24gbyhlLHQscixuLGkpe3RoaXMuY29tcHJlc3NlZFNpemU9ZSx0aGlzLnVuY29tcHJlc3NlZFNpemU9dCx0aGlzLmNyYzMyPXIsdGhpcy5jb21wcmVzc2lvbj1uLHRoaXMuY29tcHJlc3NlZENvbnRlbnQ9aX1vLnByb3RvdHlwZT17Z2V0Q29udGVudFdvcmtlcjpmdW5jdGlvbigpe3ZhciBlPW5ldyBpKG4uUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcHJlc3NlZENvbnRlbnQpKS5waXBlKHRoaXMuY29tcHJlc3Npb24udW5jb21wcmVzc1dvcmtlcigpKS5waXBlKG5ldyBhKFwiZGF0YV9sZW5ndGhcIikpLHQ9dGhpcztyZXR1cm4gZS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7aWYodGhpcy5zdHJlYW1JbmZvLmRhdGFfbGVuZ3RoIT09dC51bmNvbXByZXNzZWRTaXplKXRocm93IG5ldyBFcnJvcihcIkJ1ZyA6IHVuY29tcHJlc3NlZCBkYXRhIHNpemUgbWlzbWF0Y2hcIil9KSxlfSxnZXRDb21wcmVzc2VkV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBpKG4uUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcHJlc3NlZENvbnRlbnQpKS53aXRoU3RyZWFtSW5mbyhcImNvbXByZXNzZWRTaXplXCIsdGhpcy5jb21wcmVzc2VkU2l6ZSkud2l0aFN0cmVhbUluZm8oXCJ1bmNvbXByZXNzZWRTaXplXCIsdGhpcy51bmNvbXByZXNzZWRTaXplKS53aXRoU3RyZWFtSW5mbyhcImNyYzMyXCIsdGhpcy5jcmMzMikud2l0aFN0cmVhbUluZm8oXCJjb21wcmVzc2lvblwiLHRoaXMuY29tcHJlc3Npb24pfX0sby5jcmVhdGVXb3JrZXJGcm9tPWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gZS5waXBlKG5ldyBzKS5waXBlKG5ldyBhKFwidW5jb21wcmVzc2VkU2l6ZVwiKSkucGlwZSh0LmNvbXByZXNzV29ya2VyKHIpKS5waXBlKG5ldyBhKFwiY29tcHJlc3NlZFNpemVcIikpLndpdGhTdHJlYW1JbmZvKFwiY29tcHJlc3Npb25cIix0KX0sdC5leHBvcnRzPW99LHtcIi4vZXh0ZXJuYWxcIjo2LFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiOjI1LFwiLi9zdHJlYW0vRGF0YUxlbmd0aFByb2JlXCI6MjYsXCIuL3N0cmVhbS9EYXRhV29ya2VyXCI6Mjd9XSwzOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7ci5TVE9SRT17bWFnaWM6XCJcXDBcXDBcIixjb21wcmVzc1dvcmtlcjpmdW5jdGlvbigpe3JldHVybiBuZXcgbihcIlNUT1JFIGNvbXByZXNzaW9uXCIpfSx1bmNvbXByZXNzV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBuKFwiU1RPUkUgZGVjb21wcmVzc2lvblwiKX19LHIuREVGTEFURT1lKFwiLi9mbGF0ZVwiKX0se1wiLi9mbGF0ZVwiOjcsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6Mjh9XSw0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vdXRpbHNcIik7dmFyIG89ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1bXSxyPTA7cjwyNTY7cisrKXtlPXI7Zm9yKHZhciBuPTA7bjw4O24rKyllPTEmZT8zOTg4MjkyMzg0XmU+Pj4xOmU+Pj4xO3Rbcl09ZX1yZXR1cm4gdH0oKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwIT09ZSYmZS5sZW5ndGg/XCJzdHJpbmdcIiE9PW4uZ2V0VHlwZU9mKGUpP2Z1bmN0aW9uKGUsdCxyLG4pe3ZhciBpPW8scz1uK3I7ZV49LTE7Zm9yKHZhciBhPW47YTxzO2ErKyllPWU+Pj44XmlbMjU1JihlXnRbYV0pXTtyZXR1cm4tMV5lfSgwfHQsZSxlLmxlbmd0aCwwKTpmdW5jdGlvbihlLHQscixuKXt2YXIgaT1vLHM9bityO2VePS0xO2Zvcih2YXIgYT1uO2E8czthKyspZT1lPj4+OF5pWzI1NSYoZV50LmNoYXJDb2RlQXQoYSkpXTtyZXR1cm4tMV5lfSgwfHQsZSxlLmxlbmd0aCwwKTowfX0se1wiLi91dGlsc1wiOjMyfV0sNTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3IuYmFzZTY0PSExLHIuYmluYXJ5PSExLHIuZGlyPSExLHIuY3JlYXRlRm9sZGVycz0hMCxyLmRhdGU9bnVsbCxyLmNvbXByZXNzaW9uPW51bGwsci5jb21wcmVzc2lvbk9wdGlvbnM9bnVsbCxyLmNvbW1lbnQ9bnVsbCxyLnVuaXhQZXJtaXNzaW9ucz1udWxsLHIuZG9zUGVybWlzc2lvbnM9bnVsbH0se31dLDY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1udWxsO249XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2U/UHJvbWlzZTplKFwibGllXCIpLHQuZXhwb3J0cz17UHJvbWlzZTpufX0se2xpZTozN31dLDc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQxNkFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDMyQXJyYXksaT1lKFwicGFrb1wiKSxzPWUoXCIuL3V0aWxzXCIpLGE9ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksbz1uP1widWludDhhcnJheVwiOlwiYXJyYXlcIjtmdW5jdGlvbiBoKGUsdCl7YS5jYWxsKHRoaXMsXCJGbGF0ZVdvcmtlci9cIitlKSx0aGlzLl9wYWtvPW51bGwsdGhpcy5fcGFrb0FjdGlvbj1lLHRoaXMuX3Bha29PcHRpb25zPXQsdGhpcy5tZXRhPXt9fXIubWFnaWM9XCJcXGJcXDBcIixzLmluaGVyaXRzKGgsYSksaC5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe3RoaXMubWV0YT1lLm1ldGEsbnVsbD09PXRoaXMuX3Bha28mJnRoaXMuX2NyZWF0ZVBha28oKSx0aGlzLl9wYWtvLnB1c2gocy50cmFuc2Zvcm1UbyhvLGUuZGF0YSksITEpfSxoLnByb3RvdHlwZS5mbHVzaD1mdW5jdGlvbigpe2EucHJvdG90eXBlLmZsdXNoLmNhbGwodGhpcyksbnVsbD09PXRoaXMuX3Bha28mJnRoaXMuX2NyZWF0ZVBha28oKSx0aGlzLl9wYWtvLnB1c2goW10sITApfSxoLnByb3RvdHlwZS5jbGVhblVwPWZ1bmN0aW9uKCl7YS5wcm90b3R5cGUuY2xlYW5VcC5jYWxsKHRoaXMpLHRoaXMuX3Bha289bnVsbH0saC5wcm90b3R5cGUuX2NyZWF0ZVBha289ZnVuY3Rpb24oKXt0aGlzLl9wYWtvPW5ldyBpW3RoaXMuX3Bha29BY3Rpb25dKHtyYXc6ITAsbGV2ZWw6dGhpcy5fcGFrb09wdGlvbnMubGV2ZWx8fC0xfSk7dmFyIHQ9dGhpczt0aGlzLl9wYWtvLm9uRGF0YT1mdW5jdGlvbihlKXt0LnB1c2goe2RhdGE6ZSxtZXRhOnQubWV0YX0pfX0sci5jb21wcmVzc1dvcmtlcj1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGgoXCJEZWZsYXRlXCIsZSl9LHIudW5jb21wcmVzc1dvcmtlcj1mdW5jdGlvbigpe3JldHVybiBuZXcgaChcIkluZmxhdGVcIix7fSl9fSx7XCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3V0aWxzXCI6MzIscGFrbzozOH1dLDg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBBKGUsdCl7dmFyIHIsbj1cIlwiO2ZvcihyPTA7cjx0O3IrKyluKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSZlKSxlPj4+PTg7cmV0dXJuIG59ZnVuY3Rpb24gbihlLHQscixuLGkscyl7dmFyIGEsbyxoPWUuZmlsZSx1PWUuY29tcHJlc3Npb24sbD1zIT09Ty51dGY4ZW5jb2RlLGY9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHMoaC5uYW1lKSksYz1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsTy51dGY4ZW5jb2RlKGgubmFtZSkpLGQ9aC5jb21tZW50LHA9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHMoZCkpLG09SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLE8udXRmOGVuY29kZShkKSksXz1jLmxlbmd0aCE9PWgubmFtZS5sZW5ndGgsZz1tLmxlbmd0aCE9PWQubGVuZ3RoLGI9XCJcIix2PVwiXCIseT1cIlwiLHc9aC5kaXIsaz1oLmRhdGUseD17Y3JjMzI6MCxjb21wcmVzc2VkU2l6ZTowLHVuY29tcHJlc3NlZFNpemU6MH07dCYmIXJ8fCh4LmNyYzMyPWUuY3JjMzIseC5jb21wcmVzc2VkU2l6ZT1lLmNvbXByZXNzZWRTaXplLHgudW5jb21wcmVzc2VkU2l6ZT1lLnVuY29tcHJlc3NlZFNpemUpO3ZhciBTPTA7dCYmKFN8PTgpLGx8fCFfJiYhZ3x8KFN8PTIwNDgpO3ZhciB6PTAsQz0wO3cmJih6fD0xNiksXCJVTklYXCI9PT1pPyhDPTc5OCx6fD1mdW5jdGlvbihlLHQpe3ZhciByPWU7cmV0dXJuIGV8fChyPXQ/MTY4OTM6MzMyMDQpLCg2NTUzNSZyKTw8MTZ9KGgudW5peFBlcm1pc3Npb25zLHcpKTooQz0yMCx6fD1mdW5jdGlvbihlKXtyZXR1cm4gNjMmKGV8fDApfShoLmRvc1Blcm1pc3Npb25zKSksYT1rLmdldFVUQ0hvdXJzKCksYTw8PTYsYXw9ay5nZXRVVENNaW51dGVzKCksYTw8PTUsYXw9ay5nZXRVVENTZWNvbmRzKCkvMixvPWsuZ2V0VVRDRnVsbFllYXIoKS0xOTgwLG88PD00LG98PWsuZ2V0VVRDTW9udGgoKSsxLG88PD01LG98PWsuZ2V0VVRDRGF0ZSgpLF8mJih2PUEoMSwxKStBKEIoZiksNCkrYyxiKz1cInVwXCIrQSh2Lmxlbmd0aCwyKSt2KSxnJiYoeT1BKDEsMSkrQShCKHApLDQpK20sYis9XCJ1Y1wiK0EoeS5sZW5ndGgsMikreSk7dmFyIEU9XCJcIjtyZXR1cm4gRSs9XCJcXG5cXDBcIixFKz1BKFMsMiksRSs9dS5tYWdpYyxFKz1BKGEsMiksRSs9QShvLDIpLEUrPUEoeC5jcmMzMiw0KSxFKz1BKHguY29tcHJlc3NlZFNpemUsNCksRSs9QSh4LnVuY29tcHJlc3NlZFNpemUsNCksRSs9QShmLmxlbmd0aCwyKSxFKz1BKGIubGVuZ3RoLDIpLHtmaWxlUmVjb3JkOlIuTE9DQUxfRklMRV9IRUFERVIrRStmK2IsZGlyUmVjb3JkOlIuQ0VOVFJBTF9GSUxFX0hFQURFUitBKEMsMikrRStBKHAubGVuZ3RoLDIpK1wiXFwwXFwwXFwwXFwwXCIrQSh6LDQpK0Eobiw0KStmK2IrcH19dmFyIEk9ZShcIi4uL3V0aWxzXCIpLGk9ZShcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpLE89ZShcIi4uL3V0ZjhcIiksQj1lKFwiLi4vY3JjMzJcIiksUj1lKFwiLi4vc2lnbmF0dXJlXCIpO2Z1bmN0aW9uIHMoZSx0LHIsbil7aS5jYWxsKHRoaXMsXCJaaXBGaWxlV29ya2VyXCIpLHRoaXMuYnl0ZXNXcml0dGVuPTAsdGhpcy56aXBDb21tZW50PXQsdGhpcy56aXBQbGF0Zm9ybT1yLHRoaXMuZW5jb2RlRmlsZU5hbWU9bix0aGlzLnN0cmVhbUZpbGVzPWUsdGhpcy5hY2N1bXVsYXRlPSExLHRoaXMuY29udGVudEJ1ZmZlcj1bXSx0aGlzLmRpclJlY29yZHM9W10sdGhpcy5jdXJyZW50U291cmNlT2Zmc2V0PTAsdGhpcy5lbnRyaWVzQ291bnQ9MCx0aGlzLmN1cnJlbnRGaWxlPW51bGwsdGhpcy5fc291cmNlcz1bXX1JLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUucHVzaD1mdW5jdGlvbihlKXt2YXIgdD1lLm1ldGEucGVyY2VudHx8MCxyPXRoaXMuZW50cmllc0NvdW50LG49dGhpcy5fc291cmNlcy5sZW5ndGg7dGhpcy5hY2N1bXVsYXRlP3RoaXMuY29udGVudEJ1ZmZlci5wdXNoKGUpOih0aGlzLmJ5dGVzV3JpdHRlbis9ZS5kYXRhLmxlbmd0aCxpLnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcyx7ZGF0YTplLmRhdGEsbWV0YTp7Y3VycmVudEZpbGU6dGhpcy5jdXJyZW50RmlsZSxwZXJjZW50OnI/KHQrMTAwKihyLW4tMSkpL3I6MTAwfX0pKX0scy5wcm90b3R5cGUub3BlbmVkU291cmNlPWZ1bmN0aW9uKGUpe3RoaXMuY3VycmVudFNvdXJjZU9mZnNldD10aGlzLmJ5dGVzV3JpdHRlbix0aGlzLmN1cnJlbnRGaWxlPWUuZmlsZS5uYW1lO3ZhciB0PXRoaXMuc3RyZWFtRmlsZXMmJiFlLmZpbGUuZGlyO2lmKHQpe3ZhciByPW4oZSx0LCExLHRoaXMuY3VycmVudFNvdXJjZU9mZnNldCx0aGlzLnppcFBsYXRmb3JtLHRoaXMuZW5jb2RlRmlsZU5hbWUpO3RoaXMucHVzaCh7ZGF0YTpyLmZpbGVSZWNvcmQsbWV0YTp7cGVyY2VudDowfX0pfWVsc2UgdGhpcy5hY2N1bXVsYXRlPSEwfSxzLnByb3RvdHlwZS5jbG9zZWRTb3VyY2U9ZnVuY3Rpb24oZSl7dGhpcy5hY2N1bXVsYXRlPSExO3ZhciB0PXRoaXMuc3RyZWFtRmlsZXMmJiFlLmZpbGUuZGlyLHI9bihlLHQsITAsdGhpcy5jdXJyZW50U291cmNlT2Zmc2V0LHRoaXMuemlwUGxhdGZvcm0sdGhpcy5lbmNvZGVGaWxlTmFtZSk7aWYodGhpcy5kaXJSZWNvcmRzLnB1c2goci5kaXJSZWNvcmQpLHQpdGhpcy5wdXNoKHtkYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBSLkRBVEFfREVTQ1JJUFRPUitBKGUuY3JjMzIsNCkrQShlLmNvbXByZXNzZWRTaXplLDQpK0EoZS51bmNvbXByZXNzZWRTaXplLDQpfShlKSxtZXRhOntwZXJjZW50OjEwMH19KTtlbHNlIGZvcih0aGlzLnB1c2goe2RhdGE6ci5maWxlUmVjb3JkLG1ldGE6e3BlcmNlbnQ6MH19KTt0aGlzLmNvbnRlbnRCdWZmZXIubGVuZ3RoOyl0aGlzLnB1c2godGhpcy5jb250ZW50QnVmZmVyLnNoaWZ0KCkpO3RoaXMuY3VycmVudEZpbGU9bnVsbH0scy5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5ieXRlc1dyaXR0ZW4sdD0wO3Q8dGhpcy5kaXJSZWNvcmRzLmxlbmd0aDt0KyspdGhpcy5wdXNoKHtkYXRhOnRoaXMuZGlyUmVjb3Jkc1t0XSxtZXRhOntwZXJjZW50OjEwMH19KTt2YXIgcj10aGlzLmJ5dGVzV3JpdHRlbi1lLG49ZnVuY3Rpb24oZSx0LHIsbixpKXt2YXIgcz1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsaShuKSk7cmV0dXJuIFIuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EK1wiXFwwXFwwXFwwXFwwXCIrQShlLDIpK0EoZSwyKStBKHQsNCkrQShyLDQpK0Eocy5sZW5ndGgsMikrc30odGhpcy5kaXJSZWNvcmRzLmxlbmd0aCxyLGUsdGhpcy56aXBDb21tZW50LHRoaXMuZW5jb2RlRmlsZU5hbWUpO3RoaXMucHVzaCh7ZGF0YTpuLG1ldGE6e3BlcmNlbnQ6MTAwfX0pfSxzLnByb3RvdHlwZS5wcmVwYXJlTmV4dFNvdXJjZT1mdW5jdGlvbigpe3RoaXMucHJldmlvdXM9dGhpcy5fc291cmNlcy5zaGlmdCgpLHRoaXMub3BlbmVkU291cmNlKHRoaXMucHJldmlvdXMuc3RyZWFtSW5mbyksdGhpcy5pc1BhdXNlZD90aGlzLnByZXZpb3VzLnBhdXNlKCk6dGhpcy5wcmV2aW91cy5yZXN1bWUoKX0scy5wcm90b3R5cGUucmVnaXN0ZXJQcmV2aW91cz1mdW5jdGlvbihlKXt0aGlzLl9zb3VyY2VzLnB1c2goZSk7dmFyIHQ9dGhpcztyZXR1cm4gZS5vbihcImRhdGFcIixmdW5jdGlvbihlKXt0LnByb2Nlc3NDaHVuayhlKX0pLGUub24oXCJlbmRcIixmdW5jdGlvbigpe3QuY2xvc2VkU291cmNlKHQucHJldmlvdXMuc3RyZWFtSW5mbyksdC5fc291cmNlcy5sZW5ndGg/dC5wcmVwYXJlTmV4dFNvdXJjZSgpOnQuZW5kKCl9KSxlLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlKXt0LmVycm9yKGUpfSksdGhpc30scy5wcm90b3R5cGUucmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuISFpLnByb3RvdHlwZS5yZXN1bWUuY2FsbCh0aGlzKSYmKCF0aGlzLnByZXZpb3VzJiZ0aGlzLl9zb3VyY2VzLmxlbmd0aD8odGhpcy5wcmVwYXJlTmV4dFNvdXJjZSgpLCEwKTp0aGlzLnByZXZpb3VzfHx0aGlzLl9zb3VyY2VzLmxlbmd0aHx8dGhpcy5nZW5lcmF0ZWRFcnJvcj92b2lkIDA6KHRoaXMuZW5kKCksITApKX0scy5wcm90b3R5cGUuZXJyb3I9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fc291cmNlcztpZighaS5wcm90b3R5cGUuZXJyb3IuY2FsbCh0aGlzLGUpKXJldHVybiExO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXRyeXt0W3JdLmVycm9yKGUpfWNhdGNoKGUpe31yZXR1cm4hMH0scy5wcm90b3R5cGUubG9jaz1mdW5jdGlvbigpe2kucHJvdG90eXBlLmxvY2suY2FsbCh0aGlzKTtmb3IodmFyIGU9dGhpcy5fc291cmNlcyx0PTA7dDxlLmxlbmd0aDt0KyspZVt0XS5sb2NrKCl9LHQuZXhwb3J0cz1zfSx7XCIuLi9jcmMzMlwiOjQsXCIuLi9zaWduYXR1cmVcIjoyMyxcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuLi91dGY4XCI6MzEsXCIuLi91dGlsc1wiOjMyfV0sOTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciB1PWUoXCIuLi9jb21wcmVzc2lvbnNcIiksbj1lKFwiLi9aaXBGaWxlV29ya2VyXCIpO3IuZ2VuZXJhdGVXb3JrZXI9ZnVuY3Rpb24oZSxhLHQpe3ZhciBvPW5ldyBuKGEuc3RyZWFtRmlsZXMsdCxhLnBsYXRmb3JtLGEuZW5jb2RlRmlsZU5hbWUpLGg9MDt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7aCsrO3ZhciByPWZ1bmN0aW9uKGUsdCl7dmFyIHI9ZXx8dCxuPXVbcl07aWYoIW4pdGhyb3cgbmV3IEVycm9yKHIrXCIgaXMgbm90IGEgdmFsaWQgY29tcHJlc3Npb24gbWV0aG9kICFcIik7cmV0dXJuIG59KHQub3B0aW9ucy5jb21wcmVzc2lvbixhLmNvbXByZXNzaW9uKSxuPXQub3B0aW9ucy5jb21wcmVzc2lvbk9wdGlvbnN8fGEuY29tcHJlc3Npb25PcHRpb25zfHx7fSxpPXQuZGlyLHM9dC5kYXRlO3QuX2NvbXByZXNzV29ya2VyKHIsbikud2l0aFN0cmVhbUluZm8oXCJmaWxlXCIse25hbWU6ZSxkaXI6aSxkYXRlOnMsY29tbWVudDp0LmNvbW1lbnR8fFwiXCIsdW5peFBlcm1pc3Npb25zOnQudW5peFBlcm1pc3Npb25zLGRvc1Blcm1pc3Npb25zOnQuZG9zUGVybWlzc2lvbnN9KS5waXBlKG8pfSksby5lbnRyaWVzQ291bnQ9aH1jYXRjaChlKXtvLmVycm9yKGUpfXJldHVybiBvfX0se1wiLi4vY29tcHJlc3Npb25zXCI6MyxcIi4vWmlwRmlsZVdvcmtlclwiOjh9XSwxMDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXtpZighKHRoaXMgaW5zdGFuY2VvZiBuKSlyZXR1cm4gbmV3IG47aWYoYXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29uc3RydWN0b3Igd2l0aCBwYXJhbWV0ZXJzIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpO3RoaXMuZmlsZXM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLmNvbW1lbnQ9bnVsbCx0aGlzLnJvb3Q9XCJcIix0aGlzLmNsb25lPWZ1bmN0aW9uKCl7dmFyIGU9bmV3IG47Zm9yKHZhciB0IGluIHRoaXMpXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpc1t0XSYmKGVbdF09dGhpc1t0XSk7cmV0dXJuIGV9fShuLnByb3RvdHlwZT1lKFwiLi9vYmplY3RcIikpLmxvYWRBc3luYz1lKFwiLi9sb2FkXCIpLG4uc3VwcG9ydD1lKFwiLi9zdXBwb3J0XCIpLG4uZGVmYXVsdHM9ZShcIi4vZGVmYXVsdHNcIiksbi52ZXJzaW9uPVwiMy4xMC4xXCIsbi5sb2FkQXN5bmM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4obmV3IG4pLmxvYWRBc3luYyhlLHQpfSxuLmV4dGVybmFsPWUoXCIuL2V4dGVybmFsXCIpLHQuZXhwb3J0cz1ufSx7XCIuL2RlZmF1bHRzXCI6NSxcIi4vZXh0ZXJuYWxcIjo2LFwiLi9sb2FkXCI6MTEsXCIuL29iamVjdFwiOjE1LFwiLi9zdXBwb3J0XCI6MzB9XSwxMTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciB1PWUoXCIuL3V0aWxzXCIpLGk9ZShcIi4vZXh0ZXJuYWxcIiksbj1lKFwiLi91dGY4XCIpLHM9ZShcIi4vemlwRW50cmllc1wiKSxhPWUoXCIuL3N0cmVhbS9DcmMzMlByb2JlXCIpLGw9ZShcIi4vbm9kZWpzVXRpbHNcIik7ZnVuY3Rpb24gZihuKXtyZXR1cm4gbmV3IGkuUHJvbWlzZShmdW5jdGlvbihlLHQpe3ZhciByPW4uZGVjb21wcmVzc2VkLmdldENvbnRlbnRXb3JrZXIoKS5waXBlKG5ldyBhKTtyLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlKXt0KGUpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe3Iuc3RyZWFtSW5mby5jcmMzMiE9PW4uZGVjb21wcmVzc2VkLmNyYzMyP3QobmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCA6IENSQzMyIG1pc21hdGNoXCIpKTplKCl9KS5yZXN1bWUoKX0pfXQuZXhwb3J0cz1mdW5jdGlvbihlLG8pe3ZhciBoPXRoaXM7cmV0dXJuIG89dS5leHRlbmQob3x8e30se2Jhc2U2NDohMSxjaGVja0NSQzMyOiExLG9wdGltaXplZEJpbmFyeVN0cmluZzohMSxjcmVhdGVGb2xkZXJzOiExLGRlY29kZUZpbGVOYW1lOm4udXRmOGRlY29kZX0pLGwuaXNOb2RlJiZsLmlzU3RyZWFtKGUpP2kuUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSlNaaXAgY2FuJ3QgYWNjZXB0IGEgc3RyZWFtIHdoZW4gbG9hZGluZyBhIHppcCBmaWxlLlwiKSk6dS5wcmVwYXJlQ29udGVudChcInRoZSBsb2FkZWQgemlwIGZpbGVcIixlLCEwLG8ub3B0aW1pemVkQmluYXJ5U3RyaW5nLG8uYmFzZTY0KS50aGVuKGZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBzKG8pO3JldHVybiB0LmxvYWQoZSksdH0pLnRoZW4oZnVuY3Rpb24oZSl7dmFyIHQ9W2kuUHJvbWlzZS5yZXNvbHZlKGUpXSxyPWUuZmlsZXM7aWYoby5jaGVja0NSQzMyKWZvcih2YXIgbj0wO248ci5sZW5ndGg7bisrKXQucHVzaChmKHJbbl0pKTtyZXR1cm4gaS5Qcm9taXNlLmFsbCh0KX0pLnRoZW4oZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc2hpZnQoKSxyPXQuZmlsZXMsbj0wO248ci5sZW5ndGg7bisrKXt2YXIgaT1yW25dLHM9aS5maWxlTmFtZVN0cixhPXUucmVzb2x2ZShpLmZpbGVOYW1lU3RyKTtoLmZpbGUoYSxpLmRlY29tcHJlc3NlZCx7YmluYXJ5OiEwLG9wdGltaXplZEJpbmFyeVN0cmluZzohMCxkYXRlOmkuZGF0ZSxkaXI6aS5kaXIsY29tbWVudDppLmZpbGVDb21tZW50U3RyLmxlbmd0aD9pLmZpbGVDb21tZW50U3RyOm51bGwsdW5peFBlcm1pc3Npb25zOmkudW5peFBlcm1pc3Npb25zLGRvc1Blcm1pc3Npb25zOmkuZG9zUGVybWlzc2lvbnMsY3JlYXRlRm9sZGVyczpvLmNyZWF0ZUZvbGRlcnN9KSxpLmRpcnx8KGguZmlsZShhKS51bnNhZmVPcmlnaW5hbE5hbWU9cyl9cmV0dXJuIHQuemlwQ29tbWVudC5sZW5ndGgmJihoLmNvbW1lbnQ9dC56aXBDb21tZW50KSxofSl9fSx7XCIuL2V4dGVybmFsXCI6NixcIi4vbm9kZWpzVXRpbHNcIjoxNCxcIi4vc3RyZWFtL0NyYzMyUHJvYmVcIjoyNSxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyLFwiLi96aXBFbnRyaWVzXCI6MzN9XSwxMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKTtmdW5jdGlvbiBzKGUsdCl7aS5jYWxsKHRoaXMsXCJOb2RlanMgc3RyZWFtIGlucHV0IGFkYXB0ZXIgZm9yIFwiK2UpLHRoaXMuX3Vwc3RyZWFtRW5kZWQ9ITEsdGhpcy5fYmluZFN0cmVhbSh0KX1uLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUuX2JpbmRTdHJlYW09ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczsodGhpcy5fc3RyZWFtPWUpLnBhdXNlKCksZS5vbihcImRhdGFcIixmdW5jdGlvbihlKXt0LnB1c2goe2RhdGE6ZSxtZXRhOntwZXJjZW50OjB9fSl9KS5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7dC5pc1BhdXNlZD90aGlzLmdlbmVyYXRlZEVycm9yPWU6dC5lcnJvcihlKX0pLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0LmlzUGF1c2VkP3QuX3Vwc3RyZWFtRW5kZWQ9ITA6dC5lbmQoKX0pfSxzLnByb3RvdHlwZS5wYXVzZT1mdW5jdGlvbigpe3JldHVybiEhaS5wcm90b3R5cGUucGF1c2UuY2FsbCh0aGlzKSYmKHRoaXMuX3N0cmVhbS5wYXVzZSgpLCEwKX0scy5wcm90b3R5cGUucmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuISFpLnByb3RvdHlwZS5yZXN1bWUuY2FsbCh0aGlzKSYmKHRoaXMuX3Vwc3RyZWFtRW5kZWQ/dGhpcy5lbmQoKTp0aGlzLl9zdHJlYW0ucmVzdW1lKCksITApfSx0LmV4cG9ydHM9c30se1wiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4uL3V0aWxzXCI6MzJ9XSwxMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBpPWUoXCJyZWFkYWJsZS1zdHJlYW1cIikuUmVhZGFibGU7ZnVuY3Rpb24gbihlLHQscil7aS5jYWxsKHRoaXMsdCksdGhpcy5faGVscGVyPWU7dmFyIG49dGhpcztlLm9uKFwiZGF0YVwiLGZ1bmN0aW9uKGUsdCl7bi5wdXNoKGUpfHxuLl9oZWxwZXIucGF1c2UoKSxyJiZyKHQpfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpe24uZW1pdChcImVycm9yXCIsZSl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7bi5wdXNoKG51bGwpfSl9ZShcIi4uL3V0aWxzXCIpLmluaGVyaXRzKG4saSksbi5wcm90b3R5cGUuX3JlYWQ9ZnVuY3Rpb24oKXt0aGlzLl9oZWxwZXIucmVzdW1lKCl9LHQuZXhwb3J0cz1ufSx7XCIuLi91dGlsc1wiOjMyLFwicmVhZGFibGUtc3RyZWFtXCI6MTZ9XSwxNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17aXNOb2RlOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBCdWZmZXIsbmV3QnVmZmVyRnJvbTpmdW5jdGlvbihlLHQpe2lmKEJ1ZmZlci5mcm9tJiZCdWZmZXIuZnJvbSE9PVVpbnQ4QXJyYXkuZnJvbSlyZXR1cm4gQnVmZmVyLmZyb20oZSx0KTtpZihcIm51bWJlclwiPT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcImRhdGFcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpO3JldHVybiBuZXcgQnVmZmVyKGUsdCl9LGFsbG9jQnVmZmVyOmZ1bmN0aW9uKGUpe2lmKEJ1ZmZlci5hbGxvYylyZXR1cm4gQnVmZmVyLmFsbG9jKGUpO3ZhciB0PW5ldyBCdWZmZXIoZSk7cmV0dXJuIHQuZmlsbCgwKSx0fSxpc0J1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gQnVmZmVyLmlzQnVmZmVyKGUpfSxpc1N0cmVhbTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5vbiYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5wYXVzZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5yZXN1bWV9fX0se31dLDE1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhlLHQscil7dmFyIG4saT11LmdldFR5cGVPZih0KSxzPXUuZXh0ZW5kKHJ8fHt9LGYpO3MuZGF0ZT1zLmRhdGV8fG5ldyBEYXRlLG51bGwhPT1zLmNvbXByZXNzaW9uJiYocy5jb21wcmVzc2lvbj1zLmNvbXByZXNzaW9uLnRvVXBwZXJDYXNlKCkpLFwic3RyaW5nXCI9PXR5cGVvZiBzLnVuaXhQZXJtaXNzaW9ucyYmKHMudW5peFBlcm1pc3Npb25zPXBhcnNlSW50KHMudW5peFBlcm1pc3Npb25zLDgpKSxzLnVuaXhQZXJtaXNzaW9ucyYmMTYzODQmcy51bml4UGVybWlzc2lvbnMmJihzLmRpcj0hMCkscy5kb3NQZXJtaXNzaW9ucyYmMTYmcy5kb3NQZXJtaXNzaW9ucyYmKHMuZGlyPSEwKSxzLmRpciYmKGU9ZyhlKSkscy5jcmVhdGVGb2xkZXJzJiYobj1fKGUpKSYmYi5jYWxsKHRoaXMsbiwhMCk7dmFyIGE9XCJzdHJpbmdcIj09PWkmJiExPT09cy5iaW5hcnkmJiExPT09cy5iYXNlNjQ7ciYmdm9pZCAwIT09ci5iaW5hcnl8fChzLmJpbmFyeT0hYSksKHQgaW5zdGFuY2VvZiBjJiYwPT09dC51bmNvbXByZXNzZWRTaXplfHxzLmRpcnx8IXR8fDA9PT10Lmxlbmd0aCkmJihzLmJhc2U2ND0hMSxzLmJpbmFyeT0hMCx0PVwiXCIscy5jb21wcmVzc2lvbj1cIlNUT1JFXCIsaT1cInN0cmluZ1wiKTt2YXIgbz1udWxsO289dCBpbnN0YW5jZW9mIGN8fHQgaW5zdGFuY2VvZiBsP3Q6cC5pc05vZGUmJnAuaXNTdHJlYW0odCk/bmV3IG0oZSx0KTp1LnByZXBhcmVDb250ZW50KGUsdCxzLmJpbmFyeSxzLm9wdGltaXplZEJpbmFyeVN0cmluZyxzLmJhc2U2NCk7dmFyIGg9bmV3IGQoZSxvLHMpO3RoaXMuZmlsZXNbZV09aH12YXIgaT1lKFwiLi91dGY4XCIpLHU9ZShcIi4vdXRpbHNcIiksbD1lKFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSxhPWUoXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIiksZj1lKFwiLi9kZWZhdWx0c1wiKSxjPWUoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksZD1lKFwiLi96aXBPYmplY3RcIiksbz1lKFwiLi9nZW5lcmF0ZVwiKSxwPWUoXCIuL25vZGVqc1V0aWxzXCIpLG09ZShcIi4vbm9kZWpzL05vZGVqc1N0cmVhbUlucHV0QWRhcHRlclwiKSxfPWZ1bmN0aW9uKGUpe1wiL1wiPT09ZS5zbGljZSgtMSkmJihlPWUuc3Vic3RyaW5nKDAsZS5sZW5ndGgtMSkpO3ZhciB0PWUubGFzdEluZGV4T2YoXCIvXCIpO3JldHVybiAwPHQ/ZS5zdWJzdHJpbmcoMCx0KTpcIlwifSxnPWZ1bmN0aW9uKGUpe3JldHVyblwiL1wiIT09ZS5zbGljZSgtMSkmJihlKz1cIi9cIiksZX0sYj1mdW5jdGlvbihlLHQpe3JldHVybiB0PXZvaWQgMCE9PXQ/dDpmLmNyZWF0ZUZvbGRlcnMsZT1nKGUpLHRoaXMuZmlsZXNbZV18fHMuY2FsbCh0aGlzLGUsbnVsbCx7ZGlyOiEwLGNyZWF0ZUZvbGRlcnM6dH0pLHRoaXMuZmlsZXNbZV19O2Z1bmN0aW9uIGgoZSl7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX12YXIgbj17bG9hZDpmdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpfSxmb3JFYWNoOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbjtmb3IodCBpbiB0aGlzLmZpbGVzKW49dGhpcy5maWxlc1t0XSwocj10LnNsaWNlKHRoaXMucm9vdC5sZW5ndGgsdC5sZW5ndGgpKSYmdC5zbGljZSgwLHRoaXMucm9vdC5sZW5ndGgpPT09dGhpcy5yb290JiZlKHIsbil9LGZpbHRlcjpmdW5jdGlvbihyKXt2YXIgbj1bXTtyZXR1cm4gdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7cihlLHQpJiZuLnB1c2godCl9KSxufSxmaWxlOmZ1bmN0aW9uKGUsdCxyKXtpZigxIT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZT10aGlzLnJvb3QrZSxzLmNhbGwodGhpcyxlLHQsciksdGhpcztpZihoKGUpKXt2YXIgbj1lO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbihlLHQpe3JldHVybiF0LmRpciYmbi50ZXN0KGUpfSl9dmFyIGk9dGhpcy5maWxlc1t0aGlzLnJvb3QrZV07cmV0dXJuIGkmJiFpLmRpcj9pOm51bGx9LGZvbGRlcjpmdW5jdGlvbihyKXtpZighcilyZXR1cm4gdGhpcztpZihoKHIpKXJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbihlLHQpe3JldHVybiB0LmRpciYmci50ZXN0KGUpfSk7dmFyIGU9dGhpcy5yb290K3IsdD1iLmNhbGwodGhpcyxlKSxuPXRoaXMuY2xvbmUoKTtyZXR1cm4gbi5yb290PXQubmFtZSxufSxyZW1vdmU6ZnVuY3Rpb24ocil7cj10aGlzLnJvb3Qrcjt2YXIgZT10aGlzLmZpbGVzW3JdO2lmKGV8fChcIi9cIiE9PXIuc2xpY2UoLTEpJiYocis9XCIvXCIpLGU9dGhpcy5maWxlc1tyXSksZSYmIWUuZGlyKWRlbGV0ZSB0aGlzLmZpbGVzW3JdO2Vsc2UgZm9yKHZhciB0PXRoaXMuZmlsdGVyKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQubmFtZS5zbGljZSgwLHIubGVuZ3RoKT09PXJ9KSxuPTA7bjx0Lmxlbmd0aDtuKyspZGVsZXRlIHRoaXMuZmlsZXNbdFtuXS5uYW1lXTtyZXR1cm4gdGhpc30sZ2VuZXJhdGU6ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKX0sZ2VuZXJhdGVJbnRlcm5hbFN0cmVhbTpmdW5jdGlvbihlKXt2YXIgdCxyPXt9O3RyeXtpZigocj11LmV4dGVuZChlfHx7fSx7c3RyZWFtRmlsZXM6ITEsY29tcHJlc3Npb246XCJTVE9SRVwiLGNvbXByZXNzaW9uT3B0aW9uczpudWxsLHR5cGU6XCJcIixwbGF0Zm9ybTpcIkRPU1wiLGNvbW1lbnQ6bnVsbCxtaW1lVHlwZTpcImFwcGxpY2F0aW9uL3ppcFwiLGVuY29kZUZpbGVOYW1lOmkudXRmOGVuY29kZX0pKS50eXBlPXIudHlwZS50b0xvd2VyQ2FzZSgpLHIuY29tcHJlc3Npb249ci5jb21wcmVzc2lvbi50b1VwcGVyQ2FzZSgpLFwiYmluYXJ5c3RyaW5nXCI9PT1yLnR5cGUmJihyLnR5cGU9XCJzdHJpbmdcIiksIXIudHlwZSl0aHJvdyBuZXcgRXJyb3IoXCJObyBvdXRwdXQgdHlwZSBzcGVjaWZpZWQuXCIpO3UuY2hlY2tTdXBwb3J0KHIudHlwZSksXCJkYXJ3aW5cIiE9PXIucGxhdGZvcm0mJlwiZnJlZWJzZFwiIT09ci5wbGF0Zm9ybSYmXCJsaW51eFwiIT09ci5wbGF0Zm9ybSYmXCJzdW5vc1wiIT09ci5wbGF0Zm9ybXx8KHIucGxhdGZvcm09XCJVTklYXCIpLFwid2luMzJcIj09PXIucGxhdGZvcm0mJihyLnBsYXRmb3JtPVwiRE9TXCIpO3ZhciBuPXIuY29tbWVudHx8dGhpcy5jb21tZW50fHxcIlwiO3Q9by5nZW5lcmF0ZVdvcmtlcih0aGlzLHIsbil9Y2F0Y2goZSl7KHQ9bmV3IGwoXCJlcnJvclwiKSkuZXJyb3IoZSl9cmV0dXJuIG5ldyBhKHQsci50eXBlfHxcInN0cmluZ1wiLHIubWltZVR5cGUpfSxnZW5lcmF0ZUFzeW5jOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZ2VuZXJhdGVJbnRlcm5hbFN0cmVhbShlKS5hY2N1bXVsYXRlKHQpfSxnZW5lcmF0ZU5vZGVTdHJlYW06ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZT1lfHx7fSkudHlwZXx8KGUudHlwZT1cIm5vZGVidWZmZXJcIiksdGhpcy5nZW5lcmF0ZUludGVybmFsU3RyZWFtKGUpLnRvTm9kZWpzU3RyZWFtKHQpfX07dC5leHBvcnRzPW59LHtcIi4vY29tcHJlc3NlZE9iamVjdFwiOjIsXCIuL2RlZmF1bHRzXCI6NSxcIi4vZ2VuZXJhdGVcIjo5LFwiLi9ub2RlanMvTm9kZWpzU3RyZWFtSW5wdXRBZGFwdGVyXCI6MTIsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIjoyOSxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyLFwiLi96aXBPYmplY3RcIjozNX1dLDE2OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWUoXCJzdHJlYW1cIil9LHtzdHJlYW06dm9pZCAwfV0sMTc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9EYXRhUmVhZGVyXCIpO2Z1bmN0aW9uIGkoZSl7bi5jYWxsKHRoaXMsZSk7Zm9yKHZhciB0PTA7dDx0aGlzLmRhdGEubGVuZ3RoO3QrKyllW3RdPTI1NSZlW3RdfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLmJ5dGVBdD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhW3RoaXMuemVybytlXX0saS5wcm90b3R5cGUubGFzdEluZGV4T2ZTaWduYXR1cmU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY2hhckNvZGVBdCgwKSxyPWUuY2hhckNvZGVBdCgxKSxuPWUuY2hhckNvZGVBdCgyKSxpPWUuY2hhckNvZGVBdCgzKSxzPXRoaXMubGVuZ3RoLTQ7MDw9czstLXMpaWYodGhpcy5kYXRhW3NdPT09dCYmdGhpcy5kYXRhW3MrMV09PT1yJiZ0aGlzLmRhdGFbcysyXT09PW4mJnRoaXMuZGF0YVtzKzNdPT09aSlyZXR1cm4gcy10aGlzLnplcm87cmV0dXJuLTF9LGkucHJvdG90eXBlLnJlYWRBbmRDaGVja1NpZ25hdHVyZT1mdW5jdGlvbihlKXt2YXIgdD1lLmNoYXJDb2RlQXQoMCkscj1lLmNoYXJDb2RlQXQoMSksbj1lLmNoYXJDb2RlQXQoMiksaT1lLmNoYXJDb2RlQXQoMykscz10aGlzLnJlYWREYXRhKDQpO3JldHVybiB0PT09c1swXSYmcj09PXNbMV0mJm49PT1zWzJdJiZpPT09c1szXX0saS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7aWYodGhpcy5jaGVja09mZnNldChlKSwwPT09ZSlyZXR1cm5bXTt2YXIgdD10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0RhdGFSZWFkZXJcIjoxOH1dLDE4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4uL3V0aWxzXCIpO2Z1bmN0aW9uIGkoZSl7dGhpcy5kYXRhPWUsdGhpcy5sZW5ndGg9ZS5sZW5ndGgsdGhpcy5pbmRleD0wLHRoaXMuemVybz0wfWkucHJvdG90eXBlPXtjaGVja09mZnNldDpmdW5jdGlvbihlKXt0aGlzLmNoZWNrSW5kZXgodGhpcy5pbmRleCtlKX0sY2hlY2tJbmRleDpmdW5jdGlvbihlKXtpZih0aGlzLmxlbmd0aDx0aGlzLnplcm8rZXx8ZTwwKXRocm93IG5ldyBFcnJvcihcIkVuZCBvZiBkYXRhIHJlYWNoZWQgKGRhdGEgbGVuZ3RoID0gXCIrdGhpcy5sZW5ndGgrXCIsIGFza2VkIGluZGV4ID0gXCIrZStcIikuIENvcnJ1cHRlZCB6aXAgP1wiKX0sc2V0SW5kZXg6ZnVuY3Rpb24oZSl7dGhpcy5jaGVja0luZGV4KGUpLHRoaXMuaW5kZXg9ZX0sc2tpcDpmdW5jdGlvbihlKXt0aGlzLnNldEluZGV4KHRoaXMuaW5kZXgrZSl9LGJ5dGVBdDpmdW5jdGlvbigpe30scmVhZEludDpmdW5jdGlvbihlKXt2YXIgdCxyPTA7Zm9yKHRoaXMuY2hlY2tPZmZzZXQoZSksdD10aGlzLmluZGV4K2UtMTt0Pj10aGlzLmluZGV4O3QtLSlyPShyPDw4KSt0aGlzLmJ5dGVBdCh0KTtyZXR1cm4gdGhpcy5pbmRleCs9ZSxyfSxyZWFkU3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVybiBuLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsdGhpcy5yZWFkRGF0YShlKSl9LHJlYWREYXRhOmZ1bmN0aW9uKCl7fSxsYXN0SW5kZXhPZlNpZ25hdHVyZTpmdW5jdGlvbigpe30scmVhZEFuZENoZWNrU2lnbmF0dXJlOmZ1bmN0aW9uKCl7fSxyZWFkRGF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucmVhZEludCg0KTtyZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoMTk4MCsoZT4+MjUmMTI3KSwoZT4+MjEmMTUpLTEsZT4+MTYmMzEsZT4+MTEmMzEsZT4+NSY2MywoMzEmZSk8PDEpKX19LHQuZXhwb3J0cz1pfSx7XCIuLi91dGlsc1wiOjMyfV0sMTk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9VaW50OEFycmF5UmVhZGVyXCIpO2Z1bmN0aW9uIGkoZSl7bi5jYWxsKHRoaXMsZSl9ZShcIi4uL3V0aWxzXCIpLmluaGVyaXRzKGksbiksaS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaGVja09mZnNldChlKTt2YXIgdD10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIjoyMX1dLDIwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vRGF0YVJlYWRlclwiKTtmdW5jdGlvbiBpKGUpe24uY2FsbCh0aGlzLGUpfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLmJ5dGVBdD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhLmNoYXJDb2RlQXQodGhpcy56ZXJvK2UpfSxpLnByb3RvdHlwZS5sYXN0SW5kZXhPZlNpZ25hdHVyZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhLmxhc3RJbmRleE9mKGUpLXRoaXMuemVyb30saS5wcm90b3R5cGUucmVhZEFuZENoZWNrU2lnbmF0dXJlPWZ1bmN0aW9uKGUpe3JldHVybiBlPT09dGhpcy5yZWFkRGF0YSg0KX0saS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaGVja09mZnNldChlKTt2YXIgdD10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0RhdGFSZWFkZXJcIjoxOH1dLDIxOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vQXJyYXlSZWFkZXJcIik7ZnVuY3Rpb24gaShlKXtuLmNhbGwodGhpcyxlKX1lKFwiLi4vdXRpbHNcIikuaW5oZXJpdHMoaSxuKSxpLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbihlKXtpZih0aGlzLmNoZWNrT2Zmc2V0KGUpLDA9PT1lKXJldHVybiBuZXcgVWludDhBcnJheSgwKTt2YXIgdD10aGlzLmRhdGEuc3ViYXJyYXkodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0FycmF5UmVhZGVyXCI6MTd9XSwyMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuLi9zdXBwb3J0XCIpLHM9ZShcIi4vQXJyYXlSZWFkZXJcIiksYT1lKFwiLi9TdHJpbmdSZWFkZXJcIiksbz1lKFwiLi9Ob2RlQnVmZmVyUmVhZGVyXCIpLGg9ZShcIi4vVWludDhBcnJheVJlYWRlclwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9bi5nZXRUeXBlT2YoZSk7cmV0dXJuIG4uY2hlY2tTdXBwb3J0KHQpLFwic3RyaW5nXCIhPT10fHxpLnVpbnQ4YXJyYXk/XCJub2RlYnVmZmVyXCI9PT10P25ldyBvKGUpOmkudWludDhhcnJheT9uZXcgaChuLnRyYW5zZm9ybVRvKFwidWludDhhcnJheVwiLGUpKTpuZXcgcyhuLnRyYW5zZm9ybVRvKFwiYXJyYXlcIixlKSk6bmV3IGEoZSl9fSx7XCIuLi9zdXBwb3J0XCI6MzAsXCIuLi91dGlsc1wiOjMyLFwiLi9BcnJheVJlYWRlclwiOjE3LFwiLi9Ob2RlQnVmZmVyUmVhZGVyXCI6MTksXCIuL1N0cmluZ1JlYWRlclwiOjIwLFwiLi9VaW50OEFycmF5UmVhZGVyXCI6MjF9XSwyMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3IuTE9DQUxfRklMRV9IRUFERVI9XCJQS1x1MDAwM1x1MDAwNFwiLHIuQ0VOVFJBTF9GSUxFX0hFQURFUj1cIlBLXHUwMDAxXHUwMDAyXCIsci5DRU5UUkFMX0RJUkVDVE9SWV9FTkQ9XCJQS1x1MDAwNVx1MDAwNlwiLHIuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUj1cIlBLXHUwMDA2XHUwMDA3XCIsci5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQ9XCJQS1x1MDAwNlx1MDAwNlwiLHIuREFUQV9ERVNDUklQVE9SPVwiUEtcdTAwMDdcXGJcIn0se31dLDI0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vR2VuZXJpY1dvcmtlclwiKSxpPWUoXCIuLi91dGlsc1wiKTtmdW5jdGlvbiBzKGUpe24uY2FsbCh0aGlzLFwiQ29udmVydFdvcmtlciB0byBcIitlKSx0aGlzLmRlc3RUeXBlPWV9aS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbihlKXt0aGlzLnB1c2goe2RhdGE6aS50cmFuc2Zvcm1Ubyh0aGlzLmRlc3RUeXBlLGUuZGF0YSksbWV0YTplLm1ldGF9KX0sdC5leHBvcnRzPXN9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vR2VuZXJpY1dvcmtlclwiKSxpPWUoXCIuLi9jcmMzMlwiKTtmdW5jdGlvbiBzKCl7bi5jYWxsKHRoaXMsXCJDcmMzMlByb2JlXCIpLHRoaXMud2l0aFN0cmVhbUluZm8oXCJjcmMzMlwiLDApfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbihlKXt0aGlzLnN0cmVhbUluZm8uY3JjMzI9aShlLmRhdGEsdGhpcy5zdHJlYW1JbmZvLmNyYzMyfHwwKSx0aGlzLnB1c2goZSl9LHQuZXhwb3J0cz1zfSx7XCIuLi9jcmMzMlwiOjQsXCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyhlKXtpLmNhbGwodGhpcyxcIkRhdGFMZW5ndGhQcm9iZSBmb3IgXCIrZSksdGhpcy5wcm9wTmFtZT1lLHRoaXMud2l0aFN0cmVhbUluZm8oZSwwKX1uLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe2lmKGUpe3ZhciB0PXRoaXMuc3RyZWFtSW5mb1t0aGlzLnByb3BOYW1lXXx8MDt0aGlzLnN0cmVhbUluZm9bdGhpcy5wcm9wTmFtZV09dCtlLmRhdGEubGVuZ3RofWkucHJvdG90eXBlLnByb2Nlc3NDaHVuay5jYWxsKHRoaXMsZSl9LHQuZXhwb3J0cz1zfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyhlKXtpLmNhbGwodGhpcyxcIkRhdGFXb3JrZXJcIik7dmFyIHQ9dGhpczt0aGlzLmRhdGFJc1JlYWR5PSExLHRoaXMuaW5kZXg9MCx0aGlzLm1heD0wLHRoaXMuZGF0YT1udWxsLHRoaXMudHlwZT1cIlwiLHRoaXMuX3RpY2tTY2hlZHVsZWQ9ITEsZS50aGVuKGZ1bmN0aW9uKGUpe3QuZGF0YUlzUmVhZHk9ITAsdC5kYXRhPWUsdC5tYXg9ZSYmZS5sZW5ndGh8fDAsdC50eXBlPW4uZ2V0VHlwZU9mKGUpLHQuaXNQYXVzZWR8fHQuX3RpY2tBbmRSZXBlYXQoKX0sZnVuY3Rpb24oZSl7dC5lcnJvcihlKX0pfW4uaW5oZXJpdHMocyxpKSxzLnByb3RvdHlwZS5jbGVhblVwPWZ1bmN0aW9uKCl7aS5wcm90b3R5cGUuY2xlYW5VcC5jYWxsKHRoaXMpLHRoaXMuZGF0YT1udWxsfSxzLnByb3RvdHlwZS5yZXN1bWU9ZnVuY3Rpb24oKXtyZXR1cm4hIWkucHJvdG90eXBlLnJlc3VtZS5jYWxsKHRoaXMpJiYoIXRoaXMuX3RpY2tTY2hlZHVsZWQmJnRoaXMuZGF0YUlzUmVhZHkmJih0aGlzLl90aWNrU2NoZWR1bGVkPSEwLG4uZGVsYXkodGhpcy5fdGlja0FuZFJlcGVhdCxbXSx0aGlzKSksITApfSxzLnByb3RvdHlwZS5fdGlja0FuZFJlcGVhdD1mdW5jdGlvbigpe3RoaXMuX3RpY2tTY2hlZHVsZWQ9ITEsdGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkfHwodGhpcy5fdGljaygpLHRoaXMuaXNGaW5pc2hlZHx8KG4uZGVsYXkodGhpcy5fdGlja0FuZFJlcGVhdCxbXSx0aGlzKSx0aGlzLl90aWNrU2NoZWR1bGVkPSEwKSl9LHMucHJvdG90eXBlLl90aWNrPWZ1bmN0aW9uKCl7aWYodGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3ZhciBlPW51bGwsdD1NYXRoLm1pbih0aGlzLm1heCx0aGlzLmluZGV4KzE2Mzg0KTtpZih0aGlzLmluZGV4Pj10aGlzLm1heClyZXR1cm4gdGhpcy5lbmQoKTtzd2l0Y2godGhpcy50eXBlKXtjYXNlXCJzdHJpbmdcIjplPXRoaXMuZGF0YS5zdWJzdHJpbmcodGhpcy5pbmRleCx0KTticmVhaztjYXNlXCJ1aW50OGFycmF5XCI6ZT10aGlzLmRhdGEuc3ViYXJyYXkodGhpcy5pbmRleCx0KTticmVhaztjYXNlXCJhcnJheVwiOmNhc2VcIm5vZGVidWZmZXJcIjplPXRoaXMuZGF0YS5zbGljZSh0aGlzLmluZGV4LHQpfXJldHVybiB0aGlzLmluZGV4PXQsdGhpcy5wdXNoKHtkYXRhOmUsbWV0YTp7cGVyY2VudDp0aGlzLm1heD90aGlzLmluZGV4L3RoaXMubWF4KjEwMDowfX0pfSx0LmV4cG9ydHM9c30se1wiLi4vdXRpbHNcIjozMixcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMjg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3RoaXMubmFtZT1lfHxcImRlZmF1bHRcIix0aGlzLnN0cmVhbUluZm89e30sdGhpcy5nZW5lcmF0ZWRFcnJvcj1udWxsLHRoaXMuZXh0cmFTdHJlYW1JbmZvPXt9LHRoaXMuaXNQYXVzZWQ9ITAsdGhpcy5pc0ZpbmlzaGVkPSExLHRoaXMuaXNMb2NrZWQ9ITEsdGhpcy5fbGlzdGVuZXJzPXtkYXRhOltdLGVuZDpbXSxlcnJvcjpbXX0sdGhpcy5wcmV2aW91cz1udWxsfW4ucHJvdG90eXBlPXtwdXNoOmZ1bmN0aW9uKGUpe3RoaXMuZW1pdChcImRhdGFcIixlKX0sZW5kOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3RoaXMuZmx1c2goKTt0cnl7dGhpcy5lbWl0KFwiZW5kXCIpLHRoaXMuY2xlYW5VcCgpLHRoaXMuaXNGaW5pc2hlZD0hMH1jYXRjaChlKXt0aGlzLmVtaXQoXCJlcnJvclwiLGUpfXJldHVybiEwfSxlcnJvcjpmdW5jdGlvbihlKXtyZXR1cm4hdGhpcy5pc0ZpbmlzaGVkJiYodGhpcy5pc1BhdXNlZD90aGlzLmdlbmVyYXRlZEVycm9yPWU6KHRoaXMuaXNGaW5pc2hlZD0hMCx0aGlzLmVtaXQoXCJlcnJvclwiLGUpLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMuZXJyb3IoZSksdGhpcy5jbGVhblVwKCkpLCEwKX0sb246ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2VdLnB1c2godCksdGhpc30sY2xlYW5VcDpmdW5jdGlvbigpe3RoaXMuc3RyZWFtSW5mbz10aGlzLmdlbmVyYXRlZEVycm9yPXRoaXMuZXh0cmFTdHJlYW1JbmZvPW51bGwsdGhpcy5fbGlzdGVuZXJzPVtdfSxlbWl0OmZ1bmN0aW9uKGUsdCl7aWYodGhpcy5fbGlzdGVuZXJzW2VdKWZvcih2YXIgcj0wO3I8dGhpcy5fbGlzdGVuZXJzW2VdLmxlbmd0aDtyKyspdGhpcy5fbGlzdGVuZXJzW2VdW3JdLmNhbGwodGhpcyx0KX0scGlwZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZWdpc3RlclByZXZpb3VzKHRoaXMpfSxyZWdpc3RlclByZXZpb3VzOmZ1bmN0aW9uKGUpe2lmKHRoaXMuaXNMb2NrZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0cmVhbSAnXCIrdGhpcytcIicgaGFzIGFscmVhZHkgYmVlbiB1c2VkLlwiKTt0aGlzLnN0cmVhbUluZm89ZS5zdHJlYW1JbmZvLHRoaXMubWVyZ2VTdHJlYW1JbmZvKCksdGhpcy5wcmV2aW91cz1lO3ZhciB0PXRoaXM7cmV0dXJuIGUub24oXCJkYXRhXCIsZnVuY3Rpb24oZSl7dC5wcm9jZXNzQ2h1bmsoZSl9KSxlLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0LmVuZCgpfSksZS5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7dC5lcnJvcihlKX0pLHRoaXN9LHBhdXNlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNQYXVzZWQmJiF0aGlzLmlzRmluaXNoZWQmJih0aGlzLmlzUGF1c2VkPSEwLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMucGF1c2UoKSwhMCl9LHJlc3VtZTpmdW5jdGlvbigpe2lmKCF0aGlzLmlzUGF1c2VkfHx0aGlzLmlzRmluaXNoZWQpcmV0dXJuITE7dmFyIGU9dGhpcy5pc1BhdXNlZD0hMTtyZXR1cm4gdGhpcy5nZW5lcmF0ZWRFcnJvciYmKHRoaXMuZXJyb3IodGhpcy5nZW5lcmF0ZWRFcnJvciksZT0hMCksdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5yZXN1bWUoKSwhZX0sZmx1c2g6ZnVuY3Rpb24oKXt9LHByb2Nlc3NDaHVuazpmdW5jdGlvbihlKXt0aGlzLnB1c2goZSl9LHdpdGhTdHJlYW1JbmZvOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZXh0cmFTdHJlYW1JbmZvW2VdPXQsdGhpcy5tZXJnZVN0cmVhbUluZm8oKSx0aGlzfSxtZXJnZVN0cmVhbUluZm86ZnVuY3Rpb24oKXtmb3IodmFyIGUgaW4gdGhpcy5leHRyYVN0cmVhbUluZm8pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuZXh0cmFTdHJlYW1JbmZvLGUpJiYodGhpcy5zdHJlYW1JbmZvW2VdPXRoaXMuZXh0cmFTdHJlYW1JbmZvW2VdKX0sbG9jazpmdW5jdGlvbigpe2lmKHRoaXMuaXNMb2NrZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0cmVhbSAnXCIrdGhpcytcIicgaGFzIGFscmVhZHkgYmVlbiB1c2VkLlwiKTt0aGlzLmlzTG9ja2VkPSEwLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMubG9jaygpfSx0b1N0cmluZzpmdW5jdGlvbigpe3ZhciBlPVwiV29ya2VyIFwiK3RoaXMubmFtZTtyZXR1cm4gdGhpcy5wcmV2aW91cz90aGlzLnByZXZpb3VzK1wiIC0+IFwiK2U6ZX19LHQuZXhwb3J0cz1ufSx7fV0sMjk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaD1lKFwiLi4vdXRpbHNcIiksaT1lKFwiLi9Db252ZXJ0V29ya2VyXCIpLHM9ZShcIi4vR2VuZXJpY1dvcmtlclwiKSx1PWUoXCIuLi9iYXNlNjRcIiksbj1lKFwiLi4vc3VwcG9ydFwiKSxhPWUoXCIuLi9leHRlcm5hbFwiKSxvPW51bGw7aWYobi5ub2Rlc3RyZWFtKXRyeXtvPWUoXCIuLi9ub2RlanMvTm9kZWpzU3RyZWFtT3V0cHV0QWRhcHRlclwiKX1jYXRjaChlKXt9ZnVuY3Rpb24gbChlLG8pe3JldHVybiBuZXcgYS5Qcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIG49W10saT1lLl9pbnRlcm5hbFR5cGUscz1lLl9vdXRwdXRUeXBlLGE9ZS5fbWltZVR5cGU7ZS5vbihcImRhdGFcIixmdW5jdGlvbihlLHQpe24ucHVzaChlKSxvJiZvKHQpfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpe249W10scihlKX0pLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0cnl7dmFyIGU9ZnVuY3Rpb24oZSx0LHIpe3N3aXRjaChlKXtjYXNlXCJibG9iXCI6cmV0dXJuIGgubmV3QmxvYihoLnRyYW5zZm9ybVRvKFwiYXJyYXlidWZmZXJcIix0KSxyKTtjYXNlXCJiYXNlNjRcIjpyZXR1cm4gdS5lbmNvZGUodCk7ZGVmYXVsdDpyZXR1cm4gaC50cmFuc2Zvcm1UbyhlLHQpfX0ocyxmdW5jdGlvbihlLHQpe3ZhciByLG49MCxpPW51bGwscz0wO2ZvcihyPTA7cjx0Lmxlbmd0aDtyKyspcys9dFtyXS5sZW5ndGg7c3dpdGNoKGUpe2Nhc2VcInN0cmluZ1wiOnJldHVybiB0LmpvaW4oXCJcIik7Y2FzZVwiYXJyYXlcIjpyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSx0KTtjYXNlXCJ1aW50OGFycmF5XCI6Zm9yKGk9bmV3IFVpbnQ4QXJyYXkocykscj0wO3I8dC5sZW5ndGg7cisrKWkuc2V0KHRbcl0sbiksbis9dFtyXS5sZW5ndGg7cmV0dXJuIGk7Y2FzZVwibm9kZWJ1ZmZlclwiOnJldHVybiBCdWZmZXIuY29uY2F0KHQpO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwiY29uY2F0IDogdW5zdXBwb3J0ZWQgdHlwZSAnXCIrZStcIidcIil9fShpLG4pLGEpO3QoZSl9Y2F0Y2goZSl7cihlKX1uPVtdfSkucmVzdW1lKCl9KX1mdW5jdGlvbiBmKGUsdCxyKXt2YXIgbj10O3N3aXRjaCh0KXtjYXNlXCJibG9iXCI6Y2FzZVwiYXJyYXlidWZmZXJcIjpuPVwidWludDhhcnJheVwiO2JyZWFrO2Nhc2VcImJhc2U2NFwiOm49XCJzdHJpbmdcIn10cnl7dGhpcy5faW50ZXJuYWxUeXBlPW4sdGhpcy5fb3V0cHV0VHlwZT10LHRoaXMuX21pbWVUeXBlPXIsaC5jaGVja1N1cHBvcnQobiksdGhpcy5fd29ya2VyPWUucGlwZShuZXcgaShuKSksZS5sb2NrKCl9Y2F0Y2goZSl7dGhpcy5fd29ya2VyPW5ldyBzKFwiZXJyb3JcIiksdGhpcy5fd29ya2VyLmVycm9yKGUpfX1mLnByb3RvdHlwZT17YWNjdW11bGF0ZTpmdW5jdGlvbihlKXtyZXR1cm4gbCh0aGlzLGUpfSxvbjpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXM7cmV0dXJuXCJkYXRhXCI9PT1lP3RoaXMuX3dvcmtlci5vbihlLGZ1bmN0aW9uKGUpe3QuY2FsbChyLGUuZGF0YSxlLm1ldGEpfSk6dGhpcy5fd29ya2VyLm9uKGUsZnVuY3Rpb24oKXtoLmRlbGF5KHQsYXJndW1lbnRzLHIpfSksdGhpc30scmVzdW1lOmZ1bmN0aW9uKCl7cmV0dXJuIGguZGVsYXkodGhpcy5fd29ya2VyLnJlc3VtZSxbXSx0aGlzLl93b3JrZXIpLHRoaXN9LHBhdXNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dvcmtlci5wYXVzZSgpLHRoaXN9LHRvTm9kZWpzU3RyZWFtOmZ1bmN0aW9uKGUpe2lmKGguY2hlY2tTdXBwb3J0KFwibm9kZXN0cmVhbVwiKSxcIm5vZGVidWZmZXJcIiE9PXRoaXMuX291dHB1dFR5cGUpdGhyb3cgbmV3IEVycm9yKHRoaXMuX291dHB1dFR5cGUrXCIgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIG1ldGhvZFwiKTtyZXR1cm4gbmV3IG8odGhpcyx7b2JqZWN0TW9kZTpcIm5vZGVidWZmZXJcIiE9PXRoaXMuX291dHB1dFR5cGV9LGUpfX0sdC5leHBvcnRzPWZ9LHtcIi4uL2Jhc2U2NFwiOjEsXCIuLi9leHRlcm5hbFwiOjYsXCIuLi9ub2RlanMvTm9kZWpzU3RyZWFtT3V0cHV0QWRhcHRlclwiOjEzLFwiLi4vc3VwcG9ydFwiOjMwLFwiLi4vdXRpbHNcIjozMixcIi4vQ29udmVydFdvcmtlclwiOjI0LFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwzMDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2lmKHIuYmFzZTY0PSEwLHIuYXJyYXk9ITAsci5zdHJpbmc9ITAsci5hcnJheWJ1ZmZlcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgQXJyYXlCdWZmZXImJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5LHIubm9kZWJ1ZmZlcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgQnVmZmVyLHIudWludDhhcnJheT1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSxcInVuZGVmaW5lZFwiPT10eXBlb2YgQXJyYXlCdWZmZXIpci5ibG9iPSExO2Vsc2V7dmFyIG49bmV3IEFycmF5QnVmZmVyKDApO3RyeXtyLmJsb2I9MD09PW5ldyBCbG9iKFtuXSx7dHlwZTpcImFwcGxpY2F0aW9uL3ppcFwifSkuc2l6ZX1jYXRjaChlKXt0cnl7dmFyIGk9bmV3KHNlbGYuQmxvYkJ1aWxkZXJ8fHNlbGYuV2ViS2l0QmxvYkJ1aWxkZXJ8fHNlbGYuTW96QmxvYkJ1aWxkZXJ8fHNlbGYuTVNCbG9iQnVpbGRlcik7aS5hcHBlbmQobiksci5ibG9iPTA9PT1pLmdldEJsb2IoXCJhcHBsaWNhdGlvbi96aXBcIikuc2l6ZX1jYXRjaChlKXtyLmJsb2I9ITF9fX10cnl7ci5ub2Rlc3RyZWFtPSEhZShcInJlYWRhYmxlLXN0cmVhbVwiKS5SZWFkYWJsZX1jYXRjaChlKXtyLm5vZGVzdHJlYW09ITF9fSx7XCJyZWFkYWJsZS1zdHJlYW1cIjoxNn1dLDMxOltmdW5jdGlvbihlLHQscyl7XCJ1c2Ugc3RyaWN0XCI7Zm9yKHZhciBvPWUoXCIuL3V0aWxzXCIpLGg9ZShcIi4vc3VwcG9ydFwiKSxyPWUoXCIuL25vZGVqc1V0aWxzXCIpLG49ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksdT1uZXcgQXJyYXkoMjU2KSxpPTA7aTwyNTY7aSsrKXVbaV09MjUyPD1pPzY6MjQ4PD1pPzU6MjQwPD1pPzQ6MjI0PD1pPzM6MTkyPD1pPzI6MTt1WzI1NF09dVsyNTRdPTE7ZnVuY3Rpb24gYSgpe24uY2FsbCh0aGlzLFwidXRmLTggZGVjb2RlXCIpLHRoaXMubGVmdE92ZXI9bnVsbH1mdW5jdGlvbiBsKCl7bi5jYWxsKHRoaXMsXCJ1dGYtOCBlbmNvZGVcIil9cy51dGY4ZW5jb2RlPWZ1bmN0aW9uKGUpe3JldHVybiBoLm5vZGVidWZmZXI/ci5uZXdCdWZmZXJGcm9tKGUsXCJ1dGYtOFwiKTpmdW5jdGlvbihlKXt2YXIgdCxyLG4saSxzLGE9ZS5sZW5ndGgsbz0wO2ZvcihpPTA7aTxhO2krKyk1NTI5Nj09KDY0NTEyJihyPWUuY2hhckNvZGVBdChpKSkpJiZpKzE8YSYmNTYzMjA9PSg2NDUxMiYobj1lLmNoYXJDb2RlQXQoaSsxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhuLTU2MzIwKSxpKyspLG8rPXI8MTI4PzE6cjwyMDQ4PzI6cjw2NTUzNj8zOjQ7Zm9yKHQ9aC51aW50OGFycmF5P25ldyBVaW50OEFycmF5KG8pOm5ldyBBcnJheShvKSxpPXM9MDtzPG87aSsrKTU1Mjk2PT0oNjQ1MTImKHI9ZS5jaGFyQ29kZUF0KGkpKSkmJmkrMTxhJiY1NjMyMD09KDY0NTEyJihuPWUuY2hhckNvZGVBdChpKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKG4tNTYzMjApLGkrKykscjwxMjg/dFtzKytdPXI6KHI8MjA0OD90W3MrK109MTkyfHI+Pj42OihyPDY1NTM2P3RbcysrXT0yMjR8cj4+PjEyOih0W3MrK109MjQwfHI+Pj4xOCx0W3MrK109MTI4fHI+Pj4xMiY2MyksdFtzKytdPTEyOHxyPj4+NiY2MyksdFtzKytdPTEyOHw2MyZyKTtyZXR1cm4gdH0oZSl9LHMudXRmOGRlY29kZT1mdW5jdGlvbihlKXtyZXR1cm4gaC5ub2RlYnVmZmVyP28udHJhbnNmb3JtVG8oXCJub2RlYnVmZmVyXCIsZSkudG9TdHJpbmcoXCJ1dGYtOFwiKTpmdW5jdGlvbihlKXt2YXIgdCxyLG4saSxzPWUubGVuZ3RoLGE9bmV3IEFycmF5KDIqcyk7Zm9yKHQ9cj0wO3Q8czspaWYoKG49ZVt0KytdKTwxMjgpYVtyKytdPW47ZWxzZSBpZig0PChpPXVbbl0pKWFbcisrXT02NTUzMyx0Kz1pLTE7ZWxzZXtmb3IobiY9Mj09PWk/MzE6Mz09PWk/MTU6NzsxPGkmJnQ8czspbj1uPDw2fDYzJmVbdCsrXSxpLS07MTxpP2FbcisrXT02NTUzMzpuPDY1NTM2P2FbcisrXT1uOihuLT02NTUzNixhW3IrK109NTUyOTZ8bj4+MTAmMTAyMyxhW3IrK109NTYzMjB8MTAyMyZuKX1yZXR1cm4gYS5sZW5ndGghPT1yJiYoYS5zdWJhcnJheT9hPWEuc3ViYXJyYXkoMCxyKTphLmxlbmd0aD1yKSxvLmFwcGx5RnJvbUNoYXJDb2RlKGEpfShlPW8udHJhbnNmb3JtVG8oaC51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIixlKSl9LG8uaW5oZXJpdHMoYSxuKSxhLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24oZSl7dmFyIHQ9by50cmFuc2Zvcm1UbyhoLnVpbnQ4YXJyYXk/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiLGUuZGF0YSk7aWYodGhpcy5sZWZ0T3ZlciYmdGhpcy5sZWZ0T3Zlci5sZW5ndGgpe2lmKGgudWludDhhcnJheSl7dmFyIHI9dDsodD1uZXcgVWludDhBcnJheShyLmxlbmd0aCt0aGlzLmxlZnRPdmVyLmxlbmd0aCkpLnNldCh0aGlzLmxlZnRPdmVyLDApLHQuc2V0KHIsdGhpcy5sZWZ0T3Zlci5sZW5ndGgpfWVsc2UgdD10aGlzLmxlZnRPdmVyLmNvbmNhdCh0KTt0aGlzLmxlZnRPdmVyPW51bGx9dmFyIG49ZnVuY3Rpb24oZSx0KXt2YXIgcjtmb3IoKHQ9dHx8ZS5sZW5ndGgpPmUubGVuZ3RoJiYodD1lLmxlbmd0aCkscj10LTE7MDw9ciYmMTI4PT0oMTkyJmVbcl0pOylyLS07cmV0dXJuIHI8MD90OjA9PT1yP3Q6cit1W2Vbcl1dPnQ/cjp0fSh0KSxpPXQ7biE9PXQubGVuZ3RoJiYoaC51aW50OGFycmF5PyhpPXQuc3ViYXJyYXkoMCxuKSx0aGlzLmxlZnRPdmVyPXQuc3ViYXJyYXkobix0Lmxlbmd0aCkpOihpPXQuc2xpY2UoMCxuKSx0aGlzLmxlZnRPdmVyPXQuc2xpY2Uobix0Lmxlbmd0aCkpKSx0aGlzLnB1c2goe2RhdGE6cy51dGY4ZGVjb2RlKGkpLG1ldGE6ZS5tZXRhfSl9LGEucHJvdG90eXBlLmZsdXNoPWZ1bmN0aW9uKCl7dGhpcy5sZWZ0T3ZlciYmdGhpcy5sZWZ0T3Zlci5sZW5ndGgmJih0aGlzLnB1c2goe2RhdGE6cy51dGY4ZGVjb2RlKHRoaXMubGVmdE92ZXIpLG1ldGE6e319KSx0aGlzLmxlZnRPdmVyPW51bGwpfSxzLlV0ZjhEZWNvZGVXb3JrZXI9YSxvLmluaGVyaXRzKGwsbiksbC5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe3RoaXMucHVzaCh7ZGF0YTpzLnV0ZjhlbmNvZGUoZS5kYXRhKSxtZXRhOmUubWV0YX0pfSxzLlV0ZjhFbmNvZGVXb3JrZXI9bH0se1wiLi9ub2RlanNVdGlsc1wiOjE0LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0aWxzXCI6MzJ9XSwzMjpbZnVuY3Rpb24oZSx0LGEpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCIuL3N1cHBvcnRcIiksaD1lKFwiLi9iYXNlNjRcIikscj1lKFwiLi9ub2RlanNVdGlsc1wiKSx1PWUoXCIuL2V4dGVybmFsXCIpO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGV9ZnVuY3Rpb24gbChlLHQpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7KytyKXRbcl09MjU1JmUuY2hhckNvZGVBdChyKTtyZXR1cm4gdH1lKFwic2V0aW1tZWRpYXRlXCIpLGEubmV3QmxvYj1mdW5jdGlvbih0LHIpe2EuY2hlY2tTdXBwb3J0KFwiYmxvYlwiKTt0cnl7cmV0dXJuIG5ldyBCbG9iKFt0XSx7dHlwZTpyfSl9Y2F0Y2goZSl7dHJ5e3ZhciBuPW5ldyhzZWxmLkJsb2JCdWlsZGVyfHxzZWxmLldlYktpdEJsb2JCdWlsZGVyfHxzZWxmLk1vekJsb2JCdWlsZGVyfHxzZWxmLk1TQmxvYkJ1aWxkZXIpO3JldHVybiBuLmFwcGVuZCh0KSxuLmdldEJsb2Iocil9Y2F0Y2goZSl7dGhyb3cgbmV3IEVycm9yKFwiQnVnIDogY2FuJ3QgY29uc3RydWN0IHRoZSBCbG9iLlwiKX19fTt2YXIgaT17c3RyaW5naWZ5QnlDaHVuazpmdW5jdGlvbihlLHQscil7dmFyIG49W10saT0wLHM9ZS5sZW5ndGg7aWYoczw9cilyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLGUpO2Zvcig7aTxzOylcImFycmF5XCI9PT10fHxcIm5vZGVidWZmZXJcIj09PXQ/bi5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxlLnNsaWNlKGksTWF0aC5taW4oaStyLHMpKSkpOm4ucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsZS5zdWJhcnJheShpLE1hdGgubWluKGkrcixzKSkpKSxpKz1yO3JldHVybiBuLmpvaW4oXCJcIil9LHN0cmluZ2lmeUJ5Q2hhcjpmdW5jdGlvbihlKXtmb3IodmFyIHQ9XCJcIixyPTA7cjxlLmxlbmd0aDtyKyspdCs9U3RyaW5nLmZyb21DaGFyQ29kZShlW3JdKTtyZXR1cm4gdH0sYXBwbHlDYW5CZVVzZWQ6e3VpbnQ4YXJyYXk6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG8udWludDhhcnJheSYmMT09PVN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxuZXcgVWludDhBcnJheSgxKSkubGVuZ3RofWNhdGNoKGUpe3JldHVybiExfX0oKSxub2RlYnVmZmVyOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBvLm5vZGVidWZmZXImJjE9PT1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsci5hbGxvY0J1ZmZlcigxKSkubGVuZ3RofWNhdGNoKGUpe3JldHVybiExfX0oKX19O2Z1bmN0aW9uIHMoZSl7dmFyIHQ9NjU1MzYscj1hLmdldFR5cGVPZihlKSxuPSEwO2lmKFwidWludDhhcnJheVwiPT09cj9uPWkuYXBwbHlDYW5CZVVzZWQudWludDhhcnJheTpcIm5vZGVidWZmZXJcIj09PXImJihuPWkuYXBwbHlDYW5CZVVzZWQubm9kZWJ1ZmZlciksbilmb3IoOzE8dDspdHJ5e3JldHVybiBpLnN0cmluZ2lmeUJ5Q2h1bmsoZSxyLHQpfWNhdGNoKGUpe3Q9TWF0aC5mbG9vcih0LzIpfXJldHVybiBpLnN0cmluZ2lmeUJ5Q2hhcihlKX1mdW5jdGlvbiBmKGUsdCl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspdFtyXT1lW3JdO3JldHVybiB0fWEuYXBwbHlGcm9tQ2hhckNvZGU9czt2YXIgYz17fTtjLnN0cmluZz17c3RyaW5nOm4sYXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxuZXcgQXJyYXkoZS5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGMuc3RyaW5nLnVpbnQ4YXJyYXkoZSkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBsKGUsbmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpKX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gbChlLHIuYWxsb2NCdWZmZXIoZS5sZW5ndGgpKX19LGMuYXJyYXk9e3N0cmluZzpzLGFycmF5Om4sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KGUpLmJ1ZmZlcn0sdWludDhhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZSl9LG5vZGVidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHIubmV3QnVmZmVyRnJvbShlKX19LGMuYXJyYXlidWZmZXI9e3N0cmluZzpmdW5jdGlvbihlKXtyZXR1cm4gcyhuZXcgVWludDhBcnJheShlKSl9LGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBmKG5ldyBVaW50OEFycmF5KGUpLG5ldyBBcnJheShlLmJ5dGVMZW5ndGgpKX0sYXJyYXlidWZmZXI6bix1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBuZXcgVWludDhBcnJheShlKX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKG5ldyBVaW50OEFycmF5KGUpKX19LGMudWludDhhcnJheT17c3RyaW5nOnMsYXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIGYoZSxuZXcgQXJyYXkoZS5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuYnVmZmVyfSx1aW50OGFycmF5Om4sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKGUpfX0sYy5ub2RlYnVmZmVyPXtzdHJpbmc6cyxhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gZihlLG5ldyBBcnJheShlLmxlbmd0aCkpfSxhcnJheWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gYy5ub2RlYnVmZmVyLnVpbnQ4YXJyYXkoZSkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBmKGUsbmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpKX0sbm9kZWJ1ZmZlcjpufSxhLnRyYW5zZm9ybVRvPWZ1bmN0aW9uKGUsdCl7aWYodD10fHxcIlwiLCFlKXJldHVybiB0O2EuY2hlY2tTdXBwb3J0KGUpO3ZhciByPWEuZ2V0VHlwZU9mKHQpO3JldHVybiBjW3JdW2VdKHQpfSxhLnJlc29sdmU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc3BsaXQoXCIvXCIpLHI9W10sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgaT10W25dO1wiLlwiPT09aXx8XCJcIj09PWkmJjAhPT1uJiZuIT09dC5sZW5ndGgtMXx8KFwiLi5cIj09PWk/ci5wb3AoKTpyLnB1c2goaSkpfXJldHVybiByLmpvaW4oXCIvXCIpfSxhLmdldFR5cGVPZj1mdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9cInN0cmluZ1wiOlwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKT9cImFycmF5XCI6by5ub2RlYnVmZmVyJiZyLmlzQnVmZmVyKGUpP1wibm9kZWJ1ZmZlclwiOm8udWludDhhcnJheSYmZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXk/XCJ1aW50OGFycmF5XCI6by5hcnJheWJ1ZmZlciYmZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyP1wiYXJyYXlidWZmZXJcIjp2b2lkIDB9LGEuY2hlY2tTdXBwb3J0PWZ1bmN0aW9uKGUpe2lmKCFvW2UudG9Mb3dlckNhc2UoKV0pdGhyb3cgbmV3IEVycm9yKGUrXCIgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIHBsYXRmb3JtXCIpfSxhLk1BWF9WQUxVRV8xNkJJVFM9NjU1MzUsYS5NQVhfVkFMVUVfMzJCSVRTPS0xLGEucHJldHR5PWZ1bmN0aW9uKGUpe3ZhciB0LHIsbj1cIlwiO2ZvcihyPTA7cjwoZXx8XCJcIikubGVuZ3RoO3IrKyluKz1cIlxcXFx4XCIrKCh0PWUuY2hhckNvZGVBdChyKSk8MTY/XCIwXCI6XCJcIikrdC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gbn0sYS5kZWxheT1mdW5jdGlvbihlLHQscil7c2V0SW1tZWRpYXRlKGZ1bmN0aW9uKCl7ZS5hcHBseShyfHxudWxsLHR8fFtdKX0pfSxhLmluaGVyaXRzPWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gcigpe31yLnByb3RvdHlwZT10LnByb3RvdHlwZSxlLnByb3RvdHlwZT1uZXcgcn0sYS5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LHI9e307Zm9yKGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKWZvcih0IGluIGFyZ3VtZW50c1tlXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndW1lbnRzW2VdLHQpJiZ2b2lkIDA9PT1yW3RdJiYoclt0XT1hcmd1bWVudHNbZV1bdF0pO3JldHVybiByfSxhLnByZXBhcmVDb250ZW50PWZ1bmN0aW9uKHIsZSxuLGkscyl7cmV0dXJuIHUuUHJvbWlzZS5yZXNvbHZlKGUpLnRoZW4oZnVuY3Rpb24obil7cmV0dXJuIG8uYmxvYiYmKG4gaW5zdGFuY2VvZiBCbG9ifHwtMSE9PVtcIltvYmplY3QgRmlsZV1cIixcIltvYmplY3QgQmxvYl1cIl0uaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobikpKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXI/bmV3IHUuUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBlPW5ldyBGaWxlUmVhZGVyO2Uub25sb2FkPWZ1bmN0aW9uKGUpe3QoZS50YXJnZXQucmVzdWx0KX0sZS5vbmVycm9yPWZ1bmN0aW9uKGUpe3IoZS50YXJnZXQuZXJyb3IpfSxlLnJlYWRBc0FycmF5QnVmZmVyKG4pfSk6bn0pLnRoZW4oZnVuY3Rpb24oZSl7dmFyIHQ9YS5nZXRUeXBlT2YoZSk7cmV0dXJuIHQ/KFwiYXJyYXlidWZmZXJcIj09PXQ/ZT1hLnRyYW5zZm9ybVRvKFwidWludDhhcnJheVwiLGUpOlwic3RyaW5nXCI9PT10JiYocz9lPWguZGVjb2RlKGUpOm4mJiEwIT09aSYmKGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxvLnVpbnQ4YXJyYXk/bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpOm5ldyBBcnJheShlLmxlbmd0aCkpfShlKSkpLGUpOnUuUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2FuJ3QgcmVhZCB0aGUgZGF0YSBvZiAnXCIrcitcIicuIElzIGl0IGluIGEgc3VwcG9ydGVkIEphdmFTY3JpcHQgdHlwZSAoU3RyaW5nLCBCbG9iLCBBcnJheUJ1ZmZlciwgZXRjKSA/XCIpKX0pfX0se1wiLi9iYXNlNjRcIjoxLFwiLi9leHRlcm5hbFwiOjYsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N1cHBvcnRcIjozMCxzZXRpbW1lZGlhdGU6NTR9XSwzMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL3JlYWRlci9yZWFkZXJGb3JcIiksaT1lKFwiLi91dGlsc1wiKSxzPWUoXCIuL3NpZ25hdHVyZVwiKSxhPWUoXCIuL3ppcEVudHJ5XCIpLG89ZShcIi4vc3VwcG9ydFwiKTtmdW5jdGlvbiBoKGUpe3RoaXMuZmlsZXM9W10sdGhpcy5sb2FkT3B0aW9ucz1lfWgucHJvdG90eXBlPXtjaGVja1NpZ25hdHVyZTpmdW5jdGlvbihlKXtpZighdGhpcy5yZWFkZXIucmVhZEFuZENoZWNrU2lnbmF0dXJlKGUpKXt0aGlzLnJlYWRlci5pbmRleC09NDt2YXIgdD10aGlzLnJlYWRlci5yZWFkU3RyaW5nKDQpO3Rocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgb3IgYnVnOiB1bmV4cGVjdGVkIHNpZ25hdHVyZSAoXCIraS5wcmV0dHkodCkrXCIsIGV4cGVjdGVkIFwiK2kucHJldHR5KGUpK1wiKVwiKX19LGlzU2lnbmF0dXJlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy5yZWFkZXIuaW5kZXg7dGhpcy5yZWFkZXIuc2V0SW5kZXgoZSk7dmFyIG49dGhpcy5yZWFkZXIucmVhZFN0cmluZyg0KT09PXQ7cmV0dXJuIHRoaXMucmVhZGVyLnNldEluZGV4KHIpLG59LHJlYWRCbG9ja0VuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3RoaXMuZGlza051bWJlcj10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuY2VudHJhbERpclJlY29yZHM9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5jZW50cmFsRGlyT2Zmc2V0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy56aXBDb21tZW50TGVuZ3RoPXRoaXMucmVhZGVyLnJlYWRJbnQoMik7dmFyIGU9dGhpcy5yZWFkZXIucmVhZERhdGEodGhpcy56aXBDb21tZW50TGVuZ3RoKSx0PW8udWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCIscj1pLnRyYW5zZm9ybVRvKHQsZSk7dGhpcy56aXBDb21tZW50PXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUocil9LHJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsOmZ1bmN0aW9uKCl7dGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemU9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLnJlYWRlci5za2lwKDQpLHRoaXMuZGlza051bWJlcj10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuY2VudHJhbERpclJlY29yZHM9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLmNlbnRyYWxEaXJTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5jZW50cmFsRGlyT2Zmc2V0PXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy56aXA2NEV4dGVuc2libGVEYXRhPXt9O2Zvcih2YXIgZSx0LHIsbj10aGlzLnppcDY0RW5kT2ZDZW50cmFsU2l6ZS00NDswPG47KWU9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCkscj10aGlzLnJlYWRlci5yZWFkRGF0YSh0KSx0aGlzLnppcDY0RXh0ZW5zaWJsZURhdGFbZV09e2lkOmUsbGVuZ3RoOnQsdmFsdWU6cn19LHJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsTG9jYXRvcjpmdW5jdGlvbigpe2lmKHRoaXMuZGlza1dpdGhaaXA2NENlbnRyYWxEaXJTdGFydD10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcj10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuZGlza3NDb3VudD10aGlzLnJlYWRlci5yZWFkSW50KDQpLDE8dGhpcy5kaXNrc0NvdW50KXRocm93IG5ldyBFcnJvcihcIk11bHRpLXZvbHVtZXMgemlwIGFyZSBub3Qgc3VwcG9ydGVkXCIpfSxyZWFkTG9jYWxGaWxlczpmdW5jdGlvbigpe3ZhciBlLHQ7Zm9yKGU9MDtlPHRoaXMuZmlsZXMubGVuZ3RoO2UrKyl0PXRoaXMuZmlsZXNbZV0sdGhpcy5yZWFkZXIuc2V0SW5kZXgodC5sb2NhbEhlYWRlck9mZnNldCksdGhpcy5jaGVja1NpZ25hdHVyZShzLkxPQ0FMX0ZJTEVfSEVBREVSKSx0LnJlYWRMb2NhbFBhcnQodGhpcy5yZWFkZXIpLHQuaGFuZGxlVVRGOCgpLHQucHJvY2Vzc0F0dHJpYnV0ZXMoKX0scmVhZENlbnRyYWxEaXI6ZnVuY3Rpb24oKXt2YXIgZTtmb3IodGhpcy5yZWFkZXIuc2V0SW5kZXgodGhpcy5jZW50cmFsRGlyT2Zmc2V0KTt0aGlzLnJlYWRlci5yZWFkQW5kQ2hlY2tTaWduYXR1cmUocy5DRU5UUkFMX0ZJTEVfSEVBREVSKTspKGU9bmV3IGEoe3ppcDY0OnRoaXMuemlwNjR9LHRoaXMubG9hZE9wdGlvbnMpKS5yZWFkQ2VudHJhbFBhcnQodGhpcy5yZWFkZXIpLHRoaXMuZmlsZXMucHVzaChlKTtpZih0aGlzLmNlbnRyYWxEaXJSZWNvcmRzIT09dGhpcy5maWxlcy5sZW5ndGgmJjAhPT10aGlzLmNlbnRyYWxEaXJSZWNvcmRzJiYwPT09dGhpcy5maWxlcy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCBvciBidWc6IGV4cGVjdGVkIFwiK3RoaXMuY2VudHJhbERpclJlY29yZHMrXCIgcmVjb3JkcyBpbiBjZW50cmFsIGRpciwgZ290IFwiK3RoaXMuZmlsZXMubGVuZ3RoKX0scmVhZEVuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3ZhciBlPXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKTtpZihlPDApdGhyb3chdGhpcy5pc1NpZ25hdHVyZSgwLHMuTE9DQUxfRklMRV9IRUFERVIpP25ldyBFcnJvcihcIkNhbid0IGZpbmQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5IDogaXMgdGhpcyBhIHppcCBmaWxlID8gSWYgaXQgaXMsIHNlZSBodHRwczovL3N0dWsuZ2l0aHViLmlvL2pzemlwL2RvY3VtZW50YXRpb24vaG93dG8vcmVhZF96aXAuaHRtbFwiKTpuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwOiBjYW4ndCBmaW5kIGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVwiKTt0aGlzLnJlYWRlci5zZXRJbmRleChlKTt2YXIgdD1lO2lmKHRoaXMuY2hlY2tTaWduYXR1cmUocy5DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVhZEJsb2NrRW5kT2ZDZW50cmFsKCksdGhpcy5kaXNrTnVtYmVyPT09aS5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmRpc2tXaXRoQ2VudHJhbERpclN0YXJ0PT09aS5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz09PWkuTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyUmVjb3Jkcz09PWkuTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyU2l6ZT09PWkuTUFYX1ZBTFVFXzMyQklUU3x8dGhpcy5jZW50cmFsRGlyT2Zmc2V0PT09aS5NQVhfVkFMVUVfMzJCSVRTKXtpZih0aGlzLnppcDY0PSEwLChlPXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUikpPDApdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogY2FuJ3QgZmluZCB0aGUgWklQNjQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5IGxvY2F0b3JcIik7aWYodGhpcy5yZWFkZXIuc2V0SW5kZXgoZSksdGhpcy5jaGVja1NpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0xPQ0FUT1IpLHRoaXMucmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWxMb2NhdG9yKCksIXRoaXMuaXNTaWduYXR1cmUodGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyLHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKSYmKHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcj10aGlzLnJlYWRlci5sYXN0SW5kZXhPZlNpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORCksdGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyPDApKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IGNhbid0IGZpbmQgdGhlIFpJUDY0IGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVwiKTt0aGlzLnJlYWRlci5zZXRJbmRleCh0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXIpLHRoaXMuY2hlY2tTaWduYXR1cmUocy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWwoKX12YXIgcj10aGlzLmNlbnRyYWxEaXJPZmZzZXQrdGhpcy5jZW50cmFsRGlyU2l6ZTt0aGlzLnppcDY0JiYocis9MjAscis9MTIrdGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemUpO3ZhciBuPXQtcjtpZigwPG4pdGhpcy5pc1NpZ25hdHVyZSh0LHMuQ0VOVFJBTF9GSUxFX0hFQURFUil8fCh0aGlzLnJlYWRlci56ZXJvPW4pO2Vsc2UgaWYobjwwKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IG1pc3NpbmcgXCIrTWF0aC5hYnMobikrXCIgYnl0ZXMuXCIpfSxwcmVwYXJlUmVhZGVyOmZ1bmN0aW9uKGUpe3RoaXMucmVhZGVyPW4oZSl9LGxvYWQ6ZnVuY3Rpb24oZSl7dGhpcy5wcmVwYXJlUmVhZGVyKGUpLHRoaXMucmVhZEVuZE9mQ2VudHJhbCgpLHRoaXMucmVhZENlbnRyYWxEaXIoKSx0aGlzLnJlYWRMb2NhbEZpbGVzKCl9fSx0LmV4cG9ydHM9aH0se1wiLi9yZWFkZXIvcmVhZGVyRm9yXCI6MjIsXCIuL3NpZ25hdHVyZVwiOjIzLFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0aWxzXCI6MzIsXCIuL3ppcEVudHJ5XCI6MzR9XSwzNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL3JlYWRlci9yZWFkZXJGb3JcIikscz1lKFwiLi91dGlsc1wiKSxpPWUoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksYT1lKFwiLi9jcmMzMlwiKSxvPWUoXCIuL3V0ZjhcIiksaD1lKFwiLi9jb21wcmVzc2lvbnNcIiksdT1lKFwiLi9zdXBwb3J0XCIpO2Z1bmN0aW9uIGwoZSx0KXt0aGlzLm9wdGlvbnM9ZSx0aGlzLmxvYWRPcHRpb25zPXR9bC5wcm90b3R5cGU9e2lzRW5jcnlwdGVkOmZ1bmN0aW9uKCl7cmV0dXJuIDE9PSgxJnRoaXMuYml0RmxhZyl9LHVzZVVURjg6ZnVuY3Rpb24oKXtyZXR1cm4gMjA0OD09KDIwNDgmdGhpcy5iaXRGbGFnKX0scmVhZExvY2FsUGFydDpmdW5jdGlvbihlKXt2YXIgdCxyO2lmKGUuc2tpcCgyMiksdGhpcy5maWxlTmFtZUxlbmd0aD1lLnJlYWRJbnQoMikscj1lLnJlYWRJbnQoMiksdGhpcy5maWxlTmFtZT1lLnJlYWREYXRhKHRoaXMuZmlsZU5hbWVMZW5ndGgpLGUuc2tpcChyKSwtMT09PXRoaXMuY29tcHJlc3NlZFNpemV8fC0xPT09dGhpcy51bmNvbXByZXNzZWRTaXplKXRocm93IG5ldyBFcnJvcihcIkJ1ZyBvciBjb3JydXB0ZWQgemlwIDogZGlkbid0IGdldCBlbm91Z2ggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2VudHJhbCBkaXJlY3RvcnkgKGNvbXByZXNzZWRTaXplID09PSAtMSB8fCB1bmNvbXByZXNzZWRTaXplID09PSAtMSlcIik7aWYobnVsbD09PSh0PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiBoKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoLHQpJiZoW3RdLm1hZ2ljPT09ZSlyZXR1cm4gaFt0XTtyZXR1cm4gbnVsbH0odGhpcy5jb21wcmVzc2lvbk1ldGhvZCkpKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgOiBjb21wcmVzc2lvbiBcIitzLnByZXR0eSh0aGlzLmNvbXByZXNzaW9uTWV0aG9kKStcIiB1bmtub3duIChpbm5lciBmaWxlIDogXCIrcy50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHRoaXMuZmlsZU5hbWUpK1wiKVwiKTt0aGlzLmRlY29tcHJlc3NlZD1uZXcgaSh0aGlzLmNvbXByZXNzZWRTaXplLHRoaXMudW5jb21wcmVzc2VkU2l6ZSx0aGlzLmNyYzMyLHQsZS5yZWFkRGF0YSh0aGlzLmNvbXByZXNzZWRTaXplKSl9LHJlYWRDZW50cmFsUGFydDpmdW5jdGlvbihlKXt0aGlzLnZlcnNpb25NYWRlQnk9ZS5yZWFkSW50KDIpLGUuc2tpcCgyKSx0aGlzLmJpdEZsYWc9ZS5yZWFkSW50KDIpLHRoaXMuY29tcHJlc3Npb25NZXRob2Q9ZS5yZWFkU3RyaW5nKDIpLHRoaXMuZGF0ZT1lLnJlYWREYXRlKCksdGhpcy5jcmMzMj1lLnJlYWRJbnQoNCksdGhpcy5jb21wcmVzc2VkU2l6ZT1lLnJlYWRJbnQoNCksdGhpcy51bmNvbXByZXNzZWRTaXplPWUucmVhZEludCg0KTt2YXIgdD1lLnJlYWRJbnQoMik7aWYodGhpcy5leHRyYUZpZWxkc0xlbmd0aD1lLnJlYWRJbnQoMiksdGhpcy5maWxlQ29tbWVudExlbmd0aD1lLnJlYWRJbnQoMiksdGhpcy5kaXNrTnVtYmVyU3RhcnQ9ZS5yZWFkSW50KDIpLHRoaXMuaW50ZXJuYWxGaWxlQXR0cmlidXRlcz1lLnJlYWRJbnQoMiksdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzPWUucmVhZEludCg0KSx0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PWUucmVhZEludCg0KSx0aGlzLmlzRW5jcnlwdGVkKCkpdGhyb3cgbmV3IEVycm9yKFwiRW5jcnlwdGVkIHppcCBhcmUgbm90IHN1cHBvcnRlZFwiKTtlLnNraXAodCksdGhpcy5yZWFkRXh0cmFGaWVsZHMoZSksdGhpcy5wYXJzZVpJUDY0RXh0cmFGaWVsZChlKSx0aGlzLmZpbGVDb21tZW50PWUucmVhZERhdGEodGhpcy5maWxlQ29tbWVudExlbmd0aCl9LHByb2Nlc3NBdHRyaWJ1dGVzOmZ1bmN0aW9uKCl7dGhpcy51bml4UGVybWlzc2lvbnM9bnVsbCx0aGlzLmRvc1Blcm1pc3Npb25zPW51bGw7dmFyIGU9dGhpcy52ZXJzaW9uTWFkZUJ5Pj44O3RoaXMuZGlyPSEhKDE2JnRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcyksMD09ZSYmKHRoaXMuZG9zUGVybWlzc2lvbnM9NjMmdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzKSwzPT1lJiYodGhpcy51bml4UGVybWlzc2lvbnM9dGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzPj4xNiY2NTUzNSksdGhpcy5kaXJ8fFwiL1wiIT09dGhpcy5maWxlTmFtZVN0ci5zbGljZSgtMSl8fCh0aGlzLmRpcj0hMCl9LHBhcnNlWklQNjRFeHRyYUZpZWxkOmZ1bmN0aW9uKCl7aWYodGhpcy5leHRyYUZpZWxkc1sxXSl7dmFyIGU9bih0aGlzLmV4dHJhRmllbGRzWzFdLnZhbHVlKTt0aGlzLnVuY29tcHJlc3NlZFNpemU9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLnVuY29tcHJlc3NlZFNpemU9ZS5yZWFkSW50KDgpKSx0aGlzLmNvbXByZXNzZWRTaXplPT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy5jb21wcmVzc2VkU2l6ZT1lLnJlYWRJbnQoOCkpLHRoaXMubG9jYWxIZWFkZXJPZmZzZXQ9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PWUucmVhZEludCg4KSksdGhpcy5kaXNrTnVtYmVyU3RhcnQ9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLmRpc2tOdW1iZXJTdGFydD1lLnJlYWRJbnQoNCkpfX0scmVhZEV4dHJhRmllbGRzOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpPWUuaW5kZXgrdGhpcy5leHRyYUZpZWxkc0xlbmd0aDtmb3IodGhpcy5leHRyYUZpZWxkc3x8KHRoaXMuZXh0cmFGaWVsZHM9e30pO2UuaW5kZXgrNDxpOyl0PWUucmVhZEludCgyKSxyPWUucmVhZEludCgyKSxuPWUucmVhZERhdGEociksdGhpcy5leHRyYUZpZWxkc1t0XT17aWQ6dCxsZW5ndGg6cix2YWx1ZTpufTtlLnNldEluZGV4KGkpfSxoYW5kbGVVVEY4OmZ1bmN0aW9uKCl7dmFyIGU9dS51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIjtpZih0aGlzLnVzZVVURjgoKSl0aGlzLmZpbGVOYW1lU3RyPW8udXRmOGRlY29kZSh0aGlzLmZpbGVOYW1lKSx0aGlzLmZpbGVDb21tZW50U3RyPW8udXRmOGRlY29kZSh0aGlzLmZpbGVDb21tZW50KTtlbHNle3ZhciB0PXRoaXMuZmluZEV4dHJhRmllbGRVbmljb2RlUGF0aCgpO2lmKG51bGwhPT10KXRoaXMuZmlsZU5hbWVTdHI9dDtlbHNle3ZhciByPXMudHJhbnNmb3JtVG8oZSx0aGlzLmZpbGVOYW1lKTt0aGlzLmZpbGVOYW1lU3RyPXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUocil9dmFyIG49dGhpcy5maW5kRXh0cmFGaWVsZFVuaWNvZGVDb21tZW50KCk7aWYobnVsbCE9PW4pdGhpcy5maWxlQ29tbWVudFN0cj1uO2Vsc2V7dmFyIGk9cy50cmFuc2Zvcm1UbyhlLHRoaXMuZmlsZUNvbW1lbnQpO3RoaXMuZmlsZUNvbW1lbnRTdHI9dGhpcy5sb2FkT3B0aW9ucy5kZWNvZGVGaWxlTmFtZShpKX19fSxmaW5kRXh0cmFGaWVsZFVuaWNvZGVQYXRoOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5leHRyYUZpZWxkc1syODc4OV07aWYoZSl7dmFyIHQ9bihlLnZhbHVlKTtyZXR1cm4gMSE9PXQucmVhZEludCgxKT9udWxsOmEodGhpcy5maWxlTmFtZSkhPT10LnJlYWRJbnQoNCk/bnVsbDpvLnV0ZjhkZWNvZGUodC5yZWFkRGF0YShlLmxlbmd0aC01KSl9cmV0dXJuIG51bGx9LGZpbmRFeHRyYUZpZWxkVW5pY29kZUNvbW1lbnQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmV4dHJhRmllbGRzWzI1NDYxXTtpZihlKXt2YXIgdD1uKGUudmFsdWUpO3JldHVybiAxIT09dC5yZWFkSW50KDEpP251bGw6YSh0aGlzLmZpbGVDb21tZW50KSE9PXQucmVhZEludCg0KT9udWxsOm8udXRmOGRlY29kZSh0LnJlYWREYXRhKGUubGVuZ3RoLTUpKX1yZXR1cm4gbnVsbH19LHQuZXhwb3J0cz1sfSx7XCIuL2NvbXByZXNzZWRPYmplY3RcIjoyLFwiLi9jb21wcmVzc2lvbnNcIjozLFwiLi9jcmMzMlwiOjQsXCIuL3JlYWRlci9yZWFkZXJGb3JcIjoyMixcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGY4XCI6MzEsXCIuL3V0aWxzXCI6MzJ9XSwzNTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LHIpe3RoaXMubmFtZT1lLHRoaXMuZGlyPXIuZGlyLHRoaXMuZGF0ZT1yLmRhdGUsdGhpcy5jb21tZW50PXIuY29tbWVudCx0aGlzLnVuaXhQZXJtaXNzaW9ucz1yLnVuaXhQZXJtaXNzaW9ucyx0aGlzLmRvc1Blcm1pc3Npb25zPXIuZG9zUGVybWlzc2lvbnMsdGhpcy5fZGF0YT10LHRoaXMuX2RhdGFCaW5hcnk9ci5iaW5hcnksdGhpcy5vcHRpb25zPXtjb21wcmVzc2lvbjpyLmNvbXByZXNzaW9uLGNvbXByZXNzaW9uT3B0aW9uczpyLmNvbXByZXNzaW9uT3B0aW9uc319dmFyIHM9ZShcIi4vc3RyZWFtL1N0cmVhbUhlbHBlclwiKSxpPWUoXCIuL3N0cmVhbS9EYXRhV29ya2VyXCIpLGE9ZShcIi4vdXRmOFwiKSxvPWUoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksaD1lKFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKTtuLnByb3RvdHlwZT17aW50ZXJuYWxTdHJlYW06ZnVuY3Rpb24oZSl7dmFyIHQ9bnVsbCxyPVwic3RyaW5nXCI7dHJ5e2lmKCFlKXRocm93IG5ldyBFcnJvcihcIk5vIG91dHB1dCB0eXBlIHNwZWNpZmllZC5cIik7dmFyIG49XCJzdHJpbmdcIj09PShyPWUudG9Mb3dlckNhc2UoKSl8fFwidGV4dFwiPT09cjtcImJpbmFyeXN0cmluZ1wiIT09ciYmXCJ0ZXh0XCIhPT1yfHwocj1cInN0cmluZ1wiKSx0PXRoaXMuX2RlY29tcHJlc3NXb3JrZXIoKTt2YXIgaT0hdGhpcy5fZGF0YUJpbmFyeTtpJiYhbiYmKHQ9dC5waXBlKG5ldyBhLlV0ZjhFbmNvZGVXb3JrZXIpKSwhaSYmbiYmKHQ9dC5waXBlKG5ldyBhLlV0ZjhEZWNvZGVXb3JrZXIpKX1jYXRjaChlKXsodD1uZXcgaChcImVycm9yXCIpKS5lcnJvcihlKX1yZXR1cm4gbmV3IHModCxyLFwiXCIpfSxhc3luYzpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmludGVybmFsU3RyZWFtKGUpLmFjY3VtdWxhdGUodCl9LG5vZGVTdHJlYW06ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5pbnRlcm5hbFN0cmVhbShlfHxcIm5vZGVidWZmZXJcIikudG9Ob2RlanNTdHJlYW0odCl9LF9jb21wcmVzc1dvcmtlcjpmdW5jdGlvbihlLHQpe2lmKHRoaXMuX2RhdGEgaW5zdGFuY2VvZiBvJiZ0aGlzLl9kYXRhLmNvbXByZXNzaW9uLm1hZ2ljPT09ZS5tYWdpYylyZXR1cm4gdGhpcy5fZGF0YS5nZXRDb21wcmVzc2VkV29ya2VyKCk7dmFyIHI9dGhpcy5fZGVjb21wcmVzc1dvcmtlcigpO3JldHVybiB0aGlzLl9kYXRhQmluYXJ5fHwocj1yLnBpcGUobmV3IGEuVXRmOEVuY29kZVdvcmtlcikpLG8uY3JlYXRlV29ya2VyRnJvbShyLGUsdCl9LF9kZWNvbXByZXNzV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2RhdGEgaW5zdGFuY2VvZiBvP3RoaXMuX2RhdGEuZ2V0Q29udGVudFdvcmtlcigpOnRoaXMuX2RhdGEgaW5zdGFuY2VvZiBoP3RoaXMuX2RhdGE6bmV3IGkodGhpcy5fZGF0YSl9fTtmb3IodmFyIHU9W1wiYXNUZXh0XCIsXCJhc0JpbmFyeVwiLFwiYXNOb2RlQnVmZmVyXCIsXCJhc1VpbnQ4QXJyYXlcIixcImFzQXJyYXlCdWZmZXJcIl0sbD1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpfSxmPTA7Zjx1Lmxlbmd0aDtmKyspbi5wcm90b3R5cGVbdVtmXV09bDt0LmV4cG9ydHM9bn0se1wiLi9jb21wcmVzc2VkT2JqZWN0XCI6MixcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIjoyNyxcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4vc3RyZWFtL1N0cmVhbUhlbHBlclwiOjI5LFwiLi91dGY4XCI6MzF9XSwzNjpbZnVuY3Rpb24oZSxsLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjt2YXIgcixuLGU9dC5NdXRhdGlvbk9ic2VydmVyfHx0LldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7aWYoZSl7dmFyIGk9MCxzPW5ldyBlKHUpLGE9dC5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtzLm9ic2VydmUoYSx7Y2hhcmFjdGVyRGF0YTohMH0pLHI9ZnVuY3Rpb24oKXthLmRhdGE9aT0rK2klMn19ZWxzZSBpZih0LnNldEltbWVkaWF0ZXx8dm9pZCAwPT09dC5NZXNzYWdlQ2hhbm5lbClyPVwiZG9jdW1lbnRcImluIHQmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiB0LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik/ZnVuY3Rpb24oKXt2YXIgZT10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ZS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXt1KCksZS5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksZT1udWxsfSx0LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKX06ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KHUsMCl9O2Vsc2V7dmFyIG89bmV3IHQuTWVzc2FnZUNoYW5uZWw7by5wb3J0MS5vbm1lc3NhZ2U9dSxyPWZ1bmN0aW9uKCl7by5wb3J0Mi5wb3N0TWVzc2FnZSgwKX19dmFyIGg9W107ZnVuY3Rpb24gdSgpe3ZhciBlLHQ7bj0hMDtmb3IodmFyIHI9aC5sZW5ndGg7cjspe2Zvcih0PWgsaD1bXSxlPS0xOysrZTxyOyl0W2VdKCk7cj1oLmxlbmd0aH1uPSExfWwuZXhwb3J0cz1mdW5jdGlvbihlKXsxIT09aC5wdXNoKGUpfHxufHxyKCl9fSkuY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30pfSx7fV0sMzc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1lKFwiaW1tZWRpYXRlXCIpO2Z1bmN0aW9uIHUoKXt9dmFyIGw9e30scz1bXCJSRUpFQ1RFRFwiXSxhPVtcIkZVTEZJTExFRFwiXSxuPVtcIlBFTkRJTkdcIl07ZnVuY3Rpb24gbyhlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJyZXNvbHZlciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7dGhpcy5zdGF0ZT1uLHRoaXMucXVldWU9W10sdGhpcy5vdXRjb21lPXZvaWQgMCxlIT09dSYmZCh0aGlzLGUpfWZ1bmN0aW9uIGgoZSx0LHIpe3RoaXMucHJvbWlzZT1lLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJih0aGlzLm9uRnVsZmlsbGVkPXQsdGhpcy5jYWxsRnVsZmlsbGVkPXRoaXMub3RoZXJDYWxsRnVsZmlsbGVkKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYodGhpcy5vblJlamVjdGVkPXIsdGhpcy5jYWxsUmVqZWN0ZWQ9dGhpcy5vdGhlckNhbGxSZWplY3RlZCl9ZnVuY3Rpb24gZih0LHIsbil7aShmdW5jdGlvbigpe3ZhciBlO3RyeXtlPXIobil9Y2F0Y2goZSl7cmV0dXJuIGwucmVqZWN0KHQsZSl9ZT09PXQ/bC5yZWplY3QodCxuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlc29sdmUgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKSk6bC5yZXNvbHZlKHQsZSl9KX1mdW5jdGlvbiBjKGUpe3ZhciB0PWUmJmUudGhlbjtpZihlJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiBmdW5jdGlvbigpe3QuYXBwbHkoZSxhcmd1bWVudHMpfX1mdW5jdGlvbiBkKHQsZSl7dmFyIHI9ITE7ZnVuY3Rpb24gbihlKXtyfHwocj0hMCxsLnJlamVjdCh0LGUpKX1mdW5jdGlvbiBpKGUpe3J8fChyPSEwLGwucmVzb2x2ZSh0LGUpKX12YXIgcz1wKGZ1bmN0aW9uKCl7ZShpLG4pfSk7XCJlcnJvclwiPT09cy5zdGF0dXMmJm4ocy52YWx1ZSl9ZnVuY3Rpb24gcChlLHQpe3ZhciByPXt9O3RyeXtyLnZhbHVlPWUodCksci5zdGF0dXM9XCJzdWNjZXNzXCJ9Y2F0Y2goZSl7ci5zdGF0dXM9XCJlcnJvclwiLHIudmFsdWU9ZX1yZXR1cm4gcn0odC5leHBvcnRzPW8pLnByb3RvdHlwZS5maW5hbGx5PWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpcmV0dXJuIHRoaXM7dmFyIHI9dGhpcy5jb25zdHJ1Y3RvcjtyZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiByLnJlc29sdmUodCgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGV9KX0sZnVuY3Rpb24oZSl7cmV0dXJuIHIucmVzb2x2ZSh0KCkpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyBlfSl9KX0sby5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGUpfSxvLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmdGhpcy5zdGF0ZT09PWF8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJnRoaXMuc3RhdGU9PT1zKXJldHVybiB0aGlzO3ZhciByPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHUpO3RoaXMuc3RhdGUhPT1uP2Yocix0aGlzLnN0YXRlPT09YT9lOnQsdGhpcy5vdXRjb21lKTp0aGlzLnF1ZXVlLnB1c2gobmV3IGgocixlLHQpKTtyZXR1cm4gcn0saC5wcm90b3R5cGUuY2FsbEZ1bGZpbGxlZD1mdW5jdGlvbihlKXtsLnJlc29sdmUodGhpcy5wcm9taXNlLGUpfSxoLnByb3RvdHlwZS5vdGhlckNhbGxGdWxmaWxsZWQ9ZnVuY3Rpb24oZSl7Zih0aGlzLnByb21pc2UsdGhpcy5vbkZ1bGZpbGxlZCxlKX0saC5wcm90b3R5cGUuY2FsbFJlamVjdGVkPWZ1bmN0aW9uKGUpe2wucmVqZWN0KHRoaXMucHJvbWlzZSxlKX0saC5wcm90b3R5cGUub3RoZXJDYWxsUmVqZWN0ZWQ9ZnVuY3Rpb24oZSl7Zih0aGlzLnByb21pc2UsdGhpcy5vblJlamVjdGVkLGUpfSxsLnJlc29sdmU9ZnVuY3Rpb24oZSx0KXt2YXIgcj1wKGMsdCk7aWYoXCJlcnJvclwiPT09ci5zdGF0dXMpcmV0dXJuIGwucmVqZWN0KGUsci52YWx1ZSk7dmFyIG49ci52YWx1ZTtpZihuKWQoZSxuKTtlbHNle2Uuc3RhdGU9YSxlLm91dGNvbWU9dDtmb3IodmFyIGk9LTEscz1lLnF1ZXVlLmxlbmd0aDsrK2k8czspZS5xdWV1ZVtpXS5jYWxsRnVsZmlsbGVkKHQpfXJldHVybiBlfSxsLnJlamVjdD1mdW5jdGlvbihlLHQpe2Uuc3RhdGU9cyxlLm91dGNvbWU9dDtmb3IodmFyIHI9LTEsbj1lLnF1ZXVlLmxlbmd0aDsrK3I8bjspZS5xdWV1ZVtyXS5jYWxsUmVqZWN0ZWQodCk7cmV0dXJuIGV9LG8ucmVzb2x2ZT1mdW5jdGlvbihlKXtpZihlIGluc3RhbmNlb2YgdGhpcylyZXR1cm4gZTtyZXR1cm4gbC5yZXNvbHZlKG5ldyB0aGlzKHUpLGUpfSxvLnJlamVjdD1mdW5jdGlvbihlKXt2YXIgdD1uZXcgdGhpcyh1KTtyZXR1cm4gbC5yZWplY3QodCxlKX0sby5hbGw9ZnVuY3Rpb24oZSl7dmFyIHI9dGhpcztpZihcIltvYmplY3QgQXJyYXldXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoXCJtdXN0IGJlIGFuIGFycmF5XCIpKTt2YXIgbj1lLmxlbmd0aCxpPSExO2lmKCFuKXJldHVybiB0aGlzLnJlc29sdmUoW10pO3ZhciBzPW5ldyBBcnJheShuKSxhPTAsdD0tMSxvPW5ldyB0aGlzKHUpO2Zvcig7Kyt0PG47KWgoZVt0XSx0KTtyZXR1cm4gbztmdW5jdGlvbiBoKGUsdCl7ci5yZXNvbHZlKGUpLnRoZW4oZnVuY3Rpb24oZSl7c1t0XT1lLCsrYSE9PW58fGl8fChpPSEwLGwucmVzb2x2ZShvLHMpKX0sZnVuY3Rpb24oZSl7aXx8KGk9ITAsbC5yZWplY3QobyxlKSl9KX19LG8ucmFjZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKFwiW29iamVjdCBBcnJheV1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSlyZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcihcIm11c3QgYmUgYW4gYXJyYXlcIikpO3ZhciByPWUubGVuZ3RoLG49ITE7aWYoIXIpcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7dmFyIGk9LTEscz1uZXcgdGhpcyh1KTtmb3IoOysraTxyOylhPWVbaV0sdC5yZXNvbHZlKGEpLnRoZW4oZnVuY3Rpb24oZSl7bnx8KG49ITAsbC5yZXNvbHZlKHMsZSkpfSxmdW5jdGlvbihlKXtufHwobj0hMCxsLnJlamVjdChzLGUpKX0pO3ZhciBhO3JldHVybiBzfX0se2ltbWVkaWF0ZTozNn1dLDM4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49e307KDAsZShcIi4vbGliL3V0aWxzL2NvbW1vblwiKS5hc3NpZ24pKG4sZShcIi4vbGliL2RlZmxhdGVcIiksZShcIi4vbGliL2luZmxhdGVcIiksZShcIi4vbGliL3psaWIvY29uc3RhbnRzXCIpKSx0LmV4cG9ydHM9bn0se1wiLi9saWIvZGVmbGF0ZVwiOjM5LFwiLi9saWIvaW5mbGF0ZVwiOjQwLFwiLi9saWIvdXRpbHMvY29tbW9uXCI6NDEsXCIuL2xpYi96bGliL2NvbnN0YW50c1wiOjQ0fV0sMzk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgYT1lKFwiLi96bGliL2RlZmxhdGVcIiksbz1lKFwiLi91dGlscy9jb21tb25cIiksaD1lKFwiLi91dGlscy9zdHJpbmdzXCIpLGk9ZShcIi4vemxpYi9tZXNzYWdlc1wiKSxzPWUoXCIuL3psaWIvenN0cmVhbVwiKSx1PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsbD0wLGY9LTEsYz0wLGQ9ODtmdW5jdGlvbiBwKGUpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHApKXJldHVybiBuZXcgcChlKTt0aGlzLm9wdGlvbnM9by5hc3NpZ24oe2xldmVsOmYsbWV0aG9kOmQsY2h1bmtTaXplOjE2Mzg0LHdpbmRvd0JpdHM6MTUsbWVtTGV2ZWw6OCxzdHJhdGVneTpjLHRvOlwiXCJ9LGV8fHt9KTt2YXIgdD10aGlzLm9wdGlvbnM7dC5yYXcmJjA8dC53aW5kb3dCaXRzP3Qud2luZG93Qml0cz0tdC53aW5kb3dCaXRzOnQuZ3ppcCYmMDx0LndpbmRvd0JpdHMmJnQud2luZG93Qml0czwxNiYmKHQud2luZG93Qml0cys9MTYpLHRoaXMuZXJyPTAsdGhpcy5tc2c9XCJcIix0aGlzLmVuZGVkPSExLHRoaXMuY2h1bmtzPVtdLHRoaXMuc3RybT1uZXcgcyx0aGlzLnN0cm0uYXZhaWxfb3V0PTA7dmFyIHI9YS5kZWZsYXRlSW5pdDIodGhpcy5zdHJtLHQubGV2ZWwsdC5tZXRob2QsdC53aW5kb3dCaXRzLHQubWVtTGV2ZWwsdC5zdHJhdGVneSk7aWYociE9PWwpdGhyb3cgbmV3IEVycm9yKGlbcl0pO2lmKHQuaGVhZGVyJiZhLmRlZmxhdGVTZXRIZWFkZXIodGhpcy5zdHJtLHQuaGVhZGVyKSx0LmRpY3Rpb25hcnkpe3ZhciBuO2lmKG49XCJzdHJpbmdcIj09dHlwZW9mIHQuZGljdGlvbmFyeT9oLnN0cmluZzJidWYodC5kaWN0aW9uYXJ5KTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT11LmNhbGwodC5kaWN0aW9uYXJ5KT9uZXcgVWludDhBcnJheSh0LmRpY3Rpb25hcnkpOnQuZGljdGlvbmFyeSwocj1hLmRlZmxhdGVTZXREaWN0aW9uYXJ5KHRoaXMuc3RybSxuKSkhPT1sKXRocm93IG5ldyBFcnJvcihpW3JdKTt0aGlzLl9kaWN0X3NldD0hMH19ZnVuY3Rpb24gbihlLHQpe3ZhciByPW5ldyBwKHQpO2lmKHIucHVzaChlLCEwKSxyLmVycil0aHJvdyByLm1zZ3x8aVtyLmVycl07cmV0dXJuIHIucmVzdWx0fXAucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGk9dGhpcy5zdHJtLHM9dGhpcy5vcHRpb25zLmNodW5rU2l6ZTtpZih0aGlzLmVuZGVkKXJldHVybiExO249dD09PX5+dD90OiEwPT09dD80OjAsXCJzdHJpbmdcIj09dHlwZW9mIGU/aS5pbnB1dD1oLnN0cmluZzJidWYoZSk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09dS5jYWxsKGUpP2kuaW5wdXQ9bmV3IFVpbnQ4QXJyYXkoZSk6aS5pbnB1dD1lLGkubmV4dF9pbj0wLGkuYXZhaWxfaW49aS5pbnB1dC5sZW5ndGg7ZG97aWYoMD09PWkuYXZhaWxfb3V0JiYoaS5vdXRwdXQ9bmV3IG8uQnVmOChzKSxpLm5leHRfb3V0PTAsaS5hdmFpbF9vdXQ9cyksMSE9PShyPWEuZGVmbGF0ZShpLG4pKSYmciE9PWwpcmV0dXJuIHRoaXMub25FbmQociksISh0aGlzLmVuZGVkPSEwKTswIT09aS5hdmFpbF9vdXQmJigwIT09aS5hdmFpbF9pbnx8NCE9PW4mJjIhPT1uKXx8KFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/dGhpcy5vbkRhdGEoaC5idWYyYmluc3RyaW5nKG8uc2hyaW5rQnVmKGkub3V0cHV0LGkubmV4dF9vdXQpKSk6dGhpcy5vbkRhdGEoby5zaHJpbmtCdWYoaS5vdXRwdXQsaS5uZXh0X291dCkpKX13aGlsZSgoMDxpLmF2YWlsX2lufHwwPT09aS5hdmFpbF9vdXQpJiYxIT09cik7cmV0dXJuIDQ9PT1uPyhyPWEuZGVmbGF0ZUVuZCh0aGlzLnN0cm0pLHRoaXMub25FbmQociksdGhpcy5lbmRlZD0hMCxyPT09bCk6MiE9PW58fCh0aGlzLm9uRW5kKGwpLCEoaS5hdmFpbF9vdXQ9MCkpfSxwLnByb3RvdHlwZS5vbkRhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaHVua3MucHVzaChlKX0scC5wcm90b3R5cGUub25FbmQ9ZnVuY3Rpb24oZSl7ZT09PWwmJihcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvP3RoaXMucmVzdWx0PXRoaXMuY2h1bmtzLmpvaW4oXCJcIik6dGhpcy5yZXN1bHQ9by5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKSksdGhpcy5jaHVua3M9W10sdGhpcy5lcnI9ZSx0aGlzLm1zZz10aGlzLnN0cm0ubXNnfSxyLkRlZmxhdGU9cCxyLmRlZmxhdGU9bixyLmRlZmxhdGVSYXc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4odD10fHx7fSkucmF3PSEwLG4oZSx0KX0sci5nemlwPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQ9dHx8e30pLmd6aXA9ITAsbihlLHQpfX0se1wiLi91dGlscy9jb21tb25cIjo0MSxcIi4vdXRpbHMvc3RyaW5nc1wiOjQyLFwiLi96bGliL2RlZmxhdGVcIjo0NixcIi4vemxpYi9tZXNzYWdlc1wiOjUxLFwiLi96bGliL3pzdHJlYW1cIjo1M31dLDQwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9ZShcIi4vemxpYi9pbmZsYXRlXCIpLGQ9ZShcIi4vdXRpbHMvY29tbW9uXCIpLHA9ZShcIi4vdXRpbHMvc3RyaW5nc1wiKSxtPWUoXCIuL3psaWIvY29uc3RhbnRzXCIpLG49ZShcIi4vemxpYi9tZXNzYWdlc1wiKSxpPWUoXCIuL3psaWIvenN0cmVhbVwiKSxzPWUoXCIuL3psaWIvZ3poZWFkZXJcIiksXz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO2Z1bmN0aW9uIGEoZSl7aWYoISh0aGlzIGluc3RhbmNlb2YgYSkpcmV0dXJuIG5ldyBhKGUpO3RoaXMub3B0aW9ucz1kLmFzc2lnbih7Y2h1bmtTaXplOjE2Mzg0LHdpbmRvd0JpdHM6MCx0bzpcIlwifSxlfHx7fSk7dmFyIHQ9dGhpcy5vcHRpb25zO3QucmF3JiYwPD10LndpbmRvd0JpdHMmJnQud2luZG93Qml0czwxNiYmKHQud2luZG93Qml0cz0tdC53aW5kb3dCaXRzLDA9PT10LndpbmRvd0JpdHMmJih0LndpbmRvd0JpdHM9LTE1KSksISgwPD10LndpbmRvd0JpdHMmJnQud2luZG93Qml0czwxNil8fGUmJmUud2luZG93Qml0c3x8KHQud2luZG93Qml0cys9MzIpLDE1PHQud2luZG93Qml0cyYmdC53aW5kb3dCaXRzPDQ4JiYwPT0oMTUmdC53aW5kb3dCaXRzKSYmKHQud2luZG93Qml0c3w9MTUpLHRoaXMuZXJyPTAsdGhpcy5tc2c9XCJcIix0aGlzLmVuZGVkPSExLHRoaXMuY2h1bmtzPVtdLHRoaXMuc3RybT1uZXcgaSx0aGlzLnN0cm0uYXZhaWxfb3V0PTA7dmFyIHI9Yy5pbmZsYXRlSW5pdDIodGhpcy5zdHJtLHQud2luZG93Qml0cyk7aWYociE9PW0uWl9PSyl0aHJvdyBuZXcgRXJyb3IobltyXSk7dGhpcy5oZWFkZXI9bmV3IHMsYy5pbmZsYXRlR2V0SGVhZGVyKHRoaXMuc3RybSx0aGlzLmhlYWRlcil9ZnVuY3Rpb24gbyhlLHQpe3ZhciByPW5ldyBhKHQpO2lmKHIucHVzaChlLCEwKSxyLmVycil0aHJvdyByLm1zZ3x8bltyLmVycl07cmV0dXJuIHIucmVzdWx0fWEucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saD10aGlzLnN0cm0sdT10aGlzLm9wdGlvbnMuY2h1bmtTaXplLGw9dGhpcy5vcHRpb25zLmRpY3Rpb25hcnksZj0hMTtpZih0aGlzLmVuZGVkKXJldHVybiExO249dD09PX5+dD90OiEwPT09dD9tLlpfRklOSVNIOm0uWl9OT19GTFVTSCxcInN0cmluZ1wiPT10eXBlb2YgZT9oLmlucHV0PXAuYmluc3RyaW5nMmJ1ZihlKTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT1fLmNhbGwoZSk/aC5pbnB1dD1uZXcgVWludDhBcnJheShlKTpoLmlucHV0PWUsaC5uZXh0X2luPTAsaC5hdmFpbF9pbj1oLmlucHV0Lmxlbmd0aDtkb3tpZigwPT09aC5hdmFpbF9vdXQmJihoLm91dHB1dD1uZXcgZC5CdWY4KHUpLGgubmV4dF9vdXQ9MCxoLmF2YWlsX291dD11KSwocj1jLmluZmxhdGUoaCxtLlpfTk9fRkxVU0gpKT09PW0uWl9ORUVEX0RJQ1QmJmwmJihvPVwic3RyaW5nXCI9PXR5cGVvZiBsP3Auc3RyaW5nMmJ1ZihsKTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT1fLmNhbGwobCk/bmV3IFVpbnQ4QXJyYXkobCk6bCxyPWMuaW5mbGF0ZVNldERpY3Rpb25hcnkodGhpcy5zdHJtLG8pKSxyPT09bS5aX0JVRl9FUlJPUiYmITA9PT1mJiYocj1tLlpfT0ssZj0hMSksciE9PW0uWl9TVFJFQU1fRU5EJiZyIT09bS5aX09LKXJldHVybiB0aGlzLm9uRW5kKHIpLCEodGhpcy5lbmRlZD0hMCk7aC5uZXh0X291dCYmKDAhPT1oLmF2YWlsX291dCYmciE9PW0uWl9TVFJFQU1fRU5EJiYoMCE9PWguYXZhaWxfaW58fG4hPT1tLlpfRklOSVNIJiZuIT09bS5aX1NZTkNfRkxVU0gpfHwoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz8oaT1wLnV0Zjhib3JkZXIoaC5vdXRwdXQsaC5uZXh0X291dCkscz1oLm5leHRfb3V0LWksYT1wLmJ1ZjJzdHJpbmcoaC5vdXRwdXQsaSksaC5uZXh0X291dD1zLGguYXZhaWxfb3V0PXUtcyxzJiZkLmFycmF5U2V0KGgub3V0cHV0LGgub3V0cHV0LGkscywwKSx0aGlzLm9uRGF0YShhKSk6dGhpcy5vbkRhdGEoZC5zaHJpbmtCdWYoaC5vdXRwdXQsaC5uZXh0X291dCkpKSksMD09PWguYXZhaWxfaW4mJjA9PT1oLmF2YWlsX291dCYmKGY9ITApfXdoaWxlKCgwPGguYXZhaWxfaW58fDA9PT1oLmF2YWlsX291dCkmJnIhPT1tLlpfU1RSRUFNX0VORCk7cmV0dXJuIHI9PT1tLlpfU1RSRUFNX0VORCYmKG49bS5aX0ZJTklTSCksbj09PW0uWl9GSU5JU0g/KHI9Yy5pbmZsYXRlRW5kKHRoaXMuc3RybSksdGhpcy5vbkVuZChyKSx0aGlzLmVuZGVkPSEwLHI9PT1tLlpfT0spOm4hPT1tLlpfU1lOQ19GTFVTSHx8KHRoaXMub25FbmQobS5aX09LKSwhKGguYXZhaWxfb3V0PTApKX0sYS5wcm90b3R5cGUub25EYXRhPWZ1bmN0aW9uKGUpe3RoaXMuY2h1bmtzLnB1c2goZSl9LGEucHJvdG90eXBlLm9uRW5kPWZ1bmN0aW9uKGUpe2U9PT1tLlpfT0smJihcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvP3RoaXMucmVzdWx0PXRoaXMuY2h1bmtzLmpvaW4oXCJcIik6dGhpcy5yZXN1bHQ9ZC5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKSksdGhpcy5jaHVua3M9W10sdGhpcy5lcnI9ZSx0aGlzLm1zZz10aGlzLnN0cm0ubXNnfSxyLkluZmxhdGU9YSxyLmluZmxhdGU9byxyLmluZmxhdGVSYXc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4odD10fHx7fSkucmF3PSEwLG8oZSx0KX0sci51bmd6aXA9b30se1wiLi91dGlscy9jb21tb25cIjo0MSxcIi4vdXRpbHMvc3RyaW5nc1wiOjQyLFwiLi96bGliL2NvbnN0YW50c1wiOjQ0LFwiLi96bGliL2d6aGVhZGVyXCI6NDcsXCIuL3psaWIvaW5mbGF0ZVwiOjQ5LFwiLi96bGliL21lc3NhZ2VzXCI6NTEsXCIuL3psaWIvenN0cmVhbVwiOjUzfV0sNDE6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQxNkFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgSW50MzJBcnJheTtyLmFzc2lnbj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3QubGVuZ3RoOyl7dmFyIHI9dC5zaGlmdCgpO2lmKHIpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiByKXRocm93IG5ldyBUeXBlRXJyb3IocitcIm11c3QgYmUgbm9uLW9iamVjdFwiKTtmb3IodmFyIG4gaW4gcilyLmhhc093blByb3BlcnR5KG4pJiYoZVtuXT1yW25dKX19cmV0dXJuIGV9LHIuc2hyaW5rQnVmPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUubGVuZ3RoPT09dD9lOmUuc3ViYXJyYXk/ZS5zdWJhcnJheSgwLHQpOihlLmxlbmd0aD10LGUpfTt2YXIgaT17YXJyYXlTZXQ6ZnVuY3Rpb24oZSx0LHIsbixpKXtpZih0LnN1YmFycmF5JiZlLnN1YmFycmF5KWUuc2V0KHQuc3ViYXJyYXkocixyK24pLGkpO2Vsc2UgZm9yKHZhciBzPTA7czxuO3MrKyllW2krc109dFtyK3NdfSxmbGF0dGVuQ2h1bmtzOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpLHMsYTtmb3IodD1uPTAscj1lLmxlbmd0aDt0PHI7dCsrKW4rPWVbdF0ubGVuZ3RoO2ZvcihhPW5ldyBVaW50OEFycmF5KG4pLHQ9aT0wLHI9ZS5sZW5ndGg7dDxyO3QrKylzPWVbdF0sYS5zZXQocyxpKSxpKz1zLmxlbmd0aDtyZXR1cm4gYX19LHM9e2FycmF5U2V0OmZ1bmN0aW9uKGUsdCxyLG4saSl7Zm9yKHZhciBzPTA7czxuO3MrKyllW2krc109dFtyK3NdfSxmbGF0dGVuQ2h1bmtzOmZ1bmN0aW9uKGUpe3JldHVybltdLmNvbmNhdC5hcHBseShbXSxlKX19O3Iuc2V0VHlwZWQ9ZnVuY3Rpb24oZSl7ZT8oci5CdWY4PVVpbnQ4QXJyYXksci5CdWYxNj1VaW50MTZBcnJheSxyLkJ1ZjMyPUludDMyQXJyYXksci5hc3NpZ24ocixpKSk6KHIuQnVmOD1BcnJheSxyLkJ1ZjE2PUFycmF5LHIuQnVmMzI9QXJyYXksci5hc3NpZ24ocixzKSl9LHIuc2V0VHlwZWQobil9LHt9XSw0MjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBoPWUoXCIuL2NvbW1vblwiKSxpPSEwLHM9ITA7dHJ5e1N0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxbMF0pfWNhdGNoKGUpe2k9ITF9dHJ5e1N0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxuZXcgVWludDhBcnJheSgxKSl9Y2F0Y2goZSl7cz0hMX1mb3IodmFyIHU9bmV3IGguQnVmOCgyNTYpLG49MDtuPDI1NjtuKyspdVtuXT0yNTI8PW4/NjoyNDg8PW4/NToyNDA8PW4/NDoyMjQ8PW4/MzoxOTI8PW4/MjoxO2Z1bmN0aW9uIGwoZSx0KXtpZih0PDY1NTM3JiYoZS5zdWJhcnJheSYmc3x8IWUuc3ViYXJyYXkmJmkpKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsaC5zaHJpbmtCdWYoZSx0KSk7Zm9yKHZhciByPVwiXCIsbj0wO248dDtuKyspcis9U3RyaW5nLmZyb21DaGFyQ29kZShlW25dKTtyZXR1cm4gcn11WzI1NF09dVsyNTRdPTEsci5zdHJpbmcyYnVmPWZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpLHMsYT1lLmxlbmd0aCxvPTA7Zm9yKGk9MDtpPGE7aSsrKTU1Mjk2PT0oNjQ1MTImKHI9ZS5jaGFyQ29kZUF0KGkpKSkmJmkrMTxhJiY1NjMyMD09KDY0NTEyJihuPWUuY2hhckNvZGVBdChpKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKG4tNTYzMjApLGkrKyksbys9cjwxMjg/MTpyPDIwNDg/MjpyPDY1NTM2PzM6NDtmb3IodD1uZXcgaC5CdWY4KG8pLGk9cz0wO3M8bztpKyspNTUyOTY9PSg2NDUxMiYocj1lLmNoYXJDb2RlQXQoaSkpKSYmaSsxPGEmJjU2MzIwPT0oNjQ1MTImKG49ZS5jaGFyQ29kZUF0KGkrMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsobi01NjMyMCksaSsrKSxyPDEyOD90W3MrK109cjoocjwyMDQ4P3RbcysrXT0xOTJ8cj4+PjY6KHI8NjU1MzY/dFtzKytdPTIyNHxyPj4+MTI6KHRbcysrXT0yNDB8cj4+PjE4LHRbcysrXT0xMjh8cj4+PjEyJjYzKSx0W3MrK109MTI4fHI+Pj42JjYzKSx0W3MrK109MTI4fDYzJnIpO3JldHVybiB0fSxyLmJ1ZjJiaW5zdHJpbmc9ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxlLmxlbmd0aCl9LHIuYmluc3RyaW5nMmJ1Zj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9bmV3IGguQnVmOChlLmxlbmd0aCkscj0wLG49dC5sZW5ndGg7cjxuO3IrKyl0W3JdPWUuY2hhckNvZGVBdChyKTtyZXR1cm4gdH0sci5idWYyc3RyaW5nPWZ1bmN0aW9uKGUsdCl7dmFyIHIsbixpLHMsYT10fHxlLmxlbmd0aCxvPW5ldyBBcnJheSgyKmEpO2ZvcihyPW49MDtyPGE7KWlmKChpPWVbcisrXSk8MTI4KW9bbisrXT1pO2Vsc2UgaWYoNDwocz11W2ldKSlvW24rK109NjU1MzMscis9cy0xO2Vsc2V7Zm9yKGkmPTI9PT1zPzMxOjM9PT1zPzE1Ojc7MTxzJiZyPGE7KWk9aTw8Nnw2MyZlW3IrK10scy0tOzE8cz9vW24rK109NjU1MzM6aTw2NTUzNj9vW24rK109aTooaS09NjU1MzYsb1tuKytdPTU1Mjk2fGk+PjEwJjEwMjMsb1tuKytdPTU2MzIwfDEwMjMmaSl9cmV0dXJuIGwobyxuKX0sci51dGY4Ym9yZGVyPWZ1bmN0aW9uKGUsdCl7dmFyIHI7Zm9yKCh0PXR8fGUubGVuZ3RoKT5lLmxlbmd0aCYmKHQ9ZS5sZW5ndGgpLHI9dC0xOzA8PXImJjEyOD09KDE5MiZlW3JdKTspci0tO3JldHVybiByPDA/dDowPT09cj90OnIrdVtlW3JdXT50P3I6dH19LHtcIi4vY29tbW9uXCI6NDF9XSw0MzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscixuKXtmb3IodmFyIGk9NjU1MzUmZXwwLHM9ZT4+PjE2JjY1NTM1fDAsYT0wOzAhPT1yOyl7Zm9yKHItPWE9MmUzPHI/MmUzOnI7cz1zKyhpPWkrdFtuKytdfDApfDAsLS1hOyk7aSU9NjU1MjEscyU9NjU1MjF9cmV0dXJuIGl8czw8MTZ8MH19LHt9XSw0NDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17Wl9OT19GTFVTSDowLFpfUEFSVElBTF9GTFVTSDoxLFpfU1lOQ19GTFVTSDoyLFpfRlVMTF9GTFVTSDozLFpfRklOSVNIOjQsWl9CTE9DSzo1LFpfVFJFRVM6NixaX09LOjAsWl9TVFJFQU1fRU5EOjEsWl9ORUVEX0RJQ1Q6MixaX0VSUk5POi0xLFpfU1RSRUFNX0VSUk9SOi0yLFpfREFUQV9FUlJPUjotMyxaX0JVRl9FUlJPUjotNSxaX05PX0NPTVBSRVNTSU9OOjAsWl9CRVNUX1NQRUVEOjEsWl9CRVNUX0NPTVBSRVNTSU9OOjksWl9ERUZBVUxUX0NPTVBSRVNTSU9OOi0xLFpfRklMVEVSRUQ6MSxaX0hVRkZNQU5fT05MWToyLFpfUkxFOjMsWl9GSVhFRDo0LFpfREVGQVVMVF9TVFJBVEVHWTowLFpfQklOQVJZOjAsWl9URVhUOjEsWl9VTktOT1dOOjIsWl9ERUZMQVRFRDo4fX0se31dLDQ1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1bXSxyPTA7cjwyNTY7cisrKXtlPXI7Zm9yKHZhciBuPTA7bjw4O24rKyllPTEmZT8zOTg4MjkyMzg0XmU+Pj4xOmU+Pj4xO3Rbcl09ZX1yZXR1cm4gdH0oKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIsbil7dmFyIGk9byxzPW4rcjtlXj0tMTtmb3IodmFyIGE9bjthPHM7YSsrKWU9ZT4+PjheaVsyNTUmKGVedFthXSldO3JldHVybi0xXmV9fSx7fV0sNDY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaCxjPWUoXCIuLi91dGlscy9jb21tb25cIiksdT1lKFwiLi90cmVlc1wiKSxkPWUoXCIuL2FkbGVyMzJcIikscD1lKFwiLi9jcmMzMlwiKSxuPWUoXCIuL21lc3NhZ2VzXCIpLGw9MCxmPTQsbT0wLF89LTIsZz0tMSxiPTQsaT0yLHY9OCx5PTkscz0yODYsYT0zMCxvPTE5LHc9MipzKzEsaz0xNSx4PTMsUz0yNTgsej1TK3grMSxDPTQyLEU9MTEzLEE9MSxJPTIsTz0zLEI9NDtmdW5jdGlvbiBSKGUsdCl7cmV0dXJuIGUubXNnPW5bdF0sdH1mdW5jdGlvbiBUKGUpe3JldHVybihlPDwxKS0oNDxlPzk6MCl9ZnVuY3Rpb24gRChlKXtmb3IodmFyIHQ9ZS5sZW5ndGg7MDw9LS10OyllW3RdPTB9ZnVuY3Rpb24gRihlKXt2YXIgdD1lLnN0YXRlLHI9dC5wZW5kaW5nO3I+ZS5hdmFpbF9vdXQmJihyPWUuYXZhaWxfb3V0KSwwIT09ciYmKGMuYXJyYXlTZXQoZS5vdXRwdXQsdC5wZW5kaW5nX2J1Zix0LnBlbmRpbmdfb3V0LHIsZS5uZXh0X291dCksZS5uZXh0X291dCs9cix0LnBlbmRpbmdfb3V0Kz1yLGUudG90YWxfb3V0Kz1yLGUuYXZhaWxfb3V0LT1yLHQucGVuZGluZy09ciwwPT09dC5wZW5kaW5nJiYodC5wZW5kaW5nX291dD0wKSl9ZnVuY3Rpb24gTihlLHQpe3UuX3RyX2ZsdXNoX2Jsb2NrKGUsMDw9ZS5ibG9ja19zdGFydD9lLmJsb2NrX3N0YXJ0Oi0xLGUuc3Ryc3RhcnQtZS5ibG9ja19zdGFydCx0KSxlLmJsb2NrX3N0YXJ0PWUuc3Ryc3RhcnQsRihlLnN0cm0pfWZ1bmN0aW9uIFUoZSx0KXtlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT10fWZ1bmN0aW9uIFAoZSx0KXtlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT10Pj4+OCYyNTUsZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109MjU1JnR9ZnVuY3Rpb24gTChlLHQpe3ZhciByLG4saT1lLm1heF9jaGFpbl9sZW5ndGgscz1lLnN0cnN0YXJ0LGE9ZS5wcmV2X2xlbmd0aCxvPWUubmljZV9tYXRjaCxoPWUuc3Ryc3RhcnQ+ZS53X3NpemUtej9lLnN0cnN0YXJ0LShlLndfc2l6ZS16KTowLHU9ZS53aW5kb3csbD1lLndfbWFzayxmPWUucHJldixjPWUuc3Ryc3RhcnQrUyxkPXVbcythLTFdLHA9dVtzK2FdO2UucHJldl9sZW5ndGg+PWUuZ29vZF9tYXRjaCYmKGk+Pj0yKSxvPmUubG9va2FoZWFkJiYobz1lLmxvb2thaGVhZCk7ZG97aWYodVsocj10KSthXT09PXAmJnVbcithLTFdPT09ZCYmdVtyXT09PXVbc10mJnVbKytyXT09PXVbcysxXSl7cys9MixyKys7ZG97fXdoaWxlKHVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZzPGMpO2lmKG49Uy0oYy1zKSxzPWMtUyxhPG4pe2lmKGUubWF0Y2hfc3RhcnQ9dCxvPD0oYT1uKSlicmVhaztkPXVbcythLTFdLHA9dVtzK2FdfX19d2hpbGUoKHQ9Zlt0JmxdKT5oJiYwIT0tLWkpO3JldHVybiBhPD1lLmxvb2thaGVhZD9hOmUubG9va2FoZWFkfWZ1bmN0aW9uIGooZSl7dmFyIHQscixuLGkscyxhLG8saCx1LGwsZj1lLndfc2l6ZTtkb3tpZihpPWUud2luZG93X3NpemUtZS5sb29rYWhlYWQtZS5zdHJzdGFydCxlLnN0cnN0YXJ0Pj1mKyhmLXopKXtmb3IoYy5hcnJheVNldChlLndpbmRvdyxlLndpbmRvdyxmLGYsMCksZS5tYXRjaF9zdGFydC09ZixlLnN0cnN0YXJ0LT1mLGUuYmxvY2tfc3RhcnQtPWYsdD1yPWUuaGFzaF9zaXplO249ZS5oZWFkWy0tdF0sZS5oZWFkW3RdPWY8PW4/bi1mOjAsLS1yOyk7Zm9yKHQ9cj1mO249ZS5wcmV2Wy0tdF0sZS5wcmV2W3RdPWY8PW4/bi1mOjAsLS1yOyk7aSs9Zn1pZigwPT09ZS5zdHJtLmF2YWlsX2luKWJyZWFrO2lmKGE9ZS5zdHJtLG89ZS53aW5kb3csaD1lLnN0cnN0YXJ0K2UubG9va2FoZWFkLHU9aSxsPXZvaWQgMCxsPWEuYXZhaWxfaW4sdTxsJiYobD11KSxyPTA9PT1sPzA6KGEuYXZhaWxfaW4tPWwsYy5hcnJheVNldChvLGEuaW5wdXQsYS5uZXh0X2luLGwsaCksMT09PWEuc3RhdGUud3JhcD9hLmFkbGVyPWQoYS5hZGxlcixvLGwsaCk6Mj09PWEuc3RhdGUud3JhcCYmKGEuYWRsZXI9cChhLmFkbGVyLG8sbCxoKSksYS5uZXh0X2luKz1sLGEudG90YWxfaW4rPWwsbCksZS5sb29rYWhlYWQrPXIsZS5sb29rYWhlYWQrZS5pbnNlcnQ+PXgpZm9yKHM9ZS5zdHJzdGFydC1lLmluc2VydCxlLmluc19oPWUud2luZG93W3NdLGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tzKzFdKSZlLmhhc2hfbWFzaztlLmluc2VydCYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tzK3gtMV0pJmUuaGFzaF9tYXNrLGUucHJldltzJmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPXMscysrLGUuaW5zZXJ0LS0sIShlLmxvb2thaGVhZCtlLmluc2VydDx4KSk7KTt9d2hpbGUoZS5sb29rYWhlYWQ8eiYmMCE9PWUuc3RybS5hdmFpbF9pbil9ZnVuY3Rpb24gWihlLHQpe2Zvcih2YXIgcixuOzspe2lmKGUubG9va2FoZWFkPHope2lmKGooZSksZS5sb29rYWhlYWQ8eiYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWlmKHI9MCxlLmxvb2thaGVhZD49eCYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tlLnN0cnN0YXJ0K3gtMV0pJmUuaGFzaF9tYXNrLHI9ZS5wcmV2W2Uuc3Ryc3RhcnQmZS53X21hc2tdPWUuaGVhZFtlLmluc19oXSxlLmhlYWRbZS5pbnNfaF09ZS5zdHJzdGFydCksMCE9PXImJmUuc3Ryc3RhcnQtcjw9ZS53X3NpemUteiYmKGUubWF0Y2hfbGVuZ3RoPUwoZSxyKSksZS5tYXRjaF9sZW5ndGg+PXgpaWYobj11Ll90cl90YWxseShlLGUuc3Ryc3RhcnQtZS5tYXRjaF9zdGFydCxlLm1hdGNoX2xlbmd0aC14KSxlLmxvb2thaGVhZC09ZS5tYXRjaF9sZW5ndGgsZS5tYXRjaF9sZW5ndGg8PWUubWF4X2xhenlfbWF0Y2gmJmUubG9va2FoZWFkPj14KXtmb3IoZS5tYXRjaF9sZW5ndGgtLTtlLnN0cnN0YXJ0KyssZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2Uuc3Ryc3RhcnQreC0xXSkmZS5oYXNoX21hc2sscj1lLnByZXZbZS5zdHJzdGFydCZlLndfbWFza109ZS5oZWFkW2UuaW5zX2hdLGUuaGVhZFtlLmluc19oXT1lLnN0cnN0YXJ0LDAhPS0tZS5tYXRjaF9sZW5ndGg7KTtlLnN0cnN0YXJ0Kyt9ZWxzZSBlLnN0cnN0YXJ0Kz1lLm1hdGNoX2xlbmd0aCxlLm1hdGNoX2xlbmd0aD0wLGUuaW5zX2g9ZS53aW5kb3dbZS5zdHJzdGFydF0sZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2Uuc3Ryc3RhcnQrMV0pJmUuaGFzaF9tYXNrO2Vsc2Ugbj11Ll90cl90YWxseShlLDAsZS53aW5kb3dbZS5zdHJzdGFydF0pLGUubG9va2FoZWFkLS0sZS5zdHJzdGFydCsrO2lmKG4mJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gZS5pbnNlcnQ9ZS5zdHJzdGFydDx4LTE/ZS5zdHJzdGFydDp4LTEsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfWZ1bmN0aW9uIFcoZSx0KXtmb3IodmFyIHIsbixpOzspe2lmKGUubG9va2FoZWFkPHope2lmKGooZSksZS5sb29rYWhlYWQ8eiYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWlmKHI9MCxlLmxvb2thaGVhZD49eCYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tlLnN0cnN0YXJ0K3gtMV0pJmUuaGFzaF9tYXNrLHI9ZS5wcmV2W2Uuc3Ryc3RhcnQmZS53X21hc2tdPWUuaGVhZFtlLmluc19oXSxlLmhlYWRbZS5pbnNfaF09ZS5zdHJzdGFydCksZS5wcmV2X2xlbmd0aD1lLm1hdGNoX2xlbmd0aCxlLnByZXZfbWF0Y2g9ZS5tYXRjaF9zdGFydCxlLm1hdGNoX2xlbmd0aD14LTEsMCE9PXImJmUucHJldl9sZW5ndGg8ZS5tYXhfbGF6eV9tYXRjaCYmZS5zdHJzdGFydC1yPD1lLndfc2l6ZS16JiYoZS5tYXRjaF9sZW5ndGg9TChlLHIpLGUubWF0Y2hfbGVuZ3RoPD01JiYoMT09PWUuc3RyYXRlZ3l8fGUubWF0Y2hfbGVuZ3RoPT09eCYmNDA5NjxlLnN0cnN0YXJ0LWUubWF0Y2hfc3RhcnQpJiYoZS5tYXRjaF9sZW5ndGg9eC0xKSksZS5wcmV2X2xlbmd0aD49eCYmZS5tYXRjaF9sZW5ndGg8PWUucHJldl9sZW5ndGgpe2ZvcihpPWUuc3Ryc3RhcnQrZS5sb29rYWhlYWQteCxuPXUuX3RyX3RhbGx5KGUsZS5zdHJzdGFydC0xLWUucHJldl9tYXRjaCxlLnByZXZfbGVuZ3RoLXgpLGUubG9va2FoZWFkLT1lLnByZXZfbGVuZ3RoLTEsZS5wcmV2X2xlbmd0aC09MjsrK2Uuc3Ryc3RhcnQ8PWkmJihlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbZS5zdHJzdGFydCt4LTFdKSZlLmhhc2hfbWFzayxyPWUucHJldltlLnN0cnN0YXJ0JmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPWUuc3Ryc3RhcnQpLDAhPS0tZS5wcmV2X2xlbmd0aDspO2lmKGUubWF0Y2hfYXZhaWxhYmxlPTAsZS5tYXRjaF9sZW5ndGg9eC0xLGUuc3Ryc3RhcnQrKyxuJiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9ZWxzZSBpZihlLm1hdGNoX2F2YWlsYWJsZSl7aWYoKG49dS5fdHJfdGFsbHkoZSwwLGUud2luZG93W2Uuc3Ryc3RhcnQtMV0pKSYmTihlLCExKSxlLnN0cnN0YXJ0KyssZS5sb29rYWhlYWQtLSwwPT09ZS5zdHJtLmF2YWlsX291dClyZXR1cm4gQX1lbHNlIGUubWF0Y2hfYXZhaWxhYmxlPTEsZS5zdHJzdGFydCsrLGUubG9va2FoZWFkLS19cmV0dXJuIGUubWF0Y2hfYXZhaWxhYmxlJiYobj11Ll90cl90YWxseShlLDAsZS53aW5kb3dbZS5zdHJzdGFydC0xXSksZS5tYXRjaF9hdmFpbGFibGU9MCksZS5pbnNlcnQ9ZS5zdHJzdGFydDx4LTE/ZS5zdHJzdGFydDp4LTEsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfWZ1bmN0aW9uIE0oZSx0LHIsbixpKXt0aGlzLmdvb2RfbGVuZ3RoPWUsdGhpcy5tYXhfbGF6eT10LHRoaXMubmljZV9sZW5ndGg9cix0aGlzLm1heF9jaGFpbj1uLHRoaXMuZnVuYz1pfWZ1bmN0aW9uIEgoKXt0aGlzLnN0cm09bnVsbCx0aGlzLnN0YXR1cz0wLHRoaXMucGVuZGluZ19idWY9bnVsbCx0aGlzLnBlbmRpbmdfYnVmX3NpemU9MCx0aGlzLnBlbmRpbmdfb3V0PTAsdGhpcy5wZW5kaW5nPTAsdGhpcy53cmFwPTAsdGhpcy5nemhlYWQ9bnVsbCx0aGlzLmd6aW5kZXg9MCx0aGlzLm1ldGhvZD12LHRoaXMubGFzdF9mbHVzaD0tMSx0aGlzLndfc2l6ZT0wLHRoaXMud19iaXRzPTAsdGhpcy53X21hc2s9MCx0aGlzLndpbmRvdz1udWxsLHRoaXMud2luZG93X3NpemU9MCx0aGlzLnByZXY9bnVsbCx0aGlzLmhlYWQ9bnVsbCx0aGlzLmluc19oPTAsdGhpcy5oYXNoX3NpemU9MCx0aGlzLmhhc2hfYml0cz0wLHRoaXMuaGFzaF9tYXNrPTAsdGhpcy5oYXNoX3NoaWZ0PTAsdGhpcy5ibG9ja19zdGFydD0wLHRoaXMubWF0Y2hfbGVuZ3RoPTAsdGhpcy5wcmV2X21hdGNoPTAsdGhpcy5tYXRjaF9hdmFpbGFibGU9MCx0aGlzLnN0cnN0YXJ0PTAsdGhpcy5tYXRjaF9zdGFydD0wLHRoaXMubG9va2FoZWFkPTAsdGhpcy5wcmV2X2xlbmd0aD0wLHRoaXMubWF4X2NoYWluX2xlbmd0aD0wLHRoaXMubWF4X2xhenlfbWF0Y2g9MCx0aGlzLmxldmVsPTAsdGhpcy5zdHJhdGVneT0wLHRoaXMuZ29vZF9tYXRjaD0wLHRoaXMubmljZV9tYXRjaD0wLHRoaXMuZHluX2x0cmVlPW5ldyBjLkJ1ZjE2KDIqdyksdGhpcy5keW5fZHRyZWU9bmV3IGMuQnVmMTYoMiooMiphKzEpKSx0aGlzLmJsX3RyZWU9bmV3IGMuQnVmMTYoMiooMipvKzEpKSxEKHRoaXMuZHluX2x0cmVlKSxEKHRoaXMuZHluX2R0cmVlKSxEKHRoaXMuYmxfdHJlZSksdGhpcy5sX2Rlc2M9bnVsbCx0aGlzLmRfZGVzYz1udWxsLHRoaXMuYmxfZGVzYz1udWxsLHRoaXMuYmxfY291bnQ9bmV3IGMuQnVmMTYoaysxKSx0aGlzLmhlYXA9bmV3IGMuQnVmMTYoMipzKzEpLEQodGhpcy5oZWFwKSx0aGlzLmhlYXBfbGVuPTAsdGhpcy5oZWFwX21heD0wLHRoaXMuZGVwdGg9bmV3IGMuQnVmMTYoMipzKzEpLEQodGhpcy5kZXB0aCksdGhpcy5sX2J1Zj0wLHRoaXMubGl0X2J1ZnNpemU9MCx0aGlzLmxhc3RfbGl0PTAsdGhpcy5kX2J1Zj0wLHRoaXMub3B0X2xlbj0wLHRoaXMuc3RhdGljX2xlbj0wLHRoaXMubWF0Y2hlcz0wLHRoaXMuaW5zZXJ0PTAsdGhpcy5iaV9idWY9MCx0aGlzLmJpX3ZhbGlkPTB9ZnVuY3Rpb24gRyhlKXt2YXIgdDtyZXR1cm4gZSYmZS5zdGF0ZT8oZS50b3RhbF9pbj1lLnRvdGFsX291dD0wLGUuZGF0YV90eXBlPWksKHQ9ZS5zdGF0ZSkucGVuZGluZz0wLHQucGVuZGluZ19vdXQ9MCx0LndyYXA8MCYmKHQud3JhcD0tdC53cmFwKSx0LnN0YXR1cz10LndyYXA/QzpFLGUuYWRsZXI9Mj09PXQud3JhcD8wOjEsdC5sYXN0X2ZsdXNoPWwsdS5fdHJfaW5pdCh0KSxtKTpSKGUsXyl9ZnVuY3Rpb24gSyhlKXt2YXIgdD1HKGUpO3JldHVybiB0PT09bSYmZnVuY3Rpb24oZSl7ZS53aW5kb3dfc2l6ZT0yKmUud19zaXplLEQoZS5oZWFkKSxlLm1heF9sYXp5X21hdGNoPWhbZS5sZXZlbF0ubWF4X2xhenksZS5nb29kX21hdGNoPWhbZS5sZXZlbF0uZ29vZF9sZW5ndGgsZS5uaWNlX21hdGNoPWhbZS5sZXZlbF0ubmljZV9sZW5ndGgsZS5tYXhfY2hhaW5fbGVuZ3RoPWhbZS5sZXZlbF0ubWF4X2NoYWluLGUuc3Ryc3RhcnQ9MCxlLmJsb2NrX3N0YXJ0PTAsZS5sb29rYWhlYWQ9MCxlLmluc2VydD0wLGUubWF0Y2hfbGVuZ3RoPWUucHJldl9sZW5ndGg9eC0xLGUubWF0Y2hfYXZhaWxhYmxlPTAsZS5pbnNfaD0wfShlLnN0YXRlKSx0fWZ1bmN0aW9uIFkoZSx0LHIsbixpLHMpe2lmKCFlKXJldHVybiBfO3ZhciBhPTE7aWYodD09PWcmJih0PTYpLG48MD8oYT0wLG49LW4pOjE1PG4mJihhPTIsbi09MTYpLGk8MXx8eTxpfHxyIT09dnx8bjw4fHwxNTxufHx0PDB8fDk8dHx8czwwfHxiPHMpcmV0dXJuIFIoZSxfKTs4PT09biYmKG49OSk7dmFyIG89bmV3IEg7cmV0dXJuKGUuc3RhdGU9bykuc3RybT1lLG8ud3JhcD1hLG8uZ3poZWFkPW51bGwsby53X2JpdHM9bixvLndfc2l6ZT0xPDxvLndfYml0cyxvLndfbWFzaz1vLndfc2l6ZS0xLG8uaGFzaF9iaXRzPWkrNyxvLmhhc2hfc2l6ZT0xPDxvLmhhc2hfYml0cyxvLmhhc2hfbWFzaz1vLmhhc2hfc2l6ZS0xLG8uaGFzaF9zaGlmdD1+figoby5oYXNoX2JpdHMreC0xKS94KSxvLndpbmRvdz1uZXcgYy5CdWY4KDIqby53X3NpemUpLG8uaGVhZD1uZXcgYy5CdWYxNihvLmhhc2hfc2l6ZSksby5wcmV2PW5ldyBjLkJ1ZjE2KG8ud19zaXplKSxvLmxpdF9idWZzaXplPTE8PGkrNixvLnBlbmRpbmdfYnVmX3NpemU9NCpvLmxpdF9idWZzaXplLG8ucGVuZGluZ19idWY9bmV3IGMuQnVmOChvLnBlbmRpbmdfYnVmX3NpemUpLG8uZF9idWY9MSpvLmxpdF9idWZzaXplLG8ubF9idWY9MypvLmxpdF9idWZzaXplLG8ubGV2ZWw9dCxvLnN0cmF0ZWd5PXMsby5tZXRob2Q9cixLKGUpfWg9W25ldyBNKDAsMCwwLDAsZnVuY3Rpb24oZSx0KXt2YXIgcj02NTUzNTtmb3Iocj5lLnBlbmRpbmdfYnVmX3NpemUtNSYmKHI9ZS5wZW5kaW5nX2J1Zl9zaXplLTUpOzspe2lmKGUubG9va2FoZWFkPD0xKXtpZihqKGUpLDA9PT1lLmxvb2thaGVhZCYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWUuc3Ryc3RhcnQrPWUubG9va2FoZWFkLGUubG9va2FoZWFkPTA7dmFyIG49ZS5ibG9ja19zdGFydCtyO2lmKCgwPT09ZS5zdHJzdGFydHx8ZS5zdHJzdGFydD49bikmJihlLmxvb2thaGVhZD1lLnN0cnN0YXJ0LW4sZS5zdHJzdGFydD1uLE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBO2lmKGUuc3Ryc3RhcnQtZS5ibG9ja19zdGFydD49ZS53X3NpemUteiYmKE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiBlLmluc2VydD0wLHQ9PT1mPyhOKGUsITApLDA9PT1lLnN0cm0uYXZhaWxfb3V0P086Qik6KGUuc3Ryc3RhcnQ+ZS5ibG9ja19zdGFydCYmKE4oZSwhMSksZS5zdHJtLmF2YWlsX291dCksQSl9KSxuZXcgTSg0LDQsOCw0LFopLG5ldyBNKDQsNSwxNiw4LFopLG5ldyBNKDQsNiwzMiwzMixaKSxuZXcgTSg0LDQsMTYsMTYsVyksbmV3IE0oOCwxNiwzMiwzMixXKSxuZXcgTSg4LDE2LDEyOCwxMjgsVyksbmV3IE0oOCwzMiwxMjgsMjU2LFcpLG5ldyBNKDMyLDEyOCwyNTgsMTAyNCxXKSxuZXcgTSgzMiwyNTgsMjU4LDQwOTYsVyldLHIuZGVmbGF0ZUluaXQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gWShlLHQsdiwxNSw4LDApfSxyLmRlZmxhdGVJbml0Mj1ZLHIuZGVmbGF0ZVJlc2V0PUssci5kZWZsYXRlUmVzZXRLZWVwPUcsci5kZWZsYXRlU2V0SGVhZGVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJmUuc3RhdGU/MiE9PWUuc3RhdGUud3JhcD9fOihlLnN0YXRlLmd6aGVhZD10LG0pOl99LHIuZGVmbGF0ZT1mdW5jdGlvbihlLHQpe3ZhciByLG4saSxzO2lmKCFlfHwhZS5zdGF0ZXx8NTx0fHx0PDApcmV0dXJuIGU/UihlLF8pOl87aWYobj1lLnN0YXRlLCFlLm91dHB1dHx8IWUuaW5wdXQmJjAhPT1lLmF2YWlsX2lufHw2NjY9PT1uLnN0YXR1cyYmdCE9PWYpcmV0dXJuIFIoZSwwPT09ZS5hdmFpbF9vdXQ/LTU6Xyk7aWYobi5zdHJtPWUscj1uLmxhc3RfZmx1c2gsbi5sYXN0X2ZsdXNoPXQsbi5zdGF0dXM9PT1DKWlmKDI9PT1uLndyYXApZS5hZGxlcj0wLFUobiwzMSksVShuLDEzOSksVShuLDgpLG4uZ3poZWFkPyhVKG4sKG4uZ3poZWFkLnRleHQ/MTowKSsobi5nemhlYWQuaGNyYz8yOjApKyhuLmd6aGVhZC5leHRyYT80OjApKyhuLmd6aGVhZC5uYW1lPzg6MCkrKG4uZ3poZWFkLmNvbW1lbnQ/MTY6MCkpLFUobiwyNTUmbi5nemhlYWQudGltZSksVShuLG4uZ3poZWFkLnRpbWU+PjgmMjU1KSxVKG4sbi5nemhlYWQudGltZT4+MTYmMjU1KSxVKG4sbi5nemhlYWQudGltZT4+MjQmMjU1KSxVKG4sOT09PW4ubGV2ZWw/MjoyPD1uLnN0cmF0ZWd5fHxuLmxldmVsPDI/NDowKSxVKG4sMjU1Jm4uZ3poZWFkLm9zKSxuLmd6aGVhZC5leHRyYSYmbi5nemhlYWQuZXh0cmEubGVuZ3RoJiYoVShuLDI1NSZuLmd6aGVhZC5leHRyYS5sZW5ndGgpLFUobixuLmd6aGVhZC5leHRyYS5sZW5ndGg+PjgmMjU1KSksbi5nemhlYWQuaGNyYyYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLDApKSxuLmd6aW5kZXg9MCxuLnN0YXR1cz02OSk6KFUobiwwKSxVKG4sMCksVShuLDApLFUobiwwKSxVKG4sMCksVShuLDk9PT1uLmxldmVsPzI6Mjw9bi5zdHJhdGVneXx8bi5sZXZlbDwyPzQ6MCksVShuLDMpLG4uc3RhdHVzPUUpO2Vsc2V7dmFyIGE9disobi53X2JpdHMtODw8NCk8PDg7YXw9KDI8PW4uc3RyYXRlZ3l8fG4ubGV2ZWw8Mj8wOm4ubGV2ZWw8Nj8xOjY9PT1uLmxldmVsPzI6Myk8PDYsMCE9PW4uc3Ryc3RhcnQmJihhfD0zMiksYSs9MzEtYSUzMSxuLnN0YXR1cz1FLFAobixhKSwwIT09bi5zdHJzdGFydCYmKFAobixlLmFkbGVyPj4+MTYpLFAobiw2NTUzNSZlLmFkbGVyKSksZS5hZGxlcj0xfWlmKDY5PT09bi5zdGF0dXMpaWYobi5nemhlYWQuZXh0cmEpe2ZvcihpPW4ucGVuZGluZztuLmd6aW5kZXg8KDY1NTM1Jm4uZ3poZWFkLmV4dHJhLmxlbmd0aCkmJihuLnBlbmRpbmchPT1uLnBlbmRpbmdfYnVmX3NpemV8fChuLmd6aGVhZC5oY3JjJiZuLnBlbmRpbmc+aSYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLWksaSkpLEYoZSksaT1uLnBlbmRpbmcsbi5wZW5kaW5nIT09bi5wZW5kaW5nX2J1Zl9zaXplKSk7KVUobiwyNTUmbi5nemhlYWQuZXh0cmFbbi5nemluZGV4XSksbi5nemluZGV4Kys7bi5nemhlYWQuaGNyYyYmbi5wZW5kaW5nPmkmJihlLmFkbGVyPXAoZS5hZGxlcixuLnBlbmRpbmdfYnVmLG4ucGVuZGluZy1pLGkpKSxuLmd6aW5kZXg9PT1uLmd6aGVhZC5leHRyYS5sZW5ndGgmJihuLmd6aW5kZXg9MCxuLnN0YXR1cz03Myl9ZWxzZSBuLnN0YXR1cz03MztpZig3Mz09PW4uc3RhdHVzKWlmKG4uZ3poZWFkLm5hbWUpe2k9bi5wZW5kaW5nO2Rve2lmKG4ucGVuZGluZz09PW4ucGVuZGluZ19idWZfc2l6ZSYmKG4uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksRihlKSxpPW4ucGVuZGluZyxuLnBlbmRpbmc9PT1uLnBlbmRpbmdfYnVmX3NpemUpKXtzPTE7YnJlYWt9cz1uLmd6aW5kZXg8bi5nemhlYWQubmFtZS5sZW5ndGg/MjU1Jm4uZ3poZWFkLm5hbWUuY2hhckNvZGVBdChuLmd6aW5kZXgrKyk6MCxVKG4scyl9d2hpbGUoMCE9PXMpO24uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksMD09PXMmJihuLmd6aW5kZXg9MCxuLnN0YXR1cz05MSl9ZWxzZSBuLnN0YXR1cz05MTtpZig5MT09PW4uc3RhdHVzKWlmKG4uZ3poZWFkLmNvbW1lbnQpe2k9bi5wZW5kaW5nO2Rve2lmKG4ucGVuZGluZz09PW4ucGVuZGluZ19idWZfc2l6ZSYmKG4uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksRihlKSxpPW4ucGVuZGluZyxuLnBlbmRpbmc9PT1uLnBlbmRpbmdfYnVmX3NpemUpKXtzPTE7YnJlYWt9cz1uLmd6aW5kZXg8bi5nemhlYWQuY29tbWVudC5sZW5ndGg/MjU1Jm4uZ3poZWFkLmNvbW1lbnQuY2hhckNvZGVBdChuLmd6aW5kZXgrKyk6MCxVKG4scyl9d2hpbGUoMCE9PXMpO24uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksMD09PXMmJihuLnN0YXR1cz0xMDMpfWVsc2Ugbi5zdGF0dXM9MTAzO2lmKDEwMz09PW4uc3RhdHVzJiYobi5nemhlYWQuaGNyYz8obi5wZW5kaW5nKzI+bi5wZW5kaW5nX2J1Zl9zaXplJiZGKGUpLG4ucGVuZGluZysyPD1uLnBlbmRpbmdfYnVmX3NpemUmJihVKG4sMjU1JmUuYWRsZXIpLFUobixlLmFkbGVyPj44JjI1NSksZS5hZGxlcj0wLG4uc3RhdHVzPUUpKTpuLnN0YXR1cz1FKSwwIT09bi5wZW5kaW5nKXtpZihGKGUpLDA9PT1lLmF2YWlsX291dClyZXR1cm4gbi5sYXN0X2ZsdXNoPS0xLG19ZWxzZSBpZigwPT09ZS5hdmFpbF9pbiYmVCh0KTw9VChyKSYmdCE9PWYpcmV0dXJuIFIoZSwtNSk7aWYoNjY2PT09bi5zdGF0dXMmJjAhPT1lLmF2YWlsX2luKXJldHVybiBSKGUsLTUpO2lmKDAhPT1lLmF2YWlsX2lufHwwIT09bi5sb29rYWhlYWR8fHQhPT1sJiY2NjYhPT1uLnN0YXR1cyl7dmFyIG89Mj09PW4uc3RyYXRlZ3k/ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI7Oyl7aWYoMD09PWUubG9va2FoZWFkJiYoaihlKSwwPT09ZS5sb29rYWhlYWQpKXtpZih0PT09bClyZXR1cm4gQTticmVha31pZihlLm1hdGNoX2xlbmd0aD0wLHI9dS5fdHJfdGFsbHkoZSwwLGUud2luZG93W2Uuc3Ryc3RhcnRdKSxlLmxvb2thaGVhZC0tLGUuc3Ryc3RhcnQrKyxyJiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIGUuaW5zZXJ0PTAsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfShuLHQpOjM9PT1uLnN0cmF0ZWd5P2Z1bmN0aW9uKGUsdCl7Zm9yKHZhciByLG4saSxzLGE9ZS53aW5kb3c7Oyl7aWYoZS5sb29rYWhlYWQ8PVMpe2lmKGooZSksZS5sb29rYWhlYWQ8PVMmJnQ9PT1sKXJldHVybiBBO2lmKDA9PT1lLmxvb2thaGVhZClicmVha31pZihlLm1hdGNoX2xlbmd0aD0wLGUubG9va2FoZWFkPj14JiYwPGUuc3Ryc3RhcnQmJihuPWFbaT1lLnN0cnN0YXJ0LTFdKT09PWFbKytpXSYmbj09PWFbKytpXSYmbj09PWFbKytpXSl7cz1lLnN0cnN0YXJ0K1M7ZG97fXdoaWxlKG49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJmk8cyk7ZS5tYXRjaF9sZW5ndGg9Uy0ocy1pKSxlLm1hdGNoX2xlbmd0aD5lLmxvb2thaGVhZCYmKGUubWF0Y2hfbGVuZ3RoPWUubG9va2FoZWFkKX1pZihlLm1hdGNoX2xlbmd0aD49eD8ocj11Ll90cl90YWxseShlLDEsZS5tYXRjaF9sZW5ndGgteCksZS5sb29rYWhlYWQtPWUubWF0Y2hfbGVuZ3RoLGUuc3Ryc3RhcnQrPWUubWF0Y2hfbGVuZ3RoLGUubWF0Y2hfbGVuZ3RoPTApOihyPXUuX3RyX3RhbGx5KGUsMCxlLndpbmRvd1tlLnN0cnN0YXJ0XSksZS5sb29rYWhlYWQtLSxlLnN0cnN0YXJ0KyspLHImJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gZS5pbnNlcnQ9MCx0PT09Zj8oTihlLCEwKSwwPT09ZS5zdHJtLmF2YWlsX291dD9POkIpOmUubGFzdF9saXQmJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KT9BOkl9KG4sdCk6aFtuLmxldmVsXS5mdW5jKG4sdCk7aWYobyE9PU8mJm8hPT1CfHwobi5zdGF0dXM9NjY2KSxvPT09QXx8bz09PU8pcmV0dXJuIDA9PT1lLmF2YWlsX291dCYmKG4ubGFzdF9mbHVzaD0tMSksbTtpZihvPT09SSYmKDE9PT10P3UuX3RyX2FsaWduKG4pOjUhPT10JiYodS5fdHJfc3RvcmVkX2Jsb2NrKG4sMCwwLCExKSwzPT09dCYmKEQobi5oZWFkKSwwPT09bi5sb29rYWhlYWQmJihuLnN0cnN0YXJ0PTAsbi5ibG9ja19zdGFydD0wLG4uaW5zZXJ0PTApKSksRihlKSwwPT09ZS5hdmFpbF9vdXQpKXJldHVybiBuLmxhc3RfZmx1c2g9LTEsbX1yZXR1cm4gdCE9PWY/bTpuLndyYXA8PTA/MTooMj09PW4ud3JhcD8oVShuLDI1NSZlLmFkbGVyKSxVKG4sZS5hZGxlcj4+OCYyNTUpLFUobixlLmFkbGVyPj4xNiYyNTUpLFUobixlLmFkbGVyPj4yNCYyNTUpLFUobiwyNTUmZS50b3RhbF9pbiksVShuLGUudG90YWxfaW4+PjgmMjU1KSxVKG4sZS50b3RhbF9pbj4+MTYmMjU1KSxVKG4sZS50b3RhbF9pbj4+MjQmMjU1KSk6KFAobixlLmFkbGVyPj4+MTYpLFAobiw2NTUzNSZlLmFkbGVyKSksRihlKSwwPG4ud3JhcCYmKG4ud3JhcD0tbi53cmFwKSwwIT09bi5wZW5kaW5nP206MSl9LHIuZGVmbGF0ZUVuZD1mdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gZSYmZS5zdGF0ZT8odD1lLnN0YXRlLnN0YXR1cykhPT1DJiY2OSE9PXQmJjczIT09dCYmOTEhPT10JiYxMDMhPT10JiZ0IT09RSYmNjY2IT09dD9SKGUsXyk6KGUuc3RhdGU9bnVsbCx0PT09RT9SKGUsLTMpOm0pOl99LHIuZGVmbGF0ZVNldERpY3Rpb25hcnk9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saCx1LGw9dC5sZW5ndGg7aWYoIWV8fCFlLnN0YXRlKXJldHVybiBfO2lmKDI9PT0ocz0ocj1lLnN0YXRlKS53cmFwKXx8MT09PXMmJnIuc3RhdHVzIT09Q3x8ci5sb29rYWhlYWQpcmV0dXJuIF87Zm9yKDE9PT1zJiYoZS5hZGxlcj1kKGUuYWRsZXIsdCxsLDApKSxyLndyYXA9MCxsPj1yLndfc2l6ZSYmKDA9PT1zJiYoRChyLmhlYWQpLHIuc3Ryc3RhcnQ9MCxyLmJsb2NrX3N0YXJ0PTAsci5pbnNlcnQ9MCksdT1uZXcgYy5CdWY4KHIud19zaXplKSxjLmFycmF5U2V0KHUsdCxsLXIud19zaXplLHIud19zaXplLDApLHQ9dSxsPXIud19zaXplKSxhPWUuYXZhaWxfaW4sbz1lLm5leHRfaW4saD1lLmlucHV0LGUuYXZhaWxfaW49bCxlLm5leHRfaW49MCxlLmlucHV0PXQsaihyKTtyLmxvb2thaGVhZD49eDspe2ZvcihuPXIuc3Ryc3RhcnQsaT1yLmxvb2thaGVhZC0oeC0xKTtyLmluc19oPShyLmluc19oPDxyLmhhc2hfc2hpZnReci53aW5kb3dbbit4LTFdKSZyLmhhc2hfbWFzayxyLnByZXZbbiZyLndfbWFza109ci5oZWFkW3IuaW5zX2hdLHIuaGVhZFtyLmluc19oXT1uLG4rKywtLWk7KTtyLnN0cnN0YXJ0PW4sci5sb29rYWhlYWQ9eC0xLGoocil9cmV0dXJuIHIuc3Ryc3RhcnQrPXIubG9va2FoZWFkLHIuYmxvY2tfc3RhcnQ9ci5zdHJzdGFydCxyLmluc2VydD1yLmxvb2thaGVhZCxyLmxvb2thaGVhZD0wLHIubWF0Y2hfbGVuZ3RoPXIucHJldl9sZW5ndGg9eC0xLHIubWF0Y2hfYXZhaWxhYmxlPTAsZS5uZXh0X2luPW8sZS5pbnB1dD1oLGUuYXZhaWxfaW49YSxyLndyYXA9cyxtfSxyLmRlZmxhdGVJbmZvPVwicGFrbyBkZWZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KVwifSx7XCIuLi91dGlscy9jb21tb25cIjo0MSxcIi4vYWRsZXIzMlwiOjQzLFwiLi9jcmMzMlwiOjQ1LFwiLi9tZXNzYWdlc1wiOjUxLFwiLi90cmVlc1wiOjUyfV0sNDc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt0aGlzLnRleHQ9MCx0aGlzLnRpbWU9MCx0aGlzLnhmbGFncz0wLHRoaXMub3M9MCx0aGlzLmV4dHJhPW51bGwsdGhpcy5leHRyYV9sZW49MCx0aGlzLm5hbWU9XCJcIix0aGlzLmNvbW1lbnQ9XCJcIix0aGlzLmhjcmM9MCx0aGlzLmRvbmU9ITF9fSx7fV0sNDg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saCx1LGwsZixjLGQscCxtLF8sZyxiLHYseSx3LGsseCxTLHosQztyPWUuc3RhdGUsbj1lLm5leHRfaW4sej1lLmlucHV0LGk9bisoZS5hdmFpbF9pbi01KSxzPWUubmV4dF9vdXQsQz1lLm91dHB1dCxhPXMtKHQtZS5hdmFpbF9vdXQpLG89cysoZS5hdmFpbF9vdXQtMjU3KSxoPXIuZG1heCx1PXIud3NpemUsbD1yLndoYXZlLGY9ci53bmV4dCxjPXIud2luZG93LGQ9ci5ob2xkLHA9ci5iaXRzLG09ci5sZW5jb2RlLF89ci5kaXN0Y29kZSxnPSgxPDxyLmxlbmJpdHMpLTEsYj0oMTw8ci5kaXN0Yml0cyktMTtlOmRve3A8MTUmJihkKz16W24rK108PHAscCs9OCxkKz16W24rK108PHAscCs9OCksdj1tW2QmZ107dDpmb3IoOzspe2lmKGQ+Pj49eT12Pj4+MjQscC09eSwwPT09KHk9dj4+PjE2JjI1NSkpQ1tzKytdPTY1NTM1JnY7ZWxzZXtpZighKDE2JnkpKXtpZigwPT0oNjQmeSkpe3Y9bVsoNjU1MzUmdikrKGQmKDE8PHkpLTEpXTtjb250aW51ZSB0fWlmKDMyJnkpe3IubW9kZT0xMjticmVhayBlfWUubXNnPVwiaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlXCIsci5tb2RlPTMwO2JyZWFrIGV9dz02NTUzNSZ2LCh5Jj0xNSkmJihwPHkmJihkKz16W24rK108PHAscCs9OCksdys9ZCYoMTw8eSktMSxkPj4+PXkscC09eSkscDwxNSYmKGQrPXpbbisrXTw8cCxwKz04LGQrPXpbbisrXTw8cCxwKz04KSx2PV9bZCZiXTtyOmZvcig7Oyl7aWYoZD4+Pj15PXY+Pj4yNCxwLT15LCEoMTYmKHk9dj4+PjE2JjI1NSkpKXtpZigwPT0oNjQmeSkpe3Y9X1soNjU1MzUmdikrKGQmKDE8PHkpLTEpXTtjb250aW51ZSByfWUubXNnPVwiaW52YWxpZCBkaXN0YW5jZSBjb2RlXCIsci5tb2RlPTMwO2JyZWFrIGV9aWYoaz02NTUzNSZ2LHA8KHkmPTE1KSYmKGQrPXpbbisrXTw8cCwocCs9OCk8eSYmKGQrPXpbbisrXTw8cCxwKz04KSksaDwoays9ZCYoMTw8eSktMSkpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWsgZX1pZihkPj4+PXkscC09eSwoeT1zLWEpPGspe2lmKGw8KHk9ay15KSYmci5zYW5lKXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrIGV9aWYoUz1jLCh4PTApPT09Zil7aWYoeCs9dS15LHk8dyl7Zm9yKHctPXk7Q1tzKytdPWNbeCsrXSwtLXk7KTt4PXMtayxTPUN9fWVsc2UgaWYoZjx5KXtpZih4Kz11K2YteSwoeS09Zik8dyl7Zm9yKHctPXk7Q1tzKytdPWNbeCsrXSwtLXk7KTtpZih4PTAsZjx3KXtmb3Iody09eT1mO0NbcysrXT1jW3grK10sLS15Oyk7eD1zLWssUz1DfX19ZWxzZSBpZih4Kz1mLXkseTx3KXtmb3Iody09eTtDW3MrK109Y1t4KytdLC0teTspO3g9cy1rLFM9Q31mb3IoOzI8dzspQ1tzKytdPVNbeCsrXSxDW3MrK109U1t4KytdLENbcysrXT1TW3grK10sdy09Mzt3JiYoQ1tzKytdPVNbeCsrXSwxPHcmJihDW3MrK109U1t4KytdKSl9ZWxzZXtmb3IoeD1zLWs7Q1tzKytdPUNbeCsrXSxDW3MrK109Q1t4KytdLENbcysrXT1DW3grK10sMjwody09Myk7KTt3JiYoQ1tzKytdPUNbeCsrXSwxPHcmJihDW3MrK109Q1t4KytdKSl9YnJlYWt9fWJyZWFrfX13aGlsZShuPGkmJnM8byk7bi09dz1wPj4zLGQmPSgxPDwocC09dzw8MykpLTEsZS5uZXh0X2luPW4sZS5uZXh0X291dD1zLGUuYXZhaWxfaW49bjxpP2ktbis1OjUtKG4taSksZS5hdmFpbF9vdXQ9czxvP28tcysyNTc6MjU3LShzLW8pLHIuaG9sZD1kLHIuYml0cz1wfX0se31dLDQ5OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIEk9ZShcIi4uL3V0aWxzL2NvbW1vblwiKSxPPWUoXCIuL2FkbGVyMzJcIiksQj1lKFwiLi9jcmMzMlwiKSxSPWUoXCIuL2luZmZhc3RcIiksVD1lKFwiLi9pbmZ0cmVlc1wiKSxEPTEsRj0yLE49MCxVPS0yLFA9MSxuPTg1MixpPTU5MjtmdW5jdGlvbiBMKGUpe3JldHVybihlPj4+MjQmMjU1KSsoZT4+PjgmNjUyODApKygoNjUyODAmZSk8PDgpKygoMjU1JmUpPDwyNCl9ZnVuY3Rpb24gcygpe3RoaXMubW9kZT0wLHRoaXMubGFzdD0hMSx0aGlzLndyYXA9MCx0aGlzLmhhdmVkaWN0PSExLHRoaXMuZmxhZ3M9MCx0aGlzLmRtYXg9MCx0aGlzLmNoZWNrPTAsdGhpcy50b3RhbD0wLHRoaXMuaGVhZD1udWxsLHRoaXMud2JpdHM9MCx0aGlzLndzaXplPTAsdGhpcy53aGF2ZT0wLHRoaXMud25leHQ9MCx0aGlzLndpbmRvdz1udWxsLHRoaXMuaG9sZD0wLHRoaXMuYml0cz0wLHRoaXMubGVuZ3RoPTAsdGhpcy5vZmZzZXQ9MCx0aGlzLmV4dHJhPTAsdGhpcy5sZW5jb2RlPW51bGwsdGhpcy5kaXN0Y29kZT1udWxsLHRoaXMubGVuYml0cz0wLHRoaXMuZGlzdGJpdHM9MCx0aGlzLm5jb2RlPTAsdGhpcy5ubGVuPTAsdGhpcy5uZGlzdD0wLHRoaXMuaGF2ZT0wLHRoaXMubmV4dD1udWxsLHRoaXMubGVucz1uZXcgSS5CdWYxNigzMjApLHRoaXMud29yaz1uZXcgSS5CdWYxNigyODgpLHRoaXMubGVuZHluPW51bGwsdGhpcy5kaXN0ZHluPW51bGwsdGhpcy5zYW5lPTAsdGhpcy5iYWNrPTAsdGhpcy53YXM9MH1mdW5jdGlvbiBhKGUpe3ZhciB0O3JldHVybiBlJiZlLnN0YXRlPyh0PWUuc3RhdGUsZS50b3RhbF9pbj1lLnRvdGFsX291dD10LnRvdGFsPTAsZS5tc2c9XCJcIix0LndyYXAmJihlLmFkbGVyPTEmdC53cmFwKSx0Lm1vZGU9UCx0Lmxhc3Q9MCx0LmhhdmVkaWN0PTAsdC5kbWF4PTMyNzY4LHQuaGVhZD1udWxsLHQuaG9sZD0wLHQuYml0cz0wLHQubGVuY29kZT10LmxlbmR5bj1uZXcgSS5CdWYzMihuKSx0LmRpc3Rjb2RlPXQuZGlzdGR5bj1uZXcgSS5CdWYzMihpKSx0LnNhbmU9MSx0LmJhY2s9LTEsTik6VX1mdW5jdGlvbiBvKGUpe3ZhciB0O3JldHVybiBlJiZlLnN0YXRlPygodD1lLnN0YXRlKS53c2l6ZT0wLHQud2hhdmU9MCx0LnduZXh0PTAsYShlKSk6VX1mdW5jdGlvbiBoKGUsdCl7dmFyIHIsbjtyZXR1cm4gZSYmZS5zdGF0ZT8obj1lLnN0YXRlLHQ8MD8ocj0wLHQ9LXQpOihyPTErKHQ+PjQpLHQ8NDgmJih0Jj0xNSkpLHQmJih0PDh8fDE1PHQpP1U6KG51bGwhPT1uLndpbmRvdyYmbi53Yml0cyE9PXQmJihuLndpbmRvdz1udWxsKSxuLndyYXA9cixuLndiaXRzPXQsbyhlKSkpOlV9ZnVuY3Rpb24gdShlLHQpe3ZhciByLG47cmV0dXJuIGU/KG49bmV3IHMsKGUuc3RhdGU9bikud2luZG93PW51bGwsKHI9aChlLHQpKSE9PU4mJihlLnN0YXRlPW51bGwpLHIpOlV9dmFyIGwsZixjPSEwO2Z1bmN0aW9uIGooZSl7aWYoYyl7dmFyIHQ7Zm9yKGw9bmV3IEkuQnVmMzIoNTEyKSxmPW5ldyBJLkJ1ZjMyKDMyKSx0PTA7dDwxNDQ7KWUubGVuc1t0KytdPTg7Zm9yKDt0PDI1NjspZS5sZW5zW3QrK109OTtmb3IoO3Q8MjgwOyllLmxlbnNbdCsrXT03O2Zvcig7dDwyODg7KWUubGVuc1t0KytdPTg7Zm9yKFQoRCxlLmxlbnMsMCwyODgsbCwwLGUud29yayx7Yml0czo5fSksdD0wO3Q8MzI7KWUubGVuc1t0KytdPTU7VChGLGUubGVucywwLDMyLGYsMCxlLndvcmsse2JpdHM6NX0pLGM9ITF9ZS5sZW5jb2RlPWwsZS5sZW5iaXRzPTksZS5kaXN0Y29kZT1mLGUuZGlzdGJpdHM9NX1mdW5jdGlvbiBaKGUsdCxyLG4pe3ZhciBpLHM9ZS5zdGF0ZTtyZXR1cm4gbnVsbD09PXMud2luZG93JiYocy53c2l6ZT0xPDxzLndiaXRzLHMud25leHQ9MCxzLndoYXZlPTAscy53aW5kb3c9bmV3IEkuQnVmOChzLndzaXplKSksbj49cy53c2l6ZT8oSS5hcnJheVNldChzLndpbmRvdyx0LHItcy53c2l6ZSxzLndzaXplLDApLHMud25leHQ9MCxzLndoYXZlPXMud3NpemUpOihuPChpPXMud3NpemUtcy53bmV4dCkmJihpPW4pLEkuYXJyYXlTZXQocy53aW5kb3csdCxyLW4saSxzLnduZXh0KSwobi09aSk/KEkuYXJyYXlTZXQocy53aW5kb3csdCxyLW4sbiwwKSxzLnduZXh0PW4scy53aGF2ZT1zLndzaXplKToocy53bmV4dCs9aSxzLnduZXh0PT09cy53c2l6ZSYmKHMud25leHQ9MCkscy53aGF2ZTxzLndzaXplJiYocy53aGF2ZSs9aSkpKSwwfXIuaW5mbGF0ZVJlc2V0PW8sci5pbmZsYXRlUmVzZXQyPWgsci5pbmZsYXRlUmVzZXRLZWVwPWEsci5pbmZsYXRlSW5pdD1mdW5jdGlvbihlKXtyZXR1cm4gdShlLDE1KX0sci5pbmZsYXRlSW5pdDI9dSxyLmluZmxhdGU9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saCx1LGwsZixjLGQscCxtLF8sZyxiLHYseSx3LGsseCxTLHosQz0wLEU9bmV3IEkuQnVmOCg0KSxBPVsxNiwxNywxOCwwLDgsNyw5LDYsMTAsNSwxMSw0LDEyLDMsMTMsMiwxNCwxLDE1XTtpZighZXx8IWUuc3RhdGV8fCFlLm91dHB1dHx8IWUuaW5wdXQmJjAhPT1lLmF2YWlsX2luKXJldHVybiBVOzEyPT09KHI9ZS5zdGF0ZSkubW9kZSYmKHIubW9kZT0xMyksYT1lLm5leHRfb3V0LGk9ZS5vdXRwdXQsaD1lLmF2YWlsX291dCxzPWUubmV4dF9pbixuPWUuaW5wdXQsbz1lLmF2YWlsX2luLHU9ci5ob2xkLGw9ci5iaXRzLGY9byxjPWgseD1OO2U6Zm9yKDs7KXN3aXRjaChyLm1vZGUpe2Nhc2UgUDppZigwPT09ci53cmFwKXtyLm1vZGU9MTM7YnJlYWt9Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoMiZyLndyYXAmJjM1NjE1PT09dSl7RVtyLmNoZWNrPTBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSxsPXU9MCxyLm1vZGU9MjticmVha31pZihyLmZsYWdzPTAsci5oZWFkJiYoci5oZWFkLmRvbmU9ITEpLCEoMSZyLndyYXApfHwoKCgyNTUmdSk8PDgpKyh1Pj44KSklMzEpe2UubXNnPVwiaW5jb3JyZWN0IGhlYWRlciBjaGVja1wiLHIubW9kZT0zMDticmVha31pZig4IT0oMTUmdSkpe2UubXNnPVwidW5rbm93biBjb21wcmVzc2lvbiBtZXRob2RcIixyLm1vZGU9MzA7YnJlYWt9aWYobC09NCxrPTgrKDE1Jih1Pj4+PTQpKSwwPT09ci53Yml0cylyLndiaXRzPWs7ZWxzZSBpZihrPnIud2JpdHMpe2UubXNnPVwiaW52YWxpZCB3aW5kb3cgc2l6ZVwiLHIubW9kZT0zMDticmVha31yLmRtYXg9MTw8ayxlLmFkbGVyPXIuY2hlY2s9MSxyLm1vZGU9NTEyJnU/MTA6MTIsbD11PTA7YnJlYWs7Y2FzZSAyOmZvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKHIuZmxhZ3M9dSw4IT0oMjU1JnIuZmxhZ3MpKXtlLm1zZz1cInVua25vd24gY29tcHJlc3Npb24gbWV0aG9kXCIsci5tb2RlPTMwO2JyZWFrfWlmKDU3MzQ0JnIuZmxhZ3Mpe2UubXNnPVwidW5rbm93biBoZWFkZXIgZmxhZ3Mgc2V0XCIsci5tb2RlPTMwO2JyZWFrfXIuaGVhZCYmKHIuaGVhZC50ZXh0PXU+PjgmMSksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSksbD11PTAsci5tb2RlPTM7Y2FzZSAzOmZvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIuaGVhZCYmKHIuaGVhZC50aW1lPXUpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxFWzJdPXU+Pj4xNiYyNTUsRVszXT11Pj4+MjQmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsNCwwKSksbD11PTAsci5tb2RlPTQ7Y2FzZSA0OmZvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIuaGVhZCYmKHIuaGVhZC54ZmxhZ3M9MjU1JnUsci5oZWFkLm9zPXU+PjgpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCkpLGw9dT0wLHIubW9kZT01O2Nhc2UgNTppZigxMDI0JnIuZmxhZ3Mpe2Zvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIubGVuZ3RoPXUsci5oZWFkJiYoci5oZWFkLmV4dHJhX2xlbj11KSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApKSxsPXU9MH1lbHNlIHIuaGVhZCYmKHIuaGVhZC5leHRyYT1udWxsKTtyLm1vZGU9NjtjYXNlIDY6aWYoMTAyNCZyLmZsYWdzJiYobzwoZD1yLmxlbmd0aCkmJihkPW8pLGQmJihyLmhlYWQmJihrPXIuaGVhZC5leHRyYV9sZW4tci5sZW5ndGgsci5oZWFkLmV4dHJhfHwoci5oZWFkLmV4dHJhPW5ldyBBcnJheShyLmhlYWQuZXh0cmFfbGVuKSksSS5hcnJheVNldChyLmhlYWQuZXh0cmEsbixzLGQsaykpLDUxMiZyLmZsYWdzJiYoci5jaGVjaz1CKHIuY2hlY2ssbixkLHMpKSxvLT1kLHMrPWQsci5sZW5ndGgtPWQpLHIubGVuZ3RoKSlicmVhayBlO3IubGVuZ3RoPTAsci5tb2RlPTc7Y2FzZSA3OmlmKDIwNDgmci5mbGFncyl7aWYoMD09PW8pYnJlYWsgZTtmb3IoZD0wO2s9bltzK2QrK10sci5oZWFkJiZrJiZyLmxlbmd0aDw2NTUzNiYmKHIuaGVhZC5uYW1lKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGspKSxrJiZkPG87KTtpZig1MTImci5mbGFncyYmKHIuY2hlY2s9QihyLmNoZWNrLG4sZCxzKSksby09ZCxzKz1kLGspYnJlYWsgZX1lbHNlIHIuaGVhZCYmKHIuaGVhZC5uYW1lPW51bGwpO3IubGVuZ3RoPTAsci5tb2RlPTg7Y2FzZSA4OmlmKDQwOTYmci5mbGFncyl7aWYoMD09PW8pYnJlYWsgZTtmb3IoZD0wO2s9bltzK2QrK10sci5oZWFkJiZrJiZyLmxlbmd0aDw2NTUzNiYmKHIuaGVhZC5jb21tZW50Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKGspKSxrJiZkPG87KTtpZig1MTImci5mbGFncyYmKHIuY2hlY2s9QihyLmNoZWNrLG4sZCxzKSksby09ZCxzKz1kLGspYnJlYWsgZX1lbHNlIHIuaGVhZCYmKHIuaGVhZC5jb21tZW50PW51bGwpO3IubW9kZT05O2Nhc2UgOTppZig1MTImci5mbGFncyl7Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYodSE9PSg2NTUzNSZyLmNoZWNrKSl7ZS5tc2c9XCJoZWFkZXIgY3JjIG1pc21hdGNoXCIsci5tb2RlPTMwO2JyZWFrfWw9dT0wfXIuaGVhZCYmKHIuaGVhZC5oY3JjPXIuZmxhZ3M+PjkmMSxyLmhlYWQuZG9uZT0hMCksZS5hZGxlcj1yLmNoZWNrPTAsci5tb2RlPTEyO2JyZWFrO2Nhc2UgMTA6Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9ZS5hZGxlcj1yLmNoZWNrPUwodSksbD11PTAsci5tb2RlPTExO2Nhc2UgMTE6aWYoMD09PXIuaGF2ZWRpY3QpcmV0dXJuIGUubmV4dF9vdXQ9YSxlLmF2YWlsX291dD1oLGUubmV4dF9pbj1zLGUuYXZhaWxfaW49byxyLmhvbGQ9dSxyLmJpdHM9bCwyO2UuYWRsZXI9ci5jaGVjaz0xLHIubW9kZT0xMjtjYXNlIDEyOmlmKDU9PT10fHw2PT09dClicmVhayBlO2Nhc2UgMTM6aWYoci5sYXN0KXt1Pj4+PTcmbCxsLT03Jmwsci5tb2RlPTI3O2JyZWFrfWZvcig7bDwzOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9c3dpdGNoKHIubGFzdD0xJnUsbC09MSwzJih1Pj4+PTEpKXtjYXNlIDA6ci5tb2RlPTE0O2JyZWFrO2Nhc2UgMTppZihqKHIpLHIubW9kZT0yMCw2IT09dClicmVhazt1Pj4+PTIsbC09MjticmVhayBlO2Nhc2UgMjpyLm1vZGU9MTc7YnJlYWs7Y2FzZSAzOmUubXNnPVwiaW52YWxpZCBibG9jayB0eXBlXCIsci5tb2RlPTMwfXU+Pj49MixsLT0yO2JyZWFrO2Nhc2UgMTQ6Zm9yKHU+Pj49NyZsLGwtPTcmbDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoKDY1NTM1JnUpIT0odT4+PjE2XjY1NTM1KSl7ZS5tc2c9XCJpbnZhbGlkIHN0b3JlZCBibG9jayBsZW5ndGhzXCIsci5tb2RlPTMwO2JyZWFrfWlmKHIubGVuZ3RoPTY1NTM1JnUsbD11PTAsci5tb2RlPTE1LDY9PT10KWJyZWFrIGU7Y2FzZSAxNTpyLm1vZGU9MTY7Y2FzZSAxNjppZihkPXIubGVuZ3RoKXtpZihvPGQmJihkPW8pLGg8ZCYmKGQ9aCksMD09PWQpYnJlYWsgZTtJLmFycmF5U2V0KGksbixzLGQsYSksby09ZCxzKz1kLGgtPWQsYSs9ZCxyLmxlbmd0aC09ZDticmVha31yLm1vZGU9MTI7YnJlYWs7Y2FzZSAxNzpmb3IoO2w8MTQ7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZihyLm5sZW49MjU3KygzMSZ1KSx1Pj4+PTUsbC09NSxyLm5kaXN0PTErKDMxJnUpLHU+Pj49NSxsLT01LHIubmNvZGU9NCsoMTUmdSksdT4+Pj00LGwtPTQsMjg2PHIubmxlbnx8MzA8ci5uZGlzdCl7ZS5tc2c9XCJ0b28gbWFueSBsZW5ndGggb3IgZGlzdGFuY2Ugc3ltYm9sc1wiLHIubW9kZT0zMDticmVha31yLmhhdmU9MCxyLm1vZGU9MTg7Y2FzZSAxODpmb3IoO3IuaGF2ZTxyLm5jb2RlOyl7Zm9yKDtsPDM7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1yLmxlbnNbQVtyLmhhdmUrK11dPTcmdSx1Pj4+PTMsbC09M31mb3IoO3IuaGF2ZTwxOTspci5sZW5zW0Fbci5oYXZlKytdXT0wO2lmKHIubGVuY29kZT1yLmxlbmR5bixyLmxlbmJpdHM9NyxTPXtiaXRzOnIubGVuYml0c30seD1UKDAsci5sZW5zLDAsMTksci5sZW5jb2RlLDAsci53b3JrLFMpLHIubGVuYml0cz1TLmJpdHMseCl7ZS5tc2c9XCJpbnZhbGlkIGNvZGUgbGVuZ3RocyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9ci5oYXZlPTAsci5tb2RlPTE5O2Nhc2UgMTk6Zm9yKDtyLmhhdmU8ci5ubGVuK3IubmRpc3Q7KXtmb3IoO2c9KEM9ci5sZW5jb2RlW3UmKDE8PHIubGVuYml0cyktMV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKChfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoYjwxNil1Pj4+PV8sbC09XyxyLmxlbnNbci5oYXZlKytdPWI7ZWxzZXtpZigxNj09PWIpe2Zvcih6PV8rMjtsPHo7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZih1Pj4+PV8sbC09XywwPT09ci5oYXZlKXtlLm1zZz1cImludmFsaWQgYml0IGxlbmd0aCByZXBlYXRcIixyLm1vZGU9MzA7YnJlYWt9az1yLmxlbnNbci5oYXZlLTFdLGQ9MysoMyZ1KSx1Pj4+PTIsbC09Mn1lbHNlIGlmKDE3PT09Yil7Zm9yKHo9XyszO2w8ejspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWwtPV8saz0wLGQ9MysoNyYodT4+Pj1fKSksdT4+Pj0zLGwtPTN9ZWxzZXtmb3Ioej1fKzc7bDx6Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9bC09XyxrPTAsZD0xMSsoMTI3Jih1Pj4+PV8pKSx1Pj4+PTcsbC09N31pZihyLmhhdmUrZD5yLm5sZW4rci5uZGlzdCl7ZS5tc2c9XCJpbnZhbGlkIGJpdCBsZW5ndGggcmVwZWF0XCIsci5tb2RlPTMwO2JyZWFrfWZvcig7ZC0tOylyLmxlbnNbci5oYXZlKytdPWt9fWlmKDMwPT09ci5tb2RlKWJyZWFrO2lmKDA9PT1yLmxlbnNbMjU2XSl7ZS5tc2c9XCJpbnZhbGlkIGNvZGUgLS0gbWlzc2luZyBlbmQtb2YtYmxvY2tcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5sZW5iaXRzPTksUz17Yml0czpyLmxlbmJpdHN9LHg9VChELHIubGVucywwLHIubmxlbixyLmxlbmNvZGUsMCxyLndvcmssUyksci5sZW5iaXRzPVMuYml0cyx4KXtlLm1zZz1cImludmFsaWQgbGl0ZXJhbC9sZW5ndGhzIHNldFwiLHIubW9kZT0zMDticmVha31pZihyLmRpc3RiaXRzPTYsci5kaXN0Y29kZT1yLmRpc3RkeW4sUz17Yml0czpyLmRpc3RiaXRzfSx4PVQoRixyLmxlbnMsci5ubGVuLHIubmRpc3Qsci5kaXN0Y29kZSwwLHIud29yayxTKSxyLmRpc3RiaXRzPVMuYml0cyx4KXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2VzIHNldFwiLHIubW9kZT0zMDticmVha31pZihyLm1vZGU9MjAsNj09PXQpYnJlYWsgZTtjYXNlIDIwOnIubW9kZT0yMTtjYXNlIDIxOmlmKDY8PW8mJjI1ODw9aCl7ZS5uZXh0X291dD1hLGUuYXZhaWxfb3V0PWgsZS5uZXh0X2luPXMsZS5hdmFpbF9pbj1vLHIuaG9sZD11LHIuYml0cz1sLFIoZSxjKSxhPWUubmV4dF9vdXQsaT1lLm91dHB1dCxoPWUuYXZhaWxfb3V0LHM9ZS5uZXh0X2luLG49ZS5pbnB1dCxvPWUuYXZhaWxfaW4sdT1yLmhvbGQsbD1yLmJpdHMsMTI9PT1yLm1vZGUmJihyLmJhY2s9LTEpO2JyZWFrfWZvcihyLmJhY2s9MDtnPShDPXIubGVuY29kZVt1JigxPDxyLmxlbmJpdHMpLTFdKT4+PjE2JjI1NSxiPTY1NTM1JkMsISgoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKGcmJjA9PSgyNDAmZykpe2Zvcih2PV8seT1nLHc9YjtnPShDPXIubGVuY29kZVt3KygodSYoMTw8dit5KS0xKT4+dildKT4+PjE2JjI1NSxiPTY1NTM1JkMsISh2KyhfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9dT4+Pj12LGwtPXYsci5iYWNrKz12fWlmKHU+Pj49XyxsLT1fLHIuYmFjays9XyxyLmxlbmd0aD1iLDA9PT1nKXtyLm1vZGU9MjY7YnJlYWt9aWYoMzImZyl7ci5iYWNrPS0xLHIubW9kZT0xMjticmVha31pZig2NCZnKXtlLm1zZz1cImludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZVwiLHIubW9kZT0zMDticmVha31yLmV4dHJhPTE1Jmcsci5tb2RlPTIyO2Nhc2UgMjI6aWYoci5leHRyYSl7Zm9yKHo9ci5leHRyYTtsPHo7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1yLmxlbmd0aCs9dSYoMTw8ci5leHRyYSktMSx1Pj4+PXIuZXh0cmEsbC09ci5leHRyYSxyLmJhY2srPXIuZXh0cmF9ci53YXM9ci5sZW5ndGgsci5tb2RlPTIzO2Nhc2UgMjM6Zm9yKDtnPShDPXIuZGlzdGNvZGVbdSYoMTw8ci5kaXN0Yml0cyktMV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKChfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoMD09KDI0MCZnKSl7Zm9yKHY9Xyx5PWcsdz1iO2c9KEM9ci5kaXN0Y29kZVt3KygodSYoMTw8dit5KS0xKT4+dildKT4+PjE2JjI1NSxiPTY1NTM1JkMsISh2KyhfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9dT4+Pj12LGwtPXYsci5iYWNrKz12fWlmKHU+Pj49XyxsLT1fLHIuYmFjays9Xyw2NCZnKXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2UgY29kZVwiLHIubW9kZT0zMDticmVha31yLm9mZnNldD1iLHIuZXh0cmE9MTUmZyxyLm1vZGU9MjQ7Y2FzZSAyNDppZihyLmV4dHJhKXtmb3Ioej1yLmV4dHJhO2w8ejspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIub2Zmc2V0Kz11JigxPDxyLmV4dHJhKS0xLHU+Pj49ci5leHRyYSxsLT1yLmV4dHJhLHIuYmFjays9ci5leHRyYX1pZihyLm9mZnNldD5yLmRtYXgpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWt9ci5tb2RlPTI1O2Nhc2UgMjU6aWYoMD09PWgpYnJlYWsgZTtpZihkPWMtaCxyLm9mZnNldD5kKXtpZigoZD1yLm9mZnNldC1kKT5yLndoYXZlJiZyLnNhbmUpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWt9cD1kPnIud25leHQ/KGQtPXIud25leHQsci53c2l6ZS1kKTpyLnduZXh0LWQsZD5yLmxlbmd0aCYmKGQ9ci5sZW5ndGgpLG09ci53aW5kb3d9ZWxzZSBtPWkscD1hLXIub2Zmc2V0LGQ9ci5sZW5ndGg7Zm9yKGg8ZCYmKGQ9aCksaC09ZCxyLmxlbmd0aC09ZDtpW2ErK109bVtwKytdLC0tZDspOzA9PT1yLmxlbmd0aCYmKHIubW9kZT0yMSk7YnJlYWs7Y2FzZSAyNjppZigwPT09aClicmVhayBlO2lbYSsrXT1yLmxlbmd0aCxoLS0sci5tb2RlPTIxO2JyZWFrO2Nhc2UgMjc6aWYoci53cmFwKXtmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayBlO28tLSx1fD1uW3MrK108PGwsbCs9OH1pZihjLT1oLGUudG90YWxfb3V0Kz1jLHIudG90YWwrPWMsYyYmKGUuYWRsZXI9ci5jaGVjaz1yLmZsYWdzP0Ioci5jaGVjayxpLGMsYS1jKTpPKHIuY2hlY2ssaSxjLGEtYykpLGM9aCwoci5mbGFncz91OkwodSkpIT09ci5jaGVjayl7ZS5tc2c9XCJpbmNvcnJlY3QgZGF0YSBjaGVja1wiLHIubW9kZT0zMDticmVha31sPXU9MH1yLm1vZGU9Mjg7Y2FzZSAyODppZihyLndyYXAmJnIuZmxhZ3Mpe2Zvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKHUhPT0oNDI5NDk2NzI5NSZyLnRvdGFsKSl7ZS5tc2c9XCJpbmNvcnJlY3QgbGVuZ3RoIGNoZWNrXCIsci5tb2RlPTMwO2JyZWFrfWw9dT0wfXIubW9kZT0yOTtjYXNlIDI5Ong9MTticmVhayBlO2Nhc2UgMzA6eD0tMzticmVhayBlO2Nhc2UgMzE6cmV0dXJuLTQ7Y2FzZSAzMjpkZWZhdWx0OnJldHVybiBVfXJldHVybiBlLm5leHRfb3V0PWEsZS5hdmFpbF9vdXQ9aCxlLm5leHRfaW49cyxlLmF2YWlsX2luPW8sci5ob2xkPXUsci5iaXRzPWwsKHIud3NpemV8fGMhPT1lLmF2YWlsX291dCYmci5tb2RlPDMwJiYoci5tb2RlPDI3fHw0IT09dCkpJiZaKGUsZS5vdXRwdXQsZS5uZXh0X291dCxjLWUuYXZhaWxfb3V0KT8oci5tb2RlPTMxLC00KTooZi09ZS5hdmFpbF9pbixjLT1lLmF2YWlsX291dCxlLnRvdGFsX2luKz1mLGUudG90YWxfb3V0Kz1jLHIudG90YWwrPWMsci53cmFwJiZjJiYoZS5hZGxlcj1yLmNoZWNrPXIuZmxhZ3M/QihyLmNoZWNrLGksYyxlLm5leHRfb3V0LWMpOk8oci5jaGVjayxpLGMsZS5uZXh0X291dC1jKSksZS5kYXRhX3R5cGU9ci5iaXRzKyhyLmxhc3Q/NjQ6MCkrKDEyPT09ci5tb2RlPzEyODowKSsoMjA9PT1yLm1vZGV8fDE1PT09ci5tb2RlPzI1NjowKSwoMD09ZiYmMD09PWN8fDQ9PT10KSYmeD09PU4mJih4PS01KSx4KX0sci5pbmZsYXRlRW5kPWZ1bmN0aW9uKGUpe2lmKCFlfHwhZS5zdGF0ZSlyZXR1cm4gVTt2YXIgdD1lLnN0YXRlO3JldHVybiB0LndpbmRvdyYmKHQud2luZG93PW51bGwpLGUuc3RhdGU9bnVsbCxOfSxyLmluZmxhdGVHZXRIZWFkZXI9ZnVuY3Rpb24oZSx0KXt2YXIgcjtyZXR1cm4gZSYmZS5zdGF0ZT8wPT0oMiYocj1lLnN0YXRlKS53cmFwKT9VOigoci5oZWFkPXQpLmRvbmU9ITEsTik6VX0sci5pbmZsYXRlU2V0RGljdGlvbmFyeT1mdW5jdGlvbihlLHQpe3ZhciByLG49dC5sZW5ndGg7cmV0dXJuIGUmJmUuc3RhdGU/MCE9PShyPWUuc3RhdGUpLndyYXAmJjExIT09ci5tb2RlP1U6MTE9PT1yLm1vZGUmJk8oMSx0LG4sMCkhPT1yLmNoZWNrPy0zOlooZSx0LG4sbik/KHIubW9kZT0zMSwtNCk6KHIuaGF2ZWRpY3Q9MSxOKTpVfSxyLmluZmxhdGVJbmZvPVwicGFrbyBpbmZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KVwifSx7XCIuLi91dGlscy9jb21tb25cIjo0MSxcIi4vYWRsZXIzMlwiOjQzLFwiLi9jcmMzMlwiOjQ1LFwiLi9pbmZmYXN0XCI6NDgsXCIuL2luZnRyZWVzXCI6NTB9XSw1MDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBEPWUoXCIuLi91dGlscy9jb21tb25cIiksRj1bMyw0LDUsNiw3LDgsOSwxMCwxMSwxMywxNSwxNywxOSwyMywyNywzMSwzNSw0Myw1MSw1OSw2Nyw4Myw5OSwxMTUsMTMxLDE2MywxOTUsMjI3LDI1OCwwLDBdLE49WzE2LDE2LDE2LDE2LDE2LDE2LDE2LDE2LDE3LDE3LDE3LDE3LDE4LDE4LDE4LDE4LDE5LDE5LDE5LDE5LDIwLDIwLDIwLDIwLDIxLDIxLDIxLDIxLDE2LDcyLDc4XSxVPVsxLDIsMyw0LDUsNyw5LDEzLDE3LDI1LDMzLDQ5LDY1LDk3LDEyOSwxOTMsMjU3LDM4NSw1MTMsNzY5LDEwMjUsMTUzNywyMDQ5LDMwNzMsNDA5Nyw2MTQ1LDgxOTMsMTIyODksMTYzODUsMjQ1NzcsMCwwXSxQPVsxNiwxNiwxNiwxNiwxNywxNywxOCwxOCwxOSwxOSwyMCwyMCwyMSwyMSwyMiwyMiwyMywyMywyNCwyNCwyNSwyNSwyNiwyNiwyNywyNywyOCwyOCwyOSwyOSw2NCw2NF07dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyLG4saSxzLGEsbyl7dmFyIGgsdSxsLGYsYyxkLHAsbSxfLGc9by5iaXRzLGI9MCx2PTAseT0wLHc9MCxrPTAseD0wLFM9MCx6PTAsQz0wLEU9MCxBPW51bGwsST0wLE89bmV3IEQuQnVmMTYoMTYpLEI9bmV3IEQuQnVmMTYoMTYpLFI9bnVsbCxUPTA7Zm9yKGI9MDtiPD0xNTtiKyspT1tiXT0wO2Zvcih2PTA7djxuO3YrKylPW3Rbcit2XV0rKztmb3Ioaz1nLHc9MTU7MTw9dyYmMD09PU9bd107dy0tKTtpZih3PGsmJihrPXcpLDA9PT13KXJldHVybiBpW3MrK109MjA5NzE1MjAsaVtzKytdPTIwOTcxNTIwLG8uYml0cz0xLDA7Zm9yKHk9MTt5PHcmJjA9PT1PW3ldO3krKyk7Zm9yKGs8eSYmKGs9eSksYj16PTE7Yjw9MTU7YisrKWlmKHo8PD0xLCh6LT1PW2JdKTwwKXJldHVybi0xO2lmKDA8eiYmKDA9PT1lfHwxIT09dykpcmV0dXJuLTE7Zm9yKEJbMV09MCxiPTE7YjwxNTtiKyspQltiKzFdPUJbYl0rT1tiXTtmb3Iodj0wO3Y8bjt2KyspMCE9PXRbcit2XSYmKGFbQlt0W3Irdl1dKytdPXYpO2lmKGQ9MD09PWU/KEE9Uj1hLDE5KToxPT09ZT8oQT1GLEktPTI1NyxSPU4sVC09MjU3LDI1Nik6KEE9VSxSPVAsLTEpLGI9eSxjPXMsUz12PUU9MCxsPS0xLGY9KEM9MTw8KHg9aykpLTEsMT09PWUmJjg1MjxDfHwyPT09ZSYmNTkyPEMpcmV0dXJuIDE7Zm9yKDs7KXtmb3IocD1iLVMsXz1hW3ZdPGQ/KG09MCxhW3ZdKTphW3ZdPmQ/KG09UltUK2Fbdl1dLEFbSSthW3ZdXSk6KG09OTYsMCksaD0xPDxiLVMseT11PTE8PHg7aVtjKyhFPj5TKSsodS09aCldPXA8PDI0fG08PDE2fF98MCwwIT09dTspO2ZvcihoPTE8PGItMTtFJmg7KWg+Pj0xO2lmKDAhPT1oPyhFJj1oLTEsRSs9aCk6RT0wLHYrKywwPT0tLU9bYl0pe2lmKGI9PT13KWJyZWFrO2I9dFtyK2Fbdl1dfWlmKGs8YiYmKEUmZikhPT1sKXtmb3IoMD09PVMmJihTPWspLGMrPXksej0xPDwoeD1iLVMpO3grUzx3JiYhKCh6LT1PW3grU10pPD0wKTspeCsrLHo8PD0xO2lmKEMrPTE8PHgsMT09PWUmJjg1MjxDfHwyPT09ZSYmNTkyPEMpcmV0dXJuIDE7aVtsPUUmZl09azw8MjR8eDw8MTZ8Yy1zfDB9fXJldHVybiAwIT09RSYmKGlbYytFXT1iLVM8PDI0fDY0PDwxNnwwKSxvLmJpdHM9aywwfX0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDF9XSw1MTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17MjpcIm5lZWQgZGljdGlvbmFyeVwiLDE6XCJzdHJlYW0gZW5kXCIsMDpcIlwiLFwiLTFcIjpcImZpbGUgZXJyb3JcIixcIi0yXCI6XCJzdHJlYW0gZXJyb3JcIixcIi0zXCI6XCJkYXRhIGVycm9yXCIsXCItNFwiOlwiaW5zdWZmaWNpZW50IG1lbW9yeVwiLFwiLTVcIjpcImJ1ZmZlciBlcnJvclwiLFwiLTZcIjpcImluY29tcGF0aWJsZSB2ZXJzaW9uXCJ9fSx7fV0sNTI6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1lKFwiLi4vdXRpbHMvY29tbW9uXCIpLG89MCxoPTE7ZnVuY3Rpb24gbihlKXtmb3IodmFyIHQ9ZS5sZW5ndGg7MDw9LS10OyllW3RdPTB9dmFyIHM9MCxhPTI5LHU9MjU2LGw9dSsxK2EsZj0zMCxjPTE5LF89MipsKzEsZz0xNSxkPTE2LHA9NyxtPTI1NixiPTE2LHY9MTcseT0xOCx3PVswLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwyLDIsMiwyLDMsMywzLDMsNCw0LDQsNCw1LDUsNSw1LDBdLGs9WzAsMCwwLDAsMSwxLDIsMiwzLDMsNCw0LDUsNSw2LDYsNyw3LDgsOCw5LDksMTAsMTAsMTEsMTEsMTIsMTIsMTMsMTNdLHg9WzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMiwzLDddLFM9WzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdLHo9bmV3IEFycmF5KDIqKGwrMikpO24oeik7dmFyIEM9bmV3IEFycmF5KDIqZik7bihDKTt2YXIgRT1uZXcgQXJyYXkoNTEyKTtuKEUpO3ZhciBBPW5ldyBBcnJheSgyNTYpO24oQSk7dmFyIEk9bmV3IEFycmF5KGEpO24oSSk7dmFyIE8sQixSLFQ9bmV3IEFycmF5KGYpO2Z1bmN0aW9uIEQoZSx0LHIsbixpKXt0aGlzLnN0YXRpY190cmVlPWUsdGhpcy5leHRyYV9iaXRzPXQsdGhpcy5leHRyYV9iYXNlPXIsdGhpcy5lbGVtcz1uLHRoaXMubWF4X2xlbmd0aD1pLHRoaXMuaGFzX3N0cmVlPWUmJmUubGVuZ3RofWZ1bmN0aW9uIEYoZSx0KXt0aGlzLmR5bl90cmVlPWUsdGhpcy5tYXhfY29kZT0wLHRoaXMuc3RhdF9kZXNjPXR9ZnVuY3Rpb24gTihlKXtyZXR1cm4gZTwyNTY/RVtlXTpFWzI1NisoZT4+PjcpXX1mdW5jdGlvbiBVKGUsdCl7ZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109MjU1JnQsZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109dD4+PjgmMjU1fWZ1bmN0aW9uIFAoZSx0LHIpe2UuYmlfdmFsaWQ+ZC1yPyhlLmJpX2J1Znw9dDw8ZS5iaV92YWxpZCY2NTUzNSxVKGUsZS5iaV9idWYpLGUuYmlfYnVmPXQ+PmQtZS5iaV92YWxpZCxlLmJpX3ZhbGlkKz1yLWQpOihlLmJpX2J1Znw9dDw8ZS5iaV92YWxpZCY2NTUzNSxlLmJpX3ZhbGlkKz1yKX1mdW5jdGlvbiBMKGUsdCxyKXtQKGUsclsyKnRdLHJbMip0KzFdKX1mdW5jdGlvbiBqKGUsdCl7Zm9yKHZhciByPTA7cnw9MSZlLGU+Pj49MSxyPDw9MSwwPC0tdDspO3JldHVybiByPj4+MX1mdW5jdGlvbiBaKGUsdCxyKXt2YXIgbixpLHM9bmV3IEFycmF5KGcrMSksYT0wO2ZvcihuPTE7bjw9ZztuKyspc1tuXT1hPWErcltuLTFdPDwxO2ZvcihpPTA7aTw9dDtpKyspe3ZhciBvPWVbMippKzFdOzAhPT1vJiYoZVsyKmldPWooc1tvXSsrLG8pKX19ZnVuY3Rpb24gVyhlKXt2YXIgdDtmb3IodD0wO3Q8bDt0KyspZS5keW5fbHRyZWVbMip0XT0wO2Zvcih0PTA7dDxmO3QrKyllLmR5bl9kdHJlZVsyKnRdPTA7Zm9yKHQ9MDt0PGM7dCsrKWUuYmxfdHJlZVsyKnRdPTA7ZS5keW5fbHRyZWVbMiptXT0xLGUub3B0X2xlbj1lLnN0YXRpY19sZW49MCxlLmxhc3RfbGl0PWUubWF0Y2hlcz0wfWZ1bmN0aW9uIE0oZSl7ODxlLmJpX3ZhbGlkP1UoZSxlLmJpX2J1Zik6MDxlLmJpX3ZhbGlkJiYoZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109ZS5iaV9idWYpLGUuYmlfYnVmPTAsZS5iaV92YWxpZD0wfWZ1bmN0aW9uIEgoZSx0LHIsbil7dmFyIGk9Mip0LHM9MipyO3JldHVybiBlW2ldPGVbc118fGVbaV09PT1lW3NdJiZuW3RdPD1uW3JdfWZ1bmN0aW9uIEcoZSx0LHIpe2Zvcih2YXIgbj1lLmhlYXBbcl0saT1yPDwxO2k8PWUuaGVhcF9sZW4mJihpPGUuaGVhcF9sZW4mJkgodCxlLmhlYXBbaSsxXSxlLmhlYXBbaV0sZS5kZXB0aCkmJmkrKywhSCh0LG4sZS5oZWFwW2ldLGUuZGVwdGgpKTspZS5oZWFwW3JdPWUuaGVhcFtpXSxyPWksaTw8PTE7ZS5oZWFwW3JdPW59ZnVuY3Rpb24gSyhlLHQscil7dmFyIG4saSxzLGEsbz0wO2lmKDAhPT1lLmxhc3RfbGl0KWZvcig7bj1lLnBlbmRpbmdfYnVmW2UuZF9idWYrMipvXTw8OHxlLnBlbmRpbmdfYnVmW2UuZF9idWYrMipvKzFdLGk9ZS5wZW5kaW5nX2J1ZltlLmxfYnVmK29dLG8rKywwPT09bj9MKGUsaSx0KTooTChlLChzPUFbaV0pK3UrMSx0KSwwIT09KGE9d1tzXSkmJlAoZSxpLT1JW3NdLGEpLEwoZSxzPU4oLS1uKSxyKSwwIT09KGE9a1tzXSkmJlAoZSxuLT1UW3NdLGEpKSxvPGUubGFzdF9saXQ7KTtMKGUsbSx0KX1mdW5jdGlvbiBZKGUsdCl7dmFyIHIsbixpLHM9dC5keW5fdHJlZSxhPXQuc3RhdF9kZXNjLnN0YXRpY190cmVlLG89dC5zdGF0X2Rlc2MuaGFzX3N0cmVlLGg9dC5zdGF0X2Rlc2MuZWxlbXMsdT0tMTtmb3IoZS5oZWFwX2xlbj0wLGUuaGVhcF9tYXg9XyxyPTA7cjxoO3IrKykwIT09c1syKnJdPyhlLmhlYXBbKytlLmhlYXBfbGVuXT11PXIsZS5kZXB0aFtyXT0wKTpzWzIqcisxXT0wO2Zvcig7ZS5oZWFwX2xlbjwyOylzWzIqKGk9ZS5oZWFwWysrZS5oZWFwX2xlbl09dTwyPysrdTowKV09MSxlLmRlcHRoW2ldPTAsZS5vcHRfbGVuLS0sbyYmKGUuc3RhdGljX2xlbi09YVsyKmkrMV0pO2Zvcih0Lm1heF9jb2RlPXUscj1lLmhlYXBfbGVuPj4xOzE8PXI7ci0tKUcoZSxzLHIpO2ZvcihpPWg7cj1lLmhlYXBbMV0sZS5oZWFwWzFdPWUuaGVhcFtlLmhlYXBfbGVuLS1dLEcoZSxzLDEpLG49ZS5oZWFwWzFdLGUuaGVhcFstLWUuaGVhcF9tYXhdPXIsZS5oZWFwWy0tZS5oZWFwX21heF09bixzWzIqaV09c1syKnJdK3NbMipuXSxlLmRlcHRoW2ldPShlLmRlcHRoW3JdPj1lLmRlcHRoW25dP2UuZGVwdGhbcl06ZS5kZXB0aFtuXSkrMSxzWzIqcisxXT1zWzIqbisxXT1pLGUuaGVhcFsxXT1pKyssRyhlLHMsMSksMjw9ZS5oZWFwX2xlbjspO2UuaGVhcFstLWUuaGVhcF9tYXhdPWUuaGVhcFsxXSxmdW5jdGlvbihlLHQpe3ZhciByLG4saSxzLGEsbyxoPXQuZHluX3RyZWUsdT10Lm1heF9jb2RlLGw9dC5zdGF0X2Rlc2Muc3RhdGljX3RyZWUsZj10LnN0YXRfZGVzYy5oYXNfc3RyZWUsYz10LnN0YXRfZGVzYy5leHRyYV9iaXRzLGQ9dC5zdGF0X2Rlc2MuZXh0cmFfYmFzZSxwPXQuc3RhdF9kZXNjLm1heF9sZW5ndGgsbT0wO2ZvcihzPTA7czw9ZztzKyspZS5ibF9jb3VudFtzXT0wO2ZvcihoWzIqZS5oZWFwW2UuaGVhcF9tYXhdKzFdPTAscj1lLmhlYXBfbWF4KzE7cjxfO3IrKylwPChzPWhbMipoWzIqKG49ZS5oZWFwW3JdKSsxXSsxXSsxKSYmKHM9cCxtKyspLGhbMipuKzFdPXMsdTxufHwoZS5ibF9jb3VudFtzXSsrLGE9MCxkPD1uJiYoYT1jW24tZF0pLG89aFsyKm5dLGUub3B0X2xlbis9byoocythKSxmJiYoZS5zdGF0aWNfbGVuKz1vKihsWzIqbisxXSthKSkpO2lmKDAhPT1tKXtkb3tmb3Iocz1wLTE7MD09PWUuYmxfY291bnRbc107KXMtLTtlLmJsX2NvdW50W3NdLS0sZS5ibF9jb3VudFtzKzFdKz0yLGUuYmxfY291bnRbcF0tLSxtLT0yfXdoaWxlKDA8bSk7Zm9yKHM9cDswIT09cztzLS0pZm9yKG49ZS5ibF9jb3VudFtzXTswIT09bjspdTwoaT1lLmhlYXBbLS1yXSl8fChoWzIqaSsxXSE9PXMmJihlLm9wdF9sZW4rPShzLWhbMippKzFdKSpoWzIqaV0saFsyKmkrMV09cyksbi0tKX19KGUsdCksWihzLHUsZS5ibF9jb3VudCl9ZnVuY3Rpb24gWChlLHQscil7dmFyIG4saSxzPS0xLGE9dFsxXSxvPTAsaD03LHU9NDtmb3IoMD09PWEmJihoPTEzOCx1PTMpLHRbMioocisxKSsxXT02NTUzNSxuPTA7bjw9cjtuKyspaT1hLGE9dFsyKihuKzEpKzFdLCsrbzxoJiZpPT09YXx8KG88dT9lLmJsX3RyZWVbMippXSs9bzowIT09aT8oaSE9PXMmJmUuYmxfdHJlZVsyKmldKyssZS5ibF90cmVlWzIqYl0rKyk6bzw9MTA/ZS5ibF90cmVlWzIqdl0rKzplLmJsX3RyZWVbMip5XSsrLHM9aSx1PShvPTApPT09YT8oaD0xMzgsMyk6aT09PWE/KGg9NiwzKTooaD03LDQpKX1mdW5jdGlvbiBWKGUsdCxyKXt2YXIgbixpLHM9LTEsYT10WzFdLG89MCxoPTcsdT00O2ZvcigwPT09YSYmKGg9MTM4LHU9Myksbj0wO248PXI7bisrKWlmKGk9YSxhPXRbMioobisxKSsxXSwhKCsrbzxoJiZpPT09YSkpe2lmKG88dSlmb3IoO0woZSxpLGUuYmxfdHJlZSksMCE9LS1vOyk7ZWxzZSAwIT09aT8oaSE9PXMmJihMKGUsaSxlLmJsX3RyZWUpLG8tLSksTChlLGIsZS5ibF90cmVlKSxQKGUsby0zLDIpKTpvPD0xMD8oTChlLHYsZS5ibF90cmVlKSxQKGUsby0zLDMpKTooTChlLHksZS5ibF90cmVlKSxQKGUsby0xMSw3KSk7cz1pLHU9KG89MCk9PT1hPyhoPTEzOCwzKTppPT09YT8oaD02LDMpOihoPTcsNCl9fW4oVCk7dmFyIHE9ITE7ZnVuY3Rpb24gSihlLHQscixuKXtQKGUsKHM8PDEpKyhuPzE6MCksMyksZnVuY3Rpb24oZSx0LHIsbil7TShlKSxuJiYoVShlLHIpLFUoZSx+cikpLGkuYXJyYXlTZXQoZS5wZW5kaW5nX2J1ZixlLndpbmRvdyx0LHIsZS5wZW5kaW5nKSxlLnBlbmRpbmcrPXJ9KGUsdCxyLCEwKX1yLl90cl9pbml0PWZ1bmN0aW9uKGUpe3F8fChmdW5jdGlvbigpe3ZhciBlLHQscixuLGkscz1uZXcgQXJyYXkoZysxKTtmb3Iobj1yPTA7bjxhLTE7bisrKWZvcihJW25dPXIsZT0wO2U8MTw8d1tuXTtlKyspQVtyKytdPW47Zm9yKEFbci0xXT1uLG49aT0wO248MTY7bisrKWZvcihUW25dPWksZT0wO2U8MTw8a1tuXTtlKyspRVtpKytdPW47Zm9yKGk+Pj03O248ZjtuKyspZm9yKFRbbl09aTw8NyxlPTA7ZTwxPDxrW25dLTc7ZSsrKUVbMjU2K2krK109bjtmb3IodD0wO3Q8PWc7dCsrKXNbdF09MDtmb3IoZT0wO2U8PTE0MzspelsyKmUrMV09OCxlKyssc1s4XSsrO2Zvcig7ZTw9MjU1Oyl6WzIqZSsxXT05LGUrKyxzWzldKys7Zm9yKDtlPD0yNzk7KXpbMiplKzFdPTcsZSsrLHNbN10rKztmb3IoO2U8PTI4NzspelsyKmUrMV09OCxlKyssc1s4XSsrO2ZvcihaKHosbCsxLHMpLGU9MDtlPGY7ZSsrKUNbMiplKzFdPTUsQ1syKmVdPWooZSw1KTtPPW5ldyBEKHosdyx1KzEsbCxnKSxCPW5ldyBEKEMsaywwLGYsZyksUj1uZXcgRChuZXcgQXJyYXkoMCkseCwwLGMscCl9KCkscT0hMCksZS5sX2Rlc2M9bmV3IEYoZS5keW5fbHRyZWUsTyksZS5kX2Rlc2M9bmV3IEYoZS5keW5fZHRyZWUsQiksZS5ibF9kZXNjPW5ldyBGKGUuYmxfdHJlZSxSKSxlLmJpX2J1Zj0wLGUuYmlfdmFsaWQ9MCxXKGUpfSxyLl90cl9zdG9yZWRfYmxvY2s9SixyLl90cl9mbHVzaF9ibG9jaz1mdW5jdGlvbihlLHQscixuKXt2YXIgaSxzLGE9MDswPGUubGV2ZWw/KDI9PT1lLnN0cm0uZGF0YV90eXBlJiYoZS5zdHJtLmRhdGFfdHlwZT1mdW5jdGlvbihlKXt2YXIgdCxyPTQwOTM2MjQ0NDc7Zm9yKHQ9MDt0PD0zMTt0Kysscj4+Pj0xKWlmKDEmciYmMCE9PWUuZHluX2x0cmVlWzIqdF0pcmV0dXJuIG87aWYoMCE9PWUuZHluX2x0cmVlWzE4XXx8MCE9PWUuZHluX2x0cmVlWzIwXXx8MCE9PWUuZHluX2x0cmVlWzI2XSlyZXR1cm4gaDtmb3IodD0zMjt0PHU7dCsrKWlmKDAhPT1lLmR5bl9sdHJlZVsyKnRdKXJldHVybiBoO3JldHVybiBvfShlKSksWShlLGUubF9kZXNjKSxZKGUsZS5kX2Rlc2MpLGE9ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKFgoZSxlLmR5bl9sdHJlZSxlLmxfZGVzYy5tYXhfY29kZSksWChlLGUuZHluX2R0cmVlLGUuZF9kZXNjLm1heF9jb2RlKSxZKGUsZS5ibF9kZXNjKSx0PWMtMTszPD10JiYwPT09ZS5ibF90cmVlWzIqU1t0XSsxXTt0LS0pO3JldHVybiBlLm9wdF9sZW4rPTMqKHQrMSkrNSs1KzQsdH0oZSksaT1lLm9wdF9sZW4rMys3Pj4+Mywocz1lLnN0YXRpY19sZW4rMys3Pj4+Myk8PWkmJihpPXMpKTppPXM9cis1LHIrNDw9aSYmLTEhPT10P0ooZSx0LHIsbik6ND09PWUuc3RyYXRlZ3l8fHM9PT1pPyhQKGUsMisobj8xOjApLDMpLEsoZSx6LEMpKTooUChlLDQrKG4/MTowKSwzKSxmdW5jdGlvbihlLHQscixuKXt2YXIgaTtmb3IoUChlLHQtMjU3LDUpLFAoZSxyLTEsNSksUChlLG4tNCw0KSxpPTA7aTxuO2krKylQKGUsZS5ibF90cmVlWzIqU1tpXSsxXSwzKTtWKGUsZS5keW5fbHRyZWUsdC0xKSxWKGUsZS5keW5fZHRyZWUsci0xKX0oZSxlLmxfZGVzYy5tYXhfY29kZSsxLGUuZF9kZXNjLm1heF9jb2RlKzEsYSsxKSxLKGUsZS5keW5fbHRyZWUsZS5keW5fZHRyZWUpKSxXKGUpLG4mJk0oZSl9LHIuX3RyX3RhbGx5PWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gZS5wZW5kaW5nX2J1ZltlLmRfYnVmKzIqZS5sYXN0X2xpdF09dD4+PjgmMjU1LGUucGVuZGluZ19idWZbZS5kX2J1ZisyKmUubGFzdF9saXQrMV09MjU1JnQsZS5wZW5kaW5nX2J1ZltlLmxfYnVmK2UubGFzdF9saXRdPTI1NSZyLGUubGFzdF9saXQrKywwPT09dD9lLmR5bl9sdHJlZVsyKnJdKys6KGUubWF0Y2hlcysrLHQtLSxlLmR5bl9sdHJlZVsyKihBW3JdK3UrMSldKyssZS5keW5fZHRyZWVbMipOKHQpXSsrKSxlLmxhc3RfbGl0PT09ZS5saXRfYnVmc2l6ZS0xfSxyLl90cl9hbGlnbj1mdW5jdGlvbihlKXtQKGUsMiwzKSxMKGUsbSx6KSxmdW5jdGlvbihlKXsxNj09PWUuYmlfdmFsaWQ/KFUoZSxlLmJpX2J1ZiksZS5iaV9idWY9MCxlLmJpX3ZhbGlkPTApOjg8PWUuYmlfdmFsaWQmJihlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT0yNTUmZS5iaV9idWYsZS5iaV9idWY+Pj04LGUuYmlfdmFsaWQtPTgpfShlKX19LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxfV0sNTM6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt0aGlzLmlucHV0PW51bGwsdGhpcy5uZXh0X2luPTAsdGhpcy5hdmFpbF9pbj0wLHRoaXMudG90YWxfaW49MCx0aGlzLm91dHB1dD1udWxsLHRoaXMubmV4dF9vdXQ9MCx0aGlzLmF2YWlsX291dD0wLHRoaXMudG90YWxfb3V0PTAsdGhpcy5tc2c9XCJcIix0aGlzLnN0YXRlPW51bGwsdGhpcy5kYXRhX3R5cGU9Mix0aGlzLmFkbGVyPTB9fSx7fV0sNTQ6W2Z1bmN0aW9uKGUsdCxyKXsoZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKHIsbil7XCJ1c2Ugc3RyaWN0XCI7aWYoIXIuc2V0SW1tZWRpYXRlKXt2YXIgaSxzLHQsYSxvPTEsaD17fSx1PSExLGw9ci5kb2N1bWVudCxlPU9iamVjdC5nZXRQcm90b3R5cGVPZiYmT2JqZWN0LmdldFByb3RvdHlwZU9mKHIpO2U9ZSYmZS5zZXRUaW1lb3V0P2U6cixpPVwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChyLnByb2Nlc3MpP2Z1bmN0aW9uKGUpe3Byb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKXtjKGUpfSl9OmZ1bmN0aW9uKCl7aWYoci5wb3N0TWVzc2FnZSYmIXIuaW1wb3J0U2NyaXB0cyl7dmFyIGU9ITAsdD1yLm9ubWVzc2FnZTtyZXR1cm4gci5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtlPSExfSxyLnBvc3RNZXNzYWdlKFwiXCIsXCIqXCIpLHIub25tZXNzYWdlPXQsZX19KCk/KGE9XCJzZXRJbW1lZGlhdGUkXCIrTWF0aC5yYW5kb20oKStcIiRcIixyLmFkZEV2ZW50TGlzdGVuZXI/ci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGQsITEpOnIuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixkKSxmdW5jdGlvbihlKXtyLnBvc3RNZXNzYWdlKGErZSxcIipcIil9KTpyLk1lc3NhZ2VDaGFubmVsPygodD1uZXcgTWVzc2FnZUNoYW5uZWwpLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbihlKXtjKGUuZGF0YSl9LGZ1bmN0aW9uKGUpe3QucG9ydDIucG9zdE1lc3NhZ2UoZSl9KTpsJiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gbC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpPyhzPWwuZG9jdW1lbnRFbGVtZW50LGZ1bmN0aW9uKGUpe3ZhciB0PWwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2MoZSksdC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxzLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH0scy5hcHBlbmRDaGlsZCh0KX0pOmZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoYywwLGUpfSxlLnNldEltbWVkaWF0ZT1mdW5jdGlvbihlKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiYoZT1uZXcgRnVuY3Rpb24oXCJcIitlKSk7Zm9yKHZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpLHI9MDtyPHQubGVuZ3RoO3IrKyl0W3JdPWFyZ3VtZW50c1tyKzFdO3ZhciBuPXtjYWxsYmFjazplLGFyZ3M6dH07cmV0dXJuIGhbb109bixpKG8pLG8rK30sZS5jbGVhckltbWVkaWF0ZT1mfWZ1bmN0aW9uIGYoZSl7ZGVsZXRlIGhbZV19ZnVuY3Rpb24gYyhlKXtpZih1KXNldFRpbWVvdXQoYywwLGUpO2Vsc2V7dmFyIHQ9aFtlXTtpZih0KXt1PSEwO3RyeXshZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jYWxsYmFjayxyPWUuYXJncztzd2l0Y2goci5sZW5ndGgpe2Nhc2UgMDp0KCk7YnJlYWs7Y2FzZSAxOnQoclswXSk7YnJlYWs7Y2FzZSAyOnQoclswXSxyWzFdKTticmVhaztjYXNlIDM6dChyWzBdLHJbMV0sclsyXSk7YnJlYWs7ZGVmYXVsdDp0LmFwcGx5KG4scil9fSh0KX1maW5hbGx5e2YoZSksdT0hMX19fX1mdW5jdGlvbiBkKGUpe2Uuc291cmNlPT09ciYmXCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmMD09PWUuZGF0YS5pbmRleE9mKGEpJiZjKCtlLmRhdGEuc2xpY2UoYS5sZW5ndGgpKX19KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP3ZvaWQgMD09PWU/dGhpczplOnNlbGYpfSkuY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30pfSx7fV19LHt9LFsxMF0pKDEwKX0pOyIsImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTU7XG5leHBvcnQgY29uc3QgZm9sZGVyX25hbWUgPSBgdXNlcl9pbnRlcmFjdGlvbl9kYXRhYDtcbmV4cG9ydCBjb25zdCB6aXAgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJztcbiIsImV4cG9ydCBjb25zdCBuYXYgPSB7XG4gICAgc2VsZWN0b3I6IFwiI25hdmJhci1tYWluXCIsXG4gICAgbmFtZTogXCJuYXZfYmFyXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiI25hdi1zZWFyY2gtYmFyLWZvcm1cIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94XCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2VhcmNoX2lucHV0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIiNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNlYXJjaF9idXR0b25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiI25hdi1saW5rLWFjY291bnRMaXN0XCIsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcIiNuYXYtbGluay1hY2NvdW50TGlzdCBzcGFuLm5hdi1saW5lLTJcIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogXCJhY2NvdW50X2FuZF9saXN0X2J1dHRvblwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCIjbmF2LW9yZGVyc1wiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiBcIm9yZGVyX2J1dHRvblwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCIjbmF2LWNhcnRcIixcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6IFwiI25hdi1jYXJ0IC5uYXYtbGluZS0yXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IFwiY2FydF9idXR0b25cIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydCBjb25zdCByZWZpbmVtZW50X29wdGlvbiA9IFtcbiAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcInNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dFwiLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgY2xhc3M6IFwicmVmaW5lbWVudC10aXRsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzZWxlY3RvcjogXCJ1bDpudGgtb2YtdHlwZSgxKSA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaTpoYXMoYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtKVwiLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJmcm9tX3RleHRcIixcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoXCJ0aXRsZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW1cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZShcInRpdGxlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwidWw6bnRoLW9mLXR5cGUoMSkgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBsaSA+IHNwYW4gPiBkaXZbZGF0YS1hLWV4cGFuZGVyLW5hbWU9J2ZpbHRlci1jb250ZW50LWV4cGFuZGVyJ11cIixcbiAgICAgICAgbmFtZTogXCJtb3JlX29wdGlvbnNcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJhW2RhdGEtY3NhLWMtZnVuYy1kZXBzPSdhdWktZGEtYS1leHBhbmRlci10b2dnbGUnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwidG9nZ2xlX2V4cGFuc2lvblwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZnJvbV90ZXh0XCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrX3NlbGVjdG9yOiBcImFcIixcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZShcInRpdGxlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCIgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImEuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoXCJ0aXRsZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZmFjdHMgPSB7XG4gICAgc2VsZWN0b3I6IFwiI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlclwiLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsYXNzOiBcInByb2R1Y3QtZmFjdHNcIixcbn07XG5leHBvcnQgY29uc3QgcHJvZHVjdF9kZWxpdmVyeSA9IHtcbiAgICBzZWxlY3RvcjogXCJkaXYubWlyLWxheW91dC1ERUxJVkVSWV9CTE9DSy1zbG90LVBSSU1BUllfREVMSVZFUllfTUVTU0FHRV9MQVJHRVwiLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsYXNzOiBcInByb2R1Y3QtZGVsaXZlcnlcIixcbn07XG5leHBvcnQgY29uc3QgcXVhbnRpdHlfc2VsZWN0b3IgPSB7XG4gICAgc2VsZWN0b3I6IFwiI3NlbGVjdFF1YW50aXR5XCIsXG4gICAgbmFtZTogXCJxdWFudGl0eV9zZWxlY3RvclwiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImxhYmVsXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwic2VsZWN0XCIsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiBcImRyb3BfZG93bl9saXN0XCIsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnQgY29uc3QgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yID0ge1xuICAgIHNlbGVjdG9yOiBcIiNyZXBsZW5pc2htZW50RnJlcXVlbmN5X2ZlYXR1cmVfZGl2XCIsXG4gICAgbmFtZTogXCJkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3JcIixcbiAgICB0ZXh0X3NlbGVjdG9yOiBcImRpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW1pY3JvID4gc3BhblwiLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIiNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc2VsZWN0XCIsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiBcImRyb3BfZG93bl9saXN0XCIsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnQgY29uc3Qgc2V0X3VwX25vd19idXR0b24gPSB7XG4gICAgc2VsZWN0b3I6IFwiI3JjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZVwiLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiBcInNldF91cF9ub3dcIixcbiAgICBjbGFzczogXCJwcm9kdWN0LXNldC11cC1ub3dcIixcbn07XG5leHBvcnQgY29uc3QgYWRkX3RvX2NhcnRfYnV0dG9uID0ge1xuICAgIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydCddLCBpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQtdWJiJ11cIixcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogXCJhZGRfdG9fY2FydFwiLFxuICAgIGNsYXNzOiBcInByb2R1Y3QtYWRkLXRvLWNhcnRcIixcbn07XG5leHBvcnQgY29uc3QgYnV5X25vd19idXR0b24gPSB7XG4gICAgc2VsZWN0b3I6IFwiaW5wdXRbbmFtZT0nc3VibWl0LmJ1eS1ub3cnXVwiLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiBcImJ1eV9ub3dcIixcbiAgICBjbGFzczogXCJwcm9kdWN0LWJ1eS1ub3dcIixcbn07XG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRoX2FjY29yZGlvbiA9IHtcbiAgICBzZWxlY3RvcjogXCIjYnV5Qm94QWNjb3JkaW9uID4gZGl2LmEtYm94LmNlbHdpZGdldFwiLFxuICAgIG5hbWU6IFwiZnJvbV90ZXh0XCIsXG4gICAgdGV4dF9zZWxlY3RvcjogXCJkaXYuYWNjb3JkaW9uLWNhcHRpb24gPiBzcGFuXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0nb2ZmZXJfZGlzcGxheV9kZXNrdG9wX2FjY29yZGlvbl9oZWFkZXInXVwiLFxuICAgICAgICAgICAgbmFtZTogXCJhY2NvcmRpb25fc2VsZWN0b3JcIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJoNSBzcGFuLmEtdGV4dC1ib2xkXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5hLWFjY29yZGlvbi1pbm5lci5hY2NvcmRpb24tcm93LWNvbnRlbnRcIixcbiAgICAgICAgICAgIG5hbWU6IFwicHVyY2hhc2VfZm9ybVwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgICAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHNldF91cF9ub3dfYnV0dG9uLFxuICAgICAgICAgICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5ID0ge1xuICAgIHNlbGVjdG9yOiBcIiNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9EZXNrdG9wXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiI2FkZFRvQ2FydFwiLFxuICAgICAgICAgICAgbmFtZTogXCJwdXJjaGFzZV9mb3JtXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgICAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwID0ge1xuICAgIHNlbGVjdG9yOiBcIiNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9ncm91cF8yX0Rlc2t0b3BcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCIjcGlja1VwT2ZmZXJEaXNwbGF5XCIsXG4gICAgICAgICAgICBuYW1lOiBcInB1cmNoYXNlX2Zvcm1cIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICAgICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICAgICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydCBjb25zdCBjYXJ0ID0gW1xuICAgIG5hdixcbiAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLW5hbWU9J0FjdGl2ZSBJdGVtcyddXCIsXG4gICAgICAgIG5hbWU6IFwiYWN0aXZlX2l0ZW1fbGlzdFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1saXN0LWl0ZW0tY29udGVudFwiLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZnJvbV90ZXh0XCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY2hlY2stY2hlY2tib3gtc2VsZWN0b3IgaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3RfZGV0YWlsXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlY3JlYXNlX3F1YW50aXR5X2J5X29uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogXCJDdXJyZW50IFF1YW50aXR5OiB7fVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgaW5wdXRbZGF0YS1hY3Rpb249J2RlbGV0ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgaW5wdXRbZGF0YS1hY3Rpb249J3NhdmUtZm9yLWxhdGVyJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzYXZlX2Zvcl9sYXRlclwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzZWxlY3RvcjogXCIjc2MtYnV5LWJveC1wdGMtYnV0dG9uIGlucHV0XCIsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIG5hbWU6IFwiY2hlY2tfb3V0XCIsXG4gICAgfSxcbl07XG5leHBvcnQgY29uc3QgcmVjaXBlcyA9IFtcbiAgICB7XG4gICAgICAgIG1hdGNoOiBcIi9cIixcbiAgICAgICAgbWF0Y2hfbWV0aG9kOiBcInVybFwiLFxuICAgICAgICBzZWxlY3RvcjogXCJodG1sXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaGVhZFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgbmF2LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogXCIvc1wiLFxuICAgICAgICBtYXRjaF9tZXRob2Q6IFwidXJsXCIsXG4gICAgICAgIHNlbGVjdG9yOiBcImh0bWxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJoZWFkXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIiNzLXJlZmluZW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlZmluZW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZTpub3QoOmhhcygjbi10aXRsZSkpOmhhcyhzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQpOmhhcyh1bCBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGkpOm5vdCgjcmV2aWV3c1JlZmluZW1lbnRzKTpub3QoI2RlcGFydG1lbnRzKTpub3QoI3ByaWNlUmVmaW5lbWVudHMpOm5vdCgjZmlsdGVycylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IHJlZmluZW1lbnRfb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCIjZGVwYXJ0bWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZXBhcnRtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZyb21fdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI3Jldmlld3NSZWZpbmVtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJldmlld3NfcmVmaW5lbWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zLW1haW4tc2xvdC5zLXJlc3VsdC1saXN0LnMtc2VhcmNoLXJlc3VsdHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2VhcmNoX3Jlc3VsdHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWNvbXBvbmVudC10eXBlPVwicy1zZWFyY2gtcmVzdWx0XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZnJvbV90ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInNlYXJjaC1yZXN1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicHJvZHVjdC1uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmlld19wcm9kdWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdyZXZpZXdzLWJsb2NrJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcm9kdWN0LXJldmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW4uYS1pY29uLWFsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcm9kdWN0LXJhdGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6IFwie30gcmV2aWV3c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicHJvZHVjdC1yYXRpbmctY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcm9kdWN0LXByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicHJvZHVjdC1kZWxpdmVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nYWRkLXRvLWNhcnQnXSBidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhZGRfdG9fY2FydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdzLXNlYXJjaC1zZWUtZGV0YWlscy1idXR0b24nXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2VlX29wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW4ucy1wYWdpbmF0aW9uLXN0cmlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhZ2luYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCIucy1wYWdpbmF0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZnJvbV90ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6IFwiI3Byb2R1Y3RUaXRsZVwiLFxuICAgICAgICBtYXRjaF90ZXh0OiBcIlwiLFxuICAgICAgICBzZWxlY3RvcjogXCJodG1sXCIsXG4gICAgICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gISFhcmd1bWVudHNbMF07IH0sXG4gICAgICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzWzBdOyB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImhlYWRcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI2NlbnRlckNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicHJvZHVjdC1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI3RpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFtcImlkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCIjYXZlcmFnZUN1c3RvbWVyUmV2aWV3c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJyZXZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuLmEtaWNvbi1hbHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI2FjckN1c3RvbWVyUmV2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXSA+IGRpdltjbGFzcz1cIm9mZmVyc0NvbnNpc3RlbmN5RW5hYmxlZFwiXSA+IGRpdjpub3QoW3N0eWxlPVwiZGlzcGxheTpub25lO1wiXSk6bm90KFtzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJdKSAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IGRpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmUuYW9rLWFsaWduLWNlbnRlci5hb2stcmVsYXRpdmUgPiBzcGFuLmFvay1vZmZzY3JlZW4sICNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdID4gZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD1cImFwZXhfd2l0aF9yaW9fY3hcIl0gI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdiBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiBcIlByaWNlOiB7fVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcm9kdWN0LXByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIiN0d2lzdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInByb2R1Y3Qtb3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3Rfb3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5hLXNlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcImRpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSA+IGxhYmVsLmEtZm9ybS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZnJvbV90ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxhYmVsLmEtZm9ybS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3Bhbi5zZWxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRyb3BfZG93bl9saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImJ1dHRvbl9saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwibGkgYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZnJvbV90ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCIjYnV5Ym94OmhhcyhkaXYuYS10YWItY29udGFpbmVyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJidXlib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCIjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGVsaXZlcl90YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzIgYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBpY2tfdXBfdGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIiN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlbGl2ZXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogXCJEZWxpdmVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5X2JveF93aXRoX2FjY29yZGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGlja191cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6IFwiUGljayBVcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVfaG9vazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPSdhcGV4X2RwX2NlbnRlcl9jb2x1bW4nXSA+IGRpdltjbGFzcz0nb2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkJ10gPiBkaXY6bm90KFtzdHlsZT0nZGlzcGxheTpub25lOyddKTpub3QoW3N0eWxlPVxcXCJkaXNwbGF5OiBub25lO1xcXCJdKSAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXksICNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPSdhcGV4X2RwX2NlbnRlcl9jb2x1bW4nXSA+IGRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J2FwZXhfd2l0aF9yaW9fY3gnXSAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IGRpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmUuYW9rLWFsaWduLWNlbnRlci5hb2stcmVsYXRpdmUgPiBzcGFuLmFvay1vZmZzY3JlZW5cIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0d2lzdGVyIGRpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKTpoYXMoc3Bhbi5zZWxlY3Rpb24pXCIpKS5tYXAoYSA9PiAoeyBsYWJlbDogYS5xdWVyeVNlbGVjdG9yKFwibGFiZWwuYS1mb3JtLWxhYmVsXCIpLmlubmVyVGV4dCwgdmFsdWU6IGEucXVlcnlTZWxlY3RvcihcInNwYW4uc2VsZWN0aW9uXCIpLmlubmVyVGV4dCB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc19kaWN0ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zX2RpY3Rbb3B0aW9uW1wibGFiZWxcIl0ucmVwbGFjZShcIjogXCIsIFwiXCIpXSA9IG9wdGlvbltcInZhbHVlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I0FTSU5cIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeyB0aXRsZSwgcHJpY2UsIG9wdGlvbnM6IG9wdGlvbnNfZGljdCwgYXNpbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0aXRsZSwgcHJpY2UsIG9wdGlvbnM6IG9wdGlvbnNfZGljdCwgYXNpbiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI2J1eWJveDpub3QoOmhhcyhkaXYuYS10YWItY29udGFpbmVyKSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYnV5Ym94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eV9ib3hfd2l0aF9hY2NvcmRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZV9ob29rOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9J2FwZXhfZHBfY2VudGVyX2NvbHVtbiddID4gZGl2W2NsYXNzPSdvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWQnXSA+IGRpdjpub3QoW3N0eWxlPSdkaXNwbGF5Om5vbmU7J10pOm5vdChbc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIl0pICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9J2FwZXhfZHBfY2VudGVyX2NvbHVtbiddID4gZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0nYXBleF93aXRoX3Jpb19jeCddICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZS5hb2stYWxpZ24tY2VudGVyLmFvay1yZWxhdGl2ZSA+IHNwYW4uYW9rLW9mZnNjcmVlblwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3R3aXN0ZXIgZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpOmhhcyhzcGFuLnNlbGVjdGlvbilcIikpLm1hcChhID0+ICh7IGxhYmVsOiBhLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5hLWZvcm0tbGFiZWxcIikuaW5uZXJUZXh0LCB2YWx1ZTogYS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5zZWxlY3Rpb25cIikuaW5uZXJUZXh0IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zX2RpY3QgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNfZGljdFtvcHRpb25bXCJsYWJlbFwiXS5yZXBsYWNlKFwiOiBcIiwgXCJcIildID0gb3B0aW9uW1widmFsdWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjQVNJTlwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IHRpdGxlLCBwcmljZSwgb3B0aW9uczogb3B0aW9uc19kaWN0LCBhc2luIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHRpdGxlLCBwcmljZSwgb3B0aW9uczogb3B0aW9uc19kaWN0LCBhc2luIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCIjYXR0YWNoLXdhcnJhbnR5LXBhbmUgI2F0dGFjaC13YXJyYW50eS1kaXNwbGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIndhcnJhbnR5LWJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5hdHRhY2gtd2FycmFudHktYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6IFwiI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdTZWxlY3Qgd2FycmFudHkgb3B0aW9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI2F0dGFjaC13YXJyYW50eS1jYXJkLXByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuYS1zZWN0aW9uLmF0dGFjaC13YXJyYW50eS1idXR0b24tcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaUFkZENvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFkZF9wcm90ZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiBcIkFkZCBQcm90ZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lOb0NvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5vX3Byb3RlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6IFwiTm8gVGhhbmtzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogXCIvY2FydC9zbWFydC13YWdvblwiLFxuICAgICAgICBtYXRjaF9tZXRob2Q6IFwidXJsXCIsXG4gICAgICAgIHNlbGVjdG9yOiBcImh0bWxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJoZWFkXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIiNzdy1hdGMtYnV5LWJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIiNzdy1zdWJ0b3RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIiNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcImRpdi5zYy13aXRob3V0LW11bHRpY2FydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY2hlY2tfb3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIiNzdy1ndGMgYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImdvX3RvX2NhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6IFwiL2NhcnRcIixcbiAgICAgICAgbWF0Y2hfbWV0aG9kOiBcInVybFwiLFxuICAgICAgICBzZWxlY3RvcjogXCJodG1sXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaGVhZFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGNhcnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogXCIvZ3AvY2FydC92aWV3Lmh0bWxcIixcbiAgICAgICAgbWF0Y2hfbWV0aG9kOiBcInVybFwiLFxuICAgICAgICBzZWxlY3RvcjogXCJodG1sXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaGVhZFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGNhcnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogXCIvYXAvc2lnbmluXCIsXG4gICAgICAgIG1hdGNoX21ldGhvZDogXCJ1cmxcIixcbiAgICAgICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAhIWFyZ3VtZW50c1swXTsgfSxcbiAgICAgICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHNbMF07IH0sXG4gICAgICAgIHNlbGVjdG9yOiBcImh0bWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6IFwiL2dwL2J1eS9zcGMvaGFuZGxlcnMvZGlzcGxheS5odG1sXCIsXG4gICAgICAgIG1hdGNoX21ldGhvZDogXCJ1cmxcIixcbiAgICAgICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAhIWFyZ3VtZW50c1swXTsgfSxcbiAgICAgICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHNbMF07IH0sXG4gICAgICAgIHNlbGVjdG9yOiBcImh0bWxcIixcbiAgICB9LFxuXTtcbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHNyYy9iYWNrZ3JvdW5kX3Rlc3QudHNcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgcmVjaXBlcyB9IGZyb20gJy4vcmVjaXBlX25ldyc7XG5pbXBvcnQgSlNaaXAgZnJvbSAnanN6aXAnO1xubGV0IGludGVyYWN0aW9ucyA9IFtdO1xubGV0IHNjcmVlbnNob3RzID0gW107XG5sZXQgcmVhc29uc0Fubm90YXRpb24gPSBbXTtcbmxldCBhY3Rpb25TZXF1ZW5jZUlkID0gMDtcbmxldCB1cGxvYWRUaW1lciA9IG51bGw7XG5sZXQgdXNlcklkID0gJyc7XG5pbXBvcnQgeyBwb3B1cF9wcm9iYWJpbGl0eSwgZm9sZGVyX25hbWUsIHppcCwgdXBsb2FkX3VybCB9IGZyb20gJy4vY29uZmlnJztcbmNvbnN0IHRhYk5hdmlnYXRpb25IaXN0b3J5ID0ge307XG5mdW5jdGlvbiBhbmFseXplTmF2aWdhdGlvbih0YWJJZCwgdXJsKSB7XG4gICAgaWYgKCF0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF0pIHtcbiAgICAgICAgdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdID0ge1xuICAgICAgICAgICAgYmFja1N0YWNrOiBbXSxcbiAgICAgICAgICAgIGZvcndhcmRTdGFjazogW10sXG4gICAgICAgICAgICBjdXJyZW50VXJsOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGhpc3RvcnkgPSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF07XG4gICAgaWYgKCFoaXN0b3J5LmN1cnJlbnRVcmwpIHtcbiAgICAgICAgaGlzdG9yeS5jdXJyZW50VXJsID0gdXJsO1xuICAgICAgICByZXR1cm4gJ25ldyc7XG4gICAgfVxuICAgIGlmIChoaXN0b3J5LmN1cnJlbnRVcmwgPT09IHVybCkge1xuICAgICAgICByZXR1cm4gJ3JlbG9hZCc7XG4gICAgfVxuICAgIGlmIChoaXN0b3J5LmJhY2tTdGFjay5sZW5ndGggPiAwICYmIGhpc3RvcnkuYmFja1N0YWNrW2hpc3RvcnkuYmFja1N0YWNrLmxlbmd0aCAtIDFdID09PSB1cmwpIHtcbiAgICAgICAgaGlzdG9yeS5mb3J3YXJkU3RhY2sucHVzaChoaXN0b3J5LmN1cnJlbnRVcmwpO1xuICAgICAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSBoaXN0b3J5LmJhY2tTdGFjay5wb3AoKTtcbiAgICAgICAgcmV0dXJuICdiYWNrJztcbiAgICB9XG4gICAgaWYgKGhpc3RvcnkuZm9yd2FyZFN0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgaGlzdG9yeS5mb3J3YXJkU3RhY2tbaGlzdG9yeS5mb3J3YXJkU3RhY2subGVuZ3RoIC0gMV0gPT09IHVybCkge1xuICAgICAgICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgICAgIGhpc3RvcnkuY3VycmVudFVybCA9IGhpc3RvcnkuZm9yd2FyZFN0YWNrLnBvcCgpO1xuICAgICAgICByZXR1cm4gJ2ZvcndhcmQnO1xuICAgIH1cbiAgICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgaGlzdG9yeS5mb3J3YXJkU3RhY2sgPSBbXTtcbiAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSB1cmw7XG4gICAgcmV0dXJuICduZXcnO1xufVxuLy8gUmVwbGFjZSB0aGUgc2ltcGxlIHF1ZXN0aW9uIHdpdGggYSBtb3JlIGRldGFpbGVkIG9uZSBiYXNlZCBvbiBldmVudCB0eXBlXG5mdW5jdGlvbiBnZXRDdXN0b21RdWVzdGlvbihldmVudFR5cGUsIGRhdGEpIHtcbiAgICB2YXIgX2E7XG4gICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2xpY2tfYScgfHwgJ2NsaWNrX2InIHx8ICdjbGlja19jJzpcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgYSBzcGVjaWZpYyB0eXBlIG9mIGNsaWNrXG4gICAgICAgICAgICBpZiAoZGF0YS50YXJnZXQuaW5uZXJUZXh0ID09PSAnU2V0IFVwIE5vdycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJXaHkgZGlkIHlvdSBjaG9vc2UgJ1NldCBVcCBOb3cnIGluc3RlYWQgb2YgYnV5IG9uY2UsIGFuZCB3aHkgZG8geW91IGxpa2UgdGhpcyBwYXJ0aWN1bGFyIHByb2R1Y3Q/XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLnRhcmdldC5pZCA9PT0gJ2J1eS1ub3ctYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgY2hvb3NlIHRvIGJ1eSB0aGlzIHByb2R1Y3QgaW1tZWRpYXRlbHksIGFuZCB3aGF0IGNvbnZpbmNlZCB5b3UgdG8gc2tpcCBmdXJ0aGVyIGV4cGxvcmF0aW9uIG9mIG90aGVyIG9wdGlvbnM/IFdoeSBkbyB5b3UgbGlrZSB0aGlzIHBhcnRpY3VsYXIgcHJvZHVjdD8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKF9hID0gZGF0YS50YXJnZXQuY2xhc3NOYW1lKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5jbHVkZXMoJ3NjLXByb2R1Y3QtbGluaycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdXaGF0IG1hZGUgeW91IGNsaWNrIG9uIHRoaXMgcHJvZHVjdCwgYW5kIHdoYXQgc3BlY2lmaWMgYXNwZWN0cyBhdHRyYWN0ZWQgeW91ciBhdHRlbnRpb24gY29tcGFyZWQgdG8gb3RoZXIgc2VhcmNoIHJlc3VsdHM/JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEudGFyZ2V0LmlkID09PSAnYWRkLXRvLWNhcnQtYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIGFkZCB0aGlzIGl0ZW0gdG8geW91ciBjYXJ0LCBhbmQgYXJlIHlvdSBwbGFubmluZyB0byBidXkgaXQgbm93IG9yIGxhdGVyPyBXaGF0IGNvbnZpbmNlZCB5b3UgdGhhdCB0aGlzIGl0ZW0gd2FzIHRoZSByaWdodCBjaG9pY2UgZm9yIHlvdXIgbmVlZHM/JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnV2hhdCB3YXMgeW91ciByZWFzb24gZm9yIGNsaWNraW5nIG9uIHRoaXMgZWxlbWVudD8nO1xuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgICAgICAgcmV0dXJuICdXaGF0IGFyZSB5b3UgZG9pbmcgd2hpbGUgc2Nyb2xsaW5n4oCUYXJlIHlvdSBicm93c2luZyBzZWFyY2ggcmVzdWx0cywgbG9va2luZyBhdCByZXZpZXdzLCBvciBzb21ldGhpbmcgZWxzZSwgYW5kIHdoYXQgYXJlIHlvdSBob3BpbmcgdG8gZmluZD8nO1xuICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgICByZXR1cm4gJ1doYXQgYXJlIHlvdSBzZWFyY2hpbmcgZm9yLCBhbmQgaG93IGRpZCB5b3UgZGVjaWRlIG9uIHRoZSBzZWFyY2ggdGVybXMgeW91IHVzZWQ/IEFyZSB5b3UgbG9va2luZyBmb3IgYSBzcGVjaWZpYyBwcm9kdWN0LCBicmFuZCwgb3IgZmVhdHVyZT8nO1xuICAgICAgICBjYXNlICduYXZpZ2F0aW9uJzpcbiAgICAgICAgICAgIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnYmFjaycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGRlY2lkZSB0byBnbyBiYWNrIHRvIHRoZSBwcmV2aW91cyBwYWdlLCBhbmQgd2hhdCB3ZXJlIHlvdSBob3BpbmcgdG8gcmV2aXNpdCBvciByZWNvbnNpZGVyPyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGRlY2lkZSB0byByZXR1cm4gdG8gdGhpcyBwYWdlIGFmdGVyIHByZXZpb3VzbHkgbmF2aWdhdGluZyBhd2F5LCBhbmQgd2hhdCBuZXcgb3IgdW5yZXNvbHZlZCBpbmZvcm1hdGlvbiBhcmUgeW91IGxvb2tpbmcgZm9yIG5vdz8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoaXMgJHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uP2A7XG4gICAgICAgIGNhc2UgJ3RhYkFjdGl2YXRlJzpcbiAgICAgICAgICAgIHJldHVybiBgV2h5IGRpZCB5b3Ugc3dpdGNoIHRvIHRoaXMgdGFiPyBEbyB5b3UgaGF2ZSBzcGVjaWZpYyB0YXNrIG9yIGluZm9ybWF0aW9uIGluIG1pbmQ/YDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgJHtldmVudFR5cGV9IGFjdGlvbj9gO1xuICAgIH1cbn1cbi8vIEFkZCBuZXcgZnVuY3Rpb24gdG8gaGFuZGxlIHNjcmVlbnNob3Qgc2F2aW5nXG5mdW5jdGlvbiBzYXZlU2NyZWVuc2hvdF8xKHNjcmVlbnNob3REYXRhVXJsLCBzY3JlZW5zaG90SWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoc2NyZWVuc2hvdERhdGFVcmwpIHtcbiAgICAgICAgICAgIC8vIEdldCBleGlzdGluZyBzY3JlZW5zaG90cyBmcm9tIHN0b3JhZ2VcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSk7XG4gICAgICAgICAgICBsZXQgc3RvcmVTY3JlZW5zaG90cyA9IHJlc3VsdC5zY3JlZW5zaG90cyB8fCBbXTtcbiAgICAgICAgICAgIC8vIEFkZCBuZXcgc2NyZWVuc2hvdFxuICAgICAgICAgICAgc3RvcmVTY3JlZW5zaG90cy5wdXNoKFtzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkXSk7XG4gICAgICAgICAgICAvLyBTYXZlIGJhY2sgdG8gc3RvcmFnZVxuICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2NyZWVuc2hvdHM6IHN0b3JlU2NyZWVuc2hvdHMgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59XG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgO1xuICAgICgoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzYXZlRGF0YScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCsrO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkID0gYWN0aW9uU2VxdWVuY2VJZDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5kYXRhLmFjdGlvblNlcXVlbmNlSWQgPSBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZDtcbiAgICAgICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5kYXRhLnV1aWQgPSB1dWlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVEYXRhID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlRGF0YSAnLCBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5pbnRlcmFjdGlvbnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGludGVyYWN0aW9uczogcmVzdWx0IH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIHBvcHVwXG4gICAgICAgICAgICAgICAgLy8gYXdhaXQgc2VuZFBvcHVwKHNlbmRlci50YWI/LmlkLCBtZXNzYWdlLmRhdGEudGltZXN0YW1wLCBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlLCBhY3Rpb25TZXF1ZW5jZUlkKVxuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZURhdGEoKSxcbiAgICAgICAgICAgICAgICAgICAgc2VuZFBvcHVwKChfYSA9IHNlbmRlci50YWIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCwgbWVzc2FnZS5kYXRhLnRpbWVzdGFtcCwgbWVzc2FnZS5kYXRhLmV2ZW50VHlwZSwgY3VycmVudGFjdGlvblNlcXVlbmNlSWQsIG1lc3NhZ2UuZGF0YSwgdXVpZClcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gc2F2ZURhdGE6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBLZWVwIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIGZvciBhc3luYyByZXNwb25zZVxuICAgICAgICB9XG4gICAgICAgIC8vIENhcHR1cmUgc2NyZWVuc2hvdCBvbiBkZW1hbmRcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnY2FwdHVyZVNjcmVlbnNob3QnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQgc2NyZWVuc2hvdCByZXF1ZXN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdERhdGFVcmwgPSB5aWVsZCBjYXB0dXJlU2NyZWVuc2hvdCgpO1xuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5zaG90RGF0YVVybCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzID0geWllbGQgc2F2ZVNjcmVlbnNob3RfMShzY3JlZW5zaG90RGF0YVVybCwgbWVzc2FnZS5zY3JlZW5zaG90SWQpO1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzLCBtZXNzYWdlOiBzdWNjZXNzID8gdW5kZWZpbmVkIDogJ0ZhaWxlZCB0byBjYXB0dXJlIHNjcmVlbnNob3QnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjYXB0dXJlU2NyZWVuc2hvdDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIERvd25sb2FkIGRhdGEgb24gdXNlciByZXF1ZXN0XG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2Rvd25sb2FkRGF0YScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkRGF0YScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB5aWVsZCBkb3dubG9hZERhdGFMb2NhbGx5KCk7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzcyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGRvd25sb2FkOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdjbGVhck1lbW9yeUNhY2hlJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBzY3JlZW5zaG90cyA9IFtdO1xuICAgICAgICAgICAgICAgIHJlYXNvbnNBbm5vdGF0aW9uID0gW107XG4gICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCA9IDA7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGNsZWFyTWVtb3J5Q2FjaGU6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSkpKCk7XG4gICAgcmV0dXJuIHRydWU7IC8vIEtlZXBzIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiBmb3IgYXN5bmMgcmVzcG9uc2VzXG59KTtcbi8vIENhcHR1cmUgdGhlIHNjcmVlbnNob3QgaW4gdGhlIGN1cnJlbnQgdGFiXG5mdW5jdGlvbiBjYXB0dXJlU2NyZWVuc2hvdCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgW3RhYl0gPSB5aWVsZCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh0YWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIodGFiLndpbmRvd0lkLCB7IGZvcm1hdDogJ2pwZWcnLCBxdWFsaXR5OiAyNSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGhhc2hDb2RlKHN0cikge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggfD0gMDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKTtcbiAgICByZXR1cm4gaGFzaC50b1N0cmluZygpO1xufVxuY29uc3Qgc2F2ZUhUTUwgPSAoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czoge30gfSk7XG4gICAgY29uc3QgaHRtbFNuYXBzaG90cyA9IHJlc3VsdC5odG1sU25hcHNob3RzIHx8IHt9O1xuICAgIGh0bWxTbmFwc2hvdHNbY3VycmVudFNuYXBzaG90SWRdID0gaHRtbENvbnRlbnQ7XG4gICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaHRtbFNuYXBzaG90cyB9KTtcbn0pO1xuY29uc3Qgc2F2ZUludGVyYWN0aW9uID0gKGV2ZW50VHlwZSwgdGltZXN0YW1wLCB0YXJnZXRfdXJsLCBodG1sU25hcHNob3RJZCwgY3VycmVudGFjdGlvblNlcXVlbmNlSWQsIHV1aWQsIG5hdmlnYXRpb25UeXBlID0gbnVsbCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgIHRhcmdldF91cmwsXG4gICAgICAgIGh0bWxTbmFwc2hvdElkLFxuICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkOiBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCxcbiAgICAgICAgdXVpZFxuICAgIH07XG4gICAgLy8gQWRkIG5hdmlnYXRpb25UeXBlIG9ubHkgaWYgaXQgZXhpc3RzXG4gICAgaWYgKG5hdmlnYXRpb25UeXBlKSB7XG4gICAgICAgIGRhdGFbJ25hdmlnYXRpb25UeXBlJ10gPSBuYXZpZ2F0aW9uVHlwZTtcbiAgICB9XG4gICAgbGV0IGludGVyYWN0aW9ucyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSk7XG4gICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gaW50ZXJhY3Rpb25zLmludGVyYWN0aW9ucyB8fCBbXTtcbiAgICBzdG9yZUludGVyYWN0aW9ucy5wdXNoKGRhdGEpO1xuICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMgfSk7XG59KTtcbmNvbnN0IGNhcHR1cmVBbmRTYXZlU2NyZWVuc2hvdCA9ICh3aW5kb3dJZCwgdGltZXN0YW1wKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBzY3JlZW5zaG90RGF0YVVybCA9IHlpZWxkIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKHdpbmRvd0lkLCB7XG4gICAgICAgIGZvcm1hdDogJ2pwZWcnLFxuICAgICAgICBxdWFsaXR5OiAyNVxuICAgIH0pO1xuICAgIGNvbnN0IHNjcmVlbnNob3RJZCA9IGBzY3JlZW5zaG90XyR7dGltZXN0YW1wfWA7XG4gICAgeWllbGQgc2F2ZVNjcmVlbnNob3RfMShzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkKTtcbn0pO1xuY29uc3Qgc2VuZFBvcHVwID0gKHRhYklkLCB0aW1lc3RhbXAsIGV2ZW50VHlwZSwgY3VycmVudGFjdGlvblNlcXVlbmNlSWQsIGRhdGEsIHV1aWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gZ2V0Q3VzdG9tUXVlc3Rpb24oZXZlbnRUeXBlLCBkYXRhKTtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA8IHBvcHVwX3Byb2JhYmlsaXR5ICYmIHRhYklkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZWFzb24gPSB5aWVsZCBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3Nob3dfcG9wdXAnLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5pbnB1dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld2l0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQ6IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbjogcmVhc29uLFxuICAgICAgICAgICAgICAgICAgICB1dWlkOiB1dWlkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgcmVhc29uc0Fubm90YXRpb246IFtdIH0pO1xuICAgICAgICAgICAgICAgIGxldCBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gcmVzdWx0LnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBuZXcgcmVhc29uXG4gICAgICAgICAgICAgICAgc3RvcmVSZWFzb25zQW5ub3RhdGlvbi5wdXNoKG5ld2l0ZW0pO1xuICAgICAgICAgICAgICAgIC8vIFNhdmUgYmFjayB0byBzdG9yYWdlXG4gICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcmVhc29uc0Fubm90YXRpb246IHN0b3JlUmVhc29uc0Fubm90YXRpb24gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwb3B1cDonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbi8vIGxpc3RlbiB0byBzd2l0Y2hlcyBiZXR3ZWVuIGFjdGl2YXRlZCB0YWJzXG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcigoYWN0aXZlSW5mbykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGFiSWQgPSBhY3RpdmVJbmZvLnRhYklkO1xuICAgICAgICBjb25zdCB0YWIgPSB5aWVsZCBjaHJvbWUudGFicy5nZXQodGFiSWQpO1xuICAgICAgICBpZiAoIXRhYikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCB0YWIgd2l0aCBJRDogJHt0YWJJZH1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgU3dpdGNoZWQgdG8gdGFiICR7dGFiSWR9IHdpdGggVVJMOiAke3RhYi51cmx9YCk7XG4gICAgICAgIGlmICh0YWIudXJsICYmICh0YWIudXJsLmluY2x1ZGVzKCdhbWF6b24uY29tJykgfHwgdGFiLnVybC5pbmNsdWRlcygnZmlsZScpKSkge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBgaHRtbF8ke2hhc2hDb2RlKHRhYi51cmwpfV8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgYWN0aW9uOiAnZ2V0SFRNTCcgfSwgKHJlc3BvbnNlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sQ29udGVudCA9IHJlc3BvbnNlID09PSBudWxsIHx8IHJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNwb25zZS5odG1sO1xuICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQrKztcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUludGVyYWN0aW9uKCd0YWJBY3RpdmF0ZScsIHRpbWVzdGFtcCwgdGFiLnVybCwgY3VycmVudFNuYXBzaG90SWQsIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLCB1dWlkLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZUFuZFNhdmVTY3JlZW5zaG90KHRhYi53aW5kb3dJZCwgdGltZXN0YW1wKSxcbiAgICAgICAgICAgICAgICAgICAgc2VuZFBvcHVwKHRhYklkLCB0aW1lc3RhbXAsICd0YWJBY3RpdmF0ZScsIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLCB7fSwgdXVpZClcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdGFiIGFjdGl2YXRlIGhhbmRsZXI6JywgZXJyb3IpO1xuICAgIH1cbn0pKTtcbmZ1bmN0aW9uIHNlbGVjdFJlY2lwZSh0YWJJZCwgdXJsKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpO1xuICAgICAgICBjb25zdCBwYXRoID0gcGFyc2VkVXJsLnBhdGhuYW1lO1xuICAgICAgICBmb3IgKGNvbnN0IHJlY2lwZSBvZiByZWNpcGVzKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaE1ldGhvZCA9IHJlY2lwZS5tYXRjaF9tZXRob2QgfHwgJ3RleHQnO1xuICAgICAgICAgICAgaWYgKG1hdGNoTWV0aG9kID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0YWIgdG8gY2hlY2sgZm9yIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW3sgcmVzdWx0OiBoYXNNYXRjaCB9XSA9IHlpZWxkIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmM6IChzZWxlY3RvciwgbWF0Y2hUZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghbWF0Y2hUZXh0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKF9iID0gKF9hID0gZWxlbWVudC50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobWF0Y2hUZXh0LnRvTG93ZXJDYXNlKCkpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBmYWxzZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbcmVjaXBlLm1hdGNoLCByZWNpcGUubWF0Y2hfdGV4dCB8fCAnJ11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgdGV4dCBtYXRjaDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hNZXRob2QgPT09ICd1cmwnICYmIHJlY2lwZS5tYXRjaCA9PT0gcGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNpcGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaGluZyByZWNpcGUgZm91bmQgZm9yIHBhdGg6ICR7cGF0aH1gKTtcbiAgICB9KTtcbn1cbmNocm9tZS53ZWJOYXZpZ2F0aW9uLm9uQ29tbWl0dGVkLmFkZExpc3RlbmVyKChkZXRhaWxzKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoZGV0YWlscy5mcmFtZUlkICE9PSAwKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc29sZS5sb2coJ3dlYk5hdmlnYXRpb24gb25Db21taXR0ZWQgZXZlbnQgdHJpZ2dlcmVkOicsIGRldGFpbHMpO1xuICAgIGlmIChkZXRhaWxzLnVybC5pbmNsdWRlcygnYW1hem9uLmNvbScpIHx8IGRldGFpbHMudXJsLmluY2x1ZGVzKCdmaWxlJykpIHtcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvblR5cGUgPSBhbmFseXplTmF2aWdhdGlvbihkZXRhaWxzLnRhYklkLCBkZXRhaWxzLnVybCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOYXZpZ2F0aW9uIHR5cGU6ICR7bmF2aWdhdGlvblR5cGV9IGZvciB0YWIgJHtkZXRhaWxzLnRhYklkfSB0byAke2RldGFpbHMudXJsfWApO1xuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGRldGFpbHMudGFiSWQsIHsgYWN0aW9uOiAnZ2V0SFRNTCcgfSwgKHJlc3BvbnNlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gcmVzcG9uc2UgPT09IG51bGwgfHwgcmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc3BvbnNlLmh0bWw7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGBodG1sXyR7aGFzaENvZGUoZGV0YWlscy51cmwpfV8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCsrO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudGFjdGlvblNlcXVlbmNlSWQgPSBhY3Rpb25TZXF1ZW5jZUlkO1xuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xuICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHNhdmVIVE1MKGh0bWxDb250ZW50LCBjdXJyZW50U25hcHNob3RJZCksXG4gICAgICAgICAgICAgICAgc2F2ZUludGVyYWN0aW9uKCduYXZpZ2F0aW9uJywgdGltZXN0YW1wLCBkZXRhaWxzLnVybCwgY3VycmVudFNuYXBzaG90SWQsIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLCB1dWlkLCBuYXZpZ2F0aW9uVHlwZSksXG4gICAgICAgICAgICAgICAgY2FwdHVyZUFuZFNhdmVTY3JlZW5zaG90KCh5aWVsZCBjaHJvbWUudGFicy5nZXQoZGV0YWlscy50YWJJZCkpLndpbmRvd0lkLCB0aW1lc3RhbXApXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0aW9uVHlwZSAhPT0gJ25ldycgJiYgbmF2aWdhdGlvblR5cGUgIT09ICdyZWxvYWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbmQgbWVzc2FnZSB0byBwb3B1cCBuYXZpZ2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgeWllbGQgc2VuZFBvcHVwKGRldGFpbHMudGFiSWQsIHRpbWVzdGFtcCwgJ25hdmlnYXRpb24nLCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCwge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uVHlwZTogbmF2aWdhdGlvblR5cGVcbiAgICAgICAgICAgICAgICB9LCB1dWlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbn0pKTtcbi8vIEFkZCBjbGVhbnVwIHdoZW4gdGFiIGlzIGNsb3NlZFxuY2hyb21lLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKCh0YWJJZCkgPT4ge1xuICAgIGRlbGV0ZSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF07XG59KTtcbi8vIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIGhhbmRsZSBkYXRhIHVwbG9hZFxuZnVuY3Rpb24gZG93bmxvYWREYXRhTG9jYWxseSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgJy0nKTtcbiAgICAgICAgICAgIC8vIEdldCB1c2VySWQgYW5kIGRhdGEgZnJvbSBzdG9yYWdlXG4gICAgICAgICAgICBjb25zdCB1c2VySWRSZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyB1c2VySWQ6ICcnIH0pO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHVzZXJJZFJlc3VsdC51c2VySWQ7XG4gICAgICAgICAgICBsZXQgdXNlcl9pZCA9IGN1cnJlbnRVc2VySWQgfHwgJ3Vua25vd24nO1xuICAgICAgICAgICAgY29uc3QgZm9sZGVyTmFtZSA9IGAke2ZvbGRlcl9uYW1lfS9VU0VSXyR7dXNlcl9pZH0vU0VTU0lPTl8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgY29uc3Qgc25hcHNob3RzID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBvcmRlckRldGFpbHMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBvcmRlckRldGFpbHM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3QgUmVhc29uc0Fubm90YXRpb24gPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSk7XG4gICAgICAgICAgICBsZXQgaHRtbFNuYXBzaG90cyA9IHNuYXBzaG90cy5odG1sU25hcHNob3RzIHx8IHt9O1xuICAgICAgICAgICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gaW50ZXJhY3QuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3Jlb3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXTtcbiAgICAgICAgICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSBSZWFzb25zQW5ub3RhdGlvbi5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXTtcbiAgICAgICAgICAgIC8vIFVwbG9hZCBzZXNzaW9uIGluZm9cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2Vzc2lvbiBpbmZvJyk7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uSW5mb0NvbnRlbnQgPSBgU2Vzc2lvbiBkYXRhIGZvciB0aW1lc3RhbXA6ICR7dGltZXN0YW1wfSwgdXNlciBpZDogJHtjdXJyZW50VXNlcklkfSxcXG4gb3JkZXIgZGV0YWlsczogXFxuICR7SlNPTi5zdHJpbmdpZnkoc3RvcmVvcmRlckRldGFpbHMpfWA7XG4gICAgICAgICAgICBjaHJvbWUuZG93bmxvYWRzLmRvd25sb2FkKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlc3Npb25JbmZvQ29udGVudCksXG4gICAgICAgICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9L3Nlc3Npb25faW5mby50eHRgLFxuICAgICAgICAgICAgICAgIHNhdmVBczogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVXBsb2FkIEhUTUwgc25hcHNob3RzIGFzIHNlcGFyYXRlIGZpbGVzXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGh0bWwgc25hcHNob3RzJyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtzbmFwc2hvdElkLCBodG1sQ29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoaHRtbFNuYXBzaG90cykpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuZG93bmxvYWRzLmRvd25sb2FkKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnZGF0YTp0ZXh0L2h0bWw7Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGh0bWxDb250ZW50KSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9L2h0bWwvJHtzbmFwc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgXCItXCIpfS5odG1sYCxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBsb2FkIGludGVyYWN0aW9ucyBKU09OXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGludGVyYWN0aW9ucycpO1xuICAgICAgICAgICAgY29uc3QgZnVsbERhdGEgPSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyxcbiAgICAgICAgICAgICAgICByZWFzb25zOiBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLFxuICAgICAgICAgICAgICAgIG9yZGVyRGV0YWlsczogb3JkZXJEZXRhaWxzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25zRGF0YSA9IEpTT04uc3RyaW5naWZ5KGZ1bGxEYXRhLCBudWxsLCAyKTtcbiAgICAgICAgICAgIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICAgICAgICAgIHVybDogJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChpbnRlcmFjdGlvbnNEYXRhKSxcbiAgICAgICAgICAgICAgICBmaWxlbmFtZTogYCR7Zm9sZGVyTmFtZX0vaW50ZXJhY3Rpb25zLmpzb25gLFxuICAgICAgICAgICAgICAgIHNhdmVBczogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVXBsb2FkIHNjcmVlbnNob3RzXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSBvZiBzdG9yZVNjcmVlbnNob3RzKSB7XG4gICAgICAgICAgICAgICAgY2hyb21lLmRvd25sb2Fkcy5kb3dubG9hZCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogc2NyZWVuc2hvdERhdGEsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBgJHtmb2xkZXJOYW1lfS9zY3JlZW5zaG90cy8ke3NjcmVlbnNob3RJZC5yZXBsYWNlKC9bOi5dL2csIFwiLVwiKX0uanBnYCxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2xlYXIgY2FjaGUgYWZ0ZXIgc3VjY2Vzc2Z1bCB1cGxvYWRcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbXG4gICAgICAgICAgICAgICAgJ2h0bWxTbmFwc2hvdHMnLFxuICAgICAgICAgICAgICAgICdpbnRlcmFjdGlvbnMnLFxuICAgICAgICAgICAgICAgICdvcmRlckRldGFpbHMnLFxuICAgICAgICAgICAgICAgICdzY3JlZW5zaG90cycsXG4gICAgICAgICAgICAgICAgJ3JlYXNvbnNBbm5vdGF0aW9uJ1xuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHNjcmVlbnNob3RzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICByZWFzb25zQW5ub3RhdGlvbi5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmxldCBsYXN0VXBsb2FkVGltZXN0YW1wID0gJyc7XG5mdW5jdGlvbiB1cGxvYWREYXRhVG9TZXJ2ZXIoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWREYXRhVG9TZXJ2ZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlSW50ZXJhY3Rpb25zID0gaW50ZXJhY3QuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBpbnRlcmFjdGlvbnMgYW5kIGdldCB0aGUgbGF0ZXN0IHRpbWVzdGFtcFxuICAgICAgICAgICAgaWYgKHN0b3JlSW50ZXJhY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBpbnRlcmFjdGlvbnMgdG8gdXBsb2FkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgJy0nKTtcbiAgICAgICAgICAgIC8vIEdldCB1c2VySWQgYW5kIGRhdGEgZnJvbSBzdG9yYWdlXG4gICAgICAgICAgICBjb25zdCB1c2VySWRSZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyB1c2VySWQ6ICcnIH0pO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHVzZXJJZFJlc3VsdC51c2VySWQ7XG4gICAgICAgICAgICBsZXQgdXNlcl9pZCA9IGN1cnJlbnRVc2VySWQgfHwgJ3Vua25vd24nO1xuICAgICAgICAgICAgY29uc3QgZm9sZGVyTmFtZSA9IGAke2ZvbGRlcl9uYW1lfS9VU0VSXyR7dXNlcl9pZH0vU0VTU0lPTl8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgY29uc3Qgc25hcHNob3RzID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBvcmRlckRldGFpbHMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBvcmRlckRldGFpbHM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3QgUmVhc29uc0Fubm90YXRpb24gPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSk7XG4gICAgICAgICAgICBsZXQgaHRtbFNuYXBzaG90cyA9IHNuYXBzaG90cy5odG1sU25hcHNob3RzIHx8IHt9O1xuICAgICAgICAgICAgbGV0IHN0b3Jlb3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXTtcbiAgICAgICAgICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSBSZWFzb25zQW5ub3RhdGlvbi5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXTtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxEYXRhID0ge1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgcmVhc29uczogc3RvcmVSZWFzb25zQW5ub3RhdGlvbixcbiAgICAgICAgICAgICAgICBvcmRlckRldGFpbHM6IHN0b3Jlb3JkZXJEZXRhaWxzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCF6aXApIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBVcGxvYWQgc2Vzc2lvbiBpbmZvXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlc3Npb25JbmZvID0gbmV3IEJsb2IoW1xuICAgICAgICAgICAgICAgICAgICAgICAgYFNlc3Npb24gZGF0YSBmb3IgdGltZXN0YW1wOiAke3RpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICAgICAgXFxuIHVzZXIgaWQ6ICR7dXNlcl9pZH1cbiAgICAgICAgICAgICAgICAgICAgXFxuIG9yZGVyIGRldGFpbHM6XG4gICAgICAgICAgICAgICAgICAgIFxcbiAke0pTT04uc3RyaW5naWZ5KG9yZGVyRGV0YWlscyl9YFxuICAgICAgICAgICAgICAgICAgICBdLCB7IHR5cGU6ICd0ZXh0L3BsYWluJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25Gb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBzZXNzaW9uSW5mbywgYCR7Zm9sZGVyTmFtZX0vc2Vzc2lvbl9pbmZvLnR4dGApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNlc3Npb24gaW5mbycpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IHNlc3Npb25Gb3JtRGF0YVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBsb2FkIEhUTUwgc25hcHNob3RzIGFzIHNlcGFyYXRlIGZpbGVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaHRtbCBzbmFwc2hvdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBbc25hcHNob3RJZCwgaHRtbENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGh0bWxTbmFwc2hvdHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBodG1sQmxvYiA9IG5ldyBCbG9iKFtodG1sQ29udGVudF0sIHsgdHlwZTogJ3RleHQvaHRtbCcgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgaHRtbEJsb2IsIGAke2ZvbGRlck5hbWV9L2h0bWwvJHtzbmFwc2hvdElkfS5odG1sYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBVcGxvYWQgaW50ZXJhY3Rpb25zIEpTT05cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25zQmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMildLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGpzb25Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBqc29uRm9ybURhdGEuYXBwZW5kKCdmaWxlJywgaW50ZXJhY3Rpb25zQmxvYiwgYCR7Zm9sZGVyTmFtZX0vaW50ZXJhY3Rpb25zLmpzb25gKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBqc29uRm9ybURhdGFcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVwbG9hZCBzY3JlZW5zaG90c1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHN0b3JlU2NyZWVuc2hvdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goc2NyZWVuc2hvdERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IHlpZWxkIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBibG9iLCBgJHtmb2xkZXJOYW1lfS9zY3JlZW5zaG90cy8ke3NjcmVlbnNob3RJZC5yZXBsYWNlKC9bOi5dL2csICctJyl9LmpwZ2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzY3JlZW5zaG90cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZCB6aXAgZmlsZScpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpO1xuICAgICAgICAgICAgICAgICAgICB6aXAuZmlsZSgnc2Vzc2lvbl9pbmZvLnR4dCcsIGBTZXNzaW9uIGRhdGEgZm9yIHRpbWVzdGFtcDogJHt0aW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgXFxuIHVzZXIgaWQ6ICR7dXNlcl9pZH1cbiAgICAgICAgICAgICAgICBcXG4gb3JkZXIgZGV0YWlsczpcbiAgICAgICAgICAgICAgICBcXG4gJHtKU09OLnN0cmluZ2lmeShvcmRlckRldGFpbHMpfWApO1xuICAgICAgICAgICAgICAgICAgICB6aXAuZmlsZSgnaW50ZXJhY3Rpb25zLmpzb24nLCBKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMikpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90c0ZvbGRlciA9IHppcC5mb2xkZXIoJ3NjcmVlbnNob3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHN0b3JlU2NyZWVuc2hvdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goc2NyZWVuc2hvdERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IHlpZWxkIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbnNob3RzRm9sZGVyLmZpbGUoc2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgJy0nKSArICcuanBnJywgYmxvYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHRtbFNuYXBzaG90c0ZvbGRlciA9IHppcC5mb2xkZXIoJ2h0bWxTbmFwc2hvdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBbc25hcHNob3RJZCwgaHRtbENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGh0bWxTbmFwc2hvdHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sU25hcHNob3RzRm9sZGVyLmZpbGUoc25hcHNob3RJZCArICcuaHRtbCcsIGh0bWxDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB6aXBCbG9iID0geWllbGQgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnYmxvYicgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIHppcEJsb2IsIGAke2ZvbGRlck5hbWV9LnppcGApO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbXG4gICAgICAgICAgICAgICAgJ2h0bWxTbmFwc2hvdHMnLFxuICAgICAgICAgICAgICAgICdpbnRlcmFjdGlvbnMnLFxuICAgICAgICAgICAgICAgICdvcmRlckRldGFpbHMnLFxuICAgICAgICAgICAgICAgICdzY3JlZW5zaG90cycsXG4gICAgICAgICAgICAgICAgJ3JlYXNvbnNBbm5vdGF0aW9uJ1xuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHNjcmVlbnNob3RzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICByZWFzb25zQW5ub3RhdGlvbi5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIFN0YXJ0IHRoZSBwZXJpb2RpYyB1cGxvYWQgdGltZXJcbmZ1bmN0aW9uIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKCF1cGxvYWRUaW1lcikge1xuICAgICAgICB1cGxvYWRUaW1lciA9IHNldEludGVydmFsKHVwbG9hZERhdGFUb1NlcnZlciwgMTAwMDApOyAvLyAxMCBzZWNvbmRzXG4gICAgfVxufVxuLy8gU3RvcCB0aGUgcGVyaW9kaWMgdXBsb2FkIHRpbWVyXG5mdW5jdGlvbiBzdG9wUGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKHVwbG9hZFRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBsb2FkVGltZXIpO1xuICAgICAgICB1cGxvYWRUaW1lciA9IG51bGw7XG4gICAgfVxufVxuc3RhcnRQZXJpb2RpY1VwbG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
