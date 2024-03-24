import axios from 'axios';
import './paper2.css';
import { useState, useEffect } from 'react';

function Paper() {
    const [titlePost, setTitlePost] = useState(null);
    const [contentPost, setContentPost] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/posts/6')
            .then(response => {
                const post = response.data;
                setTitlePost(post.title);
                setContentPost(post.content);
            })
            .catch(error => {
                console.error("Error fetching posts: ", error);
            });
    }, []);

    return (
        <div className='paper'>
            <div className="theme_paper">
                <h2>{titlePost}</h2>
            </div>
            <div className="content_container" dangerouslySetInnerHTML={{ __html: contentPost }} />
        </div>
    );
}

export default Paper;
