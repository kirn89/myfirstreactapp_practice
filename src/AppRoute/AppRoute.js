import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurMenu from "../NetiflyProjects/MenuProject/MenuHomePage/OurMenu";
import SingleMenu from "../NetiflyProjects/MenuProject/SingleMenu/SingleMenu";
import CocktailDB from "../NetiflyProjects/Cocktail DB Project/CocktailDB";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact index element={<CocktailDB />} />
        <Route path="/ourmenu" exact element={<OurMenu />} />
        <Route path="/ourmenu/:id" exact element={<SingleMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
