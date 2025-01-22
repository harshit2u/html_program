import {useState, useEffect} from 'react'

function Test1() {
    const [count, updateCounter] = useState(0);
    useEffect(()=>{console.log("Click")}, [count])
  return (
    <div>
      <center>
        <h1>{count}</h1>
        <button onClick={()=>updateCounter(count +1)}>click me</button>
      </center>
    </div>
  )
}

export default Test1
