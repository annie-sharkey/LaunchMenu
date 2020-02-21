import React from "react";
import "./Menu.css";

const mainCourses = [
  { title: "Main Course 1", description: "Nice description woot 1", price: 10 },
  { title: "Main Course 2", description: "Nice description woot 2", price: 15 },
  { title: "Main Course 3", description: "Nice description woot 3", price: 10 },
  { title: "Main Course 3", description: "Nice description woot 3", price: 10 },
  { title: "Main Course 3", description: "Nice description woot 3", price: 10 }
];

//this is arrow function notation, takes care of this binding
const Menu = () => {
  return (
    <div>
      <header>Our Menu</header>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {mainCourses.map(main => (
          <div className="menuItem">
            <h2>{main.title}</h2>
            <h6>{main.description}</h6>
            <h6> .............. {main.price}</h6>
            <div>
              <button
                className="addButton"
                onClick={() => console.log("Button clicked", main.title)}
              >
                Add to order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
