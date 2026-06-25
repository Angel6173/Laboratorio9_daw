import { Link, useParams } from 'react-router-dom'
import { CertificateView } from '../components/CertificateView'
import { useEnrollmentCertificate } from '../hooks/useEnrollmentCertificate'

export function CertificatePage() {
  const { studentId = '' } = useParams<{ studentId: string }>()
  const { data, isLoading, isError, error } =
    useEnrollmentCertificate(studentId)

  return (
    <div className="certificate-page">
      <Link to="/constancia" className="back-link">
        ← Nueva búsqueda
      </Link>

      {isLoading && <div className="state-msg">Cargando constancia…</div>}

      {isError && (
        <div className="state-msg error">
          {error instanceof Error
            ? error.message
            : 'No fue posible cargar la constancia.'}
        </div>
      )}

      {!isLoading && !isError && data && <CertificateView data={data} />}
    </div>
  )
}
