document.addEventListener("DOMContentLoaded", function() {
    let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');
    
    function setUserName() {
      let myName = prompt('Please enter your name.');
      if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome to the new world, ' + myName;
      }
    }
    
    if(!localStorage.getItem('name')) {
      setUserName();
    } else {
      let storedName = localStorage.getItem('name');
      myHeading.innerHTML = 'Welcome to the new world, ' + storedName;
    }
    
    myButton.onclick = function() {
      setUserName();
    }
});