


export function breweryAPI (city, state, zip) {
    // user submitted city and state
    var brewUrl;
    if (zip){
        brewUrl = `https://api.openbrewerydb.org/breweries?by_postal=${zip}&per_page=50`
    } else{
        brewUrl= "https://api.openbrewerydb.org/breweries?by_city=" + city.replace(" ", "_") + "&by_state=" + state.replace(" ", "_")+"&per_page=50";
    }
    console.log(brewUrl);
    return brewUrl;
    // zip == undefined ? var 
}
 

export function perDiemAPI (city, state, zip) {
    var perDiemUrl;
    city = city.replace(" ", "_")
    if (zip === ""){
        
        perDiemUrl = `
        https://api.gsa.gov/travel/perdiem/v2/rates/city/${city}/state/${state}/year/2021?api_key=AgMo9KU7DfHFqTDXcAqse6udTXn6knH6uCLOh4K2`
    } else{
        perDiemUrl = `https://api.gsa.gov/travel/perdiem/v2/rates/zip/${zip}/year/2021?api_key=AgMo9KU7DfHFqTDXcAqse6udTXn6knH6uCLOh4K2`;

    }
    return perDiemUrl;
}
