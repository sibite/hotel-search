import { useContext } from 'react';
import useRooms from '../../../queries/useRooms';
import { FiltersContext } from './FiltersContext';

const useFilteredRoomsIds = (hotelId: string) => {
  const { minAdults, minChildren } = useContext(FiltersContext);
  const { roomsIds, roomsById } = useRooms(hotelId);

  const filteredRoomsIds = roomsIds.filter(
    (id) =>
      roomsById[id].occupancy.maxAdults >= minAdults &&
      roomsById[id].occupancy.maxChildren >= minChildren
  );

  return filteredRoomsIds;
};
export default useFilteredRoomsIds;
