// The Flesch Kincaid Grade Level has the some of following levels: 0, 2, 4, 6, 8, 10, 12, 14, 16, and 18. The higher you score, the more difficult the text is to read. As a general guide, it is a smart idea to aim for a Flesch Kincaid reading level of 8. This is because the average reader will have reading skills equivalent to 8th graders.

export function calculateFKReadingLevel(text) {
  console.log("I am in the function! calculateFK")
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  const words = text.match(/\b\w+\b/g) || [];

  const sentenceCount = sentences.length;
  const wordCount = words.length;
  const syllableCount = words.reduce((acc, word) => acc + countSyllables(word), 0);

  const averageWordsPerSentence = wordCount / sentenceCount;
  const averageSyllablesPerWord = syllableCount / wordCount;

  const score = 0.39 * averageWordsPerSentence + 11.8 * averageSyllablesPerWord - 15.59;

  const gradeLevel = Math.round(score * 10) / 10;

  return gradeLevel;
}

function countSyllables(word) {
  const vowels = "aeiouy";
  let count = 0;
  let prevCharWasVowel = false;

  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    const isVowel = vowels.includes(char);

    if (isVowel && !prevCharWasVowel) {
      count++;
    }

    prevCharWasVowel = isVowel;
  }

  if (word.endsWith("e")) {
    count--;
  }

  if (count === 0) {
    count = 1;
  }

  return count;
}
