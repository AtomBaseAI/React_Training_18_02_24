import { useEffect, useState } from "react"
import CourseCard from "../components/CourseCard"
const Courses = () => {
    const CourseData = [
        {
            id: 2,
            title: "Artificial Intelligence",
            img: "https://siliconsoftwareservices.com/wp-content/uploads/2023/10/ai-logo.png",
            m1: "Machine Learning",
            m2: "Deep Learning",
            m3: "Data Science"
        },
        {
            id: 3,
            title: "Machine Learning",
            img: "https://siliconsoftwareservices.com/wp-content/uploads/2023/10/mac-learn-logo.png",
            m1: "Supervised Learning Algorithms",
            m2: "Unsupervised Learning Algorithms",
            m3: "Q-learning"
        },
        {
            id: 5,
            title: "Course 3",
            img: "https://siliconsoftwareservices.com/wp-content/uploads/2023/10/mac-learn-logo.png",
            m1: "Module 1",
            m2: "Module 2",
            m3: "Module 3"
        }
    ]

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