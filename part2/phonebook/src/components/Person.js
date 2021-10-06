const Persons = ({person, deletePerson}) => {
    console.log('names', person)
    console.log('deletePer', deletePerson)
    
    return (
      <>     
      <div>{person.name} {person.number} <button onClick={deletePerson} >delete</button></div>
      
      </>
    )
    
  }

  export default Persons