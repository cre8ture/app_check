const KeywordList = ({ keywords1, keywords2, matches }) => {
  console.log("keywords1, keywords2, matches ", keywords1, keywords2, matches);

  const isMatch = (keyword) => {
    return matches?.includes(keyword.toLowerCase());
  };

  return (
    <div className="flex w-full h-full">
      <div className="flex-1 h-full mr-2 flex flex-col justify-center items-center">
        <h3 className="text-lg font-medtoolium mb-2">Your Submissions Top Keywords</h3>
        <ul className="list-disc p-4 space-y-2">
          {keywords1.map((keyword) => (
            <li key={keyword}>
              <div className="tooltip" data-tip="This is one of your document's keywords">
                {isMatch(keyword) ? (
                  <div className="badge badge-success gap-2">{keyword}</div>
                ) : (
                  <div className="badge text-color-pink-500 badge-accent badge-outline gap-2">{keyword}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 h-full ml-2 flex flex-col justify-center items-center">
        <h3 className="text-lg font-medium mb-2">Mission Statement's Top Keywords</h3>
        <ul className="list-disc p-4 space-y-2">
          {keywords2.map((keyword) => (
            <li key={keyword}>
              <div className="tooltip" data-tip="This is one of your document's keywords">
                {isMatch(keyword) ? (
                  <div className="badge badge-success gap-2">{keyword}</div>
                ) : (
                  <div className="badge text-color-pink-500 badge-accent badge-outline gap-2">{keyword}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeywordList;
