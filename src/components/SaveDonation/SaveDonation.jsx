import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import SaveDonationCard from "../SaveDonationCard/SaveDonationCard";

const SaveDonation = () => {
    const donations = useLoaderData();
    const [appliedDonation, setAppliedDonation] = useState([]);

    useEffect(() => {
        const storedDonationId = getStoredDonation();
        const donationApplied = donations.filter(donation => storedDonationId.includes(donation.id));
        setAppliedDonation(donationApplied);
    }, [donations])

    // console.log(appliedDonation);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-40">
            {
                appliedDonation.map(donation =><SaveDonationCard key={donation.id} donation={donation}></SaveDonationCard>)
            }
        </div>
    );
};

export default SaveDonation;