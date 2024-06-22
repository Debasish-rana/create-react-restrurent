import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./components/About";
import Contact from "./Contact";
import Error from "./Error";
import RestroMenu from "./components/RestroMenu";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/create-react-restrurent",
    element: <App />,
    children: [
      {
        path: "/create-react-restrurent/",
        element: <Body />,
      },
      {
        path: "/create-react-restrurent/home",
        element: <Body />,
      },
      {
        path: "/create-react-restrurent/about",
        element: <About />,
      },
      {
        path: "/create-react-restrurent/cotact",
        element: <Contact />,
      },
      {
        path:"/create-react-restrurent/restromenu/:resId",
        element:<RestroMenu />
      }
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
