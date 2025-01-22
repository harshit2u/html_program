// // import Home from './components3/Home'
// // import About from './components3/About'
// // import Login from './components3/Login'
// // import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// // function Header(){
// //   return(
// //     <div>
// //       <ul>
// //         <li ><Link to="/home">Home</Link></li>
// //         <li><Link to="/about">About</Link></li>
// //         <li><Link to="/login">Login</Link></li>
// //       </ul>
// //     </div>
// //   )
// // }
// // function App() {
 
// //     return (
// //     <div>     
// //       <BrowserRouter>
// //       <Routes>
// //       <Route path="/home" element={<Home/>}></Route>
// //       <Route path="/about" element={<About/>}></Route>
// //       <Route path="/login" element={<Login/>}></Route>
// //       </Routes>
// //       </BrowserRouter>
// //     </div>
// //   )
// // }
// // export default App





// import './App.css'
// import Home from './components3/Home'
// import About from './components3/About'
// import Login from './components3/Login'
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

// function Header(){
//   return(
//     <ul>
//       <center><h2>Welcome to vasantadad Patil College</h2></center>
//       <li><Link to="/home">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/login">Login</Link></li>
//     </ul>
//   )
// }

// function App() { 
//     return (
//     <div>     
//       <BrowserRouter>
//       <Header/>
//       <Routes>
//       <Route path="/home" element={<Home/>}></Route>
//       <Route path="/about" element={<About/>}></Route>
//       <Route path="/login" element={<Login/>}></Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App

import { useEffect } from "react"
function App() { 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(
      response=>response.json()
    ).then(json=>console.log(json))
   },[])
    return (
    <div>     
     
    </div>
  )
}
export default App