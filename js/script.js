//efeito do botão voltar ao Topo
let topo = () => {window.scrollTo({top:0, left:0, behavior:'smooth'})}
//Validação de Login
let validarLogin = () => {
    var logado = 0;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == 'admin' && senha == '12345') {
        window.alert("Usuário Logado com sucesso!")
        window.location = "index.html"
        logado = 1
    }

    if (logado == 0){
        alert("Confira se as credênciais estão corretas!")
    }

}
//Ativar alert no botão cadastrar
let cadastrar = () =>{
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    usuario && senha? alert("Usuario cadastrado com sucesso!") : alert("Preencha as credências de maneira correta!") 
}