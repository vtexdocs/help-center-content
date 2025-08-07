---
title: "Produtos&SKUs Importação não suporta 'lb'."
id: 1OjtnFf9MpY1IFzQa8Ua2t
status: PUBLISHED
createdAt: 2022-06-17T19:38:17.726Z
updatedAt: 2024-02-16T20:29:45.337Z
publishedAt: 2024-02-16T20:29:45.337Z
firstPublishedAt: 2022-06-17T19:38:18.052Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: produtosskus-importacao-nao-suporta-lb
locale: pt
kiStatus: No Fix
internalReference: 337860
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a folha de catálogo de Produtos e SKUs não suporta a unidade de medição 'lb'. `/admin/Site/Relatorio_Skus.aspx'.

Na verdade, esta é uma unidade lb em nossa SKU UI que é configurável:

 ![](https://vtexhelp.zendesk.com/attachments/token/IYCZqjQWduAKjhP73hd7Uqaho/?name=inline1704074446.png)

Entretanto, a importação do produto&sku atualmente retorna uma mensagem de erro sempre que um usuário tenta importar qualquer sku que contenha este valor, independentemente se os outros campos forem válidos:

 ![](https://vtexhelp.zendesk.com/attachments/token/1v8a6RWRFaqwAHilwADBdnw7z/?name=inline802930792.png)







## Simulação


1) Definir "lb" como a unidade de medida de um sku

2) Exportar um produto e uma folha de skus para este sku filtrado

3) Tente importar novamente fazendo uma pequena alteração, digamos, no nome do sku. Você receberá o erro.







## Workaround


Definição dos valores via API e/ou diretamente via admin.

