const Persons = ({names}) => {
    console.log('names', names)
    return (
      <>
      {names.map((person, index) => 
        <div key={index}>{person.name} {person.number}</div>
      )}
      </>
    )
    
  }

  export default Persons