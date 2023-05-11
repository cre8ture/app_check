


function Stat({ x, numOfNonStopWordsInApp }) {



  function handleClick(e){
    e.preventDefault()
    console.log("i")
  }
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div>
        <div className="absolute right-10 items-center">
        <div className="tooltip" data-tip="Often it can be helpful to use similar words as the mission statement or app descrption">
        <div className="stat-figure text-secondary" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
          </div>
          </div>
        <div className="stat-title">keywords that match:</div>
        <div className="stat-value">{x} of {numOfNonStopWordsInApp}</div>
        <div className="stat-desc">keywords match</div>
      </div>
    </div>
  );
}

export default Stat;

