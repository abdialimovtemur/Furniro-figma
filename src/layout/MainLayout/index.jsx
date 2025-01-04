import React from 'react'
import Header from '../header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'

const MainLayout = () => {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main className='max-w-[1440px] mx-auto w-[95%] mt-12 items-center'>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}

export default MainLayout