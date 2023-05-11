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
  const [inputCompleted, setInputCompleted] = useState(false)

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
    setInputCompleted(true)
    
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

      // console.log("pdfText", pdfText)
      setText(pdfText)
      memoizedGetText(pdfText);


    }
  };

  function handleSubmit(e) {
      setInputCompleted(true)
    
    e.preventDefault();
    isLoading(true)
    // console.log('button clicked', e.target)
    //     setText(e.target.value)

    // const inputValue = e.target.querySelector('textarea').value;
    const inputValue = textAreaRef.current.value;
    // console.log(textAreaRef)
    setText(inputValue); // Update the state value of text with the input value
    getText(inputValue)
    // console.log(text)
  };


  async function handleURLSubmit(e) {
      setInputCompleted(true)
    
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
      setInputCompleted(true)

    
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
      // console.log("pdfText", pdfText)
      setText(pdfText)
      memoizedGetText(pdfText);

    });
  };

  return (
    <>
      {/* {loading && <Loading />} */}
      {!inputCompleted && !text &&
        <div className="flex flex-row">
          <div className="w-1/2 pr-4">
            <div className="form-control">
              {/* <label className="label">
                <span className="label-text text-gray">Input your writing</span>
              </label> */}
              <div className="relative">
                <div className="absolute top-0 right-0 px-2">
                  <button className="btn btn-outline btn-square text-blue-500 mt-1">
                    Clear
                  </button>
                </div>
                <textarea
                  ref={textAreaRef}
                  className="textarea text-gray-800 textarea-bordered h-30 w-full"
                  placeholder="Input your writing..."
                ></textarea>
                <button className="btn btn-primary mt-2"
                  type='submit' onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="form-control">
              {/* <label className="label">
                <span className="label-text text-white">URL</span>
              </label> */}
              <div className="relative">
                <input
                  ref={urlRef}
                  type="text"
                  className="input input-bordered w-full text-gray-800"
                  placeholder="Or enter a URL..."
                />
                <button className="btn btn-primary mt-2"
                  onClick={handleURLSubmit}
                >Submit</button>
              </div>
            </div>
            <div className="form-control mt-2">
              {/* <label className="label">
                <span className="label-text text-gray">Upload File</span>
              </label> */}
              <div
                className="relative border-2 border-dashed rounded-md p-2"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <input type="file" className="input input-bordered hidden" />
                <div
                  className={`border-2 ${dragging ? "border-blue-500" : "border-gray-300"
                    } rounded-lg p-1 w-full text-center`}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={handleClick}
                >
                  <div className="mb-2 text-gray-500">
                    Or drag and drop or click to select a file
                  </div>
                  <div className="text-gray-800 text-sm">
                    (pdf files are accepted)
                  </div>
                </div>
                {/* <button className="btn btn-primary mt-2">Submit</button> */}
              </div>
            </div>
          </div>
        </div>}
      {text && inputCompleted &&
        <>
          {text && inputCompleted && (
            // <button
            //   onClick={() => { setText('') }}
            //   className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-auto"
            //   style={{ display: 'block', margin: 'auto' }}
            // >
            //   Reset
            // </button>

<div style={{ display: 'flex', alignItems: 'center' }}>
  <button
    onClick={() => { setText('');
                   setInputCompleted(false);
                   }}
    className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded mx-auto"
    style={{ flex: 1 }}
  >
    Reset
  </button>
  <span style={{ marginLeft: '10px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#4caf50" d="M20.79 5.87l-9.32 9.36-4.42-4.41-1.38 1.38 5.8 5.8 10.71-10.73z"/>
    </svg>
  </span>
</div>


          )}
        </>
      }
    </>
  );


}
