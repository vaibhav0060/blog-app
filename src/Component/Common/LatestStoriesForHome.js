import React from "react";
import { Context1 } from "./Context/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
export default function LatestStoriesForHome() {
  const data = useContext(Context1);
  const latest = data.slice(24, 27);
  console.log(latest);
  return (
    <div className="theLatest">
      {latest.map((ele) => {
        return (
          <Link to={`./Home/:${ele.id}`}>
            <div className=" latest-body" key={ele.id}>
              {/* <div className="">{ele.image}</div> */}
              <div className="latest-stories-content">
                <div className="blog-head">{ele.travelHead}</div>
                <div className="blog-para">{ele.shortPara}</div>
                <div className="cat-date wrap">
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
}
