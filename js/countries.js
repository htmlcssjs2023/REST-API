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

// Original system --------------

// const getCountriesHTML = (country) =>{
//     return `
//         <div class="country">
//             <h1>${country.name.common}</h2>
//             <img src="${country.flags.png}" />
            
//         </div>
    
//     `;
// }

// option : 01 -------------- object destructuring

// const getCountriesHTML = (country) =>{
//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h1>${name.common}</h2>
//             <img src="${flags.png}" />
            
//         </div>
    
//     `;
// }

// option : 02 paramter destructuring

const getCountriesHTML = ({name,flags,area, region}) =>{
    return `
        <div class="country">
            <h1>${name.common}</h2>
            <p> Area Code : ${area}</p>
            <p> Continent Area : ${region}</p>
            <img src="${flags.png}" />
            
        </div>
    
    `;
}


loadCountries();