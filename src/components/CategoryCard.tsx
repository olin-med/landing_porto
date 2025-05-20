import React from "react";

type CategoryCardProps = {
    id?: string;
    className?: string;
    title: string;
    imageUrl: string;
    children?: React.ReactNode;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
    id,
    className = "",
    title,
    imageUrl,
    children,
}) => {
    return (
        <div
            id={id}
            className={`flex flex-col items-start justify-start bg-gray-50 h-full rounded-lg shadow-md ${className}`}
        >
            <img src={imageUrl} alt={title} className="w-90 mb-4 rounded-t-lg" />
            <h2 className="text-xl font-bold px-10">{title}</h2>
            <div className="flex flex-col justify-center py-4 px-8 mb-6">
                {children}
            </div>
            
        </div>
    );
};
export default CategoryCard;