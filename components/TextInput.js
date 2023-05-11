import { useState, useEffect, useRef, useCallback } from "react";
// import './styles.css';
import { pdfTextExtract } from './brains/pdfTextExtract'
import { scrapeUrl } from './brains/scrapeUrl'
import Loading from './Loading'


export default function TextInput({ getText, isLoading, loading }) {
  const [dragging, setDragging] = useState(false);
  const [text, setText] = useState('');
  const memoizedGetText = useCallback(getText, []);
  const textAreaRef = useRef(null);
  const urlRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  async function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    // isLoading(true)
    setDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      isLoading(true)

      const file = files[0];
      // console.log("File selected:", file);
      // do something with the selected file here
      // textExtract(file)
      let pdfText = await pdfTextExtract(file)

      console.log("pdfText", pdfText)
      setText(pdfText)
      memoizedGetText(pdfText);


    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    isLoading(true)
    // console.log('button clicked', e.target)
    //     setText(e.target.value)

    // const inputValue = e.target.querySelector('textarea').value;
    const inputValue = textAreaRef.current.value;
    console.log(textAreaRef)
    setText(inputValue); // Update the state value of text with the input value
    getText(inputValue)
    console.log(text)
  };


  async function handleURLSubmit(e) {
    e.preventDefault();
    isLoading(true)
    const url = urlRef.current.value
    // console.log('url clicked', url)

    const urlText = await scrapeUrl(url)
    // console.log(urlText)
    setText(urlText)
    getText(urlText)
  }

  async function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    // isLoading(true)
    const fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("accept", "*");
    fileInput.click();
    fileInput.addEventListener("change", async (e) => {
      isLoading(true)

      const file = e.target.files[0];
      // console.log("File selected:", file);
      // do something with the selected file here
      // textExtract(file)
      let pdfText = await pdfTextExtract(file)
      console.log("pdfText", pdfText)
      setText(pdfText)
      memoizedGetText(pdfText);

    });
  };

  return (
   <>
  {loading && <Loading/> }
  {!loading &&
  <div className="flex flex-row p-6">
    <div className="w-1/2 pr-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Input Text</span>
        </label>
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-2">
            <button className="btn btn-outline btn-square text-white">
              Clear
            </button>
          </div>
          <textarea
            ref={textAreaRef}
            className="textarea text-gray-800 textarea-bordered h-48 w-full"
            placeholder="Enter some text..."
          ></textarea>
          <button className="btn btn-primary mt-2"
            type='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
    <div className="w-1/2 pl-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">URL</span>
        </label>
        <div className="relative">
          <input
            ref={urlRef}
            type="text"
            className="input input-bordered w-full text-gray-800"
            placeholder="Enter a URL"
          />
          <button className="btn btn-primary mt-2"
            onClick={handleURLSubmit}
          >Submit</button>
        </div>
      </div>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text text-white">Upload File</span>
        </label>
        <div
          className="relative border-2 border-dashed rounded-md p-6"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input type="file" className="input input-bordered hidden" />
          <div
            className={`border-2 ${dragging ? "border-blue-500" : "border-gray-300"
              } rounded-lg p-4 w-full text-center`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <div className="mb-2 text-yellow-200">
              Drag and drop or click to select a file
            </div>
            <div className="text-gray-500 text-sm">
              (pdf files are accepted)
            </div>
          </div>
          {/*         <button className="btn btn-primary mt-2">Submit</button> */}
        </div>
      </div>
    </div>
  </div>}
</>

  );

}
