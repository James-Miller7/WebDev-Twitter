//Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/


const Tweet = ({ username, content, timestamp, initialLikes}: {
    username: string;
    content: string;
    timestamp: string;
    initialLikes: number;
  }) => {
    const [numLikes, setNumLikes] = useState(initialLikes);
    const [currentlyLiked, setCurrentlyLiked] = useState(false);

    const clicked = () => {
        if (currentlyLiked)
            setNumLikes(numLikes-1);
        else
            setNumLikes(numLikes+1);

        setCurrentlyLiked(!currentlyLiked);
    }
    return(
        <div className = "tweet">
            <h2>{username}</h2>
            <p>{content}</p>
            <p>{timestamp}</p>
            <button id = 'button' onClick={clicked}> 
                {currentlyLiked ? '❤️' : '🤍'}
            </button>
            <p>{numLikes} {numLikes === 1 ? 'like' : 'likes'}</p>

        </div>
    );
}



export default Tweet;
