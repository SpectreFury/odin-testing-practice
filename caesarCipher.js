const wordArray = [];

for (let i = 97; i < 97 + 26; i++) {
  wordArray.push(String.fromCharCode(i));
}

function caesarCipher(word, key) {
  const tempArray = word.split("");
  const newArray = [];

  tempArray.forEach((character) => {
    if (character === " ") {
      newArray.push(character);
    } else if (!wordArray.includes(character)) {
      newArray.push(character);
    } else {
      const index = wordArray.indexOf(character) + key;

      newArray.push(wordArray[index]);
    }
  });

  return newArray.join("");
}

module.exports = caesarCipher;
