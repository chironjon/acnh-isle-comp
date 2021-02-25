import React from 'react';

import './footer.styles.scss';

const Footer = () => (
  <footer className='footer'>
    <div className='footer-content'>
      <p>My Isle Compendium claims no ownership of any intellectual property associated with Nintendo or the Animal Crossing series.</p>
      <p>Just a fan-site! for the love!</p>
      <p>Thank you to the wonderful people at the ANCH Google Data Spreadsheet</p>
      <div id="credits">
        <p>Data People -->
        <a href="https://discord.gg/8jNFHxG"> Discord </a>
        <a href='https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit#gid=1012424893'>Spreadsheet </a></p>
        <p>Me -->
        <a href="https://cash.app/$ChironJon"> CashApp </a>
        <a href="https://www.venmo.com/ChironJon">Venmo </a></p>     
      </div>
    </div>
  </footer>
);

export default Footer;