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
      <div className="order-1 md:order-1 md:col-auto md:w-147 mx-auto">
        <ProductImages />
      </div>

      {/* Right Column - Product Info */}
      <div className="order-2 md:order-2 md:col-auto md:w-147">
        {/* Rating - Hidden on mobile, shown on desktop */}
        <div className="hidden md:flex gap-4 items-center">
          <img src="icons/rating.png" alt="rating" className="md:w-25 md:h-4"/>
          <p>4.8/5 Excellent | Based on 2381 Reviews</p>
        </div>

        {/* Title - Hidden on mobile, shown on desktop */}
        <h1 className="hidden md:block font-[Lora] md:text-[28px] font-normal md:my-4">
          New Maximum Potency Formula - Lymphatic Drainage Capsules by
          Sculptique™
        </h1>

        <ProductFeatures />
        <ProductCliniciansChoice />
        <ProductSelections />
        <ProductReview />
        <ProductAdditionalDetails />
      </div>

      {/* Mobile-only: Rating and Title shown after images */}
      <div className="order-3 md:hidden px-4 mt-4">
        <div className="flex gap-2 items-center mb-2">
          <img src="icons/rating.png" alt="rating" className="h-3"/>
          <p className="text-xs">4.8/5 Excellent | Based on 2381 Reviews</p>
        </div>
        <h1 className="font-[Lora] text-xl font-normal">
          New Maximum Potency Formula - Lymphatic Drainage Capsules by
          Sculptique™
        </h1>
      </div>
    </div>
  );
}

export default ProductDetail;