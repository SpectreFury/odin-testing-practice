function analyzeArray(array) {
  const average = Math.floor(array.reduce((acc, cur) => (acc + cur) / 2, 0));
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArray;
