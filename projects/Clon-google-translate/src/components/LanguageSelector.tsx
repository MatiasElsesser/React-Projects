import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'
import { Language } from '../types'

interface Props {
    onChange: (language: Language) => void
}

export const LanguageSelector: React.FC<Props> = ({ onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Language)
  }

  return (
    <Form.Select
      onChange={handleChange}
      aria-label='Selecciona el idioma'
    >
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => {
        return (
          <option key={key} value={key}>
            {literal}
          </option>
        )
      })}
    </Form.Select>
  )
}
