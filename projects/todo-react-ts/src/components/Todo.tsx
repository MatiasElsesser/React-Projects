import { type Todo as TodoType } from '../types'

type Props = TodoType

export const Todo: React.FC<Props> = ({ title, completed }) => {
  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
      />
      <label>{title}</label>
      <button
        className='destroy'
      />
    </div>
  )
}
