import React from "react";
import { image_id } from "./util/url";

const ItemList = ({ items }) => {
  //console.log(items);
  
  //const nonvegItem = items.filter((nonveg)=>nonveg.card.info.itemAttribute.vegClassifier === "NONVEG")

  //console.log(nonvegItem)

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="bg-lime-50 m-4 p-3 shadow-2xl">
        <div className="flex">
          <div>
            <div className="text-lg">{item.card.info.name}</div>
            <div className="text-lg">₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</div>
            <div className="w-[550px]">{item.card.info.description}</div>
            <div>{item.card.info.itemAttribute.vegClassifier}</div>
          </div>
          <div>
            <img
              className="h-32 w-32 rounded-lg shadow-2xl"
              src={image_id + item.card.info.imageId}
              alt=""
              
            />
            <button className="bg-green-400 text-white p-2 rounded-2xl w-20  ml-6 mt-[-30px]">ADD +</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
