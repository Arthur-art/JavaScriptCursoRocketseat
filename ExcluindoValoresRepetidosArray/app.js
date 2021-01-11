function LimpandoRepetidos(array){
    for(let i in array){
        let valorcomp=array[i];
        let cont = 0;
        for(let i in array){
            if(valorcomp===array[i]){
                cont++;
                if(cont>1){
                    cont--;
                    delete array[i];
                }
            }
        }
    }
    return array;
}

console.log(LimpandoRepetidos(array=["arthur","arthur","arthur"]));