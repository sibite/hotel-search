import { createContext, ReactNode, useMemo, useState } from 'react';

interface Props {
  children: ReactNode;
}

export type FiltersContextType = {
  minRating: number;
  minAdults: number;
  minChildren: number;
  setRating: (x: number) => void;
  setAdults: (x: number) => void;
  setChildren: (x: number) => void;
};

export const defaultFiltersContextValue = {
  minRating: 1,
  minAdults: 1,
  minChildren: 0,
  setRating() {},
  setAdults() {},
  setChildren() {},
};

export const FiltersContext = createContext<FiltersContextType>(
  defaultFiltersContextValue
);

const FiltersContextProvider: React.FC<Props> = ({ children: childrenDOM }) => {
  const [rating, setRating] = useState<number>(1);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  const contextValue = useMemo(
    () => ({
      minRating: rating,
      minAdults: adults,
      minChildren: children,
      setRating,
      setAdults,
      setChildren,
    }),
    [rating, adults, children]
  );

  return (
    <FiltersContext.Provider value={contextValue}>
      {childrenDOM}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;
