import React from "react";
import Layout from "../../components/Layout/Layout";
import FlashDeals from "../flashDeals/FlashDeals";
import FlashDeals2 from "../flashDeals/FlashDeal";
import BeforeDeal from "../flashDeals/beforeDeal";
import TopCarousel from "../Carousel/TopCarousel";
import TopCategories from "../topCategories/TopCategories";
import NewArrivals from "../newArrivals/NewArrivals";
import Annocument from "../annocument/Annocument";
import Wrapper from "../wrapper/Wrapper";
import "./Homepage.css";

const Home = () => {
  return (
    <>
      <Layout title={"All Products - Best offers "}>
        <TopCarousel />
        <BeforeDeal />
        <FlashDeals />
        <FlashDeals2 />
        <TopCategories />
        <NewArrivals />
        <Annocument />
        <Wrapper />
      </Layout>
    </>
  );
};

export default Home;
