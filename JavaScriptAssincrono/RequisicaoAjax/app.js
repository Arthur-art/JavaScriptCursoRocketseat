var xhr = new XMLHttpRequest();
var link = 'https://api.github.com/users/arthur-art';
xhr.open('GET', link);
xhr.send(null);

xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        console.log(JSON.parse(xhr.responseText));
    }
}