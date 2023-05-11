// const STOPWORDS = [
//   'a', 'an', 'and', 'the', 'to', 'in', 'of', 'that', 'this', 'i', 'your', 'for',

import {STOPWORDS} from './stopwords'

export function getKeywords(words, numKeywords) {
  // const words = text.toLowerCase().match(/\b\w+\b/g).filter(word => !STOPWORDS.includes(word));
  const tf = {};
  for (let i = 0; i < words.length; i++) {
    tf[words[i]] = (tf[words[i]] || 0) + 1;
  }
  const keys = Object.keys(tf);
  const n = keys.length;
  const idf = {};
  for (let i = 0; i < n; i++) {
    idf[keys[i]] = 0;
  }
  for (let i = 0; i < n; i++) {
    const word = keys[i];
    for (let j = 0; j < n; j++) {
      if (i !== j && words[j].includes(word)) {
        idf[word]++;
      }
    }
    idf[word] = Math.log(n / (1 + idf[word]));
  }
  const tfidf = {};
  for (let i = 0; i < n; i++) {
    const word = keys[i];
    tfidf[word] = tf[word] * idf[word];
  }
  const vec = [];
  for (let i = 0; i < n; i++) {
    vec[i] = tfidf[keys[i]];
  }
  const mag = Math.sqrt(vec.reduce((sum, x) => sum + x * x, 0));
  for (let i = 0; i < n; i++) {
    vec[i] /= mag;
  }
  const sims = [];
  for (let i = 0; i < n; i++) {
    const word1 = keys[i];
    let sim = 0;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        const word2 = keys[j];
        sim += vec[i] * vec[j] * (word1 === word2 ? 1 : 0.5);
      }
    }
    sims[i] = { word: word1, sim: sim };
  }
  sims.sort((a, b) => b.sim - a.sim);
  return sims.slice(0, numKeywords).map(x => x.word);
}
