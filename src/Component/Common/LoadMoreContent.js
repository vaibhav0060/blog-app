import { Context1 } from "./Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./LoadMoreContent.css";
const LoadMoreContent = () => {
  const data = useContext(Context1);
  const latest = data.slice(21, 27);
  console.log(latest);
  return (
    <div className=" theLoadMore">
      {latest.map((ele) => {
        return (
          <Link to={`./Home/:${ele.id}`}>
            <div className=" loadMoreBody" key={ele.id}>
              <div className="image-div">{ele.image}</div>
              <div className="latest-content">
                <div className="blog-head">{ele.travelHead}</div>
                <div className="blog-para">{ele.shortPara}</div>
                <div className="cat-date">
                  <div className="cat">{ele.category}</div>
                  <div className="date">{ele.travelDate}</div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default LoadMoreContent;
