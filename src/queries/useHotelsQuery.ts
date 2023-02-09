import { useState } from 'react';
import Query, { QueryStateType } from './Query';
import { HotelType } from './types/hotel.type';

type QueryData = HotelType[];

const hotelsQuery = new Query<QueryData>('hotels?collection-id=OBMNG');

const useHotelsQuery = () => {
  const [queryState, setQueryState] = useState<QueryStateType<QueryData>>(
    hotelsQuery.state
  );

  const refetch = () => hotelsQuery.fetch();

  hotelsQuery.subscribe((state) => {
    setQueryState(state);
  });

  if (!hotelsQuery.state.isInitialized) {
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

export default useHotelsQuery;
