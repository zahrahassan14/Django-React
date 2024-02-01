/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import jwtDecode from 'jwt-decode';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
// For Bootstrap v5
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const { user, logoutUser } = useContext(AuthContext);
    const token = localStorage.getItem("authTokens");

    if (token) {
        const decoded = jwtDecode(token);
        var user_id = decoded.user_id;
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#9CCC65' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="http://localhost:3000/">
                    <img style={{ width: "80px", padding: "6px" }}  src="https://i.pinimg.com/originals/a8/86/3d/a8863dd09f82b79168b33baa9c71b6d2.jpg" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://localhost:3000/"> <i className='fas fa-home'></i> Home</a>
                                
                            </li>
                            {token === null &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login"><i className='fas fa-sign-in-alt'></i> Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register"><i className='fas fa-user-plus'></i> Register</Link>
                                    </li>
                                </>
                            }

                            {token !== null &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard"> <i className='fas fa-th'></i> My Media</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/todo"> <i className='fas fa-pen'></i> Todo</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/inbox"> <i className='fas fa-envelope'></i> Inbox</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={logoutUser} style={{ cursor: "pointer" }}> <i className='fas fa-sign-out-alt'></i>Logout</a>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar
