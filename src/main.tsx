import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Counter } from './Counter.tsx'
import { UserLanding } from './UserLanding.tsx'
import { MemoryGame } from './MemoryGame.tsx'
import { FileFolderManager } from './FileFolderManager.tsx'
import { FileFolderComponent } from './FileFolderComponent.tsx'
import { fileFolderData, fileFolderDataWithOutState } from './assets/fileFolderData.tsx'
import React from 'react';
import { ReactJsCleanUp } from './ReactJsCleanUp.tsx'
import { CommentSelection } from './CommentSelection/CommentSelection.tsx'
import { EmployeeManagement } from './RevisionEmployeeManagementSystem/EmployeeManagement.tsx'
import { data } from './assets/employeeData.tsx'
import { RevisionFileFolder } from './RevisionFileFolder.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    {/* <App /> */}
    {/* <Counter/> */}
    {/* <UserLanding/> */}
    {/* <MemoryGame/> */}
    {/* <FileFolderComponent list={fileFolderData}/> */}
    {/* <CommentSelection/> */}
    {/* <EmployeeManagement data={data}/> */}
    <RevisionFileFolder data={modifyFileData(fileFolderDataWithOutState)} />
  </>,
)

function modifyFileData(list) {
  return list.map((item) => {

    item['isOpen'] = true;
    if (item?.children?.length > 0) {
      item.children = modifyFileData(item.children);
    }
    return item;
  })
}