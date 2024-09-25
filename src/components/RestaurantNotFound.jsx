import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="rounded-xl shadow-2xl border-none shadow-gray-600 bg-red-600 flex-col p-16 mx-auto mt-10 border-2 w-80">
            <p className="font-bold">Restaurant Not Found</p>
        </div>
    );
};

export default RestaurantNotFound;
