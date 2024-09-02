---
title: 'Colar o código postal no carrinho de visualização de remessa às vezes retorna um resultado de API nulo'
id: 5Lq32htqC7M9xiqajfn7y7
status: PUBLISHED
createdAt: 2022-06-01T15:30:08.776Z
updatedAt: 2024-05-21T13:03:32.812Z
publishedAt: 2024-05-21T13:03:32.812Z
firstPublishedAt: 2022-06-01T15:30:09.241Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: colar-o-codigo-postal-no-carrinho-de-visualizacao-de-remessa-as-vezes-retorna-um-resultado-de-api-nulo
locale: pt
kiStatus: Backlog
internalReference: 481878
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Depois de inserir o código postal uma vez na visualização do envio e optar por colá-lo novamente, às vezes ocorre de fazer uma solicitação nula para a API do código postal.

A solicitação é `/api/checkout/pub/postal-code/null/postalcodenumber` e retorna um erro 500.

## Simulação



- Vá até o carrinho e adicione um código postal;
- Clique para alterá-lo e cole outro código postal (ou até mesmo o mesmo);
- Vá para a etapa de envio, e o endereço pode estar incompleto

## Workaround


O usuário precisará clicar no botão "Calculate" (Calcular) ou pressionar a tecla Enter, em alguns casos digitando o código postal sem inseri-lo.




