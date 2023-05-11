// const SummarizerManager = require("node-summarizer").SummarizerManager;

// async function summarizeText(text, numSentences) {
//   const summarizer = new SummarizerManager(text, numSentences);
//   // const summary = summarizer.getSummaryByFrequency().summary;
//   let summary = summarizer.getSummaryByRank().then((summary_object) => {
//     return summary_object.summary
//   })
//   // console.log("summary API", summary)
//   return summary;
// }

// export default async function handler(req, res) {
//   try {
//     const { text } = req.body;
//     // console.log("Monk monk!", text)

//     const summary = await summarizeText(text, 3);
//     // console.log("I AM SUMMARY!!", summary)
//     res.status(200).json({ summary });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }
const SummarizerManager = require("node-summarizer").SummarizerManager;

async function summarizeText(text, numSentences) {
  const summarizer = new SummarizerManager(text, numSentences);
  let summary = await summarizer.getSummaryByRank().then((summary_object) => {
    return summary_object.summary;
  });
  summary = summary.replace(/^[^a-zA-Z]*/g, '').charAt(0).toUpperCase() + summary.slice(1);
  return summary;
}

export default async function handler(req, res) {
  try {
    const { text } = req.body;
    const summary = await summarizeText(text, 3);
    res.status(200).json({ summary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}