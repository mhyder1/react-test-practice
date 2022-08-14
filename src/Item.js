import React, { useState } from 'react';

export default function Item({ item }) {
  const [active, setActive] = useState(false);
  return (
    <>
      <div onClick={() => setActive(!active)}>{item}</div>
      {active && <p>content to be hidden or displayed</p>}
    </>
  );
}
