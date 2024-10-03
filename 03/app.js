export default function randomNumber(min, max) {
  function isNumberic(x) {
    return ["number", "integer", "bigint"].includes(typeof x);
  }

  if (!isNumberic(min) || !isNumberic(max)) {
    throw new Error("Arguments must be of type Number");
  } else if (min > max) {
    throw new Error("The first argument must have lower value then second");
  } else {
    return Math.random() * (min - max) + min;
  }
}
