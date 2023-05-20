import React from 'react';

import { housesData } from '../data';

import { useParams } from 'react-router-dom';

import { BiBed, BiBath, BiArea } from 'react-icons/bi';

import { Link } from 'react-router-dom';


const PropertyDetails = () => {
  const  { id }  = useParams();

const house = housesData.find((house) => {

  return house.id === parseInt(id); 
});

  console.log(house);
  return (
  <section>
    <div className='container mx-auto min-h-[800px] mb-14'>
    <div className='flex flex-col lg:flew-row lg:items-center 
    lg:justify-between'>
      <div>
        <h2 className='text-2xl font-semibold'>
          {house.name}</h2>
        <h3 className='text-lg mb-4'>
          {house.address}</h3>
      </div>
      <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
        <div className='bg-green-500 text-white 
        px-3 rounded-full'>
          {house.type}</div>
        <div className='bg-blue-500 text-white
        px-3 rounded-full'>{house.country}</div>
      </div>
      <div className='text-3xl font-semibold text-blue-600'>$ {house.price}</div>
      </div>
      <div className='flex flex-col items-start 
      gap-8 lg:flex-row'>
        <div className='mx-w-[768px]'>
        <div className='mb-8'>
          <img src={house.imageLg} alt='' />
        </div>
        <div className='flex gap-x-6 text-blue-700 mb-6'>
          <div className='flex gpa-x-2 items-center'>
            <BiBed className='text-2xl'/>
            <div>{house.bedrooms}</div>
          </div>
          <div className='flex gpa-x-2 items-center'> 
            <BiBath className='text-2xl'/>
            <div>{house.bathrooms}</div>
          </div>
          <div className='flex gpa-x-2 items-center'>
            <BiArea className='text-2xl'/>
            <div>{house.surface}</div>
          </div>
        </div>
        <div>{house.description}</div>
        </div>
        <div className='flex-1 bg-white 
        w-full mb-8 border border-gray-300 rounded-lg 
        px-6 py-8'>
          <div className='flex items-center 
          gap-x-4 mb-8'>
          <div className='w-20 h-20 p-1 border border-gray-300 
          rounded-full'>
            <img src={house.agent.image} alt=''/>
          </div>
          <div>
            <div className='font-bold text-lg'>{house.agent.name}</div>
            <Link to='' className ='text-blue-700 text-sm'>
              View Lisitngs
              </Link>
            </div>
          </div>
          <from className='flex flex-col gap-y-4'>
            <input className='border border-gray-300 
            focus:border-blue-700 outline-none
            rounded w-full px-4 h-14 text-sm' type="text" 
            placeholder='Name*'
            />
            <input className='border border-gray-300 
            focus:border-blue-700 outline-none
            rounded w-full px-4 h-14 text-sm' type="text" 
            placeholder='Email*'
            />
            <input className='border border-gray-300 
            focus:border-blue-700 outline-none
            rounded w-full px-4 h-14 text-sm' type="text" 
            placeholder='Phone*'
            />
            <textarea
            className='border border-gray-300 focus:border-blue-700 
            outline-none resize-none rounded w-full p-4 
            h-36 
            text-sm text-gray-400'
            placeholder='Message'
            defaultValue='Hello, I am interested in [Modern apartment]'
            ></textarea>
            <div className='flex gap-x-2'>
              <button 
              className='bg-blue-700 hover:bg-blue-800 text-white rounded 
              p-4 text-sm w-full
              transition'>
                Send message</button>
              <button
              className='border border-blue-700 text-blue-700 
              hover:border-blue-500 
              hover:text-blue-500 rounded p-4 text-sm w-full transition'>
                Call
              </button>
            </div>
          </from>
        </div>
      </div>
    </div>
  </section>
  );

};

export default PropertyDetails;