import React from "react";
import "./Menu.css";

const mainCourses = [
  { title: "Main Course 1", description: "Nice description woot 1", price: 10 },
  { title: "Main Course 2", description: "Nice description woot 2", price: 15 },
  { title: "Main Course 3", description: "Nice description woot 3", price: 10 },
  { title: "Main Course 3", description: "Nice description woot 3", price: 10 },
  { title: "Main Course 3", description: "Nice description woot 3", price: 10 }
];

const mainCourse = (title, description, price) => {
  const title1 = title;
  return (
    <div className="menuItem">
      <h2>{title}</h2>
      <h6>{description}</h6>
      <h6> .............. {price}</h6>
      <div>
        <button
          className="addButton"
          onClick={() => console.log("Button clicked", title1)}
        >
          Add to order
        </button>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      <header>Our Menu</header>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {mainCourses.map(main =>
          mainCourse(main.title, main.description, main.price)
        )}
      </div>
    </div>
  );
};

export default Menu;
