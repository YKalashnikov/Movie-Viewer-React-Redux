import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
//import logo from '../logo.svg';
import './Header.css';

 class Header extends React.Component {
  render() {
    return(
      <header>
        <Link to={'/'}><h1>Watch a Movie</h1></Link>
        <NavBar />
      </header>
    );
  }
}
export default Header;