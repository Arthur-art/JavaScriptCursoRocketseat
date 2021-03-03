let MyPromise = () => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://swapi.dev/api/planets/");
    xhr.send(null);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Error");
        }
      }
    };
  });
};
MyPromise()
  .then((response) => {
    //console.log(response);
    let result = response.results;

    //console.log(result);

    let planetsNames = [];

    let climatePlanets = [];

    let resultFlat = result.flatMap((value)=>{
      return [value];
    });

    for(let i in result){
      planetsNames=(result[0])
    }
    
    result.forEach(planets=>{
    //planetsNames.push(planets['name']);
    //climatePlanets.push(planets['climate']);
    });

    //console.log(`O primeiro planeta é ${planetsNames[0]} e o seu clima é ${climatePlanets[0]}`)

    console.log(resultFlat)


    const prop = Object.getOwnPropertyNames(result[0]);
    //console.log(prop)

   
  })
  .catch((error) => {
    console.warn(error);
  });
