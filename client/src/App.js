import React, {useState, useEffect} from 'react';
import './css/App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faForward, faBackward, faHome, faCommentMedical, faBell, faSearch, faGear, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import picTFBOYS from './router/pictures/tfboys.jpg'
import user from './router/pictures/user.png'
import Home from './router/Home';
import Exchange from './router/Exchange';
import LookUp from './router/LookUp';
import Setting_Profile from './router/Setting_Profile';
import LogIn from './LogIn-SignUp/LogIn';
import SignUp from './LogIn-SignUp/SignUp';
import Paper from './router/paper/paper2';
import picRound from './router/pictures/round.png';
import axios from 'axios';
// import logo from './logo/theme3.png'
import logo from './logo/logo5.png'

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [fixPositionScroll, setFixPositionScroll] = useState();
  const [fullName, setFullName] = useState('Username');


  const toggleSidebar = () => {
    setIsSidebarCollapsed (!isSidebarCollapsed);
  }

  const [isOpenItemMenu, setIsOpenItemMenu] = useState(false);
  const openItemMenu = () =>{
    setIsOpenItemMenu(!isOpenItemMenu);
    setIsOpenExchange(false);
    setIsOpenLookUp(false);
    setIsOpenSetting(false);
  }

  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const openSetting= () =>{
    setIsOpenSetting(!isOpenSetting);
    setIsOpenItemMenu(false);
    setIsOpenExchange(false);
    setIsOpenLookUp(false);
  }
  const [isOpenExchange, setIsOpenExchange] = useState(false);
  const openExchange = () =>{
    setIsOpenExchange(!isOpenExchange);
    setIsOpenItemMenu(false);
    setIsOpenLookUp(false);
    setIsOpenSetting(false);
  }
  const [isOpenLookUp, setIsOpenLookUp] = useState(false);
  const openLookUp = () =>{
    setIsOpenLookUp(!isOpenLookUp);
    setIsOpenItemMenu(false);
    setIsOpenExchange(false);
    setIsOpenSetting(false);
  }

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const openMenu = () => {
    setIsOpenMenu(true);
  }
  // Hàm để xử lý việc thiết lập isOpenMenu dựa trên độ dài màn hình
  const handleWindowSizeChange = () => {
    if (window.innerWidth >= 930) {
      setIsOpenMenu(true);
    } else {
      setIsOpenMenu(false);
    }
  };
  const handleFixPositionScroll = () => {
    if (window.scrollY > 0) setFixPositionScroll(true);
    else setFixPositionScroll(false);
}

  // Sử dụng useEffect để đăng ký sự kiện thay đổi kích thước cửa sổ
  useEffect(() => {
    // Gọi hàm handleWindowSizeChange khi component được render lại
    handleWindowSizeChange();

    // Đăng ký sự kiện
    window.addEventListener('resize', handleWindowSizeChange);
    window.addEventListener('scroll', handleFixPositionScroll);

    // Xóa sự kiện
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
      window.removeEventListener('scroll', handleFixPositionScroll);
    };

  }, []);

  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const toggleDropDown = () =>{
    setIsOpenDropDown(!isOpenDropDown);
  }

  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const toggleNotification = () => {
    setIsOpenNotification(!isOpenNotification);
  }

  const [noShowLogIn, setShowLogIn] = useState(false);
  const [noShowSignUp, setShowSignUp] = useState(false);

  const setShowLogInForm = () => {
    setShowLogIn(true);
    setShowSignUp(false);
  }

  const setShowSignUpForm = () => {
    setShowSignUp(true);
    setShowLogIn(false);
  }
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const logIn = (formData) => {
    axios.post('http://localhost:3001/login', formData)
        .then(response => {
          // var data = response.data;
          // alert(`${data}`);
          const {message, token, idUser} = response.data;
          if(message === 'Success' && token)
            {
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('token', token);
              localStorage.setItem('idUser', idUser);
              axios.defaults.headers.common.Authorization = `${token}`;
              // setUserName(formData.username);
              // setPassword(formData.userpassword);
              // alert(`${formData.username}`);
            }
        })
        .catch(error => {
            console.error("Error while fetching result: ", error);
        });
    }

  const logOut = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    localStorage.removeItem('idUser');

    // Tải lại trang
    window.location.href = 'http://localhost:3000/';
  }

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);

      axios.get(`http://localhost:3001/user/${localStorage.getItem('idUser')}`)
      .then(response => {
        const infoUser = response.data;
        setFullName(infoUser.fullName);
      })
      .catch(error => {
        console.error('error: ', error);
        alert('loi cmnr');
      })
    }
  }, []);

  return (
    <Router>
      <div className='drug_web'>
        {noShowLogIn && (
            <LogIn onSubmit={logIn} closeLogIn={()=>setShowLogIn(false)} openSignUp={setShowSignUpForm}/>
        )}
        {noShowSignUp && (
            <SignUp closeSignUp={()=>setShowSignUp(false)} openLogIn={setShowLogInForm}/>
        )}
        <div className="container_web">
          {isOpenMenu && (
            <div className={`layout_left ${isSidebarCollapsed ? 'active' : ''}`}>
              <div className={`left_first ${isSidebarCollapsed ? 'active' : ''}`}>
                <div className="header_menu">
                  <div className='logo_web'>
                    <img src={logo}></img>
                  </div>
                </div>
                  
                <div className="list_menu">
                    <ul>
                      <li><Link to='/'>
                        <FontAwesomeIcon icon={faHome} className='icon_left'onClick={openItemMenu}/>
                        </Link>
                      </li>
                      <li><Link to='/exchange'>
                        <FontAwesomeIcon icon={faCommentMedical} className='icon_left' onClick={openExchange}/></Link></li>
                      <li><Link to='/lookup'>
                        <FontAwesomeIcon icon={faSearch} className='icon_left' onClick={openLookUp}/></Link></li>
                      <li><Link to='/setting_profile'>
                        <FontAwesomeIcon icon={faGear} className='icon_left' onClick={openSetting}/></Link></li>
                    </ul>
                </div>
                <div className='logout'>
                  <Link onClick={logOut} className='link_logout'>
                    <FontAwesomeIcon icon={faRightFromBracket} className='icon_logout'/>
                  </Link>
                </div>
              </div>

              <div className={`left_container ${isSidebarCollapsed ? 'active': ''}`}>
                <div className="header_menu"><span>MedicalWeb.</span>
                </div>
                <div className="list_menu">
                    <ul>
                      <li className={`itemMenu ${isOpenItemMenu ? 'active' : ''}`}>
                        <Link className='text_left' to='/' onClick={openItemMenu}>
                          <span>HOME</span>
                        </Link>
                      </li>
                      <li className={`itemMenu ${isOpenExchange ? 'active' : ''}`}>
                        <Link className='text_left' to='/exchange' onClick={openExchange}>
                          <span>EXCHANGE</span>
                        </Link>
                      </li>
                      <li className={`itemMenu ${isOpenLookUp ? 'active' : ''}`}>
                        <Link className='text_left' to='/lookup' onClick={openLookUp}>
                          <span>LOOK UP</span>
                        </Link>
                      </li>
                      <li className={`itemMenu ${isOpenSetting ? 'active' : ''}`}>
                        <Link className='text_left' to='/setting_profile' onClick={openSetting}>
                          <span>SETTING</span>
                        </Link>
                      </li>
                    </ul>
                </div>
                <div className='logout'>
                  <Link onClick={logOut} className='link_logout'>
                    <span className='text_logout'>LOGOUT</span>
                  </Link>
                </div>
              </div>

              <div className='left_icon_move'>
                {isSidebarCollapsed ? (
                  <FontAwesomeIcon className='left_icon' onClick={toggleSidebar} icon={faForward}/>
                ) : (
                  <FontAwesomeIcon className='left_icon' onClick={toggleSidebar} icon={faBackward}/>
                )}
              </div>
            </div>
          )}

            <div className={`layout_main ${isSidebarCollapsed ? 'active': ''}`}>
                <div className="main_container">
                  <div className={fixPositionScroll ? 'fixed_main_one':'main_one'}>
                    <div className='main_one_container'>
                        <div className='one_menu'>
                            <FontAwesomeIcon className='icon_bars' icon={faBars} onClick={openMenu}/>
                        </div>
                        <div className="one_find">
                          <form className="search_form" action="/search" method="GET">
                              <FontAwesomeIcon className='icon_search' icon={faSearch}/>
                              <input className="search_input" type="text" id="searchInput" name="q" placeholder="Tìm kiếm" />
                          </form>
                        </div>
                        <div className="one_notification">
                          <FontAwesomeIcon className='round_icon_notification' icon={faBell} onClick={toggleNotification}/>
                          {isLoggedIn && isOpenNotification && (
                            <div className='form_notification'>
                              <div className='notif_one_user'>
                                <img src={picRound}></img>
                                <div className='notifi_infomation'>
                                  <h5 className='notif_userName_1'>iAMMIA</h5>
                                  <p className='notif_userName_2'>framddddlpoukuhgruummmmme_get_notiffuck</p>
                                </div>
                              </div>
                              <div className='notif_one_user'>
                                <img src={picRound}></img>
                                <div className='notifi_infomation'>
                                  <h5 className='notif_userName_1'>iAMMIA</h5>
                                  <p className='notif_userName_2'>framddddlpoukuhgruummmmme_get_notiffuck</p>
                                </div>
                              </div>
                              <div className='notif_one_user'>
                                <img src={picRound}></img>
                                <div className='notifi_infomation'>
                                  <h5 className='notif_userName_1'>iAMMIA</h5>
                                  <p className='notif_userName_2'>framddddlpoukuhgruummmmme_get_notiffuck</p>
                                </div>
                              </div>
                              <div className='notif_one_user'>
                                <img src={picRound}></img>
                                <div className='notifi_infomation'>
                                  <h5 className='notif_userName_1'>iAMMIA</h5>
                                  <p className='notif_userName_2'>framddddlpoukuhgruummmmme_get_notiffuck</p>
                                </div>
                              </div>
                              <div className='notif_one_user'>
                                <img src={picRound}></img>
                                <div className='notifi_infomation'>
                                  <h5 className='notif_userName_1'>iAMMIA</h5>
                                  <p className='notif_userName_2'>framddddlpoukuhgruummmmme_get_notiffuck</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        {isLoggedIn ? (
                        <div className="one_username">
                          <div className="one_username_container">
                            <div className='one_noname' onClick={toggleDropDown}>
                              <span className='name'>{fullName}</span>
                              <div className='one_avatar'>
                                <img className='one_avatar_1' src={picTFBOYS} alt="" />
                              </div>
                            </div>
                            {isOpenDropDown && (
                            <div className='one_dropDown'>
                              <Link className='one_link_dropdown' to="/setting_profile">My Profile</Link>
                              <Link className='one_link_dropdown' to="/setting_profile/setting" >Setting</Link>
                              <Link onClick={logOut} className='one_link_dropdown'>Log Out</Link>
                            </div>
                          )}
                          </div>
                        </div>
                        ) : (
                          <div className="one_username">
                            <div className="one_username_container">
                              <div className='one_noname' onClick={toggleDropDown}>
                                <span>{fullName}</span>
                                <div className='one_avatar'>
                                  <img className='one_avatar_1' src={user} alt="" />
                                </div>
                              </div>
                              {isOpenDropDown && (
                              <div className='one_dropDown'>
                                <Link className='one_link_dropdown' onClick={setShowLogInForm} >Log In</Link>
                                <Link className='one_link_dropdown' onClick={setShowSignUpForm}>Sign Up</Link>
                              </div>
                            )}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>

                  <div className={fixPositionScroll ? 'fixed_main_router':'main_router'}>
                    {isLoggedIn ? (
                      <Routes>
                        <Route path="/" exact element={<Home/>}></Route>
                        <Route path='/exchange' element={<Exchange/>}></Route>
                        <Route path='/lookup' element={<LookUp/>}></Route>
                        <Route path='/paper2/:id' element={<Paper/>}></Route>
                        <Route path='/setting_profile/*' element={<Setting_Profile/>}></Route>
                      </Routes>
                    ) : (
                      <Routes>
                        <Route path="/" exact element={<Home/>}></Route>
                        <Route path='/paper2/:id' element={<Paper/>}></Route>
                      </Routes>
                    )}
                  </div>

                  <div className='footer_web_site'>
                    <div className='footer_header'>
                      <img src={logo}></img>
                      <h2 style={{marginLeft: '10px'}}>MedicalWeb.</h2>
                    </div>
                    <p><strong>Made by GroupFive</strong></p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
