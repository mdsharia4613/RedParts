import Service from "../Service/Service";

const Services = ({ servicesData }) => {
   
    
    return (
       <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center">
                {
                    servicesData?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
       </div>
    );
}; 

export default Services;