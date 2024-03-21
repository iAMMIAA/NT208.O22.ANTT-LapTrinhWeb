import React from 'react';
import './css/Exchange.css' 
import tfboys from './pictures/tfboys.jpg';
import ava1 from './pictures/ava1.jpg';
import user from './pictures/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward, faHome, faCommentMedical, faBell, faSearch, faGear, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

function Exchange(){
    return(
        <div class="Exchange">
            <div className = "hello_theme">
                <span>Xin chào Lê Phương Thảo!</span>
                <div className='upload-question'>
                    <div className='ava-user-upload' >
                        <img className='ava-user' src={tfboys}></img>
                    </div>
                    <button className='btn-question'>Câu hỏi của bạn....</button>
                    {/* <FontAwesomeIcon icon={faSearch} style={{ color: 'rgb(70, 90, 110)' }} /> */}
                </div>
            </div>
            <h4 className='title'>Những bài đăng gần đây:</h4>
            <div className='newfeed'>
                <div className = "post">
                    <div className='post-content'>
                        <div className="post-user">
                            <div className='post-user-avatar' >
                                <img src={ava1}></img>
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
                    <div class= 'post-action'> Action</div>
                </div>
                <div className = "post">
                    <div className='post-content'>
                        <div className="post-user">
                            <div className='post-user-avatar' >
                                <img src={tfboys}></img>
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
                    <div class= 'post-action'> Action</div>
                </div>
                <div className = "post">
                    <div className='post-content'>
                        <div className="post-user">
                            <div className='post-user-avatar' >
                                <img src={user}></img>
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
                    <div class= 'post-action'> Action</div>
                </div>
                <div className = "post">
                    <div className='post-content'>
                        <div className="post-user">
                            <div className='post-user-avatar' >
                                <img src={tfboys}></img>
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
                    <div class= 'post-action'> Action</div>
                </div>
            </div>                 
        </div>
            
    )
}

export default Exchange;
