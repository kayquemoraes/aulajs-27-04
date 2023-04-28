// Buscando a lista de uma array usando for

// Declarando e chamando o id msg

let msg = document.getElementById('msg')

const usuarios = [
    {nome:"HUGUINHO", idade: 18},
    {nome:"LUIZINHO", idade: 19},
    {nome:"ZEZINHO", idade: 20}
];

const users = usuarios.length;

for(let i = 0; i < users; i++){

    msg.innerHTML += `<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

// Criando uma array de imagens
let imagens = [
    'img/1.gif',
    'img/2.gif',
    'img/3.gif'
];

// Declarando variáveis
let index = 0;
let time = 2000;

// Criando uma função
function slideShow(){
    document.getElementById('image').src = imagens[index]; //Acrescenta a fonte na tag img
    //index++;
    if(index == imagens.length){
        index = 0
    }
    setTimeout("slideShow()", time)
}

//slideShow();
slideShow();