document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('edit-me')){
       let user_input = prompt("Update the text");
       axios.post('/update-text', {text: user_input, id: e.target.getAttribute("data-id")}).then(() => {
           
       }).catch( ()=>{
           alert("please try again")
       } );
    }
})