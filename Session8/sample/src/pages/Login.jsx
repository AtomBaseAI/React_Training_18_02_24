import { useState } from "react"

const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
        phone: '',
        type:''
    })
    const handleChange = (e) => {
        setLogin({ ...login, [e.target.id]: e.target.value })
        // console.log(login)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(login)
    }
    return (
        <>
            <div className="login-containerx">
                <div className="login-form">
                    <form className="form-data" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" className="form-input" id="email" onChange={handleChange} required />
                        <input type="text" placeholder="Phone" className="form-input" id="phone" onChange={handleChange} required />
                        <input type="password" placeholder="Password" className="form-input" id="password" onChange={handleChange} required />
                        <select className="form-input" onChange={handleChange} id="type">
                            <option value='student'>
                                Student
                            </option>
                            <option value='staff'>
                                Staff
                            </option>
                        </select>
                        <input type="submit" value="Login" className="form-btn" />
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login