var input = document.querySelector('#input')
var btn = document.querySelector('#btn')
var ul = document.querySelector('#ul')
var container = document.querySelector('#cotainer')

var lista = JSON.parse(localStorage.getItem('Item')) || []


function renderList(){
    ul.innerHTML = ''

    for(item of lista){

        var li = document.createElement('li')
        newItem = document.createTextNode(item)   

        var link = document.createElement('a')
        link.setAttribute('href','#')
        var linkNode = document.createTextNode('excluir')
        link.appendChild(linkNode)

        link.style.marginLeft = '10px'

        var pos = lista.indexOf(item)

        link.setAttribute('onclick','deleteItem('+pos+')')


        li.appendChild(newItem)
        li.appendChild(link)
        ul.appendChild(li)
      

        input.value = ''
        console.log(lista)
        registerLS()
    }

}

function deleteItem(pos){
    lista.splice(pos,1)
    renderList()
}

function addItem(){
    lista.push(input.value)
    renderList()
}

function registerLS(){
    localStorage.setItem('Item', JSON.stringify(lista))
}

btn.onclick = addItem

renderList()