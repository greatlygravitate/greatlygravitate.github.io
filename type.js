setTimeout(function(){
    function type() {
        var i = 0;
        var txt = 'Type your text here';
        var speed = 50;

        function typeWriter() {
          if (i < txt.length) {
            document.getElementById("type").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }
        type()
    }
    type()
}, 1000);
