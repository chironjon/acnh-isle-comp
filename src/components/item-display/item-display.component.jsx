import React from 'react';

import './item-display.styles.scss';

const ItemDisplay = ({ collection }) => {
  <div>
    {collection.map(x => (
      <div>{x}</div>
    ))}
  </div>
};

export default ItemDisplay;