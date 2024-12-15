import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'
import CreateTodo from './components/CreateTodo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateTodo />
  </StrictMode>,
)
