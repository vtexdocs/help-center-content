---
title: "A não adição de dados na etapa 'entregar em outro endereço' faz com que o botão 'ir para o pagamento' desapareça"
id: cdZO8gGXDB1JZSj42AnVh
status: PUBLISHED
createdAt: 2022-01-24T21:42:52.750Z
updatedAt: 2023-10-13T15:29:14.854Z
publishedAt: 2023-10-13T15:29:14.854Z
firstPublishedAt: 2023-10-13T15:29:14.854Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-nao-adicao-de-dados-na-etapa-entregar-em-outro-endereco-faz-com-que-o-botao-ir-para-o-pagamento-desapareca
locale: pt
kiStatus: Backlog
internalReference: 467419
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Durante a etapa de checkout, na etapa de preenchimento dos dados de envio, ao clicar na opção "Entregar em outro endereço", se nenhum endereço for adicionado e o comprador voltar à lista de endereços (usando o botão "voltar ao catálogo de endereços"), o botão "Ir para o pagamento" desaparecerá.

## Simulação



- Durante a etapa de Checkout, ao preencher os dados de envio, se houver uma lista de endereços, clique em "Deliver to another address" (Entregar em outro endereço);
- Não adicione nenhum endereço e retorne aos dados de envio clicando no botão "Back to address list" (Voltar à lista de endereços);
- O botão "Go to payment" desaparece

## Workaround


Para que o botão seja exibido novamente, basta clicar em um dos endereços do catálogo de endereços. Entretanto, não há nenhuma solução alternativa para evitar esse comportamento.




