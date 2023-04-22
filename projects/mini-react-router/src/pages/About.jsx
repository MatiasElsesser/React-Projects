import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Mi nombre es Elsesserr Matias y estoy aprendiendo React',
    button: 'Volver a inicio'
  },
  en: {
    title: 'About us',
    description: 'My name is Elsesser Matias and i am learning React',
    button: 'Return home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <main>
      <h1>{i18n.title}</h1>
      <div>
        <img src='https://media.licdn.com/dms/image/C4D03AQENl7TfMM-ORg/profile-displayphoto-shrink_800_800/0/1647885656694?e=1685577600&v=beta&t=6n0_FXpteSsWVaTBChuA48T5k6On0gWdly1tpHJdMcA' />
      </div>
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </main>
  )
}
