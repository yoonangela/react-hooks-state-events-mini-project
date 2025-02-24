import React from "react";

function CategoryFilter({categories, buttonclicked, categoryselected}) {
  console.log("categoryselected:", categoryselected); // Debugging the selected category

  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=><button onClick={()=>buttonclicked(category)} key={category} className={category===categoryselected ? "selected": ""}>{category}</button>)}
    </div>
  );

  }
export default CategoryFilter;

