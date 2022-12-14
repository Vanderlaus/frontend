from flask import Flask, render_template, request, redirect, session, flash
from pessoa import Pessoa

pessoa1 = Pessoa('Haiko', '15', '1.50')
pessoa2 = Pessoa('Jean', '42', '1.84')
pessoa3 = Pessoa('Gisele', '16', '1.56')

lista = [pessoa1, pessoa2, pessoa3]

app = Flask(__name__)
app.secret_key = 'moredevs'

@app.route('/')
def inicio():
    if 'usuario_logado' not in session or session['usuario_logado'] == None:
        return redirect('/login')
    
    return render_template('index.html', titulo = 'Lista Pessoas', pessoas = lista)

@app.route('/novo')
def novo():
    if 'usuario_logado' not in session or session['usuario_logado'] == None:
        return redirect('/login')
    
    return render_template('novo.html', titulo = 'Cadastro Pessoa')

@app.route('/criar', methods=['POST',])
def criar():
    nome = request.form['nome']
    idade = request.form['idade']
    altura = request.form['altura']
    
    pessoas = Pessoa(nome, idade, altura)
    
    lista.append(pessoas)
    
    return redirect('/')

@app.route('/login')
def login():
    return render_template('login.html', titulo = 'Login de Usuário')

@app.route('/autenticar', methods=['POST',])
def autenticar():
    
    if 'moredevs' == request.form['senha']:
        session['usuario_logado'] = request.form['usuario']
        flash(session['usuario_logado'] + ' Deu Boa')
        return redirect('/')
    else:
        flash('Senha inválida')
        return redirect('/login')

@app.route('/logout')
def logout():
    session['usuario_logado'] == None
    session.clear()
    flash('Você foi desconectado')
    return redirect('/login')

app.run(debug=True)