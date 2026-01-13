import React from "react";

function ProductReview() {
  return (
    <div className="w-[95%] mx-auto md:w-[588px] mt-6 p-3 bg-[#F3EEE0] rounded-xl font-['Montserrat'] text-[16px] font-normal tracking-[0.6px] leading-[28.8px] text-[rgba(0,0,0,0.75)]">
      {/* Header Section */}
      <div className="flex items-start gap-4 mb-3">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-gray-200">
          <img
            src="https://trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889"
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Info */}
        <div className="flex-1 pt-1">
          {/* Name & Verified Badge */}
          <div className="flex items-center gap-2">
            <p className="font-[Nunito] md:text-[16px] text-black">Margaret Ellison | FL</p>
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267"
              alt="verified"
              className="h-4 w-auto"
            />
          </div>

          {/* Rating Stars */}
          <div className="mt-1">
            <img src="icons/rating.png" alt="rating" className="h-4 w-auto" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div>
        {/* Headline */}
        <p className="font-bold text-black mb-1 font-['Nunito']">
          Even my husband noticed... the spark came back.
        </p>

        {/* Body Text */}
        <p className="font-['Nunito'] text-[16px] leading-[20.8px] text-black tracking-normal font-normal">
          After years of hiding under coverups, picking apart my body, and
          feeling disconnected, I finally feel at ease again. I feel less
          bloated, lighter, like my body is working with me not against me.
          These past months, I've been present. Even my marriage feels renewed,
          not just in how I look but in how I feel. It's hard to explain, but
          once you try it you'll get it. I'd recommend this to my closest
          friends without question.
        </p>
      </div>
    </div>
  );
}

export default ProductReview;
