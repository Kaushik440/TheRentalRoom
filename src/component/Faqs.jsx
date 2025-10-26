import React, { useState } from "react";

const faqsData = [
  {
    question: "What is the Rental Room Application?",
    answer:
      "The Rental Room Application is a web-based platform that helps users easily find and rent affordable 1BHK, 2BHK, or 3BHK rooms and apartments in different cities.",
  },
  {
    question: "How can I search for a room?",
    answer:
      "Enter the city name and select the room type (1BHK, 2BHK, or 3BHK) from the filter options to see available listings.",
  },
  {
    question: "Is the application free to use?",
    answer: "Yes, the application is completely free for users.",
  },
  {
    question: "How do I contact the owner of a listed property?",
    answer:
      "Each listing includes contact details or a button to directly reach the property owner.",
  },
  {
    question: "Can I list my own property for rent?",
    answer:
      "Currently, the app is focused on rental search. Listing options for owners may come in future updates.",
  },
  {
    question: "What technologies are used?",
    answer:
      "React (frontend), PHP (backend), Bootstrap (UI), and MySQL (database) are used to build this app.",
  },
  {
    question: "Is login or registration required?",
    answer:
      "Yes, registration/login is needed to save favorites and contact property owners.",
  },
  {
    question: "How is user data managed?",
    answer: "User and listing data are stored securely in a MySQL database.",
  },
  {
    question: "Can I filter by budget or amenities?",
    answer:
      "Currently only by city and room type. More filters will be added soon.",
  },
  {
    question: "Who do I contact for support?",
    answer: "Use the 'Contact Us' section in the app to send feedback or get help.",
  },
];

const FAQItem = ({ faq, index, toggleFAQ, isOpen }) => (
  <div className="faq-item">
    <div className="faq-question" onClick={() => toggleFAQ(index)}>
      <h4>{faq.question}</h4>
    </div>
    {isOpen && <div className="faq-answer"><p>{faq.answer}</p></div>}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section" style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
      {faqsData.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          index={index}
          isOpen={openIndex === index}
          toggleFAQ={toggleFAQ}
        />
      ))}
    </div>
  );
};

export default FAQSection;
