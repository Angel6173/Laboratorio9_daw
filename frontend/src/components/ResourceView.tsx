import type { UseQueryResult } from '@tanstack/react-query'
import { DataTable, type Column } from './DataTable'
import { SectionHeader } from './SectionHeader'

interface ResourceViewProps<T> {
  title: string
  description?: string
  query: UseQueryResult<T[], Error>
  columns: Column<T>[]
  rowKey: (row: T) => string
}

export function ResourceView<T>({
  title,
  description,
  query,
  columns,
  rowKey,
}: ResourceViewProps<T>) {
  const { data, isLoading, isError, error } = query

  return (
    <section className="resource-card">
      <SectionHeader title={title} />
      {description && <p className="resource-description">{description}</p>}

      {isLoading && <p className="state-msg">Cargando información…</p>}

      {isError && (
        <p className="state-msg error">
          {error?.message ?? 'No se pudo cargar la información.'}
        </p>
      )}

      {!isLoading && !isError && data && (
        <>
          <DataTable columns={columns} rows={data} rowKey={rowKey} />
          <p className="resource-count">
            Total de registros: <strong>{data.length}</strong>
          </p>
        </>
      )}
    </section>
  )
}
