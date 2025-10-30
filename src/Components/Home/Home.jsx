
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Services from '../Services/Services';
import servicesData from "../../../public/services.json"
import Offers from '../Offers/Offers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services servicesData={servicesData}></Services>
            <Cards></Cards>
           <Offers></Offers>
            
        </div>
    )
};

export default Home;