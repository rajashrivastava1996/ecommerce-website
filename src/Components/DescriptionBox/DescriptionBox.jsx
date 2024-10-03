import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className='descriptionbox-nav-box'>
                    Description
                </div>
                <div className='descriptionbox-nav-box fade'>
                    Reviews (122)
                </div>
            </div>
            <div className='descriptionbox-description'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At fuga perspiciatis corporis esse maxime omnis, sit, beatae cumque facilis, laudantium sunt odio rem ullam vel placeat? Laborum voluptatum repellat libero.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum accusantium fugiat iusto, veniam soluta ipsum vero perspiciatis id minima esse cumque quae dolores nam modi provident, voluptatibus magni consequatur odit?</p>
            </div>
        </div>
    )
}

export default DescriptionBox