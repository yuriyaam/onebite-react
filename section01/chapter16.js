// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: "배유리",
    sayHi: function(){
        console.log("안녕");
    },
    
    // 함수는 이렇게 표현할 수 있음..!
    sayHello(){
        console.log("Hello!!");
    }
};

person.sayHi();
person.sayHello();