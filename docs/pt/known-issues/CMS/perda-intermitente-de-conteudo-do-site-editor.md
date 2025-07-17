---
title: "Perda intermitente de conteúdo do Site Editor"
id: 3a5MlAoD2Z7Gu6HDS8wihD
status: PUBLISHED
createdAt: 2022-07-05T17:07:24.733Z
updatedAt: 2025-04-24T15:01:56.874Z
publishedAt: 2025-04-24T15:01:56.874Z
firstPublishedAt: 2022-07-05T17:07:25.091Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: perda-intermitente-de-conteudo-do-site-editor
locale: pt
kiStatus: Fixed
internalReference: 610533
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Cada alteração de conteúdo no Site Editor insere alterações no arquivo content.json, armazenado em um bucket no AWS S3 e no content_render.js. Alguns clientes relataram uma perda de conteúdo do Site Editor após alguns procedimentos padrão, como a promoção do espaço de trabalho.

O conteúdo do espaço de trabalho não é levado para o ambiente mestre após o processo de promoção. Como a política de promoção padrão para lidar com conflitos é "masterWins", o conteúdo do espaço de trabalho não é levado à produção em casos de conflito.

## Simulação


O cenário é intermitente. No entanto, ele foi relatado em dois cenários diferentes:

**1. Ao promover um espaço de trabalho de produção para mestre:**
Esse problema é novo e diferente do problema anterior que originou esse KI. Isso vem ocorrendo desde janeiro de 2024, quando introduzimos o `content_render.json`.  Este é o passo a passo em que normalmente esse problema ocorre:

1.1 Criação de um espaço de trabalho de produção;

1.2 Atualizar o conteúdo do espaço de trabalho. Uma nova referência a esse conteúdo é criada, apontando para um arquivo no S3 que é separado do mestre;

1.3 Atualizar o mestre; isso criará um conflito. A referência criada acima começa a apontar para o mestre, portanto, o problema ocorre. Ele só volta ao normal após a resolução do conflito;

1.4 Faça o processo de promoção no espaço de trabalho. Ele ainda apontará para o conteúdo mestre, mas invalidará o conteúdo do espaço de trabalho.



Lembre-se de que, nesse caso, o arquivo `content.json` e o arquivo `content_render.js` podem ter informações diferentes, de modo que o conteúdo só será "perdido" após a atualização de algo no editor do site. Isso significa que o conteúdo não será necessariamente perdido logo após a promoção do espaço de trabalho. Também é importante observar que a perda é apenas parcial (somente o conteúdo criado no espaço de trabalho é afetado).

**2. Ao instalar uma nova versão em um espaço de trabalho de teste:**
Os clientes relataram que, ao instalar uma nova versão do tema em um espaço de trabalho de teste, o conteúdo das páginas de categoria era excluído.

Isso normalmente acontece devido a alterações na estrutura do projeto, como caminhos de árvore. É importante lembrar que, se for necessária uma alteração no caminho da árvore, o conteúdo deverá ser adicionado novamente

## Workaround


N/A






