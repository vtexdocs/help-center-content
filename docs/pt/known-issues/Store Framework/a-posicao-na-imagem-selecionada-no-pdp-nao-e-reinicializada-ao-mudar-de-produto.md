---
title: 'A posição na imagem selecionada no PDP não é reinicializada ao mudar de produto'
id: btvmr3xSpxnJnxbahLefT
status: PUBLISHED
createdAt: 2022-06-14T14:04:04.519Z
updatedAt: 2022-11-25T22:13:45.813Z
publishedAt: 2022-11-25T22:13:45.813Z
firstPublishedAt: 2022-06-14T14:04:04.957Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: position-on-selected-image-on-pdp-doesnt-reset-when-changing-product
locale: pt
kiStatus: Backlog
internalReference: 595434
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao selecionar qualquer imagem no PDP de um produto, se você passar deste PDP diretamente para outro PDP, a posição da imagem não será apagada - se você estava vendo a terceira imagem, você verá diretamente a terceira imagem no novo PDP.



## Simulação


Ir para um PDP e selecionar qualquer imagem que não seja a primeira (ex: imagem número 2). Agora procure por um produto e selecione-o nas sugestões da barra de busca (não vá para o PLP desta busca). Você notará que a imagem que será selecionada neste novo PDP estará na mesma posição (imagem número 2), mesmo que seja um PDP diferente.



## Workaround


Refresque a página e ela estará na primeira imagem.

