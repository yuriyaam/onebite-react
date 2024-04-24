// 모듈을 내보내고, 받아오는 방식은 한가지만 가능하다.

// 1. commonJS 모듈 방식으로 받아오기
// const { add, sub } = require("./math.js"); // 객체의 구조분해할당 : const {add, sub}로 받을 수 있다.

// 2. ES 모듈 방식으로 받아오기
import mul, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

import randomColor from "randomcolor"; // 라이브러리를 불러올때는 경로 필요없음
const color = randomColor();
console.log(color);
