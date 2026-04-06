---
title: 'Utilizando expressões para captar a localização do usuário'
id: 1wxT0lnOUwxD5I8jtP3G9H
status: PUBLISHED
createdAt: 2025-09-17T14:05:39.961Z
updatedAt: 2025-10-03T14:20:03.721Z
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

Nesse artigo vamos ver um exemplo prático de como o uso de expressões e variáveis podem ser úteis para o seu chatbot. Aqui, focaremos em um exemplo bem simples, mas que pode ser bastante útil para todos: Conseguir captar a localização do usuário pela conversa, podendo utilizar esses dados posteriormente.

## Primeiro passo: Identificar o canal

A forma de captar a localização muda de acordo com o canal que você está utilizando na plataforma.

### Canal Web

Para conseguir capturar a localização de um usuário via canal web, basta criar uma carta de ação ""Send Message"" com um ""Quick Reply"" com o prefixo ""[Loc]"", assim que o usuário apertar aquele botão, conseguimos captar a localização via navegador. Após isso, basta salvar o resultado na carta de decisão ""Wait for response"".

A mensagem recebida pelo canal web sempre começará com: ""Minha Localização é:"", seguido da latitude e longitude do usuário no formato ""[latitude, longitude]"". Para remover esses prefixos, basta utilizar a expressão `@(replace)` e depois separar os valores de latitude e longitude em variáveis diferentes, utilizando a expressão `@(split)` para separar utilizando a virgula ("","") que os separam como parâmetro.

### Canal Telegram

Para enviar a localização via telegram, o usuário precisa clicar no botão 📎, selecionar ""Localização"" e depois ""Enviar minha localização atual"".
Com isso, basta criar uma carta de decisão ""Wait for response"" e salvar o valor. O telegram envia a localização no formato ""latitude, longitude"", não precisando fazer o processo de utilizar a `@(replace)` para remover textos, só separar utilizando `split` como no canal web.

### Canal WhatsApp

Para enviar a localização via WhatsApp, o usuário precisa clicar no botão 📎 ou no ➕, selecionar ""Localização"" e depois ""Localização fixa"".

Diferentemente dos outros canais, a localização via WhatsApp não vem como texto, mas sim como anexo, logo, precisamos acessá-la utilizando a variável: `@input.attachments.0`

Essa variável guarda a localização no formato ""geo: latitude, longitude"", logo, precisamos utilizar a expressão `@(replace)` para remover o ""geo:"" e depois utilizar `@(split)` para separar a latitude e longitude como nos outros canais.

Assim, conseguimos criar um fluxo com suporte para captar a localização do usuário em três canais diferentes, utilizando as expressões e variáveis disponíveis na plataforma.
