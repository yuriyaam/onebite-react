// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하고, 길이를 반환한다.
let arr1 = [1,2,3];
arr1.push(4);

// 여러개의 요소를 추가하고 싶다면
arr1.push(5,6,7);

// push 메서드는 변경된 배열의 길이를 반환한다.
const newLength = arr1.push(8);
console.log(newLength);


// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환한다.
let arr2 = [1,2,3];
const poppedItem = arr2.pop();

console.log(poppedItem);
console.log(arr2);


// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 반환한다.
let arr3 = [1,2,3];
const shiftedItem = arr3.shift();

console.log(shiftedItem);
console.log(arr3);


// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하고, 길이를 반환한다.
let arr4 = [1,2,3];
const newLength2 = arr4.unshift(0);

console.log(newLength2);
console.log(arr4);

// shift, unshift는 push, pop보다 느리게 작동한다.
// 인덱스를 하나씩 늘리거나 삭제해야 하므로.
// 그러므로 웬만하면 shift, unshift를 사용해 해결하는 것이 좋다.


// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1,2,3,4,5];
let sliced = arr5.slice(2, 5); // index 2부터 ~ index 5번 전까지 잘라낸다. 두번째 인수는 생략 가능.

console.log(sliced);
console.log(arr5);  // slice로 잘라냈다고 해서 원본배열이 바뀌진 않는다.

let sliced3 = arr5.slice(-3);   // 뒤에서부터 3개를 자른다
console.log(sliced3);


// 6. concat
// 두개의 서로 다른 배열을 이어 붙혀 새로운 배열을 반환
let arr6=[1,2];
let arr7=[3,4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);