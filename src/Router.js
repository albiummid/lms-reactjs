import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'

export default function Router() {
  return (
    <>
      <Routes>
        {/* Index page */}
        <Route path='/'>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </>
  )
}

// ;<Routes>

//   {/* Bugs Page */}
//   <Route path='/bugs'>
//     <Route index />
//     <Route path='reports' />
//   </Route>

//   {/* Community Page */}
//   <Route path='/community'>
//     <Route index />
//   </Route>

//   {/* Exam Page */}
//   <Route path='/exams'>
//     <Route index />
//     <Route path=':examId' />
//   </Route>

//   {/* Profile Page */}
//   <Route path='/profile'>
//     <Route index />
//   </Route>

//   {/* Support Page */}
//   <Route path='/support'>
//     <Route index />
//     <Route path='/tickets:ticketId' />
//   </Route>
// </Routes>
