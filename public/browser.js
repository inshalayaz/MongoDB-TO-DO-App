document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('edit-me')){
       let user_input = prompt("Update the text", e.target.parentElement.parentElement.querySelector('.item-text').innerHTML);
       if (user_input){
        axios.post('/update-text', {text: user_input, id: e.target.getAttribute("data-id")}).then(() => {
            e.target.parentElement.parentElement.querySelector('.item-text').innerHTML = user_input;
        }).catch( ()=>{
            alert("please try again")
        } );
       }
    }
})