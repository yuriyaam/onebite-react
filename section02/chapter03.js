// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four=4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
    name: "배유리",
    age: 30,
    hobby: "러닝",
};

let {
    name, 
    age:myAge, 
    hobby
} = person;
console.log(name, myAge, hobby);