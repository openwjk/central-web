import React from 'react'
import ReactDOM from 'react-dom/client'
//初始化样式
import 'reset-css'
//UI框架样式
//全局样式
import '@/assets/styles/global.scss'
//组件样式
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import Router from '@/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
