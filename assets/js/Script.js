//traz dinamicidade para a pagina, nao deixar ela toda chumbada ou fixa (LEMBRANDO QUE SCRIPT É SEMPRE POR ULTIMO)
                                                    //DIFERENÇA ENTRE VAR LET E CONST
//VAR  - CRIA VARIAVEIS GLOBAIS, TODO MEU ARQUIVO IDENPENDENTE DO LUGAR VAI CONSEGUIR ACESSAR - SEM ESCOPO - MÁ PRATICA
//LET - TEM ESCOPO
//CONST - NAO PODE MUDAR DEPOIS

//FUNÇÕES EXEMPLOS


/*function calcularSoma(n1,n2){
 let resp = n1 + n2
 return resp
}
console.log(calcularSoma(12,22))*/


//EVENTOS
//Para usar o addEventListener eu preciso pegar o elemento que eu quero que fique escutando
//depois de pegar o elemento eu chamo o AddEventListener para adicionar um escutador de eventos nesse elemento
//Elemento.addEventListener('evento', função); -> você passa o evento que ele ta escutando e a função que vai executar a partir da ocorrência do evento(sempre passar em uma string)


/* const tweetar = document.querySelector('button')
tweetar.addEventListener('click', imprimirConsole)

function imprimirConsole(){
    console.log('click')
} */


//Então exemplificando
//eu pego um elemento adiciono um escutador de evento no elemento passo qual evento vai escutar e passo a função que vai executar apartir da ocorrencia do evento

//sempre é bom criar passo a passo pra resolver determinado problema
//1passo = captrurar o valor da textarea para criar o tweet
//2passo = construir o tweet
//3passo = imprimir esse tweet

const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button')
const feed =  document.querySelector('.tweets ul')

tweetar.addEventListener('click', pegarTweet)


//o event vira parametro da função pq ele é um evento padrao do eventlistener, se tiver eventlistener vc usa
//nesse event vem um monte de coisa tipo em qual posição ocorreu e foi clicado q horas foi, quem foi e oq tinha(um evento padrao)
function pegarTweet(event){
    event.preventDefault() //evita que o evento padrao nao seja interceptado para os eventos nao serem barrados pelos padroes que vem da tag form
    //o comportamento padrao vem da tag form que quando clicar no botao vai tentar fazer uma submissão coisa padrao do form, pegar os dados e tenta mandar pra algum lugar que nao existe
    //com o preventDefault voce previne esse comportamento impede que o form execute o evento de envio para lugar nenhum e segure para ser mostrado
    const TweetTextarea = textarea.value
    criarTweet(TweetTextarea) //PASSOU A RESPONSABILIDADE PARA A CRIAR TWEET JÁ QUE ESSA FUNÇÃO PEGOU O VALOR DO TWEET E A OUTRA VAI CRIAR APOS TER O VALOR
} 

//CRIAR O TWEET
//TEXTO DO TWEET
//NOME
//FOTO
//NOME USUARIO
//HORARIO


function criarTweet(tweetTexto){


    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()

    const tweet = {
        nome: "YourName",
        foto: "./assets/img/nophoto.png",
        usuario: "@Usern22",
        texto: tweetTexto,
        tempo: `· ${hora}:${minutos} h`
    }
    listarTweet(tweet)

}

//fazer a listagem do tweet
function listarTweet(tweet){

  let li = document.createElement("li")

  li.innerHTML = `
    <img src="${tweet.foto}"></img>
    <div class="assunto">
        <h3>${tweet.nome}</h3>
        <span> ${tweet.usuario} ${tweet.tempo}</span>
        <P>${tweet.texto}</P>
    </div>`

    feed.appendChild(li)
    textarea.value = ""
}

/* OUTRA FORMA DE RESOLVER (QUE FOI OQ O PROFESSOR FEZ)

  //DESESTRUTURAÇÃO = DESAMARRAR AS FUNÇÕES E DESUSTURUTAR ELAS PARA VOCE CONSEGUIR ESPALHAR AS IRFORMAÇÕES PARA PEGAR SEPARADAMENTE
    const {nome,foto,usuario,texto,tempo} = tweet
    console.log(tweet.usuario)



    //CRIANDO ELEMENTOS PARA LISTAR O TEMPLATE
    let li = document.createElement('li')
     EXEMPLO DE ADICIONANDO UMA CLASSE PELO JS
    li.classList.add("conteudo_principal")



    let img = document.createElement('img')
    img.src =foto

    let div = document.createElement('div')

    let h2 = document.createElement('h2')
    h2.innerHTML = nome

    let span = document.createElement("span")
    span.innerHTML = `${usuario} ${tempo}` 

    let p = document.createElement("p")
    p.innerHTML = texto

    //ADICIONANDO ELEMENTOS DENTRO DA LI E DA DIV
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    li.appendChild(img)
    li.appendChild(div)
    
    feed.appendChild(li) */