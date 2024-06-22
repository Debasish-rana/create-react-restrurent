import { useRouteError } from "react-router-dom";
import { ERROR_IMG } from "./components/util/url";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="items-center m-auto ">
      <h1>Opps!! Something went wrong</h1>
      <h3>
        {err.status} : {err.statusText}
      </h3>
      <img src={ERROR_IMG} alt="" />
    </div>
  );
};

export default Error;
