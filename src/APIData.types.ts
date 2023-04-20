export type Rating = {
  count: number;
  rate: number;
};
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: Rating;
};
export type ProductIdentifier = {
  productId: number;
  quantity: number;
};
export type Cart = {
  id: number;
  userId: number;
  date: string;
  products: Array<ProductIdentifier>;
};

export type Geolocation = {
  lat: string;
  long: string;
};

export type Address = {
  city: string;
  geolocation: Geolocation;
  number: number;
  street: string;
  zipcode: string;
};

export type Name = {
  firstname: string;
  lastname: string;
};
export type User = {
  id: number;
  email: string;
  address: Address;
  name: Name;
  password: string;
  phone: string;
  username: string;
};
