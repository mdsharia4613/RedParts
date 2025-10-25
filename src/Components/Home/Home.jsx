
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Services from '../Services/Services';
import servicesData from "../../../public/services.json"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services servicesData={servicesData}></Services>
            <Cards></Cards>
        </div>
    )
};

export default Home;