import React, { memo } from 'react'

const Child = ({obj1, obj2}) => {
  console.log("Child Component");
  return (
    <>
    <div>{obj1?.desc}</div>
    <div>{obj2("Example")?.desc}</div>
    </>
  )
}

export default memo(Child);