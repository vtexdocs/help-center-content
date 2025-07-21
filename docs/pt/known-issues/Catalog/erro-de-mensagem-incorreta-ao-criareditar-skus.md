---
title: "Erro de mensagem incorreta ao criar/editar SKUs"
id: 19tQzBRYyVSI1MW2STZNFf
status: PUBLISHED
createdAt: 2023-03-20T19:50:11.591Z
updatedAt: 2023-03-20T19:50:12.021Z
publishedAt: 2023-03-20T19:50:12.021Z
firstPublishedAt: 2023-03-20T19:50:12.021Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: erro-de-mensagem-incorreta-ao-criareditar-skus
locale: pt
kiStatus: Backlog
internalReference: 774518
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Para criar ou editar uma SKU é necessário preencher os campos necessários, tais como peso, altura, largura e comprimento da remessa. Entretanto, quando deixamos um desses campos sem um valor válido e salvamos a SKU, Admin retorna uma mensagem de erro sobre as especificações, mesmo quando não há especificações obrigatórias a serem preenchidas.



##

## Simulação



- Ir para Módulo de Catálogo
- Adicionar um novo produto e salvá-lo para criar uma nova unidade para estocagem
- Preencher todos os campos, exceto as informações de embarque - que são obrigatórias
- Salve a SKU e note que 2 mensagens aparecerão: "Parâmetros inválidos" e "Especificações não inseridas Verificar guia".


##

## Workaround


Não há solução




