import React from 'react'
import { useAuth0 } from '@autj/auth0-react'

const modalLogin=()=>{
    const {user} =useAuth0();
    return(
        <div>
            <h2>
                Hello {user.name}
            </h2>
            <img src={user.picture}/>
        </div>
    )
};

export default modalLogin;