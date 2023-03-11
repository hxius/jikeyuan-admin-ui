import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@/pages/Layout'
import Login from '@/pages/Login'

function App() {
  // 路由配置
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
