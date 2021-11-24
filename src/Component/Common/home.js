import "./home.css";
import "./Common.css";
import React from "react";
import { Context1 } from "./Context/Context";
import { useContext } from "react";
import TheLatest from "./TheLatest";
import LatestArticles from "./LatestArticles";
import LoadMore from "./loadMore";
import LatestStoriesForHome from "./LatestStoriesForHome";
// import LatestStories from "./LatestStories";

import ViewMore from "./viewMore";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import arrow from "../../Images/arrow/arrow.svg";

export default function Home() {
  const datas = useContext(Context1);
  const asidePost = datas.slice(13, 15);
  //   const [state, setstate] = useState(0);

  console.log(datas);
  return (
    <div>
      <div className="home-main">
        <Link to={`./Home/:${datas[3].id}`}>
          <div className="home-main-img">
            {datas[3].image}
            <div className="blog-head  main-img-head ">
              {datas[3].travelHead}
            </div>
            <div className="cat-date top-post-cat-date home-main-date">
              <div className=" white">{datas[3].category}</div>
              <div className="white">{datas[3].travelDate}</div>
            </div>
          </div>
        </Link>
        <div className="aside-home-post">
          {asidePost.map((data) => {
            return (
              <Link to={`./Home/:${data.id}`}>
                <div className="asidepost" key={data.id}>
                  <div className="aside-post-image">{data.image}</div>
                  <div className="aside-post-content">
                    <div className=" aside-post-head">{data.travelHead}</div>

                    <div className=" aside-post-cat-date">
                      <div className="cat ">{data.category}</div>
                      <div className="date ">{data.travelDate}</div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <p className="the-latest">The Latest</p>
      <TheLatest />
      <LatestArticles />
      <LoadMore />
      <p className="latest-stories"> Latest Stories </p>

      <LatestStoriesForHome />
      <ViewMore />
    </div>
  );
}
