import React from "react";
import "./Menu.css";

const mainCourses = [
  { title: "Main Course 1", description: "Nice description woot 1", price: 10 },
  { title: "Main Course 2", description: "Nice description woot 2", price: 15 },
  { title: "Main Course 3", description: "Nice description woot 3", price: 10 },
  { title: "Main Course 3", description: "Nice description woot 3", price: 10 },
  { title: "Main Course 3", description: "Nice description woot 3", price: 10 }
];

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
              <button className="menuButton">Add to order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

// 1.
// const title = "Main course";
// const description = "Nice description of main course";
// const price = "10";
// const Menu = () => {
//     return (
//       <div>
//         <header>Our Menu</header>
//         {/* Card */}
//         <div className="menuItem">
//           <h2>{title}</h2>
//           <h6>{description}</h6>
//           <h6> .............. {price}</h6>
//         </div>
//       </div>
//     );
//   };

//   export default Menu;

//Then create main course const
// const Menu = () => {
//     return (
//       <div>
//         <header>Our Menu</header>
//         <div>{mainCourse}</div>
//         <div>{mainCourse}</div>
//         <div>{mainCourse}</div>
//       </div>
//     );
//   };

//   export default Menu;
