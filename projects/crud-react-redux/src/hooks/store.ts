import type { AppDispatch, RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

// esto lo hacemos para poder tipar la store y los reducer, luego en lugar de llamar al useSelector llamamos al custom hook que hciimos nosotros que cumple la misma funcion pero ya esta tipado
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch: () => AppDispatch = useDispatch
