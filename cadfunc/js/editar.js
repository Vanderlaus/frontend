function carregalocalstorage(){
    return JSON.parse(localStorage.getItem('Funcionario'))
};

function limpar(event){
    event.preventDefault();
    document.querySelector('form').reset();
    console.log('Limpando....')
};

function editar(event){
    event.preventDefault();
    console.log('editando....');
    
    var id = document.getElementsByName('id')[0].value;
    var name = document.getElementsByName('nome')[0].value;
    var ocupation = document.getElementsByName('cargo')[0].value;
    var salary = document.getElementsByName('salario')[0].value;

    var Funcionario = {
                    'id': id,
                    'nome': name,
                    'cargo': ocupation,
                    'salario': salary
                };

var lista = carregalocalstorage();
var novaLista = []
lista.forEach(e => {
    if(e['id'] != id){
        novaLista.push(e);
    }
    else{
        novaLista.push(Funcionario);
    }
});
localStorage.setItem('Funcionario', JSON.stringify(novaLista));
alert('Editado com sucesso...')

limpar(event);
};

function carregaCampos(dado){
    document.getElementsByName('id')[0].value = dado['id'];
    document.getElementsByName('nome')[0].value = dado['nome'];
    document.getElementsByName('cargo')[0].value = dado['cargo'];
    document.getElementsByName('salario')[0].value = dado['salario'];
};

function carregaDados(){
    var urlParameters = new URLSearchParams(window.location.search);
    var id = parseInt = (urlParameters.get('id'));
    var funcionarios = JSON.parse(localStorage.getItem('Funcionario'));
    funcionarios.forEach(e => {
        if(e['id'] == id){
            carregaCampos(e);
        }
    })
};
window.onload = carregaDados();