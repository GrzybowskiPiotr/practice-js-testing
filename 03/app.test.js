import randomNumber from "./app.js";

function testArg11() {
  const testExpects = 1;
  if (randomNumber(1, 1) === testExpects) {
    return true;
  } else {
    return false;
  }
}

console.log(`Test liczb z zakresu 1 - 1. Wynik testu ${testArg11()}`);
