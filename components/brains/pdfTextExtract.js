import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc
  = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

export async function pdfTextExtract(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = async function() {
      const buffer = new Uint8Array(fileReader.result);
      const pdf = await pdfjsLib.getDocument(buffer).promise;
      const maxPages = pdf.numPages;
      const countPromises = [];

      for (let j = 1; j <= maxPages; j++) {
        const page = await pdf.getPage(j);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item) => item.str).join(' ');
        countPromises.push(pageText);
      }

      const pdfText = await Promise.all(countPromises);
      resolve(pdfText.join(' '));
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
    fileReader.readAsArrayBuffer(file);
  });
}
