import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import data from "./data";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      setActiveCategory(category);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
    setActiveCategory(category);
  };

  return (
    <div className="container">
      <Header />
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        filterItems={filterItems}
      />
      <Menu menuItems={menuItems} />
    </div>
  );
}

export default App;
