function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let breakfastOptions = ['pancakes', 'cereal', 'porridge', 'fruit'];
let randomIndexBreakfast = getRandomInt(0, breakfastOptions.length);
let breakfastChoice = breakfastOptions[randomIndexBreakfast];
console.log(breakfastChoice);
