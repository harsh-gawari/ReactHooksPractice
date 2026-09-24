import { useContext } from "react"
import { userContext } from "./ParentCom";

function UsecontextPractice() {

    const name = useContext(userContext);

    return (
        // what  is useContext hook
        // useContext hook are used to send data in different components without props driling.

        // steps 
        // step 1:create usecontext in parent component 
        // const userContext  = createContext()
        // step 2:set value and provide
        // const name  ="harsh";
        // step 3:Provide the value to child component
        // <userContext.provider value ={name }>  </childA>    </userContext.provider>
        // step 4:use the value in child component
        // st1 : import userContext 
        // import {userContext} from ./Parent.jsx   
        // const name  =useContext(userContext)
        <div>

            <h1>hello  I am  child component </h1>
            <h3>
                My name is :{name}
            </h3>
        </div>
    )
}

export default UsecontextPractice