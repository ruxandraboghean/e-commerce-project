import { showCartData } from "./showCartData.js";

export function removeAll() {
  localStorage.clear();
  showCartData();
}
