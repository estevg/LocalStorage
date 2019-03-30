
var formulario = document.getElementById('formulario').addEventListener('submit', function(){
    const titulo = document.getElementById('pelicula').value;
    console.log(titulo);

    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }

    
})

var pelicula = document.querySelector('#peliculas');
var ul = document.createElement('ul');
pelicula.appendChild(ul);


    for (const key in localStorage) {
        if(typeof localStorage[key] == 'string'){
            let li = document.createElement('li');
            li.append(localStorage[key]);
            ul.appendChild(li);
        }
    }

