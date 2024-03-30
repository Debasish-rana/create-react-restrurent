import "./RestroCard.css";
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
    <div className="card-container">
      <div className="res-card">
      <img className="image" alt="cdn"src={CDN_URL + resDeta.info.cloudinaryImageId} />
        <h3>{name}</h3>
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
