import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import { useStore } from './hooks/useStore'

function App () {
  const { fromLanguage, toLanguage, setFromLanguage } = useStore()
  return (
    <Container fluid>
      <h1> Translate </h1>

      <Row>
        <Col>
          <h2> From </h2>
          {fromLanguage}
        </Col>

        <Col>
          <button> Intercambiar</button>
        </Col>

        <Col>
          <h2> To </h2>
          {toLanguage}
        </Col>
      </Row>

    </Container>
  )
}

export default App
