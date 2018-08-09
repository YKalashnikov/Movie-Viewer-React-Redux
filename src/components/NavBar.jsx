import React from 'react';

 class NavBar extends React.Component {
  render() {
    return(
      <nav>
        <ul className="navbar">
        <li><a href="tel:6177748786/"  rel="noopener noreferrer">Call Us</a></li>
        <li><a href="mailto:uk2709@gmail.com/"  rel="noopener noreferrer">Email Us</a></li>
          <li><a href="https://www.google.com/maps/@32.6881619,-117.1926621,3a,62.8y,282.09h,90t/data=!3m9!1e1!3m7!1splOuMsXYTZUD8_-C2pEDhw!2e0!7i13312!8i6656!9m2!1b1!2i50" target="_blank" rel="noopener noreferrer">Get Direction</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;