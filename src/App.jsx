import { useState } from 'react';
import Guns from './Components/Guns/Guns';
import Info from './Components/Info/Info';
import Navigation from './Components/Navigation/Navigation';
function App() {

  const [count,setCount] = useState(0);
  const handleAddToCart = () =>{
    setCount(count+1);
  }
  
  return (
    <div >
      <Navigation count={count}></Navigation>
      <Info></Info>
      <Guns  handleAddToCart={handleAddToCart}></Guns>
      
    </div>
  );
}

export default App



