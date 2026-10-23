import { orders } from "./data/orders.js";
import { products } from "./data/products.js";
import { formatOrder } from "./utils/product-utils.js";

console.log("=== PRODUCTS ===");

for (const product of products) {
  console.log(
    `${product.name} | €${product.price.toFixed(2)} | Stock: ${product.stock}`,
  );
}

console.log("\n=== ORDER SUMMARIES ===");

for (const order of orders) {
  console.log(formatOrder(order));
}
