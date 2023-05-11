import { NextApiRequest, NextApiResponse } from 'next';
import { getKeywords } from '../../components/brains/keywords/getKeywords';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { text, numKeywords } = req.body;

  if (!text || !numKeywords) {
    return res.status(400).json({ message: 'Missing parameters' });
  }

  try {
    const keywords = await getKeywords(text, numKeywords);
    res.status(200).json({ keywords });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
