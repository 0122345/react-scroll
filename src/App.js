 import React from 'react';
 
  import { data } from "./imaging";

function App() {
  return (
     <>
     <h1>
      yoo you there!
     </h1>

     <div className=''>
      {data.map((item)=> {
        <img src={item.img} alt='/'/> 
      })}

     </div>
     </>
  );
}
   
export default App;
