// 1. 함수 표현식
function funcA() {
    console.log("funA");
}

let varA = funcA;
console.log(varA);  // 함수 자체가 출력됨
// 자바스크립트에서는 함수도 숫자, 문자열과 같은 하나의 값으로 취급한다.

varA(); // 이렇게 funcA를 호출할 수도 있다.


// 2. 화살표 함수
let varC = () => {
    return 1;
};

console.log(varC());

let varD = () => 1; // return문만 있는 함수의 경우 중괄호{}와 return을 생략할 수 있다.

let varE = (value) => value+1;
console.log(varE(10));  // 11