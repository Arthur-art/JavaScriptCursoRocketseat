/*
    Buscando e contando dados em Arrays

    Baseado no Array de livros por categoria abaixo, faça os seguinetes desafios

        -Contar o numero de categorias e o numero de livros em cada categoria
        -Contar o numero de autores
        -Mostrar livros do autor Augusto Cury
        -Transformar a funcao acima em uma funcao que ira receber o nome do autor e
        devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title:"Os segredos de uma mente milionaria",
                author:"T. Harv Eker",
            },
            {
                title:"O homem mais rico da Babilonia",
                author:"George S. Clason",
            },
            {
                title:"Pai rico, pai pobre",
                author:"Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books:[
            {
                title:"Você é Insubstituível",
                author:"Augusto Cury",
            },
            {
                title:"Ansiedade - Como enfrentar o mal do século",
                author:"Augusto Cury",
            },
            {
                title:"Os 7 hábitos das pessoas altamente eficazes",
                author:"Stephen R. Covey",
            },
        ],
    },

];
//console.log(booksByCategory);

// -Contar o numero de categorias e o numero de livros em cada categoria
const totalCategories = ()=>{
    let numberBooks;
    for(let category of booksByCategory){
        //console.log(category.category);
        numberBooks=category.books.length;
        
    }
    //console.log('number books = '+numberBooks);
    
}
//totalCategories()

//-Contar o numero de autores
const countAuthors = ()=>{
    let authors = [];
    for(let category of booksByCategory){
        for(let books of category.books){
            console.log(books.author);
            if(authors.indexOf(books.author)== -1){
                authors.push(books.author);
            }
        }
    }
    console.log('Total Authors = '+ authors.length)
}
//countAuthors()

//-Mostrar livros do autor Augusto Cury
const countBooksOfAugusto = (authorBooks)=>{
    let book = [];
    for(let category of booksByCategory){
        for(let books of category.books){
            if(books.author == 'Augusto Cury'){
                book.push(books.title);
            }
            
        }
    }
    console.log('Books Augusto Cury => '+ book)
}
//countBooksOfAugusto()

//-Transformar a funcao acima em uma funcao que ira receber o nome do autor e
//devolver os livros desse autor.
const countBooksAuthor = (authors)=>{
    let books = [];
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author==authors){
                books.push(book.title);
            }
        }
    }
    console.log(`livros do autor ${authors}: ${books}`);
}

countBooksAuthor('George S. Clason')