import { Link } from 'react-router-dom'
import type { UseQueryResult } from '@tanstack/react-query'
import {
  useCourses,
  useEnrollments,
  useStudents,
  useTeachers,
  useUsers,
} from '../hooks/useResources'

interface StatCard {
  label: string
  to: string
  accent: string
  query: UseQueryResult<unknown[], Error>
}

export function DashboardPage() {
  const cards: StatCard[] = [
    { label: 'Usuarios', to: '/usuarios', accent: '#1e3a5f', query: useUsers() },
    { label: 'Docentes', to: '/docentes', accent: '#2563eb', query: useTeachers() },
    { label: 'Estudiantes', to: '/estudiantes', accent: '#0891b2', query: useStudents() },
    { label: 'Cursos', to: '/cursos', accent: '#7c3aed', query: useCourses() },
    { label: 'Matrículas', to: '/matriculas', accent: '#b91c1c', query: useEnrollments() },
  ]

  return (
    <div className="dashboard">
      <div className="stat-grid">
        {cards.map((card) => (
          <Link
            key={card.label}
            to={card.to}
            className="stat-card"
            style={{ borderTopColor: card.accent }}
          >
            <span className="stat-label">{card.label}</span>
            <span className="stat-value">
              {card.query.isLoading
                ? '…'
                : card.query.isError
                  ? '—'
                  : (card.query.data?.length ?? 0)}
            </span>
            <span className="stat-link">Ver detalle →</span>
          </Link>
        ))}
      </div>

      <section className="resource-card">
        <h2 className="dashboard-title">Bienvenido al panel SISMAT</h2>
        <p className="resource-description">
          Este panel consume la API REST de Django protegida con JWT. Cada
          tarjeta y sección obtiene sus datos mediante TanStack Query. Usa el
          menú lateral para explorar cada modelo del sistema o generar una
          constancia de matrícula de laboratorio.
        </p>
      </section>
    </div>
  )
}
