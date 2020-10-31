import React from 'react';

const Spinner = ({children, isLoaded}) => {

    if (!isLoaded) {
        return 'loading'
    }


    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};

export default Spinner;
