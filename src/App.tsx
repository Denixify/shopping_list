import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import type { ShoppingItemType } from "./types";
import { CATEGORY_CONFIG } from "./utils/categories";

import { ShoppingInput } from "./components/ShoppingInput";
import { ShoppingItem } from "./components/ShoppingItem";

function App() {
  const items = useSelector((state: RootState) => state.shopping.items);

  const categoryKeys = Object.keys(CATEGORY_CONFIG) as Array<
    ShoppingItemType["category"]
  >;

  return (
    <div className="app">
      <header className="app__header">
        <h1>Список покупок</h1>
      </header>

      <main className="app__main">
        <ShoppingInput />

        {items.length > 0 && (
          <div className="app__summary">
            Всего позиций в списке: {items.length}
          </div>
        )}

        <div className="app__list">
          {categoryKeys.map((key) => {
            const categoryItems = items.filter((item) => item.category === key);

            if (categoryItems.length === 0) return null;

            const categoryInfo = CATEGORY_CONFIG[key];

            return (
              <div key={key} className="category-group">
                <h2
                  className="category-group__title"
                  style={{ color: categoryInfo.color }}
                >
                  {categoryInfo.label}
                </h2>

                <div className="category-group__items">
                  {categoryItems.map((item) => (
                    <ShoppingItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
