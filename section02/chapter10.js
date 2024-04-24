// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("1995/08/16/10:10:10"); // 1995-08-16 또는 1995. 08. 16 또는 1995, 8, 16, 10, 10, 10 으로도 가능
console.log(date2);

/*********************************************************************************/
// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지 의미하는 숫자값
// 협정 세계시（UTC: Coordinated Universal Time）: 1970.01.01 00시 00분 00초
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1); // date1과 같은 시간
console.log(date1, date4);

/*********************************************************************************/
// 3. 시간 요소들를 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // javascript에서 월은 0부터 시작한다.
let date = date1.getDate();

let hours = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hours, minute, seconds);

/*********************************************************************************/
// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(12 - 1);
date1.setDate(25);

date1.setHours(23);
date1.setMilliseconds(59);
date1.setSeconds(59);

console.log(date1);

/*********************************************************************************/
// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());
