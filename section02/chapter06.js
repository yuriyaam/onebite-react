// 1. 배열 순회
let arr = [1,2,3];

// 1-1. 배열 인덱스
for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// 1-2. for of 반복문
// -> 배열에만 사용 가능한 반복문
for(let item of arr) {
    console.log(item);
}


// 2. 객체 순회
let person = {
    name: "배유리",
    age: 30,
    hobby : "런닝"
};

// 2-1. Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);

for(let key of keys) {
    console.log(key, person[key]);
};

// 2-2. Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

for(let value of values) {
    console.log(value);
};

// 2-3. for in
// -> 객체만을 위한 반복문
for(let key in person) {
    console.log(key, person[key]);
}