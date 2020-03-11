import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Video Game Jukebox
            </Link>
            <div className="right menu">
                <Link to="/games/all" className="item">
                    All Games
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
};

export default Header;