import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUsers'
import { Toaster } from 'sonner'
function App () {
  return (
    <>
      <h1>Proyecto CRUD con React y Redux</h1>
      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </>
  )
}

export default App
