import React from 'react'

const ShoeCard = ({imageURL, changeBigShoeImage, bigShoeImage}) => {
    const handleClick = () => {
        if(bigShoeImage !== imageURL) {
            changeBigShoeImage(imageURL.bigShoe);
    }
}
  return (
    <div className= {`rounded-xl border-2 hover:scale-110 transition-transform duration-300 ease-in-out ${bigShoeImage === imageURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:h-40 sm:w-40 rounded-xl max-sm:p-4'>
        <img src={imageURL.thumbnail} alt="shoe collection" width = {127} height = {103} className='object-contain' />
      </div>
    </div>
  )
}

export default ShoeCard;
