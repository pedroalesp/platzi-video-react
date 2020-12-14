/* eslint-disable quotes */
import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.scss';

import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img
        className='header__img'
        src='https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png'
        alt='logo'
      />
    </Link>

    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='User' />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <Link to='/login'>Iniciar Sesión</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
