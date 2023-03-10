// useReducer es un hook de React que se utiliza para manejar estados complejos en una aplicación. Al igual que useState, useReducer te permite actualizar el estado de un componente y volver a renderizarlo. La diferencia principal entre useState y useReducer es que useReducer es más útil cuando tienes estados complejos que requieren múltiples actualizaciones en diferentes puntos de tu aplicación.
// declaramos un estado inicial para usarlo con useReducer, puede ser cualquier tipo de dato, aca usamos un array vacio para el carrito
export const cartInitialState = []

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const cartReducer = (state, action) => { // el reducer recibe como parametros el estado y la accion a realizar
  const { type: actionType, playload: actionPayload } = action
  switch (actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART : {
      const { id } = actionPayload
      // este ID lo sacamos del payload, que vendria a ser el producto que pasaremos como parametro
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1
        }
      ]
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART : {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case CART_ACTIONS_TYPES.CLEAR_CART : {
      return cartInitialState
    }
  }

  return state
}
