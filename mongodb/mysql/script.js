document.getElementById('userForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form data
  const formData = new FormData(event.target);
  const userData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone')
  };

  // Send form data to the server
  axios.post('/submit', userData)
    .then((response) => {
      console.log('Data submitted successfully');
      window.location.href = 'success.html'; // Redirect to success page
    })
    .catch((error) => {
      console.error('Error submitting data:', error);
      window.location.href = 'error.html'; // Redirect to error page
    });
});
