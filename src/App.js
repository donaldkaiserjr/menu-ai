import { useState, useEffect } from "react"
import alanBtn from '@alan-ai/alan-sdk-web';








function App() {

  const [cart, setCart] = useState([])
  const [menuItems, setMenuItems] = useState([])


  useEffect(() => {
    alanBtn({ 
      key: 'e333417842ad1706bdcb006f1fee930d2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if(commandData.command === 'getMenu') {
          setMenuItems(commandData.data)
        }
      },
    });
  }, [])




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
