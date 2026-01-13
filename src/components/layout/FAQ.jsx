import React, { useState } from "react";
import CheckoutButton from "../common/CheckoutButton";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const list = [
    {
      question: "How is this different from lymphatic drops I saw on TikTok?",
      answer: [
        "Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.",
        "Sculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more.",
      ],
    },
    {
      question: "Why didn't my diet changes work?",
      answer: [
        "Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there. That's why you could eat perfectly clean and still wake up bloated—the backed-up lymphatic waste was still pooling in your tissues.",
      ],
    },
    {
      question: "How long until I see results?",
      answer: [
        "Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. But true restoration takes time—we recommend 90 days for complete results.",
      ],
    },
    {
      question: "Is this safe? Any side effects?",
      answer: [
        "Sculptique contains 100% natural botanical ingredients used safely for centuries. The most common experience is increased urination in the first few days (expected—you're flushing excess fluid). Serious side effects are extremely rare. However, if you have pre-existing conditions or take prescription medications, consult your healthcare provider first.",
      ],
    },
    {
      question: "Can I take this with other supplements?",
      answer: [
        "Yes. Sculptique works synergistically with most supplements. However, if you're taking blood thinners, diuretics, thyroid medication, or immune-suppressing drugs, check with your healthcare provider first.",
      ],
    },
    {
      question: "How do I use it?",
      answer: [
        "Take 2 capsules daily with water. Any time of day (though mornings are ideal). With or without food. Just be consistent.",
      ],
    },
    {
      question: "What if it doesn't work for me?",
      answer: [
        "You have 60 full days to try it. If you don't feel lighter, less bloated, more energized—send it back. Even if you've taken every capsule. We'll refund your purchase immediately. You only keep Sculptique if it works for YOU.",
      ],
    },
    {
      question: "Where is this manufactured?",
      answer: [
        "Sculptique is manufactured in the USA at an FDA-registered, GMP-certified facility. We use Infrared Spectroscopy testing, heavy metal testing, and third-party quality control. Every batch is tested to ensure therapeutic doses with no contaminants.",
      ],
    },
    {
      question: "Why isn't this in stores?",
      answer: [
        "Two reasons: Quality control (we oversee the entire process from sourcing to testing) and price (retail markup would make it cost at least double). By selling direct, we maintain the highest quality while keeping the price affordable.",
      ],
    },
    {
      question: "Is this vegan/gluten-free?",
      answer: [
        "Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients",
      ],
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4">
      <div className="md:w-[65%] mx-auto">
        <h2 className="font-[Lora] text-[32px] md:text-[36px] text-center text-[#111111] mb-12 md:mb-14">
          Frequently Asked Questions
        </h2>
        <div
          className="space-y-0 bg-linear-to-b from-white to-[#F4EFE6] rounded-2xl font-[Nunito]
          md:px-8"
        >
          {list.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#E5E5E5] last:border-b-0 font-[Nunito]"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-5 px-2 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
                aria-expanded={openIndex === index}
              >
                <p className="text-[#111111] font-normal pr-4 text-[18px]">
                  {item.question}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={`w-4 h-4 shrink-0 transition-transform duration-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-250 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 pt-2 px-2 space-y-4">
                  {item.answer.map((ans, idx) => (
                    <p
                      key={idx}
                      className="font-[Nunito] text-[16px] text-[#333333] leading-relaxed"
                    >
                      {ans}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <CheckoutButton />
      </div>
    </div>
  );
}

export default FAQ;
