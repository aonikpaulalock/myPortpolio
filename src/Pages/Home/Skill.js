import React from 'react';

const Skill = ({ skill }) => {
  const { img } = skill;
  return (
    <div className="bg-gray-50 shadow-lg rounded-2xl hover:bg-gray-900 ease-in duration-500 hover:scale-110 hover:translate-x-3">
      <div className='flex justify-center items-center p-6 cursor-pointer'>
        <img src={img} alt="" className='w-28' />
      </div>
    </div>
  );
};

export default Skill;