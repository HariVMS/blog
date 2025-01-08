import React from 'react'

const HomeContainer = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="home-container bg-slate-50 h-full p-4" >
      {children}
    </div>
  )
}

export default HomeContainer