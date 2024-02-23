import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div className="nav-bar">
                <div className="logo-containter">
                    <img src="https://siliconsoftwareservices.com/wp-content/uploads/2022/01/right-svg.svg" alt="logo"
                        className="logo" />
                </div>
                <div className="nav-group">
                    <ul className="nav-links">
                        <Link to='/'>
                            <li>
                                Home
                            </li>
                        </Link>
                        <Link to='/courses'>
                            <li>
                                Courses
                            </li>
                        </Link>
                        <Link to='/login'>
                            <li>
                                Login
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar