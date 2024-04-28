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
import PlacementUG from "./placemetUG.js";
import Navbar from "../Navbar.js";
import PlacementBtech from './BtechCSPlacement';
import PlacementChemical from './BtechChemicalPlacement';
import PlacementElectrical from './BtechElectricalPlacement';
import PlacementElectronics from './BtechElectronicsPlacement';
import PlacementBtechPhysics from './BtechPhysics';
import PlacementMba from './MbaPlacement';
import PlacementMtechCivil from './MtechCivil';
import PlacementMtechElectricalElectronics from './MtechElectricalElectronics';
import PlacementMtechMechanical from './MtechMechanical';
import PlacementPG from './PlacementPG.js';

const Placement2023 = () => {
  const [options] = useState({
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
    });
    const [series] = useState([
      {
        name: "Number of Students Registered",
        data: [974,799,877,932,1257,1368],
      },
      {
        name: "Number of Students placed",
        data: [580,643,647,714,1143,1146],
     },
    ]);
  return (
    <>
      <Navbar/>
      <h2 className="heading">WELCOME TO NITC PLACEMENT WEBSITE (Centre for Career Development)</h2>
      <div className="App">
      <h1>
     * Total Number of offers (2017-2023) * <i className="fas fa-user"></i>{" "}
    </h1>
        <div className="row">
          <h1>
          Number of offers <i className="fas fa-user"></i>{" "}
        </h1>
        <div className="chart-container">
            <Chart
              options={options}
              series={series}
              type="bar"
              width="750"
            />
            </div>
            </div>
            <div className="chart-container">
            <PlacementUG/>
            </div>
            <div className="chart-container">
          <PlacementPG/>
          </div>
            <div className="chart-container-alg">
           <PlacementBtech/>
            </div>
          
          <div className="chart-container">
          <PlacementChemical/>
          </div>
          <div className="chart-container-alg">
          <PlacementElectrical/>
          </div>
          <div className="chart-container-algsay">
          <PlacementElectronics/>
          </div>
          <div className="chart-container">
          <PlacementBtechPhysics/>
          </div>
          <div className="chart-container">
          <PlacementMba/>
          </div>
          <div className="chart-container-algsay">
          <PlacementMtechCivil/>
          </div>
          <div className="chart-container-algsay">
          <PlacementMtechElectricalElectronics/>
          </div>
          <div className="chart-container-algsay">
          <PlacementMtechMechanical/>
          </div>
      </div>
    </>
  );
};

export default Placement2023;
