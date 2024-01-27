function login(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'user@gmail.com' && password === 'm') {
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password');
  }
}

function createAccount() {
  window.location.href = 'createaccount.html';
}

function forgetPassword() {
  window.location.href = 'forgetpassword.html';
}

function logout() {
  window.location.href = 'index.html';
}

function changePassword(event) {
  event.preventDefault();

  const currentPassword = document.getElementById('currentPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (currentPassword && newPassword === confirmPassword) {
    alert('Password changed successfully');
  } else {
    alert('Please enter the current password and make sure new passwords match');
  }
}
