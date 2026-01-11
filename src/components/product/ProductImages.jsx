import React from "react";

function ProductImages() {
  return (
    <div className="w-full">
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:flex md:flex-col md:gap-4">
        {/* Row 1: 1 image 588x588 */}
        <div className="flex justify-center">
          <img
            src="images/product/product-main.webp"
            alt="product-main"
            className="md:w-147 md:h-147 object-cover"
          />
        </div>

        {/* Row 2: 2 images 286x286 */}
        <div className="flex gap-4 justify-center">
          <img
            src="images/product/product-sub-1.webp"
            alt="product-sub-1"
            className="w-[286px] h-[286px] object-cover"
          />
          <img
            src="images/product/product-sub-2.webp"
            alt="product-sub-2"
            className="w-[286px] h-[286px] object-cover"
          />
        </div>

        {/* Row 3: 3 images 185.33x185.33 */}
        <div className="flex gap-4 justify-center">
          <img
            src="images/product/product-sub-3.webp"
            alt="product-sub-3"
            className="w-[185.33px] h-[185.33px] object-cover"
          />
          <img
            src="images/product/product-sub-4.webp"
            alt="product-sub-4"
            className="w-[185.33px] h-[185.33px] object-cover"
          />
          <img
            src="images/product/product-sub-5.webp"
            alt="product-sub-5"
            className="w-[185.33px] h-[185.33px] object-cover"
          />
        </div>

        {/* Row 4: 2 images 286x306.99 */}
        <div className="flex gap-4 justify-center">
          <img
            src="images/product/product-sub-desk-1.png"
            alt="product-sub-6"
            className="w-[286px] h-[306.99px] object-cover"
          />
          <img
            src="images/product/product-sub-desk-2.png"
            alt="product-sub-7"
            className="w-[286px] h-[306.99px] object-cover"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col gap-4">
        {/* Row 1: 1 image 290x290 */}
        <div className="flex justify-center">
          <img
            src="images/product/product-main.webp"
            alt="product-main"
            className="w-[290px] h-[290px] object-cover"
          />
        </div>

        {/* Row 2: 4 images 65x65 */}
        <div className="flex gap-2 justify-center">
          <img
            src="images/product/product-sub-1.webp"
            alt="product-sub-1"
            className="w-[65px] h-[65px] object-cover"
          />
          <img
            src="images/product/product-sub-2.webp"
            alt="product-sub-2"
            className="w-[65px] h-[65px] object-cover"
          />
          <img
            src="images/product/product-sub-3.webp"
            alt="product-sub-3"
            className="w-[65px] h-[65px] object-cover"
          />
          <img
            src="images/product/product-sub-4.webp"
            alt="product-sub-4"
            className="w-[65px] h-[65px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImages;