---
title: 'Botão errado chamar o nome de ação na etapa de perfil'
id: 1S1dBhLOnKSpDX0sbXwF0y
status: PUBLISHED
createdAt: 2022-05-27T20:18:02.980Z
updatedAt: 2022-11-25T21:53:10.564Z
publishedAt: 2022-11-25T21:53:10.564Z
firstPublishedAt: 2022-05-27T20:18:03.671Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: botao-errado-chamar-o-nome-de-acao-na-etapa-de-perfil
locale: pt
kiStatus: Backlog
internalReference: 514532
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao preencher os dados na etapa de perfil no checkout e prosseguir para a etapa de envio, ao retornar clicando na seta de retorno do navegador, ao alcançar o perfil novamente o botão para prosseguir para a etapa seguinte, deve estar com o nome de '**Ir para entrega**' no entanto diz '**Ir para pagamento**', mesmo com o componente de envio ainda não preenchido.

Nota: isto só acontece com o componente de código postal na etapa de envio

Nota2: O mesmo problema, mas com outra validação, com o endereço preenchido, o botão diz "Ir para entrega".




## Simulação



Preencher dados de perfil e escolher "Ir para entrega".

Quando você chegar na etapa de entrega, retorne na seta de retorno do navegador

Você pode ver o CTA "**Ir para o Pagamento**" mas o correto é "**Ir para entrega**".




## Workaround


N/A

