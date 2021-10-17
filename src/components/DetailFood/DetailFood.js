import React from 'react';
import { useParams } from 'react-router';

const DetailFood = () => {
    const { foodId } = useParams()
    return (
        <div>
            <h1>Detail Foods {foodId}</h1>
        </div>
    );
};

export default DetailFood;