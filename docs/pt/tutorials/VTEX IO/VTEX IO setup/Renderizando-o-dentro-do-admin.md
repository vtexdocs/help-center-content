---
title: 'Renderizar o conteúdo da app dentro do admin'
id: 7dMDCQlF84iAy2QKkCoW6A
status: ARCHIVED
createdAt: 2018-06-06T19:08:57.429Z
updatedAt: 2020-08-17T14:20:55.283Z
publishedAt: 
firstPublishedAt: 2018-06-07T13:45:22.125Z
contentType: tutorial
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slugEN: bringing-app-content-into-the-admin-panel
locale: pt
legacySlug: Renderizando-o-dentro-do-admin
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

## Corrigir a URL

Após criar uma aplicação React, ela ainda não está integrada ao painel do Admin.

Para consertar isso, precisamos apontar a aplicação à URL correta.

Navegue até o projeto e abra o arquivo `pages.json`.

Adicionamos o `“admin/“` ao nome da página, assim como à rota. É importante também adicionar `“admin/“` ao início do nome de todas as extensoes que serão usadas. Seu `pages.json` deve ficar assim:

![2 pages](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/VTEX%20IO/VTEX%20IO%20setup/Renderizando-o-dentro-do-admin_1.png)

## Atualizar as dependências para usar o vtex.admin

Agora precisamos atualizar o arquivo manifest.json para listar o `vtex.admin` como dependência. Lembre-se que no VTEX IO sempre especificamos a versão que será ultilizada. O manifest.json deve ficar assim:

![3 manifest](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/VTEX%20IO/VTEX%20IO%20setup/Renderizando-o-dentro-do-admin_2.png)

## Os toques finais

Quando revisitamos a página, notamos que, apesar de a nossa app estar renderizando corretamente dentro do painel do Admin, a barra de loading parece não terminar de carregar.

Esta é uma boa oportunidade para aprender sobre como sua aplicação React pode se comunicar de forma mais sofisticada com o painel do Admin.

Usaremos o `componentDidMount()` para verificar que a string renderizou corretamente e comunicar ao painel para desligar o loading.

Basta navegar até `index.js` e adicionar o `componentDidMount()` acima do nosso render. Vai ficar assim:

![4 final touches](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/VTEX%20IO/VTEX%20IO%20setup/Renderizando-o-dentro-do-admin_3.png) 
![5 completo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/VTEX%20IO/VTEX%20IO%20setup/Renderizando-o-dentro-do-admin_4.png)
