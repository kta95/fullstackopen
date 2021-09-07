import React from 'react'

const PersonForm = ({submitHandler, newName, newNum, nameHandler, numberHandler }) => {
    return (
      <form onSubmit={submitHandler}>
        <div>
          name: <input value={newName} onChange={nameHandler}/>
          <br/>
          number: <input value={newNum} onChange={numberHandler} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
    )
  }



  export default PersonForm