import React, { useEffect } from "react";

const RestroMenu = () => {
  useEffect(() => {
    fetchRestroMenuDeta();
  }, []);

  const fetchRestroMenuDeta = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=806891&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await response.json();
    console.log(data);
  };

  return <div></div>;
};

export default RestroMenu;
