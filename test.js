(async function () {
  const { equal } = await import('node:assert')
  const { toASCII, toKhmer } = await import('./index.mjs');
  const { toASCII: toASCII2, toKhmer: toKhmer2 } = await import('./index.js');
  equal('01234567890123456789abc', toASCII('០១២៣៤៥៦៧៨៩0123456789abc'))
  equal('01234567890123456789abc', toASCII2('០១២៣៤៥៦៧៨៩0123456789abc'))
  equal('០១២៣៤៥៦៧៨៩០១២៣៤៥៦៧៨៩abc', toKhmer('0123456789០១២៣៤៥៦៧៨៩abc'))
  equal('០១២៣៤៥៦៧៨៩០១២៣៤៥៦៧៨៩abc', toKhmer2('0123456789០១២៣៤៥៦៧៨៩abc'))
})()

