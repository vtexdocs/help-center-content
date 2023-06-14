---
title: Como instalar um Service Worker
id: 2H057iW0mQGguKAciwAuMe
status: PUBLISHED
createdAt: 2018-03-13T14:53:11.260Z
updatedAt: 2023-04-05T17:55:03.904Z
publishedAt: 2023-04-05T17:55:03.904Z
firstPublishedAt: 2018-03-13T17:48:34.728Z
contentType: tutorial
productTeam: Financial
author: 7FpKZ0rc6k4WqeymES80cw
slug: como-instalar-um-service-worker
legacySlug: como-instalar-um-service-worker
subcategory: 
---

Service Worker é um script que seu navegador executa em segundo plano, separado da Web, possibilitando recursos como sincronização periódica, notificações push e até execução em modo off-line.

Para criar o script, siga o passo a passo abaixo:

1. No Admin VTEX, acesse o módulo __Portal__.
2. Clique no ícone de __Configurações__.
3. Depois, na aba __Código__.
4. Clique em __Novo__ e em seguida em __Arquivo__.
5. Inclua o nome do arquivo exatamente como: __service-worker.js__.
6. Programe a __funcionalidade__.
7. Para finalizar, clique em __Salvar__.

Apesar do arquivo se encontrar em `/files/service-worker.js`, ele recebe o header `Service-Worker-Allowed` com valor `/`, o que permite interceptar requests da raiz do site.

Para [maiores informações](https://developers.google.com/web/fundamentals/primers/service-workers/), consulte o Web Fundamentals, do Google Developers. 

### Artigos relacionados

- [Como transformar o site da minha loja em um PWA](https://help.vtex.com/pt/tutorial/como-transformar-o-site-da-minha-loja-em-um-pwa--3i8VmYeToAUGKgo2kKK6I2)
