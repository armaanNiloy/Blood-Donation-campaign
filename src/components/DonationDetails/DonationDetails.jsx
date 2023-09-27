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
        <div className="mx-5 md:mx-14 lg:mx-40 mt-10">
            <div className="w-full">
                <img className="w-fit md:w-full h-1/2" src={picture} alt="" />
                <div className="relative">
                    <div className="bg-[#0B0B0B80] opacity-50 absolute bottom-0 h-10 md:h-16 lg:h-32 w-full">
                        <h6></h6>
                    </div>
                    <div>
                        <div className="w-full h-32 absolute -bottom-11 md:-bottom-7 lg:bottom-2 left-6 lg:left-14 flex items-center">
                            <button onClick={handleDonation} className="text-lg lg:text-3xl px-2 lg:px-6 py-1 lg:py-4 rounded-lg font-medium lg:font-extrabold text-white" style={{ backgroundColor: text_button_bg }}>Donate ${price}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-xl md:text-5xl font-extrabold text-black">{title}</h2>
                <p className="text-xs md:text-base font-medium text-justify mt-10 mb-36">{description}</p>
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