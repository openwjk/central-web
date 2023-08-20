import App from "@/App";
import Home from "@/views/Home"
import About from "@/views/About"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                {/* 配置用户访问 / 的时候重定向到 /home路径 */}
                <Route path="/" element={<Navigate to="/home"/>}> </Route>
                
                <Route path="home" element={<Home/>}></Route>
                <Route path="about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter;