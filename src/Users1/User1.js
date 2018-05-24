import React from 'react';


    const User1 = (props) =>{

        let age = props.age ? props.age : 'NA';
        return (
            <div>
                {props.children} | {age}
                </div>
        )
    }

    export default User1;