import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import './Sidebar.css';

class Sidebar extends Component {
  state = {
    date: new Date(),
    BtnClick: document.querySelector("react-calendar__month-view__days"),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className='Sidebar'>
        <div className='Title'>
          My Agenda
        </div>
        <hr></hr>
        <div className='Date'>
          <DatePicker
            onChange={this.onChange}
            value={this.state.date}
          />
          <hr className='Hr1'></hr>
        </div>
        <div>
          <span>
          </span>
        </div>
        <div className='AddEvent'>
          <button className='AddButton'> + ADD NEW AGENDA  </button>
        </div>
      </div>
    );
  }
}


export default Sidebar;