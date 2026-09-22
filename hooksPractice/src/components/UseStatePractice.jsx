import React, { useState } from 'react'
import "./UseState.css";
function UseStatePractice() {

    const [value, setValue] = useState(0);


    return (

        // what is hooks 
        // hooks are Speacial  function in functional components in react 
        // usestate hook
        // useeffect hook

        // what  is State
        // state is variables that  store data and change overtime 
        // state change rerender atomatically referesh the page and update the values 

        // what is useState hooks
        // usestate hooks which  manages the state in react  components 



        <>
            <div className='box'>
                <div className='inc-num'>{value}</div>
                <div className='button-box'>
                    <button onClick={() => setValue(value + 1)}>Increase</button>
                    <button onClick={() => setValue(value - 1)}>Decrease</button>
                    <button onClick={() => setValue(0)}>Reset</button>
                </div>
            </div>

        </>
    )
}

export default UseStatePractice