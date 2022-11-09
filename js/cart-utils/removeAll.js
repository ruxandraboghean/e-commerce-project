import { isMinOrder } from "./isMinOrder.js";

export const removeAll = () => {
  localStorage.clear();
  isMinOrder();
};
