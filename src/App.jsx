import { useState } from 'react'
import './App.css'

const TextInput = ({ inputValue, handleChange }) => {
  return (
    <div>
      <label htmlFor="my-input">Describe whome you giveth life: </label>
      <input
        id="my-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter Item Name"
      />
    </div>
  )
}



function App() {
  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState([])

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const addItem = () => {
    if (inputValue.trim() == '') return
    setItems([...items, inputValue])
    setInputValue('')
  }

  const killItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove))
    

  }

  return (
    <>
      <h1>Shopping List</h1>
      <div/>


      <div className="card">
        <h1><TextInput
          inputValue={inputValue}
          handleChange={handleChange} className="list"
        /></h1>
        <h1><button onClick={addItem}>
          Giveth life to a grocery item
        </button></h1>
      </div>
      <div>
        
      </div>
      <div></div>

      <div>
        Click on an item to KILL IT!!!
      <ul id="listcontainer" className="list">
        {items.map((item, index) => (<li key={index}><button onClick={() => killItem(index)}>{item}</button></li>))}
      </ul>
      </div>
      

      
      
    </>
  )
}

export default App
