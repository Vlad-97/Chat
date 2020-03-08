import React from 'react';
import Chats from './Chat/Chats';
import Chat3 from '../Content/Chat3/Chat3';
import Chat2 from '../Content/Chat2/Chat2';
import Chat1 from '../Content/Chat1/Chat1';
import Sidebar from './Sidebar';
import './Container.css';
import { BrowserRouter, Route } from 'react-router-dom';


const Container = () => {
    return (
        <BrowserRouter>
            <div className='Container'>
                <div> <Chats /></div>
                <div>
                    <Route path='/chat1' component={Chat1} />
                    <Route path='/chat2' component={Chat2} />
                    <Route path='/chat3' component={Chat3} />
                </div>
                <div className='Container__sidebar'> <Sidebar /> </div>
            </div>
        </BrowserRouter>
    );
}

export default Container;