import { getTfIdfSimilarity } from '../../components/brains/similarity/getTfIdfSimilarity'
// import { sim } from '../../components/sim'




// const docSimilarity = require('doc-similarity');

// default function sim(text1,text2){
//   return docSimilarity.wordFrequencySim(text1, text2, [similarityFunction])
//   // console.log('turd')
//   // return 'turd'
// }


export default function handler(req, res) {
  const { text1, text2 } = req.body;
  // console.log("api sim WHAAAA")
  const similarity = getTfIdfSimilarity(text1, text2);
  res.status(200).json({ similarity });
}
