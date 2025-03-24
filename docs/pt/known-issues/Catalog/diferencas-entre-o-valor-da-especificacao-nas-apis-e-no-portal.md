---
title: 'Diferenças entre o valor da especificação nas APIs e no portal'
id: 29Utcf4B7PBZitEHxrZwbE
status: PUBLISHED
createdAt: 2023-06-29T20:11:49.484Z
updatedAt: 2023-07-06T13:41:29.683Z
publishedAt: 2023-07-06T13:41:29.683Z
firstPublishedAt: 2023-06-29T20:11:50.157Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: differences-between-specification-value-on-apis-and-portal
locale: pt
kiStatus: Backlog
internalReference: 853184
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente, essas duas APIs ("api/catalog" e "api/catalog_system" GET Specification Value) estão consultando tabelas diferentes no banco de dados do catálogo. Os valores devem ser os mesmos em ambas as tabelas, mas os cenários com caracteres especiais podem divergir.

Isso também se reflete no Portal e nos PDPs, pois as informações estão sendo geradas com base na tabela errada. Os caracteres especiais aparecem como "????" no frontend.

## Simulação



1. Ter um valor de especificação com caracteres especiais;
2. Verifique os resultados nas APIs "api/catalog" e "api/catalog_system";
3. Verifique as informações do PDP;
4. Verificar se foram iguais.



## Workaround


N/A





