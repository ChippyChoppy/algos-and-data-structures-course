function sortString(input, sortStr) {

  let j = 0;
  let sorted = "";

  for (let i = 0; i < sortStr.length; i++) {
    if (sortStr[i] !== input[j]) j++;
    if (sortStr[i] === input[j]) {
      sorted += input[j]
      console.log(sorted)
      console.log(input.slice(j))
      return sortString(input.slice(j), sortStr);
    }
  }
  return sorted
}