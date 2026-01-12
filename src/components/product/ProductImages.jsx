import React, { useState } from "react";
import Modal from "../ui/Modal";

function ProductImages() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  // Desktop Images array
  const desktopImages = [
    "https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216",
    "https://trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216",
  ];

  // Mobile Images array
  const mobileImages = [
    "https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard6.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard8.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard9.jpg?v=1760103684",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard10.jpg?v=1760103684",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard11.jpg?v=1760103684",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard12.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard13.jpg?v=1760103685",
  ];

  const handlePrevious = () => {
    setCurrentMobileIndex((prev) =>
      prev === 0 ? mobileImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentMobileIndex((prev) =>
      prev === mobileImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentMobileIndex(index);
  };

  return (
    <div className="w-full">
      {/* Desktop & Tablet Layout (Unchanged) */}
      <div className="hidden md:flex md:flex-col md:gap-4 relative">
        <div className="flex justify-center relative">
          <img
            src={desktopImages[0]}
            alt="product-main"
            className="md:w-147 md:h-147 object-cover rounded-md"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
            alt="sale badge"
            className="absolute top-6 right-6 w-32 h-32 z-10"
          />
          <span
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full px-6 py-2.5 items-center gap-3 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-white/60 z-20 group"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
              alt="modal button"
              className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-['Nunito'] text-[17px] font-medium text-[#333333]">
              Nutritional Information
            </span>
          </span>
        </div>
        <div className="flex gap-4 justify-center">
          <img
            src={desktopImages[1]}
            alt="sub-1"
            className="w-[286px] h-[286px] object-cover rounded-2xl"
          />
          <img
            src={desktopImages[2]}
            alt="sub-2"
            className="w-[286px] h-[286px] object-cover rounded-2xl"
          />
        </div>
        <div className="flex gap-4 justify-center">
          <img
            src={desktopImages[3]}
            alt="sub-3"
            className="w-[185.33px] h-[185.33px] object-cover rounded-2xl"
          />
          <img
            src={desktopImages[4]}
            alt="sub-4"
            className="w-[185.33px] h-[185.33px] object-cover rounded-2xl"
          />
          <img
            src={desktopImages[5]}
            alt="sub-5"
            className="w-[185.33px] h-[185.33px] object-cover rounded-2xl"
          />
        </div>
        <div className="flex gap-4 justify-center">
          <img
            src={desktopImages[6]}
            alt="sub-6"
            className="w-[286px] h-[306.99px] object-cover rounded-2xl"
          />
          <img
            src={desktopImages[7]}
            alt="sub-7"
            className="w-[286px] h-[306.99px] object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* =========================================
          MOBILE LAYOUT
      ========================================= */}
      <div className="flex md:hidden flex-col gap-4">
        {/* Row 1: Main Image Slider */}
        <div className="flex justify-center relative overflow-hidden w-full">
          <div className="relative w-[290px] h-[290px] overflow-hidden rounded-[5px]">
            {/* Main Track */}
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentMobileIndex * 100}%)` }}
            >
              {mobileImages.map((src, index) => (
                <div key={index} className="min-w-full h-full">
                  <img
                    src={src}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Overlays */}
            {currentMobileIndex === 0 && (
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
                alt="sale badge"
                className="absolute top-4 right-4 w-20 h-20 z-10 transition-opacity duration-300"
              />
            )}
            <button
              onClick={handlePrevious}
              className="absolute left-6 top-[51%] -translate-y-1/2 w-8 h-8 cursor-pointer z-10 active:scale-95 transition-transform"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png?v=1752126281"
                alt="arrow left"
                className="w-full h-full object-contain"
              />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 top-[51%] -translate-y-1/2 w-8 h-8 cursor-pointer z-10 hover:opacity-80 active:scale-95 transition-transform"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin.png?v=1752126281"
                alt="arrow right"
                className="w-full h-full object-contain"
              />
            </button>
            <div
              onClick={() => setIsModalOpen(true)}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] max-w-[260px] bg-white backdrop-blur-sm rounded-full py-2 px-3 flex items-center justify-center gap-2 shadow-md border border-white/50 cursor-pointer z-20 active:scale-95 transition-transform opacity-85"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
                alt="modal button"
                className="w-6 h-6"
              />
              <span className="font-[sans-serif] tracking-widest text-[14px] font-medium text-[#333333]">
                Nutritional Information
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Thumbnail Slider */}
        <div className="flex justify-center w-full">
          <div className="w-[290px] overflow-hidden">
            <div
              className="flex gap-2 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentMobileIndex * 73}px)` }}
            >
              {mobileImages.map((image, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={image}
                    alt={`thumb-${index}`}
                    onClick={() => handleThumbnailClick(index)}
                    className="w-[65px] h-[65px] object-cover rounded-lg cursor-pointer transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default ProductImages;
