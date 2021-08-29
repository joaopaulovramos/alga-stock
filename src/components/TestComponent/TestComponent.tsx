import React, { useState } from "react";
import './TestComponent.css'

function TestComponent(props: { name: string }) {
  const [age, setAge] = useState(35)

  return <div className="TestComponent">
    { props.name }, { age }
    <button onClick={() => {
      setAge(age + 1)
      console.log(age)
    }}>+
    </button>
    </div>


}


export default TestComponent