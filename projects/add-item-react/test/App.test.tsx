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

  test('should add items and remove them', async () => {
    const user = userEvent.setup()

    render(<App />)

    // buscar el input
    // por defecto los imput type text tienen el rol de textbox
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    // buscar el formulario
    // recordar que por defecto los formularios no traen el rol por defecto (agregrar la etiqueta aria-label)
    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    const button = form.querySelector('button')
    expect(button).toBeDefined()

    const randomText = crypto.randomUUID()
    await user.type(input,randomText)
    await user.click(button!)

    // asegurar que el item se agrego
    const list = screen.getByRole('list')
    expect(list).toBeDefined()

    expect(list.childNodes.length).toBe(1)

    // asegurar que el elemento se puede borrar
    const item = screen.getByText(randomText)
    const removeButton = item.querySelector('button')
    expect(removeButton).toBeDefined() // aqui nos aseguramos que exista el elemento
    
    await user.click(removeButton!) // lo negamos porque sino devuelve null o undefined

    const noResults = screen.getByText('No hay elementos en la lista')
    expect(noResults).toBeDefined()
  })
})