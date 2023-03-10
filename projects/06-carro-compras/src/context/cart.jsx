import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart'
export const CartContext = createContext()

function useCartReducer () {
  // State es el estado y dispatch es lo que va a pasarle la accion a realizar al reducer
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    playload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    playload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
