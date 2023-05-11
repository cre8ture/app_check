import {STOPWORDS} from './stopwords'

export function removeStopWords(text) {
  const words = text.toLowerCase().match(/\b\w+\b/g).filter(word => !STOPWORDS.includes(word));
  return words;
}
