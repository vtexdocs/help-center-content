---
title: 'O pedido não pode ser criado devido a cartão de crédito inválido'
id: 3vh1jvhIzEsC4ZLC1C4pJA
status: PUBLISHED
createdAt: 2022-06-29T18:59:46.795Z
updatedAt: 2022-11-25T21:52:02.248Z
publishedAt: 2022-11-25T21:52:02.248Z
firstPublishedAt: 2022-06-29T18:59:47.166Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-pedido-nao-pode-ser-criado-devido-a-cartao-de-credito-invalido
kiStatus: Backlog
internalReference: 607742
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A criação de uma ordem pode falhar com a exceção genérica "_Um erro de comunicação com gateway ocorreu e os dados de pagamento da transação {id} não foram recebidos com sucesso_", que têm causas de raiz diferentes. Uma delas estará relacionada à exceção interna "_As informações solicitadas da conta não existem_", que podem ser vistas no histórico da transação/pagamento relacionado ao pedido incompleto.

A mencionada "informação de conta" está relacionada a um cartão de crédito que não existe mais na plataforma. Embora esteja sendo oferecido na ordemFormulário (carrinho) como opção, não pode ser utilizado. Uma referência inválida permaneceu no perfil do cliente e/ou em seu orderForm.



## Simulação


A causa raiz para este tipo de cenário é desconhecida, portanto não há passos claros para reproduzir o problema.



## Workaround


Quando relacionado a esta causa raiz específica, o cliente deve fechar a compra com outro cartão de crédito. O cartão de crédito inválido também pode ser removido manualmente do perfil do cliente usando a página "my-account", ou mesmo do formulário de pedido específico (carrinho) enquanto estiver conectado, sempre pelo próprio cliente.

