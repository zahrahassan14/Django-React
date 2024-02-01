﻿import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'



function Loginpage() {

    const { loginUser } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        email.length > 0 && loginUser(email, password)

        console.log(email)
        console.log(password)

    }

    return (
        <div>
            <>
                <section className="vh-100" style={{ backgroundColor: "#C5E1A5" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card" style={{ borderRadius: "1rem" }}>
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img
                                                src= "https://i.pinimg.com/originals/7f/66/c6/7f66c6785be2dfd18a370e9069eafc52.jpg"
                                                alt="login form"
                                                className="img-fluid"
                                                style={{ width: "1400px", height: "600px", padding: "25px" }}
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        <i
                                                            className="fas fa-cubes fa-2x me-3"
                                                            style={{ color: "#ff6219" }}
                                                        />
                                                        <div className="d-flex align-items-center mb-3 pb-1">
                                                            <i
                                                                className="fas fa-cubes fa-2x me-3"
                                                                style={{ color: "#ff6219" }}
                                                            />
                                                            <span className="h2 fw-bold mb-0">Welcome back 👋</span>
                                                        </div>
                                                    </div>
                                                    <h5
                                                        className="fw-normal mb-3 pb-3"
                                                        style={{ letterSpacing: 1 }}
                                                    >
                                                        Sign into your account
                                                    </h5>
                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="email"
                                                            id="form2Example17"
                                                            className="form-control form-control-lg"
                                                            name='email'
                                                        />
                                                        <label className="form-label" htmlFor="form2Example17">
                                                            Email address
                                                        </label>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="password"
                                                            id="form2Example27"
                                                            className="form-control form-control-lg"
                                                            name='password'
                                                        />
                                                        <label className="form-label" htmlFor="form2Example27">
                                                            Password
                                                        </label>
                                                    </div>
                                                    <div className="pt-1 mb-4">
                                                        <button
                                                            className="btn btn-lg btn-block"
                                                            style={{ backgroundColor: "#1B5E20", color: "#fff" }}
                                                            type="submit"
                                                    
                                                        >
                                                            Login
                                                        </button>
                                                    </div>
                                                    <a className="small text-muted" href="#!">
                                                        Forgot password?
                                                    </a>
                                                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                                        Don't have an account?{" "}
                                                        <Link to="/register" style={{ color: "#393f81" }}>
                                                            Register Now
                                                        </Link>
                                                    </p>
                                                    <a href="#!" className="small text-muted">
                                                        Terms of use.
                                                    </a>
                                                    <a href="#!" className="small text-muted">
                                                        Privacy policy
                                                    </a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="bg-light text-center text-lg-start">
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2019 - till date Copyright:
                        <a className="text-dark" href="https://mdbootstrap.com/">
                            desphixs.com
                        </a>
                    </div>
                </footer>
            </>

        </div>
    )
}

export default Loginpage