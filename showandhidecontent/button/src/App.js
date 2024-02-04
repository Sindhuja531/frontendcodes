import React, { useState} from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
   <div>
    {show && <p>Hello SIndhu</p>}
    <button onClick={() => setShow(!show)}>
    {show === true ? 'Show' : 'Hide'}
    </button>
   </div>

  );
}

export default App;
