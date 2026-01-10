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
      <div className="col-auto">
        <ProductImages />
      </div>
      <div className="col-auto">
        <img src="icons/rating.png" alt="rating" />
        <h1>New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™</h1>
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
