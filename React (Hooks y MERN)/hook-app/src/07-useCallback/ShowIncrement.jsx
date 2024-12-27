import { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
  console.log('Me genere de nuevo lptm');
  return <button onClick={() => increment(5)}>Incrementar</button>;
});

ShowIncrement.displayName = 'ShowIncrement';
