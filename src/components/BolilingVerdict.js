import React from 'react';

function BoilingVerdict(props){
    if(props.temp>=100)
        return <div>The Water would Boil</div>
    else
        return <div>The water would not boil.</div>
}

export default BoilingVerdict;