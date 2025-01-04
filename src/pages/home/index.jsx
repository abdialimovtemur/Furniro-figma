import React from 'react'
import Banner from '../../components/banner'
import Browse from './components/browse'
import OurProducts from '../../components/ourProducts'
import Furnuture from './components/furnuture'
import Rooms from './components/rooms'

const Home = () => {
  return (
    <div>
        <div>
            <Banner/>
            <Browse/>
            <OurProducts/>
            <Rooms/>
            <Furnuture/>
        </div>
    </div>
  )
}

export default Home