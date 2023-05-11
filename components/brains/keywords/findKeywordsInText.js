import {removeStopWords} from '../stopwords/removeStopWords'

export function findKeywordsInText(text, keywords) {
  const words = new Set(removeStopWords(text));
  const keywordsFound = new Set();

  for (const keyword of keywords) {
    if (words.has(keyword)) {
      keywordsFound.add(keyword);
    }
  }

  const num = keywordsFound.size;
  return { num, keywordsFound: Array.from(keywordsFound) };
}
