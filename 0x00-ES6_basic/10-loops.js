export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const idx of array) {
    array2.push(appendString + idx);
  }

  return arr;
}
