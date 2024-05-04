import React, { useState } from 'react';
import './css/Exchange.css';
import Post from './Posts';
import PostPopup from './PopupPost';
import ava1 from './pictures/ava1.jpg';
import ava2 from './pictures/ava2.jpg';
import ava3 from './pictures/ava3.jpg';

function Exchange() {
    const [open, setOpen] = useState(false);

   
    const posts = [
        {
            avatar: ava1,
            userName: 'Thanh Trúc',
            time: '10 phút',
            description: 'Gần đây trên mạng xã hội có nhiều thông tin “Ăn hoa quả lúc đói". Vậy nên ăn hoa quả trước hay sau bữa ăn sẽ tốt hơn?',
            likes: 12,
            comments: 5
        },
        {
            avatar: ava2,
            userName: 'Thanh Trúc',
            time: '45 phút',
            description: 'Mọi người cho mình xin review về tiêm HPV với ạ.',
            likes: 25,
            comments: 10
        },
        {
            avatar: ava3,
            userName: 'Thanh Trúc',
            time: '1 giờ',
            description: 'Gần đây trên mạng xã hội có nhiều thông tin “Ăn hoa quả lúc đói". Vậy nên ăn hoa quả trước hay sau bữa ăn sẽ tốt hơn?',
            likes: 35,
            comments: 20
        }
    ];

    return (
        <div className="Exchange">
            <div className="hello_theme">
                <span>Xin chào Lê Phương Thảo!</span>
                <div className='upload-question'>
                    <button className='btn-question' onClick={() => setOpen(true)}>Câu hỏi của bạn....</button>
                </div>
            </div>
            <h6 className='exchange_title'>Những bài đăng gần đây:</h6>
            <div className='newfeed'>
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        avatar={post.avatar}
                        userName={post.userName}
                        time={post.time}
                        description={post.description}
                        likes={post.likes}
                        comments={post.comments}
                    />
                ))}
            </div>
            <PostPopup open={open} onClose={() => setOpen(false)}/>
        </div>
    );
}

export default Exchange;
