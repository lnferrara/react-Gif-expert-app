import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);


 /*  const handleAdd = () =>{
    setCategories([...categories , 'Caballeros del Zodiaco'])
  }

  const reset = () => {
      setCategories([])
  } */

  return (
    <div>
      <h2>Gif Expert App</h2>
      <p>Busca tus Gif favoritos</p>
      <AddCategory setCategories={setCategories} />
      <hr />
      
      <ol>
        {categories.map((category) => {
          return <GiftGrid 
          key={category}
          category = {category}
          />;
        })}
      </ol>
     
    </div>
  );
};

export default GiftExpertApp;
