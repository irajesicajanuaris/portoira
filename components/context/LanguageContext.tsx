"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { translations, type Lang } from "../data/translations";

type LanguageContextType = {
  lang: Lang;
  toggle: () => void;
  t: Record<string, string>;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggle: () => {},
  t: {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "en" ? "id" : "en"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
