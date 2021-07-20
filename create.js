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
  
  
var url = "https://greatlygravitate.github.io/posts.json";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send(data);

}
