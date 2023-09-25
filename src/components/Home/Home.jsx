import { useLoaderData } from "react-router-dom";
import Bannar from "../Bannar/Bannar";
import DonationCard from "../DonationCard/DonationCard";


const Home = () => {
    const donations = useLoaderData();

    return (
        <div>
            <Bannar></Bannar>
            <div className="grid grid-cols-4 gap-6 mt-10 mx-20">
                {
                    donations.map(donate =><DonationCard key={donate.id} donate={donate}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;