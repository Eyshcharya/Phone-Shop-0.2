import { useSelector } from 'react-redux';
import TestItem from './TestItem';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';

const TestCart = () => {
  return (
    <div>
      <button onClick={() => {}}>Remove last item from LS</button>

      <h2>Test Cart</h2>
      <TestItem />
    </div>
  );
};
export default TestCart;
