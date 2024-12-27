import { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('Me volvi de dibujar');
  return <small>{value}</small>;
});

Small.displayName = 'Small';
