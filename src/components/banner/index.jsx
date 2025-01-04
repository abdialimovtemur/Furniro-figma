import React, { useEffect, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';

const Banner = () => {
    const { getData } = useAxios();
    const [path, setPath] = useState("");

    useEffect(() => {
        getData("hero")
            .then(res => setPath(res[0]?.image || ""))
            .catch(error => console.error("Error fetching data:", error));
    }, [getData]);


    return (
        <div className='w-full max-w-[1440px] mx-auto mt-7'>
            <img className='w-full' src={path} alt="" />
        </div>
    );
};

export default Banner;
