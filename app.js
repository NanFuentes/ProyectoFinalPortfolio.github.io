let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
   
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}



window.onscroll = function(){
    efectoHabilidades();
} 

window.onload = () => {
    randomUserGenerator()
}

const randomUserGenerator = () => {
    fetch('https://randomuser.me/api?results=1')
    .then((response) =>{
        return response.json()
    }).then((data) => {
        console.log(data)
        showRandomUserData(data)
    })
}

showRandomUserData = (randomUser) => {
    document.getElementById('name').innerText =
    randomUser.results[0].name.title+" "+
    randomUser.results[0].name.first+" "+
    randomUser.results[0].name.last;

    document.getElementById('gender').innerText =
    randomUser.results[0].gender;

    document.getElementById('age').innerText =
    randomUser.results[0].dob.age;

    document.getElementById('email').innerText =
    randomUser.results[0].email;

    document.getElementById('phone').innerText =
    randomUser.results[0].phone;

    document.getElementById('cell').innerText =
    randomUser.results[0].cell;

    
}