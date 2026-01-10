import React from "react";

function Reviews() {
  const offers = [
    {
      image: "https://trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222",
      name: "Free Shipping from USA",
      description: "On all orders"
    },
    {
      image: "https://trysculptique.com/cdn/shop/files/support-min.png?v=1758713216",
      name: "Naturally Supports Your Body",
      description: "Promotes healthy immune cell functions"
    },
    {
      image: "https://trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216",
      name: "100% Natural Ingredients",
      description: "8 active, natural ingredients"
    },
    {
      image: "https://trysculptique.com/cdn/shop/files/60-min.png?v=1758713216",
      name: "Try it Risk Free for 60 Days",
      description: "60-day money-back guarantee"
    },
  ]

  return (
    <div>
      <div></div>
      <div>
        {offers.map((offer, index) => (
          <div key={index}>
            <img src={offer.image} alt="offer image" />
            <p>{offer.name}</p>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
