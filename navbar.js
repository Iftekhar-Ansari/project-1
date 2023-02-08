
document.querySelector("form").addEventListener("btn", SearchFun);

function SearchFun(){

    event.preventDefault();
    var search=document.getElementById(".srch").ariaValueMax;

    console.log(search);
}

