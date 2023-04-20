import { Cart, Product, User } from "../APIData.types";

export const mockUser: User[] = [
  {
    id: 1,
    email: "johnny@mail.com",
    address: {
      city: "Warsaw",
      geolocation: { lat: "20.771523", long: "10.795778" },
      number: 12,
      street: "long",
      zipcode: "142131",
    },
    name: { firstname: "john", lastname: "smith" },
    password: "fasahgwefw",
    phone: "412316421",
    username: "johnny",
  },
  {
    id: 2,
    email: "dannydoe@mail.com",
    address: {
      city: "Cracow",
      geolocation: { lat: "45.686996", long: "15.017345" },
      number: 41,
      street: "short",
      zipcode: "52313",
    },
    name: { firstname: "danny", lastname: "doe" },
    password: "pqoruiojg",
    phone: "542978462",
    username: "dannydoe",
  },
  {
    id: 3,
    email: "karen2@mail.com",
    address: {
      city: "Gdansk",
      geolocation: { lat: "35.701917", long: "139.077749" },
      number: 65,
      street: "shinjuku",
      zipcode: "71214",
    },
    name: { firstname: "karen", lastname: "weeb" },
    password: "opqjdknvd",
    phone: "412764898",
    username: "karen2",
  },
];

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "baseball bat",
    price: 29.45,
    description: "totally casual baseball bat",
    category: "sports equipment",
    rating: { count: 46, rate: 8.4 },
  },
  {
    id: 2,
    title: "small drawer",
    price: 86.99,
    description: "basic furniture",
    category: "furniture",
    rating: { count: 126, rate: 7.1 },
  },
  {
    id: 3,
    title: "baseball hat",
    price: 10.25,
    description: "totally casual baseball hat",
    category: "sports equipment",
    rating: { count: 98, rate: 9.1 },
  },
];

export const mockCart: Cart[] = [
  {
    id: 1,
    userId: 1,
    date: "2008-05-12T00:00:00.000Z",
    products: [
      { productId: 1, quantity: 3 },
      { productId: 2, quantity: 1 },
    ],
  },
  {
    id: 2,
    userId: 2,
    date: "2012-06-08T00:00:00.000Z",
    products: [
      { productId: 1, quantity: 8 },
      { productId: 2, quantity: 12 },
    ],
  },
];
