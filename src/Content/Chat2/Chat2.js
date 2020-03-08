import React from 'react';
import '../style.css';
import './Chat2.css';

const Chat2 = () => {
    return (
        <div className='Content'>
            <div className='Content__user'> Moch Ramdhani <div className='flickr'> </div></div>
            <hr></hr>
            <div className='Messages'>
                <div className='Messages1__imagen image__id2'></div>
                <div className='Mess__id1'> Hello. </div>
            </div>
            <div>
                <div className='Messages2__image'></div>
                <div className='Mess__id2'> Good morning :) </div>
            </div>
            <div>
                <div className='Messages1__image image__id2'></div>
                <div className='Mess__id3'> How are you ?? </div>
            </div>
        </div>
    );
};

export default Chat2;