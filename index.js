// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        const id = object.id;
        const idElement = document.createElement('p');
        idElement.textContent = "New User ID: " + id;
        document.body.appendChild(idElement);
      })
      .catch(function(error) {
        const errorMessage = error.message;
        const errorElement = document.createElement('p');
        errorElement.textContent = "Error: " + errorMessage;
        document.body.appendChild(errorElement);
      });
  }
  