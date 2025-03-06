document.getElementById('btn1').addEventListener('click', function() 
{
    window.location.href = 'mensalon.html';
});

document.getElementById('btn2').addEventListener('click', function() 
{
    window.location.href = 'womensalon.html';
});

document.getElementById('btn3').addEventListener('click', function() 
{
    window.location.href = 'unisexsalon.html';
});


var topBtn = document.getElementById("top-btn");

  // When the user scrolls down 200px from the top, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display=" none";
    }
  }

  // When the user clicks the button, scroll to the top
  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }



