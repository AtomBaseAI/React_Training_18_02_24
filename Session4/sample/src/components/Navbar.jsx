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
                        <li className="active">
                            Home
                        </li>
                        <li>
                            Courses
                        </li>
                        <li>
                            Login
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar