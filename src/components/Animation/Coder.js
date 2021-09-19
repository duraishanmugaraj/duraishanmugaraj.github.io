import React from 'react';
import LottieAnimation from './Lottie';
import home from './laptop.json';

const Coder = () => {

    return (
        <div>
            <LottieAnimation lotti={home} height={450} width={450} />
        </div>
    )
}

export default Coder;