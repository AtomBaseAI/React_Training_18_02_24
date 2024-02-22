
import { Route, Routes } from 'react-router-dom'
import './assets/css/style.css'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import ViewCourses from './pages/Courses/ViewCourses'
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/login' element={<Login />} />
                <Route path='/viewcourses' element={<ViewCourses/>} />
            </Routes>
        </>
    )
}
export default App
