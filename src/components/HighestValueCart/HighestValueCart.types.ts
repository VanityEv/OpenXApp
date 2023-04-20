import { Name } from "../../APIData.types";

export type CartWithOwner = {
  value: number;
  cartID: number;
  owner: Name;
};
