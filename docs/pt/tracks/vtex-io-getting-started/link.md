---
title: 'Linkar'
id: 1dEVfBkRxoO62i0Ge6mYoG
status: ARCHIVED
createdAt: 2018-06-14T16:08:28.920Z
updatedAt: 2020-03-13T21:24:44.380Z
publishedAt: 
firstPublishedAt: 2018-06-14T16:13:34.130Z
contentType: trackArticle
productTeam: VTEX IO
slug: linkar
locale: pt
trackId: 2qYWraccosS2ayg2kusaUo
trackSlugPT: vtex-io-getting-started
---

Para [linkar](http://help.vtex.com/pt/faq/o-que-significa-linkar-uma-app) sua app e começar a ver as mudanças no seu código em tempo real, digite o seguinte comando no terminal:

`vtex link` ou `vtex link --verbose`

Com isso, o IO disponibilizar (deploy) sua app e realizar diversas tarefas até que você veja as mensagens "Available routes" ou "App running" no seu terminal.

Para confirmar que deu tudo certo, você pode clicar em uma das rotas de "Available routes". Você acessar a seguinte URL no seu browser:

`https://{Workspace}--{AccountName}.myvtex.com/*`

O asterisco (`*`) deve ser substituído por qualquer path conhecido (declarado) pela app.

Se seu app utiliza __GraphQL__, haverá uma mensagem no console com um link para o __GraphiQL__, uma IDE dentro do browser para testar suas __Queries__ e __Mutações__.

Agora entre no arquivo `index.js` do seu projeto local e altere alguma coisa. Salve e veja as mudanças no browser!
