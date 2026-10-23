import type { Order, Product } from "../types.js";

export function orderTotal(order: Order): number {
  return order?.items?.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
}

export function formatOrder(order: Order): string {
  const total = orderTotal(order);
  const itemCount = order.items.reduce(
    (count, item) => count + item.quantity,
    0,
  );

  return `Order #${order.id} | Customer: ${order.customer.name} | Status: ${order.status} | Items: ${itemCount} | Total: €${total.toFixed(2)}`;
}

export function isInStock(product: Product): boolean {
  return product.stock > 0;
}
