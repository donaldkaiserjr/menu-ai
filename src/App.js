import { useState } from "react"








function App() {

  const [cart, setCart] = useState([])

  const addToCart = (menuItem) => {
    setCart((oldCart) => {
      return [...oldCart, menuItem]
    })
  }

  return (
    <div className="App">
      {menuItems.map((menuItem) => (
        <li key={menuItem.name}>
          {menuItem.name} - ${menuItem.price} - {menuItem.category}
          <button onClick={() => addToCart(menuItem)}>add to cart</button>
        </li>
      ))}
      <h2>Cart</h2>
      {cart.map((cartItem) => (
        <li key={cartItem.name}>
          {cartItem.name} - ${cartItem.price} - {cartItem.category}
        </li>
        ))}
    </div>
  );
}


export default App;
