import React from "react";
import "./OurMenu.css";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import SingleMenu from "../SingleMenu/SingleMenu";

const MenuItems = [
  {
    id: 1,
    category: "breakfast",
    productTitle: "Avacado toast with poached eggs",
    productPrice: "£6.50",
    productText:
      "A simple yet delicious breakfast dish that combines creamy avocado with perfectly poached eggs, served on top of crispy toasted bread.",
    productImage:
      "https://www.mashed.com/img/gallery/simple-poached-egg-and-avocado-toast-recipe/l-intro-1625074064.jpg",
  },
  {
    id: 2,
    category: "breakfast",
    productTitle: "Blueberry pancakes",
    productPrice: "£5.89",
    productText:
      "Fluffy pancakes bursting with sweet blueberries and drizzled with syrup. Perfect for a lazy weekend morning.",
    productImage:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-08-Blueberry-Pancakes%2FIMG_3868_01",
  },
  {
    id: 3,
    category: "breakfast",
    productTitle: "Huevos Rancheros",
    productPrice: "£5.55",
    productText:
      "A classic Mexican breakfast dish consisting of fried eggs on a tortilla, smothered in a spicy tomato sauce and topped with avocado, cheese, and sour cream.",
    productImage:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/10/Huevos-Rancheros-2.jpg",
  },
  {
    id: 4,
    category: "lunch",
    productTitle: "Grilled chicken sandwich",
    productPrice: "£8.99",
    productText:
      "Tender chicken breast marinated in herbs and spices, grilled to perfection, and served on a soft bun with fresh lettuce, tomato, and creamy mayo.",
    productImage:
      "https://easychickenrecipes.com/wp-content/uploads/2022/10/Featured-grilled-chicken-sandwich-1-of-1.jpg",
  },
  {
    id: 5,
    category: "lunch",
    productTitle: "Caprese salad",
    productPrice: "£7.99",
    productText:
      "A light and refreshing salad featuring fresh mozzarella, juicy tomatoes, and fragrant basil, drizzled with balsamic vinegar and olive oil.",
    productImage:
      "https://www.lemontreedwelling.com/wp-content/uploads/2021/07/cucumber-caprese-salad-featured.jpg",
  },
  {
    id: 6,
    category: "lunch",
    productTitle: "Vegetable stir-fry",
    productPrice: "£7.00",
    productText:
      "A healthy and satisfying stir-fry loaded with colorful veggies like bell peppers, carrots, broccoli, and snow peas, sautéed in a flavorful sauce and served over rice.",
    productImage:
      "https://www.wholesomeyum.com/wp-content/uploads/2020/11/wholesomeyum-how-to-stir-fry-vegetables-vegetable-stir-fry-recipe-list-15.jpg",
  },
  {
    id: 7,
    category: "dinner",
    productTitle: "Grilled steak with roasted vegetables",
    productPrice: "£12.99",
    productText:
      "Tender grilled steak seasoned with salt and pepper, served alongside roasted vegetables like asparagus, sweet potatoes, and carrots.",
    productImage:
      "https://media.blueapron.com/recipes/23784/square_newsletter_images/1585150568-33-0022-1892/0427_2PV2_528_SQ_Web.jpg?quality=80&width=850&format=pjpg",
  },
  {
    id: 8,
    category: "dinner",
    productTitle: "Spaghetti Bolognese",
    productPrice: "£10.49",
    productText:
      "Classic Italian pasta dish with hearty meat sauce, made with ground beef, tomatoes, onions, and herbs, served over al dente spaghetti noodles.",
    productImage:
      "https://img.taste.com.au/5qlr1PkR/taste/2016/11/spaghetti-bolognese-106560-1.jpeg",
  },
  {
    id: 9,
    category: "dinner",
    productTitle: "Shrimp scampi",
    productPrice: "£11.99",
    productText:
      "Succulent shrimp cooked in a garlic butter sauce and tossed with linguine pasta, lemon juice, and parsley for a burst of fresh flavour.",
    productImage:
      "https://www.allrecipes.com/thmb/jiV_4f8vXFle1RdFLgd8-_31J3M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229960-shrimp-scampi-with-pasta-DDMFS-4x3-e065ddef4e6d44479d37b4523808cc23.jpg",
  },
];

const OurMenu = () => {
  const [data, setData] = useState(MenuItems);
  const [count, setCount] = useState(0);
  // const filterBreakfast = () => {
  //   const dataFilter = MenuItems.filter((item) => {
  //     return item.category === "breakfast";
  //   });
  //   setData(dataFilter);
  // };
  const filterCategory = (category) => {
    const filterData = MenuItems.filter((item) => {
      return item.category === category;
    });
    setData(filterData);
  };
  return (
    <div className="container">
      <h1 className="text-center mb-4 mt-5">Our Menu</h1>
      <div className="d-flex justify-content-center mb-5">
        <div className="headerUnderLine"></div>
      </div>
      <div className="d-flex menuGap justify-content-center mb-5 position-relative">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setData(MenuItems)}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => filterCategory("breakfast")}
        >
          Breakfast
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => filterCategory("lunch")}
        >
          Lunch
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => filterCategory("dinner")}
        >
          Dinner
        </button>
        <div className="position-absolute top-0 end-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-basket"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="7 10 12 4 17 10" />
            <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z" />
            <circle cx="12" cy="15" r="2" />
          </svg>

          <span className=" top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {count}
          </span>
        </div>
      </div>

      <div className="d-flex justify-content-center flex-wrap menuGap ">
        {data.map((menu, index) => {
          return (
            <div className="card" key={index} style={{ width: "22rem" }}>
              <Link to={`/ourmenu/${menu.id}`}>
                <img
                  src={menu.productImage}
                  className="card-img-top"
                  alt={menu.productTitle}
                />
              </Link>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title">{menu.productTitle}</h5>
                  <span className="badge text-bg-danger">
                    {menu.productPrice}
                  </span>
                </div>

                <p className="card-text">{menu.productText}</p>
                <div className="d-flex justify-content-center mt-5">
                  <button
                    className="btn btn-primary "
                    onClick={() => setCount(count + 1)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <Routes>
        <Route path="/ourmenu/:id" exact element={<SingleMenu />} />
      </Routes> */}
    </div>
  );
};

export default OurMenu;
