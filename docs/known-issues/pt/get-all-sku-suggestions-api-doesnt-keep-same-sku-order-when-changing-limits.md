---
title: '"Obtenha todas as sugestões de SKU" API não mantém a mesma ordem de sku ao mudar os limites'
id: 4wQbZm9rFc8iD2xYwEiAlQ
status: PUBLISHED
createdAt: 2022-12-05T14:49:46.856Z
updatedAt: 2022-12-05T14:50:25.991Z
publishedAt: 2022-12-05T14:50:25.991Z
firstPublishedAt: 2022-12-05T14:49:47.309Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: obtenha-todas-as-sugestoes-de-sku-api-nao-mantem-a-mesma-ordem-de-sku-ao-mudar-os-limites
locale: pt
kiStatus: Backlog
internalReference: 367187
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



A API "Get all SKU suggestions" tem um limite de 20 skus por página.

Documentação API: https://developers.vtex.com/vtex-rest-api/reference/get-suggestions#getsuggestions

No dia-a-dia de trabalho isso perturba o funcionamento do Marketplace porque toda vez que o Marketplace faz um pedido mudando os limites para obter os próximos 20 skus, a ordem dos skus também muda e isso dá a impressão de ter os skus duplicados.

Ao solicitar esta API usando parâmetros de consulta como "sellerId", este comportamento acontece. Ao solicitar esta API sem os parâmetros de consulta, é possível utilizar o recurso "Next" (Próximo) para evitar este problema.



###

## Simulação



1. Solicitar a API "Obter todas as sugestões de SKU" usando os parâmetros de consulta: "sellerId";
2. Altere os limites nos parâmetros "**_de "** e "**_até "** para obter o próximo skus;
3. Verificar se há um sku nesta página que já tenha aparecido nas páginas anteriores.



###

## Workaround



Para evitar esta situação, utilize a planilha de exportação na interface de usuário ou utilize o API sem os parâmetros.

