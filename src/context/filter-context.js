import { createContext, useContext, useState } from "react";
import { FILTER_DEFINITIONS } from "../filterConfig";

const FilterContext = createContext();
export const useFilters = () => useContext(FilterContext);

const initialFilterState = FILTER_DEFINITIONS.reduce((acc, section) => {
    acc[section.title] = [...section.options]; // select all options
    return acc;
  }, {});

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialFilterState);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};