// 5가지 요소 순회 및 탐색 메서드

// 1.forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(item, idx, arr);
});

// 예제
// arr1의 각각의 item에 곱하기 2를 한 값을 doubledArr에 넣어보자
let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

/*********************************************************************************/
// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드. true/false 반환
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

console.log(isInclude);

/*********************************************************************************/
// 3. indexOf
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // 2라는 값의 위치를 찾아라

console.log(index);

// 만약 배열에서 찾으려는 값이 여러개 존재한다면, 해당 값의 첫번째 인덱스를 반환한다.
// 만약 배열에 존재하는 값이 아니라면, -1을 반환한다.

/*********************************************************************************/
// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];

// const findedIndex = arr4.findIndex((item) => {
//   if (item % 2 !== 0) return true;
// });

// 위 콜백함수를 더 간단하게 쓰는 방법
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);

console.log(findedIndex);

/*********************************************************************************/
// ★ indexOf와 findIndex의 차이점
// indexOf : 얕은 비교
// findIndex : 깊은 비교
let objectArr = [{ name: "배유리" }, { name: "홍길동" }];

// 객체는 참조값으로 비교하기 때문에 findIndex를 사용해야 한다.
let objIndexOf = objectArr.indexOf({ name: "배유리" });
console.log("objIndexOf = ", objIndexOf); // -1

let objFindIndex = objectArr.findIndex((item) => item.name === "배유리");
console.log("objFindIndex = ", objFindIndex); // -1

/*********************************************************************************/
// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아 그대로 반환하는 메서드
let arr5 = [{ name: "배유리" }, { name: "홍길동" }];
let findObj = arr5.find((item) => item.name === "홍길동");

console.log(findObj);
