import React from 'react';
import '../utils/project.js';
import '../styles/project/project.css';
import '../styles/project/bootstrap.css';
import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';



function Project() {
  return (
    <div>
      <h2 className="display-3 text-primary sai allign-items-center justify-content-center heading">
        <img className="img" src="../styles/project/logo.png" alt="Logo" /> Dataverse
      </h2>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h2>Dataverse</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link active" id="home" href="project.html">
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>window.showText()}>
                  <span>About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>window.toggleSideBox()}>
                  <span>AI box</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts">
                  <span>Contact</span>
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a
                  className="nav-link"
                  href="#"
                  onClick={()=>window.showLogoutButton()}
                  id="username-display"
                >
                  <span>
                    <img src="../styles/project/user.jpeg" id="user" alt="" />{' '}
                    <span id="user_name">saiteja</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="main_anchpr" className="container">
        <div className="parent custom-card-container">
          <a href="#heading" id="iris" data-value="1" className="custom-card">
            <img src="../styles/project/iris.jpeg" alt="Image 1" />
            <h3 className="custom-card-title">Iris Dataset</h3>
            <p className="custom-card-short-content"></p>
            <p className="custom-card-full-content">
              This dataset is ideal for multi-class classification problems with
              three classes, offering features that distinguish between them
              effectively.
            </p>
          </a>

          <a
            href="#heading"
            id="digits"
            data-value="2"
            className="custom-card"
          >
            <img src="../styles/project/second.jpeg" alt="Image 2" />
            <h3 className="custom-card-title">Written Digit Dataset</h3>
            <p className="custom-card-short-content"></p>
            <p className="custom-card-full-content">
              This dataset is ideal for classifying handwritten digits, offering
              features tailored to this specific task.
            </p>
          </a>

          <a href="#heading" id="wine" data-value="3" className="custom-card">
  <img src="../styles/project/wine.jpeg" alt="Wine Dataset" />
  <h3 className="custom-card-title">Wine Dataset</h3>
  <p className="custom-card-short-content"></p>
  <p className="custom-card-full-content">
    Ideal for classification tasks involving chemical analysis of wines from three classes.
  </p>
</a>

<a href="#heading" id="news" data-value="4" className="custom-card">
  <img src="../styles/project/news.jpeg" alt="News Dataset" />
  <h3 className="custom-card-title">20 Newsgroups Dataset</h3>
  <p className="custom-card-short-content"></p>
  <p className="custom-card-full-content">
    Contains 20 different newsgroup posts, perfect for text classification and NLP tasks.
  </p>
</a>

<a href="#heading" id="diabetes" data-value="5" className="custom-card">
  <img src="../styles/project/diabetes.jpeg" alt="Diabetes Dataset" />
  <h3 className="custom-card-title">Diabetes Dataset</h3>
  <p className="custom-card-short-content"></p>
  <p className="custom-card-full-content">
    A regression dataset used to predict disease progression based on patient features.
  </p>
</a>

<a href="#heading" id="house" data-value="6" className="custom-card">
  <img src="../styles/project/house.jpeg" alt="Boston Housing Dataset" />
  <h3 className="custom-card-title">Boston Housing Dataset</h3>
  <p className="custom-card-short-content"></p>
  <p className="custom-card-full-content">
    Contains features related to housing values in Boston; used for regression problems.
  </p>
</a>

<a href="#heading" id="face" data-value="7" className="custom-card">
  <img src="../styles/project/face.jpeg" alt="Olivetti Faces Dataset" />
  <h3 className="custom-card-title">Olivetti Faces Dataset</h3>
  <p className="custom-card-short-content"></p>
  <p className="custom-card-full-content">
    Face recognition dataset containing ../styles/project of 40 subjects; used for classification.
  </p>
</a>

<a href="#heading" id="forest" data-value="8" className="custom-card">
  <img src="../styles/project/forest.jpeg" alt="Forest Cover Dataset" />
  <h3 className="custom-card-title">Covtype (Forest Cover) Dataset</h3>
  <p className="custom-card-short-content"></p>
  <p className="custom-card-full-content">
    Used to predict forest cover type based on cartographic variables; multi-class classification.
  </p>
</a>

<a href="#heading" id="network" data-value="9" className="custom-card">
  <img src="../styles/project/network.jpeg" alt="KDD Cup 99 Dataset" />
  <h3 className="custom-card-title">KDD Cup 99 Dataset</h3>
  <p className="custom-card-short-content"></p>
  <p className="custom-card-full-content">
    Dataset for network intrusion detection; ideal for anomaly detection and classification.
  </p>
</a>

<a href="#heading" id="circle" data-value="10" className="custom-card">
  <img src="../styles/project/circle.jpeg" alt="Make Circles Dataset" />
  <h3 className="custom-card-title">Make Circles Dataset</h3>
  <p className="custom-card-short-content"></p>
  <p className="custom-card-full-content">
    Synthetic dataset for non-linear classification; perfect for testing classifiers with circular decision boundaries.
  </p>
</a>

        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">models</button>
        <div className="parent dropdown-content">
          <a id="iris" href="#heading" data-value="1">
            iris dataset
          </a>
          <a id="digits" href="#heading" data-value="2">
            written Digit dataset
          </a>
          <a id="wine" href="#heading" data-value="3">
            wine datasets for logistic regression
          </a>
          <a id="news" href="#heading" data-value="4">
            20 different news for classification
          </a>
          <a id="diabetes" href="#heading" data-value="5">
            diabetes dataset for regression
          </a>
          <a id="house" href="#heading" data-value="6">
            house price prediction
          </a>
          <a id="face" href="#heading" data-value="7">
            face recognition dataset
          </a>
          <a id="forest" href="#heading" data-value="8">
            classification for forest cover dataset
          </a>
          <a id="network" href="#heading" data-value="9">
            network intrusion dataset
          </a>
          <a id="circle" href="#heading" data-value="10">
            circle dataset for non-linear classification
          </a>
          <a className="nav-link" href="#" onClick={()=>window.toggleSideBox()}>
            <span>AI box</span>
          </a>
        </div>
      </div>

      <div className="row main_div">
        <div
          className="container row"
          id="main"
          style={{ display: 'flex', flexWrap: 'wrap', padding: '15px' }}
        >
          <div
            className="col-md-3 item design"
            id="datasets"
            style={{
              flex: 1,
              minWidth: '300px',
              height: '500px',
              overflowY: 'auto',
              border: '1px solid #ccc',
              padding: '15px',
              backgroundColor: '#fdfdfd',
            }}
          ></div>

          <div
            className="col-md-3 item design"
            id="links"
            style={{
              flex: 1,
              minWidth: '300px',
              height: '500px',
              overflowY: 'auto',
              border: '1px solid #ccc',
              padding: '15px',
              backgroundColor: '#fdfdfd',
            }}
          ></div>

          <div
            className="col-md-3 item first_item sklearn design"
            id="boxes"
            style={{
              flex: 1,
              minWidth: '300px',
              height: '500px',
              overflowY: 'auto',
              border: '1px solid #ccc',
              padding: '15px',
              backgroundColor: '#fdfdfd',
            }}
          >
            <h3 id="heading" style={{ marginBottom: '10px' }}></h3>
            <div
              id="code"
              style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}
            ></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div id="side-box" className="side-box hidden">
          <button className="close-btnn" onClick={()=>window.closeSideBox()}>
            X
          </button>
          <p>
            <img src="../styles/project/logo.png" alt="Icon" className="box-image" />
            <span className="text-success display-6">AI bot</span>
          </p>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/OfHarSvhYyHsL8w3C08UJ"
            width="100%"
            style={{ height: '100%', minHeight: '700px' }}
            frameBorder="0"
          ></iframe>
          <div className="output"></div>
        </div>
      </div>

      <span id="contacts">
        <div id="contacts-section">
          <form>
            <fieldset>
              <legend className="contact-title">Contact Us</legend>
              <footer className="professional-footer">
                <div className="footer-content">
                  <div className="contact-row">
                    <div className="contact-info">
                      <p>
                        <strong>Name:</strong> <span>B Gopal</span>
                      </p>
                      <p>
                        <strong>Email:</strong>{' '}
                        <span>bomminenigopal@gmail.com</span>
                      </p>
                      <p>
                        <strong>Phone:</strong> <span>+91 7013639633</span>
                      </p>
                    </div>
                    <div className="contact-info">
                      <p>
                        <strong>Name:</strong> <span>N Sai Teja</span>
                      </p>
                      <p>
                        <strong>Email:</strong>{' '}
                        <span>nallapanenisaiteja@gmail.com</span>
                      </p>
                      <p>
                        <strong>Phone:</strong> <span>+91 9121048098</span>
                      </p>
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="contact-info">
                      <p>
                        <strong>Name:</strong> <span>K Jagadeesh</span>
                      </p>
                      <p>
                        <strong>Email:</strong>{' '}
                        <span>kondakajagadeesh@gmail.com</span>
                      </p>
                      <p>
                        <strong>Phone:</strong> <span>+91 9573725129</span>
                      </p>
                    </div>
                    <div className="contact-info">
                      <p>
                        <strong>Name:</strong> <span>B Venkata Ram</span>
                      </p>
                      <p>
                        <strong>Email:</strong>{' '}
                        <span>banavathvenkataram@gmail.com</span>
                      </p>
                      <p>
                        <strong>Phone:</strong> <span>+91 9398344795</span>
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
            </fieldset>
          </form>
        </div>
      </span>
    </div>
  );
}

export default Project;
