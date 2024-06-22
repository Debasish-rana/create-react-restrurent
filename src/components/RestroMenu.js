import React, { useEffect, useState } from "react";
import Shimer from "./ShimerUi";
import { RESTRO_MENU_API } from "./util/url";
import { useParams } from "react-router-dom";
import RestroCatagory from "./RestroCatagory";
import Nonveg from "./Nonveg";

const RestroMenu = () => {
  const [restromenu, setRestromenu] = useState(null);

  const { resId } = useParams();
  //console.log(resId)


  useEffect(() => {
    fetchRestroMenuDeta();
  }, []);

  const fetchRestroMenuDeta = async () => {
    const response = await fetch(RESTRO_MENU_API + resId);
    const json = await response.json();
    setRestromenu(json.data);
    console.log(json);
  };

     //console.log(restromenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

     const catagories = restromenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

     console.log(catagories)

    // const nonvegItem = restromenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((nonveg)=>nonveg.card.card.itemCards.card.info.itemAttribute.vegClassifier === "NONVEG")

     //console.log(nonvegItem)
      


  if (restromenu === null) return <Shimer />;

  const {
    name,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    areaName,
  } = restromenu?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1 className="flex ml-[420px] mt-16 text-4xl font-bold ">{name}</h1>
      <div className="border-[15px] w-[700px] h-48  items-center m-auto mt-6 p-4 rounded-2xl shadow-xl ">
        {" "}
        <div className="flex gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            aria-hidden="true"
            strokeColor="rgba(2, 6, 12, 0.92)"
            fillColor="rgba(2, 6, 12, 0.92)"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#21973B"></stop>
                <stop offset="1" stop-color="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>

          <h1 className="font-bold">{avgRatingString}</h1>
          <h1 className="font-bold">( {totalRatingsString} )</h1>
          <h1 className="font-bold"> • {costForTwoMessage}</h1>
        </div>
        <h1 className="">
          Area - <span className="font-thin">{areaName}</span>
        </h1>
      </div>
     <Nonveg />
     {catagories.map((catagory)=>(<RestroCatagory key={catagory.card.card.title} data={catagory.card.card}/>))}
    </div>
  );
};

export default RestroMenu;
