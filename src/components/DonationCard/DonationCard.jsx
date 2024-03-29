import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ donate }) => {
    const { picture, category, card_bg, title, category_bg, text_button_bg, id } = donate;
    console.log('home color', card_bg)
    return (
        <Link to={`/${id}`}>
            <div style={{backgroundColor: card_bg}} className="card shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body h-[200px]">
                    <button style={{backgroundColor: category_bg, color: text_button_bg}} className="rounded-md w-1/2 p-1 text-lg font-semibold">{category}</button>
                    <p style={{color: text_button_bg}} className='text-xl font-semibold'>{title}</p>
                </div>
            </div>
        </Link>
    );
};

DonationCard.propTypes = {
    donate: PropTypes.object,
    picture: PropTypes.string,
    category: PropTypes.string,
    card_bg: PropTypes.string,
    title: PropTypes.string,
    category_bg: PropTypes.string,
    text_button_bg: PropTypes.string,
    id: PropTypes.number
}
export default DonationCard;