import { useQuery } from '@tanstack/react-query'
import { getEnrollmentCertificate } from '../api/sismatApi'

export function useEnrollmentCertificate(studentId: string) {
  return useQuery({
    queryKey: ['enrollment-certificate', studentId],
    queryFn: () => getEnrollmentCertificate(studentId),
    enabled: Boolean(studentId),
    staleTime: 1000 * 60 * 5,
    retry: false,
  })
}
