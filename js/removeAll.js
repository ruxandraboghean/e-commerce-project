import { isMinOrder } from "./isMinOrder.js";

export function removeAll() {
  localStorage.clear();
  isMinOrder();
}
