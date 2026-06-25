import { createContext, useContext, useState, type ReactNode } from 'react'
import {
  clearTokens,
  isAuthenticated as checkAuth,
  saveTokens,
} from '../api/authApi'

interface AuthContextValue {
  isAuthenticated: boolean
  login: (access: string, refresh: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState<boolean>(checkAuth())

  function login(access: string, refresh: string) {
    saveTokens(access, refresh)
    setAuthenticated(true)
  }

  function logout() {
    clearTokens()
    setAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: authenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  }
  return context
}
