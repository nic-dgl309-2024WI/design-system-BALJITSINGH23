function showNav() {
    var element = document.getElementById("nav-items");
    element.classList.toggle("show-items");
  }


  function copyCodeToClipboard() {
    const code = document.querySelector('.code');
    const textArea = document.createElement('textarea');
    textArea.value = code.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Code copied to clipboard!');
  }