// components/DaisyCard.tsx
import React from 'react';

export const DaisyCard: React.FC = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://marcistore.mx/wp-content/uploads/2021/12/Pin-Ajolote.webp" alt="ajolote" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Ajolote Prehistorico</h2>
        <p>Una tarjeta con diseño limpio usando DaisyUI.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Adoptar</button>
        </div>
      </div>
    </div>
  );
};