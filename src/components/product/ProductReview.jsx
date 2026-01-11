import React, { useState } from "react";

function ProductReview() {

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto p-6">
      <div className="bg-[#F3F0E4] rounded-xl p-6">
        {/* Header Section */}
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889"
              alt="user"
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Info */}
          <div className="flex-1">
            {/* Name & Verified Badge */}
            <div className="flex items-center gap-2">
              <p className="text-[#1F2937] font-semibold">Margaret Ellison | FL</p>
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267"
                alt="verified"
                className="h-4"
              />
            </div>

            {/* Rating Stars */}
            <div className="mt-1">
              <img src="icons/rating.png" alt="rating" className="h-4" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div>
          {/* Headline */}
          <p className="text-black font-bold text-lg mb-2">
            Even my husband noticed... the spark came back.
          </p>

          {/* Body Text */}
          <p className="text-[#374151] text-[15px] leading-relaxed">
            After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally feel at ease again. I feel less bloated, lighter, like my body is working with me not against me. These past months, I've been present. Even my marriage feels renewed, not just in how I look but in how I feel. It's hard to explain, but once you try it you'll get it. I'd recommend this to my closest friends without question.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;