import Weather from "./Weather"

const Country = ({country, city}) => {
    return (
        <>
            <h2>{country.name}</h2>
            capital {country.capital}<br/>
            population {country.population}
            <h3>languages</h3>
            <ul>
                {country.languages.map((languages, index) => 
                    <li key={index}>{languages.name}</li>
                )}
            </ul>
            <img src={country.flag} alt="flag of a country" width="10%" height="5%"/>
            <Weather city={city} />
        </>
    )
}

export default Country