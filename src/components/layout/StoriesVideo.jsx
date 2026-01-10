import React, { useState } from "react";
import CheckoutButton from "../common/CheckoutButton";

function StoriesVideo() {
  const videos = [
    {
      source:
        "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_12.40.11.png?v=1752486039",
    },
    {
      source:
        "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.12.02.png?v=1752498744",
    },
    {
      source:
        "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.04.png?v=1752497038",
    },
    {
      source:
        "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.34.png?v=1752497063",
    },
    {
      source:
        "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.11.50.png?v=1752498777",
    },
    {
      source:
        "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.10.png?v=1752497092",
    },
    {
      source:
        "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.44.54.png?v=1752497118",
    },
    {
      source:
        "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.46.37.png?v=1752497216",
    },
    {
      source:
        "https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.45.36.png?v=1752497166",
    },
    {
      source:
        "https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.47.12.png?v=1752497252",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videosPerView = 4;
  const totalSegments = videos.length - videosPerView + 1;

  const handleSegmentClick = (index) => {
    setCurrentIndex(index);
    setPlayingVideo(null);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setPlayingVideo(null);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalSegments - 1) {
      setCurrentIndex(currentIndex + 1);
      setPlayingVideo(null);
    }
  };

  const handleVideoClick = (index) => {
    setPlayingVideo(index);
  };

  return (
    <div className="bg-(--color-bg) py-14 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-(--page-width) mx-auto px-6">
        {/* Trustpilot Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_2.png?v=1752485383"
            alt="trustpilot"
            className="max-w-full h-auto"
          />
        </div>

        {/* Title */}
        <h2 className="font-[Lora] text-[32px] text-center text-[#111111] my-4 mb-8">
          See The Stories of Sculptique™ Women Firsthand
        </h2>

        {/* Video Carousel */}
        <div className="mb-8 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / videosPerView + 1)
              }%)`,
            }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="shrink-0 relative cursor-pointer lg:p-1.25"
                style={{ width: "294px", height: "522px" }}
                onClick={() => handleVideoClick(index)}
              >
                {playingVideo === index ? (
                  <video
                    playsInline
                    controls
                    autoPlay
                    className="w-full h-full object-cover rounded-lg justify-around"
                    style={{ width: "294px", height: "522px"}}
                  >
                    <source src={video.source} type="video/mp4" />
                  </video>
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      playsInline
                      poster={video.poster}
                      className="w-full h-full object-cover rounded-lg"
                      // style={{ width: "294px", height: "522px" }}
                    >
                      <source src={video.source} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519"
                        alt="play button"
                        className="w-16 h-16"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Controls: Indicator Bar and Navigation Buttons */}
        <div className="flex items-center justify-between mb-8">
          {/* Indicator Bar */}
          <ul className="flex w-[1040px]">
            {Array.from({ length: totalSegments }).map((_, index) => (
              <li
                key={index}
                onClick={() => handleSegmentClick(index)}
                className={`h-1 cursor-pointer transition-all duration-300 flex-1 ${
                  index === currentIndex
                    ? "bg-[rgb(3,152,105)]"
                    : "bg-[rgba(0,0,0,0.5)]"
                }`}
              />
            ))}
          </ul>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-opacity`}
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845"
                alt="slide back"
                className="w-8 h-8"
              />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === totalSegments - 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-opacity`}
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845"
                alt="slide forward"
                className="w-8 h-8 rotate-180"
              />
            </button>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="flex justify-center">
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
}

export default StoriesVideo;