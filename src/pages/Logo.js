import React from 'react';
import { Icon } from '@iconify/react';

const Logo = (props) => {
    return <div className="tags col-lg-3 col-md-3 col-sm-3 col-4 i" gloss={props.name}>
        <Icon key={props.key} icon={props.className} width={70} height={70} />
    </div>
}

export default Logo