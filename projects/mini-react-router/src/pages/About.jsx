import { Link } from '../Link.jsx'

export default function AboutPage () {
  return (
    <main>
      <h1>About</h1>
      <div>
        <img src='https://media.licdn.com/dms/image/C4D03AQENl7TfMM-ORg/profile-displayphoto-shrink_800_800/0/1647885656694?e=1685577600&v=beta&t=6n0_FXpteSsWVaTBChuA48T5k6On0gWdly1tpHJdMcA' />
      </div>
      <p>Mi nombre es Elsesser Matias y estoy aprendiendo React</p>
      <Link to='/'>Ir a home</Link>
    </main>
  )
}
