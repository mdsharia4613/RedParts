
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Services from '../Services/Services';
import servicesData from "../../../public/services.json"
import PowerTools from '../PowerTools/PowerTools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services servicesData={servicesData}></Services>
            <Cards></Cards>
            <PowerTools></PowerTools>
        </div>
    )
};

export default Home;