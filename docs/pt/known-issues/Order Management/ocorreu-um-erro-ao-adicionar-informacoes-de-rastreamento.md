---
title: 'Ocorreu um erro" ao adicionar informações de rastreamento'
id: 1gmlrPh9P1KbNI5NNXuImO
status: PUBLISHED
createdAt: 2023-02-08T18:38:55.699Z
updatedAt: 2023-02-08T18:42:05.822Z
publishedAt: 2023-02-08T18:42:05.822Z
firstPublishedAt: 2023-02-08T18:38:56.178Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: ocorreu-um-erro-ao-adicionar-informacoes-de-rastreamento
locale: pt
kiStatus: Backlog
internalReference: 409225
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

Ao inserir as informações de rastreamento quando o número da fatura contém espaços, ocorre o seguinte erro (seja via UI ou API) "`An error has occurred`".

## Simulação


Para simular ou realizar a análise deste cenário, apenas:

1. Insira uma fatura (via API) em um pedido com espaços no número da fatura (certifique-se de que a fatura não contenha nenhuma informação de rastreamento);
2. Adicionar informações de rastreamento via UI ou API:
3. Observe que você recebe um código de erro 500 junto com a mensagem "`Um erro ocorreu`".

## Workaround


Para pedidos que já são faturados com o espaço, e o rastreamento é informado posteriormente, infelizmente não há como inserir dados de rastreamento. Entretanto, para evitar este tipo de problema, o ideal é não enviar espaço na fatura, ou informar os dados de rastreamento ao inserir a fatura.

