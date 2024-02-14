import {motion} from 'framer-motion';
import { useState } from 'react';

function App() {

  const[isOpen , setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div layout transition={{layout:{duration:1, type:"spring"}}} onClick={()=> setIsOpen(!isOpen)} className='card'>
        <motion.h2 layout='position'>Framer Motion</motion.h2>
        {isOpen && (
        <motion.div>
          <p>6 February 2019 - While we could filter them out in
             DevTools, this points to a deeper underlying problem:
             React needs a better primitive for sharing stateful logic. 
             With Hooks, you can extract</p>
          <p>6 February 2019 - While we could filter them out in
             DevTools, this points to a deeper underlying problem:</p>
        </motion.div>
        )}

      </motion.div>
       
    </div>
  );
}

export default App;
