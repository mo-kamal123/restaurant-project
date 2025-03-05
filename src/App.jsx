import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import Navbar from "./Navbar/Navbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "./components/MasterLayout/MasterLayout.jsx";
import Notfound from "./components/Notfound/Notfound.jsx";
import Home from "./components/Home/Home.jsx";
import Category from "./components/category/category.jsx";
import Recipe from "./components/Recipe/Recipe.jsx";
import AllOrders from "./components/AllOrders/AllOrders.jsx";
import MenuHome from "./menu/menu-componants/MenuHome.jsx";
function App() {
  const routes = createBrowserRouter([
    {
      path:"",
      element:<MenuHome/>,
      errorElement:<Notfound/>
    },
    {

      path: "/dashboard",
      element: <MasterLayout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Home /> },
        { path: "category", element: <Category /> },
        { path: "recipe", element: <Recipe /> },
        { path: "orders", element: <AllOrders /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
