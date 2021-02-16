axios.get('https://api.github.com/users/arthur-art')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});