const buttons=document.querySelectorAll('.Button');
const body=document.querySelector('body')
buttons.forEach((ele) => {
    ele.addEventListener('click',function(e){
        
        console.log(e.target);

        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id
        }
    })
});

