import React from 'react';
import { UserContext } from './UserContext';
import Profile from './Profile';

const user = {
  name: 'Francisco Higuera',
  email: 'francisco@example.com',
  role: 'admin'
};

export default function App() {
  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}