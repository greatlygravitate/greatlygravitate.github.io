function create() {
  var name = document.getElementById("name").value;
  var content = document.getElementById("text").value;
  var data = { 
    name: "user",
    content: "content"
  };
  data.name = name;
  data.content = content;
  console.log(data);
  
  fetch('https://greatlygravitate.github.io/posts.json', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success: ', data);
  })
  .catch((error) => {
    console.error('Error: ', error);
  });

}
