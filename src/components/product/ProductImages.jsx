import React from "react";

function ProductImages() {
  // Mobile 1 - 4
  // Tablet 1 - 2 - 3 - 2
  // Desktop 1 - 2 - 3 - 2
  return (
    <div>
      <div>
        <img
          src="images/product/product-main.webp"
          alt="product-main"
          className="w-[588px] h-[588px] mx-auto"
        />
      </div>
      <div>
        <img src="images/product/product-sub-1.webp" alt="product-sub-1" />
        <img src="images/product/product-sub-2.webp" alt="product-sub-2" />
      </div>
      <div>
        <img src="images/product/product-sub-3.webp" alt="product-sub-3" />
        <img src="images/product/product-sub-4.webp" alt="product-sub-4" />
        <img src="images/product/product-sub-5.webp" alt="product-sub-5" />
      </div>
      <div className="">
        <img src="images/product/product-sub-desk-1.png" alt="product-sub-6" />
        <img src="images/product/product-sub-desk-2.png" alt="product-sub-7" />
      </div>
    </div>
  );
}

export default ProductImages;
