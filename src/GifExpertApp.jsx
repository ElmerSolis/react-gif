import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categoria, setCategoria] = useState([]);

  const onAddCategoria = (categori) => {
    if (categoria.includes(categori)) {
      return;
    }

    setCategoria([categori, ...categoria]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <h2>by:Elmer Solis</h2>
      <AddCategory onNewCategory={onAddCategoria} />

      {categoria.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
