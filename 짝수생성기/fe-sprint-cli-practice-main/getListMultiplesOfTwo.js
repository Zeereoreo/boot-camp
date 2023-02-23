const range = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  // TODO
  // 100 이하 까지 2의 배수(0제외)를 출력해야 한다.
  return range.range(2, upTo+1, 2);

}

getListMultiplesOfTwo(100);

module.exports = getListMultiplesOfTwo;
