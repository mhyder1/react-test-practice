import React, { useState } from 'react';
import Item from './Item';

export default function App() {
  const [items, setItems] = useState(['One', 'Two', 'Three']);
  return (
    <div>
      {items.map((name) => (
        <Item item={name} />
      ))}
    </div>
  );
}
