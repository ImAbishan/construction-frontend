import React, { useState } from "react";
import Menu from "./menu";
import Categories from "./categories";
import "./projects.css";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function Secondary() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section-pro">
        <div className="title">
          <h2>Top Projects</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Secondary;
