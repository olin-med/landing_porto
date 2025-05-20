import React from "react";

type InputProps = {
    id?: string;
    className?: string;
    name?: string;
    email?: string;
    phone?: string;
    numberOfLives?: string;
    typeOfPlan?: string;
    placeholder?: string;
    value?: string;
}

const FormField: React.FC<InputProps> = ({
}) => {
    return (
        <div className="flex w-full justify-end">
            <div className="mb-4 w-1/3 bg-gray-200 p-6">
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                />
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                />
                <input
                    type="text"
                    id="numberOfLives"
                    name="numberOfLives"
                    placeholder="Number of Lives"
                    className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                />
                <select
                    id="typeOfPlan"
                    name="typeOfPlan"
                    className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                >
                    <option value="" disabled selected>Select Type of Plan</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="family">Family</option>
                    <option value="business">Business</option>
                </select>
            </div>
        </div>
        
    );
};
export default FormField;