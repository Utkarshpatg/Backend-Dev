function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      return response.json();   
    })
    .then((data) => {
      console.log(data);      
    })
    .catch((error) => {
      console.log(error);      
    });
}

fetchData();
