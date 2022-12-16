import psycopg2

try:
    conn = psycopg2.connect(
    host = "localhost",
    port = "5433", 
    database = "postgres", 
    user="teste", 
    password = "123456")
    print('Conexao realizada com sucesso.')
except:
    print('Você está sem Conexão.....')

if conn is not None:
    print('Conexao estavel.....')

    #cursor = conn.cursor()
    #cursor.execute('CREATE TABLE pessoa (id serial, nome VARCHAR(15) NOT NULL, idade VARCHAR(2) NOT NULL, altura VARCHAR(5) NOT NULL, PRIMARY KEY(id));')
    #print('Sua tabela pessoa foi criada!')

    #cursor.execute('CREATE TABLE usuarios  (nome VARCHAR(15) NOT NULL, nickname VARCHAR(30)NOT NULL, senha VARCHAR(30)NOT NULL,  PRIMARY KEY(nickname) );')
    #print('Sua tabela usuario foi criada!')

    #nome = 'Thiago'
    #sobrenome = 'França'

    #cursor.execute("insert into teste (nome, sobrenome) values(%s,%s)", (nome, sobrenome))
    #print("Cadastro efetuado")

    #conn.commit()
    #cursor.close()
    #conn.close()