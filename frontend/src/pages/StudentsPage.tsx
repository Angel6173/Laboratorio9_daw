import { Link } from 'react-router-dom'
import type { Column } from '../components/DataTable'
import { ResourceView } from '../components/ResourceView'
import { StatusBadge } from '../components/StatusBadge'
import { useStudents } from '../hooks/useResources'
import type { Student } from '../types/models'

const columns: Column<Student>[] = [
  {
    key: 'fullname',
    header: 'Apellidos y nombres',
    className: 'cell-strong',
    render: (student) =>
      `${student.fatherSurname} ${student.motherSurname}, ${student.names}`,
  },
  { key: 'gender', header: 'Género', render: (student) => student.gender ?? '—' },
  { key: 'phone', header: 'Teléfono', render: (student) => student.phone ?? '—' },
  {
    key: 'address',
    header: 'Dirección',
    render: (student) => student.address ?? '—',
  },
  {
    key: 'status',
    header: 'Estado',
    render: (student) => <StatusBadge status={student.status} />,
  },
  {
    key: 'certificate',
    header: 'Constancia',
    render: (student) => (
      <Link to={`/constancia/${student.id}`} className="row-action">
        Ver constancia
      </Link>
    ),
  },
]

export function StudentsPage() {
  return (
    <ResourceView
      title="ESTUDIANTES"
      description="Estudiantes registrados. Cada fila enlaza con su constancia de matrícula."
      query={useStudents()}
      columns={columns}
      rowKey={(student) => student.id}
    />
  )
}
