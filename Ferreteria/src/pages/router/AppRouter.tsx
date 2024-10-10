import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../LoginPage'
import { AppRouterPrivate } from './AppRouterPrivate.tsx'

export const AppRouter = () => {
  const isAuthenticated = true
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<AppRouterPrivate isAuthenticated={isAuthenticated}/>}/>
    </Routes>
  )
}
