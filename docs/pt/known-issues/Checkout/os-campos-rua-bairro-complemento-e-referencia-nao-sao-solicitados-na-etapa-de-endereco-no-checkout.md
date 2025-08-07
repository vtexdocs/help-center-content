---
title: "Os campos Rua, Bairro, Complemento e Referência não são solicitados na etapa de endereço no checkout"
id: 2wY4t0iIie4pjpJrs0Af3F
status: PUBLISHED
createdAt: 2022-04-19T18:20:30.913Z
updatedAt: 2022-11-25T21:53:33.585Z
publishedAt: 2022-11-25T21:53:33.585Z
firstPublishedAt: 2022-04-19T18:20:31.606Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: os-campos-rua-bairro-complemento-e-referencia-nao-sao-solicitados-na-etapa-de-endereco-no-checkout
locale: pt
kiStatus: Backlog
internalReference: 563507
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o endereço é inserido através do código postal API e estes dados são atualizados nos dados de envio antes de chegar ao checkout. Se nosso API postal não retornar todos os dados completos, por exemplo, rua, bairro, etc. Eles estarão faltando nos dados de envio. O problema é que quando o cliente usa o componente de geolocalização em seu checkout, ele não executa a validação que falta nestes campos, deixando o usuário para ir para a etapa de pagamento sem preencher os dados que não estão completos.



## Simulação


Fazer a ligação para "api/checkout/pub/postal-code/BRA" informando o código postal "75345-000" antes de chegar ao Checkout.

Atualizar os dados de envio com os dados que são devolvidos a partir desta API. Ao chegar ao Checkout, o componente pedirá apenas para preencher o número e o campo do receptor, permitindo assim que o usuário vá para a etapa de pagamento com estes dados em falta.



## Workaround


N/A

