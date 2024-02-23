import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addCourse } from "../../services/api"

const AddCourse = () => {
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
        // console.log(course)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await addCourse(course)
        alert(response.status)
    }
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <>
            <div className="login-containerx">
                <div className="data-form">
                    <form className="form-data" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Title" className="form-input" id="title" onChange={handleChange} required />
                        <input type="text" placeholder="Image URL" className="form-input" id="img" onChange={handleChange} required />
                        <input type="text" placeholder="Module 1" className="form-input" id="m1" onChange={handleChange} required />
                        <input type="text" placeholder="Module 2" className="form-input" id="m2" onChange={handleChange} required />
                        <input type="text" placeholder="Module 3" className="form-input" id="m3" onChange={handleChange} required />
                        <div className="data-form-container">
                            <input type="submit" value="Add Course" className="add-btn" />
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
export default AddCourse