

const Service = ({ service }) => {

    const { icon, title, text } = service;
    return (
        <div className="bg-stone-200 mb-10 w-72 p-5 mt-6 rounded-2xl">
            <p className="">{icon}</p>
            <h2 className="font-semibold">{title}</h2>
            <p className="text-xs text-gray-500">{text}</p>
        </div>
    );
};

export default Service;