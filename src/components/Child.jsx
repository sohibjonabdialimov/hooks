import React, { memo } from 'react'

const Child = ({obj}) => {
  console.log("Child Component");
  return (
    <div>{obj?.description}</div>
  )
}

export default memo(Child);