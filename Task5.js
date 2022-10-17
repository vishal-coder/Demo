let keyparent = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

function printOutput(input) {
  let arr = [];

  if (!input) {
    return arr;
  }

  if (input == 1) {
    return arr;
  }

  while (input.includes("1")) {
    input = input.replace("1", "");
  }
  const length = input.length;

  if (length == 1) {
    arr.push(...keyparent[input]);
  } else {
    for (let i = 0; i < length; i = i + 2) {
      let temp = keyparent[input[i]];
      let temp2 = keyparent[input[i + 1]];
      //console.log("temp", temp);
      for (let j = 0; j < temp.length; j++) {
        //   console.log("temp2", temp2);

        for (let k = 0; k < temp2.length; k++) {
          console.log(temp[j] + "" + temp2[k]);
          arr.push(temp[j] + "" + temp2[k]);
        }
      }
    }
  }
  return arr;
}

console.log(printOutput("52"));
