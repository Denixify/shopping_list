import type { ShoppingItemType } from "../types";

export const CATEGORY_CONFIG: Record<
  ShoppingItemType["category"],
  { label: string; color: string }
> = {
  vegetables: { label: "Овощи", color: "#34c759" },
  fruits: { label: "Фрукты", color: "#ff9500" },
  meat: { label: "Мясо", color: "#ff3b30" },
  milk: { label: "Молочка", color: "#007aff" },
  sweets: { label: "Сладости", color: "#af52de" },
  needToCook: { label: "Полуфабрикаты", color: "#5856d6" },
  etc: { label: "Разное", color: "#8e8e93" },
};
