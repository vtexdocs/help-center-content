---
title: 'Substituição de produto em pedido OMS não funcionando nas contas do portal do vendedor'
id: 1wQTfSR6OB6CL0sRpCYARp
status: PUBLISHED
createdAt: 2023-02-14T12:25:00.911Z
updatedAt: 2023-02-14T12:25:01.506Z
publishedAt: 2023-02-14T12:25:01.506Z
firstPublishedAt: 2023-02-14T12:25:01.506Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: substituicao-de-produto-em-pedido-oms-nao-funcionando-nas-contas-do-portal-do-vendedor
kiStatus: Backlog
internalReference: 753484
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Não está sendo possível alterar o sku de um pedido porque a OMS utiliza a API de busca (que está relacionada ao catálogo V1) e as contas do portal do vendedor utilizam uma nova versão do catálogo. Nenhum proxy foi implementado nesta área.

O erro é: "A conta solicitada {accountName} não foi encontrada no banco de conexão". <> "A conta solicitada {accountName} não foi encontrada no banco de conexão".


##

## Simulação



1. Vá para OMS e selecione o pedido que você gostaria de substituir o sku (tem que ser uma conta no portal do vendedor);
2. Verifique se aparece um erro na UI;
3. Inspecionando o erro é possível ver que a mensagem é a que está acima.


##

## Workaround


Nenhuma solução.





