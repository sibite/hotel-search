export type HotelType = Partial<{
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
