//src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import UserPage from './features/users/user.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserPage />
    </Provider>
  </React.StrictMode>
)
