import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";
import { useState } from "react";


const Home = () => {
    const donations = useLoaderData();
    const [displayDonation, setDisplayDonation] = useState(donations);

    const handleDonationFilter = e => {
        e.preventDefault();
        const box_value = e.target.name.value;
        if (box_value === 'Education') {
            const selectedDonation = donations.filter(donate => donate.category === box_value);
            setDisplayDonation(selectedDonation);
        }
        else if (box_value === 'Health') {
            const selectedDonation = donations.filter(donate => donate.category === box_value);
            setDisplayDonation(selectedDonation);
        }
        else if (box_value === 'Food') {
            const selectedDonation = donations.filter(donate => donate.category === box_value);
            setDisplayDonation(selectedDonation);
        }
        else if (box_value === 'Clothing') {
            const selectedDonation = donations.filter(donate => donate.category === box_value);
            setDisplayDonation(selectedDonation);
        }
    }

    return (
        <div>
            <div className="relative">
                <h2 className="text-base md:text-3xl lg:text-5xl font-bold absolute mt-10 md:mt-40 lg:mt-60 ml-5 md:ml-24 lg:ml-44 text-center">I Grow By Helping People In Need</h2>
            </div>
            <div>
                <img className="opacity-30 md:h-1/2 w-fit md:w-full" src="/public/backimg.jpeg" alt="" />
            </div>
            <div className="relative">
                <form className="absolute -mt-28 md:-mt-52 lg:-mt-96 ml-6 md:ml-36 lg:ml-96 flex" onSubmit={handleDonationFilter}>
                    <input className="rounded-l-lg p-2 outline-none" type="text" name="name" />
                    <input className="rounded-r-lg bg-red-500 text-white p-2" type="submit" value="Search" />
                </form>
            </div>
            {/* <div className="text-center">
                <h2 className="text-5xl font-bold mt-10">I Grow By Helping People In Need</h2>
                <form onSubmit={handleDonationFilter}>
                    <input className="mt-10 rounded-l-lg p-2 outline-none" type="text" name="name" />
                    <input className="rounded-r-lg bg-red-500 text-white p-2" type="submit" value="Search" />
                </form>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mx-8 lg:mx-20">
                {
                    displayDonation.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;