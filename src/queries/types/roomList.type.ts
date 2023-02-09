export type RatePlanType = {
  id: string;
  shortDescription: string;
  longDescription: string;
  prePayment: string;
  cancellationPolicy: {
    name: string;
    text: string;
    penalty: string;
    applicable: string;
    hour: string;
  };
};

export type RoomType = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
  };
  disabledAccess: boolean;
  bedConfiguration: string;
  images: {
    url: string;
    alt: string;
  }[];
  facilities: [
    {
      code: string;
      name: string;
    }
  ];
};

export type RoomsListType = {
  ratePlans: RatePlanType[];
  rooms: RoomType[];
};
