// export function countMatchingWords(arr1, arr2) {
//   let count = 0;
//   let matches = []
//   const lowerArr1 = arr1.map(word => word.toLowerCase());
//   const lowerArr2 = arr2.map(word => word.toLowerCase());
//   lowerArr1.forEach(word1 => {
//     lowerArr2.forEach(word2 => {
//       if (word1 === word2) {
//         count++;
//         matches.push(word1)
//       }
//     });
//   });
//   return {numMatches : count, wordsThatMatch: matches};
// }
export function countMatchingWords(arr1, arr2) {
  const set1 = new Set(arr1.map(word => word.toLowerCase()));
  const set2 = new Set(arr2.map(word => word.toLowerCase()));

  const intersection = new Set(
    [...set1].filter(word => set2.has(word))
  );

  return { numMatches: intersection.size, wordsThatMatch: [...intersection] };
}
