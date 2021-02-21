const CelsiusFahrenheit = {
  transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes("C");
    const fahrenheitExists = degree.toUpperCase().includes("F");

    if (!celsiusExists && !fahrenheitExists) {
      throw new Error("Grau não identificado");
    }

    //fluxo ideal, F->C
    let updatedDegree= Number(degree.toUpperCase().replace("F",""));
    let formula = (fahrenheit)=>
        (fahrenheit -32)*5/9;
    
    let degreeSign = 'C';

    return formula(updatedDegree).toFixed(2) + degreeSign;
    
  },
};

let degree = "58f";

try {
  console.log(CelsiusFahrenheit.transformDegree(degree));
} catch (error) {
  console.log(error.message);
}

