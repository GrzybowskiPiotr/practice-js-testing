export default function randomNumber(min, max) {
  function isNumberic(x) {
    return ["number", "integer", "bigint"].includes(typeof x);
  }

  if (!isNumberic(min) || !isNumberic(max)) {
    throw new Error("Arguments must be of type Number");
  } else {
    return Math.random() * (min - max) + min;
  }
}
