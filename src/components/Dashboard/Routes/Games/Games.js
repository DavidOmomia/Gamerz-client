import React from 'react';

import whot from '../../../../assets/images/dashboard/whot.jpg';
import Ludo from '../../../../assets/images/dashboard/ludo.jpg';
import scrabble from '../../../../assets/images/dashboard/card.jpg';
import chess from '../../../../assets/images/dashboard/chess.jpg';
import draft from '../../../../assets/images/dashboard/check.jpg';
import solitaire from '../../../../assets/images/dashboard/solitaire.jpg';
import './Games.scss'

const Games = props => {
    const games = [
        {id:1, name: 'Whot', imageUrl: whot },
        {id:2, name: 'Ludo', imageUrl: Ludo },
        {id:3, name: 'Scrabble', imageUrl: scrabble },
        {id:4, name: 'Chess', imageUrl: chess },
        {id:5, name: 'Draft', imageUrl: draft },
        {id:6, name: 'Solitaire', imageUrl: solitaire }
    ];

    return (
        <section className='games-section'>
            <h2>Show em what you got!!!!!</h2>
            <div className='game-container'>
                {games.map(item=>(
                    <div key={item.id} className='item'>
                       <div className='img'><img src={item.imageUrl} alt={item.name}/> <div className='overlay'><div className='overlay-btn'>PLAY</div></div></div>
                      
                       <div className='img-info'>{item.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Games;
