import React from 'react';

const Logo = (props) => {

    return <div className="tags col-lg-3 col-md-3 col-sm-3 col-4" gloss={props.name}>
        <i className="i i-mobile" style={props.style}></i>
    </div>
}

export default Logo