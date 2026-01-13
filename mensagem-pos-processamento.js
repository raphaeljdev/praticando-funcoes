// Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

// Sua tarefa é criar uma função chamada processarPedido, que receba dois parâmetros:

// o nome do cliente, e
// uma função de callback responsável por exibir uma mensagem após o pedido ser processado.

const tiposDeClientes = ['comum', 'vip', 'novo usuario'];

const [comum, vip, novoUsuario] = tiposDeClientes;

const processarPedido = (nome, tipoDeCliente, callback) => {
  console.log(`Processando pedido de ${nome}...`);
  callback(nome, tipoDeCliente);
};

const mensagemPersonalizada = (nome, tipoDeCliente) => {
  if (tipoDeCliente === vip) {
    console.log(
      `Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`,
    );
  } else if (tipoDeCliente === comum) {
    console.log(`Obrigado pela sua compra, ${nome}!`);
  } else {
    console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
  }
};

processarPedido('Ana', vip, mensagemPersonalizada);
