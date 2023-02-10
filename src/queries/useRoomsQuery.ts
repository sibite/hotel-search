import { useEffect, useState } from 'react';
import Query, { QueryStateType } from './Query';
import { RoomsListType } from './types/roomList.type';

type QueryData = RoomsListType;

const roomsQueries: { [hotelId: string]: Query<QueryData> } = {};

const useRoomsQuery = (hotelId: string) => {
  if (!roomsQueries[hotelId]) {
    roomsQueries[hotelId] = new Query<QueryData>(`roomRates/OBMNG/${hotelId}`);
  }

  const [queryState, setQueryState] = useState<QueryStateType<QueryData>>(
    roomsQueries[hotelId].state
  );

  const refetch = () => roomsQueries[hotelId].fetch();

  useEffect(() => {
    const subscription = roomsQueries[hotelId].subscribe((state) => {
      setQueryState(state);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [hotelId]);

  if (!roomsQueries[hotelId].state.isInitialized) {
    refetch();
    return {
      ...queryState,
      isLoading: true,
      refetch,
    };
  }

  return {
    ...queryState,
    refetch,
  };
};

export default useRoomsQuery;
