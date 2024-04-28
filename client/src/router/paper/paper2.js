import axios from 'axios';
import './paper2.css';
import { useState, useEffect } from 'react';
import React from 'react';
import '../css/Home.css'; 
import { Link, useParams } from 'react-router-dom';
import drug7 from '../pictures/drug7.jpg'
import drug8 from '../pictures/drug8.png'
import drug10 from '../pictures/drug10.png'
import drug11 from '../pictures/drug11.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUser, faClock, faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Paper() {
    const { id } = useParams();
    const [idRelatedPost, setIdRelatedPost] = useState([]);
    const [titlePost, setTitlePost] = useState(null);
    const [authorPost, setAuthorPost] = useState(null);
    const [contentPost, setContentPost] = useState(null);
    const [tagPost, setTagPost] = useState(null);
    const [dateUpdatePost, setDateUpdatePost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/${id}`)
            .then(response => {
                const post = response.data;
                setTitlePost(post.title);
                setAuthorPost(post.author)
                setContentPost(post.content);
                setTagPost(post.tag);
                setDateUpdatePost(post.date_update);

                axios.get(`http://localhost:3001/related_post`)
                    .then(response => {
                        setIdRelatedPost(response.data);
                    })
            })
            .catch(error => {
                console.error("Error fetching posts: ", error);
            });
    }, []);

     // Lấy danh sách tất cả các tiêu đề h2 từ nội dung
    const headings = document.querySelectorAll('.BaiViet > strong');

    // Tạo mục lục từ danh sách các tiêu đề h2
    const tocItems = Array.from(headings).map((heading, index) => {
        const headingText = heading.textContent;
        const anchorId = `toc-item-${index}`;

        // Tạo các mục trong mục lục với các liên kết đến các tiêu đề
        return (
        <li key={index}>
            <a href={`#${anchorId}`}>{headingText}</a>
        </li>
        );
    });

    return (
        <div className='paper'>
            <div className='breadCrum_backWard'>
                <FontAwesomeIcon icon={faHome} style={{color: 'rgb(68, 68, 109)'}}/>
                <p style={{color: '#37537B', margin: '0px', paddingLeft: '10px'}}> Home / Danh mục sản phẩm / Tên sản phẩm</p>
            </div>
            <div className='main_paper'>
                <div className='container_paper'>
                    <div className="theme_paper">
                        <span><h2>{titlePost}</h2></span>
                    </div>
                    <div className='author_article'>
                        <p><FontAwesomeIcon icon={faUser} /><span> {authorPost} </span>| <FontAwesomeIcon icon={faClock}/> {dateUpdatePost}</p>
                    </div>
                    <div className="content_container">
                        <div dangerouslySetInnerHTML={{ __html: contentPost }} />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <p><em><strong>Thank you for reading!</strong></em></p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end', fontSize: '12sp'}}>
                        <p>Tags: <span className='tag_article'>{tagPost}</span></p>
                    </div>
                    <div className='end_article'>
                        
                        <p style={{color: 'gray'}}>Đang xem: <strong style={{color: 'black'}}>{titlePost}</strong></p>
                    </div>
                </div>
                <div className='table_of_paper'>
                    <h4>Mục lục</h4>
                    <ul>{tocItems}</ul>
                    {/* <p>1. Sparkling là gì?</p>
                    <p>2. Những điều thú vị bạn chưa biết về sparkling</p>
                    <p>3. Cách thưởng thức và lựa chọn sparkling</p>
                    <p>4. Sparkling </p> */}
                </div>
            </div>
           
            <div className='related_article'>
                <div className="related_posts_theme">
                    <p>Bài viết liên quan</p>
                </div>
                <div className="related_posts">
                    {idRelatedPost.map(post => (
                        <div className="related_post">
                            <div className='related_post_img'>
                                <img src={post.url_img}></img>
                            </div>
                            <div className="related_post_title">
                                <Link to={`/paper2/${post.id}`} className="related_post_link" id="demo">{post.title}</Link>
                                <div className="related_post_author">
                                    <p>Tác giả: <strong>{post.author}</strong></p>
                                </div>
                            </div> 
                        </div>  
                    ))}
                </div>
            </div>

        </div>
        
    );
}

export default Paper;
