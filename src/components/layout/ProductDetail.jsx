import React from "react";
import ProductImages from "../product/ProductImages";
import ProductFeatures from "../product/ProductFeatures";
import ProductSelections from "../product/ProductSelections";
import ProductReview from "../product/ProductReview";
import ProductAdditionalDetails from "../product/ProductAdditionalDetails";
import ProductCliniciansChoice from "../product/ProductCliniciansChoice";

function ProductDetail() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4">
      {/* Left Column - Images (first on mobile, left on desktop) */}
      <div className="order-1 md:order-1 md:col-auto md:w-147 mx-auto ">
        <ProductImages />
      </div>

      {/* Right Column - Product Info */}
      <div className="order-2 md:order-2 md:col-auto md:w-147 md:mx-6">
        {/* Rating */}
        <div className="flex gap-4 items-center m-4">
          <img
            src="icons/rating.png"
            alt="rating"
            className="w-15 md:w-[100px] md:h-4"
          />

          <p className="font-[Nunito] text-[12px] md:text-[16px] font-normal tracking-[0.1px] leading-[15.6px]">
            4.8/5 Excellent | Based on 2381 Reviews
          </p>
        </div>

        {/* Title */}
        <h1 className="w-[290px] font-['Lora'] text-[24px] md:text-[28px] font-normal m-4 tracking-[0.6px] leading-[33.6px] break-words text-black">
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
