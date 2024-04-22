// 2. switch문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if문보다 더 직관적이다.

let animal = "cat";

switch(animal) {
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog":{
        console.log("개");
        break;
    }
    case "bear":{
        console.log("곰");
        break;
    }
    default:{
        console.log("그런 동물은 전 모릅니다.");
    }
}