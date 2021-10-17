import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css'

const Food = (props) => {
    const { img, name, price, description, id } = props.food;
    return (

        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p><b>Price: {price}</b></p>
                    <p className="card-text">{description.slice(0, 200)}</p>
                    <Link to={`/foods/${id}`}>
                        <button className="order-btn"><i class="fas fa-shopping-cart"></i> Order</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Food;