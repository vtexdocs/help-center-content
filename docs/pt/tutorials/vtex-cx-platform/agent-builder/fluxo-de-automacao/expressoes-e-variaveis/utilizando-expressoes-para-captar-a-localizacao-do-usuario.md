---
title: 'Utilizando expressões para captar a localização do usuário'
id: 1wxT0lnOUwxD5I8jtP3G9H
status: PUBLISHED
createdAt: 2025-09-17T14:05:39.961Z
updatedAt: 2026-11-12T12:20:00.000Z
publishedAt: 2025-10-03T14:20:03.721Z
firstPublishedAt: 2025-10-03T14:20:03.721Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: using-expressions-to-capture-the-users-location
legacySlug: utilizando-expressoes-para-captar-a-localizacao-do-usuario
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Este artigo mostra como captar a localização do usuário na conversa com expressões e variáveis, para usar esses dados depois no fluxo.

## Identificar o canal

A forma de captar a localização muda de acordo com o canal que você está utilizando na plataforma.

### Canal web

Para conseguir capturar a localização de um usuário via canal web, crie uma carta de ação "Send Message" com um "Quick Reply" com o prefixo "[Loc]". Assim que o usuário clicar naquele botão, conseguimos captar a localização pelo navegador. Após isso, salve o resultado na carta de decisão "Wait for response".

A mensagem recebida pelo canal web sempre começará com: "Minha Localização é:", seguida da latitude e da longitude do usuário no formato "[latitude, longitude]". Para remover esses prefixos, utilize a expressão `@(replace)` e depois separar os valores de latitude e longitude em variáveis diferentes, utilizando a expressão `@(split)` para separar utilizando a vírgula (",") que os separam como parâmetro.

### Canal Telegram

Para enviar a localização via Telegram, o usuário precisa clicar no botão de anexo, selecionar `Localização` e depois "Enviar minha localização atual".
Com isso, crie uma carta de decisão "Wait for response" e salve o valor. O Telegram envia a localização no formato "latitude, longitude", sem precisar usar `@(replace)` para remover textos. Separe usando `split`, como no canal web.

### Canal WhatsApp

Para enviar a localização via WhatsApp, o usuário precisa clicar no botão de anexo ou no botão de adicionar, selecionar `Localização` e depois "Localização fixa".

Diferentemente dos outros canais, a localização via WhatsApp não vem como texto, mas sim como anexo. Por isso, precisamos acessá-la utilizando a variável: `@input.attachments.0`

Essa variável guarda a localização no formato "geo: latitude, longitude". Por isso, precisamos utilizar a expressão `@(replace)` para remover o "geo:" e depois utilizar `@(split)` para separar a latitude e longitude como nos outros canais.

Assim, conseguimos criar um fluxo com suporte para captar a localização do usuário em três canais diferentes, utilizando as expressões e variáveis disponíveis na plataforma.
