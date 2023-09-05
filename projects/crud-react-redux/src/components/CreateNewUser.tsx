import { Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hooks/useUserActions'
export const CreateNewUser = () => {
  const { addUser } = useUserActions()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    addUser({ name, email, github })
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
        </div>
      </form>
    </Card>
  )
}
