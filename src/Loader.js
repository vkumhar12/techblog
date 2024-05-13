import { hatch } from 'ldrs';
import React, { useEffect } from 'react';

const HatchComponent = () => {
    useEffect(() => {
        hatch.register();
    }, []);

    return (

        <l-hatch
            size="28"
            stroke="4"
            speed="3.5"
            color="pink"
        ></l-hatch>
    );
};

export default HatchComponent;
