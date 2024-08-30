---
title: 'Campo de categoria global XML que mostra as informações definidas no nível global da categoria.'
id: 508Gdn8StafQKOa2Wyfr8u
status: PUBLISHED
createdAt: 2022-01-21T17:38:16.365Z
updatedAt: 2024-02-16T20:30:04.149Z
publishedAt: 2024-02-16T20:30:04.149Z
firstPublishedAt: 2024-01-23T15:32:13.423Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: campo-de-categoria-global-xml-que-mostra-as-informacoes-definidas-no-nivel-global-da-categoria
locale: pt
kiStatus: No Fix
internalReference: 282231
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Nos arquivos XML, o campo para Categoria Global está fornecendo as informações da Categoria Global definida no Nível da Categoria e não no Nível do Produto (o nível do produto deve ser priorizado).

## Simulação


- Use um produto com uma categoria global definida no produto e uma categoria global diferente definida no nível da categoria;
- Crie um arquivo XML e use a categoria global arquivada;
- Verifique o produto no XML mostrando a categoria global definida na categoria.



## Workaround


Não há solução alternativa.

