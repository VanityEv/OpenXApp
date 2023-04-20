import { render, screen } from "@testing-library/react";
import { CategoryTotalValues } from "./CategoryTotalValues";
import { mockProducts } from "../../test/testData.constants";

describe("Component: CategoryTotalValues", () => {
  it("should render correct amount of rows with categories and their values", () => {
    render(<CategoryTotalValues data={mockProducts} />);

    const dataRows = screen.getAllByRole("row");
    expect(dataRows).toHaveLength(3);
  });
  it.each<string>(["86.99", "39.7"])(
    "should display correct values of categories",
    (totalValue) => {
      render(<CategoryTotalValues data={mockProducts} />);

      const categoryValue1 = screen.getByText(`${totalValue}`);
      expect(categoryValue1).toBeInTheDocument();
    }
  );
});
