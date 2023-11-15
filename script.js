let screen=document.querySelector("#txt");
let buttons=document.querySelectorAll(".btn");
let clear=document.querySelector(".clear");
let equal=document.querySelector(".equal");
let back=document.querySelector(".back");

buttons.forEach(function(button){
    button.addEventListener('click',function(evt){
        let value=evt.target.dataset.num;
        screen.value+=value;
    })
});
equal.addEventListener('click', function (evt) {
    if (screen.value === '') {
        screen.value = "";
    }

    else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
});

clear.addEventListener('click',function(evt){
    screen.value="";
})
back.addEventListener('click',function(){
    let a=parseInt(screen.value/=10);
    screen.value=a;
})