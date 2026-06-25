// Tipos que reflejan los modelos del backend Django (app sismat).

export interface BaseFields {
  id: string
  status: string
  created: string
  modified: string
  created_id: string | null
  modified_id: string | null
}

export interface User extends BaseFields {
  email: string
  role: string
}

export interface Teacher extends BaseFields {
  names: string
  fatherSurname: string
  motherSurname: string
  specialty: string | null
  phone: string | null
  gender: string | null
  user_id: string | null
}

export interface Student extends BaseFields {
  names: string
  fatherSurname: string
  motherSurname: string
  gender: string | null
  address: string | null
  phone: string | null
  note: string | null
  user_id: string | null
}

export interface Course extends BaseFields {
  courseName: string
  credits: number
  description: string | null
  teacher_id: string | null
}

export interface CourseStudent extends BaseFields {
  course: string
  student: string
  enrollmentDate: string
}

// --- Constancia de matrícula (endpoint /api/enrollment-certificate/) ---

export interface CertificateTeacher {
  full_name: string
  email: string | null
}

export interface CertificateCourse {
  id: string
  code: string
  name: string
  acronym: string
  credits: string
  year_display: string
  semester_display: string
}

export interface CertificateWorkload {
  id: number
  course: CertificateCourse
  group: string
  laboratory: string
  teacher: CertificateTeacher
}

export interface CertificateStudent {
  cui: string
  full_name: string
  email: string
}

export interface EnrollmentResult {
  id: number
  student: CertificateStudent
  workload: CertificateWorkload
  created: string
}

export interface EnrollmentCertificateResponse {
  count: number
  next: string | null
  previous: string | null
  results: EnrollmentResult[]
}
