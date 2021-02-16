let array2 = ["arthur", "ivar", "bk201", "arthur", "ivar"];

const Utils={
  mostrandoRepetidos(array){
    valorRepetido=[];
    for(let i in array){
      let valorcomp=array[i];
      cont=0;
      for(let i in array){
        if(valorcomp===array[i]){
          cont++;
          if(cont>1){
            cont--;
            valorRepetido.push(array[i]);
            delete(array[i]);
          }
        }
      }
    }
    return valorRepetido;
  },
  deletandoRepetidos(array){
    for(let i in array){
      let valorcomp=array[i];
      let cont=0;
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
}
console.log(Utils.deletandoRepetidos(array2));