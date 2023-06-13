---
title: Tipos de app - front-end (render) x back-end (service) x GraphQL
id: SEMAaDZ9YccEAsuuumCqQ
status: DRAFT
createdAt: 2017-11-22T15:53:58.850Z
updatedAt: 2020-03-06T13:55:14.854Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Others
author: 
slug: tipos-de-app-front-end-render-x-back-end-service-x-graphql
legacySlug: tipos-de-app-front-end-render-x-back-end-service-x-graphql
subcategory: 
---

E possível criar aplicações de front-end e back-end com o VTEX IO. Além disso, a plataforma permite usar GraphQL para mapear rotas e facilitar a comunicação entre front-end e back-end.


### Front-end

O __Render__ é um framework desenvolvido pela VTEX que permite criar apps de front-end com React e GraphQL de forma fácil, usando server-side rendering.

Com ele, portanto, você pode realizar alterações visuais na experiência do usuário.


### Back-end

O __Service__ é um serviço para aplicações backend. Ele define endpoints e funções de backend para atender a estes endpoints. Pode buscar ou alterar dados no banco de dados, por exemplo.

### GraphQL

O GraphQL é um framework desenvolvido recentemente. Ele facilita a comunicação entre o frontend e o backend declarando o que chamamos de "schemas", que funcionam como protocolos de comunicação.

Exemplo: por meio dos schemas GraphQL, o front-end sabe que se fizer uma chamada do tipo `getUser` ele vai chamar o endpoint `http://apps-graphql.vtex.aws-us-east-1.vtex.io/test/user/query/getUser?__v=0.9.1` e receber uma resposta do tipo `{name, email, address, phone_number}`.

Ou seja, além de "mapear rotas", o GraphQL facilita que o front-end faça chamadas a URLs complexas.

Como apps GraphQL definem tipos e campos que modelam os requests e responses trocados entre front-end e back-end, as chamadas ficam mais leves, o que leva a um ganho de performance.
