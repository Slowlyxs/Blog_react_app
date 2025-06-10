import React, { useState } from 'react';
import { CartContext } from './CartContext';
import CartView from './CartView';

export default function App() {
  const [items, setItems] = useState([]);
  const addItem = (item:any) => setItems(prev => [...prev, item]);
  const removeItem = (id:any) => setItems(prev => prev.filter(i => i.id !== id));

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      <CartView />
    </CartContext.Provider>
  );
}