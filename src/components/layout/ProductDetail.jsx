import React from "react";
import ProductImages from "../product/ProductImages";
import ProductFeatures from "../product/ProductFeatures";
import ProductSelections from "../product/ProductSelections";
import ProductReview from "../product/ProductReview";
import ProductAdditionalDetails from "../product/ProductAdditionalDetails";
import ProductCliniciansChoice from "../product/ProductCliniciansChoice";

function ProductDetail() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-auto md:w-147 mx-auto">
        <ProductImages />
      </div>
      <div className="col-auto md:w-147">
        <div className="flex gap-4 items-center ">
          <img src="icons/rating.png" alt="rating" className="md:w-25 md:h-4"/>
          <p>4.8/5 Excellent | Based on 2381 Reviews</p>
        </div>
        <h1 className="font-[Lora] md:text-[28px] font-normal md:my-4">
          New Maximum Potency Formula - Lymphatic Drainage Capsules by
          Sculptique™
        </h1>
        <ProductFeatures />
        <ProductCliniciansChoice />
        <ProductSelections />
        <ProductReview />
        <ProductAdditionalDetails />
      </div>
    </div>
  );
}

export default ProductDetail;
