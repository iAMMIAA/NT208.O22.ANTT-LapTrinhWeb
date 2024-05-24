import {useEffect, useState} from 'react';
import './css/Exchange.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid  } from '@fortawesome/free-solid-svg-icons';
import PostPopup from './PopupPost.js';
import {likeExchange, useCountComment, useGetExchangeList} from "../api/exchange.api";
import TimeAgo from "../components/TimeAgo";
import {Avatar} from "@mui/material";
import {createExchange} from "../api/exchange.api";
import CommentPopup from "./PopupComment";
import * as React from "react";

function Exchange(){
    const {data, mutate} = useGetExchangeList();
    const {data: commentCount} = useCountComment();
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const getCommentCount = (exchangeId) => {
      return commentCount?.find((item) => item.exchangeId === exchangeId)?.value || 0;
    }

    const like = async (exchangeId) => {
        try {
          await mutate(likeExchange(exchangeId), {
            populateCache: (newData) => {
              return data.map((item) => {
                if (item.id === exchangeId) {
                  return {
                    ...item,
                    likeNumber: item.like.length > 0 ? item.likeNumber - 1 : item.likeNumber + 1,
                    like: item.like.length > 0 ? []: [newData],
                  }
                }
                return item;
              })
            },
            revalidate: false,
          })
        } catch (e) {
          console.error(e)
        }
    }

    const [open, setOpen] = useState(false)
    const [openComment, setOpenComment] = useState(false)
    const [exchangeId, setExchangeId] = useState(false)

    const handleClickComment = (exchangeId) => {
      setExchangeId(exchangeId);
      setOpenComment(true);
    }
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
                {data?.map((post, key) => (
                  <div className="post" key={key}>
                      <div className='post-content'>
                          <div className="post-user">
                              <div className='post-user-avatar'>
                                <Avatar alt={post?.user?.username || ''} src={post?.user?.username || ''} />
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
                          <FontAwesomeIcon icon={post.like.length > 0 ? faHeartSolid : faHeart} color={post.like.length > 0 ? 'red' : ''} className='icon' onClick={() => like(post.id)}/>
                          <FontAwesomeIcon icon={faComment} className='icon' onClick={() => handleClickComment(post.id)}/>
                          {/*<FontAwesomeIcon icon={faBookmark} className='icon'/>*/}
                      </div>
                  </div>
                ))}
            </div>
            <PostPopup open={open} onClose={() => setOpen(false)} createExchange={async (content) => {
              await createExchange(content);
              await mutate();
            }} />
            <CommentPopup open={openComment} onClose={() => setOpenComment(false)} exchangeId={exchangeId} />
        </div>
    )
}

export default Exchange;
