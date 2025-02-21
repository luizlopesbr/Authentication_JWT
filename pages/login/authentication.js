//FAZER LOGIN
getCampos = () => {
    const name = document.getElementById('inUsername').value;
    const password = document.getElementById('inPassword').value;

    if (!name || !password) {
        alert('Preencha todos os campos!');
        return null;
    }

    return { name, password}; 
}

fazerLogin = () => {
    //const name = document.getElementById('inUsername').value;
    //const password = document.getElementById('inPassword').value;
    const { name, password } = getCampos(); 

    if (!name || !password) {
        alert('Preencha todos os campos!');
        return;
    }

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, password })
    })
    .then(response => response.json())  
    .then(data => {  
        if (data.auth) {
            alert('Usuário logado!');
            localStorage.setItem('token', data.token); // Armazena o token
            localStorage.setItem('username', name);
            // 🔹 Redireciona para index.html após login bem-sucedido
            window.location.href = "/pages/userWorkSpace.html";
        } else {
            alert('Erro ao fazer login! Verifique suas credenciais.');
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
        alert('Erro na comunicação com o servidor.');
    });
}


let inLogin = document.getElementById("inLogin");
inLogin.addEventListener("click", fazerLogin);


//CADASTRAR LOGIN
loginRegister = () => {
    const { name, password } = getCampos();  

    
    fetch('http://localhost:3000/loginregister', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'  
        },
        body: JSON.stringify({ name, password }) 
    })
    .then(response => {  
        if (response.ok) {  
            alert('Cliente cadastrado com sucesso!');  
        } else { 
            alert('Erro ao cadastrar cliente!');  
        }
    })
    .catch(error => { 
        console.error('Erro na requisição:', error);  
        alert('Erro na comunicação com o servidor.'); 
    });
}



document.querySelector(".inRegister").addEventListener("click", loginRegister);

