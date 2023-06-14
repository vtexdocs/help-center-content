---
title: 'O envio simultâneo de mais de um arquivo existente não atualiza todos os arquivos no File Manager'
id: 3uuWWVR3g8hFuXnPQ2Yaa8
status: PUBLISHED
createdAt: 2021-09-27T20:50:23.329Z
updatedAt: 2022-12-22T20:41:03.382Z
publishedAt: 2022-12-22T20:41:03.382Z
firstPublishedAt: 2021-09-27T20:57:22.900Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: o-envio-simultaneo-de-mais-de-um-arquivo-existente-nao-atualiza-todos-os-arquivos-no-file-manager
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao enviar simultaneamente dois ou mais arquivos existentes no File Manager, apenas o primeiro será atualizado.

## Simulação

1. No Admin, clique no módulo **CMS**.
2. Clique em **Layout**.
3. Clique na pasta **CMS**.
4. Clique na pasta **Files Manager**.
5. Clique em uma das pastas do **Files Manager**.
6. Clique no botão `Add` e selecione dois ou mais arquivos com o mesmo nome de arquivos existentes.
7. Clique em `Save File`.

Depois disso, você receberá o seguinte aviso:

![File manager](//images.contentful.com/alneenqid6w5/4Z7tY3FKCDV1Cz6Whji6HI/d730b6accf6caeb81b373745b20c337d/image.png)

Isto significa que apenas um arquivo é identificado; os outros não estão sendo validados. Todos os arquivos são carregados, mas apenas um substituirá sua versão anterior.

## Workaround

Para contornar o problema, você pode atualizar um arquivo por vez.

