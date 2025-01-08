import React from 'react'

const ContentContainer = ({children}:any) => {
  return (
    <div className="custome-container bg-[#e5e8eb] flex flex-wrap p-5 rounded-md gap-3">
      
        {children}
    </div>
  )
}

export default ContentContainer