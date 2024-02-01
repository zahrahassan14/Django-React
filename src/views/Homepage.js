// Homepage.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  const [language] = useState('en');

  return (
    <>
      <style>
        {`
          body {
            background-color: #C5E1A5;
          }
        `}
      </style>
      <main role="main" style={{ marginTop: 150 }}>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">
              {'Hello, world!'}
            </h1>
            <p>
              {
                "This is a Chat Website developed by Zahra and Hira as part of our Semester Project. Hope you all like it!"
              }
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>{'Our Project'}</h2>
              <p>
                {"Chat Connect: Our joint venture in crafting an online chatting website using React and Django. Elevate your communication experience with real-time messaging, user-friendly interface, and secure authentication. Bridging innovation and technology for seamless online conversations. Join us and explore the future of digital communication!"
                }
              </p>
              <p>
                <a className="btn btn-secondary" href="/aboutus" role="button" style={{ backgroundColor: '#1B5E20', color: 'white' }}
>
                  {'About us �'}
                </a>
              </p>
            </div>
          </div>
          <hr />
        </div>
      </main>
    </>
  );
}

export default Homepage;
