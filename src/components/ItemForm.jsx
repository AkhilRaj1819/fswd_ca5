import React from 'react'

const ItemForm = ({itemName,setItemName,items,setItems,handleSubmit}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Item Name</label>
            <input type="text" value={itemName} onChange={(e)=>setItemName(e.target.value)} />
            <button>ADD</button>
        </form>
      
    </div>
  )
}

export default ItemForm
