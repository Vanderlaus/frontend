function carregaDados(){
    return JSON.parse(localStorage.getItem('Funcionario'))
};

function carregarEditar(event, id){
    console.log('Evento de click', event);
    event.preventdefault();
    carregarEditar(id)
};

function carregar(){
    console.log('Carregando janela');
    var tbody = document.querySelector('tbody');
    tbody.innerHTML = ''

    var funcionarios = localStorage.getItem('Funcionario');

    funcionarios = JSON.parse(funcionarios);
    
    funcionarios.forEach((e) =>{
    var tr = `<tr>
                    <td>${e['id']}</td>
                    <td>${e['nome']}</td>
                    <td>${e['cargo']}</td>
                    <td>${e['salario']}</td>
                    <td>
                    <a href="editar.html?id=${e['id']}">editar</a>
                    <button href="" onclick="deletar(${e['id']})"">deletar</button>
                    </td>
                </tr>`

        tbody.innerHTML += tr
        
    });
}
function deletar(id){
    var lista = carregaDados();
    var novalista = [];
    lista.forEach(e => {
        if(e['id'] != id){
            novalista.push(e)
        }
    });
    localStorage.setItem('Funcionario', JSON.stringify(novalista));
    carregar();
}

window.onload = carregar