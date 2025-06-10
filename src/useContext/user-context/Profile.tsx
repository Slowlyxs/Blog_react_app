import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Profile() {
  const { name, email, role } = useContext(UserContext);

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Rol:</strong> {role}</p>
    </div>
  );
}