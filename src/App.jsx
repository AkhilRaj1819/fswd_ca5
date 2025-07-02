import { useEffect, useState } from 'react'
import './App.css'
import ItemForm from './components/ItemForm'

function App() {
  const [itemName,setItemName] =useState('')
  const [items,setItems] = useState([])
  const [votes,setVotes] = useState(0)
  const handleSubmit = (e)=>{
    e.preventDefault();
    const item= {itemName:itemName,votes:votes};
    if(itemName.length==0){
      alert('something should be in item name')
    }else{
      const dublicateName = items.find(e=>e.itemName===itemName)
      if(dublicateName){
        alert('no duplicate names')
      }else{
    
    
      setItems([...items,item])
    }
  }
  setItemName('')
  }
  const handleClick = (index)=>{
    const allItems = [...items]
    allItems[index].votes=allItems[index].votes+1;
    setItems(allItems);
  }

  const handleDelete = (index) =>{
    const allItems = [...items]
    allItems.splice(index,1);
    setItems(allItems);
  }
    
  return (
    <>
    <ItemForm
    itemName={itemName}
    setItemName={setItemName}
    items={items}
    setItems={setItems}
    handleSubmit={handleSubmit}
    />

    <div>
      <h1>Items</h1>
      <ul>
      {
        items.map((item,index)=>(
          <li key={index}>{item.itemName}({item.votes} Votes)
          <button onClick={()=>handleClick(index)}>vote</button>
          <button onClick={()=>handleDelete(index)}>REMOVE</button>
          </li>
        ))
      }
      </ul>
    </div>

        
    </>
  )
}

export default App
