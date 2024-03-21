import React from 'react';
import './router/css/App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCommentMedical, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import picTFBOYS from './router/pictures/tfboys.jpg'
import Home from './router/Home';
import Exchange from './router/Exchange';
import LookUp from './router/LookUp';
import Setting from './router/Setting';

function App() {
  return (
    <Router>
      <div className='body'>
          <div className="container">
              <div className="layout_left">
                  <div className="left_container">
                  <div className="header_menu">
                      <span>MedicalWeb.</span>
                  </div>
                  <div className="list_menu">
                      <ul>
                      <li className="Home">
                          <Link to='/home'>
                            <FontAwesomeIcon icon={faHome} style={{ color: '#37537B' }} />
                            <span style={{ color: '#37537B' }}>HOME</span>
                          </Link>
                      </li>
                      <li>
                          <Link to='/exchange'>
                            <FontAwesomeIcon icon={faCommentMedical} />
                            <span>EXCHANGE</span>
                          </Link>
                      </li>
                      <li>
                          <Link to='/lookup'>
                            <FontAwesomeIcon icon={faHome} />
                            <span>LOOK UP</span>
                          </Link>
                      </li>
                      <li>
                          <Link to='/setting'>
                            <FontAwesomeIcon icon={faHome} />
                            <span>SETTING</span>
                          </Link>
                      </li>
                      </ul>
                  </div>
                  </div>
              </div>
              <div className="layout-main">
                  <div className="main_container">
                    <div className="main_one">
                        <div className="one_find">
                        <form className="search_form" action="/search" method="GET">
                            <FontAwesomeIcon icon={faSearch} style={{ color: 'rgb(70, 90, 110)' }} />
                            <label htmlFor="searchInput"></label>
                            <input className="search_input" type="text" id="searchInput" name="q" placeholder="Tìm kiếm" />
                        </form>
                        </div>
                        <div className="one_notification">
                          <FontAwesomeIcon icon={faBell}/>
                        </div>
                        <div className="one_username">
                        <div className="one_username_container">
                            <span>Le Phuong Thao</span>
                            <img src={picTFBOYS} alt="" />
                        </div>
                        </div>
                    </div>
                    <div className='main_router'>
                      <Routes>
                        <Route path="/home" element={<Home/>}></Route>
                        <Route path='/exchange' element={<Exchange/>}></Route>
                        <Route path='/lookup' element={<LookUp/>}></Route>
                        <Route path='/setting' element={<Setting/>}></Route>
                      </Routes>
                    </div>
                    
                  </div>
              </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
