import React from "react";
import { useContext } from "react";
import "./Common.css";
import { Context1 } from "./Context/Context";
import Addvertisement from "./addvertisement";
import TopPosts from "./topPosts";
import { Link } from "react-router-dom";

// import arrow from "../../Images/arrow/arrow.svg";
// import { useState } from "react";
// import TheLatest from "./TheLatest";

export default function LatestArticles() {
  const data1 = useContext(Context1);
  //   const [state, setstate] = useState(0);
  // let spread = [...data1];
  // let obj = {
  //   id: 2,
  //   content: "something ",
  // };
  // spread.push(obj);
  // //   console.log(spread);
  // console.log(data1);
  const data12 = data1.filter((data) => data.category === "Food");
  console.log(data12);
  return (
    <div className="common articles">
      {/* <div>{data1[0].image}</div> */}
      <div className="left">
        <p className=" latestArticle-head">Latest Articles</p>
        {data12.map((ele) => {
          return (
            <Link to={`./Home/:${ele.id}`}>
              <div className="blog-body" key={ele.id}>
                <div className="blog-img">{ele.image}</div>
                <div className="blog-content">
                  <div className="blog-head">{ele.travelHead}</div>
                  <div className="blog-para">{ele.shortPara}</div>
                  <div className="cat-date">
                    <div className="cat">{ele.category}</div>
                    <div className="date">{ele.travelDate}</div>
                  </div>
                </div>
                {/* <div>{ele.category}</div>

              <div>{ele.shortPara}</div> */}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="right">
        <Addvertisement />
        <TopPosts />
      </div>
      {/* <p className="load-more " onClick={() => setstate(state + 1)}>
        <img src={arrow} alt="back" /> LOAD MORE
      </p>
      {state !== 0 ? <TheLatest /> : <div></div>} */}
    </div>
  );
}
