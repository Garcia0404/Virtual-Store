import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AppRouter } from './pages/router/AppRouter.tsx'
import { AppProvider } from './context/AppContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <NextUIProvider>
          <AppRouter />
        </NextUIProvider>
      </BrowserRouter>
    </AppProvider>
  </StrictMode>,
)
