// components/DaisyButton.tsx
import React from 'react';

export const DaisyButton: React.FC = () => {
    return <>
        <button className="btn btn-primary">Aceptar</button>
        <button className="btn btn-primary">One</button>
        <button className="btn btn-secondary">Two</button>
        <button className="btn btn-accent btn-outline">Three</button>;
    </>
};