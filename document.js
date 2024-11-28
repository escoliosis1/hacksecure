document.getElementById('registration-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const eyeTest = document.getElementById('eye-test').value;
  
    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }
  
    const data = { name, email, password, eyeTest };
  
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        document.getElementById('success-message').textContent = '¡Registro exitoso!';
        document.getElementById('registration-form').reset();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (err) {
      alert('Error al conectar con el servidor.');
    }
  });
  