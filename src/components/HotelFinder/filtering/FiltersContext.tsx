import { createContext, ReactNode, useMemo, useState } from 'react';

interface Props {
  children: ReactNode;
}

type FiltersContextType = {
  minRating: number;
  minAdults: number;
  minChildren: number;
  setRating: (x: number) => void;
  setAdults: (x: number) => void;
  setChildren: (x: number) => void;
};

export const FiltersContext = createContext<FiltersContextType>({
  minRating: 0,
  minAdults: 1,
  minChildren: 0,
  setRating() {},
  setAdults() {},
  setChildren() {},
});

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
