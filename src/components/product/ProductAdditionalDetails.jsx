import React from "react";

function ProductAdditionalDetails() {
  const list = [
    {title: "How does it actually work?", content: "Sculptique works by improving blood flow and supporting lymphatic drainage to reduce fluid buildup that causes puffiness, inflammation, and water retention. It also reduces inflammation and boosts collagen production to help skin become firmer and smoother."},
    {title: "Shipping and returns", content: "All of Sculptique orders get FREE shipping straight from our USA warehouse. Orders are usually shipped out within 1-2 working days, and you should receive the order within 3-7 working days for domestic USA orders, and within 10 working days for International orders."}
  ]
  return (
    <div>
      <div>
        <div>
          <p>Ingredients proven by science</p>
        </div>
        <div>
          <p>
            <strong>Sculptique Ingredients:</strong>
          </p>
          <ul>
            <li><strong>Echinacea purpurea Extract</strong> – Known for its anti-inflammatory properties, it may support skin health.</li>
            <li><strong>Dandelion Extract</strong> – Traditionally used as a diuretic, it may help reduce water retention.
            <br/>
            <strong>Burdock Powder</strong> – Contains antioxidants that may promote skin clarity.
            </li>
            <li><strong>Cleavers Extract</strong>  – Believed to support lymphatic drainage and detoxification.</li>
            <li><strong>Rutin</strong> – A flavonoid that may strengthen blood vessels and improve circulation.</li>
            <li><strong>Bromelain Powder</strong>  – An enzyme from pineapple that may reduce inflammation and support tissue repair.</li>
            <li><strong>Lemon Powder</strong> – Rich in vitamin C, it may aid in collagen production and skin rejuvenation.</li>
            <li><strong>Kelp Extract</strong> – A source of iodine and minerals that may support skin metabolism.</li>
          </ul>
          <p>These natural ingredients work together to reduce puffiness, bloating, fluid retention.</p>
        </div>
      </div>
      {list.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <span><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844" alt="extend" /></span>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductAdditionalDetails;
