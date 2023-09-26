const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donations');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}


const saveDonation = id =>{
    const storedDonation = getStoredDonation();
    const exists = storedDonation.find(donate => donate === id);
    if(!exists){
        storedDonation.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonation))
        return true;
    }
    else return false;
}

export { getStoredDonation, saveDonation}