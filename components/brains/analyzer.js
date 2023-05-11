import { removeStopWords } from './stopwords/removeStopWords'
import { countMatchingWords } from './keywords/countMatchingWords'
// ADD USED AT LEAST 5 KEYWORDS IN YOUR APP
let suggestions = {
  "At least 2 keywords match the app's top keywords": false,
  "have at least 50% similarity in structure": false,
  "use similar language and tone as the mission": false,
  "have clear readability (simple and easy to understand syntax)": false,
  "have a readability level similar to the ap": false
}

async function callReadability(text) {
  const response = await fetch('/api/readability', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text })
  });
  const { readabilityScore } = await response.json();
  return readabilityScore;
}

async function getKeywords(text, numKeywords) {
  return await fetch('/api/keywords', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text, numKeywords })
  })
    .then(response => response.json())
    .then(data => data.keywords)
    .catch(error => console.error(error));
}


async function getTfIdfSimilarity(text1, text2) {
  const response = await fetch('/api/similarity', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text1, text2 }),
  });
  const data = await response.json();
  const similarity = data.similarity;
  return similarity;
}

function makeSuggestions(analysis) {
  // {
  //   const suggestions ={
  //   "used at least 5 of the top keywords":false,
  //   "have at least 50% similarity in structure":false,
  //   "use similar language and tone as the mission":false,
  //   "have clear readability (simple and easy to understand syntax)":false,
  //   "have a readability level similar to the app": false
  // }
  // {numMatches : count, wordsThatMatch: matches}
  if (analysis[0].keywordsMatching.count >= 2) {
    suggestions["At least 2 keywords match the app's top keywords"] = true
  }
  if (analysis[0].similarity >= 0.50) {
    suggestions["have at least 50% similarity in structure"] = true
  }
  if (analysis[0].gradeLevel >= 6 || analysis[0].gradeLevel <= 10) {
    suggestions["have clear readability (simple and easy to understand syntax)"] = true
  }
  if (Math.abs(analysis[0].gradeLevel - analysis[1].gradeLevel) >= 2.5) {
    suggestions["have a readability level similar to the app"] = true
  }
}

export async function analyzer(text1, text2) {
  // console.log("Analyzer has been callsed,")

  let analysis = [
    {
      gradeLevel: 0,
      keywords: [],
      similarity: 0, // will be same score
      keywordsMatching: {},
      suggestions: {},
      allWordsExceptStopWords: []
    },
    {
      gradeLevel: 0,
      keywords: [],
      similarity: 0,
      allWordsExceptStopWords: []

    }
  ];

  analysis[0].gradeLevel = await callReadability(text1);
  analysis[1].gradeLevel = await callReadability(text2);

  var text1_cleaned = removeStopWords(text1)
  var text2_cleaned = removeStopWords(text2)
  // console.log("text1_cleaned", text1_cleaned)
  analysis[0].allWordsExceptStopWords = text1_cleaned
  analysis[1].allWordsExceptStopWords = text2_cleaned

  analysis[0].keywords = await getKeywords(text1_cleaned, 10)
  analysis[1].keywords = await getKeywords(text2_cleaned, 10)

  var sim = await getTfIdfSimilarity(text1, text2)
  analysis[0].similarity = sim
  analysis[1].similarity = sim

  // keywords match
  var keywordsMatch = countMatchingWords(text1_cleaned, text2_cleaned)
  analysis[0].keywordsMatching = keywordsMatch
  makeSuggestions(analysis)
  console.log("suggestions", suggestions)
  analysis[0].suggestions = suggestions //makeSuggestions(analysis)
  return analysis
}
