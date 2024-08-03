---
title: 'A exportação de imagens de SKU para contas que começam com "h", "t" ou "p" recebe esse corte de caracteres nas linhas de "URL da imagem".'
id: 1IZdnE8IGwkBlbcFhjLrzn
status: PUBLISHED
createdAt: 2023-10-13T15:20:49.703Z
updatedAt: 2023-10-13T15:20:50.483Z
publishedAt: 2023-10-13T15:20:50.483Z
firstPublishedAt: 2023-10-13T15:20:50.483Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-exportacao-de-imagens-de-sku-para-contas-que-comecam-com-h-t-ou-p-recebe-esse-corte-de-caracteres-nas-linhas-de-url-da-imagem
locale: pt
kiStatus: Backlog
internalReference: 919199
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O relatório de imagem SKU, /admin/Site/ProdutoImagemExportacao.aspx, para nomes de contas que começam com "h", "t" ou "p", como "testaccount", mostrará um caractere ausente na planilha de exportação para a linha imageURL.

## Simulação


1 - Para uma conta que começa com os caracteres iniciais mencionados, vá para /admin/Site/ProdutoImagemExportacao.aspx e exporte uma planilha para qualquer sku que tenha pelo menos uma imagem.
2 - abra a planilha exportada e verifique a coluna "UrlImagem": ela estará sem o caractere inicial

Por exemplo, se a conta tiver o nome "testaccount":

 ![](https://vtexhelp.zendesk.com/attachments/token/3VxPtxFSDjU1obEtgqkS16BXM/?name=image.png

## Workaround


Crie uma subconta que comece com outro caractere (por exemplo, "mytestaccount") e acesse a interface do usuário de exportação usando essa subconta. A exportação mostrará toda a cadeia de caracteres de URL sem nenhum corte incorreto.





