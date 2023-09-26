import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import SaveDonationCard from "../SaveDonationCard/SaveDonationCard";

const SaveDonation = () => {
    const donations = useLoaderData();
    const [appliedDonation, setAppliedDonation] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    const handleDonationFilter = () =>{
        setDataLength(appliedDonation.length);
    }

    useEffect(() => {
        const storedDonationId = getStoredDonation();
        const donationApplied = donations.filter(donation => storedDonationId.includes(donation.id));
        setAppliedDonation(donationApplied);
    }, [donations])


    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-40">
                {
                    appliedDonation.slice(0, dataLength).map(donation => <SaveDonationCard key={donation.id} donation={donation}></SaveDonationCard>)
                }
            </div>
            <div className={`flex justify-center items-center mt-10 ${dataLength === appliedDonation.length ? 'hidden' : ''}`}>
                <button onClick={handleDonationFilter} className={`bg-[#009444] text-white text-xl rounded-md p-5 font-bold ${appliedDonation.length > 4 ? '' : 'hidden'}`}>See All</button>
            </div>
        </div>
    );
};

export default SaveDonation;