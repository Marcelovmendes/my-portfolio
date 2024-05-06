"use client";
import { useContext } from "react";
import { LanguageContext, LANGUAGES } from "../contexts/linguage-context";
export const LanguageToggle = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className="flex items-center justify-center h-24 w-[40%]">
      <button
        className={`text-white ${
          language === LANGUAGES.EN ? "focus:outline-none" : "opacity-50"
        }`}
        onClick={() => setLanguage(LANGUAGES.EN)}
      >
        EN
      </button>
      <button
        className={`text-white ${
          language === LANGUAGES.PTBR ? "focus:outline-none" : "opacity-50"
        }`}
        onClick={() => setLanguage(LANGUAGES.PTBR)}
      >
        BR
      </button>
    </div>
  );
};
