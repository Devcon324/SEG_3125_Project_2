import React, { useState } from "react";
import FAQContent from "../components/FAQContent";
import '../styles/FAQ.css';

const FAQ = () => {
  const [language, setLanguage] = useState("English");
  const changeLanguage = () => {
    if (language === "English") {
      setLanguage("French");
    }
    else {
      setLanguage("English");
    }
  }

  return (
    <div className="FAQ">
      <button
      className="language-button"
      onClick={() => changeLanguage()}
      >Change Language: {language}</button>
      <FAQContent language={language} />
    </div>
    );
};

export default FAQ;