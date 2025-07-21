---
title: "A interação com o componente de pagamento enquanto ele ainda está em um estado de carregamento envia a opção de pagamento errada"
id: 4kSvM6fti8YfgcUyl4qFJs
status: PUBLISHED
createdAt: 2023-12-12T22:07:58.762Z
updatedAt: 2023-12-12T22:07:59.474Z
publishedAt: 2023-12-12T22:07:59.474Z
firstPublishedAt: 2023-12-12T22:07:59.474Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: a-interacao-com-o-componente-de-pagamento-enquanto-ele-ainda-esta-em-um-estado-de-carregamento-envia-a-opcao-de-pagamento-errada
locale: pt
kiStatus: Backlog
internalReference: 952086
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o comprador altera o método de pagamento enquanto o componente de pagamento ainda está sendo carregado na página, se o método de pagamento tiver opções, o pagamento enviado ao formulário de pedido está errado. Quando esse comportamento ocorre, o pedido não é criado e uma mensagem para revisar as informações de pagamento é exibida.

## Simulação



- Adicione itens ao carrinho e vá até os dados de pagamento;
- Clique em um método de pagamento diferente enquanto a página estiver carregando e selecione outra opção dentro do componente;
- O pagamento enviado ao orderForm está errado, sendo a primeira opção

## Workaround


N/A




