
var btn = document.querySelector("#read-more");
var container = document.querySelector('.container');

btn.addEventListener('click', function() {
    if(container.style.display=== "block"){
       container.style.display= "none";
       return btn.textContent = "Ler Mais";
    }else{
        container.style.display='block';
        return btn.textContent='ocultar texto';
    }

});