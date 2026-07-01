import { apiFetch } from './client'
import type {
  Course,
  CourseStudent,
  EnrollmentCertificateResponse,
  Student,
  Teacher,
  User,
} from '../types/models'

export const getUsers = () => apiFetch<User[]>('/api/users/')
export const getTeachers = () => apiFetch<Teacher[]>('/api/teachers/')
export const getStudents = () => apiFetch<Student[]>('/api/students/')
export const getCourses = () => apiFetch<Course[]>('/api/courses/')
export const getEnrollments = () => apiFetch<CourseStudent[]>('/api/courses-students/')

export function getEnrollmentCertificate(studentId: string) {
  const query = encodeURIComponent(studentId)
  return apiFetch<EnrollmentCertificateResponse>(
    `/api/enrollment-certificate/?student_id=${query}`,
  )
}
