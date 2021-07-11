/*
Descricao : Script JavaScript para implementação de lista de leituras.
Aluno : Angelo Marcos De Oliveira
Data : 16/06/2021
*/

let inputs = document.querySelectorAll('input')

let btnSalvar = document.querySelector('.save')
let listaLivros = document.querySelector('ul')

btnSalvar.addEventListener('click', (e) => {
  let livro = {
    titulo: inputs[0].value,
    autor: inputs[1].value,
    link: inputs[2].value,
    lido: inputs[3].checked,
    id: criarId(),
  }

  addLivro(livro)

  e.preventDefault()
})

function criarId() {
  return Math.floor(Math.random() * 1000)
}

function addLivro(livro) {
  let li = criarTagLi(livro)
  listaLivros.appendChild(li)
  inputs[0].value = ''
  inputs[1].value = ''
  inputs[2].value = ''
  inputs[3].checked = false
}

function criarTagLi(livro) {
  let li = document.createElement('li')
  li.setAttribute('id', `${livro.id}`)
  if (livro.lido) {
    li.classList.add('lido')
  }


  let span = document.createElement('span')
  span.innerHTML = (livro.titulo + ' - ' + livro.autor)

  let div = document.createElement('div')

  let btnComprar = document.createElement('button')
  btnComprar.classList.add('btn-buy')
  btnComprar.innerHTML = `<a class="material-icons" href=${livro.link}> shopping_cart </a>`

  let btnDeletar = document.createElement('button')
  btnDeletar.classList.add('delete')
  btnDeletar.innerHTML = '<span class="material-icons"> delete </span>'
  btnDeletar.setAttribute('onclick', 'deletar(' + livro.id + ')')

  div.appendChild(btnComprar)
  div.appendChild(btnDeletar)

  li.appendChild(span)
  li.appendChild(div)

  return li
}

function deletar(idLivro) {
  let confirm = window.confirm('Tem certeza que deseja deletar livro?')
  if (confirm) {
    let li = document.getElementById('' + idLivro + '')
    if (li) {
      listaLivros.removeChild(li)
    }
  }
}

function checkEmptyList() {
  if (!document.querySelector('ul').childNodes.length) {
    document.querySelector('ul').innerHTML = 'Adicione um livro abaixo!';
  }
}

checkEmptyList()