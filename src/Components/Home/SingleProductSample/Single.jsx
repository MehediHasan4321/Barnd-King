import React from 'react';

const Single = ({sample}) => {
    console.log(sample)
    return (
        <div className='w-[350px] bg-white p-4 relative'>
            <h1 className='text-xl font-semibold mb-2'>{sample.title}</h1>
            <img className='py-4 mb-6' src={sample.imgUrl} alt="" />
            <small className=' absolute bottom-4 cursor-pointer hover:text-purple-400'>{sample.tag}</small>
        </div>
    );
};

export default Single;