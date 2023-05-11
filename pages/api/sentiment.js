import Sentiment from 'sentiment';
import { NextApiRequest, NextApiResponse } from 'next';

const sentiment = new Sentiment();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check that the request method is POST
  if (req.method === 'POST') {
    // Get the documents from the request body
    const { document1, document2 } = req.body;

    // Analyze the sentiment of the two documents
    const analysis = analyzeSentiment(document1, document2);

    // Send the analysis as a response
    res.status(200).json(analysis);
  } else {
    // Return an error if the request method is not POST
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

// Function to analyze the sentiment of two documents
function analyzeSentiment(document1: string, document2: string) {
  // Analyze the sentiment of each document
  const result1 = sentiment.analyze(document1);
  const result2 = sentiment.analyze(document2);

  // Compare the sentiment scores of the two documents
  let toneComparison;
  if (result1.score > result2.score) {
    toneComparison = 'Document 1 has a more positive tone than Document 2';
  } else if (result1.score < result2.score) {
    toneComparison = 'Document 2 has a more positive tone than Document 1';
  } else {
    toneComparison = 'The tone of the two documents is similar';
  }

  // Find the words contributing to the tone of each document
  const words1 = result1.positive.concat(result1.negative);
  const words2 = result2.positive.concat(result2.negative);

  // Return an object containing the tone comparison and words contributing to the tone
  return { toneComparison, words1, words2 };
}
