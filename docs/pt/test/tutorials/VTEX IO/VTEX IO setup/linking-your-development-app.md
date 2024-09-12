---
title: 'Linkar sua app em desenvolvimento'
id: bKXgZWMLrUkimeUwWSy0u
status: ARCHIVED
createdAt: 2018-02-21T23:05:11.367Z
updatedAt: 2020-03-13T21:25:02.421Z
publishedAt: 
firstPublishedAt: 2018-02-21T23:06:21.883Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: linkar-sua-app-em-desenvolvimento
locale: pt
legacySlug: linkar-sua-app-em-desenvolvimento
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

Para linkar sua app e começar a ver as mudanças no seu código em tempo real, digite o seguinte comando no terminal:

`vtex link`

Com isso, o IO realiza uma série de tarefas por conta própria até que, se tudo ocorrer sem problemas, a seguinte mensagem é exibida no terminal:

__Build finished successfully__

Para confirmar que deu tudo certo, entre no browser e acesse a seguinte URL:

`https://{Workspace}--{AccountName}.myvtex.com/*`

- `{Workspace}` deve ser substituído pelo nome do seu workspace de desenvolvimento
- `{AccountName}` deve ser substituído pelo nome da sua loja
- O asterisco `*` deve ser substituído por qualquer path conhecido pela app

Entre no arquivo `Index.js` e altere alguma coisa. Salve e veja a mudança no browser!
