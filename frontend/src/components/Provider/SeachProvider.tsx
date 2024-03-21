"use client";

import React from "react";
import { createContext, useState } from "react";

type Search = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = createContext<Search>({} as Search);

export default function SearchProvider({ children }: any) {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}