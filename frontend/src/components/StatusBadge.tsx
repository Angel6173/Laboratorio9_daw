interface StatusBadgeProps {
  status: string
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const normalized = (status ?? '').toLowerCase()
  return <span className={`badge badge-${normalized}`}>{status || '—'}</span>
}
