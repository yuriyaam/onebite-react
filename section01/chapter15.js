// 1. 객체 생성
let obj1 = new Object();    // 객체 생성자
let obj2 = {};              // 객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "배유리",
    age: "30",
    hobby: "러닝",
    extra: {},
    10 : 20,            // key는 숫자도 가능
    "like cat": true    // key에 띄어쓰기가 들어간다면 따옴표로 묶기
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);  // 밑줄 무시

let age = person["age"];    // key는 쌍따옴표로!
console.log(age);   

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "web developer";
person["favoriteFood"] = "떡볶이";

// 3-3. 프로퍼티를 수정하는 방법
person.job = "student";
person["favoriteFood"] = "양념게장";

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
console.log(person);

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = "name" in person; // name이라는 key가 person 객체에 있냐?
console.log(result1);