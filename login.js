function send() {
  const data = {
    feedback: "",
    name: ""
  };

  data.feedback = document.getElementById("feedback");
  data.name = document.getElementById("name");
  console.log(data);

  fetch('https://feedback.deta.dev/feedback', {
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
