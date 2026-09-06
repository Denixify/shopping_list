export interface ShoppingItemType {
  id: string;
  title: string;
  category: "fruits" | "vegetables" | "meat" | "sweets" | "needToCook" | "milk" | "etc";
  isBought: boolean;
}