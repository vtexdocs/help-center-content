---
title: 'O campo de código fiscal XML do Catalog Integration não está sendo renderizado'
id: 19Ubw33gsHcyIeMUQA3LGh
status: PUBLISHED
createdAt: 2024-05-10T14:28:22.117Z
updatedAt: 2024-05-10T14:28:23.190Z
publishedAt: 2024-05-10T14:28:23.190Z
firstPublishedAt: 2024-05-10T14:28:23.190Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-integration-xml-fiscal-code-field-not-rendering
locale: pt
kiStatus: Backlog
internalReference: 1031109
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, a configuração XML do catálogo para o campo de código fiscal não está gerando os resultados esperados, pois sempre retorna um <![CDATA[]]>

## Simulação


1 - Registre um código fiscal em um produto de sua loja.
2 - Na configuração XML de sua conta https://myaccountname.myvtex.com/admin/Site/Xml.aspx, configure o campo XML do código fiscal

 ![](https://vtexhelp.zendesk.com/attachments/token/LHjBFETlon2zWcRX7pXYF0xjP/?name=image.png)

3 - Carregue o XML gerado e, apesar de o produto ter dados válidos, as tags do XML do código fiscal não carregarão conteúdo válido

## Workaround


Use outros meios de integração de catálogos se um código fiscal for absolutamente necessário nas operações de sua loja.





