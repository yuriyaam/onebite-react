// 1. Promise 객체
// promise 객체가 만들어지고 콜백함수가 실행된다.
// 이 함수를 executor라고 부른다. = 실제로 작업을 실행하는 함수

// 1-2. Promise 생성자의 매개변수
// promise 생성자의 콜백함수는 두가지 매개변수를 받는다.
// - resolve : 성공시키는 함수
// - rejcet : 실패시키는 함수

// 2. Promise 객체의 status
// - pending : 대기
// - fulfilled : 성공
// - rejected : 실패

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    resolve();
    // reject("왜 실패했는지 이유...");
  }, 2000);
});

console.log(promise); // promise 객체가 출력되고, 2초 후 "안녕"이 출력된다. 이때는 2초가 지나지 않았으므로 status는 pending(대기).

setTimeout(() => {
  console.log(promise); // 2초가 지나 resolve() 함수가 호출되었으므로 status가 fulfilled(성공)으로 바뀐다
}, 3000);

/*********************************************************************************/

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

// then : promise 성공, 그 후에
promise2.then((value) => {
  console.log(value); // resolve에서 보낸 매개변수를 받는다.
});

// catch : promise 실패, 그 후에
promise2.catch((error) => {
  console.log(error);
});

// then, catch는 모두 promise객체를 그대로 반환한다.
// 따라서 then, catch 메소드를 따로 쓸 필요 없이 아래 코드처럼 한번에 작성할 수 있다.
// => promise chaining 문법 : 연결연결 되어있는게 체인같아서
promise2
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

/*********************************************************************************/
function add10(num) {
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise3;
}

const p = add10(0); // promise를 반환
p.then((result) => {
  console.log(result);

  return add10(result);
}).then((result) => {
  // return된 promise 객체에 then을 한다.
  console.log(result);
});
