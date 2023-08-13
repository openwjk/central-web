import {BrowserRouter,Router,Route, Routes} from 'react-router-dom'
//导入页面组件
import Login from "./views/Login/Login";
import Layout from "./views/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/layout' element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
