import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { Todo } from './components/Todo'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
        <Todo/>
    </QueryClientProvider>
  )
}

export default App
