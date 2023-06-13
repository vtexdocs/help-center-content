---
title:  Perda de conteúdo, criado via Editor do Site, a partir da migração para o CMS
id: 3a5MlAoD2Z7Gu6HDS8wihD
status: PUBLISHED
createdAt: 2022-07-05T17:07:24.733Z
updatedAt: 2022-11-29T20:52:02.907Z
publishedAt: 2022-11-29T20:52:02.907Z
firstPublishedAt: 2022-07-05T17:07:25.091Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: perda-de-conteudo-criado-via-editor-do-site-a-partir-da-migracao-para-o-cms
kiStatus: Backlog
internalReference: 610533
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Toda mudança de conteúdo no Editor do site insere mudanças no arquivo content.json, que é armazenado em um balde na AWS S3. Alguns clientes relataram uma perda do conteúdo do Site Editor após alguns procedimentos comuns de atualização de temas.



## Simulação



O cenário é intermitente, no entanto, tem sido relatado em dois cenários diferentes:

**1. Ao promover um espaço de trabalho de produção para dominar:**
Os clientes relataram que ao promover um espaço de trabalho de produção, contendo mudanças nos componentes, para o ambiente mestre, houve uma perda de conteúdo em outros espaços de trabalho.

**2. Ao instalar uma nova versão em um espaço de trabalho de teste:**
Os clientes relataram que ao instalar uma nova versão temática em um espaço de trabalho de teste, o conteúdo das páginas da categoria foi excluído.


## Workaround



Abrir um ticket para uma tarefa interna de recuperação de conteúdo.

