import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void}
  | {type: SectionType.To, value: Language, onChange: (language: Language) => void}

export const LanguageSelector: React.FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Language)
  }

  return (
    <Form.Select
      onChange={handleChange}
      aria-label='Selecciona el idioma'
      value={value}
    >
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
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
