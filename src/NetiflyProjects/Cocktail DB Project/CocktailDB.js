import React, { useCallback, useEffect, useState } from "react";
import CocktailHeader from "./Components/CocktailHeader";
import CocktailSearch from "./Components/CocktailSearch";
import CocktailMenu from "./Components/CocktailMenu";

const CocktailDB = () => {
  const [cocktailData, setCocktailData] = useState([]);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`)
      .then((response) => response.json())
      .then((data) => {
        setCocktailData(data.drinks);
        console.log(data.drinks);
      });
  }, []);
  console.log(cocktailData);

  return (
    <div>
      <CocktailHeader />
      <CocktailSearch />
      <CocktailMenu data={cocktailData} />
    </div>
  );
};

export default CocktailDB;
