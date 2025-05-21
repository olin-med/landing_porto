import React from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const PageContainer: React.FC<SectionProps> = ({ id, className = "", children }) => {
  return (
    <section
      id={id}
      className={`flex w-full ${className}`}
    >
      {children}
    </section>
  );
};

export default PageContainer;
