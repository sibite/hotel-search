import { HotelType } from './types/hotel.type';
import useHotelsQuery from './useHotelsQuery';

const useHotels = () => {
  const { data, isError, isLoading } = useHotelsQuery();

  const hotelsById: { [id: string]: HotelType } = {};
  const hotelsIds: string[] = [];

  if (data) {
    data.forEach((hotel) => {
      if (!hotel.id) return;
      hotelsIds.push(hotel.id);
      hotelsById[hotel.id] = hotel;
    });
  }

  return {
    hotels: data,
    hotelsIds,
    hotelsById,
    isError,
    isLoading,
  };
};
export default useHotels;
