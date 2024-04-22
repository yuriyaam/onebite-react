// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];

// arr1의 요소를 arr2에 추가하고 싶다면 아래와 같이 사용할 수 있지만
// arr1의 요소가 추가/삭제되면 위험한 코드가 된다.
// let arr2 = [4, arr1[0], arr1[1], arr[2], 5, 6];

// 이럴때 Spread 연산자를 사용하여 아래와 같이 쓸 수 있다.
let arr2 = [4, ...arr1, 5, 6,];
console.log(arr2);


// 1-1. 객체에서 사용하기
let obj1 = {a: 1, b:2};
let obj2 = {...obj1, c:3, d:4};
console.log(obj2);

// 1-2. 함수에서 사용하기
function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
};

funcA(...arr1);


// 2. Rest 매개변수
// -> Rest는 나머지라는 뜻. 즉, 나머지 매개변수

// arr1의 첫번째 값만 one이라는 매개변수로 받고, 나머지는 rest라는 매개변수로 받겠다는 뜻
// rest 매개변수는 나머지 매개변수를 모두 받는 것이기 때문에 rest 매개변수 뒤에는 또다른 매개변수를 받을 수 없다.
function funcB(one, ...args) {
    console.log(args);
};

funcB(...arr1);