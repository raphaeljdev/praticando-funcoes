// Imagine que você está desenvolvendo um sistema de avaliação para um jogo educativo.Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:

// Foi aprovado, se a pontuação for igual ou maior que 70
// Precisa de reforço, se a pontuação estiver entre 50 e 69
// Foi reprovado, se a pontuação for menor que 50
// Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:

// a pontuação final do jogador
// uma função de callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.

function avaliarDesempenho(pontuacao, callback) {
  console.log('Pontuação:', pontuacao);
  callback(pontuacao);
}

const gerarMensagem = (pontuacao) => {
  if (pontuacao >= 70) {
    console.log('Aprovado');
  } else if (pontuacao >= 50 && pontuacao < 70) {
    console.log('Precisa de reforço');
  } else {
    console.log('Reprovado');
  }
};

avaliarDesempenho(48, gerarMensagem);
