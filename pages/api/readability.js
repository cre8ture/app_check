import {calculateFKReadingLevel} from '../../components/brains/readability/calculateFKReadingLevel'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const text = req.body.text;
    // console.log("I AM TEXT", text)
    const readabilityScore = calculateFKReadingLevel(text) 
      // getReadability(text);
    res.status(200).json({ readabilityScore });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

function getReadability(text) {
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [];
  const words = text.match(/\b[-'\w]+\b/g) || [];
  const syllables = words.reduce((acc, word) => acc + countSyllables(word), 0);

  const sentenceCount = sentences.length;
  const wordCount = words.length;

  if (sentenceCount === 0 || wordCount === 0) {
    return 0;
  }

  const averageWordsPerSentence = wordCount / sentenceCount;
  const averageSyllablesPerWord = syllables / wordCount;

  return Math.round(
    206.835 - 1.015 * averageWordsPerSentence - 84.6 * averageSyllablesPerWord
  );
}



function countSyllables(word) {
  word = word.toLowerCase();
  if (word.length <= 3) {
    return 1;
  }
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 0;
}
