// Cliente HTTP central: añade el JWT en cada petición y gestiona el 401
// (intenta refrescar el token una vez; si falla, redirige al login).

import {
  API_BASE_URL,
  clearTokens,
  getAccessToken,
  refreshAccessToken,
} from './authApi'

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
  retry = true,
): Promise<T> {
  const token = getAccessToken()

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
  })

  // Token expirado: intentamos refrescar una sola vez.
  if (response.status === 401 && retry) {
    const refreshed = await refreshAccessToken()
    if (refreshed) {
      return apiFetch<T>(path, options, false)
    }
    clearTokens()
    if (window.location.pathname !== '/login') {
      window.location.href = '/login'
    }
    throw new Error('Sesión expirada. Vuelve a iniciar sesión.')
  }

  if (!response.ok) {
    let message = `Error ${response.status}`
    try {
      const body = await response.json()
      if (body?.detail) message = body.detail
    } catch {
      /* respuesta sin cuerpo JSON */
    }
    throw new Error(message)
  }

  return response.json() as Promise<T>
}
