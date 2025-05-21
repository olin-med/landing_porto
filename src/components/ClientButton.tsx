import React from "react";
import { GoQuestion } from "react-icons/go";

type ClientButtonProps = {
    link?: string;
};
const ClientButton: React.FC<ClientButtonProps> = ({
    link,
}) => {

    const handleClick = () => {
        window.open(
        link,
        '_blank',
        'noopener,noreferrer'
        );
    };

    return (
        <button
          type="button"
          onClick={handleClick}
          className="flex items-center cursor-pointer bg-[#b69333] hover:bg-[#b6a933] text-white font-bold py-2 px-4 rounded"
        >
          {/* slightly larger, bold icon */}
          Já sou Cliente
          <GoQuestion className="ml-1 text-xl" />
        </button>
      );
}
export default ClientButton;