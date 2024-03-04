import React, { useMemo, useState } from 'react'
import Child from './Child';

const Controller = () => {
  const [count, setCount] = useState(0);
  console.log("Parent Component");
  const obj = useMemo(() => {
    return {description: "Children component"}
  }, [])
  return (
    <div>
      <h1>{count}</h1>
      <Child text={obj} />
      <div>
        <button onClick={() => {setCount(prev => prev + 1)}}>increment</button>
        <button onClick={() => {setCount(prev => prev - 1)}}>decrement</button>
      </div>
    </div>
  )
}

export default Controller