---
title: 'Como instalar um Service Worker'
id: 2H057iW0mQGguKAciwAuMe
status: PUBLISHED
createdAt: 2018-03-13T14:53:11.260Z
updatedAt: 2024-01-19T12:54:32.525Z
publishedAt: 2024-01-19T12:54:32.525Z
firstPublishedAt: 2018-03-13T17:48:34.728Z
contentType: tutorial
productTeam: Financial
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: how-to-install-a-service-worker
locale: pt
legacySlug: como-instalar-um-service-worker
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---


Service Worker é um script que seu navegador executa em segundo plano, separado da Web, possibilitando recursos como sincronização periódica, notificações push e até execução em modo offline.

Para criar o script, siga o passo a passo abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Ckeckout**, ou digite **Checkout** na barra de busca no topo da página.
2. Clique no ícone de <i class="fas fa-cog"></i> do site desejado.
3. Na aba `Código`, clique no botão `Novo`.
4. Em seguida, clique em `Arquivo`.
5. Preencha o nome do arquivo exatamente como: `service-worker.js`.
6. Clique  no botão `Criar`.
7. Programe a funcionalidade.
8. Clique em `Salvar`.

Apesar do arquivo se encontrar em `/arquivos/service-worker.js`, ele recebe o header `Service-Worker-Allowed` com valor `/`, o que permite interceptar requests da raiz do site.

Para maiores informações, consulte o [Web Fundamentals](https://developers.google.com/web/fundamentals/primers/service-workers/), do Google Developers.

### Artigos relacionados

- [Como transformar o site da minha loja em um PWA](https://help.vtex.com/pt/tutorial/como-transformar-o-site-da-minha-loja-em-um-pwa--3i8VmYeToAUGKgo2kKK6I2)

