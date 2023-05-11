import cheerio from 'cheerio';

export default async function handler(req, res) {
  const { url } = req.query;
  // console.log("i is url in api", url)
  // Fetch the HTML content of the website.
  const response = await fetch(url);

  // console.log("res",response)
  const htmlContent = await response.text();
  // console.log("htmlContent",htmlContent)

  // Parse the HTML content and extract the text.
  const $ = cheerio.load(htmlContent);
  const text = $('body').text();

  // console.log('text', text)

  // Clean the text
  const cleanedText = text.replace(/\s+/g, ' ').trim();
  // console.log('tcleanedTextext', cleanedText)

  // Return the cleaned text as the API response.
  res.status(200).json({ text: cleanedText });
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
