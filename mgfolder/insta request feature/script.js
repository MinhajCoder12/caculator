var text = document.querySelector('.conttext')
var add = document.querySelector('.addfrnd')
var remove = document.querySelector('.removefrnd')
add.addEventListener('click', ()=>{
    text.style.color = 'red';
    text.innerHTML = 'AddFriend'
    text.style.marginLeft = '80px'
})
remove.addEventListener('click', ()=>{
    text.style.color = 'green';
    text.innerHTML = 'Friend'
    text.style.marginLeft = '120px'
})















