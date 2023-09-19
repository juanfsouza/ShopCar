'use client'

import { createContext, useContext, useState } from 'react';

// create context
export const SearchContext = createContext();

// provider
export const SearchContextProvider = ({ children }) => {
  const [SearchActive, setSearchActive] = useState(false);
    return  ( 
    <SearchContext.Provider value={{SearchActive, setSearchActive}}>
        {children}
    </SearchContext.Provider>
  );
}
