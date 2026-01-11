import React, { useState } from "react";

function ProductSelections() {
  const [choice, setChoice] = useState(1); // Middle item selected by default (index 1)

  const options = [
    {
      title: "1 Bottle",
      quantity: 1,
      originalPrice: 59.95,
      discountedPrice: 31.96,
      profits: ["Free USA Shipping"],
      badge: false,
    },
    {
      title: "Buy 2 Get 1 Free",
      quantity: 3,
      originalPrice: 179.85,
      discountedPrice: 63.92,
      profits: ["Free USA Shipping", "Free Anti-Bloating Protocol E-book"],
      badge: true,
    },
    {
      title: "Buy 3 Get 2 Free",
      quantity: 5,
      originalPrice: 299.75,
      discountedPrice: 95.88,
      profits: [
        "Free USA Shipping",
        "Free Anti-Bloating Protocol E-book",
        "$20 Gift Card",
      ],
      badge: false,
    },
  ];

  const icons = {
    "Free USA Shipping": (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="white">
        <path d="M18 18.5C18 19.328 17.328 20 16.5 20C15.672 20 15 19.328 15 18.5C15 17.672 15.672 17 16.5 17C17.328 17 18 17.672 18 18.5ZM9 18.5C9 19.328 8.328 20 7.5 20C6.672 20 6 19.328 6 18.5C6 17.672 6.672 17 7.5 17C8.328 17 9 17.672 9 18.5ZM20 8V15H18.465C18.177 14.402 17.595 14 16.5 14C15.405 14 14.823 14.402 14.535 15H9.465C9.177 14.402 8.595 14 7.5 14C6.405 14 5.823 14.402 5.535 15H4V6H15V8H20ZM17 10H20V13H17V10Z"/>
      </svg>
    ),
    "Free Anti-Bloating Protocol E-book": (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="white">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
      </svg>
    ),
    "$20 Gift Card": (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="white">
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
      </svg>
    ),
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      {/* Main Product Selection Container */}
      <div className="bg-[#F3F0E4] rounded-xl p-4 space-y-3">
        {options.map((option, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-lg overflow-hidden transition-all cursor-pointer ${
              choice === index
                ? "border-2 border-[#10B981]"
                : "border border-[#D1D5DB]"
            }`}
            onClick={() => setChoice(index)}
          >
            {/* Badge for middle card */}
            {option.badge && (
              <img
                src="icons/sale-badge.avif"
                alt="New Year's Sale"
                className="absolute -top-2 -right-2 w-16 h-16 z-10"
              />
            )}

            {/* Top Half: Product Info */}
            <div className="flex justify-between items-center p-4">
              {/* Left Side: Radio & Text */}
              <div className="flex items-center gap-3">
                {/* Radio Circle */}
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    choice === index
                      ? "border-[#10B981]"
                      : "border-[#D1D5DB]"
                  }`}
                >
                  {choice === index && (
                    <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                  )}
                </div>

                {/* Text Block */}
                <div>
                  <p className="font-bold text-base text-black">
                    {option.title}
                  </p>
                  <p className="text-[13px] text-[#4B5563]">
                    {option.quantity} bottle{option.quantity > 1 ? "s" : ""} total | Save $
                    {(option.originalPrice - option.discountedPrice).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Right Side: Pricing */}
              <div className="text-right">
                <p className="font-bold text-lg text-black">
                  ${option.discountedPrice}
                </p>
                <p className="text-xs text-[#9CA3AF] line-through">
                  ${option.originalPrice}
                </p>
              </div>
            </div>

            {/* Bottom Half: Value Stack (Green Bars) */}
            <div className={choice === index ? "bg-[rgb(3,152,105)]" : "bg-[rgba(3,152,105,0.5)]"}>
              {option.profits.map((profit, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 px-3 py-2 ${
                    idx > 0 ? "border-t border-white/20" : ""
                  }`}
                >
                  <div className="flex-shrink-0">{icons[profit]}</div>
                  <p className="text-white text-[13px] font-semibold">
                    {profit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Shipping Info & Add to Cart */}
      <div className="mt-6">
        {/* Shipping Date Line */}
        <div className="flex items-center justify-center gap-2 text-sm text-[#374151] mb-4">
          <svg
            className="w-5 h-5"
            viewBox="0 0 33 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.7075 9.00002L28.8633 5.1868C28.7924 5.11541 28.7107 5.05994 28.6186 5.02037C28.5262 4.98081 28.4298 4.96017 28.3292 4.95801H25.8431V0.732384C25.8431 0.682499 25.838 0.632613 25.8281 0.583588C25.8186 0.534563 25.804 0.486828 25.7851 0.440383C25.7657 0.394368 25.7421 0.350503 25.7145 0.308789C25.6866 0.267074 25.6548 0.22837 25.6195 0.193106C25.5842 0.157842 25.5455 0.126019 25.5038 0.0980661C25.4621 0.0705432 25.4182 0.0468907 25.3722 0.0275386C25.3258 0.0086166 25.278 -0.00600491 25.229 -0.015466C25.18 -0.0253571 25.1301 -0.0305176 25.0802 -0.0305176H11.3514C11.3011 -0.0305176 11.2517 -0.0253571 11.2026 -0.015466C11.1536 -0.00600491 11.1059 0.0086166 11.0594 0.0275386C11.0134 0.0468907 10.9691 0.0705432 10.9278 0.0980661C10.8861 0.126019 10.8474 0.157842 10.8122 0.193106C10.7765 0.22837 10.7451 0.267074 10.7171 0.308789C10.6896 0.350503 10.6659 0.394368 10.6466 0.440383C10.6277 0.486828 10.613 0.534563 10.6032 0.583588C10.5937 0.632613 10.5885 0.682499 10.5885 0.732384V14.4612C10.5885 14.5115 10.5937 14.5609 10.6032 14.61C10.613 14.659 10.6277 14.7067 10.6466 14.7532C10.6659 14.7992 10.6896 14.8435 10.7171 14.8848C10.7451 14.9265 10.7765 14.9652 10.8122 15.0004C10.8474 15.0361 10.8861 15.0675 10.9278 15.0955C10.9691 15.123 11.0134 15.1467 11.0594 15.166C11.1059 15.1849 11.1536 15.1996 11.2026 15.2094C11.2517 15.2189 11.3011 15.2241 11.3514 15.2241H13.1512C13.1628 15.3195 13.1787 15.4146 13.1989 15.5092C13.2191 15.6034 13.2436 15.6967 13.272 15.7887C13.3008 15.8807 13.3335 15.9715 13.3701 16.0605C13.4071 16.1495 13.4479 16.2368 13.4926 16.3224C13.5374 16.4076 13.586 16.491 13.6384 16.5718C13.6905 16.6531 13.7464 16.7314 13.8057 16.8075C13.8651 16.8832 13.9278 16.9563 13.9941 17.0268C14.0603 17.0969 14.1291 17.164 14.2014 17.2281C14.2736 17.2922 14.3484 17.3524 14.4263 17.4096C14.5037 17.4668 14.5837 17.5205 14.6662 17.5704C14.7488 17.6203 14.8335 17.6663 14.92 17.7084C15.0068 17.751 15.0954 17.7893 15.1853 17.8233C15.2756 17.8577 15.3672 17.8878 15.4601 17.9136C15.553 17.9394 15.6467 17.9609 15.7418 17.9785C15.8364 17.9957 15.9319 18.009 16.0278 18.0176C16.1241 18.0262 16.2204 18.031 16.3167 18.031C16.4131 18.031 16.5094 18.0262 16.6053 18.0176C16.7012 18.009 16.7967 17.9957 16.8917 17.9785C16.9868 17.9609 17.0805 17.9394 17.1734 17.9136C17.2663 17.8878 17.3579 17.8577 17.4478 17.8233C17.5381 17.7893 17.6267 17.751 17.7131 17.7084C17.8 17.6663 17.8843 17.6203 17.9668 17.5704C18.0494 17.5205 18.1294 17.4668 18.2072 17.4096C18.2851 17.3524 18.3599 17.2922 18.4317 17.2281C18.504 17.164 18.5732 17.0969 18.6394 17.0268C18.7052 16.9563 18.768 16.8832 18.8274 16.8075C18.8867 16.7314 18.9426 16.6531 18.9951 16.5718C19.0475 16.491 19.0957 16.4076 19.1409 16.3224C19.1856 16.2368 19.226 16.1495 19.263 16.0605C19.3 15.9715 19.3327 15.8807 19.361 15.7887C19.3899 15.6967 19.4144 15.6034 19.4346 15.5092C19.4544 15.4146 19.4703 15.3195 19.4819 15.2241H24.058C24.0696 15.3195 24.0855 15.4146 24.1057 15.5092C24.1259 15.6034 24.15 15.6967 24.1788 15.7887C24.2077 15.8807 24.2403 15.9715 24.2769 16.0605C24.3139 16.1495 24.3547 16.2368 24.3995 16.3224C24.4442 16.4076 24.4928 16.491 24.5448 16.5718C24.5973 16.6531 24.6532 16.7314 24.7125 16.8075C24.7719 16.8832 24.8347 16.9563 24.9009 17.0268C24.9671 17.0969 25.0359 17.164 25.1082 17.2281C25.1804 17.2922 25.2553 17.3524 25.3327 17.4096C25.4105 17.4668 25.4905 17.5205 25.5731 17.5704C25.6556 17.6203 25.7403 17.6663 25.8268 17.7084C25.9137 17.751 26.0022 17.7893 26.0921 17.8233C26.1824 17.8577 26.274 17.8878 26.3669 17.9136C26.4598 17.9394 26.5536 17.9613 26.6482 17.9785C26.7432 17.9957 26.8387 18.009 26.9346 18.0176C27.0309 18.0262 27.1268 18.031 27.2236 18.031C27.3199 18.031 27.4162 18.0262 27.5121 18.0176C27.608 18.009 27.7035 17.9957 27.7985 17.9785C27.8932 17.9609 27.9873 17.9394 28.0802 17.9136C28.1731 17.8878 28.2647 17.8577 28.3546 17.8233C28.4449 17.7893 28.5331 17.751 28.6199 17.7084C28.7068 17.6663 28.7911 17.6203 28.8737 17.5704C28.9562 17.5205 29.0362 17.4668 29.1141 17.4096C29.1915 17.3524 29.2667 17.2922 29.3385 17.2281C29.4108 17.164 29.48 17.0969 29.5458 17.0268C29.612 16.9563 29.6748 16.8832 29.7342 16.8075C29.7935 16.7314 29.8494 16.6531 29.9019 16.5718C29.9544 16.491 30.0025 16.4076 30.0473 16.3224C30.0924 16.2368 30.1328 16.1495 30.1698 16.0605C30.2068 15.9715 30.2395 15.8807 30.2679 15.7887C30.2967 15.6967 30.3212 15.6034 30.341 15.5092C30.3612 15.4146 30.3771 15.3195 30.3887 15.2241H32.1583C32.2082 15.2241 32.2577 15.2189 32.3071 15.2094C32.3562 15.1996 32.4039 15.1849 32.4499 15.166C32.4964 15.1467 32.5402 15.123 32.5819 15.0955C32.6237 15.0675 32.6619 15.0361 32.6976 15.0004C32.7329 14.9652 32.7647 14.9265 32.7922 14.8848C32.8202 14.8435 32.8438 14.7992 32.8628 14.7532C32.8821 14.7067 32.8963 14.659 32.9062 14.61C32.9161 14.5609 32.9208 14.5115 32.9208 14.4612V9.47307C32.9161 9.38362 32.895 9.29804 32.8585 9.21676C32.8215 9.13505 32.7712 9.0628 32.7075 9.00002Z"
              fill="#1A1A1A"
            />
          </svg>
          <span>Delivered on</span>
          <span className="bg-[#10B981] text-white font-bold px-2 py-0.5 rounded">
            Wednesday, 14 January
          </span>
          <span>with Express Shipping</span>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-black text-white font-bold uppercase tracking-wide h-14 rounded-md hover:bg-gray-900 transition-colors">
          ADD TO CART
        </button>

        {/* Subscription Options */}
        <div className="flex items-center justify-center gap-3 mt-3 text-[13px] text-[#374151]">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 17 17" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.583 12.1713C14.8698 12.1333 15.2001 12.1658 15.2331 12.5409L15.4195 14.6275C15.4683 15.1837 14.6219 15.2591 14.5729 14.7009L14.4664 13.5087C11.0241 17.4806 4.69181 17.0524 1.8463 12.5832C0.813943 10.9619 0.373055 8.97183 0.729143 6.97041C0.826743 6.41646 1.66639 6.56543 1.56914 7.11708C0.93661 10.7064 3.13963 14.1944 6.67777 15.1423C9.24097 15.8291 11.929 15.0161 13.687 13.1046L12.7599 13.1875C12.2036 13.2364 12.1283 12.39 12.6865 12.3409L14.583 12.1713ZM4.40861 3.48455L3.31261 3.58232C5.07048 1.67103 7.75883 0.858057 10.3219 1.54481C13.86 2.4929 16.063 5.98072 15.4305 9.57006C15.3332 10.1217 16.1729 10.2707 16.2705 9.71672C16.6267 7.71512 16.1857 5.72526 15.1533 4.10392C12.3587 -0.285054 6.18194 -0.791543 2.68932 3.00366L2.59723 1.97219C2.54817 1.41397 1.70177 1.48917 1.75065 2.04561L1.93554 4.11495C1.95314 4.36881 2.16274 4.54428 2.41768 4.51548L4.48203 4.33112C5.03972 4.28206 4.96559 3.43619 4.40861 3.48455Z"
                fill="currentColor"
              />
            </svg>
            <span>Refills Ship Bi-Monthly</span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
            </svg>
            <span>Stop or Cancel Anytime</span>
          </div>
        </div>
      </div>

      {/* Footer Elements */}
      <div className="mt-6 space-y-4">
        {/* Payment Methods */}
        <div className="flex justify-center gap-1">
          <img
            src="icons/payment-cards.avif"
            alt="payment cards"
            className="h-8 rounded"
          />
        </div>

        {/* New Year Promo Banner */}
        <div>
          <img
            src="images/product/coupon.avif"
            alt="New Year coupon"
            className="w-full rounded-lg"
          />
        </div>

        {/* Trust Badges */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img
              src="icons/money-back.webp"
              alt="money back"
              className="w-6 h-6"
            />
            <p className="text-sm text-[#1F2937] font-medium">
              60-Day Money-Back Guarantee
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003293.png?v=1752066864"
              alt="usa flag"
              className="w-6 h-6"
            />
            <p className="text-sm text-[#1F2937] font-medium">
              Free Shipping From USA Included
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSelections;