/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const SaveDonationCard = ({ donation }) => {
    const { picture, category, card_bg, title, category_bg, text_button_bg, id, price } = donation;
    return (
        <div style={{ backgroundColor: card_bg }} className="card lg:card-side shadow-xl mt-10">
            <figure className='max-w-fit'><img className='w-full h-full' src={picture} alt="Album" /></figure>
            <div className="card-body">
                <button style={{ backgroundColor: category_bg, color: text_button_bg }} className='p-2 w-[100px] rounded-md text-sm font-normal'>{category}</button>
                <h2 className="text-black text-2xl font-semibold">{title}</h2>
                <p style={{color: text_button_bg}} className='font-semibold'>${price}</p>
                <div className="card-actions">
                    <Link to={`/${id}`}>
                        <button style={{ backgroundColor: text_button_bg }} className="btn text-white font-semibold text-lg">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SaveDonationCard;