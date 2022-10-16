const { Suite } = require('benchmark');

console.time('khmernumber')
const { toASCII, toKhmer } = require('khmernumber');
console.timeEnd('khmernumber')


function replaceKhmer(str) {
  return str.replace(/០/, '0')
    .replace(/១/, '1')
    .replace(/២/, '2')
    .replace(/៣/, '3')
    .replace(/៤/, '4')
    .replace(/៥/, '5')
    .replace(/៦/, '6')
    .replace(/៧/, '7')
    .replace(/៨/, '8')
    .replace(/៩/, '9')
}


function replaceASCII(str) {
  return str.replace(/0/, '០')
    .replace(/1/, '១')
    .replace(/2/, '២')
    .replace(/3/, '៣')
    .replace(/4/, '៤')
    .replace(/5/, '៥')
    .replace(/6/, '៦')
    .replace(/7/, '៧')
    .replace(/8/, '៨')
    .replace(/9/, '៩')
}


const bench = new Suite()

bench.on('cycle', (e) => {
  console.log('  ' + e.target);
})

bench.add('toASCII', () => {
  toASCII('០១២៣៤៥៦៧៨៩0123456789')
})

bench.add('toKhmer', () => {
  toKhmer('០១២៣៤៥៦៧៨៩0123456789')
})


bench.add('String.replace: Khmer -> ASCII', () => {
  replaceKhmer('០១២៣៤៥៦៧៨៩0123456789')
})

bench.add('String.replace: ASCII -> Khmer', () => {
  replaceASCII('០១២៣៤៥៦៧៨៩0123456789')
})


bench.run()