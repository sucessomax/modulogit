document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registroForm = document.getElementById('registroForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual submission for now
            const email = this.email.value.trim();
            const senha = this.senha.value.trim();

            if (!email || !senha) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            if (senha.length < 6) {
                alert('A senha deve ter pelo menos 6 caracteres.');
                return;
            }
            // In a real scenario, here you would send data to the server
            alert('Login simulado com sucesso! (Frontend only)');
            // window.location.href = 'index.html'; // Redirect to dashboard
        });
    }

    if (registroForm) {
        registroForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual submission for now
            const nome = this.nome.value.trim();
            const email = this.email.value.trim();
            const senha = this.senha.value.trim();
            const confirmarSenha = this.confirmarSenha.value.trim();

            if (!nome || !email || !senha || !confirmarSenha) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            if (senha.length < 6) {
                alert('A senha deve ter pelo menos 6 caracteres.');
                return;
            }

            if (senha !== confirmarSenha) {
                alert('As senhas não coincidem.');
                return;
            }

            // In a real scenario, here you would send data to the server
            alert('Cadastro simulado com sucesso! (Frontend only)');
            // window.location.href = 'login.html'; // Redirect to login page
        });
    }
});
