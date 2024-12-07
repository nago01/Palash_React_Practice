import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Counter } from './Counter.tsx'
import { UserLanding } from './UserLanding.tsx'
import { MemoryGame } from './MemoryGame.tsx'
import { FileFolderManager } from './FileFolderManager.tsx'
import { FileFolderComponent } from './FileFolderComponent.tsx'
import { fileFolderData } from './assets/fileFolderData.tsx'
import React from 'react'
import { ReactJsCleanUp } from './ReactJsCleanUp.tsx'
import { CommentSelection } from './CommentSelection/CommentSelection.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    {/* <App /> */}
    {/* <Counter/> */}
    {/* <UserLanding/> */}
    {/* <MemoryGame/> */}
    {/* <FileFolderComponent list={fileFolderData}/> */}
    <CommentSelection/>
  </>,
)
