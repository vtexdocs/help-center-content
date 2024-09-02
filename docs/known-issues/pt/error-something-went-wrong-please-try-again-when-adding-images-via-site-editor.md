---
title: 'Erro "Algo deu errado. Tente novamente." ao adicionar imagens pelo Site Editor'
id: r3QVP1kp8HApP83bOi6t9
status: PUBLISHED
createdAt: 2023-11-07T22:33:02.296Z
updatedAt: 2023-11-07T22:34:52.005Z
publishedAt: 2023-11-07T22:34:52.005Z
firstPublishedAt: 2023-11-07T22:33:03.046Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: erro-algo-deu-errado-tente-novamente-ao-adicionar-imagens-pelo-site-editor
locale: pt
kiStatus: Backlog
internalReference: 932126
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao adicionar imagens por meio do Site Editor, a mensagem "`Algo deu errado. Tente novamente.`" pode ocorrer ocasionalmente.
Isso se deve ao número de imagens por bloco. No momento, não temos um número exato de imagens que cause esse problema, mas notamos esse comportamento acima de 20 imagens no mesmo bloco.

## Simulação



- Acesse o CMS Site Editor (por exemplo, https://my-account-here.myvtex.com/admin/cms/site-editor);
- Selecione o bloco com as novas imagens a serem adicionadas;
- Quando a adição for salva, a mensagem "`Algo deu errado. Please try again.`" será exibida no canto inferior direito:
 ![](https://vtexhelp.zendesk.com/attachments/token/97C4wewa6iz3f7bsmHtdnXu1H/?name=image.png

## Workaround


Você pode adicionar as imagens diretamente ao tema ou dividi-las em blocos com o layout flexível (ref. https://developers.vtex.com/docs/apps/vtex.flex-layout).




