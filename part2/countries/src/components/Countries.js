import Country from "./Country"


const Countries = ({names, buttonHandler, value}) => {
    console.log('countries', names)
    if (value !== '') {
        if (names.length === 1) {
            const country = names[0] 
            console.log('country is',country.languages)
            return (
                <Country country={country} city={country.capital}/>
            )
        
        } else if (names.length < 10) {           
            return (
                <>
                    {names && names.map((country)=>
                      <div>  {country.name} <button onClick={buttonHandler} country={country.name}>show</button></div>
                    )}
                </>
            )
        }
        return (
            <>Too many matches, specify another filter</>
        )
    }
    return (
        <></>
    )
}

export default Countries