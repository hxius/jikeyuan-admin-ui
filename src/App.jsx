import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@/pages/Layout'

function App() {
  // 路由配置
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/login" element={<Layout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
