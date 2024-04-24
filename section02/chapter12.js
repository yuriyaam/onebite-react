function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

/*********************************************************************************/

function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;

    callback(freezedFood);
  }, 1500);
}

orderFood((value) => {
  console.log(value);

  cooldownFood(value, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(value, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
