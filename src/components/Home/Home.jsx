// import * as React from 'react';
import { BarChart } from "@mui/x-charts/BarChart";
import logo from "../../../assets/asset 2.png";
import logo1 from "../../../assets/asset 4.png";
import logo2 from "../../../assets/asset 5.png";
import logo3 from "../../../assets/asset 7.png";
export default function Home() {
  return (
    <div className="home row w-100 p-5 justify-content-center align-items-center">
      <div className="chars col-xl-6 col-sm-12">
        <h1 style={{ fontSize: "55px ", fontWeight: "700", padding: "10px" }}>
          {" "}
          Earnings{" "}
        </h1>
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["group A", "group B", "group C"] },
          ]}
          series={[
            { data: [4, 3, 5] },
            { data: [1, 6, 3] },
            { data: [2, 5, 6] },
          ]}
          // width={900}
          height={500}
        />
      </div>
      <div className="posts col-xl-6 d-flex align-items-center justify-content-between flex-wrap gap-3">
        <div className="col-xs-12 col-sm-12 col-md-5  d-flex align-items-center bg-white p-3 pt-5 pb-5 shadow">
          <img
            src={logo}
            style={{
              width: "100px ",
              height: "100px",
              borderRadius: "50%",
              margin: "20px",
            }}
          />
          <div>
            <h2 style={{ marginBottom: "20px", fontSize: "50px" , fontWeight:"700"  }}>128</h2>
            <p style={{ color: "#a2a2a2" , fontSize:"25px"}}> Total Menus </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5  d-flex align-items-center bg-white p-3 pt-5 pb-5 shadow">
          <img
            src={logo1}
            style={{
              width: "100px ",
              height: "100px",
              borderRadius: "50%",
              margin: "20px",
            }}
          />
          <div>
            <h2 style={{ marginBottom: "20px", fontSize: "50px" , fontWeight:"700" }}>128</h2>
            <p style={{ color: "#a2a2a2" , fontSize:"25px"}}> Total Menus </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 d-flex align-items-center bg-white p-3 pt-5 pb-5 shadow">
          <img
            src={logo3}
            style={{
              width: "100px ",
              height: "100px",
              borderRadius: "50%",
              margin: "20px",
            }}
          />
          <div>
            <h2 style={{ marginBottom: "20px",fontSize: "50px" , fontWeight:"700" }}>128</h2>
            <p style={{ color: "#a2a2a2" , fontSize:"25px"}}> Total Menus </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 d-flex align-items-center bg-white p-3 pt-5 pb-5 shadow">
          <img
            src={logo2}
            style={{
              width: "100px ",
              height: "100px",
              borderRadius: "50%",
              margin: "20px",
            }}
          />
          <div>
            <h2 style={{ marginBottom: "20px", fontSize: "50px" , fontWeight:"700" }}>128</h2>
            <p style={{ color: "#a2a2a2" , fontSize:"25px"}}> Total Menus </p>
          </div>
        </div>
      </div>
    </div>
  );
}
