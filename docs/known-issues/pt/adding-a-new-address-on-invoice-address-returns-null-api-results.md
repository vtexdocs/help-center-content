---
title: 'A adição de um novo endereço no endereço da fatura retorna resultados API nulos'
id: 43eiz4YORQv1u4yDahZdvC
status: PUBLISHED
createdAt: 2023-02-07T13:15:36.832Z
updatedAt: 2023-02-07T13:15:52.825Z
publishedAt: 2023-02-07T13:15:52.825Z
firstPublishedAt: 2023-02-07T13:15:37.293Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-adicao-de-um-novo-endereco-no-endereco-da-fatura-retorna-resultados-api-nulos
kiStatus: Backlog
internalReference: 748668
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando há mais de um endereço registrado no Sistema de Perfil, há uma solicitação "nula" ao serviço de CEP se você adicionar um novo endereço em "Endereço de Fatura".


##

## Simulação



- Ter mais de 1 endereço registrado no Sistema de Perfil;
- Selecionar um ponto de coleta;
- Clique em "Entregar em outro endereço" para adicionar um novo endereço em "Endereço da fatura" sem selecionar nenhuma outra opção.

O pedido foi `/api/checkout/pub/postal-code/null/postalcodenumber', portanto devolve o erro 500. Devido a esta devolução, ele não autocompleta o endereço utilizando o serviço de CEP.


##

## Workaround


Selecione uma opção já registrada antes de adicionar um novo endereço




