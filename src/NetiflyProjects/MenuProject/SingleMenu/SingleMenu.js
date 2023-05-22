import React from "react";
import { useParams } from "react-router-dom";
//import MenuItems from "./MenuHomePage/OurMenu";

const SingleMenu = () => {
  const { id } = useParams();

  // const SingleItem = () => {
  //   const filterData = MenuItems.filter(() => {});
  // };
  return <div>{id}</div>;
};

export default SingleMenu;
