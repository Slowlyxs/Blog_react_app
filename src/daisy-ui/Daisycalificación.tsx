// components/Daisycalificación.tsx
import React from 'react';

export const Daisycalificación: React.FC = () => {
    return <>
        <div className="rating rating-lg">
            <input type="radio" name="rating-10" className="rating-hidden" aria-label="clear" />
            <input type="radio" name="rating-10" className="mask mask-star-2" aria-label="1 star" />
            <input type="radio" name="rating-10" className="mask mask-star-2" aria-label="2 star" defaultChecked />
            <input type="radio" name="rating-10" className="mask mask-star-2" aria-label="3 star" />
            <input type="radio" name="rating-10" className="mask mask-star-2" aria-label="4 star" />
            <input type="radio" name="rating-10" className="mask mask-star-2" aria-label="5 star" />
        </div>
    </>
};