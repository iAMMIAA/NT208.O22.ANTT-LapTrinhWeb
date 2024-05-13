import {useEffect, useState} from 'react';
import './css/Exchange.css'
import ava1 from './pictures/ava1.jpg';
import ava2 from './pictures/ava2.jpg';
import ava3 from './pictures/ava3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons';
import PostPopup from './PopupPost.js';

function Exchange(){
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    const [open, setOpen] = useState(false)
    return(
        <div class="Exchange">
            <div className = "hello_theme">
                <span>Xin chào Lê Phương Thảo!</span>
                <div className='upload-question'>
                    <button className='btn-question' onClick={()=> setOpen(true)}>Câu hỏi của bạn....</button>

                </div>
            </div>
            <h6 className='exchange_title'>Những bài đăng gần đây:</h6>
            <div className='newfeed'>
                <div className = "post">
                    <div className='post-content'>
                        <div className="post-user">
                            <div className='post-user-avatar' >
                                <img src={ava1} className='img'></img>
                            </div>
                            <div className='post-user-info'>
                                <div className='post-user-name'>Thanh Trúc</div>
                                <div className='post-user-time'>10 phút.</div>
                            </div>
                        </div>
                        <div className="post-description"> Gần đây trên mạng xã hội có nhiều thông tin “Ăn hoa quả lúc đói". Vậy nên ăn hoa quả trước hay sau bữa ăn sẽ tốt hơn?</div>
                        <div className='post-summary'>
                            <div className="like"> 12 lượt thích</div>
                            <div className="comment">5 bình luận</div>
                        </div>
                    </div>
                    <div class= 'post-action'>
                        <FontAwesomeIcon icon={faHeart} className='icon'/>
                        <FontAwesomeIcon icon={faComment} className='icon' />
                        <FontAwesomeIcon icon={faBookmark} className='icon' />
                    </div>
                </div>
                <div className='post'>
                    <div className='post-content'>
                        <div className="post-user">
                            <div className='post-user-avatar' >
                                <img src={ava2} className='img'></img>
                            </div>
                            <div className='post-user-info'>
                                <div className='post-user-name'>Thanh Trúc</div>
                                <div className='post-user-time'>45 phút.</div>
                            </div>
                        </div>
                        <div className="post-description">Mọi người cho mình xin review về tiêm HPV với ạ.</div>
                        <div className='post-summary'>
                            <div className="like"> 25 lượt thích</div>
                            <div className="comment">10 bình luận</div>
                        </div>
                    </div>
                    <div class= 'post-action'>
                        <FontAwesomeIcon icon={faHeart} className='icon'/>
                        <FontAwesomeIcon icon={faComment} className='icon' />
                        <FontAwesomeIcon icon={faBookmark} className='icon' />
                    </div>
                </div>
                <div className = "post">
                    <div className='post-content'>
                        <div className="post-user">
                            <div className='post-user-avatar' >
                                <img src={ava3} className='img'></img>
                            </div>
                            <div className='post-user-info'>
                                <div className='post-user-name'>Thanh Trúc</div>
                                <div className='post-user-time'>1 giờ.</div>
                            </div>
                        </div>
                        <div className="post-description"> Gần đây trên mạng xã hội có nhiều thông tin “Ăn hoa quả lúc đói". Vậy nên ăn hoa quả trước hay sau bữa ăn sẽ tốt hơn?</div>
                        <div className='post-summary'>
                            <div className="like"> 35 lượt thích</div>
                            <div className="comment">20 bình luận</div>
                        </div>
                    </div>
                    <div class= 'post-action'>
                        <FontAwesomeIcon icon={faHeart} className='icon'/>
                        <FontAwesomeIcon icon={faComment} className='icon' />
                        <FontAwesomeIcon icon={faBookmark} className='icon' />
                    </div>
                </div>
            </div>
            <PostPopup open={open} onClose={() => setOpen(false)} />
        </div>
    )
}

export default Exchange;
