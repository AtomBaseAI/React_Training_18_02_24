import {Hexagon} from 'lucide-react'

//Type 1
const CourseCard = ({img,title,m1,m2,m3}) => {
    return (
        <>
            <div className="card">
                <img src={img} alt="course-img"
                    className="card-img" />

                <h3 className="card-title">{title}</h3>
                <ul className="card-topics">
                    <li className='card-modules'>
                    <Hexagon /> {m1}
                    </li>
                    <li className='card-modules'>
                    <Hexagon />  {m2}
                    </li>
                    <li className='card-modules'>
                    <Hexagon />   {m3}
                    </li>
                </ul>
            </div>

        </>
    )
}
export default CourseCard
// Type 2
// const CourseCard = (props) => {
//     return (
//         <>
//             <div className="card">
//                 <img src={props.img} alt="course-img"
//                     className="card-img" />

//                 <h3 className="card-title">{props.title}</h3>
//                 <ul className="card-topics">
//                     <li>
//                         {props.m1}
//                     </li>
//                     <li>
//                         {props.m2}
//                     </li>
//                     <li>
//                         {props.m3}
//                     </li>
//                 </ul>
//             </div>

//         </>
//     )
// }
// export default CourseCard