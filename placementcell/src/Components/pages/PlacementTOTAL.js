// import React, { useState } from "react";
// import Chart from "react-apexcharts";
// import Placement2022 from "./placemetUG.js";
// import Navbar from "./Navbar.js";
// const Placement2023 = () => {
//   const [state, setState] = useState({
//     options: {
//       colors: ["#000065", "#FF8C00"],
//       chart: {
//         id: "basic-bar",
//       },
//       xaxis: {
//          categories: ["2017-2018", "2018-2019", "2019-2020", "2020-2021", "2021-2022", "2022-2023"],
//       },
//       yaxis: {
//         categories: [0,500,1000,1500],
//       },
//     },
//     series: [
//       {
//         name: "Number of Students Registered",
//         data: [974,799,877,932,1257,1368],
//       },
//       {
//         name: "Number of Students placed",
//         data: [580,643,647,714,1143,1146],
//       },
//     ],
//   });

//   return (
//     <>
//     <Navbar/>
//     <div className="App">
//       <h1>
//         Number of offers <i className="fas fa-user"></i>{" "}
//       </h1>
//       <div className="row">
//         <div className="col-4">
//           <Chart
//             options={state.options}
//             series={state.series}
//             type="bar"
//             width="500"
//           />
//         </div>
//         <Placement2022/>
//       </div>
   
//     </div>
//     </>
//   );
// };

// export default Placement2023;


import React, { useState } from "react";
import Chart from "react-apexcharts";
import Placement2022 from "./placemetUG.js";
import Navbar from "./Navbar.js";

const Placement2023 = () => {
  const [state, setState] = useState({
    options: {
      colors: ["#000065", "#FF8C00"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
         categories: ["2017-2018", "2018-2019", "2019-2020", "2020-2021", "2021-2022", "2022-2023"],
      },
      yaxis: {
        categories: [0,500,1000,1500],
      },
    },
    series: [
      {
        name: "Number of Students Registered",
        data: [974,799,877,932,1257,1368],
      },
      {
        name: "Number of Students placed",
        data: [580,643,647,714,1143,1146],
      },
    ],
  });

  return (
    <>
      <Navbar/>
      <div className="App">
      <h1>
     * Total Number of offers (2017-2023) * <i className="fas fa-user"></i>{" "}
    </h1>
        <div className="row">
          <div className="col-6">
          <h1>
          Number of offers <i className="fas fa-user"></i>{" "}
        </h1>
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="750"
            />
          </div>
          <div className="col-6">
            <Placement2022/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placement2023;
