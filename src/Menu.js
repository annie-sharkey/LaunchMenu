import React from "react";
import "./Menu.css";

const mainCourses = [
  { title: "Main Course 1", description: "Nice description woot 1", price: 10 },
  { title: "Main Course 2", description: "Nice description woot 2", price: 15 },
  { title: "Main Course 3", description: "Nice description woot 3", price: 10 },
  { title: "Main Course 4", description: "Nice description woot 3", price: 10 },
  { title: "Main Course 5", description: "Nice description woot 3", price: 10 }
];

//alternatively ({handleAddToOrder})
const Menu = props => {
  return (
    <div>
      <header>Our Menu</header>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {mainCourses.map(main => {
          return (
            <div className="menuItem">
              <h2>{main.title}</h2>
              <h6>{main.description}</h6>
              <h6> .............. {main.price}</h6>
              <div>
                <button
                  className="addButton"
                  onClick={() => props.handleAddtoOrder(main)}
                >
                  Add to order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
