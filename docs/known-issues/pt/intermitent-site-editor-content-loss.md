---
title: 'Perda intermitente de conteúdo do Site Editor'
id: 3a5MlAoD2Z7Gu6HDS8wihD
status: PUBLISHED
createdAt: 2022-07-05T17:07:24.733Z
updatedAt: 2024-03-21T20:37:27.369Z
publishedAt: 2024-03-21T20:37:27.369Z
firstPublishedAt: 2022-07-05T17:07:25.091Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: perda-intermitente-de-conteudo-do-site-editor
locale: pt
kiStatus: Scheduled
internalReference: 610533
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Cada alteração de conteúdo no Site Editor insere alterações no arquivo content.json, que é armazenado em um bucket no AWS S3. Alguns clientes relataram uma perda de conteúdo do Site Editor após alguns procedimentos comuns de atualizações de temas.

## Simulação


O cenário é intermitente, no entanto, foi relatado em dois cenários diferentes:

**1. Ao promover um espaço de trabalho de produção para o mestre:**
Os clientes relataram que, ao promover um espaço de trabalho de produção, contendo alterações em componentes, para o ambiente mestre, houve uma perda de conteúdo em outros espaços de trabalho.

**2. Ao instalar uma nova versão em um espaço de trabalho de teste:**
Os clientes relataram que, ao instalar uma nova versão de tema em um espaço de trabalho de teste, o conteúdo das páginas de categoria era excluído.



## Workaround


N/A





