import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {

  const [jokes, setJokes] = useState([]);

  const randomCalls = async () => {
    try {

      const [jResponse] = await axios.all([
        axios.get('https://v2.jokeapi.dev/joke/Any?')
      ])

      setJokes(jResponse.data)

    } catch (error) {

      if (error.response) {
        console.log(error.response.data);
      }
      else if (error.request) {
        console.log('Network Error! Check internet connection');
      }
      else {
        console.log(error.message);
      }

    }
  }

  useEffect(() => {
    randomCalls()
  }, [])

  return (
    <>
      <div className='lg:pe-11 lg:mx-8'>
        <div className='flex justify-between md:mb-5'>
          <h5>Random Jokes</h5>
          <NavLink className='viewMore' to='/jokes'>
            view more
            <FontAwesomeIcon className='ms-2 arrRt transition-all duration-300' icon={faArrowRight} />
          </NavLink>
        </div>
        <div className="card bg-secondary p-4 rounded-lg w-60 h-52 flex flex-col items-center">
          <div className='flex'>
            <p className='text-sm'>category: &nbsp;</p>
            <h4 className='font-semibold'>General</h4>
          </div>
          <div className='text-sm mt-8'>
            <p>This is a joke line</p>
            <p className='font-semibold'>This is a answer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home