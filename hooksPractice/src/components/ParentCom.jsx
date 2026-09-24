import React, { createContext, useState } from 'react'
import UsecontextPractice from './UsecontextPractice'

export const userContext = createContext();
function ParentCom() {

    const [name, setname] = useState("Harsh -Gawari");

    return (

        <userContext.Provider value={name}>
            <UsecontextPractice />
        </userContext.Provider>


    )
}

export default ParentCom
