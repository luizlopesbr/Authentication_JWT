document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("username"); // 🔹 Pega o nome do usuário
    if (userName) {
        //document.querySelector(".imgPerfil p").textContent = userName;
        document.querySelector(".userName").textContent = `${userName}, Bem vindo!`;
    }
});
