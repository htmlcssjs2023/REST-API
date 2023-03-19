//loadCountris
//displayCountries
//getCountriesHTML


const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountries(data))
}

const displayCountries = (countries) =>{
    console.log(countries);

    const allCountries = countries.map(country => getCountriesHTML(country));

    // console.log(allCountries[0]);
    const container = document.getElementById('countries');
    container.innerHTML = allCountries.join(' ');
}


const getCountriesHTML = (country) =>{
    return `
        <div class="country">
            <h1>${country.name.common}</h2>
            <img src="${country.flags.png}" />
            
        </div>
    
    `;
}

loadCountries();