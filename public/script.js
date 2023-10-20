
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
      loginButton.addEventListener('click', () => {
        console.log('Login button clicked');
      });
    }
  });
  
  function fetchData() {
    fetch('/api/some-data')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data retrieved:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
 
  