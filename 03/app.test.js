import randomNumber from "./app.js";

function testArg11() {
  const testExpects = 1;
  if (randomNumber(1, 1) === testExpects) {
    return `test Ok.`;
  } else {
    return `test not ok.`;
  }
}

function testArgsAreNumbes() {
  try {
    randomNumber("a", 2);
  } catch (e) {
    if ((e = "Arguments must be of type Number")) {
      return `Test ok. Funkcja zwraca ${e}`;
    }
  }

  try {
    randomNumber(2, "D");
  } catch (e) {
    if ((e = "Arguments must be of type Number")) {
      return `Test ok. Funkcja zwraca ${e}`;
    }
  }
}

function testValueArgs() {
  try {
    randomNumber(4, 3);
  } catch (error) {
    if (error) return `Test ok. ${error}`;
    else {
      return `Test not ok. ${error}`;
    }
  }
}

function testRangeVal(min, max) {
  const randomeNumber = randomNumber(min, max);
  if (randomeNumber > min || randomeNumber < max) {
    return `test ok. wartość mieści się pomiędzy ${min} - ${max}`;
  } else {
    return `Test Nok. wartość poza zakresem`;
  }
}

console.log(`Test liczb z zakresu 1 - 1. ${testArg11()}`);
console.log(`Test błędnego argumentu. ${testArgsAreNumbes()}`);
console.log(`Test błędnego zakresu argumentów. ${testValueArgs()}`);
console.log(`Test wartosci w zakresie ${testRangeVal(3, 9)}`);
