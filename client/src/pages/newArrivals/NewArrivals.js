import React from "react";
import Cart from "./Cart";
import "./style.css";
import { BsPlayFill } from "react-icons/bs";
// import { AiOutlineAppstoreAdd } from "react-icons/ai";

const NewArrivals = () => {
  const newIcon = {
    width: "70px",
    height: "40px",
    color: "#DF711B",
  };

  return (
    <>
      <section className='NewArrivals '>
        <div className='container'>
          <div className='heading1 d_flex1'>
            <div className='heading-left text-center mb-5'>
              <h2>New Arrivals </h2>
            </div>
            <div className='heading-right1 d-none '>
              <span>View all</span>
              <BsPlayFill style={newIcon} />
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
