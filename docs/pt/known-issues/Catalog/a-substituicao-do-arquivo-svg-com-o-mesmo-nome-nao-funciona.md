---
title: "A substituição do arquivo SVG com o mesmo nome não funciona"
id: 3oTKQXVklDPcH47NGaEbGh
status: PUBLISHED
createdAt: 2024-12-16T20:25:22.346Z
updatedAt: 2024-12-16T20:25:23.138Z
publishedAt: 2024-12-16T20:25:23.138Z
firstPublishedAt: 2024-12-16T20:25:23.138Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-substituicao-do-arquivo-svg-com-o-mesmo-nome-nao-funciona
locale: pt
kiStatus: Backlog
internalReference: 1151600
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar o gerenciador de arquivos do CMS no administrador da conta, há uma opção para fazer upload de arquivos:

 ![](https://vtexhelp.zendesk.com/attachments/token/tIFD30VhzhOuxTIV0f7UurtEH/?name=image.png) ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/a-substituicao-do-arquivo-svg-com-o-mesmo-nome-nao-funciona_1.png)

Ao fazer upload de arquivos .SVG, se você optar por substituir um arquivo mais antigo, usando o mesmo nome, será exibida a seguinte mensagem:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/a-substituicao-do-arquivo-svg-com-o-mesmo-nome-nao-funciona_2.png)

No entanto, o conteúdo desse arquivo nunca será atualizado ao usar esse método.

## Simulação


1 - Obtenha 2 arquivos .SVG com o mesmo nome.
2 - carregue o arquivo nº 1 e verifique seu conteúdo
3 - Carregue o arquivo nº 2 e verifique seu conteúdo, mesmo depois de dias, ele não terá sido substituído.



## Workaround


Exclua o arquivo anterior antes de fazer o upload novamente.





