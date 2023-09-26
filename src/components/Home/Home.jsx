import { useLoaderData } from "react-router-dom";

import DonationCard from "../DonationCard/DonationCard";


const Home = () => {
    const donations = useLoaderData();

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl font-bold mt-10">I Grow By Helping People In Need</h2>
                <input className="mt-10 rounded-l-lg p-2 outline-none" type="text" /><button className="rounded-r-lg bg-red-500 text-white p-2">Search</button>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-10 mx-20">
                {
                    donations.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;