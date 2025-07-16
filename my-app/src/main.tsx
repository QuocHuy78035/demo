import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider, useSelector } from 'react-redux'
import { store, type RootState } from './app/store.ts'
import { BrowserRouter, Route, Routes } from 'react-router'
import { NextPage } from './features/nextPage/NextPage.tsx'
import { useEffect } from 'react'

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme.value)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <>{children}</>
}

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeWrapper>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/nextPage" element={<NextPage />} />
        </Routes>
      </ThemeWrapper>

    </BrowserRouter>
  </Provider>,
)
