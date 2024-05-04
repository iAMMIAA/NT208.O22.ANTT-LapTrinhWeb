import React from 'react';
import './css/Home.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import picRound from './pictures/round.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
import theme2 from './pictures/theme1.png'
import queryString from 'query-string'; // Import thư viện query-string
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup} from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';

function Home() {
    const [dailyPost, setDailyPost] = useState([]);
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const [pageNumber, setPageNumber] = useState(0); // Trang hiện tại
    const itemsPerPage = 8; // Số lượng three_item trên mỗi trang
    const [fixPositionScroll, setFixPositionScroll] = useState();

    const open_related_post_Benh = () =>{
        axios.get(`http://localhost:3001/related_post/Bệnh`)
            .then(response => {
                const data = response.data;
                setDailyPost(data);
            })
    }

    const open_related_post_Chăm_sóc_sức_khỏe = () =>{
        axios.get(`http://localhost:3001/related_post/Chăm_sóc_sức_khỏe`)
            .then(response => {
                const data = response.data;
                setDailyPost(data);
            })
    }
    const open_related_post_Thuốc = () =>{
        axios.get(`http://localhost:3001/related_post/Thuốc`)
            .then(response => {
                const data = response.data;
                setDailyPost(data);
            })
    }
    const open_related_post_Vitamin = () =>{
        axios.get(`http://localhost:3001/related_post/Vitamin`)
            .then(response => {
                const data = response.data;
                setDailyPost(data);
            })
    }

    const toggleDropDown = () =>{
        setIsOpenDropDown(!isOpenDropDown);
    }
    const arrange_dateupdate = () =>{
        axios.get(`http://localhost:3001/arrange_dateupdate`)
            .then(response => {
                const data = response.data;
                setDailyPost(data);
            })
    }
    const arrange_view = () =>{
        axios.get(`http://localhost:3001/arrange_view`)
            .then(response => {
                const data = response.data;
                setDailyPost(data);
            })
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);

        axios.get(`http://localhost:3001/posts`)
            .then(Response => {
                const data = Response.data;
                setDailyPost(data);
            })
            .catch(error => {
                console.error("Error fetching posts: ", error);
            });

        const handleFixPositionScroll = () => {
            if (window.scrollY > 647) setFixPositionScroll(true);
            else setFixPositionScroll(false);
        }

        //Đăng ký sự kiện handle fix position scroll
        window.addEventListener('scroll', handleFixPositionScroll);

        return () => {
            window.removeEventListener('scroll', handleFixPositionScroll);
        };

    }, []);

    const pageCount = Math.ceil(dailyPost.length / itemsPerPage); // Tính số lượng trang
    const handlePageClick = ({ selected }) => {
        setPageNumber(selected); // Cập nhật trang hiện tại khi người dùng chọn trang
    };
    
    const displayDailyPosts = dailyPost
        .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
        .map(post => (
            <div className="three_item" key={post.id}>
                <div className='three_img'>
                    <img src={post.url_img} alt="" />
                </div>
                <div className="three_text">
                    <Link to={`/paper2/${post.id}`} className="test_1">{post.title}</Link>
                    <div className="three_time">
                        <span id="time_one">{post.date_update}</span>
                        <span id="time_two">Tác giả: <strong>{post.author}</strong></span>
                    </div>
                </div>
            </div>
        ));

  return (
    <div className='home'>
        <div className="main_two">
            <img src={theme2}></img>
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
                        <Link to='/paper2/6' className="today_pp_test_1" id="demo">7 mẹo chăm sóc sức khỏe tuyệt vời ...</Link>
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
                        <Link className="today_pp_test_1" to='/paper2/8' >Bí kíp giúp tinh thần để luôn lạc quan, ...</Link>
                        <div className="today_pp_time">
                            <span id="today_pp_time_two">Bác sĩ: Dương Thùy Chi</span>
                        </div>
                    </div>
                </div>
                <div className="today_pp">
                    <div className='today_pp_imgage'>
                        <img src={drug10}></img>
                    </div>
                    <div className="today_pp_text">
                        <Link to='/paper2/11' className="today_pp_test_1">Lựa chọn nào tốt nhất cho sức khỏe...</Link>
                        <div className="today_pp_time">
                            <span id="today_pp_time_two">Bác sĩ: Dương Thùy Chi</span>
                        </div>
                    </div>
                </div>                
                <div className="today_pp">
                    <div className='today_pp_imgage'>
                        <img src={drug8}></img>
                    </div>
                    <div className="today_pp_text">
                        <Link to='/paper2/12' className="today_pp_test_1">Chia sẻ cách cân bằng thể chất ...</Link>
                        <div className="today_pp_time">
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
                    <div className="three_arrange">
                        <div className="three_arrange_container">
                            <div className='three_arrange_first' onClick={toggleDropDown}>
                                <FontAwesomeIcon icon={faLayerGroup}/>
                                <span>Sắp xếp</span>
                            </div>
                            {isOpenDropDown && (
                            <div className='three_dropDown'>
                                <Link className='three_dropDown_item' onClick={arrange_view}>Lượt xem</Link>
                                <Link className='three_dropDown_item' onClick={arrange_dateupdate}>Ngày cập nhật</Link>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="three_container">
                    {displayDailyPosts}                
                    {pageCount > 1 && (
                        <ReactPaginate
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                    )}
                </div>
            </div>
            <div className="three_flag"></div>
            <div className={fixPositionScroll ? 'fix_menu':'default_menu'}>
                <h3>Danh sách các mục</h3>
                <div className='list_item'>
                    <ul>
                        <li onClick={open_related_post_Benh}><span>Bệnh</span></li>
                        <li onClick={open_related_post_Vitamin}>Vitamin</li>
                        <li onClick={open_related_post_Thuốc}>Các loại thuốc</li>
                        <li onClick={open_related_post_Chăm_sóc_sức_khỏe}>Chăm sóc sức khỏe</li>                        
                        <li>Khác</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
