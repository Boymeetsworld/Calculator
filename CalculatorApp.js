
function del(){
    const value=document.getElementById('screen').value;
    document.getElementById('screen').value=value.substr(0,value.length-1);
}

 let two=document.getElementById('two');
two.addEventListener('click',function(){
    const body=document.querySelector('body');
    const toggle=document.getElementById('circle');
    body.classList.add('active1');
    body.classList.remove('active2');
    toggle.style.left='36%';
})
const one=document.getElementById('one');
one.addEventListener('click',function(){
    const body=document.querySelector('body');
    let toggle=document.getElementById('circle');
    body.classList.remove('active1');
    body.classList.remove('active2');
    toggle.style.left='0';
})
const three=document.getElementById('three');
three.addEventListener('click',function(){
    let body=document.querySelector('body');
    let toggle=document.getElementById('circle');
    body.classList.add('active2');
    body.classList.remove('active1');
    toggle.style.left='65%';
})