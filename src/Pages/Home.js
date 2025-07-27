import React from 'react'
import Banner from '../components/Banner'
import { House} from '../components/House'
import HouseList from '../components/HouseList'

function Home() {
  return (
    <div className='bg-grey-300'>
       <Banner />
      <HouseList />
    </div>
  )
}

export default Home