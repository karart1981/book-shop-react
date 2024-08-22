import { useState } from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { Basket } from "./components/Basket";
function App() {
  const [basket, setBasket] = useState([]);
  const [saleApplied, setSaleApplied] = useState(false);
  const moveToCart = (id) => {
    let found = products.find((x) => x.id == id);

    setBasket((basket) => {
      const itemInBasket = basket.find((item) => item.id === id);

      if (itemInBasket) {
        return basket.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...basket, { ...found, count: 1 }];
      }
    });
  };

  const decreaseCount = (id) => {
    setBasket((basket) => {
      const itemInBasket = basket.find((item) => item.id === id);

      if (itemInBasket) {
        return basket.map((item) =>
          item.id === id
            ? {
                ...item,
                count: item.count == 1 ? item.count : item.count - 1,
              }
            : item
        );
      }
    });
  };

  const increaseCount = (id) => {
    setBasket((basket) => {
      const itemInBasket = basket.find((item) => item.id === id);

      if (itemInBasket) {
        return basket.map((item) =>
          item.id === id
            ? {
                ...item,
                count: item.count + 1,
              }
            : item
        );
      }
    });
  };

  const deleteBasketItem = (id) => {
    setBasket((basket) => {
      const itemInBasket = basket.find((item) => item.id === id);

      if (itemInBasket) {
        return basket.filter((item) => item.id !== id);
      }
    });
  };

  const saleItems = () => {
    setBasket((prevBasket) => {
      return prevBasket.map((item) => ({
        ...item,
        subtotal:
          item.count >= 3
            ? (item.count - 1) * item.price
            : item.count * item.price,
      }));
    });
    setSaleApplied(true);
  };

  const [products, setProduct] = useState([
    {
      id: 101,
      title: "Psychology",
      price: 40,
      photo:
        "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9780744098556/9780744098556_cover.jpg",
    },
    {
      id: 102,
      title: "The Economics Book",
      price: 50,
      photo:
        "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9780756698270/9780756698270_cover.jpg",
    },
    {
      id: 103,
      title: "The Politics Book",
      price: 60,
      photo:
        "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9780593844120/9780593844120_cover.jpg",
    },
    {
      id: 104,
      title: "The Religions Book",
      price: 70,
      photo:
        "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9781465408433/9781465408433_cover.jpg",
    },
    {
      id: 105,
      title: "The Business Book",
      price: 80,
      photo:
        "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9781465415851/9781465415851_cover.jpg",
    },
    {
      id: 106,
      title: "The Science Book",
      price: 90,
      photo:
        "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9781465419651/9781465419651_cover.jpg",
    },
  ]);

  return (
    <>
      <div className="row">
        <ProductList items={products} onMove={moveToCart} />
        <Basket
          items={basket}
          decreaseCount={decreaseCount}
          increaseCount={increaseCount}
          deleteBasketItem={deleteBasketItem}
          saleItems={saleItems}
          saleApplied={saleApplied}
        />
      </div>
    </>
  );
}

export default App;
