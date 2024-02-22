import axios from 'axios'

const API = "http://localhost:3000"

const GetCourses = () => axios.get(`${API}/courses`)
const DeleteCourses = (id)=> axios.delete (`${API}/courses/${id}`)
// const GetUsers = ()=> axios.get(`${API}/users`)


export { GetCourses,DeleteCourses }