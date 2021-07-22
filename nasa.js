console.group("Success");
fetch('https://api.nasa.gov/planetary/apod?api_key=yVVQ7ISVmsBlA18MUHXYgAlNCrPhANQ9kxvzbGje')
  .then(response => {
    return response.json();
  })
  .then(json=>{
        var apod = json;
        var apod_place = document.getElementById("apod");
        apod_place.innerHTML = apod.explanation;
        var image = "image";
        var nameEls = document.getElementById("apod_img");
          var image_url = apod.hdurl;
          var image = document.createElement("img");
          image.src = image_url;
          image.alt= "  Image not avavible";
          image.width = 304;
          image.height = 228;
          nameEls.appendChild(image);
          console.log("APOD finished");
})
