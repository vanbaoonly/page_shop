import React from 'react';
import { Helmet } from 'react-helmet';
const ChangeTitle = ({ Title }) => {
    return (
        <div>
            <Helmet>
                <title>{Title}</title>
            </Helmet>
        </div>
    );
};

export default ChangeTitle;