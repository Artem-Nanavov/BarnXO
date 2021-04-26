import React from 'react';
import styles from './styles.scss';

const Header = () => {
  return (
    <header className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.header__content}>
          <ul>
            <li>Commercial</li>
            <li></li>
            <li>Showroom</li>
            <li></li>
            <li>Contact us</li>
          </ul>

          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <nav></nav>      
    </header>
  );
};

export default Header;
