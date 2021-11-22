import React from "react";
import "./head.css";
import { Context1 } from "../Component/Common/Context/Context";
import Home from "../Component/Common/home";
import Common from "../Component/Common/Common";
import Common2 from "../Component/Common/Common2";
import FullBlog from "../Component/Common/fullBlog";
// import Common3 from "../Component/Common/Common3";
import Common4 from "../Component/Common/Common4";
import Common6 from "../Component/Common/Common6";
import Common5 from "../Component/Common/Common5";
import travelMain from "../Images/bollywood/travelMain.jpg";
import b2 from "../Images/bollywood/b2.jpg";
import b3 from "../Images/bollywood/b3.jpg";
import b4 from "../Images/bollywood/b4.jpg";
import b5 from "../Images/bollywood/b5.jpg";
import travelSub from "../Images/bollywood/travelSub.jpg";
import b1 from "../Images/bollywood/b1.jfif";
////hollywood
import hollywoodSub from "../Images/hollywood/hollywoodSub.jpg";
import hm from "../Images/hollywood/hm.jpg";
import h1 from "../Images/hollywood/h1.jpg";
import h2 from "../Images/hollywood/h2.jpg";
import h3 from "../Images/hollywood/h3.jpg";
///////////tech
import t1 from "../Images/Technology/t1.jpg";
import t2 from "../Images/Technology/t2.jpg";
import t3 from "../Images/Technology/t3.jpg";
import t4 from "../Images/Technology/t4.jpg";
import t5 from "../Images/Technology/t5.jpg";
import t6 from "../Images/Technology/t6.jpg";
import techMain from "../Images/Technology/techMain.jpg";
/////////////////food
import f1 from "../Images/food/f1.jpg";
import f2 from "../Images/food/f2.jpg";
import f3 from "../Images/food/f3.jpg";
import foodMain from "../Images/food/foodMain.jpg";
import f4 from "../Images/food/f4.jpg";
import f5 from "../Images/food/f5.jpg";
import fe from "../Images/food/fe.jpg";
/////////////////fit
import fi1 from "../Images/fit/fi1.jpg";
import fi2 from "../Images/fit/fi2.jpg";
import fi3 from "../Images/fit/fi3.jpg";
import fi4 from "../Images/fit/fi4.jpg";
import fi5 from "../Images/fit/fi5.jpg";
import fitSub from "../Images/fit/fitSub.jpg";
import fitMain from "../Images/fit/fitMain.jpg";
import Navv from "./Navv";
import { Route, NavLink } from "react-router-dom";

// import Common2 from "../Component/Common/Common2";
///////context ///
let data = [
  {
    id: 1,
    category: "Bollywood",
    image: <img src={b2} alt="back" />,
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 20 2021",
  },
  {
    id: 2,
    category: "Technology",
    image: <img src={techMain} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 20 2021",
  },
  {
    id: 3,
    category: "Hollywood",
    image: <img src={hm} alt="hm" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 20 2021",
  },

  {
    id: 4,
    category: "Fitness",
    image: <img src={fitMain} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 20 2021",
  },
  {
    id: 5,
    category: "Food",
    image: <img src={foodMain} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 20 2021",
  },
  {
    id: 6,
    category: "Bollywood",
    image: <img src={b3} alt="back" />,
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 21 2021",
  },
  {
    id: 7,
    category: "Technology",
    image: <img src={t1} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 21 2021",
  },
  {
    id: 8,
    category: "Hollywood",
    image: <img src={hollywoodSub} alt="hm" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 21 2021",
  },

  {
    id: 9,
    category: "Fitness",
    image: <img src={fitSub} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 21 2021",
  },
  {
    id: 10,
    category: "Food",
    image: <img src={fe} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 21 2021",
  },
  {
    id: 11,
    category: "Bollywood",
    image: <img src={b1} alt="back" />,
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 22 2021",
  },
  {
    id: 12,
    category: "Technology",
    image: <img src={t2} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 22 2021",
  },
  {
    id: 13,
    category: "Hollywood",
    image: <img src={h1} alt="hm" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 22 2021",
  },

  {
    id: 14,
    category: "Fitness",
    image: <img src={fi1} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 22 2021",
  },
  {
    id: 15,
    category: "Food",
    image: <img src={f1} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 22 2021",
  },
  {
    id: 16,
    category: "Bollywood",
    image: <img src={b4} alt="back" />,
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 23 2021",
  },
  {
    id: 17,
    category: "Technology",
    image: <img src={t3} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 23 2021",
  },
  {
    id: 18,
    category: "Hollywood",
    image: <img src={h2} alt="hm" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 23 2021",
  },

  {
    id: 19,
    category: "Fitness",
    image: <img src={fi2} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 23 2021",
  },
  {
    id: 20,
    category: "Food",
    image: <img src={f2} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 23 2021",
  },
  {
    id: 21,
    category: "Bollywood",
    image: <img src={b5} alt="back" />,
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 24 2021",
  },
  {
    id: 22,
    category: "Technology",
    image: <img src={t4} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 24 2021",
  },
  {
    id: 23,
    category: "Hollywood",
    image: <img src={h3} alt="hm" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 24 2021",
  },

  {
    id: 24,
    category: "Fitness",
    image: <img src={fi3} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 24 2021",
  },
  {
    id: 25,
    category: "Food",
    image: <img src={f3} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 24 2021",
  },
  {
    id: 26,
    category: "Bollywood",
    image: <img src={travelSub} alt="back" />,
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 27,
    category: "Technology",
    image: <img src={t5} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 28,
    category: "Hollywood",
    image: <img src={b4} alt="hm" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },

  {
    id: 29,
    category: "Fitness",
    image: <img src={fi4} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 30,
    category: "Food",
    image: <img src={f4} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 31,
    category: "Bollywood",
    image: <img src={travelMain} alt="back" />,
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 32,
    category: "Technology",
    image: <img src={t6} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 33,
    category: "Hollywood",
    image: <img src={b5} alt="hm" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },

  {
    id: 34,
    category: "Fitness",
    image: <img src={fi5} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 35,
    category: "Food",
    image: <img src={f5} alt="back" />,

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
];
export default function Head() {
  return (
    <>
      {/* <nav>
        <p className="rotate">The </p> Siren
      </nav> */}
      {/* <ul className="head">
        <li>
          <NavLink exact to="/Home">
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Bollywood">
            Bollywood
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Technology">
            Technology
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Hollywood">
            Hollywood
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Fitness">
            Fitness
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Food">
            Food
          </NavLink>
        </li>
      </ul> */}
      <Context1.Provider value={data}>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Navv /> <Home></Home>
            </>
          )}
        ></Route>
        <Route
          path="/Home"
          exact
          render={() => (
            <>
              <Navv /> <Home></Home>
            </>
          )}
        ></Route>
        <Route
          path="/Bollywood"
          exact
          render={() => (
            <>
              <Navv /> <Common2></Common2>
            </>
          )}
        ></Route>
        <Route
          path="/Technology"
          exact
          render={() => (
            <>
              <Navv /> <Common></Common>
            </>
          )}
        ></Route>
        <Route
          path="/Hollywood"
          exact
          render={() => (
            <>
              <Navv /> <Common4></Common4>
            </>
          )}
        ></Route>
        <Route
          path="/Fitness"
          exact
          render={() => (
            <>
              <Navv /> <Common5></Common5>
            </>
          )}
        ></Route>
        <Route
          path="/Food"
          exact
          render={() => (
            <>
              <Navv /> <Common6></Common6>
            </>
          )}
        ></Route>
        <Route
          path="/Technology/:id"
          exact
          render={() => <FullBlog></FullBlog>}
        ></Route>
        <Route
          path="/Home/:id"
          exact
          render={() => <FullBlog></FullBlog>}
        ></Route>
        {/* <Route path="/:id" render={() => <FullBlog></FullBlog>}></Route> */}
        <Route
          path="/Bollywood/:id"
          exact
          render={() => <FullBlog></FullBlog>}
        ></Route>
        <Route
          path="/Hollywood/:id"
          exact
          render={() => <FullBlog></FullBlog>}
        ></Route>
        <Route
          path="/Fitness/:id"
          exact
          render={() => <FullBlog></FullBlog>}
        ></Route>
        <Route
          path="/Food/:id"
          exact
          render={() => <FullBlog></FullBlog>}
        ></Route>
      </Context1.Provider>
      {/* <div>{travelMain}</div> */}
      {/* <img src={travelMain} alt="travel" /> */}
      {/* <img src={travelMain} alt="back" /> */}

      {/* <div className="rotate">the</div> */}
    </>
  );
}
