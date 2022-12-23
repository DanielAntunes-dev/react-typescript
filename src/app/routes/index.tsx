import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Login, Dashboard } from '../pages'

export const Routers = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/entrar' element={<Login />} />
      <Route path='/pagina-inicial' element={<Dashboard />} />

      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  </BrowserRouter>
  )
}