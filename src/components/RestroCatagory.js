import React, { useState } from "react";
import ItemList from "./ItemList";

const RestroCatagory = ({ data }) => {
  console.log(data);

const [showItem ,setShowItem] = useState(false)

const clickHandeler = ()=>{
   setShowItem(!showItem)
}
  return (
    <div>
      
      <div className="p-2 w-6/12 m-auto mt-11 bg-emerald-100  font-bold shadow-2xl cursor-pointer"  onClick={clickHandeler}>
        <div className="flex justify-between">
          <span>
            {data.title}({data.itemCards.length})
          </span>
          <span>
           {showItem === false? <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
            </svg>:<svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>}
          </span>
        </div>
        <div>
          {showItem && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestroCatagory;
