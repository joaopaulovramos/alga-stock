import React, { useState, useEffect } from "react";
import './TestComponent.css'

function TestComponent(props: { name: string }) {
  const [age, setAge] = useState(35)

  useEffect(() =>{
    console.log('Componente foi Criado')
  }, [])
  
  useEffect(() =>{
    console.log('Age Updated')
  }, [age])

  return <div className="TestComponent">
    { props.name }, { age }
    <button onClick={() => {
      setAge(age + 1)
    }}>+
    </button>
    </div>


}


export default TestComponent