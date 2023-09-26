import React from 'react';

const SaveDonationCard = ({ donation }) => {
    const { picture, category, card_bg, title, category_bg, text_button_bg, id, price } = donation;
    return (
        <div style={{backgroundColor: card_bg}} className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Album" /></figure>
            <div className="card-body">
                <button style={{backgroundColor: category_bg}} className='p-2 w-[100px] rounded-md'>{category}</button>
                <h2 style={{color: text_button_bg}} className="card-title">{title}</h2>
                <p>${price}</p>
                <div className="card-actions">
                    <button style={{backgroundColor: text_button_bg}} className="btn text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SaveDonationCard;