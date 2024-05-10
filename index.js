import express from 'express';

const porta = 3000;
const host = '0.0.0.0';

var listarUsuarios = [];

const app = express();


app.use(express.static('./publico'));

app.use('/cadastrarUsuario', (req,resp)=>{

const Nome = req.query.Nome;
const Sobrenome = req.query.Sobrenome;
const Usuario = req.query.Usuario;
const Cidade = req.query.Cidade;
const Estado = req.query.Estado;
const cep = req.query.cep;

listarUsuarios.push( {
Nome: Nome,
 Sobrenome: Sobrenome,
 Usuario: Usuario,
 Cidade: Cidade,
 Estado: Estado,
 cep: cep
});
resp.write('<html>');
resp.write('<head>');
resp.write('<title>Resultado do cadastro</title>');
resp.write('</head>');
resp.write('<body>');
resp.write(`<h1>Usuario ${Nome} ${Sobrenome} cadastrado com sucesso!</h1>`);
resp.write('<a href="/cadastroUsuario.HTML">Continuar Cadastrando....</a>');
resp.write('<br />');
resp.write('<a href="/listarUsuarios">Listar Usuarios</a>');
resp.write('</body>')
resp.write('</html>');
resp.end();

});

app.use('/listarUsuarios', (req,resp)=>{

resp.write('<html>');
resp.write('<head>');
resp.write('<meta charset="UTF-8"></meta>')
resp.write(' <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
resp.write('<title>Resultado do cadastro</title>');
resp.write('</head>');
resp.write('<body>');
resp.write('<h1> Lista de Usuarios</h1>');
resp.write('<table class="table table-striped">');
resp.write('<tr>');
resp.write('<th>Nome</th>');
resp.write('<th>Sobrenome</th>');
resp.write('<th>Usuario</th>');
resp.write('<th>Cidade</th>');
resp.write('<th>Estado</th>');
resp.write('<th>CEP</th>');
resp.write('</tr>');
for (let i=0; i<listarUsuarios.length; i++){
    resp.write('<tr>');
    resp.write(`<td>${listarUsuarios[i].Nome}`);
    resp.write(`<td>${listarUsuarios[i].Sobrenome}`);
    resp.write(`<td>${listarUsuarios[i].Usuario}`);
    resp.write(`<td>${listarUsuarios[i].Cidade}`);
    resp.write(`<td>${listarUsuarios[i].Estado}`);
    resp.write(`<td>${listarUsuarios[i].cep}`);
    resp.write('</tr>');
}
resp.write('</table>');
resp.write('<a href="/">Voltar</a>');
resp.write('</body>');
resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"crossorigin="anonymous"></script>');
resp.write('</html>');
});

app.listen(porta, host, () => {
    console.log('Servidor executando na porta http://${host}:${porta}');
})