import React from 'react';
import './css/Home.css'; 
import picRound from './pictures/round.png'
import { Link } from 'react-router-dom';
import drug2 from './pictures/drug2.png'
import drug3 from './pictures/drug3.png'
import drug4 from './pictures/drug4.png'
import drug5 from './pictures/drug5.jpg'
import drug6 from './pictures/drug6.jpg'
import drug7 from './pictures/drug7.jpg'
import drug8 from './pictures/drug8.png'
import drug10 from './pictures/drug10.png'
import drug11 from './pictures/drug11.png'
import drug9 from './pictures/drug9.jpg'
import MarkTwain from './pictures/MarkTwain.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel';

function Home() {
  return (
    <div className='home'>
        <div className="main_two">
            
            <div className='two_theme'>
                <div className="two_header"> 
                    <span className='two_hi_user'>Hello iAMMIA!</span>  
                    <p className='two_quote'>“Be careful about reading health books. You may die of a misprint.“</p>   
                    <p className='two_author'>Mark Twain</p>
                </div>
            </div>
            <div className='two_img'>
                <img src={drug2}></img>
            </div>
        </div>

        <div className="main_four">
            <div className="four_theme">
                <span>Top Papers</span>
            </div>
            <div className="four_container">
                <div className="today_pp">
                    <div className='today_pp_imgage'>
                        <img src={drug11}></img>
                    </div>
                    <div className="today_pp_text">
                        <Link to='/paper2' className="today_pp_test_1" id="demo">7 mẹo chăm sóc sức khỏe tuyệt vời ...</Link>
                        <div className="today_pp_time">
                            <span id="today_pp_time_two">Bác sĩ: Dương Thùy Chi</span>
                        </div>
                    </div>
                    
                </div>                
                <div className="today_pp">
                    <div className='today_pp_imgage'>
                        <img src={drug7}></img>
                    </div>
                    <div className="today_pp_text">
                        <Link className="today_pp_test_1" to='/paper2' >Bí kíp giúp tinh thần để luôn lạc quan, ...</Link>
                        <div className="today_pp_time">
                            {/* <span id="today_pp_time_one">12 February 2024</span> */}
                            <span id="today_pp_time_two">Bác sĩ: Dương Thùy Chi</span>
                        </div>
                    </div>
                </div>
                <div className="today_pp">
                    <div className='today_pp_imgage'>
                        <img src={drug10}></img>
                    </div>
                    <div className="today_pp_text">
                        <Link to='/paper2' className="today_pp_test_1">Lựa chọn nào tốt nhất cho sức khỏe...</Link>
                        <div className="today_pp_time">
                            {/* <span id="today_pp_time_one">12 February 2024</span> */}
                            <span id="today_pp_time_two">Bác sĩ: Dương Thùy Chi</span>
                        </div>
                    </div>
                </div>                
                <div className="today_pp">
                    <div className='today_pp_imgage'>
                        <img src={drug8}></img>
                    </div>
                    <div className="today_pp_text">
                        <Link to='/paper2' className="today_pp_test_1">Chia sẻ cách cân bằng thể chất ...</Link>
                        <div className="today_pp_time">
                            {/* <span id="today_pp_time_one">12 February 2024</span> */}
                            <span id="today_pp_time_two">Bác sĩ: Dương Thùy Chi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="main_three">
            <div className="three_one">
            <div className="three_theme">
                <div className="theme_first">
                    <span>New Papers</span>
                </div>
                <div className="theme_second">
                    <Link style={{color: '#37537B', textDecoration: 'none'}}>See more</Link>
                </div>
            </div>
            <div className="three_container">
            <div className="three_item">
                    <div className='three_img'>
                        <img src={drug4} alt="" />
                    </div>
                    <div className="three_text">
                        <Link to='/paper' className="test_1">Cẩm nang Chăm sóc sức khỏe</Link>
                        <div className="three_time">
                            <span id="time_one">12 February 2024</span>
                            <span id="time_two">10:00 AM</span>
                        </div>
                    </div>
                </div>
                <div className="three_item">
                    <div className='three_img'>
                        <img src={drug3} alt="" />
                    </div>
                    <div className="three_text">
                        <Link to='/paper' className="test_1">Cẩm nang Chăm sóc sức khỏe</Link>
                        <div className="three_time">
                            <span id="time_one">12 February 2024</span>
                            <span id="time_two">10:00 AM</span>
                        </div>
                    </div>
                </div>
                <div className="three_item">
                    <div className='three_img'>
                        <img src={drug5} alt="" />
                    </div>
                    <div className="three_text">
                        <Link to='/paper' className="test_1">Cẩm nang Chăm sóc sức khỏe</Link>
                        <div className="three_time">
                            <span id="time_one">12 February 2024</span>
                            <span id="time_two">10:00 AM</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="three_flag"></div>
            <div className="three_two"></div>
        </div>
    </div>
  );
}

export default Home;
