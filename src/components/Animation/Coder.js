import React, { useState, useEffect } from 'react';
import LottieAnimation from './Lottie';
import home from './animi.json';

const Coder = () => {
    const [mobile, setMobile] = useState(500)

    const handleResize = () => {
        if (window.innerWidth < 500) {
            setMobile(400)
        } else {
            setMobile(500)
        }
    }


    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <div className='coder'>
            <LottieAnimation lotti={home} height={mobile} width={mobile} />
        </div>
    )
}

export default Coder;