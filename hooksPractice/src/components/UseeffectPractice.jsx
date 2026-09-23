import React, { useEffect } from 'react'

function UseeffectPractice() {

    // what is useEffect hook
    // useeffect is hook  which are used to sideeffect means used to side Api call
    // mostly used to call backend api and fetch the data from backend server and display in frontend
    useEffect(() => {
        // console.log("hello world");
        axios.get("http//localhost:8080/setcar")
            .then((res) => { res.data })
            .catch(error => {
                console.log("error");

            })
    }, [])
    return (
        <div>UseeffectPractice</div>
    )
}

export default UseeffectPractice