// 기본 자료형
// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;     // 양의 무한대
let mInf = -Infinity;   // 음의 무한대

let nan = NaN;  // Not a Number
console.log(1 * "hello");   // NaN

// 2. String Type
let myName = "배유리";  // 작은따옴표나 큰따옴표로 묶어주지 않으면 변수로 인식한다.
let myLocation = "오류동";

let introduce = myName + myLocation;
console.log(introduce);     // 배유리 오류동

// 템플릿 리터럴 문법 : ``(백틱)을 사용하면 ${}으로 동적으로 변수를 넣을 수 있다.
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;  

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다.)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);  // undefined

// null과 undefined 차이
// undefined : 변수를 선언하고 아무것도 넣어주지 않았을 때
// null : 명시적으로 null을 할당해줘야한다.