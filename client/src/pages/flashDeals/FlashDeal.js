import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../../components/Prices";
import { useCart } from "../../context/cart";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineReload } from "react-icons/ai";
import { MdFlashOn } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import ProductCart from "../../components/ProductCart/ProductCart";
import "./flashdeals.css";

const FlashDeals = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const moreIcon = {
    width: "30px",
    height: "30px",
    color: "#e94560",
  };

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/product-count`);
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/product/product-filters`, {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(products)
  // const options = {
  //   edit: false,
  //   color: "rgba(20, 20, 20, 0.1)",
  //   activeColor: "#FFB319",
  //   size: window.innerWidth < 600 ? 15 : 25,
  //   value: 4,
  //   isHalf: true,
  // };

  return (
    <>
    <div className="f_flex">
    <h2>Flash Deals</h2>
    </div>
      <div id='FlashDeals' className='  mt-3 mainContFreshDeals'>
        <div className='row'>
          <section className='flash col-md-9'>
            <div className='ProductsItems'>
              {products?.map((product) => (
                <ProductCart key={product._id} product={product} />
              ))}
            </div>
          </section>
          {/* <div className='.shop-button-fullwidth'>
                    <span>View all</span>
                    <BsPlayFill style={moreIcon} />
                  </div> */}
            <button className="shop-button-fullwidth">
              view all
            </button>
        </div>
      </div>
    </>
  );
};

export default FlashDeals;
