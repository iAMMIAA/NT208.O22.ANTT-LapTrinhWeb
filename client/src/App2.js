// import React, {useState} from 'react';
// import './router/css/App.css'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faForward, faBackward, faHome, faCommentMedical, faBell, faSearch, faGear, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
// import { Link, Route, Routes } from 'react-router-dom';
// import picTFBOYS from './router/pictures/tfboys.jpg'
// import Home from './router/Home';
// import Exchange from './router/Exchange';
// import LookUp from './router/LookUp';
// import Setting from './router/Setting';
// import Profile from './router/MyProfile';
// import Paper1 from './router/paper/paper1';
// import Paper2 from './router/paper/paper2';
// import picRound from './router/pictures/round.png';
// import axios from 'axios';


// function App2({userLogOut}) {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const toggleSidebar = () => {
//     setIsSidebarCollapsed (!isSidebarCollapsed);
//   }

//   const [isOpenItemMenu, setIsOpenItemMenu] = useState(false);
//   const openItemMenu = () =>{
//     setIsOpenItemMenu(!isOpenItemMenu);
//     setIsOpenExchange(false);
//     setIsOpenLookUp(false);
//     setIsOpenSetting(false);
//   }

//   const [isOpenSetting, setIsOpenSetting] = useState(false);
//   const openSetting= () =>{
//     setIsOpenSetting(!isOpenSetting);
//     setIsOpenItemMenu(false);
//     setIsOpenExchange(false);
//     setIsOpenLookUp(false);
//   }
//   const [isOpenExchange, setIsOpenExchange] = useState(false);
//   const openExchange = () =>{
//     setIsOpenExchange(!isOpenExchange);
//     setIsOpenItemMenu(false);
//     setIsOpenLookUp(false);
//     setIsOpenSetting(false);
//   }
//   const [isOpenLookUp, setIsOpenLookUp] = useState(false);
//   const openLookUp = () =>{
//     setIsOpenLookUp(!isOpenLookUp);
//     setIsOpenItemMenu(false);
//     setIsOpenExchange(false);
//     setIsOpenSetting(false);
//   }

//   const [isOpenDropDown, setIsOpenDropDown] = useState(false);
//   const toggleDropDown = () =>{
//     setIsOpenDropDown(!isOpenDropDown);
//   }

//   const [isOpenNotification, setIsOpenNotification] = useState(false);
//   const toggleNotification = () => {
//     setIsOpenNotification(!isOpenNotification);
//   }

//   const [noShowLogIn, setShowLogIn] = useState(false);
//   const [noShowSignUp, setShowSignUp] = useState(false);

//   const setShowLogInForm = () => {
//     setShowLogIn(true);
//     setShowSignUp(false);
//   }

//   const setShowSignUpForm = () => {
//     setShowSignUp(true);
//     setShowLogIn(false);
//   }

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const logIn = (formData) => {
//     axios.post('http://localhost:3001/login', formData)
//         .then(response => {
//             setIsLoggedIn(false);
//         })
//         .catch(error => {
//             console.error("Error while fetching result: ", error);
//         });
//     }

//   return (
//       <div className='drug_web'>
//         <div className="container">
//           <div className={`layout_left ${isSidebarCollapsed ? 'active' : ''}`}>
//               <div className={`left_first ${isSidebarCollapsed ? 'active' : ''}`}>
//                 <div className="header_menu"></div>
                  
//                 <div className="list_menu">
//                     <ul>
//                       <li><Link to='/user/'>
//                         <FontAwesomeIcon icon={faHome} className='icon_left'/>
//                         </Link>
//                       </li>
//                       <li><Link to='/user/exchange'>
//                         <FontAwesomeIcon icon={faCommentMedical} className='icon_left' /></Link></li>
//                       <li><Link to='/user/lookup'>
//                         <FontAwesomeIcon icon={faSearch} className='icon_left'/></Link></li>
//                       <li><Link to='/user/setting'>
//                         <FontAwesomeIcon icon={faGear} className='icon_left'/></Link></li>
//                     </ul>
//                 </div>
//                 <div className='logout'>
//                   <Link to='/' className='link_logout'>
//                     <FontAwesomeIcon icon={faRightFromBracket} className='icon_logout'/>
//                   </Link>
//                 </div>
//               </div>

//               <div className={`left_container ${isSidebarCollapsed ? 'active': ''}`}>
//                 <div className="header_menu"><span>MedicalWeb.</span>
//                 </div>
//                 <div className="list_menu">
//                     <ul>
//                       <li className={`itemMenu ${isOpenItemMenu ? 'active' : ''}`}>
//                         <Link className='text_left' to='/user/' onClick={openItemMenu}>
//                           <span>HOME</span>
//                         </Link>
//                       </li>
//                       <li className={`itemMenu ${isOpenExchange ? 'active' : ''}`}>
//                         <Link className='text_left' to='/user/exchange' onClick={openExchange}>
//                           <span>EXCHANGE</span>
//                         </Link>
//                       </li>
//                       <li className={`itemMenu ${isOpenLookUp ? 'active' : ''}`}>
//                         <Link className='text_left' to='/user/lookup' onClick={openLookUp}>
//                           <span>LOOK UP</span>
//                         </Link>
//                       </li>
//                       <li className={`itemMenu ${isOpenSetting ? 'active' : ''}`}>
//                         <Link className='text_left' to='/user/setting' onClick={openSetting}>
//                           <span>SETTING</span>
//                         </Link>
//                       </li>
//                     </ul>
//                 </div>
//                 <div className='logout'>
//                   <Link to='/' className='link_logout'>
//                     <span className='text_logout'>LOGOUT</span>
//                   </Link>
//                 </div>
//               </div>

//               <div className='left_icon_move'>
//                 {isSidebarCollapsed ? (
//                   <FontAwesomeIcon className='left_icon' onClick={toggleSidebar} icon={faForward}/>
//                 ) : (
//                   <FontAwesomeIcon className='left_icon' onClick={toggleSidebar} icon={faBackward}/>
//                 )}
//               </div>

//             </div>
//             <div className={`layout_main ${isSidebarCollapsed ? 'active': ''}`}>
//                 <div className="main_container">
//                   <div className="main_one">
//                       <div className="one_find">
//                         <form className="search_form" action="/search" method="GET">
//                             <FontAwesomeIcon icon={faSearch} style={{ color: 'rgb(70, 90, 110)' }} />
//                             <label htmlFor="searchInput"></label>
//                             <input className="search_input" type="text" id="searchInput" name="q" placeholder="Tìm kiếm" />
//                         </form>
//                       </div>
//                       <div className="one_notification">
//                         <div className='icon_notification' onClick={toggleNotification}>
//                           <FontAwesomeIcon icon={faBell} className='icon_notification'/>
//                         </div>
//                         {isOpenNotification && (
//                         <div className='form_notification'>
//                           <div className='notif_one_user'>
//                             <img src={picRound}></img>
//                             <div className='notifi_infomation'>
//                               <h5 className='notif_userName_1'>iAMMIA</h5>
//                               <p className='notif_userName_2'>framddddlpoukuhgruummmmme_get_notiffuck</p>
//                             </div>
//                           </div>
//                           <div className='notif_one_user'>
//                             <img src={picRound}></img>
//                             <div className='notifi_infomation'>
//                               <h5 className='notif_userName_1'>iAMMIA</h5>
//                               <p className='notif_userName_2'>framddddlpoukuhgruummmmme_get_notiffuck</p>
//                             </div>
//                           </div>
//                           <div className='notif_one_user'>
//                             <img src={picRound}></img>
//                             <div className='notifi_infomation'>
//                               <h5 className='notif_userName_1'>iAMMIA</h5>
//                               <p className='notif_userName_2'>framddddlpoukuhgruummmmme_get_notiffuck</p>
//                             </div>
//                           </div>
//                           <div className='notif_one_user'>
//                             <img src={picRound}></img>
//                             <div className='notifi_infomation'>
//                               <h5 className='notif_userName_1'>iAMMIA</h5>
//                               <p className='notif_userName_2'>framddddlpoukuhgruummmmme_get_notiffuck</p>
//                             </div>
//                           </div>
//                           <div className='notif_one_user'>
//                             <img src={picRound}></img>
//                             <div className='notifi_infomation'>
//                               <h5 className='notif_userName_1'>iAMMIA</h5>
//                               <p className='notif_userName_2'>framddddlpoukuhgruummmmme_get_notiffuck</p>
//                             </div>
//                           </div>
//                         </div>
//                         )}
//                       </div>
//                       <div className="one_username">
//                           <div className="one_username_container">
//                             <div className='one_noname' onClick={toggleDropDown}>
//                               <span>Lê Phương Thảo</span>
//                               <img src={picTFBOYS} alt="" />
//                             </div>
//                             {isOpenDropDown && (
//                             <div className='one_dropDown'>
//                               <Link className='one_link_dropdown' to="/profile">My Profile</Link>
//                               <Link className='one_link_dropdown' to="/setting" >Setting</Link>
//                               <Link className='one_link_dropdown'>Log Out</Link>
//                             </div>
//                           )}
//                           </div>
//                         </div>
//                   </div>

//                   <div className='main_router'>
//                       <Routes>
//                         <Route path='/' exact element={<Home/>}></Route>
//                         <Route path='/exchange' element={<Exchange/>}></Route>
//                         <Route path='/lookup' element={<LookUp/>}></Route>
//                         <Route path='/setting' element={<Setting/>}></Route>
//                         <Route path='/profile' element={<Profile/>}></Route>
//                         <Route path='/paper' element={<Paper1/>}></Route>
//                         <Route path='/paper2' element={<Paper2/>}></Route>
//                       </Routes>
//                   </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//   );
// }

// export default App2;