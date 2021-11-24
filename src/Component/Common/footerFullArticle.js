import React from "react";
import { Context1 } from "./Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import writer from "../../Images/fullBlog/writer.png";

export default function Footer() {
  const data = useContext(Context1);
  const latest = data.slice(24, 27);
  console.log(latest);
  return (
    <div className="footerBody">
      {latest.map((ele) => {
        return (
          <Link to={`./:${ele.id}`}>
            <div className=" latest-body" key={ele.id}>
              <div className="">{ele.image}</div>
              <div className="latest-content">
                <div className="blog-head">{ele.travelHead}</div>
                {/* <div className="blog-para">{ele.shortPara}</div>
                <div className="cat-date">
                  <div className="cat">{ele.category}</div>
                  <div className="date">{ele.travelDate}</div>
                </div> */}
                <div className="footerWriter">
                  <div className="writer-image">
                    <img src={writer} alt="writer" />
                  </div>
                  <div className="writerDesc">
                    <p className="wName">john doe</p>
                    <div className="date  bDate">{ele.travelDate}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
