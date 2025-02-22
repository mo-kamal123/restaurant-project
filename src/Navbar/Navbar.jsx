import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import CloseIcon from "@mui/icons-material/Close";
import { MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
// import HomeIcon from "@mui/icons-material/Home";
import logo from "../../assets/logo-text (1).png";
import person from "../../assets/1 (1).jpg";
export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pages = [
    { name: "Dashboard", link: "" },
    { name: "Category", link: "category" },
    { name: "Recipe", link: "recipe" },
    { name: "All Orders", link: "orders" },
    { name: "Category ", link: "category" },
  ];
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {pages.map((page) => (
          <MenuItem
            key={page.name}
            component={Link}
            to={`/dashboard/${page.link}`}
            onClick={toggleDrawer(false)}
            sx={{
              padding: "10px 15px",
              margin: "20px 0px",
            }}
          >
            <Typography
              sx={{
                color: "#7e7e7e",
                fontWeight: "bolder",
                fontSize: "26px",
                paddingLeft: "10px",
              }}
            >
              {page.name}
            </Typography>
          </MenuItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div
      className="w-100 p-3 d-flex align-items-center justify-content-between"
      style={{ background: "#fbfbfb" }}
    >
      <div className="logo">
        <Button
          onClick={toggleDrawer(true)}
          style={{
            backgroundColor: "#2f4cdd",
            padding: "25px 20px ",
            transition: ".3s",
          }}
        >
          {open == false ? (
            <MenuOpenIcon
              style={{ fontSize: "40px", color: "#fff", fontWeight: "bolder" }}
            />
          ) : (
            <CloseIcon
              style={{ fontSize: "40px", color: "#fff", fontWeight: "bolder" }}
            />
          )}
        </Button>
        <img src={logo} style={{ margin: "0px 20px ", cursor: "pointer" }} />
      </div>
      <div className="orders">
        <ul>
          <li>
            <Link to={""}>Home</Link>
            <Link to={"orders"}>All Orders</Link>
            <Link to={"recipe"}>All Recipes</Link>
            <Link to={"category"}>All Categories</Link>
          </li>
        </ul>
      </div>
      <div className="image">
        <img
          src={person}
          style={{
            width: "80px",
            border: "7px solid #2f4cdd",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
