---
title: 'Service Worker já pode ser usado em todo seu potencial'
id: 5RuFcktluMeYWYWKww4au2
status: PUBLISHED
createdAt: 2018-03-15T18:22:49.955Z
updatedAt: 2019-12-31T15:13:49.926Z
publishedAt: 2019-12-31T15:13:49.926Z
contentType: updates
productTeam: Others
author: authors_24
slugEN: 2018-03-15-service-worker-files-can-now-operate-at-full-capacity
locale: pt
legacySlug: service-worker-ja-pode-ser-usado-em-todo-seu-potencial
announcementImageID: 'undefined'
announcementSynopsisPT: 'Em nova atualização da plataforma, arquivos Service Worker agora podem interceptar requests de toda a sua loja.'
---

O __Service Worker__ agora pode interceptar todos os requests da sua loja VTEX. Se antes esse script possuía uma atuação limitada na plataforma, agora incluímos o header `Service-Worker-Allowed` usando o valor `/` para aplicar todo seu potencial. Isso significa que seu website passa a ter as condições necessárias para contar com recursos como sincronização periódica, notificações push e até execução em modo off-line.

Na prática, a atualização das permissões do __Service Worker__ amplia as possibilidades da sua loja, sendo a maior delas poder operar como PWA (Progressive Web App). Essa solução permite que o usuário acesse um site como faz com um aplicativo, mas sem precisar baixar nada. Ele só precisa salvar o site na tela de início do smartphone para navegar, sem nem precisar estar conectado à internet para ver o conteúdo.

> ⚠️ **Atenção:**<br> A plataforma VTEX **não** possui features nativas para transformar sua loja em PWA. Ela apenas oferece as condições para que essa implementação seja feita.

Para saber como instalar o __Service Worker__ na sua loja, leia [este artigo do Help](/pt/docs/tutorials/como-instalar-um-service-worker).
