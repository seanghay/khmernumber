(async function () {
  const { equal } = await import('node:assert')
  const { toASCII, toKhmer } = await import('./index.mjs');
  const { toASCII: toASCII2, toKhmer: toKhmer2 } = await import('./index.js');
  equal('01234567890123456789', toASCII('០១២៣៤៥៦៧៨៩0123456789'))
  equal('01234567890123456789', toASCII2('០១២៣៤៥៦៧៨៩0123456789'))
  equal('០១២៣៤៥៦៧៨៩០១២៣៤៥៦៧៨៩', toKhmer('0123456789០១២៣៤៥៦៧៨៩'))
  equal('០១២៣៤៥៦៧៨៩០១២៣៤៥៦៧៨៩', toKhmer2('0123456789០១២៣៤៥៦៧៨៩'))
})()

