function calculateFLAMES() {
  const boyName = document.getElementById("boyName").value.toLowerCase();
  const girlName = document.getElementById("girlName").value.toLowerCase();
  const boyFile = document.getElementById("boyImage").files[0];
  const girlFile = document.getElementById("girlImage").files[0];

  // Convert images to Base64
  const reader1 = new FileReader();
  const reader2 = new FileReader();

  reader1.onload = function(e) {
    localStorage.setItem('boyImage', e.target.result);
  }
  reader2.onload = function(e) {
    localStorage.setItem('girlImage', e.target.result);
  }

  reader1.readAsDataURL(boyFile);
  reader2.readAsDataURL(girlFile);

  // FLAMES calculation
  function getFlamesResult(name1, name2) {
    let combined = (name1 + name2).toLowerCase().replace(/\s/g, '');
    let uniqueCount = [...new Set(combined)].length;
    const flames = ['Friends', 'Lovers', 'Affection', 'Marriage', 'Enemies', 'Siblings'];
    return flames[(uniqueCount % 6)];
  }

  const result = getFlamesResult(boyName, girlName);
  localStorage.setItem('flamesResult', result);

  // Redirect to result page
  window.location.href = 'result.html';
}