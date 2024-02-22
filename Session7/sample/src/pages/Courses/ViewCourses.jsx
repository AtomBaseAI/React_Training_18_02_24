import { Pencil, Trash } from "lucide-react"
import { useEffect, useState } from "react"
import { DeleteCourses, GetCourses } from "../../services/api"

const ViewCourses = () => {
    const [CourseData, setCourseData] = useState([])


    const deleteCourse = async (id) => {
        try {
            const response = await DeleteCourses(id)
            alert(response.status)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await GetCourses()
                setCourseData(response.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchCourses()
    }, [CourseData])
    return (
        <>
            <div className="table-container">
                <table className="course-table">
                    <thead>
                        <tr>
                            <th>
                                Course Logo
                            </th>
                            <th>
                                Title
                            </th>
                            <th>
                                Module 1
                            </th>
                            <th>
                                Module 2
                            </th>
                            <th>
                                Module 3
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CourseData.map((course) => (
                                <tr key={course.id}>
                                    <td className="course-logo-container">
                                        <img src={course.img} alt="course-logo" className="table-course-logo" />
                                    </td>
                                    <td>
                                        {course.title}
                                    </td>
                                    <td>
                                        {course.m1}
                                    </td>
                                    <td>
                                        {course.m2}
                                    </td>

                                    <td>
                                        {course.m3}
                                    </td>
                                    <td className="action-btns">
                                        <button className="table-edit-btn">
                                            <Pencil />
                                        </button>
                                        <button className="table-delete-btn" onClick={() => deleteCourse(course.id)}>
                                            <Trash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ViewCourses