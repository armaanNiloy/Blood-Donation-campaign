import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const idx = parseInt(id);
    const donation = donations.find(donation => donation.id === idx);
    const { picture, description, card_bg, title, category_bg, text_button_bg} = donation;
    return (
        <div className="mx-40 mt-10">
            <div>
                <img className="w-full h-1/2" src={picture} alt="" />
            </div>
            <div className="mt-10">
                <h2 className="text-5xl font-extrabold">{title}</h2>
                <p className="text-base font-medium text-justify mt-10 mb-36">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;