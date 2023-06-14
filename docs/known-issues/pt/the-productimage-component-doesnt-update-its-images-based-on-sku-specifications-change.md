---
title: 'O componente ProductImage não atualiza suas imagens com base na alteração das especificações de SKU'
id: 3NATd5bJRoMbzepedPaIEu
status: PUBLISHED
createdAt: 2022-09-30T22:16:54.477Z
updatedAt: 2023-05-23T18:34:55.163Z
publishedAt: 2023-05-23T18:34:55.163Z
firstPublishedAt: 2022-09-30T22:16:54.836Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-componente-productimage-nao-atualiza-suas-imagens-com-base-na-alteracao-das-especificacoes-de-sku
kiStatus: Backlog
internalReference: 669619
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Quando um produto tiver mais de uma especificação e o usuário alterar a seleção da especificação, o componente ProductImage não alterará suas imagens com base na alteração da seleção relacionada.

O componente SKUSelector compara o itemId (cadeia de caracteres retornada da matriz product.items) com o selectedImageVariationSKU (cadeia de caracteres retornada do skuSelector, que é um objeto retornado do contexto) para apresentar a imagem correta após a seleção do usuário; portanto, se o skuSelector.selectedImageVariationSKU não for atualizado, o valor permanecerá no estado anterior e não atualizará a imagem exibida na tela dentro do componente ProductImage.

Isso também afeta a imagem no SKU Selector, pois eles usam as mesmas variáveis. Percebeu-se que, depois de selecionar uma SKU e carregar a página no URL do site, selectedImageVariationSKU permaneceria no estado anterior e não atualizaria a imagem exibida na tela.

## Simulação


Evidência: https://youtu.be/qr4-uTRFwcY



## Workaround


N/A

