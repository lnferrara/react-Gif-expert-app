import React, { useEffect, useState } from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GiftGrid = ({ category }) => {

const {data, loading} = useFetchGifs(category)
 

  

  return (
    <>
      <h3>{category}</h3>
      {loading && <p className="animate__animated animate__flash">Cargando...</p>}
      <div className="cardGrid">
        {data.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GiftGrid;
