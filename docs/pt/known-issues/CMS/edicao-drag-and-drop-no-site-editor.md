---
title: "Edição Drag and Drop no Site Editor"
id: 4DubZ5C0dmqKGQqAZ6nZjo
status: PUBLISHED
createdAt: 2022-10-25T15:31:15.485Z
updatedAt: 2023-03-09T14:04:38.040Z
publishedAt: 2023-03-09T14:04:38.040Z
firstPublishedAt: 2022-10-25T15:31:16.032Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: edicao-drag-and-drop-no-site-editor
locale: pt
kiStatus: Fixed
internalReference: 685103
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os clientes não podem usar o recurso de arrastar e soltar no editor do site para carregar imagens, isto provavelmente ocorre em conjunto com nossa nova implementação de nosso novo Gerenciamento de Mídia CMS.


##

## Simulação



Vá para qualquer conta e tente carregar uma imagem de banner através de arrastar e soltar

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/CMS/edicao-drag-and-drop-no-site-editor_1.png)
https://share.vidyard.com/watch/RXWHL4QYir7i5h1U4zuEuJ


##

## Workaround


Carregar imagens sem usar arrastar e soltar, ou,

Tente voltar para uma versão mais antiga das páginas administrativas sem algumas correções e CMS Media Management, que é a versão das páginas administrativas 4.43.1

Executar `vtex install vtex.admin-pages@4.43.1`
Isto resolverá o problema de arrastar e soltar, mas outros problemas podem aparecer novamente

