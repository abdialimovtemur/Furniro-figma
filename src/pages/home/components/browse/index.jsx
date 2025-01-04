import React, { useEffect, useState } from 'react'
import { useAxios } from '../../../../hooks/useAxios'

const Browse = () => {
    const { getData } = useAxios()
    const [path, setPath] = useState()

    useEffect(() => {
        getData("browse").then(res => setPath(res))
    }, [])


    return (
        <div className='mt-20'>
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-extrabold'>Browse The Range</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='flex justify-between mt-20'>

                {
                    path?.map((item,index) => (
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

export default Browse