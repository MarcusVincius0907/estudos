
var minhaPromise = function(){
    return new Promise(function(resolve,reject){

        var xhr = new XMLHttpRequest()

        xhr.open('GET', 'https://api.github.com/users/MarcusVincius0907')
        xhr.send(null)

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4)
                if(xhr.status === 200)
                    resolve(JSON.parse(this.responseText))
                else
                    reject('deu ruuim')   
        }

    })
}

minhaPromise()
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    })