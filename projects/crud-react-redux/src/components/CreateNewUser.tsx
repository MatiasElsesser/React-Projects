import { Badge, Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hooks/useUserActions'
import { useState } from 'react'
export const CreateNewUser = () => {
  const { addUser } = useUserActions()
  const [result, setResult] = useState<'ok' | 'ko' | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setResult(null)
    const form = event.currentTarget
    const formData = new FormData(form) // FormData genera los entries del formulario pasandole los names de cada campo

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    if (!name || !email || !github) {
      return setResult('ko')
    }
    addUser({ name, email, github })
    setResult('ok')
    form.reset()
  }

  return (
    <Card style={{ margin: '16px' }}>
      <Title>Create new user</Title>

      <form
        onSubmit={handleSubmit}
        className=''
        style={{ display: 'flex', gap: '16px' }}
      >
        <TextInput
          name='name'
          placeholder='Aqui el nombre'
        />
        <TextInput
          name='email'
          placeholder='Aqui el email'
        />
        <TextInput
          name='github'
          placeholder='Aqui el Github'
        />

        <div>
          <Button
            type='submit'
          >
            Crear usuario
          </Button>
          <span>
            {result === 'ok' && <Badge color='green'>Guardado correctamente</Badge>}
            {result === 'ko' && <Badge color='red'>Problema al guardar</Badge>}
          </span>
        </div>
      </form>
    </Card>
  )
}
