// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "배유리", hobby: "런닝" },
  { name: "홍길동", hobby: "테니스" },
  { name: "테스트", hobby: "테니스" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

/*********************************************************************************/
// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고, 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => item * 2);

console.log(mapResult1);

// 2-1. map 실무예제
let names = arr1.map((item) => item.name);

console.log(names);

/*********************************************************************************/
// 3. sort
// 배열을 사전순으로 정렬
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3);

// 3-1. 만약 배열 요소값이 숫자라면 sort 메소드가 적용되지 않음 -> sort는 사전순 정렬이기 때문에
let arrNum3 = [10, 3, 5];
arrNum3.sort((a, b) => {
  if (a > b) {
    return 1; // b가 a 앞으로 온다(오름차순)
  } else if (b < a) {
    return -1; // a가 b 앞으로 온다(오름차순)
  } else {
    return 0; // a, b 자리 유지
  }
});

/*********************************************************************************/
// 4. toSorted
// sort와 같은 메서드
// 단, 원본 배열은 냅두고 새로운 배열을 반환
let arr5 = ["b", "a", "c"];
const sorted = arr5.toSorted();

console.log(arr5, sorted);

/*********************************************************************************/
// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
// join의 매개변수로 구분자를 넣을 수 있다.
let arr6 = ["hi", "Im", "yuri"];
const joined = arr6.join("-");

console.log(joined);
