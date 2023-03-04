import { useEffect, useState } from 'react';
import './App.css';
import CoffeeList from './components/CoffeeList';

function App() {

  const [hotCoffees, setHotCoffees] = useState([])
  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(res => res.json())
      .then(res => {
        setHotCoffees(res)
      })
  }, [])

  return (
    <>
      <CoffeeList type="Hot" coffees={hotCoffees} />
    </>
  );
}

export default App;
