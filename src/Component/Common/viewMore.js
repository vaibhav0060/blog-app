import React from "react";
// import TheLatest from "./TheLatest";
import { useState } from "react";
import arrow from "../../Images/arrow/arrow.svg";
import LatestStories from "./LatestStories";
import "./viewMore.css";
export default function ViewMore() {
  const [state, setstate] = useState(0);

  return (
    <div>
      <p className="view-more " onClick={() => setstate(state + 1)}>
        <img src={arrow} alt="back" /> VIEW MORE
      </p>
      {state !== 0 ? (
        <>
          <LatestStories />
          {/* <p className="load-more " onClick={() => setstate(state + 1)}></p> */}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
