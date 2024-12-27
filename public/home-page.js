

const forwardButton = document.querySelector('.forward')
const backwardButton = document.querySelector('.backward')
const forwardButton6 = document.querySelector('.forward-6')
const backwardButton6 = document.querySelector('.backward-6')
const forwardButton7 = document.querySelector('.forward-7')
const backwardButton7 = document.querySelector('.backward-7')
const forwardButton8 = document.querySelector('.forward-8')
const backwardButton8 = document.querySelector('.backward-8')
const forwardButton11 = document.querySelector('.forward-11')
const backwardButton11 = document.querySelector('.backward-11')
const container13 = document.querySelector('.container-13')
const container12ul1Li = document.querySelector('.container-12-ul-1 li')

const container5images = document.querySelector('.container-5-ul')
const container6images = document.querySelector('.container-6-ul')
const container7images = document.querySelector('.container-7-ul')
const container8images = document.querySelector('.container-8-ul')
const container11images = document.querySelector('.container-11-ul')

const bzmenu2buttons = document.querySelector('.bz-menu-2-buttons')
const container2hover = document.querySelector('.container-2-hover')
const bzmenu2buttons2 = document.querySelector('.bz-menu-2-buttons-2')
const container2hover2 = document.querySelector('.container-2-hover-2')
const container2hover3 = document.querySelector('.container-2-hover-3')
const bzmenu2buttons3 = document.querySelector('.bz-menu-2-buttons-3')
const bzmenu2buttons4 = document.querySelector('.bz-menu-2-buttons-4')
const container2hover4 = document.querySelector('.container-2-hover-4')
const container2hoverul = document.querySelector('.container-2-hover-ul')
 

const scrollAmmount = 300;

forwardButton.addEventListener('click', function()
{
    container5images.scrollBy({
        left: -scrollAmmount,
        behavior: 'smooth'
    })
})

backwardButton.addEventListener('click', function()
{
    container5images.scrollBy({
        left: scrollAmmount,
        behavior: 'smooth'
    })
})

forwardButton6.addEventListener('click', function()
{
    container6images.scrollBy({
        left: -scrollAmmount,
        behavior: 'smooth'
    })
})

backwardButton6.addEventListener('click', function()
{
    container6images.scrollBy({
        left: scrollAmmount,
        behavior: 'smooth'
    })
})

forwardButton7.addEventListener('click', function()
{
    container7images.scrollBy({
        left: -scrollAmmount,
        behavior: 'smooth'
    })
})

backwardButton7.addEventListener('click', function()
{
    container7images.scrollBy({
        left: scrollAmmount,
        behavior: 'smooth'
    })
})

forwardButton8.addEventListener('click', function()
{
    container8images.scrollBy({
        left: -scrollAmmount,
        behavior: 'smooth'
    })
})

backwardButton8.addEventListener('click', function()
{
    container8images.scrollBy({
        left: scrollAmmount,
        behavior: 'smooth'
    })
})

forwardButton11.addEventListener('click', function()
{
    container11images.scrollBy({
        left: -scrollAmmount,
        behavior: 'smooth'
    })
})

backwardButton11.addEventListener('click', function()
{
    container11images.scrollBy({
        left: scrollAmmount,
        behavior: 'smooth'
    })
})

bzmenu2buttons.addEventListener('mouseover',function()
{
    
    container2hover.style.height = "350px";
    container2hoverul.style.display="block"

})

bzmenu2buttons.addEventListener('mouseout',function()
{
    
    container2hover.style.height = "0px";
    container2hoverul.style.display="none"

})

container2hover.addEventListener('mouseover',function()
{
    
    container2hover.style.height = "350px";
    container2hoverul.style.display="block"

})

container2hover.addEventListener('mouseout',function()
{
    
    container2hover.style.height = "0px";
    container2hoverul.style.display="none"

})


bzmenu2buttons2.addEventListener('mouseover',function()
{
    
    container2hover2.style.height = "350px";

})

bzmenu2buttons2.addEventListener('mouseout',function()
{
    
    container2hover2.style.height = "0px";

})

container2hover2.addEventListener('mouseover',function()
{
    
    container2hover2.style.height = "350px";

})

container2hover2.addEventListener('mouseout',function()
{
    
    container2hover2.style.height = "0px";

})

bzmenu2buttons3.addEventListener('mouseover',function()
{
    
    container2hover3.style.height = "350px";

})

bzmenu2buttons3.addEventListener('mouseout',function()
{
    
    container2hover3.style.height = "0px";

})

container2hover3.addEventListener('mouseover',function()
{
    
    container2hover3.style.height = "350px";

})

container2hover3.addEventListener('mouseout',function()
{
    
    container2hover3.style.height = "0px";

})



bzmenu2buttons4.addEventListener('mouseover',function()
{
    
    container2hover4.style.height = "350px";

})

bzmenu2buttons4.addEventListener('mouseout',function()
{
    
    container2hover4.style.height = "0px";

})

container2hover4.addEventListener('mouseover',function()
{
    
    container2hover4.style.height = "350px";

})

container2hover4.addEventListener('mouseout',function()
{
    
    container2hover4.style.height = "0px";

})

container12ul1Li.addEventListener('mouseover', function()
{
    container13.style.top = "100%";
})
