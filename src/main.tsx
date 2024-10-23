import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MemoryGame } from './MemoryGame.tsx'
import { SpiralMatrix } from './SprialMatrix.tsx'
import { SpiralBox } from './SprialBox.tsx'
import React from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MemoryGame/> */}
    {/* <SpiralMatrix/> */}
    <SpiralBox count={10}/>
  </StrictMode>,
)
