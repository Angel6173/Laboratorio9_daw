import type { Column } from '../components/DataTable'
import { ResourceView } from '../components/ResourceView'
import { StatusBadge } from '../components/StatusBadge'
import { useEnrollments } from '../hooks/useResources'
import type { CourseStudent } from '../types/models'

const columns: Column<CourseStudent>[] = [
  {
    key: 'student',
    header: 'ID Estudiante',
    className: 'cell-mono',
    render: (enrollment) => enrollment.student,
  },
  {
    key: 'course',
    header: 'ID Curso',
    className: 'cell-mono',
    render: (enrollment) => enrollment.course,
  },
  {
    key: 'enrollmentDate',
    header: 'Fecha de matrícula',
    render: (enrollment) =>
      new Date(enrollment.enrollmentDate).toLocaleString('es-PE'),
  },
  {
    key: 'status',
    header: 'Estado',
    render: (enrollment) => <StatusBadge status={enrollment.status} />,
  },
]

export function EnrollmentsPage() {
  return (
    <ResourceView
      title="MATRÍCULAS"
      description="Relación de estudiantes matriculados en cada curso (tabla courses_students)."
      query={useEnrollments()}
      columns={columns}
      rowKey={(enrollment) => enrollment.id}
    />
  )
}
