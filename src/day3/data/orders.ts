import type { Order } from "../types.js";
import { products } from "./products.js";
import { customers } from "./customers.js";

export const orders: Order[] = [
  {
    id: 5001,
    customer: customers[0],
    items: [
      { product: products[0], quantity: 2 },
      { product: products[1], quantity: 3 },
    ],
    status: "pending",
  },
  {
    id: 5002,
    customer: customers[1],
    items: [
      { product: products[2], quantity: 1 },
      { product: products[3], quantity: 2 },
    ],
    status: "confirmed",
  },
  {
    id: 5003,
    customer: customers[2],
    items: [{ product: products[4], quantity: 2 }],
    status: "shipped",
  },
];
