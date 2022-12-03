//criei uma variavel chamada elemento 
//document acessa o documento html que esta sendo chamado o script
//query selector e um methodo interno do javaScript que nos retorna um elemento html 
var elemento = document.querySelector('h1')
//variavel recebendo inner html para incremento ou alteracao descrtivo
elemento.innerHTML += ' JS';
//variavel elemento recebendo estilizacao de cor 
elemento.style.color = '#00f';
//console log e o nosso print retorno variavel
console.log(elemento);

//criei uma variavel chamada limpar
function limpar(event){
    //preventDefault nao atualiza o reload da pagina
    event.preventDefault();
    //acessando documento html buscando elemento form e resetando formulario
    document.querySelector('form').reset();
    
    //console log limpando
    console.log('Limpando....');
}

function salvar(event){
    event.preventDefault();
    console.log('salvando....');
    
    var name = document.getElementsByName('nome')[0].value;
    var ocupation = document.getElementsByName('cargo')[0].value;
    var income = document.getElementsByName('salario')[0].value;

    var Funcionario = {
                    'nome': name,
                    'cargo': ocupation,
                    'salario': income
                }
    console.log(Funcionario)

    localStorage.setItem('Funcionario', JSON.stringify(Funcionario));
}

document.getElementById('salvar').addEventListener('click', salvar)