"use client";
import { LANGUAGES, LanguageContext } from "@/contexts/linguage-context";
import { useContext } from "react";

export const Body = () => {
  const { language } = useContext(LanguageContext);

  const text = {
    title:
      language === LANGUAGES.EN
        ? "Hi, Marcelo Mendes here"
        : "Oi, Marcelo Mendes aqui",
    subtitle:
      language === LANGUAGES.EN
        ? "Software Engineer"
        : "Engenheiro de Software",
    description:
      language === LANGUAGES.EN
        ? "This is my professional space, where I share my passion for technology and trajectory."
        : "Este é o meu espaço profissional, onde compartilho minha paixão pela tecnologia e tragetória.",
  };
  return (
    <div className="flex flex-col items-start  bg-gradient-to-t from-[#1a143d] to-[#222067] small-breakpoint:items-center justify-center h-[80%] w-full">
      <div className="ml-10">
        <h1 className="text-white text-4xl leading-tight">{text.title}</h1>
        <h2 className="text-white text-2xl py-6">{text.subtitle}</h2>
        <p className="text-white text-lg w-[500px]">{text.description}</p>
      </div>
    </div>
  );
};
