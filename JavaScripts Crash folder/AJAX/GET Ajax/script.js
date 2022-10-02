console.log("Ajax is here");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click' , buttonClickHandler)

function buttonClickHandler(){
    console.log('you have clicked the fetchBtn Button');

    //Instantiate an xhr object 
    const xhr = new XMLHttpRequest();
    //Opening the object
    xhr.open('GET', 'souvik.txt', true);
    
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
    xhr.send();
}