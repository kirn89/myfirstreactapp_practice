import React from "react";

const CocktailMenu = ({ data }) => {
  return <div>{data[1].strDrink || ""}</div>;
};

export default CocktailMenu;
