import React from "react";
import "./style.css";
import TopCart from "./TopCart";
import { MdOutlineGppGood } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";

const TopCategories = () => {
  const moreIcon = {
    width: "30px",
    height: "30px",
    color: "#1b316a",
  };

  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='heading1 d_flex1'>
            <div
              className='heading-left1   f_flex1'
              style={{ display: "flex" }}>
              <MdOutlineGppGood
                style={{ width: "30px", height: "30px", color: "38E54D" }}
              />
              {/* EB455F */}
              <h2>Top Categories</h2>
            </div>
            <div className='heading-right1 '>
              <span style={{ color: "#1b316a" }}>View all</span>
              <BsPlayFill style={moreIcon} />
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCategories;
