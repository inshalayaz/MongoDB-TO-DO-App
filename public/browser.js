document.addEventListener('click', (e)=>{
    // Delete Feature
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Do you really want to delete this item permanently?")) {
      axios.post('/delete-item', {id: e.target.getAttribute("data-id")}).then(function () {
        e.target.parentElement.parentElement.remove()
      }).catch(function() {
        console.log("Please try again later.")
      })
    }
  }


    //Update Feature
    if(e.target.classList.contains('edit-me')){
       let user_input = prompt("Update the text", e.target.parentElement.parentElement.querySelector('.item-text').innerHTML);
       if (user_input){
        axios.post('/update-text', {text: user_input, id: e.target.getAttribute("data-id")}).then(() => {
            e.target.parentElement.parentElement.querySelector('.item-text').innerHTML = user_input;
        }).catch( ()=>{
            alert("please try again")
        });
       }
    }
})