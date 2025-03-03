 let lightOff = document.querySelector('img') as HTMLImageElement;
 let text = document.querySelector('h1') as HTMLHeadingElement

  lightOff.addEventListener('click', () => {
    console.log('clicou')
    let srcEl = lightOff.getAttribute('src')
    if (srcEl === 'https://arduinolivre.files.wordpress.com/2013/08/lampada_desligada.png'){
      text.textContent = 'Lâmpada Ligada'
      lightOff.src =  "https://arduinolivre.files.wordpress.com/2013/08/lampada_ligada.png"
    } else {
      text.textContent = 'Lâmpada Desligada'
      lightOff.src =  'https://arduinolivre.files.wordpress.com/2013/08/lampada_desligada.png'
    }
   })






























/* light ----------------------
   let lightOff = document.querySelector('img')
   let text = document.querySelector('h1')
   let gif = document.querySelector('.gif')
  
    lightOff.addEventListener('click', () => {
      console.log('clicou')
      srcEl = lightOff.getAttribute('src')
      if (srcEl === 'https://arduinolivre.files.wordpress.com/2013/08/lampada_desligada.png'){
        text.textContent = 'Lâmpada Ligada'
        lightOff.src =  "https://arduinolivre.files.wordpress.com/2013/08/lampada_ligada.png"
      } else {
        text.textContent = 'Lâmpada Desligada'
        lightOff.src =  'https://arduinolivre.files.wordpress.com/2013/08/lampada_desligada.png'
      }
     })

*/

/*------------------ ARROW FUNCTION ----------------
let escolhaNome = (nome) => nome.length;
console.log(escolhaNome('Manel'))
 



*/




/*---------------- Metodos De String ---------------------
  let nome = 'Manel Do Capa'
  let newName = nome.replace('Capa','Caps')
  console.log(newName)

*/
/*---------------- Metodos De Numbers ---------------------
 //---------- Parse Int
 let x = '2'
 let newNumber = parseInt(x) + 4;
 console.log(newNumber)

 //---------- Parse Float
 let x = 29.9
 let newNumber = parseFloat(x); // Ele Valoriza os Number Decimais
 console.log(newNumber)

*/
/*---------------- Metodos De Array ---------------------
 //----------indexOf                                                           Busca A Posiçao do item
 let list = ['item1','item2','item3']
 let res = list.indexOf('item1')

 console.log(res)

  //----------Splice                                                           Remove um item no Array      
   let list = ['item1','item2','item3']
   let res = list.splice(1,1)

   console.log(list)



  //---------- sort()                                                           Ordena em ordem alfabetica
    let list = ['atem1','ctem2','btem3']
    let res = list.sort()

    console.log(list)

*/



/* --------------------- REQUISIÇOES ---------------------------
// PROJETO ----
    async function readPost() {
    let postArea = document.querySelector('.post')
    postArea.innerHTML = `Carregando....`

    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    let json = await response.json();

  
    if(json.length) {
      postArea.innerHTML = ''
      
       for(let i in json){
       let postHtml = `<div><h1>${json[i].title}</h1> <hr>${json[i].id}</hr></div>`  
       postArea.innerHTML += postHtml;
    }
    } else {
      postArea.innerHTML = `Nothing Post To See`
    }
  }
    readPost()



    async function addNewPost(title,text){
      await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
          method: 'POST',
          headers: {'Content-Type':'application/json'

          },
          body: JSON.stringify({
            title,
            text,
            userId: 2

          })
        }
      )
     document.querySelector('.input').value = '';
     document.querySelector('textarea').value = '';

      readPost()
    }

    document.querySelector('.inserir').addEventListener('click', ()=>{
      let title = document.querySelector('.input').value;
      let text = document.querySelector('textarea').value;

      if(title && text){ 
      addNewPost(title,text)
        
      }else{
        alert('Digite Algo Nos Campos!')
      }
      
    }) 

//METODO POST ------------------------
//FORMA MELHOR USANDO ASYNC E AWAIT --

 document.querySelector('.inserir').addEventListener('click', async ()=>{
 let response = await fetch('https://jsonplaceholder.typicode.com/todos',
   {
     method: 'POST',
     headers: {
       'Content-Type':'application/json'
     },
     body: JSON.stringify({
       title:'new title',
       userId:'2',
     

     }) 
   }
  )
  let json = await response.json();
  console.log(json)
 }
)
 
//FORMA MENOS USADA -- 

 document.querySelector('.inserir').addEventListener('click', ()=>{
   fetch('https://jsonplaceholder.typicode.com/todos',
    {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        title:'new title',
        userId:'2',
      

      }) 
    }
   )
   .then((response) => {
    return response.json();
   })
   .then((json)=>{
    console.log(json)
   })
   .catch((error)=>{
    console.log(error)
   })

  }
 )

// METODO GET ------------------------
//FORMA MELHOR USANDO ASYNC E AWAIT --

  document.querySelector('.inserir').addEventListener('click', async () => {
   let response = await fetch('https://jsonplaceholder.typicode.com/todos')
   let json = await response.json()
   alert(`titulo do first post ${json[0].title}`);

  }
//FORMA MENOS USADA -- 
document.querySelector('.botao').addEventListener('click', () => {
   fetch('https://jsonplaceholder.typicode.com/tdos')
    .then((response) => {
      return response.json();
    })

    .then((data) => { 
        alert(`${data[0].title}`)
    })

    .catch((error)=> {
      alert(error)
    })
})
 
*/


/* --------------------------------- LOGICA DE PROGRAMAÇÃO NA PRATICA --------------------------------
/*------------------------Anotaçoes Livro --------------------------------


const debuglog = document.getElementById(`debug`)
const container = document.querySelector('.container')
if (!debuglog){
  const log = document.createElement('div')
  log.id = 'debuglog'
  log.innerHTML = `<div> <h1> Debug log </h1> </div>`
  container.appendChild(log);
const pre = document.createElement('pre')
const text = document.createTextNode('mensagem de Deus')

pre.appendChild(text)
log.appendChild(pre)
}





/* -------------------------- LET SIMPLES -----------------------------
let x = 10
let y = 10
let z = x + y;

 let a = 2
 let b = 3
 let c = a + b;

 let allresults = z + c;

console.log(allresults)

//-------------------------------TURN LIGHT ON ----------------------------------------------------
/*const botaoOff = document.querySelector('.button-off')
const botaoOn = document.querySelector('.button-on')
const imgOff = document.querySelector('.img-off')


botaoOn.addEventListener('click', () => {
 imgOff.innerHTML = `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/93927/pic_bulbon.gif">`
})
botaoOff.addEventListener('click', () => {
  imgOff.innerHTML = `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/93927/pic_bulboff.gif">`
 })

---------------------------- PREÇO DO DOLLAR ----------------------------
const ul = document.querySelector('#ul');
const dollar = 6.3;
let blr = window.prompt('converta:');

function converter(){
  let result = dollar * blr;
  exibirNaTela(dollar,blr,result)
}


function exibirNaTela(dollar,blr,result){
  let newLi = document.createElement('li');
  newLi.innerText = `${blr}R$ com o dollar ${dollar}$ valem= ${result}`;
  ul.appendChild(newLi);
}

converter()


------------------------------------ FOR EACH ---------------------------------- 

const users = [
    {name:'Emanoel', age:19, contato: 129998998939},
    {name:'Sofia', age:12, contato: 239122222222},
    {name:'nelson',  age:11, contato: 339377777777}
]
users.forEach(function(item,index){
  if(item.age < 18){                                                                     // se alguma idade do array for menor que 18 ele mosstra o console
    console.log(`o cliente ${item.name} que está na posição ${index} é MENOR de idade`)
  }
});

 ------------------------------------ FOR IN -----------------------------------
let list = {
  nome: 'sofia',
  mora: 'congo',
  idade: 18
}
for(let key in list){
  console.log(`${key} : ${list[key]} `)

}

------------------------------------ FOR OF -------------------------------
// ele vai pecorrer todos os names

let list = ['junior', 'Ciro' , 'Emily']

for(let names of list){
  console.log(names)
}

----------------------------- FOR SIMPLES -------------------------------

let list = ['junior', 10 , 'tired']


for(let i = 0; i < list.length; i++){
  console.log(list[i])
 }



-----------------------------

const ul = document.querySelector('ul');
let y = window.prompt('digite um number da tabuada')

let x = 1
function funcao(){ 
  while( x <= 10){
    let resultado = y * x;
   exibirNoHTML(y,x,resultado);
   x++;
  }

}      
function exibirNoHTML(y,x,resultado){
  let newLi = document.createElement('li');
  newLi.innerText = `${y} * ${x} = ${resultado}`;
  ul.appendChild(newLi);

}

funcao()

------------------------------------------- TABOADA -----------------------------------------------
function numero(y){ 
  for(let x = 1; x <= 10; x++){
      y * x
    console.log(`${y} * ${x}  =  ${y * x}`)
  }
}
numero(2)



------------------------------------------------------ SOMAR COM LOOP ---------------------------------------- 
let lista = [12,2,32,14,5]
let total = 0

function somar(){}
for (let i in lista){
  total = total += (lista[i])
  console.log(total)
}
somar()


---------------------------------------------- SOMA DE FATORIAIS ----------------------------------------
function calcFatorial(n){
  if (n == 0){
    return 1;
  } else {
    return n * calcFatorial(n-1);
  }
}
console.log(calcFatorial(5));

----------------------------------DIGITE SEU NOME NA TELA--------------------------------------------
const input = document.querySelector('input');
const botao = document.querySelector('button');

let nome = input.value;

function takeName(){
  botao.addEventListener('click', () => {
  if (nome === ''){
   console.log (`Seja Bem Vindo ${input.value}`)
    }
  }
 )
};

takeName()

// ------------------------------------QUEBRAR BOTÃO----------------------------------------------

const botao = document.querySelector('button');
let click = 0;


function Verificar(){
  botao.addEventListener('click', () => {
  click++
  console.log(`vc clicou ${click} vezes`)	

 //condição:
 
   if(click >= 10 ){
   console.log('vc quebrou o botão')
   botao.disabled = true 
    } 
   }
  )
};     

Verificar()


//----------------------- ACERTAR O NUMERO ----------------------------
let numberAleatorio = Math.floor(Math.random() * 10) + 1;

function verificar(){
  const valor = parseInt(input.value);

  if (isNaN(valor)) {
   console.log ("Por favor, insira um número válido.")
    return;

  }
   if (valor == numberAleatorio){ 
    console.log(`vc acertou o numero é ${numberAleatorio}`)

  }else if (valor < numberAleatorio){
    console.log(`o numero é maior`)}

   else if (valor > numberAleatorio){
      console.log(`o numero é menor`)
    }

}

function ligar(e){
  if(e.key === 'Enter'){
    verificar()
  } 

 
}
const input = document.querySelector('input')// Certifique-se de selecionar o input corretamente
 input.addEventListener('keyup', ligar)

 -----------------------------------------------------------------------------------------------------------

//pegue o celular
const botao = document.querySelector('button');

//verifique se a conexão está ativa
console.log(botao);//sim está ativa

//digite o numero 
const input = document.querySelector('input');

//ligue
function ligar(e){
  if(e.key === 'Enter'){
  input.value ==  998394689 ? alert('Ligando...') : alert('Número Inválido')// se(if = ?) o numero for igual a 998394689, então ligue, se não (else = :), número inválido
  } 
}
input.addEventListener('keyup',ligar)



---------------------------------------------------------------------------------------------------------

function receberMensal(valorMensal,horas,dias) {
  return  valorMensal/ horas / dias ;
}

let salario = receberMensal(1000,5,26);
console.log(`por hora vc recebe ${salario.toFixed(2)}`)

*/ 
/*------------------------------START----------------------------

class person {
  start(){
    console.log(`Olá ${this.name}`)
  }
  constructor (name, age){
    this.name = name;
    this.age = age;
  }
}

let p1 = new person('Manel', 20)


p1.start()
console.log(p1.age)
*/
/*--------------------- OUTRAS AULAS ----------------------------

function ligar(e){
  if(e.key === 'Enter'){
  } 
}
input.addEventListener('keyup',ligar)
*/
/*------------------------------FACTORY------------------------

function createPerson(colorbody,name,age){
  let newPerson = {
    colorbody: colorbody,
    name: name,
    age: age
    
  }
  return newPerson
}

let person1 = createPerson('black','manel', 20)
console.log(person1)

*/

/* ------------------------ METODO STATIC -------------------


class person {
  static sayHello(){
    console.log(`Hello`)}
}
person.sayHello()
*/


/*----------------------- HERANÇA ------------------------------
class person {
  constructor(firstname,lastName,identity){
    this.firstname = firstname
    this.lastName = lastName
    this.identity = identity
    }
    sayHi (){
      console.log(`Hello ${this.firstname}`,)}
  }
  
    class driver extends person {  // o extends serve para eu conseguir usar oq tem em person la em let driver
      constructor(firstname,license){
       super(firstname);
       this.license = license
     }
 }


          
 let driver1 = new driver("Emanoel", 122)
 let driver2 = new driver("Sophia", 123)

driver1.sayHi()
console.log(` ${driver1.firstname}, Congratulations! this is your license = ${driver1.license}`)
driver2.sayHi()
console.log(` ${driver2.firstname}, Congratulations! this is your license = ${driver2.license}`)

*/

/*---------------------------- GET E SET ------------------------------
class person {
  _age = 0 
  constructor(firstname,lastName){
    this.firstname = firstname
    this.lastName = lastName
  }

  get fullname(){
    return `${this.firstname} ${this.lastName}` //get age como se fosse uma function que se ativa ao colocar a variavel no console. ou seja eu uso como se fosse variavel mas na verdade ela é uma function.

  }

  get newAge(){
    return this._age
  }

  set newAge(novaIdade){
    this._age = novaIdade
  }
}


          
 let p1 = new person('sofia','maximiliano')
 let p2 = new person('marcio','macaco')
 let p3 = new person('muri', 'soca')
 

console.log(`seu nome é ${p1.fullname} e sua idade é: ${p1._age}`)
console.log(`seu nome é ${p2.fullname} e sua idade é: ${p2._age}`)
console.log(`seu nome é ${p3.fullname} e sua idade é: ${p3._age}`) 

p1.newAge = 20  //GRAÇAS AO SET EU CONSIGO FAZER COM QUE MUDE O AGE NO PROXIMO CONSOLE.LOG.

console.log(`seu nome é ${p1.fullname} e sua idade agora é ${p1._age}`)



*/



/* ------------------------  Typeof serve como um filtro. Exemplo: -------------------------

 class person {
  age = 0 

  setAge(newAge){
   if(typeof newAge === 'number'){
    this.age = newAge;
// o this serve como p1 ou p2 ou p3...
   } else{alert('só aceitamos numeros')}
  }
 }
 let p1 = new person('sofia', 13)
 let p2 = new person('marcio', 20)
 let p3 = new person('soca', 5)
 
 p1.setAge(20)
 p2.setAge(30) 

console.log(`seu nome é ${p1.name} e sua idade é: ${p1.age}`)
console.log(`seu nome é ${p2.name} e sua idade é: ${p2.age}`)
console.log(`seu nome é ${p3.name} e sua idade é: ${p3.age}`) 
 
 
*/



/* -------------- BOTAO PARA AUMENTAR --------------------------
const botao = document.querySelector('button');
const statusDiv = document.querySelector('div');

class Person {
  power = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  upPower() {
    this.power++;
  }
}

// Instâncias de pessoas
let p1 = new Person('Sofia', 13);
let p2 = new Person('Marcio', 20);
let p3 = new Person('Soca', 5);

// Pessoa atualmente selecionada (padrão)


// Atualiza o texto de status
function updateStatus() {
  statusDiv.innerHTML = `
    <p>Poder: ${p1.power}</p>
  `;
}

// Função que aumenta o poder da pessoa selecionada
function powerUp() {
  p1.upPower();
  updateStatus();
}

// Adiciona evento ao botão
botao.addEventListener('click', powerUp);

// Atualiza o status inicial
updateStatus();
*/

/* -----------------------------THIS, CONSTRUCTION e INSTANCIA
class person {

  constructor(name, age){
  this.name = name
  this.age = age
 }

}

  
let p1 = new person('sofia', 13)
let p2 = new person('marcio', 20)
let p3 = new person('soca', 5)
   
console.log(`seu nome é ${p1.name} e sua idade é: ${p1.age}`)
console.log(`seu nome é ${p2.name} e sua idade é: ${p2.age}`)
console.log(`seu nome é ${p3.name} e sua idade é: ${p3.age}`)

*/


/* ---------------------- Atividade Adicionar Items ------------------------------
  
  function programa(e){
    if(e.key === 'Enter'){
      const newLi = document.createElement("li")
      newLi.innerHTML = input.value;
      ul.appendChild(newLi)

      input.value = ''
    }
  }

input.addEventListener('keyup', programa)

*/
/*-------------------------Eventos De Clique com HTML ----------------------------

function clicou(){ 
console.log('Clicou')
}

function segurou(){
  console.log('Segurou')
}

function soltou(){
  console.log('Soltou')
}

*/


/*--------------------STYLE------------------------
function clicou() {
  const h1 = document.querySelector('h1');
if(h1.style.backgroundColor === ('rgb(184, 184, 185)')){
    h1.style.backgroundColor = '#0F0';
}else {
  h1.style.backgroundColor = 'rgb(184, 184, 185)';
}*/
/*

------------------- GET E SET ATRIBUTE = MOSTRAR E OCULTAR SENHA   -------------------------
function clicou(){
  const get = document.querySelector('input')
  const botao = document.querySelector('.botao')

  if(get.getAttribute("type") === 'text'){
  get.setAttribute('type', 'password')
  botao.innerText = ('Mostrar Senha')
  } else {
  get.setAttribute('type','text')
  botao.innerText = ('Ocultar Senha')
  }

}
*/
/*
------------------- Manipulação De Dom -------------------------

function clicou(){
  const teste = document.querySelector("#teste")
  const ul = teste.querySelector('ul')

  ul.children[0].innerHTML = "vc é guei"
  ul.children[1].innerHTML = "seu baitola"
  ul.children[2].innerHTML = "vc da a bunda"
}


  const teste = document.querySelector("#teste")
  const ul = teste.querySelector('ul')

   ul.children[0].append(" Alterado") //apend serve como um novo paragrafo, para não modificar todo o programa adicionando uma nova alteração.


   outra adição
-------------------------------------------------------------------------------------------------------------------------------------------
  /*
   let newLi = document.createElement("li")
   newLi.innerText = "item add";

   ul.appendChild(newLi)
   */



/* ----------------- FILTER --------------------

 let fruits = ['Manga','Melancia','Banana','Kiwi']

 let verificar = fruits.filter((item) => {
   return item.length > 4;
  });
 
  console.log(verificar)


//EVERY

  let fruits = ['Manga','Melancia','Banana','Kiwi']

let verificar = fruits.every((item) => {
  return item.length >= 4;
 });

  if (verificar){
   console.log('Ta Certo Patrao')
  }else {
    console.log('Ixi To nao')
  }

//SOME

  let fruits = ['Manga','Melancia','Banana','Kiwi']

let verificar = fruits.some((item) => {
  return item.length >= 4;
 });

  if (verificar){
   console.log('Algums')
  }else {
    console.log('Nenhum')
  }

*/

/*---------------- Ordenação De Array ---------------------

let cars = [
  {tinta:'preta', vencimento :'2022' }, // A funçãos empre vai ficar sendo feita, mesmo eu colocando outro objeto pois ela avalia todos eles.
  {tinta:'rosa', vencimento :'2021' },
  {tinta:'verde', vencimento :'2023' },
  {tinta:'prata', vencimento :'2020' }
]
cars.sort((a,b) =>{
  if (a.vencimento > b.vencimento){
    return 1
  }else if (a.vencimento < b.vencimento){
    return -1
  }else {return 0}
})
console.log(cars)

*/



/* ---------------------ATIVIDADES LOOP ------------------------

let numer = 0
while(numer < 100){
  numer++
  console.log(numer)
}


//faça um loop que mostre todas as frutas
/*
let fruits = ['maça','Banana','Cacete'];

for (let x = 0; x < fruits.length; x++){
 console.log(fruits[x])
}
*/


/*

let number = 0 
 
while(number <= 10){
  console.log(`Seu numero é ${number}`)
  number++
}

for (let numero = 0; numero <= 10; numero++ ){
  alert(`seu number é ${numero} `)
}
*/
/*------------------ For Loop -----------------

for (let x = 1; x <= 5; x++){
console.log(`vou contar até ${x}`)
}

// ------------------- loop 2 -----------------
let cores = ['vermeio','rosio','azu','vede'];

for (let x = 0; x < cores.length; x++){
  console.log(cores[x])
}

// ------------------ loop 3 -----------------
let cores = ['vermeio','rosio','azu','vede'];
cores.push('rouxi')

// ------------------ loop 4 -----------------
let cores = ['vermeio','rosio','azu','vede'];
cores.push('rouxi')

for (let i in cores){
  console.log (cores[i])
}

for (let cor of cores){
  console.log(cor)
}
*/


/* ----------------- More Object #2 ------------------

  let carros = {
   carro:  [{modelo: 'Fiat', cor:'branco'},
           {modelo:'Ferrari', cor:'vermelho'}
   ]
 }
 console.log(carros.carro[1].modelo) 

*/

/* ------------------- Mais Objetos -------------------

let personagem = {
  nome: 'Persona',
  atack: 5, 
  defense: 14

}
personagem.defense += 5 //mais igual significa aumentar
personagem.nome = 'Peido'
console.log(`Olá ${personagem.nome} seu ataque é de ${personagem.atack} e sua defesa é de ${personagem.defense}`)

*/


/*--------------- Objetos ---------------
//Array é mais pra listas de coisas, já o objeto é mais para acessar.

let personagem = {
  nome: 'Persona',
  atack: 5, 
  defense: 14

}
console.log(`Olá ${personagem.nome} seu ataque é de ${personagem.atack} e sua defesa é de ${personagem.defense}`)

*/

/*---------------- Exercico ARRAY --------------------

let carros = ['BMW', "Ferrari", "Bugate"];
//let x = 1
console.log(carros[1])


carros[1] = 'mercedes' //mudei a ferrari por mercedes, apenas adicionando por cima
console.log(carros);

carros[3] = 'volvo' //mudei a ferrari por mercedes, apenas adicionando por cima
console.log(carros);

console.log(carros.length) //mostrei o total de itens no array

*/



/*---------------Shift,Pop e Lenght -----------------

let ingredientes = [
  'ovo',
  'agua',
  'merda',
  'macaco', 
]
console.log(`Total de Ingredientes: ${(ingredientes.length)}`)
//.pop = remove o ultimo array
//.shift = remove o primeiro array


*/




/*------------------- Array ---------------------


let nomes = ['cavalos','dalvas',['Carlinhos Lore']]
let numberes = [10,'Mil','cavalos', nomes]
console.log(numberes[3][2][0]) //aqui é como se fosse abertura de pastas, eu entrei em numberes primeiro, depois entrei em nomes depois entrei entrei em carlinhos lore e no fim entrei no array de carlinhos lore.


let arrei = ['lula','bausonaro','gugu']
console.log (arrei[1])
//push adiciona




/*---------------- Function dentro de Function -------------------


   function Addsquare(a,b){ 
     const square = (x) => x * x  //Aqui usei uma Arrow Function no lugar de uma function só por questão de organização.
       let Sqra = square(a)
       let Sqrb = square(b)
        return Sqra + Sqrb
  
   }
   console.log(Addsquare(3,4));
       

*/

/*----------------- AROW FUNCION -----------------

let somar = (x,y) => {
  return x * Y
}
console.log(somar(12,3))
*/



/*------------------ MORE EXERCICE --------------

function acessar (usuario, senha){
  if(usuario === 'manel' && senha === '123'){
    return true
  } else {
    return false
  } 
}  

  let usuario = 'manel'; 
  let senha = '123';
  let validacao = acessar(usuario,senha);
  if(validacao){
    console.log(`vc é boi`)
  } else {
    console.log(`vc naum pode`)
  }


*/


/*----------------- EXERCICIO FUNCTION #2 --------------------
Calcule o preço de imovel 
- m2 = 3.000
   se tiver 1 quarto, o m2 é 1x
   se tiver 2 quarto, o m2 é 1.2x
   se tiver 3 quarto, o m2 é 1.5x




function calcImovel(metragem, quarto){
   let m2 = 3000
   let preco = 0

   if  (quarto === 1){
    preco = metragem * m2
   } else if (quarto === 2 ){
    preco = metragem * m2 * 1.2
   } else if (quarto === 3 ){
    preco = metragem * m2 * 1.5
   }
   return preco //Tenho que retorna preco para que não fique indefinido e que retorne em preco la embaixo
  }

  let metragem = 123;
  let quarto = 3;
  let preco = calcImovel(metragem, quarto);
  console.log (`o seu imovel custa R$${preco}`)

*/


/*----------------------- MAIS FUNCTION ----------------------------

function calPct(n1,n2){
  return (n2 / n1) * 100  
  }
let x = 40;
let y = 10; 
let pct = calPct(n1,n2);
console.log (`${pct}% de ${x} é ${y}`)


*/

/*function verificar(idade){
   if (idade >= 18){ 
   return true; }
   else{ return false;
  }
}
let idade = 14;
let verificacao = verificar(idade);  // quando jogar am variavel para baixo da function, podemos usar-la 

if(verificacao ){
  alert('vc é guei')
   }else alert('vc nn é')
*/
/*------------------- RETURN ---------------------

function nomeCompleto(nome,sobrenome){
   return `Seu nome é ${nome} ${sobrenome}` //return é o fim da function então toda vez que usar, finaliza a function.
}
                                              //Return Está retornando para completname, está retornando uma string que é a que ta dentro da function, return retorna para quem fez sua chamada ou seja completname fez sua chamada.
let completname = nomeCompleto("manel","caps")
console.log(completname)

*/
/*//------------------------------- Passando parâmetros em funções  -------------------------------

function multiplicar(x,y){                             // o x e y estão servindo como variaveis, então toda variavel que eu colocar vai servir como um let por exemplo. 
   let resultado = x * y;                               
   console.log(`resultado = ${resultado}`)             //como a function só solta os codigos quando uso ela, o console.log so vai ser usado quando eu usar, por isso aparece tudo certinho no console.
}

 multiplicar(3,9);




function multiplicar(x,y){                             // o x e y estão servindo como variaveis, então toda variavel que eu colocar vai servir como um let por exemplo. 
   let comparacao = x < y                               
   console.log(`será = ${comparacao}`)             //como a function só solta os codigos quando uso ela, o console.log so vai ser usado quando eu usar, por isso aparece tudo certinho no console.
}
 multiplicar(3,9)

 // aqui é como seria se o codigo a cima fosse escrito sem o function, como visto, as duas () do function guarda uma variavel/let).
 let x = 2
 let y = 1

 let comparar = x > y;
 alert(comparar);


 function nomeCompleto(nome,sobrenome){                
  console.log(`Nome:${nome}  Sobrenome:${sobrenome}` )
}                                                       //Toda Function pode ser usada mais de uma vez, é exatamente por isso que usamos a function, pois ela armazena dados, como visto no codigo abaixo, por exemplo: sempre que precisarmos pegar um Nome Completo usamos a function nomeCompleto, ao inves de fazer outra function.
    nomeCompleto("Rafael","suado")
    nomeCompleto("Ladrao","Dgalinha")
*/


/*//---------------- FUNCTION ----------------

function pasta(){                                // funciton funciona como uma pasta, todo codigo colocado dentro de uma funcion fica dentro dele, por isso só funciona quando eu uso ele.
    alert(`olá baitola`)
    alert(`seja bem vindo guei`)
    alert(`para de tentar entrar no site pora`)
}
     pasta()                                     //uso da function
*/


/*//----------------- SWITCH -----------------
let profissional = `Marinheiro`                  // Se não pegar nenhnum case, ira pegar o padrão, que no caso é o Dafault lá em baixo
switch (profissional) {
     case 'policial':  
      alert(`PEGUE SUA CAMISA AZUL`) 
     break
     case 'bombeiro':  
      alert(`PEGUE SUA CAMISA VERMELHA`)
     break 
     case 'marinheiro':  
      alert(`PEGUE SUA CAMISA BRANCA`)
     break 
     default:
      alert(`PEGUE SUA CAMISA PRETA`)
      break;
    }
  */  
    


/*//------------------ Condicional Ternário -----------------

let age = 4

let IsAdult = (age >= 18 && age <60) ? `é adulta` : `Não é adulta`
// a interrogação(?) serve como if e os 2 pontos(:) servem como else. 
console.log(IsAdult)

*/

//Exercicio
/*
//Crie uma condicional para verificar se o preço da carne está barata ou caro. Obs: Até 45 está barato.
let preço = 50
if(preço <= 45){
  alert(`A Carne Está Barata`)
}     else {alert(`Está cara Demaisi`)}

let x = 10
let y = 5
console.log (x > y) // se x for maior que y sera true, se não sera false.

let x = 5
let y = 5
console.log (x == y) //se eu colocar == 2 iguais vai ser true, pois ele busca o number mesmo ele sendo stinger

let x = "10"
let y = 10
console.log (x === y) // se eu colocar === 3 iguais vai ser false, pois ele não busca o number mesmo ele sendo stinger

let x = 5
let y = 10
console.log (x != y)// o sinal de diferente sera true pois, x é diferente de y? se sim true, se não false.

*/



/*// ---------- Bolean, True and False ----------
//if é apenas uma verificação de true ou false.

let number = 18
let age = number > 16
// se o number for maior que 16 a mensagem abaixo sera mostrada pois age será true, exemplo: O number Dentro do age é maior que 16? se sim, age é true se não, é false.
if (age){
  alert(`vc pode votar`)
} else{alert(`vc não pode votar`)} 

*/



/*// ----------- ELSE IF ------------
let age = 20

if (age < 18){
alert(`vc é jovem`)
  } else if (age >= 18 && age < 60){ //Aqui usamos os Multicondicionais no else if para limitar até o numero 60 ou seja colocando um ponto de começo e fim, para conseguir da continuidade no else if de baixo.
  alert(`vc é adultero`)
     } else if (age >= 60){
       alert(`vc é veio`)
     }

    
*/


/*------------- MULTICONDICIONAIS && ----------------
 let idade = 1
if (idade >=18 && idade <60 ){
  console.log (`vc é um adulto`)
} else{alert (`vc nn é adulto`)}

//se o if for colocado dentro de outro if ele se torna parte daquele sistema ou seja se eu colocar o if fora, ele não se torna um comando a parte.
// *MAS O COMANDO A CIMA FAZ MELHOR DO QUE ESSE FAZ.

if(idade >= 18){
  if(idade <= 60){
    console.log(`voce é um adulto`)
  }
}


*/

/*------------ -- Condicional == e === -------------------

let number = "20";
// == é menos especifico, mesmo "20" sendo uma string ele encontra um number.
if(number == 20){

console.log(`vc tem 20 anos`)
}

let number = "20";
// === já esse é mais especifico, se o "20" não for number ele não ira achar o number 
if(number === 20){
  console.log(`vc tem 20 anos`)
}
*/


/*IF E ELSE

let idade = 19
if (idade > 18){
  alert(`eu sou guei`)
}else {alert(`vc nn é guei`)}

*/

//templateString
/*
let idade = 18
let lgbt = 'gaymer'
let mostrarIdade = ` Ele tem ${idade * 2} Anos e é ${lgbt}`

console.log(mostrarIdade)
*/
/*OPERAÇÕES EM VARIAVEIS
let n1 = 15
let n2 = 22
let n3 = 10

let calc = n1 + n2 - n3;
console.log(calc)
*/

/*VAR ,CONST E LET
const nome = "LucasPreto"
//nome = "Joao"
console.log(nome)

let sobrenome = "Cuzin"
sobrenome = "Rapidex"
console.log(sobrenome)

var endname = "Nigger"
endname = "NoNiger"
console.log(endname)
*/


/*
let carro = "Ferrari"
console.log(carro)

let bolo = 19.90
console.log(bolo)

let cidade = "são paulo"
console.log(cidade)
*/

//RECOMEÇO!!!!!!!!!!!!!!!!!!!!!!!RECOMEÇO!!!!!!!!!!!!!!!!!!!!!!!RECOMEÇO!!!!!!!!!!!!!!!!!!!!!!!//
/*let obj = [1,2,3,4]
let maisObj = [...obj,5,6,7,8]
console.log (maisObj)
*/

/*
 function comecar(){
    timer = setInterval(showTime, 1000);
    let timer;
 }
 function parar(timer){
   clearInterval(timer)
 }

 
 function showTime(){
     let d = new Date();
     let h = d.getHours();
     let m = d.getMinutes();
     let s = d.getSeconds();
     let txt = h+':'+m+':'+s; 

     document.querySelector(".post").innerHTML = txt;
}
*/

/*let lista = [
{id:1, nome:'tio', sobrenome:'paulo'},
{id:2, nome:'primo', sobrenome:'tue'},
{id:3, nome:'sobrinha', sobrenome:'sapeca'},
]
let pessoa = lista.find(function(item){
  return (item.id == 3) ? true : false;
});

let res = pessoa

console.log (res)
*/


/*let lista = ['20','30','50'];
let lista2 = [];

lista2 = lista.filter(function(items){
  if (items < 30){
    return true;
  } else {
    return false;
  }
});
  
 let res = lista2;
 console.log(res)

//remover do array
*/


/*let nome = 'Manel do Capa'
let resultado = '';

if (nome.indexOf(`${nome}`) > -1){
  resultado = 'vc é capudo'
}else {
  resultado = 'vc nn é o capudo ff'
}
console.log (resultado)
*/

/*async function readPost() {
  let postArea = document.querySelector('.post');
  postArea.innerHTML = 'Carregando...';

  let response = await fetch('https://jsonplaceholder.typicode.com/postshttps://jsonplaceholder.typicode.com/posts')
  let json = await response.json();

  if (json.length > 0) {
    postArea.innerHTML = ''
    for (let i in json) {
      let postHTML = `<div><h1>${json[i].title}</h1>${json[i].body}</hr></div>`;
      postArea.innerHTML += postHTML;
    }
  } else { postArea.innerHTML = 'Erro 404'

  }

  async function addNewPost(title, body){
   await fetch (
    'https://jsonplaceholder.typicode.com/postshttps://jsonplaceholder.typicode.com/posts',
   
   {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
     },
     body: JSON.stringify({
      title,
      body,
      userID: 2
      })  
     }
    );
    document.querySelector('#title_text').value = '';
    document.querySelector('#body_text').value = '';

    readPost();
   }



  document.querySelector('.eventbotao').addEventListener('click', () => {
   let title = document.querySelector('#title_text').value;
   let body = document.querySelector('#body_text').value;

   if(title && body) {
    addNewPost(title,body)

   } else {
      alert("Preencha essa Poha Mermao")
   }
  })
}

readPost()
*/



/*function clicou(){
     
  fetch('https://jsonplaceholder.typicode.com/osts')

     .then((response) =>{
      return response.json();
   })
   .then((json) => {
     alert (`Voce está vendo ${json[0].title}`)
   })
  .catch (() =>  {
    alert ("Deu Problema ai Meu Mano")
  })
  
  }
  
  
  document.querySelector('#Botao').addEventListener('click', clicou());
*/



/*function clicou(){

fetch('https://jsonplaceholder.typicode.com/posts')
   .then((response) =>{
    return response.json();
 })
 .then((data) => {
   console.log(data)
 })


}


document.querySelector('#Botao').addEventListener('click', clicou);

*/
/*class person {
  
  age=0;

  constructor(name) {
    this.name = name;

  }
}

function createPerson(name,age) {
  let p = new person (name);
   p.age = age;
   return p;
}

let p1 = createPerson("Luva", 19);

console.log (`${p1.name} é gay mas tem ${p1.age} anos`)

*/


 /*HERANÇA

 class person {
   constructor (firstname){
   this.firstname = firstname;
   }  

   age= 0;

  }

  class student extends person {

    constructor (firstname, id) {
      super (firstname)
      this.id = id;
    }
  }

  let p1 = new student ("Speed",1);
  p1.age = 22

  console.log (`Seu nome é ${p1.firstname} você tem ${p1.age} anos e sua 
  marticula é #${p1.id}`)
*/

/*SET

   get fullName(){
    return `${this.firstname} ${this.lastname}`;
 }

 get age() {
  return this._age;
 }

 set age(x){
   if (typeof x == 'number') {
    this._age = x ;
   }
 }
}

let p1 = new person ("Cacau", "medeiros",12)
let p2 = new person ("luvade","pedreiro",20)
let p3 = new person ("empresario","doluva", 12)

p1.age = 153
console.log (` O seu nome ${p2.fullName} e você tem ${p1.age} anos`)
*


/*PASSWORD VIEW E SET ATRIBUTE
function clicou(){
  const input = document.querySelector('input');
  const botao = document.querySelector ('.botao')


  if ( input.getAttribute('type') === 'text'){
       input.setAttribute('type', 'password');
       botao.innerHTML = "Show Password"
      } else {
       input.setAttribute('type', 'text');
       botao.innerHTML = "Ocult Password"
  }
}
*/





/* AFTER E BEFORE
function clicou(){
const list = document.querySelector('#task');
 const ul = task.querySelector('ul');

 let newul = document.createElement('ul') ;

  for (let i = 0; i < 5; i++) {
    let Nwli = document.createElement('li')
    Nwli.innerHTML = "item add" + i
    newul.append(Nwli);

  }
  ul.after(newul);
}
  
const newButton = document.createElement('button')
newButton.innerHTML = "botao"
ul.after(newButton)
*/

/* APPEND E APPENDCHILD
function test() {   
    const list = document.querySelector('#task');
    const ul = task.querySelector('ul');

     let Newli = document.createElement('li');
     Newli.innerText = "elements_4";

     ul.appendChild(Newli);}
*/


 /* MANIPULA"CAO DE DADOS -innerHTML
  function test() {   
    const list = document.querySelector('#task');
    const ul = task.querySelector('ul');
    ul.outerHTML = "<strong>Substitued!</strong>"
   
    ul.children[1] .innerHTML ="<strong>Item Alternad</strong>";}
  */



//LOOP
/*for( let n = 1; n <= 10; n++) {
    for( let n1 = 1; n1 <= 10; n1++){
        let resultado = n * n1;
    console.log (` ${+n}  x ${n1} = ${resultado}`)   
    }
 }
*/

/* In 
let cores = [
    { nome: 'macaco', qt:10},
    { nome: 'poha', qt:5},
    { nome: 'mulambo', qt:12},
]  

 for ( let n = 0; n < cores.length; n++) {
     console.log (cores[n].nome.)}

 for (let i in cores) {
    console.log(cores[i].qt) 
 }
    for (let i in cores) {
    console.log(cores[i].nome)
 }
   */

/* WHILE
let number = 0;

 while (number <= 10){
 console.log (`Seu Numero É ${number}`);
 number++
}
  */




/*AtiVidade In
let fruits= ['Maça','Banana','Uva'];

for ( let i in fruits){
    console.log(fruits[i])
}
  */




/*1 a 100 usando While

let numbers = 1;

while ( numbers <= 100) {
    console.log (`Existem ${numbers} Numbers`);
    numbers++
} 
*/


// SORT AULA
//let cars = [
 //   {brand: 'fiat', year: 2022}, 
 //   {brand: 'bmw', year: 2018}, 
 //   {brand: 'fearrra', year: 2020}, 
//]

//cars.sort ((a,b) => b.year - a.year)

//console.log(cars)



/*
// ELEMENTO
const input = document.querySelector ('input')
const ull = document.querySelector('ul') 

//FUNÇÃO
  - Adicionar Elemento
  
function handleKeyUp(e) {
 if (e.key === 'Enter') {
    const newli = document.createElement ('li')
    newli.innerHTML = input.value
    ull.appendChild (newli)


    - Limpar o campo 
    input.value = ''; 
    

 }    input.addEventListener('keyup',handleKeyUp);
*/
