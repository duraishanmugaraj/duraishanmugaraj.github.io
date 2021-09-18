import React from 'react';
import LottieAnimation from './Lottie';
import home from './whatidoAnimi.json';
import "./wido.css"

const WhatidoAnimi = () => {

    return (
        <div className="animi">
            <LottieAnimation lotti={home} height={450} width={410} />
        </div>
    )
}

export default WhatidoAnimi;