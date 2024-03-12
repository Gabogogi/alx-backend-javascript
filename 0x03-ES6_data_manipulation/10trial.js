let ourMap = new Map([
  ['Apples', 10],
  ['Tomatoes', 10],
  ['Pasta', 1],
  ['Rice', 1],
  ['Banana', 5],
]);

console.log(ourMap);

ourMap.forEach((key, value) => {
  if (key === 1) {
    key = 100;
    console.log(key);
  };

  }

);