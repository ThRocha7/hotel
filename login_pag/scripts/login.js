let users = {};

function toggleForm() {
    const loginCard = document.getElementById('login-card');
    const registerCard = document.getElementById('register-card');
    if (loginCard.style.display === 'none') {
        loginCard.style.display = 'block';
        registerCard.style.display = 'none';
    } else {
        loginCard.style.display = 'none';
        registerCard.style.display = 'block';
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username && password) {
        users[username] = password;
        alert('Cadastro realizado com sucesso!');
        toggleForm();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (users[username] && users[username] === password) {
        alert('Login realizado com sucesso!');
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (users[username] && users[username] === password) {
        alert('Login realizado com sucesso!');
        window.location.href = "../../index.html";
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
}