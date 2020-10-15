import React, { useState } from 'react';

import './style.scss';

const MobileBtn = ({ setOpenScore }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(prev => !prev);
        setOpenScore(prev => !prev);
    };

    return (
        <div className="btn-wrapper" onClick={handleClick}>
            <div className={ `btn ${ open ? 'open' : '' }` }>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
};

export default MobileBtn;
