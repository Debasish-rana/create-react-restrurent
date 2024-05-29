
import { CDN_URL } from "./util/url";
const RestroCard = (props) => {
const { resDeta } = props;

const {
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  locality,
  costForTwo,
  sla,
} = resDeta?.info

  return (
    <div className="card-container w-[235px] h-auto bg-green-100 m-2 p-4 rounded-xl shadow-xl">
      <div className="res-card">
      <img className="image w-[210px] h-[130px] rounded-xl shadow-2xl" alt="cdn"src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold mb-1 mt-3">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} </h4>
        <h4>{locality} </h4>
        <h4>{costForTwo} </h4>
        <h4>{sla?.slaString} </h4>
      </div>
    </div>
  );
};
export default RestroCard;
