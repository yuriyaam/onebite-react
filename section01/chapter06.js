// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result);    // 1020 : 변수 num이 String Type으로 묵시적 형 변환 되었다.

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시

// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);    // 20

let str2 = "10개";
let strToNum2 = parseInt(str2); // 숫자 외에 다른 문자가 있을 때 
console.log(strToNum2); // 10

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다"); // 20