import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import "./Body.css";
const Body = () => {
  const [resList, setResList] = useState([]);
  useEffect(() => {
    resApi();
  }, []);

  const resApi = async () => {
    const deta = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await deta.json();
    console.log(json);

    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="body">
      <div className="res-container">
        {resList.map((restrurant) => (
          <RestroCard key={restrurant.info.id} resDeta={restrurant}/>
          ))}
      </div>
    </div>
  );
};

export default Body;
