import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these options!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/img-1.jpg'
                        text='Screen and battery replacement'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-3.jpg'
                        text='iPhone'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Choose from the different devices'
                       
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-8.jpg'
                        text='Samsung'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
   );
}

export default Cards;