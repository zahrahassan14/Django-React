/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import useAxios from '../utils/useAxios';
import jwt_decode from 'jwt-decode';

function Dashboard() {
    const [res, setRes] = useState('');
    const api = useAxios();
    const token = localStorage.getItem('authTokens');

    if (token) {
        const decode = jwt_decode(token);
        var username = decode.username;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/test/');
                setRes(response.data.response);
            } catch (error) {
                console.log(error);
                setRes('Something went wrong');
            }
        };
        fetchData();
    }, [api]);

    return (
        <div>
            <div className="container-fluid" style={{ paddingTop: '100px' }}>
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar mt-4">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="http://localhost:3000/dashboard">
                                        <span data-feather="home" />
                                        My Media<span className="sr-only">(current)</span>
                                    </a>
                                </li>
                        
                                <li className="nav-item">
                                    <a className="nav-link" href="http://localhost:3000/inbox">
                                        <span data-feather="message-circle" />
                                        Chat
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://localhost:3000/todo">
                                        <span data-feather="check-square" />
                                        Todo
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                            <h1 className="h2">My Media</h1>
                            <span>Hello {username}!</span>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group mr-2">
                                    <button className="btn btn-sm btn-outline-secondary">Share</button>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="alert alert-success">
                            <strong>{res}</strong>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <img
                                    src="https://i.pinimg.com/736x/7f/54/95/7f54951db10ce4427b19414d976f1b54.jpg"
                                    alt="Image 1"
                                    className="img-fluid"
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div className="col-md-4 mb-4">
                                <img
                                    src="https://i.pinimg.com/736x/6f/2c/1a/6f2c1a5c4507130215cec724502a7f48.jpg"
                                    alt="Image 2"
                                    className="img-fluid"
                                    style={{ width: '100%', height:"684px"}}
                                />
                            </div>
                            <div className="col-md-4 mb-4">
                                <img
                                    src="https://64.media.tumblr.com/a5d7c1dcb54aff22be2f5a8b3aef88a7/4b84bd974a986aee-21/s640x960/71d271dd408b50a21ef970dd57e907250f1dc68d.jpg
                                    "
                                    alt="Image 3"
                                    className="img-fluid"
                                    style={{ width: '100%', height:"684px" }}
                                />
                            </div>

                            <div className="col-md-4 mb-4">
                                <img
                                    src="https://edge.99images.com/photos/wallpapers/3d-abstract/md/green-aesthetic-tumblrandroid-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-qbl1k.jpg"
                                    alt="Image 1"
                                    className="img-fluid"
                                    style={{ width: '100%', height:"684px"  }}
                                />
                            </div>
                            <div className="col-md-4 mb-4">
                                <img
                                    src="https://i.pinimg.com/736x/1c/33/29/1c33292974a1e16bdcd4718a002661af.jpg"
                                    alt="Image 2"
                                    className="img-fluid"
                                    style={{ width: '100%', height:"684px"}}
                                />
                            </div>
                            <div className="col-md-4 mb-4">
                                <img
                                    src="https://i.pinimg.com/736x/6d/0a/11/6d0a11e3c6bf2a2450282c7922ca685f.jpg
                                    "
                                    alt="Image 3"
                                    className="img-fluid"
                                    style={{ width: '100%', height:"684px" }}
                                />
                            </div>

                            <div className="col-md-4 mb-4">
                                <img
                                    src="https://i.pinimg.com/736x/8f/04/f3/8f04f3c155e9b6650a4c82f28f58210e.jpg"
                                    alt="Image 1"
                                    className="img-fluid"
                                    style={{ width: '100%', height:"684px"  }}
                                />
                            </div>
                            <div className="col-md-4 mb-4">
                                <img
                                    src="https://img5.thuthuatphanmem.vn/uploads/2021/11/22/hinh-nen-xanh-la-cute-dep-cho-dien-thoai_093530406.jpg"
                                    alt="Image 2"
                                    className="img-fluid"
                                    style={{ width: '100%', height:"684px"}}
                                />
                            </div>
                            <div className="col-md-4 mb-4">
                                <img
                                    src="https://i.pinimg.com/736x/a8/73/00/a873009be57f9a337d74b3b56493d812.jpg"
                                    alt="Image 3"
                                    className="img-fluid"
                                    style={{ width: '100%', height:"684px" }}
                                />
                            </div>


                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
