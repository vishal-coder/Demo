function pal(input) {
  const length = input.length;
  if (length == 0 || length == 1) {
    return true;
  }

  if (input.charAt(0) == input.charAt(length - 1)) {
    return pal(input.slice(1, length - 1));
    //   return isPalindrome(str.slice(1, length - 1));
  } else {
    return false;
  }
}

function isPalindrome(str) {
  const length = str.length;
  let maxPalLength = 0;
  let maxsubpal = "";
  if (length == 0 || length == 1) {
    return true;
  }

  for (let i = 0; i < length; i++) {
    for (let j = 2; j < length; j++) {
      const flag = pal(str.slice(i, j));
      if (flag) {
        if (maxPalLength < str.slice(i, j).length) {
          maxPalLength = str.slice(i, j).length;
          maxsubpal = str.slice(i, j);
        }
      }
    }
  }
  return maxsubpal;
}
console.log(isPalindrome("sendsabcbasoon"));
