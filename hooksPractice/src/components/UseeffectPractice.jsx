import React, { useEffect, useState } from 'react'

function UseeffectPractice() {

    // what is useEffect hook
    // useeffect is hook  which are used to sideeffect means used to side Api call
    // mostly used to call backend api and fetch the data from backend server and display in frontend
    // useEffect(() => {
    //     // console.log("hello world");
    //     axios.get("http//localhost:8080/setcar")
    //         .then((res) => { res.data })
    //         .catch(error => {
    //             console.log("error");

    //         })
    // }, [])


    //     Create a component that:

    // Has a count state starting at 0.
    // Has a button Increment.
    // Every time count changes, print this in the console:

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("count changed :", count);
    })

    return (
        <>
            <div>
                <h1>Count: {count}</h1>

                <button onClick={() => setCount(count + 1)}>
                    Increment
                </button>
            </div>
        </>
    )
}

export default UseeffectPractice