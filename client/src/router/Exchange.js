import {useEffect, useState} from 'react';
import './css/Exchange.css'
import ava1 from './pictures/ava1.jpg';
import ava2 from './pictures/ava2.jpg';
import ava3 from './pictures/ava3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons';
import PostPopup from './PopupPost.js';
import {useCountComment, useGetExchangeList} from "../api/exchange.api";
import TimeAgo from "../components/TimeAgo";
import {Avatar} from "@mui/material";

function Exchange(){
    const {data} = useGetExchangeList();
    const {data: commentCount} = useCountComment();
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const getCommentCount = (exchangeId) => {
      return commentCount?.find((item) => item.exchangeId === exchangeId)?.value || 0;
    }

    const [open, setOpen] = useState(false)
    return(
        <div className="Exchange">
            <div className = "hello_theme">
                <span>Xin chào Lê Phương Thảo!</span>
                <div className='upload-question'>
                    <button className='btn-question' onClick={()=> setOpen(true)}>Câu hỏi của bạn....</button>
                </div>
            </div>
            <h6 className='exchange_title'>Những bài đăng gần đây:</h6>
            <div className='newfeed'>
                {data?.map((post) => (
                  <div className="post">
                      <div className='post-content'>
                          <div className="post-user">
                              <div className='post-user-avatar'>
                                  <Avatar />
                              </div>
                              <div className='post-user-info'>
                                  <div className='post-user-name'>{post.user.username}</div>
                                  <div className='post-user-time'>
                                      <TimeAgo date={post.createdAt} />
                                  </div>
                              </div>
                          </div>
                          <div className="post-description">{post.content}</div>
                          <div className='post-summary'>
                              <div className="like"> {post.likeNumber} lượt thích</div>
                              <div className="comment">{getCommentCount(post.id)} bình luận</div>
                          </div>
                      </div>
                      <div className='post-action'>
                          <FontAwesomeIcon icon={faHeart} className='icon'/>
                          <FontAwesomeIcon icon={faComment} className='icon'/>
                          <FontAwesomeIcon icon={faBookmark} className='icon'/>
                      </div>
                  </div>
                ))}
            </div>
            <PostPopup open={open} onClose={() => setOpen(false)} />
        </div>
    )
}

export default Exchange;
