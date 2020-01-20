import React from 'react';

import ReactLogo from '../../assets/images/reactlogo.png'
import ElectronLogo from '../../assets/images/electronlogo.png'

import './index.css'

export default function Logo() {
  return (
      <div class="container">
        <div class="logo-container">
            <img src={ReactLogo} alt="React logo"/>
        </div>
        <div class="logo-container">
            <img src={ElectronLogo} alt="Electron logo" />
        </div>
      </div>
  );
}
