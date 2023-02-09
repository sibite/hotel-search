import { RoomType } from './types/roomList.type';
import useRoomsQuery from './useRoomsQuery';

const useRooms = (hotelId: string) => {
  const { data, isError, isLoading } = useRoomsQuery(hotelId);
  const rooms = data?.rooms;

  const roomsById: { [id: string]: RoomType } = {};
  const roomsIds: string[] = [];

  if (rooms) {
    rooms.forEach((room) => {
      if (!room.id) return;
      roomsIds.push(room.id);
      roomsById[room.id] = room;
    });
  }

  return {
    rooms,
    roomsIds,
    roomsById,
    isError,
    isLoading,
  };
};
export default useRooms;
