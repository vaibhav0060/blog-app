import React from "react";
import { useContext } from "react";
import "./Common.css";
import { Context1 } from "./Context/Context";
import Addvertisement from "./addvertisement";
import TopPosts from "./topPosts";
import { Link } from "react-router-dom";
import LoadMore from "./loadMore";
export default function Common6() {
  const data1 = useContext(Context1);
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
    <>
      <div className="common">
        {/* <div>{data1[0].image}</div> */}
        <div className="left">
          <p className="cat-title">Food</p>
          {data12.map((ele) => {
            return (
              <Link to={`./Food/:${ele.id}`}>
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
          <TopPosts />
          <Addvertisement />
        </div>
      </div>
      <LoadMore />
    </>
  );
}
