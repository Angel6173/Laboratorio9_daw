import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionHeader } from '../components/SectionHeader'

export function CertificateSearchPage() {
  const [studentId, setStudentId] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const id = studentId.trim()
    if (id) {
      navigate(`/constancia/${id}`)
    }
  }

  return (
    <section className="resource-card">
      <SectionHeader title="CONSTANCIA DE MATRÍCULA" />
      <p className="resource-description">
        Ingresa el ID (UUID) del estudiante para generar su constancia de
        matrícula de laboratorio. También puedes generarla desde la sección
        Estudiantes.
      </p>
      <form className="search-form" onSubmit={handleSubmit}>
        <label>
          ID del Estudiante (UUID)
          <input
            value={studentId}
            onChange={(event) => setStudentId(event.target.value)}
            placeholder="ej. 3f2504e0-4f89-41d3-9a0c-0305e82c3301"
            required
          />
        </label>
        <button type="submit">Generar constancia</button>
      </form>
    </section>
  )
}
