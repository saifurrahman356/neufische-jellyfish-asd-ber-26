export interface Watchable {
  readonly id: number;
  title: string;
  year: number;
}

export interface Film extends Watchable {
  watched: boolean;
  rating?: 1 | 2 | 3 | 4 | 5;
}

export interface Playlist {
  name: string;
  films: Film[];
}

export interface Category {
  name: string;
  description?: string;
}

export interface Product {
  readonly id: number;
  name: string;
  price: number;
  stock: number;
  category: Category;
}

export interface Customer {
  readonly id: number;
  name: string;
  email: string;
}

export interface LineItem {
  product: Product;
  quantity: number;
}

export type OrderStatus = "pending" | "confirmed" | "shipped";

export interface Order {
  readonly id: number;
  customer: Customer;
  items: LineItem[];
  status: OrderStatus;
}
