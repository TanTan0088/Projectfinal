document.addEventListener("DOMContentLoaded", function () {
    const btnchnge = document.getElementById('myButton');
    const outputchnge = document.getElementById('output');
    const bgchnge = document.getElementById("body");


    btnchnge.addEventListener('click', function () {
        document.body.classList.toggle("click");
        if (document.body.classList.contains("click")) {        
            outputchnge.textContent = "I love Tekken"; 
           bgchnge.background = black;
        } 
        else 
        {
           outputchnge.textContent = "My name is Christian Cancio"
        }
    });
});
