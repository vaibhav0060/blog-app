import React from "react";
// import TheLatest from "./TheLatest";
import { useState } from "react";
import arrow from "../../Images/arrow/arrow.svg";
import LoadMoreContent from "./LoadMoreContent";
export default function LoadMore() {
  let [state, setstate] = useState(false);

  return (
    <div>
      <p className="load-more " onClick={() => setstate((state = !state))}>
        <img src={arrow} alt="back" /> LOAD MORE
      </p>
      {state ? (
        <>
          {/* <TheLatest /> */}
          <LoadMoreContent />
          {/* <p className="load-more " onClick={() => setstate(state + 1)}>
            <img src={arrow} alt="back" /> LOAD MORE
          </p> */}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
