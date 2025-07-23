import React from 'react'
import Banner from '../components/Banner'
import { House, HouseList } from '../components/House'

function Home() {
  return (
    <div className='bg-blue-400'>
       <Banner />
       <HouseList />
    </div>
  )
}

export default Home