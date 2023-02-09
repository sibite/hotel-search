import { useState } from 'react';
import Query, { QueryStateType } from './Query';

type HotelType = Partial<{
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: {
    code: string;
  }[];
  telephone: string;
  email: string;
  images: {
    url: string;
  }[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: {
    timezone: string;
  };
}>;

type QueryData = HotelType[];

const hotelsQuery = new Query<QueryData>('hotels?collection-id=OBMNG');

const useHotelsQuery = () => {
  const [queryState, setQueryState] = useState<QueryStateType<QueryData>>(
    hotelsQuery.state
  );

  console.log(queryState);

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
