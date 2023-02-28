import React from "react";

const Categories = ({ categories, activeCategory, filterItems }) => {
  const handleClick = (e) => {
    filterItems(e.target.textContent);
  };

  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={activeCategory === category ? "activeBtn" : "filterBtn"}
            key={index}
            onClick={handleClick}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
