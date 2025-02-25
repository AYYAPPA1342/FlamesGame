window.onload = function() {
    document.getElementById('result').textContent = localStorage.getItem('flamesResult');
    document.getElementById('boyImg').src = localStorage.getItem('boyImage');
    document.getElementById('girlImg').src = localStorage.getItem('girlImage');
  }