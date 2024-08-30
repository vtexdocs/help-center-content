---
title: 'Exportação de catálogo para cortes de anexos > 50 caracteres'
id: 7hX23y19wmMNPTUgbhh2WX
status: PUBLISHED
createdAt: 2023-12-14T16:46:58.819Z
updatedAt: 2023-12-14T16:46:59.522Z
publishedAt: 2023-12-14T16:46:59.522Z
firstPublishedAt: 2023-12-14T16:46:59.522Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: exportacao-de-catalogo-para-cortes-de-anexos-50-caracteres
locale: pt
kiStatus: Backlog
internalReference: 953161
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao importar dados para anexos no módulo de catálogo, se o referido anexo tiver mais de 50 caracteres, a cadeia de caracteres é cortada, o que faz com que não haja atualizações para esses dados.

## Simulação


1 - Crie um anexo com um nome de mais de 50 caracteres, por exemplo, "Esse é um nome de anexo muito longo criado para testar um problema".

2 - Associe-o a um produto

3 - exportar esses dados usando a interface do usuário /admin/Site/Relatorio_Skus.aspx

4 - Verifique a coluna relacionada a isso e ela será exibida como "`Este é um nome de anexo muito longo que é criado`" (exatamente com 50 caracteres).

5 - Você precisará ajustar manualmente essas informações se quiser importá-las corretamente



## Workaround


Atualize os anexos por meio da API, da interface do usuário ou altere manualmente a string incorreta na planilha.





