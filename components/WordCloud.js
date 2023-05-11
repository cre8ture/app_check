import React from "react";
import TagCloud from "react-tagcloud";

const WordCloud = ({ words }) => {
  if (!words) {
    return <div></div>;
  }

  const wordArray = words.split(" ");
  const wordCounts = {};
  wordArray.forEach((word) => {
    if (!wordCounts[word]) {
      wordCounts[word] = 1;
    } else {
      wordCounts[word]++;
    }
  });

  const data = Object.keys(wordCounts).map((word) => ({
    value: word,
    count: wordCounts[word],
  }));

  return <TagCloud tags={data} />;
};

export default WordCloud;
