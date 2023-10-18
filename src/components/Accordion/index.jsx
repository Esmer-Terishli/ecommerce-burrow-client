import React, { useState } from "react";
import "../../assets/styles/_Accordion.style.scss";

import accordimage from "../../assets/images/accord-image.jpg";

const data = [
  {
    question: "How can I make a payment?",
    answer:
      "We offer multiple payment options for your convenience. You can choose to make a payment using credit or debit cards, PayPal, or bank transfers. During the checkout process, you'll have the opportunity to select your preferred payment method.",
  },
  {
    question: "How much is the shipping cost?",
    answer:
      "Delivery times and shipping costs can vary based on your location and the specific items you're ordering. To get accurate information about delivery times and shipping costs, please visit our website and enter your delivery address and the items you wish to purchase in the shopping cart. The system will provide you with the relevant details.",
  },
  {
    question: "What are your return and exchange policies?",
    answer:
      "Our return and exchange policies are detailed on our website's 'Returns and Exchanges' page. We encourage you to review this page for comprehensive information about our policies, including the conditions and procedures for returns and exchanges.",
  },
  {
    question: "What warranties are applicable to your products?",
    answer:
      "Warranty coverage varies depending on the product you purchase. You can find specific warranty information for each product either on the product's dedicated page or in the product documentation that comes with your purchase. Please review this information to understand the warranty terms applicable to your item.",
  },
  {
    question: "Can I get assistance with assembling the products?",
    answer:
      "Yes, we offer assembly assistance for select products. To inquire about assembly services, please reach out to our customer support team. They will provide you with details on the availability and cost of assembly assistance for your specific item.",
  },
  {
    question: "How can I get information about color options and dimensions?",
    answer:
      "You can easily access information about color options and product dimensions on the dedicated product pages on our website. We provide detailed descriptions, images, and specifications for each product to help you make an informed decision.",
  },
];

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <div className="accord container mx-auto py-16 mb-16">
      <h1 className="text-center pb-16 font-neucha">
        FAQ (Frequently Asked Questions)
      </h1>
      <div className="lg:flex lg:justify-evenly">
        <div className="flex justify-center">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item rounded" key={i}>
              <div className="title flex justify-between items-center" onClick={() => toggle(i)}>
                <h2 className="font-bold text-left">{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
        </div>

        <div className="hidden lg:block accord-image h-1/3 w-1/3">
          <img src={accordimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
