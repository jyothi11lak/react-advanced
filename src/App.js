
import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(["a"]);
useEffect (()=>{
  console.log("hi");
}, [user])

    return (
      <div>
        {user}
        <p>
          Enter your name
        </p>
        <input 
        value={user} 
        onChange={(e) => setUser(e.target.value)}
        />
      </div>
    );

}

export default App;
