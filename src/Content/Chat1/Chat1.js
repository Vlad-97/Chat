import React from 'react';
import '../style.css';
import './Chat1.css';


const Chat1 = () => {
    let state = {
        posts: [
            { id: 1, message: 'Can you send an email?' },
            { id: 2, message: 'ok, but only tomorrow I can.' },
            { id: 3, message: 'before in any way?' },
            { id: 4, message: 'maybe at night if I’m at home.))' },
            { id: 5, message: 'ok. I wil wait!!' },
        ],
    } 
    return (
        <div className='Content'>
            <div className='Content__user'> Fikri Ruslandi <div className='flickr'> </div></div>
            <hr></hr>
            <div className='Messages'>
                <div className='Messages1__image image__id1'></div>
                <div className='Messages1'> Can you send an email? </div>
            </div>
            <div>
                <div className='Messages2__image'></div>
                <div className='Messages2'> ok, but only tomorrow I can. </div>
            </div>
            <div>
                <div className='Messages1__image image__id1'></div>
                <div className='Messages3'> before in any way? </div>
            </div>
            <div>
                <div className='Messages2__image'></div>
                <div className='Msg__id4'> maybe at night if I’m at home.)) </div>
            </div>
            <div>
                <div className='Messages1__image image__id1'></div>
                <div className='Messages5'> ok. I wil wait!! </div>
            </div>
        </div>
    );
};

export default Chat1;