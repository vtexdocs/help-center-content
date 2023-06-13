---
title: Os filtros de especificação SKU não são carregados quando o SKU só está disponível em um vendedor de Whitelabel
id: 5SpoacD49oxDDGJjepUEoL
status: PUBLISHED
createdAt: 2022-03-21T17:41:20.048Z
updatedAt: 2022-11-25T21:58:05.886Z
publishedAt: 2022-11-25T21:58:05.886Z
firstPublishedAt: 2022-03-21T17:41:20.389Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: os-filtros-de-especificacao-sku-nao-sao-carregados-quando-o-sku-so-esta-disponivel-em-um-vendedor-de-whitelabel
kiStatus: Backlog
internalReference: 431888
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Desde uma atualização recente no comportamento da busca, os filtros de especificação das SKUs não disponíveis não são mostrados nas páginas de resultados de busca.

Se a arquitetura de uma loja depende apenas dos vendedores de etiquetas brancas para a disponibilidade do produto, os filtros de especificação também não são mostrados, porque a disponibilidade dos vendedores não está sendo considerada nos filtros de busca.



## Simulação


Ter zero disponibilidade de produto para um resultado de busca específico (termo de busca, departamento, marca, etc.) na loja principal. Mesmo se a disponibilidade de um vendedor de etiquetas brancas estiver sendo mostrada nas prateleiras, os filtros relacionados às especificações do SKU não aparecerão.



## Workaround


Ter disponibilidade de produtos na loja principal. Desta forma, todos os filtros de especificação SKU estarão disponíveis.

Se isto não se adequa à operação da empresa, é possível personalizar a frente de forma a não permitir que os clientes comprem itens do armazenamento principal.

