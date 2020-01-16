import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='container'>
                    <Link className='header__item' to='/'>
                        Главная
                    </Link>
                    <Link className='header__item' to='/orders'>
                        Заказы
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header;