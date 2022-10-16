/**
 * Convert from Khmer numerals to ASCII
 * @param {string} s 
 * @returns {string} 
 */
 exports.toASCII = s => [...s].reduce((p, c) => p + (c = c.charCodeAt(0), String.fromCharCode(c - 6064 * ((c - 6112) * (c - 6121) < 1 ^ 0))), '');

 /**
  * Convert from ASCII numerals to Khmer.
  * @param {string} s
  * @returns {string}
  */
 exports.toKhmer = s => [...s].reduce((p, c) => p + (c = c.charCodeAt(0), String.fromCharCode(c + 6064 * ((c - 48) * (c - 57) < 1 ^ 0))), '');
 