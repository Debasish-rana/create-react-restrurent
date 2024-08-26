import React, { useEffect, useState } from "react";
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
import UserContext from "./components/util/UserContext";
import appStore from "./components/util/appStore";
import { Provider } from "react-redux";
import Cart from "./components/util/Cart";


function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Debasish Rana",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <div>
        <UserContext.Provider value={{ loggedInUser: userName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </div>
      </Provider>
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
        path: "/create-react-restrurent/restromenu/:resId",
        element: <RestroMenu />,
      },
      {
        path: "/create-react-restrurent/cart",
        element:<Cart />
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
