import React from "react";

const Menu = ({ menuItems }) => {
  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };

  return (
    <div className="row mt-4">
      {menuItems.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
          <div className="card mb-4 shadow-sm">
            <img src={movie.img} className="card-img-top" alt="Sample Movie" />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{truncateOverview(movie.desc, 100)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
