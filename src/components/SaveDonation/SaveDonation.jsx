import { useLoaderData } from "react-router-dom";


const SaveDonation = () => {
    const donation = useLoaderData();
    return (
        <div>
            <h2>this is save donation</h2>
        </div>
    );
};

export default SaveDonation;