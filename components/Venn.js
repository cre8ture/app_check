// import React, { useEffect, useRef } from "react";
// import { VennDiagramChart, extractSets } from "chartjs-chart-venn";
// import { Chart } from "chart.js";

// const ChartVenn = ({ keywords1, shared, keywords2 }) => {
//   const canvasRef = useRef(null);

//   const config = {
//     type: "venn",
//     data: extractSets(
//       [
//         {
//           label: "Keywords 1",
//           values: keywords1
//         },
//         {
//           label: "Shared",
//           values: shared
//         },
//         {
//           label: "Keywords 2",
//           values: keywords2
//         }
//       ],
//       {
//         label: "Venn Diagram"
//       }
//     ),
//     options: {
//       borderWidth: 1,
//       backgroundColor: [
//         "rgba(255, 26, 104, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)"
//       ],
//       borderColor: [
//         "rgba(255, 26, 104, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)"
//       ]
//     }
//   };

//   useEffect(() => {
//     const chart = new VennDiagramChart(canvasRef.current, config);

//     return () => {
//       chart.destroy();
//     };
//   }, [keywords1, shared, keywords2]);

//   return (
//     <>
//       <div className="App">
//         <canvas ref={canvasRef} id="canvas"></canvas>
//       </div>
//     </>
//   );
// };

// export default ChartVenn;


import React, { useEffect, useRef } from "react";
import { VennDiagramChart, extractSets } from "chartjs-chart-venn";
import { Chart } from "chart.js";

const ChartVenn = ({ keywords1, keywords2 }) => {
  const canvasRef = useRef(null);

  const config = {
    type: "venn",
    data: extractSets(
      [
        {
          label: "Yours",
          values: keywords1
        },
        
        {
          label: "Theirs",
          values: keywords2
        }
      ],
      {
        label: "Venn Diagram of Matching Words"
      }
    ),
    options: {
      borderWidth: 1,
      backgroundColor: [
        "rgba(255, 26, 104, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "rgba(255, 26, 104, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ]
    }
  };

  useEffect(() => {
    const chart = new VennDiagramChart(canvasRef.current, config);

    return () => {
      chart.destroy();
    };
  }, [keywords1, keywords2]);

  return (
    <>
      <div className="p-3">
        <canvas ref={canvasRef} id="canvas"></canvas>
      </div>
    </>
  );
};

export default ChartVenn;
