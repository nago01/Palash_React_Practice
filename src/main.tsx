import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Counter } from './Counter.tsx'
import { UserLanding } from './UserLanding.tsx'
import { MemoryGame } from './MemoryGame.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Counter/> */}
    {/* <UserLanding/> */}
    {/* <MemoryGame/> */}
  </StrictMode>,
)
