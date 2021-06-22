/* 
Sliding Window - findLongestSubstring

Write a function called findLongestSubstring, which accepts a string and returns the lenght of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
*/

function findLongestSubstring(str) {
    let longest = 0;
    let subStr = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (subStr[char]) {
            start = Math.max(start, subStr[char]);
        }
        longest = Math.max(longest, i - start + 1);

        subStr[char] = i + 1;
    }
    return longest;
}

console.log(findLongestSubstring('rithmschool') )