import React from 'react';
import './Chats.css';
import { NavLink } from 'react-router-dom';

const Chats = () => {
    let newPostElement = React.createRef();

    let addpost = () => {
        let text = newPostElement.current.value;
        alert ('barev')
    } 

    return (
        <div>
            <div className='Chats'>
                <div>
                    <button type='button' className='Chat'> Chat </button>
                    <button type='button' className='New'> New </button>
                </div>
                <hr></hr>
                <div className='Messenger__chats'>
                    <div className='image1'></div>
                    <NavLink to='/chat1' className='Chat__info'>
                        <h3> Fikri Ruslandi </h3>
                        <p>lorem ipsum...</p>
                    </NavLink>
                </div >
                <div className='Messenger__chats'>
                    <div className='image2'></div>
                    <NavLink to='/chat2' className='Chat__info'>
                        <h3>Moch Ramdhani</h3>
                        <p>lorem ipsum...</p>
                    </NavLink>
                </div>
                <div className='Messenger__chats'>
                    <div className='image3'></div>
                    <NavLink to='/chat3' className='Chat__info'>
                        <h3> Muhammad Fauzi </h3>
                        <p>is typing a message...</p>
                    </NavLink>
                </div>
                <div className='Content'>
                    <div className='Send__message'>
                        <div>
                            <textarea ref={ newPostElement } placeholder="Type your message..."></textarea>
                            <button type='button' className='File__message'></button>
                            <button type='button' className='Send__button' onClick = { addpost }></button>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    );
};

export default Chats;