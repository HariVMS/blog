import React from 'react';
import HomeContainer from '@/Components/HomeContainer';
import NavBar from '@/Components/NavBar';

const dashBoard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="main-container h-lvh flex flex-col">
        <NavBar />
        <HomeContainer>{children}</HomeContainer>
      </div>
    </>
  );
};

export default dashBoard;
