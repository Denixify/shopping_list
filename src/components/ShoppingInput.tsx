import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearList } from "../store/shoppingSlice";
import type { RootState } from "../store/store";
import type { ShoppingItemType } from "../types";

export const ShoppingInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState<ShoppingItemType["category"] | "">(
    "",
  );

  const dispatch = useDispatch();
  const shoppingArray = useSelector((state: RootState) => state.shopping.items);

  const handleAdd = () => {
    if (inputValue.trim().length !== 0 && category !== "") {
      dispatch(
        addItem({
          title: inputValue,
          category: category as ShoppingItemType["category"],
        }),
      );

      setInputValue("");
      setCategory("");
    }
  };

  const handleClear = () => {
    dispatch(clearList());
  };

  return (
    <div className="shopping-form">
      <input
        className="shopping-form__input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Что нужно купить?"
      />

      <select
        className="shopping-form__select"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as ShoppingItemType["category"] | "")
        }
      >
        <option value="" disabled>
          Выберите категорию
        </option>
        <option value="vegetables">Овощи</option>
        <option value="fruits">Фрукты</option>
        <option value="meat">Мясо</option>
        <option value="milk">Молочные продукты</option>
        <option value="sweets">Сладости</option>
        <option value="needToCook">Полуфабрикаты</option>
        <option value="etc">Разное</option>
      </select>

      <button
        className="shopping-form__btn shopping-form__btn--add"
        onClick={handleAdd}
      >
        Добавить
      </button>

      {shoppingArray.length > 0 && (
        <button
          className="shopping-form__btn shopping-form__btn--clear"
          onClick={handleClear}
        >
          Очистить список
        </button>
      )}
    </div>
  );
};
