import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

// Use a similar approach with other framework
// like Vuw or Angular.
export default () => {
  const ref = useRef(null);

  // Called first time the component gets rendered.
  useEffect(() => {
    mount(ref.current);
  });

  return (
    <div ref={ref} />
  );
};