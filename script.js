document.querySelector('.choice_alert').innerHTML="";
document.querySelector('.check_alert').innerHTML='';
document.querySelector('.select').addEventListener('click', select);
let re;
let str;
function select(){
    let choice = document.querySelector('.choice').value;
    
    if(choice == 1){
        re = /^([a-zA-Z0-9](\.)?(\-)?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
        document.querySelector('.choice_alert').innerHTML="Choosed for Email validation";
    }
    else if(choice == 2){
        re = /^(\+)?(880)?(0)?[0-9]{10}$/;
        document.querySelector('.choice_alert').innerHTML="Choosed for Phone No. validation";
    }
    else if(choice == 3){
        re = /^[0-9]{4}$/;
        document.querySelector('.choice_alert').innerHTML="Choosed for Post Code validation";
    }
    else {
        document.querySelector('.choice_alert').innerHTML="Invalid Request";
    }
    
}

document.querySelector('.valid').addEventListener('click', valid);
function valid(){

    str=document.querySelector('.check').value;
    
    if(re.test(str)==true){
        document.querySelector('.check_alert').innerHTML='matched';
    }
    else{
        document.querySelector('.check_alert').innerHTML='Unmatched';
    }
}

document.querySelector('.refresh').addEventListener('click', refresh);
function refresh(){
    location = location;
}
