
// function Test(Props) {
//   return (
//     <div>
//       <h2>Hi my name is {Props.empName}</h2>
//       <h2>My city is {Props.empAddress}</h2>
//       <h2>my id is {Props.studentId}</h2>
//       <h2>Subject {Props.stdSubject}</h2>
//     </div>
//   )
// }

// export default Test


// function Test() {
//   function display() {
//     alert('Welcome to Event Concept in React')
//   }
//   return (
//     <div>
//       <button onClick={display}>Click here</button>
//     </div>
//   )
// }

// export default Test


// function Test() {
//   return (
//     <div>
//       <button onClick={()=>{alert("Welcome")}}>Click here</button>
//     </div>
//   )
// }

// export default Test


// import { useState } from 'react'
// function Test() {
//   let [counter, updateCounter ]= useState(30)
//   return (
//     <div>
//       <h2>Conuter Variable value is: {counter} </h2>
//       <button onClick={()=>updateCounter(++counter)}>Increment</button>
//       <button onClick={()=>updateCounter(--counter)}>Decrement</button>
//     </div>
//   )
// }

// export default Test


import { useState } from 'react'
function Test() {
  let [name, updateName ]= useState("Harshit")
  return (
    <div>
      <h2>Name of the student is: {name} </h2>
      <button onClick={()=>updateName("Harshit Upadhyay")}>State</button>
    </div>
  )
}

export default Test