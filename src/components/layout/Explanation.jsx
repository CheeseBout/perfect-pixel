import React from "react";
import CheckoutButton from "../common/CheckoutButton";

function Explanation() {
  const examples = [
    {
      image:
        "https://trysculptique.com/cdn/shop/files/Untitled_design_3.png?v=1760689800",
      description:
        "Your stomach is flat in the morning, but by evening you look six months pregnant.",
    },
    {
      image:
        "https://trysculptique.com/cdn/shop/files/Untitled_design_3_1.png?v=1760689799",
      description:
        'Your ankles disappear into "kankles" by the end of the day.',
    },
    {
      image:
        "https://trysculptique.com/cdn/shop/files/Untitled_design_4.png?v=1760689801",
      description:
        "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
    },
    {
      image:
        "https://trysculptique.com/cdn/shop/files/Untitled_design_4_1.png?v=1760689799",
      description:
        "You feel foggy and exhausted even after a full night's sleep.",
    },
    {
      image:
        "https://trysculptique.com/cdn/shop/files/Untitled_design_3_2.png?v=1760689799",
      description: "You wake up stiff and achy, like your body aged overnight.",
    },
  ];

  const chartTicks = [
    { description: "Waste gets drained away" },
    { description: "Fluid stays balanced." },
    { description: "Your body feels light and energized." },
  ];

  const chartCross = [
    { description: "Vessel pumping weakens." },
    { description: "One-way valves fail." },
    { description: "Protein clogs form." },
    { description: "Vessel walls become leaky." },
  ];

  const diagramCross = [
    { description: "That's why you're bloated." },
    { description: "That's why your ankles swell." },
    { description: "That's why you see cellulite." },
    { description: "That's why you feel exhausted and foggy." },
  ];

  const nothingWorked = [
    {
      image: "https://trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360",
      description:
        "You cut out gluten, dairy, sugar. You ate clean for months.",
      reason:
        "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
    },
    {
      image: "https://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359",
      description: "You tried viral lymphatic drops from TikTok.",
      reason:
        "They’re just pricey water with trace herbs. The “active ingredients” are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.",
    },
    {
      image: "https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359",
      description: "You got lymphatic massage or bought compression socks.",
      reason:
        "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.",
    },
  ];

  return (
    <div>
      <div>
        {examples.map((example, index) => (
          <div key={index}>
            <img src={example.image} alt="" />
            <p>{example.description}</p>
          </div>
        ))}
      </div>
      <div>
        <img
          src="https://trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771"
          alt="no one knows"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
          alt="arrow"
        />
        <h2>The Connection You've Been Missing</h2>
        <img
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003590.png?v=1760690771"
          alt="missing connections"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
          alt="arrow"
        />
        <h2>Your Hidden Drainage System</h2>
        <div>
          {/* Chart */}
          <div>
            <div>
              <p>
                Your lymphatic system is your body's internal cleaning crew—a
                network of vessels that processes{" "}
                <strong>
                  3-4 liters of cellular waste and excess fluid every single
                  day.
                </strong>
              </p>
              <p>When it's working properly, you don't even know it exists.</p>
              <ul>
                {chartTicks.map((tick, index) => (
                  <li key={index}>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"
                      alt="tick"
                    />
                    <span>{tick.description}</span>
                  </li>
                ))}
              </ul>
              <p>
                But after age 35, declining estrogen hijacks this system's
                ability to function.
              </p>
              <ul>
                {chartCross.map((item, index) => (
                  <li key={index}>
                    <img
                      src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                      alt="cross"
                    />
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
              <p>
                Instead of processing and removing waste, it backs up in your
                tissues.
              </p>
            </div>
            <div>
              <img
                src="https://trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546"
                alt="chart"
              />
            </div>
          </div>

          {/* Diagram */}
          <div>
            <div>
              <img
                src="https://trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096"
                alt="diagram"
              />
            </div>
            <div>
              <p>
                <strong>
                  And it accumulates. Day after day. Week after week.
                </strong>
              </p>
              <p>
                That gallon of fluid your body should be draining every 24
                hours? It's pooling in your stomach, your legs, your
                face—anywhere gravity and tissue structure allow it to settle.
              </p>
              <p>
                The metabolic waste your cells produce overnight? It's still
                sitting there at noon. At dinner. While you're trying to fall
                asleep.
              </p>
              <ul>
                {diagramCross.map((item, index) => (
                  <li key={index}>
                    <img
                      src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                      alt="cross"
                    />
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
              <p>
                <strong>
                  Your cells are literally sitting in their own waste—and your
                  body can't flush it out.
                </strong>
              </p>
              <p>
                The longer this goes on, the worse it gets. More congestion.
                More inflammation. More pressure on an already compromised
                system.
              </p>
            </div>
          </div>

          {/* Nothing Worked */}
          <div>
            {nothingWorked.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt="image" />
                <h4>{item.description}</h4>
                <span>
                  Why it failed{" "}
                  <img
                    src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                    alt="cross"
                  />
                </span>
                <p>{item.reason}</p>
              </div>
            ))}
          </div>

          {/* Missing Piece */}
          <img src="https://trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176" alt="missing piece" />
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
}

export default Explanation;
