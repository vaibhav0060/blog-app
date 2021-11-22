import React from "react";
import TheLatest from "./TheLatest";
import { useState } from "react";
import arrow from "../../Images/arrow/arrow.svg";
export default function LoadMore() {
  const [state, setstate] = useState(0);

  return (
    <div>
      <p className="load-more " onClick={() => setstate(state + 1)}>
        <img src={arrow} alt="back" /> LOAD MORE
      </p>
      {state > 0 ? (
        <>
          <TheLatest />
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
