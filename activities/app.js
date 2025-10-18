document.addEventListener("DOMContentLoaded", function(){
    const btnmr = document.getElementById('btn');
    const divbtm = document.getElementById('info');

    btnmr.addEventListener('click', function(){
        if(divbtm.classList.contains('hide')){
            divbtm.classList.remove('hide');
            btnmr.textContent="Show Less";
        }else{
            divbtm.classList.add('hide');   
            btnmr.textContent="SHOW MORE";
        }
    });
});