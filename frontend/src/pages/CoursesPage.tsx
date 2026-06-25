import type { Column } from '../components/DataTable'
import { ResourceView } from '../components/ResourceView'
import { StatusBadge } from '../components/StatusBadge'
import { useCourses } from '../hooks/useResources'
import type { Course } from '../types/models'

const columns: Column<Course>[] = [
  { key: 'courseName', header: 'Curso', className: 'cell-strong' },
  { key: 'credits', header: 'Créditos' },
  {
    key: 'description',
    header: 'Descripción',
    render: (course) => course.description ?? '—',
  },
  {
    key: 'status',
    header: 'Estado',
    render: (course) => <StatusBadge status={course.status} />,
  },
]

export function CoursesPage() {
  return (
    <ResourceView
      title="CURSOS"
      description="Cursos ofertados con su carga de créditos académicos."
      query={useCourses()}
      columns={columns}
      rowKey={(course) => course.id}
    />
  )
}
