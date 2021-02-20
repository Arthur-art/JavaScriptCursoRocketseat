// for

for(let i = 20; i <= 100; i++){
    if(i==50){
        break;
    }
    //console.log(i);
}


// continue - pula a execucao do momento

for(let i=0; i<=15; i++){
    
    if(i==5){
        continue;
    }
    //console.log(i);
}


//while

let i = 19849481;
while(i>10){
    console.log(i)
    i /=30
}

// for...of

let name = "Arthur";
let names = ["Arthur","Gisele","Ivar"];

for(let name of names){
    console.log(name);
}

// for...in

let person = {
    name: 'Arthur',
    age:24,
    weight: 75
}

for(let i in person){
    console.log(i);
    console.log(person[i]);
}