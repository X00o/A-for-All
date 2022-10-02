let Name = document.getElementById('btn');

Name.addEventListener('click', function(){
    let nam= prompt("Enter your name");
    let firstChar = nam.slice(0,1);
    let cap1stChar = firstChar.toUpperCase();
    let remainingLeters = nam.slice(1,nam.length);
    var wholeWord = cap1stChar +  remainingLeters ;
    alert("Hello, " + wholeWord  );

})
