import React from 'react'
import { useState,useEffect } from "react";

// export default function App7() {
//     const [count,setcount] = useState(0);cdwxs
//     console.log("Component loaded")
//   return (
//     <>
//     <button onClick={() => setcount((prevState) => prevState +1)}>
//         onClick
//         </button>
//         <span>{count}</span>
//         </>
//   );
// }

export default function App7() {
    const [runs,setRuns] = useState(0);
    const [wickets,setWickets] = useState(0);
    console.log("Component loaded");
    useEffect(() =>{
        console.log("Better Luck Next Time!");
    },[wickets]);
  return (
    <>
    <button onClick={() => setRuns((prevState) => prevState +1)}>
        Runs({runs})
        </button>
        <button onClick={() => setWickets((prevState) => prevState +1)}>
        Wickets({wickets})
        </button>  
        </>
  );
}
