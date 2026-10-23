import type { Product } from "../types.js";

export const products: Product[] = [
  {
    id: 101,
    name: "Laptop",
    price: 999.99,
    stock: 10,
    category: { name: "Electronics" },
  },
  {
    id: 102,
    name: "Mouse",
    price: 25,
    stock: 50,
    category: { name: "Accessories" },
  },
  {
    id: 103,
    name: "Keyboard",
    price: 75.5,
    stock: 20,
    category: { name: "Accessories" },
  },
  {
    id: 104,
    name: "Monitor",
    price: 249.99,
    stock: 8,
    category: { name: "Electronics" },
  },
  {
    id: 105,
    name: "Headphones",
    price: 59.99,
    stock: 0,
    category: { name: "Electronics" },
  },
];
