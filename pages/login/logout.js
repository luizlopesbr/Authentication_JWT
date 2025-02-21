logout = () => {
    localStorage.removeItem("token"); // Remove o token JWT armazenado
    sessionStorage.clear(); // Limpa possíveis dados da sessão
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Remove cookie JWT, se existir
    alert("Você foi deslogado!");
    window.location.href = "/pages/login/authentication.html"; // Redireciona para a página de login
}
    
document.getElementById("btnLogout").addEventListener("click", logout)
