---
title: 'Data de entrega ficando vazia quando o item é um presente adicionado'
id: 5HMepNuoEHY0xJPm4PKPb4
status: PUBLISHED
createdAt: 2022-05-25T21:39:17.092Z
updatedAt: 2022-11-25T21:53:17.345Z
publishedAt: 2022-11-25T21:53:17.345Z
firstPublishedAt: 2022-05-25T21:39:17.787Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: data-de-entrega-ficando-vazia-quando-o-item-e-um-presente-adicionado
kiStatus: Backlog
internalReference: 586143
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



No carrinho que já tem um item de entrega programado e selecionado, com seu endereço preenchido, ao chegar na etapa de pagamento e acrescentando uma forma de pagamento que acrescenta um presente gratuito ao carrinho e este presente também tem entrega programada, o usuário retorna à etapa de escolha da entrega programada, mas o presente acaba "levando" a data que tinha sido previamente preenchida para o primeiro item.
Ao analisar a API, a "janela de entrega" deste presente permanece como nula e impossibilitando o usuário de prosseguir para a etapa de pagamento. Uma vez que ao clicar no botão, nada acontece.

Nota: se o usuário alterar a data na seleção de data, uma atualização ocorre e a janela "entrega" é preenchida, com isso o usuário pode ir para a etapa de pagamento.



## Simulação


Tenha um carrinho com um item com entrega programada, preencha seus dados normalmente, escolha a data de entrega, quando chegar à etapa de pagamento, escolha uma forma de pagamento que acrescente um presente, o checkout retornará à etapa de seleção da data de entrega programada, portanto, se o usuário clicar no botão proceder, ele não poderá fazê-lo, somente se alterar a data deste presente.



## Workaround


N/A

