import axios from 'axios'

const API = "http://localhost:3000"

const GetCourses = () => axios.get(`${API}/courses`)
const DeleteCourses = (id) => axios.delete(`${API}/courses/${id}`)
// const GetUsers = ()=> axios.get(`${API}/users`)
const addCourse = (course) => axios.post(`${API}/courses`, course)
const getCoursebyId = (id) => axios.get(`${API}/courses/${id}`)
const updateCourse = (id,course)=> axios.put(`${API}/courses/${id}`,course)
export { GetCourses, DeleteCourses, addCourse, getCoursebyId,updateCourse }