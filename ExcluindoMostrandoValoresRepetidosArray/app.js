let array2 = ["arthur", "ivar", "bk201", "arthur", "ivar"];

const Utils = {
    mostrandoRepeditos(array) {
        let valorigual = [];
      
        for (let i in array) {
          let valorcomp = array[i];
          cont = 0;
          for (let i in array) {
            if (valorcomp === array[i]) {
              cont++;
              if (cont > 1) {
                cont--;
                valorigual.push(array[i]);
                delete array[i];
              }
            }
          }
        }
        return valorigual;
      },

      limpandoRepetidos(array) {
        for (let i in array) {
          let valorcomp = array[i];
          let cont = 0;
          for (let i in array) {
            if (valorcomp === array[i]) {
              cont++;
              if (cont > 1) {
                cont--;
                delete array[i];
              }
            }
          }
        }
        return array;
      }
}

console.log(Utils.mostrandoRepeditos(array2));
