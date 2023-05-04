import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

function reducer (state = initialState, action) {

}

function App () {
  return (
    <>
      <h1> Translate </h1>
    </>
  )
}

export default App
