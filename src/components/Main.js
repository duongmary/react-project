import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';

function Main() {
    return (
        <div className="main-container">
            <h1>HOW CAN WE HELP?</h1>
            <p>Need a new phone or repair?</p>
            <div className='main-btns'>
                <Button 
                  className='btns' 
                  buttonStyle='btn--outline' 
                  buttonSize='btn--large'
                  >
                   GET STARTED
                </Button>
                <Button
                 className='btns' 
                 buttonStyle='btn--primary' 
                 buttonSize='btn--large'
                >
                   WATCH ME <i className='far fa-play-cirlce' />
                </Button>
            </div>
        </div>
    );
}

export default Main;