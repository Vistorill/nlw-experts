
const perguntas = [
    {
        pergunta: "Qual é o operador de atribuição em JavaScript?",
        respostas: [
            "=",
            "==",
            "==="
        ],
        correta: 2
    },
    {
        pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array?",
        respostas: [
            "push()",
            "pop()",
            "shift()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '2' + 2?",
        respostas: [
            "4",
            "22",
            "Erro"
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'indexOf()' retorna quando o valor não é encontrado em uma string?",
        respostas: [
            "null",
            "-1",
            "0"
        ],
        correta: 1
    },
    {
        pergunta: "Qual dessas declarações cria uma variável global em JavaScript?",
        respostas: [
            "let",
            "const",
            "var"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o operador de incremento em JavaScript?",
        respostas: [
            "++",
            "+=",
            "+"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'toFixed()' faz em JavaScript?",
        respostas: [
            "Arredonda um número para o inteiro mais próximo",
            "Arredonda um número para a quantidade especificada de casas decimais",
            "Retorna o valor absoluto de um número"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de declarar uma função em JavaScript?",
        respostas: [
            "function = minhaFuncao() {}",
            "def minhaFuncao() {}",
            "function minhaFuncao() {}"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'splice()' em arrays JavaScript?",
        respostas: [
            "Adicionar elementos a uma matriz",
            "Remover elementos de uma matriz",
            "Concatenar duas matrizes"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
        respostas: [
            "Adicionar um evento a um elemento HTML",
            "Remover um evento de um elemento HTML",
            "Substituir um elemento HTML por outro"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta


    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        //

        dt.querySelector('input').setAttribute('name', 'pergunta'+ perguntas.indexOf(item))
        //
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
      
            corretas.delete(item)
            if (estaCorreta) {
                alert('acertou')
              corretas.add(item)
            }
      
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
          } 

        quizItem.querySelector('dl').appendChild(dt)
        //
    }

    quizItem.querySelector('dl dt').remove()

    //coloca na tela a pergunta
    quiz.appendChild(quizItem)
}
