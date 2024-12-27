const emaillable = document.querySelector('.lable-email')

function myFunction()
{
    
    if(emaillable.style.top = "22px")
    {
        emaillable.style.top = "-8px"
        emaillable.style.fontSize = "15px";
    }
    
    emaillable.addEventListener('mouse')
}

function myFunction2(){
    if((emaillable.style.top = "-8px")&&(emaillable.style.fontSize = "15px"))
    {
        emaillable.style.top = "20px"
        emaillable.style.fontSize = "20px";
    }
}