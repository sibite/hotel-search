import { useContext } from 'react';
import useHotels from '../../../queries/useHotels';
import { FiltersContext } from './FiltersContext';

const useFilteredHotelsIds = () => {
  const { minRating } = useContext(FiltersContext);
  const { hotelsIds, hotelsById } = useHotels();

  const filteredHotelsIds = hotelsIds.filter(
    (id) => +(hotelsById[id].starRating ?? -1) >= minRating
  );

  return filteredHotelsIds;
};
export default useFilteredHotelsIds;
