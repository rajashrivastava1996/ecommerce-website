import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className='offers'>
            {/* offer left section */}
            <div className="offer-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLER PRODUCT</p>
                <button>Check Now</button>
            </div>

            {/* offer right section */}
            <div className="offer-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers