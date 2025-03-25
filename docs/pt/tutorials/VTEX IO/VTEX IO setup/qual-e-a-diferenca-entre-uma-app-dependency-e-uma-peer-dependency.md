---
title: 'Qual é a diferença entre uma app dependency  e uma peer dependency? '
id: 13co2PvHHnsDNBNyrWXXvM
status: ARCHIVED
createdAt: 2019-04-01T21:52:38.336Z
updatedAt: 2020-03-13T21:25:01.650Z
publishedAt: 
firstPublishedAt: 2019-04-01T22:00:09.913Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slugEN: what-is-the-difference-between-an-app-dependency-and-peerdependency
locale: pt
legacySlug: qual-e-a-diferenca-entre-uma-app-dependancy-e-uma-peer-dependancy
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

Embora ambas as dependências sejam tratadas de forma semelhante, a diferença está principalmente na semântica, dependendo do que acontece quando você tenta instalar um aplicativo que depende ou " peer depende" de outro.

## App dependency
Supondo que o app A depende do app B e o usuário instala o app A, isso significa que, o app B é necessário para que o app A funcione corretamente. Nesse caso, quando o usuário instala o app A em um workspace, o app B será automaticamente adicionado à dependency tree desse workspace

Quando um app depende de outro, você está dizendo que quer usar sua API, ou algum componente que a dependência exporta. Um exemplo disso é quando você importa algum componente do StyleGuide

Por exemplo:

`import {Button} de 'vtex.styleguide'`


## Peer Dependency

No caso de uma peer dependency, podemos configurar o app A para ser dependente do app B. Isso significa que o IO vai entender que o app B seja necessário para que o aplicativo A funcione também. Ele infere que o aplicativo B já deve estar instalado no workspace antes que A possa ser instalado.

Um app com peer dependency declara que o aplicativo não pode ser instalado sem uma dependência adicional sendo instalada.

Um exemplo seria o Admin do Pages, onde o usuário não pode instalá-lo sem primeiro instalar o `vtex.store`
`` `

{
  ...
  "peerDependencies": {
      "vtex.store": "2.x"
  }
  "dependências": {
      "vtex.styleguide": "9.x"
  }
}
  `` `
