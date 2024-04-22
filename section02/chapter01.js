// JavaScript에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다.

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy한 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = ()=>{};

// 3. 활용사례
function printName(person) {
    // if (person === undefined || person === null) {
    if (!person) {
        console.log("person의 값이 없음");
        return;
    }

    console.log(person.name);
};

let person = null;
printName(person);