import randomNumber from "./app.js";

function testArg11() {
  const testExpects = 1;
  if (randomNumber(1, 1) === testExpects) {
    return true;
  } else {
    return false;
  }
}

function testArgsAreNumbes() {
  try {
    randomNumber("a", 2);
  } catch (error) {
    return `Funkcja zwraca ${error}`;
  }

  try {
    randomNumber(2, "D");
  } catch (e) {
    return `Funkcja zwraca błąd ${e}`;
  }
}

console.log(`Test liczb z zakresu 1 - 1. Wynik testu ${testArg11()}`);
console.log(`Test błędnego argumentu. Wynik testu ${testArgsAreNumbes()}`);
