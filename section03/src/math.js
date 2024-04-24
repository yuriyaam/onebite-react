// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// 모듈을 내보내고, 받아오는 방식은 한가지만 가능하다.

// 1. commonJS 모듈 방식으로 내보내기
// module.exports = { add, sub }; // key와 value 값이 같은 경우 key값 생략 가능

// 2. ES 모듈 방식으로 내보내기
// package.json에 "type": "module",을 추가해야한다.
// 2-1.
export { add, sub };

// 2-2.
// export function add(a, b) {
//   return a + b;
// }

// export function sub(a, b) {
//   return a - b;
// }

// 2-3. export default : math 모듈을 대표하는 기본값으로 내보내기
export default function multiply(a, b) {
  return a * b;
}
