import React from "react";
import Banner from "../Banner/Banner";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgDairy from "../../assets/dairy-banner.jpg";

const Dairy = () => {
  return (
    <div>
      <CategoryPage title="Dairy Product" bgImage={BgDairy} categories={['Dairy']} />
    </div>
  );
};

export default Dairy;
