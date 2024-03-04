import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child';

const Controller = () => {
  const [count, setCount] = useState(0);
  console.log("Parent Component");
  const obj1 = useMemo(() => {
    return {desc: "UseMemo"}
  }, []);
  const obj2 = useCallback((text) => {  
    console.log("hello");
    return {desc: "UseCallback" + text}
  }, [])
  return (
    <div>
      <h1>{count}</h1>
      <Child obj1={obj1} obj2={obj2} />
      <div>
        <button onClick={() => {setCount(prev => prev + 1)}}>increment</button>
        <button onClick={() => {setCount(prev => prev - 1)}}>decrement</button>
      </div>
    </div>
  )
}

export default Controller