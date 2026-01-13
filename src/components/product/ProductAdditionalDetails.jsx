import React, { useState, useRef } from "react";

function ProductAdditionalDetails() {
  const [expandedIndex, setExpandedIndex] = useState(1); // Middle item expanded by default
  const contentRefs = useRef([]);

  const accordionItems = [
    {
      title: "Ingredients proven by science",
      content: (
        <div>
          <p className="mb-4 font-['Montserrat'] text-[15px] leading-[27px] text-black/75">
            <strong>Sculptique Ingredients:</strong>
          </p>
          <ul className="list-disc pl-[40px] font-['Montserrat'] text-[15px] leading-[27px] text-black/75 space-y-0 my-[15px]">
            <li>
              <strong>Echinacea purpurea Extract</strong> – Known for its anti-inflammatory properties, it may support skin health.
            </li>
            <li>
              <strong>Dandelion Extract</strong> – Traditionally used as a diuretic, it may help reduce water retention.
            </li>
            <li>
              <strong>Burdock Powder</strong> – Contains antioxidants that may promote skin clarity.
            </li>
            <li>
              <strong>Cleavers Extract</strong> – Believed to support lymphatic drainage and detoxification.
            </li>
            <li>
              <strong>Rutin</strong> – A flavonoid that may strengthen blood vessels and improve circulation.
            </li>
            <li>
              <strong>Bromelain Powder</strong> – An enzyme from pineapple that may reduce inflammation and support tissue repair.
            </li>
            <li>
              <strong>Lemon Powder</strong> – Rich in vitamin C, it may aid in collagen production and skin rejuvenation.
            </li>
            <li>
              <strong>Kelp Extract</strong> – A source of iodine and minerals that may support skin metabolism.
            </li>
          </ul>
          <p className="mt-4 font-['Montserrat'] text-[15px] leading-[27px] text-black/75">
            These natural ingredients work together to reduce puffiness, bloating, fluid retention.
          </p>
        </div>
      )
    },
    {
      title: "How does it actually work?",
      content: "Sculptique works by improving blood flow and supporting lymphatic drainage to reduce fluid buildup that causes puffiness, inflammation, and water retention. It also reduces inflammation and boosts collagen production to help skin become firmer and smoother."
    },
    {
      title: "Shipping and returns",
      content: "All of Sculptique orders get FREE shipping straight from our USA warehouse. Orders are usually shipped out within 1-2 working days, and you should receive the order within 3-7 working days for domestic USA orders, and within 10 working days for International orders."
    }
  ];

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 max-w-3xl px-2 md:mx-auto w-full mt-4 mb-8">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className={`rounded-[25px] bg-white p-4 transition-all duration-300 ${
            expandedIndex === index
              ? "border border-[#10B981]"
              : "border border-[#E5E7EB]"
          }`}
        >
          {/* Header Row */}
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <p className="font-['Montserrat'] text-[#111827] text-base font-medium pr-4 flex-1">
              {item.title}
            </p>

            {/* Icon */}
            <div className="w-6 h-6 rounded-full bg-(--color-bg) flex items-center justify-center shrink-0 transition-transform duration-300">
              {expandedIndex === index ? (
                <svg
                  className="w-3 h-3 text-[#065F46] transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3 h-3 text-[#065F46] transition-transform duration-300 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Content Row (Expanded) */}
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: expandedIndex === index 
                ? `${contentRefs.current[index]?.scrollHeight}px` 
                : '0px',
              opacity: expandedIndex === index ? 1 : 0
            }}
          >
            <div className="mt-4 pr-4 md:pr-10">
              {typeof item.content === 'string' ? (
                <p className="font-['Montserrat'] text-[15px] leading-[27px] text-black/75">
                  {item.content}
                </p>
              ) : (
                // For complex content (like the list), styles are handled inside the object
                item.content
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductAdditionalDetails;