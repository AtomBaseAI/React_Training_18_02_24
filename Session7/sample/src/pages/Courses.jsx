import { useEffect, useState } from "react"
import CourseCard from "../components/CourseCard"
import { GetCourses } from "../services/api"
const Courses = () => {

    const [CourseData, setCourseData] = useState([])

    const fetchCourses = async () => {
        try {
            const response = await GetCourses()
            setCourseData(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCourses()
    }, [])
    return (
        <>

            <div className="card-container">
                <div className="card-wrapper">
                    {
                        CourseData.map((course) => (
                            <CourseCard key={course.id}
                                img={course.img}
                                title={course.title}
                                m1={course.m1}
                                m2={course.m2}
                                m3={course.m3}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Courses