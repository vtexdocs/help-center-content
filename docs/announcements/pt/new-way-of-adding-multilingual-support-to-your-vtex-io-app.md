---
title: Nova forma de organizar os arquivos de tradução em sua app IO
id: 5ihajfKsWkq6Mc0gm2cQUK
status: DRAFT
createdAt: 2018-12-13T19:55:38.654Z
updatedAt: 2020-03-13T21:24:39.328Z
publishedAt: 
contentType: updates
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slug: nova-forma-de-organizar-os-arquivos-de-traducao-em-sua-app-io
legacySlug: nova-forma-de-organizar-os-arquivos-de-traducao-em-sua-app-io
announcementImageID: 
announcementSynopsisPT: Com a nova versão do VTEX.IO, os arquivos JSON de tradução devem ficar em uma nova pasta, no diretório raiz.
---

Implementamos uma nova forma de organizar os arquivos de tradução, para que possamos atingir nossa visão de um VTEX.IO com um sistema de localização 100% customizavel.

Esse novo método usa o builder `messages 0.x` e requer uma nova estrutura de pastas. Nela, os arquivos JSON de tradução são colocados na pasta `messages`, que fica no diretório raiz.

A nova estrutura se tornará obrigatória em breve.  

## O que muda
__Antes, as pastas eram organizadas da seguinte maneira:__

```/
 /
 +-- react
     |
     +-- locales
         |
         +--en_US.json
         +--pt_BR.json
     +-- ...

```


__Com o novo formato de organização, as pastas deverão seguir o seguinte modelo:__

```/
 /
 +-- graphQL
 +-- react
 +-- messages
     |
     +--en_us.json
     +--pt_br.json
     +-- ...

```


## Qual o impacto
__Por enquanto, não há impacto.__ O método mais recente(`react/locales`) ainda funciona normalmente. Mas, __quando a nova versão for lançada, somente o método novo (usando o builder__ `messages 0.x` __e a nova estrutura de pastas) vai ser suportado__. 



## Como fazer a atualização
Para utilizar o novo método, basta seguir dois passos simples:

1. Atualize o `manifest.json` da sua app para incluir o builder `messages 0.x`.
2. Mova a pasta `locales` para a raiz e mude o nome dela para `messages`.
