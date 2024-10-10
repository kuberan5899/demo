import React, { useState } from 'react';
import Img from './kec.jpg'; // Ensure the image path is correct

const StateHandle = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [subscribeCount, setSubscribeCount] = useState(0);
    const [name, setName] = useState("Hii welcome to my website");

    function change() {
        setName("kuber");
    }

    function old() {
        setName("Hii welcome to my website");
    }

    function handleShare() {
        alert("Shared successfully!");
    }

    return (
        <div>
            <center>
                <h1 onMouseEnter={change} onMouseLeave={old}>{name}</h1>
                <img src={Img} alt="Descriptive Alt Text" style={{ width: '300px', height: 'auto' }} />
                <div>
                    <button onClick={() => setLikeCount(likeCount + 1)}>Like</button>
                    <span>{likeCount} Likes</span>
                </div>
                <div>
                    <button onClick={() => setDislikeCount(dislikeCount + 1)}>Dislike</button>
                    <span>{dislikeCount} Dislikes</span>
                </div>
                <div>
                    <button onClick={handleShare} style={{ display: 'flex', alignItems: 'center' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ marginRight: '5px' }}
                        >
                            <path d="M18 15l4-4-4-4m4 4H6m12-4L6 9" />
                        </svg>
                        Share
                    </button>
                </div>
                <div>
                    <button onClick={() => setSubscribeCount(subscribeCount + 1)}>Subscribe</button>
                    <span>{subscribeCount} Subscriptions</span>
                </div>
            </center>
        </div>
    );
};

export default StateHandle;
