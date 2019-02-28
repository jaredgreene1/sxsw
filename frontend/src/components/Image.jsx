import React from 'react';


export const Image = props => {
  const { imageTitle } = props



  return (
    <div className="image">
      <img src={process.env.PUBLIC_URL + imageTitle} alt='no image' />
    </div>
  )
}
      
