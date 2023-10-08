import { useState } from 'react'
import { atom, useRecoilState, RecoilRoot } from 'recoil';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  

  return (
    <RecoilRoot>
       <Counter/>
    </RecoilRoot>
  
  )
}

const countAtom = atom({
  key: "count",
  default: 0
});


 const Counter = () => {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>
    </div>
  )
 }




export default App
