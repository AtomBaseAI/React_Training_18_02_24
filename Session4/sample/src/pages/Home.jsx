import Navbar from "../components/Navbar"

const Home = () => {
    const name = "Hello"
    return (
        <>
            <Navbar />
            {name}
            <div className="img-container">
                <h1 className="content-bg">
                    Managed IT Services You Can Trust
                </h1>
            </div>
            <div className="container-1">
                <div className="left-data">
                    <h2>
                        Welcome To Silicon Software
                    </h2>
                    <p>
                        The organization takes pride in having instructors who are engrossed beyond Fifteen Years in enjoying as
                        a trainer for Various Verticles of Educationon. With that, they offer the foremost Classroom And Online
                        training As per trade standard. And assert as one of the fastest-growing network training institutions
                        in the world and has a monopoly in the region. The Institute’s strong placement cell has magnified its
                        network amidst corporates over the years and is leveraged to realize nearly 100% placements of its
                        students.
                    </p>
                    <button className="read-more">
                        Read more
                    </button>
                </div>
                <div className="right-data">
                    <img src="https://siliconsoftwareservices.com/wp-content/uploads/2021/12/education.jpg" alt="container-img"
                     className="container-1-img" />
                </div>
            </div>
            <div className="img-container-1">
                <div className="container-data">
                    <h1 className="content-data">
                        Why Choose Us
                    </h1>
                    <p>
                        Not every one can teach technology as it is intended to. People who have worked extensively on that
                        technology and have a passion for technology can dive deep into technology, dismantle and explain the
                        nuts and bolts of a technology.
                    </p>
                </div>
                <div className="card-container">
                    <div className="card bg-gray">
                        <h2>
                            50+
                        </h2>
                        <h4>
                            Classroom
                        </h4>
                    </div>
                    <div className="card bg-orange">
                        <h2>
                            50+
                        </h2>
                        <h4>
                            Classroom
                        </h4>
                    </div>
                    <div className="card bg-gray">
                        <h2>
                            50+
                        </h2>
                        <h4>
                            Classroom
                        </h4>
                    </div>
                    <div className="card bg-orange">
                        <h2>
                            50+
                        </h2>
                        <h4>
                            Classroom
                        </h4>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home