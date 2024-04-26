import React, { useState } from "react";
import Chart from "react-apexcharts";

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
        data: [624,530,579,590,792,887],
      },
      {
        name: "Number of Students placed",
        data: [457,472,459,515,756,751],
      },
    ]);
  

  return (
    <div>
      <h1>
        Number of offers(UG) <i className="fas fa-user"></i>{" "}
      </h1>
      <div className="row">
        <div className="col-4">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="750"
          />
        </div>
      </div>
    </div>
  );
};

export default Placement2023;
