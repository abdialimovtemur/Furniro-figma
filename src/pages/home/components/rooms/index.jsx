import React, { useEffect, useState } from 'react'
import { useAxios } from '../../../../hooks/useAxios'

const Rooms = () => {
    const { getData } = useAxios()
    const [path, setPath] = useState()

    useEffect(() => {
        getData("bRooms").then(res => setPath(res))
    }, [])


    return (
        <div className='mt-20 flex justify-between items-center'>
            <div className='flex flex-col gap-12'>
                <h1 className='font-bold text-5xl'>50+ Beautiful rooms
                    inspiration</h1>
                <p className='text-xl'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            </div>
            <div className='flex justify-between mt-20 gap-12'>

                {
                    path?.map((item, index) => (
                        <div className='flex flex-col items-center gap-3 font-bold text-xl' key={index}>
                            <img src={item.image} alt="" />
                            <h1>{item.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Rooms