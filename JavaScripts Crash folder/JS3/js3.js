//PART 1   ----


// let namasteBtn = document.querySelector('button');
// namasteBtn.addEventListener('click',showMsg);

// function showMsg(){
//     alert("Namaste World!");
    
// }



//PART 2   -----


let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);

function inputMsg(){
  let name = prompt('Enter Name Of Student');
  namasteBtn.textContent='Roll No 1:' + name;
}

// run it one after one .
