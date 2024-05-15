import express from 'express';

const porta = 3000;
const host = '0.0.0.0';

var listarUsuarios = [];

const app = express();

app.use(express.static('./publico'));

app.use('/cadastroUsuario', (req, resp) => {
  const nome = req.query.nome;
  const senha = req.query.senha;
  const email = req.query.email;
  const nascimento = req.query.nascimento;
  const endereco = req.query.endereco;
  const semana = req.query.semana;


  listarUsuarios.push({
    nome: nome,
    senha: senha,
    email: email,
    nascimento: nascimento,
    endereco: endereco,
    semana: semana,

  });

  resp.write('<html>');
  resp.write('<head>');
  resp.write('<title>Resultado do cadastro</title>');
  resp.write('</head>');
  resp.write('<body>');
  resp.write(`<h1>Usuario ${nome} cadastrado com sucesso!</h1>`);
  resp.write('<a href="/cadastroUsuario.html">Continuar Cadastrando....</a>');
  resp.write('<br />');
  resp.write('<a href="/listarUsuarios">Listar Usuarios</a>');
  resp.write('</body>');
  resp.write('</html>');
  resp.end();
});

app.use('/listarUsuarios', (req, resp) => {
  resp.write('<html>');
  resp.write('<head>');
  resp.write('<meta charset="UTF-8"></meta>');
  resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
  resp.write('<title>Resultado do cadastro</title>');
  resp.write('</head>');
  resp.write('<body>');
  resp.write('<h1> Lista de Usuarios</h1>');
  resp.write('<table class="table table-striped">');
  resp.write('<tr>');
  resp.write('<th>Nome</th>');
  resp.write('<th>Senha</th>');
  resp.write('<th>Email</th>');
  resp.write('<th>Nascimento</th>');
  resp.write('<th>Endereco</th>');

  resp.write('</tr>');
  for (let i = 0; i < listarUsuarios.length; i++) {
    resp.write('<tr>');
    resp.write(`<td>${listarUsuarios[i].nome}`);
    resp.write(`<td>${listarUsuarios[i].senha}`);
    resp.write(`<td>${listarUsuarios[i].email}`);
    resp.write(`<td>${listarUsuarios[i].nascimento}`);
    resp.write(`<td>${listarUsuarios[i].endereco}`);
    resp.write('</tr>');
  }
  resp.write('</table>');
  resp.write('<a href="/">Voltar</a>');
  resp.write('</body>');
  resp.write('</html>');
  resp.end();
});

app.listen(porta, host, () => {
  console.log('Servidor executando na porta http://${host}:${porta}');
});
