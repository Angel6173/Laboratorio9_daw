import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Layout } from './components/Layout'
import { LoginPage } from './pages/LoginPage'
import { DashboardPage } from './pages/DashboardPage'
import { UsersPage } from './pages/UsersPage'
import { TeachersPage } from './pages/TeachersPage'
import { StudentsPage } from './pages/StudentsPage'
import { CoursesPage } from './pages/CoursesPage'
import { EnrollmentsPage } from './pages/EnrollmentsPage'
import { CertificateSearchPage } from './pages/CertificateSearchPage'
import { CertificatePage } from './pages/CertificatePage'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<DashboardPage />} />
            <Route path="/usuarios" element={<UsersPage />} />
            <Route path="/docentes" element={<TeachersPage />} />
            <Route path="/estudiantes" element={<StudentsPage />} />
            <Route path="/cursos" element={<CoursesPage />} />
            <Route path="/matriculas" element={<EnrollmentsPage />} />
            <Route path="/constancia" element={<CertificateSearchPage />} />
            <Route path="/constancia/:studentId" element={<CertificatePage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
