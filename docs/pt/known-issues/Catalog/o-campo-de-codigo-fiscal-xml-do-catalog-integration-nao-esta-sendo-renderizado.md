---
title: "O campo de código fiscal XML do Catalog Integration não está sendo renderizado"
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
slugEN: o-campo-de-codigo-fiscal-xml-do-catalog-integration-nao-esta-sendo-renderizado
locale: pt
kiStatus: Backlog
internalReference: 1031109
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a configuração XML do catálogo para o campo de código fiscal não está gerando os resultados esperados, pois sempre retorna um <![CDATA[]]>

## Simulação


1 - Registre um código fiscal em um produto de sua loja.
2 - Na configuração XML de sua conta https://myaccountname.myvtex.com/admin/Site/Xml.aspx, configure o campo XML do código fiscal

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/o-campo-de-codigo-fiscal-xml-do-catalog-integration-nao-esta-sendo-renderizado_1.png)

3 - Carregue o XML gerado e, apesar de o produto ter dados válidos, as tags do XML do código fiscal não carregarão conteúdo válido

## Workaround


Use outros meios de integração de catálogos se um código fiscal for absolutamente necessário nas operações de sua loja.





