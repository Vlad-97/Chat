import React from 'react';
import '../style.css';
import './Chat3.css';

const Chat3 = () => {
    return (
        <div className='Content'>
            <div className='Content__user'>Muhammad Fauzi <div className='flickr'> </div></div>
            <hr></hr>
            <div className='Messages'>
                <div className='Messages1__image image__id3'></div> 
                <div className='Messages1'> Hi, how are you? </div>
            </div>
            <div>
                <div className='Messages2__image'></div>
                <div className='Messages2'> Hello, i'm fine, and you? </div>
            </div>
            <div>
                <div className='Messages1__image image__id3'></div>
                <div className='Message__id3'> i'm too. Thank you. What are you doing? </div>
            </div>
            <div>
                <div className='Messages2__image'></div>
                <div className='Message__id4'> I'm going to date a girl in the evening. Getting ready. </div>
            </div>
            <div>
                <div className='Messages1__image image__id3'></div>
                <div className='Message__id5'> it's a pity. I wanted us to go to a bar together in the evening :( </div>
            </div>
        </div>
    );
};

export default Chat3;
