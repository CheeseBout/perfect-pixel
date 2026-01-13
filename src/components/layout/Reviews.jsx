import React from "react";
import { CgUser } from "react-icons/cg";
import { CgChevronRight } from "react-icons/cg";
import { CgChevronLeft } from "react-icons/cg";
import { CgPushChevronRight } from "react-icons/cg";
import { CgPushChevronLeft } from "react-icons/cg";

function Reviews() {
  const reviews = [
    {
      name: "Anonymous",
      rating: 5,
      comment:
        "Pretty sure I’m seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it’s working.",
      date: "12/08/2025",
    },
    {
      name: "Anonymous",
      rating: 5,
      comment: "One month and I’ve already seen a difference!",
      date: "12/01/2025",
    },
    {
      name: "Donabeth Houx",
      rating: 5,
      comment:
        "I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It’s a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!",
      date: "11/23/2025",
    },
    {
      name: "Dawn Camacho",
      rating: 5,
      comment:
        "It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy.",
      date: "11/17/2025",
    },
    {
      name: "Anonymous",
      rating: 5,
      comment: "I have noticed a difference on my swelling.",
      date: "11/13/2025",
    },
  ];
  const offers = [
    {
      image:
        "https://trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222",
      name: "Free Shipping from USA",
      description: "On all orders",
    },
    {
      image:
        "https://trysculptique.com/cdn/shop/files/support-min.png?v=1758713216",
      name: "Naturally Supports Your Body",
      description: "Promotes healthy immune cell functions",
    },
    {
      image:
        "https://trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216",
      name: "100% Natural Ingredients",
      description: "8 active, natural ingredients",
    },
    {
      image: "https://trysculptique.com/cdn/shop/files/60-min.png?v=1758713216",
      name: "Try it Risk Free for 60 Days",
      description: "60-day money-back guarantee",
    },
  ];

  const reviewStats = [
    { stars: 5, count: 84, percentage: 76 },
    { stars: 4, count: 17, percentage: 15 },
    { stars: 3, count: 8, percentage: 7 },
    { stars: 2, count: 1, percentage: 1 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  return (
    <div>
      {/* Review Section */}
      <div className="bg-white py-16 px-6 md:px-12.5">
        <div className="max-w-(--page-width) mx-auto">
          {/* Trustpilot Widget */}
          <div className="flex justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_Score.png?v=1752349211"
              alt="Trustpilot Score"
              className="h-5 max-w-full"
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            {/* Main Headline */}
            <h2 className="font-['Lora'] text-center text-black mt-4 text-[24px] md:text-[32px] leading-[41.6px] tracking-[0.6px] break-words w-full max-w-[800px]">
              Real Women, Real Results: 93,000+ Transformations
            </h2>

            {/* Sub-headline */}
            <p className="w-full max-w-[800px] mx-auto my-4 text-center font-['Nunito'] text-[18px] font-normal leading-[23.4px] tracking-[0.6px] text-black">
              All reviews verified from actual paying customers
            </p>

            {/* Section Title */}
            <h3 className="font-[Trirong] text-[22.5px] md:text-[24px] text-center text-[#000000] md:my-2">
              Customer Reviews
            </h3>
          </div>

          {/* Review Dashboard */}
          <div className="md:py-6 md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
              {/* Left Column - Aggregate Score */}
              <div className="flex flex-col items-center md:items-start justify-center">
                {/* Stars and Score - Same Row */}
                <div className="flex items-center gap-3 mb-3">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {/* 4 Full Stars */}
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#F87171"
                        className="w-6 h-6"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      stroke="#F87171"
                      strokeWidth="2"
                    >
                      <defs>
                        <linearGradient id="halfStar">
                          <stop offset="50%" stopColor="#F87171" />
                          {/* Changed from #E5E5E5 to transparent */}
                          <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#halfStar)"
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      />
                    </svg>
                  </div>

                  {/* Score */}
                  <p>4.67 out of 5</p>
                </div>

                {/* Review Count */}
                <div className="flex items-center gap-2">
                  <p className="text-[16px] text-[#666666]">
                    Based on 110 reviews
                  </p>
                  <img
                    src="https://judgeme-public-images.imgix.net/judgeme/logos/verified-checkmark.svg"
                    alt="check mark"
                    className="w-4 h-4"
                  />
                </div>
              </div>

              {/* Middle Column - Histogram */}
              <div className="flex flex-col justify-center items-center md:items-start md:px-8 ">
                {reviewStats.map((stat) => (
                  <div
                    key={stat.stars}
                    className="flex flex-col md:flex-row items-center md:gap-3 mb-6 md:mb-1.5 w-full"
                  >
                    {/* Star Rating */}
                    <div className="flex gap-0.5 w-20 justify-center md:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={i < stat.stars ? "#F87171" : "none"}
                          stroke="#F87171"
                          strokeWidth="2"
                          className="w-3 h-3"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="inline-block w-[200px] h-[14px] my-2 md:my-0 md:mx-6 bg-[rgba(224,224,224,0.5)] align-middle cursor-pointer overflow-hidden">
                      <div
                        className="bg-[#F87171] h-full"
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>

                    {/* Count */}
                    <span className="font-[Montserrat] text-[12.8px] text-[#575757] w-8 text-center md:text-left">
                      {stat.count}
                    </span>
                  </div>
                ))}

                {/* "See all reviews" Mobile Only */}
                <button className="mt-2 md:mt-4 font-[Montserrat] text-[14px] text-[#F87171] underline decoration-[#F87171] hover:opacity-80 transition-opacity">
                  See all reviews
                </button>
              </div>

              {/* Right Column - CTA Button */}
              <div className="flex items-center justify-center md:pl-8">
                <button className="bg-[#FA8A8A] text-white font-['Montserrat'] font-bold text-[16px] leading-[16px] tracking-[0.6px] w-[240px] py-[10px] px-[20px] border-[1.6px] border-[#FA8A8A] rounded-none cursor-pointer transition-colors hover:bg-white hover:text-[#FA8A8A]">
                  Write a review
                </button>
              </div>
            </div>
          </div>

          {/* Diamond Authenticity Badge */}
          <div className="flex justify-center flex-col items-center mt-12">
            <img
              src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/auth/diamond.svg?auto=format"
              alt="Diamond Authenticity"
              className="w-20 h-20"
            />
            <span className="text-[rgb(76,142,218)] text-[12px] font-semibold">
              100.0
            </span>
          </div>
        </div>
      </div>

      {/* User's Reviews */}
      <div className="bg-white pb-8 md:py-8 px-8 md:px-4">
        <div className="max-w-310 mx-auto">
          {/* Sort Dropdown */}
          <div className="mb-8 flex">
            <select className="rounded md:py-2.5 md:pr-5 text-[14px] font-[Arial] text-[#FA8072] bg-white cursor-pointer focus:outline-none focus:border-[#F87171]">
              <option value="">Most Recent</option>
              <option value="">Highest Rating</option>
              <option value="">Lowest Rating</option>
              <option value="">Only Pictures</option>
              <option value="">Pictures First</option>
              <option value="">Video First</option>
              <option value="">Most Helpful</option>
            </select>
          </div>

          {/* Reviews List */}
          <ul className="space-y-6">
            {reviews.map((review, index) => (
              <li
                key={index}
                className="border-b border-[#E5E5E5] pb-6 last:border-b-0"
              >
                {/* Row 1: Rating & Timestamp */}
                <div className="flex justify-between items-center mb-3">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#F87C7C"
                        className="w-4 h-4"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Date */}
                  <span className="text-[13px] text-[#9CA3AF] font-[Nunito]">
                    {review.date}
                  </span>
                </div>

                {/* Row 2: User Identity */}
                <div className="flex items-center gap-2.5 mb-3">
                  {/* Avatar Icon with Verified Badge */}
                  <div className="relative">
                    <CgUser className="w-9 h-9 text-[#F87C7C] bg-gray-200" />
                    {/* Verified Checkmark Badge */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#F87C7C] rounded-sm flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-2 h-2"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                  </div>

                  {/* Username */}
                  <span className="text-[16px] text-[#F87C7C] ">
                    {review.name}
                  </span>

                  {/* Verified Tag */}
                  <span className="bg-[#F87C7C] text-white text-[12px] md:ml-1.25 px-2 md:py-0.125">
                    Verified
                  </span>
                </div>

                {/* Row 3: Review Body */}
                <p className="text-[16px] text-[#111827] font-[Nunito] leading-normal">
                  {review.comment}
                </p>
              </li>
            ))}
          </ul>
          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 my-8">
            {/* Page Numbers */}
            <button className="w-6 h-6 cursor-pointer flex items-center justify-center text-[24px] text-[rgb(123,123,123)] font-bold">
              1
            </button>
            <button className="w-6 h-6 cursor-pointer flex items-center justify-center text-[16px] text-[#F87C7C] hover:text-[#F87171] transition-colors">
              2
            </button>
            <button className="w-6 h-6 cursor-pointer flex items-center justify-center text-[16px] text-[#F87C7C] hover:text-[#F87171] transition-colors">
              3
            </button>

            {/* Chevron Right */}
            <button className="w-6 h-6 cursor-pointer flex items-center justify-center text-[#F87C7C] hover:text-[#F87171] transition-colors">
              <CgChevronRight className="w-4 h-4" />
            </button>

            {/* Push Chevron Right (Last Page) */}
            <button className="w-6 h-6 cursor-pointer flex items-center justify-center text-[#F87C7C] hover:text-[#F87171] transition-colors">
              <CgPushChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <div className="bg-[#F4EFE6] py-12 md:py-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="max-w-310 mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-4">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-11 h-11 object-contain"
                    style={{
                      filter:
                        "invert(37%) sepia(93%) saturate(500%) hue-rotate(120deg) brightness(95%) contrast(101%)",
                    }}
                  />
                </div>

                {/* Title */}
                <h3 className="font-[Nunito] text-[16px] md:text-[18px] font-semibold text-[#111111] mb-2 leading-tight">
                  {offer.name}
                </h3>

                {/* Description */}
                <p className="font-[Nunito] text-[14px] font-normal text-[#222222] leading-[1.4]">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
