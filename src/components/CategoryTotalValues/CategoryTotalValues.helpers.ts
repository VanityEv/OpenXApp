import { Product } from "../../APIData.types";

export function getCategoryValue(data: Product[]) {
  const categoriesOverview = new Map<string, number>();
  let currentPrice, newPrice;
  data.forEach((product: Product) => {
    if (!categoriesOverview.has(product.category)) {
      categoriesOverview.set(product.category, product.price);
    } else {
      currentPrice = categoriesOverview.get(product.category);
      if (currentPrice !== undefined) {
        newPrice = currentPrice + product.price;
        categoriesOverview.set(
          product.category,
          parseFloat(newPrice.toFixed(2))
        );
      }
    }
  });
  return categoriesOverview;
}
