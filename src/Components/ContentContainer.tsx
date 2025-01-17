'use client';
import React from 'react';

const ContentContainer = ({
  children,
  design,
}: {
  children: React.ReactNode;
  design: string | null;
}) => {
  const contentContainerDesign =
    'bg-[#e5e8eb] flex flex-wrap p-5 rounded-md gap-3';

  return (
    <div className={design ? `${design} ` : contentContainerDesign}>
      {children}
    </div>
  );
};

export default ContentContainer;
