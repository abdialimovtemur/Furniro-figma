import React, { useEffect, useState } from 'react'
import { useAxios } from '../../../../hooks/useAxios'

const Furnuture = () => {
    const { getData } = useAxios()
    const [path, setPath] = useState()

    useEffect(() => {
        getData("funiro").then(res => setPath(res))
    }, [])


    return (
        <div className='mt-20'>
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

export default Furnuture