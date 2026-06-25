import type { Column } from '../components/DataTable'
import { ResourceView } from '../components/ResourceView'
import { StatusBadge } from '../components/StatusBadge'
import { useUsers } from '../hooks/useResources'
import type { User } from '../types/models'

const columns: Column<User>[] = [
  { key: 'email', header: 'Email', className: 'cell-strong' },
  {
    key: 'role',
    header: 'Rol',
    render: (user) => <span className="tag">{user.role}</span>,
  },
  {
    key: 'status',
    header: 'Estado',
    render: (user) => <StatusBadge status={user.status} />,
  },
  {
    key: 'created',
    header: 'Creado',
    render: (user) => new Date(user.created).toLocaleDateString('es-PE'),
  },
]

export function UsersPage() {
  return (
    <ResourceView
      title="USUARIOS"
      description="Cuentas de acceso registradas en el sistema (sin exponer la contraseña)."
      query={useUsers()}
      columns={columns}
      rowKey={(user) => user.id}
    />
  )
}
