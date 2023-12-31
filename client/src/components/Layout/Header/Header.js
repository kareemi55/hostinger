import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../../Form/SearchInput";
import useCategory from "../../../hooks/useCategory";
import { useCart } from "../../../context/cart";
import { Badge } from "antd";

//

import "./Header.css";

//
const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <div className=''>
        <nav className='headerCont navbar navbar-expand-lg  fixed-top '>
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarTogglerDemo01'
              aria-controls='navbarTogglerDemo01'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon' />
            </button>
            <div
              className='collapse navbar-collapse TheNAv'
              id='navbarTogglerDemo01'>
              <Link to='/' className='navbar-brand'>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <span
                    style={{
                      marginLeft: "10px",
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#000000",
                    }}>
                    IMAN TILES
                  </span>
                </div>
              </Link>
              
              <ul className='navbar-nav '>
                <li className='nav-item'>
                  <Link to='/' className='nav-link'>
                    Home
                  </Link>
                </li>
                <li className='nav-item dropdown'>
                  <Link
                    className='nav-link dropdown-toggle'
                    to={"/categories"}
                    data-bs-toggle='dropdown'>
                    Categories
                  </Link>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link className='dropdown-item' to={"/categories"}></Link>
                    </li>
                    {categories?.map((c, index) => (
                      <li key={index}>
                        <Link
                          className='dropdown-item'
                          to={`/category/${c.slug}`}>
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {!auth?.user ? (
                  <>
                    <li className='nav-item'>
                      <NavLink to='/register' className='nav-link'>
                        Register
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink to='/login' className='nav-link'>
                        Login
                      </NavLink>
                    </li>

                  </>
                ) : (
                  <>
                    <div
                      style={{
                        width: "35px",
                        height: "35px",
                        border: "3px solid gray",
                        backgroundColor:
                          "linear-gradient(to right, red , yellow)",
                        margin: "auto",
                        display: "flex",
                        borderRadius: "50%",
                      }}>
                      <p
                        style={{
                          fontSize: "28px",
                          fontWeight: "bold",
                          height: "32px",
                          width: "32px",
                          textAlign: "center",
                          marginTop: "2px",
                        }}>
                        {auth?.user?.name[0]}
                      </p>
                    </div>
                    <li className='nav-item dropdown'>
                      <NavLink
                        className='nav-link dropdown-toggle'
                        href='#'
                        role='button'
                        data-bs-toggle='dropdown'
                        style={{ border: "none", color: "#f3f3f3" }}>
                        {auth?.user?.name}
                      </NavLink>
                      <ul className='dropdown-menu'>
                        <li>
                          <NavLink
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            className='dropdown-item'>
                            Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={`/dashboard/user/profile`}
                            className='dropdown-item'>
                            Profile Setting
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            onClick={handleLogout}
                            to='/login'
                            className='dropdown-item'>
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
                <li className='nav-item'>
                  <NavLink to='/cart' className='nav-link' >
                    <Badge count={cart?.length} showZero offset={[10, -5]}>
                     <h6 className="cart"> Cart</h6>
                    </Badge>
                  </NavLink>
                </li>
              </ul>
               <span className="search">
               <SearchInput />
               </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
