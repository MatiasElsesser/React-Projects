import React from 'react'
import userEvent from '@testing-library/user-event'
import {describe, test, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import App from '../src/App'

describe('<App />', () => {
  // test('should work', () =>{
  //   const { getByText} = render(<App />)

  //   expect(
  //     getByText('Prueba tecnica React')
  //   ).toBeDefined()
  // })

  test('should add items and remove them', () => {
    const user = userEvent.setup()

    render(<App />)

    // buscar el input
    // por defecto los imput type text tienen el rol de textbox
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    // buscar el formulario
    // recordar que por defecto los formularios no traen el rol por defecto (agregrar la etiqueta labia-label)
    const form = screen.getByRole('form')
    expect(form).toBeDefined()
  })
})