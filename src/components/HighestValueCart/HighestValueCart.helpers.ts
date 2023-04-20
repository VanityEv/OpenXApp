import { Cart, Product, ProductIdentifier, User } from "../../APIData.types";
import { CartWithOwner } from "./HighestValueCart.types";

export function getHighestValueCart(
  cartsData: Cart[],
  productsData: Product[],
  usersData: User[]
) {
  const productsMap = getProductsMap(productsData);

  let result: CartWithOwner = {
    value: 0,
    cartID: 0,
    owner: {
      firstname: "",
      lastname: "",
    },
  };

  let currentValue = 0;
  let productPrice;
  cartsData.forEach((cart: Cart) => {
    currentValue = 0;
    cart.products.forEach((product: ProductIdentifier) => {
      productPrice = productsMap.get(product.productId);
      if (productPrice !== undefined) {
        currentValue += productPrice * product.quantity;
      }
    });

    if (currentValue > result.value) {
      result.value = currentValue;
      result.cartID = cart.id;
      result.owner = usersData[cart.userId - 1].name;
    }
  });
  return result;
}

function getProductsMap(data: Product[]) {
  const productsMap = new Map<number, number>();
  data.forEach((product: Product) => {
    if (!productsMap.has(product.id)) {
      productsMap.set(product.id, product.price);
    }
  });
  return productsMap;
}
