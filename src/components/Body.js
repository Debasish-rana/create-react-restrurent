import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimer from "./ShimerUi";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterList, setfilterList] = useState([]);
  const [searchText, setsearchText] = useState("")
  useEffect(() => {
    resApi();
  }, []);

  const resApi = async () => {
    const deta = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING "
    );

    const json = await deta.json();
    console.log(json);

    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (resList.length === 0) {
    return <Shimer />;
  }
  return (
    <div className="body">
      <div className="flex justify-between ml-28 mr-28 m-2">
        <div className="flex justify-between gap-4">
          <input
            type="text"
            className="border-2 border-black rounded-3xl p-2"
            value={searchText}
           
            onChange={(e)=>{
              setsearchText(e.target.value)
              
            }}
          />
          <button className="bg-sky-300 p-2 rounded-3xl w-28"
          onClick={()=>{
            const searchRestro = filterList.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
              
            )
           setResList(searchRestro)
            console.log(searchRestro)
          }}
          
          >Search</button>
        </div>
        <button
          className="bg-sky-300 p-3 rounded-3xl w-36"
          onClick={() => {
            const filterdList = filterList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setResList(filterdList);
            console.log(filterdList);
          }}
        >
          Top Restrurent
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {resList.map((restrurant) => (
          <Link key={restrurant.info.id} to={"/create-react-restrurent/restromenu/" + restrurant.info.id}><RestroCard key={restrurant.info.id} resDeta={restrurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
