import React, { useState } from 'react';

export default function Item({ item }) {
  const data = {One: 'content 1', Two: 'content 2', Three: 'content 3'}
  const [active, setActive] = useState(false);
  return (
    <>
      <div onClick={() => setActive(!active)}>{item}</div>
      {active && <p>{data[item]}</p>}
    </>
  );
}
