import type { Column } from '../components/DataTable'
import { ResourceView } from '../components/ResourceView'
import { StatusBadge } from '../components/StatusBadge'
import { useTeachers } from '../hooks/useResources'
import type { Teacher } from '../types/models'

const columns: Column<Teacher>[] = [
  {
    key: 'fullname',
    header: 'Apellidos y nombres',
    className: 'cell-strong',
    render: (teacher) =>
      `${teacher.fatherSurname} ${teacher.motherSurname}, ${teacher.names}`,
  },
  {
    key: 'specialty',
    header: 'Especialidad',
    render: (teacher) => teacher.specialty ?? '—',
  },
  { key: 'phone', header: 'Teléfono', render: (teacher) => teacher.phone ?? '—' },
  { key: 'gender', header: 'Género', render: (teacher) => teacher.gender ?? '—' },
  {
    key: 'status',
    header: 'Estado',
    render: (teacher) => <StatusBadge status={teacher.status} />,
  },
]

export function TeachersPage() {
  return (
    <ResourceView
      title="DOCENTES"
      description="Docentes registrados que dictan los cursos de laboratorio."
      query={useTeachers()}
      columns={columns}
      rowKey={(teacher) => teacher.id}
    />
  )
}
