import React from 'react';
import LottieAnimation from './Lottie';
import home from './animi.json';

const Coder = () => {

    return (
        <div className='coder'>
            <LottieAnimation lotti={home} height={500} width={500} />
        </div>
    )
}

export default Coder;