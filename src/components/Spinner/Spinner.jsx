import React from 'react';
import { ClipLoader } from 'react-spinners';
import { StyledSpinner } from './styled';

export const Spinner = props => {
    const { loading } = props;
    return (
        <div>
            {loading && 
            <StyledSpinner>
                <ClipLoader size='50'
                color='#009EE3'
                loading={loading} />
            </StyledSpinner>}
        </div>
    )
}

export default Spinner;