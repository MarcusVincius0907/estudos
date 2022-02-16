var inputEx1 = document.querySelector('#inputEx1')
var resposta = document.querySelector('#respostaEx1')
var btn = document.querySelector('#btnEx1')

function verificaIdade(){
    
    return new Promise(function (resolve,reject){
        
    if(inputEx1.value){

        if(resposta.innerText)
            resposta.innerText = ''

        if(inputEx1.value >= 18){
            resolve('Eh maior de 18')
            var text = document.createTextNode('Eh maior de 18')
            resposta.appendChild(text)
            inputEx1.value = ''
            
        }
        else{
            reject('Eh menor de 18')
            var text = document.createTextNode('Eh menor de 18')
            resposta.appendChild(text)
            inputEx1.value = ''
            
        }    
        
    }

    })
}

function print(){
    console.log('oi')
}

btn.onclick = function(){
    setTimeout(() => {
        verificaIdade()
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error){
            console.warn(error)
        })

    }, 2000);
    
} 

//ex2

var inputEx2 = document.querySelector('#inputEx2')
var btnEx2 = document.querySelector('#btnEx2')
var listaEx2 = document.querySelector('#listaEx2')

function getRepo(){

    request(inputEx2.value)
    .then(function(response){
        console.log(response)
        fillList(response)
    })
    .catch(function(error){
        console.warn(error)
    })

}

function request(nome){
    return new Promise(function(resolve,reject){
        
    var xhr = new XMLHttpRequest()

    xhr.open('GET','https://api.github.com/users/'+nome+'/repos')
    xhr.send(null)

    xhr.onreadystatechange = function(){
        if(this.readyState === 4)
            if(this.status === 200){
                resolve(JSON.parse(this.responseText))
            }else
                reject('algo deu errado')
            
        }
    })
}

function fillList(array){

    if(listaEx2.innerText)
        listaEx2.innerText = ''

    for(item of array){
        var liEx2 = document.createElement('li')
        liEx2.innerText = item.name
        listaEx2.appendChild(liEx2)
        console.log(item.name)
    }
    

}

btnEx2.onclick = getRepo