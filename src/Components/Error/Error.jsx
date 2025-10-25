import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl font-bold text-red-600">Oops!</h1>
            <p>Something went wrong 😢</p>
            <p className="text-gray-500">{error.statusText || error.message}</p>
        </div>
    );
};

export default Error;