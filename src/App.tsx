import { useState } from 'react'
import { useRoutes, Link } from "react-router-dom"
import router from '@/router'

function App() {
  const [count, setCount] = useState(0)
  const outLet = useRoutes(router)
  return (
    <div className='APP'>
      {/* <Link to='/home'>home</Link>|
      <Link to='/about'>about</Link>|
      <Link to='/user'>user</Link> */}
      {/* 占位符主键，类似于窗口，用来展示组件 */}
      {/* <Outlet></Outlet> */}
      {outLet}
    </div>
  )
}

export default App
