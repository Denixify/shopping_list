import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

import { ShoppingInput } from "./components/ShoppingInput";
import { ShoppingItem } from "./components/ShoppingItem";

function App() {
  const items = useSelector((state: RootState) => state.shopping.items);

  return (
    <div className="app">
      <header className="app__header">
        <h1>Список покупок</h1>
      </header>

      <main className="app__main">
        <ShoppingInput />

        <div className="app__list">
          {items.map((item) => (
            <ShoppingItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
