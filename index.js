const f = (s, l, r, op) => [...s].reduce((p, c) => p + (c = c.charCodeAt(0), String.fromCharCode(c - op * 6064 * ((c - l) * (c - r) < 1 ^ 0))), '');
exports.toASCII = s => f(s, 6112, 6121, 1)
exports.toKhmer = s => f(s, 48, 57, -1)
