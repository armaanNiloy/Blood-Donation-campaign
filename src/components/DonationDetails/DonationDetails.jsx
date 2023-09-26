import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../../utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idx = parseInt(id);
    const donation = donations.find(donation => donation.id === idx);
    const { picture, description, card_bg, title, category_bg, text_button_bg, price } = donation;
    console.log(text_button_bg);

    const handleDonation = () => {
        const flag = saveDonation(idx);
        if (flag) {
            notifya();
        }
        else {
            notifyb();
        }
    }
    const notifya = () => toast.success('Successfully added', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyb = () => toast.warn('Already added!!!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return (
        <div className="mx-40 mt-10">
            <div>
                <img className="w-full h-1/2" src={picture} alt="" />
            </div>
            <button onClick={handleDonation} className="text-3xl px-6 py-4 rounded-lg font-extrabold text-white absolute -bottom-10 left-52" style={{ backgroundColor: text_button_bg }}>Donate ${price}</button>
            <div className="mt-10">
                <h2 className="text-5xl font-extrabold">{title}</h2>
                <p className="text-base font-medium text-justify mt-10 mb-36">{description}</p>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default DonationDetails;