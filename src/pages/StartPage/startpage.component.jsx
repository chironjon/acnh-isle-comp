import React from 'react';

import './startpage.styles.scss';

const StartPage = () => (
  <div className='startpage'>
    <div>
      <div className='title'>
        <h2>Welcome!</h2>
      </div>
      <div className='text'>
        <h3>Updates:</h3>
        <p>(Includes v1.9.0 items and characters)</p>
        <p>Catalog - can view all items. (3 missing img)</p>
        <p>Villagers - can view all NPCs/Villagers (missing some NPC img)</p>
      </div>
      <div className='text'>
        <h3>Coming:</h3>
        <p>all pages - Sorting, Searching, Filtering</p>
        <p>all pages - Info on item cards and details on click</p>
        <p>Tool - Critter Availability</p>
        <p>account - lists(favorites, own, custom, etc..), </p>
      </div>
    </div>
  </div>
)

export default StartPage;