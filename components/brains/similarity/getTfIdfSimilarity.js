
// export function getTfIdfSimilarity(text1, text2) {
//   // create arrays of lowercase words
//   const words1 = text1.toLowerCase().match(/\b\w+\b/g);
//   const words2 = text2.toLowerCase().match(/\b\w+\b/g);

//   // combine words and remove duplicates
//   const words = [...new Set([...words1, ...words2])];

//   // count term frequency (TF) for each word in both texts
//   const tf = {};
//   for (let i = 0; i < words.length; i++) {
//     tf[words[i]] = [0, 0];
//   }
//   for (let i = 0; i < words1.length; i++) {
//     tf[words1[i]][0] = (tf[words1[i]][0] || 0) + 1;
//   }
//   for (let i = 0; i < words2.length; i++) {
//     tf[words2[i]][1] = (tf[words2[i]][1] || 0) + 1;
//   }

//   // calculate inverse document frequency (IDF) for each word
//   const idf = {};
//   for (let i = 0; i < words.length; i++) {
//     let count = 0;
//     if (tf[words[i]][0] > 0) count++;
//     if (tf[words[i]][1] > 0) count++;
//     idf[words[i]] = Math.log((2 / count));
//   }

//   // calculate TF-IDF scores for each word in both texts
//   const tfidf = {};
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     tfidf[word] = [tf[word][0] * idf[word], tf[word][1] * idf[word]];
//   }

    
//   // calculate cosine similarity
//   let dotProduct = 0;
//   let mag1 = 0;
//   let mag2 = 0;
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     dotProduct += tfidf[word][0] * tfidf[word][1];
//     mag1 += tfidf[word][0] ** 2;
//     mag2 += tfidf[word][1] ** 2;
//   }
//   mag1 = Math.sqrt(mag1);
//   mag2 = Math.sqrt(mag2);
//   console.log("dot product, mag1, mag2", dotProduct, mag1, mag2)
//   const similarity = dotProduct / (mag1 * mag2);

//   return similarity;
// }


// const docSimilarity = require('doc-similarity');

// export function getTfIdfSimilarity(text1,text2){
//   return docSimilarity.wordFrequencySim(text1, text2)
// }

var stringSimilarity = require("string-similarity");

export function getTfIdfSimilarity(text1,text2){
  // return docSimilarity.wordFrequencySim(text1, text2)

  return stringSimilarity.compareTwoStrings(text1, text2);

}

