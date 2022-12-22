//titulo
//mensagem
//autor
//visualização
//comentarios autor mensagem
// estar auvivo

function Postagem (titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacao = 0,
    this.comentario = [],
    this.estaAoVivo = false
}
const postagem = new Postagem ('a', 'b', 'c');
console.log(postagem);