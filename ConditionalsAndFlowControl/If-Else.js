let temperature = 38;
let averageTemperature = temperature == 38;

if(temperature == 37){
    console.log('baixa febre')
}else if(averageTemperature){
    console.log('febre media/alta')
}else if(temperature = 39 || temperature >=40){
    console.log('febre alta')
}else{
    console.log('temperatura normal')
}