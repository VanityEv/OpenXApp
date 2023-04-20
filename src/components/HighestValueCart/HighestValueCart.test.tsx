import { render, screen } from "@testing-library/react";
import { HighestValueCart } from "./HighestValueCart";
import {
  mockCart,
  mockProducts,
  mockUser,
} from "../../test/testData.constants";

describe("Component: HighestValueCart", () => {
  it("should render name of the owner with the highest value cart", () => {
    render(
      <HighestValueCart
        cartsData={mockCart}
        productsData={mockProducts}
        usersData={mockUser}
      />
    );

    const owner = screen.getByText("danny doe");

    expect(owner).toBeInTheDocument();
  });
  it("should render value of the cart", () => {
    render(
      <HighestValueCart
        cartsData={mockCart}
        productsData={mockProducts}
        usersData={mockUser}
      />
    );

    const value = screen.getByText("1279.48");
    expect(value).toBeInTheDocument();
  });
  it("should render the same component", () => {
    const { container } = render(
      <HighestValueCart
        cartsData={mockCart}
        productsData={mockProducts}
        usersData={mockUser}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
