import { useQuery } from '@tanstack/react-query'
import {
  getCourses,
  getEnrollments,
  getStudents,
  getTeachers,
  getUsers,
} from '../api/sismatApi'

export const useUsers = () =>
  useQuery({ queryKey: ['users'], queryFn: getUsers })

export const useTeachers = () =>
  useQuery({ queryKey: ['teachers'], queryFn: getTeachers })

export const useStudents = () =>
  useQuery({ queryKey: ['students'], queryFn: getStudents })

export const useCourses = () =>
  useQuery({ queryKey: ['courses'], queryFn: getCourses })

export const useEnrollments = () =>
  useQuery({ queryKey: ['enrollments'], queryFn: getEnrollments })
