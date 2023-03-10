import { ClearCartIcon, CartIcon } from './Icons'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import './Cart.css'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> -${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}
export function Cart () {
  const cartCheckBoxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => {
            return (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {... product}
              />
            )
          })}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
