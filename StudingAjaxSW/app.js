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
    let planet = 0;
    for(let i in result){
      planet = result[0];
    }
    //console.log(planet)


    let propriedades = Object.getOwnPropertyNames(planet);
    let TatooineValue = Object.values(planet);
    console.log(propriedades);
    console.log(TatooineValue)

    let nameTatooine = 0;

    /*for(let i in TatooineValue){
      console.log(TatooineValue[0]);
    }*/

    const Utils = {
      planetsSearching() {
        result.forEach((result) => {
          //console.log(result);
        });
      },
    };
    Utils.planetsSearching();
  })
  .catch((error) => {
    console.warn(error);
  });
