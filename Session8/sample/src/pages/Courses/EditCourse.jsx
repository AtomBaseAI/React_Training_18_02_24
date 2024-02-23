import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getCoursebyId, updateCourse } from "../../services/api"
const EditCourse = () => {
    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate()
    const [course, setCourse] = useState({
        title: '',
        img: '',
        m1: '',
        m2: '',
        m3: ''
    })


    const handleChange = (e) => {
        setCourse({ ...course, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await updateCourse(id, course)
            if (response.status === 200) {
                // alert(response.status)
                navigate(-1)
            }
        }
        catch (error) {
            console.log(error)
        }

    }
    const handleBack = () => {
        navigate(-1)
    }
    const fetchCourse = async (id) => {
        try {
            const response = await getCoursebyId(id)
            setCourse(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    // console.log(course)
    useEffect(() => {
        fetchCourse(id)
    }, [])
    return (
        <>
            <div className="login-containerx">
                <div className="data-form">
                    <form className="form-data" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Title" className="form-input" id="title" value={course.title} onChange={handleChange} required />
                        <input type="text" placeholder="Image URL" className="form-input" id="img" value={course.img} onChange={handleChange} required />
                        <input type="text" placeholder="Module 1" className="form-input" id="m1" value={course.m1} onChange={handleChange} required />
                        <input type="text" placeholder="Module 2" className="form-input" id="m2" value={course.m2} onChange={handleChange} required />
                        <input type="text" placeholder="Module 3" className="form-input" id="m3" value={course.m2} onChange={handleChange} required />
                        <div className="data-form-container">
                            <input type="submit" value="Update Course" className="update-btn" />
                        </div>
                    </form>
                    <button className="cancel-btn" onClick={handleBack}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    )
}
export default EditCourse