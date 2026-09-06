import React, { useState } from "react";
import type { ShoppingItemType } from "../types";
import { useDispatch } from "react-redux";
import { toggleBought, deleteItem, editItem } from "../store/shoppingSlice";

interface Props {
  item: ShoppingItemType;
}

export const ShoppingItem: React.FC<Props> = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.title);

  const dispatch = useDispatch();

  const handleSaveEdit = () => {
    dispatch(
      editItem({
        id: item.id,
        newTitle: editValue,
      }),
    );
    setIsEditing(false);
  };

  return (
    <div
      className={`item-container ${item.isBought ? "bought-item" : "unbought-item"}`}
    >
      <button
        className="circle-toggle"
        onClick={() => dispatch(toggleBought(item.id))}
      ></button>

      {isEditing ? (
        <>
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button className="save-btn" onClick={handleSaveEdit}>
            Сохранить
          </button>
        </>
      ) : (
        <div className="item-content">
          <span>{item.title}</span>
        </div>
      )}

      <div className="actions">
        {!isEditing && (
          <>
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={() => dispatch(deleteItem(item.id))}>🗑️</button>
          </>
        )}
      </div>
    </div>
  );
};
