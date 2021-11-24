import React from "react";
import clap from "../../Images/fullBlog/clap.svg";
import share from "../../Images/fullBlog/share.svg";
import writer from "../../Images/fullBlog/writer.png";
import "./fullBlog.css";
import HeadFullBlog from "./HeadFullBlog";
import { useParams } from "react-router";
import { useState } from "react";
import { Context1 } from "./Context/Context";
import { useContext } from "react";
import Footer from "./footerFullArticle";
// import LatestStories from "./LatestStories";
// import TheLatest from "./TheLatest";
// LatestStories;
// import { useRef } from "react";
// import { useEffect } from "react";
export default function FullBlog() {
  // const matchh = this.{match}
  const [claps, setClap] = useState(Math.floor(Math.random() * 100));
  // const ref = useRef(initialValue)
  // useEff
  const id = useParams();
  // const sliceId = id[1];
  // console.log(sliceId);
  const context = useContext(Context1);
  // console.log(context);

  const stringId = JSON.stringify(id);
  console.log(typeof stringId);
  let sliceId = stringId.slice(8, stringId.length - 2);
  console.log(sliceId);
  let numId = parseInt(sliceId);
  // console.log(sliceId);
  // console.log(numId);
  const blogg = context[numId - 1];
  console.log(blogg);

  //   let x = `:1` ;
  // let y = x.slice(1)
  // let z = parseInt(y)
  // console.log(typeof z)
  // console.log( z)
  // console.log( y)
  // console.log(typeof x)
  return (
    <>
      <HeadFullBlog />
      <div className="blog-page">
        {/* <h1>heyy are you looking for blog {blogg}</h1> */}

        <div className="share-clap">
          <p>
            <img src={clap} alt="clap" onClick={() => setClap(claps + 1)} />
            {claps}
          </p>
          <p>
            <img src={share} alt="share" />
            Share this article
          </p>
        </div>
        <div className="full-blog">
          <p className="full-blog-head">{blogg.travelHead}</p>
          <div className="writer">
            <div className="writer-image">
              <img src={writer} alt="writer" />
            </div>
            <div className="writerDesc">
              <p className="wName">john doe</p>
              <div className="date  bDate">{blogg.travelDate}</div>
            </div>
          </div>
          <div className="full-blog-image">{blogg.image}</div>
          <div className="full-blog-desc">
            {blogg.shortPara}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            placeat, repellat assumenda tempora velit earum saepe! Nostrum
            dolorem iste placeat, molestiae non incidunt consequuntur eligendi,
            illum reiciendis repellat architecto tempora! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Distinctio, nemo? Corporis eaque
            voluptatem ut, nulla, qui suscipit, laborum error perferendis
            blanditiis sit quas quis itaque.
          </div>
          <p className="writtenBy"> Written by - </p>
          <div className="writer-info">
            <div className="writer">
              <div className="writer-image">
                <img src={writer} alt="writer" />
              </div>
              <div className="writerDesc">
                <p className="wName">john doe</p>
                <div className="date  bDate">{blogg.travelDate}</div>
              </div>
            </div>
            <p className="clap-writer-info">
              <img src={clap} alt="clap" onClick={() => setClap(claps + 1)} />
              {claps}
            </p>
          </div>
          <p className="more-from-siren"> More From Siren - </p>
          {/* <LatestStories /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
