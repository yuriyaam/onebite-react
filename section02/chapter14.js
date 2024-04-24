// async
// 함수 앞에 붙이는 키워드
// 함수를 비동기함수로 만들어주는 키워드
// 함수가 promise 객체를 반환하도록 변환해주는 키워드

async function getData() {
  return {
    name: "배유리",
    id: "qodbfl9560",
  };
}

console.log(getData());

// await
// async 함수 내부에서만 사용 가능한 키워드
// 비동기함수가 다 처리되기를 기다리는 역할을 하는 키워드
// then보다 직관적으로 사용함

async function printData() {
  //   getData().then((result) => {
  //     console.log(result);
  //   });

  const data = await getData(); // 호출하는 함수의 앞에 await을 붙이면 promise객체가 아닌 호출함수의 결과값을 return받음
  console.log(data);
}

printData();
