module.exports = function check(str, bracketsConfig) {
  const pairsString = bracketsConfig.flat().join().replaceAll(",", "");
  const pairsArray = [];
  for (let i = 0; i < pairsString.length; i += 2) {
    pairsArray.push(pairsString[i] + pairsString[i + 1]);
  }

  let result = str;
  for (let i = 0; i < str.length / 2; i++) {
    for (let pair of pairsArray) {
      if (result.includes(pair)) {
        result = result.replace(pair, "");
      }
    }
  }

  return !result;
};
