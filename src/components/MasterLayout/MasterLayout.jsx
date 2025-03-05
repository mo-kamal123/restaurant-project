// import { OutletTwoTone } from "@mui/icons-material";
import Navbar from "../../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MasterLayout() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "30px" , backgroundColor:"#f1f1f1" , height:"100vh"}}>
        <Outlet />
      </div>
    </div>
  );
}
