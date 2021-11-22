import React from "react";
import { useContext } from "react";
import { Context1 } from "./Context/Context";
import { Link } from "react-router-dom";
export default function TopPosts() {
  const data1 = useContext(Context1);
  console.log(data1);
  const dataTopPost = data1.slice(4, 7);
  console.log(dataTopPost);

  return (
    <div>
      <div className="top-post">
        <p className="cat-title top-post-head">Top Posts</p>
        <Link to={`./Home/:${data1[3].id}`}>
          <div className="top-first-post">
            <div className="top-first-post-img">{data1[3].image}</div>
            <div className="first-post-content"></div>
            <div className="blog-head"> {data1[3].travelHead}</div>

            <div className="cat-date top-post-cat-date">
              <div className="cat">{data1[3].category}</div>
              <div className="date">{data1[3].travelDate}</div>
            </div>
          </div>
        </Link>

        {dataTopPost.map((ele) => {
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
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
