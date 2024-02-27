// Add your code here
function submitData(name,email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      })
      .then(response => response.json())
      .then(data => {
        const id = document.createElement("p");
        id.innerHTML= `User ID: ${data.id}`;  
        const body = document.querySelector('body'); 
        body.appendChild(id)
        })
        .catch(error => {
            const err = document.createElement("p");
            err.innerHTML= `Error: ${error.message}`;  
            const body = document.querySelector('body'); 
            body.appendChild(err)
            console.log(error.message)
        }); 


}