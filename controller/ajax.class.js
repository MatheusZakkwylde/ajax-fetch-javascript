//importação do objeto a ser enviado
import {data} from '../model/data.class.js'
//quando a página estiver toda carregada execute
window.onload = function(){

  let form = this.document.querySelector('#form-ajax')
  let list = this.document.querySelector('#list')
  let btn =  this.document.querySelector('#btn')
  //quando o botão form clicado execute
  btn.addEventListener('click', function(){
    //url da api faike
    const url = 'https://reqres.in/api/users?page=2'
    //Quando é apenas uma requisição não precisa passar os dados de corpo, é opcional
    fetch(url)
    //transforma a resposta em json
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        //ler a lista de usuários
        response.data.forEach(function(user){
            //cria um elemento li
           let item = document.createElement('li')
           //insere elementos htmls no item
           item.innerHTML ='<img src="'+user.avatar+'"> <span>"'+user.first_name+'"</span>'
           //adiciona cada um na lista
           list.appendChild(item)
        });
    })
  })
   
  //dados do form quando o botão for apertado faça
  form.addEventListener('submit', function(event){
      //retirando o evento principal do botão submit para que a página não seja carregada quando
      //o botão for clicado
      event.preventDefault()
    //url post da api faike
    const url = 'https://reqres.in/api/users'
    //passando a url e os dados de cabeçalho
    fetch(url,{method: 'POST',body: JSON.stringify(data)})
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        //mostrando o resultado transformado em json no console
        console.log(response)
    })
  })
}



    
    
        
        
       
       
        

        

       
