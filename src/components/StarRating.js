import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function StarRating(props) {
    const {rating} = props;
    return (
        <div>
                    <Rating name="disabled" value={rating} disabled />
        </div>
    );
}

export default StarRating;