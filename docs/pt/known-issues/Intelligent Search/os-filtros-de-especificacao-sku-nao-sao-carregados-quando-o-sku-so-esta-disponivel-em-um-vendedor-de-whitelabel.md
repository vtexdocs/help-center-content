---
title: 'Os filtros de especificação SKU não são carregados quando o SKU só está disponível em um vendedor de Whitelabel'
id: 5SpoacD49oxDDGJjepUEoL
status: PUBLISHED
createdAt: 2022-03-21T17:41:20.048Z
updatedAt: 2024-02-16T20:29:10.321Z
publishedAt: 2024-02-16T20:29:10.321Z
firstPublishedAt: 2022-03-21T17:41:20.389Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sku-specification-filters-arent-loaded-when-the-sku-is-only-available-in-a-whitelabel-seller
locale: pt
kiStatus: No Fix
internalReference: 431888
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Desde uma atualização recente no comportamento da busca, os filtros de especificação das SKUs não disponíveis não são mostrados nas páginas de resultados de busca.

Se a arquitetura de uma loja depende apenas dos vendedores de etiquetas brancas para a disponibilidade do produto, os filtros de especificação também não são mostrados, porque a disponibilidade dos vendedores não está sendo considerada nos filtros de busca.



## Simulação


Ter zero disponibilidade de produto para um resultado de busca específico (termo de busca, departamento, marca, etc.) na loja principal. Mesmo se a disponibilidade de um vendedor de etiquetas brancas estiver sendo mostrada nas prateleiras, os filtros relacionados às especificações do SKU não aparecerão.



## Workaround


Ter disponibilidade de produtos na loja principal. Desta forma, todos os filtros de especificação SKU estarão disponíveis.

Se isto não se adequa à operação da empresa, é possível personalizar a frente de forma a não permitir que os clientes comprem itens do armazenamento principal.

