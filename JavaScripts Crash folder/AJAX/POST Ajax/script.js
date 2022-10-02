console.log("Ajax is here");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click' , buttonClickHandler)

function buttonClickHandler(){
    console.log('you have clicked the fetchBtn Button');

    //Instantiate an xhr object 
    const xhr = new XMLHttpRequest();
    //Opening the object
    // xhr.open('GET', 'souvik.txt', true);
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xhr.getResponseHeader('content-type', 'application/json');
    
//     XMLHttpRequest.readyState
//     Value	State	
//      0	    UNSENT	
//      1	    OPENED	
//      2   	HEADERS_RECEIVED	
//      3   	LOADING	Downloading;
//      4   	DONE	

    xhr.onreadystatechange =function(){
        console.log('ready state is ' , xhr.readyState);
    }

    // what to do when response is ready 
    xhr.onload = function(){
        if(this.status === 200){
        console.log(this.responseText);
         }
    };

    para =  ` {
        "userId": 101,
        "id": 1012,
        "title": "sshdfjsdmsbdufiadffunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architeckjzksdhfisakdnfkjashdto"
      }`;
    xhr.send(para);
}