---
title: 'Link de texto criado com " " no Marketplace após as aprovações - Reocorrência'
id: 2afynQ9MwaHPMPWyhx80Tp
status: PUBLISHED
createdAt: 2023-04-24T19:36:10.185Z
updatedAt: 2023-07-13T15:25:43.450Z
publishedAt: 2023-07-13T15:25:43.450Z
firstPublishedAt: 2023-04-24T19:36:10.701Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: link-de-texto-criado-com-no-marketplace-apos-as-aprovacoes-reocorrencia
locale: pt
kiStatus: Fixed
internalReference: 795900
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em alguns cenários, ao aprovar um produto em um Marketplace, no aplicativo Received SKUs, a solicitação falha ao inserir dados no catálogo e, ao tentar novamente, os campos de link de texto preenchem os caracteres "-" com " ", alterando o comportamento desejado.

O SKU é enviado de volta para aprovação no módulo Received Skus, mas não é possível aprová-lo novamente, pois já haverá um produto com um textlink igual.


## Simulação


1) Geralmente ocorre um erro genérico de skus recebido ao tentar aprovar (isso não acontece em todos os casos).

2) Um produto será criado no catálogo do marketplace com os links de texto defeituosos.

3) O produto fornecido ainda estará sendo exibido nos skus recebidos, aguardando aprovação.

4) A tentativa de aprová-lo mais uma vez exibirá um erro

## Workaround


Atualizar manualmente/API os links de texto do produto nesse cenário.




