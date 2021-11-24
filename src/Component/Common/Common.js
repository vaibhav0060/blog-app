// import { Link } from "react-router-dom";
import React from "react";
import "./Common.css";
import { useContext } from "react";
import { Context1 } from "./Context/Context";
// import arrow from "../../Images/arrow/arrow.svg";
import { Link } from "react-router-dom";
// import LoadMore from "./loadMore";
import Addvertisement from "./addvertisement";
import TopPosts from "./topPosts";
import LoadMore from "./loadMore";

export default function Common() {
  const data1 = useContext(Context1);
  // const dataTopPost = data1.slice(4, 7);

  const data12 = data1.filter((data) => data.category === "Technology");
  // console.log(data12);
  // console.log(dataTopPost);
  return (
    <>
      <div className="common">
        {/* <div>{data1[0].image}</div> */}
        <div className="left">
          <p className="cat-title">Technology</p>
          {data12.map((ele) => {
            return (
              <Link to={`./Technology/:${ele.id}`}>
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
          {/* <p className="load-more ">
          <Link to="/Technology/more">
            <img src={arrow} alt="back" /> LOAD MORE
          </Link>
          <Route path="/Technology/more" render={() => <LoadMore></LoadMore>}>
            {/* {data12.map((ele) => {
              return (
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
                </div>
              );
            })} */}
          {/* </Route> */}

          {/* <p> LOAD MORE</p> */}
          {/* </p> */}
        </div>
        <div className="right">
          <TopPosts />
          <Addvertisement />
        </div>
      </div>
      <LoadMore />{" "}
    </>
  );
}
