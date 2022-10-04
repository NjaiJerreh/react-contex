import { useState } from "react";

const About = () => {
  const [Cart, setCart] = useState([]);
  const [productsInStore] = useState([
    {
      Name: "Benz",
      Cost: "10$",
      madein: "Germany",
    },
    {
      Name: "Nike",
      Cost: "10$",
      madein: "China",
    },
  ]);
  const handleClick = (products) => {
    console.log("Welcome To Cart");

    setCart([...Cart, { ...products }]);
  };
  const handleRemove = (itemsToRemove) => {
    // setCart([Cart.filter((deleteItem) => deleteItem !== itemsToRemove)]);
    const deletedItems=Cart.filter((deleteItem)=> deleteItem.id !== itemsToRemove)
    setCart(deletedItems)
  };

  return (
    <div className="aboutcontainer">
      {productsInStore.map((item, id) => (
        <div key={id} className="abouttextContainer">
          <h1>{item.Name}</h1>
          <h1>{item.Cost}</h1>
          <h1>{item.madein}</h1>
          <button
            className="abouttextContainer"
            onClick={() => {
              handleClick(item);
            }}
          >
            <h2>Cart</h2>
          </button>
          <button
            className="abouttextContainer"
            onClick={() => {
              handleRemove(item.id);
            }}
          >
            <h2>Remove Items from Cart</h2>
          </button>
          <header>
            <button className="abouttextContainer">
              <h1>Go To Cart({Cart.length}) </h1>

              <h2> Cost ({item.Name})</h2>
              <h2> Cost ({item.Cost})</h2>
            </button>
          </header>
        </div>
      ))}
    </div>
  );
};

export default About;
