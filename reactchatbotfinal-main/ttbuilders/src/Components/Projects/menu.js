import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <a href="/projects">
              <img src={img} alt={title} className="photo" />
            </a>

            <div className="item-info">
              <header>
                <h4>{title}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
